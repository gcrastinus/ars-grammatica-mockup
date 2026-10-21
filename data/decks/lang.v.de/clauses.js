window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.de/clauses"] = {
 "id": "lang.v.de/clauses",
 "title": "Clauses in German",
 "sub": "Subordinate clauses and the place of the verb, conditions and indirect questions, and infinitive clauses and the extended attribute",
 "sources": "Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "order",
   "title": "Subordinate clauses and the place of the verb",
   "body": "<p>The conjunction that begins a clause decides where its finite verb stands. The coordinating conjunctions <i>und</i>, <i>aber</i>, <i>oder</i>, <i>denn</i> (“for”), and <i>sondern</i> leave the order of a main clause: <i>Wir warten, denn der Zug kommt spät</i> (“we are waiting, for the train is late”). A subordinating conjunction, such as <i>weil</i>, <i>da</i>, <i>dass</i>, <i>ob</i>, <i>wenn</i>, <i>als</i>, <i>obwohl</i>, or <i>damit</i>, sends the finite verb to the end: <i>Wir warten, weil der Zug spät kommt</i> (“we are waiting because the train is late”).</p>\n<p>When the subordinate clause comes first, it fills the first place of the sentence, and the main clause begins with its finite verb: <i>Weil der Zug spät kommt, warten wir</i>. A subordinate clause is always set off by commas.</p>",
   "qp": {
    "id": "q-de-cls-order",
    "variants": [
     {
      "prompt": "Which sentence is correct for “she is tired because she works a lot”?",
      "options": [
       "<i>Sie ist müde, weil sie viel arbeitet.</i>",
       "<i>Sie ist müde, weil sie arbeitet viel.</i>",
       "<i>Sie ist müde, weil arbeitet sie viel.</i>",
       "<i>Sie ist müde weil, sie viel arbeitet.</i>"
      ],
      "answer": 0,
      "explain": "<i>Weil</i> sends the finite verb to the end of its clause."
     },
     {
      "prompt": "Which word leaves the order of a main clause after it?",
      "options": [
       "<i>weil</i>",
       "<i>da</i>",
       "<i>obwohl</i>",
       "<i>denn</i>"
      ],
      "answer": 3,
      "explain": "<i>Denn</i> is a coordinating conjunction."
     },
     {
      "prompt": "Which form completes <i>Als er ankam, ______ wir schon</i> (“when he arrived, we were already eating”)?",
      "options": [
       "<i>wir aßen</i>",
       "<i>essen</i>",
       "<i>aßen</i>",
       "<i>gegessen</i>"
      ],
      "answer": 2,
      "explain": "The subordinate clause fills the first place, so the main clause begins with its verb."
     }
    ]
   }
  },
  {
   "id": "conditions",
   "title": "Conditions and indirect questions",
   "body": "<p>A real condition, one that may be fulfilled, takes the indicative with <i>wenn</i> or <i>falls</i>: <i>Wenn es schneit, fahren wir Schlitten</i> (“if it snows, we go sledding”). An unreal condition takes Konjunktiv II, as we have seen. The <i>wenn</i> may be left out, and then the verb stands first: <i>Hätte ich Zeit, käme ich</i> (“had I time, I would come”).</p>\n<p>A reported question is a subordinate clause, and its verb stands last. A yes-or-no question is reported with <i>ob</i> (“whether”), and a question with a question word keeps that word: <i>Sie fragt, wann der Zug abfährt</i> (“she asks when the train leaves”); <i>Weißt du, ob er zu Hause ist?</i> (“do you know whether he is at home?”). <i>Wenn</i> means “if” or “whenever,” but never “whether.”</p>",
   "qp": {
    "id": "q-de-cls-cond",
    "variants": [
     {
      "prompt": "Which form completes <i>Ich frage mich, ______ sie heute kommt</i> (“I wonder whether she is coming today”)?",
      "options": [
       "<i>ob</i>",
       "<i>wenn</i>",
       "<i>dass</i>",
       "<i>weil</i>"
      ],
      "answer": 0,
      "explain": "A reported yes-or-no question takes <i>ob</i>."
     },
     {
      "prompt": "Which sentence is correct for “she asks where he lives”?",
      "options": [
       "<i>Sie fragt, wo wohnt er.</i>",
       "<i>Sie fragt, ob wo er wohnt.</i>",
       "<i>Sie fragt wo, er wohnt.</i>",
       "<i>Sie fragt, wo er wohnt.</i>"
      ],
      "answer": 3,
      "explain": "A reported question is a subordinate clause, so its verb stands last."
     },
     {
      "prompt": "What does <i>Falls du Hilfe brauchst, ruf mich an</i> mean?",
      "options": [
       "“whether you need help, call me”",
       "“although you need help, call me”",
       "“if you need help, call me”",
       "“because you need help, call me”"
      ],
      "answer": 2,
      "explain": "<i>Falls</i> introduces a real condition."
     }
    ]
   }
  },
  {
   "id": "infinitive",
   "title": "Infinitive clauses and the extended attribute",
   "body": "<p>An infinitive with <i>zu</i> and its own objects makes an infinitive clause, which stands at the beginning or the end of the sentence and is often set off by a comma: <i>Er ging, ohne sich zu verabschieden</i> (“he left without saying goodbye”). <i>Um … zu</i> gives a purpose when the subject is the same as the subject of the main clause; when the subject is different, German uses <i>damit</i> with a finite verb: <i>Sie spricht langsam, damit die Kinder sie verstehen</i> (“she speaks slowly so that the children understand her”).</p>\n<p>Where English uses a relative clause, German written prose often uses the extended attribute, a participle with its own modifiers placed between the article and the noun: <i>der seit Jahren in Berlin lebende Maler</i> (“the painter who has lived in Berlin for years”). The participle takes the ending of an adjective.</p>",
   "qp": {
    "id": "q-de-cls-inf",
    "variants": [
     {
      "prompt": "Which form completes <i>Ich erkläre es dir, ______ du es verstehst</i> (“I am explaining it to you so that you understand it”)?",
      "options": [
       "<i>um</i>",
       "<i>ohne</i>",
       "<i>statt</i>",
       "<i>damit</i>"
      ],
      "answer": 3,
      "explain": "The subjects are different, so German uses <i>damit</i> with a finite verb."
     },
     {
      "prompt": "What does <i>statt zu lernen</i> mean?",
      "options": [
       "“instead of studying”",
       "“in order to study”",
       "“without studying”",
       "“after studying”"
      ],
      "answer": 0,
      "explain": "<i>Statt … zu</i> means “instead of …ing.”"
     },
     {
      "prompt": "What does <i>die gestern angekommenen Gäste</i> mean?",
      "options": [
       "“the guests who will arrive tomorrow”",
       "“the guests who arrived yesterday”",
       "“the guests arrived yesterday”",
       "“yesterday the guests arrive”"
      ],
      "answer": 1,
      "explain": "The participle with its modifier stands between the article and the noun: an extended attribute."
     }
    ]
   }
  }
 ]
};
