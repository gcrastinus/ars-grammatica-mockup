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
function courseStore(){ return store; }
const $ = id => document.getElementById(id);
const FORMS = ['A', 'B', 'C'];
const KIND = { 'study':'Study', 'study-ex':'Study and exercise', 'exercise':'Exercise', 'review':'Section review' };

function deckState(id){ return store.decks[id] || (store.decks[id] = { opens:0, done:false }); }
function show(scr){
  if (window.__arsStopSpeak) window.__arsStopSpeak();
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
      const plan = hasPlan(it.id);
      const practiceTile = playerItem(it);
      c.className = 'set-card ' + (it.built ? 'built' : 'soon') + (!it.built && plan ? ' has-plan' : '');
      c.dataset.id = it.id;
      c.innerHTML = `<div class="kind">${KIND[it.kind]}</div>
        ${it.built && !practiceTile && st && st.done ? '<span class="done-flag">✓ Studied</span>' : ''}
        <h3>${it.title}</h3><p>${it.desc}</p>
        <span class="begin">${it.built ? (practiceTile ? 'Begin →' : 'Study →') : ''}</span>
        <span class="soon-flag">Coming</span>`;
      // A deck with its own exercise set (II–XI) gets an Exercise button that opens the set's plan.
      const exId = ARS.deckEx && ARS.deckEx[it.id];
      if (it.built && exId && hasPlan(exId)){
        const b = document.createElement('button'); b.type = 'button'; b.className = 'ex-link'; b.textContent = 'Exercise →';
        b.onclick = e => { e.stopPropagation(); openEx(exId); };
        c.appendChild(b);
      }
      if (!it.built && plan){
        c.tabIndex = 0; c.setAttribute('role', 'button');
        c.onclick = () => openEx(it.id);
        c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openEx(it.id); } };
      }
      if (it.built && practiceTile){
        c.tabIndex = 0; c.setAttribute('role', 'button');
        c.onclick = () => openEx(it.id);
        c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openEx(it.id); } };
      } else if (it.built){
        c.tabIndex = 0; c.setAttribute('role', 'button');
        c.onclick = () => openDeck(it.id);
        c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openDeck(it.id); } };
      }
      grid.appendChild(c);
    });
    if (sec.roman && typeof cumulativeBar === 'function') grid.appendChild(cumulativeBar(sec));
  });
  if (typeof renderReciteReminder === 'function') renderReciteReminder();
  if (typeof renderReviewNotice === 'function') renderReviewNotice();
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

/* ---------- exercise sets and section reviews ----------
   A written file runs here (runEx). A file still marked as a plan shows the plan.
   Cumulative review, in practice.js, uses the same runner. */
function hasPlan(id){ return !!(ARS.exerciseFiles && ARS.exerciseFiles.indexOf(id) >= 0); }
/* A section exercise or review opens in the player. A built exercise that is itself a deck
   (ix.sentences, ix.passages, ix.marking, x.imitation) opens as a deck. */
function playerItem(it){
  if (!it) return false;
  if (it.kind === 'review') return true;
  if (it.kind !== 'exercise') return false;
  return hasPlan(it.id) || it.id.indexOf('.ex.') >= 0;
}
function loadEx(id){
  ARS.exercises = ARS.exercises || {};
  if (ARS.exercises[id]) return Promise.resolve(ARS.exercises[id]);
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = `data/exercises/${id}.js`;
    s.onload = () => ARS.exercises[id] ? res(ARS.exercises[id]) : rej(new Error('No data in ' + s.src));
    s.onerror = () => rej(new Error('Could not load ' + s.src));
    document.head.appendChild(s);
  });
}
const TYPE_NAME = { 'mc':'multiple choice', 'mc-marked':'multiple choice on a marked word', 'identify':'identify in the text',
  'count':'count (a number)', 'divide':'divide into syllables', 'form':'give the form', 'transform':'rewrite (correct or transform)',
  'analysis':'parse and construe', 'passage-mc':'questions on a passage', 'mark':'mark the dependences', 'copy':'copy word for word' };
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
function openEx(id){
  loadEx(id).then(ex => {
    if (ex.status === 'written') return runEx(ex);
    showExercisePlan(id, ex);
  }).catch(err => { alert(err.message); });
}
function showExercisePlan(id, ex){
  location.hash = 'ex/' + id;
  $('ex-kind').textContent = ex.kind === 'review' ? 'Section review' : 'Exercise';
  $('ex-title').innerHTML = ex.title;
  if (!ex.covers || !ex.items){
    $('ex-sub').textContent = 'The questions are not yet written.';
    $('ex-body').innerHTML = '';
    show('scr-ex');
    return;
  }
  $('ex-sub').textContent = 'Coming soon: the questions are not yet written.';
    const body = $('ex-body'); body.innerHTML = '';
    const box = document.createElement('div'); box.className = 'q-box ex-plan';
    const covers = ex.covers.map(c => `${c.deck}${c.cards && c.cards.length ? ' (' + c.cards.join(', ') + ')' : ''}`).join('; ');
    const sets = ex.sets ? `A ${ex.sets.A} · B ${ex.sets.B} · C ${ex.sets.C}` : 'fixed order';
    const bal = ex.balancePerSet ? Object.entries(ex.balancePerSet).map(([d, n]) => `${d} ${n}`).join(' · ') : '';
    box.innerHTML = `<div class="qp-label"><span>Plan (to be approved before the questions are written)</span></div>
      <dl><dt>Covers</dt><dd>${esc(covers)}</dd><dt>Skill</dt><dd>${esc(ex.skill)}</dd>
      <dt>Item types</dt><dd>${ex.types.map(x => TYPE_NAME[x] || x).join('; ')}</dd>
      <dt>Slots</dt><dd>${ex.pool} in all; ${sets}; ${esc(ex.rotation)}</dd>
      ${bal ? `<dt>Per set</dt><dd>${esc(bal)}</dd>` : ''}${ex.split ? `<dt>Balance</dt><dd>${esc(ex.split)}</dd>` : ''}
      <dt>Limit</dt><dd>${esc(ex.limit)}</dd><dt>Opened from</dt><dd>${esc(ex.openedFrom)}</dd></dl>`;
    const groups = {};
    ex.items.forEach(x => { const k = x.set || 'Fixed passages'; (groups[k] = groups[k] || []).push(x); });
    Object.keys(groups).forEach(k => {
      const d = document.createElement('details'); d.className = 'ex-set';
      d.innerHTML = `<summary>${k.length === 1 ? 'Set ' + k : k} · ${groups[k].length} empty slots</summary><ol>` +
        groups[k].map(x => `<li><code>${x.id}</code> ${x.work ? esc(x.work) + ', ' + esc(x.selection) + ` (${x.words} words)` :
          esc([x.deck, x.card, x.trope, x.group, x.lang, TYPE_NAME[x.type] || x.type].filter(Boolean).join(' · '))}${x.questions ? ` · ${x.questions.length} questions (${x.questions.map(q => q.task).join(', ')})` : ''} · <i>TODO</i></li>`).join('') + '</ol>';
      box.appendChild(d);
    });
    body.appendChild(box);
    show('scr-ex');
}

/* ---------- running a written exercise set, a review, or a cumulative sitting ----------
   Successive visits give set A, then B, then C, then A again (ITEM-LIST rule 5). The items of a set are given in their
   fixed order (easy to hard); the options of a multiple-choice item are shuffled on each showing, and the key follows
   the option. A wrongly answered item is asked once more at the end of the sitting (build list, item 3). For a written
   set the miss is recorded in store.ex, and the first answer is stored in the Leitner boxes (practice.js). A typed
   answer (count, form, divide, transform) is drawn and graded by practice.js. An item may carry a "Why?" prompt with
   a model answer (no grading). */
let run = null;   // { ex, set, queue, n, k, first: {id: right?}, retried: {id:true} }
function exState(id){ store.ex = store.ex || {}; return store.ex[id] || (store.ex[id] = { visits:0 }); }
function runQueue(spec){
  const items = (spec.items || []).slice();
  run = { ex: spec.ex || null, set: spec.set || '', queue: items, n: items.length, k:0, first:{}, retried:{} };
  if (spec.hash) location.hash = spec.hash;
  $('ex-kind').textContent = spec.kind || '';
  $('ex-title').innerHTML = spec.title || '';
  $('ex-sub').innerHTML = spec.sub || '';
  show('scr-ex');
  renderItem();
}
function runEx(ex){
  const st = exState(ex.id); const set = FORMS[st.visits % 3]; st.visits += 1; save();
  const items = ex.items.filter(x => x.set === set);
  runQueue({
    ex: ex, set: set, items: items, hash: 'ex/' + ex.id,
    kind: ex.kind === 'review' ? 'Section review' : 'Exercise',
    title: ex.title,
    sub: `Set ${set} · ${items.length} questions. ${ex.instr || ''}`
  });
}
function renderItem(){
  if (window.__arsStopSpeak) window.__arsStopSpeak();
  const body = $('ex-body'); body.innerHTML = '';
  if (run.k >= run.queue.length) return renderSummary();
  const it = run.queue[run.k], again = run.k >= run.n;
  const box = document.createElement('div'); box.className = 'q-box qp ex-item';
  box.innerHTML = `<div class="qp-label"><span>${again ? 'Asked again' : 'Question'}</span><span class="qp-form">${again ? '' : `${run.k + 1} of ${run.n}`}</span></div>
    <div class="q-prompt">${it.prompt}</div><div class="opts"></div><div class="fb"></div>`;
  const opts = box.querySelector('.opts');
  const done = (ok, given, right) => finishItem(box, it, ok, given, right);
  if (it.type === 'mc' || it.type === 'mc-marked'){
    shuffled(it.options.map((_, k) => k)).forEach(k => {
      const b = document.createElement('button'); b.className = 'opt'; b.innerHTML = it.options[k]; b.dataset.k = k;
      b.onclick = () => {
        opts.querySelectorAll('button').forEach(x => { x.disabled = true; if (+x.dataset.k === it.answer) x.classList.add(k === it.answer ? 'right' : 'reveal'); });
        if (k !== it.answer) b.classList.add('wrong');
        done(k === it.answer, null, it.options[it.answer]);
      };
      opts.appendChild(b);
    });
  } else if (it.type === 'identify' && Array.isArray(it.answer)){   // click every word asked for, then check
    const row = document.createElement('div'); row.className = 'ex-tokens';
    const picked = new Set();
    it.tokens.forEach((t, k) => {
      const b = document.createElement('button'); b.className = 'opt ex-token'; b.innerHTML = t;
      b.onclick = () => { picked.has(k) ? picked.delete(k) : picked.add(k); b.classList.toggle('sel', picked.has(k)); };
      row.appendChild(b);
    });
    const go = document.createElement('div');
    go.innerHTML = `<button class="btn primary" type="button">Check</button>`;
    go.querySelector('button').onclick = () => {
      if (!picked.size) return;
      const want = new Set(it.answer);
      row.querySelectorAll('button').forEach((x, j) => {
        x.disabled = true; x.classList.remove('sel');
        if (want.has(j)) x.classList.add(picked.has(j) ? 'right' : 'reveal');
        else if (picked.has(j)) x.classList.add('wrong');
      });
      go.querySelector('button').disabled = true;
      const ok = picked.size === want.size && [...want].every(j => picked.has(j));
      done(ok, null, it.answer.map(j => it.tokens[j]).join(', '));
    };
    opts.appendChild(row); opts.appendChild(go);
  } else if (it.type === 'sort'){   // put each entry in one of the bins, then check
    const tbl = document.createElement('div'); tbl.className = 'ex-sort';
    const chosen = it.entries.map(() => null);
    it.entries.forEach((e, r) => {
      const line = document.createElement('div'); line.className = 'ex-sort-row';
      line.innerHTML = `<div class="ex-sort-entry">${e}</div><div class="ex-sort-bins"></div>`;
      const bins = line.querySelector('.ex-sort-bins');
      it.bins.forEach((bn, c) => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'ex-bin'; b.innerHTML = bn;
        b.onclick = () => { chosen[r] = c; bins.querySelectorAll('button').forEach((x, j) => x.classList.toggle('sel', j === c)); };
        bins.appendChild(b);
      });
      tbl.appendChild(line);
    });
    const go = document.createElement('div');
    go.innerHTML = `<button class="btn primary" type="button">Check</button>`;
    go.querySelector('button').onclick = () => {
      if (chosen.some(c => c === null)) return;
      tbl.querySelectorAll('.ex-sort-row').forEach((line, r) => {
        line.querySelectorAll('button').forEach((x, j) => {
          x.disabled = true; x.classList.remove('sel');
          if (j === it.answer[r]) x.classList.add(chosen[r] === j ? 'right' : 'reveal');
          else if (chosen[r] === j) x.classList.add('wrong');
        });
      });
      go.querySelector('button').disabled = true;
      const ok = chosen.every((c, r) => c === it.answer[r]);
      done(ok, null, it.entries.map((e, r) => e + ': ' + it.bins[it.answer[r]]).join('<br>'));
    };
    opts.appendChild(tbl); opts.appendChild(go);
  } else if (it.type === 'identify'){
    const row = document.createElement('div'); row.className = 'ex-tokens';
    it.tokens.forEach((t, k) => {
      const b = document.createElement('button'); b.className = 'opt ex-token'; b.innerHTML = t;
      b.onclick = () => {
        row.querySelectorAll('button').forEach((x, j) => { x.disabled = true; if (j === it.answer) x.classList.add(k === it.answer ? 'right' : 'reveal'); });
        if (k !== it.answer) b.classList.add('wrong');
        done(k === it.answer, null, it.tokens[it.answer]);
      };
      row.appendChild(b);
    });
    opts.appendChild(row);
  } else if (ARS.renderTyped){
    ARS.renderTyped(opts, it, done);
  }
  body.appendChild(box);
}
function finishItem(box, it, ok, given, right){
  const firstPass = !(it.id in run.first);
  if (firstPass){
    run.first[it.id] = ok;
    if (ARS.noteAnswer) ARS.noteAnswer(it, ok);
  }
  if (!ok){
    if (run.ex){
      const st = exState(run.ex.id); st.due = st.due || [];
      if (st.due.indexOf(it.id) < 0) st.due.push(it.id); save();
    }
    if (!run.retried[it.id]){ run.retried[it.id] = true; run.queue.push(it); }
  }
  const mine = given != null ? `Your answer: <b>${esc(given)}</b>. ` : '';
  const fb = box.querySelector('.fb');
  fb.innerHTML = `<div class="feedback ${ok ? 'good' : 'bad'}"><span class="verdict">${ok ? 'Correct' : 'Incorrect'}</span>` +
    (ok ? (given != null ? mine : '') : `${mine}${right != null ? `The correct answer is: ${right}.` : 'The correct answers are marked above.'}<br>`) + `${it.explain}` +
    (it.why ? `<div class="ex-why"><div class="q-prompt">${it.why.prompt}</div><textarea rows="2" aria-label="Your reason"></textarea>
      <div><button class="btn" type="button" data-act="model">Show the model answer</button></div><div class="ex-model" hidden>${it.why.model}</div></div>` : '') +
    `<div><button class="btn primary" type="button" data-act="next">Next →</button></div></div>`;
  const mb = fb.querySelector('[data-act="model"]');
  if (mb) mb.onclick = () => { fb.querySelector('.ex-model').hidden = false; mb.disabled = true; };
  const nb = fb.querySelector('[data-act="next"]');
  nb.onclick = () => { run.k += 1; renderItem(); window.scrollTo(0, 0); };
  nb.focus({ preventScroll:true });
}
function renderSummary(){
  const ids = Object.keys(run.first), right = ids.filter(i => run.first[i]).length;
  const byId = {};
  (run.ex ? run.ex.items : run.queue).forEach(x => { if (x && x.id) byId[x.id] = x; });
  const missed = ids.filter(i => run.first[i] === false).map(i => byId[i]).filter(Boolean);
  const body = $('ex-body'); body.innerHTML = '';
  const box = document.createElement('div'); box.className = 'q-box qp';
  box.innerHTML = `<div class="qp-label"><span>${run.set ? 'Set ' + run.set + ' finished' : 'Review finished'}</span></div>
    <div class="q-prompt">${right} of ${ids.length} answered correctly the first time.</div>` +
    (missed.length ? `<p>Missed (kept for later review):</p><ol>${missed.map(x => `<li>${x.prompt}</li>`).join('')}</ol>` : '') +
    `<div><button class="btn primary" type="button">Back to the course</button></div>`;
  box.querySelector('button').onclick = goHome;
  body.appendChild(box);
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

function shuffled(a){
  for (let j = a.length - 1; j > 0; j--){ const r = Math.floor(Math.random() * (j + 1)); [a[j], a[r]] = [a[r], a[j]]; }
  return a;
}
function qpState(qp){
  return cur.qp[qp.id] || (cur.qp[qp.id] = { v:cur.start, status:'open', chosen:null });
}

function renderPanel(){
  if (window.__arsStopSpeak) window.__arsStopSpeak();
  const { deck, i } = cur, p = deck.panels[i], n = deck.panels.length;
  $('deck-count').textContent = `Panel ${i + 1} of ${n}`;
  $('deck-progress').style.width = `${((i + 1) / n) * 100}%`;
  const body = $('deck-body'); body.innerHTML = '';
  const panel = document.createElement('div'); panel.className = 'panel';
  panel.innerHTML = `<h2>${p.title}</h2>${p.body}` +
    (i === 0 && deck.sources ? `<div class="psrc"><b>Sources</b>${deck.sources}</div>` : '');
  body.appendChild(panel);
  if (p.qp) body.appendChild(renderQP(p.qp));
  // A question point not yet written: shown as a marked placeholder for review (qpTodo: what it will test).
  if (!p.qp && p.qpTodo){ const t = document.createElement('div'); t.className = 'q-box qp qp-todo';
    t.innerHTML = `<div class="qp-label"><span>Question point (to be written)</span></div><div class="q-prompt">${p.qpTodo}</div>`; body.appendChild(t); }
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
  // Options are shown in a shuffled order, fixed for this variant during this opening of the deck and reshuffled on
  // the next opening (Timothy, 17 Oct 2026). k is always the option's index in the data, so the answer key follows
  // the option, not its position on the screen.
  s.orders = s.orders || {};
  const order = s.orders[s.v] || (s.orders[s.v] = shuffled(v.options.map((_, k) => k)));
  order.forEach(k => {
    const o = v.options[k];
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
  const st = deckState(cur.deck.id);
  if (!st.done) st.doneAt = Date.now();
  st.done = true; save();
  const id = cur.deck.id; goHome();
  const card = document.querySelector(`.set-card[data-id="${id}"]`);
  if (card){ card.scrollIntoView({block:'center'}); card.focus({preventScroll:true}); }
}
function prevPanel(){ if (cur.i > 0){ cur.i -= 1; renderPanel(); window.scrollTo(0, 0); } }

function goHome(){ location.hash = ''; buildHome(); show('scr-home'); }

/* ---------- controls ---------- */
function setDark(on){ store.dark = on; document.body.classList.toggle('dark', on); $('dark-toggle').textContent = on ? '☀' : '☾'; save(); }
$('dark-toggle').onclick = () => setDark(!store.dark);
$('deck-next').onclick = nextPanel;
$('deck-prev').onclick = prevPanel;
$('deck-home').onclick = goHome;
$('ex-home').onclick = goHome;
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
const mx = location.hash.match(/^#ex\/(.+)$/);
if (mx && hasPlan(mx[1])) openEx(mx[1]);
const m = location.hash.match(/^#deck\/(.+)$/);
if (m){
  const it = ARS.structure.flatMap(s => s.items).find(x => x.id === m[1] && x.built && !playerItem(x));
  if (it) openDeck(it.id);
}
