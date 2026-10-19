/* Metaplasm [vi.ex.metaplasm]  Exercise set opened from the Exercise button of vi.metaplasm. Written 24 items in three fixed sets. */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['vi.ex.metaplasm'] = {
 "id": "vi.ex.metaplasm",
 "kind": "exercise",
 "status": "written",
 "section": "VI",
 "title": "Metaplasm",
 "openedFrom": "vi.metaplasm (Exercise button)",
 "covers": [
  {
   "deck": "vi.metaplasm",
   "cards": [
    "definition",
    "adding",
    "removing",
    "quantity",
    "syllables",
    "between-words",
    "changing",
    "license-limits"
   ]
  }
 ],
 "skill": "Name the metaplasm in an English or Latin poetic form; sort metaplasms by the change they make; find the shortened words and the elisions in a line; give the regular prose form.",
 "types": [
  "sort",
  "mc",
  "identify",
  "transform"
 ],
 "pool": 24,
 "rotation": "A, B, C, A, … (never shuffled)",
 "sets": {
  "A": 8,
  "B": 8,
  "C": 8
 },
 "limit": "Only what vi.metaplasm teaches; no example from its cards.",
 "instr": "Answer each question. Where words are to be clicked or items sorted, press Check when the answer is complete.",
 "items": [
  {
   "id": "mp-A01",
   "set": "A",
   "deck": "vi.metaplasm",
   "type": "sort",
   "prompt": "Sort each poetic form by whether it adds to the regular word or removes from it.",
   "entries": [
    "“pow’r” for “power”",
    "<i>amārier</i> for <i>amārī</i> (“to be loved”)",
    "“’twixt” for “betwixt”",
    "“a-hunting” for “hunting”",
    "<i>dīxtī</i> for <i>dīxistī</i> (“you said”)",
    "“yclad” for “clad”"
   ],
   "bins": [
    "Adds a letter or syllable",
    "Removes a letter or syllable"
   ],
   "answer": [
    1,
    0,
    1,
    0,
    1,
    0
   ],
   "explain": "Prosthesis, epenthesis, and paragoge add a letter or syllable at the beginning, middle, or end; aphaeresis, syncope, and apocope remove one from the same places. “Pow’r,” “’twixt,” and <i>dīxtī</i> remove; <i>amārier</i>, “a-hunting,” and “yclad” add."
  },
  {
   "id": "mp-A02",
   "set": "A",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "Which metaplasm is “oft” for “often”?",
   "options": [
    "Syncope",
    "Apocope",
    "Aphaeresis",
    "Paragoge"
   ],
   "answer": 1,
   "explain": "A syllable is removed from the end of the word, so the metaplasm is apocope, as in “ope” for “open.”"
  },
  {
   "id": "mp-A03",
   "set": "A",
   "deck": "vi.metaplasm",
   "type": "identify",
   "prompt": "“The lark ’mid heav’n doth sing.” Click the word shortened by syncope.",
   "tokens": [
    "The lark",
    "’mid",
    "heav’n",
    "doth sing."
   ],
   "answer": 2,
   "explain": "“Heav’n” removes a letter from the middle of “heaven,” so it is syncope. “’Mid” removes a syllable from the beginning of “amid,” which is aphaeresis."
  },
  {
   "id": "mp-A04",
   "set": "A",
   "deck": "vi.metaplasm",
   "type": "transform",
   "prompt": "Give the regular prose form of the poetic “’mongst.”",
   "accept": [
    "amongst"
   ],
   "explain": "“’Mongst” removes the first syllable of “amongst,” by aphaeresis."
  },
  {
   "id": "mp-A05",
   "set": "A",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "Why is a metaplasm allowed in verse, though the same change would be a barbarism in prose?",
   "options": [
    "It serves the meter and is recognized",
    "Verse has no rules of form at all",
    "Poets may invent any word they please",
    "Prose and verse use different languages"
   ],
   "answer": 0,
   "explain": "A metaplasm is made for the meter or for ornament, and the reader can recognize the regular form behind it; without such a reason the same change is a barbarism."
  },
  {
   "id": "mp-A06",
   "set": "A",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "What does the Greek name <i>metaplasmos</i> mean?",
   "options": [
    "“Error”",
    "“Reshaping”",
    "“Addition”",
    "“Ornament”"
   ],
   "answer": 1,
   "explain": "<i>Metaplasmos</i> means “reshaping”: the change of correct, plain speech into another form."
  },
  {
   "id": "mp-A07",
   "set": "A",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "Which metaplasm removes a letter or syllable from the beginning of a word?",
   "options": [
    "Apocope",
    "Syncope",
    "Aphaeresis",
    "Systole"
   ],
   "answer": 2,
   "explain": "Aphaeresis (“taking away”) removes from the beginning; syncope removes from the middle and apocope from the end."
  },
  {
   "id": "mp-A08",
   "set": "A",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "How many kinds of metaplasm does Donatus count?",
   "options": [
    "Four",
    "Twelve",
    "Seventeen",
    "Fourteen"
   ],
   "answer": 3,
   "explain": "Donatus counts fourteen, from prosthesis to metathesis."
  },
  {
   "id": "mp-B01",
   "set": "B",
   "deck": "vi.metaplasm",
   "type": "sort",
   "prompt": "Sort each elision by its kind.",
   "entries": [
    "<i>atque ea</i>, measured <i>atqu’ ea</i>",
    "<i>tantum est</i>, measured <i>tant’ est</i>",
    "<i>ille ego</i>, measured <i>ill’ ego</i>",
    "<i>rērum aequē</i>, measured <i>rēr’ aequē</i>",
    "<i>ergō age</i>, measured <i>erg’ age</i>",
    "<i>partem habet</i>, measured <i>part’ habet</i>"
   ],
   "bins": [
    "Synaloepha",
    "Ecthlipsis"
   ],
   "answer": [
    0,
    1,
    0,
    1,
    0,
    1
   ],
   "explain": "Synaloepha elides a final vowel before a word beginning with a vowel; ecthlipsis elides a final syllable ending in <i>m</i>. In <i>partem habet</i> the <i>h</i> is not counted, so <i>-em</i> is elided."
  },
  {
   "id": "mp-B02",
   "set": "B",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "Which metaplasm is Latin <i>surrēxe</i> for <i>surrēxisse</i> (“to have risen”)?",
   "options": [
    "Apocope",
    "Aphaeresis",
    "Syncope",
    "Systole"
   ],
   "answer": 2,
   "explain": "A syllable is removed from the middle of the word, so the metaplasm is syncope."
  },
  {
   "id": "mp-B03",
   "set": "B",
   "deck": "vi.metaplasm",
   "type": "identify",
   "prompt": "In <i>nunc ego et ille ibimus</i> (“now I and he will go”), click every word whose final vowel is elided in verse.",
   "tokens": [
    "<i>nunc</i>",
    "<i>ego</i>",
    "<i>et</i>",
    "<i>ille</i>",
    "<i>ibimus</i>"
   ],
   "answer": [
    1,
    3
   ],
   "explain": "<i>Ego</i> stands before <i>et</i> and <i>ille</i> before <i>ibimus</i>, so each loses its final vowel by synaloepha."
  },
  {
   "id": "mp-B04",
   "set": "B",
   "deck": "vi.metaplasm",
   "type": "transform",
   "prompt": "Give the regular prose form of the poetic “th’ enemy.”",
   "accept": [
    "the enemy"
   ],
   "explain": "The vowel of “the” is elided before a vowel, as in Latin synaloepha; in prose it is written in full."
  },
  {
   "id": "mp-B05",
   "set": "B",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "Which metaplasm is “’scape” for “escape”?",
   "options": [
    "Apocope",
    "Aphaeresis",
    "Syncope",
    "Prosthesis"
   ],
   "answer": 1,
   "explain": "A letter is removed from the beginning of the word, so the metaplasm is aphaeresis."
  },
  {
   "id": "mp-B06",
   "set": "B",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "Which metaplasm makes a long syllable short?",
   "options": [
    "Ectasis",
    "Syncope",
    "Systole",
    "Diaeresis"
   ],
   "answer": 2,
   "explain": "Systole (“drawing together”) makes a long syllable short; ectasis makes a short one long."
  },
  {
   "id": "mp-B07",
   "set": "B",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "After what is the mark in “naïve” named?",
   "options": [
    "Syncope",
    "The Greek letter iota",
    "Zeugma",
    "Diaeresis"
   ],
   "answer": 3,
   "explain": "The two dots that show that two vowels are pronounced separately take their name from the metaplasm diaeresis, “division.”"
  },
  {
   "id": "mp-B08",
   "set": "B",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "When are the shortened forms of verse barbarisms?",
   "options": [
    "In prose, or without need",
    "Never, once a poet has used them",
    "Only when they are Latin",
    "Only in the first line of a poem"
   ],
   "answer": 0,
   "explain": "The license holds only in verse and for a reason: the same forms used in prose, or without need in verse, are barbarisms."
  },
  {
   "id": "mp-C01",
   "set": "C",
   "deck": "vi.metaplasm",
   "type": "sort",
   "prompt": "Sort each Latin poetic form by its kind of change.",
   "entries": [
    "<i>nāvita</i> for <i>nauta</i> (“sailor”)",
    "<i>dīxe</i> for <i>dīxisse</i> (“to have said”)",
    "<i>optumus</i> for <i>optimus</i> (“best”)",
    "<i>dīcier</i> for <i>dīcī</i> (“to be said”)",
    "<i>nōsse</i> for <i>nōvisse</i> (“to know”)",
    "<i>voster</i> for <i>vester</i> (“your”)"
   ],
   "bins": [
    "Adds",
    "Removes",
    "Changes a letter"
   ],
   "answer": [
    0,
    1,
    2,
    0,
    1,
    2
   ],
   "explain": "<i>Nāvita</i> and <i>dīcier</i> add (epenthesis and paragoge); <i>dīxe</i> and <i>nōsse</i> remove from the middle (syncope); <i>optumus</i> and <i>voster</i> put one letter in place of another (antithesis)."
  },
  {
   "id": "mp-C02",
   "set": "C",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "Which metaplasm lengthens a short syllable for the sake of the meter?",
   "options": [
    "Systole",
    "Syncope",
    "Paragoge",
    "Ectasis"
   ],
   "answer": 3,
   "explain": "Ectasis (“stretching out”) makes a short syllable long, as Virgil lengthens the first syllable of <i>Ītaliam</i>."
  },
  {
   "id": "mp-C03",
   "set": "C",
   "deck": "vi.metaplasm",
   "type": "identify",
   "prompt": "“O’er the hills the wand’ring shepherd strays.” Click every word shortened by syncope.",
   "tokens": [
    "O’er",
    "the hills",
    "the wand’ring",
    "shepherd",
    "strays."
   ],
   "answer": [
    0,
    2
   ],
   "explain": "“O’er” removes the “v” from the middle of “over,” and “wand’ring” removes the “e” from the middle of “wandering”: both are syncope."
  },
  {
   "id": "mp-C04",
   "set": "C",
   "deck": "vi.metaplasm",
   "type": "transform",
   "prompt": "Give the regular prose form of the poetic “flow’ry.”",
   "accept": [
    "flowery"
   ],
   "explain": "“Flow’ry” removes a letter from the middle of “flowery,” by syncope."
  },
  {
   "id": "mp-C05",
   "set": "C",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "Which metaplasm adds a letter or syllable at the end of a word?",
   "options": [
    "Prosthesis",
    "Epenthesis",
    "Paragoge",
    "Apocope"
   ],
   "answer": 2,
   "explain": "Paragoge (“leading past”) adds at the end, as in <i>potestur</i> for <i>potest</i>."
  },
  {
   "id": "mp-C06",
   "set": "C",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "What must the grammarian who scans a line know, besides the regular quantities?",
   "options": [
    "Nothing more than the quantities",
    "The author’s handwriting",
    "The Greek names of the meters only",
    "The licenses the poets allow"
   ],
   "answer": 3,
   "explain": "The licenses: a poet may change even the quantity of a syllable when the meter requires it, so the grammarian must know both the regular quantity and the metaplasms."
  },
  {
   "id": "mp-C07",
   "set": "C",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "Which two metaplasms occur where one word meets another?",
   "options": [
    "Synaloepha and ecthlipsis",
    "Syncope and apocope",
    "Prosthesis and paragoge",
    "Ectasis and systole"
   ],
   "answer": 0,
   "explain": "Synaloepha and ecthlipsis are elisions at the end of a word before a word beginning with a vowel; the others work within a single word."
  },
  {
   "id": "mp-C08",
   "set": "C",
   "deck": "vi.metaplasm",
   "type": "mc",
   "prompt": "To which of the four ways of the barbarism does syncope correspond?",
   "options": [
    "Addition",
    "Omission",
    "Substitution",
    "Transposition"
   ],
   "answer": 1,
   "explain": "Syncope removes a letter or syllable from the middle of a word, so it corresponds to omission."
  }
 ]
};
