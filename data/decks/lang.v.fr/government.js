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
   "body": "<p>A French noun has no case, but the personal pronoun keeps separate forms for the subject, the direct object, and the indirect object. For the third person the forms are <i lang=\"fr\">il</i>, <i lang=\"fr\">le</i>, <i lang=\"fr\">lui</i> (masculine singular), <i lang=\"fr\">elle</i>, <i lang=\"fr\">la</i>, <i lang=\"fr\">lui</i> (feminine singular), and <i lang=\"fr\">ils</i> or <i lang=\"fr\">elles</i>, <i lang=\"fr\">les</i>, <i lang=\"fr\">leur</i> (plural); the first and second persons have <i lang=\"fr\">me</i>, <i lang=\"fr\">te</i>, <i lang=\"fr\">nous</i>, <i lang=\"fr\">vous</i> for both objects. The object pronouns stand before the verb: <i lang=\"fr\">je la regarde</i> (“I look at her”), <i lang=\"fr\">je lui écris</i> (“I write to him” or “to her”). Before a vowel, <i lang=\"fr\">me</i>, <i lang=\"fr\">te</i>, <i lang=\"fr\">le</i>, and <i lang=\"fr\">la</i> become <i lang=\"fr\">m’</i>, <i lang=\"fr\">t’</i>, <i lang=\"fr\">l’</i>.</p>\n<p>The stressed pronouns <i lang=\"fr\">moi</i>, <i lang=\"fr\">toi</i>, <i lang=\"fr\">lui</i>, <i lang=\"fr\">elle</i>, <i lang=\"fr\">nous</i>, <i lang=\"fr\">vous</i>, <i lang=\"fr\">eux</i>, <i lang=\"fr\">elles</i> are used after a preposition, alone, and for emphasis: <i lang=\"fr\">chez elle</i> (“at her house”), <i lang=\"fr\">sans eux</i> (“without them”), <i lang=\"fr\">C’est moi</i> (“It is I”). In an affirmative command the object pronoun follows the verb with a hyphen, and <i lang=\"fr\">me</i> becomes <i lang=\"fr\">moi</i>: <i lang=\"fr\">Écoute-moi</i> (“Listen to me”).</p>",
   "qp": {
    "id": "q-fr-gov-pron",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Je ______ téléphone ce soir</i> (“I am telephoning them tonight”)?",
      "options": [
       "<i lang=\"fr\">les</i>",
       "<i lang=\"fr\">eux</i>",
       "<i lang=\"fr\">leur</i>",
       "<i lang=\"fr\">leurs</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Téléphoner</i> takes <i lang=\"fr\">à</i>, so “them” is the indirect object <i lang=\"fr\">leur</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">Elle travaille avec ______</i> (“she works with us”)?",
      "options": [
       "<i lang=\"fr\">notre</i>",
       "<i lang=\"fr\">nous</i>",
       "<i lang=\"fr\">nos</i>",
       "<i lang=\"fr\">on</i>"
      ],
      "answer": 1,
      "explain": "After a preposition the stressed pronoun is used; for “us” it is <i lang=\"fr\">nous</i>."
     },
     {
      "prompt": "Which sentence is correct for “Look at me!” (to one person)?",
      "options": [
       "<i lang=\"fr\">Regarde-moi !</i>",
       "<i lang=\"fr\">Regarde-me !</i>",
       "<i lang=\"fr\">Me regarde !</i>",
       "<i lang=\"fr\">Regarde-je !</i>"
      ],
      "answer": 0,
      "explain": "In an affirmative command the pronoun follows the verb, and <i lang=\"fr\">me</i> becomes <i lang=\"fr\">moi</i>."
     }
    ]
   }
  },
  {
   "id": "a-de",
   "title": "À and de in place of the cases",
   "body": "<p>Where Latin uses the dative and the genitive, French uses the prepositions <i lang=\"fr\">à</i> and <i lang=\"fr\">de</i>. The indirect object takes <i lang=\"fr\">à</i>: <i lang=\"fr\">Il offre des fleurs à sa mère</i> (“he gives flowers to his mother”). Possession takes <i lang=\"fr\">de</i>: <i lang=\"fr\">la voiture de mon père</i> (“my father’s car”). With the definite article, <i lang=\"fr\">à</i> and <i lang=\"fr\">de</i> contract: <i lang=\"fr\">à</i> + <i lang=\"fr\">le</i> = <i lang=\"fr\">au</i>, <i lang=\"fr\">à</i> + <i lang=\"fr\">les</i> = <i lang=\"fr\">aux</i>, <i lang=\"fr\">de</i> + <i lang=\"fr\">le</i> = <i lang=\"fr\">du</i>, <i lang=\"fr\">de</i> + <i lang=\"fr\">les</i> = <i lang=\"fr\">des</i>; but <i lang=\"fr\">à la</i>, <i lang=\"fr\">à l’</i>, <i lang=\"fr\">de la</i>, and <i lang=\"fr\">de l’</i> do not contract: <i lang=\"fr\">au professeur</i>, <i lang=\"fr\">aux élèves</i>, <i lang=\"fr\">du professeur</i>, <i lang=\"fr\">des élèves</i>, <i lang=\"fr\">à l’enfant</i>.</p>\n<p>Some verbs govern <i lang=\"fr\">à</i> or <i lang=\"fr\">de</i> where English has a direct object, and each must be learned with its preposition: <i lang=\"fr\">obéir à</i> (“obey”), <i lang=\"fr\">ressembler à</i> (“resemble”), <i lang=\"fr\">se souvenir de</i> (“remember”), <i lang=\"fr\">avoir besoin de</i> (“need”). So we say <i lang=\"fr\">il obéit à son père</i> and <i lang=\"fr\">elle se souvient de son enfance</i>.</p>",
   "qp": {
    "id": "q-fr-gov-ade",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Il parle ______ élèves</i> (“he speaks to the pupils”)?",
      "options": [
       "<i lang=\"fr\">à les</i>",
       "<i lang=\"fr\">des</i>",
       "<i lang=\"fr\">au</i>",
       "<i lang=\"fr\">aux</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">À</i> and <i lang=\"fr\">les</i> contract to <i lang=\"fr\">aux</i>."
     },
     {
      "prompt": "Which phrase is correct for “the teacher’s book”?",
      "options": [
       "<i lang=\"fr\">le livre du professeur</i>",
       "<i lang=\"fr\">le livre de le professeur</i>",
       "<i lang=\"fr\">le livre au professeur</i>",
       "<i lang=\"fr\">le professeur livre</i>"
      ],
      "answer": 0,
      "explain": "Possession takes <i lang=\"fr\">de</i>, and <i lang=\"fr\">de</i> and <i lang=\"fr\">le</i> contract to <i lang=\"fr\">du</i>."
     },
     {
      "prompt": "Which sentence is correct for “the child resembles his mother”?",
      "options": [
       "<i lang=\"fr\">L’enfant ressemble sa mère.</i>",
       "<i lang=\"fr\">L’enfant ressemble à sa mère.</i>",
       "<i lang=\"fr\">L’enfant ressemble de sa mère.</i>",
       "<i lang=\"fr\">L’enfant se ressemble sa mère.</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Ressembler</i> governs <i lang=\"fr\">à</i>."
     }
    ]
   }
  },
  {
   "id": "places",
   "title": "The prepositions with place names",
   "body": "<p>English says “in” and “to” for both cities and countries, but French chooses the preposition by the kind of name. Before the name of a city French uses <i lang=\"fr\">à</i>, both for place where and for place to which: <i lang=\"fr\">à Lyon</i> (“in Lyon,” “to Lyon”). Before a feminine country, and before a country whose name begins with a vowel, it uses <i lang=\"fr\">en</i>: <i lang=\"fr\">en Italie</i>, <i lang=\"fr\">en Iran</i>. Before a masculine country it uses <i lang=\"fr\">au</i>, and before a plural name <i lang=\"fr\">aux</i>: <i lang=\"fr\">au Japon</i>, <i lang=\"fr\">aux Pays-Bas</i>.</p>\n<p>For place from which, French uses <i lang=\"fr\">de</i> (<i lang=\"fr\">d’</i> before a vowel) with cities and feminine countries, and <i lang=\"fr\">du</i> or <i lang=\"fr\">des</i> with masculine and plural names: <i lang=\"fr\">de Lyon</i>, <i lang=\"fr\">d’Italie</i>, <i lang=\"fr\">du Japon</i>, <i lang=\"fr\">des Pays-Bas</i>. <i lang=\"fr\">Dans</i> (“in,” “inside”) is used with an article for a place enclosed: <i lang=\"fr\">dans la boîte</i> (“in the box”).</p>",
   "qp": {
    "id": "q-fr-gov-places",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Elle habite ______ Portugal</i> (“she lives in Portugal”)?",
      "options": [
       "<i lang=\"fr\">en</i>",
       "<i lang=\"fr\">au</i>",
       "<i lang=\"fr\">à</i>",
       "<i lang=\"fr\">dans</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Portugal</i> is a masculine country, so French uses <i lang=\"fr\">au</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">Nous allons ______ Espagne</i> (“we are going to Spain”)?",
      "options": [
       "<i lang=\"fr\">au</i>",
       "<i lang=\"fr\">à</i>",
       "<i lang=\"fr\">en</i>",
       "<i lang=\"fr\">aux</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Espagne</i> is a feminine country, so French uses <i lang=\"fr\">en</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">Il arrive ______ Japon</i> (“he is arriving from Japan”)?",
      "options": [
       "<i lang=\"fr\">de</i>",
       "<i lang=\"fr\">au</i>",
       "<i lang=\"fr\">en</i>",
       "<i lang=\"fr\">du</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Japon</i> is masculine, so “from” is <i lang=\"fr\">de</i> + <i lang=\"fr\">le</i>, contracted to <i lang=\"fr\">du</i>."
     }
    ]
   }
  }
 ]
};
