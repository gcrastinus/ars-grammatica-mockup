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
   "body": "<p>In <i lang=\"grc\">ὁ μὲν ἔφυγεν, ὁ δὲ ἔμεινεν</i> (“the one fled, but the other stayed”), the small words <i lang=\"grc\">μέν</i> and <i lang=\"grc\">δέ</i> set the two clauses against each other. Greek has many <strong>particles</strong> of this kind, small words that are not inflected and that show how one clause stands to another or how the speaker takes what is said. Some particles are conjunctions: <i lang=\"grc\">καί</i> (“and”), <i lang=\"grc\">ἀλλά</i> (“but”), <i lang=\"grc\">γάρ</i> (“for”), and <i lang=\"grc\">οὖν</i> (“therefore”). Others, such as <i lang=\"grc\">μέν</i> and <i lang=\"grc\">δέ</i>, mark the two sides of a pair. Latin has no pair of particles that corresponds exactly to <i lang=\"grc\">μέν</i> and <i lang=\"grc\">δέ</i>, so a Latin writer must show the contrast in another way, for example with <i lang=\"grc\">quidem</i> and <i lang=\"grc\">sed</i>, or with the order of the words.</p>",
   "qp": {
    "id": "q-grc-men-de",
    "variants": [
     {
      "prompt": "What do <i lang=\"grc\">μέν</i> and <i lang=\"grc\">δέ</i> do in <i lang=\"grc\">οἱ μὲν ἔμενον, οἱ δὲ ἀπῆλθον</i>?",
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
      "prompt": "How does Latin often render <i lang=\"grc\">μέν … δέ</i>?",
      "options": [
       "With a pair of particles exactly like them",
       "With <i lang=\"grc\">quidem … sed</i>, or by the order of words",
       "With the ablative absolute",
       "It cannot render the contrast"
      ],
      "answer": 1,
      "explain": "Latin has no exact pair, so it uses <i lang=\"grc\">quidem … sed</i> or arrangement."
     },
     {
      "prompt": "Which particle means “for” and gives a reason?",
      "options": [
       "<i lang=\"grc\">γάρ</i>",
       "<i lang=\"grc\">οὖν</i>",
       "<i lang=\"grc\">ἀλλά</i>",
       "<i lang=\"grc\">μέν</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"grc\">Γάρ</i> gives the reason; <i lang=\"grc\">οὖν</i> draws a conclusion."
     }
    ]
   }
  },
  {
   "id": "connectives",
   "title": "The connecting particles and their place",
   "body": "<p>Greek joins its sentences far more often than English does, so that almost every sentence of a Greek author begins with a word that shows how it stands to the one before. <i lang=\"grc\">Καί</i> means “and,” but also “also” and “even” (<i lang=\"grc\">καὶ σύ</i>, “you too”); <i lang=\"grc\">τε … καί</i> and <i lang=\"grc\">καί … καί</i> mean “both … and.” <i lang=\"grc\">Ἀλλά</i> (“but”) marks a strong contrast, often after a negative: <i lang=\"grc\">οὐ φεύγει ἀλλὰ μένει</i> (“he does not flee but stays”). Several particles are <strong>postpositive</strong>, that is, they never stand first in their clause but usually second: <i lang=\"grc\">δέ</i>, <i lang=\"grc\">γάρ</i> (“for”), <i lang=\"grc\">οὖν</i> (“therefore,” “so”), <i lang=\"grc\">τε</i> (“and”), and <i lang=\"grc\">μέν</i>. So “for the man” is <i lang=\"grc\">ὁ γὰρ ἀνήρ</i>, with <i lang=\"grc\">γάρ</i> after the article, as Latin puts <i lang=\"grc\">enim</i> and <i lang=\"grc\">autem</i> in the second place.</p>",
   "qp": {
    "id": "q-grc-connectives",
    "variants": [
     {
      "prompt": "Where does <i lang=\"grc\">γάρ</i> stand in its clause?",
      "options": [
       "Always first",
       "Always last",
       "Before the verb",
       "Usually second, never first"
      ],
      "answer": 3,
      "explain": "<i lang=\"grc\">Γάρ</i> is postpositive."
     },
     {
      "prompt": "What does <i lang=\"grc\">καί</i> mean in <i lang=\"grc\">καὶ ὁ πατὴρ ἦλθεν</i>, at the start of a reply?",
      "options": [
       "“even” or “also”",
       "“but”",
       "“therefore”",
       "“not”"
      ],
      "answer": 0,
      "explain": "<i lang=\"grc\">Καί</i> can mean “also” or “even,” not only “and.”"
     },
     {
      "prompt": "What does <i lang=\"grc\">τε … καί</i> mean?",
      "options": [
       "“either … or”",
       "“both … and”",
       "“neither … nor”",
       "“not only … but”"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">Τε … καί</i> joins two members as “both … and.”"
     }
    ]
   }
  },
  {
   "id": "negatives",
   "title": "The two negatives, οὐ and μή",
   "body": "<p>English has one word for “not,” but Greek has two, and the choice between them is a matter of grammar. <i lang=\"grc\">Οὐ</i> (written <i lang=\"grc\">οὐκ</i> before a smooth breathing and <i lang=\"grc\">οὐχ</i> before a rough one) denies a fact, and it is used with the indicative in statements and questions: <i lang=\"grc\">οὐκ ἔστιν</i> (“it is not”). <i lang=\"grc\">Μή</i> rejects or forbids, and it is used with commands and prohibitions (<i lang=\"grc\">μὴ φεῦγε</i>, “don’t flee”), with wishes, in conditions, in clauses of purpose, with most infinitives, and with a participle that has the force of a condition. Each has its compounds: <i lang=\"grc\">οὐδέ</i>, <i lang=\"grc\">μηδέ</i> (“and not,” “not even”); <i lang=\"grc\">οὐδείς</i>, <i lang=\"grc\">μηδείς</i> (“no one”). A simple negative followed by a compound negative of the same kind strengthens the denial instead of canceling it: <i lang=\"grc\">οὐκ εἶδεν οὐδένα</i>, “he saw no one at all.”</p>",
   "qp": {
    "id": "q-grc-negatives",
    "variants": [
     {
      "prompt": "Which negative goes with a prohibition such as “do not speak”?",
      "options": [
       "<i lang=\"grc\">οὐ</i>",
       "<i lang=\"grc\">οὐκ</i>",
       "<i lang=\"grc\">μή</i>",
       "<i lang=\"grc\">οὐχ</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"grc\">Μή</i> is used with commands and prohibitions: <i lang=\"grc\">μὴ λέγε</i>."
     },
     {
      "prompt": "Why is it <i lang=\"grc\">οὐχ ὁρῶ</i> but <i lang=\"grc\">οὐκ ἔστιν</i>?",
      "options": [
       "<i lang=\"grc\">Οὐχ</i> is used with verbs of seeing",
       "<i lang=\"grc\">Οὐχ</i> stands before a rough breathing",
       "<i lang=\"grc\">Οὐχ</i> is the negative of commands",
       "<i lang=\"grc\">Οὐχ</i> is poetic"
      ],
      "answer": 1,
      "explain": "The form of <i lang=\"grc\">οὐ</i> before a vowel depends on the breathing."
     },
     {
      "prompt": "What does <i lang=\"grc\">οὐδεὶς οὐδὲν εἶπεν</i> mean?",
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
   "body": "<p>Some particles change the force of the whole sentence. <i lang=\"grc\">Ἄν</i>, which has no single English equivalent, marks what is possible, unreal, or general: with the optative it says what would happen (<i lang=\"grc\">λέγοι ἄν</i>, “he would say”); with a past tense of the indicative, what would have happened but did not (<i lang=\"grc\">ἔλεγεν ἄν</i>, “he would have said” or “would be saying”); and with the subjunctive in a dependent clause it makes the clause general, as in <i lang=\"grc\">ἐάν</i> (that is, <i lang=\"grc\">εἰ</i> with <i lang=\"grc\">ἄν</i>), “if ever.” Other particles give emphasis: <i lang=\"grc\">γε</i> (“at least,” “at any rate”), <i lang=\"grc\">δή</i> (“indeed,” “now”), <i lang=\"grc\">τοι</i> (“mark you”). A question is introduced by <i lang=\"grc\">ἆρα</i> when no answer is assumed, by <i lang=\"grc\">ἆρ’ οὐ</i> or <i lang=\"grc\">οὐ</i> when the answer “yes” is expected, and by <i lang=\"grc\">μῶν</i> or <i lang=\"grc\">μή</i> when the answer “no” is expected.</p>",
   "qp": {
    "id": "q-grc-an",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">γράφοι ἄν</i> mean?",
      "options": [
       "“may he write”",
       "“he would write”",
       "“he wrote”",
       "“if ever he writes”"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">Ἄν</i> with the optative says what would happen."
     },
     {
      "prompt": "What answer does <i lang=\"grc\">ἆρ’ οὐ</i> expect?",
      "options": [
       "“No”",
       "None in particular",
       "“Yes”",
       "A number"
      ],
      "answer": 2,
      "explain": "<i lang=\"grc\">Ἆρ’ οὐ</i>, like Latin <i lang=\"grc\">nōnne</i>, expects “yes.”"
     },
     {
      "prompt": "What is <i lang=\"grc\">ἐάν</i>?",
      "options": [
       "a form of <i lang=\"grc\">ἐγώ</i>",
       "the aorist of <i lang=\"grc\">ἐάω</i>, “I allow”",
       "a negative",
       "<i lang=\"grc\">εἰ</i> with <i lang=\"grc\">ἄν</i>, “if (ever)”"
      ],
      "answer": 3,
      "explain": "<i lang=\"grc\">Ἐάν</i> is <i lang=\"grc\">εἰ</i> combined with <i lang=\"grc\">ἄν</i>, used with the subjunctive."
     }
    ]
   }
  },
  {
   "id": "adverbs",
   "title": "The adverb, and the interjection among the adverbs",
   "body": "<p>English makes adverbs with “-ly,” and Greek makes them from adjectives with <i lang=\"grc\">-ως</i>, which can be found by replacing the <i lang=\"grc\">-ων</i> of the genitive plural: <i lang=\"grc\">σοφῶν</i>, <i lang=\"grc\">σοφῶς</i> (“wisely”); <i lang=\"grc\">καλῶν</i>, <i lang=\"grc\">καλῶς</i> (“well,” “finely”); <i lang=\"grc\">ἀληθῶν</i>, <i lang=\"grc\">ἀληθῶς</i> (“truly”). <i lang=\"grc\">Εὖ</i> (“well”) is the adverb of <i lang=\"grc\">ἀγαθός</i> in sense. The comparative of an adverb is the neuter singular of the comparative adjective, and the superlative the neuter plural of the superlative: <i lang=\"grc\">σοφώτερον</i>, <i lang=\"grc\">σοφώτατα</i>. The Greek grammarians counted the interjections, such as <i lang=\"grc\">φεῦ</i> (“alas”), <i lang=\"grc\">ὦ</i> (“O”), and <i lang=\"grc\">οἴμοι</i> (“ah me”), among the adverbs, as we have seen.</p>",
   "qp": {
    "id": "q-grc-adverbs",
    "variants": [
     {
      "prompt": "What is the adverb from <i lang=\"grc\">δίκαιος</i> (“just”), genitive plural <i lang=\"grc\">δικαίων</i>?",
      "options": [
       "<i lang=\"grc\">δικαίον</i>",
       "<i lang=\"grc\">δικαιῶς</i>",
       "<i lang=\"grc\">δικαίοις</i>",
       "<i lang=\"grc\">δικαίως</i>"
      ],
      "answer": 3,
      "explain": "The adverb replaces the <i lang=\"grc\">-ων</i> of the genitive plural with <i lang=\"grc\">-ως</i>, keeping its accent."
     },
     {
      "prompt": "What is the superlative of the adverb <i lang=\"grc\">σοφῶς</i>?",
      "options": [
       "<i lang=\"grc\">σοφώτατα</i>",
       "<i lang=\"grc\">σοφώτερον</i>",
       "<i lang=\"grc\">σοφώτατος</i>",
       "<i lang=\"grc\">σοφωτάτως</i>"
      ],
      "answer": 0,
      "explain": "The superlative adverb is the neuter plural of the superlative adjective."
     },
     {
      "prompt": "Under which part did the Greek grammarians count <i lang=\"grc\">φεῦ</i>?",
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
