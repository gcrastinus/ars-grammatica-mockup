# Spanish for Ars Grammatica: plan (25 Oct 2026)

Planning only. Nothing in the app was edited. This file is the only new file and is left uncommitted.

## 0. What the plan found first

1. **Spanish is not starting from zero.** Two commits of 24 Oct 2026 are already on `main`: `9c4560c` (Phase 0: language order, ochre, hidden Spanish with `?preview=es`, strict Spanish accent grading, the Spanish letter row, language-aware speech, `lang` tags on language content) and `88aa304` (Phase 1: the Preliminary overview and all of Section II). So the plan below covers only what is left, and it marks what is done.
2. **The two files named in the brief, `STYLE_GUIDE.md` and `ars-grammatica-pending-changes.md`, were absent when this run began and appeared (untracked, dated 25 Oct 20:37 and 20:38) before it finished.** I read them at the end. `STYLE_GUIDE.md` is Timothy's voice guide (a version of STYLE-GUIDE-TIMOTHY.md) and `ars-grammatica-pending-changes.md` is a list of pending changes to the earlier live app. What bears on Spanish: each language gets 15 prose and 5 poetry passages (10 walkthroughs and 5 drills among the prose), with about 3 basic meters for English, French, and German, and the poets are to be mixed (this agrees with the brief and with section 4); sources go once at the top of each study deck as a consolidated list of real external sources, never per card or per answer, and a deck with a very large list is to be flagged, not trimmed; a lone "End" button at the bottom of every deck is an app-wide change that Spanish decks will receive with the rest and needs nothing from this plan. Every later run must read, in this order: STYLE-GUIDE-CARDS.md, NEXT-STEP.md, CLAUDE.md, REVISION-GUIDE.md (newest first), STYLE-GUIDE-TIMOTHY.md, and these two files (realities first, then the principle, then the tradition; standard textbook terms; no pointers within a deck; lists on separate lines only when they recur; "Correct" and "Incorrect" in feedback). The two new files are not in the commit history, so they should be committed or removed by Timothy; this run left them alone.
3. **Parity is measured against French and German as they stand** (counts in section 2). French and German each have **10** verse passages, and Timothy decided on 25 Oct 2026 that Spanish gets ten too (question 4), so the poetry deck and `poetry-ex` match theirs in size.
4. **The main page is now `index.html`.** `course.html` only redirects to it, so all script tags and the Quiz Maker checkbox live in `index.html`.
5. **The mechanism for the final switch already exists** (`hidden:true` on Spanish in `LANGS`, plus the `?preview=es` override). The last commit is small and listed in section 5, step B15.

## 1. Where languages are listed in the code

Line numbers are those of `main` at 706243d. "Done" means Spanish is already present.

| # | File and line | What it holds | Spanish status | What the final switch changes |
|---|---|---|---|---|
| 1 | `course.js:62-69` | `LANGS`, the fixed button order: en, la, grc, es, de, fr. Spanish carries `hidden:true` (line 66) | Done, hidden | Delete `hidden:true` and its comment |
| 2 | `course.js:70-72` | `PREVIEW_LANGS`, `langShown`: a hidden language shows only with `?preview=es` | Done | Keep or delete; harmless once nothing is hidden |
| 3 | `course.js:73-80` | `LETTER_KEYS` (Spanish: á é í ó ú ü ñ ¿ ¡) and `LETTER_KEY_LABEL` under typed answers | Done | None |
| 4 | `course.js:81-92` | `LANG_BARS`: the ten bars (prelim, ii, iii-decl, iii-indecl, iv, v, vi, vii, ix, x). Language neutral | n/a | None |
| 5 | `course.js:95-104` | `langScreenOf`, `langRecord`: a missing screen file gives an empty "more" screen | n/a | See the guard under step B15 |
| 6 | `course.js:107-135` | `linkLangDeckExercises`: pairs a deck with its exercise by `ex`, `exFor`, or id plus "-ex" | Generic | None |
| 7 | `course.js:224-229` | `langBar`: draws buttons for `LANGS.filter(langShown && (!hidden or a screen exists))` | Generic | None, but with `hidden` removed every bar shows a Spanish button, so all ten screens must exist first |
| 8 | `course.js:246-258` | `openLang`: band class `lang-<code>`, title "<Name>: <bar title>" | Generic | None |
| 9 | `course.js:450-454` | `exerciseLang(item)`: reads the code from the id `lang.<bar>.<code>/...` (regex allows two or three letters) | Generic | None |
| 10 | `course.js:467-471` | `foldBase`: Spanish keeps every accent, the tilde of ñ, and the diaeresis; case and spaces are folded | Done, tested | None |
| 11 | `course.js:541`, `course.js:701` | German-only spelling fallback; `addLetterKeys` reads `LETTER_KEYS` | Done | None |
| 12 | `course.css:325, 333` | `.ex-keys.lang-es`, light and dark ochre (#a0661c, #b5792c) | Done | None |
| 13 | `course.css:415, 460, 706, 722` | `.lang-bar .lang-btn.lang-es`, light and dark, in both rule blocks | Done | None |
| 14 | `course.css:448, 454` | `.lang-es` and `body.dark .lang-es` background of the language band | Done | None |
| 15 | `index.html:201` | Quiz Maker checkbox `<label hidden>... value="es"`; list at 196-204 | Done, hidden | Remove `hidden` |
| 16 | `index.html:263-314` | `<script>` tags for every language screen file. Spanish has `prelim.es` (266) and `ii.es` (272) only | Partial | Add eight tags as the screens are written: `iii-decl`, `iii-indecl`, `iv`, `v`, `vi`, `vii`, `ix`, `x` (`.es.js`), each in the es position of its block, between grc and fr |
| 17 | `maker.js:12, 19` | `LANG_ORDER`, `LANG_NAME` | Done | None |
| 18 | `maker.js:13-18` | Unhides the Spanish checkbox on `?preview=es` | Done | Delete the block |
| 19 | `maker.js:49-66` | `langSets`, `allSets`: builds sets from `ARS.languages['lang.<bar>.<code>']`; `BAR_ORDER` at line 21 | Generic | None; Spanish sets appear when their screens load |
| 20 | `speech.js:57-64` | `normLang`: maps `lang="es"` and `es-ES` to `es` | Done | None |
| 21 | `speech.js:235-250` | `collectSpeakRuns`: reads explanations in English and switches voice mid-sentence at each `lang` attribute | Generic | None |
| 22 | `speech.js:257-266` | `VOICE_PREFS`: `es: [es-ES, es-*]`, then English as fallback; Latin falls to Italian, then English | Done | None |
| 23 | `data/languages/<bar>.<code>.js` (one per bar and language) | The screen: list of tiles with `kind`, `exFor`, `desc` | Done: `prelim.es`, `ii.es`. Eight left | Written batch by batch |
| 24 | `data/decks/lang.<bar>.<code>/<slug>.js` | Study decks, loaded by id at `course.js:340` | Done: `lang.prelim.es/overview`, `lang.ii.es/{syllable,orthography,meter}` | Written batch by batch |
| 25 | `data/exercises/lang.<bar>.<code>/<slug>.js` | Exercises, loaded by id at `course.js:365`; not in `exerciseFiles` (`data/exercises/index.js:1-7`) | Done: `lang.ii.es/{syllable,orthography,meter}-ex` | Written batch by batch |
| 26 | `data/structure.js:42` | `ii.meter` description: "with Greek, German, or French where they show something distinctive" | Not updated | Add Spanish in order |
| 27 | `app.js:38, 91` | Home page descriptions: "English, Latin, Greek, German, and French" | Not updated | Add Spanish in order: "English, Latin, Greek, Spanish, German, and French" |
| 28 | `practice.js:320-330, 397-405, 464-470`, `guided.js:57, 662-663` | Cumulative review and Guided Path treat any id beginning "lang." generically | Generic | None; verify in tests |
| 29 | `recitation.js` | No language handling (recitations belong to the general decks) | n/a | None |
| 30 | `test/lang-order-speech-check.js:42-55` | Asserts five buttons and no Spanish without preview; six with preview; ochre color | Written for the hidden state | Rewrite to assert six buttons always |
| 31 | `test/lang-order-speech-check.js:60-70, 77-83, 92-128` | Spanish grading, voice choice (Mónica), mixed-language reading | Done | None |
| 32 | `test/maker-check.js:13` | Loops `['en','la','grc','de','fr']` | Missing es | Add `'es'` |
| 33 | `test/browser-check.js`, `test/lang-audit.js` | Walk every screen, deck, and exercise; the audit checks pairing, 20 items, option balance, dashes, British spelling, unquoted glosses | Generic | Screen count goes from 50 to 60 |
| 34 | `LANGUAGES-LAYER-SPEC.md:19, 95` and the build notes | Documents order and the hidden state; says each language has 10 verse passages | Line 19 done | Add a Spanish paragraph (Spanish has ten poems like the others, so no exception to record) |
| 35 | `sources/TRANSLATIONS-USED.md`, `sources/QUOTATION-CHECK-*.md`, `sources/<set>/` | Translators, quotation checks, edition texts with a header (edition, translator, URL, date) | Nothing for Spanish yet | New `sources/spanish/` and a `QUOTATION-CHECK-SPANISH.md` |

Not touched, by instruction: the Aa font menu and `ars-fonts.*`; anything outside Ars Grammatica. One thing to test, not change: the font stack must show ñ, ¿, ¡, and accented capitals in all six fonts (these are in the Latin range, so no change is expected).

## 2. What French and German have, and what Spanish has so far

Counts from the data files at 706243d. Cells read "decks (panels) / exercises (items)".

| Section | French | German | Spanish now | Spanish target |
|---|---|---|---|---|
| Preliminary overview | 1 (7) / 0 | 1 (7) / 0 | 1 (7) / 0, **done** | done |
| II | 3 (13) / 3 (65) | 3 (12) / 3 (65) | 3 (15) / 3 (66), **done** | done |
| III declinable | 7 (48) / 7 (190) | 9 (66) / 9 (240) | none | 8 (52) / 8 (214) |
| III indeclinable | 3 (10) / 3 (70) | 2 (6) / 2 (48) | none | 3 (10) / 3 (70) |
| IV | 3 (11) / 3 (72) | 3 (12) / 3 (72) | none | 3 (11) / 3 (72) |
| V | 6 (23) / 6 (215) | 6 (22) / 6 (216) | none | 6 (23) / 6 (215) |
| VI | 2 (6) / 2 (45) | 2 (5) / 2 (45) | none | 2 (6) / 2 (45) |
| VII | 2 (6) / 2 (43) | 2 (6) / 2 (43) | none | 2 (6) / 2 (43) |
| IX | 2 (122) / 2 (99) | 2 (131) / 2 (98) | none | 2 (about 122) / 2 (103) |
| X models | 8 (16) / 0 | 8 (16) / 0 | none | 8 (16) / 0 |
| **Total** | **37 decks, 262 panels, 799 items** | **38 decks, 276 panels, 832 items** | **7 decks, 29 panels, 66 items** | **about 50 decks, 305 panels, 828 items** |

Every study deck has a question point on most panels, three variants each (French: 13 of 20 panels in the accidents deck, every panel elsewhere; the IX passage decks have one on each passage's opening panel). Every exercise is paired with its deck, holds at least 20 items in fixed sets A, B, C, and keeps the correct option the longest in no more than a third of its multiple-choice items. The reading decks (X and the Preliminary) have neither. These rules (LANGUAGES-REVIEW-OCT-19.md, LANGUAGES-FINISH-REPORT.md) govern Spanish as well, together with the rule that no item may ask about the card's own example in the same respect.

## 3. Build plan, deck by deck and exercise by exercise

Each deck carries one consolidated `sources` list shown on its first panel: only real, external, backbone sources. Backbone Spanish sources for all decks: RAE and ASALE, *Nueva gramática de la lengua española* (2009 to 2011) and its *Manual* (2010); RAE and ASALE, *Ortografía de la lengua española* (2010; the 2010 *Ortografía* is already cited in II); RAE and ASALE, *Diccionario panhispánico de dudas* (2005); RAE, *Diccionario de la lengua española*; Rafael Lapesa, *Historia de la lengua española*; Ignacio Bosque and Violeta Demonte (eds.), *Gramática descriptiva de la lengua española* (1999); and, for the Latin comparison, Allen and Greenough. Every quotation is checked against an edition text saved under `sources/spanish/` and recorded in `sources/QUOTATION-CHECK-SPANISH.md`; anything not verified is marked for Timothy and not guessed.

Item types: "mc" multiple choice, "form" typed form, "count" or "divide" typed syllables, "mark" arrows on dependences, "mc-marked" tokens to mark. Names follow the French and German pattern so that pairing, the Quiz Maker, and the audit need no changes.

### II. Matter of speech: done (Phase 1)

| Deck | Panels | Exercise | Items |
|---|---|---|---|
| `syllable`: vowels, diphthongs, hiatus; dividing consonants; where the stress falls; the written accent; one-syllable words | 5 | `syllable-ex` | 22 (count 4, divide 4, form 4, mc 10) |
| `orthography`: alphabet; sounds and spellings; ¿ ¡ and capitals; older spellings; the spelling of 2010 | 5 | `orthography-ex` | 22 (mc 16, form 6) |
| `meter`: counting; synalepha; octosílabo; endecasílabo and alejandrino; rhyme | 5 | `meter-ex` | 22 (count 6, mc 16) |

Batch B1 re-checks this work: the dates and rules on the "older" and "reform" cards (the Academy's 1815 change of x to j, the 1952 and 1959 changes to the accent on one-syllable words, the 2010 rules on "solo" and the demonstratives, "guion" and "truhan") were written in an earlier run and are not verified here.

### III. Parts of speech, declinable

| Deck (slug) | Content | Panels (with question points) | Exercise | Items |
|---|---|---|---|---|
| `accidents` (built in B2) | What Spanish has and where it differs from Latin: gender (masculine and feminine; the neuter only in *lo*, *esto*, *eso*, *aquello*); number; no case on the noun; the article and its absence; *el agua*; adjective agreement and apocope (*buen*, *gran*); person and number of the verb; tenses and moods; the three conjugations; voice; the reflexive; *ser* and *estar*; *tú*, *vosotros*, *usted*, *ustedes*; clitic pronouns | 20 (14) | `fill-ex` | 50 mc |
| `paradigms` | Articles with *al* and *del*; fifteen nouns; six adjectives; pronoun tables; verbs: *hablar*, *comer*, *vivir*, *ser*, *estar*, *haber*, *tener*, *ir*, *hacer*, *decir*, *poder*, *saber*, in the simple tenses | 12 (6) | `paradigms-ex` | 24 form |
| `parts` | The parts of speech of the Spanish school grammar (RAE: nine classes) set beside the eight of the tradition | 2 (2) | `parts-ex` | 20 mc-marked |
| `pronouns` (built in B3) | Personal (subject, clitic, prepositional) are in `accidents` and `paradigms`; this deck has the relative, demonstrative, possessive, interrogative, and indefinite | 4 (4) | `pronouns-ex` | 24 mc |
| `tenses` | The preterite and the imperfect; the compound tenses with *haber*; future and conditional; the present perfect in Spain | 3 (3) | `tenses-ex` | 24 (form 13, mc 11) |
| `subjunctive` | Present, imperfect (*-ra* and *-se*), perfect, pluperfect; forms and the stem rule | 3 (3) | `subjunctive-ex` | 24 (form 15, mc 9) |
| `participle` | Participle, gerund, infinitive; irregular participles; agreement of the participle | 4 (4) | `participle-ex` | 24 (form 4, mc 20) |
| `irregular` (Spanish only; the counterpart of German `strong`) | Stem changes (*e* to *ie*, *o* to *ue*, *e* to *i*), irregular preterites, irregular futures, verbs with *-go*, spelling changes (*c*/*qu*, *g*/*gu*, *z*/*c*) | 4 (4) | `irregular-ex` | 24 (form 18, mc 6) |
| **Subtotal** | | **52 (40)** | | **214** |

Pairing: `accidents` has `ex=lang.iii-decl.es/fill-ex` (as in French); the others by `exFor`. Screen file `data/languages/iii-decl.es.js`.

### III. Parts of speech, indeclinable

| Deck | Content | Panels | Exercise | Items |
|---|---|---|---|---|
| `prepositions` (built in B4) | *a* (and the personal *a*), *de*, *en*, *con*, *por* and *para*, *desde* and *hasta*, prepositions before an infinitive | 4 | `govern-ex` | 24 mc |
| `invariable` | Adverbs (*-mente*, place, time), the negatives and the double negative, conjunctions, interjections | 3 | `parts-ex` | 22 mc |
| `compared` | Spanish with Latin and English: the loss of case and the rise of prepositions, the article, *ser* and *estar* against *esse*, the partitive that Spanish lacks | 3 | `compared-ex` | 24 mc |
| **Subtotal** | | **10 (10)** | | **70** |

Screen file `iii-indecl.es.js`.

### IV. Word formation and etymology

| Deck | Content | Panels | Exercise | Items |
|---|---|---|---|---|
| `formation` | Suffixes: *-mente*, *-ción*, *-dor*, *-ero*, diminutives (*-ito*, *-illo*), augmentatives (*-ón*), *-ísimo*; prefixes; the doublets *lleno* and *pleno*, *hijo* and *filial* | 5 | `formation-ex` | 24 (mc 16, form 8) |
| `composition` | Kinds of compound (*sacacorchos*, *paraguas*), parasynthesis (*envejecer*), prefixes | 3 | `composition-ex` | 24 mc |
| `etymology` | From Latin to Spanish; Arabic words (*al-*), Greek, Germanic, and American words; learned and popular words | 3 | `etymology-ex` | 24 mc |
| **Subtotal** | | **11 (11)** | | **72** |

The fresh-word rule applies: no exercise item may ask about a word the card prints. Screen file `iv.es.js`.

### V. Construction

| Deck | Content | Panels | Exercise | Items |
|---|---|---|---|---|
| `agreement` | Noun and adjective; subject and verb; the participle with *haber* and with *ser*; the clitic | 4 | `agree-ex` | 28 mc |
| `government` | The personal *a*, verbs with a preposition, the indirect object, *gustar* and verbs like it, *leísmo* described | 3 | `more-ex` | 52 mc |
| `voice` | Active; passive with *ser*; the reflexive passive with *se*; impersonal *se* | 3 | `voice-ex` | 24 mc |
| `mood` | Indicative and subjunctive; the conditional; the imperative; sequence of tenses; *si*-clauses | 4 | `mood-ex` | 32 mc |
| `clauses` | Relative, causal, temporal, final, consecutive, concessive, conditional clauses; indirect discourse | 6 | `clause-ex` | 49 mc |
| `order` | Subject, verb, object; the free order; clitic placement; negation; the adjective before and after the noun | 3 | `cited-ex` | 30 (mc 21, mark 9) |
| **Subtotal** | | **23 (23)** | | **215** |

Screen file `v.es.js`.

### VI. Correctness and errors

| Deck | Content | Panels | Exercise | Items |
|---|---|---|---|---|
| `errors` | Barbarism and solecism in Spanish: *haiga* for *haya*, *dequeísmo* and *queísmo*, *habían* for *había* with an impersonal verb, *leísmo*, *laísmo*, *loísmo* (Donatus's categories applied to a living language; the Academy's judgments from the *Diccionario panhispánico de dudas*) | 3 | `vices-ex` | 21 mc |
| `usage` | The norm: the Academy, the *Diccionario panhispánico de dudas*, regional variety, the loanword | 3 | `errors-ex` | 24 mc |
| **Subtotal** | | **6 (6)** | | **45** |

The pairing follows French (`errors` with `vices-ex`; `usage` with `errors-ex`). Screen file `vi.es.js`.

### VII. Figures and tropes

| Deck | Content | Panels | Exercise | Items |
|---|---|---|---|---|
| `figures` | Hyperbaton in Góngora, antithesis in Quevedo, the proverb in Cervantes, a change of line length (passages chosen from works not used in the IX decks) | 4 | `figures-ex` | 21 mc |
| `tropes` | Metaphor, metonymy, synecdoche, irony; anaphora, chiasmus, antithesis | 2 | `tropes-ex` | 22 mc |
| **Subtotal** | | **6 (6)** | | **43** |

Screen file `vii.es.js`.

### IX. Analysis of sentences and passages

| Deck | Content | Panels | Exercise | Items |
|---|---|---|---|---|
| `prose` | 15 passages (10 walked, 5 drilled, section 4), each an opening panel (text, English, context, question point) and 3 to 4 note panels | about 72 (15 question points) | `prose-ex` | 60 mc, 20 in each of A, B, C, every item tied to its passage by `passageRef` |
| `poetry` | 10 poems (section 4.2), each an opening panel, a meter and scansion panel, and 3 note panels | about 50 (10 question points) | `poetry-ex` | 43 mc, with scansion and rhyme items, the same size as French (43) and German (39) |
| **Subtotal** | | **about 122 (25)** | | **103** |

Screen file `ix.es.js`. Section IX has no marking drill for Greek, French, or German; Spanish follows them.

### X. Making (models, read only)

Eight decks of two panels each (the text with its translation and context, then "Points of style and composition"), no question points and no exercise. Screen file `x.es.js` with `kind:'models'` tiles. List in section 4.

### Totals still to write

About 43 decks, 276 panels (of which 120 carry question points, 360 variants), 762 exercise items, 10 screen files minus the 2 existing (8 new).

### Quiz Maker entries

No new code is needed: `maker.js` builds sets from `ARS.languages`. For each batch the plan requires (a) every Spanish exercise appears under its section in the maker with the Spanish checkbox on, (b) every item type prints on paper with a key (the `--maker` run of `test/browser-check.js` renders every item), and (c) doctrine questions draw from the question points of the Spanish decks. Final test change: `test/maker-check.js:13`.

### Audio reader

Already done in code (table rows 20 to 22 and 31). What each batch must do is content: wrap every Spanish word, example, and passage in `lang="es"` (a passage with line breaks as one element, as the French test shows); put English glosses outside it. Two things to test in batch B1 and then in every batch: that "¿" and "¡" do not break a chunk badly in `chunkText` (`speech.js:300-320`), and that the Latin comparisons, which read in an Italian voice or English, still switch correctly beside Spanish.

## 4. Proposed passages

**Rule for choosing:** the text is in the public domain in both Spain (author died before 1946, so 80 years have passed) and the United States (first published before 1931). Spanish of Spain; one Nicaraguan poet is proposed for the alexandrine and flagged (open question 3). Editions below are the ones I propose the later run to fetch, check against a facsimile where one exists, and store under `sources/spanish/` with a header. **None of the texts was fetched or collated in this run.** Every edition and every translator named is a candidate to be verified, and a "(verify)" marks the ones I am least sure of.

### 4.1 Fifteen prose passages

"W" is a walked passage (4 note panels); "D" is a drilled passage (3 note panels, more exercise questions; open question 5).

| # | Type | Author, work, place | Candidate edition of the Spanish | Candidate translation |
|---|---|---|---|---|
| 1 | W | Miguel de Cervantes, *Don Quijote de la Mancha*, I.1 (opening) | 1605 *princeps* (Biblioteca Digital Hispánica facsimile) and Project Gutenberg's Spanish text (verify the number) | John Ormsby (1885, Gutenberg) |
| 2 | W | *La vida de Lazarillo de Tormes*, Tratado I (opening of the narrative) | Biblioteca Virtual Miguel de Cervantes (BVMC), from the Burgos (1554) or Alcalá edition | Clements R. Markham (1908) (verify) |
| 3 | W | Santa Teresa de Jesús, *Libro de la vida*, ch. 1 | BVMC, from the autograph or the 1588 edition (verify) | David Lewis (1870) |
| 4 | W | Francisco de Quevedo, *La vida del Buscón*, I.1 | BVMC | to be located; otherwise see open question 2 |
| 5 | W | Baltasar Gracián, *Oráculo manual y arte de prudencia* (1647), aphorism 1 | BVMC | Joseph Jacobs, *The Art of Worldly Wisdom* (1892) |
| 6 | W | Mariano José de Larra, "Vuelva usted mañana" (1833) | BVMC | to be located; otherwise open question 2 |
| 7 | W | Gustavo Adolfo Bécquer, "Los ojos verdes" (1861) | BVMC or Wikisource | to be located; otherwise open question 2 |
| 8 | W | Leopoldo Alas "Clarín," *La Regenta* (1884 to 1885), ch. 1 (opening) | BVMC | none in the public domain known to me; open question 2 |
| 9 | W | Benito Pérez Galdós, *Marianela* (1878), ch. 1 | Gutenberg or BVMC | Mary J. Serrano (1892) (verify) |
| 10 | W | Miguel de Unamuno, *Del sentimiento trágico de la vida* (1912 to 1913), ch. 1 | Gutenberg or BVMC | J. E. Crawford Flitch (1921) |
| 11 | D | Cervantes, prologue to the *Novelas ejemplares* (1613) | BVMC | to be located; otherwise open question 2 |
| 12 | D | Fray Luis de León, *De los nombres de Cristo* (1583), the opening of "Pastor" (verify the place) | BVMC | to be located |
| 13 | D | Emilia Pardo Bazán, *Los pazos de Ulloa* (1886), ch. 1 | BVMC or Gutenberg | to be located; otherwise open question 2 |
| 14 | D | Juan Valera, *Pepita Jiménez* (1874), the first letter | Gutenberg or BVMC | Mary J. Serrano (1886) (verify) |
| 15 | D | Ángel Ganivet, *Idearium español* (1897), opening of the first part | BVMC | none known; open question 2 |

**Translation rule for prose (Timothy, 25 Oct 2026).** Every prose passage needs a real published translation. If none is found when its batch is built (candidates marked "to be located" or "none known" above: Quevedo, Larra, Bécquer, Clarín, Pardo Bazán, Ganivet, Cervantes's prologue, Fray Luis), the passage is dropped and replaced from the reserve or by another passage that has a published translation. Do not substitute the course's own rendering for prose.

**Spelling rule before 1800 (Timothy, 25 Oct 2026).** A passage written before 1800 is quoted from a named edition that modernizes the spelling; the deck's Sources note names that edition and says the spelling is modernized, and the text is never altered beyond what that edition prints. The card on the text's spelling (section 4.4) goes in the deck.

Reserve (swap in if a passage fails the check; the first two have Ormsby's published translation of Cervantes or Serrano's of Galdós): Nebrija, *Gramática de la lengua castellana* (1492), the prologue to Queen Isabella (a natural fit for a grammar course, but in the spelling of 1492, so it belongs with the older-spelling cards, section 4.3); Juan de Valdés, *Diálogo de la lengua*; Alfonso X; Don Juan Manuel, *El conde Lucanor*, exemplo 35; Cervantes, *Don Quijote* I.8 (the windmills) and II.74 (Ormsby); Galdós, *Doña Perfecta* (1876); Fernando de Rojas, *La Celestina*.

### 4.2 Ten poems, mixed across periods and poets

Meters are given as expected and **must be scanned syllable by syllable at write time**; nothing here is a verified count.

| # | Poem | Meter and form | Candidate edition | Candidate translation |
|---|---|---|---|---|
| 1 | *Romance del prisionero* ("Que por mayo era, por mayo"), anonymous, late 15th century; the text of the *Cancionero de romances* (Antwerp, c. 1550) | Octosyllable, assonant ballad (*romance*). Matches the ii.meter card | BVMC or BNE facsimile of the *Cancionero* (verify) | course's own plain rendering (open question 2) |
| 2 | Jorge Manrique, *Coplas por la muerte de su padre*, stanza 1 ("Recuerde el alma dormida") | *Copla de pie quebrado*: octosyllables with a short line of four | BVMC | Henry Wadsworth Longfellow (1833) |
| 3 | Garcilaso de la Vega, Soneto XXIII ("En tanto que de rosa y de azucena") | Hendecasyllable, sonnet | BVMC (the 1543 Boscán edition) | course's own plain rendering |
| 4 | Gustavo Adolfo Bécquer, *Rimas*, LIII ("Volverán las oscuras golondrinas") | Hendecasyllable with assonance in the even lines (confirm the pattern when scanning) | BVMC or Gutenberg | Timothy's own, or the course's plain rendering |
| 5 | Rubén Darío, "Sonatina" (*Prosas profanas*, 1896) | Alexandrine of fourteen syllables (two halves of seven). Matches the ii.meter card | BVMC or Gutenberg | Thomas Walsh, *Hispanic Anthology* (1920), if it includes the poem (verify) |

| 6 | San Juan de la Cruz, "Noche oscura" ("En una noche oscura"), written c. 1578, first printed 1618 | *Lira* (stanzas of 7 and 11 syllables, the form Garcilaso brought from Italy) | BVMC (verify the early printed text) | course's own plain rendering (verse) |
| 7 | Francisco de Quevedo, "Amor constante más allá de la muerte" ("Cerrar podrá mis ojos la postrera"), printed 1648 | Hendecasyllable, sonnet | BVMC, from the 1648 *Parnaso español* or a modernizing edition named in the Sources note (verify) | course's own plain rendering (verse) |
| 8 | Luis de Góngora, letrilla "Ándeme yo caliente" (1581) | Short popular lines with a refrain (hexasyllables and octosyllables; scan at write time) | BVMC (verify) | course's own plain rendering (verse) |
| 9 | José de Espronceda, "Canción del pirata" (1835) | A polymetric song with a refrain (scan at write time) | BVMC or Gutenberg | course's own plain rendering (verse) |
| 10 | Antonio Machado, *Campos de Castilla* (1912), "Proverbios y cantares" XXIX ("Caminante, son tus huellas") | Octosyllable. Matches the ii.meter card on Machado | Gutenberg or BVMC (verify; Machado died in 1939 and the book is of 1912, so it passes both tests) | course's own plain rendering (verse) |

Meters taught: the octosyllable and the *romance* (1, 2, 8, 10), the hendecasyllable and the sonnet (3, 4, 7), the alexandrine (5), and the *lira* and the polymetric song as variants (6, 9). The periods run from the fifteenth century to the twentieth, and the poets are all different. Alternatives that pass both copyright tests: García Lorca, *Romancero gitano* (1928), "Romance de la luna, luna" (Lorca died in 1936, and 1928 is before 1931); Fray Luis de León, "Vida retirada" (also a *lira*); Rosalía de Castro, *En las orillas del Sar* (1884).

Per Timothy's answer to question 2, translations of verse may be the course's own plain renderings, stated in the deck's Sources note, as French does; Longfellow's Manrique and Walsh's Darío are used only if a check confirms them. For verse studied word by word, the rendering must give every word (STYLE-GUIDE-CARDS.md 8f). No poem is fetched or built yet.

### 4.3 The eight model passages (Section X)

Read only, with two panels each. Taken from the IX pool where possible, as French and German do, but with a different stretch of text wherever the same lines are asked in IX: Cervantes, prologue to Part I of *Don Quijote* (1605); Santa Teresa; Gracián; Larra; Unamuno; Clarín; Garcilaso XXIII; Darío "Sonatina" (or Bécquer LIII). Six prose models and two verse models, as in French.

### 4.4 Older-spelling cards

The brief asks for one or two. Two exist already from Phase 1, in `lang.ii.es/orthography` (the panels "Older spellings" and "The spelling of 2010"). They cover *Quixote* and *Quijote*, the accent on *fué* and *dió*, and the 2010 changes to *solo* and the demonstratives. I propose **no third card in II**, and one more card in IX, so that the older spelling is met where it occurs in a text:

1. **`lang.ix.es/prose`, a note panel after passage 1:** "The text and its spelling." It states that the *princeps* of 1605 prints *Quixote*, *hidalgo*, and *hazienda* (verify each form against the facsimile) and that this edition prints the modern spelling of the Academy; it names the edition and the editorial convention. Its question point asks what an editor changes and what he must not.
2. **Optional, in the same deck after passage 2 (Lazarillo) or in the reserve Nebrija passage:** "Spellings of the sixteenth century," on *ç* and *z*, *ss* and *s*, *x* for the sound of *j*, *u* and *v*, *y* for *i*, and the missing accents, with five words from the passage and their modern forms.

Both depend on the answer to open question 1.

## 5. Batch order with START FROM handoffs

**Rules for every batch** (so that any run can resume cleanly): read STYLE-GUIDE-CARDS.md, NEXT-STEP.md ("Current stage"), CLAUDE.md, the newest entries of REVISION-GUIDE.md, and this plan. Work one deck at a time and commit after each deck, with the message `Spanish <bar>: <deck>`. Add the screen file's `<script>` tag to `index.html` in the same commit as the screen. Keep Spanish hidden throughout (the `hidden:true` stays; the screens show only with `?preview=es`). Before each commit run `node test/lang-audit.js --only=lang.<bar>.es` (0 failures; read the warnings), `node test/browser-check.js --only=lang.<bar>.es`, and `node test/lang-order-speech-check.js`. Save each quoted text under `sources/spanish/<slug>.txt` with a header, record the check in `sources/QUOTATION-CHECK-SPANISH.md`, and record each translator in `sources/TRANSLATIONS-USED.md`. End the report with the numbered list of decisions for Timothy. Each batch ends by filling in its own **START FROM** block at the end of this file's section 7 ("Handoff log"): what was done, the last commit, anything left half done, and the next batch.

| Batch | Scope | Files and counts | Gate before it starts |
|---|---|---|---|
| **B0** | Done: Phase 0 and Phase 1 | `9c4560c`, `88aa304` | none |
| **B1** | Audit of Phase 0 and 1. Verify the facts on the orthography cards (section 3, II); add `sources` fields if absent; test `¿ ¡` in the reader; test ñ and accents in all six fonts; add `es` to `test/maker-check.js:13` (this run only changes the test, not the app) | existing 6 decks, 3 exercises | Timothy's answer to open question 1 is not yet needed |
| **B2** | III declinable, first half: `accidents`, `paradigms`, `parts` and `fill-ex`, `paradigms-ex`, `parts-ex`; create `iii-decl.es.js` | 3 decks (34 panels); 3 exercises (94 items) | B1 done |
| **B3** | III declinable, second half: `pronouns`, `tenses`, `subjunctive`, `participle`, `irregular` and their five exercises | 5 decks (18 panels); 5 exercises (120 items) | B2 done |
| **B4** | III indeclinable: `prepositions`, `invariable`, `compared` and exercises; `iii-indecl.es.js` | 3 decks (10); 3 exercises (70) | B3 done |
| **B5** | IV: `formation`, `composition`, `etymology`; `iv.es.js` | 3 decks (11); 3 exercises (72) | B4 done |
| **B6** | V, first half: `agreement`, `government`, `voice` with `agree-ex`, `more-ex`, `voice-ex`; create `v.es.js` | 3 decks (10); 3 exercises (104) | B5 done |
| **B7** | V, second half: `mood`, `clauses`, `order` with `mood-ex`, `clause-ex`, `cited-ex` (nine marking items) | 3 decks (13); 3 exercises (111) | B6 done |
| **B8** | VI and VII: `errors`, `usage`, `figures`, `tropes` and four exercises; `vi.es.js`, `vii.es.js` | 4 decks (12); 4 exercises (88) | B7 done; VII passages not those of IX |
| **B9** | IX prose, passages 1 to 5 (walked), with the older-spelling card of section 4.4 | about 24 panels; `prose.js` begun | questions 1 and 2 are answered; a published translation of each passage is found first, or the passage is replaced |
| **B10** | IX prose, passages 6 to 10 | about 24 panels | B9 done |
| **B11** | IX prose, passages 11 to 15 (drilled) and `prose-ex` (60 items) | about 24 panels; 60 items | B10 done |
| **B12** | IX poetry, 10 poems with scansion (section 4.2), and `poetry-ex` (43 items); create `ix.es.js`. Large: split into B12a (poems 1 to 5) and B12b (poems 6 to 10 and `poetry-ex`) if needed | about 50 panels; 43 items | B11 done |
| **B13** | X: eight model decks; create `x.es.js` | 8 decks (16 panels) | B12 done |
| **B14** | Whole-language pass: full audit (`--verbose`), `browser-check` and `--maker`, a read of every Spanish deck for the style guide, a check that no exercise item asks a card's own example in the same respect, option balance, a count of items against section 2, TRANSLATIONS-USED and quotation check complete. **Also, from Timothy's answers of 26 Oct 2026:** (1) confirm the rule that the names of languages are written in lowercase (the card in `lang.ii.es/orthography` and its example *hablo español*) against the Academy's own text, if its site can be read; (2) check the Preliminary overview (`lang.prelim.es/overview`) and the statements of `lang.ii.es/meter` against Navarro Tomás, *Métrica española*, or another named source; (3) the origin of *ñ* (card `letters`, whose `src` note records that it rests on one source, Spanish Wikipedia) against the Academy's *Ortografía* (2010); (4) compare the machine-read text of the Academy's *Manual* used in B2 with the printed book, and read the *Nueva gramática básica* (2011) and the grammars of 1771 and 1973 for the `parts` deck; (5) if a source for the date when *e* and *u* lost the accent is found, add it to the older-spelling card (the card now gives 1911 for *a* only); (6) the printed-book check of the Academy's *Manual* (Timothy, 26 Oct 2026: it happens in B14); (7) verify the 2011 *Nueva gramática básica* and the grammars of 1771 and 1973 for the two statements of the `parts` deck that now name Delgado Torrico (2016); (8) re-check the Donatus division into declinable and indeclinable parts against Donatus; (9) the three points of B3 that rest on one source or on an inference (the use of *de él*, *de ella* beside *su* in Spain, *vuestro* with *vosotros*, and the two derivation rules of the subjunctive, which were checked by computation), see `sources/spanish/B3-FACT-CHECK-OCT-26.md` (Timothy, 26 Oct 2026: keep the "can add *de él*" wording, list it here as resting on one source; keep the two derivation rules as unquoted teaching rules); (11) the three points of B4 that rest on one source or on an inference (the written accent of the adjective kept in the adverbs in *-mente*, which rests on the Manual's own spelling and not on a stated rule; the statement that the Latin direct object is marked by the accusative alone; the Latin sentence *Pater domī est*, which is the course's own), see `sources/spanish/B4-FACT-CHECK-OCT-26.md`; (10) re-read the verb tables of `paradigms` and of B3 from the printed *Manual* (Wiktionary is the working source until then); (12) the points of B5 that rest on one source or on an inference: every etymology of `lang.iv.es/etymology` (the DLE, 23rd ed., read in an OCR copy, to be compared with the live dictionary or the printed book), "the Arabic of Spain" for the abbreviation *ár. hisp.*, "reconstructed" for the starred Germanic forms, the rule on the number of the noun in V+N compounds, *enlatar* as an example of *en-N-ar*, the Latin etyma printed without macrons, and the common bases reused in `formation-ex`; also (13) the claim in `lang.prelim.es/overview` that many Spanish words begin with the Arabic article *al-*, for which neither the Manual nor the DLE entries read in B5 give a statement, see `sources/spanish/B5-FACT-CHECK-OCT-26.md` | no new content | B13 done; Timothy's review of a sample (his decision) |
| **B15** | **The switch** (one commit, last): see below | about 10 lines changed | B14 clean and Timothy's go-ahead |

**B15, the final switch.** One commit, titled `Spanish on`:

1. `course.js:66`: delete `hidden:true` and its comment.
2. `index.html:201`: remove `hidden` from the Spanish checkbox label.
3. `maker.js:13-18`: delete the preview block.
4. `test/lang-order-speech-check.js:42-55`: replace the hidden-state assertions with "six buttons on every bar, in order English, Latin, Greek, Spanish, German, French; Spanish checkbox visible."
5. `app.js:38, 91` and `data/structure.js:42`: add Spanish to the language lists, in order.
6. `LANGUAGES-LAYER-SPEC.md`: record Spanish in the inventory (ten poems, like the other languages).
7. Guard: before the commit confirm that all ten screen files exist (`ls data/languages/*.es.js` returns ten) and that `node test/browser-check.js` reports 60 language screens (it reports 50 now). Without this, `langBar` (`course.js:227`) would show a Spanish button that opens an empty "more" screen.
8. Run the full test set. If anything fails, revert; do not partly switch.

Rolling back is a single revert of this commit. Switching is a single final commit and only when all ten screens exist (answer 8).

## 6. Open questions for Timothy, ranked

**Answered by Timothy on 25 Oct 2026.** Each question below is marked answered, and the plan above has been revised to match.

1. Quotations before 1800: quote from a named modernizing edition, say so in the Sources note, and add the card on the text's spelling (section 4.4). Never alter a quotation beyond what the named edition prints.
2. Translations: the course's own plain renderings are allowed for verse only, stated in the Sources note, as French does. For prose, use a real published translation, or drop the passage and replace it with one that has a published translation. CLAUDE.md rule 9 is updated to say so (verse only).
3. Keep Darío ("Sonatina") for the alexandrine.
4. Changed: Spanish gets ten poems, like French and German, and the poetry deck and `poetry-ex` match theirs in size (about 43 questions). Section 4.2, the counts in sections 2 and 3, the B12 row, and B15 are revised.
5. Drilled passages (the five): fewer note panels and more exercise questions.
6. Spain only, with *vosotros* and no *voseo* apart from the two remarks.
7. Keep the `irregular` deck. Keep *ser* and *estar* inside the other decks, with no `copulas` deck.
8. One final switch (B15), only when all ten screens exist.
9. Copyright cutoff as stated: author died before 1946 and first published before 1931.
10. Quiz Maker and recitations as the plan has them. Nothing else wanted.

**Follow-up answers, 26 Oct 2026 (the B2 brief).** (1) Apply the one-line fix in `maker.js` so that a hidden language is skipped in the Quiz Maker unless `?preview=es` is on, as the first commit of B2, with a test that fails without it: done (413c72f, test `test/maker-hidden-check.js`). (2) Keep the lowercase language-names card and its example; confirm the rule against the Academy's text in B14. (3) Keep the card that gives 1911 only for the accent on *a*; add *e* and *u* if a source is found. (4) Add to B14 the check of the Preliminary overview and the meter statements against Navarro Tomás, and note on the *ñ* card that its origin rests on one source: done (`src` note on the card; B14 row). (5) Leave `STYLE_GUIDE.md`, `ars-grammatica-pending-changes.md`, and `previews/` untracked.

The original questions follow, as asked.

1. [Answered] **Spelling in quotations before 1800.** The brief says modern spelling, but the rule is never to alter a quotation, even by a letter. Cervantes, Lazarillo, Teresa, Gracián, Quevedo, Garcilaso, and Manrique were printed in older spellings (*Quixote*, *ç*, *x* for *j*). Options: (a) quote from a named edition that modernizes the spelling, and say so in the Sources note (recommended; the older-spelling cards then explain the difference); (b) quote in the original spelling and add notes; (c) use only authors from the nineteenth century on, whose spelling is already modern, and keep the older authors in the reserve list or in Section X. Recommendation: (a), with each modernizing edition named, and one card on the text's spelling, as in section 4.4.
2. [Answered] **English translations of passages.** Where a published public-domain translation exists the plan names it (marked verify). For Quevedo, Larra, Bécquer, Clarín, Pardo Bazán, Ganivet, Cervantes's prologue, Fray Luis, the *Romance del prisionero*, and Garcilaso I found none I could name with confidence. Options: (a) the French verse precedent, "the course's own plain renderings" stated in the Sources note; (b) only Timothy's own translations; (c) drop passages that have no published translation. CLAUDE.md rule 9 allows only a real published translation or Timothy's own, so (a) needs your permission. Recommendation: (a) for the verse, as French does, and published translations or (c) for prose.
3. [Answered] **Peninsular authors only?** The plan uses Spanish authors except Rubén Darío (Nicaraguan; his "Sonatina" is the standard alexandrine and the ii.meter card already names him). Alternatives for the alexandrine from Spain: Berceo's *cuaderna vía* (13th century, older spelling). Recommendation: keep Darío.
4. [Answered] **Five poems, not ten.** French and German each have ten verse passages in the mockup (43 and 39 questions), but the pending-changes file says five for every language, and the brief says five. Spanish gets five and 24 questions. Confirm that Spanish should be built to the five of the pending-changes file, and whether French and German are to be cut to five later.
5. [Answered] **"Walkthroughs" and "drills."** The old app had 10 walked and 5 drilled passages in each language, but the French and German prose decks do not distinguish them (every passage has an opening panel and 3 to 4 note panels). I propose that the 5 drilled Spanish passages get 3 note panels and more exercise questions, so that they are tested more than they are explained. Confirm, or say that all 15 should be built alike.
6. [Answered] **Spain only for the grammar.** The paradigms include *vosotros* and omit *voseo* and Latin American forms except as one remark in `compared` and in `usage`. Confirm.
7. [Answered] **Spanish-only decks beyond French parity.** I added `irregular` (III declinable, the counterpart of German `strong`), and put *ser* and *estar* inside `accidents` and `compared` rather than in a deck of their own. A separate `copulas` deck is possible. Recommendation: no new deck.
8. [Answered] **Threshold for the switch.** The plan switches Spanish on only when all ten screens exist, since the code shows a button on every bar once Spanish is not hidden. If you prefer to show Spanish earlier, in the sections finished so far, the filter at `course.js:227` must stay as it is and the `hidden` flag stays; say so and the switch becomes per section.
9. [Answered] **Copyright rule.** The plan requires death before 1946 and first publication before 1931. That excludes Machado's *Juan de Mairena* (1936), Ortega, and anything later. Confirm, or allow short quotations by fair use for later authors.
10. [Answered] **Quiz Maker and recitations.** Spanish exercises enter the Quiz Maker with no code change, and the recitations remain for the general decks only. Confirm that nothing else is wanted.

## 7. Handoff log

(Each batch appends its block here.)

### B1 done (25 Oct 2026)

What was done:
- Timothy's ten answers recorded at the top of section 6; the plan revised for ten poems (section 4.2, counts, B12, B15); CLAUDE.md rule 9 gained the verse exception.
- Every fact on the Phase 1 orthography cards, their question points, and the exercise was checked against real sources; the record, with the source for each card, is `sources/spanish/B1-FACT-CHECK-OCT-25.md`. Corrected: the 1754 opening marks (recommended, not required); the alphabet sentence (ch and ll are digraphs; twenty-nine letters from 1803 to 2010); the z and c sound (the north, center, and east of Spain, not all of Spain); x and j (the reform is of 1815, not "until the eighteenth century"); *fué*, *dió*, *vió* (one reform, approved in 1952, binding from 1959); the accent on *a*, *e*, *o*, *u* (prescribed in 1815; dropped for *a* in 1911); *México*; *solo*, the demonstratives, and *guion*. The synalepha card's syllable division in the meter deck was also corrected. Deck `sources` line extended.
- Fonts (all six, light and dark) and the reader were tested on the Spanish decks: no change needed.
- `test/maker-check.js` now includes `es`. `test/browser-check.js` was fixed to open `index.html` (it opened `/`, which the local server answers with 404 since the main page moved to `index.html`), so `browser-check` and `--maker` run again.

Findings left for Timothy (not changed, because B1 may change no app file but the cards):
1. **The Quiz Maker lists the three Spanish exercises even without `?preview=es`.** The Spanish checkbox is hidden but still checked, so `buildSetList` (maker.js:68-82) shows them. This breaks "keep Spanish hidden." The fix is one line in `langSets` (maker.js:49-62) or the filter (skip a hidden language unless it is in preview). It is not applied; it should be applied in B2 or earlier if Timothy agrees.
2. Not verified: the names of languages in lowercase (needs an Academy text); the date when *e* and *u* lost the accent; the origin of ñ is checked in a secondary source only; the meter statements are not checked against Navarro Tomás; the Preliminary overview (`lang.prelim.es/overview`) was not checked in B1 and still needs a fact check (add to B14 at the latest).

START FROM: B2. Last commit of Spanish work: see `git log --oneline` (the commits titled "Spanish ii: orthography", "Spanish ii: meter", "Spanish B1: ..."). Nothing is half done. Spanish is still hidden; `?preview=es` shows it. B2 is III declinable, first half: `accidents`, `paradigms`, `parts` with `fill-ex`, `paradigms-ex`, `parts-ex`, and the new screen file `data/languages/iii-decl.es.js` (plus its `<script>` tag in index.html, in the es position between grc and fr, line 277 area).

### B2 done (26 Oct 2026)

What was done (commits in order, each with the audit, `browser-check` for `lang.iii-decl.es`, `--maker`, and `lang-order-speech-check` run before it):
- `413c72f` The Quiz Maker skips a hidden language unless `?preview=es` is on (the fix in `maker.js:buildSetList`, the new test `test/maker-hidden-check.js`, and `browser-check --maker` now opens the maker twice, without and with the preview). The test fails without the fix (3 Spanish sets listed) and passes with it.
- `db4614b` the Lapesa title in the `lang.ii.es/orthography` sources line was tagged as Latin; now Spanish.
- `8dcaca3` Spanish iii-decl: accidents. 20 panels, 14 question points; `fill-ex`, 50 multiple-choice items (A 17, B 17, C 16); the screen file `data/languages/iii-decl.es.js` and its `<script>` tag in `index.html` (between Greek and French).
- `84ffb75` Spanish iii-decl: paradigms. 12 panels (articles, 15 nouns, 6 adjectives, the personal pronouns, 12 verbs in 6 tenses), 6 question points; `paradigms-ex`, 24 typed items (A 8, B 8, C 8).
- `2a5daea` correction of a citation in the verb-table check.
- `d5d7757` Spanish iii-decl: parts. 2 panels, 2 question points; `parts-ex`, 20 marked-word items.
- The `src` note on the *ñ* card and the B14 additions (this commit).

Sources saved under `sources/spanish/`: `B2-FACT-CHECK-OCT-26.md` (every statement of the cards against the Academy's *Manual* by paragraph, with the verdict), `B2-VERB-TABLES-CHECK.md`, `rae-manual-2010-excerpts-B2.txt`, `allen-greenough-excerpts-B2.txt`, `wiktionary-conjugation-tables-B2.txt`, `delgado-torrico-2016-excerpt-B2.txt`; `sources/QUOTATION-CHECK-SPANISH.md` begun. No passage is quoted in any B2 deck, so `TRANSLATIONS-USED.md` has nothing to add.

The Academy's website still refuses automated access. The *Manual* was read as a machine-read text on the Internet Archive. This is the main source of B2 and could not be compared with the printed book (B14).

Findings left for Timothy: see the report of this run.

START FROM: B3. Last commit of Spanish work: see `git log --oneline` (the commits titled "Spanish iii-decl: ..."). Nothing is half done. Spanish is still hidden. B3 is III declinable, second half: `pronouns`, `tenses`, `subjunctive`, `participle`, `irregular`, each with its exercise (`pronouns-ex`, `tenses-ex`, `subjunctive-ex`, `participle-ex`, `irregular-ex`), added to `data/languages/iii-decl.es.js` (the screen file exists; add each deck and exercise before `fill-ex`, with the tile counts, and keep `fill-ex` last; a helper that does this is not in the repository, so edit the file directly or write one). Methods that worked in B2: the Academy's *Manual* (Internet Archive item `RAEManualDeLaNuevaGramaticaDeLaLenguaEspanola`, the plain-text file) for every grammatical statement, citing its paragraph numbers; Allen and Greenough (item `allengreenoughsn01alle`) for the Latin comparisons; the Manual's verb tables (section 4.9) for every verb form. Examples already used in the Spanish layer: check them with a search of `data/` before using them again (the overview and `lang.ii.es` use *libro*, *casa*, *puerta*, *hablo*, *hablamos*, *he hablado*, *hablaré*; B2 used *cantar*, *trabajar*, *beber*, *correr*, *escribir*, *subir*, *estudiar*, *obtener*, *detener* for fresh forms).

### B3 done (26 Oct 2026)

First, Timothy's answers to the eight B2 decisions were carried out: the neuter quantifiers (*mucho, poco, tanto, cuanto*) are on the gender card, the two statements of the `parts` deck that rest on Delgado Torrico (2016) now name him, the shortened future stems were moved from `accidents` to the `irregular` deck (no example is used twice), and the B14 row gained the printed-book check, the 2011 grammar and the grammars of 1771 and 1973, and the Donatus division (`e257b9b`, `4a6d0ad`).

Built (each deck in its own commit titled "Spanish iii-decl: <deck>", with its exercise and its screen entries; the audit, `browser-check` for `lang.iii-decl.es`, and `lang-order-speech-check` were run before every commit):
- `pronouns`, 4 panels, 4 question points; `pronouns-ex`, 24 multiple-choice items (`3a627b5`).
- `tenses`, 3 panels, 3 question points; `tenses-ex`, 13 typed and 11 multiple-choice items (`5670dea`).
- `subjunctive`, 3 panels, 3 question points; `subjunctive-ex`, 15 typed and 9 multiple-choice items (`1b73ed5`).
- `participle`, 4 panels, 4 question points; `participle-ex`, 4 typed and 20 multiple-choice items (`e4a38af`).
- `irregular`, 4 panels, 4 question points; `irregular-ex`, 18 typed and 6 multiple-choice items (`f7a3c1c`).
Totals for B3: 18 panels, 18 question points, 120 items. With B2 the Spanish `iii-decl` screen has 8 decks, 52 panels, 40 question points, and 214 items, which is the target of section 2. `ser` and `estar` stay in `accidents` and `paradigms`; there is no `copulas` deck.

Evidence under `sources/spanish/`: `B3-FACT-CHECK-OCT-26.md`, `B3-VERB-FORMS-CHECK.md`, `rae-manual-2010-excerpts-B3.txt`, `allen-greenough-excerpts-B3.txt`, `wiktionary-conjugation-tables-B3.txt`; `sources/QUOTATION-CHECK-SPANISH.md` extended. No passage is quoted in any B3 deck, so `TRANSLATIONS-USED.md` has nothing to add. The Academy's website still refuses automated access; everything rests on the machine-read *Manual* (B14 compares it with the printed book).

Tests run at the end: `lang-audit` (0 failures), `browser-check --maker` (53 screens, 197 decks, no problems; the maker test without the preview lists no Spanish set), `lang-order-speech-check`, `guided-check` (84 checks), `levels-check` (20 sets).

START FROM: B4. Last commit of Spanish work: see `git log --oneline` (the commits titled "Spanish iii-decl: ..." and "Spanish B3: ..."). Nothing is half done. Spanish is still hidden. B4 is III indeclinable: the decks `prepositions`, `invariable`, `compared` with `govern-ex`, `parts-ex`, `compared-ex`, and the new screen file `data/languages/iii-indecl.es.js` with its `<script>` tag in `index.html` (between Greek and French, in the `iii-indecl` block). Note that `lang.iii-decl.es/parts-ex` already exists; the `iii-indecl` exercise with the id `lang.iii-indecl.es/parts-ex` is a different file, as in French. `compared` is where the plan puts the remark on *voseo* and the partitive that Spanish lacks. The tools of B2 and B3 apply: the Manual (Internet Archive item `RAEManualDeLaNuevaGramaticaDeLaLenguaEspanola`) for the Spanish, Allen and Greenough (`allengreenoughsn01alle`) for the Latin, the scripts are not in the repository (a screen helper, the verb check, and the excerpt extractor were written in the session's scratch directory; write them again if needed). For the screen file, follow the order of the French file `data/languages/iii-indecl.fr.js` (study deck, then its exercise).

### B4 done (26 Oct 2026)

First, Timothy's five answers to the B3 decisions were carried out: the "can add *de él*" wording stays and is listed in the B14 row as resting on one source; the two derivation rules stay as unquoted teaching rules; the present perfect stays as taught; the personal and reflexive pronouns stay out of `pronouns`; and the B14 row gained the re-reading of the verb tables from the printed *Manual*.

Built (each deck in its own commit titled "Spanish iii-indecl: <deck>", with its exercise and its screen entries; the audit, `browser-check` for `lang.iii-indecl.es`, and `lang-order-speech-check` were run before every commit):
- `prepositions`, 4 panels, 4 question points; `govern-ex`, 24 multiple-choice items (`f40f8fb`). This commit also adds the new screen file `data/languages/iii-indecl.es.js` and its `<script>` tag in `index.html` (between Greek and French, in the `iii-indecl` block).
- `invariable`, 3 panels, 3 question points; `parts-ex`, 22 multiple-choice items (`4b0c39e`).
- `compared`, 4 panels, 4 question points; `compared-ex`, 24 multiple-choice items (`3fa9e06`). The fourth panel, on the second person, carries the one remark on *voseo*; the plan had put the remark inside `compared` without a panel of its own.
Totals for B4: 11 panels, 11 question points, 70 items (the plan's targets were 10 panels and 70 items). `govern-ex` and `parts-ex` are paired with their decks by `exFor`, `compared-ex` by the id; the file order follows the French screen.
A later commit changed two items of `govern-ex` that repeated the card's examples.

Evidence under `sources/spanish/`: `B4-FACT-CHECK-OCT-26.md`, `rae-manual-2010-excerpts-B4.txt`, `allen-greenough-excerpts-B4.txt`; `sources/QUOTATION-CHECK-SPANISH.md` extended. No passage is quoted in any B4 deck, so `TRANSLATIONS-USED.md` has nothing to add. Spanish statements were checked against the Academy's *Manual* by paragraph number, and the Latin comparisons against Allen and Greenough. The Donatus division was not part of B4 (it stays in the B14 row).

Tests run at the end: `lang-audit` (0 failures), `browser-check --maker`, `lang-order-speech-check`, `guided-check`, `levels-check`, and the maker test without the preview (no Spanish set listed).

START FROM: B5. Last commit of Spanish work: see `git log --oneline` (the commits titled "Spanish iii-indecl: ..." and "Spanish B4: ..."). Nothing is half done. Spanish is still hidden. B5 is IV, word formation and etymology: the decks `formation`, `composition`, `etymology` with `formation-ex`, `composition-ex`, `etymology-ex` (24 items each, `formation-ex` 16 multiple-choice and 8 typed), and the new screen file `data/languages/iv.es.js` with its `<script>` tag in `index.html` (between Greek and French, in the `iv` block). Follow the French and German `iv` files for the pairing and the order. The fresh-word rule applies: no exercise item may ask about a word that a card prints. Spanish sources for the formation chapters are the Manual's chapters 5 to 11 (derivation and composition; the suffix *-mente* was already read in B4, section 7.6) and, for etymology, Rafael Lapesa, *Historia de la lengua española*, which has not yet been read in any batch and is available only if a copy can be reached; if it cannot, say so on the card and in the report and use the Manual's own statements on the origin of words. Latin comparisons: Allen and Greenough, §§ 227 to 253 (word formation). The tools of B2 to B4 were written in the session's scratch directory and are not in the repository (the screen helper, the excerpt extractor, the verb check); write them again if needed.

### B5 done (26 Oct 2026)

First, Timothy's four answers to the B4 decisions were carried out: the fourth `compared` panel stays; one sentence on the personal *a* with *alguien* and *alguno* was added to `lang.iii-indecl.es/prepositions` (commit `2ace9b4`, Manual §34.3.1a); the regional "Nadie no vino" note stays out; and B5 uses only the Manual and the Academy's dictionary for word origin (Lapesa was not available, and no etymology comes from memory).

Built (each deck in its own commit titled "Spanish iv: <deck>", with its exercise and its screen entries; the audit, `browser-check` for `lang.iv.es`, and `lang-order-speech-check` were run before every commit):
- `formation`, 5 panels, 5 question points; `formation-ex`, 24 items (16 multiple choice, 8 typed) (`a4c744c`). This commit also adds the new screen file `data/languages/iv.es.js` and its `<script>` tag in `index.html` (between Greek and French, in the `iv` block).
- `composition`, 3 panels, 3 question points; `composition-ex`, 24 multiple-choice items (`40c0963`, with a wording fix in a later commit).
- `etymology`, 3 panels, 3 question points; `etymology-ex`, 24 multiple-choice items (`c13e422`).
Totals for B5: 11 panels, 11 question points, 72 items (the plan's targets). Each exercise is paired with its deck by the id plus "-ex", as in the French screen file.

Evidence under `sources/spanish/`: `B5-FACT-CHECK-OCT-26.md`, `rae-manual-2010-excerpts-B5.txt`, `dle-2014-excerpts-B5.txt`, `allen-greenough-excerpts-B5.txt`; `sources/QUOTATION-CHECK-SPANISH.md` extended. No passage is quoted in any B5 deck, so `TRANSLATIONS-USED.md` has nothing to add. The new source is the Academy's *Diccionario de la lengua española*, 23rd ed. (2014), read as a machine-read text of the Internet Archive item real-academia-espanola-diccionario-de-la-lengua-espanola. The OCR garbles Greek letters, so no Greek form is printed in the course. The DLE does not mark Latin quantity, so Latin etyma are printed without macrons.

Words that other Spanish files already print (hijo, agua, noche, árbol, hora, problema, blanco, teatro and others) were removed from the etymology deck and exercise; the formation exercise still asks about some common bases (listed in the B14 row).

Tests run at the end: `lang-audit` (0 failures), `browser-check --maker`, `lang-order-speech-check`, `guided-check`, `levels-check`, and the maker test without the preview (no Spanish set listed).

START FROM: B6. Last commit of Spanish work: see `git log --oneline` (the commits titled "Spanish iv: ..." and "Spanish B5: ..."). Nothing is half done. Spanish is still hidden. B6 is V, construction, first half: the decks `agreement`, `government`, `voice` with `agree-ex`, `more-ex`, `voice-ex` (see section 3 for the counts), and the new screen file `data/languages/v.es.js` with its `<script>` tag in `index.html` (in the `v` block, between Greek and French). Follow the French and German `v` files for the pairing and the order. The fresh-word rule applies. Spanish sources for construction are the Manual's chapters on agreement, the complements of the verb, and the passive and impersonal constructions (find the paragraphs by the table of contents in the OCR text, line 74985 onward); Latin comparisons: Allen and Greenough on agreement (§§ 280 to 290), the cases, and the passive voice. The tools of B2 to B5 were written in the session's scratch directory and are not in the repository (the screen helper, the excerpt extractor, the exercise builders); write them again if needed. If a Spanish etymology is needed again, use the Academy's dictionary (the OCR text is on the Internet Archive).
