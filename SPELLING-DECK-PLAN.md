# English Spelling: a proposed study deck (plan, not yet written)

Prepared 19 Oct 2026 for Timothy. Nothing in the repo has been edited.

## Sources read

| Text | Box path | Notes |
|---|---|---|
| Jespersen, *Essentials of English Grammar* (London; e-text from tamilnavarasam.com) | `/workspace/jespersen/essentials.pdf` → `essentials.txt`; same book as epub → `essentials-epub.txt` | Dropbox `/storage/Philosophia/Grammatica/English/Jespersen - Essentials of english grammar.PDF` and `/eBooks for Audio/Grammatica/Essentials_of_English_Grammar_Timothy__Kearns.epub`. This is a retyped e-text, not page images. Page numbers come from its running heads and may be off by one. Section numbers (e.g. § 6.7) are Jespersen's own and are reliable. |
| Jespersen, *A Modern English Grammar on Historical Principles*, 7 vols. (1949 reprint) | `/workspace/jespersen/meg.pdf` (3,697 pp.) → `meg1.txt` (Part I), `megall.txt` (all) | Dropbox `/storage/Philosophia/Grammatica/English/Modern English Grammar … Anna's Archive.pdf`. The OCR of Part I is poor. **Every MEG quotation below was checked against the page image** (`/workspace/jespersen/img/`). The page numbers are the book's printed pages. |
| Also in Dropbox, not used | — | *Growth and Structure of the English Language*; *The Philosophy of Grammar*; Fowler's *Modern English Usage* (New Fowler's). |

Not found anywhere in Dropbox or on the box: Cummings, *American English Spelling*; Venezky, *The American Way of Spelling*; Upward and Davidson, *The History of English Spelling*. Nothing is cited from them.

Abbreviations: **EEG** = *Essentials*; **MEG I** = *MEG* Part I, *Sounds and Spellings* (1909); **MEG VI** = *MEG* Part VI, *Morphology* (1942).

Jespersen's general frame, worth quoting on the opening card or in a src line (MEG I § 1.1, p. 3, verified):
> "In the Middle Ages the general tendency was towards representing the same sound in the same way, wherever it was found, while the same word was not always spelt in the same manner. Nowadays greater importance is attached to representing the same word always in the same manner, while the same sound may be differently written in different words."

EEG § 6.11 (p. 34, e-text): "However chaotic this may seem, it is possible to a great extent to explain the rise of all these discrepancies between sound and spelling, and thus to give, if not rational, at any rate historical reasons for them."

## How English Section II is built (read only)

- **Registry:** `data/languages/ii.en.js` sets `ARS.languages["lang.ii.en"]`, whose `items` array is in tile order. It holds `lang.ii.en/syllable` (study), `lang.ii.en/syllable-ex` (exercise), `lang.ii.en/meter`, and `lang.ii.en/meter-ex`. To put the spelling deck first, add as the first element:
  `{ "id": "lang.ii.en/spelling", "kind": "study", "built": true, "title": "English Spelling", "desc": "…" }`
  Leave out any `lang.ii.en/spelling-ex` item. course.js (about line 38) adds an Exercise button only when a built `…-ex` item exists.
  **Ownership:** `data/languages/*` belongs to Grok Build, so this one-line insertion has to go through Grok or wait until Grok is clear of the file.
- **Deck file:** `data/decks/lang.ii.en/spelling.js`. course.js (about line 300) loads `data/decks/${id}.js` on demand, so the file needs no script tag. Its format matches `lang.ii.en/syllable.js`:
  `ARS.decks["lang.ii.en/spelling"] = { id, title, sub, sources, panels: [ { id, title, body } ] }`
  The English language decks open each body with the bolded title (`<p><strong>The English syllable.</strong> …`). They have no `src` per panel, only a deck-level `sources`. The general decks have per-card `src`. Since this deck rests on Jespersen, I'd recommend per-card `src` lines if the renderer shows them for language decks; check before writing.
- **Already used in Section II, so avoid as fresh examples** (callbacks with "as we noted earlier" are fine):
  - `ii.letter` 'english-spelling' and 'etymological-spelling': "knight," "knee," "I"/"eye," "read"/"read," "name," "time," "right"/"write," "debt" (*debitum*), "doubt," "sign"/"signature," "nation"/"national."
  - `ii.letter` qp: "fan," "phone," "laugh."
  - `lang.ii.en/syllable`: "make" (silent e), "strength," "street," "spring," "splash," "twelfths," "happy"/"happiness," "record," "permit," "present," "object," "contrast," "photograph" family, "educate," "inform," "athlete," "electric," "curious," "govern," "care," "banana," "about."
  - `ii.quantity`: "delight," "bead"/"beat."
  - `lang.ii.en/meter`: "away," "tiger," "intervene," "murmuring."
- **Overlap:** `ii.letter` already teaches, for all languages, that English spelling records older pronunciation (the Great Vowel Shift) and that scholars added etymological letters ("debt," "doubt"). The spelling deck should build on that ("as we noted earlier") and not re-teach it. Its own ground is the patterns a speller can use.
- **Side note, not this task:** the last panel of `lang.ii.en/syllable` ends "The next study measures the Latin syllable," which breaks the "no previous/next" rule.

## A note on terms

In English spelling "long" and "short" vowel are names for vowel *qualities*: the "long a" of "fate" is a diphthong, and the "short a" of "fat" is a different vowel. Historically they were long and short vowels (Jespersen lists them as "long vowels (diphthongs)," MEG I § 4.91). The course keeps vowel length and syllable length distinct and has just taught Latin quantity. So the deck should say once, plainly, that in English spelling "long" means the vowel that says its letter's name, and that the name is historical (as we noted earlier, the long vowels shifted while the spelling stayed).

---

## The cards (10)

### 1. Silent e marks the vowel before it
- **Pattern.** A final silent *e* after a single consonant shows that the vowel before that consonant has its "long" sound (the letter's name). Without the *e*, the vowel is "short."
- **Examples.** "hop"/"hope," "rid"/"ride," "not"/"note," "cub"/"cube," "fat"/"fate," "pin"/"pine," "dun"/"dune."
- **Why.** In Middle English these *e*'s were pronounced. When the sound was lost, the letter stayed. Because a long vowel was so often followed by one, writers came to keep the *e*, or add it, as a sign of the long vowel. MEG I § 6.28 (6), p. 193, verified: "After other consonants, e was particularly often retained (or added) when the preceding vowel was long: take . bite . rode, etc." On the loss of the sounded *e*: MEG I § 6.27, pp. 192–193, and EEG § 4.61, p. 22.
- **Exceptions to name honestly.** "come" and "some" (Jespersen: "a few words that have never been long," § 6.28 (6), p. 194); "give," "have," "love" (card 2).
- **Why it helps a speller.** It is the key to a whole family of pairs, and to the suffix rules on cards 3–5.

### 2. The other work of silent e
- **Pattern.** A final *e* has jobs besides marking a long vowel:
  - it keeps a word from ending in *v* or *u*;
  - it shows that *c* is soft and *g* is soft;
  - it shows that a final *s* is not a plural ending.
- **Examples.**
  - *v*: "live," "have," "gave," "sleeve," "groove," "solve."
  - *u*: "glue," "value," "continue," "argue," "virtue."
  - soft *c*/*g*: "face," "voice," "since," "age," "huge," "bridge."
  - not a plural: "else," "dense," "tease" (beside "teas"), "praise" (beside "prays"), "curse" (beside "curs").
- **Why.** In older printing *u* stood for both the vowel and the consonant *v*. The *e* showed that the *u* was the consonant. The habit was kept after *v* got its own letter, and so English words do not end in *v*. MEG I § 6.28 (1), p. 193, verified: "This explains how it is that no word in the E language now ends in -v." On final *u*: MEG I § 4.92, p. 147, verified: "The letter u was never used in the end of words: glue . continue . value, etc." Soft *g* and *c*, and the non-plural *s*: MEG I § 6.28 (2)–(4), p. 193 (Jespersen's examples include "curse" (cf. "curs"), "dose" (cf. "does"), "tease" (cf. "teas"), and "praise" (cf. "prays")). On the old *u*/*v*: EEG § 6.8, p. 36, paraphrase (the old prints have "ioy," "vs," "fiue" for "joy," "us," "five").
- **Why it helps a speller.** It explains "have" and "give," which look like exceptions to card 1 but are not. It also explains why "dense" and "tease" have an *e* that "dens" and "teas" lack.

### 3. A double consonant marks a short vowel
- **Pattern.** Before an ending that begins with a vowel, a single final consonant after a short vowel is doubled. It is not doubled after a long vowel, which is marked by the silent *e* that the ending replaces. *k*, *ch*, and the *j* sound are not doubled as letters; they become *ck*, *tch*, and *dge*.
- **Examples.**
  - "hopping"/"hoping," "planned"/"planed," "dinner"/"diner," "taller"/"later," "bitten"/"biting."
  - *ck*/*tch*/*dge*: "deck," "stick," "pitch," "hutch," "badge," "lodge," against "peek," "speech," "page."
  - *c* becomes *ck* to stay hard: "picnicking," "panicky," "trafficking."
- **Why.** EEG § 6.7, p. 36 (e-text, verbatim): "Doubling of consonants has come to be extensively used to denote shortness of the preceding vowel, especially before a weak syllable, e.g. in hotter, hottest from hot, sobbing from sob. Instead of doubling k, ch and g [dʒ] the combinations ck, tch and dg(e) are written." MEG I § 4.91, p. 146 (verified): doubling of consonant letters "came to be regarded merely as a sign that the preceding vowel was short." MEG I § 4.93, p. 148 (verified): "tch is a sort of doubling of ch (and dge of g(e) = /dʒ/)." On "picnicking" and "panicky": MEG I § 4.95, p. 149.
- **Why it helps a speller.** One idea, the doubled letter as a mark of the short vowel, explains "hopping" and "hoping," and also why "match" and "badge" have extra letters while "much" and "rich" do not. The *-tch* and *-dge* spellings appear after short vowels. The exceptions are a few common words: "much," "rich," "such," "which."

### 4. Stress decides the doubling
- **Pattern.** A word of more than one syllable doubles its final consonant before a vowel suffix only if its last syllable is stressed.
- **Examples.**
  - Doubles: "forGET" → "forgetting," "forgettable"; "reGRET" → "regrettable"; "comMIT" → "committed"; "conTROL" → "controlled"; "ocCUR" → "occurring."
  - Does not double: "BALlot" → "balloted"; "GOSsip" → "gossiping"; "CRICKet" → "cricketing"; "LIMit" → "limited"; "BENefit" → "benefited."
  - The stress can move inside one family: "preFER," "preFERRED," but "PREFerence"; "reFER," "reFERRing," but "REFerence."
- **Why.** MEG I § 4.94, p. 148, verified: "In a medial position most consonants are doubled between an originally short stressed vowel and an unstressed one." MEG I § 4.95, p. 149, verified: "After weak vowels consonant-doubling is rare," with "balloted, balloting, cricketing, … gossiped, gossiping." MEG VI § 22.62, p. 400, verified: "A final consonant after a single vowel in stressed syllable is doubled before -able: forgettable, lettable, regrettable, clubbable." Jespersen also records the stress-shift case: "obs. reférrable and reférrible (now réferable)."
- **The American point.** Jespersen notes that British spelling doubles *l* even after a weak vowel: "travelled, travelling, traveller, levelled" (§ 4.95, p. 149), and also "worshipped," "kidnapped." American spelling follows the stress rule here, as in "traveled," "leveled," "canceled," and he notes that Americans write "kidnaper" (§ 4.95). The American forms are not on his page, so give them as American usage, not as Jespersen's examples.
- **Why it helps a speller.** It is Timothy's model exactly: stress, which the student has just learned to hear, decides a spelling. "beGINning" doubles and "OPening" does not. It also settles the commonest misspellings: "occurred," "committed," "preferred," "benefited."

### 5. Suffixes: when e and y change
- **Pattern.**
  - Silent *e* drops before a suffix beginning with a vowel ("hope," "hoping"). It stays before a consonant ("hopeful"). It also stays where it keeps *c* or *g* soft ("changeable," "peaceable," "manageable").
  - Final *y* after a consonant becomes *i* inside the word ("cry," "cries," "cried"; "pity," "pitiable"). It stays after a vowel ("plays," "boys"), before *-ing* ("crying," "dying"), and before endings felt as separate words ("ladyship," "twentyfold").
- **Examples.**
  - *e*: "hoping," "hopeful"; "changeable," "peaceable"; "serviceable," against "lovable" and "movable."
  - *y*: "body," "bodily," "bodiless"; "rely," "reliable"; "vary," "variable"; "die," "dies," "dying."
- **Why.**
  - *y* and *i* are one letter in two positions. EEG § 6.62, p. 36 (e-text, verbatim): *y* "has become a mere variant of i used preferably at the end of words, while i is used in the beginning and interior of words; hence such alternations as cry, cries, cried; happy, happier, happiest, happiness; body, bodiless, bodily." (Do not use "happy" on the card; it is already in `lang.ii.en/syllable`.)
  - On "dying": "die (with dies, but dying, because ii is avoided)" (EEG § 6.62).
  - On *y* after a vowel: "After another vowel y is generally kept, e.g. plays, played, boys; cf., however, laid, paid, said (but lays, pays, says: too much consistency must not be expected)."
  - On *-able*: MEG VI § 22.62, p. 400, verified: "Final y after a consonant is changed into i before -able: pitiable, reliable, variable, etc."
  - Keeping *e* for soft *c*/*g*: MEG I § 6.29, p. 194, verified: "But always changeable, on account of the g." Jespersen also quotes Fowler's rule (MEG VI § 22.62, p. 399, verified): "if the suffix begins with a vowel the mute e is dropped. … The chief exception … is that e remains even before a vowel when the soft sound of c or g is to be made possible …" He adds that writers do not always keep the rule ("likeable," "unsaleable").
- **Why it helps a speller.** These are the two suffix rules most often needed. Both follow from cards 2 and 6: the *e* stays exactly where it is still doing a job.

### 6. Hard and soft c and g
- **Pattern.** Before *e*, *i*, *y*, the letter *c* says /s/ and *g* often says /j/. Elsewhere they are hard. So English writes *k* for the hard sound before *e* and *i*, and *gu* for hard *g* before *e* or *i* in some words. Final /s/ is written *-ce* when *-s* would look like a plural.
- **Examples.**
  - soft: "cease," "city," "cycle," "gentle," "giant"; hard: "can," "cord," "cup," "gallop."
  - *k* before *e*/*i*: "keen," "kettle," "kiss," "king."
  - *gu*: "guide," "guess," "guest," "guilt"; but "get," "give," "begin."
  - *-ce*: "mice," "pence," "once," "twice," "hence," against "pens," "hens."
- **Why.** In French, Latin *c* became /ts/ and then /s/ before front vowels, and *g* became /dʒ/. The Norman scribes brought those values into English. MEG I § 2.326, p. 26, verified: "In consequence of this, it became impossible to write c for /k/ before front vowels, where the letter k became more and more frequent." On *gu*: EEG § 6.31, p. 35 (e-text) gives the examples guide, guise, guess, guest, guild, guilt, and tongue, and the native exceptions get, give, begin, gild. On *-ce*: MEG I § 2.722, p. 50, verified: "The spelling -ce was even applied to native words in order to denote the voiceless sound unambiguously after final -s had become voiced," and the words "are thus kept distinct in spelling from others with -s = /z/: pens . hens etc."
- **Why it helps a speller.** It explains *k* against *c* ("kit" but "cat"), "guess" and "guest," "mice" against "mints," and the *e* of "changeable" (card 5). It also explains why "picnic" becomes "picnicking" (card 3).

### 7. Short words and doubled final letters
- **Pattern.**
  - After a short vowel at the end of a one-syllable word, *f*, *l*, and *s* are usually doubled and *k* becomes *ck*. Other final consonants are not doubled.
  - Ordinary words were not written with fewer than three letters, so a short word got a third letter.
  - Doubling or an *e* sometimes tells two words apart.
- **Examples.**
  - "staff," "cliff," "bell," "doll," "mess," "kiss," "neck"; against "web," "cap," "pet."
  - Three letters: "ebb," "add," "egg," "inn," "err"; "doe," "foe," "toe," "cue," "due," "sue."
  - Pairs: "inn"/"in," "butt"/"but," "too"/"to," "bee"/"be."
  - Two-letter words are function words: "an," "at," "it," "is," "of," "do," "go," "so," "by."
- **Why.** MEG I § 4.93, p. 147, verified: "When final, the following consonants are the only ones that were frequently doubled: f … k, written ck … l … s." MEG I § 4.96, p. 149, verified: "Another orthographic rule was the tendency to avoid too short words. Words of one or two letters were not allowed, except a few constantly recurring (chiefly grammatical) words." Jespersen says "ebb, add, egg, Ann, inn, err" are "the only instances of final bb, dd, gg, nn and rr in the language," apart from "burr, purr, and whirr." MEG I § 4.97, p. 149, verified: "In some cases double-writing is used to differentiate words: too to (originally the same word) . bee be . butt but . nett net . buss 'kiss' bus 'omnibus' . inn in."
- **Why it helps a speller.** It makes sense of "egg," "add," and "inn," the classic oddities, and it gives a short-word rule ("staff," "bell," "kiss") that holds widely.

### 8. Why "love," "come," and "son" have an o
- **Pattern.** In many common words the vowel of "up" is written *o* rather than *u*, nearly always next to *m*, *n*, *v*, or *w*.
- **Examples.** "come," "some," "son," "won," "month," "monk," "money," "honey," "wonder," "love," "glove," "dove," "above," "cover," "oven."
- **Why.** Medieval scribes wrote in an angular hand in which *u*, *n*, *m*, *v*, and *w* were made of the same short strokes. A *u* beside them was ambiguous, so they wrote *o* instead. EEG § 6.52, p. 36 (e-text, verbatim): "But at a time when angular writing was fashionable, it became usual to avoid the letter u in close proximity with the letters n, m, and another u (v, w), where it was liable to cause ambiguity (five strokes might be interpreted imi, inu, mu, um, uni, uui, especially at a time when no dot was written over i); hence the use of o which has been retained in a great many words: monk, money, honey, come, won, wonder, cover (written couer before v and u were distinguished, 6.8), love, etc." He adds: "A merely orthographic distinction is made between son and sun, some and sum."
- **Why it helps a speller.** It is a true "oh, that's why" fact that covers dozens of everyday words. It also tells the student where to expect *o* for this sound: beside *m*, *n*, *v*.
- *Note:* "love" appears in Section II only as a gloss of Latin (*amor*, "love"; *amant*, "they love") and in prose, never as an English spelling example, so it is free to use here.

### 9. Letters for sounds that were lost
- **Pattern.** Several groups of silent letters are not random. Each is a whole class of words that lost one sound in one position, while the spelling kept the letter.
- **Examples.**
  - *gh* (once a sound like German *ch*): "bright," "fight," "thought," "daughter," "high," "weigh," "though." It became /f/ in "rough," "enough," "cough."
  - *k*, *g*, *w* before *n* or *r* at the start of a word: "knit," "know," "gnaw," "gnat," "write," "wrist," "wrong."
  - *b* after *m* at the end of a word: "lamb," "comb," "climb."
  - *l* between *a* or *o* and a consonant: "talk," "walk," "half," "calm," "folk," "yolk," "would," "should."
  - *n* after *m* at the end: "autumn," "solemn," "column" (see card 10 for how the *n* comes back).
- **Why.**
  - *gh*: EEG § 5.2, p. 27 (e-text): "the consonant corresponding to German ch and spelt gh has disappeared, generally before t: light, right, brought, bought, slaughter, caught, but also finally in cases like high, weigh, plough, through"; in "laugh," "rough," "enough," "cough" it "was changed into [f]."
  - Initial groups simplified: EEG § 5.12, p. 26 (know, gnaw, write).
  - *mb*: EEG § 5.31, p. 27, paraphrase. Final *mb* became *m* ("lamb," "comb"), and then "a mute b was introduced into the spelling of some words that originally had only m: thumb, limb."
  - *l*: EEG § 5.32, p. 27 (talk, half, psalm, folk, would, should).
  - False *gh* after the sound was lost: MEG I § 10.13, p. 285, verified: "The loss of gh naturally induced people to write a gh where none should be." His examples include "delight" (ME *delit*) and "sprightly." "delight" is used in `ii.quantity`; use "sprightly" or no example.
  - Homophones from the loss: MEG I § 10.14, p. 285 ("might = mite," "sight = site," "wright = write").
- **Why it helps a speller.** Knowing that the silent letters come in families (*-ight*, *kn-*, *wr-*, *-mb*, *-alk*) turns hundreds of "weird" words into a few patterns. The knowledge that *gh* was once sounded also explains "daughter" and "thought." Keep "knight" and "knee" out; they are in `ii.letter`.

### 10. One word, one spelling
- **Pattern.** English keeps a word's spelling the same across its family even when the pronunciation changes. A silent letter or an unclear vowel can often be recovered from a related word.
- **Examples.**
  - A silent letter that is sounded in the related word: "autumn"/"autumnal," "solemn"/"solemnity," "damn"/"damnation," "benign"/"benignity," "malign"/"malignant."
  - A vowel that changes sound: "wise"/"wisdom," "vain"/"vanity," "please"/"pleasant," "type"/"typical," "mean"/"meant," "keep"/"kept."
  - Callback, "as we noted earlier": "sign"/"signature," "nation"/"national."
- **Why.** Sound changes worked only in certain positions, so related words drifted apart in sound. The spelling records the word, not each sound. EEG § 3.2, pp. 11–12 (e-text): sound changes "may give rise to phonetic alternations, through which closely connected words, which formerly had the same, or practically the same sound, become more or less differentiated in sound." His examples include "knowledge" and "acknowledge," "damn" and "damnation," "solemn" and "solemnity," "autumn" and "autumnal." The vowel-shift pairs are from EEG § 3.8, p. 16. *gn*: MEG I § 2.315, p. 24 (OCR only, paraphrase): *g* is silent before *n* in French-derived "benign" but sounded in Latin loans such as "benignity" and "signal." The principle is MEG I § 1.1, p. 3 (quoted at the top of this plan; ideal for the card's tradition paragraph).
- **Why it helps a speller.** It is the strongest single tool a good speller has. "Is it 'autum' or 'autumn'?" Think of "autumnal."
  - **Not from Jespersen:** the schwa-recovery examples ("compete"/"competition," "grammar"/"grammatical," "define"/"definition") are the standard teaching use of the principle. I have not read a source for them; flag them as the course's own if used.

---

## Considered and left out, or optional

- **Greek spellings (*ch* = /k/, *y*, *ps-*, *pn-*, *ph*).** Jespersen covers these:
  - EEG § 6.2, p. 35: "In words from the classical languages ch denotes the sound [k]: echo, chaos, scheme." He also explains the three values of *ch*: "chief" and "child" (old French and native), "machine" and "chaise" (late French), "echo" (Greek).
  - *y* in Greek words: EEG § 6.62 ("system, nymph").
  - Silent initial *p* in *ps*, *pt*, *pn*: EEG § 5.15, p. 27 (psalm, psychology, Ptolemy, pneumonia, mnemonics).
  - *ph* in "nephew," put in by scholars to show the Latin: MEG I § 2.337.

  This would make a good **card 11** or could replace card 7. It explains a class ("chorus," "chemist," "character," "school"), but it helps a speller less than cards 1–6. Avoid "phone," "philosophy," and "rhythm," which are already used in Section II.
- **-able and -ible.** MEG VI § 22.61, p. 398, verified: in French and English "-able came to be the only productive form," and from the 14th century "-able was treated as a living suffix … and was used to form adjs from E stems" (p. 399: "knowable," "breakable," "readable," "workable," "teachable"). The usable consequence is that new English formations and words built on a whole English word take *-able*, while *-ible* is found in words borrowed with a Latin *i* stem ("visible," "possible," "sensible," "terrible"). This is real and helpful, but it leaks ("probable," "capable," "collapsible"). Jespersen gives the history, not a speller's rule; the "whole English word → *-able*" test is a common heuristic I have not seen in a source I read. It would make a short optional card, or a paragraph on card 5.
- **i before e.** Not covered by Jespersen except historically. EEG § 3.53, p. 15: *ie* became the spelling for the close *e* that was raised to /iː/ ("field," "thief," "believe"), while *ea* marked the open vowel. The conditioned rule ("except after c, when the sound is 'ee'") is not in Jespersen. It is also weak as a class rule ("seize," "weird," "species"). Omit unless a source such as Cummings is obtained.
- **-ant/-ent, -ance/-ence.** Not in Jespersen as a spelling rule. It follows the Latin conjugation (*-ant* from *-āre* verbs), which suits this course, but I have read no source for it here. Omit or source it later.
- **Etymological silent letters as a class** ("debt," "doubt," "receipt," "island," "victuals," "scissors"). Already taught in `ii.letter` 'etymological-spelling' ("debt," "doubt"). If it is wanted here, take fresh examples from Jespersen: "victuals" (formerly "vittles," EEG § 6.9, p. 37); "island" (*s* from confusion with "isle," MEG I § 2.713, p. 48, OCR only); "scent" (*c* added to keep it apart from "cent" and "sent," MEG I § 2.722, p. 49, verified); "scissors"; "receipt" (not in Jespersen). I'd keep it to a sentence on card 9 or 10, with "as we noted earlier."

## Suggested order and length

Recommended order: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. The long-vowel *e*, its other jobs, doubling, stress, and suffixes form one chain. Then come the letters (*c*/*g*, short words, *o* for *u*, lost sounds). The closing card on the principle ties the deck together and points back to `ii.letter`.

Each card: realities first (the word lists), then the pattern, then Jespersen's explanation, in about two short paragraphs. American spelling throughout ("traveled," "center"). Quote Jespersen's British forms only as quotations ("travelled," "centre").

---

## Decision (Timothy, Oct 19, 2026)

Approved: cards 1–10 as planned, plus **card 11: Greek spellings** (ch = k in echo, chaos, scheme; y in system, nymph; ph = f; rh; silent p in psalm, pneumonia, psychology), placed last. Jespersen sources: EEG §§ 6.2, 6.62, 5.15. No exercise for this deck.
