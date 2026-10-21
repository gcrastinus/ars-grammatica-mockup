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
   "body": "<p>The French passive is formed, as in English, with the verb “to be,” <i>être</i>, and the past participle, which agrees with the subject; the agent takes <i>par</i>: <i>la porte est ouverte par le gardien</i> (“the door is opened by the caretaker”), <i>les chansons sont chantées par les élèves</i>. French uses the passive less than English does. It often says <i>on</i> (“one,” “people”) with an active verb instead: <i>on ferme la porte à six heures</i> (“the door is closed at six”). It also uses a pronominal verb, a verb with a reflexive pronoun, in a passive sense: <i>le pain se mange frais</i> (“bread is eaten fresh”).</p>\n<p>The pronominal verb also has its plain reflexive sense, an action that the subject does to himself: <i>il se lève</i> (“he gets up”), <i>elle se regarde</i> (“she looks at herself”).</p>",
   "qp": {
    "id": "q-fr-voice-pass",
    "variants": [
     {
      "prompt": "Which form completes <i>Les fenêtres sont ______ par le gardien</i> (“the windows are closed by the caretaker”)?",
      "options": [
       "<i>fermé</i>",
       "<i>fermés</i>",
       "<i>fermées</i>",
       "<i>fermée</i>"
      ],
      "answer": 2,
      "explain": "In the passive the participle agrees with the subject, <i>fenêtres</i>, feminine plural."
     },
     {
      "prompt": "What does <i>On parle anglais ici</i> mean?",
      "options": [
       "“He speaks English here”",
       "“English is spoken here”",
       "“We spoke English here”",
       "“English speaks here”"
      ],
      "answer": 1,
      "explain": "French often uses <i>on</i> with an active verb where English uses the passive."
     },
     {
      "prompt": "Which preposition names the agent of a French passive?",
      "options": [
       "<i>par</i>",
       "<i>pour</i>",
       "<i>à</i>",
       "<i>avec</i>"
      ],
      "answer": 0,
      "explain": "The agent takes <i>par</i>."
     }
    ]
   }
  },
  {
   "id": "infinitive",
   "title": "The infinitive and its prepositions",
   "body": "<p>Some verbs are followed by an infinitive directly, as English “can” and “must” are: <i>vouloir</i>, <i>pouvoir</i>, <i>devoir</i>, <i>savoir</i>, <i>aller</i>, and <i>venir</i>. So we say <i>elle sait nager</i> (“she can swim”) and <i>il va pleuvoir</i> (“it is going to rain”). Other verbs take <i>à</i> or <i>de</i> before the infinitive: <i>apprendre à</i> (“learn to”), <i>réussir à</i> (“succeed in”), <i>décider de</i> (“decide to”), <i>refuser de</i> (“refuse to”), <i>finir de</i> (“finish”). So we say <i>il apprend à lire</i> and <i>elle refuse de partir</i>. The preposition is learned with the verb.</p>\n<p>Purpose is expressed with <i>pour</i> and the infinitive: <i>il économise pour voyager</i> (“he saves in order to travel”). After a preposition other than <i>en</i>, French uses the infinitive where English uses a form in “-ing”: <i>sans parler</i> (“without speaking”).</p>",
   "qp": {
    "id": "q-fr-voice-inf",
    "variants": [
     {
      "prompt": "Which form completes <i>Il a décidé ______ rester</i> (“he decided to stay”)?",
      "options": [
       "<i>à</i>",
       "<i>pour</i>",
       "<i>de</i>",
       "no preposition"
      ],
      "answer": 2,
      "explain": "<i>Décider</i> takes <i>de</i> before the infinitive."
     },
     {
      "prompt": "Which form completes <i>Nous devons ______</i> (“we must work”)?",
      "options": [
       "<i>à travailler</i>",
       "<i>travailler</i>",
       "<i>de travailler</i>",
       "<i>travaillons</i>"
      ],
      "answer": 1,
      "explain": "<i>Devoir</i> is followed by the infinitive directly."
     },
     {
      "prompt": "What does <i>sans regarder</i> mean?",
      "options": [
       "“without looking”",
       "“without having been looked at”",
       "“in order to look”",
       "“while looking”"
      ],
      "answer": 0,
      "explain": "After <i>sans</i>, French uses the infinitive where English uses “-ing.”"
     }
    ]
   }
  },
  {
   "id": "compound",
   "title": "The compound tenses and the participles",
   "body": "<p>The compound past, the <i>passé composé</i>, is formed with <i>avoir</i> and the past participle for most verbs: <i>j’ai chanté</i>, <i>nous avons fini</i>. A small group of verbs of motion and change of state takes <i>être</i>, among them <i>aller</i>, <i>venir</i>, <i>arriver</i>, <i>partir</i>, <i>entrer</i>, <i>sortir</i>, <i>naître</i>, <i>mourir</i>, <i>rester</i>, and <i>tomber</i>; so do all pronominal verbs. With <i>être</i> the participle agrees with the subject: <i>elles sont sorties</i>.</p>\n<p>The present participle ends in <i>-ant</i>: <i>chantant</i>, <i>finissant</i>. With <i>en</i> it forms the gerund (<i>gérondif</i>), which tells what the subject does at the same time or by what means: <i>en marchant, il chante</i> (“while walking, he sings”); <i>c’est en forgeant qu’on devient forgeron</i> (“it is by working at the forge that one becomes a smith,” a proverb).</p>",
   "qp": {
    "id": "q-fr-voice-comp",
    "variants": [
     {
      "prompt": "Which auxiliary does <i>tomber</i> take in the <i>passé composé</i>?",
      "options": [
       "<i>être</i>",
       "<i>avoir</i>",
       "either, without difference",
       "neither"
      ],
      "answer": 0,
      "explain": "<i>Tomber</i> is a verb of change of state and takes <i>être</i>: <i>il est tombé</i>."
     },
     {
      "prompt": "What does <i>en courant</i> mean in <i>Il est arrivé en courant</i>?",
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
       "<i>Elle a née en mai.</i>",
       "<i>Elle est né en mai.</i>",
       "<i>Elle est née en mai.</i>",
       "<i>Elle a naît en mai.</i>"
      ],
      "answer": 2,
      "explain": "<i>Naître</i> takes <i>être</i>, and the participle agrees with the subject."
     }
    ]
   }
  }
 ]
};
