# Independent audit of the Spanish layer (27 Oct 2026)

Audit read against 917b696. Each item was checked by hand before any change. DLE (dle.rae.es) returns 403 to automated requests, so DLE entries were not read in this batch; the changes below that rest on the DLE do not quote it.

## Confirmed and fixed
- A1 Bécquer LIII, *Y, otra vez, con el ala á sus cristales*: *el* + *ala* is not a synalepha. Y+otra and ala+á join: Yo-tra-vez-con-e-la-laá-sus-cris-ta-les = 11 (13 with no synalepha; the audit's "12" is a slip). poetry-23 and poetry-ex:n14 rewritten.
- A2 Góngora, *Y ríase la gente*: the r stops any joining. Y-rí-a-se-la-gen-te = 7. Robles §99 argument dropped; poetry-28, poetry-27 context, poetry-ex:n30 rewritten.
- A3 Quevedo: subject of *llevare* is *que* (= *sombra*); translation and poetry-49 now "the shadow that will take the white day from me."
- A4 Manrique *recuerde*: old sense "to wake" added (poetry-9, its qp, poetry-ex:n5). The English is the course's own, so the first line now reads "Let the sleeping soul awake" (Timothy, 27 Oct 2026).
- A5 *yago*, *yazco*, *yazgo*: three forms of the present, not spellings.
- A6 *cantan* "you sing." A7 *según* and *entre* (and *hasta*, *incluso* "even") take subject forms. A8 *he freído*/*he frito*, both used; *frito* more common (also participle-ex:espartm14). A9 only *al* and *del* in the contraction table.
- B2 Góngora XLIV variant note (Castro vs. *oro bruñido al sol*). B3 *Coged* with respectful *vos* (poetry-21, poetry-ex:n11). B4 "twenty-nine letters 1803–2010" cut (the count depends on when w entered the alphabet, which the course does not need; not checked against the Ortografía 2010). B5 *perro* cut. B6 Mozarabic spoken also by Muslims and Jews; "Romance speech of the Christians" in origin panel also corrected. B7 Santillana's fifteenth-century sonnets (meter-4, meter-ex:C1). B8 *dar* takes -er/-ir preterite endings. B9 *banc*. B10 synaeresis, diaeresis, hiatus added to meter-2. B11 lira rhyme: lines 1 and 3.
- Minor: accidents-16 capital after semicolon; accidents-18 imperative (usted, ustedes, nosotros forms are subjunctive); formation-4 "some adjectives in -n"; orthography reform 2023 *sólo*; "prisoner in Castile" cut; *la color* as usage of the period; San Juan *ya* (consonant y, no synalepha).
- C1 "(a dependent clause)" added once, at the first use in course order, lang.v.es/mood, first panel; lang.v.es/clauses comes later and has no definition.

## Not done
- C2 (Spanish words mentioned as words in double quotes): rejected, and Timothy confirmed (27 Oct 2026). STYLE-GUIDE-CARDS.md rule 4 and CLAUDE.md rule 8 say foreign words keep italics whether used or mentioned; only English words mentioned take double quotes.
- C3: not written, as instructed.

## Timothy's answers (27 Oct 2026), carried out
- B1: *Don Quijote* I.8 (windmills) dropped from `lang.ix.es/prose` (panels prose-17 to prose-21, exercise items n12 to n15; the deck now has fourteen passages). The spelling card prose-6 no longer cites I.8 (*á*, *vió*, *dónde*, *ésta*); its question point that keyed *rocin* "with no accent" (the edition prints *rocín*) was replaced by one on *lança* → *lanza*. The proverb card `lang.vii.es/figures` figures-3 now quotes *La Celestina*, Act VI (Cejador 1913, p. 220; the Burgos 1499 text in roman type), with Mabbe's English of 1631 (reprint 1894, p. 118), both read from the page images; the card says what the edition does with the spelling (old letters kept, accents of its own). Source file `celestina-acto-vi-cejador-1913-mabbe-1631.txt`.
- Manrique: the English is the course's own; first line now "Let the sleeping soul awake."
- Góngora XLIV: Castro's reading kept with the variant note.
- C2: confirmed; foreign words in italics.
