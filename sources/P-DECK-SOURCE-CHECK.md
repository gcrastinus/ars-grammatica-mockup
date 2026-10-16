# Source check: Preliminary decks P.1–P.4 (ars-grammatica-mockup)

I pulled the repo with `git pull --rebase`. I checked prelim.definition.js, prelim.methodice.js, prelim.offices.js and prelim.criteria.js without editing or committing anything.

Sources used:
- Butler's Loeb Quintilian on LacusCurtius (I.4–6 and I.7–12)
- The Latin Library: Quintilian I, Isidore I, Varro LL IX–X
- Kent's Loeb Varro, vol. II (archive.org `onlatinlanguage02varruoft`)
- New Advent: the English Dominican translation of the Summa
- Keil, GL I 426.21–31 (Diomedes), as printed in scholarly citations
- Dropbox: `boethius-dacia.txt` (McDermott, *Godfrey of Fontaine's Abridgement of Boethius of Dacia's Modi significandi*, 1980), `bursill-hall.txt` (*Speculative Grammars of the Middle Ages*), and CITATIONS.md

These Dropbox files could not be fetched: the Isidore (Barney) PDF, 6.8 MB, and the Thomas of Erfurt/Bursill-Hall 1972 PDF, 12 MB. Both are over the connector's 5 MB limit.

## 1. Butler's Quintilian quotations
**OK, all of them.** I normalised the text (case and punctuation ignored) and checked every Butler quotation word for word against LacusCurtius. Every one is verbatim. There is no OCR damage: no "junis" or similar appears anywhere in the decks. The section numbers are also correct:
- I.4.2, I.4.3, I.4.4, I.4.5
- I.6.1, I.6.2, I.6.3, I.6.4, I.6.5, I.6.27
- I.6.39, I.6.40, I.6.42, I.6.45
- I.8.1–2, I.8.13
- I.9.1

**I.9.1 Latin: OK.** The Latin Library text reads: *Et finitae quidem sunt partes duae quas haec professio pollicetur, id est ratio loquendi et enarratio auctorum, quarum illam methodicen, hanc historicen vocant.* The deck quotes this correctly. The only change worth making is to match the printed comma: replace `quarum illam methodicen hanc historicen vocant` with `quarum illam methodicen, hanc historicen vocant`.

## 2. Paraphrases

**Isidore, name of grammatica (Etym. I.5.1): Fix the attribution.** The Latin is *Grammatica autem a litteris nomen accepit. Γράμματα enim Graeci litteras vocant.* Isidore does not call a letter "a written mark of a sound" in I.5. In the definition deck (line 26), replace:
`The name comes from the Greek word for a letter, <i>gramma</i> (plural <i>grammata</i>), that is, a written mark of a sound. Isidore of Seville explains the name of the art in this way.`
with
`The name comes from the Greek word for a letter, <i>gramma</i> (plural <i>grammata</i>): Isidore of Seville says that grammar "takes its name from letters, for the Greeks call letters <i>grammata</i>" (<i>Etymologiae</i> I.5.1).`
The quoted English is my rendering, not Barney's: Barney's wording could not be checked because the PDF is too large. Either check it against Barney, or label it "trans. T. Kearns".

**Isidore, definition (I.5.1, quoted as Barney): Unverifiable as to Barney's exact words.** The deck has "Grammar is the knowledge of speaking correctly, and is the origin and foundation of liberal letters." This matches the Latin *Grammatica est scientia recte loquendi, et origo et fundamentum liberalium litterarum*. CITATIONS.md says the second half was checked against Barney. The first half ("knowledge of speaking correctly" or "of correct speaking") needs checking against p. 42 of the Barney PDF before it is printed as a quotation.

**Isidore, oratio (I.5.3): OK.** The Latin is *Oratio autem plena est sensu, voce et littera* ("speech is complete with sense, voice, and letter"). "Made up of three things: sense, voice, and letters" is a fair paraphrase. A more literal option: "Isidore says that speech (<i>oratio</i>) is complete with sense, voice, and letter (I.5.3)."

**Diomedes citing Varro (Keil, GL I 426.21–31; Varro fr. 236 Funaioli): mostly OK; one Fix.** The Latin is *Grammaticae officia, ut adserit Varro, constant in partibus quattuor, lectione enarratione emendatione iudicio.* The four names and their order are correct, and there is no published English translation. One gloss is wrong. Diomedes defines *iudicium* as judging whether speech is delivered rightly, and as *aestimatio qua poema ceteraque scripta perpendimus*. Judging whether a text is genuine is Quintilian's point (I.4.3), not Diomedes'. Change the source line to `Diomedes, <i>Ars grammatica</i> (Keil, <i>GL</i> I 426), citing Varro, in paraphrase (no published English translation).` Then replace:
`judging whether a text is genuine and how well it is written.`
with
`weighing the merit of a poem or other writing (and, Quintilian adds, whether it is genuine).`

**Dionysius Thrax, Technē 1: the paraphrase is OK; Kemp's wording is Unverifiable.** The Greek is ἕκτον κρίσις ποιημάτων, ὃ δὴ κάλλιστόν ἐστι πάντων τῶν ἐν τῇ τέχνῃ, which is accurately rendered as "the finest part of the art". I could not find Kemp's text (*Historiographia Linguistica* 13, 1986, 343–363) in Dropbox or online, so his wording is unchecked. The deck uses no quotation marks, so "trans. Kemp, in paraphrase" is acceptable. If a verifiable printed translation is wanted, Davidson (1874) has: "criticism of poetical productions, which is the noblest part of grammatic art."

**Boethius of Dacia: Fix the source line.** The passage is in q. 3, McDermott p. 31: "Nevertheless grammar is a speculative science which is not an essential part of philosophy, as is physics or mathematics or theology. Rather, it is an introductory science, useful for the cognition of the speculative sciences which are essential parts of philosophy." There is also q. 5: "Again it is necessary as introductory to other sciences." The paraphrase is accurate, except that it leaves out theology and adds "studied before logic", which is the deck's own inference. Replace `Boethius of Dacia, <i>Modi significandi</i>, in paraphrase;` with `Boethius of Dacia, <i>Modi significandi</i> q. 3 (Godfrey of Fontaines's abridgement, trans. A. C. Senape McDermott, 1980), in paraphrase;`. Optionally change "natural philosophy and mathematics" to "natural philosophy, mathematics, and theology".

**Thomas of Erfurt: Fix (needs one qualifier).** At §223 Thomas calls this the remote end. Bursill-Hall's *Speculative Grammars* gives the Latin as *finis remotus constructionis est generare perfectum sensum in animo auditoris*. Bursill-Hall's 1972 translation could not be checked because the PDF is over the limit. Replace:
`Thomas of Erfurt names this as the end of a construction`
with
`Thomas of Erfurt names this as the remote end (<i>finis remotus</i>) of a construction (<i>Grammatica speculativa</i> §223)`

**Varro, LL VIII–X (Kent): OK, add the location.** Book VIII argues against analogy, Book IX for it, and Book X gives Varro's own account. The admission of both is at IX.3. Kent: "Therefore, since usage consists of unlike and like words and their derivative forms, neither Anomaly nor Regularity is to be cast aside, unless man is not of soul because he is of body and of soul." Note that Kent translates *analogia* as "Regularity". Suggested source: `Varro, <i>De lingua Latina</i> VIII–X, esp. IX.3 (trans. R. G. Kent, Loeb), in paraphrase.`

**St. Thomas, ST I-II q.57 a.3 ad 3: mostly OK; Fix the nuance.** The English Dominican text reads: "Even in speculative matters there is something by way of work: e.g. the making of a syllogism or of a fitting speech, or the work of counting or measuring. Hence whatever habits are ordained to such like works of the speculative reason, are, by a kind of comparison, called arts indeed, but 'liberal' arts, in order to distinguish them from those arts that are ordained to works done by the body, which arts are, in a fashion, servile, inasmuch as the body is in servile subjection to the soul, and man, as regards his soul, is free [liber]." Replace:
`they are called <strong>liberal</strong> arts because they belong to the soul, which is free.`
with
`they are called <strong>liberal</strong> arts to distinguish them from the arts ordained to works done by the body, which are in a fashion servile, “inasmuch as the body is in servile subjection to the soul, and man, as regards his soul, is free [liber]” (trans. English Dominican Province).`

**Donatus, vox (Ars maior I.1): Fix.** Donatus says *Vox est aer ictus sensibilis auditu, quantum in ipso est* ("Voice is struck air, perceptible to hearing, as far as lies in itself"; my translation). He says nothing about a living being. That idea is Aristotle's (*De anima* II.8, 420b: voice is a sound made by an animate creature). Replace:
`the <strong>voice</strong>, that is, sound produced by a living being;`
with
`the <strong>voice</strong>, that is, struck air perceptible to hearing;`
and add "Donatus, <i>Ars maior</i> I.1" to the source line. If the deck keeps "living being", cite Aristotle, *De anima* II.8.

## 3. Other quotations
- **Donatus, *Ars minor*, trans. Wayland Johnson Chase (1926): OK.** The edition exists.
- **I.9.1, "trans. T. Kearns": OK.** It is an accurate rendering of the Latin.
- **King James Version, Lincoln, Austen, and Gibbon lines: OK.** I did not re-check them; CITATIONS.md records them as checked earlier.
- **Nothing else found.**
