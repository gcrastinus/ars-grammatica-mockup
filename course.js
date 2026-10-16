'use strict';
/* Ars Grammatica: the working course page.
   The order of the course is in data/structure.js; each built deck is a separate file, data/decks/<id>.js.
   Progress is stored locally under each stable id, so later language layers (id/layer) can be added beside it. */
const KEY = 'ars-grammatica-course-v2';
const store = (() => {
  try { return Object.assign({ dark:false, decks:{} }, JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch (e) { return { dark:false, decks:{} }; }
})();
function save(){ try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
const $ = id => document.getElementById(id);
const FORMS = ['A', 'B', 'C'];
const KIND = { 'study':'Study', 'study-ex':'Study and exercise', 'exercise':'Exercise', 'review':'Section review' };

function deckState(id){ return store.decks[id] || (store.decks[id] = { opens:0, done:false }); }
function show(scr){
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === scr));
  window.scrollTo(0, 0);
}

/* ---------- home: all 71 buttons in order ---------- */
function buildHome(){
  const host = $('home-acts'); host.innerHTML = '';
  ARS.structure.forEach(sec => {
    const lab = document.createElement('div');
    if (sec.roman){ lab.className = 'act-label'; lab.textContent = `${sec.roman} · ${sec.latin}`; host.appendChild(lab); }
    const name = document.createElement('div');
    name.className = sec.roman ? 'act-latin' : 'section-label';
    name.textContent = sec.name; host.appendChild(name);
    if (!sec.roman){ const l2 = document.createElement('div'); l2.className = 'act-gloss'; l2.innerHTML = `<i>${sec.latin}</i>`; host.appendChild(l2); }
    const gl = document.createElement('div'); gl.className = 'act-gloss'; gl.textContent = sec.gloss; host.appendChild(gl);
    let grid = document.createElement('div'); grid.className = 'home-grid'; host.appendChild(grid);
    sec.items.forEach(it => {
      if (it.group){
        const g = document.createElement('div'); g.className = 'grp-label'; g.textContent = it.group; grid.appendChild(g);
      }
      const c = document.createElement('div');
      const st = store.decks[it.id];
      c.className = 'set-card ' + (it.built ? 'built' : 'soon');
      c.dataset.id = it.id;
      c.innerHTML = `<div class="kind">${KIND[it.kind]}</div>
        ${it.built && st && st.done ? '<span class="done-flag">✓ Studied</span>' : ''}
        <h3>${it.title}</h3><p>${it.desc}</p>
        <span class="begin">${it.built ? 'Study →' : ''}</span>
        <span class="soon-flag">Coming</span>`;
      if (it.built){
        c.tabIndex = 0; c.setAttribute('role', 'button');
        c.onclick = () => openDeck(it.id);
        c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openDeck(it.id); } };
      }
      grid.appendChild(c);
    });
  });
}

/* ---------- loading a deck's data file ---------- */
function loadDeck(id){
  ARS.decks = ARS.decks || {};
  if (ARS.decks[id]) return Promise.resolve(ARS.decks[id]);
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = `data/decks/${id}.js`;
    s.onload = () => ARS.decks[id] ? res(ARS.decks[id]) : rej(new Error('No data in ' + s.src));
    s.onerror = () => rej(new Error('Could not load ' + s.src));
    document.head.appendChild(s);
  });
}

/* ---------- the deck ---------- */
let cur = null;   // { deck, i, start, qp: { [qpId]: { v, status, chosen } } }

function openDeck(id){
  loadDeck(id).then(deck => {
    const st = deckState(id);
    st.opens += 1; save();
    // Each opening starts every question point on the next form: A, then B, then C, then A again.
    const start = (st.opens - 1) % 3;
    cur = { deck, i:0, start, qp:{} };
    location.hash = 'deck/' + id;
    $('deck-title').innerHTML = deck.title;
    $('deck-sub').innerHTML = deck.sub || '';
    show('scr-deck');
    renderPanel();
  }).catch(err => { alert(err.message); });
}

function qpState(qp){
  return cur.qp[qp.id] || (cur.qp[qp.id] = { v:cur.start, status:'open', chosen:null });
}

function renderPanel(){
  const { deck, i } = cur, p = deck.panels[i], n = deck.panels.length;
  $('deck-count').textContent = `Panel ${i + 1} of ${n}`;
  $('deck-progress').style.width = `${((i + 1) / n) * 100}%`;
  const body = $('deck-body'); body.innerHTML = '';
  const panel = document.createElement('div'); panel.className = 'panel';
  panel.innerHTML = `<h2>${p.title}</h2>${p.body}` +
    (p.examples && p.examples.length ? `<div class="eg"><div class="eg-label">Examples</div><ol>${p.examples.map(e => `<li>${e}</li>`).join('')}</ol></div>` : '') +
    (i === 0 && deck.sources ? `<div class="psrc"><b>Sources</b>${deck.sources}</div>` : '');
  body.appendChild(panel);
  if (p.qp) body.appendChild(renderQP(p.qp));
  $('deck-prev').disabled = i === 0;
  $('deck-next').textContent = i === n - 1 ? 'Finish' : 'Next →';
  updateNext();
}

function updateNext(){
  const p = cur.deck.panels[cur.i];
  const blocked = p.qp && qpState(p.qp).status !== 'correct';
  $('deck-next').disabled = !!blocked;
  $('deck-hint').textContent = blocked ? 'The question must be answered correctly before going on.' : '';
}

function renderQP(qp){
  const s = qpState(qp), v = qp.variants[s.v];
  const box = document.createElement('div'); box.className = 'q-box qp';
  box.innerHTML = `<div class="qp-label"><span>Question</span><span class="qp-form">Form ${FORMS[s.v]}</span></div>
    <div class="q-prompt">${v.prompt}</div><div class="opts"></div><div class="fb"></div>`;
  const opts = box.querySelector('.opts');
  v.options.forEach((o, k) => {
    const b = document.createElement('button'); b.className = 'opt'; b.innerHTML = o;
    if (s.status !== 'open'){
      b.disabled = true;
      if (k === v.answer) b.classList.add(s.status === 'correct' ? 'right' : 'reveal');
      if (s.status === 'wrong' && k === s.chosen) b.classList.add('wrong');
    }
    b.onclick = () => answer(qp, k);
    opts.appendChild(b);
  });
  const fb = box.querySelector('.fb');
  if (s.status === 'correct'){
    fb.innerHTML = `<div class="feedback good"><span class="verdict">Correct</span>${v.explain}</div>`;
  } else if (s.status === 'wrong'){
    fb.innerHTML = `<div class="feedback bad"><span class="verdict">Incorrect</span>The correct answer is: ${v.options[v.answer]}.<br>${v.explain}
      <div><button class="btn primary" type="button">Next question</button></div></div>`;
    fb.querySelector('button').onclick = () => {
      // The wrong-answer cycle: the next form of the same question point (A, B, C, then A again).
      s.v = (s.v + 1) % 3; s.status = 'open'; s.chosen = null; rerenderQP(qp);
    };
  }
  return box;
}
function rerenderQP(qp){
  const old = document.querySelector('#deck-body .qp');
  old.replaceWith(renderQP(qp));
  updateNext();
}
function answer(qp, k){
  const s = qpState(qp), v = qp.variants[s.v];
  if (s.status !== 'open') return;
  s.chosen = k; s.status = k === v.answer ? 'correct' : 'wrong';
  rerenderQP(qp);
}

function nextPanel(){
  if ($('deck-next').disabled) return;
  if (cur.i < cur.deck.panels.length - 1){ cur.i += 1; renderPanel(); window.scrollTo(0, 0); return; }
  const st = deckState(cur.deck.id); st.done = true; save();
  $('done-title').innerHTML = cur.deck.title;
  $('done-sub').innerHTML = cur.deck.sub || '';
  show('scr-done');
}
function prevPanel(){ if (cur.i > 0){ cur.i -= 1; renderPanel(); window.scrollTo(0, 0); } }

function goHome(){ location.hash = ''; buildHome(); show('scr-home'); }

/* ---------- controls ---------- */
function setDark(on){ store.dark = on; document.body.classList.toggle('dark', on); $('dark-toggle').textContent = on ? '☀' : '☾'; save(); }
$('dark-toggle').onclick = () => setDark(!store.dark);
$('deck-next').onclick = nextPanel;
$('deck-prev').onclick = prevPanel;
$('deck-home').onclick = goHome;
$('done-home').onclick = goHome;
$('done-again').onclick = () => openDeck(cur.deck.id);
document.addEventListener('keydown', e => {
  if (!$('scr-deck').classList.contains('active')) return;
  if (e.target.closest && e.target.closest('button') && e.key === 'Enter') return;
  if (e.key === 'ArrowRight') nextPanel();
  if (e.key === 'ArrowLeft') prevPanel();
});

setDark(!!store.dark);
buildHome();
const m = location.hash.match(/^#deck\/(.+)$/);
if (m){
  const it = ARS.structure.flatMap(s => s.items).find(x => x.id === m[1] && x.built);
  if (it) openDeck(it.id);
}
