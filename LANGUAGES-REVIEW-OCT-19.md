# Languages layer: review of Grok Build's 18–19 Oct work (19 Oct 2026)

All files load; all 40 language screens open; generated Latin noun, verb, and building drills work (word lists match the old app: 50 nouns, 13 adjectives, 29 verbs, 28 syllable words). The items below are to be fixed.

## 1. Exercise buttons inside deck tiles: missed
`ARS.deckEx` has no `lang.*` entries, and `makeTile` adds the button only when the exercise id is in `ARS.exerciseFiles`, which no language exercise is. Zero `.ex-link` buttons appear on language screens. Every deck with a matching exercise must show it as the small "Exercise →" button inside the deck tile; only exercises with no matching deck stay tiles.

## 2. Lost or emptied screens
- Latin VI lost `vices-ex` (Latin-specific: *Puella bonus est*, Donatus's solecisms in the *Aeneid*). Restore it on the Latin VI screen and build it to at least 20.
- English VII is empty because `figures-ex` was removed. Restore it (and build it up).
- `vi.la/faults-ex` (2 questions) was dropped: fold its items into `vices-ex`.
- `v.en/congruity-ex`: the moved item keeps the id `lang.v.en/govern-ex:gv9-A` (give it a congruity id); American punctuation: "“me.”" and "“me,” not “I”". Build the set past 7.
- Remove the orphaned `govern-ex.js`, `vi.la/faults-ex.js` files once their items are moved (or wire `vices-ex` back).

## 3. Section VI for Greek, French, German: no study deck
Each has only `errors-ex` (24) and a `vices-ex` (7). Write a VI study deck for each (the barbarisms and solecisms typical of the language, realities first), pair it with the exercise, and build `vices-ex` to at least 20 or merge it. Greek `errors-ex` is mostly accent, breathing, and augment drill, not Section VI matter: rewrite it around real errors; c5 and c6 also repeat Section IV's *ἐξέβαλον*, *συνέβαλον*.

## 4. Questions that ask about the card's own example (Timothy's rule: never in the same respect)
- `lang.iv.la/formation-ex`: a1–a5, b1–b4, b6, c1, c3 re-ask the deck's own words (*scrīptor, nātiō, vēritās, sōlitūdō, cūriōsus, comprimō, inquīrō, eximō, accēdō, accipiō, corrumpō, ēiciō*). Use fresh words.
- `lang.iv.grc/formation-ex`: nearly every item drills the cards' words (*ποίησις, παίδευμα, παιδευτής, ἀνέλπιστος, στρατηγός, φιλόσοφος, ἀπέλυσα, ἀπέλυον, ἐξέβαλον, συνέβαλον*). Use fresh words.
- `lang.iv.fr/formation-ex`: c1–c4 ask the deck's four doublets; b1, b3, b5, b7, c6 use *vendeur, chanteuse, vendeuse, refaire, redire*. Fresh words.
- `lang.vii.fr/figures-ex`: a2–a6, b2–b5, c3–c6 ask about the deck's own fable, *Phèdre*, and Hippolytus lines. Use different passages.
- `lang.iii-decl.de/compared-ex`: ~15 of 20 re-ask *Das Lesen macht Freude* and *Ich rufe dich an*; a2 asks the card's own *das Gute*. More sentences.
- `lang.ii.la/syllable` and `latin-forms.js` accent words: the card's *imperātor, cīvitās, cōnsilium, virumque, armaque* are in the drill pool. Remove them from the pool.

## 5. Padding and sets with no target language
- `lang.iii-indecl.fr/parts-ex`: fpos21–32 repeat fpos9–20. New words.
- `lang.iii-indecl.fr/govern-ex`: fgov9–20 re-ask fgov1–8. New sentences.
- `lang.vii.grc/figures-ex` and `lang.vii.de/figures-ex`: none of the 21 items contains Greek or German. Rebuild on Homer, Plato, Sophocles and on Goethe, Schiller (English first, original in parentheses).
- Nonsense distractors in `vii.*` and `iv.*` decks and exercises ("The augment," "A list of suffixes," "A hexameter," "Antithesis is a partitive, and metaphor is a gender," "No. A fable has no lines," "From a compound of 'red' and 'gal'"). Replace with plausible ones that state a real confusion.

## 6. Language facts
- `lang.iv.en/formation` (deck and c7): freedom/liberty and fatherly/paternal are not doublets (a doublet is two words from one source by different routes, e.g., royal/regal); call these Germanic–Latinate pairs, or use true doublets.
- `lang.iv.en/formation`, Latinate card: "readable" and (b5) "washable" have Germanic stems; use "portable," "visible," or explain hybrid forms.
- `lang.iv.en/formation-ex` b6: "choice" came through French; not the Germanic partner of "decision." Use another pair.
- `lang.iv.la/formation`: *scriptor* → *scrīptor*. Prefix card: "ab and au- give auferō" contradicts the card's note that *au-* is a separate prefix; fix the list.
- `latin-forms.js`: the generator produces *fidērum, fidēbus, speciērum, speciēbus*; mark *fidēs* singular-only and *speciēs* plural only in nominative/accusative. *insula* → *īnsula*.
- `lang.iv.de/formation-ex` a3: *Jahreszeit* has the linking *-es-*, not *-s-*.
- `lang.iii-indecl.de/parts-ex` dpos24, 28, 32: *ja* is keyed interjection with "adverb" as a wrong option; both are defensible. Use *ach* or *o weh*.
- `lang.ii.grc/meter-ex` n14: "fits Homer's meter… Not the Attic form" is a false inference. Rewrite.
- `lang.ii.fr/meter-ex` n9: *nuit* is not a case of synérèse; use *hier* or *lion*.
- `lang.vii.grc/figures`, ship card: the English runs past the Greek; extend the Greek through *γιγνώσκοντα περὶ ναυτικῶν*. Leaves card: "ὥρη:" → "ὥρη·".
- `lang.iii-decl.grc/compared-ex` n1, n2: explanations end in fragments and n2's correct option is cut off. Complete them.

## 7. Prompts and conventions
- `lang.iv.fr/formation-ex` a2: the prompt gives *forte*, the answer's base; give *fort*.
- `lang.vi.fr/errors-ex` a1, a2, b1, b2, c1, c2: the article gives the gender away; give the bare noun.
- `lang.vi.de/errors-ex` a4, a5: say "nominative" (otherwise *einen guten Mann* is also right).
- `lang.iv.de/formation`: the negative question points on *ent-* and *ge-* are unclear; rephrase as plain direct questions.
- `lang.vii.fr/figures`, lengths card: English first with the French in parentheses; *Un loup survint…* needs its English.
- Glosses: quoted in French and Greek decks, unquoted in Latin and German ("(to praise)"). Make all quoted: (“to praise”).

## 8. Thin pools (under ~15 where a real set is wanted): build to at least 20
Latin `meter-ex` (10), the three `vices-ex` (7), `v.en/congruity-ex` (7); also, as time allows: II meter-ex for grc/fr/de (14), III-decl small sets (grc 11, 12; fr 13, 10, 12; de 12, 12; la 16), III-indecl la (9), grc (10, 9), V small sets (en 7, 12; la 8, 12; grc 9, 10; fr 10, 9, 11; de 10, 9, 10), IX la (9, 12). Narrow topics may stay small if there truly isn't more to ask; say which.

## 9. Correct option longest in more than a third of a set
`ii.fr/meter-ex` A (3/7), `vi.fr/errors-ex` C (3/8), `iii-indecl.fr/parts-ex` C (4/6), `iii-indecl.de/parts-ex` C (3/6), `v.en/congruity-ex` B and C, the `lang.iv.en/formation` card questions (9/15), the generated Latin syllable sitting (~38%: shorten rule-question answers); older sets: `iii-decl.de|fr|grc/parts-ex` C (2/4), `iii-indecl.grc/parts-ex` C (2/3), `ix.la/period-ex` C (2/5), `ix.la/servius-ex` B (2/4), `v.de/cited-ex` C (2/3). Shorten the correct option or develop a distractor; keep at or under a third.
