// Run after Hugo: node scripts/check-publication-features.mjs <build-directory>
import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {publicationMatches} from '../assets/js/publication-search.mjs';

const root = path.resolve(process.argv[2] || 'public');
const metadata = JSON.parse(await readFile('data/publications.json', 'utf8'));
const slugs = (await readdir('content/publication', {withFileTypes:true})).filter(entry => entry.isDirectory()).map(entry => entry.name);
assert(slugs.length > 0);
for (const slug of Object.keys(metadata)) assert(slugs.includes(slug),'Metadata refers to a missing publication: '+slug);

// Read balanced braced fields, including escaped braces and protected title case.
function bibField(bibtex, name) {
  const start = bibtex.match(new RegExp('\\b' + name + '\\s*=\\s*\\{'));
  assert(start, 'Missing BibTeX field ' + name);
  let depth = 1;
  let value = '';
  for (let i=start.index+start[0].length;i<bibtex.length;i++) {
    const char = bibtex[i];
    if (char === '\\') {
      value += char + (bibtex[++i] || '');
    } else if (char === '{') {
      depth++;
      value += char;
    } else if (char === '}') {
      if (--depth === 0) return value;
      value += char;
    } else value += char;
  }
  throw new Error('Unbalanced BibTeX field ' + name);
}

for (const slug of slugs) {
  const entry = metadata[slug];
  const bibtex = await readFile(path.join(root,'citations',slug+'.bib'),'utf8');
  assert(bibtex.includes(`{linlab-${slug},`),slug);
  assert(!/通信|通讯|corresponding author/i.test(bibtex),slug);
  const names = bibField(bibtex,'author').split(' and ');
  assert(names.every(name=>name.trim()),'Nonempty author names: '+slug);
  assert(/^\d{4}$/.test(bibField(bibtex,'year')),'Year: '+slug);
  assert(bibField(bibtex,'title').startsWith('{'),'Protected title case: '+slug);
  if (entry) {
    assert(bibtex.startsWith(`@${entry.citation_type}{linlab-${slug},`),slug);
    assert.equal(names.length,entry.authors.length,'Author count: '+slug);
    assert.equal(bibField(bibtex,'year'),String(entry.year),'Year: '+slug);
    if(entry.doi) assert.equal(bibField(bibtex,'doi'),entry.doi,'DOI: '+slug);
    if(entry.article_number) assert.equal(bibField(bibtex,'eid'),String(entry.article_number),'Article number: '+slug);
    for (const field of ['journal','booktitle','volume','number','pages','publisher','school','series','note','howpublished']) {
      if(entry[field]) bibField(bibtex,field);
    }
  }
}

const scienceChina = 'power-and-data-telemetry-over-a-single-inductive-link-2023';
assert((await readFile(path.join(root,'citations',scienceChina+'.bib'),'utf8')).includes('70\\%'),'Literal percent must be escaped in BibTeX');
assert((await readFile(path.join(root,'citations',scienceChina+'.bib'),'utf8')).includes('Chen, Mingyi'),'Use verified complete author names');
const vlsi2019 = 'a-196w-reconfigurable-light-to-digital-converter-with-119db-dynamic-ra-2019';
assert.equal(bibField(await readFile(path.join(root,'citations',vlsi2019+'.bib'),'utf8'),'pages'),'C58--C59','Keep page prefixes while using a BibTeX range');
for(const language of ['', 'en']) {
  const index = JSON.parse(await readFile(path.join(root,language,'index.json'),'utf8'));
  const papers = index.filter(item => item.section === 'publication' && item.kind === 'page');
  assert.equal(papers.length,slugs.length);
  const target = papers.find(item => item.relpermalink.includes(scienceChina));
  assert(target);
  for(const query of ['Mingyi Chen','Q.Lin','https://doi.org/10.1007/s11432-022-3563-9']) {
    assert(publicationMatches(target.publication_search,query),language+': '+query);
  }
  assert(papers.some(item => publicationMatches(item.publication_search,'纳米孔')));
  assert(papers.some(item => publicationMatches(item.publication_search,'ADC')));
  const list = await readFile(path.join(root,language,'publication/index.html'),'utf8');
  assert.equal((list.match(/data-citation-widget/g)||[]).length,slugs.length);
  const detail = await readFile(path.join(root,language,'publication',scienceChina,'index.html'),'utf8');
  assert(detail.includes('data-copy-citation') && detail.includes('/citations/'+scienceChina+'.bib'));
}
console.log(`Publication checks passed: ${slugs.length} BibTeX records, verified author counts, both search indexes, bilingual citation controls, and full-name/DOI/topic queries.`);
