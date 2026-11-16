// A static BibTeX download and readable citation remain available without JavaScript.
for (const widget of document.querySelectorAll('[data-citation-widget]')) {
  const button = widget.querySelector('[data-copy-citation]');
  const citation = widget.querySelector('[data-citation-text]');
  const status = widget.querySelector('[data-citation-status]');
  const manual = widget.querySelector('.pub-citation-manual');
  if (!button || !citation || !status || !manual) continue;
  button.hidden = false;
  button.addEventListener('click', async () => {
    const text = citation.textContent.trim();
    status.textContent = '';
    button.disabled = true;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      manual.hidden = true;
      status.textContent = button.dataset.copied;
    } catch {
      // Selection gives keyboard and touch users a usable fallback when access is denied.
      manual.value = text;
      manual.hidden = false;
      manual.focus();
      manual.select();
      manual.setSelectionRange(0, text.length);
      status.textContent = button.dataset.copyFallback;
    } finally {
      button.disabled = false;
    }
  });
}
