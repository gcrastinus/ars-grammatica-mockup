#!/usr/bin/env node
/* Checks every leveled exercise set (one with "levels") in data/exercises:
     node test/levels-check.js
   Each item's level lies between I and the top level (no level counts as Level I); "levels.counts" matches the items;
   every level has items and the top level has at least 10 (the mastery sitting is 10 questions); pass lies between I and top;
   every level has a name; ids are unique; every item added for levels (an id with "-L") has a "source".
   Exit code 1 on any failure. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const DIR = path.resolve(__dirname, '..', 'data', 'exercises');
const ctx = { window: {} }; ctx.window.ARS = {}; ctx.ARS = ctx.window.ARS; vm.createContext(ctx);
for (const f of fs.readdirSync(DIR).filter(f => f.endsWith('.js') && f !== 'index.js')) vm.runInContext(fs.readFileSync(path.join(DIR, f), 'utf8'), ctx, { filename: f });
const fails = []; let sets = 0;
for (const [id, ex] of Object.entries(ctx.ARS.exercises || {})) {
  if (!ex.levels) continue; sets++;
  const { pass, top, names, counts } = ex.levels, got = {}, ids = new Set();
  if (!(pass >= 1 && pass <= top)) fails.push(id + ': pass ' + pass + ' outside 1..' + top);
  for (const it of ex.items) {
    const L = it.level || 1; got[L] = (got[L] || 0) + 1;
    if (!(Number.isInteger(L) && L >= 1 && L <= top)) fails.push(id + ': ' + it.id + ' level ' + L);
    if (ids.has(it.id)) fails.push(id + ': duplicate id ' + it.id); ids.add(it.id);
    if (/-L\d-/.test(it.id) && !it.source) fails.push(id + ': ' + it.id + ' has no source');
  }
  for (let L = 1; L <= top; L++) {
    if (!got[L]) fails.push(id + ': Level ' + L + ' is empty');
    if (!names || !names[L]) fails.push(id + ': Level ' + L + ' has no name');
    if (counts && counts[L] !== got[L]) fails.push(id + ': counts[' + L + '] ' + counts[L] + ' but ' + got[L] + ' items');
  }
  if ((got[top] || 0) < 10) fails.push(id + ': top level has ' + (got[top] || 0) + ' items, fewer than 10');
}
fails.forEach(f => console.log('FAIL ' + f));
console.log(sets + ' leveled sets checked, ' + fails.length + ' failures.');
process.exit(fails.length ? 1 : 0);
