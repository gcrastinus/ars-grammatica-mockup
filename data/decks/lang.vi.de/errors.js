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
   "body": "<p>A student writes <em lang=\"de\">er gehte</em> for “he went,” and <em lang=\"de\">die Äpfels</em> for “the apples.” Neither <em lang=\"de\">gehte</em> nor <em lang=\"de\">Äpfels</em> is a German form, because the past of <em lang=\"de\">gehen</em> (“to go”) is <em lang=\"de\">ging</em>, and the plural of <em lang=\"de\">Apfel</em> (“apple”) is <em lang=\"de\">Äpfel</em>. The other word in each phrase is ordinary German, so the error lies in the one word.</p><p>Donatus calls a fault in one word a <strong>barbarism</strong>, “one part of speech faulty in ordinary speech” (<em lang=\"de\">una pars orationis vitiosa in communi sermone</em>; <em lang=\"de\">Ars maior</em> III). So <em lang=\"de\">gehte</em> and <em lang=\"de\">Äpfels</em> are barbarisms.</p>",
   "qp": {
    "id": "q-one-word",
    "variants": [
     {
      "prompt": "The past of <em lang=\"de\">finden</em> (“to find”) is <em lang=\"de\">fand</em>. A student writes <em lang=\"de\">er findete</em>. What kind of error is <em lang=\"de\">findete</em>?",
      "options": [
       "No error: every German past adds <em lang=\"de\">-te</em>",
       "A solecism: <em lang=\"de\">er</em> and <em lang=\"de\">findete</em> disagree in case",
       "A barbarism: <em lang=\"de\">findete</em> is not the past",
       "A metaplasm, since the form is unusual"
      ],
      "answer": 2,
      "explain": "The past is <em lang=\"de\">fand</em>, as the past of <em lang=\"de\">gehen</em> is <em lang=\"de\">ging</em> and not <em lang=\"de\">gehte</em>. <em lang=\"de\">Findete</em> is not a form of <em lang=\"de\">finden</em>, so the error is in the one word."
     },
     {
      "prompt": "What is the plural of <em lang=\"de\">Vogel</em> (“bird”)?",
      "options": [
       "<em lang=\"de\">Vogels</em>",
       "<em lang=\"de\">Vögel</em>",
       "<em lang=\"de\">Vögeln</em>",
       "<em lang=\"de\">Vogeln</em>"
      ],
      "answer": 1,
      "explain": "The nominative plural is <em lang=\"de\">Vögel</em>. <em lang=\"de\">Vogels</em> adds <em lang=\"de\">-s</em>, the same kind of error as <em lang=\"de\">Äpfels</em> for <em lang=\"de\">Äpfel</em>; <em lang=\"de\">Vögeln</em> is a real form, but it is the dative plural."
     },
     {
      "prompt": "Why is <em lang=\"de\">er sang</em> (“he sang”) not a barbarism, although it does not end in <em lang=\"de\">-te</em>?",
      "options": [
       "Because <em lang=\"de\">sang</em> is the real past of <em lang=\"de\">singen</em>",
       "Because a barbarism is an error in the joining of words",
       "Because only a noun can be a barbarism",
       "Because <em lang=\"de\">sang</em> is a metaplasm allowed in prose"
      ],
      "answer": 0,
      "explain": "<em lang=\"de\">Singen</em> is a strong verb, and its past is <em lang=\"de\">sang</em>, so the form is correct. A barbarism is a form the language does not have, such as <em lang=\"de\">singte</em>; an error in the joining of words is a solecism."
     }
    ]
   }
  },
  {
   "id": "joining",
   "title": "Good words badly joined",
   "body": "<p><em lang=\"de\">Das guter Kind</em> joins real German forms, but they do not fit one another, because after <em lang=\"de\">das</em> the adjective in the nominative singular takes <em lang=\"de\">-e</em>: <em lang=\"de\">das gute Kind</em> (“the good child”). <em lang=\"de\">Die Kinder spielt</em> fails in number, because <em lang=\"de\">Kinder</em> (“children”) is plural, whereas <em lang=\"de\">spielt</em> is third person singular; the plural verb is <em lang=\"de\">spielen</em>. <em lang=\"de\">Ich helfe den Kind</em> fails in case, because <em lang=\"de\">helfen</em> (“to help”) takes the dative, whereas <em lang=\"de\">den</em> is accusative: the correct form is <em lang=\"de\">ich helfe dem Kind</em> (“I help the child”).</p><p>Donatus calls an error of this kind a <strong>solecism</strong>, “a fault in the joining of the parts of speech, made against the rule of the art of grammar” (<em lang=\"de\">vitium in contextu partium orationis contra regulam artis grammaticae factum</em>; <em lang=\"de\">Ars maior</em> III.2). Each word exists, but the construction is incorrect.</p>",
   "qp": {
    "id": "q-joining",
    "variants": [
     {
      "prompt": "What kind of error is <em lang=\"de\">das kleiner Haus</em>?",
      "options": [
       "A barbarism: <em lang=\"de\">Haus</em> is not a German word",
       "No error: <em lang=\"de\">kleiner</em> is the ending after <em lang=\"de\">das</em>",
       "A solecism: the ending is <em lang=\"de\">-e</em>",
       "A metaplasm: <em lang=\"de\">kleiner</em> is required in prose"
      ],
      "answer": 2,
      "explain": "The words are real. After <em lang=\"de\">das</em> the nominative singular adjective ends in <em lang=\"de\">-e</em>, as in <em lang=\"de\">das gute Kind</em>. The phrase is <em lang=\"de\">das kleine Haus</em>."
     },
     {
      "prompt": "What fails in <em lang=\"de\">die Hunde bellt</em>?",
      "options": [
       "Nothing: a plural noun takes a singular verb",
       "<em lang=\"de\">Bellt</em> is not a form of <em lang=\"de\">bellen</em>",
       "Number does not match",
       "<em lang=\"de\">Die</em> is a preposition"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Bellt</em> is a real third person singular, and <em lang=\"de\">Hunde</em> is a real plural. The plural verb is <em lang=\"de\">bellen</em>. <em lang=\"de\">Die Kinder spielt</em> is the same mismatch."
     },
     {
      "prompt": "Choose the sentence for “I help the father.”",
      "options": [
       "<em lang=\"de\">Ich helfe den Vater.</em>",
       "<em lang=\"de\">Ich helfe dem Vater.</em>",
       "<em lang=\"de\">Ich helfe des Vaters.</em>",
       "<em lang=\"de\">Ich helfe der Vater.</em>"
      ],
      "answer": 1,
      "explain": "<em lang=\"de\">Helfen</em> takes the dative, as in <em lang=\"de\">ich helfe dem Kind</em>. <em lang=\"de\">Dem Vater</em> is the masculine dative. <em lang=\"de\">Den Vater</em> is accusative."
     }
    ]
   }
  },
  {
   "id": "prose-poem",
   "title": "Ordinary speech and the poet",
   "body": "<p>A poet may place German words in an order that ordinary prose does not use, but that order is not the same kind of departure as <em lang=\"de\">gehte</em> in a student’s sentence, because the poet’s words are all real German words, whereas <em lang=\"de\">gehte</em> is not a German form.</p><p>Donatus also distinguishes by setting. A barbarism belongs to ordinary speech, whereas in a poem he calls a departure in a single word a <strong>metaplasm</strong> (<em lang=\"de\">in poemate metaplasmus</em>), a change of form allowed to the poet. That permission belongs to the poem; it does not make <em lang=\"de\">gehte</em> the past of <em lang=\"de\">gehen</em>.</p>",
   "qp": {
    "id": "q-prose-poem",
    "variants": [
     {
      "prompt": "A student writes <em lang=\"de\">die Buches</em> for “the books.” What is <em lang=\"de\">Buches</em>?",
      "options": [
       "The ordinary plural of <em lang=\"de\">Buch</em>",
       "A barbarism: the plural is <em lang=\"de\">Bücher</em>",
       "A metaplasm, and therefore the right prose plural",
       "A dative singular used as a correct plural"
      ],
      "answer": 1,
      "explain": "The plural of <em lang=\"de\">Buch</em> is <em lang=\"de\">Bücher</em>. <em lang=\"de\">Buches</em> is not that plural, as <em lang=\"de\">Äpfels</em> is not the plural of <em lang=\"de\">Apfel</em>. In ordinary speech the error is a barbarism."
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
      "explain": "In a poem Donatus calls the departure a metaplasm. In ordinary speech the same bad form is a barbarism. <em lang=\"de\">Gehte</em> for <em lang=\"de\">ging</em> is the barbarism."
     },
     {
      "prompt": "Why does a poet’s unusual word order differ from <em lang=\"de\">er laufte</em> for “he ran”?",
      "options": [
       "The unusual order uses real words; <em lang=\"de\">laufte</em> is not a German form",
       "Both are barbarisms, because both depart from ordinary prose",
       "Both are metaplasms, because both are unusual",
       "<em lang=\"de\">Laufte</em> is a solecism, and the unusual order is a barbarism"
      ],
      "answer": 0,
      "explain": "The past of <em lang=\"de\">laufen</em> is <em lang=\"de\">lief</em>, so <em lang=\"de\">laufte</em> is not a German form, and in ordinary speech it is a barbarism. An unusual order keeps real words, so it is not an error in one form."
     }
    ]
   }
  }
 ]
};
