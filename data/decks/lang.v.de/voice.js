window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.de/voice"] = {
 "id": "lang.v.de/voice",
 "title": "The Passive, the Infinitive, and the Participle in German",
 "sub": "The passive with werden, the infinitive with and without zu, and the perfect and the participles",
 "sources": "Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "passive",
   "title": "The passive",
   "body": "<p>The German passive is formed with <i>werden</i> and the past participle, which stands at the end of the clause: <i>Die Brücke wird gebaut</i> (“the bridge is being built”), <i>Die Brücke wurde gebaut</i> (“the bridge was built”). The agent takes <i>von</i> with the dative, and the means takes <i>durch</i>: <i>Das Dorf wurde durch einen Sturm zerstört</i> (“the village was destroyed by a storm”). In the perfect passive the participle of <i>werden</i> is <i>worden</i>, not <i>geworden</i>: <i>Die Brücke ist gebaut worden</i> (“the bridge has been built”).</p>\n<p>A verb that governs the dative keeps the dative in the passive, and the passive then has no subject: <i>Den Kindern wird vorgelesen</i> (“the children are read to”). German also uses <i>sein</i> with the participle for the state that results from an action: <i>Die Tür ist geschlossen</i> (“the door is closed”). A reflexive verb with <i>sich</i> can have a sense close to the passive: <i>Die Tür öffnet sich</i> (“the door opens”).</p>",
   "qp": {
    "id": "q-de-voice-pass",
    "variants": [
     {
      "prompt": "Which form completes <i>Der Kuchen ______ von der Mutter gebacken</i> (“the cake is being baked by the mother”)?",
      "options": [
       "<i>ist</i>",
       "<i>hat</i>",
       "<i>würde</i>",
       "<i>wird</i>"
      ],
      "answer": 3,
      "explain": "The passive of an action is <i>werden</i> with the participle."
     },
     {
      "prompt": "Which form completes <i>Das Haus ist renoviert ______</i> (“the house has been renovated”)?",
      "options": [
       "<i>worden</i>",
       "<i>geworden</i>",
       "<i>werden</i>",
       "<i>wurde</i>"
      ],
      "answer": 0,
      "explain": "In the perfect passive the participle of <i>werden</i> is <i>worden</i>."
     },
     {
      "prompt": "Which preposition names the personal agent of a German passive?",
      "options": [
       "<i>durch</i>",
       "<i>von</i>",
       "<i>mit</i>",
       "<i>bei</i>"
      ],
      "answer": 1,
      "explain": "The agent takes <i>von</i>; <i>durch</i> names the means."
     }
    ]
   }
  },
  {
   "id": "infinitive",
   "title": "The infinitive with and without zu",
   "body": "<p>The modal verbs (<i>können</i>, <i>müssen</i>, <i>wollen</i>, <i>dürfen</i>, <i>sollen</i>, <i>mögen</i>) and <i>werden</i>, <i>lassen</i>, <i>sehen</i>, and <i>hören</i> take the infinitive without <i>zu</i>, and the infinitive stands at the end of the clause: <i>Sie darf heute schwimmen</i> (“she may swim today”), <i>Ich sehe die Kinder spielen</i> (“I see the children playing”). Most other verbs, and adjectives and nouns, take the infinitive with <i>zu</i>: <i>Er hofft, bald zu kommen</i> (“he hopes to come soon”), <i>Es ist schwer, Chinesisch zu lernen</i>. In a separable verb, <i>zu</i> stands between the prefix and the verb: <i>anzurufen</i>.</p>\n<p><i>Um … zu</i> gives a purpose, <i>ohne … zu</i> means “without …ing,” and <i>statt … zu</i> means “instead of …ing”: <i>Er spart, um ein Auto zu kaufen</i> (“he is saving in order to buy a car”).</p>",
   "qp": {
    "id": "q-de-voice-inf",
    "variants": [
     {
      "prompt": "Which form completes <i>Wir müssen heute ______</i> (“we must work today”)?",
      "options": [
       "<i>zu arbeiten</i>",
       "<i>arbeiten</i>",
       "<i>arbeitet</i>",
       "<i>gearbeitet</i>"
      ],
      "answer": 1,
      "explain": "A modal verb takes the infinitive without <i>zu</i>."
     },
     {
      "prompt": "Which form completes <i>Sie versprach, mich ______</i> (“she promised to call me”)?",
      "options": [
       "<i>zu anrufen</i>",
       "<i>anrufen</i>",
       "<i>anzurufen</i>",
       "<i>angerufen</i>"
      ],
      "answer": 2,
      "explain": "In a separable verb, <i>zu</i> stands between the prefix and the verb."
     },
     {
      "prompt": "Which form completes <i>Er lernt, ______ die Prüfung zu bestehen</i> (“he studies in order to pass the exam”)?",
      "options": [
       "<i>damit</i>",
       "<i>für</i>",
       "<i>ohne</i>",
       "<i>um</i>"
      ],
      "answer": 3,
      "explain": "<i>Um … zu</i> gives the purpose."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The perfect and the participles",
   "body": "<p>The perfect is formed with <i>haben</i> and the past participle for most verbs: <i>ich habe gearbeitet</i>, <i>wir haben gegessen</i>. Verbs of motion and change of state take <i>sein</i>, and so do <i>sein</i> and <i>bleiben</i>: <i>ich bin gefahren</i>, <i>er ist eingeschlafen</i>, <i>sie ist geblieben</i>. The participle usually has <i>ge-</i>, but verbs in <i>-ieren</i> and verbs with an inseparable prefix have none (<i>studiert</i>, <i>besucht</i>, <i>verstanden</i>), and in a separable verb <i>ge-</i> stands after the prefix (<i>eingeschlafen</i>).</p>\n<p>A participle used as an adjective before a noun takes the adjective endings: <i>die geschlossene Tür</i>, <i>ein gebrochenes Herz</i>. The present participle ends in <i>-end</i>: <i>das schlafende Kind</i>. German can put a whole phrase before the participle, between the article and the noun; this is the extended attribute: <i>der vor dem Haus wartende Mann</i> (“the man waiting in front of the house”).</p>",
   "qp": {
    "id": "q-de-voice-ptc",
    "variants": [
     {
      "prompt": "Which form completes <i>Sie ist nach Hause ______</i> (“she has gone home”)?",
      "options": [
       "<i>gegangene</i>",
       "<i>gehen</i>",
       "<i>ging</i>",
       "<i>gegangen</i>"
      ],
      "answer": 3,
      "explain": "<i>Gehen</i> is a verb of motion; its perfect is <i>ist gegangen</i>."
     },
     {
      "prompt": "Which form is the past participle of <i>telefonieren</i>?",
      "options": [
       "<i>telefoniert</i>",
       "<i>getelefoniert</i>",
       "<i>telefonierte</i>",
       "<i>telefonieren</i>"
      ],
      "answer": 0,
      "explain": "Verbs in <i>-ieren</i> have no <i>ge-</i>."
     },
     {
      "prompt": "Which form completes <i>ein ______ Kind</i> (“a laughing child”)?",
      "options": [
       "<i>lachend</i>",
       "<i>lachendes</i>",
       "<i>lachende</i>",
       "<i>gelachtes</i>"
      ],
      "answer": 1,
      "explain": "The present participle takes the adjective ending; after <i>ein</i> the neuter nominative is <i>-es</i>."
     }
    ]
   }
  }
 ]
};
