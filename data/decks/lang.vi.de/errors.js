window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.de/errors"] = {
 "id": "lang.vi.de/errors",
 "title": "Barbarism and Solecism in German",
 "sub": "An error in one German word, and an error in the joining of real German words",
 "sources": "Donatus, <em>Ars maior</em>; Duden, <em>Die Grammatik</em>",
 "panels": [
  {
   "id": "one-word",
   "title": "An error in one word",
   "body": "<p>A student writes <em>er gehte</em> for “he went,” and <em>die Äpfels</em> for “the apples.” Neither <em>gehte</em> nor <em>Äpfels</em> is a German form, because the past of <em>gehen</em> (“to go”) is <em>ging</em>, and the plural of <em>Apfel</em> (“apple”) is <em>Äpfel</em>. The other word in each phrase is ordinary German, so the error lies in the one word.</p><p>Donatus calls a fault in one word a <strong>barbarism</strong>, “one part of speech faulty in ordinary speech” (<em>una pars orationis vitiosa in communi sermone</em>; <em>Ars maior</em> III). So <em>gehte</em> and <em>Äpfels</em> are barbarisms.</p>",
   "qp": {
    "id": "q-one-word",
    "variants": [
     {
      "prompt": "The past of <em>finden</em> (“to find”) is <em>fand</em>. A student writes <em>er findete</em>. What kind of error is <em>findete</em>?",
      "options": [
       "No error: every German past adds <em>-te</em>",
       "A solecism: <em>er</em> and <em>findete</em> disagree in case",
       "A barbarism: <em>findete</em> is not the past",
       "A metaplasm, since the form is unusual"
      ],
      "answer": 2,
      "explain": "The past is <em>fand</em>, as the past of <em>gehen</em> is <em>ging</em> and not <em>gehte</em>. <em>Findete</em> is not a form of <em>finden</em>, so the error is in the one word."
     },
     {
      "prompt": "What is the plural of <em>Vogel</em> (“bird”)?",
      "options": [
       "<em>Vogels</em>",
       "<em>Vögel</em>",
       "<em>Vögeln</em>",
       "<em>Vogeln</em>"
      ],
      "answer": 1,
      "explain": "The nominative plural is <em>Vögel</em>. <em>Vogels</em> adds <em>-s</em>, the same kind of error as <em>Äpfels</em> for <em>Äpfel</em>; <em>Vögeln</em> is a real form, but it is the dative plural."
     },
     {
      "prompt": "Why is <em>er sang</em> (“he sang”) not a barbarism, although it does not end in <em>-te</em>?",
      "options": [
       "Because <em>sang</em> is the real past of <em>singen</em>",
       "Because a barbarism is an error in the joining of words",
       "Because only a noun can be a barbarism",
       "Because <em>sang</em> is a metaplasm allowed in prose"
      ],
      "answer": 0,
      "explain": "<em>Singen</em> is a strong verb, and its past is <em>sang</em>, so the form is correct. A barbarism is a form the language does not have, such as <em>singte</em>; an error in the joining of words is a solecism."
     }
    ]
   }
  },
  {
   "id": "joining",
   "title": "Good words badly joined",
   "body": "<p><em>Das guter Kind</em> joins real German forms, but they do not fit one another, because after <em>das</em> the adjective in the nominative singular takes <em>-e</em>: <em>das gute Kind</em> (“the good child”). <em>Die Kinder spielt</em> fails in number, because <em>Kinder</em> (“children”) is plural, whereas <em>spielt</em> is third person singular; the plural verb is <em>spielen</em>. <em>Ich helfe den Kind</em> fails in case, because <em>helfen</em> (“to help”) takes the dative, whereas <em>den</em> is accusative: the correct form is <em>ich helfe dem Kind</em> (“I help the child”).</p><p>Donatus calls an error of this kind a <strong>solecism</strong>, “a fault in the joining of the parts of speech, made against the rule of the art of grammar” (<em>vitium in contextu partium orationis contra regulam artis grammaticae factum</em>; <em>Ars maior</em> III.2). Each word exists, but the construction is incorrect.</p>",
   "qp": {
    "id": "q-joining",
    "variants": [
     {
      "prompt": "What kind of error is <em>das kleiner Haus</em>?",
      "options": [
       "A barbarism: <em>Haus</em> is not a German word",
       "No error: <em>kleiner</em> is the ending after <em>das</em>",
       "A solecism: the ending is <em>-e</em>",
       "A metaplasm: <em>kleiner</em> is required in prose"
      ],
      "answer": 2,
      "explain": "The words are real. After <em>das</em> the nominative singular adjective ends in <em>-e</em>, as in <em>das gute Kind</em>. The phrase is <em>das kleine Haus</em>."
     },
     {
      "prompt": "What fails in <em>die Hunde bellt</em>?",
      "options": [
       "Nothing: a plural noun takes a singular verb",
       "<em>Bellt</em> is not a form of <em>bellen</em>",
       "Number does not match",
       "<em>Die</em> is a preposition"
      ],
      "answer": 2,
      "explain": "<em>Bellt</em> is a real third person singular, and <em>Hunde</em> is a real plural. The plural verb is <em>bellen</em>. <em>Die Kinder spielt</em> is the same mismatch."
     },
     {
      "prompt": "Choose the sentence for “I help the father.”",
      "options": [
       "<em>Ich helfe den Vater.</em>",
       "<em>Ich helfe dem Vater.</em>",
       "<em>Ich helfe des Vaters.</em>",
       "<em>Ich helfe der Vater.</em>"
      ],
      "answer": 1,
      "explain": "<em>Helfen</em> takes the dative, as in <em>ich helfe dem Kind</em>. <em>Dem Vater</em> is the masculine dative. <em>Den Vater</em> is accusative."
     }
    ]
   }
  },
  {
   "id": "prose-poem",
   "title": "Ordinary speech and the poet",
   "body": "<p>A poet may place German words in an order that ordinary prose does not use, but that order is not the same kind of departure as <em>gehte</em> in a student’s sentence, because the poet’s words are all real German words, whereas <em>gehte</em> is not a German form.</p><p>Donatus also distinguishes by setting. A barbarism belongs to ordinary speech, whereas in a poem he calls a departure in a single word a <strong>metaplasm</strong> (<em>in poemate metaplasmus</em>), a change of form allowed to the poet. That permission belongs to the poem; it does not make <em>gehte</em> the past of <em>gehen</em>.</p>",
   "qp": {
    "id": "q-prose-poem",
    "variants": [
     {
      "prompt": "A student writes <em>die Buches</em> for “the books.” What is <em>Buches</em>?",
      "options": [
       "The ordinary plural of <em>Buch</em>",
       "A barbarism: the plural is <em>Bücher</em>",
       "A metaplasm, and therefore the right prose plural",
       "A dative singular used as a correct plural"
      ],
      "answer": 1,
      "explain": "The plural of <em>Buch</em> is <em>Bücher</em>. <em>Buches</em> is not that plural, as <em>Äpfels</em> is not the plural of <em>Apfel</em>. In ordinary speech the error is a barbarism."
     },
     {
      "prompt": "What does Donatus call a poet’s departure in a single word?",
      "options": [
       "A solecism of word order",
       "A metaplasm",
       "A barbarism, which makes the poem incorrect",
       "No departure: German verse cannot alter a form"
      ],
      "answer": 1,
      "explain": "In a poem Donatus calls the departure a metaplasm. In ordinary speech the same bad form is a barbarism. <em>Gehte</em> for <em>ging</em> is the barbarism."
     },
     {
      "prompt": "Why does a poet’s unusual word order differ from <em>er laufte</em> for “he ran”?",
      "options": [
       "The unusual order uses real words; <em>laufte</em> is not a German form",
       "Both are barbarisms, because both depart from ordinary prose",
       "Both are metaplasms, because both are unusual",
       "<em>Laufte</em> is a solecism, and the unusual order is a barbarism"
      ],
      "answer": 0,
      "explain": "The past of <em>laufen</em> is <em>lief</em>, so <em>laufte</em> is not a German form, and in ordinary speech it is a barbarism. An unusual order keeps real words, so it is not an error in one form."
     }
    ]
   }
  }
 ]
};
