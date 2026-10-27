#!/usr/bin/env node
/* Runs every check in turn and keeps each one's whole output:
     node test/run-all.js
   The logs go to a fresh folder under the system's temporary folder, named at the end. A check that ends with
   Node's own crash report (the "Node.js v…" line) has its whole log printed, so the cause is never lost.
   Why (27 Oct 2026): browser-check.js crashed twice in about fourteen full runs inside the Dropbox folder, and
   never in sixteen runs of the same files outside it; the shortened output kept then did not show the cause.
   Exit code 1 if any check fails. */
'use strict';
const { spawnSync } = require('child_process');
const fs = require('fs'), path = require('path'), os = require('os');
const CHECKS = [
  ['course-levels-check.js'],
  ['guided-check.js'],
  ['browser-check.js', '--maker'],
  ['lang-order-speech-check.js'],
  ['levels-check.js']
];
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ag-checks-'));
let bad = 0;
for (const [file, ...args] of CHECKS){
  const r = spawnSync(process.execPath, [path.join(__dirname, file), ...args], { encoding:'utf8', maxBuffer:64 * 1024 * 1024 });
  const out = (r.stdout || '') + (r.stderr || '');
  const log = path.join(dir, file.replace(/\.js$/, '.log'));
  fs.writeFileSync(log, out);
  const last = out.trim().split('\n').filter(l => !/^\s/.test(l)).pop() || '';
  const crashed = /^Node\.js v/.test(last);
  if (r.status !== 0) bad++;
  console.log((r.status === 0 ? 'ok    ' : 'FAIL  ') + file + ': ' + (crashed ? 'crashed' : last));
  if (crashed) console.log(out);
}
console.log('Logs: ' + dir);
process.exit(bad ? 1 : 0);
