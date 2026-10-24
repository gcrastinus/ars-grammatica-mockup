window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.la/syllable"] = {
 "id": "lang.ii.la/syllable",
 "title": "Latin Syllable, Quantity, and Accent",
 "sub": "The penultimate law and the enclitic, applied to particular Latin words",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "syllable-1",
   "title": "Three Latin words",
   "body": "<p><strong>Three Latin words.</strong> <i lang=\"la\">Senātor</i> (“senator”) divides as <i lang=\"la\">se-nā-tor</i>. Its penult, the syllable before the last, is <i lang=\"la\">nā</i>, and it is long by nature, so the accent falls on it: <i lang=\"la\">se-NĀ-tor</i>. <i lang=\"la\">Aequora</i> (“seas”) divides as <i lang=\"la\">ae-quo-ra</i>. Its penult, <i lang=\"la\">quo</i>, is short, so the accent falls on the antepenult, the third syllable from the end: <i lang=\"la\">AE-quo-ra</i>. <i lang=\"la\">Gaudium</i> (“joy”) divides as <i lang=\"la\">gau-di-um</i>. Its penult, <i lang=\"la\">di</i>, has a vowel before another vowel and is therefore short, so the accent again falls on the antepenult: <i lang=\"la\">GAU-di-um</i>.</p><p>These three words follow the penultimate law, as we have seen it in Section II: in a word of three or more syllables, a long penult takes the accent, whereas a short penult throws the accent back one syllable.</p>",
   "qp": {
    "id": "q-la-sy-syllable-1",
    "variants": [
     {
      "prompt": "Where is <i lang=\"la\">amīcus</i> accented?",
      "options": [
       "On the penult, <i lang=\"la\">a-MĪ-cus</i>",
       "On the antepenult, <i lang=\"la\">A-mī-cus</i>",
       "On the last syllable",
       "It has no accent"
      ],
      "answer": 0,
      "explain": "The penult is long by nature."
     },
     {
      "prompt": "Where is <i lang=\"la\">fēmina</i> accented?",
      "options": [
       "On the penult, <i lang=\"la\">fē-MI-na</i>",
       "On the last syllable, as in French",
       "It has no accent",
       "On the antepenult, <i lang=\"la\">FĒ-mi-na</i>"
      ],
      "answer": 3,
      "explain": "The penult <i lang=\"la\">mi</i> is short."
     },
     {
      "prompt": "Why is the penult of <i lang=\"la\">filius</i> short?",
      "options": [
       "Its vowel is short by nature before two consonants",
       "It is a diphthong",
       "Its vowel stands before another vowel",
       "It bears the accent"
      ],
      "answer": 2,
      "explain": "A vowel before a vowel is short: <i lang=\"la\">FĪ-li-us</i>."
     }
    ]
   }
  },
  {
   "id": "syllable-2",
   "title": "The enclitic on a short syllable",
   "body": "<p><strong>The enclitic on a short syllable.</strong> <i lang=\"la\">Nemus</i> (“grove”) has two syllables and is accented on the first, <i lang=\"la\">NE-mus</i>. <i lang=\"la\">Opus</i> (“work”) is accented in the same way, <i lang=\"la\">O-pus</i>. When <i lang=\"la\">-que</i> (“and”) is added, the accent moves onto the syllable that stood last, even though that syllable is short: <i lang=\"la\">ne-MUS-que</i>, <i lang=\"la\">o-PUS-que</i>.</p><p>An enclitic, as we have seen, is pronounced with the word before it and draws the accent onto the syllable just before it; <i lang=\"la\">-que</i>, <i lang=\"la\">-ne</i>, and <i lang=\"la\">-ve</i> do this whether that syllable is long or short. The penultimate law alone would accent <i lang=\"la\">nemusque</i> and <i lang=\"la\">opusque</i> on the first syllable, because their penults are short, so the enclitic is an exception to that law.</p>",
   "qp": {
    "id": "q-la-sy-syllable-2",
    "variants": [
     {
      "prompt": "Where is <i lang=\"la\">terraque</i> accented?",
      "options": [
       "On <i lang=\"la\">ter-</i>, by the penultimate law",
       "On <i lang=\"la\">-ra-</i>, before <i lang=\"la\">-que</i>",
       "On <i lang=\"la\">-que</i>",
       "It has no accent"
      ],
      "answer": 1,
      "explain": "The enclitic draws the accent to the syllable before it."
     },
     {
      "prompt": "Which of these is an enclitic?",
      "options": [
       "<i lang=\"la\">et</i>",
       "<i lang=\"la\">sed</i>",
       "<i lang=\"la\">-ve</i>",
       "<i lang=\"la\">aut</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">-Que</i>, <i lang=\"la\">-ne</i>, and <i lang=\"la\">-ve</i> are enclitics."
     },
     {
      "prompt": "Why is the enclitic an exception to the penultimate law?",
      "options": [
       "It accents the antepenult always, whatever the quantity",
       "It removes the accent",
       "It lengthens the vowel",
       "It accents the syllable before it even if short"
      ],
      "answer": 3,
      "explain": "<i lang=\"la\">Ne-MUS-que</i> has a short accented syllable."
     }
    ]
   }
  },
  {
   "id": "quantity",
   "title": "Quantity by nature and by position",
   "body": "<p>In <i lang=\"la\">māter</i> (“mother”) the first syllable is long because its vowel is long; in <i lang=\"la\">mentem</i> (“mind,” accusative) the first syllable is long because its short vowel is followed by two consonants. A Latin syllable is long by nature when it contains a long vowel or a diphthong, and long by position when its short vowel is followed by two consonants (or by <i lang=\"la\">x</i> or <i lang=\"la\">z</i>), whether in the same word or across the end of a word: in <i lang=\"la\">et nunc</i>, <i lang=\"la\">et</i> is long. Otherwise it is short.</p>\n<p>A short vowel followed by a mute (<i lang=\"la\">p</i>, <i lang=\"la\">b</i>, <i lang=\"la\">t</i>, <i lang=\"la\">d</i>, <i lang=\"la\">c</i>, <i lang=\"la\">g</i>) and a liquid (<i lang=\"la\">l</i>, <i lang=\"la\">r</i>) makes a common syllable, which a poet may treat as long or short: the first syllable of <i lang=\"la\">patris</i> (“of the father”). <i lang=\"la\">H</i> is not counted as a consonant, and <i lang=\"la\">qu</i> counts as one.</p>",
   "qp": {
    "id": "q-la-sy-quantity",
    "variants": [
     {
      "prompt": "Why is the first syllable of <i lang=\"la\">porta</i> long?",
      "options": [
       "By nature: its vowel is long",
       "It bears the accent",
       "It is common",
       "By position: <i lang=\"la\">r</i> and <i lang=\"la\">t</i> follow"
      ],
      "answer": 3,
      "explain": "A short vowel before two consonants makes a long syllable."
     },
     {
      "prompt": "Is the syllable <i lang=\"la\">et</i> long in <i lang=\"la\">et nunc</i>?",
      "options": [
       "Yes, by position across the word end",
       "No, its vowel is short by nature",
       "Only in prose",
       "It is common"
      ],
      "answer": 0,
      "explain": "<i lang=\"la\">T</i> and <i lang=\"la\">n</i> make two consonants."
     },
     {
      "prompt": "What kind of syllable is the first of <i lang=\"la\">sacrum</i>?",
      "options": [
       "Always long by position",
       "Common: a mute and a liquid follow",
       "Always short",
       "Long by nature"
      ],
      "answer": 1,
      "explain": "A poet may count it either way."
     }
    ]
   }
  },
  {
   "id": "vowel",
   "title": "A vowel before a vowel, and hidden quantity",
   "body": "<p>A vowel before another vowel, or before <i lang=\"la\">h</i>, is usually short: <i lang=\"la\">via</i>, <i lang=\"la\">deus</i>, <i lang=\"la\">nihil</i>. There are exceptions, chiefly in Greek words and in the genitive in <i lang=\"la\">-īus</i> (<i lang=\"la\">illīus</i>), but the rule holds for most Latin words.</p>\n<p>When a vowel stands before two consonants, the syllable is long by position whatever the vowel, and so the length of the vowel itself is hidden. Dictionaries and grammars still mark it, because it matters for pronunciation and for the history of the word: <i lang=\"la\">rēctus</i> (“straight”) has a long <i lang=\"la\">e</i>, though the meter could not show it.</p>",
   "qp": {
    "id": "q-la-sy-vowel",
    "variants": [
     {
      "prompt": "Is the first vowel of <i lang=\"la\">meus</i> long or short?",
      "options": [
       "Long, because it is accented",
       "Long by position",
       "Common",
       "Short, before another vowel"
      ],
      "answer": 3,
      "explain": "A vowel before a vowel is usually short."
     },
     {
      "prompt": "What is hidden quantity?",
      "options": [
       "The length of a vowel in a syllable long by position",
       "A syllable not counted in verse",
       "A vowel left out in writing",
       "The accent of an enclitic"
      ],
      "answer": 0,
      "explain": "The syllable is long whatever the vowel, so the vowel’s length is hidden."
     },
     {
      "prompt": "Which genitive keeps a long vowel before a vowel?",
      "options": [
       "<i lang=\"la\">meī</i>",
       "<i lang=\"la\">illīus</i>",
       "<i lang=\"la\">deī</i>",
       "<i lang=\"la\">viae</i>"
      ],
      "answer": 1,
      "explain": "The genitive in <i lang=\"la\">-īus</i> is an exception."
     }
    ]
   }
  }
 ]
};
