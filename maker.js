/* ---------- Quiz Maker (for instructors) ----------
   A printable quiz with an answer key, made from the written exercise sets of the course and of the
   particular languages. The instructor chooses sets, the form of each (A, B, C, or any), and how many
   questions to take from it. Questions keep their stored order (easy to hard) and are never repeated in
   one quiz. A set that is drawn fresh (the generated Latin sittings) is drawn by its own generator.
   Doctrine questions come from the question points of the decks behind the chosen sets: the defining
   cards of each deck first, then the others, one deck at a time. Language exercises are loaded only
   when they are chosen. The paper is printed from #quiz-paper; the key starts on a new page. */
(function(){
'use strict';
const SECTION_ORDER = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi'];
const LANG_ORDER = ['en', 'la', 'grc', 'es', 'de', 'fr'];
/* Spanish's checkbox is hidden unless the page was opened with ?preview=es (see LANGS in course.js). */
(() => { try {
  if ((new URLSearchParams(location.search).get('preview') || '').split(',').indexOf('es') < 0) return;
  const box = document.querySelector('#qz-langs input[value="es"]');
  if (box && box.parentElement) box.parentElement.hidden = false;
} catch (e) {} })();
const LANG_NAME = { en:'English', la:'Latin', grc:'Greek', es:'Spanish', de:'German', fr:'French' };
const BAR_ORDER = ['ii', 'iii-decl', 'iii-indecl', 'iv', 'v', 'vi', 'vii', 'ix'];
const BAR_SECTION = { 'ii':'ii', 'iii-decl':'iii', 'iii-indecl':'iii', 'iv':'iv', 'v':'v', 'vi':'vi', 'vii':'vii', 'ix':'ix' };
const ROMAN = { i:'I', ii:'II', iii:'III', iv:'IV', v:'V', vi:'VI', vii:'VII', viii:'VIII', ix:'IX', x:'X', xi:'XI' };

function plain(html){
  const d = document.createElement('div');
  d.innerHTML = String(html == null ? '' : html);
  return (d.textContent || '').replace(/\s+/g, ' ').trim();
}
function shuffle(a){
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

/* ---------- the list of sets ---------- */
function mainSets(){
  const files = ARS.exerciseFiles || [];
  const out = [];
  (ARS.structure || []).forEach(sec => {
    (sec.items || []).forEach(it => {
      const exId = it.kind === 'review' ? it.id : (ARS.deckEx || {})[it.id];
      if (!exId || files.indexOf(exId) < 0) return;
      out.push({ id: exId, title: it.title, section: sec.id, lang: '', kind: it.kind === 'review' ? 'Section review' : 'Exercise' });
    });
  });
  return out;
}
function langSets(){
  const out = [];
  BAR_ORDER.forEach(bar => {
    LANG_ORDER.forEach(code => {
      const sc = ARS.languages && ARS.languages['lang.' + bar + '.' + code];
      if (!sc) return;
      (sc.items || []).forEach(it => {
        if (it.kind !== 'exercise' || !it.built) return;
        out.push({ id: it.id, title: it.title, section: BAR_SECTION[bar], lang: code, bar, kind: 'Exercise' });
      });
    });
  });
  return out;
}
function allSets(){
  const rank = s => SECTION_ORDER.indexOf(s.section) * 10 + (s.lang ? 1 + LANG_ORDER.indexOf(s.lang) : 0);
  return mainSets().concat(langSets()).map((s, k) => ({ s, k })).sort((a, b) => rank(a.s) - rank(b.s) || a.k - b.k).map(x => x.s);
}

function buildSetList(){
  const box = document.getElementById('qz-sets');
  const secF = document.getElementById('qz-sec').value;
  const langs = new Set([...document.querySelectorAll('#qz-langs input:checked')].map(x => x.value));
  const keep = new Map([...box.querySelectorAll('.qz-row')].map(r => [r.dataset.id, {
    on: r.querySelector('input[type=checkbox]').checked,
    n: r.querySelector('.qz-n').value,
    set: r.querySelector('.qz-form') ? r.querySelector('.qz-form').value : ''
  }]));
  let html = '';
  let group = '';
  allSets().forEach(s => {
    if (secF && s.section !== secF) return;
    if (!langs.has(s.lang || 'main')) return;
    const g = s.lang ? `${ROMAN[s.section]} · ${LANG_NAME[s.lang]}` : `${ROMAN[s.section]} · The course`;
    if (g !== group){ html += `<div class="maker-act">${g}</div>`; group = g; }
    const prev = keep.get(s.id) || {};
    const fresh = !!(ARS.exercises && ARS.exercises[s.id] && typeof ARS.exercises[s.id].fresh === 'function');
    html += `<div class="maker-rowwrap qz-row" data-id="${s.id}">
      <label class="maker-row"><input type="checkbox"${prev.on ? ' checked' : ''}>
        <span class="nm">${s.title}<span class="meta">${s.kind}${fresh ? ', drawn fresh each time' : ''}</span></span></label>
      <select class="qz-form" aria-label="Set to draw from"${fresh ? ' hidden' : ''}>
        ${['any', 'A', 'B', 'C'].map(v => `<option value="${v}"${(prev.set || 'any') === v ? ' selected' : ''}>${v === 'any' ? 'Any set' : 'Set ' + v}</option>`).join('')}
      </select>
      <input class="qz-n" type="number" min="1" max="40" value="${prev.n || 5}" aria-label="Number of questions">
    </div>`;
  });
  box.innerHTML = html || '<p class="maker-status">No sets match these filters.</p>';
}

function openMaker(){
  if (location.hash !== '#maker') history.replaceState(null, '', '#maker');
  buildSetList();
  show('scr-maker');
}

/* ---------- drawing the questions ---------- */
function sample(items, n){
  if (items.length <= n) return items.slice();
  const idx = shuffle(items.map((_, k) => k)).slice(0, n).sort((a, b) => a - b);
  return idx.map(k => items[k]);
}
function fingerprint(it){
  return plain(it.prompt) + '|' + plain(it.passage || '') + '|' + (it.tokens || []).join(' ') + '|' + (it.entries || []).join(' ');
}
async function drawSet(spec, seen){
  const ex = await loadEx(spec.id);
  let pool;
  if (typeof ex.fresh === 'function'){
    pool = ex.fresh(Math.max(spec.n * 3, 20));
  } else if (spec.set === 'any'){
    const order = { A:0, B:1, C:2 };
    pool = (ex.items || []).slice().sort((a, b) => (order[a.set] ?? 3) - (order[b.set] ?? 3));
  } else {
    pool = itemsForSet(ex, spec.set);
  }
  pool = pool.filter(it => !(it.id && seen.has(it.id)) && !seen.has(fingerprint(it)));
  let chosen = typeof ex.fresh === 'function' ? pool.slice(0, spec.n) : sample(pool, spec.n);
  chosen.forEach(it => { if (it.id) seen.add(it.id); seen.add(fingerprint(it)); });
  if (chosen.some(it => it.passageRef && !it.passage)) chosen = await withPassages(ex, chosen);
  return { ex, items: chosen };
}

/* A passage question in Section IX names its passage by passageRef: the opening panel of the deck the
   set is opened from. The paper prints that panel's passage and translation (not its context) with the
   panel title as the source line. */
async function withPassages(ex, items){
  let deck = null;
  try { deck = await loadDeck(ex.openedFrom || ex.id.replace(/-ex$/, '')); } catch (e) { return items; }
  return items.map(it => {
    const p = it.passageRef && !it.passage && (deck.panels || []).find(x => x.id === it.passageRef);
    if (!p) return it;
    const body = String(p.body).replace(/<p><strong>Context\.<\/strong>[\s\S]*?<\/p>/g, '');
    return Object.assign({}, it, { passage: body, passageSrc: p.title });
  });
}

/* ---------- doctrine questions ---------- */
function decksFor(exId){
  const out = [];
  Object.keys(ARS.deckEx || {}).forEach(d => { if (ARS.deckEx[d] === exId) out.push(d); });
  return out;
}
function isOpenPanel(p){
  return /left open|later study|before the drill|how to use/i.test(plain(p.title || ''));
}
async function pickDoctrine(exIds, n){
  const deckIds = [];
  exIds.forEach(id => decksFor(id).forEach(d => { if (deckIds.indexOf(d) < 0) deckIds.push(d); }));
  const lists = [];
  for (const d of deckIds){
    let deck;
    try { deck = await loadDeck(d); } catch (e) { continue; }
    const qps = (deck.panels || []).map((p, k) => ({ p, k })).filter(x => x.p.qp && x.p.qp.variants && !isOpenPanel(x.p));
    const major = qps.filter(x => x.k < 2), rest = qps.filter(x => x.k >= 2);
    lists.push({ deck, queue: major.concat(rest) });
  }
  const picked = [];
  let round = 0;
  while (picked.length < n && lists.some(l => l.queue.length)){
    const l = lists[round % lists.length];
    if (l.queue.length){
      const x = l.queue.shift();
      const v = x.p.qp.variants[Math.floor(Math.random() * x.p.qp.variants.length)];
      picked.push({ setTitle: l.deck.title, item: { type: 'mc', prompt: v.prompt, options: v.options, answer: v.answer, explain: v.explain }, doctrine: true });
    }
    round++;
  }
  return picked;
}

/* ---------- one question on paper, and its key ---------- */
function paperOf(it){
  const out = { instr: '', stem: `<div class="q-prompt">${it.prompt || ''}</div>`, body: '', key: '', explain: it.explain || '' };
  const t = it.type || (it.options ? 'mc' : '');
  if (t === 'mc' || t === 'mc-marked' || t === 'passage-mc'){
    const order = shuffle(it.options.map((_, k) => k));
    out.body = '<ol class="ch">' + order.map(k => `<li>${it.options[k]}</li>`).join('') + '</ol>';
    const pos = order.indexOf(it.answer);
    out.key = `(${LETTERS[pos]}) ${it.options[it.answer]}`;
  } else if (t === 'identify' && Array.isArray(it.answer)){
    out.instr = 'Underline every word asked for.';
    out.body = `<div class="qz-tokens">${(it.tokens || []).join(' ')}</div>`;
    out.key = it.answer.map(j => plain(it.tokens[j])).join(', ');
  } else if (t === 'identify'){
    out.instr = 'Circle the letter of the word asked for.';
    out.body = '<ol class="ch">' + (it.tokens || []).map(x => `<li>${x}</li>`).join('') + '</ol>';
    out.key = `(${LETTERS[it.answer]}) ${plain(it.tokens[it.answer])}`;
  } else if (t === 'sort'){
    out.instr = 'Write beside each entry the letter of the group it belongs to.';
    out.body = `<div class="qz-bins">${(it.bins || []).map((b, k) => `<span>(${LETTERS[k]}) ${b}</span>`).join(' ')}</div>` +
      '<ul class="qz-entries">' + (it.entries || []).map(e => `<li><span class="qz-blank"></span> ${e}</li>`).join('') + '</ul>';
    out.key = (it.entries || []).map((e, r) => `${plain(e)}: (${LETTERS[it.answer[r]]}) ${plain(it.bins[it.answer[r]])}`).join('; ');
  } else if (t === 'count' || t === 'form' || t === 'divide' || t === 'transform'){
    out.body = t === 'transform' ? '<div class="work"></div>' : '<div class="ansline"></div>';
    const acc = acceptedOf(it);
    const also = alsoAccepted(it);
    out.key = (acc[0] || '') + (also.length ? ` <span class="kalso">Also accepted: ${also.join('; ')}.</span>` : '');
  } else if (t === 'copy'){
    out.instr = 'Copy the passage word for word on the lines.';
    out.stem = `<div class="q-prompt">${it.prompt || ''}</div><div class="qz-passage">${it.text || ''}</div>`;
    out.body = '<div class="work tall"></div>';
    out.key = 'A copy that matches the passage word for word.';
  } else if (t === 'mark'){
    out.body = `<div class="qz-tokens">${(it.tokens || []).join(' ')}</div>`;
    out.key = arrowLines(it.tokens || [], it.analysis || []).replace(/\n/g, '; ');
  } else if (t === 'analysis'){
    out.instr = 'Parse each word, and draw an arrow from each word to the word on which it depends.';
    out.body = `<div class="qz-tokens">${(it.tokens || []).join(' ')}</div>` +
      '<ul class="qz-parse">' + (it.tokens || []).map(x => `<li><span>${plainToken(x)}</span><span class="qz-line"></span></li>`).join('') + '</ul>';
    const a = it.analysis || {};
    out.key = analysisText(it.tokens || [], a.parse || [], a.arrows || []).replace(/\n/g, '; ');
  } else {
    out.body = '<div class="ansline"></div>';
    out.key = plain(it.explain || '');
  }
  if (it.why){
    out.body += `<div class="qz-why">${it.why.prompt}</div><div class="work"></div>`;
    out.explain += `<div class="kx"><b>Model reason.</b> ${it.why.model}</div>`;
  }
  return out;
}

/* ---------- the paper ---------- */
function today(){ return new Date().toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' }); }
function renderPaper(entries, head){
  let qs = '<ol class="qs">';
  let keys = '<ol class="keys">';
  let lastPassage = '';
  entries.forEach(e => {
    const it = e.item, p = paperOf(it);
    const passage = it.passage ? `<div class="qz-passage">${it.passage}${it.passageSrc ? `<div class="qz-src">${it.passageSrc}</div>` : ''}${it.passageTr ? `<div class="qz-tr">${it.passageTr}</div>` : ''}</div>` : '';
    if (passage && plain(passage) !== lastPassage){
      qs += `</ol><div class="qz-passage-block"><div class="qz-passage-head">Read the passage, and answer the questions that follow it.</div>${passage}</div><ol class="qs" style="counter-reset:qn ${qs.split('class="qitem"').length - 1}">`;
      lastPassage = plain(passage);
    }
    if (!passage) lastPassage = '';
    qs += `<li class="qitem"><div class="qsetline">${e.doctrine ? 'Doctrine · ' : ''}${e.setTitle}</div>${p.instr ? `<div class="qinstr">${p.instr}</div>` : ''}<div class="qstem">${p.stem}</div>${p.body}</li>`;
    keys += `<li class="keyitem"><div class="kset">${e.doctrine ? 'Doctrine · ' : ''}${e.setTitle}</div><div class="ka"><b>${p.key || ''}</b></div>${p.explain ? `<div class="kx">${p.explain}</div>` : ''}</li>`;
  });
  qs += '</ol>';
  keys += '</ol>';
  const covers = [...new Set(entries.filter(e => !e.doctrine).map(e => e.setTitle))].join('; ') + (entries.some(e => e.doctrine) ? '; and questions on doctrine' : '');
  const meta = [head.course, head.teacher, head.date].filter(Boolean).join(' · ');
  const top = `<div class="qhead"><h1>Ars Grammatica · Quiz</h1><div class="meta">${meta}</div></div>
    <div class="namerow"><span>Name</span><span class="sm">Score</span></div>
    <div class="covers"><b>Covers:</b> ${covers}</div>
    <div class="rubric"><b>Directions.</b> Answer every question. Where lettered choices are given, circle the letter of the answer. Where a line is given, write the answer on it.</div>`;
  const keyTop = `<div class="qhead"><h1>Answer Key</h1><div class="meta">${meta}</div></div>
    <div class="keynote"><b>For the instructor.</b> Remove these pages before the quiz is handed out. The answers are numbered as the questions are.</div>`;
  const paper = document.getElementById('quiz-paper');
  paper.innerHTML = `<div class="qsheet">${top}${qs}</div><div class="qsheet key-sheet">${keyTop}${keys}</div>`;
  paper.classList.add('show');
  return paper;
}

function status(msg, cls){
  const s = document.getElementById('qz-status');
  s.className = 'maker-status' + (cls ? ' ' + cls : '');
  s.innerHTML = msg;
}
function selected(){
  return [...document.querySelectorAll('#qz-sets .qz-row')].filter(r => r.querySelector('input[type=checkbox]').checked).map(r => ({
    id: r.dataset.id,
    set: r.querySelector('.qz-form').value,
    n: Math.max(1, Math.min(40, +r.querySelector('.qz-n').value || 5))
  }));
}
async function generate(spec){
  const sets = spec.sets;
  if (!sets.length) throw new Error('Choose at least one set.');
  const seen = new Set();
  const entries = [];
  const short = [];
  if (spec.doctrine){
    const docs = await pickDoctrine(sets.map(s => s.id), spec.doctrine);
    docs.forEach(d => entries.push(d));
    if (docs.length < spec.doctrine) short.push(`Only ${docs.length} doctrine questions were found for these sets.`);
  }
  for (const s of sets){
    const got = await drawSet(s, seen);
    got.items.forEach(it => entries.push({ setTitle: got.ex.title, item: it, doctrine: false }));
    if (got.items.length < s.n) short.push(`${plain(got.ex.title)} supplied ${got.items.length} of ${s.n}.`);
  }
  renderPaper(entries, spec.head || {});
  return { entries, short };
}

function wire(){
  const sec = document.getElementById('qz-sec');
  sec.innerHTML = '<option value="">Every section</option>' + SECTION_ORDER.map(v => `<option value="${v}">Section ${ROMAN[v]}</option>`).join('');
  document.getElementById('qz-sec').onchange = buildSetList;
  document.querySelectorAll('#qz-langs input').forEach(x => { x.onchange = buildSetList; });
  document.getElementById('qz-all').onclick = () => document.querySelectorAll('#qz-sets input[type=checkbox]').forEach(i => { i.checked = true; });
  document.getElementById('qz-none').onclick = () => document.querySelectorAll('#qz-sets input[type=checkbox]').forEach(i => { i.checked = false; });
  document.getElementById('qz-doc-on').onclick = () => {
    const b = document.getElementById('qz-doc-on');
    const on = !b.classList.contains('on');
    b.classList.toggle('on', on);
    document.getElementById('qz-doc-n-wrap').style.display = on ? '' : 'none';
  };
  document.getElementById('qz-home').onclick = () => { history.replaceState(null, '', location.pathname + location.search); goHome(); };
  document.getElementById('qz-print').onclick = () => window.print();
  document.getElementById('qz-gen').onclick = async () => {
    try {
      status('Making the quiz…');
      const docOn = document.getElementById('qz-doc-on').classList.contains('on');
      const res = await generate({
        sets: selected(),
        doctrine: docOn ? Math.max(1, Math.min(12, +document.getElementById('qz-doc-n').value || 2)) : 0,
        head: {
          course: document.getElementById('qz-course').value.trim(),
          teacher: document.getElementById('qz-teacher').value.trim(),
          date: document.getElementById('qz-date').value.trim() || today()
        }
      });
      document.getElementById('qz-print').style.display = '';
      status(`<b>${res.entries.length} questions</b> are ready below. Review them, then print or save as PDF.` + (res.short.length ? ' ' + res.short.join(' ') : ''), 'ok');
      document.getElementById('quiz-paper').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (e) { status(e.message || String(e), 'err'); }
  };
  const link = document.getElementById('maker-link');
  if (link) link.onclick = e => { e.preventDefault(); openMaker(); };
  window.addEventListener('hashchange', () => { if (location.hash === '#maker') openMaker(); });
  if (location.hash === '#maker') openMaker();
}
window.ArsMaker = { openMaker, generate, allSets, paperOf };
wire();
})();
