'use strict';
/* Cumulative review and Leitner boxes (ITEM-LIST.md rules 8, 8a, and 11;
   EXERCISES-PLAN.md, build list 2–4). Written sets and section reviews run in course.js (runEx).

   Progress stays in the course record (localStorage key ars-grammatica-course-v2):

   store.boxes = {
     'sv-sign-1': { box: 1, dueAt: <ms>, deck: 'i.sign', section: 'i' }
   }

   Boxes 1–5 fall due after REVIEW_BOX_DAYS (1, 3, 7, 14, and 30 days). A wrong answer
   returns the item to box 1. A right answer moves it up one box. An item not seen before
   is treated as box 1 at the moment it is answered, so a miss is due in 1 day and a
   success in 3. The second try at the end of a sitting does not change the box.

   Drawing and grading live only in course.js. This file chooses which items can enter a
   sitting and copies the fields the runner reads. acceptList asks acceptedOf whether a
   count, form, divide, or transform item has an answer.
*/
(function () {
  const root = typeof window !== 'undefined' ? window : globalThis;
  const ARS = root.ARS = root.ARS || {};

  const REVIEW_BOX_DAYS = [1, 3, 7, 14, 30];
  const REVIEW_SITTING = 20;
  const DAY_MS = 24 * 60 * 60 * 1000;

  function acceptList(item){
    if (typeof acceptedOf === 'function') return acceptedOf(item);
    return [];
  }

  function itemPlayable(it){
    if (!it || it.todo || !it.prompt) return false;
    const type = it.type || (Array.isArray(it.options) ? 'mc' : '');
    if (type === 'mc' || type === 'mc-marked' || type === 'passage-mc'){
      return Array.isArray(it.options) && it.options.length > 1 && typeof it.answer === 'number';
    }
    if (type === 'count' || type === 'form' || type === 'divide' || type === 'transform') return acceptList(it).length > 0;
    if (type === 'identify'){
      return Array.isArray(it.tokens) && it.tokens.length > 0 &&
        (typeof it.answer === 'number' || (Array.isArray(it.answer) && it.answer.length > 0));
    }
    if (type === 'sort'){
      return Array.isArray(it.entries) && it.entries.length > 0 &&
        Array.isArray(it.bins) && it.bins.length > 1 &&
        Array.isArray(it.answer) && it.answer.length === it.entries.length;
    }
    if (type === 'mark'){
      return Array.isArray(it.tokens) && it.tokens.length > 0 && Array.isArray(it.analysis) && it.analysis.length > 0;
    }
    if (type === 'analysis'){
      const a = it.analysis;
      return Array.isArray(it.tokens) && it.tokens.length > 0 && !!a &&
        Array.isArray(a.parse) && a.parse.length === it.tokens.length && Array.isArray(a.arrows);
    }
    if (type === 'copy') return typeof it.text === 'string' && !!it.text.trim();
    return false;
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
  ARS.scheduleReview = scheduleReview;
  ARS.buildReviewSitting = buildReviewSitting;
  ARS.cumulativeRangeLabel = cumulativeRangeLabel;

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
      if (!reviewSourceDone(b.deck)) return;
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

  /* The last section that carries a roman numeral is the Final Review. */
  function lastNumberedSection(){
    let last = null;
    (ARS.structure || []).forEach(sec => { if (sec && sec.roman) last = sec; });
    return last;
  }
  function reviewHeading(sec){
    const last = lastNumberedSection();
    if (last && sec && sec.id === last.id) return { title: 'Final Review', sub: 'The whole course' };
    return { title: 'Cumulative Review', sub: cumulativeRangeLabel(sec.roman) };
  }

  root.cumulativeBar = function (sec) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'cumul-bar';
    b.dataset.section = sec.id;
    const head = reviewHeading(sec);
    const h = document.createElement('span');
    h.className = 'cumul-h';
    h.textContent = head.title;
    const p = document.createElement('span');
    p.className = 'cumul-range';
    p.textContent = head.sub;
    b.appendChild(h);
    b.appendChild(p);
    b.addEventListener('click', () => startCumulative(sec.id));
    return b;
  };

  const $ = id => document.getElementById(id);
  let cumulGen = 0;
  function promptKey(s){
    return String(s || '').replace(/\s+/g, ' ').trim();
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
      order: it.order,
      explain: it.explain || '',
      tokens: it.tokens,
      text: it.text,
      analysis: it.analysis,
      why: it.why,
      entries: it.entries,
      bins: it.bins
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

  /* A general item waits until its study deck is finished. A language item waits until
     that language deck or that language exercise has been finished. */
  function reviewSourceDone(deckId){
    const store = courseStore();
    const deck = store.decks && store.decks[deckId];
    if (deck && deck.done) return true;
    if (deckId && String(deckId).indexOf('lang.') === 0){
      const ex = store.ex && store.ex[deckId];
      if (ex && ex.done) return true;
    }
    return false;
  }

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
        const dx = ARS.deckEx && ARS.deckEx[it.id];
        if (dx && hasPlan(dx) && exIds.indexOf(dx) < 0) exIds.push(dx);
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
      return collectLanguagePool(secs, pool, seen);
    });
  }

  /* Language-screen items join the cumulative review only after the student has finished them. */
  function collectLanguagePool(secs, pool, seen){
    const store = courseStore();
    const ids = new Set(secs.map(s => s.id));
    const screens = Object.keys(ARS.languages || {}).map(k => ARS.languages[k]).filter(sc => sc && ids.has(sc.section));
    const orderOf = {};
    (ARS.structure || []).forEach((sec, i) => { orderOf[sec.id] = i; });
    const loads = [];
    screens.forEach(sc => {
      (sc.items || []).forEach(it => {
        if (!it || !it.built) return;
        if ((it.kind === 'study' || it.kind === 'study-ex')){
          const st = store.decks && store.decks[it.id];
          if (st && st.done) loads.push(loadDeck(it.id).then(deck => ({ kind:'deck', it:it, sc:sc, deck:deck, st:st })).catch(() => null));
        }
        if (it.kind === 'exercise'){
          const st = store.ex && store.ex[it.id];
          if (st && st.done) loads.push(loadEx(it.id).then(ex => ({ kind:'ex', it:it, sc:sc, ex:ex, st:st })).catch(() => null));
        }
      });
    });
    if (!loads.length) return pool;
    return Promise.all(loads).then(rows => {
      const prompts = new Set(pool.map(it => promptKey(it.prompt)));
      rows.forEach(row => {
        if (!row) return;
        const order = orderOf[row.sc.section] || 0;
        if (row.kind === 'deck' && row.deck){
          (row.deck.panels || []).forEach((p, pi) => {
            if (!p.qp || !p.qp.variants) return;
            p.qp.variants.forEach((v, vi) => {
              if (!v || !v.prompt || !Array.isArray(v.options) || typeof v.answer !== 'number') return;
              const id = row.deck.id + ':' + (p.qp.id || ('p' + pi)) + ':' + vi;
              const key = promptKey(v.prompt);
              if (seen.has(id) || prompts.has(key)) return;
              seen.add(id);
              prompts.add(key);
              pool.push({
                id:id, deck:row.deck.id, section:row.sc.section, sectionOrder:order,
                doneAt:row.st.doneAt || 0, type:'mc', prompt:v.prompt, options:v.options,
                answer:v.answer, explain:v.explain || ''
              });
            });
          });
        }
        if (row.kind === 'ex' && row.ex && row.ex.status !== 'plan'){
          const generated = typeof row.ex.fresh === 'function';
          const list = generated ? row.ex.fresh(row.ex.reviewCount || 4) : (row.ex.items || []);
          list.forEach(it => {
            const key = promptKey(it.prompt);
            if (!itemPlayable(it) || seen.has(it.id) || prompts.has(key)) return;
            seen.add(it.id);
            prompts.add(key);
            pool.push(copyItem(it, {
              section:row.sc.section, sectionOrder:order, doneAt:row.st.doneAt || 0
            }));
          });
        }
      });
      return pool;
    });
  }

  /* A finished language-screen deck or exercise counts, as well as a general deck. */
  function languageItemDone(sectionId){
    const store = courseStore();
    const ids = new Set(rangeSections(sectionId).map(s => s.id));
    return Object.keys(ARS.languages || {}).some(k => {
      const sc = ARS.languages[k];
      if (!sc || !ids.has(sc.section)) return false;
      return (sc.items || []).some(it => {
        if (!it || !it.built) return false;
        if (it.kind === 'study' || it.kind === 'study-ex'){
          const st = store.decks && store.decks[it.id];
          return !!(st && st.done);
        }
        if (it.kind === 'exercise'){
          const st = store.ex && store.ex[it.id];
          return !!(st && st.done);
        }
        return false;
      });
    });
  }

  root.startCumulative = function (sectionId) {
    const gen = ++cumulGen;
    const sec = (ARS.structure || []).find(s => s.id === sectionId);
    if (!sec) return;
    const head = reviewHeading(sec);
    location.hash = 'cumul/' + sectionId;
    $('ex-kind').textContent = head.title;
    $('ex-title').textContent = head.title;
    $('ex-sub').textContent = head.sub;
    $('ex-body').innerHTML = '<p class="ex-empty">The questions are being gathered.</p>';
    show('scr-ex');
    const anyDone = rangeSections(sectionId).some(s => s.items.some(studyDone)) || languageItemDone(sectionId);
    if (!anyDone){
      $('ex-body').innerHTML = '<p class="ex-empty">This review draws on the decks completed from the beginning of the course through this section. No deck in that range is completed yet.</p>';
      return;
    }
    collectPool(sectionId).then(pool => {
      if (gen !== cumulGen) return;
      const items = buildReviewSitting(pool, courseStore().boxes || {}, Date.now(), REVIEW_SITTING);
      if (!items.length){
        $('ex-body').innerHTML = '<p class="ex-empty">No questions from the completed decks are ready yet.</p>';
        return;
      }
      runQueue({
        items: items,
        hash: 'cumul/' + sectionId,
        kind: head.title,
        title: head.title,
        sub: head.sub
      });
    }).catch(() => {
      if (gen !== cumulGen) return;
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
