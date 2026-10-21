window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.de/order"] = {
 "id": "lang.v.de/order",
 "title": "Word Order and Dependence in German",
 "sub": "The place of the finite verb, the frame of the clause, and the dependences shown by the articles and endings",
 "sources": "Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "order-1",
   "title": "Word order",
   "body": "<p>In English the order of the words shows which noun is the subject and which is the object: in “the woman sees the king” the woman does the seeing, and if the two nouns change places, the king does. German shows the case by the article as well, and it fixes the place of the verb more strictly than English does. The finite verb of a German main clause stands in the second place: <i>der König gibt der Frau das Buch</i> (“the king gives the woman the book”), and <i>heute gibt der König der Frau das Buch</i> (“today the king gives the woman the book”). In a question without a question word, and in a command, it stands first: <i>gibt der König das Buch?</i> (“does the king give the book?”). In a clause after <i>dass</i> (“that”), <i>weil</i> (“because”), or <i>wenn</i> (“if” or “when”) it stands last: <i>weil der König der Frau das Buch gibt</i> (“because the king gives the woman the book”). An infinitive, a past participle, or a separable prefix goes to the end of the clause. Because the article shows the case, as the ending does in Latin, the object can stand first: <i>den König sieht die Frau</i> (“the woman sees the king”).</p>",
   "qp": {
    "id": "q-de-order-v2",
    "variants": [
     {
      "prompt": "Which sentence is correct for “tomorrow my brother is going to Munich”?",
      "options": [
       "<i>Morgen fährt mein Bruder nach München.</i>",
       "<i>Morgen mein Bruder fährt nach München.</i>",
       "<i>Morgen mein Bruder nach München fährt.</i>",
       "<i>Fährt morgen mein Bruder nach München.</i>"
      ],
      "answer": 0,
      "explain": "The finite verb of a main clause stands in the second place."
     },
     {
      "prompt": "In <i>Den Lehrer grüßt das Kind</i>, which word is the subject?",
      "options": [
       "<i>Lehrer</i>",
       "<i>grüßt</i>",
       "<i>den</i>",
       "<i>Kind</i>"
      ],
      "answer": 3,
      "explain": "<i>Den Lehrer</i> is accusative, the object, though it stands first; <i>das Kind</i> is the subject."
     },
     {
      "prompt": "Where does the past participle stand in a main clause?",
      "options": [
       "In the second place",
       "In the first place",
       "At the end of the clause",
       "Directly after the subject"
      ],
      "answer": 2,
      "explain": "An infinitive, a past participle, or a separable prefix goes to the end of the clause."
     }
    ]
   }
  },
  {
   "id": "dependence",
   "title": "Dependence in a German sentence",
   "body": "<p>In <i>Der alte Gärtner arbeitet langsam</i> (“the old gardener works slowly”) there are the same constructions as in a Latin sentence: <i>alte</i> depends on <i>Gärtner</i>, <i>arbeitet</i> depends on <i>Gärtner</i>, and <i>langsam</i> depends on <i>arbeitet</i>. The article depends on its noun as an adjective does. German shows many of these dependences by its articles and endings, as Latin does by its endings, and so the object can stand first: in <i>Den Gärtner sieht der Junge</i>, the accusative <i>den</i> shows that the gardener is the one seen.</p>\n<p>German also joins the parts of the verb in a frame around the rest of the clause: in <i>Der Junge hat den Gärtner gesehen</i>, the finite verb <i>hat</i> stands second and the participle <i>gesehen</i> last, and both depend on the subject.</p>",
   "qp": {
    "id": "q-de-order-dep",
    "variants": [
     {
      "prompt": "In <i>Die kleine Katze schläft ruhig</i>, on which word does <i>ruhig</i> depend?",
      "options": [
       "<i>Katze</i>",
       "<i>schläft</i>",
       "<i>kleine</i>",
       "<i>die</i>"
      ],
      "answer": 1,
      "explain": "An adverb depends on the verb."
     },
     {
      "prompt": "In <i>Den Hund beißt der Mann</i>, who does the biting?",
      "options": [
       "The dog",
       "Both",
       "The man",
       "It cannot be known"
      ],
      "answer": 2,
      "explain": "<i>Der Mann</i> is nominative; <i>den Hund</i> is accusative, though it stands first."
     },
     {
      "prompt": "In <i>Das Kind hat den Ball geworfen</i>, which two words form the frame of the verb?",
      "options": [
       "<i>Kind</i> and <i>Ball</i>",
       "<i>das</i> and <i>den</i>",
       "<i>hat</i> and <i>Ball</i>",
       "<i>hat</i> and <i>geworfen</i>"
      ],
      "answer": 3,
      "explain": "The finite verb stands second and the participle last."
     }
    ]
   }
  }
 ]
};
