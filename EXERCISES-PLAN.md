# Exercise sets and section reviews: plan for Sections I–XI

This is the plan for Timothy's approval before any question is written. It follows ITEM-LIST.md (rules 4–8 and 11, and the "Exercise" line of each deck). Nothing here is student-facing yet, and no question, option, or answer has been written. The 186 question-point placeholders in the decks are a separate matter and are untouched.

## What exists

- **Data files.** One file for each set and review, `data/exercises/<id>.js`, in the same form as the Section I draft `data/exercises/i.ex.sign.js`: `ARS.exercises['<id>'] = { … }`. With the reviews added on 17 Oct 2026 there are now 29 files: 17 exercise sets (including `i.ex.sign`) and 12 section reviews. `data/exercises/index.js` lists the files (`ARS.exerciseFiles`) and maps each deck to the set opened from its Exercise button (`ARS.deckEx`).
- **In the app.** On the course page, a section review or shared exercise button with a plan now opens a "Coming soon" screen that shows the plan and the empty slots, set by set; a deck with its own set has an "Exercise →" button that opens the same screen. Section I's set (`i.ex.sign`) is not wired, because Section I is outside this task.
- **Every section has a review** (Timothy, 17 Oct 2026, REVISION-GUIDE N.4): reviews were added for I, VIII, IX, X, and XI (`i.review`, `viii.review`, `ix.review`, `x.review`, `xi.review`), so there are twelve section reviews in all. XI still has no exercise set of its own.

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
| `pool`, `sets`, `rotation` | total slots, slots per fixed set (A, B, C), and the rotation (A, B, C, A, …; the sets are never reordered, but the options of each item are shuffled on display, see the build list; Imitation in fixed order) |
| `balancePerSet` or `groupsPerSet`, `split` | how each set is divided among decks or kinds of item |
| `limit` | the taught-only limit (rule 4) |
| `instr` | the instruction line shown to the student (TODO) |
| `items` | the stubs |

Each stub has `id`, `set`, `deck`, usually `card` (the card it draws on), `type`, sometimes `group`, `lang` (`en` or `la`), or `trope`, and `todo: true`. When an item is written, `todo` is removed and the fields of the Section I draft are added: `prompt`, `options` (four, written in a fixed order but shown shuffled on each visit, with the answer key following the option, not the position), `answer` (0-based), and `explain` (full sentences, shown after "Correct" or "Incorrect," rule 11). Passage stubs (IX.2) hold five question stubs each, tagged reading, explaining, or judging; Imitation stubs hold the passage, its selection, its copy text, and its word count from ITEM-LIST.md.

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
| I | Sign and Significant Voice `[i.ex.sign]` | i.sign; i.imposition; i.consignification; i.syncategorematic; i.functions; i.ambiguity | Natural and conventional signs, imposition, consignification, categorematic and syncategorematic words, the functions of language, and ambiguity (lexical, or modifier attachment in English). 4 items per deck in each set of 24. A sample of 12 items for set A is written (draft format). | multiple choice | 72: A 24 · B 24 · C 24 |
| I | Section Review: Sign and Significant Voice `[i.review]` | i.sign; i.imposition; i.consignification; i.syncategorematic; i.functions; i.ambiguity | Review of I.1 to I.6. Per set: sign 3, imposition 3, consignification 2, syncategorematic 2, functions 2, ambiguity 3. | multiple choice, multiple choice on a marked word | 45: A 15 · B 15 · C 15 |
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
| VIII | Section Review: Signification and Supposition `[viii.review]` | viii.supposition; viii.equivalents | Review of VIII.1 and VIII.2: supposition, and the grammatical equivalents of logical forms. Per set: supposition 5, equivalents 5. | multiple choice, multiple choice on a marked word | 30: A 10 · B 10 · C 10 |
| IX | Analysis of Sentences `[ix.ex.sentences]` | ix.sentences | Parse every word of a sentence and construe the sentence (which word depends on which, which agree, which govern). A pool of 60 sentences (about 45 English, 15 Latin), 20 per set: 15 English and 5 Latin. | parse and construe | 60: A 20 · B 20 · C 20 |
| IX | Analysis of Passages `[ix.ex.passages]` | ix.passages | Read, explain, and judge a passage of prose or poetry: five questions on each passage. A pool of 15 passages (about 11 English, 4 Latin), 5 per set; each passage has 5 questions (reading, explaining, and judging), so each set has 25 questions and the pool 75. | questions on a passage | 15 passages × 5 questions = 75; 5 passages (25 questions) per set |
| IX | Workshop and Marking `[ix.ex.marking]` | ix.marking | Mark every dependence in a sentence whose analysis is stored; the drill compares the marks with the stored analysis. | mark the dependences | 36: A 12 · B 12 · C 12 |
| IX | Section Review: Analysis `[ix.review]` | ix.sentences; ix.passages; ix.marking | Review of the method of IX: the steps of parsing and construing; reading, explaining, and judging a passage; marking dependences. Per set: sentences 4, passages 3, marking 3. | multiple choice, multiple choice on a marked word | 30: A 10 · B 10 · C 10 |
| X | Imitation `[x.ex.imitation]` | x.imitation | Copy a passage of English prose word for word; the check is automatic. Ten fixed passages taken in order from 1 to 10; the one exception to the A, B, C rotation (ITEM-LIST, rule 5). | copy word for word | 10 fixed passages, in order 1–10 |
| X | Section Review: Making `[x.review]` | x.composition; x.imitation; x.translation; x.progymnasmata | Review of X.1 to X.4. Per set: composition 4, imitation 2, translation 4, progymnasmata 5. | multiple choice, rewrite | 45: A 15 · B 15 · C 15 |
| XI | Section Review: Other Traditions and Modern Grammar `[xi.review]` | xi.traditions; xi.modern | Review of XI.1 and XI.2. Per set: traditions 8, modern 7. | multiple choice | 45: A 15 · B 15 · C 15 |

Totals (updated 17 Oct 2026): 17 exercise sets and 12 section reviews; 1,300 slots (I 117, II 141, III 360, IV 30, V 45, VI 45, VII 186, VIII 75, IX 201 counting the 60 sentences, 75 passage questions, 36 marking sentences, and the 30-item review, X 55, XI 45). This is ITEM-LIST.md's 1,105 plus the five reviews added for I, VIII, IX, X, and XI (45 + 30 + 30 + 45 + 45 = 195).

The card coverage of each stub (one card per slot, assigned in turn through the cards listed for its group) is a starting distribution, so that every card the set draws on is used; it can be changed item by item when the questions are written.

## Questions for Timothy (answered 17 Oct 2026)

Answers (REVISION-GUIDE N and Timothy's answers of 17 Oct 2026): 1, every section has a review (added for I, VIII, IX, X, XI); 3, item types are "whatever makes sense" (multiple choice for judgments, typed answers for exact forms, counts, and divisions, clicking for finding a word or syllable), and the typed-answer renderers come first in the build list below; 4, the balance of the reviews is left to Claude, proportional to the size of the decks. Questions 2 and 5 are superseded by the build list (Section V gets its own exercise set) and remain open only in detail.

1. **Reviews for VIII–XI.** ITEM-LIST.md plans no section review for VIII, IX, X, or XI (IX and X are themselves exercises; XI has no exercises). Should VIII have a short review, or is the Supposition set enough?
2. **Section V.** V has only its review; its decks carry two analysis question points each instead of exercise sets (ITEM-LIST, V). Is that still the plan?
3. **Item types beyond multiple choice.** Syllable division, forms, rewriting, parsing, marking, and copying need their own renderers. Should the first written sets be limited to multiple choice, with the other types added later?
4. **Balance of the reviews.** The per-deck balance in each review is proportional to the size of the decks (for example, II: voice 2, letter 3, syllable 2, quantity 3, punctuation 2, meter 3 in each set of 15). Adjust as you prefer.
5. **IX.2 slots per set.** Each set of five passages has 25 questions; ITEM-LIST gives the pool (75) but not the sitting size in questions. Is a sitting of 25 questions right?

## Build list (approved by Timothy, 17 Oct 2026)

Timothy approved all the recommendations of the exercise evaluation. Build them in this order. Everything runs in the browser, with no server and no API key; progress is kept in localStorage.

1. **Typed-answer renderers, first.** Before more items are written, build the renderers for the types already planned, so that the sets do not collapse into multiple choice: `count` and `form` (exact match after trimming and normalizing case, curly quotes, and macrons where the item says macrons are not tested), `divide` (exact match against the division taught in II.3, hyphens normalized), `transform` (match against a short list of accepted answers, normalized for spacing, capitals, and final punctuation), `identify` (click a word or syllable; checked against the stored position), `mark` and `analysis` (checked against the stored analysis), and `copy` (word for word). Feedback for typed answers shows the student's answer beside the correct one.
2. **Cumulative review, with spaced reminders.**
   - **Placement and look.** At the end of every Roman-numeral section (after Section I, after II, … after XI), after that section's last item (its review), the homepage shows a full-width bar about half the height of a normal deck or section tile, labeled **"Cumulative Review"**, with a second line giving its range from the beginning of the course through that section, e.g., "The Preliminary Section through Section III." (The course calls its opening part "the Preliminary section" in card text and "Preliminary" in ITEM-LIST.md; this label follows that usage. If Timothy prefers "Preliminaries through Section III," change only the label.) There is no bar after the Preliminary section itself.
   - **Content.** Each bar draws on everything from the beginning of the course through that section: question-point variants and exercise and review items from every deck in that range, mixed together (interleaved), never only one section at a time. A sitting holds about 20 items: first the student's missed items that are due (item 3), then a sample from the whole range, weighted toward the decks studied longest ago, with each section in the range represented. Items from decks the student has not completed are not used. Feedback follows rule 11 of ITEM-LIST.md.
   - **Spacing.** Every item the student answers gets a box in localStorage (a simple Leitner scheme: a wrong answer returns the item to box 1; a right answer moves it up one box; boxes 1–5 fall due after 1, 3, 7, 14, and 30 days). The homepage shows a quiet reminder at the top when items are due (for example, "12 review items are due"), and the bar of the furthest section the student has reached opens them.
   - Spec only; not yet built.
3. **Re-ask missed items at the end of a sitting.** In exercise sets, reviews, and the cumulative review, an item answered wrongly is asked once more at the end of the same sitting (in a new option order), and it is recorded as due for the cumulative review whatever the second answer.
4. **Option shuffling.** Answer options are shown in a shuffled order on each visit (Timothy: yes). The answer key is the option's index in the data, so it follows the option, not the screen position. Built for question points in course.js on 17 Oct 2026 (the order is fixed for one variant during one opening of the deck and reshuffled on the next opening); to be built the same way for exercise sets, reviews, and the cumulative review. No option may depend on its position ("both of the above," "A and C").
5. **Exercise sets for Section V (Construction) and Section VI (correction).** V, the center of syntax, gets its own set: find the subject and the verb, name each agreement and the accidents in which the words agree, say what governs what, and correct an incorrect construction (types `mark`, `mc-marked`, `transform`). VI gets a correction set: find the error in a sentence, name it (barbarism, solecism, impropriety), and write the correct form (`identify`, `mc`, `transform`). Sizes to be proposed to Timothy (for example, 45 items in three sets of 15 for each), with ids `v.ex.construction` and `vi.ex.correction`.
6. **Anchor texts carried through every section.** Three texts recur in every section's exercises with new questions each time, so that the student keeps applying new doctrine to familiar real texts: John Donne's Holy Sonnet X ("Death, be not proud"), the Gettysburg Address, and the opening of the *Aeneid* (I.1–7, with a translation close enough to align phrase by phrase). For example: in I, the signs and the kinds of sentence in them; in II, syllables, stress, and meter; in III, the parts of speech of marked words; in V, agreement and dependence; in VI and VII, licenses, figures, and tropes; in IX, full analysis. Not the Our Father. Translations and texts follow the usual rules (real published translations; the Donne text from a standard edition).
7. **"Why" prompts with model answers.** Some skill items are followed by a short "Why?" prompt: the student writes a sentence, then reveals a model answer and checks himself (no grading), as with the Recitation Tablet. Use them where the reason is the point (why a form is a solecism, why a word is syncategorematic).
8. **Easy-to-hard ordering.** Within each fixed set, order the items from easier to harder (simple English examples, then Latin, then contested or mixed cases), and let the reviews reach the contested cases.
9. **Recitation reminders.** A few days (about three) after a student has recited a deck or a section on the Recitation Tablet, the homepage reminds him to recite it again; the reminder repeats at longer intervals (for example, a week, then a month), using the same localStorage record.

**Evening out answer lengths.** Avoid giving the correct answer away by its length, but never at the cost of clarity. Prefer shortening the correct option or developing a distractor naturally into a real alternative; never pad wrong options, which makes questions confusing (STYLE-GUIDE-CARDS.md rule 28).
