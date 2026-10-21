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
   "body": "<p>English “drive, drove, driven” and German <i>treiben, trieb, getrieben</i> come from one source, and both languages form the past of their strong verbs by a change of vowel, which Jacob Grimm named the <i>Ablaut</i>, as we have seen in English. A German strong verb is learned by its principal parts, the infinitive, the Präteritum, and the past participle, and the vowels follow a few patterns:</p>\n<p><strong>ei, ie, ie</strong>: <i>bleiben, blieb, geblieben</i> (“stay”); <i>schreiben, schrieb, geschrieben</i> (“write”)<br><strong>ei, i, i</strong>: <i>reiten, ritt, geritten</i> (“ride”); <i>schneiden, schnitt, geschnitten</i> (“cut”)<br><strong>ie, o, o</strong>: <i>fliegen, flog, geflogen</i> (“fly”); <i>schließen, schloss, geschlossen</i> (“shut”)<br><strong>i, a, u</strong>: <i>finden, fand, gefunden</i> (“find”); <i>singen, sang, gesungen</i> (“sing”)<br><strong>e, a, o</strong>: <i>helfen, half, geholfen</i> (“help”); <i>nehmen, nahm, genommen</i> (“take”)<br><strong>e, a, e</strong>: <i>lesen, las, gelesen</i> (“read”); <i>essen, aß, gegessen</i> (“eat”)<br><strong>a, u, a</strong>: <i>fahren, fuhr, gefahren</i> (“drive”); <i>tragen, trug, getragen</i> (“carry”)<br><strong>a, ie, a</strong>: <i>fallen, fiel, gefallen</i> (“fall”); <i>schlafen, schlief, geschlafen</i> (“sleep”)</p>",
   "qp": {
    "id": "q-de-series",
    "variants": [
     {
      "prompt": "What is the Präteritum of <i>steigen</i> (“climb”), of the series <i>ei, ie, ie</i>?",
      "options": [
       "<i>stig</i>",
       "<i>steigte</i>",
       "<i>stieg</i>",
       "<i>stog</i>"
      ],
      "answer": 2,
      "explain": "<i>Steigen</i> follows <i>bleiben</i>: <i>stieg</i>, <i>gestiegen</i>."
     },
     {
      "prompt": "What is the past participle of <i>trinken</i> (“drink”), of the series <i>i, a, u</i>?",
      "options": [
       "<i>getranken</i>",
       "<i>getrunken</i>",
       "<i>getrinkt</i>",
       "<i>getrinken</i>"
      ],
      "answer": 1,
      "explain": "<i>Trinken, trank, getrunken</i>, like <i>finden</i>."
     },
     {
      "prompt": "What is the Präteritum of <i>tragen</i>?",
      "options": [
       "<i>trug</i>",
       "<i>trag</i>",
       "<i>trägte</i>",
       "<i>trieg</i>"
      ],
      "answer": 0,
      "explain": "<i>Tragen</i> follows the series <i>a, u, a</i>: <i>trug</i>, <i>getragen</i>."
     }
    ]
   }
  },
  {
   "id": "present",
   "title": "The change of vowel in the present",
   "body": "<p>Many strong verbs also change their vowel in the second and third persons singular of the present, as we saw with <i>sprechen</i> and <i>geben</i>. Verbs with <i>e</i> change it to <i>i</i> or <i>ie</i>: <i>nehmen</i>, <i>du nimmst</i>, <i>er nimmt</i>; <i>lesen</i>, <i>du liest</i>, <i>er liest</i>; <i>helfen</i>, <i>er hilft</i>. Verbs with <i>a</i> take the umlaut: <i>fahren</i>, <i>du fährst</i>, <i>er fährt</i>; <i>schlafen</i>, <i>er schläft</i>; <i>tragen</i>, <i>er trägt</i>; and <i>laufen</i> has <i>er läuft</i>. The verbs that change <i>e</i> to <i>i</i> or <i>ie</i> make the same change in the imperative singular (<i>nimm!</i>, <i>lies!</i>, <i>hilf!</i>), whereas those that take the umlaut do not (<i>fahr!</i>, <i>schlaf!</i>).</p>",
   "qp": {
    "id": "q-de-present",
    "variants": [
     {
      "prompt": "What is the third person singular present of <i>essen</i>?",
      "options": [
       "<i>esst</i>",
       "<i>ässt</i>",
       "<i>isst</i>",
       "<i>eßt</i>"
      ],
      "answer": 2,
      "explain": "<i>Essen</i> changes <i>e</i> to <i>i</i>: <i>du isst</i>, <i>er isst</i>."
     },
     {
      "prompt": "What is the second person singular present of <i>fallen</i>?",
      "options": [
       "<i>fallst</i>",
       "<i>fällst</i>",
       "<i>fielst</i>",
       "<i>fillst</i>"
      ],
      "answer": 1,
      "explain": "Verbs with <i>a</i> take the umlaut in the second and third persons singular."
     },
     {
      "prompt": "What is the imperative singular of <i>helfen</i>?",
      "options": [
       "<i>hilf!</i>",
       "<i>helf!</i>",
       "<i>hälf!</i>",
       "<i>hilft!</i>"
      ],
      "answer": 0,
      "explain": "A verb that changes <i>e</i> to <i>i</i> in the present makes the same change in the imperative singular."
     }
    ]
   }
  },
  {
   "id": "perfekt",
   "title": "Haben or sein, and the participle",
   "body": "<p>A strong verb forms its past participle with <i>ge-</i> and <i>-en</i>, as <i>gefunden</i> and <i>getragen</i>, except that a verb with an inseparable prefix or in <i>-ieren</i> takes no <i>ge-</i>: <i>bekommen</i>, <i>bekommen</i>; <i>verlieren</i>, <i>verloren</i>; and the weak <i>studieren</i>, <i>studiert</i>. Verbs of motion and change of state form the Perfekt with <i>sein</i>: <i>er ist geflogen</i>, <i>sie ist gefallen</i>, <i>wir sind gefahren</i>, <i>es ist geblieben</i> (<i>bleiben</i> takes <i>sein</i> as well). The same verb can take <i>haben</i> when it has a direct object: <i>er ist nach Berlin gefahren</i> (“he drove to Berlin”), but <i>er hat das Auto gefahren</i> (“he drove the car”).</p>",
   "qp": {
    "id": "q-de-perfekt",
    "variants": [
     {
      "prompt": "Choose the auxiliary: <i>Wir ___ lange geschlafen</i> (“We slept a long time”).",
      "options": [
       "<i>haben</i>",
       "<i>sind</i>",
       "<i>werden</i>",
       "<i>hatten</i>"
      ],
      "answer": 0,
      "explain": "<i>Schlafen</i> is neither a verb of motion nor of change of state, so it takes <i>haben</i>."
     },
     {
      "prompt": "What is the past participle of <i>verstehen</i> (“understand”)?",
      "options": [
       "<i>geverstanden</i>",
       "<i>verstehen</i>",
       "<i>verstand</i>",
       "<i>verstanden</i>"
      ],
      "answer": 3,
      "explain": "A verb with an inseparable prefix takes no <i>ge-</i>: <i>verstanden</i>."
     },
     {
      "prompt": "Choose the auxiliary: <i>Das Kind ___ ins Wasser gefallen</i> (“The child fell into the water”).",
      "options": [
       "<i>hat</i>",
       "<i>wird</i>",
       "<i>ist</i>",
       "<i>war</i>"
      ],
      "answer": 2,
      "explain": "<i>Fallen</i> is a verb of motion and takes <i>sein</i>."
     }
    ]
   }
  },
  {
   "id": "mixed",
   "title": "The mixed verbs",
   "body": "<p>A few verbs, as in English “bring, brought” and “think, thought,” both change their vowel and take the weak endings <i>-te</i> and <i>-t</i>: <i>bringen, brachte, gebracht</i>; <i>denken, dachte, gedacht</i>; <i>kennen, kannte, gekannt</i>; <i>nennen, nannte, genannt</i>; <i>rennen, rannte, ist gerannt</i>; <i>wissen, wusste, gewusst</i>. Grammars call these the <strong>mixed verbs</strong> (<i>gemischte Verben</i>). <i>Wissen</i> (“to know”) also has an irregular present: <i>ich weiß</i>, <i>du weißt</i>, <i>er weiß</i>, <i>wir wissen</i>. In the Konjunktiv II, <i>bringen</i>, <i>denken</i>, and <i>wissen</i> take the umlaut (<i>brächte</i>, <i>dächte</i>, <i>wüsste</i>), whereas <i>kennen</i> and <i>nennen</i> usually use <i>würde</i> with the infinitive.</p>",
   "qp": {
    "id": "q-de-mixed",
    "variants": [
     {
      "prompt": "What is the Präteritum of <i>denken</i>?",
      "options": [
       "<i>denkte</i>",
       "<i>dank</i>",
       "<i>dachte</i>",
       "<i>dächte</i>"
      ],
      "answer": 2,
      "explain": "<i>Denken</i> is a mixed verb: <i>dachte</i>, <i>gedacht</i>. <i>Dächte</i> is the Konjunktiv II."
     },
     {
      "prompt": "What is the past participle of <i>kennen</i>?",
      "options": [
       "<i>gekennt</i>",
       "<i>gekannt</i>",
       "<i>gekonnt</i>",
       "<i>gekannen</i>"
      ],
      "answer": 1,
      "explain": "<i>Kennen, kannte, gekannt</i>."
     },
     {
      "prompt": "What is the third person singular present of <i>wissen</i>?",
      "options": [
       "<i>weiß</i>",
       "<i>wisst</i>",
       "<i>weißt</i>",
       "<i>wusste</i>"
      ],
      "answer": 0,
      "explain": "<i>Wissen</i> has an irregular present: <i>ich weiß</i>, <i>er weiß</i>, with no ending in the third person."
     }
    ]
   }
  }
 ]
};
