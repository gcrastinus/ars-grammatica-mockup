window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.la/dependence"] = {
 "id": "lang.v.la/dependence",
 "title": "Dependence in the Latin Sentence",
 "sub": "Finding each dependence by the endings, and words placed apart",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>; Thomas of Erfurt, <i>Grammatica speculativa</i>",
 "panels": [
  {
   "id": "finding",
   "title": "Finding the dependences",
   "body": "<p>In <i lang=\"la\">Agricola dīligēns agrum bene colit</i> (“the diligent farmer tills the field well”) there are four dependences: <i lang=\"la\">dīligēns</i> depends on <i lang=\"la\">agricola</i>, with which it agrees; <i lang=\"la\">colit</i> depends on <i lang=\"la\">agricola</i>, its subject; <i lang=\"la\">colit</i> also depends on <i lang=\"la\">agrum</i>, its object, which it governs in the accusative; and <i lang=\"la\">bene</i> depends on <i lang=\"la\">colit</i>. A genitive depends on the noun that it limits (<i lang=\"la\">domus agricolae</i>), and a prepositional phrase depends, as a whole, on the word that it describes (<i lang=\"la\">in agrō labōrat</i>, where <i lang=\"la\">in agrō</i> depends on <i lang=\"la\">labōrat</i>).</p>\n<p>So the analysis of a Latin sentence finds each pair by the endings: an adjective by its agreement, an object by its case, a verb by its person and number.</p>",
   "qp": {
    "id": "q-la-dep-find",
    "variants": [
     {
      "prompt": "In <i lang=\"la\">Puella parva rosās carpit</i>, on which word does <i lang=\"la\">parva</i> depend?",
      "options": [
       "<i lang=\"la\">puella</i>",
       "<i lang=\"la\">rosās</i>",
       "<i lang=\"la\">carpit</i>",
       "on no word"
      ],
      "answer": 0,
      "explain": "<i lang=\"la\">Parva</i> agrees with <i lang=\"la\">puella</i> in gender, number, and case."
     },
     {
      "prompt": "In <i lang=\"la\">Mīles fortiter pugnat</i>, on which word does <i lang=\"la\">fortiter</i> depend?",
      "options": [
       "<i lang=\"la\">mīles</i>",
       "<i lang=\"la\">pugnat</i>",
       "on no word"
      ],
      "answer": 1,
      "explain": "An adverb depends on the verb."
     },
     {
      "prompt": "In <i lang=\"la\">Liber magistrī novus est</i>, on which word does <i lang=\"la\">magistrī</i> depend?",
      "options": [
       "<i lang=\"la\">novus</i>",
       "<i lang=\"la\">est</i>",
       "<i lang=\"la\">liber</i>",
       "on no word"
      ],
      "answer": 2,
      "explain": "The genitive depends on the noun that it limits."
     }
    ]
   }
  },
  {
   "id": "apart",
   "title": "Words placed apart",
   "body": "<p>Because the endings show which words belong together, Latin can separate them widely. In <i lang=\"la\">Magnam rēx in urbe habet domum</i> (“the king has a large house in the city”), <i lang=\"la\">magnam</i> stands first and <i lang=\"la\">domum</i> last, but <i lang=\"la\">magnam</i> depends on <i lang=\"la\">domum</i>, since both are feminine, singular, and accusative. This placing of related words apart is called hyperbaton, and the poets use it often.</p>\n<p>So in reading Latin we do not join each word to its neighbor. We join it to the word whose form answers to it, wherever that word stands.</p>",
   "qp": {
    "id": "q-la-dep-apart",
    "variants": [
     {
      "prompt": "In <i lang=\"la\">Altōs puer videt montēs</i>, on which word does <i lang=\"la\">altōs</i> depend?",
      "options": [
       "<i lang=\"la\">puer</i>",
       "<i lang=\"la\">videt</i>",
       "on no word",
       "<i lang=\"la\">montēs</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"la\">Altōs</i> and <i lang=\"la\">montēs</i> are both masculine, plural, and accusative."
     },
     {
      "prompt": "What is hyperbaton?",
      "options": [
       "The placing of related words apart",
       "The omission of the verb",
       "The repetition of a word",
       "The use of a noun as an adjective"
      ],
      "answer": 0,
      "explain": "Hyperbaton separates words that belong together in construction."
     },
     {
      "prompt": "How does a reader find the word on which a separated adjective depends?",
      "options": [
       "By the nearest noun",
       "By the agreement of the endings",
       "By the first noun in the sentence",
       "By the verb"
      ],
      "answer": 1,
      "explain": "The adjective depends on the noun whose gender, number, and case it shares."
     }
    ]
   }
  }
 ]
};
