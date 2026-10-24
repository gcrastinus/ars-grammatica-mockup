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
   "body": "<p>English says “potato” and “railway,” one word each, where French says <i lang=\"fr\">pomme de terre</i> (“apple of the earth”) and <i lang=\"fr\">chemin de fer</i> (“road of iron”), each a compound written as three words. French compounds are of several kinds. A noun is joined to a noun by <i lang=\"fr\">de</i> or <i lang=\"fr\">à</i>: <i lang=\"fr\">salle de bains</i> (“bathroom”), <i lang=\"fr\">machine à laver</i> (“washing machine”), <i lang=\"fr\">moulin à vent</i> (“windmill”). Two nouns are joined with a hyphen: <i lang=\"fr\">chou-fleur</i> (“cauliflower”), <i lang=\"fr\">timbre-poste</i> (“postage stamp”). A verb is joined to its object: <i lang=\"fr\">tire-bouchon</i> (“corkscrew,” “pull-cork”), <i lang=\"fr\">essuie-glace</i> (“windshield wiper,” “wipe-glass”), <i lang=\"fr\">gratte-ciel</i> (“skyscraper,” “scratch-sky”). An adjective is joined to a noun: <i lang=\"fr\">grand-mère</i>, <i lang=\"fr\">rouge-gorge</i> (“robin,” “red-throat”). Whereas English and German usually put the head last, a French compound usually puts it first: a <i lang=\"fr\">timbre-poste</i> is a stamp.</p>",
   "qp": {
    "id": "q-fr-comp-kinds",
    "variants": [
     {
      "prompt": "What is the head of <i lang=\"fr\">moulin à café</i> (“coffee mill”)?",
      "options": [
       "<i lang=\"fr\">café</i>",
       "<i lang=\"fr\">à</i>",
       "both nouns equally",
       "<i lang=\"fr\">moulin</i>"
      ],
      "answer": 3,
      "explain": "A French compound usually puts the head first: it is a mill."
     },
     {
      "prompt": "What kind of compound is <i lang=\"fr\">porte-monnaie</i> (“purse,” “carry-money”)?",
      "options": [
       "A verb joined to its object",
       "Two nouns joined by <i lang=\"fr\">de</i>",
       "An adjective and a noun",
       "A noun and a prepositional phrase"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Porte</i> is the verb “carries,” and <i lang=\"fr\">monnaie</i> its object."
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
      "explain": "<i lang=\"fr\">Timbre-poste</i> is a stamp, whereas English “postage stamp” puts the head last."
     }
    ]
   }
  },
  {
   "id": "plural",
   "title": "The plural of compounds",
   "body": "<p>The plural of a French compound depends on its parts. When a noun is joined to a noun or an adjective that agrees with it, both take the plural: <i lang=\"fr\">des choux-fleurs</i>, <i lang=\"fr\">des grands-pères</i>, <i lang=\"fr\">des coffres-forts</i> (“safes”). When the second noun is a complement of the first, often with <i lang=\"fr\">de</i> or <i lang=\"fr\">à</i>, only the first takes the plural: <i lang=\"fr\">des pommes de terre</i>, <i lang=\"fr\">des chefs-d’œuvre</i> (“masterpieces”), <i lang=\"fr\">des arcs-en-ciel</i> (“rainbows”), <i lang=\"fr\">des timbres-poste</i>. In a verb joined to a noun, the verb never changes, and the noun takes the plural: <i lang=\"fr\">des tire-bouchons</i>; for some such words the reformed spelling of 1990 gives the plural also where tradition wrote none, as <i lang=\"fr\">des gratte-ciels</i> beside the traditional <i lang=\"fr\">des gratte-ciel</i>.</p>",
   "qp": {
    "id": "q-fr-comp-plural",
    "variants": [
     {
      "prompt": "What is the plural of <i lang=\"fr\">arc-en-ciel</i>?",
      "options": [
       "<i lang=\"fr\">arcs-en-ciels</i>",
       "<i lang=\"fr\">arc-en-ciels</i>",
       "<i lang=\"fr\">arcs-en-ciel</i>",
       "<i lang=\"fr\">arcs-ens-ciels</i>"
      ],
      "answer": 2,
      "explain": "The second noun is a complement of the first, so only the first takes the plural."
     },
     {
      "prompt": "What is the plural of <i lang=\"fr\">coffre-fort</i>?",
      "options": [
       "<i lang=\"fr\">coffres-fort</i>",
       "<i lang=\"fr\">coffres-forts</i>",
       "<i lang=\"fr\">coffre-forts</i>",
       "<i lang=\"fr\">coffres-fortes</i>"
      ],
      "answer": 1,
      "explain": "A noun and an adjective that agrees with it both take the plural."
     },
     {
      "prompt": "Why does <i lang=\"fr\">des tire-bouchons</i> leave <i lang=\"fr\">tire</i> unchanged?",
      "options": [
       "<i lang=\"fr\">Tire</i> is a verb",
       "<i lang=\"fr\">Tire</i> is feminine",
       "The plural goes only on the first part",
       "<i lang=\"fr\">Tire</i> is an adverb"
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
   "body": "<p>Besides <i lang=\"fr\">re-</i>, which we have seen, French builds many words with prefixes. <i lang=\"fr\">Dé-</i> (<i lang=\"fr\">dés-</i> before a vowel) undoes: <i lang=\"fr\">faire</i>, <i lang=\"fr\">défaire</i> (“undo”); <i lang=\"fr\">habiller</i>, <i lang=\"fr\">déshabiller</i> (“undress”). <i lang=\"fr\">In-</i> makes an opposite, and becomes <i lang=\"fr\">im-</i>, <i lang=\"fr\">il-</i>, <i lang=\"fr\">ir-</i> as in English: <i lang=\"fr\">connu</i>, <i lang=\"fr\">inconnu</i>; <i lang=\"fr\">possible</i>, <i lang=\"fr\">impossible</i>. <i lang=\"fr\">Mé-</i> (<i lang=\"fr\">més-</i>) means “badly”: <i lang=\"fr\">content</i>, <i lang=\"fr\">mécontent</i> (“displeased”); <i lang=\"fr\">estimer</i>, <i lang=\"fr\">mésestimer</i>. <i lang=\"fr\">Sur-</i> means “over”: <i lang=\"fr\">charger</i>, <i lang=\"fr\">surcharger</i>; <i lang=\"fr\">sous-</i> means “under”: <i lang=\"fr\">estimer</i>, <i lang=\"fr\">sous-estimer</i>. <i lang=\"fr\">Entre-</i> means “between” or “partly”: <i lang=\"fr\">ouvrir</i>, <i lang=\"fr\">entrouvrir</i> (“half-open”). Some verbs are formed with a prefix and a suffix at once from a noun or adjective: <i lang=\"fr\">barque</i> (“boat”), <i lang=\"fr\">embarquer</i> (“to put on a boat”); <i lang=\"fr\">riche</i>, <i lang=\"fr\">enrichir</i> (“to make rich”).</p>",
   "qp": {
    "id": "q-fr-comp-prefixes",
    "variants": [
     {
      "prompt": "What does <i lang=\"fr\">dé-</i> add in <i lang=\"fr\">décoller</i>, from <i lang=\"fr\">coller</i> (“to stick”)?",
      "options": [
       "It undoes: “to unstick”",
       "It repeats: “to stick again”",
       "It intensifies: “to stick hard”",
       "It makes a noun"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Dé-</i> undoes the action."
     },
     {
      "prompt": "What does <i lang=\"fr\">mécontent</i> mean?",
      "options": [
       "“very content”",
       "“content again”",
       "“half content”",
       "“displeased”"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Mé-</i> means “badly,” “not.”"
     },
     {
      "prompt": "From what is <i lang=\"fr\">enrichir</i> formed?",
      "options": [
       "<i lang=\"fr\">riche</i>, with a suffix only",
       "<i lang=\"fr\">richesse</i>, with a prefix",
       "<i lang=\"fr\">riche</i>, with a prefix and a suffix",
       "<i lang=\"fr\">chérir</i>, with a prefix"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">En-</i> and <i lang=\"fr\">-ir</i> are added together to the adjective."
     }
    ]
   }
  }
 ]
};
