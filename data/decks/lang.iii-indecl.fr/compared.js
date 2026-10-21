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
   "body": "<p>French says <i>Je mange du pain</i> (“I am eating bread,” or “some bread”), whereas Latin says only <i>pānem edō</i>, with no article at all. French has the definite article (<i>le</i>, <i>la</i>, <i>les</i>, “the”), the indefinite article (<i>un</i>, <i>une</i>, “a”; plural <i>des</i>, “some”), and the <strong>partitive</strong> article (<i>du</i>, <i>de la</i>, <i>des</i>), which is used for an unmeasured amount, as in <i>du pain</i>. A French noun seldom stands without one of them.</p>\n<p>The definite article runs together with the prepositions <i>à</i> (“to,” “at”) and <i>de</i> (“of,” “from”): <i>au</i> for <i>à le</i>, <i>aux</i> for <i>à les</i>, <i>du</i> for <i>de le</i>, and <i>des</i> for <i>de les</i>. French also has two pronouns that Latin lacks as separate words, <i>en</i> and <i>y</i>, which stand for a phrase with <i>de</i> or <i>à</i>: <i>J’en veux</i> (“I want some”), <i>J’y vais</i> (“I am going there”).</p>",
   "qp": {
    "id": "q-fr-articles",
    "variants": [
     {
      "prompt": "Choose the article: <i>Elle achète ___ fromage</i> (“She is buying some cheese”).",
      "options": [
       "<i>le</i>",
       "<i>du</i>",
       "<i>de la</i>",
       "<i>des</i>"
      ],
      "answer": 1,
      "explain": "An unmeasured amount of a masculine noun takes the partitive <i>du</i>."
     },
     {
      "prompt": "What does <i>J’y pense</i> mean?",
      "options": [
       "“I am thinking of some”",
       "“I think so”",
       "“I am thinking about it”",
       "“I am thinking of him”"
      ],
      "answer": 2,
      "explain": "<i>Y</i> stands for a phrase with <i>à</i>: <i>je pense à cela</i>."
     },
     {
      "prompt": "What is <i>de</i> with <i>les</i>?",
      "options": [
       "<i>du</i>",
       "<i>aux</i>",
       "<i>de les</i>",
       "<i>des</i>"
      ],
      "answer": 3,
      "explain": "<i>De</i> with <i>les</i> contracts to <i>des</i>."
     }
    ]
   }
  },
  {
   "id": "partitive-de",
   "title": "The partitive after a negative and a quantity",
   "body": "<p>“I have some bread,” <i>j’ai du pain</i>; but “I have no bread,” <i>je n’ai pas de pain</i>. After a negative, the partitive and the indefinite article become plain <i>de</i> (<i>d’</i> before a vowel): <i>il ne boit pas de vin</i> (“he drinks no wine”); <i>elle n’a pas d’amis</i> (“she has no friends”). The same <i>de</i> stands after words of quantity: <i>beaucoup de pain</i> (“a lot of bread”), <i>un peu d’eau</i> (“a little water”), <i>trop de travail</i>, <i>assez de temps</i>, <i>une bouteille de lait</i>. The definite article stays, however, after a negative with a verb of liking (<i>je n’aime pas le café</i>, “I don’t like coffee”) and after <i>être</i> (<i>ce n’est pas du vin</i>, “that is not wine”). In careful writing, <i>de</i> also replaces <i>des</i> before a plural adjective that stands before its noun: <i>de bons amis</i>.</p>",
   "qp": {
    "id": "q-fr-partitive-de",
    "variants": [
     {
      "prompt": "Choose the form: <i>Nous n’avons pas ___ argent</i> (“We have no money”).",
      "options": [
       "<i>d’</i>",
       "<i>de l’</i>",
       "<i>du</i>",
       "<i>l’</i>"
      ],
      "answer": 0,
      "explain": "After a negative the partitive becomes plain <i>de</i>, <i>d’</i> before a vowel."
     },
     {
      "prompt": "Choose the form: <i>beaucoup ___ livres</i> (“many books”).",
      "options": [
       "<i>des</i>",
       "<i>les</i>",
       "<i>du</i>",
       "<i>de</i>"
      ],
      "answer": 3,
      "explain": "After a word of quantity, plain <i>de</i>."
     },
     {
      "prompt": "Why does <i>Je n’aime pas le thé</i> keep <i>le</i>?",
      "options": [
       "<i>Thé</i> is feminine",
       "The partitive is never used with drinks",
       "A verb of liking takes the definite article even after a negative",
       "<i>Ne … pas</i> always takes <i>le</i>"
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
   "body": "<p>The definite article runs together with <i>à</i> and <i>de</i> when it is <i>le</i> or <i>les</i>: <i>à le</i> becomes <i>au</i>, <i>à les</i> becomes <i>aux</i>, <i>de le</i> becomes <i>du</i>, and <i>de les</i> becomes <i>des</i>, as we have seen. <i>À la</i>, <i>à l’</i>, <i>de la</i>, and <i>de l’</i> do not contract. So <i>du</i> and <i>des</i> each have two uses, as partitive articles and as contractions, and the sentence shows which: in <i>je mange du pain</i>, <i>du</i> is partitive (“some bread”), whereas in <i>le prix du pain</i> it is <i>de</i> with <i>le</i> (“the price of the bread”).</p>\n<p>The pronoun <i>en</i> takes the place of <i>de</i> with what follows, including a partitive: <i>J’en veux</i> (“I want some”), <i>j’en viens</i> (“I come from there”), <i>il en parle</i> (“he speaks of it”); and with a number it keeps the number: <i>j’en ai trois</i> (“I have three of them”). The pronoun <i>y</i> takes the place of <i>à</i> with a thing or a place: <i>j’y vais</i> (“I am going there”), <i>il y pense</i> (“he thinks about it”). With a person, French uses <i>lui</i> or <i>leur</i> in place of <i>y</i>: <i>je lui parle</i>, not <i>j’y parle</i>.</p>",
   "qp": {
    "id": "q-fr-contractions",
    "variants": [
     {
      "prompt": "In <i>la porte du jardin</i>, what is <i>du</i>?",
      "options": [
       "the partitive, “some”",
       "<i>à</i> with <i>le</i>",
       "the indefinite article",
       "<i>de</i> with <i>le</i>, “of the”"
      ],
      "answer": 3,
      "explain": "“The garden gate”: <i>du</i> is the contraction of <i>de le</i>."
     },
     {
      "prompt": "Choose the pronoun: <i>Tu as des frères? Oui, j’___ ai deux</i> (“Yes, I have two”).",
      "options": [
       "<i>en</i>",
       "<i>y</i>",
       "<i>les</i>",
       "<i>leur</i>"
      ],
      "answer": 0,
      "explain": "<i>En</i> stands for <i>de</i> with what follows, and keeps the number: <i>j’en ai deux</i>."
     },
     {
      "prompt": "Choose the pronoun: <i>Tu vas à Lyon? Oui, j’___ vais demain</i>.",
      "options": [
       "<i>en</i>",
       "<i>y</i>",
       "<i>lui</i>",
       "<i>le</i>"
      ],
      "answer": 1,
      "explain": "<i>Y</i> stands for <i>à</i> with a place."
     }
    ]
   }
  }
 ]
};
