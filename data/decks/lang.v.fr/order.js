window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.fr/order"] = {
 "id": "lang.v.fr/order",
 "title": "Word Order, Negation, and Dependence in French",
 "sub": "The order of subject, verb, and object, the place of the pronouns, negation, and the dependences of a French sentence",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse; Le Conjugueur",
 "panels": [
  {
   "id": "order-1",
   "title": "Word order",
   "body": "<p>French nouns, like English nouns, have no endings that show whether they are the subject or the object, so French shows the subject and the object mainly by their place. The ordinary order is subject, verb, object: <i lang=\"fr\">le roi voit la reine</i> (“the king sees the queen”), and <i lang=\"fr\">la reine voit le roi</i> (“the queen sees the king”) says the reverse. An object pronoun, however, stands before the verb, whereas in English it follows the verb: <i lang=\"fr\">le roi la voit</i> (“the king sees her”). A question can put the subject pronoun after the verb: <i lang=\"fr\">voit-il la reine ?</i> (“does he see the queen?”). Latin can change its order much more freely, because its endings show the case.</p>",
   "qp": {
    "id": "q-fr-order-order",
    "variants": [
     {
      "prompt": "In <i lang=\"fr\">Le chat suit l’enfant</i>, which word is the subject?",
      "options": [
       "<i lang=\"fr\">enfant</i>",
       "<i lang=\"fr\">suit</i>",
       "<i lang=\"fr\">le</i>",
       "<i lang=\"fr\">chat</i>"
      ],
      "answer": 3,
      "explain": "French shows the subject by its place before the verb."
     },
     {
      "prompt": "Which sentence is correct for “the teacher sees them”?",
      "options": [
       "<i lang=\"fr\">Le professeur les voit.</i>",
       "<i lang=\"fr\">Le professeur voit les.</i>",
       "<i lang=\"fr\">Le professeur voit eux.</i>",
       "<i lang=\"fr\">Les le professeur voit.</i>"
      ],
      "answer": 0,
      "explain": "An object pronoun stands before the verb."
     },
     {
      "prompt": "Which sentence is a question with the subject pronoun after the verb?",
      "options": [
       "<i lang=\"fr\">Elle chante bien.</i>",
       "<i lang=\"fr\">Chante-t-elle bien ?</i>",
       "<i lang=\"fr\">Elle chante-t-bien ?</i>",
       "<i lang=\"fr\">Chante elle-t bien ?</i>"
      ],
      "answer": 1,
      "explain": "In inversion the pronoun follows the verb with a hyphen; <i lang=\"fr\">-t-</i> is inserted between two vowels."
     }
    ]
   }
  },
  {
   "id": "order-2",
   "title": "Negation",
   "body": "<p>English negates a verb with one word, “not,” usually together with a helping verb: “he does not speak.” French negates a verb with two words, <i lang=\"fr\">ne</i> before the verb and <i lang=\"fr\">pas</i> after it: <i lang=\"fr\">il ne parle pas</i> (“he does not speak”). Other words can take the place of <i lang=\"fr\">pas</i>: <i lang=\"fr\">ne … jamais</i> (“never”), <i lang=\"fr\">ne … plus</i> (“no longer”), <i lang=\"fr\">ne … rien</i> (“nothing”), and <i lang=\"fr\">ne … personne</i> (“no one”). In a compound tense <i lang=\"fr\">pas</i> stands before the participle: <i lang=\"fr\">il n’a pas parlé</i> (“he has not spoken”). In everyday speech <i lang=\"fr\">ne</i> is often left out, but written French keeps it. Latin negates the verb with one word, <i lang=\"fr\">nōn</i>.</p>",
   "qp": {
    "id": "q-fr-order-neg",
    "variants": [
     {
      "prompt": "Which sentence is correct for “he never sings”?",
      "options": [
       "<i lang=\"fr\">Il jamais ne chante.</i>",
       "<i lang=\"fr\">Il ne chante jamais.</i>",
       "<i lang=\"fr\">Il ne jamais chante.</i>",
       "<i lang=\"fr\">Il chante ne jamais.</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Ne</i> stands before the verb and <i lang=\"fr\">jamais</i> after it."
     },
     {
      "prompt": "Where does <i lang=\"fr\">pas</i> stand in a compound tense?",
      "options": [
       "After the participle",
       "Before <i lang=\"fr\">ne</i>",
       "Before the participle",
       "At the end of the sentence"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Il n’a pas chanté</i>: <i lang=\"fr\">pas</i> stands after the auxiliary and before the participle."
     },
     {
      "prompt": "What does <i lang=\"fr\">Elle ne voit personne</i> mean?",
      "options": [
       "“she sees someone”",
       "“she sees no longer”",
       "“she does not see the person”",
       "“she sees no one”"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Ne … personne</i> means “no one.”"
     }
    ]
   }
  },
  {
   "id": "dependence",
   "title": "Dependence in a French sentence",
   "body": "<p>In <i lang=\"fr\">Le vieux jardinier travaille lentement</i> (“the old gardener works slowly”) there are the same constructions as in a Latin sentence: <i lang=\"fr\">vieux</i> depends on <i lang=\"fr\">jardinier</i>, <i lang=\"fr\">travaille</i> depends on <i lang=\"fr\">jardinier</i>, and <i lang=\"fr\">lentement</i> depends on <i lang=\"fr\">travaille</i>. The articles depend on their nouns as adjectives do. In French, however, the forms show fewer of these dependences than the Latin endings do, and the order shows more of them: the subject is known chiefly by its place before the verb, and the object by its place after it.</p>\n<p>So the analysis of a French sentence asks both what the forms show (the agreement of the adjective and of the verb) and what the order shows. Where both fail, as in <i lang=\"fr\">Pierre voit Paul</i>, only the order tells us that Pierre is the one who sees.</p>",
   "qp": {
    "id": "q-fr-order-dep",
    "variants": [
     {
      "prompt": "In <i lang=\"fr\">La petite fille chante doucement</i>, on which word does <i lang=\"fr\">doucement</i> depend?",
      "options": [
       "<i lang=\"fr\">fille</i>",
       "<i lang=\"fr\">petite</i>",
       "<i lang=\"fr\">chante</i>",
       "<i lang=\"fr\">la</i>"
      ],
      "answer": 2,
      "explain": "An adverb depends on the verb."
     },
     {
      "prompt": "In <i lang=\"fr\">Marie aide Jean</i>, what shows which person is the subject?",
      "options": [
       "The ending of <i lang=\"fr\">Marie</i>",
       "The order of the words",
       "The ending of <i lang=\"fr\">aide</i>",
       "The article"
      ],
      "answer": 1,
      "explain": "French nouns have no case endings, so the order shows the subject."
     },
     {
      "prompt": "In <i lang=\"fr\">Les grands arbres tombent</i>, on which word does <i lang=\"fr\">grands</i> depend?",
      "options": [
       "<i lang=\"fr\">arbres</i>",
       "<i lang=\"fr\">tombent</i>",
       "<i lang=\"fr\">les</i>",
       "on no word"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Grands</i> is masculine plural, as <i lang=\"fr\">arbres</i> is, and describes it."
     }
    ]
   }
  }
 ]
};
