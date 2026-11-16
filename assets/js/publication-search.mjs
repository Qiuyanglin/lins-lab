// Shared by the publication list and site-wide search.
export function normalizePublicationText(value = '') {
  return String(value)
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/https?:\/\/(?:dx\.)?doi\.org\//g, '')
    .replace(/[µμ]/g, 'u')
    .replace(/ω/g, 'ohm')
    .replace(/[δ∆]/g, 'delta')
    .replace(/σ/g, 'sigma')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

export function publicationMatches(text, query) {
  const words = normalizePublicationText(query).split(/\s+/).filter(Boolean);
  const searchable = normalizePublicationText(text);
  return words.every(word => searchable.includes(word));
}

export function escapeSearchResultText(value = '') {
  const entities = {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'};
  return String(value).replace(/[&<>"']/g, char => entities[char]);
}

export function searchWithExactFallback(records, query, searchFuzzy, maxPatternLength = 32) {
  if (!normalizePublicationText(query)) return [];
  const exact = records.filter(record => publicationMatches(record.text, query));
  if (exact.length) return exact.map(record => ({item: record.item, matches: []}));
  // Older Fuse versions reject patterns longer than this limit.
  return query.length <= maxPatternLength ? searchFuzzy(query) : [];
}
