window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vii.grc/tropes"] = {
 "id": "lang.vii.grc/tropes",
 "title": "Tropes and Schemes in Greek",
 "sub": "Metaphor, metonymy, synecdoche, and irony, and anaphora, chiasmus, antithesis, and asyndeton, in Homer, Plato, Sophocles, and others",
 "sources": "Homer, <i>Iliad</i> and <i>Odyssey</i>; Plato, <i>Republic</i>; Sophocles, <i>Antigone</i>; Plutarch, <i>Caesar</i>; Mark; the prose quoted in Jowett’s <i>Republic</i>, Perrin’s Plutarch (Loeb), and the King James Version; the other translations are the course’s own plain translations",
 "panels": [
  {
   "id": "tropes",
   "title": "Four tropes",
   "body": "<p>A trope, as we have seen, carries a word from its proper signification to another. Greek poetry is full of tropes that became fixed phrases, and the four chief kinds can be seen in Homer and Plato:</p>\n<p><strong>Metaphor</strong>: a word used for something it resembles: “rosy-fingered Dawn” (<i lang=\"grc\">ῥοδοδάκτυλος Ἠώς</i>; <i lang=\"grc\">Odyssey</i> II.1), where the fingers of the dawn are the first rays of light<br>\n<strong>Metonymy</strong>: a name put for something closely connected with it: “Enyalius is impartial, and slays the slayer” (<i lang=\"grc\">ξυνὸς Ἐνυάλιος, καί τε κτανέοντα κατέκτα</i>; <i lang=\"grc\">Iliad</i> XVIII.309), where the war god’s name stands for war<br>\n<strong>Synecdoche</strong>: the part put for the whole: Penelope longs for “such a head” (<i lang=\"grc\">τοίην γὰρ κεφαλὴν ποθέω</i>; <i lang=\"grc\">Odyssey</i> I.343), that is, for so dear a person<br>\n<strong>Irony</strong>: saying the contrary of what is meant, or less than is meant: Thrasymachus answers Socrates’ professed ignorance, “that’s your ironical style!” (<i lang=\"grc\">αὕτη ’κείνη ἡ εἰωθυῖα εἰρωνεία Σωκράτους</i>; <i lang=\"grc\">Republic</i> 337a)</p>\n<p>The Greek word <i lang=\"grc\">εἰρωνεία</i> first meant a pretense of knowing less than one knows, and Plato’s Socrates gave the word its fame.</p>",
   "qp": {
    "id": "q-grc-trope",
    "variants": [
     {
      "prompt": "What trope is <i lang=\"grc\">ἔπεα πτερόεντα</i>, “winged words”?",
      "options": [
       "Metonymy, a name for something connected",
       "Synecdoche",
       "Metaphor",
       "Irony"
      ],
      "answer": 2,
      "explain": "Words are said to have wings by likeness: they fly swiftly."
     },
     {
      "prompt": "What trope puts the war god’s name for war?",
      "options": [
       "Synecdoche, the part for the whole",
       "Metonymy",
       "Metaphor",
       "Irony"
      ],
      "answer": 1,
      "explain": "The god is closely connected with war, not like it."
     },
     {
      "prompt": "What did <i lang=\"grc\">εἰρωνεία</i> first mean?",
      "options": [
       "A pretense of knowing less than one knows",
       "A word carried over by likeness",
       "A figure of sound",
       "A long comparison"
      ],
      "answer": 0,
      "explain": "Plato’s Socrates made the word famous."
     }
    ]
   }
  },
  {
   "id": "schemes",
   "title": "Four schemes",
   "body": "<p>A scheme, or figure of words, arranges words that keep their proper sense. Four of the commonest are:</p>\n<p><strong>Anaphora</strong>: the same word at the head of successive members: Homer repeats the name of a minor hero three times, <i lang=\"grc\">Νιρεὺς … Νιρεὺς … Νιρεύς</i> (<i lang=\"grc\">Iliad</i> II.671–673), to give him a fame he lacks in battle<br>\n<strong>Chiasmus</strong>: two members whose terms are repeated in reverse order: “the sabbath was made for man, and not man for the sabbath” (<i lang=\"grc\">τὸ σάββατον διὰ τὸν ἄνθρωπον ἐγένετο καὶ οὐχ ὁ ἄνθρωπος διὰ τὸ σάββατον</i>; Mark 2:27)<br>\n<strong>Antithesis</strong>: opposed ideas in matching form: Antigone says, “I was not born to join in hating, but in loving” (<i lang=\"grc\">οὔτοι συνέχθειν, ἀλλὰ συμφιλεῖν ἔφυν</i>; Sophocles, <i lang=\"grc\">Antigone</i> 523)<br>\n<strong>Asyndeton</strong>: members set side by side without conjunctions: Caesar’s report, as Plutarch gives it in Greek, “Came, saw, conquered” (<i lang=\"grc\">ἦλθον, εἶδον, ἐνίκησα</i>; <i lang=\"grc\">Caesar</i> 50)</p>",
   "qp": {
    "id": "q-grc-scheme",
    "variants": [
     {
      "prompt": "What scheme repeats terms in reverse order, A B, B A?",
      "options": [
       "Anaphora, at the head of each member",
       "Chiasmus",
       "Asyndeton",
       "Antithesis"
      ],
      "answer": 1,
      "explain": "The name comes from the letter <i lang=\"grc\">χ</i>, crossed."
     },
     {
      "prompt": "In <i lang=\"grc\">οὔτοι συνέχθειν, ἀλλὰ συμφιλεῖν ἔφυν</i>, what is set against what?",
      "options": [
       "Birth and death, by metonymy",
       "Two persons",
       "Hating and loving",
       "Two times"
      ],
      "answer": 2,
      "explain": "The verbs are built alike and opposed."
     },
     {
      "prompt": "What does asyndeton leave out?",
      "options": [
       "The verbs of each member",
       "The subject",
       "The repeated word at the head",
       "The conjunctions"
      ],
      "answer": 3,
      "explain": "The sentence <i lang=\"grc\">ἦλθον, εἶδον, ἐνίκησα.</i>"
     }
    ]
   }
  }
 ]
};
