# Exercise sets and section reviews: plan for Sections II–XI

This is the plan for Timothy's approval before any question is written. It follows ITEM-LIST.md (rules 4–8 and 11, and the "Exercise" line of each deck). Nothing here is student-facing yet, and no question, option, or answer has been written. The 186 question-point placeholders in the decks are a separate matter and are untouched.

## What exists

- **Data files.** One file for each set and review, `data/exercises/<id>.js` (23 files), in the same form as the Section I draft `data/exercises/i.ex.sign.js`: `ARS.exercises['<id>'] = { … }`. `data/exercises/index.js` lists the files (`ARS.exerciseFiles`) and maps each deck to the set opened from its Exercise button (`ARS.deckEx`).
- **In the app.** On the course page, a section review or shared exercise button with a plan now opens a "Coming soon" screen that shows the plan and the empty slots, set by set; a deck with its own set has an "Exercise →" button that opens the same screen. Section I's set (`i.ex.sign`) is not wired, because Section I is outside this task.
- **No reviews for VIII, IX, X, or XI**, and no exercise set for XI, because ITEM-LIST.md plans none (rule 8 names seven reviews; XI "has no exercises"). See the questions at the end.

## The format of a plan file

Each file holds the plan and the stubs:

| Field | Meaning |
|---|---|
| `id`, `kind`, `section`, `title` | stable id (never reused), `exercise` or `review`, section, button title |
| `status` | `plan` until the questions are written |
| `openedFrom` | the button that opens the set (its own button, or a deck's Exercise button) |
| `covers` | the decks covered and, for exercise sets, the cards whose teaching the items draw on |
| `skill` | what the set practices |
| `types` | the item types planned (below) |
| `pool`, `sets`, `rotation` | total slots, slots per fixed set (A, B, C), and the rotation (A, B, C, A, …, never shuffled; Imitation in fixed order) |
| `balancePerSet` or `groupsPerSet`, `split` | how each set is divided among decks or kinds of item |
| `limit` | the taught-only limit (rule 4) |
| `instr` | the instruction line shown to the student (TODO) |
| `items` | the stubs |

Each stub has `id`, `set`, `deck`, usually `card` (the card it draws on), `type`, sometimes `group`, `lang` (`en` or `la`), or `trope`, and `todo: true`. When an item is written, `todo` is removed and the fields of the Section I draft are added: `prompt`, `options` (four, in a fixed order), `answer` (0-based), and `explain` (full sentences, shown after "Correct" or "Incorrect," rule 11). Passage stubs (IX.2) hold five question stubs each, tagged reading, explaining, or judging; Imitation stubs hold the passage, its selection, its copy text, and its word count from ITEM-LIST.md.

## Item types

| Type | What the student does | How it is checked |
|---|---|---|
| multiple choice (`mc`) | chooses one of four options | the fixed answer |
| multiple choice on a marked word (`mc-marked`) | the same, about a word marked in a sentence or line | the fixed answer |
| identify in the text (`identify`) | clicks the word or syllable asked for (for example, the stressed syllable) | the stored position |
| count (`count`) | types a number (for example, the number of syllables) | exact |
| divide into syllables (`divide`) | types the word with hyphens | exact, against the division taught in II.3 |
| give the form (`form`) | types a Latin or English form | exact, against the form generated from the tables (ITEM-LIST, III.6 and III.9) |
| rewrite (`transform`) | rewrites a sentence (for example, corrects a solecism) | against a short list of accepted answers |
| parse and construe (`analysis`) | parses each word and construes the sentence | against the stored analysis |
| questions on a passage (`passage-mc`) | answers five multiple-choice questions on one passage | fixed answers |
| mark the dependences (`mark`) | marks every dependence in the sentence | against the stored analysis |
| copy word for word (`copy`) | types the passage out | exact, word for word |

Only multiple choice is rendered by the present course page (in the question points). The other types need a renderer before their items can be used; the plan screen shows them already.

## The sets and reviews

| Section | Set or review | Coverage (decks) | Skill and balance | Item types | Slots |
|---|---|---|---|---|---|
| II | Syllable `[ii.ex.syllable]` | ii.syllable; ii.letter | Count the syllables of a word and divide it into syllables, in English and in Latin. In each set of 16: 8 English and 8 Latin words; in each language, 4 count and 4 divide items. | count, divide into syllables | 48: A 16 · B 16 · C 16 |
| II | Quantity, Stress, and Accent `[ii.ex.quantity]` | ii.quantity | Say whether a Latin syllable is long or short and why; place the Latin accent by the penultimate rule; mark the primary stress of an English word. In each set of 16: 5 items on Latin quantity, 5 on the Latin accent, and 6 on English stress. | multiple choice, identify in the text | 48: A 16 · B 16 · C 16 |
| II | Section Review: The Matter of Speech `[ii.review]` | ii.voice; ii.letter; ii.syllable; ii.quantity; ii.punctuation; ii.meter | Review of II.1 to II.6: voice, the letter, the syllable, quantity and accent, punctuation, and meter. Per set: voice 2, letter 3, syllable 2, quantity 3, punctuation 2, meter 3. | multiple choice, identify in the text, count | 45: A 15 · B 15 · C 15 |
| III | The Eight Parts `[iii.ex.parts]` | iii.parts | Name the part of speech of the marked word in a sentence. In each set of 20: about two thirds English (13) and one third Latin with translation (7). | multiple choice on a marked word | 60: A 20 · B 20 · C 20 |
| III | Figure and Species `[iii.ex.figure]` | iii.figure | Judge whether a word is simple or compound, and whether it is primitive or derived. In each set of 10: 5 items on figure and 5 on species. | multiple choice | 30: A 10 · B 10 · C 10 |
| III | Nouns and Adjectives `[iii.ex.nouns]` | iii.noun-1; iii.noun-2 | Identify the kind, gender, number, and case of a noun; give the degrees of comparison; produce or identify a Latin form from the declension tables. | multiple choice, give the form | 60: A 20 · B 20 · C 20 |
| III | Pronouns `[iii.ex.pronouns]` | iii.pronoun | Give the accidents of a pronoun (quality, gender, number, figure, person, case), choose the right form, and find what it refers to. | multiple choice, give the form | 30: A 10 · B 10 · C 10 |
| III | Verbs `[iii.ex.verbs]` | iii.verb-1; iii.verb-2 | Parse a verb (person, number, tense, mood, voice, conjugation); produce a Latin form from the conjugation tables; say whether a form presents the action as going on or as complete. In each set of 20: 8 items on III.8, 8 on III.9, and 4 on aspect (at least 4 per set, ITEM-LIST). | multiple choice, give the form | 60: A 20 · B 20 · C 20 |
| III | Participles `[iii.ex.participles]` | iii.participle | Identify a participle and its accidents, its agreement, and the time it signifies relative to the main verb; distinguish participle and gerund in English. | multiple choice, give the form | 30: A 10 · B 10 · C 10 |
| III | Section Review: The Word and the Declinable Parts `[iii.review-declinable]` | iii.parts; iii.reasons; iii.figure; iii.homonymy; iii.noun-1; iii.noun-2; iii.pronoun; iii.verb-1; iii.verb-2; iii.participle | Review of III.1 to III.10; the first place where contested cases (participle or gerund, an adjective used as a noun) are asked. Per set: parts 2, reasons 1, figure 1, homonymy 1, noun-1 2, noun-2 2, pronoun 1, verb-1 2, verb-2 2, participle 1. | multiple choice, multiple choice on a marked word, give the form | 45: A 15 · B 15 · C 15 |
| III | Section Review: The Indeclinable Parts `[iii.review-indeclinable]` | iii.adverb; iii.preposition; iii.conjunction; iii.interjection | Review of III.11 to III.14, with the declinable parts used only as already taught. Per set: adverb 4, preposition 4, conjunction 4, interjection 3. | multiple choice, multiple choice on a marked word | 45: A 15 · B 15 · C 15 |
| IV | Section Review: Word Formation and Etymology `[iv.review]` | iv.derivation; iv.composition; iv.etymology | Review of IV.1 to IV.3: derivation, composition, and etymology. Per set: derivation 3, composition 3, etymology 4. | multiple choice | 30: A 10 · B 10 · C 10 |
| V | Section Review: Construction `[v.review]` | v.congruity; v.agreement; v.government; v.dependence; v.order; v.phrase; v.clause; v.period; v.mood; v.figures | Review of V.1 to V.10: congruity, agreement, government, dependence, order, the phrase, the clause, the period, mood and voice in construction, and the figures of construction. Per set: congruity 1, agreement 2, government 2, dependence 1, order 2, phrase 1, clause 2, period 1, mood 2, figures 1. | multiple choice, multiple choice on a marked word, rewrite | 45: A 15 · B 15 · C 15 |
| VI | Section Review: Errors `[vi.review]` | vi.usage; vi.barbarism; vi.solecism; vi.metaplasm | Review of VI.1 to VI.4: usage and authority, the barbarism, the solecism, and the metaplasm; name the error and correct it. Per set: usage 3, barbarism 4, solecism 4, metaplasm 4. | multiple choice, rewrite | 45: A 15 · B 15 · C 15 |
| VII | Literal and Figurative `[vii.ex.literal]` | vii.literal | Say whether the marked word is used literally or figuratively, and why. A curated corpus: in each set of 16, about 10 English examples and 6 from translated Latin. | multiple choice on a marked word | 48: A 16 · B 16 · C 16 |
| VII | Figures of Words `[vii.ex.schemata]` | vii.schemata | Name the figure of words in a passage and say what it does to the arrangement of the words. In each set of 15: 6 figures of repetition, 4 of sound and ending, and 5 of arrangement and joining. | multiple choice, identify in the text | 45: A 15 · B 15 · C 15 |
| VII | Tropes `[vii.ex.tropes]` | vii.tropes | Name the trope in a passage (one of twelve) and say what word is used in place of what. A corpus of 48 items, 4 for each of the twelve tropes: each set of 16 has every trope once, and 4 tropes a second time, so that over the three sets each trope appears 4 times. | multiple choice | 48: A 16 · B 16 · C 16 |
| VII | Section Review: Figures `[vii.review]` | vii.literal; vii.schemata; vii.tropes | Review of VII.1 to VII.3: literal and figurative sense, the figures of words, and the tropes. Per set: literal 4, schemata 5, tropes 6. | multiple choice, multiple choice on a marked word | 45: A 15 · B 15 · C 15 |
| VIII | Supposition `[viii.ex.supposition]` | viii.supposition | Say what kind of supposition the marked term has in a proposition (material, simple, or personal; and, if personal, discrete, determinate, confused and distributive, or merely confused). In each set of 15: 6 items on material, simple, and personal supposition; 7 on the kinds of personal supposition; 2 on negation and the signs. | multiple choice on a marked word | 45: A 15 · B 15 · C 15 |
| IX | Analysis of Sentences `[ix.ex.sentences]` | ix.sentences | Parse every word of a sentence and construe the sentence (which word depends on which, which agree, which govern). A pool of 60 sentences (about 45 English, 15 Latin), 20 per set: 15 English and 5 Latin. | parse and construe | 60: A 20 · B 20 · C 20 |
| IX | Analysis of Passages `[ix.ex.passages]` | ix.passages | Read, explain, and judge a passage of prose or poetry: five questions on each passage. A pool of 15 passages (about 11 English, 4 Latin), 5 per set; each passage has 5 questions (reading, explaining, and judging), so each set has 25 questions and the pool 75. | questions on a passage | 15 passages × 5 questions = 75; 5 passages (25 questions) per set |
| IX | Workshop and Marking `[ix.ex.marking]` | ix.marking | Mark every dependence in a sentence whose analysis is stored; the drill compares the marks with the stored analysis. | mark the dependences | 36: A 12 · B 12 · C 12 |
| X | Imitation `[x.ex.imitation]` | x.imitation | Copy a passage of English prose word for word; the check is automatic. Ten fixed passages taken in order from 1 to 10; the one exception to the A, B, C rotation (ITEM-LIST, rule 5). | copy word for word | 10 fixed passages, in order 1–10 |

Totals: 16 exercise sets and 7 section reviews; 1,033 slots (II 141, III 360, IV 30, V 45, VI 45, VII 186, VIII 45, IX 171 counting the 60 sentences, 75 passage questions, and 36 marking sentences, X 10), matching ITEM-LIST.md's totals for these sections.

The card coverage of each stub (one card per slot, assigned in turn through the cards listed for its group) is a starting distribution, so that every card the set draws on is used; it can be changed item by item when the questions are written.

## Questions for Timothy

1. **Reviews for VIII–XI.** ITEM-LIST.md plans no section review for VIII, IX, X, or XI (IX and X are themselves exercises; XI has no exercises). Should VIII have a short review, or is the Supposition set enough?
2. **Section V.** V has only its review; its decks carry two analysis question points each instead of exercise sets (ITEM-LIST, V). Is that still the plan?
3. **Item types beyond multiple choice.** Syllable division, forms, rewriting, parsing, marking, and copying need their own renderers. Should the first written sets be limited to multiple choice, with the other types added later?
4. **Balance of the reviews.** The per-deck balance in each review is proportional to the size of the decks (for example, II: voice 2, letter 3, syllable 2, quantity 3, punctuation 2, meter 3 in each set of 15). Adjust as you prefer.
5. **IX.2 slots per set.** Each set of five passages has 25 questions; ITEM-LIST gives the pool (75) but not the sitting size in questions. Is a sitting of 25 questions right?
