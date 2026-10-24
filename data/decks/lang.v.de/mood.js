window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.de/mood"] = {
 "id": "lang.v.de/mood",
 "title": "The Konjunktiv and the Imperative in German",
 "sub": "The forms and uses of Konjunktiv II, Konjunktiv I in reported speech, and the imperative",
 "sources": "Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "k2-forms",
   "title": "The forms of Konjunktiv II",
   "body": "<p>German has two subjunctive moods, called Konjunktiv I and Konjunktiv II. Konjunktiv II is formed from the stem of the preterite, and strong verbs add an umlaut where they can: <i lang=\"de\">war</i> gives <i lang=\"de\">wäre</i>, <i lang=\"de\">hatte</i> gives <i lang=\"de\">hätte</i>, <i lang=\"de\">kam</i> gives <i lang=\"de\">käme</i>, <i lang=\"de\">ging</i> gives <i lang=\"de\">ginge</i>, <i lang=\"de\">gab</i> gives <i lang=\"de\">gäbe</i>; the modals and <i lang=\"de\">wissen</i> also take the umlaut (<i lang=\"de\">könnte</i>, <i lang=\"de\">müsste</i>, <i lang=\"de\">wüsste</i>), except <i lang=\"de\">sollte</i> and <i lang=\"de\">wollte</i>.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th><i lang=\"de\">sein</i></th> <th><i lang=\"de\">haben</i></th> <th><i lang=\"de\">werden</i></th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>1</td> <td class=\"f\">wäre</td> <td class=\"f\">hätte</td> <td class=\"f\">würde</td></tr>\n<tr><td>2</td> <td class=\"f\">wärest</td> <td class=\"f\">hättest</td> <td class=\"f\">würdest</td></tr>\n<tr><td>3</td> <td class=\"f\">wäre</td> <td class=\"f\">hätte</td> <td class=\"f\">würde</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>1</td> <td class=\"f\">wären</td> <td class=\"f\">hätten</td> <td class=\"f\">würden</td></tr>\n<tr><td>2</td> <td class=\"f\">wäret</td> <td class=\"f\">hättet</td> <td class=\"f\">würdet</td></tr>\n<tr><td>3</td> <td class=\"f\">wären</td> <td class=\"f\">hätten</td> <td class=\"f\">würden</td></tr>\n</table></div>\n<p>The Konjunktiv II of a weak verb looks like its preterite (<i lang=\"de\">machte</i>), and so German usually uses <i lang=\"de\">würde</i> with the infinitive instead: <i lang=\"de\">ich würde machen</i> (“I would do”).</p>",
   "qp": {
    "id": "q-de-mood-k2",
    "variants": [
     {
      "prompt": "Which form is the Konjunktiv II of <i lang=\"de\">gehen</i>, third person singular?",
      "options": [
       "<i lang=\"de\">ging</i>",
       "<i lang=\"de\">gehe</i>",
       "<i lang=\"de\">ginge</i>",
       "<i lang=\"de\">gingen</i>"
      ],
      "answer": 2,
      "explain": "Konjunktiv II is formed from the preterite stem: <i lang=\"de\">ging</i>, <i lang=\"de\">ginge</i>."
     },
     {
      "prompt": "Which form is the Konjunktiv II of <i lang=\"de\">sollen</i>, first person singular?",
      "options": [
       "<i lang=\"de\">sollen</i>",
       "<i lang=\"de\">sollte</i>",
       "<i lang=\"de\">solle</i>",
       "<i lang=\"de\">soll</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Sollen</i> and <i lang=\"de\">wollen</i> take no umlaut: <i lang=\"de\">sollte</i>."
     },
     {
      "prompt": "Why does German usually say <i lang=\"de\">ich würde kaufen</i> rather than <i lang=\"de\">ich kaufte</i> for “I would buy”?",
      "options": [
       "The Konjunktiv II of a weak verb looks like its preterite",
       "<i lang=\"de\">Kaufen</i> has no Konjunktiv II",
       "<i lang=\"de\">Würde</i> is required after <i lang=\"de\">ich</i>",
       "<i lang=\"de\">Kaufte</i> is Konjunktiv I"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Kaufte</i> could be read as the preterite, so <i lang=\"de\">würde</i> with the infinitive is used."
     }
    ]
   }
  },
  {
   "id": "k2-uses",
   "title": "The uses of Konjunktiv II",
   "body": "<p>Konjunktiv II expresses what is not real or not yet real. It is used in both clauses of an unreal condition: <i lang=\"de\">Wenn ich Zeit hätte, ginge ich spazieren</i>, or <i lang=\"de\">würde ich spazieren gehen</i> (“if I had time, I would go for a walk”). For the past, German uses <i lang=\"de\">hätte</i> or <i lang=\"de\">wäre</i> with the past participle: <i lang=\"de\">Wenn es nicht geregnet hätte, wären wir geblieben</i> (“if it had not rained, we would have stayed”).</p>\n<p>It also expresses a wish that cannot be or has not been fulfilled (<i lang=\"de\">Wenn sie doch hier wäre!</i>, “if only she were here!”), a comparison with <i lang=\"de\">als ob</i> (<i lang=\"de\">er spricht, als ob er alles wüsste</i>, “he speaks as if he knew everything”), and a polite request: <i lang=\"de\">Könnten Sie mir helfen?</i> (“could you help me?”).</p>",
   "qp": {
    "id": "q-de-mood-k2u",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">Wenn er hier ______, könnten wir anfangen</i> (“if he were here, we could begin”)?",
      "options": [
       "<i lang=\"de\">ist</i>",
       "<i lang=\"de\">wäre</i>",
       "<i lang=\"de\">war</i>",
       "<i lang=\"de\">wären</i>"
      ],
      "answer": 1,
      "explain": "An unreal condition takes Konjunktiv II."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Wenn wir früher gegangen ______, hätten wir den Zug erreicht</i> (“if we had left earlier, we would have caught the train”)?",
      "options": [
       "<i lang=\"de\">hätten</i>",
       "<i lang=\"de\">würden</i>",
       "<i lang=\"de\">wären</i>",
       "<i lang=\"de\">waren</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Gehen</i> takes <i lang=\"de\">sein</i>, so the past Konjunktiv II is <i lang=\"de\">wären gegangen</i>."
     },
     {
      "prompt": "What does <i lang=\"de\">Hätten Sie einen Moment Zeit?</i> express?",
      "options": [
       "A condition in the past",
       "A reported statement",
       "A command",
       "A polite request"
      ],
      "answer": 3,
      "explain": "Konjunktiv II softens a question into a polite request."
     }
    ]
   }
  },
  {
   "id": "k1",
   "title": "Konjunktiv I and reported speech",
   "body": "<p>Konjunktiv I is formed from the stem of the infinitive with the endings <i lang=\"de\">-e</i>, <i lang=\"de\">-est</i>, <i lang=\"de\">-e</i>, <i lang=\"de\">-en</i>, <i lang=\"de\">-et</i>, <i lang=\"de\">-en</i>: <i lang=\"de\">er komme</i>, <i lang=\"de\">er habe</i>, <i lang=\"de\">er wisse</i>. <i lang=\"de\">Sein</i> is irregular: <i lang=\"de\">ich sei</i>, <i lang=\"de\">du seist</i>, <i lang=\"de\">er sei</i>, <i lang=\"de\">wir seien</i>, <i lang=\"de\">ihr seiet</i>, <i lang=\"de\">sie seien</i>. It is used chiefly in the third person singular, in reported speech in formal and written German: <i lang=\"de\">Die Zeitung berichtet, der Zug sei verspätet</i> (“the newspaper reports that the train is late”); <i lang=\"de\">Er erklärt, er wisse nichts davon</i> (“he declares that he knows nothing about it”). The reporter does not vouch for the statement.</p>\n<p>When a form of Konjunktiv I is the same as the indicative, Konjunktiv II is used instead: <i lang=\"de\">sie haben</i> could be indicative, so we write <i lang=\"de\">Sie sagen, sie hätten keine Zeit</i> (“they say that they have no time”).</p>",
   "qp": {
    "id": "q-de-mood-k1",
    "variants": [
     {
      "prompt": "Which form is the Konjunktiv I of <i lang=\"de\">können</i>, third person singular?",
      "options": [
       "<i lang=\"de\">kann</i>",
       "<i lang=\"de\">könnte</i>",
       "<i lang=\"de\">können</i>",
       "<i lang=\"de\">könne</i>"
      ],
      "answer": 3,
      "explain": "Konjunktiv I uses the stem of the infinitive with <i lang=\"de\">-e</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Der Arzt sagt, sie ______ gesund</i> (“the doctor says that she is healthy”)?",
      "options": [
       "<i lang=\"de\">sei</i>",
       "<i lang=\"de\">ist</i>",
       "<i lang=\"de\">wäre</i>",
       "<i lang=\"de\">seien</i>"
      ],
      "answer": 0,
      "explain": "Reported speech in formal German takes Konjunktiv I; <i lang=\"de\">sein</i> has <i lang=\"de\">sei</i>."
     },
     {
      "prompt": "Why is it <i lang=\"de\">Sie sagen, sie hätten Hunger</i>, and not <i lang=\"de\">sie haben Hunger</i>, in formal reported speech?",
      "options": [
       "<i lang=\"de\">Hätten</i> is Konjunktiv I",
       "<i lang=\"de\">Haben</i> would look like the indicative",
       "The statement is a wish",
       "<i lang=\"de\">Sagen</i> takes Konjunktiv II always"
      ],
      "answer": 1,
      "explain": "When Konjunktiv I is the same as the indicative, Konjunktiv II is used instead."
     }
    ]
   }
  },
  {
   "id": "imperative",
   "title": "The imperative",
   "body": "<p>The imperative has a form for <i lang=\"de\">du</i>, a form for <i lang=\"de\">ihr</i>, and a polite form with <i lang=\"de\">Sie</i>: <i lang=\"de\">Komm!</i>, <i lang=\"de\">Kommt!</i>, <i lang=\"de\">Kommen Sie!</i> The <i lang=\"de\">du</i> form is the stem, sometimes with <i lang=\"de\">-e</i> (<i lang=\"de\">mach!</i> or <i lang=\"de\">mache!</i>). Strong verbs that change <i lang=\"de\">e</i> to <i lang=\"de\">i</i> or <i lang=\"de\">ie</i> in the present keep that vowel in the <i lang=\"de\">du</i> form and add no ending: <i lang=\"de\">nimm!</i> (“take”), <i lang=\"de\">hilf!</i> (“help”), <i lang=\"de\">sieh!</i> (“look”). <i lang=\"de\">Sein</i> has <i lang=\"de\">sei</i>, <i lang=\"de\">seid</i>, <i lang=\"de\">seien Sie</i>. A suggestion to a group that includes the speaker uses the first person plural with the verb first: <i lang=\"de\">Fangen wir an!</i> (“let us begin”).</p>",
   "qp": {
    "id": "q-de-mood-imp",
    "variants": [
     {
      "prompt": "Which form is the imperative of <i lang=\"de\">nehmen</i> said to one friend?",
      "options": [
       "<i lang=\"de\">Nehm!</i>",
       "<i lang=\"de\">Nimmst!</i>",
       "<i lang=\"de\">Nehmt!</i>",
       "<i lang=\"de\">Nimm!</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Nehmen</i> changes <i lang=\"de\">e</i> to <i lang=\"de\">i</i> in the present, and the <i lang=\"de\">du</i> imperative keeps it: <i lang=\"de\">nimm!</i>"
     },
     {
      "prompt": "Which form is the polite imperative of <i lang=\"de\">warten</i>?",
      "options": [
       "<i lang=\"de\">Warten Sie!</i>",
       "<i lang=\"de\">Wartet!</i>",
       "<i lang=\"de\">Sie warten!</i>",
       "<i lang=\"de\">Warte Sie!</i>"
      ],
      "answer": 0,
      "explain": "The polite imperative puts the verb first, followed by <i lang=\"de\">Sie</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">______ ihr bitte leise!</i> (“please be quiet,” to several friends)?",
      "options": [
       "<i lang=\"de\">Sei</i>",
       "<i lang=\"de\">Seid</i>",
       "<i lang=\"de\">Seien</i>",
       "<i lang=\"de\">Seit</i>"
      ],
      "answer": 1,
      "explain": "The <i lang=\"de\">ihr</i> imperative of <i lang=\"de\">sein</i> is <i lang=\"de\">seid</i>."
     }
    ]
   }
  }
 ]
};
