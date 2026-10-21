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
   "body": "<p>A relative clause, introduced by <i>ὅς</i>, <i>ἥ</i>, <i>ὅ</i>, describes a noun of the main clause, as we have seen: <i>ἡ γυνὴ ἣν ὁρῶμεν</i> (“the woman whom we see”). A causal clause is introduced by <i>ὅτι</i> or <i>διότι</i> (“because”) and has the indicative, since it states a fact; its negative is <i>οὐ</i>: <i>χαίρει ὅτι νικᾷ</i> (“he rejoices because he is winning”). A temporal clause is introduced by <i>ὅτε</i> (“when”) or <i>ἐπεί</i> (“when,” “since”): <i>ἐπεὶ ἦλθεν, ἐδείπνησεν</i> (“when he had come, he dined”).</p>",
   "qp": {
    "id": "q-grc-cls-rel",
    "variants": [
     {
      "prompt": "What mood does a causal clause with <i>ὅτι</i> usually have?",
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
      "prompt": "What does <i>ἐπεί</i> introduce in <i>ἐπεὶ ἐνίκησαν, ἀπῆλθον</i>?",
      "options": [
       "A condition: “if they had won”",
       "A purpose: “in order that they might win”",
       "A result: “so that they won”",
       "A temporal clause: “when they had won”"
      ],
      "answer": 3,
      "explain": "<i>Ἐπεί</i> introduces a temporal clause."
     },
     {
      "prompt": "Which negative goes with a causal clause in the indicative?",
      "options": [
       "<i>μή</i>",
       "<i>μηδέ</i>",
       "<i>οὐ</i>",
       "<i>μὴ οὐ</i>"
      ],
      "answer": 2,
      "explain": "A statement of fact takes <i>οὐ</i>."
     }
    ]
   }
  },
  {
   "id": "conditions",
   "title": "Conditions",
   "body": "<p>Greek distinguishes the kinds of condition more finely than English does, by the mood of the if-clause and by the particle <i>ἄν</i> in the main clause. The negative of the if-clause is always <i>μή</i>.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Kind</th> <th>If-clause</th> <th>Main clause</th></tr>\n<tr><td>Simple</td> <td><i>εἰ</i> with the indicative</td> <td>indicative</td></tr>\n<tr><td>Future more vivid</td> <td><i>ἐάν</i> with the subjunctive</td> <td>future indicative</td></tr>\n<tr><td>Future less vivid</td> <td><i>εἰ</i> with the optative</td> <td>optative with <i>ἄν</i></td></tr>\n<tr><td>Contrary to fact, present</td> <td><i>εἰ</i> with the imperfect</td> <td>imperfect with <i>ἄν</i></td></tr>\n<tr><td>Contrary to fact, past</td> <td><i>εἰ</i> with the aorist</td> <td>aorist with <i>ἄν</i></td></tr>\n</table></div>\n<p><i>εἰ τοῦτο λέγει, ἀληθῆ λέγει</i> (“if he says this, he speaks the truth”) is simple. <i>ἐὰν ἔλθῃ, ὄψεται τὸν πατέρα</i> (“if he comes, he will see his father”) is future more vivid, and <i>εἰ ἔλθοι, ἴδοι ἂν τὸν πατέρα</i> (“if he should come, he would see his father”) future less vivid. <i>εἰ ἐνταῦθα ἦν, ἑώρα ἂν τὸν πατέρα</i> (“if he were here, he would see his father”) is contrary to fact in the present, and <i>εἰ ἦλθεν, εἶδεν ἂν τὸν πατέρα</i> (“if he had come, he would have seen his father”) contrary to fact in the past.</p>",
   "qp": {
    "id": "q-grc-cls-cond",
    "variants": [
     {
      "prompt": "What kind of condition is <i>ἐὰν μένῃς, μαθήσῃ</i> (“if you stay, you will learn”)?",
      "options": [
       "Future less vivid",
       "Future more vivid",
       "Contrary to fact",
       "Simple past"
      ],
      "answer": 1,
      "explain": "<i>Ἐάν</i> with the subjunctive and a future in the main clause is future more vivid."
     },
     {
      "prompt": "What does <i>ἄν</i> with the aorist indicative mark in a main clause?",
      "options": [
       "What will certainly happen in the future",
       "What happened in fact",
       "What would have happened, but did not",
       "A wish for the future"
      ],
      "answer": 2,
      "explain": "The aorist with <i>ἄν</i> gives the main clause of a past condition contrary to fact."
     },
     {
      "prompt": "Which negative stands in an if-clause?",
      "options": [
       "<i>οὐ</i>",
       "<i>οὐκ</i>",
       "<i>οὐδέ</i>",
       "<i>μή</i>"
      ],
      "answer": 3,
      "explain": "The negative of the if-clause is always <i>μή</i>."
     }
    ]
   }
  },
  {
   "id": "indirect",
   "title": "Indirect discourse",
   "body": "<p>Greek reports what someone said or thought in three ways. After <i>λέγω</i> and many other verbs, <i>ὅτι</i> or <i>ὡς</i> (“that”) introduces a clause with the mood and tense of the original words: <i>λέγει ὅτι ὁ παῖς γράφει</i> (“he says that the boy is writing”). After a past tense, the verb may change to the optative of the same tense: <i>εἶπεν ὅτι ὁ παῖς γράφοι</i> (“he said that the boy was writing”).</p>\n<p>After <i>φημί</i> (“say”), <i>νομίζω</i> (“think”), and <i>οἴομαι</i> (“suppose”), the report is an infinitive with its subject in the accusative: <i>φησὶ τὸν παῖδα γράφειν</i> (“he says that the boy is writing”). When the subject of the infinitive is the same as the subject of the main verb, it is not expressed, and a word in agreement with it is nominative: <i>φησὶ σοφὸς εἶναι</i> (“he says that he himself is wise”). After verbs of knowing and perceiving, such as <i>οἶδα</i> (“know”) and <i>ὁρῶ</i> (“see”), the report is a participle: <i>οἶδα τὸν παῖδα γράφοντα</i> (“I know that the boy is writing”). In each construction the tense of the original is kept.</p>",
   "qp": {
    "id": "q-grc-cls-ind",
    "variants": [
     {
      "prompt": "Which form completes <i>νομίζει τοὺς Ἕλληνας ______</i> (“he thinks that the Greeks are winning”)?",
      "options": [
       "<i>νικῶσι</i>",
       "<i>νικῶντες</i>",
       "<i>νικᾶν</i>",
       "<i>νικῴη</i>"
      ],
      "answer": 2,
      "explain": "<i>Νομίζω</i> takes the infinitive with its subject in the accusative."
     },
     {
      "prompt": "In <i>φησὶ πλούσιος εἶναι</i>, why is <i>πλούσιος</i> nominative?",
      "options": [
       "It is the object of <i>φησί</i>",
       "The subject of the infinitive is the speaker himself",
       "It agrees with an understood accusative subject",
       "Infinitives always take the nominative"
      ],
      "answer": 1,
      "explain": "When the subject of the infinitive is the subject of the main verb, it is omitted, and a word agreeing with it is nominative."
     },
     {
      "prompt": "What construction follows <i>ὁρῶ</i> (“I see”) in indirect discourse?",
      "options": [
       "A participle",
       "<i>ἵνα</i> with the subjunctive",
       "<i>ὥστε</i> with the infinitive",
       "<i>εἰ</i> with the optative"
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
   "body": "<p>Latin uses the ablative absolute for a noun and participle that are not part of the main construction; Greek, which has no ablative, uses the genitive. <i>τοῦ ἡλίου δύνοντος, οἱ στρατιῶται ἀπῆλθον</i> means “when the sun was setting, the soldiers went away.” The phrase is absolute, that is, “loosed” from the main clause: the sun is neither the subject nor the object of <i>ἀπῆλθον</i>.</p>\n<p>The genitive absolute can express the time, the cause, a condition, or a concession: <i>πολλῶν παρόντων, οὐδεὶς ἐφθέγξατο</i> (“though many were present, no one spoke”). It is used only when the noun is not part of the main clause; when it is, the participle simply agrees with it: <i>οἱ στρατιῶται ἀπιόντες ᾖδον</i> (“the soldiers sang as they went away”).</p>",
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
       "<i>τοῦ πολέμου ὄντος</i>",
       "<i>τὸν πόλεμον ὄντα</i>",
       "<i>τοῖς πολέμοις οὖσι</i>",
       "<i>τῷ πολέμῳ ὄντι</i>"
      ],
      "answer": 0,
      "explain": "Noun and participle both stand in the genitive."
     },
     {
      "prompt": "Why is there no genitive absolute in <i>οἱ ναῦται πλέοντες ᾖδον</i>?",
      "options": [
       "The participle is in the present tense, not the aorist",
       "The sailors are the subject of the main verb",
       "<i>Ναῦται</i> is a first declension noun",
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
   "body": "<p>A temporal clause tells when the action of the main verb takes place. It is introduced by <i>ἐπεί</i> or <i>ἐπειδή</i> (“when,” “after”), <i>ὅτε</i> (“when”), <i>ἕως</i> (“while,” “until”), or <i>πρίν</i> (“before,” “until”). When the clause refers to one definite act in past time, it takes the indicative, as in English: <i>ἐπειδὴ ἀφίκοντο, ἐδείπνουν</i> (“when they arrived, they dined”).</p>\n<p>When the clause refers to an indefinite future time, or to what happens again and again in present time, the conjunction takes <i>ἄν</i> and the verb is in the subjunctive. <i>Ἄν</i> combines with the conjunction: <i>ὅτε</i> with <i>ἄν</i> becomes <i>ὅταν</i>, and <i>ἐπειδή</i> with <i>ἄν</i> becomes <i>ἐπειδάν</i>. So <i>ὅταν ἔλθῃ, ὄψεσθε αὐτόν</i> means “when he comes, you will see him,” and <i>μενοῦμεν ἕως ἂν ἔλθῃ</i> means “we shall wait until he comes.” When the same kind of clause depends on a past tense and refers to what happened again and again, it takes the optative without <i>ἄν</i>: <i>ὅτε ἔλθοι</i> means “whenever he came.”</p>\n<p><i>Πρίν</i> takes the infinitive when the main clause is affirmative, and then it means “before”: <i>ἀπῆλθον πρὶν ἐκεῖνον ἐλθεῖν</i> (“they went away before he came”). When the main clause is negative, <i>πρίν</i> means “until” and takes a finite verb, as the other temporal conjunctions do: <i>οὐκ ἀπῆλθον πρὶν ἐκεῖνος ἦλθεν</i> (“they did not go away until he came”).</p>",
   "qp": {
    "id": "q-grc-clauses-time",
    "variants": [
     {
      "prompt": "Which mood follows <i>ὅταν</i>?",
      "options": [
       "The subjunctive",
       "The optative",
       "The indicative",
       "The infinitive"
      ],
      "answer": 0,
      "explain": "<i>Ὅταν</i> is <i>ὅτε</i> with <i>ἄν</i>, and <i>ἄν</i> in a temporal clause goes with the subjunctive."
     },
     {
      "prompt": "What does <i>πρίν</i> with the infinitive mean after an affirmative main clause?",
      "options": [
       "“Until”",
       "“After”",
       "“While”",
       "“Before”"
      ],
      "answer": 3,
      "explain": "After an affirmative clause <i>πρίν</i> takes the infinitive and means “before.”"
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
   "body": "<p>An alternative question offers two possibilities and asks which is true. Greek introduces it with <i>πότερον</i> (or <i>πότερα</i>) and puts <i>ἤ</i> (“or”) before the second member: <i>πότερον μένεις ἢ ἀπέρχῃ;</i> (“are you staying or going away?”). <i>Πότερον</i> is not translated; it marks the question as alternative, as <i>utrum</i> does in Latin, and <i>ἤ</i> answers to Latin <i>an</i>.</p>\n<p>An indirect alternative question is introduced by <i>πότερον … ἤ</i> or by <i>εἰ … ἤ</i>. After a primary tense it keeps the mood of the direct question. After a secondary tense its verb may be changed to the optative: <i>ἠρόμην πότερον μένοι ἢ ἀπέρχοιτο</i> (“I asked whether he was staying or going away”).</p>",
   "qp": {
    "id": "q-grc-clauses-alternative",
    "variants": [
     {
      "prompt": "What does <i>πότερον</i> mark?",
      "options": [
       "An alternative question",
       "A clause of purpose",
       "A comparison",
       "A wish"
      ],
      "answer": 0,
      "explain": "<i>Πότερον … ἤ</i> asks which of two things is true."
     },
     {
      "prompt": "Which Latin word answers to <i>πότερον</i>?",
      "options": [
       "<i>num</i>",
       "<i>nōnne</i>",
       "<i>quamquam</i>",
       "<i>utrum</i>"
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
