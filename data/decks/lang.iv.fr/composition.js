window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.fr/composition"] = {
 "id": "lang.iv.fr/composition",
 "title": "Composition in French",
 "sub": "The kinds of French compound, their plurals, and the prefixes",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse; Oscar Bloch and Walther von Wartburg, <i>Dictionnaire étymologique de la langue française</i>",
 "panels": [
  {
   "id": "kinds",
   "title": "The kinds of compound",
   "body": "<p>English says “potato” and “railway,” one word each, where French says <i>pomme de terre</i> (“apple of the earth”) and <i>chemin de fer</i> (“road of iron”), each a compound written as three words. French compounds are of several kinds. A noun is joined to a noun by <i>de</i> or <i>à</i>: <i>salle de bains</i> (“bathroom”), <i>machine à laver</i> (“washing machine”), <i>moulin à vent</i> (“windmill”). Two nouns are joined with a hyphen: <i>chou-fleur</i> (“cauliflower”), <i>timbre-poste</i> (“postage stamp”). A verb is joined to its object: <i>tire-bouchon</i> (“corkscrew,” “pull-cork”), <i>essuie-glace</i> (“windshield wiper,” “wipe-glass”), <i>gratte-ciel</i> (“skyscraper,” “scratch-sky”). An adjective is joined to a noun: <i>grand-mère</i>, <i>rouge-gorge</i> (“robin,” “red-throat”). Whereas English and German usually put the head last, a French compound usually puts it first: a <i>timbre-poste</i> is a stamp.</p>",
   "qp": {
    "id": "q-fr-comp-kinds",
    "variants": [
     {
      "prompt": "What is the head of <i>moulin à café</i> (“coffee mill”)?",
      "options": [
       "<i>café</i>",
       "<i>à</i>",
       "both nouns equally",
       "<i>moulin</i>"
      ],
      "answer": 3,
      "explain": "A French compound usually puts the head first: it is a mill."
     },
     {
      "prompt": "What kind of compound is <i>porte-monnaie</i> (“purse,” “carry-money”)?",
      "options": [
       "A verb joined to its object",
       "Two nouns joined by <i>de</i>",
       "An adjective and a noun",
       "A noun and a prepositional phrase"
      ],
      "answer": 0,
      "explain": "<i>Porte</i> is the verb “carries,” and <i>monnaie</i> its object."
     },
     {
      "prompt": "How does French usually order the parts of a compound, compared with English?",
      "options": [
       "The head last, as in English",
       "The head first",
       "In no fixed order",
       "The verb always last"
      ],
      "answer": 1,
      "explain": "<i>Timbre-poste</i> is a stamp, whereas English “postage stamp” puts the head last."
     }
    ]
   }
  },
  {
   "id": "plural",
   "title": "The plural of compounds",
   "body": "<p>The plural of a French compound depends on its parts. When a noun is joined to a noun or an adjective that agrees with it, both take the plural: <i>des choux-fleurs</i>, <i>des grands-pères</i>, <i>des coffres-forts</i> (“safes”). When the second noun is a complement of the first, often with <i>de</i> or <i>à</i>, only the first takes the plural: <i>des pommes de terre</i>, <i>des chefs-d’œuvre</i> (“masterpieces”), <i>des arcs-en-ciel</i> (“rainbows”), <i>des timbres-poste</i>. In a verb joined to a noun, the verb never changes, and the noun takes the plural: <i>des tire-bouchons</i>; for some such words the reformed spelling of 1990 gives the plural also where tradition wrote none, as <i>des gratte-ciels</i> beside the traditional <i>des gratte-ciel</i>.</p>",
   "qp": {
    "id": "q-fr-comp-plural",
    "variants": [
     {
      "prompt": "What is the plural of <i>arc-en-ciel</i>?",
      "options": [
       "<i>arcs-en-ciels</i>",
       "<i>arc-en-ciels</i>",
       "<i>arcs-en-ciel</i>",
       "<i>arcs-ens-ciels</i>"
      ],
      "answer": 2,
      "explain": "The second noun is a complement of the first, so only the first takes the plural."
     },
     {
      "prompt": "What is the plural of <i>coffre-fort</i>?",
      "options": [
       "<i>coffres-fort</i>",
       "<i>coffres-forts</i>",
       "<i>coffre-forts</i>",
       "<i>coffres-fortes</i>"
      ],
      "answer": 1,
      "explain": "A noun and an adjective that agrees with it both take the plural."
     },
     {
      "prompt": "Why does <i>des tire-bouchons</i> leave <i>tire</i> unchanged?",
      "options": [
       "<i>Tire</i> is a verb",
       "<i>Tire</i> is feminine",
       "The plural goes only on the first part",
       "<i>Tire</i> is an adverb"
      ],
      "answer": 0,
      "explain": "In a verb joined to its object, the verb never changes."
     }
    ]
   }
  },
  {
   "id": "prefixes",
   "title": "The prefixes",
   "body": "<p>Besides <i>re-</i>, which we have seen, French builds many words with prefixes. <i>Dé-</i> (<i>dés-</i> before a vowel) undoes: <i>faire</i>, <i>défaire</i> (“undo”); <i>habiller</i>, <i>déshabiller</i> (“undress”). <i>In-</i> makes an opposite, and becomes <i>im-</i>, <i>il-</i>, <i>ir-</i> as in English: <i>connu</i>, <i>inconnu</i>; <i>possible</i>, <i>impossible</i>. <i>Mé-</i> (<i>més-</i>) means “badly”: <i>content</i>, <i>mécontent</i> (“displeased”); <i>estimer</i>, <i>mésestimer</i>. <i>Sur-</i> means “over”: <i>charger</i>, <i>surcharger</i>; <i>sous-</i> means “under”: <i>estimer</i>, <i>sous-estimer</i>. <i>Entre-</i> means “between” or “partly”: <i>ouvrir</i>, <i>entrouvrir</i> (“half-open”). Some verbs are formed with a prefix and a suffix at once from a noun or adjective: <i>barque</i> (“boat”), <i>embarquer</i> (“to put on a boat”); <i>riche</i>, <i>enrichir</i> (“to make rich”).</p>",
   "qp": {
    "id": "q-fr-comp-prefixes",
    "variants": [
     {
      "prompt": "What does <i>dé-</i> add in <i>décoller</i>, from <i>coller</i> (“to stick”)?",
      "options": [
       "It undoes: “to unstick”",
       "It repeats: “to stick again”",
       "It intensifies: “to stick hard”",
       "It makes a noun"
      ],
      "answer": 0,
      "explain": "<i>Dé-</i> undoes the action."
     },
     {
      "prompt": "What does <i>mécontent</i> mean?",
      "options": [
       "“very content”",
       "“content again”",
       "“half content”",
       "“displeased”"
      ],
      "answer": 3,
      "explain": "<i>Mé-</i> means “badly,” “not.”"
     },
     {
      "prompt": "From what is <i>enrichir</i> formed?",
      "options": [
       "<i>riche</i>, with a suffix only",
       "<i>richesse</i>, with a prefix",
       "<i>riche</i>, with a prefix and a suffix",
       "<i>chérir</i>, with a prefix"
      ],
      "answer": 2,
      "explain": "<i>En-</i> and <i>-ir</i> are added together to the adjective."
     }
    ]
   }
  }
 ]
};
