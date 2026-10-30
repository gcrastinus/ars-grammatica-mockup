window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-indecl.fr/compared"] = {
 "id": "lang.iii-indecl.fr/compared",
 "title": "French Articles and Contractions",
 "sub": "The partitive, de after a negative and a quantity, and the contractions with à and de",
 "sources": "Lawless; Larousse",
 "panels": [
  {
   "id": "compared-1",
   "title": "The three articles",
   "body": "<p>French says <i lang=\"fr\">Je mange du pain</i> (“I am eating bread,” or “some bread”), whereas Latin says only <i lang=\"fr\">pānem edō</i>, with no article at all. French has the definite article (<i lang=\"fr\">le</i>, <i lang=\"fr\">la</i>, <i lang=\"fr\">les</i>, “the”), the indefinite article (<i lang=\"fr\">un</i>, <i lang=\"fr\">une</i>, “a”; plural <i lang=\"fr\">des</i>, “some”), and the <strong>partitive</strong> article (<i lang=\"fr\">du</i>, <i lang=\"fr\">de la</i>, <i lang=\"fr\">des</i>), which is used for an unmeasured amount, as in <i lang=\"fr\">du pain</i>. A French noun seldom stands without one of them.</p>\n<p>The definite article runs together with the prepositions <i lang=\"fr\">à</i> (“to,” “at”) and <i lang=\"fr\">de</i> (“of,” “from”): <i lang=\"fr\">au</i> for <i lang=\"fr\">à le</i>, <i lang=\"fr\">aux</i> for <i lang=\"fr\">à les</i>, <i lang=\"fr\">du</i> for <i lang=\"fr\">de le</i>, and <i lang=\"fr\">des</i> for <i lang=\"fr\">de les</i>. French also has two pronouns that Latin lacks as separate words, <i lang=\"fr\">en</i> and <i lang=\"fr\">y</i>, which stand for a phrase with <i lang=\"fr\">de</i> or <i lang=\"fr\">à</i>: <i lang=\"fr\">J’en veux</i> (“I want some”), <i lang=\"fr\">J’y vais</i> (“I am going there”).</p>",
   "qp": {
    "id": "q-fr-articles",
    "variants": [
     {
      "prompt": "Choose the article: <i lang=\"fr\">Elle achète ___ fromage</i> (“She is buying some cheese”).",
      "options": [
       "<i lang=\"fr\">le</i>",
       "<i lang=\"fr\">du</i>",
       "<i lang=\"fr\">de la</i>",
       "<i lang=\"fr\">des</i>"
      ],
      "answer": 1,
      "explain": "An unmeasured amount of a masculine noun takes the partitive <i lang=\"fr\">du</i>."
     },
     {
      "prompt": "What does <i lang=\"fr\">J’y pense</i> mean?",
      "options": [
       "“I am thinking of some”",
       "“I think so”",
       "“I am thinking about it”",
       "“I am thinking of him”"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Y</i> stands for a phrase with <i lang=\"fr\">à</i>: <i lang=\"fr\">je pense à cela</i>."
     },
     {
      "prompt": "What is <i lang=\"fr\">de</i> with <i lang=\"fr\">les</i>?",
      "options": [
       "<i lang=\"fr\">du</i>",
       "<i lang=\"fr\">aux</i>",
       "<i lang=\"fr\">de les</i>",
       "<i lang=\"fr\">des</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">De</i> with <i lang=\"fr\">les</i> contracts to <i lang=\"fr\">des</i>."
     }
    ]
   }
  },
  {
   "id": "partitive-de",
   "title": "The partitive after a negative and a quantity",
   "body": "<p>“I have some bread,” <i lang=\"fr\">j’ai du pain</i>; but “I have no bread,” <i lang=\"fr\">je n’ai pas de pain</i>. After a negative, the partitive and the indefinite article become plain <i lang=\"fr\">de</i> (<i lang=\"fr\">d’</i> before a vowel): <i lang=\"fr\">il ne boit pas de vin</i> (“he drinks no wine”); <i lang=\"fr\">elle n’a pas d’amis</i> (“she has no friends”). The same <i lang=\"fr\">de</i> stands after words of quantity: <i lang=\"fr\">beaucoup de pain</i> (“a lot of bread”), <i lang=\"fr\">un peu d’eau</i> (“a little water”), <i lang=\"fr\">trop de travail</i>, <i lang=\"fr\">assez de temps</i>, <i lang=\"fr\">une bouteille de lait</i>. The definite article stays, however, after a negative with a verb of liking (<i lang=\"fr\">je n’aime pas le café</i>, “I don’t like coffee”) and after <i lang=\"fr\">être</i> (<i lang=\"fr\">ce n’est pas du vin</i>, “that is not wine”). In careful writing, <i lang=\"fr\">de</i> also replaces <i lang=\"fr\">des</i> before a plural adjective that stands before its noun: <i lang=\"fr\">de bons amis</i>.</p>",
   "qp": {
    "id": "q-fr-partitive-de",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"fr\">Nous n’avons pas ___ argent</i> (“We have no money”).",
      "options": [
       "<i lang=\"fr\">d’</i>",
       "<i lang=\"fr\">de l’</i>",
       "<i lang=\"fr\">du</i>",
       "<i lang=\"fr\">l’</i>"
      ],
      "answer": 0,
      "explain": "After a negative the partitive becomes plain <i lang=\"fr\">de</i>, <i lang=\"fr\">d’</i> before a vowel."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">beaucoup ___ livres</i> (“many books”).",
      "options": [
       "<i lang=\"fr\">des</i>",
       "<i lang=\"fr\">les</i>",
       "<i lang=\"fr\">du</i>",
       "<i lang=\"fr\">de</i>"
      ],
      "answer": 3,
      "explain": "After a word of quantity the partitive becomes plain <i lang=\"fr\">de</i>."
     },
     {
      "prompt": "Why does <i lang=\"fr\">Je n’aime pas le thé</i> keep <i lang=\"fr\">le</i>?",
      "options": [
       "<i lang=\"fr\">Thé</i> is feminine",
       "The partitive is never used with drinks",
       "A verb of liking takes the definite article even after a negative",
       "<i lang=\"fr\">Ne … pas</i> always takes <i lang=\"fr\">le</i>"
      ],
      "answer": 2,
      "explain": "After verbs of liking and preferring, the definite article names the whole kind and stays after a negative."
     }
    ]
   }
  },
  {
   "id": "contractions",
   "title": "The contractions, and the pronouns en and y",
   "body": "<p>The definite article runs together with <i lang=\"fr\">à</i> and <i lang=\"fr\">de</i> when it is <i lang=\"fr\">le</i> or <i lang=\"fr\">les</i>: <i lang=\"fr\">à le</i> becomes <i lang=\"fr\">au</i>, <i lang=\"fr\">à les</i> becomes <i lang=\"fr\">aux</i>, <i lang=\"fr\">de le</i> becomes <i lang=\"fr\">du</i>, and <i lang=\"fr\">de les</i> becomes <i lang=\"fr\">des</i>, as we have seen. <i lang=\"fr\">À la</i>, <i lang=\"fr\">à l’</i>, <i lang=\"fr\">de la</i>, and <i lang=\"fr\">de l’</i> do not contract. So <i lang=\"fr\">du</i> and <i lang=\"fr\">des</i> each have two uses, as partitive articles and as contractions, and the sentence shows which: in <i lang=\"fr\">je mange du pain</i>, <i lang=\"fr\">du</i> is partitive (“some bread”), whereas in <i lang=\"fr\">le prix du pain</i> it is <i lang=\"fr\">de</i> with <i lang=\"fr\">le</i> (“the price of the bread”).</p>\n<p>The pronoun <i lang=\"fr\">en</i> takes the place of <i lang=\"fr\">de</i> with what follows, including a partitive: <i lang=\"fr\">J’en veux</i> (“I want some”), <i lang=\"fr\">j’en viens</i> (“I come from there”), <i lang=\"fr\">il en parle</i> (“he speaks of it”); and with a number it keeps the number: <i lang=\"fr\">j’en ai trois</i> (“I have three of them”). The pronoun <i lang=\"fr\">y</i> takes the place of <i lang=\"fr\">à</i> with a thing or a place: <i lang=\"fr\">j’y vais</i> (“I am going there”), <i lang=\"fr\">il y pense</i> (“he thinks about it”). With a person, French uses <i lang=\"fr\">lui</i> or <i lang=\"fr\">leur</i> in place of <i lang=\"fr\">y</i>: <i lang=\"fr\">je lui parle</i>, not <i lang=\"fr\">j’y parle</i>.</p>",
   "qp": {
    "id": "q-fr-contractions",
    "variants": [
     {
      "prompt": "In <i lang=\"fr\">la porte du jardin</i>, what is <i lang=\"fr\">du</i>?",
      "options": [
       "the partitive, “some”",
       "<i lang=\"fr\">à</i> with <i lang=\"fr\">le</i>",
       "the indefinite article",
       "<i lang=\"fr\">de</i> with <i lang=\"fr\">le</i>, “of the”"
      ],
      "answer": 3,
      "explain": "“The garden gate”: <i lang=\"fr\">du</i> is the contraction of <i lang=\"fr\">de le</i>."
     },
     {
      "prompt": "Choose the pronoun: <i lang=\"fr\">Tu as des frères ? Oui, j’___ ai deux</i> (“Yes, I have two”).",
      "options": [
       "<i lang=\"fr\">en</i>",
       "<i lang=\"fr\">y</i>",
       "<i lang=\"fr\">les</i>",
       "<i lang=\"fr\">leur</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">En</i> stands for <i lang=\"fr\">de</i> with what follows, and keeps the number: <i lang=\"fr\">j’en ai deux</i>."
     },
     {
      "prompt": "Choose the pronoun: <i lang=\"fr\">Tu vas à Lyon ? Oui, j’___ vais demain</i>.",
      "options": [
       "<i lang=\"fr\">en</i>",
       "<i lang=\"fr\">y</i>",
       "<i lang=\"fr\">lui</i>",
       "<i lang=\"fr\">le</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Y</i> stands for <i lang=\"fr\">à</i> with a place."
     }
    ]
   }
  }
 ]
};
