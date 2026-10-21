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
   "body": "<p>In English, “and” and “because” change nothing in the order of the words that follow them. In German they do. The <strong>coordinating conjunctions</strong>, <i>und</i> (“and”), <i>aber</i> (“but”), <i>oder</i> (“or”), <i>denn</i> (“for”), and <i>sondern</i> (“but rather,” after a negative), join clauses of equal rank and leave the order of the next clause as it is: <i>Er bleibt zu Hause, denn er ist krank</i>. The <strong>subordinating conjunctions</strong>, such as <i>dass</i> (“that”), <i>weil</i> (“because”), <i>wenn</i> (“if,” “whenever”), <i>als</i> (“when,” of one past event), <i>ob</i> (“whether”), <i>obwohl</i> (“although”), <i>damit</i> (“so that”), <i>bevor</i> (“before”), and <i>nachdem</i> (“after”), send the finite verb to the end of their clause: <i>Er bleibt zu Hause, weil er krank ist</i>. An adverb at the head of a main clause, such as <i>deshalb</i> (“therefore”) or <i>trotzdem</i> (“nevertheless”), puts the verb before the subject, since the verb must stand second: <i>Deshalb bleibt er zu Hause</i>.</p>",
   "qp": {
    "id": "q-de-conjunctions",
    "variants": [
     {
      "prompt": "Choose the order: <i>Ich weiß, dass er morgen ___</i> (“I know that he is coming tomorrow”).",
      "options": [
       "<i>kommt er</i>",
       "<i>er kommt</i>",
       "<i>kommt</i>",
       "<i>komme</i>"
      ],
      "answer": 2,
      "explain": "<i>Dass</i> sends the finite verb to the end of its clause."
     },
     {
      "prompt": "Choose the conjunction: <i>Das ist nicht rot, ___ blau</i> (“That is not red but blue”).",
      "options": [
       "<i>aber</i>",
       "<i>sondern</i>",
       "<i>denn</i>",
       "<i>oder</i>"
      ],
      "answer": 1,
      "explain": "After a negative, “but rather” is <i>sondern</i>."
     },
     {
      "prompt": "Choose the order: <i>Es regnet; trotzdem ___</i> (“It is raining; nevertheless we are going out”).",
      "options": [
       "<i>gehen wir aus</i>",
       "<i>wir gehen aus</i>",
       "<i>wir ausgehen</i>",
       "<i>aus wir gehen</i>"
      ],
      "answer": 0,
      "explain": "<i>Trotzdem</i> is an adverb in first place, so the verb comes second, before the subject."
     }
    ]
   }
  },
  {
   "id": "separable",
   "title": "Separable and inseparable prefixes",
   "body": "<p>The verb <i>abfahren</i> (“to depart”) is split in a main clause: <i>Der Zug fährt um acht ab</i> (“The train departs at eight”). Many German verbs have a separable prefix of this kind, which is also a word of its own, such as <i>an</i>, <i>auf</i>, <i>aus</i>, <i>ein</i>, <i>mit</i>, <i>zu</i>, or <i>zurück</i>; it is stressed, and in a main clause it goes to the end. In a dependent clause, where the verb goes to the end, it is joined again: <i>…, weil der Zug um acht abfährt</i>. In the participle, <i>ge-</i> stands between the prefix and the stem (<i>abgefahren</i>), and in the infinitive with <i>zu</i>, so does <i>zu</i> (<i>abzufahren</i>). The inseparable prefixes, <i>be-</i>, <i>emp-</i>, <i>ent-</i>, <i>er-</i>, <i>ge-</i>, <i>miss-</i>, <i>ver-</i>, and <i>zer-</i>, are never stressed, never split from the verb, and take no <i>ge-</i> in the participle: <i>verstehen</i>, <i>er versteht</i>, <i>verstanden</i>. Section IV treats what these prefixes do to the meaning.</p>",
   "qp": {
    "id": "q-de-separable",
    "variants": [
     {
      "prompt": "Which sentence is correct? (“I will call you tomorrow,” from <i>anrufen</i>)",
      "options": [
       "<i>Ich anrufe dich morgen.</i>",
       "<i>Ich rufe an dich morgen.</i>",
       "<i>Ich rufe dich morgen an.</i>",
       "<i>Ich dich morgen anrufe.</i>"
      ],
      "answer": 2,
      "explain": "In a main clause the separable prefix goes to the end: <i>Ich rufe dich morgen an</i>."
     },
     {
      "prompt": "What is the past participle of <i>einkaufen</i> (“to shop”)?",
      "options": [
       "<i>geeinkauft</i>",
       "<i>eingekauft</i>",
       "<i>einkaufte</i>",
       "<i>eingekaufen</i>"
      ],
      "answer": 1,
      "explain": "<i>Ge-</i> stands between the prefix and the stem."
     },
     {
      "prompt": "Which verb has an inseparable prefix?",
      "options": [
       "<i>bezahlen</i>",
       "<i>abholen</i>",
       "<i>mitbringen</i>",
       "<i>zurückgeben</i>"
      ],
      "answer": 0,
      "explain": "<i>Be-</i> is inseparable: <i>er bezahlt</i>, <i>bezahlt</i> (participle)."
     }
    ]
   }
  },
  {
   "id": "modal-particles",
   "title": "Modal particles",
   "body": "<p>German has a class of small words that do not change what the sentence states, but show how the speaker takes it, as English uses tone of voice or a word like “after all.” Grammars call them <strong>modal particles</strong> (<i>Modalpartikeln</i>). <i>Doch</i> urges or contradicts gently: <i>Komm doch mit!</i> (“Do come along!”). <i>Ja</i> appeals to what both speakers know: <i>Das weißt du ja</i> (“You know that, after all”). <i>Mal</i> softens a request: <i>Hör mal!</i> (“Just listen!”). <i>Eben</i> and <i>halt</i> mark something that cannot be helped: <i>Das ist eben so</i> (“That’s just how it is”). <i>Denn</i> in a question shows interest or surprise: <i>Was machst du denn?</i> (“What on earth are you doing?”). These particles are unstressed and stand in the middle of the clause; most of them have other uses as well (<i>ja</i> as “yes,” <i>denn</i> as “for”), and only the sentence shows which is meant.</p>",
   "qp": {
    "id": "q-de-modal-particles",
    "variants": [
     {
      "prompt": "What does <i>doch</i> add in <i>Setz dich doch!</i>?",
      "options": [
       "A negation: “Don’t sit down!”",
       "A question: “Are you sitting?”",
       "A friendly urging: “Do sit down!”",
       "A time: “Sit down later, then.”"
      ],
      "answer": 2,
      "explain": "<i>Doch</i> as a modal particle urges gently."
     },
     {
      "prompt": "In <i>Wo wohnst du denn?</i>, what is <i>denn</i>?",
      "options": [
       "The conjunction “for”",
       "A modal particle showing interest",
       "An adverb of time, “then”",
       "A preposition governing <i>du</i>"
      ],
      "answer": 1,
      "explain": "In a question, <i>denn</i> is a modal particle; between clauses it would be the conjunction “for.”"
     },
     {
      "prompt": "Which sentence uses <i>ja</i> as a modal particle?",
      "options": [
       "<i>Du bist ja schon da!</i>",
       "<i>Ja, ich komme.</i>",
       "<i>Er sagte ja.</i>",
       "<i>Ja, das ist richtig so.</i>"
      ],
      "answer": 0,
      "explain": "Unstressed in the middle of the clause, <i>ja</i> appeals to what both speakers see: “Why, you’re here already!”"
     }
    ]
   }
  }
 ]
};
