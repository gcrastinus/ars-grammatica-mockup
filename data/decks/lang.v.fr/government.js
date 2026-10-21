window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.fr/government"] = {
 "id": "lang.v.fr/government",
 "title": "Pronouns, Prepositions, and Government in French",
 "sub": "The object pronouns and the stressed pronouns, à and de in place of the cases, and the prepositions with place names",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse; Le Conjugueur",
 "panels": [
  {
   "id": "pronouns",
   "title": "The object pronouns",
   "body": "<p>A French noun has no case, but the personal pronoun keeps separate forms for the subject, the direct object, and the indirect object. For the third person the forms are <i>il</i>, <i>le</i>, <i>lui</i> (masculine singular), <i>elle</i>, <i>la</i>, <i>lui</i> (feminine singular), and <i>ils</i> or <i>elles</i>, <i>les</i>, <i>leur</i> (plural); the first and second persons have <i>me</i>, <i>te</i>, <i>nous</i>, <i>vous</i> for both objects. The object pronouns stand before the verb: <i>je la regarde</i> (“I look at her”), <i>je lui écris</i> (“I write to him” or “to her”). Before a vowel, <i>me</i>, <i>te</i>, <i>le</i>, and <i>la</i> become <i>m’</i>, <i>t’</i>, <i>l’</i>.</p>\n<p>The stressed pronouns <i>moi</i>, <i>toi</i>, <i>lui</i>, <i>elle</i>, <i>nous</i>, <i>vous</i>, <i>eux</i>, <i>elles</i> are used after a preposition, alone, and for emphasis: <i>chez elle</i> (“at her house”), <i>sans eux</i> (“without them”), <i>C’est moi</i> (“It is I”). In an affirmative command the object pronoun follows the verb with a hyphen, and <i>me</i> becomes <i>moi</i>: <i>Écoute-moi</i> (“Listen to me”).</p>",
   "qp": {
    "id": "q-fr-gov-pron",
    "variants": [
     {
      "prompt": "Which form completes <i>Je ______ téléphone ce soir</i> (“I am telephoning them tonight”)?",
      "options": [
       "<i>les</i>",
       "<i>eux</i>",
       "<i>leur</i>",
       "<i>leurs</i>"
      ],
      "answer": 2,
      "explain": "<i>Téléphoner</i> takes <i>à</i>, so “them” is the indirect object <i>leur</i>."
     },
     {
      "prompt": "Which form completes <i>Elle travaille avec ______</i> (“she works with us”)?",
      "options": [
       "<i>notre</i>",
       "<i>nous</i>",
       "<i>nos</i>",
       "<i>on</i>"
      ],
      "answer": 1,
      "explain": "After a preposition the stressed pronoun is used; for “us” it is <i>nous</i>."
     },
     {
      "prompt": "Which sentence is correct for “Look at me!” (to one person)?",
      "options": [
       "<i>Regarde-moi !</i>",
       "<i>Regarde-me !</i>",
       "<i>Me regarde !</i>",
       "<i>Regarde-je !</i>"
      ],
      "answer": 0,
      "explain": "In an affirmative command the pronoun follows the verb, and <i>me</i> becomes <i>moi</i>."
     }
    ]
   }
  },
  {
   "id": "a-de",
   "title": "À and de in place of the cases",
   "body": "<p>Where Latin uses the dative and the genitive, French uses the prepositions <i>à</i> and <i>de</i>. The indirect object takes <i>à</i>: <i>Il offre des fleurs à sa mère</i> (“he gives flowers to his mother”). Possession takes <i>de</i>: <i>la voiture de mon père</i> (“my father’s car”). With the definite article, <i>à</i> and <i>de</i> contract: <i>à</i> + <i>le</i> = <i>au</i>, <i>à</i> + <i>les</i> = <i>aux</i>, <i>de</i> + <i>le</i> = <i>du</i>, <i>de</i> + <i>les</i> = <i>des</i>; but <i>à la</i>, <i>à l’</i>, <i>de la</i>, and <i>de l’</i> do not contract: <i>au professeur</i>, <i>aux élèves</i>, <i>du professeur</i>, <i>des élèves</i>, <i>à l’enfant</i>.</p>\n<p>Some verbs govern <i>à</i> or <i>de</i> where English has a direct object, and each must be learned with its preposition: <i>obéir à</i> (“obey”), <i>ressembler à</i> (“resemble”), <i>se souvenir de</i> (“remember”), <i>avoir besoin de</i> (“need”). So we say <i>il obéit à son père</i> and <i>elle se souvient de son enfance</i>.</p>",
   "qp": {
    "id": "q-fr-gov-ade",
    "variants": [
     {
      "prompt": "Which form completes <i>Il parle ______ élèves</i> (“he speaks to the pupils”)?",
      "options": [
       "<i>à les</i>",
       "<i>des</i>",
       "<i>au</i>",
       "<i>aux</i>"
      ],
      "answer": 3,
      "explain": "<i>À</i> and <i>les</i> contract to <i>aux</i>."
     },
     {
      "prompt": "Which phrase is correct for “the teacher’s book”?",
      "options": [
       "<i>le livre du professeur</i>",
       "<i>le livre de le professeur</i>",
       "<i>le livre au professeur</i>",
       "<i>le professeur livre</i>"
      ],
      "answer": 0,
      "explain": "Possession takes <i>de</i>, and <i>de</i> and <i>le</i> contract to <i>du</i>."
     },
     {
      "prompt": "Which sentence is correct for “the child resembles his mother”?",
      "options": [
       "<i>L’enfant ressemble sa mère.</i>",
       "<i>L’enfant ressemble à sa mère.</i>",
       "<i>L’enfant ressemble de sa mère.</i>",
       "<i>L’enfant se ressemble sa mère.</i>"
      ],
      "answer": 1,
      "explain": "<i>Ressembler</i> governs <i>à</i>."
     }
    ]
   }
  },
  {
   "id": "places",
   "title": "The prepositions with place names",
   "body": "<p>English says “in” and “to” for both cities and countries, but French chooses the preposition by the kind of name. Before the name of a city French uses <i>à</i>, both for place where and for place to which: <i>à Lyon</i> (“in Lyon,” “to Lyon”). Before a feminine country, and before a country whose name begins with a vowel, it uses <i>en</i>: <i>en Italie</i>, <i>en Iran</i>. Before a masculine country it uses <i>au</i>, and before a plural name <i>aux</i>: <i>au Japon</i>, <i>aux Pays-Bas</i>.</p>\n<p>For place from which, French uses <i>de</i> (<i>d’</i> before a vowel) with cities and feminine countries, and <i>du</i> or <i>des</i> with masculine and plural names: <i>de Lyon</i>, <i>d’Italie</i>, <i>du Japon</i>, <i>des Pays-Bas</i>. <i>Dans</i> (“in,” “inside”) is used with an article for a place enclosed: <i>dans la boîte</i> (“in the box”).</p>",
   "qp": {
    "id": "q-fr-gov-places",
    "variants": [
     {
      "prompt": "Which form completes <i>Elle habite ______ Portugal</i> (“she lives in Portugal”)?",
      "options": [
       "<i>en</i>",
       "<i>au</i>",
       "<i>à</i>",
       "<i>dans</i>"
      ],
      "answer": 1,
      "explain": "<i>Portugal</i> is a masculine country, so French uses <i>au</i>."
     },
     {
      "prompt": "Which form completes <i>Nous allons ______ Espagne</i> (“we are going to Spain”)?",
      "options": [
       "<i>au</i>",
       "<i>à</i>",
       "<i>en</i>",
       "<i>aux</i>"
      ],
      "answer": 2,
      "explain": "<i>Espagne</i> is a feminine country, so French uses <i>en</i>."
     },
     {
      "prompt": "Which form completes <i>Il arrive ______ Japon</i> (“he is arriving from Japan”)?",
      "options": [
       "<i>de</i>",
       "<i>au</i>",
       "<i>en</i>",
       "<i>du</i>"
      ],
      "answer": 3,
      "explain": "<i>Japon</i> is masculine, so “from” is <i>de</i> + <i>le</i>, contracted to <i>du</i>."
     }
    ]
   }
  }
 ]
};
