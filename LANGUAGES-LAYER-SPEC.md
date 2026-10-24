# The Particular Languages Layer: specification and inventory

Drafted 18 Oct 2026 from Timothy's voice-dictated design (18 Oct 2026, about 12:08 AM). The design is in Parts 1–3. What was carried over on 18 Oct 2026 is listed under Build notes. ITEM-LIST.md rule 1 now names the per-section screens in place of the reserved per-deck child layers.

Section names and ids below are the mockup's (`data/structure.js`, read 18 Oct 2026). The old live app (`/workspace/ars-grammatica`) numbers its acts differently; the inventory maps its material onto the mockup's sections.

Language codes are the old app's: `en` English, `la` Latin, `grc` Greek (Attic), `fr` French, `de` German.

---

## Part 1. The design

### 1.1 What the student sees on the homepage

The homepage keeps its present layout. At the end of each section in which the particular grammars matter, after that section's **Cumulative Review** bar (EXERCISES-PLAN.md, build list item 2; ITEM-LIST.md rule 8a), comes a **languages bar**:

- About half the height of a normal deck or section tile, full width, like the Cumulative Review bar.
- A short heading above the buttons. Working wording: "The grammars of the particular languages." (Wording to be decided; see the questions.)
- Buttons side by side, always in this order: **English, Latin, Greek, Spanish, German, French.** Spanish stays hidden (`hidden:true` in `LANGS`, course.js) until its content is written.
- The five buttons look the same in every bar in every section. Only the destination changes.

### 1.2 What a language button opens

Clicking a button opens a **language screen** for that language and that section, such as "Greek: The Matter of Speech."

- It is laid out like a homepage, as a series of tiles (study decks and exercise sets), but looks somewhat different from the main homepage so that the student knows he is in a side room. For example, it could have a colored band or header in that language's own color, the section's name, the language name (Greek in Greek letters as well), and a clear way back to the homepage at the place he left.
- It holds the exercises, and any study material, for that language on that section's subject (the syllable, the noun, the verb, and so on).
- Its items **need not correspond one to one** with the general exercises of the section. They follow what that language needs: Greek needs breathings and accents, French needs elision and liaison, German needs the two-way prepositions, and English needs none of those.
- The tiles use the same deck and exercise formats as the main course (cards with question points; exercise sets with the same item types and option shuffling), so no new renderer is needed beyond the screen itself.

### 1.3 Where the bars go

| Section (mockup) | Languages bar? | Placement and notes |
|---|---|---|
| Preliminary (What Is Grammar?) | **Optional, likely** | Not a bar but five small tabs, one per language, each opening an overview of about 2,000 words: the language's history and what is distinctive about it. Timothy: "maybe be cool." |
| I. Sign and Significant Voice | No | |
| II. The Matter of Speech | **Yes** | After ii.review and the Cumulative Review bar. Voice, letter and orthography, syllable, quantity and accent, punctuation, feet and meter. |
| III. The Parts of Speech | **Two bars** | Not one bar for the section. (a) After the group "The declinable parts" (iii.noun-1 through iii.review-declinable). This one sits mid-section, before the indeclinable group, and has no Cumulative Review bar before it. (b) After the group "The indeclinable parts" (iii.adverb through iii.review-indeclinable), following the section's Cumulative Review bar. **No bar after "The word in general"** (iii.parts, iii.reasons, iii.figure, iii.homonymy). |
| IV. Word Formation and Etymology | **Yes** | Derivation, composition, etymology. Almost nothing exists; it must be composed. |
| V. Construction | **Yes** | The largest language screens. Much exists in the old app. |
| VI. Correctness and Errors | **Yes, small** | Common errors in each language, three or four exercises per language. |
| VII. Figures and Tropes | **Yes** | |
| VIII. Signification and Supposition | No | |
| IX. Analysis of Sentences and Passages | **Yes** | |
| X. Making | **Yes, models only** | No composition or imitation exercises in the particular languages. Instead, about 7 to 10 model passages per language, each with points of style and composition pointed out, presented as **models to read**, not passages for the student to analyze. |
| XI. Other Traditions and Modern Grammar | No | (Timothy: there might be a Section XII someday; undecided.) |

So there are 8 bars (II, III-declinable, III-indeclinable, IV, V, VI, VII, IX) plus the X models bar, 9 in all. With five languages each, that makes **45 language screens**, plus the 5 optional Preliminary overviews.

**Note on Section III.** The mockup puts the preposition in the indeclinable group (iii.preposition). Timothy's priority list names "the pronoun and preposition" with the noun and the verb. So the first III bar holds the noun, pronoun, verb, and participle (with the accidents), and the preposition material, though in the second bar, belongs with the first priority.

### 1.4 Priorities (Timothy's order)

1. **The accidents, the noun, and the verb, plus the pronoun and the preposition**, for all five languages (the III-declinable screens and the preposition part of the III-indeclinable screens).
2. **Etymology and derivation** for all five (IV). Largely missing.
3. **Construction** (V). Much exists.
4. **Errors** (VI). Small.
5. **Analysis** (IX).
6. **Composition models** (X).

Section II and VII are not ranked. They fall naturally after V (II is largely built for all five; VII needs composing for Greek, French, and German).

### 1.5 Ids and data (proposal)

- The id of a language screen is `lang.<bar>.<code>`, where `<bar>` is `ii`, `iii-decl`, `iii-indecl`, `iv`, `v`, `vi`, `vii`, `ix`, `x`. Example: `lang.iii-decl.grc`.
- An item on a language screen has the id `<screen id>/<slug>`, e.g. `lang.iii-decl.grc/article`, `lang.v.de/two-way-prepositions`. Ids never change once given (ITEM-LIST rule 1).
- The Preliminary overviews: `lang.prelim.en`, `lang.prelim.la`, and so on.
- In `data/structure.js`, each section that has a bar gets `langBar: { id:'iii-decl', after:'iii.review-declinable', heading:'…' }` (two for III). The data for each screen goes in `data/languages/<bar>.<code>.js` with an `items` list in the same shape as a section's items (`kind: 'study' | 'study-ex' | 'exercise' | 'models'`), and the decks and sets themselves in `data/decks/` and `data/exercises/` under their ids.
- **Reconcile with ITEM-LIST rule 1.** Rule 1 now reserves per-deck child layers (`iii.noun-2/la`, "The Noun in Latin"). This design replaces that with per-section language screens. Rule 1 should be rewritten to say so when this spec moves in. (`layers` in structure.js can be dropped or left unused.)

### 1.6 Kinds of content on a language screen

- **Study deck**: cards in the house style, comparing the language with the general doctrine, with question points. (Example: "The Greek Article," "The German Cases.")
- **Paradigm deck**: tables, each with a question point, as the old app's French and German Paradigms decks.
- **Exercise set**: drill items. Typed answers where the form is the point (requires build list item 1, typed-answer renderers, with the old app's normalization: Greek polytonic, French accents, German ae/oe/ue/ss).
- **Passage set** (IX): passages read part by part with questions, as the old app's prose and poetry sets.
- **Models** (X): a passage, its translation for the four non-English languages, and three to six short notes on its style and composition. No questions are scored; it may have one self-check "why" prompt.

### 1.7 Rules carried over

- English and Latin have their own screens like the other three, even though the general course already uses English and Latin throughout. Their screens hold what is particular to them (for example, English strong verbs, the English possessive, Latin pronoun paradigms, Latin quantity drills), not repeats of the general decks. (See open question 2.)
- Every foreign form is checked against a standard grammar (Smyth for Greek; Duden for German; Larousse, Lawless, and Le Conjugueur for French; Allen and Greenough for Latin), as in the old app. Nothing is invented.
- STYLE-GUIDE-CARDS.md governs the cards: realities first, then the principle, then the tradition; English words mentioned as words in double quotes; foreign words in italics; glossed terms.

---

## Part 2. Inventory of the old live app

Read 18 Oct 2026 at commit `cebdc33`, read only. Files: `index.html` (about 2 MB; English and Latin are the base languages, so their material is spread through its decks, exercises, and item banks), `greek.js`, `french.js`, `german.js` (generated from the JSON in `greek/`, `french/`, `german/`), `passages.js` (English, Greek, French, and German passages; the Latin passages are in index.html), `00-Master-Plan.md` §2, and `GREEK-NOTES-NEEDED.md`.

### 2.1 How the old app holds the languages

- **Master Plan §2 ("The language layer").** English and Latin are always present. A picker adds one optional third language (Greek, German, or French), chosen per section of the homepage. Each language is meant to be a data module (phonology, declension and conjugation tables, lexicon, sentences, notes keyed by panel), with **paradigms generated from stems and endings, not stored as lists**. An exercise without data for the chosen language falls back to English and Latin and says so. In practice only Latin is fully generated. The Greek, French, and German paradigms are stored tables.
- **The partner modules (`grc`, `fr`, `de`)** each give: a cards file ("The Accidents of X Compared to Latin"), a paradigms file, a vocabulary, a fill-in set, four sentence sets, a syllable deck and exercise, per-deck notes, and "shared" pools that slip their items into the general exercises in place of the Latin side ("English and Greek," etc.). Some cards are moved out of the accidents deck by `CARD_MOVE`: into the syllable deck, The Parts of Speech Compared, the meter deck, or a word-order deck.
- **The passages.** Each of the five languages has 15 prose and 10 verse passages (10 + 5 "walked" and 5 + 5 drilled), read part by part with notes and questions. Questions in the non-Latin sets: English 106, Greek 107, French 99, German 98.
- **GREEK-NOTES-NEEDED.md** lists 144 places (in about 30 decks, banks, and exercises) where the general text makes a Latin claim that a Greek student would need a note on (the ablative, the article, the number of cases, voice and the middle, the Latin accent rule, and so on). Under this design those notes belong on the Greek screens (and the same check is owed for French and German), rather than inline in the general cards.

### 2.2 What exists, by section and language

Counts are panels (cards), items (bank entries), and exercises by old-app id. "Pool" means the partner items inside a shared exercise. Card counts for the partner decks are those shown after `CARD_MOVE`.

#### Section II, The Matter of Speech

- **English.** Deck `ensyl` "English Syllable and Stress" (6 panels) with exercise `ensyl` (36 items, ENSYL_ITEMS). Deck `enmeter` "English Meter" (6 panels, no exercise). English modes in `vox` and `letter` (LETTER_ITEMS 26, mixed English and Latin). *Missing:* English spelling and orthography; English punctuation; an English meter exercise.
- **Latin.** Deck `syllable` "Latin Syllable, Quantity and Accent" (6 panels) with exercise `syllable` (ACCENT_WORDS 28, SYLL_ITEMS 10). Deck `meter` "Meter and Scansion" (12 panels) with exercise `meter` (METER_NAME_ITEMS 10 plus scansion of lines of Virgil). `letter` (the Latin alphabet: "Latin has no w and almost no k"). *Missing:* punctuation; Latin orthography (i/j, u/v); more quantity drill.
- **Greek.** Deck `grcsyl` "Greek Syllable, Quantity, and Accent" (4 panels: the syllable, the accents, the accent of nouns, the breathings; plus 3 moved cards: movable nu, the macron, enclitics and proclitics) with exercise `grcsyl` (14 items). Deck `grcmeter` "Greek Meter" (5 panels; the hexameter card merged into it). 16 hexameter lines for scansion in the shared `meter` exercise (greek-meter.json). *Missing:* the alphabet and pronunciation; Greek punctuation (the raised dot, the question mark); more accent drill; meters other than the hexameter.
- **French.** Deck `frsyl` "French Syllable and Stress" (4 panels: the syllable, elision and liaison, stress, accent marks are not stress; plus the moved card on accents and the cedilla) with exercise `frsyl` (14 items). Deck `frmeter` "French Meter" (5 panels, no exercise). *Missing:* the alphabet and pronunciation; French punctuation (spacing before ; : ? !, guillemets); a verse exercise (counting syllables, the mute *e*).
- **German.** Deck `desyl` "German Syllable, Length, and Stress" (4 panels: syllable and vowel length, stress, compounds and borrowed words, final devoicing) with exercise `desyl` (14 items). Deck `demeter` "German Meter" (5 panels, no exercise). The card "Umlauts and ß" is in the accidents deck. *Missing:* orthography (capital nouns, ß and ss); German punctuation (the comma rules); a meter exercise.
- **Punctuation** (ii.punctuation): nothing in any language in the old app.

#### Section III(a), The declinable parts (the accidents, noun, pronoun, verb, participle)

- **English.** Deck `enacc` "The Accidents of English" (2 panels) with exercise `enacc` (EN_ACC 18). Deck `enform` "Agreement, Case, and the Verb" (8 panels) with exercise `enform` (EN_FORM 102; the old app puts it under the sentence). English items in `decline` (8 of 42) and `cases` (pronoun case: he/him, who/whom). `produce` has an English mode. *Missing:* a systematic English set: the noun (plural, possessive), the pronoun table, the strong and weak verb with principal parts, tense and aspect (the progressive and the perfect), the participle and the gerund.
- **Latin.** The strongest area. Deck `latnoun` "The Latin Noun" (6 panels) with exercise `latnoun` (forms generated from LAT_NOUNS 50 nouns in five declensions and LAT_ADJS 13). Deck `latverb` "The Latin Verb" (6 panels) with exercise `latverb` (generated from LAT_VERBS 29 verbs in four conjugations: person, number, tense, mood, voice). Deck and exercise `produce` (the inverse: lemma and accidents given, form typed; generated). Deck `casework` "Inflection: Case and the Verb" (8 panels) with exercise `cases` (16 items). `decline` (34 Latin items). *Missing:* pronoun paradigms (no table of *ego, tū, is, hic, ille, quī* found); irregular verbs as a set (only a handful of mentions of *possum, ferō, volō*); participle, gerund, and gerundive forms as a drill (they appear only in `latvoice`, under construction).
- **Greek.** Deck `grccards` "The Accidents of Greek Compared to Latin" (20 panels shown of 31 cards: the five cases, no ablative, the vocative, the dual, nouns, gender, adjectives, person and number, present/imperfect/future, the aorist, the middle, middle and passive forms, εἰμί, principal parts, stem and ending, aspect, periphrastic forms, the optative and the imperative, and others). Deck `grcpar` "Greek Paradigms" (the article; 15 nouns in three declensions; 6 adjectives; 2 verbs, λύω and εἰμί; mood tables of λύω and παιδεύω). Exercise `grcmore` (fill-in, 40 items). Pools: `decline` 15, `cases` 11, `produce` 24, `pos` 22. Vocabulary 69 entries. *Missing:* pronouns (personal, αὐτός, demonstratives, the relative); contract verbs; -μι verbs; the perfect system; the declension of the participle; more than two verb lemmas. (The Master Plan already marks the middle, the optative, and the full aorist as stretch goals.)
- **French.** Deck `frcards` "The Accidents of French Compared to Latin" (22 panels shown of 28: the article, gender, number, no case on the noun, adjective agreement, *beau* and *vieux*, subject/object/stressed pronouns, person and number, present, passé composé, imparfait, future, present subjunctive, *être* and *avoir*, the three groups, stem and ending, aspect, compound tenses and the passive, pronominal verbs, object pronouns with *y* and *en*, the conditional and the imperative). Deck `frpar` "French Paradigms" (article with contractions; 15 nouns; 6 adjectives; 5 pronoun tables; 8 verbs, *être, avoir, parler, finir, vendre, aller, faire, venir*, in 5 tenses). Exercise `frmore` "The French Sentence" (fill-in, 40). Pools: `decline` 13, `cases` 10, `produce` 21, `pos` 20. *Missing:* passé simple and the other literary and compound tenses (plus-que-parfait, futur antérieur); agreement of the past participle as a drill; comparison of adjectives; more verbs.
- **German.** Deck `decards` "The Accidents of German Compared to Latin" (26 panels shown of 31: the four cases, no ablative, address, gender, number, case on the noun, the weak noun, adjective endings, personal pronouns, person and number, present, Präteritum, Perfekt, Konjunktiv II, *sein/haben/werden*, strong and weak verbs, prepositions and case, the two-way preposition, stem and ending, aspect, compound tenses and the passive, reflexive verbs, Konjunktiv I and the imperative, and others). Deck `depar` "German Paradigms" (article; 11 nouns; strong, weak, and mixed adjective endings; pronouns; 8 verbs, *sein, haben, werden, machen, sprechen, geben, kommen, sehen*, in 4 tenses; prepositions by case). Exercise `demore` "The German Sentence" (fill-in, 40). Pools: `decline` 15, `cases` 12, `produce` 22, `pos` 20. *Missing:* more noun plural classes; Konjunktiv I tables; the participle as an adjective; more strong verbs (the ablaut series).

#### Section III(b), The indeclinable parts (adverb, preposition, conjunction, interjection)

- **English.** Exercise `enpos` "The Parts of Speech in English" (102 items over all eight parts) with deck `enpos` "The Eight in English" (9 panels). POS_HARD 33 English hard cases in `pos`. *Missing:* sets on the preposition (and the phrasal verb), the coordinating and subordinating conjunction, and the formation of adverbs.
- **Latin.** Deck `latpos` "The Eight in Latin" (3 panels) with exercise `latpos` (POS_LAT 25). GVT_PREP 9 (prepositions and their cases, used in `govern`). *Missing:* a preposition-and-case set; the conjunctions; adverbs (*-ē, -iter*, comparison); interjections.
- **Greek.** The "Particles" card (moved into The Parts of Speech Compared, `poscompare`, 5 panels plus moved cards, POSCMP_ITEMS 12). Pool `govern` 9 (preposition and case). *Missing:* prepositions with one, two, and three cases; the particles (μέν/δέ, γάρ, οὖν, ἄν); the negatives οὐ and μή; adverbs.
- **French.** The contractions *au, du* in `frpar`; the "Negation" card (in the word-order deck `frorder`). Pool `govern` 8. *Missing:* *à* and *de*; *en* and *y*; conjunctions and the subjunctive after them; adverbs in *-ment*.
- **German.** The prepositions-by-case table in `depar`; the cards on prepositions and case and on the two-way preposition (accidents deck), and on preposition and article together and on separable prefixes and particles (moved to `poscompare`). Pool `govern` 8. *Missing:* coordinating and subordinating conjunctions with their word order; adverbs; the modal particles.

#### Section IV, Word Formation and Etymology

- **All five languages: essentially missing.** The whole old app has one "Word formation" panel for English (in deck `enpos`), one for Latin (in deck `latnoun`: *laudātor, laudātiō*, compound verbs), and one card each for Greek, French, and German (moved into `poscompare`). There are no exercises.
- *To compose for each language:* derivation (the chief suffixes and prefixes and what they make: agent, action, quality, place, diminutive); composition (compound nouns and verbs; German compounding; Greek and Latin compound verbs with the augment or the reduplication); etymology (inherited words and cognates; Latin and Greek roots in English; French from Latin; the Germanic core of English and German; borrowed words). A small set of exercises per language: split a word into its parts, name what a suffix makes, give the root, match cognates.

#### Section V, Construction

- **English.** Built. Deck `ensent` "Subject, Predicate, and the Patterns" (7 panels) with exercise `ensent` (EN_SENT, about 50 items). Deck `enphr` "The Phrase" (6 panels) with exercise `enphr` (EN_PHR 102). Deck `encl` "The Clause and the Kind of Sentence" (5 panels) with exercise `encl` (EN_CL 57). `enform` (above, 102). Deck `making` (4 panels) with exercise `making`. English items in `agree`, `govern`, `cong` (6), and `workshop` (8).
- **Latin.** Built. `agree`, `govern` (8 Latin items plus GVT_PREP 9), `latbuild` "Building the Latin Sentence" (deck 6 panels; generated from a small lexicon), `latmore` (LM_ITEMS 41), `latvoice` "The Passive, the Infinitive, and the Participle" (deck 6, items 24), `latclause` (40), `latsubj` "The Subjunctive" (deck 5, items 40), `cong` (38 Latin), `congtruth`, `clauses` "Clauses in the Authors" (CLAUSE_CORPUS 26), `workshop` (32 Latin plus WORK_CITED 24).
- **Greek.** Largely built. Exercises `grcsent` (48), `grcvoice` (24), `grcclause` (37), `grcmood` (31): 140 items. Deck `grcorder` "Greek Word Order Compared to Latin" (2 cards: the object, word order). Pools: `govern` 9, `agree` 16, `cong` 9, `workshop` 10 cited sentences. Notes: `govern` 2, exercise `clauses` 7. *To check and likely add:* the genitive absolute; indirect discourse; conditions; the articular infinitive.
- **French.** Largely built. Exercises `frsent` (48), `frvoice` (24), `frclause` (36), `frmood` (32): 140. Deck `frorder` (word order, negation). Pools: `govern` 8, `agree` 10, `cong` 9, `workshop` 11. Notes on 8 general decks (23 notes).
- **German.** Largely built. Exercises `desent` (48), `devoice` (24), `declause` (36), `demood` (32): 140. Deck `deorder` (word order). Pools: `govern` 8, `agree` 10, `cong` 9, `workshop` 10. Notes on 8 general decks (24 notes).

#### Section VI, Correctness and Errors

- **English.** Built. Deck `enfault` "Common Faults in English" (5 panels) with exercise `enfault` (EN_FAULT 102: fragments, run-ons, agreement, case, and so on). 6 English items in `vices`.
- **Latin.** Built. `latfaults` "Latin Barbarism, Solecism, and Metaplasm" (Donatus's examples; deck 2 panels; drawn from VICE_ITEMS and the Donatus banks). 6 Latin items in `vices`.
- **Greek, French, German.** Partial. 7 items each in the `vices` pool. *To compose:* three or four short exercises of common errors per language (French: gender, agreement of the participle, accents, *de/du*; German: case after prepositions, adjective endings, verb position; Greek: accent and breathing, the article's agreement, augment).

#### Section VII, Figures and Tropes

- **English.** Partial. English items in `figures` (FIG_ITEMS 10); deck `figures` (8 panels, general). *Missing:* an English figures set drawn from English poetry and prose.
- **Latin.** Built. `latfigs` "Latin Figures and Tropes" (deck 2 panels; FIGDON_ITEMS 21 and FIGLAT_MORE 15, Donatus's figures and tropes in Virgil and Ennius).
- **Greek, French, German.** Missing. No figures items or cards; the passage notes hardly name a figure (1 such note in German).

#### Section IX, Analysis of Sentences and Passages

- **English.** Built. Deck `endiag` "The Diagram" (5 panels) with exercise `endiag` (EN_DIAG 68). Passage sets `enprose` (15) and `enpoetry` (10) with drills `enprosedrill`, `enpoetrydrill` (106 questions). `markup` and `workshop` have English modes.
- **Latin.** Built. `latprose` (15) and `latpoetry` (10) with drills; `period` (Aeneid I.1–11, 16 items), `livyperiod` (9), `servius4` (12); `markup` (MK_CITED 20 and more); `workshop`; `clauses`.
- **Greek.** Built. `grcprose` (15) and `grcpoetry` (10), 107 questions; 10 cited sentences in `workshop`. *Missing:* marking (`markup`) in Greek.
- **French.** Built. `frprose` (15) and `frpoetry` (10), 99 questions; 11 in `workshop`. *Missing:* marking in French.
- **German.** Built. `deprose` (15) and `depoetry` (10), 98 questions; 10 in `workshop`. *Missing:* marking in German.

#### Section X, Making (model passages)

- **All five: missing.** No model passages with points of style exist. The 25 passages per language are annotated for construction, not style, but they are the natural pool to choose the 7 to 10 models from (with new notes on style and composition). `freewrite` (FW_ITEMS 24, 12 English and 12 Latin) and `making` are composition exercises; they belong to the general Section X, not to the language screens.

#### Preliminary overviews

- **All five: missing.** The partner card files open with a one-paragraph card each ("Attic Greek," "Modern French," "Modern German"). No history or overview of any language exists. Five essays of about 2,000 words each (about 10,000 words) would have to be written.

### 2.3 Status table

Built = enough for a language screen with light editing; partial = some material, major gaps; missing = must be composed.

| Section | English | Latin | Greek | French | German |
|---|---|---|---|---|---|
| Prelim. overviews (optional) | missing | missing | missing (1 intro card) | missing (1 intro card) | missing (1 intro card) |
| II Matter of speech | partial: syllable and stress (6 panels, 36 items), meter deck; no punctuation or orthography | built: syllable (6 panels, 38 items), meter (12 panels + exercise); no punctuation | partial: syllable/accent (7 panels, 14 items), meter deck + 16 lines; no alphabet or punctuation | partial: syllable (5 panels, 14 items), meter deck; no punctuation | partial: syllable (4 panels, 14 items), meter deck; no punctuation |
| III-a Declinable parts (priority 1) | partial: accidents (2 panels, 18 items), enform 102; no strong-verb, pronoun, or participle set | built: generated noun (50) and verb (29) parsing, produce, cases; no pronoun tables or irregular verbs | partial: 20 cards, paradigms (15 nouns, 2 verbs), fill 40; no pronouns, contracts, -μι verbs, perfect | partial-good: 22 cards, paradigms (8 verbs × 5 tenses), fill 40; no passé simple | partial-good: 26 cards, paradigms (8 verbs × 4 tenses), fill 40; few nouns and strong verbs |
| III-b Indeclinable parts (preposition = priority 1) | partial: enpos 102 (all eight parts) | partial: latpos 25, 9 prepositions | partial-thin: particles card, govern pool 9 | partial-thin: contractions, negation card | partial: prepositions table and 4 cards |
| IV Word formation and etymology (priority 2) | missing (1 card) | missing (1 card) | missing (1 card) | missing (1 card) | missing (1 card) |
| V Construction (priority 3) | built: ensent, enphr, encl, enform (~310 items), making | built: 10+ exercises (agree, govern, latbuild, latmore, latvoice, latclause, latsubj, cong, clauses, workshop) | built: 140 sentence items + pools; check participles and indirect discourse | built: 140 + pools + 23 notes | built: 140 + pools + 24 notes |
| VI Errors (small) | built: enfault 102 | built: latfaults | partial: 7 items | partial: 7 items | partial: 7 items |
| VII Figures | partial: 10 items | built: latfigs 36 items | missing | missing | missing |
| IX Analysis | built: diagram 68, 25 passages | built: 25 passages, period, Livy, Servius, markup | built: 25 passages (107 q); no marking | built: 25 passages (99 q); no marking | built: 25 passages (98 q); no marking |
| X Models (7–10 to read) | missing (passage pool exists) | missing (pool exists) | missing (pool exists) | missing (pool exists) | missing (pool exists) |

### 2.4 What would need composing, in Timothy's order

1. **III (accidents, noun, verb, pronoun, preposition), all five.** English: a full set of English morphology (the possessive, pronoun table, strong verbs and principal parts, the progressive and perfect, participle and gerund). Latin: pronoun paradigms, irregular verbs, participle/gerund/gerundive forms. Greek: pronouns, contract and -μι verbs, the perfect system, the participle, more verb lemmas, prepositions and particles. French: the literary tenses, participle agreement, more verbs, prepositions *à/de/en/y*. German: noun plural classes, strong-verb series, Konjunktiv I, conjunctions and word order. Port the existing cards, paradigms, fill-in sets, and pools into the house style first.
2. **IV, all five.** Composed from nothing beyond the five single cards: derivation, composition, and etymology decks and a short exercise set for each language.
3. **V.** Port the existing sets (about 140 items each for Greek, French, and German; a large English and Latin body). Check Greek for the genitive absolute, indirect discourse, conditions.
4. **VI.** Three or four short error exercises each for Greek, French, and German; English and Latin port.
5. **IX.** Port the passage sets; consider marking for Greek, French, and German.
6. **X.** Choose 7 to 10 models per language (from the 25 passages and beyond) and write the style and composition notes.
7. Unranked: **II** (punctuation and orthography for all five; Greek alphabet; verse exercises for English, French, German) and **VII** (figures for Greek, French, German; more English).
8. Optional: the five **Preliminary overviews** (about 2,000 words each).

---

## Part 3. Open design questions for Timothy

1. **Heading wording.** "The grammars of the particular languages," "The particular languages," "In the five languages," or another? Should it vary by section ("The matter of speech in the five languages")?
2. **English and Latin screens.** The general course already teaches through English and Latin. Should their language screens hold only what is particular to them (recommended: English strong verbs, the English possessive, Latin pronoun and irregular-verb paradigms, Latin quantity drills), or also gather the English and Latin drills of the general course in one place, at the cost of some duplication?
3. **Preliminary overviews.** Write the five 2,000-word overviews now, later, or not at all? Where: five small tabs after prelim.criteria, or at the head of each language's first screen?
4. **Progress.** How should progress show? Proposal: tiles on a language screen check off as on the homepage; each language button on the bar shows a small mark (or "3 of 7") when that screen has been begun or finished; language items count in the cumulative review only after the student has done them.
5. **Gating.** Should a language screen open only after its section (or group) is completed, or always be open? Recommended: always open, with a quiet note "Best taken after the section," since a Latin student may want the Latin noun before the general noun is finished.
6. **Section III mid-bar.** The first III bar comes after "The declinable parts," mid-section, with no Cumulative Review bar before it (that comes only at the section's end). Is that order right? And should the preposition material go on the first III screen (with the noun, pronoun, and verb, as in your priority list) or on the second (where the mockup's section puts the preposition)?
7. **Look of the language screen.** One shared design with a color per language, or one color for all five? Should the Greek button and screen title show "Ἑλληνική" or only "Greek"?
8. **Section II.** Is meter part of each language's II screen (as the old app's meter decks for all five), and is a punctuation deck wanted for every language?
9. **Section X models.** 7 to 10 per language, read only: with translations for the four non-English languages? One "why" self-check per model, or none?
10. **ITEM-LIST rule 1.** Replace the reserved per-deck child layers (`iii.noun-2/la`) with these per-section language screens, as proposed?
11. **Section XII.** Leave room in the data for a twelfth section, or decide later?

## Timothy's answers (18 Oct 2026, 4:25 PM ET)

- Approach: carry over the existing language items from the old app as they are, mapped into the bars at the end of each relevant section, even where thin; a short "more to come" note where a screen has little; quick pass for the length and fairness rules.
- Q1 heading: "The grammars of the particular languages" (same in every bar).
- Q6 preposition: the preposition's language material goes on the second Section III bar, with the indeclinable parts, where the course teaches it.
- Q5 gating: always open, with a quiet note "Best taken after the section."

---

## Build notes (18 Oct 2026)

The nine bars and the 45 screens are in the mockup. Each bar is full width, the same minimum height as Cumulative Review, headed "The grammars of the particular languages," with the five buttons in the order English, Latin, Greek, French, German. The III-declinable bar stands after iii.review-declinable and before the label "The indeclinable parts." The other eight stand after that section's Cumulative Review bar. A button opens `lang.<bar>.<code>`. The screen has a band in that language's color, the title "<Language>: <section name>" (Greek also shows Ἑλληνική), the note "Best taken after the section," and "← All sections," which returns to that bar. The Recitation Tablet stays on the homepage only. Screen records are `data/languages/<bar>.<code>.js`. Decks are `data/decks/lang.<bar>.<code>/`. Exercises are `data/exercises/lang.<bar>.<code>/`. The general decks were not changed. The old app was read at `cebdc33` and nothing was pushed to it.

A study tile's link ("Study →", or "Begin →" when the last panel opens an exercise) is bold until that deck is finished, and in normal weight afterward. An exercise tile's link ("Begin →") and an exercise button ("Exercise →") are bold until that exercise is finished, and in normal weight afterward. Nothing else on the tile marks completion. A language button keeps its ordinary color until every built deck and exercise on that screen is finished, and then its color is a little dimmer. An empty screen stays at the ordinary color. A language item enters the cumulative review only after that study deck or that exercise has been finished.

Old cards that had one question were not given invented B and C variants. The question became an exercise item. A set with fewer than three items repeats those items in A, B, and C under distinct ids. Options are shuffled on each visit. Where the correct option was a long stored sentence with a trailing clause, the clause was moved into the explanation, and only when the shortened wording stayed unique and still answered the question. No foreign form was invented. Passage sets, and a few short parallel labels, remain over the one-third cap. They are listed at the end of these notes.

The German preposition table is on the III-indeclinable screen. The French article paradigm, including its contraction rows, stays on the III-declinable screen. The comparison card on the partitive and the contractions with *à* and *de* is on the III-indeclinable screen.

Left in the old app, and not copied here: the generated Latin noun and verb drills (stem plus ending); the Greek, French, and German produce items (24, 21, and 22), which store an answer and no distractors; eight English decline items that restate the general distinction; the Latin scansion drill whose notation is not a student prompt; the generated English and Latin agreement drills; ten English form chips and six diagram chips that do not store which label is correct; and one comparison item (pc12) that is general doctrine. The clause corpus is a study deck only. The sixteen Greek hexameter lines are study panels, with the stored feet, not a scansion quiz.

**II. The Matter of Speech.** English: syllable and stress (6 cards, 36 questions) and meter (6 cards, 32 questions). The first English card restates the syllable; the rest is stress, suffixes, the schwa, and the rhythm of English. Latin: meter names only (10 questions). More to come. Greek: syllable, quantity, and accent (cards, 14 questions), meter (cards, 5 questions), and the 16 hexameter lines. French: syllable and stress (cards, 14 questions) and meter (cards, 5 questions). German: syllable, length, and stress (cards, 14 questions) and meter (cards, 5 questions).

**III, the declinable parts.** English: the accidents (cards, 18 questions) and agreement, case, and the verb (cards, 92 questions). Latin: the noun (cards, 5 questions), the verb (cards, 6 questions), inflection (cards), case (16), and declinable and indeclinable (34). Greek: accidents compared with Latin, paradigms, the sentence (40), declinable and indeclinable (15), case (11), parts of speech (12), and the article and the participle (cards, 8). French: accidents compared with Latin, paradigms, the sentence (40), declinable and indeclinable (13), case (10), and parts of speech (12). German: accidents compared with Latin, paradigms, the sentence (40), declinable and indeclinable (15), case (12), parts of speech (12), and the article (cards, 4).

**III, the indeclinable parts.** English: the eight parts (cards, 102 questions) and a harder set (33). Latin: the eight parts (cards, 25) and prepositions and case (9). Greek: parts of speech (10), government (9), and particle cards. French: parts of speech (8), government (8), and the partitive and the contractions (1 card, 4 questions). German: particle and preposition cards, the preposition table, parts of speech (8), and government (8).

**IV. Word formation.** Each language has the one stored card. English and Latin also have that card's one question as an exercise. All five say more to come.

**V. Construction.** English: subject and predicate (cards, 103), the phrase (cards, 102), the clause (cards, 102), government (1), congruity (6), dependences (20), and cited sentences (12). Latin: the passive, the infinitive, and the participle (cards, 24), the subjunctive (cards, 40), building the sentence (cards, 6), more of the sentence (41), clauses (40), clauses in the authors (study only), government (8), congruity (38), dependences (44), and cited sentences (12). Greek: word order compared with Latin (cards), more of the sentence (48), voice and the infinitive and the participle (24), clauses (37), mood (31), agreement (16), congruity (9), and cited sentences (10). French: word order (cards), more of the sentence (48), the passive, the infinitive, and the participle (24), clauses and the participle (36), the subjunctive, the conditional, and the imperative (32), agreement (10), congruity (9), and cited sentences (11). German: word order (cards), more of the sentence (48), the passive, the infinitive, and the participle (24), clauses and word order (36), the Konjunktiv and the imperative (32), agreement (10), congruity (9), and cited sentences (10).

**VI. Correctness and errors.** English: common faults (cards, 102) and barbarism and solecism (6). Latin: Donatus's barbarism, solecism, and metaplasm (cards, 2 questions) and barbarism and solecism (6). More to come. Greek, French, and German: barbarism and solecism only (7 each). More to come.

**VII. Figures and tropes.** English: 10 questions. More to come. Latin: Donatus's figures and tropes (cards, 38 questions). Greek, French, and German: empty. More to come.

**IX. Analysis.** English: the diagram (cards, 62), prose (15 passages, 63 questions), poetry (10 passages, 43). Latin: prose (63), poetry (52), the period (16), Livy (9), and Servius (12), with the passage decks. Greek: prose (65) and poetry (42). French: prose (56) and poetry (43). German: prose (59) and poetry (39). No marking drill was stored for Greek, French, or German.

**X. Making.** All five screens are empty. More to come. No model passages were composed.

Sets in which the correct option is still the longest in more than a third of the items: French syllable, set C (3 of 4); Greek parts of speech on the indeclinable screen, set C (2 of 3); French case, set B (2 of 3); Greek agreement, set C (4 of 5); French mood, set B (5 of 11); German agreement, set C (2 of 3); German cited sentences, set C (2 of 3). In these the correct label is longer by a few letters ("consonant" beside "vowel," "interjection" beside "adverb," "Indirect-object form" beside "Direct-object form," a verb form beside a shorter one, "does not agree in case" beside "in gender"). The prose and poetry sets of all five languages are also over the cap: the stored correct option is the full description of the clause, and cutting it would remove the answer. Distractors in the sets that were sampled are wrong answers, not true statements aimed beside the question. That check was not made item by item through the passage sets.

## Build notes (21 Oct 2026)

This pass followed the brief of 20 Oct 2026 (Timothy's governing aim: each language track should amount, more or less, to an essentials grammar of that language). The topic checklist, before and after, is notes/LANGUAGE-ESSENTIALS-CHECKLIST.md; the full report, with the decisions that need Timothy, is notes/LANGUAGES-FINISH-REPORT.md. The old app was read only.

**Pairing.** Every language exercise is paired with the study deck whose matter it drills, by `exFor` on the exercise tile (or by the id `<deck id>-ex`); course.js (`linkLangDeckExercises`) fills `ARS.deckEx` for language decks, and the deck tile shows its Exercise button. Loose sets were paired, merged, or rewritten. The one study deck without an exercise is `lang.ii.en/spelling` (by decision), and `lang.v.la/clauses` (Clauses in the Authors, a deck of examples) is marked `noEx`. Every language study deck has question points (three variants each), except the reading decks of X (`models: true`) and of the Preliminary (`overview: true`).

**Counts.** 50 screens (the 45 of the design and the five Preliminary overviews), 184 language decks, 137 language exercises with 4,410 stored items, and four Latin sets drawn fresh by `data/latin-forms.js`. Every exercise has at least 20 items in sets A, B, and C. In no set is the correct option the longest in more than a third of the multiple-choice items (test/lang-audit.js).

**By section.** II: spelling and punctuation decks for Latin, Greek (the alphabet and its marks), French, and German, with exercises; a Greek hexameter scansion set; the syllable sets of Greek, French, and German rewritten with fresh words; Latin quantity cards. III, the declinable parts: English noun, pronoun, strong and weak verbs, and the verbals; Latin adjectives and numerals, pronouns, irregular verbs, and participles, gerund, gerundive, and supine; Greek pronouns, contract verbs, verbs in -μι, the perfect system, and the participle; French pronouns, the compound and literary tenses, the subjunctive, and the participle; German plurals, pronouns, strong and mixed verbs, modals, and the Konjunktiv. The Greek, French, and German produce items of the old app became typed `form` items in the paradigm sets. III, the indeclinable parts: decks for prepositions in Latin, Greek, French, and German, English prepositions, conjunctions, and adverbs, Latin adverbs and conjunctions, Greek particles, French negation and invariable words. IV: a composition deck and an etymology deck for each language, with exercises. V: decks for agreement, government, voice, mood, and clauses in Greek, French, and German; agreement, government, kinds of clause, and dependence in Latin; agreement and dependence in English; Greek temporal clauses and alternative questions, French purpose, result, and time, and German result and time (from the old app's per-deck notes, 21 Oct); nine marking items (type `mark`) in each of the Greek, French, and German word-order sets. VI: two decks for each of Greek, French, and German; the Latin faults deck built out with the *Appendix Probi* and aspiration; the English `vices-ex` merged into `faults-ex`. VII: an English figures deck; tropes and schemes decks for Greek, French, and German; Latin tropes and schemes cards. IX: option balance in every passage set; the Latin Livy and period sets merged into prose and poetry; a Servius deck with eight new notes; question points on every passage's opening panel; `passageRef` on every passage question (the opening panel of its passage), so the Quiz Maker can print the passage. X: the bar of model passages, eight per language (`lang.x.<code>`, `kind: 'models'`), each with its translation and points of style and composition, read and not scored. Preliminary: a small bar after `prelim.criteria` whose buttons open an overview of each language directly (`lang.prelim.<code>/overview`, about 1,800 to 1,900 words each).

**Quiz Maker.** `maker.js`, the `#scr-maker` screen in course.html, and the link at the foot of the home page. The set list is built from `ARS.structure` with `ARS.deckEx` (main course exercises and section reviews) and from `ARS.languages` (language exercises), grouped by section and then by language, with a section filter and language checkboxes. For each chosen set the instructor picks Set A, B, C, or any, and a number of questions; the sets drawn fresh have no A, B, C. Items keep their stored order and are not repeated (by id and by text). Doctrine questions come from the question points of the decks behind the chosen sets (`ARS.deckEx` reversed), the first two cards of each deck first, then the rest, one deck at a time, skipping panels titled as open questions. Every item type prints: lettered options shuffled once per printing, a line for typed answers with the accepted forms in the key, the arrows of a marking item and the parse of an analysis item in the key, and a passage printed once above its questions. The key starts on a new page; print shows only the paper. `node test/browser-check.js --maker` loads course.html#maker, makes a quiz from one main set and one set per language, checks every question and key entry, and renders every item of every set for paper.
