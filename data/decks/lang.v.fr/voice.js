window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.fr/voice"] = {
 "id": "lang.v.fr/voice",
 "title": "The Passive, the Infinitive, and the Participle in French",
 "sub": "The passive and the pronominal verbs, the infinitive and its prepositions, and the compound tenses and the participles",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse; Le Conjugueur",
 "panels": [
  {
   "id": "passive",
   "title": "The passive and the pronominal verbs",
   "body": "<p>The French passive is formed, as in English, with the verb “to be,” <i lang=\"fr\">être</i>, and the past participle, which agrees with the subject; the agent takes <i lang=\"fr\">par</i>: <i lang=\"fr\">la porte est ouverte par le gardien</i> (“the door is opened by the caretaker”), <i lang=\"fr\">les chansons sont chantées par les élèves</i>. French uses the passive less than English does. It often says <i lang=\"fr\">on</i> (“one,” “people”) with an active verb instead: <i lang=\"fr\">on ferme la porte à six heures</i> (“the door is closed at six”). It also uses a pronominal verb, a verb with a reflexive pronoun, in a passive sense: <i lang=\"fr\">le pain se mange frais</i> (“bread is eaten fresh”).</p>\n<p>The pronominal verb also has its plain reflexive sense, an action that the subject does to himself: <i lang=\"fr\">il se lève</i> (“he gets up”), <i lang=\"fr\">elle se regarde</i> (“she looks at herself”).</p>",
   "qp": {
    "id": "q-fr-voice-pass",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Les fenêtres sont ______ par le gardien</i> (“the windows are closed by the caretaker”)?",
      "options": [
       "<i lang=\"fr\">fermé</i>",
       "<i lang=\"fr\">fermés</i>",
       "<i lang=\"fr\">fermées</i>",
       "<i lang=\"fr\">fermée</i>"
      ],
      "answer": 2,
      "explain": "In the passive the participle agrees with the subject, <i lang=\"fr\">fenêtres</i>, feminine plural."
     },
     {
      "prompt": "What does <i lang=\"fr\">On parle anglais ici</i> mean?",
      "options": [
       "“He speaks English here”",
       "“English is spoken here”",
       "“We spoke English here”",
       "“English speaks here”"
      ],
      "answer": 1,
      "explain": "French often uses <i lang=\"fr\">on</i> with an active verb where English uses the passive."
     },
     {
      "prompt": "Which preposition names the agent of a French passive?",
      "options": [
       "<i lang=\"fr\">par</i>",
       "<i lang=\"fr\">pour</i>",
       "<i lang=\"fr\">à</i>",
       "<i lang=\"fr\">avec</i>"
      ],
      "answer": 0,
      "explain": "The agent takes <i lang=\"fr\">par</i>."
     }
    ]
   }
  },
  {
   "id": "infinitive",
   "title": "The infinitive and its prepositions",
   "body": "<p>Some verbs are followed by an infinitive directly, as English “can” and “must” are: <i lang=\"fr\">vouloir</i>, <i lang=\"fr\">pouvoir</i>, <i lang=\"fr\">devoir</i>, <i lang=\"fr\">savoir</i>, <i lang=\"fr\">aller</i>, and <i lang=\"fr\">venir</i>. So we say <i lang=\"fr\">elle sait nager</i> (“she can swim”) and <i lang=\"fr\">il va pleuvoir</i> (“it is going to rain”). Other verbs take <i lang=\"fr\">à</i> or <i lang=\"fr\">de</i> before the infinitive: <i lang=\"fr\">apprendre à</i> (“learn to”), <i lang=\"fr\">réussir à</i> (“succeed in”), <i lang=\"fr\">décider de</i> (“decide to”), <i lang=\"fr\">refuser de</i> (“refuse to”), <i lang=\"fr\">finir de</i> (“finish”). So we say <i lang=\"fr\">il apprend à lire</i> and <i lang=\"fr\">elle refuse de partir</i>. The preposition is learned with the verb.</p>\n<p>Purpose is expressed with <i lang=\"fr\">pour</i> and the infinitive: <i lang=\"fr\">il économise pour voyager</i> (“he saves in order to travel”). After a preposition other than <i lang=\"fr\">en</i>, French uses the infinitive where English uses a form in “-ing”: <i lang=\"fr\">sans parler</i> (“without speaking”).</p>",
   "qp": {
    "id": "q-fr-voice-inf",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Il a décidé ______ rester</i> (“he decided to stay”)?",
      "options": [
       "<i lang=\"fr\">à</i>",
       "<i lang=\"fr\">pour</i>",
       "<i lang=\"fr\">de</i>",
       "no preposition"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Décider</i> takes <i lang=\"fr\">de</i> before the infinitive."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">Nous devons ______</i> (“we must work”)?",
      "options": [
       "<i lang=\"fr\">à travailler</i>",
       "<i lang=\"fr\">travailler</i>",
       "<i lang=\"fr\">de travailler</i>",
       "<i lang=\"fr\">travaillons</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Devoir</i> is followed by the infinitive directly."
     },
     {
      "prompt": "What does <i lang=\"fr\">sans regarder</i> mean?",
      "options": [
       "“without looking”",
       "“without having been looked at”",
       "“in order to look”",
       "“while looking”"
      ],
      "answer": 0,
      "explain": "After <i lang=\"fr\">sans</i>, French uses the infinitive where English uses “-ing.”"
     }
    ]
   }
  },
  {
   "id": "compound",
   "title": "The compound tenses and the participles",
   "body": "<p>The compound past, the <i lang=\"fr\">passé composé</i>, is formed with <i lang=\"fr\">avoir</i> and the past participle for most verbs: <i lang=\"fr\">j’ai chanté</i>, <i lang=\"fr\">nous avons fini</i>. A small group of verbs of motion and change of state takes <i lang=\"fr\">être</i>, among them <i lang=\"fr\">aller</i>, <i lang=\"fr\">venir</i>, <i lang=\"fr\">arriver</i>, <i lang=\"fr\">partir</i>, <i lang=\"fr\">entrer</i>, <i lang=\"fr\">sortir</i>, <i lang=\"fr\">naître</i>, <i lang=\"fr\">mourir</i>, <i lang=\"fr\">rester</i>, and <i lang=\"fr\">tomber</i>; so do all pronominal verbs. With <i lang=\"fr\">être</i> the participle agrees with the subject: <i lang=\"fr\">elles sont sorties</i>.</p>\n<p>The present participle ends in <i lang=\"fr\">-ant</i>: <i lang=\"fr\">chantant</i>, <i lang=\"fr\">finissant</i>. With <i lang=\"fr\">en</i> it forms the gerund (<i lang=\"fr\">gérondif</i>), which tells what the subject does at the same time or by what means: <i lang=\"fr\">en marchant, il chante</i> (“while walking, he sings”); <i lang=\"fr\">c’est en forgeant qu’on devient forgeron</i> (“it is by working at the forge that one becomes a smith,” a proverb).</p>",
   "qp": {
    "id": "q-fr-voice-comp",
    "variants": [
     {
      "prompt": "Which auxiliary does <i lang=\"fr\">tomber</i> take in the <i lang=\"fr\">passé composé</i>?",
      "options": [
       "<i lang=\"fr\">être</i>",
       "<i lang=\"fr\">avoir</i>",
       "either, without difference",
       "neither"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Tomber</i> is a verb of change of state and takes <i lang=\"fr\">être</i>: <i lang=\"fr\">il est tombé</i>."
     },
     {
      "prompt": "What does <i lang=\"fr\">en courant</i> mean in <i lang=\"fr\">Il est arrivé en courant</i>?",
      "options": [
       "“having run”",
       "“in order to run”",
       "“in the race”",
       "“running”"
      ],
      "answer": 3,
      "explain": "The gerund tells what the subject did at the same time: “he arrived running.”"
     },
     {
      "prompt": "Which sentence is correct for “she was born in May”?",
      "options": [
       "<i lang=\"fr\">Elle a née en mai.</i>",
       "<i lang=\"fr\">Elle est né en mai.</i>",
       "<i lang=\"fr\">Elle est née en mai.</i>",
       "<i lang=\"fr\">Elle a naît en mai.</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Naître</i> takes <i lang=\"fr\">être</i>, and the participle agrees with the subject."
     }
    ]
   }
  }
 ]
};
