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
   "body": "<p>French nouns, like English nouns, have no endings that show whether they are the subject or the object, so French shows the subject and the object mainly by their place. The ordinary order is subject, verb, object: <i>le roi voit la reine</i> (“the king sees the queen”), and <i>la reine voit le roi</i> (“the queen sees the king”) says the reverse. An object pronoun, however, stands before the verb, whereas in English it follows the verb: <i>le roi la voit</i> (“the king sees her”). A question can put the subject pronoun after the verb: <i>voit-il la reine?</i> (“does he see the queen?”). Latin can change its order much more freely, because its endings show the case.</p>",
   "qp": {
    "id": "q-fr-order-order",
    "variants": [
     {
      "prompt": "In <i>Le chat suit l’enfant</i>, which word is the subject?",
      "options": [
       "<i>enfant</i>",
       "<i>suit</i>",
       "<i>le</i>",
       "<i>chat</i>"
      ],
      "answer": 3,
      "explain": "French shows the subject by its place before the verb."
     },
     {
      "prompt": "Which sentence is correct for “the teacher sees them”?",
      "options": [
       "<i>Le professeur les voit.</i>",
       "<i>Le professeur voit les.</i>",
       "<i>Le professeur voit eux.</i>",
       "<i>Les le professeur voit.</i>"
      ],
      "answer": 0,
      "explain": "An object pronoun stands before the verb."
     },
     {
      "prompt": "Which sentence is a question with the subject pronoun after the verb?",
      "options": [
       "<i>Elle chante bien.</i>",
       "<i>Chante-t-elle bien ?</i>",
       "<i>Elle chante-t-bien ?</i>",
       "<i>Chante elle-t bien ?</i>"
      ],
      "answer": 1,
      "explain": "In inversion the pronoun follows the verb with a hyphen; <i>-t-</i> is inserted between two vowels."
     }
    ]
   }
  },
  {
   "id": "order-2",
   "title": "Negation",
   "body": "<p>English negates a verb with one word, “not,” usually together with a helping verb: “he does not speak.” French negates a verb with two words, <i>ne</i> before the verb and <i>pas</i> after it: <i>il ne parle pas</i> (“he does not speak”). Other words can take the place of <i>pas</i>: <i>ne … jamais</i> (“never”), <i>ne … plus</i> (“no longer”), <i>ne … rien</i> (“nothing”), and <i>ne … personne</i> (“no one”). In a compound tense <i>pas</i> stands before the participle: <i>il n’a pas parlé</i> (“he has not spoken”). In everyday speech <i>ne</i> is often left out, but written French keeps it. Latin negates the verb with one word, <i>nōn</i>.</p>",
   "qp": {
    "id": "q-fr-order-neg",
    "variants": [
     {
      "prompt": "Which sentence is correct for “he never sings”?",
      "options": [
       "<i>Il jamais ne chante.</i>",
       "<i>Il ne chante jamais.</i>",
       "<i>Il ne jamais chante.</i>",
       "<i>Il chante ne jamais.</i>"
      ],
      "answer": 1,
      "explain": "<i>Ne</i> stands before the verb and <i>jamais</i> after it."
     },
     {
      "prompt": "Where does <i>pas</i> stand in a compound tense?",
      "options": [
       "After the participle",
       "Before <i>ne</i>",
       "Before the participle",
       "At the end of the sentence"
      ],
      "answer": 2,
      "explain": "<i>Il n’a pas chanté</i>: <i>pas</i> stands after the auxiliary and before the participle."
     },
     {
      "prompt": "What does <i>Elle ne voit personne</i> mean?",
      "options": [
       "“she sees someone”",
       "“she sees no longer”",
       "“she does not see the person”",
       "“she sees no one”"
      ],
      "answer": 3,
      "explain": "<i>Ne … personne</i> means “no one.”"
     }
    ]
   }
  },
  {
   "id": "dependence",
   "title": "Dependence in a French sentence",
   "body": "<p>In <i>Le vieux jardinier travaille lentement</i> (“the old gardener works slowly”) there are the same constructions as in a Latin sentence: <i>vieux</i> depends on <i>jardinier</i>, <i>travaille</i> depends on <i>jardinier</i>, and <i>lentement</i> depends on <i>travaille</i>. The articles depend on their nouns as adjectives do. In French, however, the forms show fewer of these dependences than the Latin endings do, and the order shows more of them: the subject is known chiefly by its place before the verb, and the object by its place after it.</p>\n<p>So the analysis of a French sentence asks both what the forms show (the agreement of the adjective and of the verb) and what the order shows. Where both fail, as in <i>Pierre voit Paul</i>, only the order tells us that Pierre is the one who sees.</p>",
   "qp": {
    "id": "q-fr-order-dep",
    "variants": [
     {
      "prompt": "In <i>La petite fille chante doucement</i>, on which word does <i>doucement</i> depend?",
      "options": [
       "<i>fille</i>",
       "<i>petite</i>",
       "<i>chante</i>",
       "<i>la</i>"
      ],
      "answer": 2,
      "explain": "An adverb depends on the verb."
     },
     {
      "prompt": "In <i>Marie aide Jean</i>, what shows which person is the subject?",
      "options": [
       "The ending of <i>Marie</i>",
       "The order of the words",
       "The ending of <i>aide</i>",
       "The article"
      ],
      "answer": 1,
      "explain": "French nouns have no case endings, so the order shows the subject."
     },
     {
      "prompt": "In <i>Les grands arbres tombent</i>, on which word does <i>grands</i> depend?",
      "options": [
       "<i>arbres</i>",
       "<i>tombent</i>",
       "<i>les</i>",
       "on no word"
      ],
      "answer": 0,
      "explain": "<i>Grands</i> is masculine plural, as <i>arbres</i> is, and describes it."
     }
    ]
   }
  }
 ]
};
