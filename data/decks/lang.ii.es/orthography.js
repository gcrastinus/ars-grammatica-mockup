window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ii.es/orthography"] = {
 "id": "lang.ii.es/orthography",
 "title": "Spanish Spelling: Letters, Sounds, and Punctuation",
 "sub": "The Spanish alphabet, how the sounds are spelled in Spain, the inverted question and exclamation marks, capitals, and older spellings",
 "sources": "Amparo Morales, presentation of the <i lang=\"es\">Ortografía de la lengua española</i> of 2010 for the Academies (2011); Real Academia Española, <i lang=\"es\">Ortografía de la lengua española</i> (1999), <i lang=\"es\">Nuevas normas de prosodia y ortografía</i> (1952; binding from 1959), and <i lang=\"es\">Ortografía de la lengua castellana</i> (1815); Julio Casares, “Las ‘Nuevas Normas de Prosodia y Ortografía’,” <i lang=\"es\">Boletín de la Real Academia Española</i> 38 (1958)",
 "panels": [
  {
   "id": "letters",
   "title": "The alphabet",
   "body": "<p><strong>The alphabet.</strong> The Spanish alphabet has twenty-seven letters: the twenty-six of English and <i lang=\"es\">ñ</i>, which comes after <i lang=\"es\">n</i>, as in <i lang=\"es\">año</i> (“year”) and <i lang=\"es\">España</i>. The letter <i lang=\"es\">ñ</i> began in the Middle Ages as a doubled <i lang=\"es\">nn</i> written short, with the second <i lang=\"es\">n</i> as a small mark above the first. The pairs <i lang=\"es\">ch</i>, <i lang=\"es\">ll</i>, and <i lang=\"es\">rr</i> each write one sound. Since 2010 the Academy counts <i lang=\"es\">ch</i> and <i lang=\"es\">ll</i> as digraphs (pairs of letters that write one sound), not as letters of their own, so that the alphabet has twenty-seven letters, where it had twenty-nine from 1803 to 2010. The letter <i lang=\"es\">h</i> is silent: <i lang=\"es\">hora</i> (“hour”), <i lang=\"es\">hacer</i> (“to do”). The letters <i lang=\"es\">b</i> and <i lang=\"es\">v</i> are pronounced alike: <i lang=\"es\">vaca</i> (“cow”) and <i lang=\"es\">baca</i> (“luggage rack”) sound the same, and the spelling of each word must be learned.</p>",
   "qp": {
    "id": "q-es-letters",
    "variants": [
     {
      "prompt": "How many letters has the Spanish alphabet?",
      "options": [
       "Twenty-six",
       "Twenty-nine",
       "Twenty-seven",
       "Thirty"
      ],
      "answer": 2,
      "explain": "The twenty-six letters of English and <i lang=\"es\">ñ</i>."
     },
     {
      "prompt": "How is the <i lang=\"es\">h</i> of <i lang=\"es\">hijo</i> (“son”) pronounced?",
      "options": [
       "Like English “h”",
       "It is silent",
       "Like Spanish <i lang=\"es\">j</i>",
       "Like English “ch”"
      ],
      "answer": 1,
      "explain": "Spanish <i lang=\"es\">h</i> is silent."
     },
     {
      "prompt": "Where did the letter <i lang=\"es\">ñ</i> come from?",
      "options": [
       "A Greek letter",
       "An Arabic letter",
       "A doubled <i lang=\"es\">nn</i> written short",
       "The letter <i lang=\"es\">g</i>"
      ],
      "answer": 2,
      "explain": "The second <i lang=\"es\">n</i> became the mark above the first."
     }
    ]
   },
   "src": "The origin of ñ (a doubled nn written short) is stated by the Academy’s Diccionario panhispánico de dudas (2005), entry ñ, 2: «El castellano medieval escogió el dígrafo nn, que se solía representar abreviadamente mediante una sola n con una rayita más o menos ondulada encima; así surgió la ñ»"
  },
  {
   "id": "sounds",
   "title": "Sounds and spellings",
   "body": "<p><strong>Sounds and spellings.</strong> Some Spanish sounds are spelled in two ways, according to the vowel that follows. In the standard Spanish of Spain, which is that of the north, center, and east of the country, <i lang=\"es\">z</i> before <i lang=\"es\">a</i>, <i lang=\"es\">o</i>, and <i lang=\"es\">u</i> and <i lang=\"es\">c</i> before <i lang=\"es\">e</i> and <i lang=\"es\">i</i> write the sound of English “th” in “thin”: <i lang=\"es\">zapato</i> (“shoe”), <i lang=\"es\">cielo</i> (“sky”). So <i lang=\"es\">caza</i> (“hunt”) and <i lang=\"es\">casa</i> (“house”) sound different there, though they sound alike in the southwest of Spain, in the Canary Islands, and throughout Spanish America. The sound of <i lang=\"es\">k</i> is written <i lang=\"es\">c</i> before <i lang=\"es\">a</i>, <i lang=\"es\">o</i>, and <i lang=\"es\">u</i>, and <i lang=\"es\">qu</i> before <i lang=\"es\">e</i> and <i lang=\"es\">i</i>: <i lang=\"es\">casa</i>, <i lang=\"es\">queso</i> (“cheese”). The hard <i lang=\"es\">g</i> is written <i lang=\"es\">gu</i> before <i lang=\"es\">e</i> and <i lang=\"es\">i</i>, with the <i lang=\"es\">u</i> silent: <i lang=\"es\">guerra</i> (“war”). When that <i lang=\"es\">u</i> is pronounced, it takes two dots, the diaeresis: <i lang=\"es\">pingüino</i> (“penguin”), <i lang=\"es\">vergüenza</i> (“shame”). Before <i lang=\"es\">e</i> and <i lang=\"es\">i</i>, <i lang=\"es\">g</i> sounds like <i lang=\"es\">j</i>, a harsh sound in the throat: <i lang=\"es\">gente</i> (“people”), <i lang=\"es\">jefe</i> (“boss”).</p>",
   "qp": {
    "id": "q-es-sounds",
    "variants": [
     {
      "prompt": "Which letters write the <i lang=\"es\">k</i> sound before <i lang=\"es\">e</i> and <i lang=\"es\">i</i>?",
      "options": [
       "<i lang=\"es\">c</i>",
       "<i lang=\"es\">k</i>",
       "<i lang=\"es\">cu</i>",
       "<i lang=\"es\">qu</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Queso</i>, <i lang=\"es\">quiero</i>."
     },
     {
      "prompt": "Why does <i lang=\"es\">cigüeña</i> (“stork”) have two dots over the <i lang=\"es\">u</i>?",
      "options": [
       "The <i lang=\"es\">u</i> is stressed",
       "The <i lang=\"es\">u</i> is long",
       "The <i lang=\"es\">u</i> is pronounced",
       "It marks a hiatus with <i lang=\"es\">e</i>"
      ],
      "answer": 2,
      "explain": "Without the dots, the <i lang=\"es\">u</i> after <i lang=\"es\">g</i> would be silent."
     },
     {
      "prompt": "In the standard Spanish of Spain, how is the <i lang=\"es\">z</i> of <i lang=\"es\">zapato</i> pronounced?",
      "options": [
       "Like English “z”",
       "Like English “s”",
       "Like “th” in “thin”",
       "It is silent"
      ],
      "answer": 2,
      "explain": "Where the sounds are kept apart, as in the north, center, and east of Spain, <i lang=\"es\">z</i> is the sound of “th” in “thin” and <i lang=\"es\">s</i> is the sound of <i lang=\"es\">s</i>."
     }
    ]
   }
  },
  {
   "id": "punctuation",
   "title": "Questions, exclamations, and capitals",
   "body": "<p><strong>Questions, exclamations, and capitals.</strong> Spanish marks a question and an exclamation at both ends, with an inverted mark at the beginning: <i lang=\"es\">¿Dónde vives?</i> (“Where do you live?”), <i lang=\"es\">¡Qué bonito!</i> (“How pretty!”). The Academy recommended the opening marks in 1754, in the second edition of its <i lang=\"es\">Ortografía</i>, so that a reader of a long sentence would know from the start that it is a question or an exclamation. Before that only the closing mark was written, and the opening mark became general later. Today the <i lang=\"es\">Ortografía</i> of 2010 treats leaving out the opening mark as an error. The inverted mark stands where the question or exclamation begins, which may be in the middle of a sentence: <i lang=\"es\">Si llueve, ¿vienes?</i> (“If it rains, are you coming?”). Spanish writes with a small letter the days of the week, the months, and the names of languages and peoples: <i lang=\"es\">el lunes 3 de enero</i> (“Monday, January 3”), <i lang=\"es\">hablo español</i> (“I speak Spanish”), <i lang=\"es\">los franceses</i> (“the French”).</p>",
   "qp": {
    "id": "q-es-punctuation",
    "variants": [
     {
      "prompt": "Where does the <i lang=\"es\">¿</i> go in <i lang=\"es\">Si tienes tiempo, ¿me ayudas?</i>",
      "options": [
       "At the start of the sentence",
       "At the end",
       "Nowhere",
       "Where the question begins"
      ],
      "answer": 3,
      "explain": "The question begins with <i lang=\"es\">me ayudas</i>."
     },
     {
      "prompt": "Which is correct?",
      "options": [
       "<i lang=\"es\">el Martes 5 de Mayo</i>",
       "<i lang=\"es\">el martes 5 de Mayo</i>",
       "<i lang=\"es\">el Martes 5 de mayo</i>",
       "<i lang=\"es\">el martes 5 de mayo</i>"
      ],
      "answer": 3,
      "explain": "Days and months take a small letter."
     },
     {
      "prompt": "When did the Academy first recommend the opening question mark?",
      "options": [
       "1754",
       "1492",
       "1713",
       "1959"
      ],
      "answer": 0,
      "explain": "In the second edition of its Ortografía; the opening mark became general later."
     }
    ]
   }
  },
  {
   "id": "older",
   "title": "Older spellings",
   "body": "<p><strong>Older spellings.</strong> Spanish spelling has been reformed several times, and older books look different. In older books the letter <i lang=\"es\">x</i> often wrote the harsh sound now written <i lang=\"es\">j</i>, so the first edition of Cervantes’s novel (1605) is titled <i lang=\"es\">Don Quixote</i>, now <i lang=\"es\">Quijote</i>. The <i lang=\"es\">Ortografía</i> of 1815 limited <i lang=\"es\">x</i> to its other sound, as in <i lang=\"es\">examen</i>, and moved the harsh sound to <i lang=\"es\">j</i> and <i lang=\"es\">g</i>. A few names kept the old <i lang=\"es\">x</i>, such as <i lang=\"es\">México</i> and <i lang=\"es\">Oaxaca</i>, which are still pronounced with the sound of <i lang=\"es\">j</i>; the <i lang=\"es\">Ortografía</i> of 1999 recommends <i lang=\"es\">México</i> over the variant <i lang=\"es\">Méjico</i>. In books printed before the Academy’s <i lang=\"es\">Nuevas normas de prosodia y ortografía</i>, approved in 1952 and binding from 1959, the verb forms of one syllable often carry an accent: <i lang=\"es\">fué</i>, <i lang=\"es\">dió</i>, <i lang=\"es\">vió</i>, which are now written <i lang=\"es\">fue</i>, <i lang=\"es\">dio</i>, and <i lang=\"es\">vio</i>. In 1815 the Academy itself prescribed an accent on <i lang=\"es\">a</i>, <i lang=\"es\">e</i>, <i lang=\"es\">o</i>, and <i lang=\"es\">u</i> when they stand alone as words, as in <i lang=\"es\">á la ida ó á la vuelta</i> (“on the way there or on the way back”); the accent on the preposition <i lang=\"es\">a</i> was dropped in 1911.</p>",
   "qp": {
    "id": "q-es-older",
    "variants": [
     {
      "prompt": "How did Cervantes print the name <i lang=\"es\">Quijote</i>?",
      "options": [
       "<i lang=\"es\">Quigote</i>",
       "<i lang=\"es\">Kijote</i>",
       "<i lang=\"es\">Quichote</i>",
       "<i lang=\"es\">Quixote</i>"
      ],
      "answer": 3,
      "explain": "The old <i lang=\"es\">x</i> wrote the sound now written <i lang=\"es\">j</i>."
     },
     {
      "prompt": "How is <i lang=\"es\">fué</i>, in an older book, written today?",
      "options": [
       "<i lang=\"es\">fue</i>",
       "<i lang=\"es\">fúe</i>",
       "<i lang=\"es\">fué</i>, unchanged",
       "<i lang=\"es\">fuè</i>"
      ],
      "answer": 0,
      "explain": "A word of one syllable takes no accent."
     },
     {
      "prompt": "Why is <i lang=\"es\">México</i> written with <i lang=\"es\">x</i>?",
      "options": [
       "Mexico kept the older spelling of its name",
       "The <i lang=\"es\">x</i> sounds like English “x”",
       "It is a Latin word",
       "It is a mistake"
      ],
      "answer": 0,
      "explain": "It is pronounced with the sound of <i lang=\"es\">j</i>."
     }
    ]
   }
  },
  {
   "id": "reform",
   "title": "The spelling of 2010",
   "body": "<p><strong>The spelling of 2010.</strong> The <i lang=\"es\">Ortografía</i> of 2010 made a few changes that older books and teachers may not follow. The adverb <i lang=\"es\">solo</i> (“only”) and the demonstratives <i lang=\"es\">este</i>, <i lang=\"es\">ese</i>, and <i lang=\"es\">aquel</i> (“this,” “that”) are now written without an accent, as the Academy recommends, even where the older rules wrote <i lang=\"es\">sólo</i> and <i lang=\"es\">éste</i> (those rules required the accent only where a sentence could be read in two ways). Words like <i lang=\"es\">guion</i> (“script”) and <i lang=\"es\">truhan</i> (“rogue”) are counted as one syllable for the written accent, whatever the speaker’s pronunciation, and so are written without an accent; before 2010 the accent was allowed for speakers who pronounce two syllables. The word <i lang=\"es\">o</i> (“or”) between numbers is no longer accented: <i lang=\"es\">3 o 4</i>. This course follows the spelling of 2010.</p>",
   "qp": {
    "id": "q-es-reform",
    "variants": [
     {
      "prompt": "How does the spelling of 2010 write “only”?",
      "options": [
       "<i lang=\"es\">sólo</i>",
       "<i lang=\"es\">sòlo</i>",
       "<i lang=\"es\">sóllo</i>",
       "<i lang=\"es\">solo</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"es\">Solo</i> is written without an accent."
     },
     {
      "prompt": "How does the spelling of 2010 write “script”?",
      "options": [
       "<i lang=\"es\">guion</i>",
       "<i lang=\"es\">guión</i>",
       "<i lang=\"es\">guíon</i>",
       "<i lang=\"es\">güion</i>"
      ],
      "answer": 0,
      "explain": "Guion is counted as one syllable for the written accent, so it takes none."
     },
     {
      "prompt": "Which spelling of “3 or 4” follows the rules of 2010?",
      "options": [
       "<i lang=\"es\">3 ó 4</i>",
       "<i lang=\"es\">3 o 4</i>",
       "<i lang=\"es\">3 ò 4</i>",
       "<i lang=\"es\">3 u 4</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">O</i> between numbers is no longer accented."
     }
    ]
   }
  }
 ]
};
