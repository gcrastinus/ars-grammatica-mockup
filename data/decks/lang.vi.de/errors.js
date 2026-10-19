window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.de/errors"] = {
 "id": "lang.vi.de/errors",
 "title": "Barbarism and Solecism in German",
 "sub": "An error in one German word, and an error in the joining of real German words",
 "sources": "Donatus, <i>Ars maior</i>; Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "one-word",
   "title": "An error in one word",
   "body": "<p>A student writes <em>er gehte</em> for “he went,” and <em>die Äpfels</em> for “the apples.” Neither word is a German form. The past of <em>gehen</em> (“to go”) is <em>ging</em>. The plural of <em>Apfel</em> (“apple”) is <em>Äpfel</em>. The other words in <em>er gehte</em> and <em>die Äpfels</em> may be ordinary German. The error is in the one word.</p><p>Donatus calls a fault in one word a <strong>barbarism</strong> (<em>barbarismus est una pars orationis vitiosa in communi sermone</em>; <em>Ars maior</em> III). <em>Gehte</em> and <em>Äpfels</em> are barbarisms.</p>",
   "qp": {
    "id": "q-one-word",
    "variants": [
     {
      "prompt": "The past of <em>finden</em> (“to find”) is <em>fand</em>. A student writes <em>er findete</em>. What kind of error is <em>findete</em>?",
      "options": ["No error: every German past adds <em>-te</em>", "A solecism: <em>er</em> and <em>findete</em> disagree in case", "A barbarism: <em>findete</em> is not the past", "A metaplasm required in ordinary prose"],
      "answer": 2,
      "explain": "The past is <em>fand</em>, as the past of <em>gehen</em> is <em>ging</em> and not <em>gehte</em>. <em>Findete</em> is not a form of <em>finden</em>, so the error is in the one word."
     },
     {
      "prompt": "Choose the plural of <em>Garten</em> (“garden”).",
      "options": ["<em>Gartens</em>", "<em>Gärten</em>", "<em>Gartner</em>", "<em>Gärtenen</em>"],
      "answer": 1,
      "explain": "The plural is <em>Gärten</em>. <em>Gartens</em> adds <em>-s</em>, the same kind of error as <em>Äpfels</em> for <em>Äpfel</em>."
     },
     {
      "prompt": "Why is <em>ging</em> not a barbarism?",
      "options": ["Because it is the past of <em>gehen</em>", "Because every one-syllable verb is a solecism", "Because <em>ging</em> is the plural of <em>Apfel</em>", "Because a barbarism cannot be a verb"],
      "answer": 0,
      "explain": "<em>Ging</em> is the real past of <em>gehen</em>. A barbarism is a form the language does not have. <em>Gehte</em> is that error."
     }
    ]
   }
  },
  {
   "id": "joining",
   "title": "Good words badly joined",
   "body": "<p><em>Das guter Kind</em> joins real forms, and they do not fit. After <em>das</em>, the adjective in the nominative singular takes <em>-e</em>: <em>das gute Kind</em> (“the good child”). <em>Die Kinder spielt</em> fails in number. <em>Kinder</em> (“children”) is plural, and <em>spielt</em> is third person singular. The plural is <em>spielen</em>. <em>Ich helfe den Kind</em> fails in case. <em>Helfen</em> (“to help”) takes the dative: <em>ich helfe dem Kind</em> (“I help the child”). <em>Den</em> is accusative.</p><p>Donatus calls a fault in the joining a <strong>solecism</strong> (<em>soloecismus est vitium in contextu partium orationis contra regulam artis grammaticae factum</em>). Each word exists. The construction is incorrect.</p>",
   "qp": {
    "id": "q-joining",
    "variants": [
     {
      "prompt": "What kind of error is <em>das kleiner Haus</em>?",
      "options": ["A barbarism: <em>Haus</em> is not a German word", "No error: <em>kleiner</em> is the ending after <em>das</em>", "A solecism: the ending is <em>-e</em>", "A metaplasm: <em>kleiner</em> is required in prose"],
      "answer": 2,
      "explain": "The words are real. After <em>das</em> the nominative singular adjective ends in <em>-e</em>, as in <em>das gute Kind</em>. The phrase is <em>das kleine Haus</em>."
     },
     {
      "prompt": "What fails in <em>die Hunde bellt</em>?",
      "options": ["Nothing: a plural noun takes a singular verb", "<em>Bellt</em> is not a form of <em>bellen</em>", "Number does not match", "<em>Die</em> is a preposition"],
      "answer": 2,
      "explain": "<em>Bellt</em> is a real third person singular, and <em>Hunde</em> is a real plural. The plural verb is <em>bellen</em>. <em>Die Kinder spielt</em> is the same mismatch."
     },
     {
      "prompt": "Choose the sentence for “I help the father.”",
      "options": ["<em>Ich helfe den Vater.</em>", "<em>Ich helfe dem Vater.</em>", "<em>Ich helfe des Vaters.</em>", "<em>Ich helfe der Vater.</em>"],
      "answer": 1,
      "explain": "<em>Helfen</em> takes the dative, as in <em>ich helfe dem Kind</em>. <em>Dem Vater</em> is the masculine dative. <em>Den Vater</em> is accusative."
     }
    ]
   }
  },
  {
   "id": "case-verb",
   "title": "Case, the adjective, and the verb’s place",
   "body": "<p>Several prepositions keep one case. Using the other case is a solecism: both the preposition and the article are real German, and they do not fit.</p><p>The groups are these:</p>\n<p><strong>mit, zu, aus, von</strong>, the dative (“mit der Schwester,” “with the sister”; “aus der Schule,” “out of the school”)<br><strong>für, durch, ohne</strong>, the accusative (“für das Kind,” “for the child”; “durch den Garten,” “through the garden”)<br><strong>an</strong> and <strong>in</strong>, the dative for place and the accusative for motion (“an der Schule,” “at the school”; “an die Schule,” “to the school”)</p><p>After <em>der</em>, <em>die</em>, or <em>das</em> in the nominative singular, the adjective ends in <em>-e</em>: <em>der gute Vater</em>, <em>die kleine Schwester</em>. With no article, a masculine nominative adjective shows <em>-er</em>: <em>heißer Kaffee</em> (“hot coffee”).</p><p>In a statement the finite verb is the second element. <em>Morgen kommt die Schwester</em> (“tomorrow the sister is coming”) has <em>kommt</em> second. In a subordinate clause introduced by <em>dass</em> (“that”), the finite verb stands at the end: <em>ich weiß, dass sie schläft</em> (“I know that she is sleeping”). A yes-or-no question puts the verb first: <em>schläft sie?</em> (“is she sleeping?”). A separable prefix stands at the end of the main clause: <em>ich mache die Tür zu</em> (“I close the door”).</p>",
   "qp": {
    "id": "q-case-verb",
    "variants": [
     {
      "prompt": "Choose the phrase for “without the father.”",
      "options": ["<em>ohne dem Vater</em>", "<em>ohne den Vater</em>", "<em>ohne des Vaters</em>", "<em>ohne der Vater</em>"],
      "answer": 1,
      "explain": "<em>Ohne</em> takes the accusative, as <em>für</em> and <em>durch</em> do. <em>Den Vater</em> is the masculine accusative. <em>Dem</em> is dative."
     },
     {
      "prompt": "Where is the finite verb in <em>Heute schläft der Vater</em>?",
      "options": ["First, because <em>heute</em> is an adverb", "Second: <em>schläft</em> follows <em>heute</em>", "At the end, because the clause begins with <em>heute</em>", "Nowhere: <em>schläft</em> is a separable prefix"],
      "answer": 1,
      "explain": "A statement keeps the finite verb second, as <em>Morgen kommt die Schwester</em> does. <em>Heute</em> is the first element, and <em>schläft</em> is the second."
     },
     {
      "prompt": "Why does the adjective end in <em>-er</em> in <em>kalter Wein</em> (“cold wine”)?",
      "options": ["Because <em>Wein</em> is feminine", "Because there is no article, and the noun is masculine nominative", "Because <em>kalter</em> is the ending after <em>der</em>", "Because <em>-er</em> marks the past tense"],
      "answer": 1,
      "explain": "With no article, a masculine nominative adjective shows <em>-er</em>, as in <em>heißer Kaffee</em>. After <em>der</em> the ending would be <em>-e</em>: <em>der kalte Wein</em>."
     }
    ]
   }
  },
  {
   "id": "prose-poem",
   "title": "Ordinary speech and the poet",
   "body": "<p><em>Gehte</em> in a student’s sentence is a barbarism. The past of <em>gehen</em> is <em>ging</em>. A poet may place words in an order that ordinary prose does not use, and that order is not the same error. The words are real German words.</p><p>Donatus marks the difference of setting. A barbarism belongs to ordinary speech. In a poem he calls the same departure in a word a metaplasm (<em>in poemate metaplasmus</em>). The license belongs to the poem. It does not make <em>gehte</em> the past of <em>gehen</em>.</p>",
   "qp": {
    "id": "q-prose-poem",
    "variants": [
     {
      "prompt": "A student writes <em>die Buches</em> for “the books.” What is <em>Buches</em>?",
      "options": ["The ordinary plural of <em>Buch</em>", "A barbarism: the plural is <em>Bücher</em>", "A metaplasm, and therefore the right prose plural", "A dative singular used as a correct plural"],
      "answer": 1,
      "explain": "The plural of <em>Buch</em> is <em>Bücher</em>. <em>Buches</em> is not that plural, as <em>Äpfels</em> is not the plural of <em>Apfel</em>. In ordinary speech the error is a barbarism."
     },
     {
      "prompt": "What does Donatus call a poet’s departure in a single word?",
      "options": ["A solecism of word order", "A metaplasm", "A barbarism, which makes the poem incorrect", "No departure: German verse cannot alter a form"],
      "answer": 1,
      "explain": "In a poem Donatus calls the departure a metaplasm. In ordinary speech the same bad form is a barbarism. <em>Gehte</em> for <em>ging</em> is the barbarism."
     },
     {
      "prompt": "Why does a poet’s unusual word order differ from <em>er gehte</em>?",
      "options": ["The unusual order can use real words; <em>gehte</em> is not a German form", "Both are barbarisms, because both are written", "<em>Gehte</em> is a case ending, and word order is a gender", "There is no difference"],
      "answer": 0,
      "explain": "<em>Gehte</em> is not the past of <em>gehen</em>. The past is <em>ging</em>. An unusual order keeps real words. That is not an error in one form."
     }
    ]
   }
  }
 ]
};
