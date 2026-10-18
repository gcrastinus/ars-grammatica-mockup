# Next step: building Sections I–XI of Ars Grammatica v2

## Current stage (17 Oct 2026): read this first

The Preliminaries and all of Section I are finished in Timothy's hand. Sections II–XI exist as Claude's drafts. The work now goes in this order:

1. **Revision pass over Sections II–XI**, card by card, to match the finished Preliminaries and Section I. **Read STYLE-GUIDE-CARDS.md first**: it consolidates every rule and gives before/after pairs from Timothy's edits; its first rule is realities first, then the principle, then the tradition. Then read the finished decks (`data/decks/prelim.*.js`, `data/decks/i.*.js`) in full.
2. **Question points and exercises.** Write the `qpTodo` placeholders as question points (three variants each) and the exercise sets and section reviews (EXERCISES-PLAN.md, `data/exercises/`), after each deck's cards are revised, following STYLE-GUIDE-CARDS.md rule 28.
3. **Recitation Tablet**, after the decks are settled (ITEM-LIST.md, "Recitation Tablet"; section 11 below). Each deck gets a `recitation` outline once its cards are final.

Where sections 1–10 below (written when Section I was first built) differ from STYLE-GUIDE-CARDS.md, the guide wins; in particular, lists are now written in prose, not as `<br>` lines.

### Prompt for the revision pass

> Read STYLE-GUIDE-CARDS.md, then NEXT-STEP.md ("Current stage"), CLAUDE.md, and the newest entries in REVISION-GUIDE.md. Revise Section II card by card to match the finished Preliminaries and Section I, without changing doctrine, citations, ids, or answer keys. Commit one deck at a time. End with a report whose last part is a short numbered list of the decisions that need me, each explained in context.


## Prompt for Timothy to paste into Claude Code

> Read NEXT-STEP.md in this repository and follow it exactly. Build Section I (Sign and Significant Voice) only, in the mockup repository, following the reading order and process it gives. When Section I is drafted, reviewed against the guides, checked, and committed, stop and give me your report, including every doubtful wording and source question; do not start Section II or touch the live app until I have reviewed Section I.

### Later prompts (same file, nothing else to read)

After Timothy reviews Section I and his edits are logged in REVISION-GUIDE.md:

> Read NEXT-STEP.md again, including section 10 and the newest entries in REVISION-GUIDE.md, which record my revisions of Section I. Build Section II the same way, then stop and report.

If Section II needs only light editing, Timothy may then say:

> Read NEXT-STEP.md and the newest entries in REVISION-GUIDE.md. Build Sections III and IV, one after the other, committing each, then stop and report on both.

---

## 1. Goal

The Preliminary section (four decks) is finished. Timothy revised every card himself, and those four decks are now the model for every later deck. The task is to build the content for everything else, Sections I–XI, as planned in ITEM-LIST.md, drawing on what was already written in the earlier live app.

Work one section at a time. Timothy reviews each section before the next one is started. Build only what ITEM-LIST.md specifies for that section (decks, question points, exercise sets, section review), with its ids, panel counts, question point counts, and sources.

## 2. Reading order (before writing anything)

1. STYLE-GUIDE-CARDS.md (the consolidated card style guide; read it first), then CLAUDE.md (the wording rules; the main problem to avoid; the model passages).
2. REVISION-GUIDE.md, section A (decisions that apply everywhere), then section K (patterns from Timothy's own rewrite of P.3 and P.4), then section D (patterns from the Tasks of the Grammarian deck). Skim B and the logs C–J for examples.
3. STYLE-GUIDE-TIMOTHY.md (his general expository voice; CLAUDE.md and REVISION-GUIDE.md win where they differ).
4. The four finished decks, read in full as the model of finished text: data/decks/prelim.definition.js, prelim.offices.js, prelim.methodice.js ("Precepts and Interpretation"), prelim.criteria.js. Note how cards open, how terms are glossed, how examples are explained, how the questions and explanations are written.
5. The ITEM-LIST.md entry for the section being built, plus "Rules that apply to every item" at the top of ITEM-LIST.md.
6. The matching material in the earlier live app (section 3 below).

## 3. Source material in the earlier live app

The live app is gcrastinus/ars-grammatica, a single file, index.html (about 2 MB). Do not open it whole; search it with rg or a short Python script. Its structures:

- `DECKS.<key> = { title, sub, panels:[ { src:[...], h:`...` }, ... ] }` are the study decks (the block starts at `const DECKS = {};`).
- `const SRC = {...}` is the source registry; `DECK_TOP` lists each deck's main sources by SRC key; `DECK_CITE` gives per-card citations.
- `EX.<key> = { id, src, act, title, desc, instr, gen(d){...} }` are the exercise sets. Their items usually sit in arrays declared just before them (for example `MODE_ITEMS`, `SUP_ITEMS`, `FIG_ITEMS`), or inline in `gen`.
- `attachIntros()` holds a short intro per exercise set (`const I = { vox:[...], letter:[...], ... }`), with `h` text and `eg` example lists. These contain useful examples (but example lists are not used in v2; put examples in the text).
- The earlier Preliminary deck `DECKS.prelim` ("What Grammar Is," 15 panels) was replaced by the four new decks. It survives at the git tag `v-before-prelim-swap`: `git show v-before-prelim-swap:index.html`.

The "Reuse" line of each ITEM-LIST.md entry names the live keys to draw on. Mapping for Sections I and II:

**Section I, Sign and Significant Voice**

| ITEM-LIST entry | Live material to draw on |
|---|---|
| I.1 Sign and Symbol `[i.sign]` | `DECKS.traditions` ("Three Ways of Studying Language"), the panels on John of St. Thomas (Poinsot) and on the sign; old `DECKS.prelim` (tag `v-before-prelim-swap`), the panels "The material" and "From voice to the sentence" (voice and concept). Beware: the Saussure panels in `traditions` belong to XI. |
| I.2 Imposition `[i.imposition]` | `DECKS.vox`, the panel "Significant and not significant" (signifying by imposition, not by nature); old `DECKS.prelim` panel 14 ("Where this question has been argued"); the passages on imposition in `DECKS.modes` ("The Reasons for the Parts") and `DECKS.suppos`. |
| I.3 Signification and Consignification `[i.consignification]` | `DECKS.modes`, the panels on why the verb signifies time ("Noun and verb," "The same thing, signified twice"). The rest of `modes` belongs to III.2. |
| I.4 Categorematic and Syncategorematic Words `[i.syncategorematic]` | Little: one mention of the syncategoremata in `DECKS.suppos`. Build mainly from the sources. |
| I.5 The Functions of Language `[i.functions]` | None. Build from the sources. |
| I.6 Ambiguity `[i.ambiguity]` | `DECKS.figura` ("The Figure of Speech," 3 panels) and `FIG_ITEMS`. These teach Aristotle's fallacy of the figure of speech; rewrite so that the deck stays on the grammatical side (where the double sense lies: in a word or in the construction) and only names the boundary with logic. |
| Exercise set `[i.ex.sign]` (72 items, sets A, B, C of 24, 4 per deck) | The best items of `EX.vox` (the sounds: groan, bark, and so on, those that concern signification) and `EX.modes` (`MODE_ITEMS`, only items about signification, not about the parts of speech, which are taught in III). Ambiguity items are new, of the two kinds ITEM-LIST.md allows. |

**Section II, The Matter of Speech**

| ITEM-LIST entry | Live material to draw on |
|---|---|
| II.1 Voice `[ii.voice]` | `DECKS.vox` (5 panels), nearly whole; `EX.vox` items become question point variants; the `vox` intro in `attachIntros`. |
| II.2 The Letter and Orthography `[ii.letter]` | `DECKS.letter` (6 panels: name, shape, power; vowel and consonant; semivowel and mute; sound and writing); `EX.letter`; the pronunciation notes in `DECKS.syllable`. |
| II.3 The Syllable `[ii.syllable]` (with its exercise) | `DECKS.ensyl` and `DECKS.syllable` (division rules); items from `EX.ensyl` and `EX.syllable`. |
| II.4 Quantity and Accent `[ii.quantity]` (with its exercise) | `DECKS.syllable` (quantity, long by nature and by position, the penultimate law); `DECKS.ensyl` (primary and secondary stress, suffixes that move the stress); examples only from `grcsyl`, `desyl`, `frsyl` (built at runtime as `DECKS[k + 'syl']`). |
| II.5 Punctuation `[ii.punctuation]` | The *distinctio* panels in `DECKS.period`. |
| II.6 Feet and Meter `[ii.meter]` | `DECKS.meter` (12 panels), `DECKS.enmeter` (6), and single lines from `grcmeter`, `demeter`, `frmeter`. |
| Section review `[ii.review]` | New questions (45, three fixed sets of 15); not reused from the question points. |

**General method for III–XI.** For each entry: (1) read its "Reuse" line in ITEM-LIST.md; (2) find each named key with rg (`rg -n "^DECKS\.KEY =|^EX\.KEY =" index.html`) and read only that block; (3) also search the panel headings (`<strong>…</strong>`) of nearby decks for the topic, and the English and Latin language decks (`enpos`, `enacc`, `latnoun`, `latverb`, and so on) for examples; (4) list in your report, per deck, which live panels and items you drew on. Where the Reuse line says "none" or "little," build from the listed sources and say so.

## 4. File format

Each deck is one file, `data/decks/<id>.js`, with the id from ITEM-LIST.md (for example `data/decks/i.sign.js`). A real example, abridged from data/decks/prelim.criteria.js (the third variant is omitted here; every question point has exactly three):

```js
/* P.4 The Criteria of Correctness [prelim.criteria]
   Plan (ITEM-LIST.md): 8 panels, 2 question points, each with exactly 3 variants. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['prelim.criteria'] = {
  id: 'prelim.criteria',
  title: 'The Criteria of Correctness',
  sub: 'Reason, antiquity, authority, and usage',
  sources: `Quintilian, <i>Institutio oratoria</i> I.5–6; Varro, <i>De lingua Latina</i> VIII–X; Donatus, <i>Ars maior</i> III.`,
  panels: [

{ id: 'reason',
  title: 'What is reason, and how do analogy and etymology support it?',
  body: `<p>The first criterion is reason (<i>ratio</i>). Quintilian says: “Reason finds its chief support in analogy and sometimes in etymology” (I.6.1). <strong>Analogy</strong> here is the comparison of a doubtful form with a certain one … </p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.1, I.6.4–5.`,
  qp: { id: 'q-reason', variants: [
    { prompt: `A child says “goed” because the past tense of “walk” is “walked.” Which criterion is the child following?`,
      options: [`Antiquity`, `Authority`, `Reason, by analogy`, `Etymology alone`],
      answer: 2,
      explain: `The child compares a doubtful form with a certain one of the same kind, which is analogy, the chief support of reason. The form is nevertheless incorrect, because the agreed practice of educated speakers is “went.”` },
    { prompt: `What is analogy, as Quintilian defines it?`,
      options: [`The proof of the uncertain by reference to the certain`, `The use of words found in the oldest writers`, `The practice of the majority of speakers`, `The study of the origin of words`],
      answer: 0,
      explain: `Quintilian defines analogy as “…” (I.6.4). The origin of words is etymology.` }
    /* , third variant */
  ]}},

  ]
};
```

Points to keep:
- `sources` is deck-level, backbone sources only, shown on the first panel. Each panel's `src` is a short citation record for the card (the renderer does not show it as a per-panel source line); quotations are cited in the text itself.
- Panel `id`s are short, stable, lowercase. Question point ids start with `q-`. `answer` is the 0-based index; vary the position of the correct option across variants.
- Explanations begin with the content, not with "Correct" (the renderer adds "Correct"/"Incorrect").
- Body HTML: `<p>` paragraphs; `<strong>` for a term at the point where it is defined; `<i>` for Latin and other foreign words and for titles; lists written in prose ("first, … second, …"; STYLE-GUIDE-CARDS.md rule 14); no `<ul>`; no example list at the bottom.
- Register the deck in data/structure.js by adding `built:true` to its item (the item and id already exist). Do not change ids, titles, or order in structure.js without Timothy's approval; if a title should change, propose it.
- Exercise sets and section reviews: there is no finished model yet. Propose a data format in your report for the first one (items with `id`, `prompt`, `options`, `answer`, `explain`, and the set letter A/B/C), draft it in `data/exercises/<id>.js`, and keep it separate from the decks. If time is short, finish the decks of the section first and leave the set for the next round, saying so.

## 5. Reuse versus rewrite

- **Reuse** the doctrine, the good examples, the citations (after checking them), and exercise items, which become question point variants where ITEM-LIST.md rule 6 says the live exercise does not survive as an exercise.
- **Rewrite** all prose to the new standard: the finished Preliminary decks, CLAUDE.md, and REVISION-GUIDE.md. The earlier app's prose was written before these rules, and much of it breaks them (all-caps headings such as "THE FIRST ART.", fragments, "Label: fragment" lines, aphoristic closers, coaching "you," dashes, example lists).
- **Never copy** wording that violates CLAUDE.md, even when the doctrine is right. Never copy a translation without confirming it is the published one listed in sources/TRANSLATIONS-USED.md or ITEM-LIST.md.

## 6. Rules that are easy to miss

- A.11: the two parts of grammar are "precepts" and "interpretation"; never "principles" for the first part; gloss *methodice*/*historice* wherever they appear.
- A.12: no "the previous deck," "the next deck," "the last card." Say "We have seen…," "as we saw in the Preliminary section," "we will see in Section VI."
- No translator names in the text (A.6); record them in sources/TRANSLATIONS-USED.md. Never credit "T. Kearns" unless he made the translation.
- Translations must be real published ones or Timothy's own; never invent one; mark anything unverified. Sources marked "rule 9" in ITEM-LIST.md have no published English translation: quote the Latin and leave a marked placeholder for Timothy's translation, or paraphrase and say "in paraphrase."
- American spelling (center, meter, color, license), except inside quotations.
- Feedback words are "Correct" and "Incorrect."
- An English word mentioned as a word takes double quotation marks ("thing"); a foreign word, or a foreign example sentence, is italic (*res*); English example sentences take double quotation marks.
- Lists: written in prose with ordinals ("first, … second, …; and, finally, …"), complete, English term first with Latin in italic parentheses. No `<ul>`, and no new `<br>` lists (STYLE-GUIDE-CARDS.md rule 14).
- No technical terms before they are taught (A.7). In Section I no term from III or later is assumed (case, declension, mood) without a plain gloss, and exercise items test only I.1–I.6.
- Examples go in the text, more than one when illustrating a kind (A.4); every foreign example is translated.
- "Fault" and "office" only when reporting the ancients (A.1, A.2).
- Do not reuse the wording or arguments of the Introduction to the Trivium (A.8); link to it if general reasons are needed. The model passages in CLAUDE.md show style only.
- Ancient sources' own account first, then the general philosophical reasons (A.9).
- When Timothy supplies text in chat, keep existing bold and italics (section J, standing rule).

## 7. Process

1. Draft one section: every deck in ITEM-LIST.md order, each with its question points (three variants each). Then the section's exercise set or review if the decks are done.
2. Do a separate self-review pass for wording only, sentence by sentence, against CLAUDE.md and REVISION-GUIDE.md (A, K, D): standard terms, no calques, no AI tics, no coaching, spelling, mention marks, feedback words, A.11, A.12, sources and translators.
3. Run `node --check data/decks/<id>.js` on every new file and `node --check data/structure.js`.
4. Open course.html locally (for example `python3 -m http.server` in the repo, then http://localhost:8000/course.html) and read every card and every question variant as the student will see it.
5. Commit to the mockup repository only, one commit per deck or per logical step, with clear messages.
6. End with a report: the decks built, the live material used for each, every doubtful wording (location, wording, question), every source or translation question, and anything in ITEM-LIST.md that seemed wrong or unclear.
7. Do NOT touch the live app (gcrastinus/ars-grammatica) until Timothy approves the section. After approval, the section is ported into index.html in the live format: `DECKS.<id_with_underscores> = { title, sub, panels:[ { src:[SRC keys], h:`<p><strong>Title.</strong> …</p>` } ] }`, Latin as `<span class="lat">`, with new SRC entries and DECK_TOP lines as needed (see how `prelim_criteria` was ported).

## 8. Not to build yet: the "order of the art" overview

Timothy also wants each art's app to open with an overview deck giving the order of the art (for grammar: voice, letter, syllable, word, parts of speech, agreement, dependence, order, phrase, clause, sentence). That is a separate item that he has not yet approved. Do not build it unless he asks for it.

## 9. Open questions that bear on Section I

ITEM-LIST.md lists no open questions. These points may need Timothy's answer while Section I is built; ask him in the report rather than guessing:
- I.2 cites Boethius, *In Categorias*, and I.3–I.4 cite Priscian, both "rule 9" (no published English translation). Quote the Latin with a placeholder for his own translation, or paraphrase?
- I.5 lists Bühler, *Sprachtheorie* (1934), and Jakobson (1960) "for comparison." Bühler was published in English (trans. Donald Fraser Goodwin, 1990); confirm that translation, or paraphrase only.
- Format for exercise sets (section 4): Timothy has not yet seen one in v2. Propose before building all 72 items.

## 10. How review works from section to section

Timothy's aim is to review closely at the start and less as the guides improve, so that later sections need improvement rather than repair.

1. **Section I: close review.** Timothy reads every card, question, and a sample of exercise items. Every change he makes is logged in REVISION-GUIDE.md as before-and-after pairs, and any pattern that recurs is added to section K or as a new decision in section A.
2. **Section II: check.** Timothy reviews again, mainly to see whether the lessons from Section I carried over. Repeated word problems mean the guides need a new rule; record it before going on.
3. **Sections III–XI: batches with spot checks.** If Section II needs only light editing, build two or more sections per run. Timothy reads for substance and samples the rest.
4. **Before starting any section**, reread the newest entries in REVISION-GUIDE.md. They are the most recent and most important corrections.
5. **The report at the end of every section** lists, first, every doubtful wording, coined term, or source question (location and the question), so Timothy can review those spots first; then the decks and exercise sets built, with counts.
6. **Exercises:** after Timothy approves the item pattern for one exercise set, follow the same pattern for every later set. If he corrects one item, apply the same correction to every item that shares the problem and say so in the report.

## 11. The Recitation Tablet (after the decks are settled)

The Recitation Tablet is part of the app plan (full specification in ITEM-LIST.md, "Recitation Tablet"): a homepage button opens a panel where the student chooses a completed deck (or a whole completed section), writes out the deck's material from memory, and then opens the full recitation beside his own text and checks off the points he covered. There is no automatic grader, no server, and no API key.

1. Build it only after the decks are settled, starting with Section I.
2. Each deck gets a deck-level `recitation` outline once its cards are final: the deck's order, every point of substance (definitions, distinctions, divisions, arguments, conclusions), no passing examples, quotations, or source notes, in the same textbook prose (STYLE-GUIDE-CARDS.md rule 29). Whole-section recitations combine the decks' outlines in course order.
3. If a card changes after its recitation is written, update the recitation in the same commit.
