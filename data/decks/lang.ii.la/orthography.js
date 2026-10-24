window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.la/orthography"] = {
 "id": "lang.ii.la/orthography",
 "title": "Latin Spelling and Punctuation",
 "sub": "The letters u and v, i and j, the diphthongs, capitals and punctuation in the editions, and the abbreviations of names",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i> §§ 1–10",
 "panels": [
  {
   "id": "uv",
   "title": "U and v, i and j",
   "body": "<p>The Romans had one letter, V, for the vowel <i lang=\"la\">u</i> and for the consonant that was pronounced like English <i lang=\"la\">w</i>, and one letter, I, for the vowel <i lang=\"la\">i</i> and for the consonant pronounced like English <i lang=\"la\">y</i>: they wrote VENIO and IAM. The separate letters <i lang=\"la\">v</i> and <i lang=\"la\">j</i> were made by printers of the Renaissance. Modern editions differ: many print <i lang=\"la\">v</i> for the consonant and <i lang=\"la\">u</i> for the vowel (<i lang=\"la\">venio</i>, <i lang=\"la\">uva</i>), some print <i lang=\"la\">u</i> for both (<i lang=\"la\">uenio</i>), and few now print <i lang=\"la\">j</i>, so that we read <i lang=\"la\">iam</i> and <i lang=\"la\">iūstus</i> rather than <i lang=\"la\">jam</i> and <i lang=\"la\">jūstus</i>.</p>\n<p>A consonant <i lang=\"la\">i</i> between two vowels was pronounced double, and so it makes the syllable before it long: in <i lang=\"la\">maior</i> and <i lang=\"la\">cuius</i> the first syllable is long, though its vowel is short.</p>",
   "qp": {
    "id": "q-la-orth-uv",
    "variants": [
     {
      "prompt": "How did the Romans write the first letter of <i lang=\"la\">vīnum</i>?",
      "options": [
       "With a separate letter <i lang=\"la\">v</i>, as we print it now",
       "With <i lang=\"la\">w</i>",
       "With the same letter as the vowel <i lang=\"la\">u</i>",
       "With <i lang=\"la\">f</i>"
      ],
      "answer": 2,
      "explain": "One letter, V, served for both."
     },
     {
      "prompt": "Why is the first syllable of <i lang=\"la\">eius</i> long?",
      "options": [
       "Its vowel <i lang=\"la\">e</i> is long by nature",
       "The consonant <i lang=\"la\">i</i> between vowels was pronounced double",
       "It bears the accent",
       "<i lang=\"la\">Ei</i> is a diphthong, as in Greek"
      ],
      "answer": 1,
      "explain": "A consonant <i lang=\"la\">i</i> between vowels makes the syllable before it long."
     },
     {
      "prompt": "Who first used separate letters for <i lang=\"la\">u</i> and <i lang=\"la\">v</i>, <i lang=\"la\">i</i> and <i lang=\"la\">j</i>?",
      "options": [
       "Printers of the Renaissance",
       "The Roman grammarians of the Empire",
       "The medieval monks of Ireland",
       "Cicero"
      ],
      "answer": 0,
      "explain": "The distinction is modern."
     }
    ]
   }
  },
  {
   "id": "diphthongs",
   "title": "Diphthongs, macrons, and the editions",
   "body": "<p>Latin has the diphthongs <i lang=\"la\">ae</i>, <i lang=\"la\">oe</i>, and <i lang=\"la\">au</i>, and more rarely <i lang=\"la\">eu</i> and <i lang=\"la\">ui</i>: <i lang=\"la\">caelum</i>, <i lang=\"la\">poena</i>, <i lang=\"la\">aurum</i>. Older printing joined <i lang=\"la\">ae</i> and <i lang=\"la\">oe</i> into one sign, <i lang=\"la\">æ</i> and <i lang=\"la\">œ</i>, and some books still do. When the two vowels are to be pronounced apart, an edition may mark the second with a diaeresis, as in <i lang=\"la\">poēta</i> or <i lang=\"la\">aër</i>.</p>\n<p>The macron, which marks a long vowel, was not part of Roman writing, though inscriptions sometimes mark a long vowel with an accent-like sign called the apex. Books for learners print macrons so that the quantity can be seen; most editions of the authors do not. So <i lang=\"la\">rosa</i> in an edition may be <i lang=\"la\">rosa</i> or <i lang=\"la\">rosā</i>, and the construction must decide.</p>",
   "qp": {
    "id": "q-la-orth-diph",
    "variants": [
     {
      "prompt": "Which of these words has a diphthong?",
      "options": [
       "<i lang=\"la\">dea</i>",
       "<i lang=\"la\">meus</i>",
       "<i lang=\"la\">caelum</i>",
       "<i lang=\"la\">suōrum</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">Ae</i> is a diphthong; in the others the vowels stand in separate syllables."
     },
     {
      "prompt": "Do most editions of the Latin authors print macrons?",
      "options": [
       "Yes, on every long vowel",
       "No",
       "Only in verse",
       "Only on the last syllable"
      ],
      "answer": 1,
      "explain": "Macrons are printed chiefly in books for learners."
     },
     {
      "prompt": "What is <i lang=\"la\">æ</i> in older printing?",
      "options": [
       "The diphthong <i lang=\"la\">ae</i> written as one sign",
       "A long <i lang=\"la\">a</i>",
       "A Greek letter",
       "An abbreviation of <i lang=\"la\">aeternus</i>"
      ],
      "answer": 0,
      "explain": "The ligature joins the two letters."
     }
    ]
   }
  },
  {
   "id": "capitals",
   "title": "Capitals and punctuation",
   "body": "<p>The oldest Roman books were written in capitals, often without spaces between the words and with little or no punctuation. The spaces, the small letters, and the punctuation of a modern edition are the editor’s, not the author’s. So the punctuation of a passage is already a first interpretation of it, and editors sometimes punctuate the same sentence differently.</p>\n<p>Many editions begin a sentence with a small letter, and use capitals only for proper names, for the adjectives made from them (<i lang=\"la\">Rōmānus</i>, <i lang=\"la\">Graecus</i>), and for the first word of a paragraph or of a line of verse. The question mark and the exclamation point of a modern text are likewise the editor’s marks.</p>",
   "qp": {
    "id": "q-la-orth-cap",
    "variants": [
     {
      "prompt": "Whose is the punctuation in a modern edition of Cicero?",
      "options": [
       "Cicero’s, copied from his own hand",
       "The Roman scribes’",
       "The printer’s alone",
       "The editor’s"
      ],
      "answer": 3,
      "explain": "The ancient books had little punctuation."
     },
     {
      "prompt": "Which word would an edition usually capitalize?",
      "options": [
       "<i lang=\"la\">Graecī</i>, “the Greeks”",
       "<i lang=\"la\">urbs</i>, “city,” at the start of a sentence",
       "<i lang=\"la\">deus</i>, “god”",
       "<i lang=\"la\">et</i>, “and”"
      ],
      "answer": 0,
      "explain": "Proper names and the adjectives and nouns made from them take capitals."
     },
     {
      "prompt": "How were the oldest Roman books written?",
      "options": [
       "In small letters with full punctuation",
       "In capitals, often without spaces",
       "In Greek letters",
       "With a space and a dot between every syllable"
      ],
      "answer": 1,
      "explain": "Spaces and small letters came later."
     }
    ]
   }
  },
  {
   "id": "abbreviations",
   "title": "The abbreviations of names",
   "body": "<p>Roman first names (<i lang=\"la\">praenōmina</i>) were few, and they were regularly abbreviated: <i lang=\"la\">A.</i> for <i lang=\"la\">Aulus</i>, <i lang=\"la\">C.</i> for <i lang=\"la\">Gāius</i>, <i lang=\"la\">Cn.</i> for <i lang=\"la\">Gnaeus</i>, <i lang=\"la\">D.</i> for <i lang=\"la\">Decimus</i>, <i lang=\"la\">L.</i> for <i lang=\"la\">Lūcius</i>, <i lang=\"la\">M.</i> for <i lang=\"la\">Mārcus</i>, <i lang=\"la\">P.</i> for <i lang=\"la\">Pūblius</i>, <i lang=\"la\">Q.</i> for <i lang=\"la\">Quīntus</i>, <i lang=\"la\">T.</i> for <i lang=\"la\">Titus</i>, and <i lang=\"la\">Ti.</i> for <i lang=\"la\">Tiberius</i>. <i lang=\"la\">C.</i> stands for <i lang=\"la\">Gāius</i> and <i lang=\"la\">Cn.</i> for <i lang=\"la\">Gnaeus</i> because the letter C once had the sound of <i lang=\"la\">g</i> as well as <i lang=\"la\">k</i>. In reading aloud, the full name is pronounced.</p>\n<p>The state itself was abbreviated <i lang=\"la\">S.P.Q.R.</i>, <i lang=\"la\">Senātus Populusque Rōmānus</i> (“the Senate and the Roman People”).</p>",
   "qp": {
    "id": "q-la-orth-abbr",
    "variants": [
     {
      "prompt": "What does <i lang=\"la\">P.</i> stand for before a Roman name?",
      "options": [
       "<i lang=\"la\">Paulus</i>, the name of the apostle",
       "<i lang=\"la\">Pompeius</i>",
       "<i lang=\"la\">Pūblius</i>",
       "<i lang=\"la\">Prīmus</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">P.</i> is the abbreviation of <i lang=\"la\">Pūblius</i>."
     },
     {
      "prompt": "Why does <i lang=\"la\">C.</i> stand for <i lang=\"la\">Gāius</i>?",
      "options": [
       "The name was spelled with a C in Greek",
       "C once had the sound of <i lang=\"la\">g</i> as well",
       "It is a mistake of the scribes",
       "C stands for <i lang=\"la\">Caesar</i>"
      ],
      "answer": 1,
      "explain": "The letter G was a later Roman invention."
     },
     {
      "prompt": "What is pronounced when <i lang=\"la\">M. Tullius</i> is read aloud?",
      "options": [
       "<i lang=\"la\">Mārcus Tullius</i>",
       "<i lang=\"la\">Em Tullius</i>",
       "<i lang=\"la\">Mille Tullius</i>",
       "<i lang=\"la\">Tullius</i> alone"
      ],
      "answer": 0,
      "explain": "The full name is pronounced."
     }
    ]
   }
  }
 ]
};
