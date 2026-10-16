# Ars Grammatica (v2): Item List

This is a plan for review. It contains no content and no code. It covers every division on the mockup (`app.js`, `ACTS`), revised after the first review. It was checked against the live app (`gcrastinus/ars-grammatica` at `f401c04`) and against Ars Rhetorica (`gcrastinus/ars-rhetorica`, `main`).

The changes from the mockup are these:

- "The Reasons for the Parts" moves from VIII to III.2, right after the eight parts in general (III.1).
- "Chreia and Maxim" becomes "Classical Composition Exercises" (all fourteen progymnasmata).
- "Workshop and Marking" is kept as the marking drill on stored sentences, whose answers can be checked automatically; the Free Workshop is dropped.
- Seven section reviews and three shared exercise buttons are added (see below).
- Section III is retitled "The Parts of Speech" (*De partibus orationis*), because no deck treats analogy and anomaly; the criteria of correctness, including analogy, are treated in P.4.
- Section I is named "Sign and Significant Voice," the same name as its exercise set.
- Greek, French, and German have no decks of their own. They appear only as examples where they show something English and Latin do not.

---

## Rules that apply to every item

**1. Stable ids and optional language layers.** Every division has a stable id (given in brackets after each title, e.g. `[iii.noun-2]`). The id never changes when a title or a position changes, and progress is stored under it. Each general deck may later receive optional child layers attached under it (for example, "The Noun in English" and "The Noun in Latin" under `[iii.noun-2]`), each with its own id of the form `parent-id/layer` (`iii.noun-2/la`). The data should allow this without restructuring. Nothing is built for layers now.

**2. Question points.** Programmed-course questions appear at some cards, not on every card, and make the student connect and use what was learned. Every question point has exactly three variants (A, B, C).
- A correct answer shows "Correct" and the explanation. A wrong answer shows "Incorrect," the right answer, and the explanation, then the next variant. After the third variant it cycles back through the same three until one is answered correctly.
- Each opening of the deck starts on the next variant (A, then B, then C, then A again), so review shows the same cards with different questions.
- Where the live app has exercises that do not survive as exercises (see rule 6), their best items are rewritten as variants at the question points of the matching deck.

**3. Examples.** Each point has three examples, mixing English and Latin, with Greek, French, or German only where they show something distinctive. As a supplement to this norm, a fourth example is added wherever it is doubtful that three make the point clear. Every Latin, Greek, French, or German example is translated. The panel counts below were re-estimated for this rule.

**4. Exercises test only what has been taught.** Every exercise set and every section review uses only what the decks before it have taught. The limits for each set are given under the set. Question points obey the same rule.

**5. Rotation of exercise sets.** Every exercise set holds three sittings' worth of items, divided into fixed sets A, B, and C, which are given in that order on successive visits (A, B, C, A, …) and never shuffled. Corpora (Literal and Figurative, Tropes, the analysis of sentences and of passages, the marking drill) rotate in the same way.

**The one exception is Imitation (X.2):** it has ten fixed passages, taken in order from 1 to 10, and it is not divided into sets A, B, and C.

**6. Exercise sets.** Separate exercise sets exist only for:
- Sign and Significant Voice;
- Syllable;
- Quantity, Stress, and Accent;
- the Eight Parts;
- Figure and Species;
- Nouns and Adjectives;
- Pronouns;
- Verbs;
- Participles;
- Figures of Words;
- Literal and Figurative;
- Tropes;
- Supposition;
- the Analysis of Sentences and Passages;
- the marking drill (IX.3);
- Imitation;
- the seven section reviews.

No other live exercise survives as an exercise.

**7. Shared exercise buttons.** An exercise set that covers several decks has its own button, placed right after the last deck it covers:
- Sign and Significant Voice comes after I.6 and covers I.1–I.6.
- Nouns and Adjectives comes after III.6 (Noun II).
- Verbs comes after III.9 (Verb II).

The decks these sets cover have no Exercise button of their own. A set that covers one deck is opened from that deck's Exercise button.

**8. Section reviews.** A review exercise follows each major group:
- the Matter of Speech;
- the Word and the Declinable Parts;
- the Indeclinable Parts;
- Construction;
- Word Formation and Etymology;
- Faults;
- Figures.

Each review has 45 new questions, not reused from the question points, in three fixed sets of 15. The exception is the review of Word Formation and Etymology, which is scaled to the size of IV (three decks, against four to ten in the other groups): it has 30 new questions in three fixed sets of 10. Successive visits give set A, then B, then C, then A again, never shuffled.

**9. Translations.**
- Every translation shown to the student is a real published one, with the translator named.
- Some sources have no complete published English translation. For these, we either quote the Latin (or other original) with an own literal translation labeled "trans. T. Kearns," as the course's `CLAUDE.md` requires, or we paraphrase. We never present an own translation as a published one. The list is under "Sources without a complete published English translation" below.
- In IX, Latin is shown only with translations close enough to align phrase by phrase, such as the Loeb translations.

**10. Wording.** All student-facing text follows the writing-style rules in this repository's `CLAUDE.md` (standard textbook terms, no calques, plain declarative sentences, "Correct" and "Incorrect" as feedback, American spelling, real translations only).

**11. Feedback in exercise sets and section reviews.** A correct answer shows "Correct" and the explanation. A wrong answer shows "Incorrect," the right answer, and the explanation, and then the set moves on to the next item. The item is not repeated in that sitting. (This differs from the question points in the decks, rule 2, which cycle through their variants until one is answered correctly.)

## How to read the entries

Each entry gives:
- the title, with the mockup's Latin where it has one, and the stable id;
- a one-line description;
- **Panels**: the estimated number of study cards;
- **QP**: the number of question points, each with three variants;
- **Exercise**: "no", or the set with its pool and sitting size;
- **Sources**;
- **Reuse**: material in the live app (keys of its `DECKS` and `EX` objects) that can be cut down or rewritten.

Notes marked *Planning note* are written for Timothy (some in the first person) and are not student-facing text.

---

## Preliminary · *Quid sit grammatica* · What Grammar Is

**P.1 The Definition of Grammar** `[prelim.definition]`. What grammar is, what it treats, and why it is the first art of the trivium. The mention of typology has moved to V.5.
- Panels 10 · QP 3 · Exercise: no
- Sources: Quintilian I.4 (trans. H. E. Butler, Loeb); Isidore, *Etymologiae* I.5 (trans. Stephen A. Barney and others, 2006); Diomedes, *Ars* II (rule 9); Vossius, *Aristarchus, sive de arte grammatica* (1635) I (rule 9)
- Reuse: `prelim` (15 panels): the name of the art, its definition, matter, and end

**P.2 The Offices of the Grammarian** `[prelim.offices]`. *Lectio*, *enarratio*, *emendatio*, and *iudicium*, that is, reading, explaining, correcting, and judging.
- Panels 8 · QP 2 · Exercise: no
- Sources: Diomedes, citing Varro (rule 9); Dionysius Thrax, *Technē* 1 (trans. Alan Kemp, 1986); Quintilian I.4 (Butler)
- Reuse: `prelim`, the panels on the grammarian's work

**P.3 *Methodice* and *Historice*** `[prelim.methodice]`. The two parts of grammar: the precepts of the art and the reading of the authors.
- Panels 6 · QP 2 · Exercise: no
- Sources: Quintilian I.9.1 (Butler); Vossius, *Aristarchus* I (rule 9)
- Reuse: none

**P.4 The Criteria of Correctness** `[prelim.criteria]`. This deck introduces the four tests of correct speech (reason, antiquity, authority, and custom), which VI.1 later applies.
- Panels 8 · QP 2 · Exercise: no
- Sources: Quintilian I.6.1–3 (Butler); Varro, *De lingua Latina* IX (trans. R. G. Kent, Loeb)
- Reuse: `prelim`, the panel on usage

---

## I · *De signo et voce significativa* · Sign and Significant Voice

**I.1 Sign and Symbol** `[i.sign]`. Natural and given signs, and the spoken word as a symbol of what is in the mind.
- Panels 10 · QP 3 · Exercise: in the shared Sign and Significant Voice set
- Sources: Aristotle, *De interpretatione* 1, 16a3–8 (trans. E. M. Edghill); Augustine, *De doctrina christiana* II.1–3 (trans. J. F. Shaw); Boethius, *In Peri hermeneias* (trans. Norman Kretzmann, 1998, for ch. 9 in both editions; trans. Andrew Smith, 2010–11, for books 1–6 of the second edition; rule 9 only for passages outside these); John of St. Thomas, *Tractatus de signis* (trans. John Deely)
- Reuse: `traditions`, the panel on John of St. Thomas; `prelim`, the panel on voice and concept

**I.2 Imposition** `[i.imposition]`. How a sound comes to signify by the will of those who first used it, and first and second imposition.
- Panels 8 · QP 2 · Exercise: in the shared Sign and Significant Voice set
- Sources: Aristotle, *De interpretatione* 2 (Edghill); Boethius, *In Categorias* (rule 9); St. Thomas, *In Peri hermeneias* I (Oesterle)
- Reuse: the passages on imposition in `modes` and `prelim`

**I.3 Signification and Consignification** `[i.consignification]`. What a word means, and what it signifies along with that meaning, such as the time the verb signifies.
- Panels 9 · QP 3 · Exercise: in the shared Sign and Significant Voice set
- Sources: Aristotle, *De interpretatione* 3, 16b6 (Edghill); St. Thomas, *In Peri hermeneias* I (Oesterle); Priscian II (rule 9)
- Reuse: `modes`, the panel on why the verb has time

**I.4 Categorematic and Syncategorematic Words** `[i.syncategorematic]`. Words that signify of themselves, and words such as "every" and "not" that signify only with other words.
- Panels 8 · QP 2 · Exercise: in the shared Sign and Significant Voice set
- Sources: Priscian II.15 (rule 9); William of Sherwood, *Syncategoremata* (trans. Norman Kretzmann)
- Reuse: little; `suppos` mentions the syncategoremata

**I.5 The Functions of Language** `[i.functions]`. To state, to ask, to command, to wish, and to express feeling, and why only the statement is true or false.
- Panels 8 · QP 2 · Exercise: in the shared Sign and Significant Voice set
- Sources: Aristotle, *De interpretatione* 4, 17a1–7 (Edghill); St. Thomas, *In Peri hermeneias* I (Oesterle); for comparison, Bühler, *Sprachtheorie* (1934), and Jakobson, "Linguistics and Poetics" (1960)
- Reuse: none

**I.6 Ambiguity** `[i.ambiguity]`. How one word or one construction can have two senses, and how the grammarian distinguishes them.
- The deck stays on the grammatical side: it asks where the double sense lies, in a word (equivocation) or in the construction (amphiboly). It does not treat the fallacies as errors of reasoning, which belong to Ars Syllogistica; one panel names the boundary and points there.
- Panels 9 · QP 3 · Exercise: in the shared Sign and Significant Voice set
- Sources: Aristotle, *Sophistical Refutations* 4 (trans. W. A. Pickard-Cambridge), only for the distinction between word and construction; Quintilian VII.9 (Butler); Augustine, *De doctrina christiana* III.2–4 (Shaw)
- Reuse: `figura` (3), rewritten so that it does not teach the fallacy

**Exercise button: Sign and Significant Voice** `[i.ex.sign]` (after I.6). This is the exercise set for the whole section, I.1–I.6.
- Pool 72 items, 12 per deck: three fixed sets of 24, each with 4 items per deck.
- The ambiguity items (12) use ambiguous words, in English and in Latin with translations, and modifier attachment in English. The student identifies the two senses and says whether the ambiguity lies in a word or in the construction.
- Taught-only limit: nothing in the set tests material after I.6. The ambiguity items are of two kinds only: lexical ambiguity (one word with two senses, such as English "bank" or Latin *acies*, "battle line" or "sharp edge") and modifier attachment (a modifier that can belong to either of two words, as in "the man saw the boy with the telescope"). Latin items are lexical only, with both senses given in translation, so that no item depends on case or on anything else taught in III or later.
- Reuse: the best items of `EX.vox` and `EX.modes` that concern signification

---

## II · *De materia orationis* · The Matter of Speech

**II.1 Voice (*vox*)** `[ii.voice]`. Voice as air struck and heard, and articulate and inarticulate voice.
- Panels 8 · QP 2 · Exercise: no
- Sources: Donatus, *Ars maior* I.1 (rule 9); Priscian I.1–2 (rule 9); Aristotle, *De anima* II.8 (trans. J. A. Smith)
- Reuse: `vox` (5), nearly whole; `EX.vox` becomes question-point variants

**II.2 The Letter and Orthography** `[ii.letter]`. The letter and its accidents (name, figure, and power), and the relation of spelling to sound.
- Two panels set out how Latin is spelled and pronounced in the restored pronunciation: the vowels long and short, the diphthongs, c and g always hard, v as English w, i and u as consonants, and the marking of long vowels (macrons) in this course. With these panels, the Latin items in II.3 and II.4 are fair to a beginner.
- Panels 12 · QP 4 (one of them on Latin pronunciation) · Exercise: no
- Sources: Donatus, *Ars maior* I.2 (rule 9); Priscian, *Institutiones* I, the chapters on the letter that follow the opening chapter on voice (rule 9); Quintilian I.4 and I.7 (Butler); W. Sidney Allen, *Vox Latina* (2nd ed., 1978)
- Reuse: `letter` (6); the pronunciation notes in `syllable`

**II.3 The Syllable** `[ii.syllable]`. What a syllable is, and how words are divided into syllables in English and in Latin.
- Panels 10 · QP 3
- Exercise: **Syllable**, pool 48 (24 English, 24 Latin), three fixed sets of 16 (8 English, 8 Latin). The tasks are to count the syllables and to divide the word.
- Taught-only limit: the Latin items use only the spelling and pronunciation in II.2 and the rules of division in II.3.
- Sources: Donatus, *Ars maior* I.3 (rule 9); Priscian, *Institutiones* II, the opening chapters on the syllable (rule 9); Allen, *Vox Latina*; J. C. Wells, *Longman Pronunciation Dictionary*, for English division
- Reuse: `ensyl` (6), `syllable` (6); items from `EX.ensyl` and `EX.syllable`

**II.4 Quantity and Accent** `[ii.quantity]`. Long and short syllables, by nature and by position; the acute, grave, and circumflex; English stress, which is not quantity.
- Panels 13 · QP 4
- Exercise: **Quantity, Stress, and Accent**, pool 48, three fixed sets of 16. The items cover Latin quantity by position, the Latin penultimate rule, and English primary stress with the suffixes that move it.
- Taught-only limit: long vowels are marked with macrons in every Latin item, since natural quantity cannot be seen from the spelling and the student is not expected to know it.
- Sources: Donatus, *Ars maior* I.5 (rule 9); Quintilian I.5.22–31 (Butler); Allen, *Vox Latina*; Smyth, *Greek Grammar*, the chapter on accent, only for one example of Greek pitch accent
- Reuse: `syllable`, `ensyl`, and examples from `grcsyl`, `desyl`, and `frsyl` (not as decks); `EX.syllable`, `EX.ensyl`

**II.5 Punctuation (*posituræ*)** `[ii.punctuation]`. The old marks of pause (*distinctio*, *subdistinctio*, and *media distinctio*) beside the modern ones.
- Panels 7 · QP 2 · Exercise: no
- Sources: Donatus, *Ars maior* I.6 (rule 9); Isidore, *Etymologiae* I.20 (Barney); M. B. Parkes, *Pause and Effect* (1992)
- Reuse: the `distinctio` panels in `period`

**II.6 Feet and Meter** `[ii.meter]`. Feet and verse, with lines of English and Latin, and of Greek, German, or French where they show stress, quantity, or syllable count distinctively.
- Panels 13 · QP 3 · Exercise: no
- Sources: Diomedes, *Ars* III (rule 9); Bede, *De arte metrica* (trans. Calvin B. Kendall, 1991); translations named per line
- Reuse: `meter` (12), `enmeter` (6), and single lines from `grcmeter`, `demeter`, and `frmeter` (not as decks)

**Section review: The Matter of Speech** `[ii.review]` (after II.6). 45 new questions on II.1–II.6, in three fixed sets of 15.

---

## III · *De partibus orationis* · The Parts of Speech

*Planning note:* the mockup titles this section "Analogy and Anomaly" (*De analogia et anomalia*), but no deck treats that quarrel, so the section is retitled. Analogy appears in P.4 as one of the criteria of correctness (reason).

*The word in general*

**III.1 The Word (*dictio*) and the Eight Parts** `[iii.parts]`. The least part of a constructed sentence, and Donatus's eight parts, each decided by how the word is used; the Greek eight with the article beside them.
- Panels 13 · QP 4
- Exercise: **The Eight Parts**, pool 60, three fixed sets of 20 (about two thirds English, one third Latin with translation). The task is to name the part of speech of the marked word.
- Taught-only limit: only clear and typical uses that the definitions in III.1 decide. Contested cases (*that* as pronoun or conjunction, *running* as participle or gerund, an adjective used as a noun) are left to the section reviews after the parts have been taught in detail.
- Sources: Donatus, *Ars minor* (trans. Wayland Johnson Chase, 1926); Priscian II.14–21 (rule 9); Dionysius Thrax, *Technē* 11 (trans. Alan Kemp, 1986)
- Reuse: `pos` (12), `enpos` (9), `latpos` (3), and the article panels of `poscompare`; `EX.pos`, `EX.latpos`

**III.2 The Reasons for the Parts** `[iii.reasons]` (moved here from VIII). The deck comes before the individual parts are taught.
- It explains why there are eight parts and how they differ by their mode of signifying (the noun signifies by the mode of a stable thing, the verb by the mode of becoming, and so on), with the ordering of the mode of being, the mode of understanding, and the mode of signifying.
- It does not depend on the accidents (case, tense, and the rest). The modistic accounts of particular accidents move to short closing panels of the noun, verb, and participle decks.
- The objection from the chimaera, which concerns the mode of the noun, stays here. The objection from grammatical gender moves to III.6.
- Panels 11 · QP 4 · Exercise: no
- Sources: Thomas of Erfurt, *Grammatica speculativa* (trans. G. L. Bursill-Hall, 1972); Boethius of Dacia, *Modi significandi* (rule 9); Priscian, *Institutiones* II, the chapters on the properties (*proprietates*) of each part (rule 9); St. Thomas, *In Peri hermeneias* I (trans. Jean T. Oesterle, 1962)
- Reuse: `modes` (9) except the panels on accidents; `objections`, the chimaera panel; items of `EX.modes` on the parts become question-point variants

**III.3 Figure and Species** `[iii.figure]`. Simple and compound (Donatus's examples are *potens*, "powerful," which is simple, and *impotens*, "powerless," which is compound), and primitive and derived. IV.2 takes up composition again and refers back here.
- Panels 8 · QP 2
- Exercise: **Figure and Species**, pool 30, three fixed sets of 10.
- Taught-only limit: the student only judges whether a word is simple or compound and primitive or derived. The part of speech is given or is one decided by III.1, and every Latin word comes with its parts and their meanings (*in-imīcus*, "not" + "friend"). No item asks about case, tense, or any other accident.
- Sources: Donatus, *Ars minor*, on the figure of the noun (Chase), and *Ars maior* II (rule 9); Priscian IV–V (rule 9)
- Reuse: none

**III.4 Homonymy and Synonymy** `[iii.homonymy]`. One word with many meanings (*acies*), and many words with one meaning (*ensis*, *gladius*). One panel points back to I.6 Ambiguity.
- Panels 7 · QP 2 · Exercise: no
- Sources: Donatus, *Ars maior* II (rule 9); Aristotle, *Categories* 1 (trans. E. M. Edghill), where "homonymous" and "synonymous" are said of things, not words
- Reuse: none

*The declinable parts*

**III.5 The Noun I: Kinds, Quality, and Comparison** `[iii.noun-1]`. Proper and common nouns, the adjective under the noun, and the degrees of comparison.
- Panels 10 · QP 3 · Exercise: in the shared Nouns and Adjectives set
- Sources: Donatus, *Ars minor* (Chase) and *Ars maior* II (rule 9); Priscian II–III (rule 9)
- Reuse: `pos`, the noun and adjective panels; `enacc`, comparison

**III.6 The Noun II: Gender, Number, and Case** `[iii.noun-2]`. The accidents that make declension, with the cases set beside English word order and prepositions. Two closing panels give the modistic account of the noun's accidents and the objection from grammatical gender.
- Panels 14 · QP 4 · Exercise: in the shared Nouns and Adjectives set
- Sources: Priscian V–VII (rule 9); Allen and Greenough, *New Latin Grammar*; Thomas of Erfurt (Bursill-Hall) for the closing panels
- Reuse: `latnoun` (6), `casework` (8), `enacc`; `objections`, the gender panel; `EX.cases` becomes question-point variants

**Exercise button: Nouns and Adjectives** `[iii.ex.nouns]` (after III.6). This set covers III.5 and III.6.
- Pool 60, three fixed sets of 20. Latin forms are generated from the declension tables and checked exactly.
- Taught-only limit: only the declensions shown in III.6. Sentences use verbs only as glossed words, so that no item depends on the verb.
- Reuse: `EX.latnoun`, `EX.produce` (noun forms)

**III.7 The Pronoun** `[iii.pronoun]`. The pronoun and its accidents: quality, gender, number, figure, person, and case.
- Panels 10 · QP 3
- Exercise: **Pronouns**, pool 30, three fixed sets of 10.
- Taught-only limit: the pronoun's accidents, with noun accidents as already taught; no verb forms beyond glossed words.
- Sources: Donatus, *Ars minor* (Chase); Priscian XII–XIII (rule 9)
- Reuse: `enacc`, the pronoun panels

**III.8 The Verb I: Quality, Mood, and Voice** `[iii.verb-1]`. The forms and moods of the verb, and active, passive, neuter, and deponent (*genus*).
- Panels 12 · QP 3 · Exercise: in the shared Verbs set
- Sources: Donatus, *Ars minor* (Chase) and *Ars maior* II (rule 9); Priscian VIII (rule 9)
- Reuse: `latverb` (6), `latvoice` (6)

**III.9 The Verb II: Tense, Person, Number, and Conjugation** `[iii.verb-2]`. How the verb marks time, aspect, and person, and how verbs are conjugated.
- It has two panels on aspect: complete and incomplete action, the Latin perfect against the imperfect, and the English progressive and perfect, with Greek where it shows aspect most clearly. Two closing panels give the modistic account of the verb's accidents.
- Panels 15 · QP 4 · Exercise: in the shared Verbs set
- Sources: Priscian VIII–X (rule 9); Varro, *De lingua Latina* IX–X on *infectum* and *perfectum* (Kent, Loeb); Smyth, *Greek Grammar*, on aspect; Thomas of Erfurt (Bursill-Hall)
- Reuse: `latverb`, `enacc` (tense and aspect), `casework`; `modes`, the panel on why the verb has time

**Exercise button: Verbs** `[iii.ex.verbs]` (after III.9). This set covers III.8 and III.9.
- Pool 60, three fixed sets of 20, each set with at least 4 items on aspect. Latin forms are generated from the conjugation tables.
- Taught-only limit: the conjugations and tenses shown in III.8 and III.9; no participles.
- Reuse: `EX.latverb`, `EX.produce` (verb forms)

**III.10 The Participle** `[iii.participle]`. The part that shares in the noun and the verb, and its accidents. One closing panel gives the modistic account of why the participle has the accidents of both.
- Panels 9 · QP 2
- Exercise: **Participles**, pool 30, three fixed sets of 10.
- Taught-only limit: everything through III.10.
- Sources: Donatus, *Ars minor* (Chase); Priscian XI (rule 9); Thomas of Erfurt (Bursill-Hall)
- Reuse: `latvoice`, the participle panels

**Section review: The Word and the Declinable Parts** `[iii.review-declinable]` (after III.10). 45 new questions on III.1–III.10, in three fixed sets of 15. This is the first place where contested cases (participle or gerund, an adjective used as a noun) are asked.

*The indeclinable parts*

**III.11 The Adverb** `[iii.adverb]`. The adverb and its accidents: signification, comparison, and figure.
- Panels 7 · QP 2 · Exercise: no · Sources: Donatus (Chase); Priscian XV (rule 9) · Reuse: `pos`

**III.12 The Preposition** `[iii.preposition]`. The preposition and its one accident, case, and its use in composition.
- Panels 7 · QP 2 · Exercise: no · Sources: Donatus (Chase); Priscian XIV (rule 9) · Reuse: `govern` (4)

**III.13 The Conjunction** `[iii.conjunction]`. The conjunction and its accidents: power, figure, and order.
- Panels 7 · QP 2 · Exercise: no · Sources: Donatus (Chase); Priscian XVI (rule 9) · Reuse: `pos`

**III.14 The Interjection** `[iii.interjection]`. The part that signifies a feeling of the mind ("alas," *heu*, *οἴμοι*, *ach*, *hélas*).
- Panels 5 · QP 1 · Exercise: no · Sources: Donatus (Chase); Priscian XV (rule 9) · Reuse: `pos`

**Section review: The Indeclinable Parts** `[iii.review-indeclinable]` (after III.14). 45 new questions on III.11–III.14, in three fixed sets of 15, with the declinable parts used only as already taught.

---

## IV · *De etymologia* · Word Formation and Etymology

**IV.1 Derivation** `[iv.derivation]`. How new words are made from old ones by endings and changes of form.
- Panels 8 · QP 2 · Exercise: no
- Sources: Priscian IV (rule 9); Vossius, *Aristarchus* IV (rule 9); Hans Marchand, *The Categories and Types of Present-Day English Word-Formation* (1960)
- Reuse: none

**IV.2 Composition** `[iv.composition]`. How words are joined to make compounds, in English and Latin, with German where its compounds show the pattern most clearly. The first panel refers back to III.3, where composition was first named as the accident "figure."
- Panels 7 · QP 2 · Exercise: no
- Sources: Priscian V (rule 9); Vossius IV (rule 9); Duden, for German compounds
- Reuse: none

**IV.3 Etymology** `[iv.etymology]`. The origin of words, ancient and comparative, and the cautions it requires.
- Panels 10 · QP 3 · Exercise: no
- Sources: Plato, *Cratylus* (trans. Benjamin Jowett); Varro, *De lingua Latina* V–VII (Kent, Loeb); Isidore, *Etymologiae* I.29 (Barney); Vossius, *Etymologicon linguae Latinae* (1662) (rule 9); the *Oxford English Dictionary*
- Reuse: none

**Section review: Word Formation and Etymology** `[iv.review]` (after IV.3). 30 new questions on IV.1–IV.3, in three fixed sets of 10 (scaled to the three decks of IV; see rule 8).

---

## V · *De constructione* · Construction

The mockup's "Analysis" buttons in this section are gone. In their place, each deck has two extra question points that are short analysis questions on a sentence, limited to what the deck and earlier decks have taught. Full analysis lives in IX.

**V.1 Congruity** `[v.congruity]`. A sentence well formed and complete, as distinct from a sentence that is true.
- Panels 9 · QP 5 (2 of them analysis) · Exercise: no
- Sources: Priscian XVII, the opening chapters on construction (rule 9); Thomas of Erfurt on congruity and completeness (Bursill-Hall)
- Reuse: `cong` (4), `congtruth` (3), `oratio` (5); `EX.cong` and `EX.congtruth` become question-point variants

**V.2 Agreement (*concordantia*)** `[v.agreement]`. How words agree in gender, number, case, and person.
- Panels 8 · QP 5 (2 of them analysis) · Exercise: no
- Sources: Priscian XVII (rule 9); Allen and Greenough
- Reuse: `agree` (3), `enform` (8); `EX.agree` becomes variants

**V.3 Government (*regimen*)** `[v.government]`. How a verb, a preposition, or a noun requires a case.
- Panels 8 · QP 5 (2 of them analysis) · Exercise: no
- Sources: Priscian XVIII (rule 9); Peter Helias, *Summa super Priscianum* (rule 9)
- Reuse: `govern` (4); `EX.govern` becomes variants

**V.4 Dependence** `[v.dependence]`. The dependent and the term on which it depends (*dependens* and *terminans*).
- Panels 9 · QP 5 (2 of them analysis) · Exercise: no
- Sources: Thomas of Erfurt (Bursill-Hall); Lucien Tesnière, *Éléments de syntaxe structurale* (1959; trans. Timothy Osborne and Sylvain Kahane, 2015), for the modern counterpart
- Reuse: `workshop` (4), `markup` (3); `EX.workshop` becomes variants

**V.5 Order (*ordo*)** `[v.order]`. Natural and artificial order, and what word order does in English and in Latin. Two panels give the early mention of typology here: languages are classed by their basic order of subject, verb, and object, and English (fixed order) and Latin (order freed by the endings) stand at two points of that classification. The panels point ahead to XI.2.
- Panels 11 · QP 6 (2 analysis, 1 on typology) · Exercise: no
- Sources: Quintilian IX.4.23–32 (Butler); Priscian XVII (rule 9); Joseph Greenberg, "Some Universals of Grammar with Particular Reference to the Order of Meaningful Elements" (1963)
- Reuse: one or two panels from `typo`; single examples from `grcorder`, `deorder`, and `frorder` (not as decks)

**V.6 The Phrase** `[v.phrase]`. Groups of words that act as one part of speech.
- Panels 8 · QP 4 (2 of them analysis) · Exercise: no · Sources: Reed and Kellogg, *Higher Lessons in English* (1877) · Reuse: `enphr` (6)

**V.7 The Clause** `[v.clause]`. Subject and predicate, and independent and dependent clauses.
- Panels 10 · QP 5 (2 of them analysis) · Exercise: no
- Sources: Priscian XVII–XVIII (rule 9); Reed and Kellogg; Allen and Greenough
- Reuse: `ensent` (7), `encl` (5), `clauses` (6), `endiag` (5); `EX.clauses`, `EX.latclause` become variants

**V.8 The Period** `[v.period]`. The rounded sentence of many members.
- Panels 9 · QP 5 (2 of them analysis) · Exercise: no
- Sources: Aristotle, *Rhetoric* III.9 (trans. W. Rhys Roberts); Demetrius, *On Style* 1–35 (trans. W. Rhys Roberts); Quintilian IX.4 (Butler)
- Reuse: `period` (4); `EX.period` and `EX.livyperiod` become variants
- Overlap with Ars Rhetorica: its Style act treats the period. This deck keeps to how the members are built and leaves their effect on the hearer to rhetoric.

**V.9 Mood and Voice in Construction** `[v.mood]`. The passive with its agent, the infinitive, the participle, and the subjunctive in clauses.
- Panels 10 · QP 5 (2 of them analysis) · Exercise: no
- Sources: Priscian XVIII (rule 9); Allen and Greenough
- Reuse: `latvoice` (6), `latsubj` (5); `EX.latvoice`, `EX.latsubj` become variants

**V.10 Figures of Construction** `[v.figures]`. Ellipsis, zeugma, syllepsis, and the other departures from regular construction. One panel notes that Donatus counts zeugma and syllepsis among the figures of words and refers ahead to VII.2.
- Panels 9 · QP 5 (2 of them analysis) · Exercise: no
- Sources: Donatus, *Ars maior* III.5 (rule 9); Priscian XVII (rule 9); Thomas Linacre, *De emendata structura Latini sermonis* (1524), to be checked for its treatment of the figures (rule 9)
- Reuse: `figures` (8), `latfigs`

**Section review: Construction** `[v.review]` (after V.10). 45 new questions on V.1–V.10, in three fixed sets of 15.

---

## VI · *De vitiis* · Correctness and Faults

**VI.1 Usage and Authority** `[vi.usage]`. This deck applies the four criteria introduced in P.4 to questions of usage and authority: custom, the authors, and reason as judges of what is correct. Its first panel refers back to P.4 and does not teach the criteria again.
- Panels 7 · QP 2 · Exercise: no
- Sources: Quintilian I.6 (Butler); Horace, *Ars poetica* 70–72 (trans. H. Rushton Fairclough, Loeb)
- Reuse: no live-app material. The criteria themselves are taught in P.4, and this deck cites that deck instead of repeating it.

**VI.2 Barbarism** `[vi.barbarism]`. A fault in a single word.
- Panels 7 · QP 2 · Exercise: no · Sources: Donatus, *Ars maior* III.1 (rule 9); Quintilian I.5 (Butler) · Reuse: `vices` (3), `latfaults`; `EX.vices`, `EX.latfaults` become variants

**VI.3 Solecism** `[vi.solecism]`. A fault in the arrangement of words.
- Panels 8 · QP 2 · Exercise: no · Sources: Donatus, *Ars maior* III.2 (rule 9); Quintilian I.5 · Reuse: `vices`, `latfaults`, `enfault` (5); `EX.enfault` becomes variants

**VI.4 Metaplasm** `[vi.metaplasm]`. A change in a word allowed for meter or ornament ("o'er," *e'en*).
- Panels 8 · QP 2 · Exercise: no · Sources: Donatus, *Ars maior* III.4 (rule 9) · Reuse: `figures`, `latfaults`

**Section review: Faults** `[vi.review]` (after VI.4). 45 new questions on VI.1–VI.4, in three fixed sets of 15.

---

## VII · *De schematibus et tropis* · Figures and Tropes

**VII.1 Literal and Figurative Sense** `[vii.literal]`. What a word says properly, and what it says by a figure.
- Panels 10 · QP 3
- Exercise: **Literal and Figurative**, a curated corpus of 48 examples from English and translated Latin, in three fixed sets of 16. The question is whether the marked word is used literally or figuratively, and why.
- Taught-only limit: no item asks for the name of a trope, since the tropes come in VII.3.
- Sources: Augustine, *De doctrina christiana* III.10–29 (Shaw); St. Thomas, *Summa theologiae* I, q. 1, a. 10 (trans. Fathers of the English Dominican Province); Quintilian VIII.6, the opening sections (Butler)
- Reuse: `service` (7), the panel on literal and figurative sense

**VII.2 Figures of Words (*schemata lexeos*)** `[vii.schemata]`. Repetition, omission, and arrangement used for effect. One panel refers back to V.10 for zeugma and syllepsis.
- Panels 13 · QP 3
- Exercise: **Figures of Words**, pool 45, three fixed sets of 15.
- Taught-only limit: only the figures named in VII.2.
- Sources: Donatus, *Ars maior* III.5 (rule 9); Quintilian IX.3 (Butler); Servius on Virgil (rule 9)
- Reuse: `figures` (8), `latfigs`; items from `EX.figures`, `EX.latfigs`
- Overlap with Ars Rhetorica: its Figures act drills anaphora, epizeuxis, asyndeton, chiasmus, homoeoteleuton, isocolon, and climax on Cicero, Gorgias, and Augustine. This deck takes its examples from other authors and asks what the figure does to the construction, not to the hearer.

**VII.3 Tropes** `[vii.tropes]`. Metaphor, metonymy, synecdoche, and the other changes of meaning.
- Panels 15 · QP 4
- Exercise: **Tropes**, a corpus of 48 items (4 for each of 12 tropes), in three fixed sets of 16. The twelve tropes are:
  - metaphor, catachresis, metalepsis, and metonymy;
  - antonomasia, epithet, synecdoche, and onomatopoeia;
  - periphrasis, hyperbole, allegory, and irony (taken as a species of allegory, as Donatus does).
- Sources: Donatus, *Ars maior* III.6 (rule 9); Quintilian VIII.6 (Butler); Bede, *De schematibus et tropis* (trans. Calvin B. Kendall, 1991)
- Reuse: `figures`, `latfigs`
- Overlap with Ars Rhetorica: metaphor, irony, hyperbole, and personification appear in its figure glossary and drills.

**Section review: Figures** `[vii.review]` (after VII.3). 45 new questions on VII.1–VII.3, in three fixed sets of 15.

---

## VIII · *De significatione et suppositione* · Signification and Supposition

**VIII.1 Supposition** `[viii.supposition]`. A brief review of signification and the modes of signifying (3 panels), then what a term stands for in a proposition. The kinds treated are material, simple, and personal supposition, and the kinds of personal supposition (discrete, determinate, confused and distributive, and merely confused).
- Panels 17 · QP 5
- Exercise: **Supposition**, pool 45, three fixed sets of 15.
- Taught-only limit: only the kinds named in VIII.1.
- Sources: Peter of Spain, *Tractatus* VI (trans. Brian Copenhaver, with Calvin Normore and Terence Parsons, 2014); William of Sherwood, *Introductiones in logicam* V (trans. Norman Kretzmann); Ockham, *Summa logicae* I.63–77 (trans. Michael Loux)
- Reuse: `suppos` (3); `EX.suppos` (47 items, about 45 of which can be kept)
- Overlap with Ars Syllogistica, which teaches supposition from the side of logic.

**VIII.2 Grammatical Equivalents of Logical Forms** `[viii.equivalents]`. How subject, copula, and predicate, quantity, and negation appear in grammar. The deck ends with 3–4 panels on what modern universal grammar shares with the scholastic analysis and where it differs, leading to XI.2.
- Panels 14 · QP 4 · Exercise: no
- Sources: Aristotle, *De interpretatione* 5–7 and 10 (Edghill); Peter of Spain, *Tractatus* I (Copenhaver); Arnauld and Lancelot, *Grammaire générale et raisonnée* (1660; trans. Jacques Rieux and Bernard Rollin, 1975); Chomsky, *Cartesian Linguistics* (1966)
- Reuse: `figura` (3), `service` (7), `congtruth`, `ug` (3) for the closing panels; `EX.figura`, `EX.service` become variants

---

## IX · *De analysi* · Analysis of Sentences and Passages

Both analysis buttons draw on one corpus, mostly English with some Latin. Latin is used only with a published translation close enough to align phrase by phrase, chiefly the Loeb translations (for example, Fairclough's prose Virgil, B. O. Foster's Livy, and Walter Miller's Cicero, *De officiis*). The live app's Dryden *Aeneid* is a verse translation that cannot be aligned this way, so it is not used here.

**IX.1 Analysis of Sentences** `[ix.sentences]`.
- Panels 3 (method only) · QP 0
- Exercise: pool of 60 sentences (about 45 English, 15 Latin), three fixed sets of 20. The tasks are parsing and construing whole sentences.
- Sources: Quintilian I.8 (Butler); Priscian, *Partitiones duodecim versuum Aeneidos principalium* (rule 9); Reed and Kellogg
- Reuse: `markup` sentences; sentences inside `EX.clauses`, `EX.latclause`, and `EX.congtruth`

**IX.2 Analysis of Passages** `[ix.passages]`.
- Panels 3 (method only) · QP 0
- Exercise: pool of 15 passages (about 11 English, 4 Latin), three fixed sets of 5. Each passage has 5 questions on reading, explaining, and judging, so the pool holds 75 questions.
- Sources: Quintilian I.8; Servius (rule 9); the Loeb translators named above
- Reuse: the English passages in `passages.js`, the Latin passages in `index.html`, and `latprose`, `latpoetry`, `enprose`, `enpoetry`, with their drills (only Latin passages whose Loeb translation aligns)

**IX.3 Workshop and Marking** `[ix.marking]`. The marking drill on stored sentences. The student marks every dependence in a sentence whose analysis is stored, and the drill compares the marks with that analysis. The Free Workshop, which accepts any sentence but cannot judge the marks, is dropped.
- Panels 2 · QP 0
- Exercise: pool of 36 stored sentences, three fixed sets of 12.
- Sources: Thomas of Erfurt (Bursill-Hall)
- Reuse: `markup` (3), `EX.markup`, `markQ`

---

## X · *De compositione* · Making

**X.1 Composition** `[x.composition]`. Building sentences and periods of one's own.
- Panels 10 · QP 3 · Exercise: no
- Sources: Quintilian X.1–3 (Butler); Erasmus, *De copia* (1512; trans. Betty I. Knott, *Collected Works of Erasmus* 24)
- Reuse: `making` (Making Sentences), `latbuild` (6); `EX.latbuild` becomes variants
- Overlap with Ars Rhetorica: its Style act and its "Choosing among Correct Sentences" set. This deck stays with how sentences are combined and built.

**X.2 Imitation** `[x.imitation]`. Two introductory panels: imitation in the tradition (Quintilian X.2, Ascham), and Petrarch's transcription of Cicero's *Pro Archia* from the manuscript he found at Liège in 1333. No second Petrarch example is used. Then ten fixed passages in English (three of them in published translations, with the translator named), each typed out word for word, with the model and the typing box side by side on a desktop and stacked on a phone. The passages are taken in order from 1 to 10; this set is the one exception to the A/B/C rotation (rule 5).
- Panels 2 · QP 0 · Exercise: 10 fixed passages (the check is word for word, so it is automatic)
- Sources: Quintilian X.2 (Butler); Roger Ascham, *The Scholemaster* (1570; written in English); Jeroen De Keyser, "The Descendants of Petrarch's *Pro Archia*," *Classical Quarterly* (2013)

*The ten approved passages*

| # | Author, work, and translator | Selection | Text used for the count | Words |
|---|---|---|---|---|
| 1 | Ecclesiastes 12:1–14, King James Version | the whole chapter, "Remember now thy Creator in the days of thy youth" to "whether it be good, or whether it be evil" | KJV text in the `aruljohn/Bible-kjv` data on GitHub; copy text to be checked against Project Gutenberg 10, the live app's KJV | 372 |
| 2 | Kenneth Grahame, *The Wind in the Willows* (1908), ch. IX, "Wayfarers All" | the first two paragraphs, "The Water Rat was restless, and he did not exactly know why" to "feeling some of its influence in his bones" | Standard Ebooks, from Project Gutenberg 27805 | 427 |
| 3 | Edward Gibbon, *The Decline and Fall of the Roman Empire* (1776), ch. I | the first two paragraphs, on the Antonine age and the policy of Augustus, "In the second century" to "the defeat of Crassus" | Standard Ebooks, from Project Gutenberg 25717 (the live app uses 731) | 412 |
| 4 | G. K. Chesterton, *Orthodoxy* (1908), ch. IV, "The Ethics of Elfland" | the first two paragraphs, "When the business man rebukes the idealism of his office-boy" to "having a Norman nose" | Standard Ebooks, from Project Gutenberg 16769 | 467 |
| 5 | Abraham Lincoln, Second Inaugural Address (March 4, 1865) | the whole address, "Fellow-Countrymen" to "with all nations" | the NLTK inaugural corpus (`nltk/nltk_data`); copy text to be checked against the Library of Congress manuscript or the Wikisource text the live app uses | 698 |
| 6 | George Washington, First Inaugural Address (April 30, 1789) | the salutation and the first paragraph, "Fellow-Citizens of the Senate and of the House of Representatives" to "the partiality in which they originated" | the NLTK inaugural corpus; copy text to be checked against the National Archives transcription | 325 |
| 7 | Winston Churchill, "Their Finest Hour" (House of Commons, June 18, 1940) | the closing part, "We do not yet know what will happen in France" to "This was their finest hour." | Hansard, HC Deb 18 June 1940 vol. 362 cc. 51–61, in `sources/imitation/07-churchill-finest-hour.md` (collated there with the International Churchill Society text; Hansard is used) | 382 |
| 8 | Plato, *Phaedo*, the death of Socrates, trans. Benjamin Jowett | "Crito made a sign to the servant" to "the wisest and justest and best" | Project Gutenberg 1658 (Jowett) | 597 |
| 9 | Tacitus, *Agricola* 45–46, trans. Alfred John Church and William Jackson Brodribb | both chapters, "Agricola did not see the senate-house besieged" to "will live for ever" | the Perseus Digital Library text of Church and Brodribb (Macmillan, 1877), `PerseusDL/canonical-latinLit` | 621 |
| 10 | Cicero, *On Old Age* (*Cato Maior de senectute*), trans. Evelyn S. Shuckburgh | the closing chapter, "Such are the words of the dying Cyrus" to "put my words to a practical test" | Project Gutenberg 2808 (Shuckburgh, *Treatises on Friendship and Old Age*) | 852 |

*Planning notes (not student-facing):*
- The word counts were made on the texts named in the fourth column. Before any passage is entered, the copy text has to be checked letter by letter against the named edition, and every quotation kept exactly as written. Where the Standard Ebooks texts modernize spelling, the original spelling of the named edition is used; the count does not change.
- No. 7 (Churchill) uses the Hansard text in `sources/imitation/07-churchill-finest-hour.md`, which records the words spoken in the House; the later published version differs in wording, and the variants are listed in that file. The speech is still in copyright (the Churchill estate; Hansard is also under Parliamentary copyright), so it is used only as a short excerpt for the imitation exercise.
- Nos. 8 and 10 keep the shorter cuts given in the table (597 and 852 words).
- The Tacitus count was made on the Perseus text with its notes removed.

**X.3 Translation** `[x.translation]`. Why translation is necessary; its history (Cicero, Jerome, Bruni, Ascham's double translation); whether translations are radically unreliable; and the classical answer that the concepts of the mind are common to all, while words and letters differ.
- Panels 12 · QP 4 · Exercise: no
- Sources: Aristotle, *De interpretatione* 1, 16a5–8 (Edghill); Cicero, *De optimo genere oratorum* 14 (trans. H. M. Hubbell, Loeb); Jerome, *Epistula* 57 to Pammachius (trans. W. H. Fremantle); Leonardo Bruni, *De interpretatione recta* (c. 1424; trans. as "On the Correct Way to Translate" in Griffiths, Hankins, and Thompson, *The Humanism of Leonardo Bruni*, 1987); Ascham, *The Scholemaster* (written in English); for the objection, W. V. O. Quine, *Word and Object* (1960), and the Sapir–Whorf hypothesis
- Reuse: `traditions`, the panel on why a concept cannot be the end of signification

**X.4 Classical Composition Exercises** `[x.progymnasmata]`. The fourteen progymnasmata (preliminary exercises) in the order of Aphthonius, with Kennedy's English chapter titles:
1. fable;
2. narrative;
3. chreia;
4. maxim;
5. refutation;
6. confirmation;
7. common-place;
8. encomion;
9. invective;
10. syncrisis (comparison);
11. ethopoeia (characterization);
12. ecphrasis (description);
13. thesis;
14. introduction of a law.

The deck says what each exercise is, why the fable comes first, and why the exercises follow that order.
- Panels 22: 2 introductory, 14 one per exercise (each with Aphthonius's definition and three short examples), 2 on why the fable comes first, 4 on the order · QP 6 · Exercise: no
- Sources: George A. Kennedy, *Progymnasmata: Greek Textbooks of Prose Composition and Rhetoric* (Atlanta: Society of Biblical Literature, 2003). Kennedy is the translator of Theon, [Hermogenes], Aphthonius, the anonymous Prolegomenon to Aphthonius, Nicolaus, and John of Sardis. Also Quintilian I.9 (Butler) and Priscian, *Praeexercitamina* (rule 9).
- Every quotation below is taken from `sources/KENNEDY-FABLE-AND-ORDER.md`, with the printed page numbers given there. Nothing is quoted from any other report of Kennedy.

*Plan for the two panels on why the fable comes first*

- **Panel 1, the handbooks' reasons.**
  - Nicolaus: the teachers "put the fable first among them as being naturally plain and simpler than the others and as having some relationship to poems," so that students "in their transition from poems to rhetoric" "should not all at once encounter things that are strange and unusual to them" (trans. Kennedy, p. 133).
  - [Hermogenes]: "Fable (mythos) is regarded as the first exercise to be assigned to the young because it can bring their minds into harmony for the better. In this way they (i.e., teachers of grammar) think to form students while still tender" (trans. Kennedy, p. 74).
  - The panel states that both reasons, the ease of the fable and its moral use for the young, belong to the grammar school, as Kennedy's gloss "teachers of grammar" in [Hermogenes] shows.
- **Panel 2, the fable and what follows it.**
  - Aphthonius gives no reason outright, but he connects the fable with poetry and with the moral: "Fable (mythos) originated with poets but has come to be used also by orators for the sake of the moral" (trans. Kennedy, p. 96).
  - Nicolaus classes the fable as deliberative: "that it clearly belongs to the deliberative part, no one should doubt" (trans. Kennedy, p. 135).
  - John of Sardis states the general rule, "in the progymnasmata one should begin first from the easier ones, and this is the fable" (trans. Kennedy, pp. 176–77).

*Plan for the four panels on the order*

- **Panel 3, the rule of the sequence.**
  - Kennedy: the handbooks "present a sequence of assignments in reading, writing, and speaking which gradually increase in difficulty and in maturity of thought from simple story-telling to argumentation" (p. x).
  - Theon: "Easier things should be learned before more difficult ones, and it is easier to amplify what is clear than to demonstrate what is unclear" (trans. Kennedy, pp. 8–9).
- **Panel 4, from lesser to greater.**
  - Nicolaus: "as we move ahead to greater things from lesser things we need to take proportionally more care about each of the exercises discussed" (trans. Kennedy, p. 147), which Kennedy glosses as moving "from the simpler, relatively non-argumentative exercises, to more difficult ones involving argument" (p. 147 n.).
  - Nicolaus on the place of the common-place: "if we are imitating the succession and order in speeches it is necessary to put common-place right after refutation and confirmation" (trans. Kennedy, pp. 147–48).
- **Panel 5, Theon's different order (chreia first).**
  - Theon begins with the chreia: "We begin, first, with the chreia; for this is short and easily remembered. Then comes fable and narration" (trans. Kennedy, p. 8).
  - Kennedy explains that this is Theon's original order: "Sometime in later antiquity Theon's work was edited, and the order of the chapters was rearranged to make it conform more closely to the system of exercises described in the handbook of Aphthonius" (p. 2). He adds that the Armenian manuscripts "preserve the original order of the text" (p. 2).
  - The panel sets Theon's order against Aphthonius's, from Kennedy's Table 1 (p. xiii). Theon places the chreia 1st, the fable 2nd, and the narrative 3rd. Aphthonius, [Hermogenes], and Nicolaus place the fable 1st, the narrative 2nd, and the chreia 3rd.
  - It also gives Nicolaus's report of the dispute: "There are some who assign it before both fable and narrative … It is not unreasonable to assign it a place after the fable and the narrative, because it requires the use of more logical divisions" (trans. Kennedy, p. 139).
- **Panel 6, why these exercises belong to grammar.**
  - Kennedy: the progymnasmata "were assigned by Greek grammarians to students after they had learned to read and write as preparation for declamation" (p. x), and "there is some variation in the number, names, and sequence of the exercises among the extant works" (p. xiii).
  - Quintilian I.9 (Butler) gives the grammarian the first of these exercises in Rome.

*Planning note (not student-facing):* the Kennedy file shows gaps where its PDF dropped numbers (for example, "p. ." in one note). Panels quote only passages without such gaps, as above.

- Reuse: none; the live app has no progymnasmata
- Overlap with Ars Rhetorica: encomium and invective belong to its epideictic species; refutation and confirmation correspond to its parts of the oration; the maxim is its figure *sententia*. Ars Rhetorica has no progymnasmata deck, so nothing is duplicated, but this deck should refer to the rhetoric course for those four exercises rather than teach them as speeches.

---

## XI · *De aliis traditionibus et grammatica recentiore* · Other Traditions and Modern Grammar

XI is kept as planned: two large decks with no exercises. Its question points now have three variants each, as everywhere.

**XI.1 The Other Classical Traditions** `[xi.traditions]`. How the other classical grammars differ from the Greco-Latin art: the scribal lists, Sanskrit, Arabic, Hebrew, and Chinese.
- Panels 56: Scribal lists 6; Sanskrit 13; Arabic 13; Hebrew 12; Chinese 12 · QP 18 · Exercise: no
- Sources:
  - Scribal lists: *Materials for the Sumerian Lexicon* IV (Old Babylonian and Neo-Babylonian grammatical texts); J. A. Black, *Sumerian Grammar in Babylonian Theory*
  - Sanskrit: Yāska, *Nirukta* (trans. Lakshman Sarup); Pāṇini, *Aṣṭādhyāyī* (trans. S. C. Vasu); Patañjali, *Mahābhāṣya*, the Paspaśāhnika (trans. S. D. Joshi and J. A. F. Roodbergen, 1986); Bhartṛhari, *Vākyapadīya* (trans. K. A. Subramania Iyer)
  - Arabic: Sībawayh, *al-Kitāb*, paraphrased unless a published English translation of the particular passage exists, in which case that translation is quoted and cited (*Planning note:* none is assumed here, and each passage is to be checked); al-Zajjājī, *al-Īḍāḥ* (trans. Kees Versteegh, 1995)
  - Hebrew, from Saadia Gaon to David Kimḥi: Saadia; Judah Ḥayyūj (rule 9); Jonah ibn Janāḥ (rule 9); Kimḥi, *Mikhlol* (partial trans. William Chomsky, 1952). One panel mentions the Masoretes briefly, as the scholars who fixed the vowel points and accents that the grammarians took as their text.
  - Chinese: the *Erya*; Xu Shen, *Shuowen jiezi*; Lu Fayan, *Qieyun*; full and empty words; Ma Jianzhong, *Mashi wentong* (1898)
- Reuse: `scribal` (33), `vyakarana` (34), `nahw` (30), and `xiaoxue` (31), each cut to the target; `quaestiones` (10) for the question points. Hebrew is new.

**XI.2 Universal Grammar and Modern Linguistics** `[xi.modern]`. From Port-Royal to the present: universal grammar; structural, generative, and dependency grammar (dependency grammar as heir of Thomas's *dependens* and *terminans*); typology and universals (taking up V.5); functional grammar; and speech acts. It takes in the live app's Three Ways, Typology, Two Universal Grammars, and Great Objections where they fit.
- Panels 45 · QP 15 · Exercise: no
- Sources: *Grammaire générale et raisonnée* (Rieux and Rollin); Saussure, *Cours de linguistique générale* (trans. Wade Baskin, 1959, or Roy Harris, 1983); Bloomfield, *Language* (1933); Chomsky, *Syntactic Structures* (1957), *Aspects of the Theory of Syntax* (1965), *Cartesian Linguistics* (1966); Tesnière (1959); Greenberg (1963); Bernard Comrie, *Language Universals and Linguistic Typology*; Simon Dik, *The Theory of Functional Grammar*; M. A. K. Halliday, *An Introduction to Functional Grammar*; J. L. Austin, *How to Do Things with Words* (1962); John Searle, *Speech Acts* (1969)
- Reuse: `traditions` (9) whole; `typo` (4) and `TYPO_ITEMS` as question-point variants; `ug` (3); from `objections`, Ockham and Aurifaber and "why languages differ" (the chimaera goes to III.2 and gender to III.6)

---

## Translators, and sources without a published English translation (rule 9)

**Translated sources, with the translator named:**

| Source | Translator |
|---|---|
| Aristotle, *Categories* and *De interpretatione* | E. M. Edghill |
| Aristotle, *De anima* | J. A. Smith |
| Aristotle, *Sophistical Refutations* | W. A. Pickard-Cambridge |
| Aristotle, *Rhetoric*; Demetrius, *On Style* | W. Rhys Roberts |
| Augustine, *De doctrina christiana* | J. F. Shaw |
| Bede, *De arte metrica* and *De schematibus et tropis* | Calvin B. Kendall (1991) |
| Bruni, *De interpretatione recta* | in Griffiths, Hankins, and Thompson, *The Humanism of Leonardo Bruni* (1987) |
| Cicero, *De optimo genere oratorum* | H. M. Hubbell (Loeb) |
| Cicero, *On Old Age* | Evelyn S. Shuckburgh |
| Dionysius Thrax, *Technē* (P.2 and III.1) | Alan Kemp (1986) |
| Donatus, *Ars minor* | Wayland Johnson Chase (1926) |
| Erasmus, *De copia* | Betty I. Knott |
| Horace, *Ars poetica* | H. Rushton Fairclough (Loeb) |
| Isidore, *Etymologiae* | Stephen A. Barney and others (2006) |
| Jerome, *Epistula* 57 | W. H. Fremantle |
| John of St. Thomas, *Tractatus de signis* | John Deely |
| Ockham, *Summa logicae* I | Michael Loux |
| Peter of Spain, *Tractatus* | Brian Copenhaver, with Calvin Normore and Terence Parsons (2014) |
| Plato, *Cratylus* and *Phaedo* | Benjamin Jowett |
| Port-Royal, *Grammaire générale et raisonnée* | Jacques Rieux and Bernard Rollin (1975) |
| Progymnasmata (Theon, [Hermogenes], Aphthonius, Nicolaus, John of Sardis) | George A. Kennedy (2003) |
| Quintilian, *Institutio oratoria* | H. E. Butler (Loeb) |
| St. Thomas, *In Peri hermeneias* | Jean T. Oesterle (1962) |
| St. Thomas, *Summa theologiae* | Fathers of the English Dominican Province |
| Tacitus, *Agricola* | Alfred John Church and William Jackson Brodribb |
| Thomas of Erfurt, *Grammatica speculativa* | G. L. Bursill-Hall (1972) |
| Varro, *De lingua Latina* V–X | R. G. Kent (Loeb, 1938) |
| William of Sherwood, *Introductiones* and *Syncategoremata* | Norman Kretzmann |
| Boethius, *In Peri hermeneias*, ch. 9 (first and second editions) | Norman Kretzmann, in Ammonius, *On Aristotle's On Interpretation 9*, with Boethius, *On Aristotle's On Interpretation 9* (1998) |
| Boethius, *In Peri hermeneias*, second edition, books 1–6 | Andrew Smith, *On Aristotle On Interpretation 1–3* (2010) and *4–6* (2011) |
| Patañjali, *Mahābhāṣya*, Paspaśāhnika | S. D. Joshi and J. A. F. Roodbergen (Pune, 1986) |
| al-Zajjājī, *al-Īḍāḥ* | Kees Versteegh (1995) |
| Yāska, *Nirukta* | Lakshman Sarup |
| Pāṇini, *Aṣṭādhyāyī* | S. C. Vasu |
| Bhartṛhari, *Vākyapadīya* | K. A. Subramania Iyer |
| Kimḥi, *Mikhlol* (partial) | William Chomsky (1952) |

Ascham's *Scholemaster* was written in English and needs no translator.

**No published English translation: own translation, labeled "trans. T. Kearns," or a paraphrase:**

- Diomedes, *Ars grammatica*
- Priscian, *Institutiones grammaticae* (only excerpts are translated, for example in Copeland and Sluiter, *Medieval Grammar and Rhetoric*, 2009), and his *Partitiones* and *Praeexercitamina*
- Donatus, *Ars maior* (excerpts only in Copeland and Sluiter)
- Vossius, *Aristarchus* and *Etymologicon*
- Boethius, *In Categorias*
- Boethius, *In Peri hermeneias*, only for passages outside the translations of Kretzmann and Smith (the first edition outside ch. 9, and anything not in books 1–6 of the second edition)
- Boethius of Dacia, *Modi significandi*
- Peter Helias, *Summa super Priscianum*
- Servius, *In Vergilii Aeneidem*
- Thomas Linacre, *De emendata structura*
- Patañjali, *Mahābhāṣya*, only for passages outside the Paspaśāhnika and the other āhnikas translated by Joshi and Roodbergen (listed in `sources/TRANSLATIONS-CHECK.md`)
- Judah Ḥayyūj, the grammatical treatises
- Jonah ibn Janāḥ, the grammatical works
- Saadia Gaon, the grammatical works
- Sībawayh, *al-Kitāb* (paraphrased, as in XI.1, unless a published English translation of the particular passage exists)
- To be checked before use: the *Qieyun*, the *Shuowen jiezi*, and the *Mashi wentong*

*Planning note:* Varro, *De lingua Latina* IX–X, is not on this list, because R. G. Kent's Loeb translation covers all the surviving books (V–X).

---

## Totals

| Section | Buttons | Panels | Question points | Question variants (×3) | Exercise items |
|---|---|---|---|---|---|
| Preliminary | 4 | 32 | 9 | 27 | 0 |
| I | 6 + 1 shared set | 52 | 15 | 45 | 72 |
| II | 6 + 1 review | 63 | 18 | 54 | 141 |
| III | 14 + 2 shared sets + 2 reviews | 135 | 38 | 114 | 360 |
| IV | 3 + 1 review | 25 | 7 | 21 | 30 |
| V | 10 + 1 review | 91 | 50 | 150 | 45 |
| VI | 4 + 1 review | 30 | 8 | 24 | 45 |
| VII | 3 + 1 review | 38 | 10 | 30 | 186 |
| VIII | 2 | 31 | 9 | 27 | 45 |
| IX | 3 | 8 | 0 | 0 | 171 |
| X | 4 | 46 | 13 | 39 | 10 |
| XI | 2 | 101 | 33 | 99 | 0 |
| **Total** | **71** | **652** | **210** | **630** | **1,105** |

How these were counted:
- **Buttons:** the 61 mockup divisions, plus 3 shared exercise buttons, plus 7 section reviews. The Free Workshop was never a separate division, so dropping it does not change the count.
- **Exercise items:**

| Set | Items |
|---|---|
| Sign and Significant Voice | 72 |
| Syllable | 48 |
| Quantity, Stress, and Accent | 48 |
| The Eight Parts | 60 |
| Figure and Species | 30 |
| Nouns and Adjectives | 60 |
| Pronouns | 30 |
| Verbs | 60 |
| Participles | 30 |
| Literal and Figurative | 48 |
| Figures of Words | 45 |
| Tropes | 48 |
| Supposition | 45 |
| Analysis of Sentences | 60 sentences |
| Analysis of Passages | 75 questions on 15 passages |
| Marking | 36 |
| Imitation | 10 passages |
| Section reviews (6 × 45, plus 30 for IV) | 300 |
| **Total** | **1,105** |

- **Change in this revision:** the review of IV adds 1 button and 30 exercise items; panels and question points are unchanged.
- **Change from the first plan:** panels rose from 530 to 652. Most of the increase comes from the rule of three examples per point; the rest comes from the Latin pronunciation panels, the modistic closing panels, and the typology panels in V.5. XI is unchanged. Question variants rose from 380–570 to 630 at exactly three per point. Exercise items rose from 794 to 1,105, because of the seven section reviews (300). The rotation rule cut the analysis corpus from 150 items to 60 sentences and 15 passages.

## Overlap with Ars Rhetorica

| Ars Grammatica | Ars Rhetorica | Division |
|---|---|---|
| V.8 The Period | Style | Grammar: how the members are built. Rhetoric: their effect. |
| VII.2 Figures of Words | Figures (Cicero, Gorgias, Augustine) | Different authors; questions about construction, not persuasion. |
| VII.3 Tropes | figure glossary (metaphor, irony, hyperbole, personification) | Same as above. |
| X.1 Composition | Style; Choosing among Correct Sentences | Grammar: combining and building sentences. |
| X.4 Classical Composition Exercises | the three species; the parts of the oration; *sententia* | Grammar teaches the exercises as Quintilian's grammarian does and refers to rhetoric for encomium, invective, refutation, and confirmation. |

I.6 Ambiguity and VIII.1 Supposition overlap Ars Syllogistica, not Ars Rhetorica. Both keep to the grammatical side.

## Open questions

1. **Size of the analysis corpus.** Settled: IX stays at 60 sentences and 15 passages.
2. **Imitation passages.** Settled: Churchill uses the Hansard text (382 words), and the Phaedo and Cicero passages keep the shorter cuts (597 and 852 words).
3. **Translations.** Settled for Boethius (*In Peri hermeneias*: Kretzmann and Smith; *In Categorias*: own translation, labeled) and for Patañjali (the Paspaśāhnika: Joshi and Roodbergen).

No questions remain open in this plan.
