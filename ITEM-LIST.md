# Ars Grammatica (v2): Item List

This is a plan for review. It contains no content and no code. It covers every division on the mockup (`app.js`, `ACTS`), revised after the first review. It was checked against the live app (`gcrastinus/ars-grammatica` at `f401c04`) and against Ars Rhetorica (`gcrastinus/ars-rhetorica`, `main`).

The changes from the mockup are these:

- "The Reasons for the Parts" moves from VIII to III.2, right after the eight parts in general (III.1).
- "Chreia and Maxim" becomes "Classical Composition Exercises" (all fourteen progymnasmata).
- "Workshop and Marking" is kept as the marking drill on stored sentences, whose answers can be checked automatically; the Free Workshop is dropped.
- Six section reviews and three shared exercise buttons are added (see below).
- Greek, French, and German have no decks of their own. They appear only as examples where they show something English and Latin do not.

---

## Rules that apply to every item

**1. Stable ids and optional language layers.** Every division has a stable id (given in brackets after each title, e.g. `[iii.noun-2]`). The id never changes when a title or a position changes, and progress is stored under it. Each general deck may later receive optional child layers attached under it (for example, "The Noun in English" and "The Noun in Latin" under `[iii.noun-2]`), each with its own id of the form `parent-id/layer` (`iii.noun-2/la`). The data should allow this without restructuring. Nothing is built for layers now.

**2. Question points.** Programmed-course questions appear at some cards, not on every card, and make the student connect and use what was learned. Every question point has exactly three variants (A, B, C).
- A wrong answer shows "Incorrect," the right answer, and the explanation, then the next variant. After the third variant it cycles back through the same three until one is answered correctly.
- Each opening of the deck starts on the next variant (A, then B, then C, then A again), so review shows the same cards with different questions.
- Where the live app has exercises that do not survive as exercises (see rule 6), their best items are rewritten as variants at the question points of the matching deck.

**3. Examples.** Three examples per point is the norm, mixing English and Latin, with Greek, French, or German only where they show something distinctive. When in doubt, another example is added. Every Latin, Greek, French, or German example is translated. The panel counts below were re-estimated for this rule.

**4. Exercises test only what has been taught.** Every exercise set and every section review uses only what the decks before it have taught. The limits for each set are given under the set. Question points obey the same rule.

**5. Rotation of exercise sets.** Every exercise set holds three sittings' worth of items, divided into fixed sets A, B, and C, which are given in that order on successive visits (A, B, C, A, …) and never shuffled. Corpora (Literal and Figurative, Tropes, the analysis of sentences and of passages, the marking drill) rotate in the same way. Imitation stays at ten fixed passages.

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
- the six section reviews.

No other live exercise survives as an exercise.

**7. Shared exercise buttons.** An exercise set that covers several decks has its own button, placed right after the last deck it covers:
- Sign and Significant Voice comes after I.6.
- Nouns and Adjectives comes after III.6 (Noun II).
- Verbs comes after III.9 (Verb II).

The decks these sets cover have no Exercise button of their own. A set that covers one deck is opened from that deck's Exercise button.

**8. Section reviews.** A review exercise follows each major group:
- the Matter of Speech;
- the Word and the Declinable Parts;
- the Indeclinable Parts;
- Construction;
- Faults;
- Figures.

Each review has 45 new questions, not reused from the question points, in three fixed sets of 15. Successive visits give set A, then B, then C, then A again, never shuffled.

**9. Translations.**
- Every translation shown to the student is a real published one, with the translator named.
- Some sources have no complete published English translation. For these, we either quote the Latin (or other original) with our own literal translation, clearly labeled as ours, or we paraphrase. We never present our own translation as a published one. The list is under "Sources without a complete published English translation" below.
- In IX, Latin is shown only with translations close enough to align phrase by phrase, such as the Loeb translations.

**10. Wording.** All student-facing text follows the wording rules in the live app's `CLAUDE.md`. The file `/home/box/shared/timothy-style/STYLE_GUIDE.md` does not exist in this environment.

## How to read the entries

Each entry gives:
- the title, with the mockup's Latin where it has one, and the stable id;
- a one-line description;
- **Panels**: the estimated number of study cards;
- **QP**: the number of question points, each with three variants;
- **Exercise**: "no", or the set with its pool and sitting size;
- **Sources**;
- **Reuse**: material in the live app (keys of its `DECKS` and `EX` objects) that can be cut down or rewritten.

---

## Preliminary · *Quid sit grammatica* · What Grammar Is

**P.1 The Definition of Grammar** `[prelim.definition]`. What grammar is, what it treats, and why it is the first art of the trivium. The mention of typology has moved to V.5.
- Panels 10 · QP 3 · Exercise: no
- Sources: Quintilian I.4 (trans. H. E. Butler, Loeb); Isidore, *Etymologiae* I.5 (trans. Stephen A. Barney and others, 2006); Diomedes, *Ars* II (rule 9); Vossius, *Aristarchus, sive de arte grammatica* (1635) I (rule 9)
- Reuse: `prelim` (15 panels): the name of the art, its definition, matter, and end

**P.2 The Offices of the Grammarian** `[prelim.offices]`. *Lectio*, *enarratio*, *emendatio*, and *iudicium*, that is, reading, explaining, correcting, and judging.
- Panels 8 · QP 2 · Exercise: no
- Sources: Diomedes, citing Varro (rule 9); Dionysius Thrax, *Technē* 1; Quintilian I.4
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

## I · *De signo et voce significativa* · Sign and Word

**I.1 Sign and Symbol** `[i.sign]`. Natural and given signs, and the spoken word as a symbol of what is in the mind.
- Panels 10 · QP 3 · Exercise: in the shared Sign and Significant Voice set
- Sources: Aristotle, *De interpretatione* 1, 16a3–8 (trans. E. M. Edghill); Augustine, *De doctrina christiana* II.1–3 (trans. J. F. Shaw); Boethius, *In Peri hermeneias*; John of St. Thomas, *Tractatus de signis* (trans. John Deely)
- Reuse: `traditions`, the panel on John of St. Thomas; `prelim`, the panel on voice and concept

**I.2 Imposition** `[i.imposition]`. How a sound comes to signify by the will of those who first used it, and first and second imposition.
- Panels 8 · QP 2 · Exercise: shared set
- Sources: Aristotle, *De interpretatione* 2 (Edghill); Boethius, *In Categorias*; St. Thomas, *In Peri hermeneias* I
- Reuse: the passages on imposition in `modes` and `prelim`

**I.3 Signification and Consignification** `[i.consignification]`. What a word means, and what it signifies along with that meaning, such as the time the verb signifies.
- Panels 9 · QP 3 · Exercise: shared set
- Sources: Aristotle, *De interpretatione* 3, 16b6 (Edghill); St. Thomas, *In Peri hermeneias* I; Priscian II (rule 9)
- Reuse: `modes`, the panel on why the verb has time

**I.4 Categorematic and Syncategorematic Words** `[i.syncategorematic]`. Words that signify of themselves, and words such as "every" and "not" that signify only with other words.
- Panels 8 · QP 2 · Exercise: shared set
- Sources: Priscian II.15 (rule 9); William of Sherwood, *Syncategoremata* (trans. Norman Kretzmann)
- Reuse: little; `suppos` mentions the syncategoremata

**I.5 The Functions of Language** `[i.functions]`. To state, to ask, to command, to wish, and to express feeling, and why only the statement is true or false.
- Panels 8 · QP 2 · Exercise: shared set
- Sources: Aristotle, *De interpretatione* 4, 17a1–7 (Edghill); St. Thomas, *In Peri hermeneias* I; for comparison, Bühler, *Sprachtheorie* (1934), and Jakobson, "Linguistics and Poetics" (1960)
- Reuse: none

**I.6 Ambiguity** `[i.ambiguity]`. How one word or one construction can have two senses, and how the grammarian distinguishes them.
- The deck stays on the grammatical side: it asks where the double sense lies, in a word (equivocation) or in the construction (amphiboly). It does not treat the fallacies as errors of reasoning, which belong to Ars Syllogistica; one panel names the boundary and points there.
- Panels 9 · QP 3 · Exercise: yes (master drill)
- Sources: Aristotle, *Sophistical Refutations* 4 (trans. W. A. Pickard-Cambridge), only for the distinction between word and construction; Quintilian VII.9 (Butler); Augustine, *De doctrina christiana* III.2–4 (Shaw)
- Reuse: `figura` (3), rewritten so that it does not teach the fallacy

**Exercise button: Sign and Significant Voice** `[i.ex.sign]` (after I.6). This is the master drill for I.1–I.6.
- Pool 72 items, 12 per deck: three fixed sets of 24, each with 4 items per deck.
- The ambiguity items use ambiguous words and ambiguous constructions in English and Latin (with translations). The student identifies the two senses and says whether the ambiguity lies in a word or in the construction.
- Taught-only limit: the ambiguity items use only constructions a beginner can see without the construction section (V), such as a modifier that can attach to either of two words, or a Latin accusative that can be subject or object of an infinitive, with the translation given.
- Reuse: the best items of `EX.vox` and `EX.modes` that concern signification

---

## II · *De materia orationis* · The Matter of Speech

**II.1 Voice (*vox*)** `[ii.voice]`. Voice as air struck and heard, and articulate and confused voice.
- Panels 8 · QP 2 · Exercise: no
- Sources: Donatus, *Ars maior* I.1 (rule 9); Priscian I.1–2 (rule 9); Aristotle, *De anima* II.8 (trans. J. A. Smith)
- Reuse: `vox` (5), nearly whole; `EX.vox` becomes question-point variants

**II.2 The Letter and Orthography** `[ii.letter]`. The letter and its accidents (name, figure, and power), and the relation of spelling to sound.
- Two panels set out how Latin is spelled and pronounced in the restored pronunciation: the vowels long and short, the diphthongs, c and g always hard, v as English w, i and u as consonants, and the marking of long vowels (macrons) in this course. With these panels, the Latin items in II.3 and II.4 are fair to a beginner.
- Panels 12 · QP 4 (one of them on Latin pronunciation) · Exercise: no
- Sources: Donatus, *Ars maior* I.2 (rule 9); Priscian I.3– (rule 9); Quintilian I.4 and I.7 (Butler); W. Sidney Allen, *Vox Latina* (2nd ed., 1978)
- Reuse: `letter` (6); the pronunciation notes in `syllable`

**II.3 The Syllable** `[ii.syllable]`. What a syllable is, and how words are divided into syllables in English and in Latin.
- Panels 10 · QP 3
- Exercise: **Syllable**, pool 48 (24 English, 24 Latin), three fixed sets of 16 (8 English, 8 Latin). The tasks are to count the syllables and to divide the word.
- Taught-only limit: the Latin items use only the spelling and pronunciation in II.2 and the rules of division in II.3.
- Sources: Donatus, *Ars maior* I.3 (rule 9); Priscian II.1– (rule 9); Allen, *Vox Latina*; J. C. Wells, *Longman Pronunciation Dictionary*, for English division
- Reuse: `ensyl` (6), `syllable` (6); items from `EX.ensyl` and `EX.syllable`

**II.4 Quantity and Accent** `[ii.quantity]`. Long and short syllables, by nature and by position; the acute, grave, and circumflex; English stress, which is not quantity.
- Panels 13 · QP 4
- Exercise: **Quantity, Stress, and Accent**, pool 48, three fixed sets of 16. The items cover Latin quantity by position, the Latin penultimate rule, and English primary stress with the suffixes that move it.
- Taught-only limit: long vowels are marked with macrons in every Latin item, since natural quantity cannot be seen from the spelling and the student is not expected to know it.
- Sources: Donatus, *Ars maior* I.5 (rule 9); Quintilian I.5.22–31 (Butler); Allen, *Vox Latina*; Smyth, *Greek Grammar* §149–, only for one example of Greek pitch accent
- Reuse: `syllable`, `ensyl`, and examples from `grcsyl`, `desyl`, and `frsyl` (not as decks); `EX.syllable`, `EX.ensyl`

**II.5 Punctuation (*posituræ*)** `[ii.punctuation]`. The old marks of pause (*distinctio*, *subdistinctio*, and *media distinctio*) beside the modern ones.
- Panels 7 · QP 2 · Exercise: no
- Sources: Donatus, *Ars maior* I.6 (rule 9); Isidore, *Etymologiae* I.20 (Barney); M. B. Parkes, *Pause and Effect* (1992)
- Reuse: the `distinctio` panels in `period`

**II.6 Feet and Meter** `[ii.meter]`. Feet and verse, with lines of English and Latin, and of Greek, German, or French where they show stress, quantity, or syllable count distinctively.
- Panels 13 · QP 3 · Exercise: no
- Sources: Diomedes, *Ars* III (rule 9); Bede, *De arte metrica*; translations named per line
- Reuse: `meter` (12), `enmeter` (6), and single lines from `grcmeter`, `demeter`, and `frmeter` (not as decks)

**Section review: The Matter of Speech** `[ii.review]` (after II.6). 45 new questions on II.1–II.6, in three fixed sets of 15.

---

## III · *De analogia et anomalia* · Analogy and Anomaly: The Parts of Speech

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
- Sources: Thomas of Erfurt, *Grammatica speculativa* (trans. G. L. Bursill-Hall, 1972); Boethius of Dacia, *Modi significandi* (rule 9); Priscian II.18– (rule 9); St. Thomas, *In Peri hermeneias* I
- Reuse: `modes` (9) except the panels on accidents; `objections`, the chimaera panel; items of `EX.modes` on the parts become question-point variants

**III.3 Figure and Species** `[iii.figure]`. Simple and compound (*potens*, *impotens*), and primitive and derived. IV.2 takes up composition again and refers back here.
- Panels 8 · QP 2
- Exercise: **Figure and Species**, pool 30, three fixed sets of 10.
- Taught-only limit: the student only judges whether a word is simple or compound and primitive or derived. The part of speech is given or is one decided by III.1, and every Latin word comes with its parts and their meanings (*in-imīcus*, "not" + "friend"). No item asks about case, tense, or any other accident.
- Sources: Donatus, *Ars maior* II (rule 9); Priscian IV–V (rule 9)
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
- Panels 14 · QP 4 · Exercise: shared set
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
- Panels 15 · QP 4 · Exercise: shared set
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

---

## V · *De constructione* · Construction

The mockup's "Analysis" buttons in this section are gone. In their place, each deck has two extra question points that are short analysis questions on a sentence, limited to what the deck and earlier decks have taught. Full analysis lives in IX.

**V.1 Congruity** `[v.congruity]`. A sentence well formed and complete, as distinct from a sentence that is true.
- Panels 9 · QP 5 (2 of them analysis) · Exercise: no
- Sources: Priscian XVII.1– (rule 9); Thomas of Erfurt on congruity and completeness (Bursill-Hall)
- Reuse: `cong` (4), `congtruth` (3), `oratio` (5); `EX.cong` and `EX.congtruth` become question-point variants

**V.2 Agreement (*concordantia*)** `[v.agreement]`. How words agree in gender, number, case, and person.
- Panels 8 · QP 5 · Exercise: no
- Sources: Priscian XVII (rule 9); Allen and Greenough
- Reuse: `agree` (3), `enform` (8); `EX.agree` becomes variants

**V.3 Government (*regimen*)** `[v.government]`. How a verb, a preposition, or a noun requires a case.
- Panels 8 · QP 5 · Exercise: no
- Sources: Priscian XVIII (rule 9); Peter Helias, *Summa super Priscianum* (rule 9)
- Reuse: `govern` (4); `EX.govern` becomes variants

**V.4 Dependence** `[v.dependence]`. The dependent and the term on which it depends (*dependens* and *terminans*).
- Panels 9 · QP 5 · Exercise: no
- Sources: Thomas of Erfurt (Bursill-Hall); Lucien Tesnière, *Éléments de syntaxe structurale* (1959; trans. Timothy Osborne and Sylvain Kahane, 2015), for the modern counterpart
- Reuse: `workshop` (4), `markup` (3); `EX.workshop` becomes variants

**V.5 Order (*ordo*)** `[v.order]`. Natural and artificial order, and what word order does in English and in Latin. Two panels give the early mention of typology here: languages are classed by their basic order of subject, verb, and object, and English (fixed order) and Latin (order freed by the endings) stand at two points of that classification. The panels point ahead to XI.2.
- Panels 11 · QP 6 (2 analysis, 1 on typology) · Exercise: no
- Sources: Quintilian IX.4.23–32 (Butler); Priscian XVII (rule 9); Joseph Greenberg, "Some Universals of Grammar with Particular Reference to the Order of Meaningful Elements" (1963)
- Reuse: one or two panels from `typo`; single examples from `grcorder`, `deorder`, and `frorder` (not as decks)

**V.6 The Phrase** `[v.phrase]`. Groups of words that act as one part of speech.
- Panels 8 · QP 4 · Exercise: no · Sources: Reed and Kellogg, *Higher Lessons in English* (1877) · Reuse: `enphr` (6)

**V.7 The Clause** `[v.clause]`. Subject and predicate, and independent and dependent clauses.
- Panels 10 · QP 5 · Exercise: no
- Sources: Priscian XVII–XVIII (rule 9); Reed and Kellogg; Allen and Greenough
- Reuse: `ensent` (7), `encl` (5), `clauses` (6), `endiag` (5); `EX.clauses`, `EX.latclause` become variants

**V.8 The Period** `[v.period]`. The rounded sentence of many members.
- Panels 9 · QP 5 · Exercise: no
- Sources: Aristotle, *Rhetoric* III.9 (trans. W. Rhys Roberts); Demetrius, *On Style* 1–35 (trans. W. Rhys Roberts); Quintilian IX.4 (Butler)
- Reuse: `period` (4); `EX.period` and `EX.livyperiod` become variants
- Overlap with Ars Rhetorica: its Style act treats the period. This deck keeps to how the members are built and leaves their effect on the hearer to rhetoric.

**V.9 Mood and Voice in Construction** `[v.mood]`. The passive with its agent, the infinitive, the participle, and the subjunctive in clauses.
- Panels 10 · QP 5 · Exercise: no
- Sources: Priscian XVIII (rule 9); Allen and Greenough
- Reuse: `latvoice` (6), `latsubj` (5); `EX.latvoice`, `EX.latsubj` become variants

**V.10 Figures of Construction** `[v.figures]`. Ellipsis, zeugma, syllepsis, and the other departures from regular construction. One panel notes that Donatus counts zeugma and syllepsis among the figures of words and refers ahead to VII.2.
- Panels 9 · QP 5 · Exercise: no
- Sources: Donatus, *Ars maior* III.5 (rule 9); Priscian XVII (rule 9); Thomas Linacre, *De emendata structura Latini sermonis* (1524), to be checked for its treatment of the figures (rule 9)
- Reuse: `figures` (8), `latfigs`

**Section review: Construction** `[v.review]` (after V.10). 45 new questions on V.1–V.10, in three fixed sets of 15.

---

## VI · *De vitiis* · Correctness and Faults

**VI.1 Usage and Authority** `[vi.usage]`. This deck applies the four criteria introduced in P.4 to questions of usage and authority: custom, the authors, and reason as judges of what is correct. Its first panel refers back to P.4 and does not teach the criteria again.
- Panels 7 · QP 2 · Exercise: no
- Sources: Quintilian I.6 (Butler); Horace, *Ars poetica* 70–72 (trans. H. Rushton Fairclough, Loeb)
- Reuse: none beyond P.4

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
- Sources: Augustine, *De doctrina christiana* III.10–29 (Shaw); St. Thomas, *Summa theologiae* I, q. 1, a. 10; Quintilian VIII.6.1– (Butler)
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
- Sources: Donatus, *Ars maior* III.6 (rule 9); Quintilian VIII.6 (Butler); Bede, *De schematibus et tropis*
- Reuse: `figures`, `latfigs`
- Overlap with Ars Rhetorica: metaphor, irony, hyperbole, and personification appear in its figure glossary and drills.

**Section review: Figures** `[vii.review]` (after VII.3). 45 new questions on VII.1–VII.3, in three fixed sets of 15.

---

## VIII · *De significatione et suppositione* · Signification and Supposition

**VIII.1 Supposition** `[viii.supposition]`. A brief review of signification and the modes of signifying (3 panels), then what a term stands for in a proposition. The kinds treated are material, simple, and personal supposition, and the kinds of personal supposition (discrete, determinate, confused and distributive, and merely confused).
- Panels 17 · QP 5
- Exercise: **Supposition**, pool 45, three fixed sets of 15.
- Taught-only limit: only the kinds named in VIII.1.
- Sources: Peter of Spain, *Tractatus* VI (trans. Brian Copenhaver, with Calvin Normore and Terence Parsons, 2014); William of Sherwood, *Introductiones in logicam* V (trans. Norman Kretzmann); Ockham, *Summa logicae* I.63– (trans. Michael Loux)
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

**X.2 Imitation** `[x.imitation]`. Two introductory panels: imitation in the tradition (Quintilian X.2, Ascham), and Petrarch's transcription of Cicero's *Pro Archia* from the manuscript he found at Liège in 1333. No second Petrarch example is used. Then ten fixed English passages, each typed out word for word, with the model and the typing box side by side on a desktop and stacked on a phone.
- Panels 2 · QP 0 · Exercise: 10 fixed passages (the check is word for word, so it is automatic)
- Sources: Quintilian X.2 (Butler); Roger Ascham, *The Scholemaster* (1570); Jeroen De Keyser, "The Descendants of Petrarch's *Pro Archia*," *Classical Quarterly* (2013)
- The ten passages are proposed in the table below, for approval.

*Proposed imitation passages*

Every live excerpt in `passages.js` is shorter than 120 words, so each passage below is a longer selection, mostly from the same authors. I counted the words in the Standard Ebooks texts (which modernize some spellings but not the wording); the Project Gutenberg number is the source those texts name. The copy text for the course should be the unmodernized Project Gutenberg text, quoted exactly as written, and its count may differ by a word or two where words are hyphenated differently. The order is by date of writing.

| # | Author and work | Selection | Edition (copy text) | Words |
|---|---|---|---|---|
| 1 | Francis Bacon, *Essays*, "Of Studies" (1625) | the whole essay, "Studies serve for delight" to "a special receipt" | Project Gutenberg 575 | 503 |
| 2 | Samuel Johnson, *Rasselas* (1759), ch. X | "I was desirous to add my name" to "superior to time and place" (it includes "no man was ever great by imitation") | Project Gutenberg 652 | 639 |
| 3 | Edward Gibbon, *Decline and Fall* (1776), ch. I | the first two paragraphs, "In the second century" to "the defeat of Crassus" | Project Gutenberg 25717 (the live app uses 731) | 412 |
| 4 | Edmund Burke, *Reflections on the Revolution in France* (1790) | "It is now sixteen or seventeen years" to "to be subdued by manners" (two paragraphs) | Project Gutenberg 15679 | 491 |
| 5 | Benjamin Franklin, *Autobiography* (written 1771) | "About this time I met with an odd volume of the Spectator" to "of which I was extremely ambitious" (Franklin's own account of imitating the *Spectator*) | Project Gutenberg 20203 | 356 |
| 6 | Jane Austen, *Pride and Prejudice* (1813), ch. 1 | the whole chapter | Project Gutenberg 42671 (the live app uses 1342) | 853 |
| 7 | Frederick Douglass, *Narrative* (1845), ch. VII | "I lived in Master Hugh's family about seven years" to "taking the ell" | Project Gutenberg 23 | 516 |
| 8 | Herman Melville, *Moby-Dick* (1851), ch. 1 | "Call me Ishmael" to "What do they here?" | Project Gutenberg 2701 | 385 |
| 9 | Henry David Thoreau, *Walden* (1854), "Where I Lived, and What I Lived For" | "I went to the woods because" to "Simplify, simplify." | Project Gutenberg 205 | 392 |
| 10 | Charles Dickens, *A Tale of Two Cities* (1859), I.1 | the first three paragraphs, "It was the best of times" to "the Cock-lane brood" | Project Gutenberg 98 | 333 |

Notes on the list:
- Two passages (Austen, 853 words; Johnson, 639) are long. If a limit near 500 is wanted, Austen can end at "the business of her life was to get her daughters married" in a shorter cut, and Johnson can begin at "The business of a poet" with the paragraph before it.
- I chose the Douglass selection from ch. VII rather than ch. VI because the ch. VI passage on learning to read quotes Mr. Auld's racial slur several times, which the student would have to type.
- Some live-app authors could not be counted here: Newman, Swift, Milton's *Areopagitica*, Lincoln, the King James Version, and Johnson's letter to Chesterfield in Boswell. This environment cannot reach Project Gutenberg, and I found no copy of those texts that I could read. Any of them can replace an entry above once its text is counted.

**X.3 Translation** `[x.translation]`. Why translation is necessary; its history (Cicero, Jerome, Bruni, Ascham's double translation); whether translations are radically unreliable; and the classical answer that the concepts of the mind are common to all, while words and letters differ.
- Panels 12 · QP 4 · Exercise: no
- Sources: Aristotle, *De interpretatione* 1, 16a5–8 (Edghill); Cicero, *De optimo genere oratorum* 14 (trans. H. M. Hubbell, Loeb); Jerome, *Epistula* 57 to Pammachius (trans. W. H. Fremantle); Leonardo Bruni, *De interpretatione recta* (c. 1424); Ascham, *The Scholemaster*; for the objection, W. V. O. Quine, *Word and Object* (1960), and the Sapir–Whorf hypothesis
- Reuse: `traditions`, the panel on why a concept cannot be the end of signification

**X.4 Classical Composition Exercises** `[x.progymnasmata]`. All fourteen progymnasmata as Aphthonius orders them: fable, narrative, chreia, maxim, refutation, confirmation, commonplace, encomium, invective, comparison, characterization, description, thesis, and the introduction of a law. The deck says what each exercise is, why the fable comes first, and why the exercises follow that order.
- Panels 22 (2 introductory, 14 one per exercise with three short examples each, 2 on the fable, 4 on the order) · QP 6 · Exercise: no
- Sources: Aphthonius, Theon, Hermogenes, and Nicolaus in George A. Kennedy, *Progymnasmata: Greek Textbooks of Prose Composition and Rhetoric* (2003) (Hermogenes pp. 73–88, Nicolaus pp. 129–72); Malcolm Heath, "Theon and the History of the Progymnasmata," *GRBS* (2002); Quintilian I.9 (Butler); Priscian, *Praeexercitamina* (rule 9)
- **The reasons for putting the fable first are not stated in this plan.** Kennedy has to be read for them first, and this environment cannot open his book (the publisher's PDF is blocked here). What I could confirm is limited to the following:
  - Quintilian I.9 has the grammarian begin with Aesop's fables.
  - Hermogenes, Aphthonius, and Nicolaus put the fable first.
  - Heath argues that Theon's original order put the chreia first, and that the extant Greek text was rearranged into the standard order.
  - A review quotes Kennedy's Hermogenes (p. 74) on the fable, but I have not read the passage itself.

  The panels on why the fable comes first will be written only after reading Kennedy's Hermogenes, Aphthonius, Nicolaus, and Theon on the point.
- Reuse: none; the live app has no progymnasmata
- Overlap with Ars Rhetorica: encomium and invective belong to its epideictic species; refutation and confirmation correspond to its parts of the oration; the maxim is its figure *sententia*. Ars Rhetorica has no progymnasmata deck, so nothing is duplicated, but this deck should refer to the rhetoric course for those four exercises rather than teach them as speeches.

---

## XI · *De aliis traditionibus et grammatica recentiore* · Other Traditions and Modern Grammar

XI is kept as planned: two large decks with no exercises. Its question points now have three variants each, as everywhere.

**XI.1 The Other Classical Traditions** `[xi.traditions]`. How the other classical grammars differ from the Greco-Latin art: the scribal lists, Sanskrit, Arabic, Hebrew, and Chinese.
- Panels 56: Scribal lists 6; Sanskrit 13; Arabic 13; Hebrew 12; Chinese 12 · QP 18 · Exercise: no
- Sources:
  - Scribal lists: *Materials for the Sumerian Lexicon* IV (Old Babylonian and Neo-Babylonian grammatical texts); J. A. Black, *Sumerian Grammar in Babylonian Theory*
  - Sanskrit: Yāska, *Nirukta* (trans. Lakshman Sarup); Pāṇini, *Aṣṭādhyāyī* (trans. S. C. Vasu); Patañjali, *Mahābhāṣya*; Bhartṛhari, *Vākyapadīya* (trans. K. A. Subramania Iyer)
  - Arabic: Sībawayh, *al-Kitāb*, paraphrased unless a published English translation of the particular passage exists, in which case that translation is quoted and cited (none is assumed here, and each passage is to be checked); al-Zajjājī, *al-Īḍāḥ* (trans. Kees Versteegh, 1995)
  - Hebrew, from Saadia Gaon to David Kimḥi: Saadia; Judah Ḥayyūj; Jonah ibn Janāḥ; Kimḥi, *Mikhlol* (partial trans. William Chomsky, 1952). One panel mentions the Masoretes briefly, as the scholars who fixed the vowel points and accents that the grammarians took as their text.
  - Chinese: the *Erya*; Xu Shen, *Shuowen jiezi*; Lu Fayan, *Qieyun*; full and empty words; Ma Jianzhong, *Mashi wentong* (1898)
- Reuse: `scribal` (33), `vyakarana` (34), `nahw` (30), and `xiaoxue` (31), each cut to the target; `quaestiones` (10) for the question points. Hebrew is new.

**XI.2 Universal Grammar and Modern Linguistics** `[xi.modern]`. From Port-Royal to the present: universal grammar; structural, generative, and dependency grammar (dependency grammar as heir of Thomas's *dependens* and *terminans*); typology and universals (taking up V.5); functional grammar; and speech acts. It takes in the live app's Three Ways, Typology, Two Universal Grammars, and Great Objections where they fit.
- Panels 45 · QP 15 · Exercise: no
- Sources: *Grammaire générale et raisonnée* (Rieux and Rollin); Saussure, *Cours de linguistique générale* (trans. Wade Baskin, 1959, or Roy Harris, 1983); Bloomfield, *Language* (1933); Chomsky, *Syntactic Structures* (1957), *Aspects of the Theory of Syntax* (1965), *Cartesian Linguistics* (1966); Tesnière (1959); Greenberg (1963); Bernard Comrie, *Language Universals and Linguistic Typology*; Simon Dik, *The Theory of Functional Grammar*; M. A. K. Halliday, *An Introduction to Functional Grammar*; J. L. Austin, *How to Do Things with Words* (1962); John Searle, *Speech Acts* (1969)
- Reuse: `traditions` (9) whole; `typo` (4) and `TYPO_ITEMS` as question-point variants; `ug` (3); from `objections`, Ockham and Aurifaber and "why languages differ" (the chimaera goes to III.2 and gender to III.6)

---

## Sources without a complete published English translation (rule 9)

For these sources we quote the original with our own literal translation, labeled as ours, or we paraphrase:

- Diomedes, *Ars grammatica*
- Priscian, *Institutiones grammaticae* (only excerpts are translated, for example in Copeland and Sluiter, *Medieval Grammar and Rhetoric*, 2009), and his *Partitiones* and *Praeexercitamina*
- Donatus, *Ars maior* (excerpts only in Copeland and Sluiter); the *Ars minor* does have a complete translation (Chase, 1926)
- Vossius, *Aristarchus* and *Etymologicon*
- Boethius of Dacia, *Modi significandi*
- Peter Helias, *Summa super Priscianum*
- Servius, *In Vergilii Aeneidem*
- Thomas Linacre, *De emendata structura*
- Sībawayh, *al-Kitāb*
- Others to check before use: Saadia's and Ibn Janāḥ's grammatical works, Patañjali's *Mahābhāṣya*, the *Qieyun*, the *Shuowen jiezi*, and the *Mashi wentong*

**Correction on Varro:** *De lingua Latina* IX–X is not under this rule. R. G. Kent's Loeb translation (1938) covers all the surviving books, V–X, so Varro is quoted from Kent.

---

## Totals

| Section | Buttons | Panels | Question points | Question variants (×3) | Exercise items |
|---|---|---|---|---|---|
| Preliminary | 4 | 32 | 9 | 27 | 0 |
| I | 6 + 1 shared set | 52 | 15 | 45 | 72 |
| II | 6 + 1 review | 63 | 18 | 54 | 141 |
| III | 14 + 2 shared sets + 2 reviews | 135 | 38 | 114 | 360 |
| IV | 3 | 25 | 7 | 21 | 0 |
| V | 10 + 1 review | 91 | 50 | 150 | 45 |
| VI | 4 + 1 review | 30 | 8 | 24 | 45 |
| VII | 3 + 1 review | 38 | 10 | 30 | 186 |
| VIII | 2 | 31 | 9 | 27 | 45 |
| IX | 3 | 8 | 0 | 0 | 171 |
| X | 4 | 46 | 13 | 39 | 10 |
| XI | 2 | 101 | 33 | 99 | 0 |
| **Total** | **70** | **652** | **210** | **630** | **1,075** |

How these were counted:
- **Buttons:** the 61 mockup divisions, plus 3 shared exercise buttons, plus 6 section reviews. The Free Workshop was never a separate division, so dropping it does not change the count.
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
| Section reviews (6 × 45) | 270 |
| **Total** | **1,075** |

- **Change from the first plan:** panels rose from 530 to 652. Most of the increase comes from the rule of three examples per point; the rest comes from the Latin pronunciation panels, the modistic closing panels, and the typology panels in V.5. XI is unchanged. Question variants rose from 380–570 to 630 at exactly three per point. Exercise items rose from 794 to 1,075, because of the section reviews (270). The rotation rule cut the analysis corpus from 150 items to 60 sentences and 15 passages.

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

1. **Imitation passages.** Do you approve the ten passages proposed under X.2, or would you replace any (for example, with Newman, Lincoln, or the King James Version once their texts are counted)? Should Austen and Johnson be cut to about 500 words?
2. **Size of the analysis corpus.** Under the rotation rule, IX holds 60 sentences and 15 passages (three sittings of 20 sentences and of 5 passages). Do you want larger sittings, which would enlarge the pool by the same factor?
3. **Sections with no review.** The Preliminary, I, IV, VIII, IX, X, and XI have no section review. I and VIII are already covered by their own exercise sets, but nothing tests IV (Word Formation and Etymology). Should IV get a review of its own, or should its decks be included in the Construction review?
4. **The fable panels.** These wait until Kennedy can be read. Can you supply the relevant pages, or a copy I can reach, so the reasons are taken from the texts and not from reviews?
