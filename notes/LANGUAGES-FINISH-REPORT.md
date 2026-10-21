# The particular-languages layer: finish report (21 Oct 2026)

This reports the pass made on the brief of 20 Oct 2026 (CLAUDE-GRAMMATICA-LANGUAGES-PROMPT.md): finish the language track of each section so that each language amounts, more or less, to an essentials grammar of that language, and port the Quiz Maker. The work is on `main` of gcrastinus/ars-grammatica-mockup, from 4222860 to the last commit of 21 Oct. The old live app (gcrastinus/ars-grammatica) was read only and not changed.

The topic checklist, before and after, is notes/LANGUAGE-ESSENTIALS-CHECKLIST.md. The build notes are in LANGUAGES-LAYER-SPEC.md ("Build notes (21 Oct 2026)"). The decisions that need Timothy are at the end.

## 1. Decks and exercises, before and after

Each cell gives study decks / exercises / stored exercise items. "+1g" means one more exercise that is drawn fresh each time by `data/latin-forms.js` and has no stored items. "Before" is commit eee6305, the state at the start of the pass.

| Section | English before | English after | Latin before | Latin after | Greek before | Greek after | French before | French after | German before | German after |
|---|---|---|---|---|---|---|---|---|---|---|
| Preliminary (overview) | none | 1 / 0 / 0 | none | 1 / 0 / 0 | none | 1 / 0 / 0 | none | 1 / 0 / 0 | none | 1 / 0 / 0 |
| II | 3 / 2 / 68 | 3 / 2 / 68 | 2 / 2 / 35 +1g | 3 / 3 / 57 +1g | 3 / 2 / 35 | 4 / 4 / 86 | 2 / 2 / 35 | 3 / 3 / 65 | 2 / 2 / 35 | 3 / 3 / 65 |
| III, declinable | 2 / 2 / 89 | 6 / 6 / 185 | 3 / 3 / 16 +2g | 7 / 7 / 124 +2g | 3 / 5 / 98 | 8 / 8 / 227 | 2 / 4 / 75 | 7 / 7 / 190 | 3 / 5 / 99 | 9 / 9 / 240 |
| III, indeclinable | 1 / 2 / 135 | 2 / 2 / 157 | 1 / 2 / 46 | 3 / 3 / 72 | 1 / 2 / 19 | 2 / 2 / 48 | 1 / 3 / 60 | 3 / 3 / 70 | 2 / 2 / 40 | 2 / 2 / 48 |
| IV | 1 / 1 / 24 | 3 / 3 / 72 | 1 / 1 / 24 | 3 / 3 / 72 | 1 / 1 / 24 | 3 / 3 / 72 | 1 / 1 / 24 | 3 / 3 / 72 | 1 / 1 / 24 | 3 / 3 / 72 |
| V | 3 / 6 / 360 | 5 / 5 / 363 | 4 / 9 / 260 +1g | 8 / 7 / 222 +1g | 1 / 7 / 175 | 6 / 6 / 221 | 1 / 7 / 170 | 6 / 6 / 215 | 1 / 7 / 169 | 6 / 6 / 213 |
| VI | 1 / 1 / 123 | 1 / 1 / 129 | 1 / 1 / 21 | 1 / 1 / 26 | 1 / 2 / 45 | 2 / 2 / 45 | 1 / 2 / 45 | 2 / 2 / 45 | 1 / 2 / 45 | 2 / 2 / 45 |
| VII | 0 / 1 / 21 | 1 / 1 / 37 | 1 / 1 / 38 | 1 / 1 / 31 | 1 / 1 / 21 | 2 / 2 / 43 | 1 / 1 / 21 | 2 / 2 / 43 | 1 / 1 / 21 | 2 / 2 / 43 |
| IX | 3 / 3 / 168 | 3 / 3 / 168 | 2 / 5 / 152 | 3 / 3 / 155 | 2 / 2 / 107 | 2 / 2 / 107 | 2 / 2 / 99 | 2 / 2 / 99 | 2 / 2 / 98 | 2 / 2 / 98 |
| X (models) | none | 8 / 0 / 0 | none | 8 / 0 / 0 | none | 8 / 0 / 0 | none | 8 / 0 / 0 | none | 8 / 0 / 0 |

Totals: 66 language decks before, 184 after; 3,164 stored items before, 4,410 after. Where an item count fell (Latin V and VII, English V), loose or duplicate sets were merged, padding was removed, and items that re-asked a card's own example were cut. Every exercise is paired with its deck and has at least 20 items in sets A, B, and C. In no set is the correct option the longest in more than a third of the multiple-choice items; the generated Latin sets measure 5% (syllables), 19% (nouns), and 18% (verbs) over 300 sittings each.

## 2. The open items of the 19 Oct review (brief, Part 1)

1. **Exercise buttons.** Done. Explicit pairing by `exFor` on the exercise tile (or `ex` on the deck tile), honored by `linkLangDeckExercises` and by test/lang-audit.js, with the "-ex" rule as fallback. No loose exercise remains.
2. **Latin VI.** Done. `vi.la/faults` built out (Donatus's barbarism, solecism, and metaplasm, the *Appendix Probi*, aspiration, Catullus 84), with question points; `vices-ex` paired with it and given solecisms other than the card's.
3. **English VII.** Done. `vii.en/figures` (five cards) written and paired with `figures-ex`, which now has 37 items on passages the deck does not quote.
4. **Greek, French, and German VI.** Done. Two decks each, each paired; `vi.grc/errors-ex` rewritten around Attic barbarisms and solecisms; form drill moved out.
5. **Nonsense distractors.** Done for every set swept (VII, IV, and the rest of the layer); the ones found were replaced with real confusions.
6. **Glosses.** Done. Glosses after foreign words are quoted. The audit still flags a few parentheses that are notes, not translations (for example "(the emphatic form)"), and these were left.
7. **Thin pools.** Done. No set is under 20.
8. **Longest correct option.** Done for every set, including the IX passage sets.
9. **Duplicate prompts.** Done. The audit finds none.
10. **Question points.** Done. Every study deck has them, three variants each; the IX passage decks have one on each passage's opening panel. The reading decks of X and of the Preliminary have none by design.

## 3. What was built (brief, Part 2)

By section, in short (the full list is in the spec's build notes):

- **II.** Spelling and punctuation for Latin, Greek (the alphabet and its marks), French, and German; a Greek hexameter scansion set; fresh words in the Greek, French, and German syllable sets; Latin quantity cards.
- **III.** The English noun, pronoun, strong and weak verbs, and verbals; Latin adjectives and numerals, pronouns, irregular verbs, and participles; Greek pronouns, contract verbs, verbs in -μι, the perfect, and the participle; French pronouns, tenses, subjunctive, and participle; German plurals, pronouns, strong and mixed verbs, modals, and the Konjunktiv; prepositions and particles for every language.
- **IV.** Composition and etymology decks for every language.
- **V.** Agreement, government, voice, mood, and clauses for Greek, French, and German; agreement, government, kinds of clause, and dependence for Latin; agreement and dependence for English; Greek temporal clauses and alternative questions, French purpose, result, and time, and German result and time; nine marking items (arrows) each for Greek, French, and German.
- **VI.** Two decks each for Greek, French, and German; the Latin faults deck; the English sets merged.
- **VII.** An English figures deck; tropes and schemes for Greek, French, and German; Latin tropes and schemes cards.
- **IX.** Option balance in every passage set; the Latin Livy and period sets merged into prose and poetry; a Servius deck with eight new notes; question points on every passage.
- **X.** The bar of model passages, eight per language, each with its translation and points of style and composition.
- **Preliminary.** A small bar after "The Criteria of Correctness" whose five buttons open an overview of each language (seven cards, about 1,800 to 1,900 words each): its family and history, the making of its standard, and what is distinctive in its grammar.

## 4. The old app: carried over and left

Carried over: the "shared" pools of Greek, French, and German (parts of speech, declinable and indeclinable, cases, government, agreement, congruity, faults), now items on the matching screens; the produce items (24, 21, and 22), now typed `form` items in the paradigm sets; the cited sentences on dependence (`WORK_CITED_OTHER`); and the matter of the per-deck language notes (57 notes for Greek, French, and German). The notes were not copied word for word. Their matter is taught on the Section V cards; the points they made that no card yet taught (Greek temporal clauses and alternative questions, French result and time, German result and time, the German double accusative) were added on 21 Oct.

Left, as the spec had already decided: the old vocabulary files, the Latin scansion notation drill, the chips that store no correct label, and the generated English and Latin agreement drills.

## 5. The Quiz Maker

**Where.** `maker.js`, loaded after course.js; the screen `#scr-maker` in course.html; the route `#maker`; a quiet link at the foot of the home page, "For instructors: build a printable quiz with an answer key." The print and paper styles are in style.css, where the old app's rules already were.

**How to use it.** Fill in the heading (course, instructor, date; the date defaults to today). Choose a section, or every section, and the kinds of set to show (the course, English, Latin, Greek, French, German). Check the sets to draw from; for each, choose Set A, B, C, or any, and the number of questions (1 to 40). The Latin sets drawn fresh show no set menu. Turn on doctrine questions if wanted, and choose how many (1 to 12). Press "Make the quiz," read the paper below, and press "Print or save as PDF."

**What it does.** Questions keep their stored order (easy to hard) and never repeat (by id and by text). Doctrine questions are drawn from the question points of the decks behind the chosen sets: the first two cards of each deck first, then the rest, one deck at a time, skipping cards titled as open questions. Every item type prints: lettered options shuffled once per printing, with the letter in the key; a line for typed answers, with the accepted forms in the key; tokens to underline or to mark with arrows, with the arrows or the parse in the key; groups to sort into; and a passage printed once above the questions on it. Questions on the Section IX passages carry a new field, `passageRef` (the opening panel of the passage), so that the paper can print the passage they ask about. The key begins on a new page, and printing shows only the paper, in serif type on white.

**Test.** `node test/browser-check.js --maker` loads course.html#maker, makes a quiz from one main set and one set per language with doctrine questions, checks that every question has a stem and a key entry, and renders every item of all 181 sets for paper (6,153 items).

## 6. Exceptions to the 20-item rule and to pairing

- `lang.ii.en/spelling` has no exercise, by the earlier decision; English punctuation has no English deck (the general deck `ii.punctuation` covers it). See decision 7.
- `lang.v.la/clauses` ("Clauses in the Authors") is a deck of examples from the authors, marked `noEx`; its matter is drilled by the "Clauses in Latin" set.
- The X model decks and the Preliminary overviews are read only and have no exercises or question points.

## 7. Quotations and translations not verified in this pass

Every translation that is the course's own is marked in its deck's Sources note and listed in sources/TRANSLATIONS-USED.md. These original-language quotations were written from the standard text as remembered and were not collated against a printed or online edition in this pass:

- Section VII tropes and schemes: Homer, *Odyssey* II.1, I.343 and *Iliad* II.426, XVIII.309, II.671–673; Plato, *Republic* 337a and *Apology* 38a; Mark 2:27; Sophocles, *Antigone* 523; Plutarch, *Caesar* 50; Thucydides II.40; Hesiod, *Works and Days* 40; Baudelaire, "Correspondances" 1–4; Voltaire, *Candide* 1; Corneille, *Horace* IV.5 and *Le Cid* I.5, II.2, IV.3; Molière, *L'Avare* III.1; Hugo, "L'Expiation" 1; Ronsard, *Sonnets pour Hélène* II.24; Goethe, *Faust* (lines other than Bayard Taylor's, which were checked), "Mignon" 1; Schiller, *Wilhelm Tell* III.1; Virgil, *Aeneid* I.300–301, I.399; Cicero, *In Catilinam* I.1, II.1; *Rhetorica ad Herennium* IV.39; Seneca, *Epistulae* 106.12.
- Section VI: Catullus 84.1–2 and the *Appendix Probi* entries quoted.
- Section II meter sets (21 Oct): Lessing, *Nathan der Weise* III.7 ("Es eifre jeder seiner unbestochnen"); Schiller, "Das Lied von der Glocke" ("Steht die Form, aus Lehm gebrannt"; "Frisch, Gesellen! seid zur Hand"); Goethe, "Erlkönig" lines 2 and 3; Paul Gerhardt, "O Haupt voll Blut und Wunden" 1–2; Baudelaire, "L'Invitation au voyage" 1–2.
- Servius: the eight new notes are from the Wikisource transcription of Thilo, which is not collated to the printed page.
- The Preliminary overviews quote nothing; their facts follow the standard histories named in each deck's Sources note (Baugh and Cable; Palmer; Horrocks; Elcock and Rickard; Wells).

## 8. Checks

Before each commit: every data file loads (test/lang-audit.js, 0 failures); `node test/browser-check.js` opens all 50 language screens, 184 decks (1,489 panels with their question points), and every item of the 137 language exercises with no page error; `--maker` as above. The style sweeps found no "Dr."; no British spelling outside quotations; no dash in the course's own prose except the translator lines of the IX and X passages (decision 2); commas and periods moved inside closing quotation marks in 376 places; one italic tag per file. The audit's 640 warnings are listed by `node test/lang-audit.js --verbose`; 482 of them are "card example" warnings (decision 9).

## 9. Decisions for Timothy

1. **Section X bar.** REVISION-GUIDE AK (18 Oct) says "Section X: no particular-languages bar." The brief of 20 Oct asked for one, with model passages, and it is built: eight models per language (`lang.x.<code>`), read only, each with a translation and points of style and composition. Options: keep the bar; or remove it from data/structure.js (one line) and leave the decks unused. Recommendation: keep it, since the brief is the newer instruction and the models are the only place the student sees each language's prose as a whole.

2. **Translator lines on the IX and X passages.** Each passage prints the original, then the English, then a line such as "— Yonge" or "— Church and Brodribb." This conflicts with two rules: foreign passages are to be given English first with the original in parentheses, and there are to be no dashes in prose. CLAUDE.md allows the translator's name for a long passage. Options: (a) keep the order and the name, and replace the dash with "Translation: C. D. Yonge." (b) put the English first and the original below; (c) drop the names and keep them only in sources/TRANSLATIONS-USED.md. Recommendation: (a), because in a passage set the student reads the original first and the name is allowed for long passages.

3. **The course's own translations.** Five X models (Virgil, *Aeneid* I.1–11; Homer, *Iliad* 1.1–7; Racine; Ronsard; Heine and Goethe's "Wandrers Nachtlied") and the short quotations of Sections VI and VII have plain renderings made for the course, listed in sources/TRANSLATIONS-USED.md. Options: approve them as the course's own; or replace the two epic openings with public-domain published versions (A. T. Murray's Loeb *Iliad*; H. R. Fairclough's Loeb *Aeneid*). Recommendation: replace the two epic openings with Murray and Fairclough, and keep the course's own for the short lines.

4. **Quotations not collated.** The quotations listed in section 7 were written from the standard texts as remembered. Options: a checking pass against Perseus, Wikisource, and Gallica before release; or accept them now and check when convenient. Recommendation: a checking pass before release, starting with the French and German verse, where a single letter is easiest to get wrong.

5. **Livy and the period.** The brief asked for separate Livy, period, and Servius sets of 20, each paired with a deck. Servius has its deck and set (20). The Livy (9 items) and period (16) sets were merged into the Latin prose and poetry sets, whose decks already hold those passages, so that each set is paired with the deck it drills. Options: keep the merge; or write a Livy deck and a deck on the period and split them out again. Recommendation: keep the merge.

6. **"Major" doctrine questions in the Quiz Maker.** The old maker drew "major panels first," but the new data mark no panel as major. The Quiz Maker treats the first two cards of each deck as major. Options: keep that rule; or add a `major: true` flag to chosen question points. Recommendation: keep the rule for now; the first two cards of most decks carry the definitions.

7. **English spelling and punctuation.** The English Section II spelling deck has no exercise, and there is no English punctuation deck, because the general deck `ii.punctuation` covers punctuation in English. Options: leave it so; or add a short English deck (the serial comma, commas with nonrestrictive clauses, the apostrophe, American quotation marks) with one exercise for spelling and punctuation. Recommendation: add the deck and the exercise, since every other language now has one.

8. **The Preliminary overviews.** They are new text of about 9,000 words in all and need Timothy's reading. They sit in a small bar after "The Criteria of Correctness," and each button opens its overview directly. Options for placement: keep the small bar; or put each overview at the head of that language's Section II screen. Recommendation: keep the small bar, since the overviews read best before the student meets the particular forms.

9. **"Card example" warnings.** The audit flags 482 exercise options that equal a word on the paired deck's cards. Most are forms in the deck's own tables (*δίδωμι*, *sein*, *hôtel*) or the names of the figures and constructions, asked in a different respect; the real repeats found (Latin figures, German and French meter) were replaced. Two kinds remain that may be repeats in the same respect: the first three items of the English diagram set (`lang.ix.en/diagram-ex` ed1–ed3, "Birds sing," "Birds sing songs," "She is wise"), whose options also read like labels for drawings ("songs as a complement"); and a few French meter items on the rhyme names. Options: rewrite those items with fresh sentences and options stated in words; or leave them. Recommendation: rewrite ed1–ed3, and leave the table forms and term names.

10. **Phrynichus.** The Greek "Attic correctness" deck names Phrynichus and the Atticist lexicographers in general terms and quotes no entry of his *Ecloga*. Options: leave the general mention; or add two or three of his entries, checked against an edition. Recommendation: leave the general mention unless Timothy wants the Atticist doctrine taught in more detail.
