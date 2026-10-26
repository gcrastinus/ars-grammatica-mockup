/* Quiz Maker, hidden language, evaluated in the page by test/browser-check.js --maker.
   On index.html#maker opened WITHOUT ?preview=es, a hidden language (Spanish) must not appear in the
   Show filter and none of its sets may be listed, although its checkbox is checked in the markup. */
(async () => {
  const out = { summary: '', problems: [] };
  const wait = ms => new Promise(r => setTimeout(r, ms));
  for (let k = 0; k < 30 && !document.querySelector('#qz-sets .qz-row'); k++) await wait(100);
  const rows = [...document.querySelectorAll('#qz-sets .qz-row')];
  const box = document.querySelector('#qz-langs input[value="es"]');
  if (!box || !box.parentElement.hidden) out.problems.push('maker (no preview): the Spanish checkbox is not hidden');
  const es = rows.filter(r => /^lang\.[a-z-]+\.es\//.test(r.dataset.id));
  if (es.length) out.problems.push('maker (no preview): ' + es.length + ' Spanish sets are listed, e.g. ' + es[0].dataset.id);
  if (!rows.some(r => /^lang\.[a-z-]+\.fr\//.test(r.dataset.id))) out.problems.push('maker (no preview): French sets are missing');
  out.summary = `${rows.length} sets listed without preview, ${es.length} of them Spanish.`;
  return out;
})()
