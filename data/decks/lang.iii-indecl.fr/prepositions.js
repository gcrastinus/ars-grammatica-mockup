window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-indecl.fr/prepositions"] = {
 "id": "lang.iii-indecl.fr/prepositions",
 "title": "French Prepositions",
 "sub": "À and de, en and dans, chez, the prepositions with places, the prepositions before an infinitive, and the stressed pronoun",
 "sources": "Lawless; Larousse; Maurice Grevisse, <i>Le Bon Usage</i>",
 "panels": [
  {
   "id": "a-de",
   "title": "À and de",
   "body": "<p>Where Latin shows the indirect object by the dative and the possessor by the genitive, French uses two prepositions. <i lang=\"fr\">À</i> marks the person to whom (<i lang=\"fr\">il donne le livre à sa sœur</i>), the place where or to which (<i lang=\"fr\">à la gare</i>), and the use or manner (<i lang=\"fr\">une tasse à café</i>, “a coffee cup”; <i lang=\"fr\">à pied</i>, “on foot”). <i lang=\"fr\">De</i> marks the possessor (<i lang=\"fr\">la maison de Paul</i>), the place from which (<i lang=\"fr\">il vient de Lyon</i>), the material or the content (<i lang=\"fr\">une table de bois</i>; <i lang=\"fr\">une tasse de café</i>, “a cup of coffee”), and the cause (<i lang=\"fr\">mourir de faim</i>). The two contract with the article, as we have seen. A noun after a preposition does not change, so the preposition alone shows the relation.</p>",
   "qp": {
    "id": "q-fr-a-de",
    "variants": [
     {
      "prompt": "Choose the preposition: <i lang=\"fr\">une boîte ___ lettres</i> (“a mailbox,” a box for letters).",
      "options": [
       "<i lang=\"fr\">de</i>",
       "<i lang=\"fr\">en</i>",
       "<i lang=\"fr\">par</i>",
       "<i lang=\"fr\">à</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">À</i> marks the use: a box for letters."
     },
     {
      "prompt": "Choose the preposition: <i lang=\"fr\">un verre ___ lait</i> (“a glass of milk,” full of milk).",
      "options": [
       "<i lang=\"fr\">de</i>",
       "<i lang=\"fr\">à</i>",
       "<i lang=\"fr\">en</i>",
       "<i lang=\"fr\">pour</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">De</i> marks the content."
     },
     {
      "prompt": "What does French use where Latin uses the dative of the indirect object?",
      "options": [
       "The preposition <i lang=\"fr\">de</i>",
       "The preposition <i lang=\"fr\">à</i>",
       "A case ending",
       "The order of words alone"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Il écrit à son père</i>: <i lang=\"fr\">à</i> marks the person to whom."
     }
    ]
   }
  },
  {
   "id": "places",
   "title": "Prepositions with places",
   "body": "<p>English says “in Paris,” “in France,” and “in Canada” with one preposition, but French chooses by the kind of place. With cities, it uses <i lang=\"fr\">à</i> for “in” and “to” and <i lang=\"fr\">de</i> for “from”: <i lang=\"fr\">à Paris</i>, <i lang=\"fr\">de Rome</i>. With feminine countries (most of those ending in <i lang=\"fr\">-e</i>) and with continents, it uses <i lang=\"fr\">en</i> without an article: <i lang=\"fr\">en France</i>, <i lang=\"fr\">en Italie</i>, <i lang=\"fr\">en Europe</i>; “from” is <i lang=\"fr\">de</i>: <i lang=\"fr\">de France</i>. With masculine countries it uses <i lang=\"fr\">au</i>: <i lang=\"fr\">au Canada</i>, <i lang=\"fr\">au Japon</i>, <i lang=\"fr\">du Canada</i>; and with plural names, <i lang=\"fr\">aux</i>: <i lang=\"fr\">aux États-Unis</i>. For a building or a closed space, <i lang=\"fr\">dans</i> means “inside”: <i lang=\"fr\">dans la maison</i>; <i lang=\"fr\">en</i> stands mostly in fixed phrases without an article: <i lang=\"fr\">en classe</i>, <i lang=\"fr\">en ville</i>. <i lang=\"fr\">Chez</i> means “at the house of,” “at the shop of”: <i lang=\"fr\">chez moi</i>, <i lang=\"fr\">chez le médecin</i>.</p>",
   "qp": {
    "id": "q-fr-places",
    "variants": [
     {
      "prompt": "Choose the preposition: <i lang=\"fr\">Il habite ___ Espagne</i> (“He lives in Spain”).",
      "options": [
       "<i lang=\"fr\">au</i>",
       "<i lang=\"fr\">à</i>",
       "<i lang=\"fr\">en</i>",
       "<i lang=\"fr\">dans</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Espagne</i> is a feminine country: <i lang=\"fr\">en</i>, without an article."
     },
     {
      "prompt": "Choose the preposition: <i lang=\"fr\">Elle part ___ Portugal</i> (“She is leaving for Portugal”).",
      "options": [
       "<i lang=\"fr\">en</i>",
       "<i lang=\"fr\">au</i>",
       "<i lang=\"fr\">à</i>",
       "<i lang=\"fr\">aux</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Portugal</i> is masculine: <i lang=\"fr\">au</i>."
     },
     {
      "prompt": "Choose the preposition: <i lang=\"fr\">Je vais ___ dentiste</i> (“I am going to the dentist’s”).",
      "options": [
       "<i lang=\"fr\">chez le</i>",
       "<i lang=\"fr\">à le</i>",
       "<i lang=\"fr\">dans le</i>",
       "<i lang=\"fr\">en</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Chez</i> means “at the place of” a person."
     }
    ]
   }
  },
  {
   "id": "infinitive",
   "title": "Prepositions before an infinitive",
   "body": "<p>A French verb that is followed by an infinitive takes it either directly or with <i lang=\"fr\">à</i> or <i lang=\"fr\">de</i>, and each verb must be learned with its construction. With no preposition: <i lang=\"fr\">aimer</i>, <i lang=\"fr\">vouloir</i>, <i lang=\"fr\">pouvoir</i>, <i lang=\"fr\">devoir</i>, <i lang=\"fr\">savoir</i>, <i lang=\"fr\">aller</i>, <i lang=\"fr\">espérer</i> (<i lang=\"fr\">je veux partir</i>). With <i lang=\"fr\">à</i>: <i lang=\"fr\">commencer à</i>, <i lang=\"fr\">apprendre à</i>, <i lang=\"fr\">aider à</i>, <i lang=\"fr\">réussir à</i>, <i lang=\"fr\">hésiter à</i> (<i lang=\"fr\">il apprend à nager</i>). With <i lang=\"fr\">de</i>: <i lang=\"fr\">finir de</i>, <i lang=\"fr\">décider de</i>, <i lang=\"fr\">essayer de</i>, <i lang=\"fr\">oublier de</i>, <i lang=\"fr\">refuser de</i>, <i lang=\"fr\">avoir besoin de</i> (<i lang=\"fr\">elle a décidé de rester</i>). After the other prepositions, French uses the infinitive where English uses the “-ing” form: <i lang=\"fr\">sans parler</i> (“without speaking”), <i lang=\"fr\">avant de partir</i> (“before leaving”), <i lang=\"fr\">pour comprendre</i> (“in order to understand”); the one exception is <i lang=\"fr\">en</i>, which takes the present participle (<i lang=\"fr\">en partant</i>).</p>",
   "qp": {
    "id": "q-fr-infinitive",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"fr\">Il a oublié ___ fermer la porte</i> (“He forgot to close the door”).",
      "options": [
       "<i lang=\"fr\">à</i>",
       "no preposition",
       "<i lang=\"fr\">pour</i>",
       "<i lang=\"fr\">de</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Oublier</i> takes <i lang=\"fr\">de</i> before an infinitive."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">Elle commence ___ comprendre</i> (“She is beginning to understand”).",
      "options": [
       "<i lang=\"fr\">à</i>",
       "<i lang=\"fr\">de</i>",
       "no preposition",
       "<i lang=\"fr\">en</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Commencer</i> takes <i lang=\"fr\">à</i> before an infinitive."
     },
     {
      "prompt": "How does French say “without knowing”?",
      "options": [
       "<i lang=\"fr\">sans sachant</i>",
       "<i lang=\"fr\">sans savoir</i>",
       "<i lang=\"fr\">en ne sachant</i>",
       "<i lang=\"fr\">sans de savoir</i>"
      ],
      "answer": 1,
      "explain": "After a preposition other than <i lang=\"fr\">en</i>, French uses the infinitive."
     }
    ]
   }
  },
  {
   "id": "stressed",
   "title": "The pronoun after a preposition",
   "body": "<p>After a preposition, French uses the stressed form of the pronoun, as we have seen: <i lang=\"fr\">avec moi</i>, <i lang=\"fr\">pour toi</i>, <i lang=\"fr\">sans lui</i>, <i lang=\"fr\">chez elle</i>, <i lang=\"fr\">devant nous</i>, <i lang=\"fr\">derrière eux</i>. With <i lang=\"fr\">à</i> the stressed form stands after a few verbs of motion and thought, such as <i lang=\"fr\">penser à</i> and <i lang=\"fr\">aller à</i> (<i lang=\"fr\">je pense à toi</i>, “I am thinking of you”), whereas most verbs replace <i lang=\"fr\">à</i> with a person by the indirect object pronoun before the verb (<i lang=\"fr\">je lui écris</i>, “I write to him”). So <i lang=\"fr\">je pense à elle</i> but <i lang=\"fr\">je lui parle</i>.</p>",
   "qp": {
    "id": "q-fr-stressed",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"fr\">Ce cadeau est pour ___</i> (“This gift is for him”).",
      "options": [
       "<i lang=\"fr\">le</i>",
       "<i lang=\"fr\">il</i>",
       "<i lang=\"fr\">son</i>",
       "<i lang=\"fr\">lui</i>"
      ],
      "answer": 3,
      "explain": "After a preposition French uses the stressed form <i lang=\"fr\">lui</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"fr\">Je pense souvent à ___</i> (“I often think of her”).",
      "options": [
       "<i lang=\"fr\">elle</i>",
       "<i lang=\"fr\">lui</i>",
       "<i lang=\"fr\">la</i>",
       "<i lang=\"fr\">y</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Penser à</i> keeps <i lang=\"fr\">à</i> and takes the stressed form for a person."
     },
     {
      "prompt": "How does French say “I am writing to them”?",
      "options": [
       "<i lang=\"fr\">J’écris à eux</i>",
       "<i lang=\"fr\">Je leur écris</i>",
       "<i lang=\"fr\">Je les écris</i>",
       "<i lang=\"fr\">J’y écris</i>"
      ],
      "answer": 1,
      "explain": "With most verbs, <i lang=\"fr\">à</i> with a person becomes the indirect object pronoun before the verb."
     }
    ]
   }
  }
 ]
};
