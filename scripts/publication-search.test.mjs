import test from 'node:test';
import assert from 'node:assert/strict';
import {normalizePublicationText, publicationMatches, escapeSearchResultText, searchWithExactFallback} from '../assets/js/publication-search.mjs';

const paper = 'A 70%-power transmission efficiency. M. Chen Q. Lin Mingyi Chen Qiuyang Lin Science China Information Sciences 10.1007/s11432-022-3563-9 biomedical implants 植入式 生物医疗';

test('finds full names, initials, publisher names, and bilingual keywords', () => {
  for (const query of ['Mingyi Chen', 'Q.Lin', 'q lin', 'science china', '生物医疗', 'implant biomedical']) {
    assert(publicationMatches(paper, query), query);
  }
  assert(!publicationMatches(paper, 'Mingyi Zhao'));
  assert(!publicationMatches(paper, '纳米孔'));
});

test('accepts long DOI URLs and punctuation without broadening them to other DOIs', () => {
  assert(publicationMatches(paper, 'https://doi.org/10.1007/s11432-022-3563-9'));
  assert(publicationMatches(paper, 'https://dx.doi.org/10.1007/S11432-022-3563-9'));
  assert(!publicationMatches(paper, '10.1007/s11432-022-9999-9'));
});

test('normalizes accents, Unicode units, and dash variants', () => {
  assert(publicationMatches('Benjamin Calmé 97 μA 400 GΩ 13-bit SAR ADC', 'Calme 97 uA'));
  assert(publicationMatches('13-bit SAR ADC', '13–bit sar'));
  assert.equal(normalizePublicationText('Ｑ．Ｌｉｎ'), 'q lin');
});

test('empty input restores all entries and input is treated as text', () => {
  assert(publicationMatches(paper, '  '));
  assert(!publicationMatches(paper, '<script>alert(1)</script>'));
  assert(!publicationMatches(paper, 'Mingyi nonexistentkeyword'));
});

test('search result text cannot inject markup or break link attributes', () => {
  assert.equal(escapeSearchResultText('<img src=x onerror="alert(1)">'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');
  assert.equal(escapeSearchResultText('Chen & Lin, 70% $&'), 'Chen &amp; Lin, 70% $&amp;');
  assert.equal(escapeSearchResultText('/paper/?q=" onmouseover="bad'), '/paper/?q=&quot; onmouseover=&quot;bad');
});

test('an author-name query returns relevant exact records without an unrelated fuzzy tail', () => {
  const records = [
    {item:{objectID:'science-china'},text:paper},
    {item:{objectID:'ppg'},text:'Chest PPG Qiuyang Lin Mingyi Chen'},
    {item:{objectID:'other-chen'},text:'ADC Chen Wang Qiuyang Lin'},
    {item:{objectID:'other-mingyi'},text:'Mingyi Zhang publications'},
  ];
  let fuzzyCalled = false;
  const results = searchWithExactFallback(records, 'Mingyi Chen', () => {
    fuzzyCalled = true;
    return [{item:{objectID:'other-chen'}},{item:{objectID:'other-mingyi'}}];
  });
  assert.deepEqual(results.map(result=>result.item.objectID),['science-china','ppg']);
  assert.equal(fuzzyCalled,false);
});

test('a misspelling still uses fuzzy search when no all-token match exists', () => {
  const record = {item:{objectID:'science-china'},text:paper};
  const fuzzyResult = [{item:record.item,matches:[{key:'title'}]}];
  let searched;
  assert.equal(searchWithExactFallback([record],'Minygi Chen',query=>{searched=query;return fuzzyResult;}),fuzzyResult);
  assert.equal(searched,'Minygi Chen');
});

test('long DOI queries remain exact and never reach the limited fuzzy engine', () => {
  const records = [{item:{objectID:'science-china'},text:paper}];
  const fuzzy = () => { throw new Error('Pattern too long'); };
  assert.equal(searchWithExactFallback(records,'https://doi.org/10.1007/s11432-022-3563-9',fuzzy).length,1);
  assert.deepEqual(searchWithExactFallback(records,'https://doi.org/10.1007/s11432-022-9999-9',fuzzy),[]);
  assert.deepEqual(searchWithExactFallback(records,'   ',fuzzy),[]);
});
