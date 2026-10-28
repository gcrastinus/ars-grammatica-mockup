#!/usr/bin/env node
/* Compares the key of every multiple-choice item with its explanation, in every exercise set (all languages):
     node test/key-explain-check.js [--all]
   For each option it counts the option's words (three letters or more, common words left out) that the explanation
   uses. An item is listed when another option matches the explanation clearly better than the keyed one: a sign
   that the key may sit at the wrong index (the error of 28 Oct 2026: three keys pointed past a correct explanation).
   A listed item is not necessarily wrong; read it. It also lists any option that is itself a list (three English items
   once had their whole option list nested as one option), and that is an error: exit code 1. Otherwise exit code 0.
   --all lists every item whose keyed option matches the explanation less well than another, however slightly. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const ctx = { }; ctx.window = ctx; vm.createContext(ctx);
(function walk(d){ for (const f of fs.readdirSync(d)){ const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f.endsWith('.js')) vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename:p }); } })(path.join(ROOT, 'data/exercises'));
const STOP = new Set('the and for are but not that this with from which what into its his her their they them than then there these those have has had was were been being also only one two any all its who whom whose when where why how does did doing done can may might must shall should will would each other more most such same used use uses word words form forms sentence some here because says said'.split(' '));
const norm = t => String(t).replace(/<[^>]+>/g, ' ').toLowerCase().normalize('NFC');
const stem = w => w.replace(/(ies|es|s|ed|ing)$/u, '');
const toks = t => (norm(t).match(/[\p{L}\p{M}]{3,}/gu) || []).filter(x => !STOP.has(x)).map(stem);
const score = (opt, ex) => { const w = [...new Set(toks(opt))]; if (!w.length) return { s:0, n:0 }; const n = w.filter(x => ex.has(x)).length; return { s:n / w.length, n }; };
const ALL = process.argv.includes('--all');
const out = [], nested = [];
let n = 0;
for (const e of Object.values(ctx.ARS.exercises)) for (const it of e.items || []) if (Array.isArray(it.options) && it.options.some(o => Array.isArray(o))) nested.push(it.id);
for (const [id, e] of Object.entries(ctx.ARS.exercises)) for (const it of e.items || []){
  if (!Array.isArray(it.options) || typeof it.answer !== 'number' || !it.explain) continue;
  n++;
  const ex = new Set(toks(it.explain));
  const sc = it.options.map(o => score(o, ex));
  const k = sc[it.answer] || { s:0, n:0 };
  let best = -1; sc.forEach((x, i) => { if (i !== it.answer && (best < 0 || x.s > sc[best].s)) best = i; });
  if (best >= 0 && sc[best].s >= (sc[best].n >= 2 ? 0.5 : 1) && sc[best].s - k.s >= (ALL ? 0.01 : 0.15)) out.push({ id:it.id, key:it.answer, keyed:norm(it.options[it.answer]).trim(), better:best, opt:norm(it.options[best]).trim(), explain:norm(it.explain).trim().slice(0, 220), d:+(sc[best].s - k.s).toFixed(2) });
}
out.sort((a, b) => b.d - a.d);
console.log(nested.length ? 'Options that are themselves lists: ' + nested.join(', ') : 'No option is itself a list.');
console.log(n + ' multiple-choice items compared; ' + out.length + ' listed.');
for (const o of out) console.log('\n' + o.id + '  (key ' + o.key + ', option ' + o.better + ' matches better by ' + o.d + ')\n  keyed:  ' + o.keyed + '\n  better: ' + o.opt + '\n  explain: ' + o.explain);
process.exit(nested.length ? 1 : 0);
