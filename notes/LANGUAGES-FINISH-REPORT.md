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

Every translation that is the course's own is marked in its deck's Sources note and listed in sources/TRANSLATIONS-USED.md. The original-language quotations that stood in this section were collated on 21 Oct 2026. The record is notes/QUOTATIONS-COLLATION-REPORT.md. Two were corrected: Baudelaire, "Correspondances" line 2, and *Rhetorica ad Herennium* IV.39. The eight Servius notes were read in the Wikisource transcription of Thilo, not on a photograph of the printed page, and they match that transcription. One quotation is still unverified:

- Section II meter set: Paul Gerhardt, "O Haupt voll Blut und Wunden" 1–2 (*O Haupt voll Blut und Wunden, / Voll Schmerz und voller Hohn*). No text of the hymn was found on German Wikisource, Project Gutenberg, or Gallica. The words agree with the Evangelisches Gesangbuch text (EG 85) as reprinted on the German Wikipedia article, except that the course capitalizes *Voll* at the start of the second line, where that reprint has *voll*.

## 8. Checks

Before each commit: every data file loads (test/lang-audit.js, 0 failures); `node test/browser-check.js` opens all 50 language screens, 184 decks (1,489 panels with their question points), and every item of the 137 language exercises with no page error; `--maker` as above. The style sweeps found no "Dr."; no British spelling outside quotations; no dash in the course's own prose except the translator lines of the IX and X passages (decision 2); commas and periods moved inside closing quotation marks in 376 places; one italic tag per file. The audit's 640 warnings are listed by `node test/lang-audit.js --verbose`; 482 of them are "card example" warnings (decision 9).

## 9. Timothy's decisions of 21 Oct 2026, carried out

1. **Section X bar:** kept.
2. **Translator lines:** every passage now ends "Translation: C. D. Yonge." (93 lines; short names expanded to the translator's full name), with the original first. No dash remains in the course's own prose; the dashes that remain are inside quotations, in fixed compounds ("Sapir–Whorf," "Germanic–Latinate"), in number ranges, or in metrical notation (– ∪).
3. **Murray and Fairclough:** *Iliad* 1.1–7 is A. T. Murray's Loeb (checked on Perseus) and *Aeneid* I.1–11 H. R. Fairclough's 1916 Loeb (checked against the 1916 printing), in the X models, in the IX poetry decks, and in the questions that quoted the old renderings.
4. **Checking pass:** every quotation listed in section 7 was checked; the record is sources/QUOTATION-CHECK-OCT-21.md. Corrected: Pascal 277 (the course had *On le sent*; Brunschvicg prints *on le sait*) and 347 (punctuation); La Fontaine's semicolon; three *Faust* lines; added question marks and capitals in Mignon, Heine, Corneille, and Racine; *Republic* 337a (*’κείνη*); *Aeneid* II.262–263 (*Neoptolemus*, not *Neoptolemusque*). Spellings that follow modern editions (Ronsard, Heine, Schiller's *seid*) are recorded as such. Not found online: Ennius's tmesis *saxo cere comminuit brum*, and Donatus's own spelling *Astur* (the item now says "as Donatus quotes it").
5. **Livy and the period:** the merge is kept.
6. **Doctrine questions:** the first-two-cards rule is kept.
7. **English punctuation:** new deck `lang.ii.en/punctuation` (five cards, a question point on each, following *The Chicago Manual of Style*) and the exercise `lang.ii.en/orthography-ex`, "English Spelling and Punctuation" (24 items), opened from both the spelling and the punctuation decks.
8. **Preliminary overviews:** kept in the small bar, for Timothy's reading.
9. **Card examples:** every exercise item that asked about a card's own word, form, line, or sentence in the same respect was rewritten, about 330 items in all, across every section and language. Where a card gives a pattern by example, the item now asks another word of the same pattern: other strong verbs, compounds of *sum*, *eō*, *ferō*, *δίδωμι*, and *τίθημι*, *iste* and *ὅδε* for the pronouns, other compounds, cognates, loanwords, and sentences. The English diagram set (`lang.ix.en/diagram-ex`) was rewritten whole, as 48 questions stated in words, because 46 of its 62 items offered "choice 1" to "choice 4" with no drawings behind them. The audit still lists 279 "card example" warnings; these were read and left because the item asks about the word in a different respect. They are chiefly the name of a lemma or a construction that the card mentions (*können*, *pour que*, *πρίν*), a preposition and the case it governs, a defined term (*rimes plates*), the title of a work (*Iliad*, *Odes*), or a form of a word the card names but does not print.
10. **Phrynichus:** left as is.

## 10. Timothy's decisions of 21 Oct 2026 (second round), carried out

1. **Colon rule:** the general deck `ii.punctuation` now states Chicago (17th ed., 6.63): the word after a colon is lowercase unless two or more complete sentences follow or the colon introduces a quotation, a question, or speech. Its Sources line now cites 6.63. Both decks agree.
2. **Pascal 277:** the passage in `lang.ix.fr/prose` now ends after *que la raison ne connaît point* and "which reason does not know." The card on *on* and the neuter *le* became a card on the play on *raison* (antanaclasis), the question point on *On* now asks the subject of *connaît*, and exercise items n39 and n40 ask the person, number, and tense of *connaît*.
3. **Unique paradigms:** kept as recall of the paradigm.

No decisions are open.
