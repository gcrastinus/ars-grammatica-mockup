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
   "body": "<p>In <i>Agricola dīligēns agrum bene colit</i> (“the diligent farmer tills the field well”) there are four dependences: <i>dīligēns</i> depends on <i>agricola</i>, with which it agrees; <i>colit</i> depends on <i>agricola</i>, its subject; <i>colit</i> also depends on <i>agrum</i>, its object, which it governs in the accusative; and <i>bene</i> depends on <i>colit</i>. A genitive depends on the noun that it limits (<i>domus agricolae</i>), and a prepositional phrase depends, as a whole, on the word that it describes (<i>in agrō labōrat</i>, where <i>in agrō</i> depends on <i>labōrat</i>).</p>\n<p>So the analysis of a Latin sentence finds each pair by the endings: an adjective by its agreement, an object by its case, a verb by its person and number.</p>",
   "qp": {
    "id": "q-la-dep-find",
    "variants": [
     {
      "prompt": "In <i>Puella parva rosās carpit</i>, on which word does <i>parva</i> depend?",
      "options": [
       "<i>puella</i>",
       "<i>rosās</i>",
       "<i>carpit</i>",
       "on no word"
      ],
      "answer": 0,
      "explain": "<i>Parva</i> agrees with <i>puella</i> in gender, number, and case."
     },
     {
      "prompt": "In <i>Mīles fortiter pugnat</i>, on which word does <i>fortiter</i> depend?",
      "options": [
       "<i>mīles</i>",
       "<i>pugnat</i>",
       "on no word"
      ],
      "answer": 1,
      "explain": "An adverb depends on the verb."
     },
     {
      "prompt": "In <i>Liber magistrī novus est</i>, on which word does <i>magistrī</i> depend?",
      "options": [
       "<i>novus</i>",
       "<i>est</i>",
       "<i>liber</i>",
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
   "body": "<p>Because the endings show which words belong together, Latin can separate them widely. In <i>Magnam rēx in urbe habet domum</i> (“the king has a large house in the city”), <i>magnam</i> stands first and <i>domum</i> last, but <i>magnam</i> depends on <i>domum</i>, since both are feminine, singular, and accusative. This placing of related words apart is called hyperbaton, and the poets use it often.</p>\n<p>So in reading Latin we do not join each word to its neighbor. We join it to the word whose form answers to it, wherever that word stands.</p>",
   "qp": {
    "id": "q-la-dep-apart",
    "variants": [
     {
      "prompt": "In <i>Altōs puer videt montēs</i>, on which word does <i>altōs</i> depend?",
      "options": [
       "<i>puer</i>",
       "<i>videt</i>",
       "on no word",
       "<i>montēs</i>"
      ],
      "answer": 3,
      "explain": "<i>Altōs</i> and <i>montēs</i> are both masculine, plural, and accusative."
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
