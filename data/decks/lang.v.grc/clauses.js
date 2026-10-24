window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.grc/clauses"] = {
 "id": "lang.v.grc/clauses",
 "title": "Clauses in Greek",
 "sub": "Relative and causal clauses, conditions, indirect discourse, and the genitive absolute",
 "sources": "Smyth, <i>Greek Grammar</i>, Part IV (Syntax)",
 "panels": [
  {
   "id": "relative",
   "title": "Relative and causal clauses",
   "body": "<p>A relative clause, introduced by <i lang=\"grc\">ὅς</i>, <i lang=\"grc\">ἥ</i>, <i lang=\"grc\">ὅ</i>, describes a noun of the main clause, as we have seen: <i lang=\"grc\">ἡ γυνὴ ἣν ὁρῶμεν</i> (“the woman whom we see”). A causal clause is introduced by <i lang=\"grc\">ὅτι</i> or <i lang=\"grc\">διότι</i> (“because”) and has the indicative, since it states a fact; its negative is <i lang=\"grc\">οὐ</i>: <i lang=\"grc\">χαίρει ὅτι νικᾷ</i> (“he rejoices because he is winning”). A temporal clause is introduced by <i lang=\"grc\">ὅτε</i> (“when”) or <i lang=\"grc\">ἐπεί</i> (“when,” “since”): <i lang=\"grc\">ἐπεὶ ἦλθεν, ἐδείπνησεν</i> (“when he had come, he dined”).</p>",
   "qp": {
    "id": "q-grc-cls-rel",
    "variants": [
     {
      "prompt": "What mood does a causal clause with <i lang=\"grc\">ὅτι</i> usually have?",
      "options": [
       "The indicative",
       "The subjunctive",
       "The optative",
       "The infinitive"
      ],
      "answer": 0,
      "explain": "A causal clause states a fact, so it has the indicative."
     },
     {
      "prompt": "What does <i lang=\"grc\">ἐπεί</i> introduce in <i lang=\"grc\">ἐπεὶ ἐνίκησαν, ἀπῆλθον</i>?",
      "options": [
       "A condition: “if they had won”",
       "A purpose: “in order that they might win”",
       "A result: “so that they won”",
       "A temporal clause: “when they had won”"
      ],
      "answer": 3,
      "explain": "<i lang=\"grc\">Ἐπεί</i> introduces a temporal clause."
     },
     {
      "prompt": "Which negative goes with a causal clause in the indicative?",
      "options": [
       "<i lang=\"grc\">μή</i>",
       "<i lang=\"grc\">μηδέ</i>",
       "<i lang=\"grc\">οὐ</i>",
       "<i lang=\"grc\">μὴ οὐ</i>"
      ],
      "answer": 2,
      "explain": "A statement of fact takes <i lang=\"grc\">οὐ</i>."
     }
    ]
   }
  },
  {
   "id": "conditions",
   "title": "Conditions",
   "body": "<p>Greek distinguishes the kinds of condition more finely than English does, by the mood of the if-clause and by the particle <i lang=\"grc\">ἄν</i> in the main clause. The negative of the if-clause is always <i lang=\"grc\">μή</i>.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Kind</th> <th>If-clause</th> <th>Main clause</th></tr>\n<tr><td>Simple</td> <td><i lang=\"grc\">εἰ</i> with the indicative</td> <td>indicative</td></tr>\n<tr><td>Future more vivid</td> <td><i lang=\"grc\">ἐάν</i> with the subjunctive</td> <td>future indicative</td></tr>\n<tr><td>Future less vivid</td> <td><i lang=\"grc\">εἰ</i> with the optative</td> <td>optative with <i lang=\"grc\">ἄν</i></td></tr>\n<tr><td>Contrary to fact, present</td> <td><i lang=\"grc\">εἰ</i> with the imperfect</td> <td>imperfect with <i lang=\"grc\">ἄν</i></td></tr>\n<tr><td>Contrary to fact, past</td> <td><i lang=\"grc\">εἰ</i> with the aorist</td> <td>aorist with <i lang=\"grc\">ἄν</i></td></tr>\n</table></div>\n<p><i lang=\"grc\">εἰ τοῦτο λέγει, ἀληθῆ λέγει</i> (“if he says this, he speaks the truth”) is simple. <i lang=\"grc\">ἐὰν ἔλθῃ, ὄψεται τὸν πατέρα</i> (“if he comes, he will see his father”) is future more vivid, and <i lang=\"grc\">εἰ ἔλθοι, ἴδοι ἂν τὸν πατέρα</i> (“if he should come, he would see his father”) future less vivid. <i lang=\"grc\">εἰ ἐνταῦθα ἦν, ἑώρα ἂν τὸν πατέρα</i> (“if he were here, he would see his father”) is contrary to fact in the present, and <i lang=\"grc\">εἰ ἦλθεν, εἶδεν ἂν τὸν πατέρα</i> (“if he had come, he would have seen his father”) contrary to fact in the past.</p>",
   "qp": {
    "id": "q-grc-cls-cond",
    "variants": [
     {
      "prompt": "What kind of condition is <i lang=\"grc\">ἐὰν μένῃς, μαθήσῃ</i> (“if you stay, you will learn”)?",
      "options": [
       "Future less vivid",
       "Future more vivid",
       "Contrary to fact",
       "Simple past"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">Ἐάν</i> with the subjunctive and a future in the main clause is future more vivid."
     },
     {
      "prompt": "What does <i lang=\"grc\">ἄν</i> with the aorist indicative mark in a main clause?",
      "options": [
       "What will certainly happen in the future",
       "What happened in fact",
       "What would have happened, but did not",
       "A wish for the future"
      ],
      "answer": 2,
      "explain": "The aorist with <i lang=\"grc\">ἄν</i> gives the main clause of a past condition contrary to fact."
     },
     {
      "prompt": "Which negative stands in an if-clause?",
      "options": [
       "<i lang=\"grc\">οὐ</i>",
       "<i lang=\"grc\">οὐκ</i>",
       "<i lang=\"grc\">οὐδέ</i>",
       "<i lang=\"grc\">μή</i>"
      ],
      "answer": 3,
      "explain": "The negative of the if-clause is always <i lang=\"grc\">μή</i>."
     }
    ]
   }
  },
  {
   "id": "indirect",
   "title": "Indirect discourse",
   "body": "<p>Greek reports what someone said or thought in three ways. After <i lang=\"grc\">λέγω</i> and many other verbs, <i lang=\"grc\">ὅτι</i> or <i lang=\"grc\">ὡς</i> (“that”) introduces a clause with the mood and tense of the original words: <i lang=\"grc\">λέγει ὅτι ὁ παῖς γράφει</i> (“he says that the boy is writing”). After a past tense, the verb may change to the optative of the same tense: <i lang=\"grc\">εἶπεν ὅτι ὁ παῖς γράφοι</i> (“he said that the boy was writing”).</p>\n<p>After <i lang=\"grc\">φημί</i> (“say”), <i lang=\"grc\">νομίζω</i> (“think”), and <i lang=\"grc\">οἴομαι</i> (“suppose”), the report is an infinitive with its subject in the accusative: <i lang=\"grc\">φησὶ τὸν παῖδα γράφειν</i> (“he says that the boy is writing”). When the subject of the infinitive is the same as the subject of the main verb, it is not expressed, and a word in agreement with it is nominative: <i lang=\"grc\">φησὶ σοφὸς εἶναι</i> (“he says that he himself is wise”). After verbs of knowing and perceiving, such as <i lang=\"grc\">οἶδα</i> (“know”) and <i lang=\"grc\">ὁρῶ</i> (“see”), the report is a participle: <i lang=\"grc\">οἶδα τὸν παῖδα γράφοντα</i> (“I know that the boy is writing”). In each construction the tense of the original is kept.</p>",
   "qp": {
    "id": "q-grc-cls-ind",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"grc\">νομίζει τοὺς Ἕλληνας ______</i> (“he thinks that the Greeks are winning”)?",
      "options": [
       "<i lang=\"grc\">νικῶσι</i>",
       "<i lang=\"grc\">νικῶντες</i>",
       "<i lang=\"grc\">νικᾶν</i>",
       "<i lang=\"grc\">νικῴη</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"grc\">Νομίζω</i> takes the infinitive with its subject in the accusative."
     },
     {
      "prompt": "In <i lang=\"grc\">φησὶ πλούσιος εἶναι</i>, why is <i lang=\"grc\">πλούσιος</i> nominative?",
      "options": [
       "It is the object of <i lang=\"grc\">φησί</i>",
       "The subject of the infinitive is the speaker himself",
       "It agrees with an understood accusative subject",
       "Infinitives always take the nominative"
      ],
      "answer": 1,
      "explain": "When the subject of the infinitive is the subject of the main verb, it is omitted, and a word agreeing with it is nominative."
     },
     {
      "prompt": "What construction follows <i lang=\"grc\">ὁρῶ</i> (“I see”) in indirect discourse?",
      "options": [
       "A participle",
       "<i lang=\"grc\">ἵνα</i> with the subjunctive",
       "<i lang=\"grc\">ὥστε</i> with the infinitive",
       "<i lang=\"grc\">εἰ</i> with the optative"
      ],
      "answer": 0,
      "explain": "Verbs of knowing and perceiving take the participle."
     }
    ]
   }
  },
  {
   "id": "absolute",
   "title": "The genitive absolute",
   "body": "<p>Latin uses the ablative absolute for a noun and participle that are not part of the main construction; Greek, which has no ablative, uses the genitive. <i lang=\"grc\">τοῦ ἡλίου δύνοντος, οἱ στρατιῶται ἀπῆλθον</i> means “when the sun was setting, the soldiers went away.” The phrase is absolute, that is, “loosed” from the main clause: the sun is neither the subject nor the object of <i lang=\"grc\">ἀπῆλθον</i>.</p>\n<p>The genitive absolute can express the time, the cause, a condition, or a concession: <i lang=\"grc\">πολλῶν παρόντων, οὐδεὶς ἐφθέγξατο</i> (“though many were present, no one spoke”). It is used only when the noun is not part of the main clause; when it is, the participle simply agrees with it: <i lang=\"grc\">οἱ στρατιῶται ἀπιόντες ᾖδον</i> (“the soldiers sang as they went away”).</p>",
   "qp": {
    "id": "q-grc-cls-abs",
    "variants": [
     {
      "prompt": "In which case does Greek put a noun and participle that are not part of the main construction?",
      "options": [
       "The dative",
       "The accusative",
       "The ablative",
       "The genitive"
      ],
      "answer": 3,
      "explain": "Greek has no ablative, so it uses the genitive absolute."
     },
     {
      "prompt": "Which phrase is a genitive absolute?",
      "options": [
       "<i lang=\"grc\">τοῦ πολέμου ὄντος</i>",
       "<i lang=\"grc\">τὸν πόλεμον ὄντα</i>",
       "<i lang=\"grc\">τοῖς πολέμοις οὖσι</i>",
       "<i lang=\"grc\">τῷ πολέμῳ ὄντι</i>"
      ],
      "answer": 0,
      "explain": "Noun and participle both stand in the genitive."
     },
     {
      "prompt": "Why is there no genitive absolute in <i lang=\"grc\">οἱ ναῦται πλέοντες ᾖδον</i>?",
      "options": [
       "The participle is in the present tense, not the aorist",
       "The sailors are the subject of the main verb",
       "<i lang=\"grc\">Ναῦται</i> is a first declension noun",
       "The sentence has no participle"
      ],
      "answer": 1,
      "explain": "The genitive absolute is used only when the noun is not part of the main clause."
     }
    ]
   }
  },
  {
   "id": "time",
   "title": "Temporal clauses",
   "body": "<p>A temporal clause tells when the action of the main verb takes place. It is introduced by <i lang=\"grc\">ἐπεί</i> or <i lang=\"grc\">ἐπειδή</i> (“when,” “after”), <i lang=\"grc\">ὅτε</i> (“when”), <i lang=\"grc\">ἕως</i> (“while,” “until”), or <i lang=\"grc\">πρίν</i> (“before,” “until”). When the clause refers to one definite act in past time, it takes the indicative, as in English: <i lang=\"grc\">ἐπειδὴ ἀφίκοντο, ἐδείπνουν</i> (“when they arrived, they dined”).</p>\n<p>When the clause refers to an indefinite future time, or to what happens again and again in present time, the conjunction takes <i lang=\"grc\">ἄν</i> and the verb is in the subjunctive. <i lang=\"grc\">Ἄν</i> combines with the conjunction: <i lang=\"grc\">ὅτε</i> with <i lang=\"grc\">ἄν</i> becomes <i lang=\"grc\">ὅταν</i>, and <i lang=\"grc\">ἐπειδή</i> with <i lang=\"grc\">ἄν</i> becomes <i lang=\"grc\">ἐπειδάν</i>. So <i lang=\"grc\">ὅταν ἔλθῃ, ὄψεσθε αὐτόν</i> means “when he comes, you will see him,” and <i lang=\"grc\">μενοῦμεν ἕως ἂν ἔλθῃ</i> means “we shall wait until he comes.” When the same kind of clause depends on a past tense and refers to what happened again and again, it takes the optative without <i lang=\"grc\">ἄν</i>: <i lang=\"grc\">ὅτε ἔλθοι</i> means “whenever he came.”</p>\n<p><i lang=\"grc\">Πρίν</i> takes the infinitive when the main clause is affirmative, and then it means “before”: <i lang=\"grc\">ἀπῆλθον πρὶν ἐκεῖνον ἐλθεῖν</i> (“they went away before he came”). When the main clause is negative, <i lang=\"grc\">πρίν</i> means “until” and takes a finite verb, as the other temporal conjunctions do: <i lang=\"grc\">οὐκ ἀπῆλθον πρὶν ἐκεῖνος ἦλθεν</i> (“they did not go away until he came”).</p>",
   "qp": {
    "id": "q-grc-clauses-time",
    "variants": [
     {
      "prompt": "Which mood follows <i lang=\"grc\">ὅταν</i>?",
      "options": [
       "The subjunctive",
       "The optative",
       "The indicative",
       "The infinitive"
      ],
      "answer": 0,
      "explain": "<i lang=\"grc\">Ὅταν</i> is <i lang=\"grc\">ὅτε</i> with <i lang=\"grc\">ἄν</i>, and <i lang=\"grc\">ἄν</i> in a temporal clause goes with the subjunctive."
     },
     {
      "prompt": "What does <i lang=\"grc\">πρίν</i> with the infinitive mean after an affirmative main clause?",
      "options": [
       "“Until”",
       "“After”",
       "“While”",
       "“Before”"
      ],
      "answer": 3,
      "explain": "After an affirmative clause <i lang=\"grc\">πρίν</i> takes the infinitive and means “before.”"
     },
     {
      "prompt": "When does a temporal clause take the indicative?",
      "options": [
       "When it refers to an indefinite future",
       "When it depends on a past tense and repeats",
       "When it refers to one definite past act",
       "When the main clause is a command"
      ],
      "answer": 2,
      "explain": "One definite act in past time is stated in the indicative, as in English."
     }
    ]
   }
  },
  {
   "id": "alternative",
   "title": "Alternative questions",
   "body": "<p>An alternative question offers two possibilities and asks which is true. Greek introduces it with <i lang=\"grc\">πότερον</i> (or <i lang=\"grc\">πότερα</i>) and puts <i lang=\"grc\">ἤ</i> (“or”) before the second member: <i lang=\"grc\">πότερον μένεις ἢ ἀπέρχῃ;</i> (“are you staying or going away?”). <i lang=\"grc\">Πότερον</i> is not translated; it marks the question as alternative, as <i lang=\"grc\">utrum</i> does in Latin, and <i lang=\"grc\">ἤ</i> answers to Latin <i lang=\"grc\">an</i>.</p>\n<p>An indirect alternative question is introduced by <i lang=\"grc\">πότερον … ἤ</i> or by <i lang=\"grc\">εἰ … ἤ</i>. After a primary tense it keeps the mood of the direct question. After a secondary tense its verb may be changed to the optative: <i lang=\"grc\">ἠρόμην πότερον μένοι ἢ ἀπέρχοιτο</i> (“I asked whether he was staying or going away”).</p>",
   "qp": {
    "id": "q-grc-clauses-alternative",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">πότερον</i> mark?",
      "options": [
       "An alternative question",
       "A clause of purpose",
       "A comparison",
       "A wish"
      ],
      "answer": 0,
      "explain": "<i lang=\"grc\">Πότερον … ἤ</i> asks which of two things is true."
     },
     {
      "prompt": "Which Latin word answers to <i lang=\"grc\">πότερον</i>?",
      "options": [
       "<i lang=\"grc\">num</i>",
       "<i lang=\"grc\">nōnne</i>",
       "<i lang=\"grc\">quamquam</i>",
       "<i lang=\"grc\">utrum</i>"
      ],
      "answer": 3,
      "explain": "Both mark the question as alternative and are not translated."
     },
     {
      "prompt": "After a secondary tense, which mood may an indirect alternative question take?",
      "options": [
       "The imperative",
       "The infinitive",
       "The optative",
       "The participle"
      ],
      "answer": 2,
      "explain": "After a secondary tense the verb of an indirect question may be changed to the optative."
     }
    ]
   }
  }
 ]
};
