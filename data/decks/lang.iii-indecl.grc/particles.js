window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-indecl.grc/particles"] = {
 "id": "lang.iii-indecl.grc/particles",
 "title": "Greek Particles, Negatives, and Adverbs",
 "sub": "μέν and δέ, the connecting particles, the two negatives, ἄν and the emphatic particles, and the adverb",
 "sources": "Smyth, <i>Greek Grammar</i> §§ 2769–3003 (particles), 2688–2768 (negatives), 341–346 (adverbs)",
 "panels": [
  {
   "id": "particles-1",
   "title": "Particles",
   "body": "<p>In <i>ὁ μὲν ἔφυγεν, ὁ δὲ ἔμεινεν</i> (“the one fled, but the other stayed”), the small words <i>μέν</i> and <i>δέ</i> set the two clauses against each other. Greek has many <strong>particles</strong> of this kind, small words that are not inflected and that show how one clause stands to another or how the speaker takes what is said. Some particles are conjunctions: <i>καί</i> (“and”), <i>ἀλλά</i> (“but”), <i>γάρ</i> (“for”), and <i>οὖν</i> (“therefore”). Others, such as <i>μέν</i> and <i>δέ</i>, mark the two sides of a pair. Latin has no pair of particles that corresponds exactly to <i>μέν</i> and <i>δέ</i>, so a Latin writer must show the contrast in another way, for example with <i>quidem</i> and <i>sed</i>, or with the order of the words.</p>",
   "qp": {
    "id": "q-grc-men-de",
    "variants": [
     {
      "prompt": "What do <i>μέν</i> and <i>δέ</i> do in <i>οἱ μὲν ἔμενον, οἱ δὲ ἀπῆλθον</i>?",
      "options": [
       "They make the sentence a question",
       "They negate the verbs",
       "They set the two clauses against each other",
       "They mark the agent of a passive verb"
      ],
      "answer": 2,
      "explain": "“Some stayed, but others went away”: the pair sets one side against the other."
     },
     {
      "prompt": "How does Latin often render <i>μέν … δέ</i>?",
      "options": [
       "With a pair of particles exactly like them",
       "With <i>quidem … sed</i>, or by the order of words",
       "With the ablative absolute",
       "It cannot render the contrast"
      ],
      "answer": 1,
      "explain": "Latin has no exact pair, so it uses <i>quidem … sed</i> or arrangement."
     },
     {
      "prompt": "Which particle means “for” and gives a reason?",
      "options": [
       "<i>γάρ</i>",
       "<i>οὖν</i>",
       "<i>ἀλλά</i>",
       "<i>μέν</i>"
      ],
      "answer": 0,
      "explain": "<i>Γάρ</i> gives the reason; <i>οὖν</i> draws a conclusion."
     }
    ]
   }
  },
  {
   "id": "connectives",
   "title": "The connecting particles and their place",
   "body": "<p>Greek joins its sentences far more often than English does, so that almost every sentence of a Greek author begins with a word that shows how it stands to the one before. <i>Καί</i> means “and,” but also “also” and “even” (<i>καὶ σύ</i>, “you too”); <i>τε … καί</i> and <i>καί … καί</i> mean “both … and.” <i>Ἀλλά</i> (“but”) marks a strong contrast, often after a negative: <i>οὐ φεύγει ἀλλὰ μένει</i> (“he does not flee but stays”). Several particles are <strong>postpositive</strong>, that is, they never stand first in their clause but usually second: <i>δέ</i>, <i>γάρ</i> (“for”), <i>οὖν</i> (“therefore,” “so”), <i>τε</i> (“and”), and <i>μέν</i>. So “for the man” is <i>ὁ γὰρ ἀνήρ</i>, with <i>γάρ</i> after the article, as Latin puts <i>enim</i> and <i>autem</i> in the second place.</p>",
   "qp": {
    "id": "q-grc-connectives",
    "variants": [
     {
      "prompt": "Where does <i>γάρ</i> stand in its clause?",
      "options": [
       "Always first",
       "Always last",
       "Before the verb",
       "Usually second, never first"
      ],
      "answer": 3,
      "explain": "<i>Γάρ</i> is postpositive."
     },
     {
      "prompt": "What does <i>καί</i> mean in <i>καὶ ὁ πατὴρ ἦλθεν</i>, at the start of a reply?",
      "options": [
       "“even” or “also”",
       "“but”",
       "“therefore”",
       "“not”"
      ],
      "answer": 0,
      "explain": "<i>Καί</i> can mean “also” or “even,” not only “and.”"
     },
     {
      "prompt": "What does <i>τε … καί</i> mean?",
      "options": [
       "“either … or”",
       "“both … and”",
       "“neither … nor”",
       "“not only … but”"
      ],
      "answer": 1,
      "explain": "<i>Τε … καί</i> joins two members as “both … and.”"
     }
    ]
   }
  },
  {
   "id": "negatives",
   "title": "The two negatives, οὐ and μή",
   "body": "<p>English has one word for “not,” but Greek has two, and the choice between them is a matter of grammar. <i>Οὐ</i> (written <i>οὐκ</i> before a smooth breathing and <i>οὐχ</i> before a rough one) denies a fact, and it is used with the indicative in statements and questions: <i>οὐκ ἔστιν</i> (“it is not”). <i>Μή</i> rejects or forbids, and it is used with commands and prohibitions (<i>μὴ φεῦγε</i>, “don’t flee”), with wishes, in conditions, in clauses of purpose, with most infinitives, and with a participle that has the force of a condition. Each has its compounds: <i>οὐδέ</i>, <i>μηδέ</i> (“and not,” “not even”); <i>οὐδείς</i>, <i>μηδείς</i> (“no one”). A simple negative followed by a compound negative of the same kind strengthens the denial instead of canceling it: <i>οὐκ εἶδεν οὐδένα</i>, “he saw no one at all.”</p>",
   "qp": {
    "id": "q-grc-negatives",
    "variants": [
     {
      "prompt": "Which negative goes with a prohibition such as “do not speak”?",
      "options": [
       "<i>οὐ</i>",
       "<i>οὐκ</i>",
       "<i>μή</i>",
       "<i>οὐχ</i>"
      ],
      "answer": 2,
      "explain": "<i>Μή</i> is used with commands and prohibitions: <i>μὴ λέγε</i>."
     },
     {
      "prompt": "Why is it <i>οὐχ ὁρῶ</i> but <i>οὐκ ἔστιν</i>?",
      "options": [
       "<i>Οὐχ</i> is used with verbs of seeing",
       "<i>Οὐχ</i> stands before a rough breathing",
       "<i>Οὐχ</i> is the negative of commands",
       "<i>Οὐχ</i> is poetic"
      ],
      "answer": 1,
      "explain": "The form of <i>οὐ</i> before a vowel depends on the breathing."
     },
     {
      "prompt": "What does <i>οὐδεὶς οὐδὲν εἶπεν</i> mean?",
      "options": [
       "“No one said anything.”",
       "“Someone said something.”",
       "“No one said nothing,” that is, everyone spoke",
       "“Nothing was said by someone.”"
      ],
      "answer": 0,
      "explain": "A compound negative after a negative of the same kind strengthens the denial."
     }
    ]
   }
  },
  {
   "id": "an-emphatic",
   "title": "ἄν and the emphatic particles",
   "body": "<p>Some particles change the force of the whole sentence. <i>Ἄν</i>, which has no single English equivalent, marks what is possible, unreal, or general: with the optative it says what would happen (<i>λέγοι ἄν</i>, “he would say”); with a past tense of the indicative, what would have happened but did not (<i>ἔλεγεν ἄν</i>, “he would have said” or “would be saying”); and with the subjunctive in a dependent clause it makes the clause general, as in <i>ἐάν</i> (that is, <i>εἰ</i> with <i>ἄν</i>), “if ever.” Other particles give emphasis: <i>γε</i> (“at least,” “at any rate”), <i>δή</i> (“indeed,” “now”), <i>τοι</i> (“mark you”). A question is introduced by <i>ἆρα</i> when no answer is assumed, by <i>ἆρ’ οὐ</i> or <i>οὐ</i> when the answer “yes” is expected, and by <i>μῶν</i> or <i>μή</i> when the answer “no” is expected.</p>",
   "qp": {
    "id": "q-grc-an",
    "variants": [
     {
      "prompt": "What does <i>γράφοι ἄν</i> mean?",
      "options": [
       "“may he write”",
       "“he would write”",
       "“he wrote”",
       "“if ever he writes”"
      ],
      "answer": 1,
      "explain": "<i>Ἄν</i> with the optative says what would happen."
     },
     {
      "prompt": "What answer does <i>ἆρ’ οὐ</i> expect?",
      "options": [
       "“No”",
       "None in particular",
       "“Yes”",
       "A number"
      ],
      "answer": 2,
      "explain": "<i>Ἆρ’ οὐ</i>, like Latin <i>nōnne</i>, expects “yes.”"
     },
     {
      "prompt": "What is <i>ἐάν</i>?",
      "options": [
       "a form of <i>ἐγώ</i>",
       "the aorist of <i>ἐάω</i>, “I allow”",
       "a negative",
       "<i>εἰ</i> with <i>ἄν</i>, “if (ever)”"
      ],
      "answer": 3,
      "explain": "<i>Ἐάν</i> is <i>εἰ</i> combined with <i>ἄν</i>, used with the subjunctive."
     }
    ]
   }
  },
  {
   "id": "adverbs",
   "title": "The adverb, and the interjection among the adverbs",
   "body": "<p>English makes adverbs with “-ly,” and Greek makes them from adjectives with <i>-ως</i>, which can be found by replacing the <i>-ων</i> of the genitive plural: <i>σοφῶν</i>, <i>σοφῶς</i> (“wisely”); <i>καλῶν</i>, <i>καλῶς</i> (“well,” “finely”); <i>ἀληθῶν</i>, <i>ἀληθῶς</i> (“truly”). <i>Εὖ</i> (“well”) is the adverb of <i>ἀγαθός</i> in sense. The comparative of an adverb is the neuter singular of the comparative adjective, and the superlative the neuter plural of the superlative: <i>σοφώτερον</i>, <i>σοφώτατα</i>. The Greek grammarians counted the interjections, such as <i>φεῦ</i> (“alas”), <i>ὦ</i> (“O”), and <i>οἴμοι</i> (“ah me”), among the adverbs, as we have seen.</p>",
   "qp": {
    "id": "q-grc-adverbs",
    "variants": [
     {
      "prompt": "What is the adverb from <i>δίκαιος</i> (“just”), genitive plural <i>δικαίων</i>?",
      "options": [
       "<i>δικαίον</i>",
       "<i>δικαιῶς</i>",
       "<i>δικαίοις</i>",
       "<i>δικαίως</i>"
      ],
      "answer": 3,
      "explain": "The adverb replaces the <i>-ων</i> of the genitive plural with <i>-ως</i>, keeping its accent."
     },
     {
      "prompt": "What is the superlative of the adverb <i>σοφῶς</i>?",
      "options": [
       "<i>σοφώτατα</i>",
       "<i>σοφώτερον</i>",
       "<i>σοφώτατος</i>",
       "<i>σοφωτάτως</i>"
      ],
      "answer": 0,
      "explain": "The superlative adverb is the neuter plural of the superlative adjective."
     },
     {
      "prompt": "Under which part did the Greek grammarians count <i>φεῦ</i>?",
      "options": [
       "The interjection, a part of its own",
       "The adverb",
       "The conjunction",
       "The article"
      ],
      "answer": 1,
      "explain": "The Greek list has no interjection; such words were counted among the adverbs."
     }
    ]
   }
  }
 ]
};
