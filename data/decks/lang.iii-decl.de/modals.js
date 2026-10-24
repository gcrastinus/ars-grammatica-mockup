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
   "body": "<p>English “can,” “must,” and “may” take no “-s” in the third person (“she can”), and the German modal verbs behave the same way: the first and third persons singular of the present have no ending. Most of them also change their vowel in the singular:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>können</th> <th>müssen</th> <th>dürfen</th> <th>sollen</th> <th>wollen</th> <th>mögen</th></tr>\n<tr><td>ich</td> <td class=\"f\">kann</td> <td class=\"f\">muss</td> <td class=\"f\">darf</td> <td class=\"f\">soll</td> <td class=\"f\">will</td> <td class=\"f\">mag</td></tr>\n<tr><td>du</td> <td class=\"f\">kannst</td> <td class=\"f\">musst</td> <td class=\"f\">darfst</td> <td class=\"f\">sollst</td> <td class=\"f\">willst</td> <td class=\"f\">magst</td></tr>\n<tr><td>er, sie, es</td> <td class=\"f\">kann</td> <td class=\"f\">muss</td> <td class=\"f\">darf</td> <td class=\"f\">soll</td> <td class=\"f\">will</td> <td class=\"f\">mag</td></tr>\n<tr><td>wir</td> <td class=\"f\">können</td> <td class=\"f\">müssen</td> <td class=\"f\">dürfen</td> <td class=\"f\">sollen</td> <td class=\"f\">wollen</td> <td class=\"f\">mögen</td></tr>\n<tr><td>ihr</td> <td class=\"f\">könnt</td> <td class=\"f\">müsst</td> <td class=\"f\">dürft</td> <td class=\"f\">sollt</td> <td class=\"f\">wollt</td> <td class=\"f\">mögt</td></tr>\n<tr><td>sie, Sie</td> <td class=\"f\">können</td> <td class=\"f\">müssen</td> <td class=\"f\">dürfen</td> <td class=\"f\">sollen</td> <td class=\"f\">wollen</td> <td class=\"f\">mögen</td></tr>\n</table></div>\n<p>A modal verb takes an infinitive without <i lang=\"de\">zu</i>, which stands at the end of the main clause: <i lang=\"de\">Ich kann heute nicht kommen</i> (“I cannot come today”). <i lang=\"de\">Können</i> is “can,” <i lang=\"de\">müssen</i> “must,” <i lang=\"de\">dürfen</i> “may” (of permission), <i lang=\"de\">sollen</i> “ought,” “be supposed to,” <i lang=\"de\">wollen</i> “want to,” and <i lang=\"de\">mögen</i> “like”; its Konjunktiv II <i lang=\"de\">möchte</i> (“would like”) is used as a polite present: <i lang=\"de\">Ich möchte einen Kaffee</i>.</p>",
   "qp": {
    "id": "q-de-modals-present",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"de\">Er ___ gut schwimmen</i> (“He can swim well”).",
      "options": [
       "<i lang=\"de\">kannt</i>",
       "<i lang=\"de\">könnt</i>",
       "<i lang=\"de\">können</i>",
       "<i lang=\"de\">kann</i>"
      ],
      "answer": 3,
      "explain": "The third person singular of a modal verb has no ending: <i lang=\"de\">er kann</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"de\">Du ___ hier nicht rauchen</i> (“You may not smoke here”).",
      "options": [
       "<i lang=\"de\">darfst</i>",
       "<i lang=\"de\">dürfst</i>",
       "<i lang=\"de\">darf</i>",
       "<i lang=\"de\">dürft</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Dürfen</i> has the vowel <i lang=\"de\">a</i> in the singular: <i lang=\"de\">du darfst</i>."
     },
     {
      "prompt": "Where does the infinitive stand in <i lang=\"de\">Wir wollen morgen früh abfahren</i>?",
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
   "body": "<p>The Präteritum of a modal verb takes the weak endings and drops the umlaut: <i lang=\"de\">konnte</i>, <i lang=\"de\">musste</i>, <i lang=\"de\">durfte</i>, <i lang=\"de\">sollte</i>, <i lang=\"de\">wollte</i>, <i lang=\"de\">mochte</i>. In the Konjunktiv II the umlaut returns where the infinitive has it: <i lang=\"de\">könnte</i> (“could”), <i lang=\"de\">müsste</i>, <i lang=\"de\">dürfte</i>, <i lang=\"de\">möchte</i>; but <i lang=\"de\">sollte</i> and <i lang=\"de\">wollte</i> have the same form as the Präteritum. In the Perfekt, a modal used with another verb does not take its participle (<i lang=\"de\">gekonnt</i>) but its infinitive, so that two infinitives stand at the end: <i lang=\"de\">Ich habe nicht kommen können</i> (“I was not able to come”). Grammars call this the double infinitive, or <i lang=\"de\">Ersatzinfinitiv</i> (“substitute infinitive”). Used alone, the modal takes its participle: <i lang=\"de\">Ich habe es nicht gekonnt</i>.</p>",
   "qp": {
    "id": "q-de-modals-past",
    "variants": [
     {
      "prompt": "What is the Präteritum, third person singular, of <i lang=\"de\">müssen</i>?",
      "options": [
       "<i lang=\"de\">musste</i>",
       "<i lang=\"de\">müsste</i>",
       "<i lang=\"de\">muss</i>",
       "<i lang=\"de\">gemusst</i>"
      ],
      "answer": 0,
      "explain": "The Präteritum drops the umlaut: <i lang=\"de\">musste</i>; <i lang=\"de\">müsste</i> is the Konjunktiv II."
     },
     {
      "prompt": "Choose the form: <i lang=\"de\">Er hat gestern arbeiten ___</i> (“He had to work yesterday”).",
      "options": [
       "<i lang=\"de\">gemusst</i>",
       "<i lang=\"de\">musste</i>",
       "<i lang=\"de\">müsste</i>",
       "<i lang=\"de\">müssen</i>"
      ],
      "answer": 3,
      "explain": "With a dependent infinitive, the Perfekt of a modal uses the infinitive in place of the participle."
     },
     {
      "prompt": "What does <i lang=\"de\">Ich könnte dir helfen</i> mean?",
      "options": [
       "“I was able to help you”",
       "“I can help you”",
       "“I could help you”",
       "“I have been able to help you”"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Könnte</i> is the Konjunktiv II, “could” in the sense of a possibility."
     }
    ]
   }
  }
 ]
};
