window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.grc/mood"] = {
 "id": "lang.v.grc/mood",
 "title": "The Subjunctive and the Optative in Greek",
 "sub": "The forms, the moods in main clauses, purpose and fear, and result",
 "sources": "Smyth, <i>Greek Grammar</i>, Part IV (Syntax)",
 "panels": [
  {
   "id": "forms",
   "title": "The forms",
   "body": "<p>Greek has two moods where Latin has the one subjunctive: the subjunctive and the optative. The subjunctive lengthens the vowel before the ending (<i lang=\"grc\">ω</i> and <i lang=\"grc\">η</i> for <i lang=\"grc\">ο</i> and <i lang=\"grc\">ε</i>), and the optative has <i lang=\"grc\">οι</i> in the present and <i lang=\"grc\">αι</i> in the first aorist. Here are the forms of <i lang=\"grc\">γράφω</i> (“write”):</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present subjunctive</th> <th>Present optative</th> <th>Aorist subjunctive</th> <th>Aorist optative</th></tr>\n<tr><th colspan=\"5\">Singular</th></tr>\n<tr><td>1</td> <td class=\"f\">γράφω</td> <td class=\"f\">γράφοιμι</td> <td class=\"f\">γράψω</td> <td class=\"f\">γράψαιμι</td></tr>\n<tr><td>2</td> <td class=\"f\">γράφῃς</td> <td class=\"f\">γράφοις</td> <td class=\"f\">γράψῃς</td> <td class=\"f\">γράψαις</td></tr>\n<tr><td>3</td> <td class=\"f\">γράφῃ</td> <td class=\"f\">γράφοι</td> <td class=\"f\">γράψῃ</td> <td class=\"f\">γράψαι</td></tr>\n<tr><th colspan=\"5\">Plural</th></tr>\n<tr><td>1</td> <td class=\"f\">γράφωμεν</td> <td class=\"f\">γράφοιμεν</td> <td class=\"f\">γράψωμεν</td> <td class=\"f\">γράψαιμεν</td></tr>\n<tr><td>2</td> <td class=\"f\">γράφητε</td> <td class=\"f\">γράφοιτε</td> <td class=\"f\">γράψητε</td> <td class=\"f\">γράψαιτε</td></tr>\n<tr><td>3</td> <td class=\"f\">γράφωσι</td> <td class=\"f\">γράφοιεν</td> <td class=\"f\">γράψωσι</td> <td class=\"f\">γράψαιεν</td></tr>\n</table></div>\n<p>Outside the indicative, the present and the aorist differ in aspect, not in time: the present presents the act as going on or repeated, the aorist as a single event. The aorist subjunctive and optative have no augment.</p>",
   "qp": {
    "id": "q-grc-mood-forms",
    "variants": [
     {
      "prompt": "Which form is the present subjunctive, third person plural, of <i lang=\"grc\">γράφω</i>?",
      "options": [
       "<i lang=\"grc\">γράφουσι</i>",
       "<i lang=\"grc\">γράφοιεν</i>",
       "<i lang=\"grc\">γράψωσι</i>",
       "<i lang=\"grc\">γράφωσι</i>"
      ],
      "answer": 3,
      "explain": "The subjunctive lengthens the vowel: <i lang=\"grc\">γράφωσι</i>. <i lang=\"grc\">Γράφουσι</i> is indicative and <i lang=\"grc\">γράφοιεν</i> optative."
     },
     {
      "prompt": "What marks the present optative?",
      "options": [
       "<i lang=\"grc\">οι</i> before the ending",
       "A long vowel before the ending",
       "The augment",
       "<i lang=\"grc\">σα</i> before the ending"
      ],
      "answer": 0,
      "explain": "The present optative has <i lang=\"grc\">οι</i>: <i lang=\"grc\">γράφοιμι</i>, <i lang=\"grc\">γράφοι</i>."
     },
     {
      "prompt": "How do the present and aorist subjunctive differ?",
      "options": [
       "In time only",
       "In aspect, not in time",
       "In the person of the subject",
       "In voice"
      ],
      "answer": 1,
      "explain": "Outside the indicative, the tenses mark aspect: an act going on, or a single event."
     }
    ]
   }
  },
  {
   "id": "main",
   "title": "The moods in main clauses",
   "body": "<p>In a main clause the subjunctive expresses an exhortation in the first person, a prohibition with <i lang=\"grc\">μή</i> and the aorist, or a question about what to do: <i lang=\"grc\">ἴωμεν</i> (“let us go”), <i lang=\"grc\">μὴ γράψῃς</i> (“do not write”), <i lang=\"grc\">τί ποιῶμεν;</i> (“what are we to do?”).</p>\n<p>The optative alone expresses a wish for the future: <i lang=\"grc\">εὐτυχοίης</i> (“may you be fortunate”), often with <i lang=\"grc\">εἴθε</i> or <i lang=\"grc\">εἰ γάρ</i> (“would that”). The optative with <i lang=\"grc\">ἄν</i> expresses what would or might happen, the potential optative: <i lang=\"grc\">γράφοι ἄν</i> (“he would write,” “he might write”). The negative of the potential optative is <i lang=\"grc\">οὐ</i>; the negative of a wish is <i lang=\"grc\">μή</i>.</p>",
   "qp": {
    "id": "q-grc-mood-main",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">μὴ φύγῃς</i> express?",
      "options": [
       "A wish: “may you not flee”",
       "A prohibition: “do not flee”",
       "A fact: “you do not flee”",
       "A question: “are you not fleeing?”"
      ],
      "answer": 1,
      "explain": "The word <i lang=\"grc\">μή</i> with the aorist subjunctive expresses a prohibition."
     },
     {
      "prompt": "What does <i lang=\"grc\">λέγοιμι ἄν</i> mean?",
      "options": [
       "“let me say”",
       "“I was saying,” “I used to say”",
       "“I would say,” “I might say”",
       "“may I say”"
      ],
      "answer": 2,
      "explain": "The optative with <i lang=\"grc\">ἄν</i> is potential."
     },
     {
      "prompt": "What does <i lang=\"grc\">μένωμεν</i> express?",
      "options": [
       "A fact: “we stay”",
       "A wish: “may we stay”",
       "A command to others: “stay here”",
       "An exhortation: “let us stay”"
      ],
      "answer": 3,
      "explain": "The first person subjunctive expresses an exhortation."
     }
    ]
   }
  },
  {
   "id": "purpose",
   "title": "Purpose and fear",
   "body": "<p>A clause of purpose is introduced by <i lang=\"grc\">ἵνα</i>, <i lang=\"grc\">ὅπως</i>, or <i lang=\"grc\">ὡς</i> (“in order that”), and its negative is <i lang=\"grc\">μή</i>. After a main verb in a present or future tense (a primary tense), the purpose clause has the subjunctive: <i lang=\"grc\">ἔρχεται ἵνα μάθῃ</i> (“he comes in order to learn”). After a past tense (a secondary tense), it may have the optative: <i lang=\"grc\">ἦλθεν ἵνα μάθοι</i> (“he came in order to learn”), though the subjunctive is also kept.</p>\n<p>After a verb of fearing, <i lang=\"grc\">μή</i> means “that” and <i lang=\"grc\">μὴ οὐ</i> means “that not,” with the same moods: <i lang=\"grc\">φοβοῦμαι μὴ ἔλθῃ</i> (“I fear that he may come”), <i lang=\"grc\">φοβοῦμαι μὴ οὐκ ἔλθῃ</i> (“I fear that he may not come”). Latin uses <i lang=\"grc\">nē</i> and <i lang=\"grc\">ut</i> in the same way after verbs of fearing.</p>",
   "qp": {
    "id": "q-grc-mood-purpose",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"grc\">διδάσκει ἵνα οἱ παῖδες ______</i> (“he teaches in order that the boys may learn”)?",
      "options": [
       "<i lang=\"grc\">μανθάνουσι</i>",
       "<i lang=\"grc\">μάθοιεν</i>",
       "<i lang=\"grc\">μάθωσι</i>",
       "<i lang=\"grc\">μαθεῖν</i>"
      ],
      "answer": 2,
      "explain": "After the primary <i lang=\"grc\">διδάσκει</i>, the purpose clause has the subjunctive."
     },
     {
      "prompt": "What does <i lang=\"grc\">μή</i> mean after <i lang=\"grc\">φοβοῦμαι</i>?",
      "options": [
       "“that not”",
       "“that”",
       "“in order that”",
       "“because”"
      ],
      "answer": 1,
      "explain": "After a verb of fearing, <i lang=\"grc\">μή</i> means “that,” and <i lang=\"grc\">μὴ οὐ</i> means “that not.”"
     },
     {
      "prompt": "Why may <i lang=\"grc\">ἦλθεν ἵνα ἴδοι</i> have the optative?",
      "options": [
       "The main verb is in a past tense",
       "The clause expresses a wish of the speaker",
       "The clause is a condition",
       "<i lang=\"grc\">Ἵνα</i> always takes the optative"
      ],
      "answer": 0,
      "explain": "After a secondary tense the purpose clause may have the optative."
     }
    ]
   }
  },
  {
   "id": "result",
   "title": "Result",
   "body": "<p>A clause of result is introduced by <i lang=\"grc\">ὥστε</i> (“so that,” “so as to”), often after <i lang=\"grc\">οὕτω</i> (“so”), and it takes one of two constructions. With the infinitive it gives the result that would naturally follow, and its negative is <i lang=\"grc\">μή</i>: <i lang=\"grc\">οὕτω ταχὺς ἦν ὥστε μηδένα αὐτὸν καταλαβεῖν</i> (“he was so swift that no one could overtake him”). With the indicative it states the result as a fact that actually followed, and its negative is <i lang=\"grc\">οὐ</i>: <i lang=\"grc\">οὕτω ταχὺς ἦν ὥστε οὐδεὶς αὐτὸν κατέλαβεν</i> (“he was so swift that no one overtook him”).</p>\n<p>So the choice between the infinitive and the indicative after <i lang=\"grc\">ὥστε</i> does not change the grammar of the clause, but it changes what the speaker asserts.</p>",
   "qp": {
    "id": "q-grc-mood-result",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">ὥστε</i> with the indicative assert?",
      "options": [
       "A result that would naturally follow",
       "A result that actually followed",
       "A purpose",
       "A wish"
      ],
      "answer": 1,
      "explain": "With the indicative, the result is stated as a fact."
     },
     {
      "prompt": "Which negative goes with <i lang=\"grc\">ὥστε</i> and the infinitive?",
      "options": [
       "<i lang=\"grc\">οὐ</i>",
       "<i lang=\"grc\">οὐκ</i>",
       "<i lang=\"grc\">μή</i>",
       "<i lang=\"grc\">οὐδέ</i>"
      ],
      "answer": 2,
      "explain": "The infinitive of result takes <i lang=\"grc\">μή</i>."
     },
     {
      "prompt": "Which word often prepares a clause of result?",
      "options": [
       "<i lang=\"grc\">ἵνα</i>",
       "<i lang=\"grc\">ὅπως</i>",
       "<i lang=\"grc\">ἄν</i>",
       "<i lang=\"grc\">οὕτω</i>"
      ],
      "answer": 3,
      "explain": "The word <i lang=\"grc\">οὕτω</i> (“so”) prepares a clause of result with <i lang=\"grc\">ὥστε</i>."
     }
    ]
   }
  }
 ]
};
