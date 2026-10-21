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
   "body": "<p>The Romans had one letter, V, for the vowel <i>u</i> and for the consonant that was pronounced like English <i>w</i>, and one letter, I, for the vowel <i>i</i> and for the consonant pronounced like English <i>y</i>: they wrote VENIO and IAM. The separate letters <i>v</i> and <i>j</i> were made by printers of the Renaissance. Modern editions differ: many print <i>v</i> for the consonant and <i>u</i> for the vowel (<i>venio</i>, <i>uva</i>), some print <i>u</i> for both (<i>uenio</i>), and few now print <i>j</i>, so that we read <i>iam</i> and <i>iūstus</i> rather than <i>jam</i> and <i>jūstus</i>.</p>\n<p>A consonant <i>i</i> between two vowels was pronounced double, and so it makes the syllable before it long: in <i>maior</i> and <i>cuius</i> the first syllable is long, though its vowel is short.</p>",
   "qp": {
    "id": "q-la-orth-uv",
    "variants": [
     {
      "prompt": "How did the Romans write the first letter of <i>vīnum</i>?",
      "options": [
       "With a separate letter <i>v</i>, as we print it now",
       "With <i>w</i>",
       "With the same letter as the vowel <i>u</i>",
       "With <i>f</i>"
      ],
      "answer": 2,
      "explain": "One letter, V, served for both."
     },
     {
      "prompt": "Why is the first syllable of <i>eius</i> long?",
      "options": [
       "Its vowel <i>e</i> is long by nature",
       "The consonant <i>i</i> between vowels was pronounced double",
       "It bears the accent",
       "<i>Ei</i> is a diphthong, as in Greek"
      ],
      "answer": 1,
      "explain": "A consonant <i>i</i> between vowels makes the syllable before it long."
     },
     {
      "prompt": "Who first used separate letters for <i>u</i> and <i>v</i>, <i>i</i> and <i>j</i>?",
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
   "body": "<p>Latin has the diphthongs <i>ae</i>, <i>oe</i>, and <i>au</i>, and more rarely <i>eu</i> and <i>ui</i>: <i>caelum</i>, <i>poena</i>, <i>aurum</i>. Older printing joined <i>ae</i> and <i>oe</i> into one sign, <i>æ</i> and <i>œ</i>, and some books still do. When the two vowels are to be pronounced apart, an edition may mark the second with a diaeresis, as in <i>poēta</i> or <i>aër</i>.</p>\n<p>The macron, which marks a long vowel, was not part of Roman writing, though inscriptions sometimes mark a long vowel with an accent-like sign called the apex. Books for learners print macrons so that the quantity can be seen; most editions of the authors do not. So <i>rosa</i> in an edition may be <i>rosa</i> or <i>rosā</i>, and the construction must decide.</p>",
   "qp": {
    "id": "q-la-orth-diph",
    "variants": [
     {
      "prompt": "Which of these words has a diphthong?",
      "options": [
       "<i>dea</i>",
       "<i>meus</i>",
       "<i>caelum</i>",
       "<i>suōrum</i>"
      ],
      "answer": 2,
      "explain": "<i>Ae</i> is a diphthong; in the others the vowels stand in separate syllables."
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
      "prompt": "What is <i>æ</i> in older printing?",
      "options": [
       "The diphthong <i>ae</i> written as one sign",
       "A long <i>a</i>",
       "A Greek letter",
       "An abbreviation of <i>aeternus</i>"
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
   "body": "<p>The oldest Roman books were written in capitals, often without spaces between the words and with little or no punctuation. The spaces, the small letters, and the punctuation of a modern edition are the editor’s, not the author’s. So the punctuation of a passage is already a first interpretation of it, and editors sometimes punctuate the same sentence differently.</p>\n<p>Many editions begin a sentence with a small letter, and use capitals only for proper names, for the adjectives made from them (<i>Rōmānus</i>, <i>Graecus</i>), and for the first word of a paragraph or of a line of verse. The question mark and the exclamation point of a modern text are likewise the editor’s marks.</p>",
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
       "<i>Graecī</i>, “the Greeks”",
       "<i>urbs</i>, “city,” at the start of a sentence",
       "<i>deus</i>, “god”",
       "<i>et</i>, “and”"
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
   "body": "<p>Roman first names (<i>praenōmina</i>) were few, and they were regularly abbreviated: <i>A.</i> for <i>Aulus</i>, <i>C.</i> for <i>Gāius</i>, <i>Cn.</i> for <i>Gnaeus</i>, <i>D.</i> for <i>Decimus</i>, <i>L.</i> for <i>Lūcius</i>, <i>M.</i> for <i>Mārcus</i>, <i>P.</i> for <i>Pūblius</i>, <i>Q.</i> for <i>Quīntus</i>, <i>T.</i> for <i>Titus</i>, and <i>Ti.</i> for <i>Tiberius</i>. <i>C.</i> stands for <i>Gāius</i> and <i>Cn.</i> for <i>Gnaeus</i> because the letter C once had the sound of <i>g</i> as well as <i>k</i>. In reading aloud, the full name is pronounced.</p>\n<p>The state itself was abbreviated <i>S.P.Q.R.</i>, <i>Senātus Populusque Rōmānus</i> (“the Senate and the Roman People”).</p>",
   "qp": {
    "id": "q-la-orth-abbr",
    "variants": [
     {
      "prompt": "What does <i>P.</i> stand for before a Roman name?",
      "options": [
       "<i>Paulus</i>, the name of the apostle",
       "<i>Pompeius</i>",
       "<i>Pūblius</i>",
       "<i>Prīmus</i>"
      ],
      "answer": 2,
      "explain": "<i>P.</i> is the abbreviation of <i>Pūblius</i>."
     },
     {
      "prompt": "Why does <i>C.</i> stand for <i>Gāius</i>?",
      "options": [
       "The name was spelled with a C in Greek",
       "C once had the sound of <i>g</i> as well",
       "It is a mistake of the scribes",
       "C stands for <i>Caesar</i>"
      ],
      "answer": 1,
      "explain": "The letter G was a later Roman invention."
     },
     {
      "prompt": "What is pronounced when <i>M. Tullius</i> is read aloud?",
      "options": [
       "<i>Mārcus Tullius</i>",
       "<i>Em Tullius</i>",
       "<i>Mille Tullius</i>",
       "<i>Tullius</i> alone"
      ],
      "answer": 0,
      "explain": "The full name is pronounced."
     }
    ]
   }
  }
 ]
};
