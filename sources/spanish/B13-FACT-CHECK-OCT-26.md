# Spanish, batch B13: fact check of `lang.x.es` (26 Oct 2026)

Scope: eight model decks of two panels each (the text with its English and context; points of style and composition), with no question points and no exercise. Files: `data/decks/lang.x.es/*.js`, `data/languages/x.es.js`.

## Passages

The plan (section 4.3) named Cervantes's prologue, Santa Teresa, Gracián, Larra, Unamuno, Clarín, Garcilaso XXIII, and Darío. Three changes follow the plan's own rules. Larra and Clarín have no public-domain English (B10), so the prose set is Cervantes, Teresa, *Lazarillo*, Gracián, Galdós, and Unamuno. Garcilaso XXIII is whole in `lang.ix.es/poetry` and is from a pre-1800 edition that was not shown to modernize (B14 row 20.15), so the second verse model is Bécquer's Rima XXI instead. Every passage is a different stretch of text from the one asked in IX; the editions and translations are those of IX (the prologue of Cervantes is in the same volume of the BAE as the two passages of IX).

| Deck | Passage | Spanish edition | English |
|---|---|---|---|
| cervantes | *Don Quijote* I, Prólogo, last paragraph, two sentences | Aribau, BAE 1 (1864), p. 253 | Ormsby |
| teresa | *Libro de la vida* I, three sentences on her father | Mesa y López (Nelson, 1912), p. 6 | Lewis |
| lazarillo | Tratado primero, one sentence | Chaytor (1922), p. 3 | Markham |
| gracian | *Oráculo manual* 3, heading and two sentences | Reyes (1918), p. 185 | Jacobs |
| galdos | *Marianela* I, second paragraph, first sentence | Guirnalda (1888) | Bell |
| unamuno | *Del sentimiento trágico* I, two sentences | Renacimiento (undated), p. 6 | Flitch |
| becquer | Rima XXI, four lines | San Francisco (1891), p. 41 | the course's own |
| dario | “Sonatina,” third stanza | Coni (1896), p. 24 | the course's own |

## Points that rest on one source or on an inference

- The Spanish of every passage was read from one page image and not compared with another copy; the machine-read English of Bell (Galdós) and Flitch (Unamuno, this passage) is that of Project Gutenberg and was not compared with the page images; Ormsby's preface is the Gutenberg text.
- **Pre-1800 texts.** Cervantes (1605), Teresa (written 1562 to 1565), the *Lazarillo* (1554), and Gracián (1647) are quoted from the editions of IX. The Teresa, Chaytor, and Reyes editions state or show modern spelling; the Aribau edition (BAE 1, 1864) prints the spelling of the nineteenth century and no statement that it modernizes was found. Timothy's rule (pre-1800 quotations come from a named modernizing edition) is therefore met for three of the four and not shown for the Cervantes prologue; see B14 row (22).
- **Lazarillo.** The English begins with a lowercase “but” (Markham's sentence), because the quotation starts after a reply that Markham leaves out. The context panel says that Markham's rendering of the child's words (“Mother, he is ugly!”) is free and omits the father's reply. The word *negro* is the text's. *Coco* as a bogeyman is general knowledge (the DLE entry was not read).
- **Bécquer.** The first line has a low mark after *dices* in the print, read as a comma. The meter (11, 11, 11, 7) is the course's own count by the rules of `lang.ii.es/meter`, with synalepha across the dots in line 4; B14 should compare it with a metrical authority.
- **Darío.** Every line counted at 14 syllables by the same rules; the rhyme AABCCB.
- **Gracián.** *Conceptismo* as the name of Gracián's style, and the figure of the open game of cards, are general knowledge; the number of the aphorisms (three hundred) is from the book's own title tradition and not checked in the edition.
- **Style points.** Every statement about the Spanish (the omitted noun in *El nuestro es el otro*, the expressed *yo*, the diminutive *-ico*, *debe de haber* as supposition, *dígase*, the subjunctive of *quiéranlo o no* and *por do quiera que se le mirara*, the infinitive with the article as a subject, the verbless *Muy honesto en gran manera*) is the course's own reading, checked against what the Manual states in the earlier batches and not against a new reading of it in this batch.
- The audit's dash warnings for Galdós and Unamuno are the dashes of Bell's and Flitch's printed English; they are quoted as printed.
