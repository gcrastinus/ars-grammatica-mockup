window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.de/strong"] = {
 "id": "lang.iii-decl.de/strong",
 "title": "Strong and Mixed Verbs in German",
 "sub": "The ablaut series of the strong verbs, the change of vowel in the present, and the mixed verbs",
 "sources": "Duden, <i>Die Grammatik</i>; Duden, <i>Die deutsche Rechtschreibung</i>; Jacob Grimm, <i>Deutsche Grammatik</i> (1819)",
 "panels": [
  {
   "id": "series",
   "title": "The ablaut series",
   "body": "<p>English “drive, drove, driven” and German <i lang=\"de\">treiben, trieb, getrieben</i> come from one source, and both languages form the past of their strong verbs by a change of vowel, which Jacob Grimm named the <i lang=\"de\">Ablaut</i>, as we have seen in English. A German strong verb is learned by its principal parts, the infinitive, the Präteritum, and the past participle, and the vowels follow a few patterns:</p>\n<p><strong>ei, ie, ie</strong>: <i lang=\"de\">bleiben, blieb, geblieben</i> (“stay”); <i lang=\"de\">schreiben, schrieb, geschrieben</i> (“write”)<br><strong>ei, i, i</strong>: <i lang=\"de\">reiten, ritt, geritten</i> (“ride”); <i lang=\"de\">schneiden, schnitt, geschnitten</i> (“cut”)<br><strong>ie, o, o</strong>: <i lang=\"de\">fliegen, flog, geflogen</i> (“fly”); <i lang=\"de\">schließen, schloss, geschlossen</i> (“shut”)<br><strong>i, a, u</strong>: <i lang=\"de\">finden, fand, gefunden</i> (“find”); <i lang=\"de\">singen, sang, gesungen</i> (“sing”)<br><strong>e, a, o</strong>: <i lang=\"de\">helfen, half, geholfen</i> (“help”); <i lang=\"de\">nehmen, nahm, genommen</i> (“take”)<br><strong>e, a, e</strong>: <i lang=\"de\">lesen, las, gelesen</i> (“read”); <i lang=\"de\">essen, aß, gegessen</i> (“eat”)<br><strong>a, u, a</strong>: <i lang=\"de\">fahren, fuhr, gefahren</i> (“drive”); <i lang=\"de\">tragen, trug, getragen</i> (“carry”)<br><strong>a, ie, a</strong>: <i lang=\"de\">fallen, fiel, gefallen</i> (“fall”); <i lang=\"de\">schlafen, schlief, geschlafen</i> (“sleep”)</p>",
   "qp": {
    "id": "q-de-series",
    "variants": [
     {
      "prompt": "What is the Präteritum of <i lang=\"de\">steigen</i> (“climb”), of the series <i lang=\"de\">ei, ie, ie</i>?",
      "options": [
       "<i lang=\"de\">stig</i>",
       "<i lang=\"de\">steigte</i>",
       "<i lang=\"de\">stieg</i>",
       "<i lang=\"de\">stog</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Steigen</i> follows <i lang=\"de\">bleiben</i>: <i lang=\"de\">stieg</i>, <i lang=\"de\">gestiegen</i>."
     },
     {
      "prompt": "What is the past participle of <i lang=\"de\">trinken</i> (“drink”), of the series <i lang=\"de\">i, a, u</i>?",
      "options": [
       "<i lang=\"de\">getranken</i>",
       "<i lang=\"de\">getrunken</i>",
       "<i lang=\"de\">getrinkt</i>",
       "<i lang=\"de\">getrinken</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Trinken, trank, getrunken</i>, like <i lang=\"de\">finden</i>."
     },
     {
      "prompt": "What is the Präteritum of <i lang=\"de\">tragen</i>?",
      "options": [
       "<i lang=\"de\">trug</i>",
       "<i lang=\"de\">trag</i>",
       "<i lang=\"de\">trägte</i>",
       "<i lang=\"de\">trieg</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Tragen</i> follows the series <i lang=\"de\">a, u, a</i>: <i lang=\"de\">trug</i>, <i lang=\"de\">getragen</i>."
     }
    ]
   }
  },
  {
   "id": "present",
   "title": "The change of vowel in the present",
   "body": "<p>Many strong verbs also change their vowel in the second and third persons singular of the present, as we saw with <i lang=\"de\">sprechen</i> and <i lang=\"de\">geben</i>. Verbs with <i lang=\"de\">e</i> change it to <i lang=\"de\">i</i> or <i lang=\"de\">ie</i>: <i lang=\"de\">nehmen</i>, <i lang=\"de\">du nimmst</i>, <i lang=\"de\">er nimmt</i>; <i lang=\"de\">lesen</i>, <i lang=\"de\">du liest</i>, <i lang=\"de\">er liest</i>; <i lang=\"de\">helfen</i>, <i lang=\"de\">er hilft</i>. Verbs with <i lang=\"de\">a</i> take the umlaut: <i lang=\"de\">fahren</i>, <i lang=\"de\">du fährst</i>, <i lang=\"de\">er fährt</i>; <i lang=\"de\">schlafen</i>, <i lang=\"de\">er schläft</i>; <i lang=\"de\">tragen</i>, <i lang=\"de\">er trägt</i>; and <i lang=\"de\">laufen</i> has <i lang=\"de\">er läuft</i>. The verbs that change <i lang=\"de\">e</i> to <i lang=\"de\">i</i> or <i lang=\"de\">ie</i> make the same change in the imperative singular (<i lang=\"de\">nimm!</i>, <i lang=\"de\">lies!</i>, <i lang=\"de\">hilf!</i>), whereas those that take the umlaut do not (<i lang=\"de\">fahr!</i>, <i lang=\"de\">schlaf!</i>).</p>",
   "qp": {
    "id": "q-de-present",
    "variants": [
     {
      "prompt": "What is the third person singular present of <i lang=\"de\">essen</i>?",
      "options": [
       "<i lang=\"de\">esst</i>",
       "<i lang=\"de\">ässt</i>",
       "<i lang=\"de\">isst</i>",
       "<i lang=\"de\">eßt</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Essen</i> changes <i lang=\"de\">e</i> to <i lang=\"de\">i</i>: <i lang=\"de\">du isst</i>, <i lang=\"de\">er isst</i>."
     },
     {
      "prompt": "What is the second person singular present of <i lang=\"de\">fallen</i>?",
      "options": [
       "<i lang=\"de\">fallst</i>",
       "<i lang=\"de\">fällst</i>",
       "<i lang=\"de\">fielst</i>",
       "<i lang=\"de\">fillst</i>"
      ],
      "answer": 1,
      "explain": "Verbs with <i lang=\"de\">a</i> take the umlaut in the second and third persons singular."
     },
     {
      "prompt": "What is the imperative singular of <i lang=\"de\">helfen</i>?",
      "options": [
       "<i lang=\"de\">hilf!</i>",
       "<i lang=\"de\">helf!</i>",
       "<i lang=\"de\">hälf!</i>",
       "<i lang=\"de\">hilft!</i>"
      ],
      "answer": 0,
      "explain": "A verb that changes <i lang=\"de\">e</i> to <i lang=\"de\">i</i> in the present makes the same change in the imperative singular."
     }
    ]
   }
  },
  {
   "id": "perfekt",
   "title": "Haben or sein, and the participle",
   "body": "<p>A strong verb forms its past participle with <i lang=\"de\">ge-</i> and <i lang=\"de\">-en</i>, as <i lang=\"de\">gefunden</i> and <i lang=\"de\">getragen</i>, except that a verb with an inseparable prefix or in <i lang=\"de\">-ieren</i> takes no <i lang=\"de\">ge-</i>: <i lang=\"de\">bekommen</i>, <i lang=\"de\">bekommen</i>; <i lang=\"de\">verlieren</i>, <i lang=\"de\">verloren</i>; and the weak <i lang=\"de\">studieren</i>, <i lang=\"de\">studiert</i>. Verbs of motion and change of state form the Perfekt with <i lang=\"de\">sein</i>: <i lang=\"de\">er ist geflogen</i>, <i lang=\"de\">sie ist gefallen</i>, <i lang=\"de\">wir sind gefahren</i>, <i lang=\"de\">es ist geblieben</i> (<i lang=\"de\">bleiben</i> takes <i lang=\"de\">sein</i> as well). The same verb can take <i lang=\"de\">haben</i> when it has a direct object: <i lang=\"de\">er ist nach Berlin gefahren</i> (“he drove to Berlin”), but <i lang=\"de\">er hat das Auto gefahren</i> (“he drove the car”).</p>",
   "qp": {
    "id": "q-de-perfekt",
    "variants": [
     {
      "prompt": "Choose the auxiliary: <i lang=\"de\">Wir ___ lange geschlafen</i> (“We slept a long time”).",
      "options": [
       "<i lang=\"de\">haben</i>",
       "<i lang=\"de\">sind</i>",
       "<i lang=\"de\">werden</i>",
       "<i lang=\"de\">hatten</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Schlafen</i> is neither a verb of motion nor of change of state, so it takes <i lang=\"de\">haben</i>."
     },
     {
      "prompt": "What is the past participle of <i lang=\"de\">verstehen</i> (“understand”)?",
      "options": [
       "<i lang=\"de\">geverstanden</i>",
       "<i lang=\"de\">verstehen</i>",
       "<i lang=\"de\">verstand</i>",
       "<i lang=\"de\">verstanden</i>"
      ],
      "answer": 3,
      "explain": "A verb with an inseparable prefix takes no <i lang=\"de\">ge-</i>: <i lang=\"de\">verstanden</i>."
     },
     {
      "prompt": "Choose the auxiliary: <i lang=\"de\">Das Kind ___ ins Wasser gefallen</i> (“The child fell into the water”).",
      "options": [
       "<i lang=\"de\">hat</i>",
       "<i lang=\"de\">wird</i>",
       "<i lang=\"de\">ist</i>",
       "<i lang=\"de\">war</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Fallen</i> is a verb of motion and takes <i lang=\"de\">sein</i>."
     }
    ]
   }
  },
  {
   "id": "mixed",
   "title": "The mixed verbs",
   "body": "<p>A few verbs, as in English “bring, brought” and “think, thought,” both change their vowel and take the weak endings <i lang=\"de\">-te</i> and <i lang=\"de\">-t</i>: <i lang=\"de\">bringen, brachte, gebracht</i>; <i lang=\"de\">denken, dachte, gedacht</i>; <i lang=\"de\">kennen, kannte, gekannt</i>; <i lang=\"de\">nennen, nannte, genannt</i>; <i lang=\"de\">rennen, rannte, ist gerannt</i>; <i lang=\"de\">wissen, wusste, gewusst</i>. Grammars call these the <strong>mixed verbs</strong> (<i lang=\"de\">gemischte Verben</i>). <i lang=\"de\">Wissen</i> (“to know”) also has an irregular present: <i lang=\"de\">ich weiß</i>, <i lang=\"de\">du weißt</i>, <i lang=\"de\">er weiß</i>, <i lang=\"de\">wir wissen</i>. In the Konjunktiv II, <i lang=\"de\">bringen</i>, <i lang=\"de\">denken</i>, and <i lang=\"de\">wissen</i> take the umlaut (<i lang=\"de\">brächte</i>, <i lang=\"de\">dächte</i>, <i lang=\"de\">wüsste</i>), whereas <i lang=\"de\">kennen</i> and <i lang=\"de\">nennen</i> usually use <i lang=\"de\">würde</i> with the infinitive.</p>",
   "qp": {
    "id": "q-de-mixed",
    "variants": [
     {
      "prompt": "What is the Präteritum of <i lang=\"de\">denken</i>?",
      "options": [
       "<i lang=\"de\">denkte</i>",
       "<i lang=\"de\">dank</i>",
       "<i lang=\"de\">dachte</i>",
       "<i lang=\"de\">dächte</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Denken</i> is a mixed verb: <i lang=\"de\">dachte</i>, <i lang=\"de\">gedacht</i>. <i lang=\"de\">Dächte</i> is the Konjunktiv II."
     },
     {
      "prompt": "What is the past participle of <i lang=\"de\">kennen</i>?",
      "options": [
       "<i lang=\"de\">gekennt</i>",
       "<i lang=\"de\">gekannt</i>",
       "<i lang=\"de\">gekonnt</i>",
       "<i lang=\"de\">gekannen</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Kennen</i> is a mixed verb: <i lang=\"de\">kennen, kannte, gekannt</i>."
     },
     {
      "prompt": "What is the third person singular present of <i lang=\"de\">wissen</i>?",
      "options": [
       "<i lang=\"de\">weiß</i>",
       "<i lang=\"de\">wisst</i>",
       "<i lang=\"de\">weißt</i>",
       "<i lang=\"de\">wusste</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Wissen</i> has an irregular present: <i lang=\"de\">ich weiß</i>, <i lang=\"de\">er weiß</i>, with no ending in the third person."
     }
    ]
   }
  }
 ]
};
