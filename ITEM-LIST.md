# Ars Grammatica (v2): Item List

This is a plan for review. It contains no content and no code. It covers every division on the mockup (`app.js`, `ACTS`), with the changes asked for:

- "The Reasons for the Parts" moves from VIII to the end of III, after the eight parts.
- "Chreia and Maxim" becomes "Classical Composition Exercises" (all fourteen progymnasmata).
- "Workshop and Marking" stays only in the form whose answers can be checked automatically (see IX.3).

The live app was read from `gcrastinus/ars-grammatica` at `f401c04` and the rhetoric course from `gcrastinus/ars-rhetorica` at its current `main`. The file `/home/box/shared/timothy-style/STYLE_GUIDE.md` does not exist in this environment, so I followed the wording rules in the live app's `CLAUDE.md` and `STYLE_GUIDE.md`.

## How to read the entries

- **Panels**: an estimate of the number of study cards in the deck.
- **Question points (QP)**: places in the deck where a programmed-course question appears. Questions are not on every card. Each question point needs 2–3 variants, so that review shows the same cards with different questions. The totals give the number of variants at 2 and at 3 per point.
- **Exercise**: "no" means a deck only. "Yes" gives the item count or the size of the corpus. Separate exercise sets exist only where the brief names them.
- **Reuse**: material in the live app that can be cut down or rewritten for the item. Deck names are the keys in the live app's `DECKS` and `EX` objects. The panel counts in parentheses come from counting the live app's `panels` arrays.
- **Examples**: English and Latin throughout, with every Latin example translated. Greek, French, and German appear only where they show something the other two do not. Every translation is a real published one, and the translator is named on the card.
- **Sources**: every English translation named in the source lists below is a published one. Where I found no English translation, the entry says so.

---

## Preliminary · *Quid sit grammatica* · What Grammar Is

**P.1 The Definition of Grammar.** What grammar is, what it treats, and why it is the first art of the trivium, with a brief first mention of typology (the modern study of how languages differ) at the point where the art of a particular language meets the general science of grammar.
- Panels 10 (including 2 on typology) · QP 4 · Exercise: no
- Sources: Quintilian I.4 (trans. H. E. Butler, Loeb); Isidore, *Etymologiae* I.5; Diomedes, *Ars* II; Vossius, *Aristarchus, sive de arte grammatica* (1635) I; Greenberg, "Some Universals of Grammar" (1963), for the typology panels
- Reuse: `prelim` (15 panels): the name of the art, its definition, matter, and end; `typo` (4) for the two typology panels

**P.2 The Offices of the Grammarian.** *Lectio*, *enarratio*, *emendatio*, and *iudicium*, that is, reading, explaining, correcting, and judging.
- Panels 6 · QP 2 · Exercise: no
- Sources: Diomedes (citing Varro); Dionysius Thrax, *Technē* 1; Quintilian I.4
- Reuse: `prelim`, the panels on the grammarian's work

**P.3 *Methodice* and *Historice*.** The two parts of grammar: the precepts of the art and the reading of the authors.
- Panels 5 · QP 2 · Exercise: no
- Sources: Quintilian I.9.1 (Butler); Vossius, *Aristarchus* I
- Reuse: none

**P.4 The Criteria of Correctness.** Reason, antiquity, authority, and custom as the four tests of correct speech.
- Panels 6 · QP 2 · Exercise: no
- Sources: Quintilian I.6.1–3 (Butler); Varro, *De lingua Latina* IX
- Reuse: `prelim`, "well formed against true" (moved later in the deck)
- Note: this overlaps VI.1 Usage and Authority (see Open Questions 3).

---

## I · *De signo et voce significativa* · Sign and Word

**Exercise set I (master drill): Sign and Significant Voice.** One drill across I.1–I.5: sign and symbol, imposition, signification and consignification, categorematic and syncategorematic words, and the functions of language. It does not include I.6 Ambiguity, since the brief does not list it.
- Items: 60 (12 per topic), multiple choice, checked automatically
- Reuse: some items in `EX.vox` and `EX.modes` can be adapted

**I.1 Sign and Symbol.** Natural and given signs, and the spoken word as a symbol of what is in the mind.
- Panels 8 · QP 3 · Exercise: yes (master drill)
- Sources: Aristotle, *De interpretatione* 1, 16a3–8 (trans. E. M. Edghill); Augustine, *De doctrina christiana* II.1–3 (trans. J. F. Shaw); Boethius, *In Peri hermeneias*; John of St. Thomas, *Tractatus de signis* (trans. John Deely)
- Reuse: `traditions` (9): the panel on John of St. Thomas; `prelim`, the panel on voice and concept

**I.2 Imposition.** How a sound comes to signify by the will of those who first used it, and the difference between first and second imposition.
- Panels 6 · QP 2 · Exercise: yes (master drill)
- Sources: Aristotle, *De interpretatione* 2 (Edghill); Boethius, *In Categorias*; St. Thomas, *In Peri hermeneias* I
- Reuse: the live app uses "imposition" often in `modes` and `prelim`; these passages can be gathered here

**I.3 Signification and Consignification.** What a word means, and what it signifies along with that meaning, such as the time the verb signifies.
- Panels 7 · QP 3 · Exercise: yes (master drill)
- Sources: Aristotle, *De interpretatione* 3, 16b6 (Edghill); St. Thomas, *In Peri hermeneias* I; Priscian II
- Reuse: `modes`, the panel on why the verb has time

**I.4 Categorematic and Syncategorematic Words.** Words that signify of themselves, and words such as "every" and "not" that signify only with other words.
- Panels 6 · QP 2 · Exercise: yes (master drill)
- Sources: Priscian II.15 (the dialecticians' two parts); William of Sherwood, *Syncategoremata* (trans. Norman Kretzmann); Peter of Spain, *Syncategoreumata*
- Reuse: little; `suppos` mentions the syncategoremata

**I.5 The Functions of Language.** To state, to ask, to command, to wish, and to express feeling; and why only the statement is true or false.
- Panels 6 · QP 2 · Exercise: yes (master drill)
- Sources: Aristotle, *De interpretatione* 4, 17a1–7 (Edghill); St. Thomas, *In Peri hermeneias* I, on the species of the complete sentence; for comparison, Bühler, *Sprachtheorie* (1934), and Jakobson, "Linguistics and Poetics" (1960)
- Reuse: none

**I.6 Ambiguity.** How one word or one construction can have two senses, and how the grammarian distinguishes them.
- Panels 7 · QP 3 · Exercise: no
- Sources: Aristotle, *Sophistical Refutations* 4 (trans. W. A. Pickard-Cambridge); Quintilian VII.9; Augustine, *De doctrina christiana* III.2–4 (Shaw)
- Reuse: `figura` (3); the four live mentions of amphiboly
- Note: this overlaps Ars Syllogistica's fallacies of language, not Ars Rhetorica.

---

## II · *De materia orationis* · The Matter of Speech

**II.1 Voice (*vox*).** Voice as air struck and heard, and articulate and confused voice.
- Panels 6 · QP 2 · Exercise: no
- Sources: Donatus, *Ars maior* I.1; Priscian I.1–2; Aristotle, *De anima* II.8
- Reuse: `vox` (5), nearly whole

**II.2 The Letter and Orthography.** The letter and its accidents (name, figure, and power), and the relation of spelling to sound.
- Panels 8 · QP 3 · Exercise: no
- Sources: Donatus, *Ars maior* I.2; Priscian I.3–; Quintilian I.4 and I.7 (Butler)
- Reuse: `letter` (6)

**II.3 The Syllable.** What a syllable is, and how words are divided into syllables in English and in Latin.
- Panels 8 · QP 3 · Exercise: **yes, Syllable: 40 items, 20 English and 20 Latin** (count the syllables; divide the word)
- Sources: Donatus, *Ars maior* I.3; Priscian II.1–; W. S. Allen, *Vox Latina*; J. C. Wells, *Longman Pronunciation Dictionary*, for English division
- Reuse: `ensyl` (6), `syllable` (6); items from `EX.ensyl` and `EX.syllable`

**II.4 Quantity and Accent.** Long and short syllables, by nature and by position; the acute, grave, and circumflex; English stress, which is not quantity.
- Panels 10 · QP 4 · Exercise: **yes, Quantity, Stress, and Accent: 48 items** (Latin quantity by position, the Latin penultimate rule, English primary stress and the suffixes that move it). All of these can be computed or checked against a dictionary.
- Sources: Donatus, *Ars maior* I.4–5; Priscian; Allen, *Vox Latina*; Quintilian I.5.22–31; Greek accent only where it shows the pitch accent (Smyth, *Greek Grammar* §149–)
- Reuse: `syllable`, `ensyl`, `grcsyl`, `desyl`, `frsyl`; `EX.syllable`, `EX.ensyl`

**II.5 Punctuation (*posituræ*).** The old marks of pause (*distinctio*, *subdistinctio*, and *media distinctio*) beside the modern ones.
- Panels 5 · QP 2 · Exercise: no
- Sources: Donatus, *Ars maior* I.6; Isidore, *Etymologiae* I.20; M. B. Parkes, *Pause and Effect* (1992)
- Reuse: the `distinctio` panels in `period`

**II.6 Feet and Meter.** Feet and verse, with a line or two of English, Latin, Greek, German, and French to show stress, quantity, and syllable count.
- Panels 10 · QP 3 · Exercise: no
- Sources: Diomedes, *Ars* III; Bede, *De arte metrica*; Hephaestion, *Encheiridion*; translations named per line
- Reuse: `meter` (12), `enmeter` (6), `grcmeter` (5), `demeter` (5), `frmeter` (5)

---

## III · *De analogia et anomalia* · Analogy and Anomaly: The Parts of Speech

*The word in general*

**III.1 The Word (*dictio*) and the Eight Parts.** The least part of a constructed sentence, and Donatus's eight parts, each decided by how the word is used; the Greek eight with the article beside them.
- Panels 10 · QP 4 · Exercise: **yes, The Eight Parts: 60 items** (name the part of the marked word in a sentence, about two thirds English and one third Latin)
- Sources: Donatus, *Ars minor* (trans. Wayland Johnson Chase, 1926); Priscian II.14–21; Dionysius Thrax, *Technē* 11
- Reuse: `pos` (12), `enpos` (9), `latpos` (3), `poscompare`; `EX.pos`, `EX.latpos`, `EX.poscompare`

**III.2 Figure and Species.** Simple and compound (*potens*, *impotens*), and primitive and derived.
- Panels 6 · QP 2 · Exercise: **yes, Figure and Species: 30 items**
- Sources: Donatus, *Ars maior* II, on the noun and the verb; Priscian IV–V
- Reuse: none

**III.3 Homonymy and Synonymy.** One word with many meanings (*acies*), and many words with one meaning (*ensis*, *gladius*).
- Panels 5 · QP 2 · Exercise: no
- Sources: Donatus, *Ars maior* II, on the noun; Aristotle, *Categories* 1 (trans. E. M. Edghill), whose "homonymous" and "synonymous" are said of things, not words
- Reuse: none

*The declinable parts*

**Exercise set III-N: Nouns and Adjectives.** One set behind III.4 and III.5: kind and quality, comparison, gender, number, and case, in English and Latin.
- Items: 60. Latin forms are generated from the declension tables and checked exactly.
- Reuse: `EX.latnoun`, `EX.cases`, `EX.produce` (noun forms)

**III.4 The Noun I: Kinds, Quality, and Comparison.** Proper and common nouns, the adjective under the noun, and the degrees of comparison.
- Panels 8 · QP 3 · Exercise: yes (Nouns and Adjectives)
- Sources: Donatus, *Ars minor* and *Ars maior* II (Chase for the *Ars minor*); Priscian II–III
- Reuse: `pos`, the noun and adjective panels; `enacc`, comparison

**III.5 The Noun II: Gender, Number, and Case.** The accidents that make declension, with the cases set beside English word order and prepositions.
- Panels 10 · QP 4 · Exercise: yes (Nouns and Adjectives)
- Sources: Priscian V–VII; Allen and Greenough, *New Latin Grammar*
- Reuse: `latnoun` (6), `casework` (8), `enacc`

**III.6 The Pronoun.** The pronoun and its accidents: quality, gender, number, figure, person, and case.
- Panels 7 · QP 3 · Exercise: **yes, Pronouns: 30 items**
- Sources: Donatus, *Ars minor* (Chase); Priscian XII–XIII
- Reuse: `enacc`, the pronoun panels

**Exercise set III-V: Verbs.** One set behind III.7 and III.8, including aspect (complete and incomplete action, the Latin perfect against the imperfect, the English progressive and perfect).
- Items: 60, of which at least 12 are on aspect. Latin forms are generated from the conjugation tables.
- Reuse: `EX.latverb`, `EX.produce` (verb forms)

**III.7 The Verb I: Quality, Mood, and Voice.** The forms and moods of the verb, and active, passive, neuter, and deponent (*genus*).
- Panels 9 · QP 3 · Exercise: yes (Verbs)
- Sources: Donatus, *Ars minor* (Chase) and *Ars maior* II; Priscian VIII
- Reuse: `latverb` (6), `latvoice` (6)

**III.8 The Verb II: Tense, Person, Number, and Conjugation.** How the verb marks time, aspect, and person, and how verbs are conjugated.
- Panels 10 (2 of them on aspect) · QP 4 · Exercise: yes (Verbs)
- Sources: Priscian VIII–X; Varro, *De lingua Latina* IX–X (the incomplete and the complete, *infectum* and *perfectum*); Smyth, *Greek Grammar*, on Greek aspect, where it shows the distinction most clearly
- Reuse: `latverb`, `enacc` (tense and aspect), `casework`

**III.9 The Participle.** The part that shares in the noun and the verb, and its accidents.
- Panels 6 · QP 2 · Exercise: **yes, Participles: 30 items**
- Sources: Donatus, *Ars minor* (Chase); Priscian XI
- Reuse: `latvoice`, the participle panels

*The indeclinable parts*

**III.10 The Adverb.** The adverb and its accidents: signification, comparison, and figure.
- Panels 5 · QP 2 · Exercise: no · Sources: Donatus (Chase); Priscian XV · Reuse: `pos`

**III.11 The Preposition.** The preposition and its one accident, case, and its use in composition.
- Panels 5 · QP 2 · Exercise: no · Sources: Donatus (Chase); Priscian XIV · Reuse: `govern` (4)

**III.12 The Conjunction.** The conjunction and its accidents: power, figure, and order.
- Panels 5 · QP 2 · Exercise: no · Sources: Donatus (Chase); Priscian XVI · Reuse: `pos`

**III.13 The Interjection.** The part that signifies a feeling of the mind ("alas," *heu*, *οἴμοι*, *ach*, *hélas*).
- Panels 4 · QP 1 · Exercise: no · Sources: Donatus (Chase); Priscian XV · Reuse: `pos`

*The reasons for the parts* (moved here from VIII)

**III.14 The Reasons for the Parts.** The modistae: modes of being, understanding, and signifying as the ground of the parts and their accidents, with the objections that bear on the parts (the chimaera and grammatical gender).
- Panels 12 · QP 5 · Exercise: no
- Sources: Thomas of Erfurt, *Grammatica speculativa* (trans. G. L. Bursill-Hall, 1972); Boethius of Dacia, *Modi significandi*; Priscian II.18–; St. Thomas, *In Peri hermeneias* I
- Reuse: `modes` (9) nearly whole; `objections` (4), the chimaera and gender panels; good items from `EX.modes` become question points

---

## IV · *De etymologia* · Word Formation and Etymology

**IV.1 Derivation.** How new words are made from old ones by endings and changes of form.
- Panels 6 · QP 2 · Exercise: no
- Sources: Priscian IV; Vossius, *Aristarchus* IV; Hans Marchand, *The Categories and Types of Present-Day English Word-Formation* (1960)
- Reuse: none

**IV.2 Composition.** How words are joined to make compounds, in English, Latin, and German.
- Panels 5 · QP 2 · Exercise: no
- Sources: Priscian V; Vossius IV; Duden, for German compounds
- Reuse: none
- Note: this overlaps III.2, where "figure" already treats simple and compound words (see Open Questions 4).

**IV.3 Etymology.** The origin of words, ancient and comparative, and the cautions it requires.
- Panels 8 · QP 3 · Exercise: no
- Sources: Plato, *Cratylus* (trans. Benjamin Jowett); Varro, *De lingua Latina* V–VII (trans. R. G. Kent, Loeb); Isidore, *Etymologiae* I.29; Vossius, *Etymologicon linguae Latinae* (1662); the *Oxford English Dictionary*
- Reuse: none

---

## V · *De constructione* · Construction

The mockup gives every topic here a third button, "Analysis." Under the brief that analysis lives only in IX, so in this plan each topic here is a deck with question points, and some of those question points are short analysis questions (see Open Questions 5).

**V.1 Congruity.** A sentence well formed and complete, as distinct from a sentence that is true.
- Panels 7 · QP 3 · Exercise: no
- Sources: Priscian XVII.1–; Thomas of Erfurt, *Grammatica speculativa*, on congruity and completeness (Bursill-Hall)
- Reuse: `cong` (4), `congtruth` (3), `oratio` (5)

**V.2 Agreement (*concordantia*).** How words agree in gender, number, case, and person.
- Panels 6 · QP 3 · Exercise: no
- Sources: Priscian XVII; Allen and Greenough
- Reuse: `agree` (3), `enform` (8)

**V.3 Government (*regimen*).** How a verb, a preposition, or a noun requires a case.
- Panels 6 · QP 3 · Exercise: no
- Sources: Priscian XVIII; Peter Helias, *Summa super Priscianum*
- Reuse: `govern` (4)

**V.4 Dependence.** The dependent and the term on which it depends (*dependens* and *terminans*).
- Panels 7 · QP 3 · Exercise: no
- Sources: Thomas of Erfurt (Bursill-Hall); Lucien Tesnière, *Éléments de syntaxe structurale* (1959), for the modern counterpart
- Reuse: `workshop` (4), `markup` (3)

**V.5 Order (*ordo*).** Natural and artificial order, and what word order does in English and in Latin.
- Panels 7 · QP 3 · Exercise: no
- Sources: Quintilian IX.4.23–32 (Butler); Priscian XVII; Greenberg (1963) on basic word order
- Reuse: `grcorder`, `deorder`, `frorder`, each cut to one panel where the language shows something distinctive

**V.6 The Phrase.** Groups of words that act as one part of speech.
- Panels 6 · QP 2 · Exercise: no · Sources: Reed and Kellogg, *Higher Lessons in English* (1877) · Reuse: `enphr` (6)

**V.7 The Clause.** Subject and predicate, and independent and dependent clauses.
- Panels 8 · QP 3 · Exercise: no
- Sources: Priscian XVII–XVIII; Reed and Kellogg; Allen and Greenough
- Reuse: `ensent` (7), `encl` (5), `clauses` (6), `endiag` (5)

**V.8 The Period.** The rounded sentence of many members.
- Panels 7 · QP 3 · Exercise: no
- Sources: Aristotle, *Rhetoric* III.9 (trans. W. Rhys Roberts); Demetrius, *On Style* 1–35 (trans. W. Rhys Roberts); Quintilian IX.4 (Butler)
- Reuse: `period` (4); the Livy period from `EX.livyperiod`
- Overlap with Ars Rhetorica: its Style act treats the period. This deck should keep to how the clauses are built and leave the effect on the hearer to rhetoric.

**V.9 Mood and Voice in Construction.** The passive with its agent, the infinitive, the participle, and the subjunctive in clauses.
- Panels 8 · QP 3 · Exercise: no
- Sources: Priscian XVIII; Allen and Greenough
- Reuse: `latvoice` (6), `latsubj` (5)

**V.10 Figures of Construction.** Ellipsis, zeugma, syllepsis, and the other departures from regular construction.
- Panels 7 · QP 3 · Exercise: no
- Sources: Donatus, *Ars maior* III.5; Priscian XVII; Thomas Linacre, *De emendata structura Latini sermonis* (1524), to be checked for its treatment of the figures
- Reuse: `figures` (8), `latfigs`
- Note: Donatus counts zeugma and syllepsis among the figures of words, so this overlaps VII.2 (see Open Questions 4).

---

## VI · *De vitiis* · Correctness and Faults

**VI.1 Usage and Authority.** Custom, the authors, and reason as the judges of what is correct.
- Panels 6 · QP 2 · Exercise: no
- Sources: Quintilian I.6 (Butler); Horace, *Ars poetica* 70–72
- Reuse: `prelim`, the panel on usage
- Note: this overlaps P.4.

**VI.2 Barbarism.** A fault in a single word.
- Panels 5 · QP 2 · Exercise: no · Sources: Donatus, *Ars maior* III.1; Quintilian I.5 · Reuse: `vices` (3), `latfaults`

**VI.3 Solecism.** A fault in the arrangement of words.
- Panels 6 · QP 2 · Exercise: no · Sources: Donatus, *Ars maior* III.2; Quintilian I.5 · Reuse: `vices`, `latfaults`, `enfault` (5)

**VI.4 Metaplasm.** A change in a word allowed for meter or ornament ("o'er," *e'en*).
- Panels 6 · QP 2 · Exercise: no · Sources: Donatus, *Ars maior* III.4 · Reuse: `figures`, `latfaults`

The live exercises `EX.vices`, `EX.latfaults`, and `EX.enfault` have no place under the brief, so in this plan they become question points (see Open Questions 6).

---

## VII · *De schematibus et tropis* · Figures and Tropes

**VII.1 Literal and Figurative Sense.** What a word says properly, and what it says by a figure.
- Panels 8 · QP 3 · Exercise: **yes, Literal and Figurative: a curated corpus of 48 examples** (inside the 30–60 asked for), from English and translated Latin; the question is whether the marked word is used literally or figuratively, and why
- Sources: Augustine, *De doctrina christiana* III.10–29 (Shaw); St. Thomas, *Summa theologiae* I, q. 1, a. 10; Quintilian VIII.6.1–
- Reuse: `service` (7), the panel on literal and figurative sense

**VII.2 Figures of Words (*schemata lexeos*).** Repetition, omission, and arrangement used for effect.
- Panels 10 · QP 3 · Exercise: **yes, Figures of Words: 40 items**
- Sources: Donatus, *Ars maior* III.5; Quintilian IX.3 (Butler); Servius on Virgil
- Reuse: `figures` (8), `latfigs`; items from `EX.figures` and `EX.latfigs`
- Overlap with Ars Rhetorica: its Figures act drills anaphora, epizeuxis, asyndeton, chiasmus, homoeoteleuton, isocolon, and climax on Cicero, Gorgias, and Augustine. Ars Grammatica should take its examples from other authors and ask what the figure does to the construction, not what it does to the hearer.

**VII.3 Tropes.** Metaphor, metonymy, synecdoche, and the other changes of meaning.
- Panels 12 · QP 4 · Exercise: **yes, Tropes: 48 items** on 12 general tropes: metaphor, catachresis, metalepsis, metonymy, antonomasia, epithet, synecdoche, onomatopoeia, periphrasis, hyperbole, allegory, and irony (taken as a species of allegory, as Donatus does)
- Sources: Donatus, *Ars maior* III.6; Quintilian VIII.6 (Butler); Bede, *De schematibus et tropis*
- Reuse: `figures`, `latfigs`
- Overlap with Ars Rhetorica: metaphor, irony, hyperbole, and personification appear in its figure glossary and drills.

---

## VIII · *De significatione et suppositione* · Signification and Supposition

"The Reasons for the Parts" has moved to III.14.

**VIII.1 Supposition.** A brief review of signification and the modes of signifying (3 panels), then what a term stands for in a proposition: material, simple, and personal supposition, and the kinds of personal supposition (discrete, determinate, confused and distributive, and merely confused).
- Panels 14 · QP 5 · Exercise: **yes, Supposition: 40 items**
- Sources: Peter of Spain, *Tractatus* VI (trans. Brian Copenhaver, with Calvin Normore and Terence Parsons, 2014); William of Sherwood, *Introductiones in logicam* V (trans. Norman Kretzmann); Ockham, *Summa logicae* I.63– (trans. Michael Loux)
- Reuse: `suppos` (3); `EX.suppos` (47 items, of which about 40 can be kept)
- Overlap with Ars Syllogistica, which teaches supposition from the side of logic.

**VIII.2 Grammatical Equivalents of Logical Forms.** How subject, copula, and predicate, quantity, and negation appear in grammar. The deck ends with 3–4 panels on what modern universal grammar shares with the scholastic analysis and where it differs, leading to XI.2.
- Panels 12 (including the 3–4 closing panels) · QP 4 · Exercise: no
- Sources: Aristotle, *De interpretatione* 5–7 and 10 (Edghill); Peter of Spain, *Tractatus* I (Copenhaver); Arnauld and Lancelot, *Grammaire générale et raisonnée* (1660; trans. Jacques Rieux and Bernard Rollin, 1975); Chomsky, *Cartesian Linguistics* (1966)
- Reuse: `figura` (3), `service` (7), `congtruth`, `ug` (3) for the closing panels

---

## IX · *De analysi* · Analysis of Sentences and Passages

Both analysis buttons draw on one rotating corpus, mostly English with some Latin. Each Latin item has a published translation aligned phrase by phrase.

**IX.1 Analysis of Sentences.**
- Panels 3 (method only) · QP 0 · Exercise: **yes, 120 sentences** (about 90 English and 30 Latin), parsing and construing whole sentences
- Sources: Quintilian I.8 (Butler); Priscian, *Partitiones duodecim versuum Aeneidos principalium*; Reed and Kellogg
- Reuse: `markup` sentences; the sentences inside `EX.clauses`, `EX.latclause`, and `EX.congtruth`

**IX.2 Analysis of Passages.**
- Panels 3 (method only) · QP 0 · Exercise: **yes, 30 passages** (about 22 English and 8 Latin, each with 4–6 questions on reading, explaining, and judging)
- Sources: Quintilian I.8; Servius, *In Vergilii Aeneidem*; translations as in the live app (Dryden for Virgil, and others)
- Reuse: `passages.js` (fifteen English prose passages, English poetry) and the Latin prose and poetry in `index.html`; `latprose`, `latpoetry`, `enprose`, `enpoetry`, with their drills

**IX.3 Workshop and Marking.** Answers can be checked automatically only on sentences whose analysis is stored in advance. The live app's `EX.markup` does exactly that: the student marks every dependence in a parsed sentence and the drill compares the marks with the stored analysis. The live "Free Workshop" accepts any sentence, but it only reads the student's marks back and cannot judge them.
- Recommendation: keep IX.3 as the marking drill on stored sentences, and remove the free workshop as an exercise. **Flagged for your decision** (Open Questions 7).
- If kept: Panels 2 · QP 0 · Exercise: yes, 40 stored sentences, which could also come from the IX.1 corpus
- Sources: Thomas of Erfurt (Bursill-Hall)
- Reuse: `markup` (3), `EX.markup`, `markQ`

---

## X · *De compositione* · Making

**X.1 Composition.** Building sentences and periods of one's own.
- Panels 8 · QP 3 · Exercise: no
- Sources: Quintilian X.1–3 (Butler); Erasmus, *De copia* (1512; trans. Betty I. Knott, *Collected Works of Erasmus* 24)
- Reuse: `making` (Making Sentences), `latbuild` (6)
- Overlap with Ars Rhetorica: its Style act and its "Choosing among Correct Sentences" set. This deck should stay with how sentences are combined and built.

**X.2 Imitation.** Two introductory panels: imitation in the tradition, and Petrarch's transcription of Cicero's *Pro Archia* from the manuscript he found at Liège in 1333. Then 10 fixed English passages of 300–400 words or more, each typed out word for word, with the model and the typing box side by side on a desktop and stacked on a phone.
- Panels 2 · QP 0 · Exercise: **yes, 10 passages** (the check is word for word, so it is automatic)
- Sources: Quintilian X.2 (Butler); Roger Ascham, *The Scholemaster* (1570); on Petrarch and the Liège manuscript, Jeroen De Keyser, "The Descendants of Petrarch's *Pro Archia*," *Classical Quarterly* (2013)
- Reuse: candidate passages from `passages.js` (Gibbon, Burke, Newman, Bacon, Swift, Lincoln, the King James Version, Austen, Boswell, Thoreau); the length of each needs checking against the 300-word minimum

**X.3 Translation.** Why translation is necessary; its history (Cicero, Jerome, Bruni, Ascham's double translation); whether translations are radically unreliable; and the classical answer that the concepts of the mind are common to all, while words and letters differ.
- Panels 10 · QP 4 · Exercise: no
- Sources: Aristotle, *De interpretatione* 1, 16a5–8 (Edghill); Cicero, *De optimo genere oratorum* 14; Jerome, *Epistula* 57 to Pammachius (trans. W. H. Fremantle); Leonardo Bruni, *De interpretatione recta* (c. 1424); Ascham, *The Scholemaster*; for the objection, W. V. O. Quine, *Word and Object* (1960), and the Sapir–Whorf hypothesis
- Reuse: `traditions`, the panel on why a concept cannot be the end of signification

**X.4 Classical Composition Exercises.** All fourteen progymnasmata as Aphthonius orders them: fable, narrative, chreia, maxim, refutation, confirmation, commonplace, encomium, invective, comparison, characterization, description, thesis, and the introduction of a law. The deck says what each is, why the fable comes first, and why the exercises follow that order (from retelling to argument).
- Panels 18 (2 introductory, 14 one per exercise, 2 on the order) · QP 6 · Exercise: no
- Sources: Aphthonius, Theon, Hermogenes, and Nicolaus in George A. Kennedy, *Progymnasmata: Greek Textbooks of Prose Composition and Rhetoric* (2003); Quintilian I.9 (Butler), where the grammarian begins with Aesop's fables and goes on to maxims and chreiai; Priscian, *Praeexercitamina* (his Latin version of the Hermogenean handbook)
- Reuse: none; the live app has no progymnasmata
- Overlap with Ars Rhetorica: encomium and invective belong to its epideictic species; refutation and confirmation correspond to its parts of the oration; the maxim is its figure *sententia*. Ars Rhetorica has no progymnasmata deck now, so nothing is duplicated, but this deck should point to the rhetoric course for those four exercises rather than teach them as speeches.

---

## XI · *De aliis traditionibus et grammatica recentiore* · Other Traditions and Modern Grammar

Two large decks with no exercises.

**XI.1 The Other Classical Traditions.** How the other classical grammars differ from the Greco-Latin art: the scribal lists, Sanskrit, Arabic, Hebrew, and Chinese.
- Panels 56: Scribal lists 6; Sanskrit 13; Arabic 13; Hebrew 12; Chinese 12 · QP 18 · Exercise: no
- Sources:
  - Scribal lists: *Materials for the Sumerian Lexicon* IV (Old Babylonian and Neo-Babylonian grammatical texts); J. A. Black, *Sumerian Grammar in Babylonian Theory*
  - Sanskrit: Yāska, *Nirukta*; Pāṇini, *Aṣṭādhyāyī* (trans. S. C. Vasu); Patañjali, *Mahābhāṣya*; Bhartṛhari, *Vākyapadīya*
  - Arabic: Sībawayh, *al-Kitāb* (I found no complete English translation; G. Jahn's German translation exists); al-Zajjājī, *al-Īḍāḥ*
  - Hebrew: Saadia Gaon; Judah Ḥayyūj; Jonah ibn Janāḥ; David Kimḥi, *Mikhlol*
  - Chinese: the *Erya*; Xu Shen, *Shuowen jiezi*; Lu Fayan, *Qieyun*; full and empty words; Ma Jianzhong, *Mashi wentong* (1898)
- Reuse: `scribal` (33), `vyakarana` (34), `nahw` (30), `xiaoxue` (31), each cut to the target; `quaestiones` (10) for the question points. Hebrew is new.

**XI.2 Universal Grammar and Modern Linguistics.** From Port-Royal to the present: universal grammar; structural, generative, and dependency grammar (as heir of Thomas's *dependens* and *terminans*); typology and universals; functional grammar; and speech acts. It takes in the live app's Three Ways, Typology, Two Universal Grammars, and Great Objections where they fit.
- Panels 45 · QP 15 · Exercise: no
- Sources: *Grammaire générale et raisonnée* (Rieux and Rollin); Saussure, *Cours de linguistique générale* (trans. Wade Baskin, 1959, or Roy Harris, 1983); Bloomfield, *Language* (1933); Chomsky, *Syntactic Structures* (1957), *Aspects of the Theory of Syntax* (1965), *Cartesian Linguistics* (1966); Tesnière (1959); Greenberg (1963); Bernard Comrie, *Language Universals and Linguistic Typology*; Simon Dik, *The Theory of Functional Grammar*; M. A. K. Halliday, *An Introduction to Functional Grammar*; J. L. Austin, *How to Do Things with Words* (1962); John Searle, *Speech Acts* (1969)
- Reuse: `traditions` (9) whole; `typo` (4) and the `TYPO_ITEMS` as question points; `ug` (3); from `objections` (4), Ockham and Aurifaber and "why languages differ" (the chimaera and gender go to III.14)

---

## Totals

| Section | Items | Panels | Question points | Exercise items |
|---|---|---|---|---|
| Preliminary | 4 | 27 | 10 | 0 |
| I | 6 + master drill | 40 | 15 | 60 |
| II | 6 | 47 | 17 | 88 |
| III | 14 + 2 shared sets | 102 | 39 | 270 |
| IV | 3 | 19 | 7 | 0 |
| V | 10 | 69 | 29 | 0 |
| VI | 4 | 23 | 8 | 0 |
| VII | 3 | 30 | 10 | 136 |
| VIII | 2 | 26 | 9 | 40 |
| IX | 3 | 8 | 0 | 190 |
| X | 4 | 38 | 13 | 10 |
| XI | 2 | 101 | 33 | 0 |
| **Total** | **64 buttons** | **530** | **190** | **794** |

- 190 question points at 2–3 variants each come to **380–570 question variants**.
- The 794 exercise items are 60 (sign) + 40 (syllable) + 48 (quantity, stress, and accent) + 60 (eight parts) + 30 (figure and species) + 60 (nouns and adjectives) + 30 (pronouns) + 60 (verbs) + 30 (participles) + 40 (figures of words) + 48 (literal and figurative) + 48 (tropes) + 40 (supposition) + 120 sentences + 30 passages + 40 (marking) + 10 imitation passages.
- Without IX.3 the totals are 528 panels and 754 exercise items.
- The 64 buttons are the 61 mockup divisions plus the three exercise sets that serve more than one division (Sign and Significant Voice, Nouns and Adjectives, Verbs), counted as their own buttons. If those sets are reached only through the Exercise buttons on their divisions, the count is 61.

## Overlap with Ars Rhetorica, in one place

| Ars Grammatica | Ars Rhetorica | Proposed division |
|---|---|---|
| V.8 The Period | Style | Grammar: how the members are built. Rhetoric: their effect. |
| VII.2 Figures of Words | Figures (Cicero, Gorgias, Augustine) | Use different authors; ask about construction, not persuasion. |
| VII.3 Tropes | figure glossary (metaphor, irony, hyperbole, personification) | Same as above. |
| X.1 Composition | Style; Choosing among Correct Sentences | Grammar: combining and building sentences. |
| X.4 Classical Composition Exercises | the three species; the parts of the oration; *sententia* | Grammar teaches the exercises as Quintilian's grammarian does and points to rhetoric for encomium, invective, refutation, and confirmation. |

## Open questions

1. **Placement of III.14.** I put "The Reasons for the Parts" at the end of III, after the interjection, so that the reasons come after all eight parts. It could instead come right after III.1, the eight parts in general. Which do you want?
2. **The early mention of typology.** I placed it in P.1, where the art of a particular language meets the general science. V.5 Order is the other natural place, since basic word order is the first thing typology classifies. Should it be P.1, V.5, or both?
3. **P.4 and VI.1** treat the same criteria of correctness. Should P.4 introduce them and VI.1 apply them, or should one of them be shortened to a reference to the other?
4. **Internal overlaps.** III.2 (figure: simple and compound) overlaps IV.2 Composition, and V.10 Figures of Construction overlaps VII.2 (Donatus counts zeugma and syllepsis among the figures of words). Should each pair be kept as it is, with cross-references, or divided differently?
5. **The Analysis buttons in V.** The mockup gives each topic in V an "Analysis" exercise. Under the brief these become question points, and full analysis lives in IX. Is that right, or do you want V's buttons to open IX's corpus filtered to that topic?
6. **Live exercises that drop out.** Under the brief the live exercises `vices`, `latfaults`, `enfault`, `modes`, `objections`, `typo`, `ug`, `agree`, `govern`, `cong`, `clauses`, `period`, `congtruth`, and others have no exercise slot. I plan to turn their best items into question-point variants. Do you want any of them kept as exercises?
7. **Workshop and Marking.** Keep it as the marking drill on stored sentences (automatically checked), and remove the free workshop? Or remove IX.3 entirely?
8. **Exercise buttons that serve several divisions.** Should the master Sign drill, Nouns and Adjectives, and Verbs have their own cards, or open from the Exercise button on each division they cover?
9. **Aligned Latin translations in IX.** A published translation does not always follow the Latin phrase by phrase. When the alignment breaks, should the card show the published sentence whole beside the Latin sentence, or should we choose only translations close enough to align (for example, Loeb translations)?
10. **Imitation passages.** Which ten? The live corpus has strong candidates (Gibbon, Burke, Newman, Bacon, Swift, Lincoln, the King James Version, Austen, Boswell, Thoreau), but several excerpts there are shorter than 300 words and would need longer selections from the same texts.
11. **The second Petrarch example.** I stated only the *Pro Archia* transcription (Liège, 1333), which De Keyser's article confirms. Petrarch also found Cicero's letters to Atticus at Verona in 1345, but the sources I checked disagree about whether he copied them himself or had them copied, so I left that out until it is checked in a critical source.
12. **Why the fable comes first.** Quintilian I.9.2 begins with Aesop's fables, and Aphthonius, Hermogenes, and Nicolaus all put the fable first, but Theon's order differs. The exact reasons the handbooks give should be read in Kennedy before the panels are written, and I have not stated them here.
13. **The scope of Greek, French, and German.** The live app has full decks for each (paradigms, prose, poetry, meter). This plan uses them only where they show something distinctive. Should the full language decks be dropped from the new course, or kept as an optional appendix?
14. **Hebrew** is new material (the live app mentions it only six times). Should it be a Hebrew grammar of the medieval period (Saadia to Kimḥi) only, or include the Masoretes?
15. **Sībawayh.** I found no complete English translation of *al-Kitāb*. Can the Arabic panels quote Sībawayh in a published partial translation (for example, from secondary literature), or should they paraphrase?
