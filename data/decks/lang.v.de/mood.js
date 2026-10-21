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
   "body": "<p>German has two subjunctive moods, called Konjunktiv I and Konjunktiv II. Konjunktiv II is formed from the stem of the preterite, and strong verbs add an umlaut where they can: <i>war</i> gives <i>wäre</i>, <i>hatte</i> gives <i>hätte</i>, <i>kam</i> gives <i>käme</i>, <i>ging</i> gives <i>ginge</i>, <i>gab</i> gives <i>gäbe</i>; the modals and <i>wissen</i> also take the umlaut (<i>könnte</i>, <i>müsste</i>, <i>wüsste</i>), except <i>sollte</i> and <i>wollte</i>.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th><i>sein</i></th> <th><i>haben</i></th> <th><i>werden</i></th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>1</td> <td class=\"f\">wäre</td> <td class=\"f\">hätte</td> <td class=\"f\">würde</td></tr>\n<tr><td>2</td> <td class=\"f\">wärest</td> <td class=\"f\">hättest</td> <td class=\"f\">würdest</td></tr>\n<tr><td>3</td> <td class=\"f\">wäre</td> <td class=\"f\">hätte</td> <td class=\"f\">würde</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>1</td> <td class=\"f\">wären</td> <td class=\"f\">hätten</td> <td class=\"f\">würden</td></tr>\n<tr><td>2</td> <td class=\"f\">wäret</td> <td class=\"f\">hättet</td> <td class=\"f\">würdet</td></tr>\n<tr><td>3</td> <td class=\"f\">wären</td> <td class=\"f\">hätten</td> <td class=\"f\">würden</td></tr>\n</table></div>\n<p>The Konjunktiv II of a weak verb looks like its preterite (<i>machte</i>), and so German usually uses <i>würde</i> with the infinitive instead: <i>ich würde machen</i> (“I would do”).</p>",
   "qp": {
    "id": "q-de-mood-k2",
    "variants": [
     {
      "prompt": "Which form is the Konjunktiv II of <i>gehen</i>, third person singular?",
      "options": [
       "<i>ging</i>",
       "<i>gehe</i>",
       "<i>ginge</i>",
       "<i>gingen</i>"
      ],
      "answer": 2,
      "explain": "Konjunktiv II is formed from the preterite stem: <i>ging</i>, <i>ginge</i>."
     },
     {
      "prompt": "Which form is the Konjunktiv II of <i>sollen</i>, first person singular?",
      "options": [
       "<i>sollen</i>",
       "<i>sollte</i>",
       "<i>solle</i>",
       "<i>soll</i>"
      ],
      "answer": 1,
      "explain": "<i>Sollen</i> and <i>wollen</i> take no umlaut: <i>sollte</i>."
     },
     {
      "prompt": "Why does German usually say <i>ich würde kaufen</i> rather than <i>ich kaufte</i> for “I would buy”?",
      "options": [
       "The Konjunktiv II of a weak verb looks like its preterite",
       "<i>Kaufen</i> has no Konjunktiv II",
       "<i>Würde</i> is required after <i>ich</i>",
       "<i>Kaufte</i> is Konjunktiv I"
      ],
      "answer": 0,
      "explain": "<i>Kaufte</i> could be read as the preterite, so <i>würde</i> with the infinitive is used."
     }
    ]
   }
  },
  {
   "id": "k2-uses",
   "title": "The uses of Konjunktiv II",
   "body": "<p>Konjunktiv II expresses what is not real or not yet real. It is used in both clauses of an unreal condition: <i>Wenn ich Zeit hätte, ginge ich spazieren</i>, or <i>würde ich spazieren gehen</i> (“if I had time, I would go for a walk”). For the past, German uses <i>hätte</i> or <i>wäre</i> with the past participle: <i>Wenn es nicht geregnet hätte, wären wir geblieben</i> (“if it had not rained, we would have stayed”).</p>\n<p>It also expresses a wish that cannot be or has not been fulfilled (<i>Wenn sie doch hier wäre!</i>, “if only she were here!”), a comparison with <i>als ob</i> (<i>er spricht, als ob er alles wüsste</i>, “he speaks as if he knew everything”), and a polite request: <i>Könnten Sie mir helfen?</i> (“could you help me?”).</p>",
   "qp": {
    "id": "q-de-mood-k2u",
    "variants": [
     {
      "prompt": "Which form completes <i>Wenn er hier ______, könnten wir anfangen</i> (“if he were here, we could begin”)?",
      "options": [
       "<i>ist</i>",
       "<i>wäre</i>",
       "<i>war</i>",
       "<i>wären</i>"
      ],
      "answer": 1,
      "explain": "An unreal condition takes Konjunktiv II."
     },
     {
      "prompt": "Which form completes <i>Wenn wir früher gegangen ______, hätten wir den Zug erreicht</i> (“if we had left earlier, we would have caught the train”)?",
      "options": [
       "<i>hätten</i>",
       "<i>würden</i>",
       "<i>wären</i>",
       "<i>waren</i>"
      ],
      "answer": 2,
      "explain": "<i>Gehen</i> takes <i>sein</i>, so the past Konjunktiv II is <i>wären gegangen</i>."
     },
     {
      "prompt": "What does <i>Hätten Sie einen Moment Zeit?</i> express?",
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
   "body": "<p>Konjunktiv I is formed from the stem of the infinitive with the endings <i>-e</i>, <i>-est</i>, <i>-e</i>, <i>-en</i>, <i>-et</i>, <i>-en</i>: <i>er komme</i>, <i>er habe</i>, <i>er wisse</i>. <i>Sein</i> is irregular: <i>ich sei</i>, <i>du seist</i>, <i>er sei</i>, <i>wir seien</i>, <i>ihr seiet</i>, <i>sie seien</i>. It is used chiefly in the third person singular, in reported speech in formal and written German: <i>Die Zeitung berichtet, der Zug sei verspätet</i> (“the newspaper reports that the train is late”); <i>Er erklärt, er wisse nichts davon</i> (“he declares that he knows nothing about it”). The reporter does not vouch for the statement.</p>\n<p>When a form of Konjunktiv I is the same as the indicative, Konjunktiv II is used instead: <i>sie haben</i> could be indicative, so we write <i>Sie sagen, sie hätten keine Zeit</i> (“they say that they have no time”).</p>",
   "qp": {
    "id": "q-de-mood-k1",
    "variants": [
     {
      "prompt": "Which form is the Konjunktiv I of <i>können</i>, third person singular?",
      "options": [
       "<i>kann</i>",
       "<i>könnte</i>",
       "<i>können</i>",
       "<i>könne</i>"
      ],
      "answer": 3,
      "explain": "Konjunktiv I uses the stem of the infinitive with <i>-e</i>."
     },
     {
      "prompt": "Which form completes <i>Der Arzt sagt, sie ______ gesund</i> (“the doctor says that she is healthy”)?",
      "options": [
       "<i>sei</i>",
       "<i>ist</i>",
       "<i>wäre</i>",
       "<i>seien</i>"
      ],
      "answer": 0,
      "explain": "Reported speech in formal German takes Konjunktiv I; <i>sein</i> has <i>sei</i>."
     },
     {
      "prompt": "Why is it <i>Sie sagen, sie hätten Hunger</i>, and not <i>sie haben Hunger</i>, in formal reported speech?",
      "options": [
       "<i>Hätten</i> is Konjunktiv I",
       "<i>Haben</i> would look like the indicative",
       "The statement is a wish",
       "<i>Sagen</i> takes Konjunktiv II always"
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
   "body": "<p>The imperative has a form for <i>du</i>, a form for <i>ihr</i>, and a polite form with <i>Sie</i>: <i>Komm!</i>, <i>Kommt!</i>, <i>Kommen Sie!</i> The <i>du</i> form is the stem, sometimes with <i>-e</i> (<i>mach!</i> or <i>mache!</i>). Strong verbs that change <i>e</i> to <i>i</i> or <i>ie</i> in the present keep that vowel in the <i>du</i> form and add no ending: <i>nimm!</i> (“take”), <i>hilf!</i> (“help”), <i>sieh!</i> (“look”). <i>Sein</i> has <i>sei</i>, <i>seid</i>, <i>seien Sie</i>. A suggestion to a group that includes the speaker uses the first person plural with the verb first: <i>Fangen wir an!</i> (“let us begin”).</p>",
   "qp": {
    "id": "q-de-mood-imp",
    "variants": [
     {
      "prompt": "Which form is the imperative of <i>nehmen</i> said to one friend?",
      "options": [
       "<i>Nehm!</i>",
       "<i>Nimmst!</i>",
       "<i>Nehmt!</i>",
       "<i>Nimm!</i>"
      ],
      "answer": 3,
      "explain": "<i>Nehmen</i> changes <i>e</i> to <i>i</i> in the present, and the <i>du</i> imperative keeps it: <i>nimm!</i>"
     },
     {
      "prompt": "Which form is the polite imperative of <i>warten</i>?",
      "options": [
       "<i>Warten Sie!</i>",
       "<i>Wartet!</i>",
       "<i>Sie warten!</i>",
       "<i>Warte Sie!</i>"
      ],
      "answer": 0,
      "explain": "The polite imperative puts the verb first, followed by <i>Sie</i>."
     },
     {
      "prompt": "Which form completes <i>______ ihr bitte leise!</i> (“please be quiet,” to several friends)?",
      "options": [
       "<i>Sei</i>",
       "<i>Seid</i>",
       "<i>Seien</i>",
       "<i>Seit</i>"
      ],
      "answer": 1,
      "explain": "The <i>ihr</i> imperative of <i>sein</i> is <i>seid</i>."
     }
    ]
   }
  }
 ]
};
