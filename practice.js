'use strict';
/* Exercise sets, section reviews, and the cumulative review (ITEM-LIST.md rules 5, 8, 8a, and 11;
   EXERCISES-PLAN.md, build list 1–4).

   Progress stays in the course record (localStorage key ars-grammatica-course-v2):

   store.practice = { 'i.ex.sign': { opens: 1 } }   // visits; sets A, B, C rotate from this
   store.boxes = {
     'sv-sign-1': { box: 1, dueAt: <ms>, deck: 'i.sign', section: 'i' }
   }

   Boxes 1–5 fall due after REVIEW_BOX_DAYS (1, 3, 7, 14, and 30 days). A wrong answer
   returns the item to box 1. A right answer moves it up one box. An item not seen before
   is treated as box 1 at the moment it is answered, so a miss is due in 1 day and a
   success in 3. The second try at the end of a sitting does not change the box.

   A typed item is ready for content to use. None are written yet. Shape:
     type: 'count' | 'form' | 'divide' | 'transform'
     accept: ['the form', 'another accepted form']   (or a single string)
     A count item may instead give answer as a number (the written syllable sets do).
     macrons: false   — strip macrons before comparing; otherwise macrons count
   Case is ignored. Accents other than macrons are ignored. Curly quotes are treated as
   straight quotes. divide treats hyphens and dashes alike. transform ignores final
   punctuation. count treats '4' and '04' as the same number.
*/
(function () {
  const root = typeof window !== 'undefined' ? window : globalThis;
  const ARS = root.ARS = root.ARS || {};

  const REVIEW_BOX_DAYS = [1, 3, 7, 14, 30];
  const REVIEW_SITTING = 20;
  const DAY_MS = 24 * 60 * 60 * 1000;
  const TYPED = { count: 1, form: 1, divide: 1, transform: 1 };

  function acceptList(item){
    if (!item) return [];
    if (Array.isArray(item.accept)) return item.accept.map(String);
    if (typeof item.accept === 'string' && item.accept) return [item.accept];
    if (Array.isArray(item.answers)) return item.answers.map(String);
    if (typeof item.answer === 'string' && item.answer) return [item.answer];
    if (item.type === 'count' && typeof item.answer === 'number' && isFinite(item.answer)) return [String(item.answer)];
    return [];
  }

  function baseFold(s, item){
    let t = String(s == null ? '' : s);
    t = t.replace(/[\u2018\u2019\u201A\u201B]/g, "'").replace(/[\u201C\u201D\u201E\u201F]/g, '"');
    t = t.replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, '-');
    t = t.replace(/\s+/g, ' ').trim().toLowerCase();
    if (item && item.macrons === false){
      t = t.replace(/[āēīōūȳ]/g, ch => ({ 'ā':'a', 'ē':'e', 'ī':'i', 'ō':'o', 'ū':'u', 'ȳ':'y' }[ch]));
      t = t.normalize('NFD').replace(/\u0304/g, '');
    }
    t = t.normalize('NFD').replace(/[\u0300-\u036f]/g, m => (m === '\u0304' ? m : '')).normalize('NFC');
    return t;
  }

  function foldDivide(s, item){
    return baseFold(s, item).replace(/\s*-\s*/g, '-').replace(/-+/g, '-');
  }

  function foldTransform(s, item){
    return baseFold(s, item).replace(/[\s.?!;:,]+$/g, '').replace(/\s+/g, ' ').trim();
  }

  function foldCount(s){
    const t = String(s == null ? '' : s).trim().replace(/\s+/g, '');
    if (/^[0-9]+$/.test(t)) return String(parseInt(t, 10));
    return t.toLowerCase();
  }

  function gradeTyped(item, given){
    const accepted = acceptList(item);
    if (!accepted.length) return false;
    const type = item && item.type;
    const fold = type === 'count' ? foldCount
      : type === 'divide' ? (s => foldDivide(s, item))
      : type === 'transform' ? (s => foldTransform(s, item))
      : (s => baseFold(s, item));
    const g = fold(given);
    if (!g) return false;
    return accepted.some(a => fold(a) === g);
  }

  function itemPlayable(it){
    if (!it || it.todo || !it.prompt) return false;
    const type = it.type || (Array.isArray(it.options) ? 'mc' : '');
    if (type === 'mc' || type === 'mc-marked' || type === 'passage-mc'){
      return Array.isArray(it.options) && it.options.length > 1 && typeof it.answer === 'number';
    }
    if (TYPED[type]) return acceptList(it).length > 0;
    return false;
  }

  function exerciseIsPlayable(ex){
    if (!ex || ex.status === 'plan' || !Array.isArray(ex.items)) return false;
    return ex.items.some(itemPlayable);
  }

  function playableSets(ex){
    const have = new Set();
    (ex.items || []).forEach(it => { if (itemPlayable(it)) have.add(it.set || ''); });
    const abc = ['A', 'B', 'C'].filter(s => have.has(s));
    if (abc.length) return abc;
    if (have.has('')) return [''];
    return [];
  }

  function itemsInSet(ex, set){
    return (ex.items || []).filter(it => itemPlayable(it) && (it.set || '') === set);
  }

  /* A right answer moves up one box from the box the item is in (an unseen item counts as box 1).
     A wrong answer returns it to box 1. dueAt is when it may be asked again. */
  function scheduleReview(prev, correct, now){
    const from = prev && prev.box ? prev.box : 1;
    const box = correct ? Math.min(REVIEW_BOX_DAYS.length, from + 1) : 1;
    const at = now == null ? Date.now() : now;
    return { box: box, dueAt: at + REVIEW_BOX_DAYS[box - 1] * DAY_MS };
  }

  function shuffleInPlace(a, rand){
    const rnd = rand || Math.random;
    for (let j = a.length - 1; j > 0; j--){
      const r = Math.floor(rnd() * (j + 1));
      const t = a[j]; a[j] = a[r]; a[r] = t;
    }
    return a;
  }

  function buildReviewSitting(pool, boxes, now, limit, rand){
    const cap = limit == null ? REVIEW_SITTING : limit;
    const due = [];
    const fresh = [];
    (pool || []).forEach(item => {
      const b = boxes && boxes[item.id];
      if (b && b.dueAt != null && b.dueAt <= now) due.push(item);
      else if (!b) fresh.push(item);
    });
    due.sort((a, b) => (boxes[a.id].dueAt - boxes[b.id].dueAt) || String(a.id).localeCompare(String(b.id)));
    const sitting = due.slice(0, cap);
    const need = cap - sitting.length;
    if (need > 0) sitting.push.apply(sitting, sampleInterleaved(fresh, need, rand));
    return sitting;
  }

  function sampleInterleaved(items, n, rand){
    const bySec = new Map();
    items.forEach(item => {
      const sec = item.section || '';
      if (!bySec.has(sec)) bySec.set(sec, []);
      bySec.get(sec).push(item);
    });
    const secs = [...bySec.keys()].sort((a, b) => {
      const ao = bySec.get(a)[0].sectionOrder || 0;
      const bo = bySec.get(b)[0].sectionOrder || 0;
      return ao - bo;
    });
    const queues = secs.map(sec => {
      const byDeck = new Map();
      bySec.get(sec).forEach(item => {
        if (!byDeck.has(item.deck)) byDeck.set(item.deck, []);
        byDeck.get(item.deck).push(item);
      });
      const decks = [...byDeck.keys()].sort((a, b) => {
        const da = byDeck.get(a)[0].doneAt || 0;
        const db = byDeck.get(b)[0].doneAt || 0;
        return da - db || String(a).localeCompare(String(b));
      });
      const queue = [];
      decks.forEach(id => {
        const arr = byDeck.get(id).slice();
        shuffleInPlace(arr, rand);
        queue.push.apply(queue, arr);
      });
      return queue;
    });
    const out = [];
    while (out.length < n){
      let took = false;
      queues.forEach(q => {
        if (out.length < n && q.length){ out.push(q.shift()); took = true; }
      });
      if (!took) break;
    }
    return out;
  }

  function cumulativeRangeLabel(roman){
    return 'The Preliminary Section through Section ' + roman;
  }

  ARS.REVIEW_BOX_DAYS = REVIEW_BOX_DAYS;
  ARS.REVIEW_SITTING = REVIEW_SITTING;
  ARS.gradeTyped = gradeTyped;
  ARS.scheduleReview = scheduleReview;
  ARS.buildReviewSitting = buildReviewSitting;
  ARS.exerciseIsPlayable = exerciseIsPlayable;
  ARS.playableSets = playableSets;
  ARS.cumulativeRangeLabel = cumulativeRangeLabel;
  root.exerciseIsPlayable = exerciseIsPlayable;

  if (typeof document === 'undefined' || typeof courseStore !== 'function') return;

  function sectionOfDeck(deckId){
    for (const sec of ARS.structure || []){
      if (sec.items.some(it => it.id === deckId)) return sec.id;
    }
    return '';
  }

  function studyDone(it){
    if (!it || (it.kind !== 'study' && it.kind !== 'study-ex')) return false;
    const st = courseStore().decks && courseStore().decks[it.id];
    return !!(st && st.done);
  }

  function furthestSection(){
    let found = null;
    (ARS.structure || []).forEach(sec => {
      if (sec.roman && sec.items.some(studyDone)) found = sec;
    });
    if (found) return found;
    const prelim = (ARS.structure || []).find(s => !s.roman);
    if (prelim && prelim.items.some(studyDone)) return (ARS.structure || []).find(s => s.roman) || null;
    return null;
  }

  function dueInRange(sectionId){
    const store = courseStore();
    const boxes = store.boxes || {};
    const range = new Set();
    for (const sec of ARS.structure || []){
      range.add(sec.id);
      if (sec.id === sectionId) break;
    }
    let n = 0;
    Object.keys(boxes).forEach(id => {
      const b = boxes[id];
      if (!b || b.dueAt == null || b.dueAt > Date.now()) return;
      if (!range.has(b.section)) return;
      const deck = store.decks && store.decks[b.deck];
      if (!deck || !deck.done) return;
      n += 1;
    });
    return n;
  }

  function duePhrase(n){
    return n === 1 ? '1 review item is due.' : n + ' review items are due.';
  }

  root.renderReviewNotice = function () {
    const host = document.getElementById('review-due');
    if (!host) return;
    const far = furthestSection();
    const n = far ? dueInRange(far.id) : 0;
    host.replaceChildren();
    if (!n){ host.hidden = true; return; }
    host.hidden = false;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'review-due-btn';
    b.textContent = duePhrase(n);
    b.addEventListener('click', () => startCumulative(far.id));
    host.appendChild(b);
  };

  root.cumulativeBar = function (sec) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'cumul-bar';
    b.dataset.section = sec.id;
    const h = document.createElement('span');
    h.className = 'cumul-h';
    h.textContent = 'Cumulative Review';
    const p = document.createElement('span');
    p.className = 'cumul-range';
    p.textContent = cumulativeRangeLabel(sec.roman);
    b.appendChild(h);
    b.appendChild(p);
    b.addEventListener('click', () => startCumulative(sec.id));
    return b;
  };

  const $ = id => document.getElementById(id);
  let sit = null;
  let sitGen = 0;

  function esc(s){
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function copyItem(it, meta){
    return {
      id: it.id,
      deck: it.deck || '',
      section: it.section || (meta && meta.section) || sectionOfDeck(it.deck),
      sectionOrder: meta && meta.sectionOrder || 0,
      doneAt: meta && meta.doneAt || 0,
      type: it.type || (Array.isArray(it.options) ? 'mc' : ''),
      prompt: it.prompt,
      options: it.options,
      answer: it.answer,
      accept: it.accept,
      answers: it.answers,
      macrons: it.macrons,
      explain: it.explain || ''
    };
  }

  /* The written-set runner (course.js) calls this with the first answer only.
     A miss returns the item to box 1. A success moves it up one box. */
  root.ARS.noteAnswer = function (it, correct) {
    const store = courseStore();
    store.boxes = store.boxes || {};
    const next = scheduleReview(store.boxes[it.id], !!correct, Date.now());
    next.deck = it.deck || '';
    next.section = it.section || sectionOfDeck(it.deck);
    store.boxes[it.id] = next;
    save();
    if (typeof root.renderReviewNotice === 'function') root.renderReviewNotice();
  };

  function recordFirst(item, correct){
    if (sit.phase !== 'ask' || Object.prototype.hasOwnProperty.call(sit.results, item.id)) return;
    sit.results[item.id] = correct;
    if (!correct) sit.missed.push(item);
    const store = courseStore();
    store.boxes = store.boxes || {};
    const next = scheduleReview(store.boxes[item.id], correct, Date.now());
    next.deck = item.deck || '';
    next.section = item.section || '';
    store.boxes[item.id] = next;
    save();
  }

  function orderFor(item){
    const key = sit.phase + ':' + item.id;
    if (!sit.orders[key]) sit.orders[key] = shuffleInPlace(item.options.map((_, i) => i));
    if (sit.phase === 'retry' && sit.orders['ask:' + item.id] && item.options.length > 1){
      const prev = sit.orders['ask:' + item.id].join(',');
      let guard = 0;
      while (sit.orders[key].join(',') === prev && guard < 8){
        sit.orders[key] = shuffleInPlace(item.options.map((_, i) => i));
        guard += 1;
      }
    }
    return sit.orders[key];
  }

  function currentItem(){
    if (!sit) return null;
    if (sit.phase === 'retry') return sit.missed[sit.retryIndex] || null;
    return sit.items[sit.index] || null;
  }

  function advance(){
    if (sit.phase === 'ask'){
      sit.index += 1;
      if (sit.index < sit.items.length){ renderSitting(); return; }
      if (sit.missed.length){ sit.phase = 'retry'; sit.retryIndex = 0; renderSitting(); return; }
    } else if (sit.phase === 'retry'){
      sit.retryIndex += 1;
      if (sit.retryIndex < sit.missed.length){ renderSitting(); return; }
    }
    sit.phase = 'score';
    renderScore();
  }

  function headCounts(){
    if (sit.phase === 'retry') return { i: sit.retryIndex, n: sit.missed.length, label: 'Asked again' };
    return { i: sit.index, n: sit.items.length, label: sit.setLabel || 'Question' };
  }

  function showHead(){
    $('ex-kind').textContent = sit.kind || '';
    $('ex-title').textContent = sit.title || '';
    $('ex-sub').textContent = sit.sub || '';
  }

  function feedbackBlock(correct, answerHtml, givenText, showAnswer){
    const fb = document.createElement('div');
    fb.className = 'feedback ' + (correct ? 'good' : 'bad');
    const verdict = document.createElement('span');
    verdict.className = 'verdict';
    verdict.textContent = correct ? 'Correct' : 'Incorrect';
    fb.appendChild(verdict);
    if (givenText != null){
      const line = document.createElement('div');
      line.innerHTML = 'Answer given: ' + esc(givenText) + '.';
      fb.appendChild(line);
    }
    if (!correct || showAnswer){
      const line = document.createElement('div');
      line.innerHTML = 'The correct answer is: ' + answerHtml + '.';
      fb.appendChild(line);
    }
    if (sit.item.explain){
      const exp = document.createElement('div');
      exp.innerHTML = sit.item.explain;
      fb.appendChild(exp);
    }
    const row = document.createElement('div');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn primary';
    const lastAsk = sit.phase === 'ask' && sit.index === sit.items.length - 1 && sit.missed.length === 0;
    const lastRetry = sit.phase === 'retry' && sit.retryIndex === sit.missed.length - 1;
    const willRetry = sit.phase === 'ask' && sit.index === sit.items.length - 1 && sit.missed.length > 0;
    btn.textContent = (lastAsk || lastRetry) && !willRetry ? 'See the score' : 'Next';
    btn.addEventListener('click', advance);
    row.appendChild(btn);
    fb.appendChild(row);
    return fb;
  }

  function renderSitting(){
    showHead();
    const item = currentItem();
    sit.item = item;
    sit.locked = false;
    const body = $('ex-body');
    body.innerHTML = '';
    const counts = headCounts();
    const prog = document.createElement('div');
    prog.className = 'q-progress';
    prog.innerHTML = '<div class="q-progress-fill"></div>';
    prog.firstChild.style.width = (((counts.i + 1) / counts.n) * 100) + '%';
    body.appendChild(prog);
    const count = document.createElement('div');
    count.className = 'ex-count';
    count.textContent = counts.label + ' · ' + (counts.i + 1) + ' of ' + counts.n;
    body.appendChild(count);
    const box = document.createElement('div');
    box.className = 'q-box';
    const lab = document.createElement('div');
    lab.className = 'qp-label';
    lab.innerHTML = '<span>' + (sit.phase === 'retry' ? 'Asked again' : 'Question') + '</span>';
    box.appendChild(lab);
    const prompt = document.createElement('div');
    prompt.className = 'q-prompt';
    prompt.innerHTML = item.prompt;
    box.appendChild(prompt);
    if (TYPED[item.type]) renderTyped(box, item);
    else renderChoice(box, item);
    body.appendChild(box);
    window.scrollTo(0, 0);
  }

  function renderChoice(box, item){
    const opts = document.createElement('div');
    opts.className = 'opts';
    const order = orderFor(item);
    order.forEach(k => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'opt';
      b.dataset.k = String(k);
      b.innerHTML = item.options[k];
      b.addEventListener('click', () => chooseOption(item, k, opts));
      opts.appendChild(b);
    });
    box.appendChild(opts);
    const hold = document.createElement('div');
    hold.className = 'fb';
    box.appendChild(hold);
  }

  function chooseOption(item, k, opts){
    if (sit.locked) return;
    sit.locked = true;
    const correct = k === item.answer;
    recordFirst(item, correct);
    opts.querySelectorAll('.opt').forEach(b => {
      b.disabled = true;
      const bk = Number(b.dataset.k);
      if (bk === item.answer) b.classList.add(correct ? 'right' : 'reveal');
      if (!correct && bk === k) b.classList.add('wrong');
    });
    opts.parentNode.querySelector('.fb').appendChild(feedbackBlock(correct, item.options[item.answer], null, false));
  }

  function renderTyped(box, item){
    const row = document.createElement('div');
    row.className = 'typed-row';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'answer-in';
    input.setAttribute('aria-label', 'Answer');
    input.autocomplete = 'off';
    input.spellcheck = false;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn primary';
    btn.textContent = 'Answer';
    row.appendChild(input);
    row.appendChild(btn);
    box.appendChild(row);
    const hold = document.createElement('div');
    hold.className = 'fb';
    box.appendChild(hold);
    const submit = () => {
      if (sit.locked) return;
      sit.locked = true;
      const given = input.value;
      const correct = gradeTyped(item, given);
      recordFirst(item, correct);
      input.disabled = true;
      input.classList.add(correct ? 'right' : 'wrong');
      btn.hidden = true;
      const shown = acceptList(item)[0] || '';
      hold.appendChild(feedbackBlock(correct, esc(shown), given, true));
    };
    btn.addEventListener('click', submit);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter'){ e.preventDefault(); submit(); }
    });
  }

  function scoreLine(){
    const n = sit.items.length;
    const right = sit.items.filter(it => sit.results[it.id]).length;
    const missed = n - right;
    let sub;
    if (!missed) sub = 'Every answer was correct the first time.';
    else if (!right) sub = 'None were correct the first time, and the missed items were asked once more.';
    else if (right === 1) sub = '1 was correct the first time, and the missed items were asked once more.';
    else sub = right + ' were correct the first time, and the missed items were asked once more.';
    return { right: right, n: n, sub: sub };
  }

  function renderScore(){
    showHead();
    $('ex-kind').textContent = sit.setLabel || sit.kind || '';
    const line = scoreLine();
    const body = $('ex-body');
    body.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'complete-card';
    card.innerHTML = '<div class="complete-orn">❦</div><h2></h2><div class="complete-sub"></div>';
    card.querySelector('h2').textContent = line.right + ' of ' + line.n;
    card.querySelector('.complete-sub').textContent = line.sub;
    const row = document.createElement('div');
    row.className = 'complete-btns';
    row.style.marginTop = '28px';
    const home = document.createElement('button');
    home.type = 'button';
    home.className = 'btn primary';
    home.textContent = 'All sections';
    home.addEventListener('click', goHome);
    row.appendChild(home);
    card.appendChild(row);
    body.appendChild(card);
    window.scrollTo(0, 0);
  }

  function beginSitting(spec){
    sit = {
      gen: sitGen,
      phase: 'ask',
      items: spec.items,
      index: 0,
      missed: [],
      retryIndex: 0,
      results: {},
      orders: {},
      locked: false,
      title: spec.title,
      sub: spec.sub || '',
      kind: spec.kind || '',
      setLabel: spec.setLabel || ''
    };
    location.hash = spec.hash || location.hash;
    show('scr-ex');
    if (!spec.items.length){
      showHead();
      $('ex-body').innerHTML = '<p class="ex-empty">No questions from the completed decks are ready yet.</p>';
      return;
    }
    renderSitting();
  }

  root.startExercise = function (ex) {
    const gen = ++sitGen;
    const store = courseStore();
    store.practice = store.practice || {};
    const rec = store.practice[ex.id] || (store.practice[ex.id] = { opens: 0 });
    rec.opens += 1;
    save();
    const sets = playableSets(ex);
    const set = sets[(rec.opens - 1) % sets.length];
    const items = itemsInSet(ex, set).map(it => copyItem(it));
    if (gen !== sitGen) return;
    beginSitting({
      hash: 'ex/' + ex.id,
      title: ex.title,
      kind: ex.kind === 'review' ? 'Section review' : 'Exercise',
      sub: ex.instr && ex.instr !== 'TODO' ? ex.instr : '',
      setLabel: set ? 'Set ' + set : '',
      items: items
    });
  };

  function rangeSections(sectionId){
    const out = [];
    for (const sec of ARS.structure || []){
      out.push(sec);
      if (sec.id === sectionId) break;
    }
    return out;
  }

  function collectPool(sectionId){
    const store = courseStore();
    const secs = rangeSections(sectionId);
    const decks = [];
    const exIds = [];
    secs.forEach(sec => {
      const order = (ARS.structure || []).indexOf(sec);
      sec.items.forEach(it => {
        if ((it.kind === 'study' || it.kind === 'study-ex') && it.built){
          const st = store.decks && store.decks[it.id];
          if (st && st.done) decks.push({ id: it.id, section: sec.id, sectionOrder: order, doneAt: st.doneAt || 0 });
        }
        if ((it.kind === 'exercise' || it.kind === 'review') && (it.built || (typeof hasPlan === 'function' && hasPlan(it.id)))){
          exIds.push(it.id);
        }
      });
    });
    const deckLoads = decks.map(d => loadDeck(d.id).then(deck => ({ meta: d, deck: deck })).catch(() => null));
    const exLoads = exIds.map(id => loadEx(id).then(ex => ex).catch(() => null));
    return Promise.all([Promise.all(deckLoads), Promise.all(exLoads)]).then(parts => {
      const done = {};
      decks.forEach(d => { done[d.id] = d; });
      const pool = [];
      const seen = new Set();
      parts[0].forEach(row => {
        if (!row || !row.deck) return;
        (row.deck.panels || []).forEach((p, pi) => {
          if (!p.qp || !p.qp.variants) return;
          p.qp.variants.forEach((v, vi) => {
            if (!v || !v.prompt || !Array.isArray(v.options) || typeof v.answer !== 'number') return;
            const id = row.deck.id + ':' + (p.qp.id || ('p' + pi)) + ':' + vi;
            if (seen.has(id)) return;
            seen.add(id);
            pool.push({
              id: id, deck: row.deck.id, section: row.meta.section, sectionOrder: row.meta.sectionOrder,
              doneAt: row.meta.doneAt, type: 'mc', prompt: v.prompt, options: v.options,
              answer: v.answer, explain: v.explain || ''
            });
          });
        });
      });
      parts[1].forEach(ex => {
        if (!ex || !Array.isArray(ex.items) || ex.status === 'plan') return;
        ex.items.forEach(it => {
          if (!itemPlayable(it) || !done[it.deck] || seen.has(it.id)) return;
          seen.add(it.id);
          const meta = done[it.deck];
          pool.push(copyItem(it, meta));
        });
      });
      return pool;
    });
  }

  root.startCumulative = function (sectionId) {
    const gen = ++sitGen;
    const sec = (ARS.structure || []).find(s => s.id === sectionId);
    if (!sec) return;
    const label = cumulativeRangeLabel(sec.roman);
    location.hash = 'cumul/' + sectionId;
    $('ex-kind').textContent = 'Cumulative Review';
    $('ex-title').textContent = 'Cumulative Review';
    $('ex-sub').textContent = label;
    $('ex-body').innerHTML = '<p class="ex-empty">The questions are being gathered.</p>';
    show('scr-ex');
    const anyDone = rangeSections(sectionId).some(s => s.items.some(studyDone));
    if (!anyDone){
      $('ex-body').innerHTML = '<p class="ex-empty">This review draws on the decks completed from the beginning of the course through this section. No deck in that range is completed yet.</p>';
      return;
    }
    collectPool(sectionId).then(pool => {
      if (gen !== sitGen) return;
      const items = buildReviewSitting(pool, courseStore().boxes || {}, Date.now(), REVIEW_SITTING);
      beginSitting({
        hash: 'cumul/' + sectionId,
        title: 'Cumulative Review',
        kind: 'Cumulative Review',
        sub: label,
        setLabel: '',
        items: items
      });
    }).catch(() => {
      if (gen !== sitGen) return;
      $('ex-body').innerHTML = '<p class="ex-empty">The questions could not be gathered.</p>';
    });
  };

  if (typeof buildHome === 'function') buildHome();
  const mx = location.hash.match(/^#ex\/(.+)$/);
  if (mx){
    let builtPractice = false;
    (ARS.structure || []).forEach(sec => {
      sec.items.forEach(it => {
        if (it.id === mx[1] && it.built && (it.kind === 'exercise' || it.kind === 'review')) builtPractice = true;
      });
    });
    // course.js already opens a file listed in ARS.exerciseFiles. Opening it again would advance the set.
    if (builtPractice && typeof openEx === 'function' && !(typeof hasPlan === 'function' && hasPlan(mx[1]))) openEx(mx[1]);
  }
  const cx = location.hash.match(/^#cumul\/(.+)$/);
  if (cx) startCumulative(cx[1]);
})();
