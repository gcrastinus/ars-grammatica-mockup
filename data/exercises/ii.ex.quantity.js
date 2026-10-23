/* Quantity, Stress, and Accent [ii.ex.quantity]  WRITTEN (18 Oct 2026); hand-edited; do not regenerate with gen.py.
   Opened from: ii.quantity (Exercise button). Pool 60, three fixed sets of 20 (per set: 9 on Latin quantity, 5 on the
   Latin accent, 6 on English stress), given A, B, C, A, … and never reordered; options shuffled on display.
   19 Oct 2026: 12 items added (A17–A20, B17–B20, C17–C20) on the Allen and Greenough points (mute and liquid excepted
   from position, hidden quantity and the vowel before ns, nf, gn, nd, nt, final syllables before the next word,
   consonant i, a vowel formed by contraction); qua-C04 tenebrae (the common card's own example) → latebrae.
   Items in each set run from easier to harder. Types: mc (answer 0-based) and identify (tokens are syllables; answer is
   the index of the syllable asked for). Every Latin long vowel is marked with a macron (ITEM-LIST, II.4).
   Some items carry a "why" prompt with a model answer (EXERCISES-PLAN.md, build list 7). Old-app material drawn on:
   ACCENT_WORDS (divisions, quantities, accents), SYE_WORDS and SYE_PAIRS (English stress), ENSYL_ITEMS.
   LEVELS (Oct 2026, LEVELS-PLAN.md, after the iii.ex.parts pilot): every item has "level". Level I: why a syllable is long or short, and where the stress falls (choose). Level II: click the syllable asked for in one word. Level III: click every long syllable in a line of the Aeneid without elision.
   Level I (38), Level II (22), Level III (11). New items quote real texts; each item's "source" names the passage and the Project Gutenberg text it was checked against.
   "levels": pass at Level II, mastery at Level III (guided.js). */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['ii.ex.quantity'] = {
 "id": "ii.ex.quantity",
 "kind": "exercise",
 "status": "written",
 "section": "II",
 "title": "Quantity, Stress, and Accent",
 "openedFrom": "ii.quantity (Exercise button)",
 "covers": [
  {
   "deck": "ii.quantity",
   "cards": [
    "by-nature",
    "by-position",
    "hidden",
    "short-and-vowel-vowel",
    "common",
    "across-words",
    "consonant-i",
    "penultimate-law",
    "enclitics",
    "english-stress",
    "stress-pairs",
    "suffixes"
   ]
  }
 ],
 "skill": "Say whether a Latin syllable is long or short and why; place the Latin accent by the penultimate rule; mark the primary stress of an English word.",
 "types": [
  "mc",
  "identify"
 ],
 "pool": 71,
 "rotation": "Within each level, A, B, C, A, … (never shuffled). Level I: sets A, B, C. Level II: sets A, B, C. Level III: sets A, B.",
 "sets": {
  "A": 26,
  "B": 25,
  "C": 20
 },
 "levels": {
  "pass": 2,
  "top": 3,
  "names": {
   "1": "Say why a syllable is long or short, and where the stress falls: choose the answer.",
   "2": "Click the long, short, or stressed syllable of a word.",
   "3": "Click every long syllable in a line of Vergil."
  },
  "counts": {
   "1": 38,
   "2": 22,
   "3": 11
  }
 },
 "groupsPerSet": [
  {
   "group": "Latin quantity by nature and by position",
   "n": 9,
   "deck": "ii.quantity",
   "lang": "la",
   "cards": [
    "by-nature",
    "by-position",
    "hidden",
    "short-and-vowel-vowel",
    "common",
    "across-words",
    "consonant-i"
   ]
  },
  {
   "group": "Latin accent (penultimate rule)",
   "n": 5,
   "deck": "ii.quantity",
   "lang": "la",
   "cards": [
    "penultimate-law",
    "enclitics",
    "what-accent"
   ]
  },
  {
   "group": "English primary stress and the suffixes that move it",
   "n": 6,
   "deck": "ii.quantity",
   "lang": "en",
   "cards": [
    "english-stress",
    "stress-pairs",
    "suffixes",
    "schwa-rhythm"
   ]
  }
 ],
 "split": "In each set of 20: 9 items on Latin quantity, 5 on the Latin accent, and 6 on English stress.",
 "limit": "Long vowels are marked with macrons in every Latin item (ITEM-LIST, II.4).",
 "instr": "Answer each question, or choose the syllable asked for. Long Latin vowels are marked with macrons.",
 "items": [
  {
   "id": "qua-A01",
   "set": "A",
   "deck": "ii.quantity",
   "card": "by-nature",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "The first syllable of <i>fāma</i> (“report”) is long. Why?",
   "options": [
    "It is long by position, because two consonants follow its vowel",
    "Its vowel is long, so it is long by nature",
    "It is the first syllable, and first syllables are long",
    "It is open, and open syllables are long"
   ],
   "answer": 1,
   "explain": "The vowel <i>ā</i> is long, and a syllable whose vowel is long is long by nature. Only one consonant, <i>m</i>, follows it, so it is not long by position; and an open syllable with a short vowel is short.",
   "word": "fāma",
   "level": 1
  },
  {
   "id": "qua-A13",
   "set": "A",
   "deck": "ii.quantity",
   "card": "english-stress",
   "group": "English primary stress and the suffixes that move it",
   "type": "mc",
   "lang": "en",
   "prompt": "How is the place of the stress in an English word known?",
   "options": [
    "From the quantity of the penult, as in Latin",
    "It is learned with each word",
    "It always falls on the first syllable",
    "It is shown by the ordinary spelling"
   ],
   "answer": 1,
   "explain": "The place of the English stress belongs to each word and must be learned with it; no rule of quantity decides it. Certain endings help, as “-tion” and “-ic” do, but they do not settle every word.",
   "level": 1
  },
  {
   "id": "qua-A06",
   "set": "A",
   "deck": "ii.quantity",
   "card": "what-accent",
   "group": "Latin accent (penultimate rule)",
   "type": "mc",
   "lang": "la",
   "prompt": "In Donatus’s account of the three accents, what does the acute accent do?",
   "options": [
    "It lowers the voice",
    "It raises the voice",
    "It raises and lowers the voice on one syllable",
    "It makes the vowel long"
   ],
   "answer": 1,
   "explain": "Donatus names three accents: the acute, in which the voice is raised; the grave, in which it is lowered; and the circumflex, in which it is raised and lowered on the same syllable. None of them makes a vowel long; length and accent are different accidents of the syllable.",
   "level": 1
  },
  {
   "id": "qua-A02",
   "set": "A",
   "deck": "ii.quantity",
   "card": "by-position",
   "group": "Latin quantity by nature and by position",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>columna</i> (“column”) is long by position?",
   "tokens": [
    "co",
    "lum",
    "na"
   ],
   "answer": 1,
   "explain": "The <i>u</i> of <i>columna</i> is short, but it is followed by two consonants, <i>m</i> and <i>n</i>, so the syllable <i>lum</i> is closed and long by position. The syllables <i>co</i> and <i>na</i> are open and have short vowels.",
   "word": "columna",
   "why": {
    "prompt": "Why is <i>lum</i> long, although its vowel is short?",
    "model": "Two consonants follow its vowel, so the syllable is closed by the first of them and takes longer to pronounce; it is long by position."
   },
   "level": 2
  },
  {
   "id": "qua-A11",
   "set": "A",
   "deck": "ii.quantity",
   "card": "suffixes",
   "group": "English primary stress and the suffixes that move it",
   "type": "mc",
   "lang": "en",
   "prompt": "“History” is stressed on its first syllable. Where is “historic” stressed?",
   "options": [
    "On “his,” as in “history”",
    "On “tor,” the syllable before “-ic”",
    "On “ic,” the ending",
    "On “tor,” because it is a long syllable"
   ],
   "answer": 1,
   "explain": "The ending “-ic” puts the stress on the syllable just before it, so “HIS-to-ry” becomes “his-TOR-ic.” English stress is not decided by long syllables, as the Latin accent is.",
   "word": "historic",
   "why": {
    "prompt": "Why does the stress move when “-ic” is added to “history”?",
    "model": "The ending “-ic” fixes the stress on the syllable just before it, wherever the stress stood in the shorter word."
   },
   "level": 1
  },
  {
   "id": "qua-A15",
   "set": "A",
   "deck": "ii.quantity",
   "card": "suffixes",
   "group": "English primary stress and the suffixes that move it",
   "type": "mc",
   "lang": "en",
   "prompt": "“Punish” is stressed on its first syllable. Where is “punishment” stressed?",
   "options": [
    "On “ish,” the syllable before the ending",
    "On “ment”",
    "On “pun,” as in “punish”",
    "Equally on all three syllables"
   ],
   "answer": 2,
   "explain": "The ending “-ment” leaves the stress where it was in the shorter word, so “PUN-ish” gives “PUN-ish-ment.”",
   "word": "punishment",
   "level": 1
  },
  {
   "id": "qua-A03",
   "set": "A",
   "deck": "ii.quantity",
   "card": "short-and-vowel-vowel",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "Is the first syllable of <i>via</i> (“road”) long or short?",
   "options": [
    "Long, because it is the first syllable of the word",
    "Long by position",
    "Short, because a vowel follows it",
    "Long by nature, because <i>ia</i> is a diphthong"
   ],
   "answer": 2,
   "explain": "The <i>i</i> of <i>via</i> stands directly before the vowel <i>a</i>, and a vowel before another vowel is usually short. The <i>i</i> and <i>a</i> are not a diphthong; they are two syllables, <i>vi-a</i>.",
   "word": "via",
   "level": 1
  },
  {
   "id": "qua-A12",
   "set": "A",
   "deck": "ii.quantity",
   "card": "schwa-rhythm",
   "group": "English primary stress and the suffixes that move it",
   "type": "identify",
   "lang": "en",
   "prompt": "In “canal,” which syllable has the weak, neutral vowel called schwa?",
   "tokens": [
    "ca",
    "nal"
   ],
   "answer": 0,
   "explain": "The stress of “canal” falls on “nal,” and the unstressed first syllable is weakened to schwa, like the first syllable of “about.”",
   "word": "canal",
   "level": 2
  },
  {
   "id": "qua-A14",
   "set": "A",
   "deck": "ii.quantity",
   "card": "stress-pairs",
   "group": "English primary stress and the suffixes that move it",
   "type": "identify",
   "lang": "en",
   "prompt": "Which syllable of the marked word is stressed? “The committee will <b>conduct</b> the survey in May.”",
   "tokens": [
    "con",
    "duct"
   ],
   "answer": 1,
   "explain": "Here “conduct” is a verb, and in many English pairs of two syllables the verb is stressed on the second syllable and the noun on the first: “to con-DUCT,” but “good CON-duct.”",
   "word": "conduct",
   "level": 2
  },
  {
   "id": "qua-A07",
   "set": "A",
   "deck": "ii.quantity",
   "card": "penultimate-law",
   "group": "Latin accent (penultimate rule)",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>fortūna</i> (“fortune”) bears the accent?",
   "tokens": [
    "for",
    "tū",
    "na"
   ],
   "answer": 1,
   "explain": "The word has three syllables, so the law of the penult applies. The penult <i>tū</i> is long by nature, because its vowel is long, so it takes the accent: <i>for-TŪ-na</i>.",
   "word": "fortūna",
   "why": {
    "prompt": "Why does the accent of <i>fortūna</i> fall on <i>tū</i> and not on <i>for</i>?",
    "model": "In a word of three syllables the penult is accented if it is long, and <i>tū</i> is long by nature."
   },
   "level": 2
  },
  {
   "id": "qua-A05",
   "set": "A",
   "deck": "ii.quantity",
   "card": "by-nature",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "The first syllable of <i>caelum</i> (“sky”) is long. Why?",
   "options": [
    "Because it carries the accent",
    "Because <i>ae</i> is a diphthong",
    "Because <i>l</i> is a liquid",
    "Because it is long by position"
   ],
   "answer": 1,
   "explain": "A syllable that contains a diphthong is long by nature, and <i>ae</i> is a diphthong. Only one consonant follows it, so it is not long by position. The accent does not make a syllable long; it is the other way round in Latin, where length decides the accent.",
   "word": "caelum",
   "level": 1
  },
  {
   "id": "qua-A10",
   "set": "A",
   "deck": "ii.quantity",
   "card": "penultimate-law",
   "group": "Latin accent (penultimate rule)",
   "type": "mc",
   "lang": "la",
   "prompt": "Where is <i>hominēs</i> (“human beings”) accented, and why?",
   "options": [
    "On <i>ho</i>, because the penult is short",
    "On <i>mi</i>, the penult",
    "On <i>nēs</i>, because its vowel is long",
    "On <i>mi</i>, because every word of three syllables is accented on the penult"
   ],
   "answer": 0,
   "explain": "The penult <i>mi</i> is open and its vowel is short, so the accent goes back to the antepenult: <i>HO-mi-nēs</i>. The long last syllable does not matter, because the Latin accent never falls on the last syllable of a word of more than one syllable.",
   "word": "hominēs",
   "why": {
    "prompt": "Why does the long final syllable <i>nēs</i> not take the accent?",
    "model": "The law of the penult considers only the penult and the antepenult; in a word of more than one syllable the last syllable is never accented."
   },
   "level": 1
  },
  {
   "id": "qua-A08",
   "set": "A",
   "deck": "ii.quantity",
   "card": "enclitics",
   "group": "Latin accent (penultimate rule)",
   "type": "mc",
   "lang": "la",
   "prompt": "Where is <i>armaque</i> (“and arms”) accented?",
   "options": [
    "On <i>ar</i>, as in <i>arma</i>",
    "On <i>que</i>",
    "On <i>ma</i>",
    "It has no accent"
   ],
   "answer": 2,
   "explain": "The enclitic <i>-que</i> moves the accent onto the syllable just before it, whatever its quantity. So <i>AR-ma</i> becomes <i>ar-MA-que</i>.",
   "word": "armaque",
   "level": 1
  },
  {
   "id": "qua-A09",
   "set": "A",
   "deck": "ii.quantity",
   "card": "what-accent",
   "group": "Latin accent (penultimate rule)",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>cōnsilium</i> (“plan”) bears the accent?",
   "tokens": [
    "cōn",
    "si",
    "li",
    "um"
   ],
   "answer": 1,
   "explain": "The penult <i>li</i> is short, because its vowel stands before another vowel. When the penult is short, the accent falls on the antepenult: <i>cōn-SI-li-um</i>.",
   "word": "cōnsilium",
   "level": 2
  },
  {
   "id": "qua-A04",
   "set": "A",
   "deck": "ii.quantity",
   "card": "common",
   "group": "Latin quantity by nature and by position",
   "type": "identify",
   "lang": "la",
   "prompt": "In verse, which syllable of <i>cerebrum</i> (“brain”) is common, that is, may be measured long or short?",
   "tokens": [
    "ce",
    "re",
    "brum"
   ],
   "answer": 1,
   "explain": "The syllable <i>re</i> is followed by a mute, <i>b</i>, and a liquid, <i>r</i>. In ordinary speech the two go with the next vowel (<i>ce-re-brum</i>), so <i>re</i> is open and short; but a poet may divide them (<i>ce-reb-rum</i>), and then the syllable is closed and long. So it is common.",
   "word": "cerebrum",
   "level": 2
  },
  {
   "id": "qua-A16",
   "set": "A",
   "deck": "ii.quantity",
   "card": "schwa-rhythm",
   "group": "English primary stress and the suffixes that move it",
   "type": "identify",
   "lang": "en",
   "prompt": "Which syllable of “geography” has the primary stress?",
   "tokens": [
    "ge",
    "og",
    "ra",
    "phy"
   ],
   "answer": 1,
   "explain": "“Geography” is stressed on “og”: ge-OG-ra-phy. The unstressed syllables around it are weakened, so the <i>o</i> of “og” is a full vowel only because it bears the stress.",
   "word": "geography",
   "level": 2
  },
  {
   "id": "qua-A17",
   "set": "A",
   "deck": "ii.quantity",
   "card": "by-position",
   "group": "Latin quantity by nature and by position",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>duplex</i> (“double”) is long by position?",
   "tokens": [
    "du",
    "plex"
   ],
   "answer": 1,
   "explain": "The last syllable, <i>plex</i>, is long by position, because the double letter <i>x</i> counts as two consonants. The first syllable, <i>du</i>, has a short <i>u</i> followed by <i>p</i> and <i>l</i>, but a mute followed by <i>l</i> or <i>r</i> goes with the following vowel, so <i>du</i> is open and is not long by position.",
   "word": "duplex",
   "why": {
    "prompt": "Why is <i>du</i> not long by position, although two consonants follow its vowel?",
    "model": "The two consonants are a mute and a liquid, <i>p</i> and <i>l</i>, which go together with the following vowel; so the syllable stays open, and the rule of position excepts them."
   },
   "level": 2
  },
  {
   "id": "qua-A18",
   "set": "A",
   "deck": "ii.quantity",
   "card": "hidden",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "A poet measures a syllable as long, and two consonants follow its vowel. What does this show about the length of its vowel?",
   "options": [
    "That the vowel is long, since the syllable is long",
    "That the vowel is short, since only a short vowel is long by position",
    "Nothing; the length of the vowel is hidden",
    "That the syllable is common"
   ],
   "answer": 2,
   "explain": "A syllable followed by two consonants is long by position whether its vowel is long or short, so its measure shows nothing about the vowel. The length of such a vowel is called hidden quantity, and it must be known from other evidence.",
   "level": 1
  },
  {
   "id": "qua-A19",
   "set": "A",
   "deck": "ii.quantity",
   "card": "hidden",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "Both vowels of <i>īnfāns</i> (“infant”) are marked long. Which rule accounts for this?",
   "options": [
    "A vowel before <i>ns</i> or <i>nf</i> is long",
    "A vowel in a syllable long by position is always long",
    "A vowel before <i>n</i> and any other consonant is long",
    "The first and last syllables of a word are long by nature"
   ],
   "answer": 0,
   "explain": "A vowel before <i>ns</i> or <i>nf</i> is long: the <i>ī</i> stands before <i>nf</i> and the <i>ā</i> before <i>ns</i>. Both syllables would be long by position in any case, but that does not make a vowel long; a vowel before <i>nd</i> or <i>nt</i> is regularly short.",
   "word": "īnfāns",
   "level": 1
  },
  {
   "id": "qua-A20",
   "set": "A",
   "deck": "ii.quantity",
   "card": "across-words",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "In a line of verse, <i>sed</i> (“but”) stands before <i>ego</i> (“I”): <i>sed ego</i>. Is the syllable <i>sed</i> long or short?",
   "options": [
    "Long by position, because it ends in a consonant",
    "Short, because its <i>d</i> is joined to the vowel of <i>ego</i>",
    "Long by nature, because it is a word of one syllable",
    "Common, because it may be measured either way"
   ],
   "answer": 1,
   "explain": "Its vowel is short, and since the next word begins with a vowel, the <i>d</i> is pronounced with the <i>e</i> of <i>ego</i> (<i>se-de-go</i>). So <i>sed</i> is open and short. Before a word beginning with a consonant it would be long by position.",
   "why": {
    "prompt": "When would <i>sed</i> be long in verse?",
    "model": "When the next word begins with a consonant, for then the <i>d</i> closes the syllable and it is long by position."
   },
   "level": 1
  },
  {
   "id": "qua-B01",
   "set": "B",
   "deck": "ii.quantity",
   "card": "by-nature",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "The first syllable of <i>lūna</i> (“moon”) is long. Why?",
   "options": [
    "Its vowel is long",
    "Two consonants follow its vowel",
    "It is open",
    "It is the accented syllable"
   ],
   "answer": 0,
   "explain": "The vowel <i>ū</i> is long, so the syllable is long by nature. Only one consonant follows it, so it is not long by position, and being open or accented does not make a syllable long.",
   "word": "lūna",
   "level": 1
  },
  {
   "id": "qua-B13",
   "set": "B",
   "deck": "ii.quantity",
   "card": "english-stress",
   "group": "English primary stress and the suffixes that move it",
   "type": "mc",
   "lang": "en",
   "prompt": "The stressed syllable of “city” has a short vowel. What does this show?",
   "options": [
    "That “city” is stressed on its second syllable",
    "That English stress follows the law of the penult",
    "That a stressed syllable may be short",
    "That English has no stress"
   ],
   "answer": 2,
   "explain": "English stress is a matter of force and pitch, not of quantity, so a stressed English syllable may be short in duration. That is why the English stressed syllable is not the same as the Latin long syllable.",
   "word": "city",
   "level": 1
  },
  {
   "id": "qua-B06",
   "set": "B",
   "deck": "ii.quantity",
   "card": "what-accent",
   "group": "Latin accent (penultimate rule)",
   "type": "mc",
   "lang": "la",
   "prompt": "Which of these is not one of the three accents that Donatus names?",
   "options": [
    "The acute",
    "The grave",
    "The macron",
    "The circumflex"
   ],
   "answer": 2,
   "explain": "Donatus names the acute, the grave, and the circumflex. The macron is not an accent; it is the line written over a long vowel in this course to show its length.",
   "level": 1
  },
  {
   "id": "qua-B02",
   "set": "B",
   "deck": "ii.quantity",
   "card": "by-position",
   "group": "Latin quantity by nature and by position",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>fenestra</i> (“window”) is long by position?",
   "tokens": [
    "fe",
    "nes",
    "tra"
   ],
   "answer": 1,
   "explain": "The <i>e</i> of <i>nes</i> is short, but it is followed by <i>s</i> and <i>t</i>; the <i>s</i> closes the syllable, so it is long by position. The first syllable is open with a short vowel, and so is the last.",
   "word": "fenestra",
   "level": 2
  },
  {
   "id": "qua-B11",
   "set": "B",
   "deck": "ii.quantity",
   "card": "suffixes",
   "group": "English primary stress and the suffixes that move it",
   "type": "mc",
   "lang": "en",
   "prompt": "“Acid” is stressed on its first syllable. Where is “acidity” stressed?",
   "options": [
    "On “a,” as in “acid”",
    "On “cid”",
    "On “ty”",
    "On “i,” the first syllable of the ending"
   ],
   "answer": 1,
   "explain": "The ending “-ity” puts the stress on the syllable just before it, so “AC-id” becomes “a-CID-i-ty.”",
   "word": "acidity",
   "level": 1
  },
  {
   "id": "qua-B15",
   "set": "B",
   "deck": "ii.quantity",
   "card": "suffixes",
   "group": "English primary stress and the suffixes that move it",
   "type": "mc",
   "lang": "en",
   "prompt": "“Wonder” is stressed on its first syllable. Where is “wonderful” stressed?",
   "options": [
    "On “der,” the syllable before the ending",
    "On “won,” as in “wonder”",
    "On “ful”",
    "On “der,” because “-ful” moves the stress"
   ],
   "answer": 1,
   "explain": "The ending “-ful” leaves the stress where it was, so “WON-der” gives “WON-der-ful.” It is “-tion,” “-ic,” and “-ity” that move the stress to the syllable before them.",
   "word": "wonderful",
   "level": 1
  },
  {
   "id": "qua-B03",
   "set": "B",
   "deck": "ii.quantity",
   "card": "short-and-vowel-vowel",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "Is the first syllable of <i>meus</i> (“my”) long or short?",
   "options": [
    "Long by nature",
    "Short, since a vowel follows it",
    "Long, because <i>eu</i> is a diphthong",
    "Long by position"
   ],
   "answer": 1,
   "explain": "The <i>e</i> of <i>meus</i> stands directly before the vowel <i>u</i>, and a vowel before another vowel is usually short. The <i>e</i> and <i>u</i> are two syllables here, <i>me-us</i>, not a diphthong.",
   "word": "meus",
   "level": 1
  },
  {
   "id": "qua-B12",
   "set": "B",
   "deck": "ii.quantity",
   "card": "schwa-rhythm",
   "group": "English primary stress and the suffixes that move it",
   "type": "identify",
   "lang": "en",
   "prompt": "In “parade,” which syllable has the weak vowel schwa?",
   "tokens": [
    "pa",
    "rade"
   ],
   "answer": 0,
   "explain": "The stress of “parade” falls on “rade,” and the unstressed first syllable is weakened to schwa.",
   "word": "parade",
   "level": 2
  },
  {
   "id": "qua-B14",
   "set": "B",
   "deck": "ii.quantity",
   "card": "stress-pairs",
   "group": "English primary stress and the suffixes that move it",
   "type": "identify",
   "lang": "en",
   "prompt": "Which syllable of the marked word is stressed? “The <b>increase</b> in prices surprised everyone.”",
   "tokens": [
    "in",
    "crease"
   ],
   "answer": 0,
   "explain": "Here “increase” is a noun, and the noun of such a pair is stressed on the first syllable: “an IN-crease,” but “to in-CREASE.”",
   "word": "increase",
   "level": 2
  },
  {
   "id": "qua-B07",
   "set": "B",
   "deck": "ii.quantity",
   "card": "penultimate-law",
   "group": "Latin accent (penultimate rule)",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>populus</i> (“people”) bears the accent?",
   "tokens": [
    "po",
    "pu",
    "lus"
   ],
   "answer": 0,
   "explain": "The penult <i>pu</i> is open and its vowel is short, so the accent falls on the antepenult: <i>PO-pu-lus</i>.",
   "word": "populus",
   "level": 2
  },
  {
   "id": "qua-B05",
   "set": "B",
   "deck": "ii.quantity",
   "card": "by-nature",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "The first syllable of <i>laudō</i> (“I praise”) is long. Why?",
   "options": [
    "Because two consonants follow it",
    "Because it is accented",
    "Because <i>au</i> is a diphthong",
    "Because the last syllable is long"
   ],
   "answer": 2,
   "explain": "A syllable that contains a diphthong is long by nature, and <i>au</i> is a diphthong. Only one consonant, <i>d</i>, follows it, so it is not long by position; and the accent does not make a syllable long.",
   "word": "laudō",
   "level": 1
  },
  {
   "id": "qua-B10",
   "set": "B",
   "deck": "ii.quantity",
   "card": "penultimate-law",
   "group": "Latin accent (penultimate rule)",
   "type": "mc",
   "lang": "la",
   "prompt": "Where is <i>fīlia</i> (“daughter”) accented, and why?",
   "options": [
    "On <i>li</i>, because the penult of a three-syllable word is always accented",
    "On <i>a</i>, the last syllable",
    "On <i>fī</i>, because the penult is short",
    "On <i>fī</i>, because it is the only long vowel"
   ],
   "answer": 2,
   "explain": "The penult <i>li</i> is short, because its vowel stands before another vowel, so the accent falls on the antepenult: <i>FĪ-li-a</i>. The long <i>ī</i> is not the reason; the antepenult would be accented even if it were short.",
   "word": "fīlia",
   "level": 1
  },
  {
   "id": "qua-B08",
   "set": "B",
   "deck": "ii.quantity",
   "card": "enclitics",
   "group": "Latin accent (penultimate rule)",
   "type": "mc",
   "lang": "la",
   "prompt": "Where is <i>populusque</i> (“and the people”) accented?",
   "options": [
    "On <i>po</i>, as in <i>populus</i>",
    "On <i>lus</i>",
    "On <i>pu</i>",
    "On <i>que</i>"
   ],
   "answer": 1,
   "explain": "An enclitic moves the accent onto the syllable just before it, whatever the quantity of that syllable. So <i>PO-pu-lus</i> becomes <i>po-pu-LUS-que</i>, an exception to the law of the penult.",
   "word": "populusque",
   "why": {
    "prompt": "Why is <i>populusque</i> not accented on <i>po</i>, as <i>populus</i> is?",
    "model": "The enclitic <i>-que</i> is pronounced with the word before it and moves the accent onto the syllable just before it."
   },
   "level": 1
  },
  {
   "id": "qua-B09",
   "set": "B",
   "deck": "ii.quantity",
   "card": "what-accent",
   "group": "Latin accent (penultimate rule)",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>ōrātor</i> (“speaker”) bears the accent?",
   "tokens": [
    "ō",
    "rā",
    "tor"
   ],
   "answer": 1,
   "explain": "The penult <i>rā</i> is long by nature, so it takes the accent: <i>ō-RĀ-tor</i>. The long first syllable does not draw the accent, because only the penult and the antepenult are considered.",
   "word": "ōrātor",
   "level": 2
  },
  {
   "id": "qua-B04",
   "set": "B",
   "deck": "ii.quantity",
   "card": "common",
   "group": "Latin quantity by nature and by position",
   "type": "identify",
   "lang": "la",
   "prompt": "In verse, which syllable of <i>pharetra</i> (“quiver”) is common?",
   "tokens": [
    "pha",
    "re",
    "tra"
   ],
   "answer": 1,
   "explain": "The syllable <i>re</i> is followed by the mute <i>t</i> and the liquid <i>r</i>. If the poet keeps them together (<i>re-tra</i>), the syllable is open and short; if he divides them (<i>ret-ra</i>), it is closed and long. A syllable that may be measured either way is common.",
   "word": "pharetra",
   "why": {
    "prompt": "Why can <i>re</i> in <i>pharetra</i> be measured either long or short?",
    "model": "It is followed by a mute and a liquid, which can be pronounced together with the next vowel or divided, so the syllable can be open and short or closed and long."
   },
   "level": 2
  },
  {
   "id": "qua-B16",
   "set": "B",
   "deck": "ii.quantity",
   "card": "schwa-rhythm",
   "group": "English primary stress and the suffixes that move it",
   "type": "identify",
   "lang": "en",
   "prompt": "Which syllable of “economy” has the primary stress?",
   "tokens": [
    "e",
    "con",
    "o",
    "my"
   ],
   "answer": 1,
   "explain": "“Economy” is stressed on its second syllable, e-CON-o-my, and the unstressed syllables around it are weakened.",
   "word": "economy",
   "level": 2
  },
  {
   "id": "qua-B17",
   "set": "B",
   "deck": "ii.quantity",
   "card": "by-position",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "The <i>a</i> of <i>patrem</i> (“father,” as object) is short, and <i>t</i> and <i>r</i> follow it. In ordinary speech, is the first syllable long or short?",
   "options": [
    "Long by position, because two consonants follow its short vowel",
    "Short, because <i>tr</i> goes with the following vowel",
    "Long by nature, because it is the first syllable",
    "Long, because it bears the accent of the word"
   ],
   "answer": 1,
   "explain": "In ordinary speech the word is divided <i>pa-trem</i>, because a mute followed by <i>r</i> goes with the following vowel. So the first syllable is open and short; the rule of position excepts a mute before <i>l</i> or <i>r</i>. A poet may divide <i>pat-rem</i> and measure it long, so the syllable is common in verse.",
   "word": "patrem",
   "level": 1
  },
  {
   "id": "qua-B18",
   "set": "B",
   "deck": "ii.quantity",
   "card": "hidden",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "How is a vowel of hidden quantity pronounced when nothing shows that it is long?",
   "options": [
    "Long, because its syllable is long",
    "Short, unless it is known to be long",
    "As the speaker chooses, since the length is unknown",
    "Long whenever its syllable bears the accent"
   ],
   "answer": 1,
   "explain": "A vowel of hidden quantity should be pronounced short unless it is known to be long. The length of the syllable does not settle it, because a syllable long by position is long whether its vowel is long or short.",
   "level": 1
  },
  {
   "id": "qua-B19",
   "set": "B",
   "deck": "ii.quantity",
   "card": "hidden",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "In <i>laudantem</i> (“praising”) the syllable <i>dan</i> is long. Is its vowel long or short?",
   "options": [
    "Long, because the syllable is long by position",
    "Long, because it bears the accent",
    "Short, as a vowel before <i>nt</i> regularly is",
    "Short, because the syllable is short"
   ],
   "answer": 2,
   "explain": "A vowel before <i>nd</i> or <i>nt</i> is regularly short, so the <i>a</i> of <i>dan</i> is short. The syllable is long by position, because <i>n</i> and <i>t</i> follow its vowel; the length of the syllable is not the length of the vowel.",
   "word": "laudantem",
   "level": 1
  },
  {
   "id": "qua-B20",
   "set": "B",
   "deck": "ii.quantity",
   "card": "consonant-i",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "The first syllable of <i>eius</i> (“his”) is long, although only the consonant <i>i</i> follows its <i>e</i>. Why?",
   "options": [
    "Because its <i>e</i> is long by nature",
    "Because a vowel before a vowel is long",
    "Because its consonant <i>i</i> sounds doubled, <i>ei-ius</i>",
    "Because every word of two syllables is long in its first"
   ],
   "answer": 2,
   "explain": "A syllable whose vowel is followed by consonant <i>i</i> is long, because the speaker passes through a vowel <i>i</i> that forms a diphthong with it: <i>ei-ius</i>. It is not the rule of a vowel before a vowel, for the <i>i</i> here is a consonant, and that rule would make the syllable short.",
   "word": "eius",
   "level": 1
  },
  {
   "id": "qua-C01",
   "set": "C",
   "deck": "ii.quantity",
   "card": "by-nature",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "The first syllable of <i>cēna</i> (“dinner”) is long. Why?",
   "options": [
    "It is long by position",
    "It is long by nature",
    "It is common",
    "It is long because it is open"
   ],
   "answer": 1,
   "explain": "The vowel <i>ē</i> is long, so the syllable is long by nature. A single consonant follows it, so it is not long by position, and an open syllable is long only if its vowel is long.",
   "word": "cēna",
   "level": 1
  },
  {
   "id": "qua-C13",
   "set": "C",
   "deck": "ii.quantity",
   "card": "english-stress",
   "group": "English primary stress and the suffixes that move it",
   "type": "mc",
   "lang": "en",
   "prompt": "Which of these is a difference between an English stressed syllable and a Latin long syllable?",
   "options": [
    "A stressed syllable may be short",
    "A Latin long syllable is always accented",
    "English stress is found from quantity",
    "There is no real difference"
   ],
   "answer": 0,
   "explain": "English stress is force and pitch, and a stressed English syllable may be short, as in “city.” A Latin long syllable is a matter of time, and it need not bear the accent, as the first syllable of <i>ōrātor</i> shows.",
   "level": 1
  },
  {
   "id": "qua-C06",
   "set": "C",
   "deck": "ii.quantity",
   "card": "what-accent",
   "group": "Latin accent (penultimate rule)",
   "type": "mc",
   "lang": "la",
   "prompt": "Quintilian counts it an error to put the acute accent on the first syllable of <i>Camillus</i>. What kind of error is a misplaced accent?",
   "options": [
    "A solecism, an error in the arrangement of words",
    "A barbarism, an error in a single word",
    "An error of spelling only",
    "No error, since the accent may be placed freely"
   ],
   "answer": 1,
   "explain": "A misplaced accent mispronounces a single word, so it is a barbarism. A solecism is an error in the arrangement of words, and the accent is not free in Latin, because the quantity of the syllables fixes it.",
   "level": 1
  },
  {
   "id": "qua-C02",
   "set": "C",
   "deck": "ii.quantity",
   "card": "by-position",
   "group": "Latin quantity by nature and by position",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>capillus</i> (“hair”) is long by position?",
   "tokens": [
    "ca",
    "pil",
    "lus"
   ],
   "answer": 1,
   "explain": "The <i>i</i> of <i>pil</i> is short, but the double <i>l</i> is divided between the syllables, so <i>pil</i> is closed and long by position.",
   "word": "capillus",
   "level": 2
  },
  {
   "id": "qua-C11",
   "set": "C",
   "deck": "ii.quantity",
   "card": "suffixes",
   "group": "English primary stress and the suffixes that move it",
   "type": "mc",
   "lang": "en",
   "prompt": "“Personal” is stressed on its first syllable. Where is “personality” stressed?",
   "options": [
    "On “per,” as in “personal”",
    "On “son”",
    "On “al”",
    "On “ty”"
   ],
   "answer": 2,
   "explain": "The ending “-ity” puts the stress on the syllable just before it, so “PER-son-al” becomes “per-son-AL-i-ty.”",
   "word": "personality",
   "level": 1
  },
  {
   "id": "qua-C15",
   "set": "C",
   "deck": "ii.quantity",
   "card": "suffixes",
   "group": "English primary stress and the suffixes that move it",
   "type": "mc",
   "lang": "en",
   "prompt": "“Agree” and “agreement” are stressed on the same syllable, but “metal” and “metallic” are not. Why?",
   "options": [
    "“-ment” moves the stress, but “-ic” does not",
    "Only “-ic” moves the stress",
    "Both endings move the stress",
    "The stress follows the quantity of the syllables"
   ],
   "answer": 1,
   "explain": "The ending “-ic” puts the stress on the syllable just before it (“MET-al,” “me-TAL-lic”), whereas “-ment” leaves the stress where it was (“a-GREE,” “a-GREE-ment”).",
   "word": "metallic",
   "why": {
    "prompt": "Why does “agreement” keep the stress of “agree”?",
    "model": "The ending “-ment” is one of the endings that leave the stress where it stood in the shorter word."
   },
   "level": 1
  },
  {
   "id": "qua-C03",
   "set": "C",
   "deck": "ii.quantity",
   "card": "short-and-vowel-vowel",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "Is the second syllable of <i>fīlius</i> (“son”) long or short?",
   "options": [
    "Long, because it follows a long syllable",
    "Short, since a vowel follows it",
    "Long by position",
    "Long by nature"
   ],
   "answer": 1,
   "explain": "The <i>i</i> of the second syllable stands directly before the vowel <i>u</i>, and a vowel before another vowel is usually short. The long <i>ī</i> of the first syllable does not affect it.",
   "word": "fīlius",
   "why": {
    "prompt": "Why is the second syllable of <i>fīlius</i> short?",
    "model": "Its vowel stands directly before another vowel, and such a vowel is usually short."
   },
   "level": 1
  },
  {
   "id": "qua-C12",
   "set": "C",
   "deck": "ii.quantity",
   "card": "schwa-rhythm",
   "group": "English primary stress and the suffixes that move it",
   "type": "identify",
   "lang": "en",
   "prompt": "In “atomic,” which syllable has the weak vowel schwa?",
   "tokens": [
    "a",
    "tom",
    "ic"
   ],
   "answer": 0,
   "explain": "In “atom” the first syllable is stressed and has a full vowel. In “atomic” the ending “-ic” moves the stress to “tom,” and the first syllable, now unstressed, is weakened to schwa.",
   "word": "atomic",
   "level": 2
  },
  {
   "id": "qua-C14",
   "set": "C",
   "deck": "ii.quantity",
   "card": "stress-pairs",
   "group": "English primary stress and the suffixes that move it",
   "type": "identify",
   "lang": "en",
   "prompt": "Which syllable of the marked word is stressed? “Many will <b>rebel</b> against the new law.”",
   "tokens": [
    "re",
    "bel"
   ],
   "answer": 1,
   "explain": "Here “rebel” is a verb, and the verb of such a pair is stressed on the second syllable: “to re-BEL,” but “a REB-el.”",
   "word": "rebel",
   "level": 2
  },
  {
   "id": "qua-C07",
   "set": "C",
   "deck": "ii.quantity",
   "card": "penultimate-law",
   "group": "Latin accent (penultimate rule)",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>imperātor</i> (“general”) bears the accent?",
   "tokens": [
    "im",
    "pe",
    "rā",
    "tor"
   ],
   "answer": 2,
   "explain": "The penult <i>rā</i> is long by nature, so it takes the accent: <i>im-pe-RĀ-tor</i>.",
   "word": "imperātor",
   "level": 2
  },
  {
   "id": "qua-C05",
   "set": "C",
   "deck": "ii.quantity",
   "card": "by-nature",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "Both syllables of <i>cīvēs</i> (“citizens”) are long. Why?",
   "options": [
    "Both are long by position",
    "Both are long by nature, because both vowels are long",
    "The first is long by position and the second by nature",
    "Both are common"
   ],
   "answer": 1,
   "explain": "The vowels <i>ī</i> and <i>ē</i> are both long, so both syllables are long by nature. The <i>v</i> between them is a single consonant, so the first syllable is not long by position.",
   "word": "cīvēs",
   "level": 1
  },
  {
   "id": "qua-C10",
   "set": "C",
   "deck": "ii.quantity",
   "card": "penultimate-law",
   "group": "Latin accent (penultimate rule)",
   "type": "mc",
   "lang": "la",
   "prompt": "The last syllable of <i>cīvitās</i> (“state”) is long. Where is the word accented?",
   "options": [
    "On <i>tās</i>, because it is long",
    "On <i>vi</i>, the penult",
    "On <i>cī</i>",
    "On <i>cī</i> and <i>tās</i> equally"
   ],
   "answer": 2,
   "explain": "The penult <i>vi</i> is short, so the accent falls on the antepenult: <i>CĪ-vi-tās</i>. The length of the last syllable does not matter, because the last syllable of a word of more than one syllable is never accented.",
   "word": "cīvitās",
   "why": {
    "prompt": "Why does the long last syllable of <i>cīvitās</i> not draw the accent?",
    "model": "The law of the penult looks only at the penult: if it is long, it is accented; if short, the antepenult is. The last syllable never takes the accent."
   },
   "level": 1
  },
  {
   "id": "qua-C08",
   "set": "C",
   "deck": "ii.quantity",
   "card": "enclitics",
   "group": "Latin accent (penultimate rule)",
   "type": "mc",
   "lang": "la",
   "prompt": "<i>Silva</i> (“forest”) is accented on its first syllable. Where is <i>silvaque</i> (“and the forest”) accented?",
   "options": [
    "On <i>sil</i>, as in <i>silva</i>",
    "On <i>va</i>",
    "On <i>que</i>",
    "It has no accent of its own"
   ],
   "answer": 1,
   "explain": "The enclitic <i>-que</i> moves the accent onto the syllable just before it, even when that syllable is short. So <i>SIL-va</i> becomes <i>sil-VA-que</i>.",
   "word": "silvaque",
   "level": 1
  },
  {
   "id": "qua-C09",
   "set": "C",
   "deck": "ii.quantity",
   "card": "what-accent",
   "group": "Latin accent (penultimate rule)",
   "type": "identify",
   "lang": "la",
   "prompt": "Which syllable of <i>īnsula</i> (“island”) bears the accent?",
   "tokens": [
    "īn",
    "su",
    "la"
   ],
   "answer": 0,
   "explain": "The penult <i>su</i> is open and short, so the accent falls on the antepenult: <i>ĪN-su-la</i>.",
   "word": "īnsula",
   "level": 2
  },
  {
   "id": "qua-C04",
   "set": "C",
   "deck": "ii.quantity",
   "card": "common",
   "group": "Latin quantity by nature and by position",
   "type": "identify",
   "lang": "la",
   "prompt": "In verse, which syllable of <i>latebrae</i> (“hiding place”) is common?",
   "tokens": [
    "la",
    "te",
    "brae"
   ],
   "answer": 1,
   "explain": "The syllable <i>te</i> is followed by the mute <i>b</i> and the liquid <i>r</i>, which a poet may keep together or divide, so it may be measured short or long. The first syllable, <i>la</i>, is open with a short vowel, and the last, <i>brae</i>, is long by nature, because it has a diphthong.",
   "word": "latebrae",
   "level": 2
  },
  {
   "id": "qua-C16",
   "set": "C",
   "deck": "ii.quantity",
   "card": "schwa-rhythm",
   "group": "English primary stress and the suffixes that move it",
   "type": "identify",
   "lang": "en",
   "prompt": "Which syllable of “political” has the primary stress?",
   "tokens": [
    "po",
    "lit",
    "i",
    "cal"
   ],
   "answer": 1,
   "explain": "“Political” is stressed on “lit,” the syllable before the ending “-ic” (here followed by “-al”): po-LIT-i-cal. The first syllable is weakened, as the stress has moved from “POL-i-tics.”",
   "word": "political",
   "level": 2
  },
  {
   "id": "qua-C17",
   "set": "C",
   "deck": "ii.quantity",
   "card": "hidden",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "After which of these groups of consonants is a vowel regularly short?",
   "options": [
    "<i>ns</i>",
    "<i>nf</i>",
    "<i>gn</i>",
    "<i>nd</i>"
   ],
   "answer": 3,
   "explain": "A vowel before <i>nd</i> or <i>nt</i> is regularly short, whereas a vowel before <i>ns</i> or <i>nf</i> is long, and a vowel before <i>gn</i> is held to be long, though not certainly in every word. In every case the syllable itself is long by position.",
   "level": 1
  },
  {
   "id": "qua-C18",
   "set": "C",
   "deck": "ii.quantity",
   "card": "across-words",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "In a line of verse, <i>legit</i> (“he reads”) stands before <i>carmen</i> (“a poem”). Is the last syllable of <i>legit</i> long or short?",
   "options": [
    "Short, because its vowel is short",
    "Long by position, because <i>t</i> and <i>c</i> follow its vowel",
    "Short, because a new word begins a new syllable",
    "Long by nature, because it ends the word"
   ],
   "answer": 1,
   "explain": "The last syllable of <i>legit</i> has a short vowel and ends in <i>t</i>. Because the next word begins with a consonant, <i>t</i> and <i>c</i> follow the short vowel, and the syllable is long by position. Before a word beginning with a vowel, the <i>t</i> would be joined to that vowel and the syllable would be short.",
   "level": 1
  },
  {
   "id": "qua-C19",
   "set": "C",
   "deck": "ii.quantity",
   "card": "consonant-i",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "The first syllable of <i>huius</i> (“of this”) is long. Does this show that its vowel <i>u</i> is long?",
   "options": [
    "Yes, for a long syllable always has a long vowel",
    "Yes, for <i>u</i> before a vowel is long",
    "No; the length belongs to the syllable",
    "No, for the syllable is in fact short"
   ],
   "answer": 2,
   "explain": "No. A syllable whose vowel is followed by consonant <i>i</i> is long whether the vowel itself is long or short, because a transitional vowel <i>i</i> forms a diphthong with it (<i>hui-ius</i>). The length belongs to the syllable, and the length of a syllable is not the length of its vowel.",
   "word": "huius",
   "level": 1
  },
  {
   "id": "qua-C20",
   "set": "C",
   "deck": "ii.quantity",
   "card": "by-nature",
   "group": "Latin quantity by nature and by position",
   "type": "mc",
   "lang": "la",
   "prompt": "<i>Dēgō</i> (“I spend time”) is formed from <i>dē</i> and <i>agō</i>. Why is its first vowel long?",
   "options": [
    "It is followed by two consonants",
    "It bears the accent of the word",
    "It stands before another vowel",
    "It was formed by contraction"
   ],
   "answer": 3,
   "explain": "Two vowels, the <i>e</i> of <i>dē</i> and the <i>a</i> of <i>agō</i>, have been merged into one, and a vowel formed by contraction is long. Only one consonant, <i>g</i>, follows it, so the syllable is not long by position.",
   "word": "dēgō",
   "level": 1
  },
  {
   "id": "qua-L3-01",
   "set": "A",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 1): <i>Arma virumque cano, Troiae qui primus ab oris</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "Ar",
    "ma",
    "vi",
    "rum",
    "que",
    "ca",
    "nō",
    "Trō",
    "iae",
    "quī",
    "prī",
    "mus",
    "ab",
    "ō",
    "rīs"
   ],
   "answer": [
    0,
    3,
    6,
    7,
    8,
    9,
    10,
    13,
    14
   ],
   "explain": "The line scans as a dactylic hexameter: AR ma vi RUM que ca NŌ TRŌ IAE QUĪ PRĪ mus ab Ō RĪS (long syllables in capitals). <i>Ar</i> and <i>rum</i> are closed by two consonants (<i>rm</i>, <i>mq</i>). <i>Trō</i> is long, and <i>Troiae</i> is said <i>Troi-iae</i>, so its first syllable is closed as well. <i>Mus</i> and <i>ab</i> are short, because the next word begins with a vowel and the consonant passes to it.",
   "source": "Vergil, Aeneid, Book I, line 1; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-02",
   "set": "B",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 4): <i>vi superum saevae memorem Iunonis ob iram</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "vī",
    "su",
    "pe",
    "rum",
    "sae",
    "vae",
    "me",
    "mo",
    "rem",
    "Iū",
    "nō",
    "nis",
    "ob",
    "ī",
    "ram"
   ],
   "answer": [
    0,
    3,
    4,
    5,
    8,
    9,
    10,
    13,
    14
   ],
   "explain": "The line scans as a dactylic hexameter: VĪ su pe RUM SAE VAE me mo REM IŪ NŌ nis ob Ī RAM (long syllables in capitals). <i>Rum</i> is closed by <i>m</i> and <i>s</i>; <i>rem</i> is closed because the <i>I</i> of <i>Iūnōnis</i> is a consonant. <i>Nis</i> and <i>ob</i> are short, because a vowel follows; <i>sae</i> and <i>vae</i> are diphthongs.",
   "source": "Vergil, Aeneid, Book I, line 4; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-03",
   "set": "A",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 6): <i>inferretque deos Latio, genus unde Latinum</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "in",
    "fer",
    "ret",
    "que",
    "de",
    "ōs",
    "La",
    "ti",
    "ō",
    "ge",
    "nus",
    "un",
    "de",
    "La",
    "tī",
    "num"
   ],
   "answer": [
    0,
    1,
    2,
    5,
    8,
    11,
    14,
    15
   ],
   "explain": "The line scans as a dactylic hexameter: IN FER RET que de ŌS La ti Ō ge nus UN de La TĪ NUM (long syllables in capitals). <i>In</i>, <i>fer</i>, <i>ret</i>, and <i>un</i> are closed by two consonants. <i>Que</i>, <i>de</i>, <i>La</i>, <i>ti</i>, <i>ge</i>, and <i>de</i> are open with short vowels; <i>nus</i> is short because <i>unde</i> begins with a vowel.",
   "source": "Vergil, Aeneid, Book I, line 6; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-04",
   "set": "B",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 12): <i>Urbs antiqua fuit, Tyrii tenuere coloni</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "Urbs",
    "an",
    "tī",
    "qua",
    "fu",
    "it",
    "Ty",
    "ri",
    "ī",
    "te",
    "nu",
    "ē",
    "re",
    "co",
    "lō",
    "nī"
   ],
   "answer": [
    0,
    1,
    2,
    5,
    8,
    11,
    14,
    15
   ],
   "explain": "The line scans as a dactylic hexameter: URBS AN TĪ qua fu IT Ty ri Ī te nu Ē re co LŌ NĪ (long syllables in capitals). <i>Urbs</i> and <i>an</i> are closed by consonants; <i>it</i> is closed because <i>Tyriī</i> begins with a consonant. <i>Tenuēre</i> is the perfect in <i>-ēre</i>, with a long <i>ē</i>.",
   "source": "Vergil, Aeneid, Book I, line 12; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-05",
   "set": "A",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 15): <i>quam Iuno fertur terris magis omnibus unam</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "quam",
    "Iū",
    "nō",
    "fer",
    "tur",
    "ter",
    "rīs",
    "ma",
    "gis",
    "om",
    "ni",
    "bus",
    "ū",
    "nam"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    9,
    12,
    13
   ],
   "explain": "The line scans as a dactylic hexameter: QUAM IŪ NŌ FER TUR TER RĪS ma gis OM ni bus Ū NAM (long syllables in capitals). <i>Quam</i> is closed because the <i>I</i> of <i>Iūnō</i> is a consonant; <i>fer</i>, <i>tur</i>, <i>ter</i>, and <i>om</i> are closed by two consonants. <i>Gis</i> and <i>bus</i> are short, because a vowel follows. The line opens with four long syllables, a slow spondaic movement.",
   "source": "Vergil, Aeneid, Book I, line 15; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-06",
   "set": "B",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 20): <i>audierat, Tyrias olim quae verteret arces</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "au",
    "di",
    "e",
    "rat",
    "Ty",
    "ri",
    "ās",
    "ō",
    "lim",
    "quae",
    "ver",
    "te",
    "ret",
    "ar",
    "cēs"
   ],
   "answer": [
    0,
    3,
    6,
    7,
    8,
    9,
    10,
    13,
    14
   ],
   "explain": "The line scans as a dactylic hexameter: AU di e RAT Ty ri ĀS Ō LIM QUAE VER te ret AR CĒS (long syllables in capitals). <i>Au</i> and <i>quae</i> are diphthongs. <i>Di</i> is short because a vowel follows it. <i>Rat</i>, <i>lim</i>, <i>ver</i>, and <i>ar</i> are closed by consonants; <i>ret</i> is short because <i>arcēs</i> begins with a vowel.",
   "source": "Vergil, Aeneid, Book I, line 20; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-07",
   "set": "A",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 21): <i>hinc populum late regem belloque superbum</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "hinc",
    "po",
    "pu",
    "lum",
    "lā",
    "tē",
    "rē",
    "gem",
    "bel",
    "lō",
    "que",
    "su",
    "per",
    "bum"
   ],
   "answer": [
    0,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    12,
    13
   ],
   "explain": "The line scans as a dactylic hexameter: HINC po pu LUM LĀ TĒ RĒ GEM BEL LŌ que su PER BUM (long syllables in capitals). <i>Hinc</i>, <i>lum</i>, <i>gem</i>, <i>bel</i>, and <i>per</i> are closed by two consonants; <i>lātē</i> and <i>rēgem</i> have long vowels by nature.",
   "source": "Vergil, Aeneid, Book I, line 21; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-08",
   "set": "B",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 23): <i>Id metuens, veterisque memor Saturnia belli</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "Id",
    "me",
    "tu",
    "ens",
    "ve",
    "te",
    "ris",
    "que",
    "me",
    "mor",
    "Sā",
    "tur",
    "ni",
    "a",
    "bel",
    "lī"
   ],
   "answer": [
    0,
    3,
    6,
    9,
    10,
    11,
    14,
    15
   ],
   "explain": "The line scans as a dactylic hexameter: ID me tu ENS ve te RIS que me MOR SĀ TUR ni a BEL LĪ (long syllables in capitals). <i>Id</i>, <i>ens</i>, <i>ris</i>, <i>mor</i>, <i>tur</i>, and <i>bel</i> are closed by two consonants (<i>ris</i> by <i>s</i> and <i>qu</i>). <i>Tu</i>, <i>ni</i>, and <i>a</i> are short, because a vowel follows each.",
   "source": "Vergil, Aeneid, Book I, line 23; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-09",
   "set": "A",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 29): <i>His accensa super, iactatos aequore toto</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "Hīs",
    "ac",
    "cen",
    "sa",
    "su",
    "per",
    "iac",
    "tā",
    "tōs",
    "ae",
    "quo",
    "re",
    "tō",
    "tō"
   ],
   "answer": [
    0,
    1,
    2,
    5,
    6,
    7,
    8,
    9,
    12,
    13
   ],
   "explain": "The line scans as a dactylic hexameter: HĪS AC CEN sa su PER IAC TĀ TŌS AE quo re TŌ TŌ (long syllables in capitals). <i>Ac</i>, <i>cen</i>, and <i>iac</i> are closed by two consonants; <i>per</i> is closed because the <i>i</i> of <i>iactātōs</i> is a consonant. <i>Ae</i> is a diphthong; <i>qu</i> counts as one consonant, so <i>quo</i> is open and short.",
   "source": "Vergil, Aeneid, Book I, line 29; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-10",
   "set": "B",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 31): <i>arcebat longe Latio, multosque per annos</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "ar",
    "cē",
    "bat",
    "lon",
    "gē",
    "La",
    "ti",
    "ō",
    "mul",
    "tōs",
    "que",
    "per",
    "an",
    "nōs"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    4,
    7,
    8,
    9,
    12,
    13
   ],
   "explain": "The line scans as a dactylic hexameter: AR CĒ BAT LON GĒ La ti Ō MUL TŌS que per AN NŌS (long syllables in capitals). <i>Ar</i>, <i>bat</i>, <i>lon</i>, <i>mul</i>, and <i>an</i> are closed by two consonants. <i>Per</i> is short, because <i>annōs</i> begins with a vowel.",
   "source": "Vergil, Aeneid, Book I, line 31; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  },
  {
   "id": "qua-L3-11",
   "set": "A",
   "level": 3,
   "deck": "ii.quantity",
   "type": "identify",
   "lang": "la",
   "prompt": "Click every long syllable in this line of Vergil (Aeneid, Book I, line 34): <i>Vix e conspectu Siculae telluris in altum</i>. Vowels long by nature are marked. No vowel is elided in the line, and the last syllable counts as long.",
   "tokens": [
    "Vix",
    "ē",
    "cōn",
    "spec",
    "tū",
    "Si",
    "cu",
    "lae",
    "tel",
    "lū",
    "ris",
    "in",
    "al",
    "tum"
   ],
   "answer": [
    0,
    1,
    2,
    3,
    4,
    7,
    8,
    9,
    12,
    13
   ],
   "explain": "The line scans as a dactylic hexameter: VIX Ē CŌN SPEC TŪ Si cu LAE TEL LŪ ris in AL TUM (long syllables in capitals). <i>Vix</i> is closed, since <i>x</i> counts as two consonants (<i>cs</i>); <i>cōn</i>, <i>spec</i>, <i>tel</i>, and <i>al</i> are closed as well. <i>Ris</i> and <i>in</i> are short, because a vowel follows each.",
   "source": "Vergil, Aeneid, Book I, line 34; text checked against Project Gutenberg eBook #227 (Vergil, Aeneid)"
  }
 ]
};
