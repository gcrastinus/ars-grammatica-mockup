# Spanish lane B handoff (poetry batch B12)

Worktree: `~/spanish-poetry`, branch `spanish-poetry`, branched from `ab1145a`. Nothing on this branch has been pushed, and nothing has been merged into main. `SPANISH-PLAN.md` was not edited. Grammar-batch files were not edited.

Last content commit: `80b9e4e` Spanish IX: poetry exercise.
Poem commits, oldest first: `49d2a01` Romance del prisionero, `9fa6a92` Manrique, `fe1bff0` Sonatina, `a4d0e72` Garcilaso, `918dbfe` Bécquer, `5ffea04` Góngora, `4c08ee8` San Juan, `6882150` Lorca, `e00377b` Espronceda, `34fdbb6` Quevedo.

At `80b9e4e`, `node test/lang-audit.js --only=lang.ix.es`, `node test/browser-check.js --only=lang.ix.es`, and `node test/lang-order-speech-check.js` all passed with zero failures. The audit reported 51 panels, 10 question points (longest correct option 2/30), and the exercise sets A 15 (0/15), B 14 (0/14), C 14 (0/14). The browser check rendered 43 items.

## Done

Ten passages are in `data/decks/lang.ix.es/poetry.js`. The panels are in course order, and the panel ids were not renumbered. Each passage is five panels, and `poetry-6` is the spelling card for the older prints. One question point, three variants, sits on each opening panel.

The screen is `data/languages/ix-poetry.es.js`. Its object id is `lang.ix.es`, so `?preview=es` shows it. The script tag is in `index.html`, after `ix.grc.js` and before `ix.fr.js`. Spanish stays `hidden: true` in `course.js`, which this lane did not edit. The study tile says “Ten passages of Spanish verse, read part by part.” The exercise tile says “43 questions.”

The exercise is `data/exercises/lang.ix.es/poetry-ex.js`, 43 multiple-choice items, sets A 15, B 14, and C 14. The English under the verse is the course’s own, recorded in `sources/TRANSLATIONS-USED.md`. Each quoted text is in `sources/spanish/`, and each check is a row in `sources/QUOTATION-CHECK-SPANISH.md`.

Passages, in course order:

1. Anonymous, *Romance del prisionero*, Wolf and Hofmann no. 114 (Berlin, 1856), twelve lines. Not the Menéndez Pidal composite already on the meter card, and not no. 114a.
2. Jorge Manrique, *Coplas*, stanza 1. Antonio López, Barcelona, Colección Diamante, vol. 114.
3. Garcilaso, Soneto XXIII, the whole sonnet. *Obras*, second edition, Madrid, Imprenta de Sancha, 1817.
4. Bécquer, Rima LIII, first stanza only. *Rimas*, San Francisco, The History Company, 1891.
5. Rubén Darío, “Sonatina,” first stanza only. *Prosas profanas*, Buenos Aires, 1896.
6. San Juan de la Cruz, stanzas 1 and 2 of the poem that begins *En una noche oscura*. *Obras*, tomo tercero, Toledo, 1914, Padre Gerardo.
7. Quevedo, the whole sonnet that begins *Cerrar podrá mis ojos*. *Obras*, poesías, tomo tercero, Madrid, M. Rivadeneyra, 1877, Florencio Janer. Printed page 78.
8. Góngora, three lines only, beginning *Ande yo caliente*. Madrid, 1820.
9. Espronceda, opening sixteen lines of the pirate song and the refrain, not the stanzas between them. *Poesías*, Madrid, Imprenta de Yenes, 1840.
10. Lorca, “Romance de la luna, luna,” nine lines through *Huye luna, luna, luna.* *Primer romancero gitano*, Madrid, Revista de Occidente, 1928. This replaces Machado, “Caminante, son tus huellas,” which is outside the cutoff and was not quoted. The meter deck was not edited.

## Half done

`ix-poetry.es.js` is a temporary name so it cannot collide with the prose batches. It must later be merged into `ix.es.js`. Do not load both files in `index.html` at once: both assign `ARS.languages["lang.ix.es"]`, and the second would replace the first. The merge belongs to whoever joins the lanes, after the prose screen exists.

`sources/QUOTATION-CHECK-SPANISH.md` and `sources/TRANSLATIONS-USED.md` also receive rows from the prose lane. A later merge of this branch will have to combine those rows. This lane only appended poetry rows.

Felipe Robles Dégano, *Ortología clásica de la lengua castellana* (1905), is the metrical authority actually read. The copy used was an optical reading, not a comparison with the printed book, and no excerpt file was saved in the repo. The cards that rest on him say so.

## Next

Merge the screen into `ix.es.js` when the prose lane’s screen exists. Do not add a recitation outline in this lane. That waits until the decks are final. Do not quote Machado, Silverio de Santa Teresa, Blecua, Navarro Tomás’s edition, Keniston, or any text whose author died in 1946 or later.

## Decisions for Timothy

1. Machado is replaced by the 1928 Lorca romance, nine lines through *Huye*. The meter card’s Machado lines were left as they are.
2. The ballad is Wolf and Hofmann no. 114, not the composite on the meter card. No. 114a is named on the spelling card so the two copies stay apart.
3. The English is the course’s own line-by-line rendering. Longfellow and Walsh were not used.
4. Several counts rest on Robles 1905 or on the stanza’s pattern, and the cards say so. The main ones are: the old oxytone assonance of *albor* and *galardon*; Garcilaso’s *y* joining the vowel after it in *rosa y azucena* (either join is still eleven); Bécquer’s *ala* and *á* staying apart; Góngora’s *Y* joining *rí*; San Juan’s *ya* staying apart; Lorca’s *aire* as the diphthong *ai-re*; Espronceda’s *Mi* joining stressed *ú*, and the diaeresis in *rïela*; Quevedo’s *dia* as two syllables. A three-vowel synalepha was not asserted. Espronceda’s *Asia á un lado* was not divided.
5. The Manrique volume’s prologue is signed A. R., and the archive calls the editor A. Riera. His death date was not found. The Longfellow 1878 bilingual edition was located and not quoted.
6. Garcilaso’s *presto* has a broken *t* in the 1817 scan and is quoted as *t*. The title page names no annotator.
7. Bécquer is the San Francisco 1891 “novísima edición americana.” The preface is signed “Los editores,” and the editors are not named. Only the first stanza is quoted.
8. The Lorca print has *mira mira* with no comma, and *Huye luna, luna, luna* with no inverted exclamation. The rendering uses “tuberoses” for *nardos*, “lustful” for *lúbrica*, and “bustle” for *polisón*.
9. Góngora’s 1820 print has *Ande yo caliente*, not *Ándeme yo caliente*. Only three lines were clear enough to quote. Estala died in 1815. The book is 1820.
10. San Juan is tomo tercero, Toledo, Viuda e Hijos de J. Peláez, 1914, edited by Padre Gerardo (died 1922). Silverio was not used. The blackletter heading was not quoted. The print’s dash spacing in the stanza numbers was kept.
11. Espronceda is the Yenes 1840 edition. The catalog of the copy names José García de Villalta (died Athens, 1846) as editor. His name was not on the title page that was read, and he is not named in the student-facing Sources note.
12. Quevedo’s 1877 print has plural *dexarán*, then singular *tendrá*. *Dia*, *llevare*, *afan*, and *prision* have no accent. *Médulas* has one. There is a space before the semicolon after *cuidado*. The mark after *sentido* descends below the letters and is quoted as a comma. The text layer of the same page reads a period. The magnet-stone footnote on the page belongs to an earlier sonnet and was not quoted. Janer died while finishing the volume. The advertencia is dated Madrid, 25 de Setiembre de 1877, and signed Adolfo Rivadeneyra.
13. *Humor* in the Quevedo sonnet is glossed as a fluid of the body. That is the ordinary early-modern sense, and no medical source is cited on the card.
14. *Honesto* in Garcilaso is glossed “modest.”
