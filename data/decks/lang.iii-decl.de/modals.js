window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.de/modals"] = {
 "id": "lang.iii-decl.de/modals",
 "title": "The German Modal Verbs",
 "sub": "Können, müssen, dürfen, sollen, wollen, and mögen: their present, their past, and the double infinitive",
 "sources": "Duden, <i>Die Grammatik</i>; Duden, <i>Die deutsche Rechtschreibung</i>",
 "panels": [
  {
   "id": "present",
   "title": "The present of the modal verbs",
   "body": "<p>English “can,” “must,” and “may” take no “-s” in the third person (“she can”), and the German modal verbs behave the same way: the first and third persons singular of the present have no ending. Most of them also change their vowel in the singular:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>können</th> <th>müssen</th> <th>dürfen</th> <th>sollen</th> <th>wollen</th> <th>mögen</th></tr>\n<tr><td>ich</td> <td class=\"f\">kann</td> <td class=\"f\">muss</td> <td class=\"f\">darf</td> <td class=\"f\">soll</td> <td class=\"f\">will</td> <td class=\"f\">mag</td></tr>\n<tr><td>du</td> <td class=\"f\">kannst</td> <td class=\"f\">musst</td> <td class=\"f\">darfst</td> <td class=\"f\">sollst</td> <td class=\"f\">willst</td> <td class=\"f\">magst</td></tr>\n<tr><td>er, sie, es</td> <td class=\"f\">kann</td> <td class=\"f\">muss</td> <td class=\"f\">darf</td> <td class=\"f\">soll</td> <td class=\"f\">will</td> <td class=\"f\">mag</td></tr>\n<tr><td>wir</td> <td class=\"f\">können</td> <td class=\"f\">müssen</td> <td class=\"f\">dürfen</td> <td class=\"f\">sollen</td> <td class=\"f\">wollen</td> <td class=\"f\">mögen</td></tr>\n<tr><td>ihr</td> <td class=\"f\">könnt</td> <td class=\"f\">müsst</td> <td class=\"f\">dürft</td> <td class=\"f\">sollt</td> <td class=\"f\">wollt</td> <td class=\"f\">mögt</td></tr>\n<tr><td>sie, Sie</td> <td class=\"f\">können</td> <td class=\"f\">müssen</td> <td class=\"f\">dürfen</td> <td class=\"f\">sollen</td> <td class=\"f\">wollen</td> <td class=\"f\">mögen</td></tr>\n</table></div>\n<p>A modal verb takes an infinitive without <i>zu</i>, which stands at the end of the main clause: <i>Ich kann heute nicht kommen</i> (“I cannot come today”). <i>Können</i> is “can,” <i>müssen</i> “must,” <i>dürfen</i> “may” (of permission), <i>sollen</i> “ought,” “be supposed to,” <i>wollen</i> “want to,” and <i>mögen</i> “like”; its Konjunktiv II <i>möchte</i> (“would like”) is used as a polite present: <i>Ich möchte einen Kaffee</i>.</p>",
   "qp": {
    "id": "q-de-modals-present",
    "variants": [
     {
      "prompt": "Choose the form: <i>Er ___ gut schwimmen</i> (“He can swim well”).",
      "options": [
       "<i>kannt</i>",
       "<i>könnt</i>",
       "<i>können</i>",
       "<i>kann</i>"
      ],
      "answer": 3,
      "explain": "The third person singular of a modal verb has no ending: <i>er kann</i>."
     },
     {
      "prompt": "Choose the form: <i>Du ___ hier nicht rauchen</i> (“You may not smoke here”).",
      "options": [
       "<i>darfst</i>",
       "<i>dürfst</i>",
       "<i>darf</i>",
       "<i>dürft</i>"
      ],
      "answer": 0,
      "explain": "<i>Dürfen</i> has the vowel <i>a</i> in the singular: <i>du darfst</i>."
     },
     {
      "prompt": "Where does the infinitive stand in <i>Wir wollen morgen früh abfahren</i>?",
      "options": [
       "Right after the modal verb",
       "At the end of the clause",
       "At the beginning of the clause",
       "Before the subject"
      ],
      "answer": 1,
      "explain": "The modal stands in the second place, and its infinitive at the end of the main clause."
     }
    ]
   }
  },
  {
   "id": "past",
   "title": "The past of the modal verbs",
   "body": "<p>The Präteritum of a modal verb takes the weak endings and drops the umlaut: <i>konnte</i>, <i>musste</i>, <i>durfte</i>, <i>sollte</i>, <i>wollte</i>, <i>mochte</i>. In the Konjunktiv II the umlaut returns where the infinitive has it: <i>könnte</i> (“could”), <i>müsste</i>, <i>dürfte</i>, <i>möchte</i>; but <i>sollte</i> and <i>wollte</i> have the same form as the Präteritum. In the Perfekt, a modal used with another verb does not take its participle (<i>gekonnt</i>) but its infinitive, so that two infinitives stand at the end: <i>Ich habe nicht kommen können</i> (“I was not able to come”). Grammars call this the double infinitive, or <i>Ersatzinfinitiv</i> (“substitute infinitive”). Used alone, the modal takes its participle: <i>Ich habe es nicht gekonnt</i>.</p>",
   "qp": {
    "id": "q-de-modals-past",
    "variants": [
     {
      "prompt": "What is the Präteritum, third person singular, of <i>müssen</i>?",
      "options": [
       "<i>musste</i>",
       "<i>müsste</i>",
       "<i>muss</i>",
       "<i>gemusst</i>"
      ],
      "answer": 0,
      "explain": "The Präteritum drops the umlaut: <i>musste</i>; <i>müsste</i> is the Konjunktiv II."
     },
     {
      "prompt": "Choose the form: <i>Er hat gestern arbeiten ___</i> (“He had to work yesterday”).",
      "options": [
       "<i>gemusst</i>",
       "<i>musste</i>",
       "<i>müsste</i>",
       "<i>müssen</i>"
      ],
      "answer": 3,
      "explain": "With a dependent infinitive, the Perfekt of a modal uses the infinitive in place of the participle."
     },
     {
      "prompt": "What does <i>Ich könnte dir helfen</i> mean?",
      "options": [
       "“I was able to help you”",
       "“I can help you”",
       "“I could help you”",
       "“I have been able to help you”"
      ],
      "answer": 2,
      "explain": "<i>Könnte</i> is the Konjunktiv II, “could” in the sense of a possibility."
     }
    ]
   }
  }
 ]
};
