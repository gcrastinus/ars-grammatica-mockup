window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.de/konjunktiv"] = {
 "id": "lang.iii-decl.de/konjunktiv",
 "title": "The Konjunktiv and the Compound Tenses",
 "sub": "The forms of the Konjunktiv I and II, their past, and the Plusquamperfekt and Futur II",
 "sources": "Duden, <i>Die Grammatik</i>; Duden, <i>Die deutsche Rechtschreibung</i>",
 "panels": [
  {
   "id": "k1",
   "title": "The forms of the Konjunktiv I",
   "body": "<p>The Konjunktiv I is formed from the stem of the infinitive with the endings <i lang=\"de\">-e</i>, <i lang=\"de\">-est</i>, <i lang=\"de\">-e</i>, <i lang=\"de\">-en</i>, <i lang=\"de\">-et</i>, <i lang=\"de\">-en</i>, and it never changes the vowel as the present indicative does: <i lang=\"de\">er komme</i>, <i lang=\"de\">er nehme</i> (indicative <i lang=\"de\">er nimmt</i>), <i lang=\"de\">er fahre</i> (indicative <i lang=\"de\">er fährt</i>), <i lang=\"de\">er habe</i>, <i lang=\"de\">er könne</i>, <i lang=\"de\">er werde</i>. <i lang=\"de\">Sein</i> is irregular:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>sein</th> <th>haben</th> <th>kommen</th></tr>\n<tr><td>ich</td> <td class=\"f\">sei</td> <td class=\"f\">habe</td> <td class=\"f\">komme</td></tr>\n<tr><td>du</td> <td class=\"f\">sei(e)st</td> <td class=\"f\">habest</td> <td class=\"f\">kommest</td></tr>\n<tr><td>er, sie, es</td> <td class=\"f\">sei</td> <td class=\"f\">habe</td> <td class=\"f\">komme</td></tr>\n<tr><td>wir</td> <td class=\"f\">seien</td> <td class=\"f\">haben</td> <td class=\"f\">kommen</td></tr>\n<tr><td>ihr</td> <td class=\"f\">seiet</td> <td class=\"f\">habet</td> <td class=\"f\">kommet</td></tr>\n<tr><td>sie, Sie</td> <td class=\"f\">seien</td> <td class=\"f\">haben</td> <td class=\"f\">kommen</td></tr>\n</table></div>\n<p>The Konjunktiv I is used above all in reported speech in written German: <i lang=\"de\">Der Minister sagte, er habe keine Zeit</i> (“The minister said he had no time”). Where its form is the same as the indicative, as in <i lang=\"de\">sie haben</i> or <i lang=\"de\">wir kommen</i>, the Konjunktiv II takes its place, so that the reported speech remains clear: <i lang=\"de\">Sie sagten, sie hätten keine Zeit</i>.</p>",
   "qp": {
    "id": "q-de-k1",
    "variants": [
     {
      "prompt": "What is the Konjunktiv I, third person singular, of <i lang=\"de\">geben</i>?",
      "options": [
       "<i lang=\"de\">gibt</i>",
       "<i lang=\"de\">gäbe</i>",
       "<i lang=\"de\">gab</i>",
       "<i lang=\"de\">gebe</i>"
      ],
      "answer": 3,
      "explain": "The Konjunktiv I keeps the vowel of the infinitive: <i lang=\"de\">er gebe</i>; <i lang=\"de\">gäbe</i> is the Konjunktiv II."
     },
     {
      "prompt": "Choose the form in reported speech: <i lang=\"de\">Er sagt, er ___ krank</i> (“He says he is ill”).",
      "options": [
       "<i lang=\"de\">sei</i>",
       "<i lang=\"de\">ist</i>",
       "<i lang=\"de\">wäre</i>",
       "<i lang=\"de\">seie</i>"
      ],
      "answer": 0,
      "explain": "Reported speech in written German uses the Konjunktiv I: <i lang=\"de\">er sei</i>."
     },
     {
      "prompt": "Why does reported speech say <i lang=\"de\">sie hätten</i> rather than <i lang=\"de\">sie haben</i>?",
      "options": [
       "<i lang=\"de\">Haben</i> has no Konjunktiv I at all",
       "Its Konjunktiv I looks like the indicative",
       "Plural subjects always take the Konjunktiv II",
       "<i lang=\"de\">Hätten</i> is the Konjunktiv I"
      ],
      "answer": 1,
      "explain": "Where the Konjunktiv I cannot be told from the indicative, the Konjunktiv II takes its place."
     }
    ]
   }
  },
  {
   "id": "k2",
   "title": "The forms of the Konjunktiv II",
   "body": "<p>The Konjunktiv II is built on the Präteritum. A strong verb adds <i lang=\"de\">-e</i> and takes the umlaut where its vowel allows it: <i lang=\"de\">kam</i>, <i lang=\"de\">käme</i>; <i lang=\"de\">ging</i>, <i lang=\"de\">ginge</i>; <i lang=\"de\">fuhr</i>, <i lang=\"de\">führe</i>; <i lang=\"de\">war</i>, <i lang=\"de\">wäre</i>; <i lang=\"de\">hatte</i>, <i lang=\"de\">hätte</i>; <i lang=\"de\">wurde</i>, <i lang=\"de\">würde</i>. A weak verb has the same form as its Präteritum (<i lang=\"de\">machte</i>), and many strong verbs have old forms that sound stiff (<i lang=\"de\">hülfe</i>, <i lang=\"de\">stürbe</i>), so present-day German usually forms the Konjunktiv II of all but the commonest verbs with <i lang=\"de\">würde</i> and the infinitive: <i lang=\"de\">ich würde helfen</i>. The past Konjunktiv II is formed with <i lang=\"de\">hätte</i> or <i lang=\"de\">wäre</i> and the participle: <i lang=\"de\">Wenn ich das gewusst hätte, wäre ich gekommen</i> (“If I had known that, I would have come”).</p>",
   "qp": {
    "id": "q-de-k2",
    "variants": [
     {
      "prompt": "What is the Konjunktiv II, third person singular, of <i lang=\"de\">gehen</i> (Präteritum <i lang=\"de\">ging</i>)?",
      "options": [
       "<i lang=\"de\">gänge</i>",
       "<i lang=\"de\">gehe</i>",
       "<i lang=\"de\">ginge</i>",
       "<i lang=\"de\">ging</i>"
      ],
      "answer": 2,
      "explain": "The Konjunktiv II adds <i lang=\"de\">-e</i> to the Präteritum: <i lang=\"de\">ginge</i>; the <i lang=\"de\">i</i> cannot take an umlaut."
     },
     {
      "prompt": "Why does German usually say <i lang=\"de\">ich würde arbeiten</i> rather than <i lang=\"de\">ich arbeitete</i>?",
      "options": [
       "<i lang=\"de\">Arbeiten</i> has no Präteritum of its own in German",
       "The weak Konjunktiv II looks like the Präteritum",
       "<i lang=\"de\">Würde</i> is the Konjunktiv I",
       "The Konjunktiv II is always formed with <i lang=\"de\">würde</i>"
      ],
      "answer": 1,
      "explain": "For a weak verb the Konjunktiv II has the same form as the Präteritum, so <i lang=\"de\">würde</i> with the infinitive is clearer."
     },
     {
      "prompt": "Choose the form: <i lang=\"de\">Wenn er Zeit gehabt ___, wäre er gekommen</i> (“If he had had time, he would have come”).",
      "options": [
       "<i lang=\"de\">hätte</i>",
       "<i lang=\"de\">hatte</i>",
       "<i lang=\"de\">habe</i>",
       "<i lang=\"de\">würde</i>"
      ],
      "answer": 0,
      "explain": "The past Konjunktiv II is formed with <i lang=\"de\">hätte</i> or <i lang=\"de\">wäre</i> and the participle."
     }
    ]
   }
  },
  {
   "id": "compound",
   "title": "The Plusquamperfekt and the Futur II",
   "body": "<p>Besides the Perfekt, German forms two more tenses with an auxiliary and the participle. The <strong>Plusquamperfekt</strong> (“pluperfect”) uses the Präteritum of <i lang=\"de\">haben</i> or <i lang=\"de\">sein</i>: <i lang=\"de\">er hatte gegessen</i> (“he had eaten”), <i lang=\"de\">er war gegangen</i> (“he had gone”), and it presents an action as finished before another past action: <i lang=\"de\">Nachdem er gegessen hatte, ging er spazieren</i> (“After he had eaten, he went for a walk”). The <strong>Futur II</strong> (“future perfect”) uses <i lang=\"de\">werden</i> with the perfect infinitive: <i lang=\"de\">er wird gegessen haben</i> (“he will have eaten”), <i lang=\"de\">er wird gegangen sein</i> (“he will have gone”). It is often used, like the French futur antérieur, for a probability about the past: <i lang=\"de\">Er wird den Zug verpasst haben</i> (“He must have missed the train”).</p>",
   "qp": {
    "id": "q-de-compound",
    "variants": [
     {
      "prompt": "What tense is <i lang=\"de\">sie waren angekommen</i>?",
      "options": [
       "The Perfekt",
       "The Futur II",
       "The Plusquamperfekt",
       "The Konjunktiv II past"
      ],
      "answer": 2,
      "explain": "The Präteritum of <i lang=\"de\">sein</i> with the participle forms the Plusquamperfekt: “they had arrived.”"
     },
     {
      "prompt": "What tense is <i lang=\"de\">du wirst es vergessen haben</i>?",
      "options": [
       "The Futur I",
       "The Futur II",
       "The Plusquamperfekt",
       "The Konjunktiv II"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Werden</i> with the perfect infinitive forms the Futur II."
     },
     {
      "prompt": "What does <i lang=\"de\">Sie wird schon nach Hause gegangen sein</i> usually mean?",
      "options": [
       "“She has probably gone home already.”",
       "“She will go home soon, after the meeting.”",
       "“She had gone home.”",
       "“She would go home.”"
      ],
      "answer": 0,
      "explain": "The Futur II often states a probability about the past."
     }
    ]
   }
  }
 ]
};
