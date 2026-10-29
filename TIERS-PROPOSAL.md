# Mastery levels for Ars Grammatica: proposal (Step 1)

Written 27 Oct 2026 for Timothy, on his brief of the same day. This is a proposal only. No code, deck, exercise, id, or answer key was changed; this file is the only file committed.

## 1. Summary

The course gets four nested levels: **Essentials**, **Proficient**, **Mastered**, and **Comprehensive**. Every deck and every exercise set is given the lowest level at which it first appears, and it stays in every higher level. Comprehensive is the whole course as it stands today.

The levels follow the order of the grammatical tradition itself, which already taught grammar at more than one level:

- **Essentials** is close to what Donatus's *Ars minor* taught: the eight parts of speech and their accidents, with the letter and the syllable that come before them and the plain construction of a sentence (agreement, government, the phrase, the clause) and the parsing of simple sentences that follow. In each language it adds the forms of that language (its sounds and spelling, declensions and conjugations, pronouns, prepositions, and the agreement and cases that every sentence needs), so that it comes to about an essentials grammar of the language, as the brief asks.
- **Proficient** is close to a full school grammar, such as Donatus's *Ars maior* or Allen and Greenough read through once: voice, quantity and accent, punctuation, the rest of Section I, word formation, the remaining doctrine of construction, the errors, the literal and figurative sense and the tropes, the analysis of passages in the language, and composition.
- **Mastered** adds the higher doctrine of the medieval and modern grammarians and the arts of verse and style: consignification and syncategoremata, the reasons for the parts, homonymy, etymology, the period and the figures of construction, metaplasm, the figures of words, supposition, translation and the progymnasmata, meter, and most of the reading passages and all of the model passages.
- **Comprehensive** adds Section XI (the other classical traditions and modern linguistics), Imitation, the remaining reading passages, and a few deep collections (Latin clauses in the authors, Servius, the sixteen Greek hexameter lines).

Language choice stays separate: Essentials in Latin is the general Essentials plus the Latin Essentials, and so for each language. The counts are in section 3; the full lists are in sections 4 and 5.

Three rules decide everything that is not a whole deck:

1. **An exercise set follows its deck.** A set opened from a deck's Exercise button has the deck's level.
2. **A section review follows the decks it reviews.** Every review question already carries the id of the deck it tests (`deck`), so a review shows, at each level, only the questions on decks open at that level. The review itself appears at the lowest level of any of its decks.
3. **Exercise sets that already have Levels I to IV** (20 sets, built since 23 Oct 2026) open one in-set level at each course level: in-set Level I opens at the set's own course level, Level II one course level later, and so on, with everything open at Comprehensive. For example, `iii.ex.parts` (Essentials) gives Level I (plain usage, 39 items) in Essentials, Level II in Proficient, Level III (Milton, the King James Bible, Austen, Bunyan) in Mastered, and Level IV in Comprehensive. This is a recommendation; see question 3.

Only one kind of deck is split: the twelve reading collections of Section IX in the languages (`lang.ix.<code>/prose` and `/poetry`), which run to 50 to 97 cards each and are made of separate passages. They open passage by passage (section 6).

## 2. How the levels were assigned

- **Basis.** For the languages, notes/LANGUAGE-ESSENTIALS-CHECKLIST.md (the topics of a short essentials grammar of each language, before and after the pass of 20–21 Oct 2026), LANGUAGES-LAYER-SPEC.md, and ITEM-LIST.md. For the general course, ITEM-LIST.md and the content of each deck.
- **Essentials takes the forms; Proficient takes the uses.** In each language the declensions, conjugations, pronouns, prepositions, agreement, and (in the languages with cases) government are Essentials; the moods in construction, the kinds of clause, voice, the errors, word formation, and the passages are Proficient. German word order (verb second, verb last) is Essentials, because no German sentence can be read without it; in Latin, Greek, French, and Spanish the deck on word order or dependence is Mastered, and in English the sentence patterns are Essentials.
- **Read-only material.** The Preliminary overview of each language is Essentials (a short history and what is distinctive about the language). The eight model passages of Section X in each language are Mastered, with the decks on composition and translation they illustrate.
- **Whole decks.** No deck of the general course is split. A deck that mixes plain and advanced matter is placed at the level of its plain matter if a student at that level needs it, and otherwise at the level of its advanced matter.
- **Counts.** All counts were computed from the data files (`data/structure.js`, `data/decks/`, `data/exercises/`, `data/languages/`), not estimated. "Decks" counts every tile with cards: study decks, the method decks of IX and X, the language overviews, and the model passages. "Stored items" counts the written questions of the exercise sets and reviews open at that level; four Latin sets draw their questions afresh each sitting from `data/latin-forms.js` and are counted as "generated."

## 3. Counts per level

The first table gives each part of the course separately. The second gives what a student sees with one language chosen (the general course plus that language). The whole course, with all six languages at once, has 284 decks, 2,424 cards, 1,036 question points, 211 exercise sets and reviews, and 7,160 stored items (plus the four generated Latin sets).

| Part of the course | Level | Decks | Cards | Question points | Exercise sets and reviews | Stored items |
|---|---|---|---|---|---|---|
| General course | Essentials | 20 | 188 | 62 | 19 | 422 |
| General course | Proficient | 43 | 391 | 126 | 35 | 1170 |
| General course | Mastered | 58 | 559 | 179 | 42 | 1754 |
| General course | Comprehensive | 61 | 661 | 212 | 44 | 1916 |
| English | Essentials | 15 | 85 | 73 | 13 | 802 |
| English | Proficient | 24 | 150 | 108 | 22 | 1051 |
| English | Mastered | 34 | 226 | 125 | 24 | 1140 |
| English | Comprehensive | 34 | 293 | 137 | 24 | 1189 |
| Latin | Essentials | 11 | 51 | 44 | 10 (+3 generated) | 209 |
| Latin | Proficient | 24 | 138 | 100 | 23 (+4 generated) | 530 |
| Latin | Mastered | 36 | 218 | 122 | 27 (+4 generated) | 684 |
| Latin | Comprehensive | 38 | 341 | 147 | 28 (+4 generated) | 759 |
| Greek | Essentials | 10 | 81 | 53 | 9 | 284 |
| Greek | Proficient | 23 | 161 | 103 | 22 | 606 |
| Greek | Mastered | 37 | 241 | 131 | 28 | 781 |
| Greek | Comprehensive | 38 | 317 | 144 | 29 | 849 |
| French | Essentials | 10 | 63 | 43 | 9 | 236 |
| French | Proficient | 24 | 136 | 92 | 23 | 613 |
| French | Mastered | 37 | 209 | 117 | 28 | 760 |
| French | Comprehensive | 37 | 262 | 129 | 28 | 799 |
| German | Essentials | 14 | 84 | 51 | 13 | 365 |
| German | Proficient | 26 | 149 | 92 | 25 | 663 |
| German | Mastered | 38 | 220 | 114 | 29 | 785 |
| German | Comprehensive | 38 | 281 | 126 | 29 | 824 |
| Spanish | Essentials | 10 | 66 | 47 | 9 | 236 |
| Spanish | Proficient | 24 | 134 | 98 | 23 | 599 |
| Spanish | Mastered | 38 | 213 | 128 | 29 | 773 |
| Spanish | Comprehensive | 38 | 269 | 141 | 29 | 824 |

| Language chosen | Level | Decks | Cards | Question points | Exercise sets and reviews | Stored items |
|---|---|---|---|---|---|---|
| English | Essentials | 35 | 273 | 135 | 32 | 1224 |
| English | Proficient | 67 | 541 | 234 | 57 | 2221 |
| English | Mastered | 92 | 785 | 304 | 66 | 2894 |
| English | Comprehensive | 95 | 954 | 349 | 68 | 3105 |
| Latin | Essentials | 31 | 239 | 106 | 29 (+3 generated) | 631 |
| Latin | Proficient | 67 | 529 | 226 | 58 (+4 generated) | 1700 |
| Latin | Mastered | 94 | 777 | 301 | 69 (+4 generated) | 2438 |
| Latin | Comprehensive | 99 | 1002 | 359 | 72 (+4 generated) | 2675 |
| Greek | Essentials | 30 | 269 | 115 | 28 | 706 |
| Greek | Proficient | 66 | 552 | 229 | 57 | 1776 |
| Greek | Mastered | 95 | 800 | 310 | 70 | 2535 |
| Greek | Comprehensive | 99 | 978 | 356 | 73 | 2765 |
| French | Essentials | 30 | 251 | 105 | 28 | 658 |
| French | Proficient | 67 | 527 | 218 | 58 | 1783 |
| French | Mastered | 95 | 768 | 296 | 70 | 2514 |
| French | Comprehensive | 98 | 923 | 341 | 72 | 2715 |
| German | Essentials | 34 | 272 | 113 | 32 | 787 |
| German | Proficient | 69 | 540 | 218 | 60 | 1833 |
| German | Mastered | 96 | 779 | 293 | 71 | 2539 |
| German | Comprehensive | 99 | 942 | 338 | 73 | 2740 |
| Spanish | Essentials | 30 | 254 | 109 | 28 | 658 |
| Spanish | Proficient | 67 | 525 | 224 | 58 | 1769 |
| Spanish | Mastered | 96 | 772 | 307 | 71 | 2527 |
| Spanish | Comprehensive | 99 | 930 | 353 | 73 | 2740 |

## 4. The general course: Preliminaries and Sections I–XI

These decks are shared by every language. In the last column, "21 / 82 / 120 / 120 (E/P/M/C)" means that 21 items are open in Essentials, 82 in Proficient, and so on; a single number means the whole set is open from the deck's level up; "–" means the set is not yet open at that level.

**Essentials in the general course (20 decks):** The Definition of Grammar; Sign and Symbol; The Letter and Orthography; The Syllable; The Word and the Eight Parts; The Noun I and II; The Pronoun; The Verb I and II; The Participle; The Adverb; The Preposition; The Conjunction; The Interjection; Agreement; Government; The Phrase; The Clause; and Analysis of Sentences (Level I only). With them go the reviews of I, II, III (both), V, and IX, each showing only its questions on these decks.

Reasons for the less obvious choices:

- **Section I.** Only Sign and Symbol is Essentials: the word as a conventional sign is the foundation of the course, and Section I is otherwise the most philosophical part of it. Imposition, the functions of language, and ambiguity are Proficient; consignification and the syncategoremata are Mastered, since they serve the reasons for the parts (III) and supposition (VIII), which are Mastered.
- **Section II.** The letter and the syllable are Essentials, because every language track needs them for pronunciation. Voice, quantity and accent, and punctuation are Proficient. Feet and meter are Mastered. The language tracks put their own accent rules in Essentials (for example, the Latin penultimate law in `lang.ii.la/syllable`), so a student of Latin learns the accent in Essentials without the eighteen cards of Quantity and Accent.
- **Section III.** All eight parts with their accidents are Essentials, as in the *Ars minor*. Figure and Species is Proficient (its matter returns in Section IV, and the Guided Path already treats its set as optional). The Reasons for the Parts and Homonymy and Synonymy are Mastered.
- **Section IV.** Derivation and composition are Proficient; etymology, with its cautions, is Mastered.
- **Section V.** Agreement, government, the phrase, and the clause are Essentials. Congruity, dependence, order, and mood and voice in construction are Proficient. The period and the figures of construction are Mastered.
- **Sections VI–VIII.** Usage, barbarism, and solecism are Proficient; metaplasm is Mastered. The literal and figurative sense and the tropes are Proficient; the figures of words are Mastered. Section VIII (supposition and the logical forms) is Mastered.
- **Sections IX–XI.** Analysis of Sentences is Essentials (parsing is the first exercise of grammar), Workshop and Marking is Proficient, and Analysis of Passages is Mastered. In X, Composition is Proficient, Translation and the progymnasmata are Mastered, and Imitation is Comprehensive. Section XI is Comprehensive.

| Id | Title | Level | Cards (question points) | Exercise or review: items |
|---|---|---|---|---|
| **Preliminaries** | | | | |
| `prelim.definition` | The Definition of Grammar | Essentials | 10 (3 q.p.) |  |
| `prelim.offices` | The Tasks of the Grammarian | Proficient | 8 (2 q.p.) |  |
| `prelim.methodice` | Precepts and Interpretation | Essentials | 6 (2 q.p.) |  |
| `prelim.criteria` | The Criteria of Correctness | Proficient | 8 (2 q.p.) |  |
| **I** | | | | |
| `i.sign` | Sign and Symbol | Essentials | 10 (3 q.p.) |  |
| `i.imposition` | Imposition | Proficient | 7 (2 q.p.) |  |
| `i.consignification` | Signification and Consignification | Mastered | 11 (4 q.p.) |  |
| `i.syncategorematic` | Categorematic and Syncategorematic Words | Mastered | 8 (2 q.p.) |  |
| `i.functions` | The Functions of Language | Proficient | 8 (2 q.p.) |  |
| `i.ambiguity` | Ambiguity | Proficient | 9 (3 q.p.) |  |
| `i.review` | Section Review: Sign and Significant Voice | Essentials |  | `i.review`: 21 / 82 / 120 / 120 (E/P/M/C) |
| **II** | | | | |
| `ii.voice` | Voice (vox) | Proficient | 8 (2 q.p.) |  |
| `ii.letter` | The Letter and Orthography | Essentials | 12 (4 q.p.) |  |
| `ii.syllable` | The Syllable | Essentials | 10 (3 q.p.) | `ii.ex.syllable`: 48 |
| `ii.quantity` | Quantity and Accent | Proficient | 18 (4 q.p.) | `ii.ex.quantity`: – / 38 / 60 / 71 (E/P/M/C) |
| `ii.punctuation` | Punctuation (posituræ) | Proficient | 8 (2 q.p.) |  |
| `ii.meter` | Feet and Meter | Mastered | 13 (3 q.p.) |  |
| `ii.review` | Section Review: The Matter of Speech | Essentials |  | `ii.review`: 15 / 36 / 45 / 45 (E/P/M/C) |
| **III** | | | | |
| `iii.parts` | The Word (dictio) and the Eight Parts | Essentials | 13 (4 q.p.) | `iii.ex.parts`: 39 / 60 / 82 / 102 (E/P/M/C) |
| `iii.reasons` | The Reasons for the Parts | Mastered | 12 (5 q.p.) |  |
| `iii.figure` | Figure and Species | Proficient | 8 (2 q.p.) | `iii.ex.figure`: 30 |
| `iii.homonymy` | Homonymy and Synonymy | Mastered | 7 (2 q.p.) |  |
| `iii.noun-1` | The Noun I: Kinds, Quality, and Comparison | Essentials | 10 (3 q.p.) | `iii.ex.noun-1`: 19 / 39 / 39 / 39 (E/P/M/C) |
| `iii.noun-2` | The Noun II: Gender, Number, and Case | Essentials | 14 (4 q.p.) | `iii.ex.noun-2`: 18 / 36 / 49 / 49 (E/P/M/C) |
| `iii.pronoun` | The Pronoun | Essentials | 10 (3 q.p.) | `iii.ex.pronouns`: 15 / 30 / 42 / 42 (E/P/M/C) |
| `iii.verb-1` | The Verb I: Quality, Mood, and Voice | Essentials | 12 (3 q.p.) | `iii.ex.verb-1`: 18 / 37 / 37 / 37 (E/P/M/C) |
| `iii.verb-2` | The Verb II: Tense, Person, Number, and Conjugation | Essentials | 15 (4 q.p.) | `iii.ex.verb-2`: 18 / 36 / 48 / 48 (E/P/M/C) |
| `iii.participle` | The Participle | Essentials | 9 (2 q.p.) | `iii.ex.participles`: 15 / 30 / 41 / 41 (E/P/M/C) |
| `iii.review-declinable` | Section Review: The Word and the Declinable Parts | Essentials |  | `iii.review-declinable`: 36 / 39 / 45 / 45 (E/P/M/C) |
| `iii.adverb` | The Adverb | Essentials | 7 (2 q.p.) |  |
| `iii.preposition` | The Preposition | Essentials | 7 (2 q.p.) |  |
| `iii.conjunction` | The Conjunction | Essentials | 7 (2 q.p.) |  |
| `iii.interjection` | The Interjection | Essentials | 5 (1 q.p.) |  |
| `iii.review-indeclinable` | Section Review: The Indeclinable Parts | Essentials |  | `iii.review-indeclinable`: 45 |
| **IV** | | | | |
| `iv.derivation` | Derivation | Proficient | 8 (2 q.p.) |  |
| `iv.composition` | Composition | Proficient | 7 (2 q.p.) |  |
| `iv.etymology` | Etymology | Mastered | 10 (3 q.p.) |  |
| `iv.review` | Section Review: Word Formation and Etymology | Proficient |  | `iv.review`: – / 18 / 30 / 30 (E/P/M/C) |
| **V** | | | | |
| `v.congruity` | Congruity | Proficient | 9 (5 q.p.) | `v.ex.congruity`: 24 |
| `v.agreement` | Agreement (concordantia) | Essentials | 8 (5 q.p.) | `v.ex.agreement`: 17 / 30 / 40 / 40 (E/P/M/C) |
| `v.government` | Government (regimen) | Essentials | 8 (5 q.p.) | `v.ex.government`: 18 / 30 / 40 / 40 (E/P/M/C) |
| `v.dependence` | Dependence | Proficient | 9 (5 q.p.) | `v.ex.dependence`: – / 21 / 31 / 41 (E/P/M/C) |
| `v.order` | Order (ordo) | Proficient | 11 (6 q.p.) | `v.ex.order`: 24 |
| `v.phrase` | The Phrase | Essentials | 8 (4 q.p.) | `v.ex.phrase`: 17 / 31 / 31 / 31 (E/P/M/C) |
| `v.clause` | The Clause | Essentials | 10 (5 q.p.) | `v.ex.clause`: 18 / 32 / 32 / 32 (E/P/M/C) |
| `v.period` | The Period | Mastered | 9 (5 q.p.) | `v.ex.period`: – / – / 18 / 40 (E/P/M/C) |
| `v.mood` | Mood and Voice in Construction | Proficient | 10 (5 q.p.) | `v.ex.mood`: – / 18 / 32 / 32 (E/P/M/C) |
| `v.figures` | Figures of Construction | Mastered | 9 (5 q.p.) | `v.ex.figures`: 24 |
| `v.review` | Section Review: Construction | Essentials |  | `v.review`: 21 / 39 / 45 / 45 (E/P/M/C) |
| **VI** | | | | |
| `vi.usage` | Usage and Authority | Proficient | 7 (2 q.p.) | `vi.ex.usage`: 24 |
| `vi.barbarism` | Barbarism | Proficient | 7 (2 q.p.) | `vi.ex.barbarism`: 24 |
| `vi.solecism` | Solecism | Proficient | 8 (2 q.p.) | `vi.ex.solecism`: 24 |
| `vi.metaplasm` | Metaplasm | Mastered | 8 (2 q.p.) | `vi.ex.metaplasm`: 24 |
| `vi.review` | Section Review: Errors | Proficient |  | `vi.review`: – / 33 / 45 / 45 (E/P/M/C) |
| **VII** | | | | |
| `vii.literal` | Literal and Figurative Sense | Proficient | 10 (3 q.p.) | `vii.ex.literal`: – / 48 / 60 / 60 (E/P/M/C) |
| `vii.schemata` | Figures of Words (schemata lexeos) | Mastered | 13 (3 q.p.) | `vii.ex.schemata`: – / – / 24 / 50 (E/P/M/C) |
| `vii.tropes` | Tropes | Proficient | 15 (4 q.p.) | `vii.ex.tropes`: – / 48 / 59 / 59 (E/P/M/C) |
| `vii.review` | Section Review: Figures | Proficient |  | `vii.review`: – / 30 / 45 / 45 (E/P/M/C) |
| **VIII** | | | | |
| `viii.supposition` | Supposition | Mastered | 17 (5 q.p.) | `viii.ex.supposition`: 45 |
| `viii.equivalents` | Grammatical Equivalents of Logical Forms | Mastered | 14 (4 q.p.) |  |
| `viii.review` | Section Review: Signification and Supposition | Mastered |  | `viii.review`: 30 |
| **IX** | | | | |
| `ix.sentences` | Analysis of Sentences | Essentials | 3 | `ix.ex.sentences`: 12 / 39 / 60 / 60 (E/P/M/C) |
| `ix.passages` | Analysis of Passages | Mastered | 3 | `ix.ex.passages`: 75 |
| `ix.marking` | Workshop and Marking | Proficient | 4 | `ix.ex.marking`: – / 14 / 44 / 56 (E/P/M/C) |
| `ix.review` | Section Review: Analysis | Essentials |  | `ix.review`: 12 / 21 / 30 / 30 (E/P/M/C) |
| **X** | | | | |
| `x.composition` | Composition | Proficient | 10 (3 q.p.) |  |
| `x.imitation` | Imitation | Comprehensive | 1 | `x.ex.imitation`: 10 |
| `x.translation` | Translation | Mastered | 12 (4 q.p.) |  |
| `x.progymnasmata` | Classical Composition Exercises | Mastered | 22 (6 q.p.) |  |
| `x.review` | Section Review: Making | Proficient |  | `x.review`: – / 12 / 39 / 45 (E/P/M/C) |
| **XI** | | | | |
| `xi.traditions` | The Other Classical Traditions | Comprehensive | 56 (18 q.p.) |  |
| `xi.modern` | Universal Grammar and Modern Linguistics | Comprehensive | 45 (15 q.p.) |  |
| `xi.review` | Section Review: Other Traditions and Modern Grammar | Comprehensive |  | `xi.review`: 45 |

## 5. The language tracks

Each language is listed separately, in course order, by bar. Ids are given without the screen prefix (`spelling` is `lang.ii.en/spelling`; the exercise ids are given in full). A language exercise always has the level of the deck it is paired with, so exercise sets are not listed as separate rows.

### English

**Essentials in English (15 decks):** the overview; spelling and punctuation; the accidents of English; the noun (number and the possessive); the pronoun; strong and weak verbs; the participle, the gerund, and the infinitive; agreement and case; the eight parts of speech in English; prepositions, conjunctions, and adverbs; subject, predicate, and the patterns; the phrase; the clause and the kind of sentence; and common errors in English. This covers every English topic of the checklist except meter, word formation, figures, and the reading of passages. Common errors are Essentials in English only, because the English deck is practical usage (fragments, run-on sentences and comma splices, misplaced and dangling modifiers, "fewer" and "less") and the general decks on barbarism and solecism are Proficient. Proficient adds the syllable and stress, word formation and composition, agreement and congruity, dependence, figures, the diagram, and the first passages of prose and poetry.

| Id | Title | Level | Cards (question points) | Exercise or review: items |
|---|---|---|---|---|
| **Preliminary bar (overview)** | | | | |
| `overview` | The English Language | Essentials | 6 |  |
| **II** | | | | |
| `spelling` | English Spelling | Essentials | 11 (6 q.p.) | `lang.ii.en/orthography-ex`: 24 |
| `punctuation` | English Punctuation | Essentials | 5 (5 q.p.) | `lang.ii.en/orthography-ex`: 24 |
| `syllable` | English Syllable and Stress | Proficient | 6 (6 q.p.) | `lang.ii.en/syllable-ex`: 36 |
| `meter` | English Meter | Mastered | 6 (6 q.p.) | `lang.ii.en/meter-ex`: 32 |
| **III, declinable parts** | | | | |
| `accidents` | The Accidents of English | Essentials | 5 (5 q.p.) | `lang.iii-decl.en/accidents-ex`: 45 |
| `noun` | The English Noun: Number and the Possessive | Essentials | 5 (5 q.p.) | `lang.iii-decl.en/noun-ex`: 24 |
| `pronouns` | The English Pronoun | Essentials | 6 (6 q.p.) | `lang.iii-decl.en/pronouns-ex`: 24 |
| `verbs` | Strong and Weak Verbs | Essentials | 6 (6 q.p.) | `lang.iii-decl.en/verbs-ex`: 24 |
| `verbals` | The Participle, the Gerund, and the Infinitive | Essentials | 4 (4 q.p.) | `lang.iii-decl.en/verbals-ex`: 24 |
| `form` | Agreement and Case | Essentials | 5 (5 q.p.) | `lang.iii-decl.en/form-ex`: 44 |
| **III, indeclinable parts** | | | | |
| `parts` | The Eight Parts of Speech in English | Essentials | 7 (6 q.p.) | `lang.iii-indecl.en/parts-ex`: 133 |
| `usage` | Prepositions, Conjunctions, and Adverbs in English | Essentials | 5 (5 q.p.) | `lang.iii-indecl.en/usage-ex`: 24 |
| **IV** | | | | |
| `formation` | Word Formation in English | Proficient | 5 (5 q.p.) | `lang.iv.en/formation-ex`: 24 |
| `composition` | Composition in English | Proficient | 4 (4 q.p.) | `lang.iv.en/composition-ex`: 24 |
| `etymology` | Etymology in English | Mastered | 3 (3 q.p.) | `lang.iv.en/etymology-ex`: 24 |
| **V** | | | | |
| `sentence` | Subject, Predicate, and the Patterns | Essentials | 7 (7 q.p.) | `lang.v.en/sentence-ex`: 103 |
| `phrase` | The Phrase | Essentials | 4 (4 q.p.) | `lang.v.en/phrase-ex`: 102 |
| `clause` | The Clause and the Kind of Sentence | Essentials | 3 (3 q.p.) | `lang.v.en/clause-ex`: 102 |
| `agreement` | Agreement, Case, and Congruity in English | Proficient | 3 (3 q.p.) | `lang.v.en/congruity-ex`: 32 |
| `dependence` | Dependence in English Sentences | Proficient | 2 (2 q.p.) | `lang.v.en/workshop-ex`: 24 |
| **VI** | | | | |
| `faults` | Common Errors in English | Essentials | 6 (6 q.p.) | `lang.vi.en/faults-ex`: 129 |
| **VII** | | | | |
| `figures` | Figures and Tropes in English | Proficient | 5 (5 q.p.) | `lang.vii.en/figures-ex`: 37 |
| **IX** | | | | |
| `diagram` | The Diagram | Proficient | 5 (5 q.p.) | `lang.ix.en/diagram-ex`: 48 |
| `prose` | English Prose | Proficient (split) | – / 23 / 58 / 97 (–/3/8/15 of 15 passages) | `lang.ix.en/prose-ex`: – / 15 / 37 / 63 (E/P/M/C) |
| `poetry` | English Poetry | Proficient (split) | – / 12 / 28 / 56 (–/2/5/10 of 10 passages) | `lang.ix.en/poetry-ex`: – / 9 / 20 / 43 (E/P/M/C) |
| **X (models)** | | | | |
| `decl` | The Declaration of Independence | Mastered | 2 |  |
| `gibbon` | Gibbon on the Roman Empire | Mastered | 2 |  |
| `johnson` | Johnson to Lord Chesterfield | Mastered | 2 |  |
| `austen` | Austen’s Opening | Mastered | 2 |  |
| `bacon` | Bacon on Studies | Mastered | 2 |  |
| `lincoln` | Lincoln’s Second Inaugural | Mastered | 2 |  |
| `dickens` | Dickens’s Opening | Mastered | 2 |  |
| `thoreau` | Thoreau on Walden | Mastered | 2 |  |

### Latin

**Essentials in Latin (11 decks):** the overview; syllable, quantity, and accent; the noun (the five declensions); adjectives, comparison, and numerals; the pronoun; the verb (the four conjugations); irregular verbs; participles, gerund, gerundive, and supine; prepositions and their cases; agreement and congruity; and cases and government. This is the morphology of Allen and Greenough with the agreements and the uses of the cases. Three of the Essentials sets (syllable, noun, verb) are generated afresh each sitting. Proficient adds spelling and punctuation (*u* and *v*, *i* and *j*), inflection and case reviewed, the eight parts in Latin, adverbs and conjunctions, word formation and composition, the passive and the infinitive in construction, the subjunctive, the kinds of clause, building the Latin sentence, barbarism and solecism, and the first passages.

| Id | Title | Level | Cards (question points) | Exercise or review: items |
|---|---|---|---|---|
| **Preliminary bar (overview)** | | | | |
| `overview` | The Latin Language | Essentials | 7 |  |
| **II** | | | | |
| `syllable` | Latin Syllable, Quantity, and Accent | Essentials | 4 (4 q.p.) | `lang.ii.la/syllable-ex`: generated afresh each sitting |
| `orthography` | Latin Spelling and Punctuation | Proficient | 4 (4 q.p.) | `lang.ii.la/orthography-ex`: 22 |
| `meter` | Latin Meter | Mastered | 5 (5 q.p.) | `lang.ii.la/meter-ex`: 35 |
| **III, declinable parts** | | | | |
| `noun` | The Latin Noun | Essentials | 5 (5 q.p.) | `lang.iii-decl.la/noun-ex`: generated afresh each sitting |
| `adjectives` | Adjectives, Comparison, and Numerals | Essentials | 4 (4 q.p.) | `lang.iii-decl.la/adjectives-ex`: 24 |
| `pronouns` | The Latin Pronoun | Essentials | 5 (5 q.p.) | `lang.iii-decl.la/pronouns-ex`: 24 |
| `verb` | The Latin Verb | Essentials | 6 (6 q.p.) | `lang.iii-decl.la/verb-ex`: generated afresh each sitting |
| `irregular` | Irregular Verbs in Latin | Essentials | 6 (6 q.p.) | `lang.iii-decl.la/irregular-ex`: 24 |
| `participles` | Participles, Gerund, Gerundive, and Supine | Essentials | 5 (5 q.p.) | `lang.iii-decl.la/participles-ex`: 24 |
| `casework` | Inflection: Case and the Verb | Proficient | 8 (7 q.p.) | `lang.iii-decl.la/cases-ex`: 28 |
| **III, indeclinable parts** | | | | |
| `parts` | The Eight Parts of Speech in Latin | Proficient | 3 (3 q.p.) | `lang.iii-indecl.la/parts-ex`: 24 |
| `prepositions` | Latin Prepositions and Their Cases | Essentials | 4 (4 q.p.) | `lang.iii-indecl.la/prepositions-ex`: 24 |
| `adverbs` | Latin Adverbs, Conjunctions, and Interjections | Proficient | 4 (4 q.p.) | `lang.iii-indecl.la/adverbs-ex`: 24 |
| **IV** | | | | |
| `formation` | Word Formation in Latin | Proficient | 5 (5 q.p.) | `lang.iv.la/formation-ex`: 24 |
| `composition` | Composition in Latin | Proficient | 3 (3 q.p.) | `lang.iv.la/composition-ex`: 24 |
| `etymology` | Etymology in Latin | Mastered | 3 (3 q.p.) | `lang.iv.la/etymology-ex`: 24 |
| **V** | | | | |
| `agreement` | Agreement and Congruity in Latin | Essentials | 2 (2 q.p.) | `lang.v.la/congruity-ex`: 31 |
| `government` | Cases and Government in Latin | Essentials | 3 (3 q.p.) | `lang.v.la/govern-ex`: 58 |
| `voice` | The Passive, the Infinitive, and the Participle | Proficient | 6 (6 q.p.) | `lang.v.la/voice-ex`: 24 |
| `subjunctive` | The Subjunctive | Proficient | 5 (5 q.p.) | `lang.v.la/subjunctive-ex`: 40 |
| `clause-kinds` | Clauses in Latin | Proficient | 4 (4 q.p.) | `lang.v.la/clause-ex`: 40 |
| `clauses` | Clauses in the Authors | Comprehensive | 53 (11 q.p.) |  |
| `building` | Building the Latin Sentence | Proficient | 6 (6 q.p.) | `lang.v.la/building-ex`: generated afresh each sitting |
| `dependence` | Dependence in the Latin Sentence | Mastered | 2 (2 q.p.) | `lang.v.la/workshop-ex`: 29 |
| **VI** | | | | |
| `faults` | Latin Barbarism, Solecism, and Metaplasm | Proficient | 4 (4 q.p.) | `lang.vi.la/vices-ex`: 26 |
| **VII** | | | | |
| `figures` | Latin Figures and Tropes | Mastered | 4 (4 q.p.) | `lang.vii.la/figures-ex`: 31 |
| **IX** | | | | |
| `prose` | Latin Prose | Proficient (split) | – / 18 / 44 / 77 (–/3/8/15 of 15 passages) | `lang.ix.la/prose-ex`: – / 18 / 38 / 68 (E/P/M/C) |
| `poetry` | Latin Poetry | Proficient (split) | – / 17 / 41 / 76 (–/2/5/10 of 10 passages) | `lang.ix.la/poetry-ex`: – / 27 / 42 / 67 (E/P/M/C) |
| `servius` | Servius on the Aeneid | Comprehensive | 2 (2 q.p.) | `lang.ix.la/servius-ex`: 20 |
| **X (models)** | | | | |
| `livy` | Livy’s Opening | Mastered | 2 |  |
| `cicero1` | Cicero against Catiline | Mastered | 2 |  |
| `cicero2` | Cicero to the People | Mastered | 2 |  |
| `sallust` | Sallust’s Catiline | Mastered | 2 |  |
| `tacitus` | Tacitus: Calgacus on Rome | Mastered | 2 |  |
| `augustine` | Augustine’s Confessions | Mastered | 2 |  |
| `virgil` | Virgil’s Opening | Mastered | 2 |  |
| `horace` | Horace, Integer vitae | Mastered | 2 |  |

### Greek

**Essentials in Greek (10 decks):** the overview; the alphabet and its marks; syllable, quantity, and accent; the accidents of Greek compared with Latin; the paradigms (the article, the three declensions, the adjectives, λύω and εἰμί); the pronoun; the article and the participle; prepositions and their cases; agreement; and case and government. Proficient adds contract verbs, the verbs in -μι, the perfect system, the participle in full, particles and negatives, word formation and composition, voice, the subjunctive and the optative, clauses, barbarism and solecism, and the first passages. Mastered adds meter, word order, Attic correctness, figures and tropes, and etymology; Comprehensive adds the sixteen hexameter lines.

| Id | Title | Level | Cards (question points) | Exercise or review: items |
|---|---|---|---|---|
| **Preliminary bar (overview)** | | | | |
| `overview` | The Greek Language | Essentials | 7 |  |
| **II** | | | | |
| `writing` | The Greek Alphabet and Its Marks | Essentials | 3 (3 q.p.) | `lang.ii.grc/writing-ex`: 22 |
| `syllable` | Greek Syllable, Quantity, and Accent | Essentials | 7 (7 q.p.) | `lang.ii.grc/syllable-ex`: 22 |
| `meter` | Greek Meter | Mastered | 5 (5 q.p.) | `lang.ii.grc/meter-ex`: 21 |
| `hexameter` | Greek Hexameter Lines | Comprehensive | 16 (1 q.p.) | `lang.ii.grc/hexameter-ex`: 21 |
| **III, declinable parts** | | | | |
| `accidents` | The Accidents of Greek Compared to Latin | Essentials | 20 (11 q.p.) | `lang.iii-decl.grc/fill-ex`: 51 |
| `paradigms` | Greek Paradigms | Essentials | 24 (12 q.p.) | `lang.iii-decl.grc/paradigms-ex`: 24 |
| `pronouns` | The Greek Pronoun | Essentials | 5 (5 q.p.) | `lang.iii-decl.grc/pronouns-ex`: 24 |
| `contract` | Contract Verbs | Proficient | 4 (4 q.p.) | `lang.iii-decl.grc/contract-ex`: 24 |
| `mi` | Verbs in -μι | Proficient | 4 (4 q.p.) | `lang.iii-decl.grc/mi-ex`: 24 |
| `perfect` | The Perfect System | Proficient | 4 (4 q.p.) | `lang.iii-decl.grc/perfect-ex`: 24 |
| `participle` | The Greek Participle | Proficient | 3 (3 q.p.) | `lang.iii-decl.grc/participle-ex`: 24 |
| `compared` | The Article and the Participle | Essentials | 3 (3 q.p.) | `lang.iii-decl.grc/compared-ex`: 32 |
| **III, indeclinable parts** | | | | |
| `prepositions` | Greek Prepositions and Their Cases | Essentials | 4 (4 q.p.) | `lang.iii-indecl.grc/govern-ex`: 24 |
| `particles` | Greek Particles, Negatives, and Adverbs | Proficient | 5 (5 q.p.) | `lang.iii-indecl.grc/parts-ex`: 24 |
| **IV** | | | | |
| `formation` | Word Formation in Greek | Proficient | 5 (5 q.p.) | `lang.iv.grc/formation-ex`: 24 |
| `composition` | Composition in Greek | Proficient | 4 (4 q.p.) | `lang.iv.grc/composition-ex`: 24 |
| `etymology` | Etymology in Greek | Mastered | 3 (3 q.p.) | `lang.iv.grc/etymology-ex`: 24 |
| **V** | | | | |
| `agreement` | Agreement in Greek | Essentials | 4 (4 q.p.) | `lang.v.grc/agree-ex`: 30 |
| `government` | Case and Government in Greek | Essentials | 4 (4 q.p.) | `lang.v.grc/more-ex`: 55 |
| `voice` | Voice, the Infinitive, and the Participle in Greek | Proficient | 3 (3 q.p.) | `lang.v.grc/voice-ex`: 24 |
| `mood` | The Subjunctive and the Optative in Greek | Proficient | 4 (4 q.p.) | `lang.v.grc/mood-ex`: 31 |
| `clauses` | Clauses in Greek | Proficient | 6 (6 q.p.) | `lang.v.grc/clause-ex`: 50 |
| `order` | Word Order and Dependence in Greek | Mastered | 3 (3 q.p.) | `lang.v.grc/cited-ex`: 31 |
| **VI** | | | | |
| `errors` | Barbarism and Solecism in Greek | Proficient | 3 (3 q.p.) | `lang.vi.grc/vices-ex`: 21 |
| `attic` | Attic Correctness and the Dialects | Mastered | 3 (3 q.p.) | `lang.vi.grc/errors-ex`: 24 |
| **VII** | | | | |
| `figures` | Figures in Homer and Plato | Mastered | 4 (4 q.p.) | `lang.vii.grc/figures-ex`: 21 |
| `tropes` | Tropes and Schemes in Greek | Mastered | 2 (2 q.p.) | `lang.vii.grc/tropes-ex`: 22 |
| **IX** | | | | |
| `prose` | Greek Prose | Proficient (split) | – / 21 / 49 / 84 (–/3/8/15 of 15 passages) | `lang.ix.grc/prose-ex`: – / 17 / 37 / 65 (E/P/M/C) |
| `poetry` | Greek Poetry | Proficient (split) | – / 14 / 30 / 55 (–/2/5/10 of 10 passages) | `lang.ix.grc/poetry-ex`: – / 11 / 23 / 42 (E/P/M/C) |
| **X (models)** | | | | |
| `herodotus` | Herodotus’s Opening | Mastered | 2 |  |
| `thucydides1` | Thucydides’s Opening | Mastered | 2 |  |
| `thucydides2` | Thucydides on His Method | Mastered | 2 |  |
| `plato` | Socrates’s Defense | Mastered | 2 |  |
| `xenophon` | Xenophon’s Anabasis | Mastered | 2 |  |
| `john` | The Prologue of John | Mastered | 2 |  |
| `demosthenes` | Demosthenes’s First Philippic | Mastered | 2 |  |
| `homer` | Homer’s Iliad | Mastered | 2 |  |

### French

**Essentials in French (10 decks):** the overview; syllable and stress; elision, liaison, and punctuation; the accidents of French compared with Latin (articles, gender and number, the personal pronouns and their order, the three groups of verbs and the simple tenses); the paradigms; variable and invariable words; articles and contractions; prepositions; negation, adverbs, and conjunctions; and agreement. Proficient adds the other pronouns (relative, demonstrative, possessive, interrogative), the compound and literary tenses, the subjunctive, the participle and its agreement, government, voice, mood, clauses, the errors, word formation and composition, and the first passages.

| Id | Title | Level | Cards (question points) | Exercise or review: items |
|---|---|---|---|---|
| **Preliminary bar (overview)** | | | | |
| `overview` | The French Language | Essentials | 7 |  |
| **II** | | | | |
| `syllable` | French Syllable and Stress | Essentials | 5 (5 q.p.) | `lang.ii.fr/syllable-ex`: 22 |
| `orthography` | French Spelling: Elision, Liaison, and Punctuation | Essentials | 3 (3 q.p.) | `lang.ii.fr/orthography-ex`: 22 |
| `meter` | French Meter | Mastered | 5 (5 q.p.) | `lang.ii.fr/meter-ex`: 21 |
| **III, declinable parts** | | | | |
| `accidents` | The Accidents of French Compared to Latin | Essentials | 20 (13 q.p.) | `lang.iii-decl.fr/fill-ex`: 50 |
| `paradigms` | French Paradigms | Essentials | 12 (6 q.p.) | `lang.iii-decl.fr/paradigms-ex`: 24 |
| `parts` | Variable and Invariable Words | Essentials | 2 (2 q.p.) | `lang.iii-decl.fr/parts-ex`: 20 |
| `pronouns` | The French Pronoun | Proficient | 4 (4 q.p.) | `lang.iii-decl.fr/pronouns-ex`: 24 |
| `tenses` | The Compound and Literary Tenses | Proficient | 3 (3 q.p.) | `lang.iii-decl.fr/tenses-ex`: 24 |
| `subjunctive` | The Forms of the French Subjunctive | Proficient | 3 (3 q.p.) | `lang.iii-decl.fr/subjunctive-ex`: 24 |
| `participle` | The French Participle and Its Agreement | Proficient | 4 (4 q.p.) | `lang.iii-decl.fr/participle-ex`: 24 |
| **III, indeclinable parts** | | | | |
| `compared` | French Articles and Contractions | Essentials | 3 (3 q.p.) | `lang.iii-indecl.fr/compared-ex`: 24 |
| `prepositions` | French Prepositions | Essentials | 4 (4 q.p.) | `lang.iii-indecl.fr/govern-ex`: 24 |
| `invariable` | Negation, Adverbs, and Conjunctions in French | Essentials | 3 (3 q.p.) | `lang.iii-indecl.fr/parts-ex`: 22 |
| **IV** | | | | |
| `formation` | Word Formation in French | Proficient | 5 (5 q.p.) | `lang.iv.fr/formation-ex`: 24 |
| `composition` | Composition in French | Proficient | 3 (3 q.p.) | `lang.iv.fr/composition-ex`: 24 |
| `etymology` | Etymology in French | Mastered | 3 (3 q.p.) | `lang.iv.fr/etymology-ex`: 24 |
| **V** | | | | |
| `agreement` | Agreement in French | Essentials | 4 (4 q.p.) | `lang.v.fr/agree-ex`: 28 |
| `government` | Pronouns, Prepositions, and Government in French | Proficient | 3 (3 q.p.) | `lang.v.fr/more-ex`: 52 |
| `voice` | The Passive, the Infinitive, and the Participle in French | Proficient | 3 (3 q.p.) | `lang.v.fr/voice-ex`: 24 |
| `mood` | The Subjunctive, the Conditional, and the Imperative in French | Proficient | 4 (4 q.p.) | `lang.v.fr/mood-ex`: 32 |
| `clauses` | Clauses in French | Proficient | 6 (6 q.p.) | `lang.v.fr/clause-ex`: 49 |
| `order` | Word Order, Negation, and Dependence in French | Mastered | 3 (3 q.p.) | `lang.v.fr/cited-ex`: 30 |
| **VI** | | | | |
| `errors` | Barbarism and Solecism in French | Proficient | 3 (3 q.p.) | `lang.vi.fr/vices-ex`: 21 |
| `usage` | Common Errors in French | Proficient | 3 (3 q.p.) | `lang.vi.fr/errors-ex`: 24 |
| **VII** | | | | |
| `figures` | Figures in La Fontaine and Racine | Mastered | 4 (4 q.p.) | `lang.vii.fr/figures-ex`: 21 |
| `tropes` | Tropes and Schemes in French | Mastered | 2 (2 q.p.) | `lang.vii.fr/tropes-ex`: 22 |
| **IX** | | | | |
| `prose` | French Prose | Proficient (split) | – / 18 / 42 / 72 (–/3/8/15 of 15 passages) | `lang.ix.fr/prose-ex`: – / 21 / 36 / 56 (E/P/M/C) |
| `poetry` | French Poetry | Proficient (split) | – / 11 / 27 / 50 (–/2/5/10 of 10 passages) | `lang.ix.fr/poetry-ex`: – / 10 / 24 / 43 (E/P/M/C) |
| **X (models)** | | | | |
| `descartes` | Descartes on Good Sense | Mastered | 2 |  |
| `pascal` | Pascal’s Thinking Reed | Mastered | 2 |  |
| `montaigne` | Montaigne to the Reader | Mastered | 2 |  |
| `rousseau` | Rousseau’s Opening | Mastered | 2 |  |
| `larochefoucauld` | La Rochefoucauld’s Maxim | Mastered | 2 |  |
| `proust` | Proust’s Opening | Mastered | 2 |  |
| `racine` | Racine’s Phèdre | Mastered | 2 |  |
| `ronsard` | Ronsard to Hélène | Mastered | 2 |  |

### German

**Essentials in German (14 decks):** the overview; syllable, length, and stress; spelling and punctuation; the accidents of German compared with Latin; the paradigms (article, four cases, adjective endings, personal pronouns); declinable and indeclinable words; the plural of nouns; strong and mixed verbs; the modal verbs; German and the article; prepositions (with the two-way prepositions); conjunctions, prefixes, and particles (with the separable prefixes); case and government; and word order and dependence (verb second and verb last). German has more Essentials decks than the other languages because its decks are smaller and its essentials include the plural classes, the strong verbs, and word order. Proficient adds the other pronouns, the Konjunktiv and the compound tenses, agreement, voice, mood, clauses, the errors, word formation and composition, and the first passages.

| Id | Title | Level | Cards (question points) | Exercise or review: items |
|---|---|---|---|---|
| **Preliminary bar (overview)** | | | | |
| `overview` | The German Language | Essentials | 7 |  |
| **II** | | | | |
| `syllable` | German Syllable, Length, and Stress | Essentials | 4 (4 q.p.) | `lang.ii.de/syllable-ex`: 22 |
| `orthography` | German Spelling and Punctuation | Essentials | 3 (3 q.p.) | `lang.ii.de/orthography-ex`: 22 |
| `meter` | German Meter | Mastered | 5 (5 q.p.) | `lang.ii.de/meter-ex`: 21 |
| **III, declinable parts** | | | | |
| `accidents` | The Accidents of German Compared to Latin | Essentials | 22 (14 q.p.) | `lang.iii-decl.de/fill-ex`: 52 |
| `paradigms` | German Paradigms | Essentials | 24 (6 q.p.) | `lang.iii-decl.de/paradigms-ex`: 24 |
| `parts` | Declinable and Indeclinable Words in German | Essentials | 2 (2 q.p.) | `lang.iii-decl.de/parts-ex`: 20 |
| `plurals` | The Plural of German Nouns | Essentials | 3 (3 q.p.) | `lang.iii-decl.de/plurals-ex`: 24 |
| `pronouns` | The German Pronoun | Proficient | 4 (4 q.p.) | `lang.iii-decl.de/pronouns-ex`: 24 |
| `strong` | Strong and Mixed Verbs in German | Essentials | 4 (4 q.p.) | `lang.iii-decl.de/strong-ex`: 24 |
| `modals` | The German Modal Verbs | Essentials | 2 (2 q.p.) | `lang.iii-decl.de/modals-ex`: 24 |
| `konjunktiv` | The Konjunktiv and the Compound Tenses | Proficient | 3 (3 q.p.) | `lang.iii-decl.de/konjunktiv-ex`: 24 |
| `compared` | German and the Article | Essentials | 2 (2 q.p.) | `lang.iii-decl.de/compared-ex`: 24 |
| **III, indeclinable parts** | | | | |
| `prepositions` | German Prepositions | Essentials | 3 (3 q.p.) | `lang.iii-indecl.de/govern-ex`: 24 |
| `particles` | German Conjunctions, Prefixes, and Particles | Essentials | 3 (3 q.p.) | `lang.iii-indecl.de/parts-ex`: 24 |
| **IV** | | | | |
| `formation` | Word Formation in German | Proficient | 5 (5 q.p.) | `lang.iv.de/formation-ex`: 24 |
| `composition` | Composition in German | Proficient | 4 (4 q.p.) | `lang.iv.de/composition-ex`: 24 |
| `etymology` | Etymology in German | Mastered | 3 (3 q.p.) | `lang.iv.de/etymology-ex`: 24 |
| **V** | | | | |
| `agreement` | Agreement in German | Proficient | 4 (4 q.p.) | `lang.v.de/agree-ex`: 27 |
| `government` | Case and Government in German | Essentials | 3 (3 q.p.) | `lang.v.de/more-ex`: 52 |
| `voice` | The Passive, the Infinitive, and the Participle in German | Proficient | 3 (3 q.p.) | `lang.v.de/voice-ex`: 24 |
| `mood` | The Konjunktiv and the Imperative in German | Proficient | 4 (4 q.p.) | `lang.v.de/mood-ex`: 32 |
| `clauses` | Clauses in German | Proficient | 4 (4 q.p.) | `lang.v.de/clause-ex`: 49 |
| `order` | Word Order and Dependence in German | Essentials | 2 (2 q.p.) | `lang.v.de/cited-ex`: 29 |
| **VI** | | | | |
| `errors` | Barbarism and Solecism in German | Proficient | 3 (3 q.p.) | `lang.vi.de/vices-ex`: 21 |
| `usage` | Common Errors in German | Proficient | 2 (2 q.p.) | `lang.vi.de/errors-ex`: 24 |
| **VII** | | | | |
| `figures` | Figures in Goethe and Schiller | Mastered | 4 (4 q.p.) | `lang.vii.de/figures-ex`: 21 |
| `tropes` | Tropes and Schemes in German | Mastered | 2 (2 q.p.) | `lang.vii.de/tropes-ex`: 22 |
| **IX** | | | | |
| `prose` | German Prose | Proficient (split) | – / 18 / 45 / 81 (–/3/8/15 of 15 passages) | `lang.ix.de/prose-ex`: – / 16 / 36 / 59 (E/P/M/C) |
| `poetry` | German Poetry | Proficient (split) | – / 11 / 25 / 50 (–/2/5/10 of 10 passages) | `lang.ix.de/poetry-ex`: – / 9 / 23 / 39 (E/P/M/C) |
| **X (models)** | | | | |
| `kant` | Kant’s Groundwork | Mastered | 2 |  |
| `werther` | Goethe’s Werther | Mastered | 2 |  |
| `grimm` | The Grimms’ Frog King | Mastered | 2 |  |
| `kleist` | Kleist’s Michael Kohlhaas | Mastered | 2 |  |
| `manifest` | The Communist Manifesto | Mastered | 2 |  |
| `zarathustra` | Nietzsche’s Zarathustra | Mastered | 2 |  |
| `nachtlied` | Goethe’s Wandrers Nachtlied | Mastered | 2 |  |
| `heine` | Heine’s Du bist wie eine Blume | Mastered | 2 |  |

### Spanish

**Essentials in Spanish (10 decks):** the overview; syllable and stress; letters, sounds, and punctuation; the accidents of Spanish compared with Latin; the paradigms; variable and invariable words; irregular verbs (the stem-changing verbs, the strong preterites, the irregular futures, and the verbs in *-go* and *-zco*); prepositions; adverbs, negation, conjunctions, and interjections; and agreement. Proficient adds the other pronouns, the compound and other tenses, the subjunctive, the infinitive, gerund, and participle, government, voice, mood, clauses, the errors, word formation and compounds, and the first passages. Spanish Compared with Latin is Mastered.

| Id | Title | Level | Cards (question points) | Exercise or review: items |
|---|---|---|---|---|
| **Preliminary bar (overview)** | | | | |
| `overview` | The Spanish Language | Essentials | 7 |  |
| **II** | | | | |
| `syllable` | Spanish Syllable and Stress | Essentials | 5 (5 q.p.) | `lang.ii.es/syllable-ex`: 22 |
| `orthography` | Spanish Spelling: Letters, Sounds, and Punctuation | Essentials | 5 (5 q.p.) | `lang.ii.es/orthography-ex`: 22 |
| `meter` | Spanish Meter | Mastered | 5 (5 q.p.) | `lang.ii.es/meter-ex`: 22 |
| **III, declinable parts** | | | | |
| `accidents` | The Accidents of Spanish Compared to Latin | Essentials | 20 (14 q.p.) | `lang.iii-decl.es/fill-ex`: 50 |
| `paradigms` | Spanish Paradigms | Essentials | 12 (6 q.p.) | `lang.iii-decl.es/paradigms-ex`: 24 |
| `parts` | Variable and Invariable Words | Essentials | 2 (2 q.p.) | `lang.iii-decl.es/parts-ex`: 20 |
| `pronouns` | The Spanish Pronoun | Proficient | 4 (4 q.p.) | `lang.iii-decl.es/pronouns-ex`: 24 |
| `tenses` | The Compound and Other Tenses | Proficient | 3 (3 q.p.) | `lang.iii-decl.es/tenses-ex`: 24 |
| `subjunctive` | The Forms of the Spanish Subjunctive | Proficient | 3 (3 q.p.) | `lang.iii-decl.es/subjunctive-ex`: 24 |
| `participle` | The Infinitive, the Gerund, and the Participle | Proficient | 4 (4 q.p.) | `lang.iii-decl.es/participle-ex`: 24 |
| `irregular` | Irregular Verbs | Essentials | 4 (4 q.p.) | `lang.iii-decl.es/irregular-ex`: 24 |
| **III, indeclinable parts** | | | | |
| `prepositions` | Spanish Prepositions | Essentials | 4 (4 q.p.) | `lang.iii-indecl.es/govern-ex`: 24 |
| `invariable` | Adverbs, Negation, Conjunctions, and Interjections in Spanish | Essentials | 3 (3 q.p.) | `lang.iii-indecl.es/parts-ex`: 22 |
| `compared` | Spanish Compared with Latin | Mastered | 4 (4 q.p.) | `lang.iii-indecl.es/compared-ex`: 24 |
| **IV** | | | | |
| `formation` | Word Formation in Spanish | Proficient | 5 (5 q.p.) | `lang.iv.es/formation-ex`: 24 |
| `composition` | Compounds in Spanish | Proficient | 3 (3 q.p.) | `lang.iv.es/composition-ex`: 24 |
| `etymology` | Etymology in Spanish | Mastered | 3 (3 q.p.) | `lang.iv.es/etymology-ex`: 24 |
| **V** | | | | |
| `agreement` | Agreement in Spanish | Essentials | 4 (4 q.p.) | `lang.v.es/agree-ex`: 28 |
| `government` | Government in Spanish | Proficient | 4 (4 q.p.) | `lang.v.es/more-ex`: 52 |
| `voice` | Voice in Spanish | Proficient | 3 (3 q.p.) | `lang.v.es/voice-ex`: 24 |
| `mood` | Mood in Spanish | Proficient | 5 (5 q.p.) | `lang.v.es/mood-ex`: 32 |
| `clauses` | Clauses in Spanish | Proficient | 6 (6 q.p.) | `lang.v.es/clause-ex`: 49 |
| `order` | Word Order in Spanish | Mastered | 4 (4 q.p.) | `lang.v.es/cited-ex`: 30 |
| **VI** | | | | |
| `errors` | Barbarism and Solecism in Spanish | Proficient | 3 (3 q.p.) | `lang.vi.es/vices-ex`: 21 |
| `usage` | Common Questions of Usage in Spanish | Proficient | 3 (3 q.p.) | `lang.vi.es/errors-ex`: 24 |
| **VII** | | | | |
| `figures` | Figures in Góngora, Quevedo, and Cervantes | Mastered | 4 (4 q.p.) | `lang.vii.es/figures-ex`: 21 |
| `tropes` | Tropes and Schemes in Spanish | Mastered | 2 (2 q.p.) | `lang.vii.es/tropes-ex`: 22 |
| **IX** | | | | |
| `prose` | Spanish Prose | Proficient (split) | – / 11 / 36 / 67 (–/3/8/16 of 16 passages) | `lang.ix.es/prose-ex`: – / 8 / 28 / 56 (E/P/M/C) |
| `poetry` | Spanish Poetry | Proficient (split) | – / 11 / 26 / 51 (–/2/5/10 of 10 passages) | `lang.ix.es/poetry-ex`: – / 9 / 20 / 43 (E/P/M/C) |
| **X (models)** | | | | |
| `cervantes` | Cervantes to the Reader | Mastered | 3 |  |
| `teresa` | Saint Teresa on Her Father | Mastered | 2 |  |
| `lazarillo` | Lazarillo and His Little Brother | Mastered | 2 |  |
| `gracian` | Gracián on Suspense | Mastered | 2 |  |
| `galdos` | Galdós’s Traveler | Mastered | 2 |  |
| `unamuno` | Unamuno’s Man of Flesh and Bone | Mastered | 2 |  |
| `becquer` | Bécquer’s Rima XXI | Mastered | 2 |  |
| `dario` | Darío’s Sonatina | Mastered | 2 |  |


## 6. Decks split across levels

Every deck of the general course is kept whole. So is every language deck except the twelve reading collections of Section IX:

| Deck | Passages | Proficient | Mastered | Comprehensive |
|---|---|---|---|---|
| `lang.ix.<code>/prose` (all six languages) | 15 (Spanish 16) | first 3 | first 8 | all |
| `lang.ix.<code>/poetry` (all six languages) | 10 | first 2 | first 5 | all |

**Reason.** These decks are anthologies, not arguments: each passage (one question point on its opening card, then its word notes) stands alone, and the decks run to 50–97 cards, far more than a Proficient student needs before going on. The exercise follows the passages, because every one of the 644 questions in the twelve passage sets already names its passage (`passageRef`), so no question has to be moved or retagged. The split is by position, the first passages of each deck, so no passage has to be judged easier or harder; the counts per level are in the tables of section 5. If Timothy prefers particular passages at Proficient (for example the Gettysburg Address before Gibbon), the choice is a list of passage ids and costs nothing to change.

**Considered and not split.** Quantity and Accent (18 cards, English stress and Latin quantity together) stays whole at Proficient; Classical Composition Exercises (22 cards) stays whole at Mastered, because the fourteen exercises are one series in Theon's order; the two Section XI decks (56 and 45 cards) stay whole at Comprehensive; the long comparison decks of French, German, Spanish, and Greek (20–22 cards on the accidents compared with Latin) stay whole at Essentials, because they are where those tracks teach their forms.

**Not splits, but filters.** Two things vary within a single set without splitting any file: the section reviews (filtered by `deck`, rule 2 of section 1) and the twenty sets with in-set Levels I to IV (rule 3).

## 7. What the student sees at each level

### The home page

From the top: the level selector (Essentials, Proficient, Mastered, Comprehensive); below it the Free Practice / Guided Path selector; then the language selector (see problem 1 in section 9); then the sections. A section with nothing at the selected level is not shown (for example, Section VIII in Essentials and Proficient, and Section XI below Comprehensive). Within a section only the level's tiles are shown, in course order, and each language bar shows only the level's tiles on its screen. The Cumulative Review bar and Today's Review draw only on the level's items.

### Guided Path

The Guided Path today works by section: Section I is open; a section's exercise sets open when the required sets of the section before are passed (9 of the last 10 answers correct, on at least 2 days); a section with no required set opens the next when its study cards are finished; reviews never close anything. At each level the same rule applies to that level's items only:

1. The path takes the sections in course order, skipping any section with nothing at the level.
2. In each section the steps are: the level's study decks, in order; then the level's exercise sets of the general course; then, with a language chosen, that language's decks and exercises of the level for the section, in the order of the language screen; then the section review (filtered to the level). For example, Essentials in Latin, Section III: the decks on the word and the eight parts, the noun, the pronoun, the verb, the participle, and the indeclinable parts; the exercises of those decks at Level I; the Latin decks on the noun, adjectives, pronoun, verb, irregular verbs, participles, and prepositions, with their exercises; then the two reviews of Section III.
3. **Soft gating within a level.** Study decks are never locked. A section's exercise sets open when the required sets of the previous section *at this level* are passed; a section with no required set at this level opens the next when its study cards at this level are finished. With a language chosen, that language's exercise sets at the level count among the required sets of their section. Locked sets show "Locked" and say what opens them, as now, and the student can still read every card. Reviews never gate.
4. **Moving up counts.** A set passed in Essentials counts as passed in Proficient wherever it has the same items (a set without in-set levels). A set with in-set levels counts as passed at a higher level only when the pass was made at the in-set level that the higher level requires (see section 8). So a student who moves up finds the earlier sections open and has only the new decks and the new in-set levels to do.
5. The "next step" line and the Begin button show the next step of the selected level.

### Free Practice

Free Practice offers every deck and exercise of the selected level, ungated, in course order, with the language bars filtered the same way. A set with in-set levels offers only the in-set levels open at the course level (so its level picker in Essentials offers Level I only). The Quiz Maker and the Recitation Tablet offer the decks of the selected level; a whole-section recitation joins the outlines of the level's decks only.

## 8. Remembering progress

Timothy's arrangement works with the present records and needs no migration of anyone's answers: **one record of what the student has done on each item, shared by all levels, and a small record of position for each level.** The reason it works is that every record today is already keyed by the stable id of the deck, set, or question, never by position. I recommend it, with one addition (per-level completion for the split decks, below).

What is stored now, and stays exactly as it is:

| Key | Field | Holds |
|---|---|---|
| `ars-grammatica-course-v2` | `decks[id]` | opens, done, and each question point's place in its A/B/C rotation |
| | `ex[id]` | visits, done, the place in the A/B/C rotation (per in-set level: `lvisits`), due second tries |
| | `boxes[itemId]` | the review boxes (1, 3, 7, 14, 30 days) of every question answered |
| | `recitations`, `reciteNudges` | the Recitation Tablet's texts and reminders |
| | `dark` | the dark theme |
| `ars-grammatica-guided` | `sets[id]` | the Guided Path history, pass, and mastery of each set (schema 2, with the in-set level of each answer) |
| `ars-grammatica-path` | | `practice` or `guided` |

What I would add, all inside `ars-grammatica-course-v2` so that no new key is needed:

```js
store.view = { level: 'essentials', lang: 'la' };   // the last level and language chosen
store.levels = {
  essentials:    { guided: { step: 'iii.ex.noun-2', at: 1761600000000 },   // the last Guided step opened
                   free:   { item: 'lang.iii-decl.la/verb', section: 'iii', at: 1761500000000 } },  // the last Free Practice tile
  proficient:    { … },
  mastered:      { … },
  comprehensive: { … }
};
store.decks['lang.ix.la/prose'].parts = ['prose-1', 'prose-10', 'prose-16'];  // passages finished, for the split decks only
```

- **Level, mode, and language reopen as left.** The level and language are read from `store.view`. The mode stays in `ars-grammatica-path`, where it is stored today, so a student who has chosen the Guided Path keeps it; copying it into `store.view` would give two records that could disagree. A first visit (no `store.view`) opens on Essentials, Free Practice, and no language chosen, or English (question 2).
- **Guided position per level.** The Guided Path does not need a stored position to work, because it computes the next step from what is passed; but the stored `step` lets the home page reopen the step the student was on, which is what "find everything as they left it" asks.
- **Free Practice position per level.** `item` is the tile last opened and `section` the section it is in; on return the home page scrolls to that tile and puts the keyboard focus on it.
- **Completion of a split deck.** `decks[id].done` is a single flag. For the twelve passage decks it should mean "finished at the level where it was finished," so the deck also records the passages finished (`parts`); the deck shows as done at a level when every passage open at that level is finished.
- **Pass and mastery per level, for sets with in-set levels.** No new storage is needed: each answer in `ars-grammatica-guided` already records its in-set level, so the pass at a course level is computed from the answers at the in-set levels open at that course level. Existing passes (`passedOn`, `masteredOn`) are kept and count at every course level where the set's present pass level is open, so no star or pass is lost.
- **Nothing is deleted or rewritten** in any existing record. A student with saved progress opens on Essentials with all of it intact; everything done outside Essentials is still there when the student chooses that level.

## 9. The design for Step 2: confirmations and problems

The design is workable. These are the problems to settle before Step 2:

1. **There is no language choice today.** Each section has a bar of six language buttons, and the student picks a language each time; nothing remembers a language, and the Guided Path includes no language items at all. "Language choice stays separate and works with every level," and a per-language Essentials on the Guided Path, need a course-wide language selector. I recommend a third selector below the other two: the six languages, plus "All languages" for Free Practice, which shows the six buttons on each bar as now. With one language chosen, each bar opens that language's screen directly (question 1).
2. **The word "level" is already used inside twenty exercise sets** ("Level I," "Level II," with their own picker and the Guided rule "pass at Level II, mastery at Level IV"). Two kinds of level on one page will confuse a student: "Essentials, Level II." I recommend keeping "level" for the four new levels, as in the brief, and renaming the in-set levels in the student's view to "stage" ("Stage I," "Stage II"), without changing any data field (question 4).
3. **"Mastered" is already a Guided Path state.** A set passed a second time on a later day shows "★ Mastered." A student in the Mastered level would see "★ Mastered" on sets that are only passed at that level. I recommend renaming the level or the state (question 5).
4. **Small pools in Essentials.** With in-set Level I only, some Essentials sets are small: Analysis of Sentences has 12 items, the pronoun and participle sets 15, the noun, verb, phrase, and clause sets 17–19. The Guided pass needs 10 answers on 2 days, so it still works, but the A/B/C rotation repeats quickly. The alternative is to open Levels I and II in Essentials (question 3).
5. **Due items outside the level.** The review boxes are shared, so an item answered in Proficient falls due while the student works in Essentials. I recommend that Today's Review and the Cumulative Review draw only on the selected level, and that the home page say how many items are due at other levels, so nothing is forgotten silently.
6. **Large type and contrast.** The three selectors should be real buttons in a row (or a column on a phone), each at least 48 pixels high with the course's large type, the selected one shown by a filled background and a check mark as well as color, a thick focus outline that shows in both themes, `aria-pressed` on each, and arrow-key movement within a group. The present Free Practice and Guided Path buttons (`.path-btn`) are 44 pixels high with 16-pixel type and show the selected button by color alone; Step 2 should bring them up to the same standard.
7. **Code names.** `guided.js` already calls the sections `TIERS`, and the exercises use `levels` for the in-set levels. Step 2 should call the new levels something distinct in the code (`courseLevel`, stored as `store.view.level`) so that the three meanings are not mixed.
8. **The section reviews are fixed sets of A, B, and C.** Filtered to the decks of a level, a review's sets are uneven (in Essentials the Section I review keeps only its 21 questions on Sign and Symbol). They still rotate correctly; only the size of a sitting changes.

## 10. What could not be assigned cleanly

1. **The twenty sets with in-set levels.** Rule 3 of section 1 is a proposal, not something the data decides. Its results, set by set, are in the table of section 4 and in the language tables (no language set has in-set levels).
2. **The reviews.** A review spans levels; it is placed at the lowest level of its decks and filtered. The resulting Essentials reviews are small: Section I 21 items, Section II 15, Section IX 12.
3. **Analysis of Sentences** (`ix.sentences`) is a method deck with an exercise, placed in Essentials for parsing; its Level I is 12 items. Workshop and Marking, which needs the dependences of Section V, is Proficient.
4. **Spelling and punctuation in English** share one exercise (`lang.ii.en/orthography-ex`, opened from both decks); both decks are Essentials, so the set is counted once.
5. **Greek accidents** (`lang.iii-decl.grc/accidents`, 20 cards, with `fill-ex`) overlaps the Greek paradigms; both are Essentials, which makes Greek Essentials the largest in cards (81) of the non-English tracks.
6. **German word order** is Essentials and German agreement is Proficient, the reverse of the other languages; the reason is in section 2.
7. **Spanish Compared with Latin** sits on the indeclinable bar and is a comparison, not a topic of Spanish grammar; it is Mastered.
8. **The models of Section X** are read, not tested, and were placed together at Mastered; they could equally be spread (two at Proficient, the rest at Mastered).
9. **Items that are not decks or sets** (the Cumulative Review bars, Today's Review, the Recitation Tablet, the Quiz Maker, the progress report) have no level of their own; they follow the selected level (section 7).

## 11. Questions for Timothy

1. **A language selector.** There is no course-wide language choice today (section 9, problem 1). May Step 2 add one below the mode selector, with the six languages and "All languages," and have each section's bar open the chosen language's screen directly? Recommendation: yes.
2. **First visit.** Should a first visit open with no language chosen ("All languages," as the course is now) or with English? Recommendation: "All languages" in Free Practice, and on the Guided Path ask for a language before the first step, since the path includes the language's decks.
3. **In-set levels.** Should the in-set levels open one per course level (rule 3: Essentials gets Level I, so Analysis of Sentences has 12 items there), or should Essentials get Levels I and II and the rest open at Mastered? Recommendation: rule 3 as written, because Level III and IV items quote long passages of Milton, the King James Bible, Austen, and Bunyan, which belong to Mastered and above.
4. **The word for the in-set levels.** Keep "level" for Essentials to Comprehensive and call the in-set levels "Stage I," "Stage II," and so on in the student's view? Recommendation: yes.
5. **"Mastered" twice.** The level "Mastered" and the Guided state "★ Mastered" collide. Options: (a) rename the level "Advanced"; (b) rename the state "★ Secured" or "★ Confirmed"; (c) keep both. Recommendation: (a), because "Advanced" says where the level stands between Proficient and Comprehensive and leaves the existing star alone; but the brief names the level "Mastered," so this is Timothy's choice.
6. **Section I.** Is Sign and Symbol alone enough of Section I for Essentials, or should Imposition (7 cards) join it, so that Essentials teaches that words signify by imposition? Recommendation: add Imposition only if Timothy thinks the student needs it before the parts of speech.
7. **Common errors.** English Common Errors is Essentials, but barbarism and solecism in the general course and the errors decks of the other languages are Proficient. Keep that difference? Recommendation: yes; the English deck is usage that every student needs.
8. **The passages.** Keep the split of the IX reading collections by position (first 3 prose and first 2 poems at Proficient, first 8 and 5 at Mastered), or choose particular passages for Proficient? Recommendation: by position for now.
9. **Language sets on the Guided Path.** Should the chosen language's exercise sets be required for opening the next section (so that Essentials in Latin cannot be finished without the Latin), or only offered as steps that do not gate? Recommendation: required, since the purpose of a language's Essentials is an essentials grammar of that language.
10. **Placements to check.** The less obvious choices are listed with their reasons in sections 4 and 5: Prelim (Definition alone in Essentials), Quantity and Accent and Punctuation at Proficient, Feet and Meter at Mastered, Figure and Species at Proficient, Analysis of Passages at Mastered, Imitation at Comprehensive, German word order at Essentials, Spanish Compared with Latin at Mastered. Any change is one line in the assignment table and changes no file of the course.

## 12. Timothy's answers (27 Oct 2026) and what was built

1. A course-wide language selector below Free Practice / Guided Path, with the six languages and "All languages" (Free Practice only); with one language chosen, each section's bar opens that language's screen directly. **Built.**
2. A first visit opens on Essentials, Free Practice, and English; the Guided Path always has a language. **Built.**
3. Rule 3 as written: Essentials gets Stage I only, and each higher level opens one more stage. **Built.**
4. The in-set levels are called "Stage I, II, III, IV" on screen; no data field changed. **Built.**
5. The level keeps the name "Mastered"; the Guided Path star state is renamed "★ Confirmed" (with the "confirmation sitting"). **Built.**
6. Imposition stays in Proficient. 7. English Common Errors stays in Essentials. 8. The IX reading collections are split by position, each deck's passage lists on one line of `data/tiers.js`. 9. The chosen language's exercise sets are required on the Guided Path. **Built.**
10. Placements accepted, except Precepts and Interpretation (`prelim.methodice`), moved to Essentials. Problems 4–8 of section 9 accepted as recommended. **Built.**

**Correction to section 6.** Spanish prose has 14 passages, not 16: two of its question points ("The text and its spelling") are inside passages, not at their start. The passage lists in `data/tiers.js` are therefore taken from the passages the exercises name (`passageRef`), not from the question points.

**Essentials with Precepts and Interpretation**, as the course now counts it (test/course-levels-check.js; the general course plus one language):

| Language | Decks | Cards | Exercise sets and reviews | Stored items |
|---|---|---|---|---|
| English | 36 | 279 | 32 | 1,224 |
| Latin | 32 | 245 | 29 (3 generated) | 631 |
| Greek | 31 | 275 | 28 | 706 |
| Spanish | 31 | 260 | 28 | 658 |
| German | 35 | 278 | 32 | 787 |
| French | 31 | 257 | 28 | 658 |

The general course alone in Essentials is now 21 decks and 194 cards (from 20 and 188). The other levels are as in section 3, except Spanish at Proficient (67 decks, 530 cards, 1,773 items) and Mastered (96, 777, 2,531), after the passage correction.
