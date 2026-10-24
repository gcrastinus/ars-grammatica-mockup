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
   "body": "<p>The German passive is formed with <i lang=\"de\">werden</i> and the past participle, which stands at the end of the clause: <i lang=\"de\">Die Brücke wird gebaut</i> (“the bridge is being built”), <i lang=\"de\">Die Brücke wurde gebaut</i> (“the bridge was built”). The agent takes <i lang=\"de\">von</i> with the dative, and the means takes <i lang=\"de\">durch</i>: <i lang=\"de\">Das Dorf wurde durch einen Sturm zerstört</i> (“the village was destroyed by a storm”). In the perfect passive the participle of <i lang=\"de\">werden</i> is <i lang=\"de\">worden</i>, not <i lang=\"de\">geworden</i>: <i lang=\"de\">Die Brücke ist gebaut worden</i> (“the bridge has been built”).</p>\n<p>A verb that governs the dative keeps the dative in the passive, and the passive then has no subject: <i lang=\"de\">Den Kindern wird vorgelesen</i> (“the children are read to”). German also uses <i lang=\"de\">sein</i> with the participle for the state that results from an action: <i lang=\"de\">Die Tür ist geschlossen</i> (“the door is closed”). A reflexive verb with <i lang=\"de\">sich</i> can have a sense close to the passive: <i lang=\"de\">Die Tür öffnet sich</i> (“the door opens”).</p>",
   "qp": {
    "id": "q-de-voice-pass",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">Der Kuchen ______ von der Mutter gebacken</i> (“the cake is being baked by the mother”)?",
      "options": [
       "<i lang=\"de\">ist</i>",
       "<i lang=\"de\">hat</i>",
       "<i lang=\"de\">würde</i>",
       "<i lang=\"de\">wird</i>"
      ],
      "answer": 3,
      "explain": "The passive of an action is <i lang=\"de\">werden</i> with the participle."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Das Haus ist renoviert ______</i> (“the house has been renovated”)?",
      "options": [
       "<i lang=\"de\">worden</i>",
       "<i lang=\"de\">geworden</i>",
       "<i lang=\"de\">werden</i>",
       "<i lang=\"de\">wurde</i>"
      ],
      "answer": 0,
      "explain": "In the perfect passive the participle of <i lang=\"de\">werden</i> is <i lang=\"de\">worden</i>."
     },
     {
      "prompt": "Which preposition names the personal agent of a German passive?",
      "options": [
       "<i lang=\"de\">durch</i>",
       "<i lang=\"de\">von</i>",
       "<i lang=\"de\">mit</i>",
       "<i lang=\"de\">bei</i>"
      ],
      "answer": 1,
      "explain": "The agent takes <i lang=\"de\">von</i>; <i lang=\"de\">durch</i> names the means."
     }
    ]
   }
  },
  {
   "id": "infinitive",
   "title": "The infinitive with and without zu",
   "body": "<p>The modal verbs (<i lang=\"de\">können</i>, <i lang=\"de\">müssen</i>, <i lang=\"de\">wollen</i>, <i lang=\"de\">dürfen</i>, <i lang=\"de\">sollen</i>, <i lang=\"de\">mögen</i>) and <i lang=\"de\">werden</i>, <i lang=\"de\">lassen</i>, <i lang=\"de\">sehen</i>, and <i lang=\"de\">hören</i> take the infinitive without <i lang=\"de\">zu</i>, and the infinitive stands at the end of the clause: <i lang=\"de\">Sie darf heute schwimmen</i> (“she may swim today”), <i lang=\"de\">Ich sehe die Kinder spielen</i> (“I see the children playing”). Most other verbs, and adjectives and nouns, take the infinitive with <i lang=\"de\">zu</i>: <i lang=\"de\">Er hofft, bald zu kommen</i> (“he hopes to come soon”), <i lang=\"de\">Es ist schwer, Chinesisch zu lernen</i>. In a separable verb, <i lang=\"de\">zu</i> stands between the prefix and the verb: <i lang=\"de\">anzurufen</i>.</p>\n<p><i lang=\"de\">Um … zu</i> gives a purpose, <i lang=\"de\">ohne … zu</i> means “without …ing,” and <i lang=\"de\">statt … zu</i> means “instead of …ing”: <i lang=\"de\">Er spart, um ein Auto zu kaufen</i> (“he is saving in order to buy a car”).</p>",
   "qp": {
    "id": "q-de-voice-inf",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">Wir müssen heute ______</i> (“we must work today”)?",
      "options": [
       "<i lang=\"de\">zu arbeiten</i>",
       "<i lang=\"de\">arbeiten</i>",
       "<i lang=\"de\">arbeitet</i>",
       "<i lang=\"de\">gearbeitet</i>"
      ],
      "answer": 1,
      "explain": "A modal verb takes the infinitive without <i lang=\"de\">zu</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Sie versprach, mich ______</i> (“she promised to call me”)?",
      "options": [
       "<i lang=\"de\">zu anrufen</i>",
       "<i lang=\"de\">anrufen</i>",
       "<i lang=\"de\">anzurufen</i>",
       "<i lang=\"de\">angerufen</i>"
      ],
      "answer": 2,
      "explain": "In a separable verb, <i lang=\"de\">zu</i> stands between the prefix and the verb."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Er lernt, ______ die Prüfung zu bestehen</i> (“he studies in order to pass the exam”)?",
      "options": [
       "<i lang=\"de\">damit</i>",
       "<i lang=\"de\">für</i>",
       "<i lang=\"de\">ohne</i>",
       "<i lang=\"de\">um</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Um … zu</i> gives the purpose."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The perfect and the participles",
   "body": "<p>The perfect is formed with <i lang=\"de\">haben</i> and the past participle for most verbs: <i lang=\"de\">ich habe gearbeitet</i>, <i lang=\"de\">wir haben gegessen</i>. Verbs of motion and change of state take <i lang=\"de\">sein</i>, and so do <i lang=\"de\">sein</i> and <i lang=\"de\">bleiben</i>: <i lang=\"de\">ich bin gefahren</i>, <i lang=\"de\">er ist eingeschlafen</i>, <i lang=\"de\">sie ist geblieben</i>. The participle usually has <i lang=\"de\">ge-</i>, but verbs in <i lang=\"de\">-ieren</i> and verbs with an inseparable prefix have none (<i lang=\"de\">studiert</i>, <i lang=\"de\">besucht</i>, <i lang=\"de\">verstanden</i>), and in a separable verb <i lang=\"de\">ge-</i> stands after the prefix (<i lang=\"de\">eingeschlafen</i>).</p>\n<p>A participle used as an adjective before a noun takes the adjective endings: <i lang=\"de\">die geschlossene Tür</i>, <i lang=\"de\">ein gebrochenes Herz</i>. The present participle ends in <i lang=\"de\">-end</i>: <i lang=\"de\">das schlafende Kind</i>. German can put a whole phrase before the participle, between the article and the noun; this is the extended attribute: <i lang=\"de\">der vor dem Haus wartende Mann</i> (“the man waiting in front of the house”).</p>",
   "qp": {
    "id": "q-de-voice-ptc",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">Sie ist nach Hause ______</i> (“she has gone home”)?",
      "options": [
       "<i lang=\"de\">gegangene</i>",
       "<i lang=\"de\">gehen</i>",
       "<i lang=\"de\">ging</i>",
       "<i lang=\"de\">gegangen</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Gehen</i> is a verb of motion; its perfect is <i lang=\"de\">ist gegangen</i>."
     },
     {
      "prompt": "Which form is the past participle of <i lang=\"de\">telefonieren</i>?",
      "options": [
       "<i lang=\"de\">telefoniert</i>",
       "<i lang=\"de\">getelefoniert</i>",
       "<i lang=\"de\">telefonierte</i>",
       "<i lang=\"de\">telefonieren</i>"
      ],
      "answer": 0,
      "explain": "Verbs in <i lang=\"de\">-ieren</i> have no <i lang=\"de\">ge-</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">ein ______ Kind</i> (“a laughing child”)?",
      "options": [
       "<i lang=\"de\">lachend</i>",
       "<i lang=\"de\">lachendes</i>",
       "<i lang=\"de\">lachende</i>",
       "<i lang=\"de\">gelachtes</i>"
      ],
      "answer": 1,
      "explain": "The present participle takes the adjective ending; after <i lang=\"de\">ein</i> the neuter nominative is <i lang=\"de\">-es</i>."
     }
    ]
   }
  }
 ]
};
