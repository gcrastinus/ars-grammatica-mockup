window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-indecl.de/particles"] = {
 "id": "lang.iii-indecl.de/particles",
 "title": "German Conjunctions, Prefixes, and Particles",
 "sub": "Coordinating and subordinating conjunctions and the place of the verb, separable prefixes, and modal particles",
 "sources": "Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "particles-1",
   "title": "Conjunctions and the place of the verb",
   "body": "<p>In English, “and” and “because” change nothing in the order of the words that follow them. In German they do. The <strong>coordinating conjunctions</strong>, <i lang=\"de\">und</i> (“and”), <i lang=\"de\">aber</i> (“but”), <i lang=\"de\">oder</i> (“or”), <i lang=\"de\">denn</i> (“for”), and <i lang=\"de\">sondern</i> (“but rather,” after a negative), join clauses of equal rank and leave the order of the next clause as it is: <i lang=\"de\">Er bleibt zu Hause, denn er ist krank</i>. The <strong>subordinating conjunctions</strong>, such as <i lang=\"de\">dass</i> (“that”), <i lang=\"de\">weil</i> (“because”), <i lang=\"de\">wenn</i> (“if,” “whenever”), <i lang=\"de\">als</i> (“when,” of one past event), <i lang=\"de\">ob</i> (“whether”), <i lang=\"de\">obwohl</i> (“although”), <i lang=\"de\">damit</i> (“so that”), <i lang=\"de\">bevor</i> (“before”), and <i lang=\"de\">nachdem</i> (“after”), send the finite verb to the end of their clause: <i lang=\"de\">Er bleibt zu Hause, weil er krank ist</i>. An adverb at the head of a main clause, such as <i lang=\"de\">deshalb</i> (“therefore”) or <i lang=\"de\">trotzdem</i> (“nevertheless”), puts the verb before the subject, since the verb must stand second: <i lang=\"de\">Deshalb bleibt er zu Hause</i>.</p>",
   "qp": {
    "id": "q-de-conjunctions",
    "variants": [
     {
      "prompt": "Choose the order: <i lang=\"de\">Ich weiß, dass er morgen ___</i> (“I know that he is coming tomorrow”).",
      "options": [
       "<i lang=\"de\">kommt er</i>",
       "<i lang=\"de\">er kommt</i>",
       "<i lang=\"de\">kommt</i>",
       "<i lang=\"de\">komme</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Dass</i> sends the finite verb to the end of its clause."
     },
     {
      "prompt": "Choose the conjunction: <i lang=\"de\">Das ist nicht rot, ___ blau</i> (“That is not red but blue”).",
      "options": [
       "<i lang=\"de\">aber</i>",
       "<i lang=\"de\">sondern</i>",
       "<i lang=\"de\">denn</i>",
       "<i lang=\"de\">oder</i>"
      ],
      "answer": 1,
      "explain": "After a negative, “but rather” is <i lang=\"de\">sondern</i>."
     },
     {
      "prompt": "Choose the order: <i lang=\"de\">Es regnet; trotzdem ___</i> (“It is raining; nevertheless we are going out”).",
      "options": [
       "<i lang=\"de\">gehen wir aus</i>",
       "<i lang=\"de\">wir gehen aus</i>",
       "<i lang=\"de\">wir ausgehen</i>",
       "<i lang=\"de\">aus wir gehen</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Trotzdem</i> is an adverb in first place, so the verb comes second, before the subject."
     }
    ]
   }
  },
  {
   "id": "separable",
   "title": "Separable and inseparable prefixes",
   "body": "<p>The verb <i lang=\"de\">abfahren</i> (“to depart”) is split in a main clause: <i lang=\"de\">Der Zug fährt um acht ab</i> (“The train departs at eight”). Many German verbs have a separable prefix of this kind, which is also a word of its own, such as <i lang=\"de\">an</i>, <i lang=\"de\">auf</i>, <i lang=\"de\">aus</i>, <i lang=\"de\">ein</i>, <i lang=\"de\">mit</i>, <i lang=\"de\">zu</i>, or <i lang=\"de\">zurück</i>; it is stressed, and in a main clause it goes to the end. In a dependent clause, where the verb goes to the end, it is joined again: <i lang=\"de\">…, weil der Zug um acht abfährt</i>. In the participle, <i lang=\"de\">ge-</i> stands between the prefix and the stem (<i lang=\"de\">abgefahren</i>), and in the infinitive with <i lang=\"de\">zu</i>, so does <i lang=\"de\">zu</i> (<i lang=\"de\">abzufahren</i>). The inseparable prefixes, <i lang=\"de\">be-</i>, <i lang=\"de\">emp-</i>, <i lang=\"de\">ent-</i>, <i lang=\"de\">er-</i>, <i lang=\"de\">ge-</i>, <i lang=\"de\">miss-</i>, <i lang=\"de\">ver-</i>, and <i lang=\"de\">zer-</i>, are never stressed, never split from the verb, and take no <i lang=\"de\">ge-</i> in the participle: <i lang=\"de\">verstehen</i>, <i lang=\"de\">er versteht</i>, <i lang=\"de\">verstanden</i>. Section IV treats what these prefixes do to the meaning.</p>",
   "qp": {
    "id": "q-de-separable",
    "variants": [
     {
      "prompt": "Which sentence is correct? (“I will call you tomorrow,” from <i lang=\"de\">anrufen</i>)",
      "options": [
       "<i lang=\"de\">Ich anrufe dich morgen.</i>",
       "<i lang=\"de\">Ich rufe an dich morgen.</i>",
       "<i lang=\"de\">Ich rufe dich morgen an.</i>",
       "<i lang=\"de\">Ich dich morgen anrufe.</i>"
      ],
      "answer": 2,
      "explain": "In a main clause the separable prefix goes to the end: <i lang=\"de\">Ich rufe dich morgen an</i>."
     },
     {
      "prompt": "What is the past participle of <i lang=\"de\">einkaufen</i> (“to shop”)?",
      "options": [
       "<i lang=\"de\">geeinkauft</i>",
       "<i lang=\"de\">eingekauft</i>",
       "<i lang=\"de\">einkaufte</i>",
       "<i lang=\"de\">eingekaufen</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Ge-</i> stands between the prefix and the stem."
     },
     {
      "prompt": "Which verb has an inseparable prefix?",
      "options": [
       "<i lang=\"de\">bezahlen</i>",
       "<i lang=\"de\">abholen</i>",
       "<i lang=\"de\">mitbringen</i>",
       "<i lang=\"de\">zurückgeben</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Be-</i> is inseparable: <i lang=\"de\">er bezahlt</i>, <i lang=\"de\">bezahlt</i> (participle)."
     }
    ]
   }
  },
  {
   "id": "modal-particles",
   "title": "Modal particles",
   "body": "<p>German has a class of small words that do not change what the sentence states, but show how the speaker takes it, as English uses tone of voice or a word like “after all.” Grammars call them <strong>modal particles</strong> (<i lang=\"de\">Modalpartikeln</i>). <i lang=\"de\">Doch</i> urges or contradicts gently: <i lang=\"de\">Komm doch mit!</i> (“Do come along!”). <i lang=\"de\">Ja</i> appeals to what both speakers know: <i lang=\"de\">Das weißt du ja</i> (“You know that, after all”). <i lang=\"de\">Mal</i> softens a request: <i lang=\"de\">Hör mal!</i> (“Just listen!”). <i lang=\"de\">Eben</i> and <i lang=\"de\">halt</i> mark something that cannot be helped: <i lang=\"de\">Das ist eben so</i> (“That’s just how it is”). <i lang=\"de\">Denn</i> in a question shows interest or surprise: <i lang=\"de\">Was machst du denn?</i> (“What on earth are you doing?”). These particles are unstressed and stand in the middle of the clause; most of them have other uses as well (<i lang=\"de\">ja</i> as “yes,” <i lang=\"de\">denn</i> as “for”), and only the sentence shows which is meant.</p>",
   "qp": {
    "id": "q-de-modal-particles",
    "variants": [
     {
      "prompt": "What does <i lang=\"de\">doch</i> add in <i lang=\"de\">Setz dich doch!</i>?",
      "options": [
       "A negation: “Don’t sit down!”",
       "A question: “Are you sitting?”",
       "A friendly urging: “Do sit down!”",
       "A time: “Sit down later, then.”"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Doch</i> as a modal particle urges gently."
     },
     {
      "prompt": "In <i lang=\"de\">Wo wohnst du denn?</i>, what is <i lang=\"de\">denn</i>?",
      "options": [
       "The conjunction “for”",
       "A modal particle showing interest",
       "An adverb of time, “then”",
       "A preposition governing <i lang=\"de\">du</i>"
      ],
      "answer": 1,
      "explain": "In a question, <i lang=\"de\">denn</i> is a modal particle; between clauses it would be the conjunction “for.”"
     },
     {
      "prompt": "Which sentence uses <i lang=\"de\">ja</i> as a modal particle?",
      "options": [
       "<i lang=\"de\">Du bist ja schon da!</i>",
       "<i lang=\"de\">Ja, ich komme.</i>",
       "<i lang=\"de\">Er sagte ja.</i>",
       "<i lang=\"de\">Ja, das ist richtig so.</i>"
      ],
      "answer": 0,
      "explain": "Unstressed in the middle of the clause, <i lang=\"de\">ja</i> appeals to what both speakers see: “Why, you’re here already!”"
     }
    ]
   }
  }
 ]
};
