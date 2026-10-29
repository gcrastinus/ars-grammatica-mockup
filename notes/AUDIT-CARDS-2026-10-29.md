# Ars Grammatica: audit of the cards, Phase 1 (29 Oct 2026)

Scope: every card of the 284 decks (2,424 cards), every recitation outline, the deck Sources notes, the section and deck descriptions in data/structure.js and data/languages/*.js, the levels in data/tiers.js, the student-facing text of course.js, and the text of index.html. No course file was changed. The list of decks read, with the number of cards in each, is at the end.

Each finding gives the deck and card, the current text, the problem, the category (1 doctrine and accuracy, 2 terminology, 3 citations and quotations, 4 examples, 5 style, 6 consistency, 7 gaps, repetition, and order, 8 mechanics), the severity (error, should fix, suggestion), whether the change is **mechanical** (safe to apply without you) or **needs Timothy**, and the proposed wording.

## 1. Summary

Findings: **210** in all: **30 errors**, 80 should fix, 100 suggestions. Of these, 113 are marked mechanical and 97 need you. Several findings are class findings that cover many cards (for example, 113 bold lead-in fragments, or the foreign words in titles); each counts once here.

### Errors of doctrine, citation, or fact

- **prelim.definition** [sentence-and-period]: too narrow, and inconsistent with i.functions/five-kinds, which counts "Mary!", "Has the rain stopped?", "Bring the umbrella" as complete sentences; the condition given is that of the statement *(cat. 1, 6; needs Timothy)*
- **prelim.offices** [authors]: false: Dionysius Thrax defines grammar as "the practical knowledge of what is generally said by poets and prose writers" (*Technē* 1, παρὰ ποιηταῖς τε καὶ συγγραφεῦσιν); he does not limit it to the poets *(cat. 1; needs Timothy)*
- **prelim.methodice** [methodice]: wrong as a rule and inconsistent with v.agreement / reason, which teaches that agreement is "in gender, number, and case, not in the sound of the ending" (*aurīga strēnuus*); the run-on sentence also mixes the rule with the definition of the accidents *(cat. 1, 6; needs Timothy)*
- **prelim.criteria** [reason]: wrong forms: Quintilian's question at I.6.5 is the ablative singular, *hac domu* or *hac domo*, settled by *anus* and *manus*; Butler (LacusCurtius, read 29 Oct 2026): "the standard of comparison will be found in words such as *anus* or *manus*" for "*hac domu* … *hac domo*" *(cat. 1, 3; needs Timothy)*
- **iii.adverb** [comparison]: contradicts the same card, which compares the adverb of time "soon, sooner, soonest"; Latin also compares *saepe*, *saepius*, *saepissimē* ("often") *(cat. 1; needs Timothy)*
- **iv.etymology** [layers]: the card defines a doublet as a word borrowed once through French and once directly from Latin, but "cadence" did not come directly from Latin: the OED derives it from French *cadence*, from Italian *cadenza* (and *cadentia* is a late, popular Latin form) *(cat. 1; needs Timothy)*
- **v.figures** [ellipsis]: Donatus does not count *eclipsis* among the figures: *Ars maior* III.3 lists it among the other faults of speech (*vitia*), and vi.solecism / other-faults says so; the card calls it his figure *(cat. 1, 3, 6; needs Timothy)*
- **vii.schemata** [paromoeon]: the example contradicts the definition: it has three conjunctions ("and") *(cat. 1, 4; needs Timothy)*
- **viii.supposition** [material]: Ockham's division at I.64 is "into personal, simple, and material supposition"; material supposition is the third, not the first *(cat. 1, 3; needs Timothy)*
- **xi.modern** [minimalism]: wrong result: merging "opens" with "the door" gives the verb phrase "opens the door"; "the door opens" is a different structure (the door as subject) *(cat. 1; mechanical)*
- **lang.prelim.de/overview** [tradition]: the course now shows six languages (Spanish is no longer hidden in course.js) *(cat. 1, 6; mechanical)*
- **lang.ii.la/syllable** [syllable-2]: wrong: in *nemusque* and *opusque* the penult *mus*/*pus* is followed by *s* and *qu*, two consonants, so it is long by position, and the law of the penult would accent it anyway; the examples do not show the exception they are meant to show *(cat. 1, 4; needs Timothy)*
- **lang.ii.la/orthography** [diphthongs]: *poēta* shows a macron, not a diaeresis *(cat. 4; mechanical)*
- **lang.iv.la/etymology** [romance]: not a doublet: "capital" comes from *capitālis*, not *capitulum* *(cat. 1; needs Timothy)*
- **lang.vi.la/faults** [faults-2]: Donatus's example is *commorat* for *commoverat* ("had moved"), as vi.metaplasm / removing gives it; the two decks contradict each other, and *commoraverat* is not the source of *commorat* *(cat. 1, 3, 6; mechanical)*
- **lang.vii.la/figures** [schemes-authors]: "edis" is not a Latin form here; the text has the present subjunctive *edās* ("that you may eat"), parallel to *vīvās* *(cat. 4, 3; mechanical)*
- **lang.ix.en/poetry** [poetry-34 "Apposition"]: Wrong construction and wrong sense. In Shelley's lines "survive" means "outlive," and "the hand" and "the heart" are its objects: the passions survive (outlive) the hand that mocked them and the heart that fed them. The hand and heart are what did not survive. *(cat. 1 doctrine / 4 examples; needs Timothy)*
- **lang.ix.en/prose** [prose-66 Lincoln, Second Inaugural; prose-72 "The summing infinitive"]: Does not match the reading copy the course itself uses (LoC mal4361300, sources/imitation/05; also PG 14721), which reads "a just, and a lasting peace, among ourselves, and with all nations." (newly checked). *(cat. 3 citations; mechanical)*
- **lang.ix.la/prose** [prose-68 Livy 5.47.4, and the deck's Sources note]: Your rule of 25 Oct 2026 allows the course's own renderings for verse only; for prose it requires a real published translation or another passage. This is prose with a course rendering. Also the passage begins in §3 ("anseres non fefellere … abstinebatur" closes §3; §4 begins "quae res saluti fuit"), and the citation uses Arabic book numbers where the rest of the deck uses Roman (I.1.1, II.10). *(cat. 3 citations; needs Timothy)*
- **lang.ix.fr/prose** [prose-19 Montaigne, "Au lecteur" (also lang.x.fr/montaigne)]: The translation is credited to Charles Cotton, but Cotton's text (Hazlitt's edition, PG 3600, newly checked) reads "READER, thou hast here an honest book; it doth at the outset forewarn thee that … no consideration at all either to thy service or to my glory." The quotation has been modernized, which your rule (Pusey restored, "lightly modernized" removed; REVISION-GUIDE) does not allow. *(cat. 3 citations; mechanical)*
- **lang.ix.fr/prose** [prose-1, prose-6 Descartes (prose-1 also lang.x.fr/descartes)]: Veitch (PG 59, newly checked) reads "for every one thinks himself so abundantly provided with it, that those even who are the most difficult to satisfy in everything else, do not usually desire …" and "whilst I thus wished to think that all was false, it was absolutely necessary that I, who thus thought, should be somewhat; and as I observed that this truth, I think, therefore I am (COGITO ERGO SUM), was so certain … alleged by the sceptics". The quotation has been altered in spelling, punctuation, and words ("somewhat" → "something"). *(cat. 3 citations; mechanical)*
- **lang.ix.fr/prose** [prose-13 Pascal 347 (also lang.x.fr/pascal)]: Trotter (PG 18269) has "A vapour". Spelling inside a quotation keeps the source (rule 6). *(cat. 3 citations; mechanical)*
- **lang.ix.de/poetry** [poetry-16 Luther, Context]: False as stated: the adjective *feste* has its ending; it is the article *ein* that lacks the feminine ending (*eine*), as poetry-17 and poetry-18 say. *(cat. 1 accuracy; mechanical)*
- **lang.ix.de/prose** [prose-34 Marx and Engels (Samuel Moore)]: Moore (PG 61, newly checked) reads "A spectre is haunting Europe—the spectre of Communism. All the Powers of old Europe have entered into a holy alliance to exorcise this spectre:". Spelling and capital altered inside a quotation. *(cat. 3 citations; mechanical)*
- **lang.ix.de/prose** [prose-1 Kant (Abbott)]: Abbott (PG 5682): "which can be called good, without qualification, except a good will." *(cat. 3 citations; mechanical)*
- **lang.x.en/lincoln text**: the same error as the Section IX finding (see §2) *(cat. 3 citations; mechanical)*
- **lang.x.de/manifest; lang.x.de/kant; lang.x.fr/descartes; lang.x.fr/montaigne; lang.x.fr/pascal; lang.x.grc/demosthenes**: the same error as the Section IX finding (see §2) *(cat. 3 citations; mechanical)*
- **lang.x.en/dickens, style card**: The passage has seven contrasting pairs (best/worst, wisdom/foolishness, belief/incredulity, Light/Darkness, hope/despair, everything/nothing, Heaven/the other way). *(cat. 1 accuracy; mechanical)*

### Other errors (markup and consistency)

- **lang.iii-decl.de/paradigms** [paradigms-17 to paradigms-24]: broken markup: each opens `<em>` and closes `</i>`, so the `<em>` is never closed and the browser carries the italic on past the participle *(cat. 8; mechanical)*
- **lang.ix.es/prose, deck subtitle**: The deck has fourteen passages (one, *Don Quijote* I.8, was dropped on 27 Oct; the language list already says "Fourteen"). *(cat. 6 consistency; mechanical)*

### Totals by category

| Category | Errors | Should fix | Suggestions | Total |
|---|---|---|---|---|
| 1. Doctrine and accuracy | 17 | 18 | 13 | 48 |
| 2. Terminology | 0 | 4 | 8 | 12 |
| 3. Citations and quotations | 9 | 20 | 4 | 33 |
| 4. Examples | 2 | 15 | 38 | 55 |
| 5. Style | 0 | 12 | 18 | 30 |
| 6. Consistency | 1 | 9 | 11 | 21 |
| 7. Gaps, repetition, order | 0 | 2 | 4 | 6 |
| 8. Mechanics | 1 | 0 | 4 | 5 |
| **All** (by the first category named) | 30 | 80 | 100 | 210 |

### Totals by section

| Section | Errors | Should fix | Suggestions | Total |
|---|---|---|---|---|
| Preliminaries | 4 | 14 | 8 | 26 |
| Section I | 0 | 6 | 8 | 14 |
| Section II | 0 | 6 | 7 | 13 |
| Section III | 1 | 2 | 3 | 6 |
| Section IV | 1 | 0 | 0 | 1 |
| Section V | 1 | 1 | 4 | 6 |
| Section VII | 1 | 1 | 0 | 2 |
| Section VIII | 1 | 1 | 2 | 4 |
| Section IX | 0 | 1 | 0 | 1 |
| Section X | 0 | 0 | 1 | 1 |
| Section XI | 1 | 2 | 2 | 5 |
| Language layer, Preliminary | 1 | 2 | 6 | 9 |
| Language layer, general | 0 | 2 | 1 | 3 |
| Language layer, II | 2 | 6 | 2 | 10 |
| Language layer, III | 1 | 5 | 5 | 11 |
| Language layer, IV | 1 | 1 | 7 | 9 |
| Language layer, V | 0 | 2 | 2 | 4 |
| Language layer, VI | 1 | 1 | 2 | 4 |
| Language layer, VII | 1 | 0 | 4 | 5 |
| Language layer, IX | 9 | 19 | 28 | 56 |
| Language layer, X | 3 | 4 | 3 | 10 |
| Structure and levels | 1 | 4 | 4 | 9 |
| Main page and course.js | 0 | 0 | 1 | 1 |

### Quotations and translations: what was checked

- **Settled earlier and not repeated:** the quotations in sources/QUOTATION-CHECK-OCT-19.md, the edition checks of Oct 20 (sources/IMITATION-CHECK-OCT-20.md) and Oct 21 (TRANSLATIONS-USED.md entries), and the whole Spanish layer (sources/QUOTATION-CHECK-SPANISH.md).
- **Newly checked in this audit** (against Project Gutenberg texts downloaded for the purpose, the course's own files in sources/passages and sources/imitation, and LacusCurtius for Quintilian): Quintilian I.4–6 (Butler); the English passages of lang.ix.en/prose; Veitch's Descartes, Cotton's Montaigne, Trotter's Pascal, Moore's *Manifesto*, Abbott's Kant, Graham's Clausewitz, Hunt's Grimm, Zimmern's Nietzsche, Common's Nietzsche (two passages). Of the ten named translations checked in the language layer, seven failed: the quotation had been modernized or altered (see the findings); Lincoln’s Second Inaugural also differs from the reading copy.
- **Unverified, with what is needed:** Mackail's two epigrams in lang.ix.grc/poetry (Mackail, *Select Epigrams*, 1890/1906); Milton's *Areopagitica* in lang.ix.en/prose (an edition to name); *Medea* 5 *δέρας/δέρος* (the edition followed); the Donatus, Priscian, and Bacon renderings that TRANSLATIONS-USED.md marks "to be confirmed by Timothy"; the other named translations of the language layer (125 "Translation:" lines in 43 decks), which were not compared word by word. Given that seven of ten checks failed, I recommend that they all be compared before Phase 2.

## 2. Findings, by section and deck


### PRELIMINARIES

#### prelim.definition

- **[arts-of-speech, title]** · cat. 2 · **should fix** · needs Timothy (his finished text)
  - Current: "Why did the ancients put grammar first?"
  - Problem: rule 27a: never "the ancients"
  - Proposed: "Why does the classical tradition put grammar first?"

- **[sentence-and-period]** · cat. 1, 6 · **error** · needs Timothy
  - Current: "A sentence is complete when something is named and something is said of it, as in “The sailor waits.”"
  - Problem: too narrow, and inconsistent with i.functions/five-kinds, which counts "Mary!", "Has the rain stopped?", "Bring the umbrella" as complete sentences; the condition given is that of the statement
  - Proposed: "A sentence is complete when it expresses a complete thought; in a statement, as in “The sailor waits,” something is named and something is said of it." (same change in recitation line 24)

- **[sentence-and-period]** · cat. 3 · **should fix** · mechanical
  - Current: "(Ecclesiastes 12:13, King James Version)"
  - Problem: rule 8b: translator (KJV included) never named inline; deck sources line lacks it
  - Proposed: "(Ecclesiastes 12:13)"; add "; the Bible, King James Version" to the deck's sources line

- **[art]** · cat. 3 · **should fix** · needs Timothy
  - Current: "…which are in a way subordinate, “inasmuch as the body is subordinate to the soul, whereas an individual man, as regards his soul, is free,”"
  - Problem: the words in quotation marks are not the English Dominican text recorded in TRANSLATIONS-USED ("inasmuch as the body is in servile subjection to the soul, and man, as regards his soul, is free [liber]"); src calls it "in paraphrase" although it is in quotation marks. If this is Timothy's own adjustment (rule 8c) it stands, and only the src tag is wrong
  - Proposed: either keep (and drop "in paraphrase" from src) or restore "inasmuch as the body is in servile subjection to the soul, and man, as regards his soul, is free"

- **[art]** · cat. 1 · **suggestion** · needs Timothy
  - Current: "such as an argument or a well-constructed paragraph"
  - Problem: Thomas's examples are a syllogism and a *fitting speech* (*oratio congrua*), i.e., a correctly formed sentence, which is exactly the work of grammar; "paragraph" is not in the text
  - Proposed: "such as an argument or a correctly formed sentence (*oratio congrua*)"

- **[correct-and-true]** · cat. 5 · **suggestion** · mechanical
  - Current: "while the logician judges the first false"
  - Problem: rule 16, "whereas" for contrast
  - Proposed: "whereas the logician judges the first false"

- **[end]** · cat. 5 · **suggestion** · mechanical
  - Current: "The ends of grammar, that is the purposes and results"
  - Problem: missing comma
  - Proposed: "The ends of grammar, that is, the purposes and results"

- **[first]** · cat. 3 · **should fix** · needs Timothy
  - Current: "Here we use “literature” and “the teacher of literature” to translate Quintilian’s terms for grammar and the grammarian"
  - Problem: the quotation is Butler's (TRANSLATIONS-USED), not the course's, and it contains "the teaching of literature," not "the teacher of literature"; "we use" claims the translation for the course
  - Proposed: "In this translation “literature” renders Quintilian’s *grammatica*, the art of grammar."

- **[recitation 1]** · cat. 8 · **suggestion** · mechanical
  - Current: "…(cf. Aristotle, *Rhetoric* I.1)."
  - Problem: rule 29: recitations carry no sources
  - Proposed: drop the parenthesis

#### prelim.offices

- **[authors]** · cat. 1 · **error** · needs Timothy
  - Current: "Quintilian does not limit the grammarian to the poets, as Dionysius Thrax does"
  - Problem: false: Dionysius Thrax defines grammar as "the practical knowledge of what is generally said by poets and prose writers" (*Technē* 1, παρὰ ποιηταῖς τε καὶ συγγραφεῦσιν); he does not limit it to the poets
  - Proposed: "Quintilian does not limit the grammarian to the poets, and neither does Dionysius Thrax, who defines grammar as the practical knowledge of what is generally said by poets and prose writers (*Technē* 1)." (or simply cut ", as Dionysius Thrax does")

- **[four-offices]** · cat. 1, 6 · **should fix** · needs Timothy
  - Current: "the first task of the grammarian is to direct our speaking and writing toward clarity and correctness. But the second part of the profession of the grammarian is the evaluation and correction of writing."
  - Problem: "first task" here means the first *part*; the same card then lists reading as the first of the four tasks, and card 3 says "Reading is the first task." Also Quintilian's second part is the interpretation of the poets, not "the evaluation and correction of writing" (correction is one of four tasks inside it)
  - Proposed: "the first part of the grammarian's profession is to direct our speaking and writing toward clarity and correctness. The second part is the interpretation of the poets and of other writers."

- **[reading]** · cat. 3 · **should fix** · mechanical
  - Current: "(Psalm 23:1, King James Version)"; [explaining] "(Ecclesiastes 12:1, King James Version)"
  - Problem: rule 8b
  - Proposed: "(Psalm 23:1)", "(Ecclesiastes 12:1)"; add "the Bible, King James Version" to the deck's sources line

- **[explaining]** · cat. 4, 7 · **should fix** · needs Timothy
  - Current: the Ecclesiastes 12:1 example ("Remember" a verb, "nigh" a rare word)
  - Problem: rule 18a: the same verse is analyzed in the same respects on prelim.methodice / one-sentence ("Remember" a verb in the imperative; "nor the years draw nigh")
  - Proposed: keep it on prelim.methodice, where the whole sentence is the subject, and give prelim.offices / explaining a fresh verse, e.g., "In “The heavens declare the glory of God” (Psalm 19:1), “heavens” is a noun, “declare” a verb, and “glory” a noun; and in “the firmament sheweth his handywork,” the rare word “firmament” means the sky." (Psalm 19:1 is used only in a question point of this deck, which would then need a new example)

- **[correcting]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "“brung” for “brought” and “drownded” for “drowned” are barbarisms"
  - Problem: rule 18a: both are vi.barbarism's examples (R log kept "brung" and "drownded" there)
  - Proposed: replace with fresh barbarisms, e.g., "“acrost” for “across” and “chimley” for “chimney”" (several obvious candidates are taken: "heighth" in vi.usage, "attackted" in vi.ex.usage, "mischievious" in vi.barbarism; search data/ before applying)

- **[reading]** · cat. 4, 6 · **should fix** · needs Timothy
  - Current: "Latin *malum* with a short *a* means “evil,” but *mālum* with a long *ā* means “apple”"
  - Problem: rule 18a: the same pair, in the same respect, is on i.ambiguity / pronunciation and on ii.quantity / accent-quantity (card and recitation)
  - Proposed: keep the pair on ii.quantity, where quantity is taught; here use *levis* (“light”) and *lēvis* (“smooth”) only if Timothy accepts its other uses (iv.derivation, lang decks); on i.ambiguity use *populus* (“people”) and *pōpulus* (“poplar”) (search data/ before applying)

#### prelim.methodice

- **[methodice]** · cat. 1, 6 · **error** · needs Timothy
  - Current: "it gives the rule that a Latin adjective agrees with its noun in what the noun’s inflections are; … In Latin, the inflections (or endings of the word) must agree when one word modifies another as in *puella bona* … note the different endings, -a and -ae."
  - Problem: wrong as a rule and inconsistent with v.agreement / reason, which teaches that agreement is "in gender, number, and case, not in the sound of the ending" (*aurīga strēnuus*); the run-on sentence also mixes the rule with the definition of the accidents
  - Proposed: "For example, it divides nouns into proper nouns, like “London,” and common nouns, like “city”; and it gives the rule that a Latin adjective agrees with its noun in gender, number, and case. Every Latin noun has a gender, which belongs to the noun itself; a number, singular or plural; and a case, which shows what the noun does in the sentence (English shows case chiefly in its pronouns: “they,” “their,” “them”). So *puella bona* (“a good girl”) becomes *puellae bonae* (“good girls”) when the noun is plural, because the adjective follows the noun in number."

- **[methodice]** · cat. 4 · **should fix** · mechanical
  - Current: "(in English we can see case in pronouns especially, they, their, them)"
  - Problem: rule 4: mentioned words in double quotation marks
  - Proposed: "(“they,” “their,” “them”)" (covered by the replacement above if adopted)

- **[two-parts]** · cat. 3 · **should fix** · needs Timothy
  - Current: "he adds “of which the Greeks call the first *methodice* and the second *historice*”"
  - Problem: Quintilian's Latin is *quarum illam methodicen, hanc historicen vocant*, "they call"; "the Greeks" is not in the text (the rendering is recorded as Timothy's own)
  - Proposed: "“of which they call the first *methodice* and the second *historice*”"

- **[two-parts]** · cat. 5 · **suggestion** · needs Timothy
  - Current: "So the part of grammar that teaches the precepts of the art is the part concerned with precepts (*methodice*…)"
  - Problem: says the same thing twice (9a)
  - Proposed: "So the first part, which teaches the precepts of the art, is called *methodice* (from the Greek for the methodical part), and the second, which interprets the authors, is called *historice* (…)."

- **[one-sentence]** · cat. 3 · **should fix** · mechanical
  - Current: "Consider Ecclesiastes 12:1, which in the King James Version reads:"
  - Problem: rule 8b
  - Proposed: "Consider Ecclesiastes 12:1:"; add KJV to sources line

- **[schools]** · cat. 6 · **suggestion** · mechanical
  - Current: "such as Servius’s commentary on Vergil"
  - Problem: the course spells "Virgil" in 18 decks and "Vergil" in 4 (also ix.passages, lang.ii.la/meter, lang.ix.la/servius)
  - Proposed: "Virgil" throughout (outside titles of editions)

#### prelim.criteria

- **[antiquity]** · cat. 1 · **should fix** · needs Timothy
  - Current: "as “thou art” is still acceptable in the reading of Scripture and in prayer, as in the “Our Father”"
  - Problem: the Our Father has "who art" (or "which art") and "thy," not "thou art"
  - Proposed: "as “who art in heaven” is still said in the Our Father, and “thou art” in the reading of Scripture and in prayer"

- **[usage]** · cat. 1, 3 · **should fix** · needs Timothy
  - Current: "An example of a modern grammarian and teacher of oratory who seeks to do this is Ward Farnsworth, in his book series *Classical English*."
  - Problem: Farnsworth is a law professor and writer on style; there is no series titled *Classical English*: the books are *Farnsworth's Classical English Rhetoric* (2011), *…Metaphor* (2016), and *…Style* (2020)
  - Proposed: "One modern writer who seeks to do this is Ward Farnsworth, in his books on classical English rhetoric, metaphor, and style."

- **[analogy-anomaly]** · cat. 2 · **should fix** · needs Timothy (his text)
  - Current: "But the ancient grammarians disputed whether"
  - Problem: rule 27a
  - Proposed: "But the classical grammarians disputed whether" (recitation line too)

- **[faults]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "“The list of books are on the table” for “The list of books is on the table” is a solecism"
  - Problem: rule 18a: the same example in the same respect is on vi.solecism (R log)
  - Proposed: a fresh solecism, e.g., "“Everyone in the choir have a part” for “Everyone in the choir has a part”" ("Neither of the answers are" is taken by vi.review; search data/ before applying)

- **[reason]** · cat. 1, 3 · **error** · needs Timothy
  - Current: "Quintilian decides between *domuum* and *domorum* (“of houses”) by comparison with … *anus* … and *manus* … (I.6.5)"
  - Problem: wrong forms: Quintilian's question at I.6.5 is the ablative singular, *hac domu* or *hac domo*, settled by *anus* and *manus*; Butler (LacusCurtius, read 29 Oct 2026): "the standard of comparison will be found in words such as *anus* or *manus*" for "*hac domu* … *hac domo*"
  - Proposed: "and Quintilian decides between *domū* and *domō* (“by the house”) by comparison with words of the same declension, such as *anus* (“old woman”) and *manus* (“hand”) (I.6.5)"


### SECTION I

#### i.sign

- **[natural]** · cat. 1 · **should fix** · needs Timothy
  - Current: "since the meaning of a given word, like “water,” has no natural connection with what it signifies, i.e., “water” as a sound has no natural connection with water itself"
  - Problem: it is the sound, not the meaning, that has no natural connection with the thing (the recitation says "the sound of a word"); as written the sentence says the meaning is unconnected with what is meant
  - Proposed: "since the sound of a word, like “water,” has no natural connection with what it signifies: “water” as a sound has nothing in common with water itself."

- **[why-grammar]** · cat. 1, 6 · **should fix** · needs Timothy
  - Current: "The grammarians called a sound formed by the mouth of a living thing a voice (*vox*)"
  - Problem: inconsistent with the definition the course gives elsewhere from Donatus (prelim.definition / voice-to-sentence and ii.voice: voice is "the motion of air perceptible to hearing"); the P-deck source check removed "sound produced by a living being" from the Preliminaries as Aristotle's idea, not Donatus's
  - Proposed: "Aristotle called a sound formed by the mouth of a living thing a voice (*vox*), and the grammarians divided voices into those that signify and those that do not." (or recall ii.voice's settled account)

- **[why-grammar]** · cat. 1, 4 · **suggestion** · needs Timothy
  - Current: "A groan is a significant voice, but it signifies by nature, and it always means pain."
  - Problem: "always" overstated (a groan can show effort or weariness); the groan is also the example of prelim.definition / material and i.sign / natural in the same respect
  - Proposed: "A groan is a significant voice, but it signifies by nature."

- **[same-for-all]** · cat. 5 · **suggestion** · mechanical
  - Current: "Think of two photographs of the same horse"
  - Problem: rule 9: no imperatives; "Consider" is the accepted form
  - Proposed: "Consider two photographs of the same horse"

- **[what-sign]** · cat. 3 · **should fix** · needs Timothy (unverified)
  - Current: John of St. Thomas's definition (Deely)
  - Problem: still "not found" in the Oct 19 check; not verified since
  - Proposed: check against Deely, *Tractatus de Signis* (1985), p. 25 (Summulae I.2) before publication

#### i.imposition

- **[usage-change]** · cat. 3, 6 · **should fix** · needs Timothy
  - Current: "Quintilian calls usage “the surest teacher of speaking” (*Institutio oratoria* I.6.3)"
  - Problem: the same passage is quoted on prelim.criteria / usage in Butler's words, "Usage however is the surest pilot in speaking"; "the surest teacher of speaking" is not Butler's wording, so it is an unrecorded translation inside quotation marks (Latin *consuetudo vero certissima loquendi magistra*)
  - Proposed: "Quintilian calls usage “the surest pilot in speaking” (*Institutio oratoria* I.6.3)," or, if the literal sense is wanted, "Quintilian calls usage the surest teacher (*magistra*) of speaking (*Institutio oratoria* I.6.3)" without quotation marks

- **[what-imposition]** · cat. 1 · **suggestion** · needs Timothy
  - Current: "the English word “neither” used to be pronounced like n-ee-ther, as it still is in North America, but is now pronounced n-eye-ther in England"
  - Problem: overstated: both pronunciations are heard on both sides of the Atlantic; the claim true as stated is about the usual pronunciation
  - Proposed: "…the English word “neither” was once usually pronounced n-ee-ther, as it still usually is in North America, but in England it is now usually pronounced n-eye-ther"

- **[many-languages]** · cat. 7 · **suggestion** · needs Timothy
  - Current: closing paragraph "“Runs,” “ran,” and “will run” all signify the same action, yet they do not say quite the same thing…"
  - Problem: i.consignification / consignification opens with the same sentence and example ("The words “runs,” “ran,” and “will run” all signify the same action…"); rule 9a/26
  - Proposed: end the deck with the general question only: "Once a word has been imposed, we can ask more exactly what it signifies, and what it signifies along with that; that is the next question."

#### i.consignification

- **[accidents]** · cat. 4 · **should fix** · mechanical
  - Current: "Latin *venit* (“he comes”) and *veni* (“come!”)"
  - Problem: rule 6: the course's own Latin examples mark long vowels; here the marks matter, because *venit* without them can also be read as the perfect *vēnit*, "he came"
  - Proposed: "Latin *venit* (“he comes”) and *venī* (“come!”)"; likewise on this deck *currō*, *amō*, *amās*, *equī* (and in prelim.criteria *domōrum*)

- **[accidents]** · cat. 5 · **suggestion** · mechanical
  - Current: "(notice the endings in older English: …)"
  - Problem: "notice" as an imperative (rule 9; CLAUDE.md tic list)
  - Proposed: "(older English had a distinct ending in each person: “I love,” “thou lovest,” “he loveth”)"

- **[why-time]** · cat. 4 · **suggestion** · needs Timothy
  - Current: / [modes] "“Running is good exercise”" used on two cards of the deck in the same respect
  - Problem: rule 18 (no example twice in a deck)
  - Proposed: on modes: "“Swimming builds strength”" (search data/ first)

#### i.syncategorematic

- **[priscian]** · cat. 2 · **should fix** · needs Timothy (his text)
  - Current: "The ancient grammarian Priscian reports that the dialecticians…"
  - Problem: rule 27a, and rule 10 names this very wording as a superseded model; Priscian is placed by time and place on i.consignification / priscian
  - Proposed: "Priscian reports that the dialecticians…"

- **[with-others]** · cat. 4 · **suggestion** · mechanical
  - Current: , [kinds] Latin examples *non*, *si*, *nullus*
  - Problem: rule 6 (macrons on the course's own examples)
  - Proposed: *nōn*, *sī*, *nūllus* (also on what-they-do: *nūllus equus currit*)

#### i.functions

- **[marks]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "*venit* (“he comes”) becomes *venitne?*"; "Latin *Veni!* (“Come!”)"
  - Problem: the same Latin pair, in the same respect (mood marked in the form), is on i.consignification / accidents (rule 18a); and rule 6 macrons (*Venī!*)
  - Proposed: keep it here, where the marks of the kinds of sentence are the subject, and give i.consignification / accidents a fresh pair, e.g., *tacet* (“he is silent”) and *tacē* (“be silent!”) (search data/ first)


### SECTION II

#### ii.voice

No finding beyond the cross-deck one under i.sign / why-grammar (the definition of voice).

#### ii.letter

- **[english-spelling]** · cat. 1 · **should fix** · needs Timothy
  - Current: "English spelling was largely fixed by the fifteenth and sixteenth centuries, after printing came to England"
  - Problem: overstated: printing came in 1476, and the standard histories (Baugh and Cable) put the settling of English spelling in the later seventeenth century
  - Proposed: "English spelling began to be fixed in the fifteenth and sixteenth centuries, after printing came to England, and was largely settled by the end of the seventeenth century, but the pronunciation of English continued to change."

- **[to-syllable]** · cat. 1 · **suggestion** · needs Timothy
  - Current: "Every syllable must contain a vowel or a diphthong"
  - Problem: true of Latin; English has syllables without a vowel sound ("button," "bottle," whose second syllables are a syllabic n and l)
  - Proposed: "In Latin every syllable contains a vowel or a diphthong"

- **[restored-vowels]** · cat. 2 · **suggestion** · mechanical
  - Current: "chiefly from the ancient grammarians, from spelling, and from verse"
  - Problem: rule 27a
  - Proposed: "chiefly from the classical grammarians"

- **[liquids-doubles]** · cat. 4 · **should fix** · mechanical
  - Current: , [restored-consonants], [quintilian-letters], [etymological-spelling] "*rex*", "*gens*", "*uinum*", "*debitum*", "*dubitare*", "*Cicero*"
  - Problem: rule 6, and the deck itself says "in the Latin examples of this course every long vowel is marked"
  - Proposed: *rēx*, *gēns*, *uīnum*, *dēbitum*, *dubitāre*, *Cicerō* (as on accidents)

- **[restored-consonants]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "so *Cicero* is “Kikero”"
  - Problem: the same name makes the same point on accidents ("C always stood for that sound … as in *Cicerō*"); rule 9a
  - Proposed: "so *cīvis* (“citizen”) is “keewis”" (*cēna* is taken; search data/ first)

- **[recitation 30–32]** · cat. 5 · **should fix** · mechanical
  - Current: "“boy”." "“go”." "“y”."
  - Problem: rule 3, periods inside closing quotation marks
  - Proposed: "“boy.”" "“go.”" "“y.”" (also ii.quantity recitation 3, "“how much.”")

#### ii.syllable

- **[latin-division-1]** · cat. 4 · **suggestion** · mechanical
  - Current: "*sanc-tus* (“holy”)"
  - Problem: rule 6: the vowel is long by hidden quantity, *sānctus*
  - Proposed: "*sānc-tus*"

#### ii.quantity

- **[why-it-matters]** · cat. 1, 6 · **should fix** · needs Timothy
  - Current: "Quantity and accent, as we noted earlier, are minor accidents of the syllable, matters of how a single word is pronounced."
  - Problem: the deck never says they are minor (the pointer "as we noted earlier" points to nothing), and calling them "minor" is the kind of diminishing word the audit is to flag: the same card goes on to say meter is built from them, and ii.syllable / to-quantity calls length "the most important accident of the syllable"
  - Proposed: "Quantity and accent are accidents of the syllable, matters of how a single word is pronounced. But meter is built from them, …"

- [accent-quantity] "the Latin words *malum* (“evil”) and *mālum* (“apple”)" see prelim.offices / reading: the same pair in the same respect on three decks; keep it here

#### ii.punctuation

- **[deck title]** · cat. 6 · **suggestion** · mechanical
  - Current: "Punctuation (*posituræ*)"
  - Problem: the cards write *positurae*; the ligature appears only in the title
  - Proposed: "Punctuation (*positurae*)" (and the tile in data/structure.js if it has the same form)

- **[three-languages]** · cat. 4 · **should fix** · mechanical
  - Current: German and French example sentences in double quotation marks, roman: "“Ich weiß, dass er kommt”", "“Ich komme bei euch vorbei, sobald ich Zeit habe”", "“Ses parents, ses amis et ses collègues assistaient au lancement”", "“Feuer, Wasser, Luft und Erde”", "“Je comprends le bonheur de Rosalie : son père est enfin revenu”", "“Beachten Sie folgenden Hinweis: …”", "“Er hat alles verspielt: …”"; also "“car” (“for”) or “donc” (“so”)" and "“et” and “und”"
  - Problem: rule 8 / STYLE-GUIDE-CARDS 4: foreign words and example sentences are italic; the same card already italicizes its last three examples
  - Proposed: italic, no quotation marks: *Ich weiß, dass er kommt* (“I know that he is coming”), … *car* (“for”) or *donc* (“so”); *et* and *und*

- **[modern-marks]** · cat. 1 · **suggestion** · needs Timothy
  - Current: "the **period** …, which ends a sentence that states something"
  - Problem: too narrow: the period also ends a command or request ("Open the door.")
  - Proposed: "which ends a sentence that states something or gives a command"

- **[why-punctuation]** · cat. 1 · **suggestion** · needs Timothy
  - Current: "Roman books were usually written without spaces between the words and with few marks of any kind"
  - Problem: true of books from about the second century AD; in Caesar's own time Latin was commonly written with points (interpuncts) between the words, which Parkes also records
  - Proposed: "Roman books of the imperial period were usually written without spaces between the words …" (the Caesar sentence can stay as an illustration of how later copies looked)

#### ii.meter

- **[lyric]** · cat. 4, 6 · **should fix** · mechanical
  - Current: "*sī-tē-c(um) at-tu-le-rīs bo-n(am) at-que mā-gnam*"
  - Problem: inconsistent with the course: ii.quantity / hidden says the course does not mark the vowel before *gn* (its src notes that *māgnus* was avoided for that reason), and ii.syllable divides *mag-nus*; here the vowel is marked long and the word divided *mā-gnam*
  - Proposed: "*sī-tē-c(um) at-tu-le-rīs bo-n(am) at-que mag-nam*"


### SECTION III

#### Class finding for Section III (and ii.voice, ii.letter, v.congruity, v.figures, vi.barbarism, vi.solecism)

- **[class: renderings of Donatus, Priscian, and Bacon]** · cat. 3 · **should fix** · needs Timothy
  - Current: The English renderings of Donatus's and Priscian's definitions (iii.parts cards 3–10; iii.reasons cards 6–7; iii.figure, iii.homonymy, iii.noun-1, iii.noun-2, iii.pronoun, iii.verb-1; ii.voice "every voice is either articulate or confused"; ii.letter; vi.barbarism III.1; vi.solecism III.2; v.figures III.2; v.congruity) and of Roger Bacon (iii.reasons / why-eight, "grammar is one and the same in substance in all languages, although it varies in its accidents") stand in quotation marks, but sources/TRANSLATIONS-USED.md ("Rule 27b") records them as Claude's renderings "to be confirmed by Timothy," and they are still unconfirmed
  - Proposed: Timothy confirms them as his own (then the record says so), or each is recast without quotation marks ("Donatus defines the noun as a part of speech with case that signifies a body or a thing, properly or commonly (*pars orationis cum casu …*; *Ars minor*)"). The Latin of each was checked against Keil earlier; the English is the open point.

#### iii.parts

No finding beyond the class finding above.

#### iii.reasons

No finding beyond the class finding above (card word-thing is Timothy's text of 26 Oct and was not touched).

#### iii.noun-1

No finding beyond the class finding.

#### iii.noun-2

No finding beyond the class finding.

#### iii.figure

No finding beyond the class finding.

#### iii.pronoun

- **[personal]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "“Her and me arrived late” is an error of case, because the subject requires “She and I.”"
  - Problem: rule 18a: prelim.offices / correcting gives "“Him and me went home” for “He and I went home”" in the same respect
  - Proposed: keep this one (case is taught here) and change prelim.offices to another solecism, e.g., "“Each of the ships have sailed” for “Each of the ships has sailed”" ("Each of the boys" is in two English decks; search data/ first)

- **[interrogative-indefinite]** · cat. 6 · **suggestion** · mechanical
  - Current: "several of them, such as “each” and “nobody,” are also among the syncategorematic words we studied in Section I"
  - Problem: neither "each" nor "nobody" is among the words named in Section I (i.syncategorematic names "every," "no," "some," "nothing," …)
  - Proposed: "several of them, such as “each” and “nobody,” are also syncategorematic words, like “every” and “no,” which we studied in Section I"

#### iii.homonymy

No finding beyond the class finding.

#### iii.verb-1

No finding beyond the class finding.

#### iii.verb-2

No finding beyond the class finding.

#### iii.participle

- **[gerundive]** · cat. 1 · **suggestion** · needs Timothy
  - Current: "as in Cato’s saying *Carthāgō dēlenda est*"
  - Problem: the sentence in this form is not found in any ancient author (Pliny and Plutarch report Cato's refrain in other words); the src already says "as traditionally quoted," but the card states it as Cato's
  - Proposed: "as in the saying traditionally attributed to Cato, *Carthāgō dēlenda est*"

#### iii.adverb

- **[comparison]** · cat. 1 · **error** · needs Timothy
  - Current: "In both languages, adverbs that signify place, time, or negation, such as “here,” “now,” and “not,” cannot be compared"
  - Problem: contradicts the same card, which compares the adverb of time "soon, sooner, soonest"; Latin also compares *saepe*, *saepius*, *saepissimē* ("often")
  - Proposed: "In both languages, adverbs such as “here,” “now,” and “not” cannot be compared, for the same reason that some adjectives cannot: what they signify does not admit more and less. Adverbs of time that do admit more and less are compared, as “soon,” “sooner,” “soonest,” and Latin *saepe*, *saepius*, *saepissimē* (“often”)."

#### iii.preposition

- **[english]** · cat. 1, 6 · **should fix** · needs Timothy
  - Current: "“for her and me,” which careful usage prefers to “for her and I.”"
  - Problem: inconsistent with v.government / english and its recitation ("so “for you and I” is a failure of government") and lang.vi.es/errors ("“Between you and I” … the pronoun" is an error): the course calls the same construction an error in one place and a matter of preference in another. Rule 17a (careful usage) is for disputed usage; standard grammars treat the objective after a preposition as required
  - Proposed: "“for her and me,” not “for her and I,” which is an error of case" (or, if Timothy prefers 17a here, soften v.government and lang.vi.es/errors to match)

#### iii.conjunction

No finding beyond the class finding.

#### iii.interjection

No finding beyond the class finding.


### SECTION IV

#### iv.derivation

No finding.

#### iv.composition

No finding.

#### iv.etymology

- **[layers]** · cat. 1 · **error** · needs Timothy
  - Current: "Such pairs are called **doublets**: “chance” (through French) and “cadence” (from Latin), both from *cadentia*"
  - Problem: the card defines a doublet as a word borrowed once through French and once directly from Latin, but "cadence" did not come directly from Latin: the OED derives it from French *cadence*, from Italian *cadenza* (and *cadentia* is a late, popular Latin form)
  - Proposed: "“sever” (through French) and “separate” (from Latin), both from *sēparāre*" (neither word is used elsewhere in the course; "royal"/"regal" would repeat iii.homonymy)

- [cratylus] not audited for changes: pending Timothy's own text (17 Oct 2026). Its quotations (399c in paraphrase; 439b, Fowler) are recorded as checked. 


### SECTION V

#### v.congruity

- **[completeness]** · cat. 6 · **should fix** · needs Timothy
  - Current: "Thomas of Erfurt says that completeness requires a subject and a verb joined together, because a noun alone or a verb alone does not yet say that anything is or is not so"
  - Problem: stated without qualification, this makes "Mary!" and "Bring the umbrella," which i.functions / five-kinds counts as complete sentences, incomplete; it is the same tension as prelim.definition / sentence-and-period. The card reports Thomas correctly, but the course never says how the two accounts fit
  - Proposed: add after the sentence: "A command such as “Bring the umbrella” has its subject understood (“you”), and a call such as “Mary!” was disputed among the modists; but every statement, which says that something is or is not so, needs both." (or decide the doctrine on prelim.definition and recall it here)

#### v.agreement

No finding (the King James Version named on authors is Timothy's exception, AW 6).

#### v.government

See iii.preposition / english (the same construction called an error here and a preference there).

#### v.dependence

- **[kinds]** · cat. 4 · **suggestion** · needs Timothy
  - Current: , [many-constructions], [transitive-intransitive] "*homō albus* (“a white man”)"; "*homō albus currit bene*, “a white man runs well”"; "in “white man” the whiteness belongs to the man"
  - Problem: rule 18b: a modern reader may take "a white man" racially and stumble on it; the Latin is Thomas's own example and stays, but the English gloss can prevent the misreading
  - Proposed: gloss *albus* as "pale": "*homō albus* (“a pale man”; Thomas's stock example of a man and his color)", and in transitive-intransitive "in *homō albus* the paleness belongs to the man"

#### v.order

No finding.

#### v.phrase

- **[infinitive]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "In Bacon’s “some few to be chewed and digested” (*Essays*, “Of Studies”), the infinitive phrase is used as an adjective, describing the books."
  - Problem: open to misreading: in Bacon's sentence ("Some books are to be tasted, others to be swallowed, and some few to be chewed and digested") the infinitive stands in the predicate after "are," understood, so the student sees no noun that it describes; the deck also uses "Of Studies" twice on v.clause
  - Proposed: an attributive example: "In “He had no time to lose,” the infinitive phrase “to lose” is used as an adjective, describing “time.”" (search data/ first)

#### v.clause

No finding (the Rasselas wording is the Morley text, recorded as verified).

#### v.period

No finding.

#### v.mood

No finding.

#### v.figures

- **[ellipsis]** · cat. 1, 3, 6 · **error** · needs Timothy
  - Current: "Donatus names this figure *eclipsis*, the lack of a word that the sentence requires, as in Virgil’s *haec secum* … (*Ars maior* III.3)"
  - Problem: Donatus does not count *eclipsis* among the figures: *Ars maior* III.3 lists it among the other faults of speech (*vitia*), and vi.solecism / other-faults says so; the card calls it his figure
  - Proposed: "Donatus names the omission *eclipsis*, the lack of a word that the sentence requires, and lists it among the faults of speech (*vitia*), with Virgil's *haec secum* (“these things with herself”), where “she said” is lacking (*Ars maior* III.3); later grammarians count it a figure when good authors use it for a reason."

- **[sense-case]** · cat. 2, 6 · **suggestion** · needs Timothy
  - Current: "later grammarians name it the figure **synthesis**"
  - Problem: v.agreement / sense gives the Greek name as *synesis*; both names are in use (Linacre's *synthesis*, the modern *synesis*), but the course gives two names for one thing without saying so
  - Proposed: "later grammarians, such as Linacre, name it the figure **synthesis** (also called *synesis*, as we saw)"

- **[donatus-words]** · cat. 3 · **suggestion** · needs Timothy (unverified)
  - Current: Linacre, *De emendata structura*, Book VI
  - Problem: src: "the book number not verified"; still unverified
  - Proposed: verify against the 1524 edition (the figures are in the last book, *De figurata constructione*, to my knowledge Book VI)


### SECTION VI

#### vi.usage

No finding.

#### vi.barbarism

No finding (Quintilian I.5.8, "a Spanish or African term," checked against Butler on LacusCurtius, 29 Oct 2026).

#### vi.solecism

No finding (see v.figures / ellipsis for the conflict over *eclipsis*).

#### vi.metaplasm

No finding.


### SECTION VII

#### vii.literal

No finding.

#### vii.schemata

- **[paromoeon]** · cat. 1, 4 · **error** · needs Timothy
  - Current: "In “sun and moon, wind and wave, rock and tree,” nouns are set side by side without any verb. A series of nouns … set side by side without verbs or conjunctions is called **schesis onomaton**"
  - Problem: the example contradicts the definition: it has three conjunctions ("and")
  - Proposed: "In “the dark wood, the cold stream, the bare hill,” nouns, each with its adjective, are set side by side without any verb or conjunction." (search data/ first)

- **[hirmos]** · cat. 6 · **should fix** · mechanical
  - Current: "Milton’s *Paradise Lost*, as we noted in Section II, opens with a sentence whose verb, “Sing,” does not come until the sixth line"
  - Problem: false callback: ii.punctuation / to-meter quotes the opening for a sentence running past the line end, but says nothing of the verb in the sixth line
  - Proposed: "Milton’s *Paradise Lost*, whose opening we met in Section II, begins with a sentence whose verb, “Sing,” does not come until the sixth line"

#### vii.tropes

No finding.


### SECTION VIII

#### viii.supposition

- **[material]** · cat. 1, 3 · **error** · needs Timothy
  - Current: "William of Ockham … gives material supposition as the first of his three principal kinds (*Summa logicae* I.64)"
  - Problem: Ockham's division at I.64 is "into personal, simple, and material supposition"; material supposition is the third, not the first
  - Proposed: "William of Ockham … counts material supposition among his three principal kinds, with personal and simple supposition (*Summa logicae* I.64)"

- **[ampliation]** · cat. 3 · **should fix** · needs Timothy (unverified against the edition)
  - Current: "(Peter of Spain, *Tractatus* XI)" for ampliation; src "*Tractatus* XI"
  - Problem: in de Rijk's numbering, which the deck uses elsewhere (VI on supposition, XII on distribution), ampliation is treated in Tractatus IX and restriction in XI
  - Proposed: "(Peter of Spain, *Tractatus* IX and XI)"

- **[negation]** · cat. 1, 6 · **suggestion** · needs Timothy
  - Current: "“Not every train is late” and “Every train is not late” differ in sense"
  - Problem: i.syncategorematic / why-grammar teaches that "Every student did not pass" is open to two readings, one of which is the same as "Not every student passed"; "differ" is too strong as stated
  - Proposed: "“Not every train is late” and “Every train is not late” can differ in sense, because in the first “not” comes before “every,” and in the strict reading of the second it comes after it."

- **[rules]** · cat. 5, 8 · **suggestion** · mechanical
  - Current: "or common, which is either" (the only member of the division not in bold) and indentation by literal spaces
  - Proposed: "or **common**, which is either"; drop the leading spaces (the browser collapses them)

#### viii.equivalents

No finding.


### SECTION IX

#### ix.sentences

No finding.

#### ix.passages

No finding.

#### ix.marking

- **[deck sub]** · cat. 5 · **should fix** · mechanical
  - Current: "Marking every dependence in a sentence whose analysis is stored" (also the tile description in data/structure.js)
  - Problem: talk about the course's machinery ("stored"), which R trimmed from the cards; style rule 5
  - Proposed: "Marking every dependence in a sentence, and checking the marks against a full analysis"


### SECTION X

#### x.composition

No finding.

#### x.imitation

No finding.

#### x.translation

- **[word-sense]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "Latin *grātiās agō* means, word for word, “I do thanks,” but in sense, “I thank you.”"
  - Problem: rule 18a: vii.literal / idioms gives the same idiom in the same respect (*grātiās agere*, "literally “to do thanks,” meaning “to thank”")
  - Proposed: "Latin *poenās dat* means, word for word, “he gives penalties,” but in sense, “he pays the penalty.”" (search data/ first)

#### x.progymnasmata

No finding.


### SECTION XI

#### xi.traditions

- **[sentence-example]** · cat. 4, 6 · **should fix** · needs Timothy
  - Current: "The sentence *rāmaḥ vanaṃ gacchati*, “Rāma goes to the forest,” …"
  - Problem: inconsistent with the deck's own sandhi card, which teaches that *rāmaḥ* before *gacchati* becomes *rāmo*: before the voiced *v* of *vanaṃ* the same rule gives *rāmo vanaṃ gacchati*; the card also writes *vanaṃ* and then *vanam*
  - Proposed: "The sentence *rāmo vanaṃ gacchati* (word by word, without sandhi, *rāmaḥ vanam gacchati*), “Rāma goes to the forest,” …"

- **[construct]** · cat. 1 · **should fix** · mechanical
  - Current: "So the three Semitic traditions, Arabic, Hebrew, and Aramaic, share a construction"
  - Problem: the deck treats no Aramaic grammatical tradition; the sentence means the languages
  - Proposed: "So the Semitic languages, Arabic, Hebrew, and Aramaic, share a construction"

- **[qieyun]** · cat. 1, 4 · **suggestion** · needs Timothy
  - Current: "So the syllable *dōng* could be spelled by *dé* (for the initial *d*) and *hóng* (for the rest, *-ōng*)"
  - Problem: correct for the Middle Chinese of the *Qieyun* (東, 德紅切), but in the Mandarin readings given, *hóng* has a rising tone and *dōng* a level one, so the student sees the "tone" taken from a syllable with a different tone, against the card's own statement
  - Proposed: add: "(In the pronunciation of the *Qieyun*, 紅 and 東 had the same tone, although modern Mandarin reads 紅 with a rising tone.)"

- **[binyanim]** · cat. 4 · **suggestion** · needs Timothy (unverified)
  - Current: "*hishbir* (“he caused to break”)"
  - Problem: doubtful as a teaching example: in Biblical Hebrew the hifʿil of this root is rare in that sense (Isaiah 66:9), and *hishbir* is better known as "he sold grain" (from the homonymous root); needs a Hebrew reader's check
  - Proposed: use a root whose four patterns are standard, as the grammars do (e.g., *k-t-b*: *katav* “he wrote,” *nikhtav* “it was written,” *hikhtiv* “he dictated”), after a Hebrew reader's check

#### xi.modern

- **[minimalism]** · cat. 1 · **error** · mechanical
  - Current: "Its central operation is **Merge**, which takes two elements and combines them into one: “the” and “door” into “the door,” and “opens” and “the door” into “the door opens.”"
  - Problem: wrong result: merging "opens" with "the door" gives the verb phrase "opens the door"; "the door opens" is a different structure (the door as subject)
  - Proposed: "…and “opens” and “the door” into “opens the door.”"


### LANGUAGE LAYER

#### lang.prelim.en/overview

- **[tradition]** · cat. 1, 6 · **should fix** · needs Timothy
  - Current: "Much of this description fits English well, because the parts of speech are found in every language"
  - Problem: overstated, and inconsistent with xi.modern / typology-claim ("Whether the parts of speech themselves … are found in every language has been disputed")
  - Proposed: "Much of this description fits English well, because English has the same parts of speech: English has nouns and verbs, …"

- **[family]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "So Latin *pater*, *piscis*, *trēs*, and *cornū* correspond to English “father,” “fish,” “three,” and “horn.”"
  - Problem: rule 18a: iv.etymology / comparative uses *piscis*/"fish," *trēs*/"three," *cornū*/"horn" in the same respect (Grimm's law)
  - Proposed: "So Latin *pater*, *frāter*, *dentem*, and *cor* (*cordis*) correspond to English “father,” “brother,” “tooth,” and “heart.”" (search data/ first; *frāter* is on ii.letter as a spelling example only)

(The closing line "These panels are useful, but the art is learned mainly by reading and writing…" on all six overviews is Timothy's addition of 28 Oct 2026 and was not audited for change.)

#### lang.prelim.la/overview

- **[english]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "Latin *fragilis* gave English “frail,” … and “fragile,” …; … and *sēcūrus* gave “sure” and “secure.”"
  - Problem: rule 18a: iv.etymology / layers gives the same two doublets in the same respect
  - Proposed: keep *factum* ("feat," "fact") and *ratiō* ("reason," "ration") here and drop the two that iv.etymology uses, or add *pōtiō* ("poison," "potion")

- **[grammar]** · cat. 2, 6 · **suggestion** · mechanical
  - Current: , [classical] "the penultimate law"
  - Problem: ii.quantity names it "the law of the penult"
  - Proposed: "the law of the penult"

#### lang.prelim.grc/overview

- **[family]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "Greek *τρεῖς*, Latin *trēs*, and English “three”"
  - Problem: the third deck to use *trēs*/"three" for the same point (iv.etymology, lang.prelim.en/overview)
  - Proposed: "Greek *πούς*, Latin *pēs*, and English “foot”" is also taken (iv.etymology); suggest "Greek *ἑπτά*, Latin *septem*, and English “seven”" (search data/ first)

#### lang.prelim.fr/overview

- **[latin]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "Latin *fragilis* gave *frêle* and *fragile*"
  - Problem: the third deck to use *fragilis* for a doublet (iv.etymology, lang.prelim.la/overview)
  - Proposed: "Latin *pēnsāre* gave *peser* (“weigh”) and *penser* (“think”)" — this pair is a doublet of two inherited forms, so if the card means popular against learned, use *potiōnem*: *poison* and *potion* (search data/ first)

#### lang.prelim.de/overview

- **[tradition]** · cat. 1, 6 · **error** · mechanical
  - Current: "the Indo-European family to which all five languages of this course belong"
  - Problem: the course now shows six languages (Spanish is no longer hidden in course.js)
  - Proposed: "to which all six languages of this course belong"

- **[english]** · cat. 1 · **suggestion** · needs Timothy
  - Current: "English also keeps a trace of the German order of words … as in “never have I seen such a thing.”"
  - Problem: the inversion is a trace of the older Germanic order that English and German share, not of German order
  - Proposed: "English also keeps a trace of the older Germanic order of words, which German still follows, …"

#### lang.prelim.es/overview

- **[sounds]** · cat. 4 · **should fix** · mechanical
  - Current: , [grammar], [latin] Latin examples without macrons: *fīlium*, *formīca*, *clāmāre*, *plēnum*, *octō*, *vītam*, *habēre*, *clāvem*, *dēlicātum*, *cīvitātem* (written *filium*, *formica*, *clamare*, *plenum*, *octo*, *vitam*, *habere*, *clavem*, *delicatum*, *civitatem*)
  - Problem: rule 6; the Latin overview and the main decks mark them
  - Proposed: the marked forms listed

#### Class findings for the language layer

- **[class: bold lead-in fragments]** · cat. 5 · **should fix** · mechanical
  - Current: 64 cards in the Section II language decks (lang.ii.de/meter, de/syllable, en/meter, en/spelling, en/syllable, es/meter, es/orthography, es/syllable, fr/meter, fr/syllable, grc/meter, grc/syllable, la/syllable) open with a bold phrase that repeats the card's title as a fragment ("**The English syllable.** “Plane” has one syllable…"; "**Iambic pentameter.** Wordsworth’s sonnet begins…"), and 49 cards of the Section X model passages open the same way. AV (19 Oct) records these as made into sentences, but these were missed
  - Proposed: delete the bold lead-in where it repeats the title (the card title already shows it); where it names something the title does not, make it part of the first sentence. (113 cards; counted.)

- **[class: vague sources lines]** · cat. 3 · **should fix** · needs Timothy
  - Current: 24 English decks give as a source "a standard English grammar," 12 of them as the only source (e.g., lang.ii.en/meter, lang.iii-decl.en/accidents, lang.ix.en/poetry, lang.x.en/*)
  - Proposed: name the grammar, as four decks already do: "George O. Curme, *English Grammar*; Otto Jespersen, *Essentials of English Grammar*" (or Quirk and others, *A Comprehensive Grammar of the English Language*, which lang.prelim.en/overview cites), only where the deck's doctrine was in fact checked against it.

#### lang.ii.en/punctuation

- **[comma]** · cat. 6 · **should fix** · needs Timothy
  - Current: "Two independent clauses joined by a comma alone … make an error that the handbooks call a comma splice. Two clauses run together with no mark at all make a run-on sentence (also called a fused sentence)."
  - Problem: inconsistent with vi.solecism / english, which defines "a **run-on sentence** or **comma splice**" as one error ("The gate was shut, we went home"); the two decks use "run-on" for different things
  - Proposed: keep this deck's distinction (it is the usual one in American handbooks) and change vi.solecism to: "a **comma splice** joins two independent clauses with a comma alone: “The gate was shut, we went home”; a **run-on** (or fused) **sentence** joins them with no mark at all"

#### lang.ii.en/syllable, lang.ii.en/meter

No finding beyond the class findings.

#### lang.ii.en/spelling

- **[e-other-work]** · cat. 5, 6 · **suggestion** · mechanical
  - Current: , [suffixes], [c-and-g], [o-for-u] card titles end with a period inside the closing quotation mark ("The other work of silent “e.”"; "Suffixes that change “e” and “y.”"; "Hard and soft “c” and “g.”"; "Why “love,” “come,” and “son” have an “o.”")
  - Problem: no other card title in the course ends with a period
  - Proposed: drop the final period: "The other work of silent “e”", etc.

#### lang.ii.la/syllable

- **[syllable-2]** · cat. 1, 4 · **error** · needs Timothy
  - Current: "*Nemus* … *Opus* … When *-que* (“and”) is added, the accent moves onto the syllable that stood last, even though that syllable is short: *ne-MUS-que*, *o-PUS-que*. … The penultimate law alone would accent *nemusque* and *opusque* on the first syllable, because their penults are short"
  - Problem: wrong: in *nemusque* and *opusque* the penult *mus*/*pus* is followed by *s* and *qu*, two consonants, so it is long by position, and the law of the penult would accent it anyway; the examples do not show the exception they are meant to show
  - Proposed: use words whose syllable before *-que* is open and short, as Allen and Greenough do: "*Dea* (“goddess”) is accented *DE-a*, and *fēmina* (“woman”) *FĒ-mi-na*. When *-que* is added, the accent moves onto the syllable before it, even though that syllable is short: *de-A-que*, *fē-mi-NA-que*." (search data/ first)

#### lang.ii.la/orthography

- **[diphthongs]** · cat. 4 · **error** · mechanical
  - Current: "an edition may mark the second with a diaeresis, as in *poēta* or *aër*"
  - Problem: *poēta* shows a macron, not a diaeresis
  - Proposed: "as in *poëta* or *aër*"

#### lang.ii.la/meter

- **[elegiac]** · cat. 3, 4 · **should fix** · needs Timothy (check the Perseus text)
  - Current: "*Mantua Vergilio, gaudet Verona Catullo*" with the translation "Mantua rejoices in Virgil, Verona in Catullus"
  - Problem: the comma after *Vergilio* joins *gaudet* to *Verona*, against the card's own translation, which takes *gaudet* with *Mantua*; the usual text (and, to my knowledge, the Perseus text the card cites) reads *Mantua Vergilio gaudet, Verona Catullo*
  - Proposed: "*Mantua Vergilio gaudet, Verona Catullo*", and the same in the marked form, "*Mantua Vergiliō gaudet, Vērōna Catullō*"

#### lang.ii.grc/syllable

- **[syllable-2]** · cat. 4 · **should fix** · mechanical
  - Current: "the **circumflex** (ˆ), which stands only on a long vowel or a diphthong"
  - Problem: the Greek circumflex is printed ῀ (as lang.prelim.grc/overview gives it), not the caret ˆ
  - Proposed: "the **circumflex** (῀)"

- **[syllable-5]** · cat. 5 · **should fix** · mechanical
  - Current: , [syllable-6], [syllable-7] each body begins with the title alone in bold on its own line ("**Movable nu**")
  - Problem: see the class finding on bold lead-ins
  - Proposed: delete the line

#### lang.ii.grc/hexameter

All sixteen lines were scanned again syllable by syllable for this audit, and every foot pattern given (DSDDD, SSDDD, …) is correct (AW asked for a Greek reader's check; this is not that, but no error was found). Two displays mislead:

- **[hexameter-2]** · cat. 4 · **should fix** · mechanical
  - Current: "ἐπ (short)-ῴ (long)" and [hexameter-16] "παρ (short)-ε (short)"
  - Problem: a syllable printed as closed (ἐπ, παρ) and marked short contradicts the rule of position; the consonant belongs to the next syllable
  - Proposed: "ἐ (short)-πῴ (long)"; "πα (short)-ρε (short)"

#### lang.ii.grc/writing, lang.ii.grc/meter

No finding (Odyssey I.6, Antigone 1, and Sappho 16.1 checked: the scansions are right).

#### lang.ii.fr/syllable and lang.ii.de/syllable

- **[all cards]** · cat. 4, 8 · **should fix** · mechanical
  - Current: French and German words are marked `<span lang="fr">` / `<span lang="de">` instead of `<i lang="…">` (e.g., "<span lang="fr">maison</span>", "<span lang="de">Bau-er</span>"); course.css and style.css have no rule that styles `span[lang]`, so these foreign words display in roman type
  - Proposed: `<i lang="fr">…</i>` and `<i lang="de">…</i>` (9 cards; every other language deck uses `<i lang>`)

- **[lang.ii.fr/syllable, syllable-1]** · cat. 4 · **suggestion** · mechanical
  - Current: "because *eau*, *ou*, and *ai* each write a single vowel sound"
  - Problem: neither example contains *ou*; *maison* has *ai* and *on*
  - Proposed: "because *eau* and *ai* each write a single vowel sound, and *on* a single nasal vowel"

#### lang.ii.fr/orthography, lang.ii.fr/meter, lang.ii.de/orthography, lang.ii.de/meter

No finding beyond the class finding on bold lead-ins.

#### lang.ii.es/orthography, lang.ii.es/syllable, lang.ii.es/meter

No finding beyond the class finding on bold lead-ins (scansions of Lorca, Machado, the ballad, and Garcilaso checked).

#### lang.iii-decl.en/noun

- **[of-phrase]** · cat. 6 · **should fix** · mechanical
  - Current: "The Latin genitive has the same two uses, which Section V treats."
  - Problem: no deck of Section V (or any other) names the subjective and objective genitive; the cross-reference points to nothing
  - Proposed: "The Latin genitive has the same two uses."

#### lang.iii-decl.en/form

- **[form-5]** · cat. 5 · **suggestion** · mechanical
  - Current: "The incorrect sentences given for practice are made up in order to be corrected."
  - Problem: talk about the course's exercises in a study card (style rule 5); the card's point is made by its next sentence
  - Proposed: delete the sentence; the paragraph then reads "But when an author is quoted, the quotation is the text, and the question is what the text is doing."

#### lang.iii-decl.en/accidents, lang.iii-decl.en/pronouns, lang.iii-decl.en/verbs, lang.iii-decl.en/verbals

No finding beyond the class finding on sources.

#### Class finding: title case in card titles

- **[class: title case in card titles]** · cat. 6 · **suggestion** · mechanical
  - Current: The card titles of lang.ii.en/meter ("Stress and the Foot," "Iambic Pentameter," "The Trochaic Line," "The Ballad Stanza," "How to Scan"), lang.ii.fr/meter, lang.ii.de/meter, lang.ii.grc/meter (all five), and lang.iii-indecl.en/parts / parts-6 ("Telling the Part by Its Use") are in title case, whereas every other card title in the course is in sentence case (proper names and work titles aside; prelim.offices's three title-case titles are Timothy's)
  - Proposed: sentence case: "Stress and the foot," "Iambic pentameter," "Telling the part by its use," etc.

#### lang.iii-indecl.en/parts

- **[parts-5]** · cat. 4 · **should fix** · mechanical
  - Current: table row "Subordinate clause
  - Problem: A clause that depends; this course also says subordinate"
  - Proposed: "A clause that depends on another; also called a dependent clause"

#### lang.iii-indecl.en/usage

No finding beyond the class finding on sources.

#### lang.iii-decl.la/casework

- **[casework-5]** · cat. 3 · **suggestion** · needs Timothy (verify the locus)
  - Current: "*Ancum Marcium regem populus creavit*, “The people made Ancus Marcius king.”"
  - Problem: a quotation (Livy I.32.1, to my knowledge) given without its locus, unlike every other quotation in the course
  - Proposed: add "(Livy I.32.1)"

#### lang.iii-decl.la/noun, lang.iii-decl.la/adjectives

No finding.

#### lang.iii-decl.la/pronouns, verb, participles, irregular

No finding.

#### lang.iii-indecl.la/prepositions

- **[position]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "*Ītaliam contrā* (“facing Italy,” *Aeneid* I.13)" as the example of anastrophe
  - Problem: rule 18a: v.figures / order-figures gives the same words as Donatus's example of anastrophe
  - Proposed: keep v.figures (where Donatus's example belongs) and use here "*quōs inter* (“among whom”)" or another case of a preposition after its noun (search data/ first)

#### lang.iii-indecl.la/parts, lang.iii-indecl.la/adverbs

No finding.

#### lang.iii-decl.grc/accidents

No finding.

#### lang.iii-decl.grc/paradigms

All twenty-four tables were checked form by form against Smyth's paradigms as I know them; one inconsistency:

- **[paradigms-18]** · cat. 4 · **should fix** · mechanical
  - Current: μακρός: feminine "μακρά," "μακράν," dual "μακρά," accusative plural "μακράς"
  - Problem: the long alpha is not marked, whereas every other table marks it (χώρᾱ, ἀξίᾱ, ἀγαθᾱ́, κριτᾱ́ς), and the deck's own syllable card says the macron marks a long α; so the student cannot tell the feminine μακρᾱ́ from the neuter plural μακρά
  - Proposed: μακρᾱ́, μακρᾱ́ν, dual μακρᾱ́, accusative plural μακρᾱ́ς (the neuter plural μακρά stays unmarked)

#### lang.iii-decl.grc/compared

- **[compared-1]** · cat. 1, 6 · **should fix** · needs Timothy
  - Current: "So grammar is in substance the same in all languages, and differs in its accidents … Boethius of Dacia … holds this view."
  - Problem: stated as settled in the course's own voice, whereas viii.equivalents / ug-4 and xi.modern / end say that whether grammar is one in substance in all languages "is still an open question"; the same sentence appears on lang.iii-decl.fr/parts and lang.iii-decl.de/parts if those share the card (see there)
  - Proposed: "So, on the view held by Roger Bacon and Boethius of Dacia, a master at Paris in the thirteenth century, grammar is in substance the same in all languages and differs in its accidents …"

#### lang.iii-decl.grc/pronouns, contract, mi, participle, perfect

No finding (forms checked against Smyth's tables as I know them).

#### lang.iii-decl.de/accidents

No finding.

#### lang.iii-decl.de/paradigms

- **[paradigms-17 to paradigms-24]** · cat. 8 · **error** · mechanical
  - Current: "Past participle <em lang="de">gewesen</i>." (and *gehabt*, *geworden*, *gemacht*, *gesprochen*, *gegeben*, *gekommen*, *gesehen*)
  - Problem: broken markup: each opens `<em>` and closes `</i>`, so the `<em>` is never closed and the browser carries the italic on past the participle
  - Proposed: `<i lang="de">gewesen</i>` (the course's usual tag), in all eight cards

(The forms of all twenty-four tables were checked against Duden as I know it; no error found.)

#### lang.iii-decl.de/compared

- **[compared-2]** · cat. 1 · **should fix** · mechanical
  - Current: "Old English and early modern English printing often capitalized nouns as well, but the practice died out in English in the eighteenth century"
  - Problem: Old English was neither printed nor written with capital nouns; the habit of capitalizing nouns belongs to English printing of the seventeenth and early eighteenth centuries
  - Proposed: "English printing of the seventeenth and early eighteenth centuries often capitalized nouns as well, but the practice died out in English later in the eighteenth century, whereas German made it a rule of its spelling."

#### lang.iii-decl.de/parts, plurals, pronouns, strong, modals, konjunktiv

No finding.

#### lang.iii-decl.fr/accidents

No finding.

#### lang.iii-decl.fr/paradigms

No finding (forms checked).

#### lang.iii-decl.fr/parts, participle, pronouns, tenses, subjunctive

No finding.

#### lang.iii-decl.es/accidents

- **[accidents-2]** · cat. 4 · **suggestion** · mechanical
  - Current: , [accidents-6] Latin cited without macrons: "*unus*," "*mensa*, *mensam*, *mensae*, *mensā*"
  - Problem: rule 6, and inconsistent within the card (*mensā* is marked)
  - Proposed: *ūnus*; *mēnsa*, *mēnsam*, *mēnsae*, *mēnsā*. (The same holds for unmarked Latin elsewhere in the Spanish decks; see lang.prelim.es/overview.)

#### lang.iii-decl.es/paradigms, parts, irregular, participle, pronouns, tenses, subjunctive

No finding (forms checked).

#### lang.iii-indecl.grc/particles, prepositions; lang.iii-indecl.de/particles, prepositions

No finding.

#### lang.iii-indecl.fr/compared

- **[compared-1]** · cat. 5 · **suggestion** · needs Timothy
  - Current: second paragraph ("The definite article runs together with the prepositions *à* … *en* and *y* …")
  - Problem: says again, in nearly the same words, what card contractions says in full (rule 9a; the contractions are also on lang.iii-decl.fr/accidents)
  - Proposed: cut the paragraph from compared-1 and keep contractions as it is

#### lang.iii-indecl.fr/invariable, prepositions

No finding.

#### lang.iii-indecl.es/compared, invariable, prepositions

No finding.

#### lang.iv.en/etymology

- **[meaning]** · cat. 4, 6 · **should fix** · needs Timothy
  - Current: "“Nice” once meant “foolish” (from Latin *nescius*, “ignorant”); “silly” meant “blessed”; … “Crayfish” comes from French *crevice* …; “bridegroom” …; “villain,” once a farm laborer"
  - Problem: rule 18a: "nice" and "silly" are i.imposition / usage-change's examples, and "crayfish," "bridegroom," and "villain" are iv.etymology / cautions', all in the same respect; and the two decks give different French sources for "crayfish" (*crevice* here, *écrevisse* there)
  - Proposed: fresh examples here (e.g., "“girl” once meant a child of either sex" is also taken (i.imposition); suggest "“naughty” once meant “having nothing”"; "“hound” once meant any dog"; folk etymology "“sparrowgrass” for “asparagus”," "“woodchuck” from Algonquian *wuchak*"), and make the etymon of "crayfish" the same in both places: Old French *crevice* (modern *écrevisse*)

- **[layers]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "“window” (“wind-eye”)"
  - Problem: the same word and explanation open iv.etymology / varro
  - Proposed: another Norse loan, e.g., "“knife,”" "“husband”"

#### lang.iv.en/formation, lang.iv.en/composition

No finding.

#### lang.iv.la/formation

- **[all cards]** · cat. 4 · **suggestion** · mechanical
  - Current: Latin verbs given in the first person but glossed as infinitives: "*laudō* (“to praise”)," "*ōrō*, “to speak,”" "*faciō*, “to do,”" "*ferō* (“to carry”)," "*amō* (“to love”)," "*capiō* (“to take”)"; and some glosses lack quotation marks ("*caedō*, to strike," "*locō*, to place")
  - Problem: the rest of the course glosses *laudō* "I praise"; rule 4 for glosses
  - Proposed: "*laudō* (“I praise”)," etc., with every gloss in quotation marks

#### lang.iv.la/composition

- **[inseparable]** · cat. 4 · **suggestion** · mechanical
  - Current: "*irrītus*"
  - Problem: the *i* of the stem is short (*irritus*, from *ratus*); the macron is wrong
  - Proposed: *irritus*

#### lang.iv.la/etymology

- **[greek]** · cat. 4 · **suggestion** · mechanical
  - Current: "*ēpistula* (Greek *ἐπιστολή*)"
  - Problem: the first vowel is short (*epistula*, from ἐπι-)
  - Proposed: *epistula*

- **[romance]** · cat. 1 · **error** · needs Timothy
  - Current: "English took its Latin vocabulary twice, first through French (“chapter,” from *capitulum*) and then directly from books (“capital”), so that a Latin word may appear in English in two forms, a doublet"
  - Problem: not a doublet: "capital" comes from *capitālis*, not *capitulum*
  - Proposed: "first through French (“blame,” from *blasphēmāre*) and then directly from books (“blaspheme”)"

#### lang.iv.de/formation

- **[suffixes]** · cat. 4 · **suggestion** · mechanical
  - Current: "*Wohnen* means to dwell, and the noun *die Wohnung* means a dwelling. *Bilden* means to form … *Frei* means free … *Möglich* means possible"
  - Problem: glosses without quotation marks (rule 4; the rest of the deck quotes them)
  - Proposed: "*Wohnen* means “to dwell,” …" etc.

- **[all cards]** · cat. 5 · **suggestion** · mechanical
  - Current: each card ends with a bare sentence of attribution ("Duden’s grammar gives the same account of the compound"; "Duden’s grammar treats these prefixes as separable"; "Duden’s grammar counts these prefixes as inseparable"), and lang.iv.grc/formation ends "Smyth records the same formation."
  - Problem: sentences that say nothing but the source, which the deck's Sources note already gives (STYLE-GUIDE-CARDS 8a)
  - Proposed: delete these closing sentences

#### lang.iv.grc/formation, composition, etymology; lang.iv.de/composition, etymology

No finding beyond the above.

#### lang.iv.fr/formation

- **[doublets]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "*hôtel* (“hotel”) and *hôpital* (“hospital”), from Latin *hospitāle*" (also the card's opening example)
  - Problem: rule 18a: lang.prelim.fr/overview / latin gives the same doublet in the same respect
  - Proposed: keep it here, where doublets are taught, and give the overview *dīrēctum* (*droit*, *direct*) alone, which it already has

#### lang.iv.fr/composition, etymology; lang.iv.es/formation, composition, etymology

No finding beyond the class note on unmarked Latin in the Spanish decks (*rivulus*, *filiolus*, *liberare*, …).

#### lang.v.en/clause

Burke (clause-2, "That of sophisters, economists, and calculators has succeeded; and the glory of Europe is extinguished forever"): verified in this audit against the course's saved text, sources/passages/burke-works-vol3-reflections-pg15679.txt; it matches. No finding.

#### lang.v.en/phrase

- **[phrase-3]** · cat. 5, 6 · **should fix** · mechanical
  - Current: "Gibbon’s “in the Roman world” is also prepositional, inside a longer relative clause, which belongs to the study of the clause."
  - Problem: points to a sentence this card does not quote (it is on lang.v.en/clause), so the student cannot follow it; a pointer to another card
  - Proposed: delete the sentence

#### lang.v.en/sentence, agreement, dependence

No finding.

#### lang.v.la/building, agreement, dependence, government, voice, subjunctive, clause-kinds

No finding (glosses of the type “*sciō* (“to know how”)” as in lang.iv.la/formation).

#### lang.v.la/clauses

- **[deck sub]** · cat. 5 · **should fix** · mechanical
  - Current: "Stored sentences, with the note on the kind of clause"
  - Problem: talk about the course's machinery ("stored"), as on ix.marking
  - Proposed: "Sentences of the authors, each with a note on the kind of clause"

- **[cards 1–28, 43–46]** · cat. 6 · **suggestion** · needs Timothy
  - Current: Twenty-eight of the fifty-three cards are Greek passages (Plato, Thucydides, Herodotus, Sophocles, Euripides, Polybius, Plutarch), though the deck belongs to the Latin layer and is titled for the Latin student; the Greek student, whose lang.v.grc/clauses has no such collection, does not see them
  - Proposed: move the Greek cards to a Greek collection (lang.v.grc), or retitle this deck "Clauses in the Greek and Latin Authors" and show it in both layers

#### lang.v.grc/order

- **[order-1]** · cat. 4 · **suggestion** · mechanical
  - Current: , [order-2] Greek words in roman type ("in παιδεύει τὸν ἄνθρωπον (“he educates the man”)"; "ὁ ἀγαθὸς ἄνθρωπος")
  - Problem: every other card of the Greek layer italicizes Greek words in running text (rule 8), and card order-3 of this deck does
  - Proposed: `<i lang="grc">…</i>` around each Greek word or phrase in order-1 and order-2

#### lang.v.grc/agreement, government, clauses, mood, voice

No finding.

#### lang.v.de/agreement, government, clauses, mood, voice, order

No finding.

#### lang.v.fr/agreement, government, clauses, mood, voice, order

No finding.

#### lang.v.es/agreement, government, voice, clauses, mood, order

No finding.


### LANGUAGE LAYER, SECTIONS VI AND VII

#### lang.vi.en/faults

- **[faults-2]** · cat. 5, 6 · **should fix** · mechanical
  - Current: "When a sentence of an author departs from what a handbook expects, the grammarian describes what the sentence does and does not silently correct it, as we saw in the Preliminary section."
  - Problem: wrong cross-reference: that teaching is v.agreement / authors (Section V), "So when an author is quoted, the quotation is the text…"; and the paragraph's first sentence ("The incorrect sentences given as examples are made up for the purpose") is talk about the course's own examples
  - Proposed: "When a sentence of an author departs from what a handbook expects, the grammarian describes what the sentence does and does not silently correct it, as we saw in Section V." (and drop the first sentence)

- **[faults-6]** · cat. 2 · **suggestion** · mechanical
  - Current: "a series that breaks it is called a faulty parallel"
  - Problem: not the handbooks' term; they speak of "faulty parallelism" (a lack of parallel structure)
  - Proposed: "a series that breaks it is said to lack parallel structure, an error the handbooks call faulty parallelism"

#### lang.vi.la/faults

- **[faults-2]** · cat. 1, 3, 6 · **error** · mechanical
  - Current: "*commorat* for *commoraverat* (“had stayed”; syncope)"
  - Problem: Donatus's example is *commorat* for *commoverat* ("had moved"), as vi.metaplasm / removing gives it; the two decks contradict each other, and *commoraverat* is not the source of *commorat*
  - Proposed: "*commorat* for *commoverat* (“had moved”; syncope)"

#### lang.vi.grc/errors, lang.vi.grc/attic, lang.vi.de/errors, lang.vi.de/usage

No finding.

#### lang.vi.fr/usage

- **[participle]** · cat. 1, 6 · **suggestion** · needs Timothy
  - Current: "Before an adjective in the plural, *des* likewise becomes *de*: *de bons livres* (“good books”), not *des bons livres*."
  - Problem: stated as a flat rule, whereas lang.iii-indecl.fr/compared says "In careful writing, *de* also replaces *des* before a plural adjective"; *des bons livres* is common in speech and is recorded in *Le Bon Usage* (rule 17a: say what careful usage prefers)
  - Proposed: "Before an adjective in the plural, careful writing uses *de* for *des*: *de bons livres* (“good books”), though *des bons livres* is often heard."

#### lang.vi.fr/errors, lang.vi.es/errors, lang.vi.es/usage

No finding.

#### lang.vii.la/figures

- **[schemes-authors]** · cat. 4, 3 · **error** · mechanical
  - Current: "*esse oportet, ut vīvās, nōn vīvere, ut edis*" (*Rhetorica ad Herennium* IV.39)
  - Problem: "edis" is not a Latin form here; the text has the present subjunctive *edās* ("that you may eat"), parallel to *vīvās*
  - Proposed: "*esse oportet, ut vīvās, nōn vīvere, ut edās*"

- **[figures-1]** · cat. 2, 6 · **suggestion** · needs Timothy
  - Current: "the later action is said first, and this is **hysterologia**"
  - Problem: v.figures / order-figures names the same figure **hysteron proteron** (with Aeneas's *moriamur et in media arma ruamus*); the course gives two names without saying they are one figure
  - Proposed: "this is **hysterologia**, the figure we met in Section V as hysteron proteron"

#### lang.vii.en/figures

- **[sound]** · cat. 4 · **suggestion** · needs Timothy
  - Current: "“Full fathom five thy father lies” (Shakespeare, *The Tempest* I.2) begins four of its words with the same sound"
  - Problem: rule 18a: vii.schemata / paromoeon uses the same line for the same point (alliteration)
  - Proposed: another line, e.g., Coleridge's "The fair breeze blew, the white foam flew, / The furrow followed free" (search data/ first)

- **[tropes-schemes]** · cat. 5, 4 · **suggestion** · needs Timothy
  - Current: "The four chief tropes and four common schemes are as frequent in English as in Latin:" followed by three tropes (metaphor is on the card before) and four schemes; and "We shall fight on the beaches" (vii.literal / figures-tropes) and "I came, I saw, I conquered" (vii.schemata, lang.v.la/agreement, lang.vii.grc/tropes) are reused
  - Proposed: "Three more tropes and four common schemes are as frequent in English as in Latin:" and fresh examples for anaphora and asyndeton

#### lang.vii.grc/tropes

- **[tropes]** · cat. 6 · **suggestion** · needs Timothy
  - Current: "**Metaphor**: … “rosy-fingered Dawn” (*ῥοδοδάκτυλος Ἠώς*; *Odyssey* II.1)"
  - Problem: vii.tropes / epithet gives the same phrase as its example of the **epithet**; the student meets one phrase as the example of two different tropes without being told that an epithet can itself be metaphorical
  - Proposed: choose another metaphor (e.g., *ποιμένα λαῶν*, "shepherd of the people," which lang.vii.grc/figures already explains), or add "(a metaphor that Homer uses as a fixed epithet)"

#### lang.vii.grc/figures

No finding.

#### lang.vii.de/figures, tropes; lang.vii.fr/figures, tropes; lang.vii.es/figures, tropes

No finding beyond the reuse of “I came, I saw, I conquered” noted under lang.vii.en/figures.


### LANGUAGE LAYER, SECTION IX

#### lang.ix.en/diagram, lang.ix.la/servius

No finding.

#### lang.ix.en/poetry

- **[poetry-34 "Apposition"]** · cat. 1 doctrine / 4 examples · **error** · needs Timothy
  - Current: "These nouns stand outside the clause and name what survived: the sculptor’s hand that copied the passions and the king’s heart that fed them."
  - Problem: Wrong construction and wrong sense. In Shelley's lines "survive" means "outlive," and "the hand" and "the heart" are its objects: the passions survive (outlive) the hand that mocked them and the heart that fed them. The hand and heart are what did not survive.
  - Proposed: title "The objects of “survive”"; body: "“The hand that mocked them, and the heart that fed”: “Survive” here means “outlive,” and “the hand” and “the heart” are its objects. The passions are stamped on the stone and outlive the sculptor’s hand that copied (“mocked”) them and the king’s heart that fed them."

- **[poetry-23]** · cat. 5 style · **suggestion** · mechanical
  - Current: title "Wordsworth, *“I wandered lonely as a Cloud”* stanza 1"
  - Problem: A short poem known by its first line is given in quotation marks, not italics as well.
  - Proposed: "Wordsworth, “I wandered lonely as a Cloud,” stanza 1, text of 1807 · Iambic tetrameter"

#### lang.ix.en/prose

- **[prose-66 Lincoln, Second Inaugural; prose-72 "The summing infinitive"]** · cat. 3 citations · **error** · mechanical
  - Current: "to do all which may achieve and cherish a just and lasting peace among ourselves, and with all nations."
  - Problem: Does not match the reading copy the course itself uses (LoC mal4361300, sources/imitation/05; also PG 14721), which reads "a just, and a lasting peace, among ourselves, and with all nations." (newly checked).
  - Proposed: "to do all which may achieve and cherish a just, and a lasting peace, among ourselves, and with all nations." (in both cards)

- **[prose-78 Milton, *Areopagitica*]** · cat. 3 citations · **should fix** · needs Timothy
  - Current: "And yet, on the other hand, unless wariness be used, as good almost kill a man as kill a good book. Who kills a man kills…"
  - Problem: Modernized text with no edition named and no source file; 1644 reads "unlesse warinesse be us'd … Gods Image … hee who destroyes a good Booke, kills reason it selfe". Unverified (never checked). Needs: an edition (e.g., Hughes, or Standard Ebooks) to match against.
  - Proposed: add to Context: "The spelling is modernized." and record the edition in sources/TRANSLATIONS-USED.md once chosen.

- **[prose-9 "Three noun clauses in apposition"]** · cat. 2 terminology · **should fix** · mechanical
  - Current: "They follow one another without “and,” as companions of the same rank."
  - Problem: Coined phrase for the standard term.
  - Proposed: "They follow one another without “and,” as coordinate clauses."

- **[prose-33 "An emphatic frame"]** · cat. 1 accuracy · **suggestion** · needs Timothy
  - Current: "The real subject follows the second “it.”"
  - Problem: Confusing: in "Hence it is that it is almost…" the first "it" looks forward to the clause after "that"; the second "it" is treated in the following card.
  - Proposed: "“Hence it is that” introduces the main statement with emphasis; this “it” looks forward to the clause introduced by “that.”"

- **[prose-64]** · cat. 6 consistency · **suggestion** · mechanical
  - Current: title "A participle of purpose and manner"
  - Problem: The body says only that "testing" describes the war; the title names kinds the card does not teach.
  - Proposed: title "A participle describing the war"

Verified (new): Declaration, Bacon, Austen, Dickens, Thoreau, Burke, Gibbon match the source files in sources/passages and sources/imitation (settled Oct 20 for Gibbon); Johnson to Chesterfield, Newman, Swift, Melville, Hebrews 1:1–3 (PG 10, colon correct) checked against the standard texts.

#### lang.ix.la/poetry

- **[poetry-68 "Venantius Fortunatus, *Vexilla regis* 1–8"]** · cat. 3 citations · **should fix** · needs Timothy
  - Current: "Venantius Fortunatus, *Vexilla regis* 1–8"
  - Problem: The eight lines are stanzas 1 and 3 of Fortunatus's hymn (his stanza 2 is *Confixa clavis viscera*); they stand as stanzas 1–2 only in the Roman Breviary form. So "1–8" is wrong for Fortunatus's text. (New check, from the standard text of the hymn; edition not in sources/.)
  - Proposed: "Venantius Fortunatus, *Vexilla regis*, stanzas 1 and 3 · Iambic dimeter"; add to Context: "The two stanzas given here are the first and third of Fortunatus’s hymn; the Roman Breviary sings them as the first and second."

- **[poetry-49 "A second verb"]** · cat. 6 consistency · **suggestion** · mechanical
  - Current: "it visits the light of the sun."
  - Problem: The deck's own rendering in poetry-42 has "sees the light of the sun." The same word should be rendered the same way.
  - Proposed: "it sees the light of the sun."

- **[poetry-61 "The same words again"]** · cat. 8 mechanics · **suggestion** · mechanical
  - Current: "*non amo te.*:"
  - Problem: Stray period before the colon (every other card quotes without final punctuation).
  - Proposed: "*non amo te*:"

- **[poetry-55 "An ablative absolute"]** · cat. 7 order · **suggestion** · mechanical
  - Current: (card order)
  - Problem: The ablative absolute of the first line of the *Fasti* passage is treated last, after the cards on lines 2–3; the deck otherwise goes through each passage in order.
  - Proposed: move poetry-55 to stand after poetry-51.

- **[poetry-16, poetry-27 titles]** · cat. 4 examples (italics) · **suggestion** · mechanical
  - Current: "The personal construction with dicitur"; "Egeo with the ablative"
  - Problem: Latin words in titles not italic (cf. poetry-66 "Careo with the ablative" too).
  - Proposed: "The personal construction with *dicitur*"; "*Egeo* with the ablative"; "*Careo* with the ablative"

#### lang.ix.la/prose

- **[prose-68 Livy 5.47.4, and the deck's Sources note]** · cat. 3 citations · **error** · needs Timothy
  - Current: "The Gauls did not escape the notice of the geese, from which, sacred to Juno, there was nevertheless abstinence in the greatest want of food. …" (Sources: "the rendering of Livy 5.47.4 is the course’s own")
  - Problem: Your rule of 25 Oct 2026 allows the course's own renderings for verse only; for prose it requires a real published translation or another passage. This is prose with a course rendering. Also the passage begins in §3 ("anseres non fefellere … abstinebatur" closes §3; §4 begins "quae res saluti fuit"), and the citation uses Arabic book numbers where the rest of the deck uses Roman (I.1.1, II.10).
  - Proposed: Options: (a) replace the English with Canon Roberts's translation of V.47.3–4 (Everyman, the translation used for the deck's other Livy passages), to be checked against the printed text before use, and drop "the rendering of Livy 5.47.4 is the course’s own" from Sources; (b) drop the passage and its five cards. Recommend (a). Citation either way → "Livy, *Ab urbe condita* V.47.3–4".

- **[prose-69 to prose-72]** · cat. 7 order · **suggestion** · mechanical
  - Current: (card order)
  - Problem: The cards on the Livy passage run *dum ceteri trepidant* (last clause), *armis arreptis*, *vadit … deturbat*, then *clangore … crepitu* (first phrase). The deck otherwise follows the order of the text.
  - Proposed: order: prose-72, prose-70, prose-71, prose-69.

- **[prose-50 "A clause of time"]** · cat. 5 style · **should fix** · mechanical
  - Current: "*Dum* with the imperfect subjunctive, as later Latin often has it: while I was turning these things over with myself."
  - Problem: Fragment with no main verb.
  - Proposed: "*Dum* takes the imperfect subjunctive here, as later Latin often does: while I was turning these things over with myself."

- **[prose-58]** · cat. 5 style · **suggestion** · mechanical
  - Current: "*immo vero*, “nay rather,” corrects it upward"
  - Problem: Metaphor for the plain claim.
  - Proposed: "*immo vero*, “nay rather,” corrects it with something stronger"

- **[prose-11, prose-6, prose-18, prose-29 titles]** · cat. 4 examples (italics) · **suggestion** · mechanical
  - Current: "The ablative with abutor"; "Two causes joined by et … et"; "Three verbs joined by vel … vel … vel"; "Two genitives joined by et … et"
  - Problem: Latin words in titles not italic.
  - Proposed: "The ablative with *abutor*"; "… joined by *et … et*"; "… joined by *vel … vel … vel*"; "… joined by *et … et*"

Settled earlier (not rechecked): Latin texts and translations in TRANSLATIONS-USED.md (Yonge, Roberts, Watson, Pusey, I. T./Stewart, Church and Brodribb).

#### lang.ix.grc/poetry

- **[poetry-9 Homer, *Odyssey* 1.1–5; deck Sources note]** · cat. 3 citations · **should fix** · mechanical (if it is the course's own)
  - Current: "Tell me, Muse, of the man of many ways, who was driven to wander …"
  - Problem: This English has no translator line and is not in the Sources list of the course's own renderings ("Sophocles, the Thermopylae epitaph, Euripides, Aeschylus, and Melinno"); TRANSLATIONS-USED.md has no entry for *Odyssey* I.1–5. If it is the course's own, the Sources note must say so (verse exception, 25 Oct 2026).
  - Proposed: Sources: "the translations of Homer’s *Odyssey*, Sophocles, the Thermopylae epitaph, Euripides, Aeschylus, and Melinno are the course’s own plain renderings, line by line"; add the TRANSLATIONS-USED.md entry.

- **[poetry-48 Callimachus; poetry-53 Plato (ascribed)]** · cat. 3 citations · **should fix** · needs Timothy
  - Current: "Translation: J. W. Mackail." (both)
  - Problem: Neither Mackail passage is recorded in sources/TRANSLATIONS-USED.md, and neither was checked in the Oct 19/21 checks. Unverified; needs Mackail, *Select Epigrams from the Greek Anthology* (1890 or 1906), to compare. The Aster rendering ("now deceased you shine") does not read like Mackail's archaic style ("thou").
  - Proposed: check both against Mackail and record them; if the Aster line is not Mackail's, either give his text or mark it the course's own and list it in Sources.

- **[poetry-25 in lang.ix.la/poetry; lang.x.la/horace]** · cat. 2 terminology / 6 consistency · **suggestion** · mechanical
  - Current: "three sapphic lines and a short adonic"
  - Problem: The course says "adonean" in lang.ii.la/meter, lang.ii.grc/meter, and this deck (7 times), "adonic" twice. One term throughout.
  - Proposed: "adonean" in lang.ix.la/poetry poetry-25 and lang.x.la/horace.

- **[poetry-31, poetry-32]** · cat. 5 style · **suggestion** · mechanical
  - Current: "golden-mitred"
  - Problem: British spelling in the course's own rendering (rule 6).
  - Proposed: "golden-mitered"

- **[poetry-37 Euripides, *Medea* 5]** · cat. 4 examples · **suggestion** · needs Timothy
  - Current: "οἳ τὸ πάγχρυσον δέρας"
  - Problem: The standard editions (Murray OCT, Diggle) read *δέρος*. Unverified against a printed text; needs the edition the course follows.
  - Proposed: "οἳ τὸ πάγχρυσον δέρος" if confirmed.

- **[poetry-37, 38–43, 48–51]** · cat. 8 mechanics · **suggestion** · mechanical
  - Current: elision mark "᾽" (U+1FBD)
  - Problem: Cards 1–36 use "ʼ" (U+02BC) for elision, cards 37–51 "᾽" (U+1FBD). One character throughout.
  - Proposed: use U+1FBD (the Greek koronis/psili form used by the TLG texts) or U+2019 throughout, as Timothy prefers.

#### lang.ix.grc/prose

- **[prose-13 "A third participle"]** · cat. 4 examples · **suggestion** · mechanical
  - Current: "*Ἦισαν* is the imperfect of *εἶμι*, “go.”"
  - Problem: The passage prints *ᾖσαν* (iota subscript); the note writes the adscript form. Same word should be written the same way.
  - Proposed: "*ᾖσαν* is the imperfect of *εἶμι*, “go.”"

- **[prose-26]** · cat. 6 consistency · **should fix** · mechanical
  - Current: title "A clause of degree"
  - Problem: The body (rightly) says *οὕτω πιθανῶς ἔλεγον* gives the reason, set beside the rest without a conjunction; it is an independent clause, not a clause of degree.
  - Proposed: title "A reason given without a conjunction"

- **[prose-75, prose-76 Demosthenes]** · cat. 4 examples · **suggestion** · needs Timothy (edition)
  - Current: "προυτίθετʼ" / "*προυτίθετο*"
  - Problem: Crasis of *προ-* and the augment is printed with the coronis: *προὐτίθετ᾽* (Butcher OCT).
  - Proposed: "προὐτίθετʼ" / "*προὐτίθετο*"

- **[prose-50 John 1:1–5, Context]** · cat. 3 citations · **suggestion** · mechanical
  - Current: "The edition punctuates verse 3 so that *ὃ γέγονεν* begins a new sentence"
  - Problem: "The edition" is not named anywhere in the deck (the Sources note names only Smyth).
  - Proposed: "The Nestle–Aland edition punctuates verse 3 …" (if that is the text used; NA28 has this punctuation)

- **[prose-81]** · cat. 2 terminology · **suggestion** · mechanical
  - Current: "a way of telling that follows the Hebrew style of the Greek Old Testament"
  - Problem: Vague coined phrase.
  - Proposed: "a construction that imitates the Hebrew narrative style of the Septuagint"

#### lang.ix.fr/poetry

- **[poetry-1 Context; poetry-41 Context]** · cat. 6 consistency · **suggestion** · mechanical
  - Current: "Hippolytus, son of Theseus, tells his tutor Theramenes …" / "Phèdre tells Œnone how she first saw Hippolyte."
  - Problem: The same characters are named in English forms in one card and French forms in the other.
  - Proposed: poetry-41: "Phaedra tells Oenone how she first saw Hippolytus." (keeps the English forms of poetry-1 and its translation "Theramenes")

- **[titles: poetry-2, 5, 6, 14, 15, 25, 26, 27, 30, 33, 45, 49, 50]** · cat. 4 examples (italics) · **suggestion** · mechanical
  - Current: "En and the passive"; "The relative dont"; "Commencer à"; "The impersonal pleuvoir"; "The interrogative quel"; "Ne … que, and inversion"; "Être with a participle"; "The second ne … que …"; "Tout autre que"; "The future after quand"; "Sentir with an infinitive"; "Ni … ni"; "Two more verbs on qui"
  - Problem: French words in titles not italic (titles render HTML; other decks italicize, e.g. "The verb <em>…</em>").
  - Proposed: italicize the French words: "*En* and the passive", "The relative *dont*", etc.

#### lang.ix.fr/prose

- **[prose-19 Montaigne, "Au lecteur" (also lang.x.fr/montaigne)]** · cat. 3 citations · **error** · mechanical
  - Current: "Reader, you have here an honest book; it does at the outset forewarn you that … I have had no consideration at all either to your service or to my glory."
  - Problem: The translation is credited to Charles Cotton, but Cotton's text (Hazlitt's edition, PG 3600, newly checked) reads "READER, thou hast here an honest book; it doth at the outset forewarn thee that … no consideration at all either to thy service or to my glory." The quotation has been modernized, which your rule (Pusey restored, "lightly modernized" removed; REVISION-GUIDE) does not allow.
  - Proposed: "Reader, thou hast here an honest book; it doth at the outset forewarn thee that, in contriving the same, I have proposed to myself no other than a domestic and private end: I have had no consideration at all either to thy service or to my glory." (both decks)

- **[prose-1, prose-6 Descartes (prose-1 also lang.x.fr/descartes)]** · cat. 3 citations · **error** · mechanical
  - Current: "for everyone thinks himself so abundantly provided with it that those even who are the most difficult to satisfy in everything else do not usually desire…"; "while I thus wished … should be something; … this truth, I think, therefore I am, was so certain … alleged by the skeptics"
  - Problem: Veitch (PG 59, newly checked) reads "for every one thinks himself so abundantly provided with it, that those even who are the most difficult to satisfy in everything else, do not usually desire …" and "whilst I thus wished to think that all was false, it was absolutely necessary that I, who thus thought, should be somewhat; and as I observed that this truth, I think, therefore I am (COGITO ERGO SUM), was so certain … alleged by the sceptics". The quotation has been altered in spelling, punctuation, and words ("somewhat" → "something").
  - Proposed: restore Veitch's text exactly as in PG 59 (both passages; and lang.x.fr/descartes).

- **[prose-13 Pascal 347 (also lang.x.fr/pascal)]** · cat. 3 citations · **error** · mechanical
  - Current: "A vapor, a drop of water suffices to kill him."
  - Problem: Trotter (PG 18269) has "A vapour". Spelling inside a quotation keeps the source (rule 6).
  - Proposed: "A vapour, a drop of water suffices to kill him." (both decks)

- **[prose-18 "Two subjects, one verb"]** · cat. 4 examples · **suggestion** · mechanical
  - Current: "*une vapeur, une goutte d’eau suffit pour le tuer*"
  - Problem: The passage has "une goutte d’eau, suffit"; the quoted part drops the comma.
  - Proposed: "*une vapeur, une goutte d’eau, suffit pour le tuer*"

- **[titles: prose-3, 14, 17, 23, 27, 28, 40 ff., 46, 48, 49, 55]** · cat. 4 examples · **suggestion** · mechanical
  - Current: "The pronoun en"; "Ne … que"; "Il faut que with the subjunctive"; "Nul and ni"; "Tel as a pronoun"; "Ne pas laisser de"; "Depuis with the imperfect"; "Il y a … que with the present"; "Sans que with the subjunctive"; "The play on raison"
  - Problem: French words in titles not italic (same class as lang.ix.fr/poetry).
  - Proposed: italicize the French words.

- **[class: named translations in the language layer]** · cat. 3 citations · **should fix** · needs Timothy
  - Current: "Translation: …" (125 lines in 43 language decks)
  - Problem: The three French checks above and four German ones (lang.ix.de/prose) found the named translation silently modernized or altered; only Common's two Nietzsche passages matched. The other named translations of the language layer were not compared word by word in this audit.
  - Proposed: compare every "Translation:" passage with the named edition and restore the edition's exact text, before Phase 2.

#### lang.ix.de/poetry

- **[poetry-16 Luther, Context]** · cat. 1 accuracy · **error** · mechanical
  - Current: "His German is older than ours, so the adjective after *ein* has no ending"
  - Problem: False as stated: the adjective *feste* has its ending; it is the article *ein* that lacks the feminine ending (*eine*), as poetry-17 and poetry-18 say.
  - Proposed: "His German is older than ours, so the article *ein* stands without the feminine ending of modern *eine*, and the subordinate clause puts its helping verb before its participle."

- **[poetry-48 "Mit and the dative"]** · cat. 1 accuracy / 4 examples · **should fix** · needs Timothy
  - Current: "*Herzen* is an older dative of *Herz* (“heart”), and *Händen* (“hands”) is dative plural." (translation: "with hearts, mouth, and hands")
  - Problem: *Herzen* is the regular dative singular of *Herz* in modern German too (*dem Herzen*), and also the plural; it is not an older form. The deck's rendering "hearts" also disagrees with the note, which takes it as singular.
  - Proposed: "*Herzen* is the dative singular of *Herz* (“heart”), which declines irregularly (*dem Herzen*); *Mund* is dative singular without an ending, and *Händen* (“hands”) is dative plural." and translation line → "with heart, mouth, and hands,"

- **[titles: poetry-8, 9, 19, 22, 23, 30, 35, 42, 48]** · cat. 4 examples · **suggestion** · mechanical
  - Current: "Hören with an infinitive"; "A dative after aus"; "Helfen with the dative"; "Es war"; "Bis an"; "A genitive after müde"; "Aber, and the subject repeated"; "A comparison with wie"; "Mit and the dative"
  - Problem: German words in titles not italic.
  - Proposed: italicize the German words.

#### lang.ix.de/prose

- **[prose-34 Marx and Engels (Samuel Moore)]** · cat. 3 citations · **error** · mechanical
  - Current: "A specter is haunting Europe—the specter of Communism. All the powers of old Europe … this specter:"
  - Problem: Moore (PG 61, newly checked) reads "A spectre is haunting Europe—the spectre of Communism. All the Powers of old Europe have entered into a holy alliance to exorcise this spectre:". Spelling and capital altered inside a quotation.
  - Proposed: "A spectre is haunting Europe—the spectre of Communism. All the Powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Czar, Metternich and Guizot, French Radicals and German police-spies."

- **[prose-1 Kant (Abbott)]** · cat. 3 citations · **error** · mechanical
  - Current: "which can be called good without qualification, except a good will."
  - Problem: Abbott (PG 5682): "which can be called good, without qualification, except a good will."
  - Proposed: "Nothing can possibly be conceived in the world, or even out of it, which can be called good, without qualification, except a good will."

- **[prose-72 Clausewitz (Graham)]** · cat. 3 citations · **should fix** · mechanical
  - Current: "We see, therefore, that war is not merely a political act"
  - Problem: Graham (PG 1946): "that War is not merely a political act"; the heading is printed "WAR IS A MERE CONTINUATION OF POLICY BY OTHER MEANS."
  - Proposed: "We see, therefore, that War is not merely a political act, but also a real political instrument, a continuation of political commerce, a carrying out of the same by other means."

- **[prose-57 Grimm, Hänsel und Gretel (Hunt)]** · cat. 3 citations · **should fix** · mechanical
  - Current: "dwelt a poor woodcutter"
  - Problem: PG 2591 (Hunt): "dwelt a poor wood-cutter".
  - Proposed: "Hard by a great forest dwelt a poor wood-cutter with his wife and his two children. The boy was called Hansel and the girl Gretel."

- **[prose-77 Nietzsche (Zimmern)]** · cat. 3 citations · **suggestion** · mechanical
  - Current: "… have failed to understand women?"
  - Problem: Zimmern's sentence continues "have failed to understand women—that the terrible seriousness …"; the cut should be marked.
  - Proposed: "… in so far as they have been dogmatists, have failed to understand women …"

- **[prose-42]** · cat. 1 accuracy · **should fix** · mechanical
  - Current: title "Verb first after the clause"
  - Problem: The body says the *als* clause fills the first place and the verb comes next, that is, second. The title contradicts the rule taught (verb second).
  - Proposed: "Verb second after the clause"

- **[prose-64 "A dative of the one who suffers loss"]** · cat. 6 consistency · **should fix** · needs Timothy
  - Current: "*Dem*, dative, takes up the girl, so the sense is “to whom father and mother had died.”"
  - Problem: By the deck's own test in prose-28 (*der war arm*: the verb stays second, so *der* is a demonstrative), *dem war* is also demonstrative: "to her father and mother had died." The two cards teach opposite readings of the same construction.
  - Proposed: "*Dem*, dative, takes up the girl. As in *der war arm*, the verb stays second, so *dem* is a demonstrative, and the sense is “to her father and mother had died.” …"

- **[prose-57 Context]** · cat. 2 terminology · **suggestion** · mechanical
  - Current: "The datives after *vor* and *mit* and the gender of the small words deserve attention."
  - Problem: "the small words" is vague; the cards mean the diminutives.
  - Proposed: "This is the opening of the tale; it has datives after *vor* and *mit*, and two diminutives, which are neuter."

- **[prose-72 Context]** · cat. 5 style · **suggestion** · mechanical
  - Current: "The heading of § 24 and its first sentence."
  - Problem: Fragment.
  - Proposed: "These are the heading of § 24 and its first sentence."

- **[titles: prose-3 ff.]** · cat. 4 examples · **suggestion** · mechanical
  - Current: "Denn: main clause order"; "So … dass"; "Es war einmal"; "Der: relative or demonstrative?"; "Aber"; "Dies"; "Welche, and present participles"; "Vor with the dative"; "Mit with the dative"; "Kein … mehr, and darin"; "Nicht bloß … sondern"; "Sich verstehen auf"; "Müde with the genitive"; "Als: a single past event"; "Dessen, and a main-clause order"
  - Problem: German words in titles not italic.
  - Proposed: italicize.

Verified (new): Common (Zarathustra, Joyful Wisdom 125) match PG.

#### lang.ix.es/poetry (quotations settled by sources/QUOTATION-CHECK-SPANISH.md; not rechecked)

- **[deck Sources note]** · cat. 6 consistency · **should fix** · needs Timothy
  - Current: (about 700 words: every edition with imprint, the spelling policy of each, *yago*, *dia*, *galardon* …)
  - Problem: The Sources note is to list only the main sources of the doctrine (STYLE-GUIDE-CARDS; CLAUDE.md "Examples and sources"). Most of this note repeats card poetry-6 and belongs in sources/QUOTATION-CHECK-SPANISH.md, where it is already recorded.
  - Proposed: "Robles Dégano, *Ortología clásica de la lengua castellana* (1905), for the count of syllables and for assonance; each poem is quoted as printed in the nineteenth- and early twentieth-century edition recorded for it in the course’s source notes. The English of the verse is the course’s own plain rendering, line by line."

- **[poetry-6 "The spelling of these older prints"]** · cat. 7 gaps/repetition · **should fix** · needs Timothy
  - Current: "An editor who modernizes the spelling does not add a word, drop a word, or exchange one copy for another. …" (whole card, about 450 words on the accents of each print)
  - Problem: The card teaches no grammar; it reports the printing habits of eight editions, and it repeats the Sources note. Your rule is realities first, then the principle, then the tradition; this card is about editions.
  - Proposed: Options: (a) cut the card and keep only one sentence in the Context of poetry-1: "The ballad is quoted in the spelling of the 1856 print of Wolf and Hofmann, which writes *á* and *ménos* but not *día* or *galardón*, and keeps the old form *yago*."; (b) keep it. Recommend (a).

- **[poetry-33, 34, 36, 43, 18 …]** · cat. 5 style · **should fix** · mechanical for the fragments; needs Timothy for the print notes
  - Current: "Eleven." / "Eight." (12 one-word sentences); "The comma in *Hora ,* stands a space away from the word, as this print sets it."; "The mark after *sentido* descends below the letters, and the line is given with a comma."
  - Problem: Fragments (rule 3) and notes on typesetting that are not grammar. 46 sentences in this deck report what "the print" does.
  - Proposed: fragments: "That is eleven." / "That is eight."; delete the two typesetting sentences quoted.

#### lang.ix.es/prose (quotations settled by sources/QUOTATION-CHECK-SPANISH.md; not rechecked)

- **[deck Sources note]** · cat. 6 consistency · **should fix** · needs Timothy
  - Current: (about 900 words listing every edition, translator, imprint, and spelling policy)
  - Problem: Same as lang.ix.es/poetry: the Sources note should list the main sources of the doctrine (here the Academy's *Manual*, the *Diccionario panhispánico de dudas*, Allen and Greenough); the editions and translators are recorded in sources/QUOTATION-CHECK-SPANISH.md and sources/TRANSLATIONS-USED.md, and translators are not to be named in the course's text except for long passages.
  - Proposed: "Real Academia Española and Asociación de Academias, *Nueva gramática de la lengua española: Manual* (2010) and *Diccionario panhispánico de dudas* (2005); Allen and Greenough, *New Latin Grammar*. Each passage is quoted as printed in the edition recorded for it in the course’s source notes."

- **[prose-6 "The text and its spelling"; prose-31 "The accents of 1871"; prose-57 "The text and its spelling" (Bernal Díaz)]** · cat. 7 gaps/repetition · **should fix** · needs Timothy
  - Problem: Three cards report the spelling habits of particular editions, and the Context of nearly every passage adds a sentence on the print's accents. This repeats the Sources note and teaches editions, not grammar.
  - Proposed: keep prose-6 (the one card that teaches what a modernized spelling changes, with the 1605 forms), and cut prose-31 and prose-57, keeping from prose-57 only: "The edition prints *dia*, *deciamos*, and *desta*, and *Méjico* for *México*; *encantamento* is an older form of *encantamiento*." in the Context of prose-56.

- **[prose-34]** · cat. 1 accuracy · **suggestion** · needs Timothy
  - Current: "The *Ortografía* of 2010, which this course follows, goes further and writes the adverb without an accent even then."
  - Problem: Needs the qualification that makes it current: in 2023 the Academy stated that the accent may be written on the adverb *solo* where the writer judges the sentence ambiguous.
  - Proposed: "The *Ortografía* of 2010, which this course follows, goes further and recommends writing the adverb without an accent even then; in 2023 the Academy added that a writer who sees an ambiguity may still write the accent."

- **[prose-43]** · cat. 3 citations · **should fix** · needs Timothy
  - Current: "The line is Terence's, and Unamuno writes it with the words in the order *homo sum; nihil humani a me alienum puto*."
  - Problem: The sentence implies a difference from Terence but never gives Terence's text (*Heauton Timorumenos* 77: *homo sum: humani nil a me alienum puto*).
  - Proposed: "The line is Terence's (*Heauton Timorumenos* 77), who wrote *homo sum: humani nil a me alienum puto*; Unamuno quotes it as *homo sum; nihil humani a me alienum puto*."


### LANGUAGE LAYER, SECTION X (model passages; the passages repeat those of Section IX, so each quotation finding above applies to the matching lang.x deck too)

- **[lang.x.en/lincoln text]** · cat. 3 citations · **error** · mechanical
  - Current: same Lincoln reading-copy error as lang.ix.en/prose-66
  - Proposed: as there.

- **[lang.x.de/manifest; lang.x.de/kant; lang.x.fr/descartes; lang.x.fr/montaigne; lang.x.fr/pascal; lang.x.grc/demosthenes]** · cat. 3 citations · **error (suggestion for Demosthenes)** · mechanical
  - Current: same text as the lang.ix findings (Moore "spectre … Powers"; Abbott "good, without qualification,"; Veitch; Cotton "thou hast"; Trotter "vapour"; *προὐτίθετʼ*)
  - Proposed: as there.

- **[lang.x.en/dickens, style card]** · cat. 1 accuracy · **error** · mechanical
  - Current: "Antithesis in pairs. … Ten such pairs set the age before us as an age of extremes."
  - Problem: The passage has seven contrasting pairs (best/worst, wisdom/foolishness, belief/incredulity, Light/Darkness, hope/despair, everything/nothing, Heaven/the other way).
  - Proposed: "Seven such pairs set the age before us as an age of extremes."

- **[lang.x.en/lincoln, style card]** · cat. 1 accuracy · **should fix** · needs Timothy
  - Current: "Plain words. Except for “malice” and “charity,” almost every word is short and English."
  - Problem: Overstated: "firmness," "achieve," "cherish," "nations," "orphan" are not short native words.
  - Proposed: "Plain words. Most of the words are short and common, and the plainness gives the biblical cadence its force."

- **[lang.x.la/tacitus, style card]** · cat. 1 accuracy · **should fix** · mechanical
  - Current: "The verb understood. The object of *appellant* in the first member is supplied from the end of the sentence."
  - Problem: It is the verb, not its object, that is supplied (the card's own title and lang.ix.la/prose-74 say so).
  - Proposed: "The verb understood. The verb of the first member, *appellant*, is supplied from the end of the sentence."

- **[lang.x.la/livy, style card]** · cat. 5 style · **suggestion** · mechanical
  - Current: "Two causes joined as companions."
  - Problem: Metaphor for the plain statement.
  - Proposed: "Two causes joined by *et … et*."

- **[lang.x.fr/ronsard, style card]** · cat. 1 accuracy · **should fix** · mechanical
  - Current: "a theme the Latin poets called *carpe diem*"
  - Problem: The Latin poets did not name a theme so; the phrase is Horace's (*Carmina* I.11.8), and the name of the theme is modern.
  - Proposed: "a theme named from Horace’s words *carpe diem*, “seize the day” (*Carmina* I.11)."

- **[lang.x.es/teresa, style card]** · cat. 1 doctrine / 6 consistency · **should fix** · needs Timothy
  - Current: "*Muy honesto en gran manera* has no verb, so it is an utterance and not a sentence in the strict sense."
  - Problem: Inconsistent with the course elsewhere: Section I (cited in lang.ix.la/prose-55) calls *O tempora, o mores* "a sentence that expresses feeling," and lang.ix.grc/prose-2 is titled "A sentence without a verb." The course must decide whether a verbless utterance is a sentence.
  - Proposed: Options: (a) here: "has no verb; its subject, her father, and the verb *era* are understood from the sentences before it" (no claim about "sentence"); (b) adopt the Academy's distinction (*enunciado*/*oración*) course-wide and revise the other two places. Recommend (a).

- **[lang.x.es/cervantes]** · cat. 7 repetition / 8 mechanics · **suggestion** · mechanical (period) / needs Timothy (repetition)
  - Current: card 1 begins "**Note on the spelling.** The Spanish is printed in the spelling of the edition …", and card 3 "The text and its spelling" repeats it at length; the Sources note ends "“The Author’s Preface.”."
  - Problem: Repetition (same class as lang.ix.es) and a doubled period.
  - Proposed: delete the Note in card 1; "“The Author’s Preface.”" with one period.

- **[lang.x.es/lazarillo Sources]** · cat. 5 style · **suggestion** · mechanical
  - Current: "the orthography, accentuation, and punctuation have been modernised"
  - Problem: British spelling outside a quotation (no quotation marks).
  - Proposed: "modernized"


### STRUCTURE (data/structure.js, data/languages/*.js) AND LEVELS (data/tiers.js)

Levels: all 296 entries of data/tiers.js (73 general, 223 language) were compared with the tables of TIERS-PROPOSAL.md, as amended by §12 (Precepts and Interpretation in Essentials). 0 differences.

Descriptions: the 284 decks' titles and subtitles were compared with the titles and descriptions listed in data/structure.js and data/languages/*.js; 120 differ in wording, almost all because the list gives a shorter form. The ones that matter:

- **[lang.ix.es/prose, deck subtitle]** · cat. 6 consistency · **error** · mechanical
  - Current: "Fifteen passages of Spanish prose, from Cervantes to Unamuno, read part by part"
  - Problem: The deck has fourteen passages (one, *Don Quijote* I.8, was dropped on 27 Oct; the language list already says "Fourteen").
  - Proposed: "Fourteen passages of Spanish prose, from the *Lazarillo* to Unamuno, read part by part" (the *Lazarillo*, 1554, is the oldest passage, not Cervantes); same change in data/languages/ix.es.js.

- **[lang.ix.de/prose, subtitle and list]** · cat. 6 consistency · **suggestion** · mechanical
  - Current: "Fifteen passages of German prose, from the Grimms to Nietzsche"
  - Problem: Kant (1785) and Goethe's *Werther* (1774) are older than the Grimms (1812).
  - Proposed: "Fifteen passages of German prose, from Goethe and Kant to Nietzsche, read part by part."

- **[ii.letter, structure.js]** · cat. 6 consistency · **should fix** · mechanical
  - Current: "The letter and its accidents (name, figure, and power), and how Latin is spelled and pronounced."
  - Problem: The deck treats English spelling as well; its subtitle is "the relation of spelling to sound."
  - Proposed: "The letter and its accidents (name, figure, and power), and the relation of spelling to sound in English and Latin."

- **[ix.marking, structure.js; lang.ii.grc/hexameter, language list]** · cat. 5 style · **should fix** · mechanical
  - Current: "Marking every dependence in a sentence whose analysis is stored."; "Sixteen stored lines, with the syllables and feet already marked."
  - Problem: "stored" is the course's machinery, not something the student needs (rule 5: no comment on the course itself).
  - Proposed: "Marking every dependence in a sentence, and checking the marks against the analysis."; "Sixteen lines of Homer, with their syllables and feet marked." (the deck's own subtitle)

- **[lang.ix.en/diagram, list]** · cat. 5 style · **should fix** · mechanical
  - Current: "Reed and Kellogg’s picture, as much as helps."
  - Problem: Fragment and vague.
  - Proposed: "The Reed and Kellogg diagram of the sentence, and how much of it helps the analysis."

- **[lang.iii-indecl.en/parts, list]** · cat. 5 style · **should fix** · mechanical
  - Current: "The same art, in the list a modern class uses."
  - Problem: Vague; the deck subtitle says what it is.
  - Proposed: "The eight parts of speech as modern English grammars count them, beside the traditional names."

- **[lang.iii-decl.de/modals; lang.iii-decl.en/verbals, list]** · cat. 5 style · **suggestion** · mechanical
  - Current: "Their present, their past, and the double infinitive."; "Their forms, and how to tell the participle from the gerund."
  - Problem: "Their" has no antecedent in the list.
  - Proposed: use the deck subtitles.

- **[v.dependence, structure.js]** · cat. 4 examples · **suggestion** · mechanical
  - Current: "(dependens and terminans)"
  - Problem: Latin not italic, unlike prelim.offices in the same file.
  - Proposed: "(<i>dependens</i> and <i>terminans</i>)"

- **[vi.review, vii.review titles]** · cat. 6 consistency · **suggestion** · mechanical
  - Current: "Section Review: Errors"; "Section Review: Figures"
  - Problem: The sections are "Correctness and Errors" and "Figures and Tropes"; the other reviews use the full section name.
  - Proposed: "Section Review: Correctness and Errors"; "Section Review: Figures and Tropes"


### MAIN PAGE (index.html) AND COURSE.JS

course.js: the student-facing strings (instructions, feedback frames, buttons) were read; no finding. (The answer-feedback strings are checked in Phase 2.)

index.html: the opening text and the note on reading and writing are your own recent wording (commits 884f6e4, e48faa3, d02de3b, 3a0c0a9) and were not marked. The citations (Augustine, *De doctrina christiana* IV.3.4–5; Cicero, *De oratore* I.150) are correct. The note states the doctrine as necessary ("must be learned and drilled") but not sufficient ("perfected only by use"), as you require.

- **[index.html, Recitation Tablet help]** · cat. 8 mechanics / 6 consistency · **suggestion** · mechanical
  - Current: "This is called "recitation," and this tablet lets you do it." / "click "See Full Recitation.""
  - Problem: Straight quotation marks (the course uses curly ones), and the button is labeled "See full recitation."
  - Proposed: "This is called “recitation,” and this tablet lets you do it." / "click “See full recitation.”"


## 3. Decks read, with the number of cards in each

All 284 decks were read in full; 2,424 cards in all.

| Deck | Cards |
|---|---|
| i.ambiguity | 9 |
| i.consignification | 11 |
| i.functions | 8 |
| i.imposition | 7 |
| i.sign | 10 |
| i.syncategorematic | 8 |
| ii.letter | 12 |
| ii.meter | 13 |
| ii.punctuation | 8 |
| ii.quantity | 18 |
| ii.syllable | 10 |
| ii.voice | 8 |
| iii.adverb | 7 |
| iii.conjunction | 7 |
| iii.figure | 8 |
| iii.homonymy | 7 |
| iii.interjection | 5 |
| iii.noun-1 | 10 |
| iii.noun-2 | 14 |
| iii.participle | 9 |
| iii.parts | 13 |
| iii.preposition | 7 |
| iii.pronoun | 10 |
| iii.reasons | 12 |
| iii.verb-1 | 12 |
| iii.verb-2 | 15 |
| iv.composition | 7 |
| iv.derivation | 8 |
| iv.etymology | 10 |
| ix.marking | 4 |
| ix.passages | 3 |
| ix.sentences | 3 |
| lang.ii.de/meter | 5 |
| lang.ii.de/orthography | 3 |
| lang.ii.de/syllable | 4 |
| lang.ii.en/meter | 6 |
| lang.ii.en/punctuation | 5 |
| lang.ii.en/spelling | 11 |
| lang.ii.en/syllable | 6 |
| lang.ii.es/meter | 5 |
| lang.ii.es/orthography | 5 |
| lang.ii.es/syllable | 5 |
| lang.ii.fr/meter | 5 |
| lang.ii.fr/orthography | 3 |
| lang.ii.fr/syllable | 5 |
| lang.ii.grc/hexameter | 16 |
| lang.ii.grc/meter | 5 |
| lang.ii.grc/syllable | 7 |
| lang.ii.grc/writing | 3 |
| lang.ii.la/meter | 5 |
| lang.ii.la/orthography | 4 |
| lang.ii.la/syllable | 4 |
| lang.iii-decl.de/accidents | 22 |
| lang.iii-decl.de/compared | 2 |
| lang.iii-decl.de/konjunktiv | 3 |
| lang.iii-decl.de/modals | 2 |
| lang.iii-decl.de/paradigms | 24 |
| lang.iii-decl.de/parts | 2 |
| lang.iii-decl.de/plurals | 3 |
| lang.iii-decl.de/pronouns | 4 |
| lang.iii-decl.de/strong | 4 |
| lang.iii-decl.en/accidents | 5 |
| lang.iii-decl.en/form | 5 |
| lang.iii-decl.en/noun | 5 |
| lang.iii-decl.en/pronouns | 6 |
| lang.iii-decl.en/verbals | 4 |
| lang.iii-decl.en/verbs | 6 |
| lang.iii-decl.es/accidents | 20 |
| lang.iii-decl.es/irregular | 4 |
| lang.iii-decl.es/paradigms | 12 |
| lang.iii-decl.es/participle | 4 |
| lang.iii-decl.es/parts | 2 |
| lang.iii-decl.es/pronouns | 4 |
| lang.iii-decl.es/subjunctive | 3 |
| lang.iii-decl.es/tenses | 3 |
| lang.iii-decl.fr/accidents | 20 |
| lang.iii-decl.fr/paradigms | 12 |
| lang.iii-decl.fr/participle | 4 |
| lang.iii-decl.fr/parts | 2 |
| lang.iii-decl.fr/pronouns | 4 |
| lang.iii-decl.fr/subjunctive | 3 |
| lang.iii-decl.fr/tenses | 3 |
| lang.iii-decl.grc/accidents | 20 |
| lang.iii-decl.grc/compared | 3 |
| lang.iii-decl.grc/contract | 4 |
| lang.iii-decl.grc/mi | 4 |
| lang.iii-decl.grc/paradigms | 24 |
| lang.iii-decl.grc/participle | 3 |
| lang.iii-decl.grc/perfect | 4 |
| lang.iii-decl.grc/pronouns | 5 |
| lang.iii-decl.la/adjectives | 4 |
| lang.iii-decl.la/casework | 8 |
| lang.iii-decl.la/irregular | 6 |
| lang.iii-decl.la/noun | 5 |
| lang.iii-decl.la/participles | 5 |
| lang.iii-decl.la/pronouns | 5 |
| lang.iii-decl.la/verb | 6 |
| lang.iii-indecl.de/particles | 3 |
| lang.iii-indecl.de/prepositions | 3 |
| lang.iii-indecl.en/parts | 7 |
| lang.iii-indecl.en/usage | 5 |
| lang.iii-indecl.es/compared | 4 |
| lang.iii-indecl.es/invariable | 3 |
| lang.iii-indecl.es/prepositions | 4 |
| lang.iii-indecl.fr/compared | 3 |
| lang.iii-indecl.fr/invariable | 3 |
| lang.iii-indecl.fr/prepositions | 4 |
| lang.iii-indecl.grc/particles | 5 |
| lang.iii-indecl.grc/prepositions | 4 |
| lang.iii-indecl.la/adverbs | 4 |
| lang.iii-indecl.la/parts | 3 |
| lang.iii-indecl.la/prepositions | 4 |
| lang.iv.de/composition | 4 |
| lang.iv.de/etymology | 3 |
| lang.iv.de/formation | 5 |
| lang.iv.en/composition | 4 |
| lang.iv.en/etymology | 3 |
| lang.iv.en/formation | 5 |
| lang.iv.es/composition | 3 |
| lang.iv.es/etymology | 3 |
| lang.iv.es/formation | 5 |
| lang.iv.fr/composition | 3 |
| lang.iv.fr/etymology | 3 |
| lang.iv.fr/formation | 5 |
| lang.iv.grc/composition | 4 |
| lang.iv.grc/etymology | 3 |
| lang.iv.grc/formation | 5 |
| lang.iv.la/composition | 3 |
| lang.iv.la/etymology | 3 |
| lang.iv.la/formation | 5 |
| lang.ix.de/poetry | 50 |
| lang.ix.de/prose | 81 |
| lang.ix.en/diagram | 5 |
| lang.ix.en/poetry | 56 |
| lang.ix.en/prose | 97 |
| lang.ix.es/poetry | 51 |
| lang.ix.es/prose | 67 |
| lang.ix.fr/poetry | 50 |
| lang.ix.fr/prose | 72 |
| lang.ix.grc/poetry | 55 |
| lang.ix.grc/prose | 84 |
| lang.ix.la/poetry | 76 |
| lang.ix.la/prose | 77 |
| lang.ix.la/servius | 2 |
| lang.prelim.de/overview | 7 |
| lang.prelim.en/overview | 6 |
| lang.prelim.es/overview | 7 |
| lang.prelim.fr/overview | 7 |
| lang.prelim.grc/overview | 7 |
| lang.prelim.la/overview | 7 |
| lang.v.de/agreement | 4 |
| lang.v.de/clauses | 4 |
| lang.v.de/government | 3 |
| lang.v.de/mood | 4 |
| lang.v.de/order | 2 |
| lang.v.de/voice | 3 |
| lang.v.en/agreement | 3 |
| lang.v.en/clause | 3 |
| lang.v.en/dependence | 2 |
| lang.v.en/phrase | 4 |
| lang.v.en/sentence | 7 |
| lang.v.es/agreement | 4 |
| lang.v.es/clauses | 6 |
| lang.v.es/government | 4 |
| lang.v.es/mood | 5 |
| lang.v.es/order | 4 |
| lang.v.es/voice | 3 |
| lang.v.fr/agreement | 4 |
| lang.v.fr/clauses | 6 |
| lang.v.fr/government | 3 |
| lang.v.fr/mood | 4 |
| lang.v.fr/order | 3 |
| lang.v.fr/voice | 3 |
| lang.v.grc/agreement | 4 |
| lang.v.grc/clauses | 6 |
| lang.v.grc/government | 4 |
| lang.v.grc/mood | 4 |
| lang.v.grc/order | 3 |
| lang.v.grc/voice | 3 |
| lang.v.la/agreement | 2 |
| lang.v.la/building | 6 |
| lang.v.la/clause-kinds | 4 |
| lang.v.la/clauses | 53 |
| lang.v.la/dependence | 2 |
| lang.v.la/government | 3 |
| lang.v.la/subjunctive | 5 |
| lang.v.la/voice | 6 |
| lang.vi.de/errors | 3 |
| lang.vi.de/usage | 2 |
| lang.vi.en/faults | 6 |
| lang.vi.es/errors | 3 |
| lang.vi.es/usage | 3 |
| lang.vi.fr/errors | 3 |
| lang.vi.fr/usage | 3 |
| lang.vi.grc/attic | 3 |
| lang.vi.grc/errors | 3 |
| lang.vi.la/faults | 4 |
| lang.vii.de/figures | 4 |
| lang.vii.de/tropes | 2 |
| lang.vii.en/figures | 5 |
| lang.vii.es/figures | 4 |
| lang.vii.es/tropes | 2 |
| lang.vii.fr/figures | 4 |
| lang.vii.fr/tropes | 2 |
| lang.vii.grc/figures | 4 |
| lang.vii.grc/tropes | 2 |
| lang.vii.la/figures | 4 |
| lang.x.de/grimm | 2 |
| lang.x.de/heine | 2 |
| lang.x.de/kant | 2 |
| lang.x.de/kleist | 2 |
| lang.x.de/manifest | 2 |
| lang.x.de/nachtlied | 2 |
| lang.x.de/werther | 2 |
| lang.x.de/zarathustra | 2 |
| lang.x.en/austen | 2 |
| lang.x.en/bacon | 2 |
| lang.x.en/decl | 2 |
| lang.x.en/dickens | 2 |
| lang.x.en/gibbon | 2 |
| lang.x.en/johnson | 2 |
| lang.x.en/lincoln | 2 |
| lang.x.en/thoreau | 2 |
| lang.x.es/becquer | 2 |
| lang.x.es/cervantes | 3 |
| lang.x.es/dario | 2 |
| lang.x.es/galdos | 2 |
| lang.x.es/gracian | 2 |
| lang.x.es/lazarillo | 2 |
| lang.x.es/teresa | 2 |
| lang.x.es/unamuno | 2 |
| lang.x.fr/descartes | 2 |
| lang.x.fr/larochefoucauld | 2 |
| lang.x.fr/montaigne | 2 |
| lang.x.fr/pascal | 2 |
| lang.x.fr/proust | 2 |
| lang.x.fr/racine | 2 |
| lang.x.fr/ronsard | 2 |
| lang.x.fr/rousseau | 2 |
| lang.x.grc/demosthenes | 2 |
| lang.x.grc/herodotus | 2 |
| lang.x.grc/homer | 2 |
| lang.x.grc/john | 2 |
| lang.x.grc/plato | 2 |
| lang.x.grc/thucydides1 | 2 |
| lang.x.grc/thucydides2 | 2 |
| lang.x.grc/xenophon | 2 |
| lang.x.la/augustine | 2 |
| lang.x.la/cicero1 | 2 |
| lang.x.la/cicero2 | 2 |
| lang.x.la/horace | 2 |
| lang.x.la/livy | 2 |
| lang.x.la/sallust | 2 |
| lang.x.la/tacitus | 2 |
| lang.x.la/virgil | 2 |
| prelim.criteria | 8 |
| prelim.definition | 10 |
| prelim.methodice | 6 |
| prelim.offices | 8 |
| v.agreement | 8 |
| v.clause | 10 |
| v.congruity | 9 |
| v.dependence | 9 |
| v.figures | 9 |
| v.government | 8 |
| v.mood | 10 |
| v.order | 11 |
| v.period | 9 |
| v.phrase | 8 |
| vi.barbarism | 7 |
| vi.metaplasm | 8 |
| vi.solecism | 8 |
| vi.usage | 7 |
| vii.literal | 10 |
| vii.schemata | 13 |
| vii.tropes | 15 |
| viii.equivalents | 14 |
| viii.supposition | 17 |
| x.composition | 10 |
| x.imitation | 1 |
| x.progymnasmata | 22 |
| x.translation | 12 |
| xi.modern | 45 |
| xi.traditions | 56 |
## 4. Decisions that need you

1. **What counts as a complete sentence.** prelim.definition (card "sentence-and-period") says: "A sentence is complete when something is named and something is said of it, as in “The sailor waits.”" But i.functions counts "Mary!", "Has the rain stopped?", and "Bring the umbrella" as complete sentences. The same question comes up in v.congruity (Thomas of Erfurt: completeness needs a subject and a verb), in lang.x.es/teresa ("has no verb, so it is an utterance and not a sentence in the strict sense"), and in lang.ix.grc/prose-2 ("A sentence without a verb"). *Recommendation:* keep the doctrine of i.functions. prelim.definition becomes "A sentence is complete when it expresses a complete thought; in a statement, as in “The sailor waits,” something is named and something is said of it." Add one qualifying sentence to v.congruity, and in lang.x.es/teresa drop the claim that it is not a sentence.
2. **prelim.offices, card "authors":** "Quintilian does not limit the grammarian to the poets, as Dionysius Thrax does." This is false: Thrax's definition names "poets and prose writers" (*Technē* 1). *Recommendation:* cut ", as Dionysius Thrax does."
3. **prelim.offices, card "four-offices":** "the first task of the grammarian … But the second part of the profession…" mixes the two parts of grammar with the four tasks (card 3 says "Reading is the first task"). *Recommendation:* "the first part of the grammarian’s profession is to direct our speaking and writing toward clarity and correctness. The second part is the interpretation of the poets and of other writers."
4. **prelim.methodice, card "methodice":** the rule that a Latin adjective agrees with its noun "in what the noun’s inflections are" contradicts v.agreement, which teaches agreement "in gender, number, and case, not in the sound of the ending." *Recommendation:* "it gives the rule that a Latin adjective agrees with its noun in gender, number, and case," with the explanation of gender, number, and case that follows in the report.
5. **prelim.criteria, card "reason":** the card has Quintilian deciding between *domuum* and *domorum*. At I.6.5 he decides between the ablatives *hac domu* and *hac domo*; I checked this in Butler. *Recommendation:* "Quintilian decides between *domū* and *domō* (“by the house”) by comparison with words of the same declension, such as *anus* (“old woman”) and *manus* (“hand”) (I.6.5)."
6. **Smaller fixes in the Preliminaries**, all recommended as proposed:
   - (a) prelim.criteria: the Our Father has "who art," not "thou art."
   - (b) Ward Farnsworth is not "a grammarian and teacher of oratory," and there is no series called *Classical English*. Proposed: "One modern writer who seeks to do this is Ward Farnsworth, in his books on classical English rhetoric, metaphor, and style."
   - (c) "the ancients" and "the ancient grammarians" (prelim.definition title, prelim.criteria; rule 27a). The title would become "Why does the classical tradition put grammar first?"
   - (d) prelim.definition: Thomas's *oratio congrua* is "a correctly formed sentence," not "a well-constructed paragraph."
   - (e) prelim.definition: "Here we use “literature” … to translate Quintilian" claims Butler's translation for the course and misquotes it. Proposed: "In this translation “literature” renders Quintilian’s *grammatica*."
   - (f) prelim.methodice: "the Greeks call" is not in Quintilian ("they call").
   - (g) prelim.offices reuses examples that other decks analyze in the same way (Ecclesiastes 12:1; *malum*/*mālum*). Rule 18a; keep each once.
   - (h) prelim.definition: the Summa quotation in quotation marks is not the Dominican text, and its source note says "in paraphrase." Either it is your own wording (then only the note changes) or the Dominican text is restored.
7. **Errors of fact in Sections III–XI and the language layer**, all recommended as proposed:
   - (a) iii.adverb: the card says adverbs of time cannot be compared, but it compares "soon, sooner, soonest" itself.
   - (b) iv.etymology: "chance"/"cadence" is not a French-and-Latin doublet. Use "sever"/"separate."
   - (c) v.figures: Donatus lists *eclipsis* among the faults of speech (*vitia*), not the figures (III.3).
   - (d) vii.schemata: the example "sun and moon, wind and wave, rock and tree" has the conjunctions that the figure omits. Use "the dark wood, the cold stream, the bare hill."
   - (e) viii.supposition: Ockham lists material supposition third, not first.
   - (f) xi.modern: Merge gives "opens the door," not "the door opens."
   - (g) lang.iv.la/etymology: "chapter"/"capital" is not a doublet. Use "blame"/"blaspheme."
   - (h) lang.ii.la/syllable: in *nemusque* and *opusque* the syllable before *-que* is long by position. Use *deaque*, *fēminaque*.
   - (i) lang.ix.en/poetry-34 (Ozymandias): "the hand … and the heart" are the objects of "survive" (that is, "outlive"); they are not what survived.
   - (j) lang.ix.de/poetry-16: in "Ein feste Burg" it is the article *ein*, not the adjective, that lacks the ending.
   - (k) lang.vi.la/faults: Donatus's example is *commorat* for *commoverat*, as vi.metaplasm has it.
   - (l) lang.vii.la/figures: *edās*, not *edis*.
   - (m) lang.x.en/dickens: the passage has seven contrasting pairs, not ten.
8. **Livy V.47 in lang.ix.la/prose (prose-68 to prose-72).** This is prose, but its English is the course's own rendering. Your rule of 25 Oct 2026 requires a published translation for prose. The citation should also be V.47.3–4. *Options:* (a) use Canon Roberts's translation, which the deck already uses for Livy, after checking it against the printed text; (b) drop the passage and its five cards. *Recommendation:* (a).
9. **Named translations that were altered.** These quotations do not match their named editions: Cotton's Montaigne (the edition has "thou hast … thy"), Veitch's Descartes (two passages; "somewhat," "sceptics," "(COGITO ERGO SUM)" dropped), Trotter's Pascal ("vapour"), Moore's *Manifesto* ("spectre," "Powers"), Abbott's Kant (a comma), Graham's Clausewitz ("War"), Hunt's Grimm ("wood-cutter"), and Lincoln's Second Inaugural (the reading copy reads "a just, and a lasting peace, among ourselves"). Each appears in both Section IX and Section X. *Recommendation:* restore each exactly. Then let me compare all 125 "Translation:" lines of the language layer with their editions before Phase 2. Of the ten named translations I checked in the language layer, seven had been altered, one was cut without a mark (Zimmern), and only Common’s two Nietzsche passages matched.
10. **Translations I could not verify.**
    - Mackail's two epigrams in lang.ix.grc/poetry. The Aster rendering does not read like Mackail.
    - Milton's *Areopagitica* in lang.ix.en/prose: modernized, with no edition named.
    - The English of *Odyssey* I.1–5 in lang.ix.grc/poetry has no translator. If it is the course's own, the Sources note must say so.

    *Recommendation:* let me check Mackail in the 1890/1906 printings on archive.org. For Milton, name an edition (I suggest the Standard Ebooks text) and add "The spelling is modernized." Mark the *Odyssey* rendering as the course's own.
11. **Donatus, Priscian, and Bacon in quotation marks.** Their English definitions stand in quotation marks in Sections II, III, V, and VI, but TRANSLATIONS-USED.md records them as Claude's renderings "to be confirmed by Timothy." *Options:* (a) you confirm them as your own; (b) each is recast without quotation marks ("Donatus defines the noun as …"). *Recommendation:* (a) if you have read them; otherwise (b).
12. **"For her and I."** iii.preposition treats it as careful usage ("which careful usage prefers"), but v.government calls it "a failure of government," and so does lang.vi.es/errors. *Recommendation:* call it an error of case in iii.preposition: "“for her and me,” not “for her and I,” which is an error of case."
13. **Run-on and comma splice.** lang.ii.en/punctuation distinguishes the comma splice from the run-on (fused) sentence, but vi.solecism treats them as one error. *Recommendation:* keep the distinction and revise vi.solecism to match.
14. **Section I wording**, all recommended as proposed:
    - (a) i.sign: it is the sound of "water," not its meaning, that has no natural connection with the thing.
    - (b) i.sign: the definition of voice attributed to "the grammarians" differs from Donatus's. Attribute it to Aristotle.
    - (c) i.imposition: use Butler's "the surest pilot in speaking," as prelim.criteria does.
    - (d) i.syncategorematic: "The ancient grammarian Priscian" (rule 27a).
    - (e) The quotation from John of St. Thomas (Deely) on i.sign is still unverified since the Oct 19 check.
15. **"Grammar is one in substance in all languages."** lang.iii-decl.grc/compared states this in the course's own voice, but viii.equivalents and xi.modern call it disputed. *Recommendation:* attribute it: "on the view held by Roger Bacon and Boethius of Dacia …"
16. **The Spanish Sources notes and the cards on editions.** The Sources notes of lang.ix.es/poetry and lang.ix.es/prose run to 700 and 900 words. poetry-6, prose-31, and prose-57 report the printing habits of editions, and about 46 sentences in the poetry deck describe what "the print" does. *Recommendation:* reduce each Sources note to its main sources and keep prose-6, which teaches what modern spelling changes. Cut poetry-6, prose-31, and prose-57 and the typesetting sentences, and change the twelve one-word sentences ("Eleven.") to "That is eleven."
17. **Smaller points of doctrine or text**, each recommended as proposed in the report:
    - (a) lang.ix.de/prose-64: *dem war* is a demonstrative by the deck's own test in prose-28, not a relative.
    - (b) lang.ix.de/poetry-48: *Herzen* is the regular dative singular, so the rendering should be "with heart, mouth, and hands."
    - (c) lang.ix.la/poetry-68: the *Vexilla regis* lines are stanzas 1 and 3 of Fortunatus, not lines 1–8.
    - (d) lang.ix.es/prose-43: give Terence's own text, *humani nil a me alienum puto*.
    - (e) lang.ix.es/prose-34: add that in 2023 the Academy allows the accent on *sólo* in ambiguous sentences.
    - (f) lang.x.en/lincoln: "almost every word is short and English" is overstated.
    - (g) ii.letter: English spelling was settled in the later seventeenth century.
    - (h) ii.quantity: "minor accidents … as we noted earlier" points to nothing and diminishes the doctrine.
    - (i) xi.traditions: *rāmo vanaṃ gacchati*, by the deck's own sandhi rule.
    - (j) viii.supposition: Peter of Spain treats ampliation in *Tractatus* IX.
    - (k) lang.ii.la/meter: *Mantua Vergilio gaudet, Verona Catullo*.
    - (l) lang.prelim.en/overview: "the parts of speech are found in every language" is disputed, as xi.modern says.
    - (m) lang.ix.grc/poetry: *Medea* 5 *δέρος*, if your edition reads so.
    - (n) Demosthenes: *προὐτίθετʼ* with the coronis.
    - (o) lang.ix.grc/prose-50: name the edition of John (Nestle–Aland).
18. **"A standard English grammar."** 24 English decks give this as a source, and in 12 it is the only one. *Recommendation:* name the grammar that was actually used, such as Curme's *English Grammar* and Jespersen's *Essentials of English Grammar*, as four decks already do. Which grammars do you want named?
19. **The 113 mechanical findings, as a class.** These include the 113 bold lead-in fragments; the foreign words in card titles, to be put in italics; the title-case card titles; the `<span lang>` foreign words in lang.ii.fr/syllable and lang.ii.de/syllable, which display in roman type; the broken `<em>…</i>` markup in lang.iii-decl.de/paradigms (eight cards); the "Fourteen passages" subtitle of lang.ix.es/prose; the descriptions in structure.js ("stored," ii.letter); macrons; and the restored quotations of item 9. *Recommendation:* approve them as a class.
20. **The remaining 44 suggestions marked "needs Timothy."** These are mostly example reuse under rule 18a, renderings, and word choices; each has its proposed wording in the report. *Options:* approve them as proposed, or have me go through them with you one by one. *Recommendation:* approve as proposed, except any you want to see.
