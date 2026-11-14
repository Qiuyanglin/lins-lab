// Run after Hugo: node scripts/check-site.mjs [public-directory]
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'public');
if (!existsSync(root)) {
  console.error(`Build directory not found: ${root}. Run Hugo first.`);
  process.exit(1);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(root);
// Compare exact names even on Windows: GitHub Pages paths are case-sensitive.
const relative = file => path.relative(root, file).split(path.sep).join('/');
const published = new Set(files.map(relative));
const errors = new Set();
const report = (file, message) => errors.add(`${file}: ${message}`);
const hosts = new Set(['www.linqiuyang.com', 'linqiuyang.com']);

function decodeEntities(value) {
  const named = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' };
  return value.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (_, entity) => {
    const lower = entity.toLowerCase();
    return lower[0] !== '#' ? named[lower] : String.fromCodePoint(
      lower[1] === 'x' ? parseInt(lower.slice(2), 16) : parseInt(lower.slice(1), 10),
    );
  });
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return match ? match[1] ?? match[2] ?? match[3] : null;
}

function checkLink(file, value, label) {
  if (!value || /^(?:#|mailto:|tel:|data:|javascript:)/i.test(value.trim())) return;
  try {
    const url = new URL(decodeEntities(value), `https://www.linqiuyang.com/${file}`);
    if (!/^https?:$/.test(url.protocol) || !hosts.has(url.hostname)) return;
    const target = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const index = `${target.replace(/\/$/, '')}${target ? '/' : ''}index.html`;
    if (!published.has(target) && !published.has(index)) {
      report(file, `${label}="${value}" -> missing ${target || 'index.html'}`);
    }
  } catch (error) {
    report(file, `invalid ${label}="${value}" (${error.message})`);
  }
}

const htmlFiles = files.filter(file => file.endsWith('.html'));
for (const full of htmlFiles) {
  const file = relative(full);
  const html = readFileSync(full, 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style|textarea|template)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '');
  for (const [tag, name] of html.matchAll(/<(a|link|img|source)\b[^>]*>/gi)) {
    if (/^(a|link)$/i.test(name)) checkLink(file, attribute(tag, 'href'), 'href');
    if (/^(img|source)$/i.test(name)) {
      checkLink(file, attribute(tag, 'src'), 'src');
      const srcset = attribute(tag, 'srcset');
      if (srcset && !srcset.trim().startsWith('data:')) {
        for (const candidate of srcset.split(',')) {
          checkLink(file, candidate.trim().split(/\s+/)[0], 'srcset');
        }
      }
    }
  }
}

for (const prefix of ['', 'en/']) {
  const file = `${prefix}index.json`;
  try {
    const data = JSON.parse(readFileSync(path.join(root, file), 'utf8'));
    const records = Array.isArray(data) ? data : Object.values(data);
    const news = records.find(record => {
      const text = JSON.stringify(record);
      return text.includes(`/${prefix}post/2026xinli/`) && /芯粒|chiplet/i.test(text);
    });
    if (!news) report(file, 'missing searchable ICCC news (2026xinli URL and 芯粒/Chiplet keyword)');
    for (const record of records) {
      if (/\/(?:event\/example|tour)(?:\/|["?#])/i.test(JSON.stringify(record))) {
        report(file, 'template record found: remove event/example or tour from the search index');
      }
    }
  } catch (error) {
    report(file, `search index missing or invalid JSON (${error.message})`);
  }

  const home = `${prefix}index.html`;
  try {
    const html = readFileSync(path.join(root, home), 'utf8');
    for (const marker of [/\bMe\b/, /GetResearchDev/i, /A highly-customizable Hugo research group theme/i]) {
      if (marker.test(html)) report(home, `template text remains: ${marker.source}`);
    }
  } catch (error) {
    report(home, `homepage missing (${error.message})`);
  }
}

if (errors.size) {
  console.error(`Site check failed (${errors.size} issues):\n${[...errors].map(error => `- ${error}`).join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Site check passed: ${htmlFiles.length} HTML files, local links, and both language search indexes.`);
}
