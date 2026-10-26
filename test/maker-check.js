/* Quiz Maker check, evaluated in the page by test/browser-check.js --maker.
   1. On a page loaded at index.html#maker, checks that the Quiz Maker screen is open, chooses one main set and one set per language (a fresh Latin set among them),
      turns on two doctrine questions, makes the quiz through the buttons, and checks that every
      question rendered with a stem and that the key has one entry per question, none empty.
   2. Renders every item of every exercise the maker lists through ArsMaker.paperOf and checks
      that each has a stem and a key. */
(async () => {
  const out = { summary: '', problems: [] };
  const wait = ms => new Promise(r => setTimeout(r, ms));
  if (!document.getElementById('scr-maker').classList.contains('active')) out.problems.push('maker: #maker did not open the screen');
  const rows = [...document.querySelectorAll('#qz-sets .qz-row')];
  const pick = [rows.find(r => r.dataset.id === 'v.ex.agreement')];
  ['en', 'la', 'grc', 'es', 'de', 'fr'].forEach(code => {
    const want = code === 'la' ? 'lang.iii-decl.la/noun-ex' : null;
    pick.push(rows.find(r => want ? r.dataset.id === want : r.dataset.id.indexOf('.' + code + '/') > 0));
  });
  if (pick.some(r => !r)) out.problems.push('maker: a set to choose is missing from the list');
  pick.filter(Boolean).forEach(r => { r.querySelector('input[type=checkbox]').checked = true; r.querySelector('.qz-n').value = 4; });
  document.getElementById('qz-doc-on').click();
  document.getElementById('qz-gen').click();
  for (let k = 0; k < 50 && !document.querySelector('#quiz-paper li.qitem'); k++) await wait(100);
  await wait(100);
  const qs = [...document.querySelectorAll('#quiz-paper li.qitem')];
  const keys = [...document.querySelectorAll('#quiz-paper li.keyitem')];
  if (!qs.length) out.problems.push('maker: no questions rendered: ' + document.getElementById('qz-status').textContent);
  if (qs.length !== keys.length) out.problems.push(`maker: ${qs.length} questions but ${keys.length} key entries`);
  qs.forEach((q, k) => {
    if (!q.querySelector('.qstem') || !q.querySelector('.qstem').textContent.trim()) out.problems.push(`maker: question ${k + 1} has no stem`);
    const ka = keys[k] && keys[k].querySelector('.ka');
    if (!ka || !ka.textContent.trim()) out.problems.push(`maker: question ${k + 1} has no key`);
  });
  const sets = new Set(qs.map(q => q.querySelector('.qsetline').textContent));
  const quiz = `${qs.length} questions from ${sets.size} sets`;

  let n = 0;
  for (const s of ArsMaker.allSets()){
    let ex;
    try { ex = await loadEx(s.id); } catch (e) { out.problems.push(s.id + ': ' + e.message); continue; }
    const items = typeof ex.fresh === 'function' ? ex.fresh(20) : (ex.items || []);
    if (!items.length) out.problems.push(s.id + ': no items');
    items.forEach(it => {
      n++;
      let p;
      try { p = ArsMaker.paperOf(it); } catch (e) { out.problems.push(`${it.id}: ${e.message}`); return; }
      const d = document.createElement('div'); d.innerHTML = p.stem + p.body;
      if (!d.textContent.trim()) out.problems.push(`${it.id}: nothing on paper`);
      const kd = document.createElement('div'); kd.innerHTML = p.key;
      if (!kd.textContent.trim()) out.problems.push(`${it.id}: empty key (type ${it.type})`);
    });
  }
  out.summary = `${quiz}; ${n} items of ${ArsMaker.allSets().length} sets rendered for paper.`;
  goHome();
  return out;
})()
