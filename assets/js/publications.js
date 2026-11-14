// Progressive enhancement: every publication is readable without JavaScript.
const root = document.querySelector('[data-publications]');
if (root) {
  const form = root.querySelector('[data-pub-filters]');
  const query = form.querySelector('[data-pub-query]');
  const year = form.querySelector('[data-pub-year]');
  const type = form.querySelector('[data-pub-type]');
  const count = root.querySelector('[data-pub-count]');
  const empty = root.querySelector('[data-pub-empty]');
  const groups = [...root.querySelectorAll('[data-pub-group]')];
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase().trim();
  const entries = [...root.querySelectorAll('[data-pub-entry]')].map(element => ({
    element,
    text: normalize(element.dataset.search),
    year: element.dataset.year,
    type: element.dataset.type,
  }));
  let timer;
  let composing = false;

  function update() {
    const words = normalize(query.value).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const entry of entries) {
      const matches = (!year.value || year.value === entry.year)
        && (!type.value || type.value === entry.type)
        && words.every(word => entry.text.includes(word));
      entry.element.hidden = !matches;
      if (matches) visible++;
    }
    for (const group of groups) {
      group.hidden = !group.querySelector('[data-pub-entry]:not([hidden])');
    }
    count.textContent = count.dataset.format
      .replace('{count}', visible)
      .replace('{total}', entries.length);
    empty.hidden = visible !== 0;
  }

  query.addEventListener('compositionstart', () => { composing = true; clearTimeout(timer); });
  query.addEventListener('compositionend', () => { composing = false; clearTimeout(timer); update(); });
  query.addEventListener('input', event => {
    clearTimeout(timer);
    if (!composing && !event.isComposing) timer = setTimeout(update, 120);
  });
  for (const select of [year, type]) select.addEventListener('change', () => { clearTimeout(timer); update(); });
  form.addEventListener('submit', event => { event.preventDefault(); clearTimeout(timer); if (!composing) update(); });
  form.addEventListener('reset', () => {
    clearTimeout(timer);
    // The reset event fires before the browser restores form values.
    setTimeout(() => { composing = false; update(); query.focus(); }, 0);
  });
  form.hidden = false;
  update();
}
