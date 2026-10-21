#!/usr/bin/env node
/* Audit of the particular-languages layer (LANGUAGES-LAYER-SPEC.md), run before every commit:
     node test/lang-audit.js            summary and failures
     node test/lang-audit.js --verbose  every set, every flag
     node test/lang-audit.js --json     machine-readable report
     node test/lang-audit.js --only=lang.iii-decl   failures and warnings for ids that begin so
   It loads every file in data/ in a sandbox (as the browser would), then checks, for each language exercise
   and each set (A, B, C):
     - the number of items in the exercise (at least 20 in all, divided into A, B, and C, unless the exercise
       carries `small: '<reason>'`), and that no set is empty;
     - the share of multiple-choice items whose correct option is strictly the longest (at most 1/3);
     - duplicate prompts (the same prompt, marked word included, asked twice in one exercise);
     - options (or marked words) equal to an example on the cards of the deck the exercise is paired with.
   It also checks that every screen item has its file, that every exercise is paired with a deck (or is
   marked `loose: true` on its screen), that every study deck has question points, that the tile counts
   ("21 questions.") are true, and it sweeps the prose for dashes, "Dr.", British spellings, and unquoted glosses.
   The generated Latin sets (fresh) are sampled 30 times. Exit code 1 when a check fails. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const VERBOSE = args.includes('--verbose');
const JSON_OUT = args.includes('--json');
const ONLY = (args.find(a => a.indexOf('--only=') === 0) || '').slice(7);

const sandbox = { console, Math, Date, JSON };
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
const loadErrors = [];
function load(file){
  try { vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file }); }
  catch (e) { loadErrors.push(path.relative(ROOT, file) + ': ' + e.message); }
}
function walk(dir){
  const out = [];
  for (const name of fs.readdirSync(dir)){
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.js')) out.push(p);
  }
  return out.sort();
}
load(path.join(ROOT, 'data/structure.js'));
load(path.join(ROOT, 'data/latin-forms.js'));
walk(path.join(ROOT, 'data')).filter(f => !/structure\.js$|latin-forms\.js$/.test(f)).forEach(load);
const ARS = sandbox.ARS || {};
const decks = ARS.decks || {}, exercises = ARS.exercises || {}, screens = ARS.languages || {};

const failures = [], warnings = [];
const keep = m => !ONLY || m.indexOf(ONLY) >= 0 || /^load: /.test(m);
const fail = m => { if (keep(m)) failures.push(m); }, warn = m => { if (keep(m)) warnings.push(m); };
loadErrors.forEach(e => fail('load: ' + e));

function plain(html){
  return String(html == null ? '' : html).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ').trim();
}
function norm(s){ return plain(s).toLowerCase().normalize('NFC').replace(/[“”"‘’'.,;:!?()«»„‚]/g, '').trim(); }

/* Pairing, as course.js does it: an explicit `ex` on a study item, an `exFor` on the exercise, or id + '-ex'. */
const deckEx = {};
const loose = [];
Object.values(screens).forEach(sc => {
  const items = sc.items || [];
  const byId = {}; items.forEach(it => { byId[it.id] = it; });
  const usable = id => byId[id] && byId[id].kind === 'exercise' && byId[id].built;
  items.forEach(it => {
    if (it.kind === 'study' && it.built && it.ex && usable(it.ex)) deckEx[it.id] = it.ex;
  });
  items.forEach(it => {
    if (it.kind === 'exercise' && it.built && it.exFor && byId[it.exFor] && !deckEx[it.exFor]) deckEx[it.exFor] = it.id;
  });
  items.forEach(it => {
    if (it.kind === 'study' && it.built && !deckEx[it.id] && usable(it.id + '-ex')) deckEx[it.id] = it.id + '-ex';
  });
  const paired = new Set(Object.values(deckEx));
  items.forEach(it => {
    if (it.kind === 'exercise' && !paired.has(it.id)) loose.push({ screen: sc.id, id: it.id, allowed: !!it.loose });
  });
  /* one Exercise button per deck: no deck paired with two exercises */
  items.forEach(it => {
    if (it.kind === 'study' && !deckEx[it.id] && it.built && !it.noEx && !(sc.bar === 'x'))
      warn('deck without exercise: ' + it.id);
  });
});
loose.forEach(l => (l.allowed ? warn : fail)('loose exercise (no deck): ' + l.id));

/* Files for every screen item; tile counts; no id twice on a screen. */
Object.values(screens).forEach(sc => {
  const seenIds = new Set();
  (sc.items || []).forEach(it => { if (seenIds.has(it.id)) fail('item twice on screen: ' + it.id); seenIds.add(it.id); });
  (sc.items || []).forEach(it => {
    if (!it.built) return;
    if (it.kind === 'exercise'){
      const ex = exercises[it.id];
      if (!ex) { fail('no exercise file: ' + it.id); return; }
      const m = String(it.desc || '').match(/(\d+) questions?\./);
      const n = typeof ex.fresh === 'function' ? null : (ex.items || []).length;
      if (m && n != null && +m[1] !== n) fail(`tile count ${it.id}: says ${m[1]}, has ${n}`);
    } else if (!decks[it.id]) fail('no deck file: ' + it.id);
  });
});

/* Card examples of a deck: italic and quoted strings in panel bodies. */
function examplesOf(deck){
  const set = new Set();
  (deck && deck.panels || []).forEach(p => {
    const b = String(p.body || '');
    for (const re of [/<(?:i|em)>([^<]{2,80})<\/(?:i|em)>/g, /“([^”]{2,80})”/g]){
      let m; while ((m = re.exec(b))) { const k = norm(m[1]); if (k.length > 1) set.add(k); }
    }
  });
  return set;
}
const GLOSS_RE = /^(to |the |a |an |of |“)/;

function longestShare(items){
  const mcs = items.filter(x => (x.type === 'mc' || x.type === 'mc-marked' || (!x.type && x.options)) && Array.isArray(x.options));
  let longest = 0;
  mcs.forEach(x => {
    const L = x.options.map(o => plain(o).length);
    const a = L[x.answer];
    if (L.every((l, k) => k === x.answer || a > l)) longest++;
  });
  return { mc: mcs.length, longest };
}

const report = [];
Object.keys(exercises).filter(id => id.indexOf('lang.') === 0).sort().forEach(id => {
  const ex = exercises[id];
  const row = { id, sets: {}, dupes: [], cardHits: [], small: ex.small || '' };
  if (typeof ex.fresh === 'function'){
    let mc = 0, longest = 0, n = 0;
    for (let k = 0; k < 30; k++){
      let items = [];
      try { items = ex.fresh(20) || []; } catch (e) { fail('fresh failed: ' + id + ': ' + e.message); break; }
      n = Math.max(n, items.length);
      const s = longestShare(items); mc += s.mc; longest += s.longest;
    }
    row.sets.fresh = { n, mc, longest, share: mc ? longest / mc : 0 };
    if (mc && longest / mc > 1/3 + 1e-9) fail(`${id} (generated): correct option longest in ${(100 * longest / mc).toFixed(0)}%`);
    report.push(row);
    return;
  }
  const items = ex.items || [];
  const setNames = ex.sets ? Object.keys(ex.sets) : ['A', 'B', 'C'];
  const shared = items.filter(x => x.set === 'all');
  setNames.forEach(S => {
    const own = items.filter(x => x.set === S);
    const its = own.length ? own.concat(shared) : shared;
    const s = longestShare(its);
    row.sets[S] = { n: its.length, mc: s.mc, longest: s.longest };
    if (!its.length) fail(`${id} set ${S}: empty`);
    if (s.mc && s.longest / s.mc > 1/3 + 1e-9) fail(`${id} set ${S}: correct option longest in ${s.longest}/${s.mc}`);
  });
  if (items.length < 20 && !ex.small) fail(`${id}: ${items.length} items (under 20)`);
  const seen = {};
  items.forEach(x => {
    const marks = (String(x.prompt || '').match(/<b>[^<]*<\/b>/g) || []).join(' ');
    const k = norm(x.prompt) + '|' + norm(marks) + '|' + (x.passage ? norm(x.passage).slice(0, 60) : '') + '|' + (x.tokens ? norm(x.tokens.join(' ')) : '') +
      '|' + (x.entries ? norm(x.entries.join(' ')) : '');
    if (seen[k]) row.dupes.push(seen[k] + ' = ' + x.id); else seen[k] = x.id;
  });
  row.dupes.forEach(d => fail(`${id}: duplicate prompt ${d}`));
  const deckId = Object.keys(deckEx).find(d => deckEx[d] === id);
  const exs = /\/(prose|poetry)-ex$/.test(id) ? new Set() : examplesOf(decks[deckId]);
  if (exs.size){
    items.forEach(x => {
      const marked = (String(x.prompt || '').match(/<b>([^<]+)<\/b>/g) || []).map(m => norm(m));
      const opts = (x.options || []).map(norm);
      const bodyQ = (String(x.prompt || '').match(/<(?:i|em)>([^<]{3,80})<\/(?:i|em)>/g) || []).map(norm);
      const hits = marked.concat(bodyQ).filter(k => k.length > 2 && exs.has(k) && !GLOSS_RE.test(k));
      const optHit = opts.filter(k => k.split(' ').length > 1 && exs.has(k));
      if (hits.length || optHit.length) row.cardHits.push(x.id + ': ' + hits.concat(optHit).join(' / '));
    });
  }
  row.cardHits.forEach(h => warn(`${id}: card example ${h}`));
  report.push(row);
});

/* Question points on language decks. */
const qpReport = [];
Object.keys(decks).filter(id => id.indexOf('lang.') === 0).sort().forEach(id => {
  const d = decks[id];
  const panels = d.panels || [];
  const qps = panels.filter(p => p.qp);
  const bad = qps.filter(p => !p.qp.variants || p.qp.variants.length !== 3);
  qpReport.push({ id, panels: panels.length, qp: qps.length });
  if (!qps.length && !d.models) fail('no question points: ' + id);
  bad.forEach(p => fail(`${id}/${p.id}: question point without three variants`));
  qps.forEach(p => (p.qp.variants || []).forEach((v, k) => {
    if (!Array.isArray(v.options) || typeof v.answer !== 'number' || !v.options[v.answer]) fail(`${id}/${p.id} variant ${k}: bad answer`);
  }));
  const vs = [].concat(...qps.map(p => p.qp.variants || []));
  const ls = longestShare(vs.map(v => Object.assign({ type: 'mc' }, v)));
  qpReport[qpReport.length - 1].longest = ls.longest; qpReport[qpReport.length - 1].variants = ls.mc;
  if (ls.mc && ls.longest / ls.mc > 1/3 + 1e-9) fail(`${id}: question points, correct option longest in ${ls.longest}/${ls.mc}`);
});

/* Prose sweep over the layer's strings. */
function strings(obj, out, key){
  if (typeof obj === 'string') { if (!/^(id|deck|set|type|section|status|kind|src|bar|code|formerId)$/.test(key || '')) out.push(obj); return out; }
  if (Array.isArray(obj)) { obj.forEach(x => strings(x, out, key)); return out; }
  if (obj && typeof obj === 'object') Object.keys(obj).forEach(k => strings(obj[k], out, k));
  return out;
}
const layer = []
  .concat(...Object.keys(decks).filter(i => i.indexOf('lang.') === 0).map(i => strings(decks[i], [], '').map(s => [i, s])))
  .concat(...Object.keys(exercises).filter(i => i.indexOf('lang.') === 0).map(i => strings(exercises[i], [], '').map(s => [i, s])))
  .concat(...Object.keys(screens).map(i => strings(screens[i], [], '').map(s => [i, s])));
const sweeps = {
  'dash': /[A-Za-z,)”’>] ?— ?[A-Za-z<“(]| – | - (?![0-9])/,
  'Dr.': /\bDr\./,
  'British spelling': /\b(colour|centre|metre(?!s)|honour|favour|labour|behaviour|neighbour|realise|recognise|organise|emphasise|analyse|catalogue|grey)\b/i,
  'unquoted gloss': /<\/(?:i|em)> \((?:to |the |a |an )[a-z][^)“”]*\)/
};
const sweepHits = {};
layer.forEach(([id, s]) => {
  Object.keys(sweeps).forEach(k => {
    if (sweeps[k].test(s)) (sweepHits[k] = sweepHits[k] || []).push(id + ': ' + plain(s).slice(0, 140));
  });
});
Object.keys(sweepHits).forEach(k => sweepHits[k].forEach(h => warn(k + ': ' + h)));

if (JSON_OUT){
  console.log(JSON.stringify({ failures, warnings, report, qpReport, loose }, null, 1));
} else {
  console.log(`Loaded ${Object.keys(decks).length} decks, ${Object.keys(exercises).length} exercises, ${Object.keys(screens).length} language screens.`);
  if (VERBOSE){
    report.filter(r => !ONLY || r.id.indexOf(ONLY) === 0).forEach(r => console.log(r.id.padEnd(40), Object.entries(r.sets).map(([s, v]) => `${s} ${v.n} (${v.longest}/${v.mc})`).join('  '), r.small ? '[small: ' + r.small + ']' : ''));
    qpReport.filter(q => !ONLY || q.id.indexOf(ONLY) === 0).forEach(q => console.log('deck', q.id.padEnd(40), q.panels + ' panels, ' + q.qp + ' qp' + (q.variants ? ` (longest ${q.longest}/${q.variants})` : '')));
  }
  console.log(`\n${warnings.length} warnings` + (VERBOSE ? ':' : ' (--verbose to list).'));
  if (VERBOSE) warnings.forEach(w => console.log('  warn  ' + w));
  console.log(`${failures.length} failures${failures.length ? ':' : '.'}`);
  failures.forEach(f => console.log('  FAIL  ' + f));
}
process.exitCode = failures.length ? 1 : 0;
