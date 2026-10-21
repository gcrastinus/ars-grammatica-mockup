window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.de/usage"] = {
 "id": "lang.vi.de/usage",
 "title": "Common Errors in German",
 "sub": "The cases of the article, and case, the adjective, and the place of the verb",
 "sources": "Duden, <em>Die Grammatik</em>",
 "panels": [
  {
   "id": "article",
   "title": "The cases of the article",
   "body": "<p>A student who knows that the masculine article is <em>der</em> may write <em>ich sehe der Hund</em> for “I see the dog.” Each word is real German, but the construction is a solecism, because <em>sehen</em> takes the accusative, and the masculine accusative is <em>den</em>: <em>ich sehe den Hund</em>. In the masculine the article changes in every case (<em>der</em>, <em>den</em>, <em>dem</em>, <em>des</em>), and so do <em>ein</em> and the possessives (<em>ein</em>, <em>einen</em>, <em>einem</em>, <em>eines</em>). In the feminine and the neuter the nominative and the accusative are alike (<em>die</em>, <em>das</em>).</p>\n<p>So most German errors of case show in the masculine, and a sentence such as <em>Er hat ein Bruder</em> (“he has a brother”) is incorrect, whereas <em>Er hat einen Bruder</em> is correct.</p>",
   "qp": {
    "id": "q-de-vi-art",
    "variants": [
     {
      "prompt": "What kind of error is <em>Ich kenne der Lehrer</em>?",
      "options": [
       "A barbarism in <em>kenne</em>",
       "A solecism of number",
       "A solecism of case",
       "No error"
      ],
      "answer": 2,
      "explain": "<em>Kennen</em> takes the accusative: <em>den Lehrer</em>."
     },
     {
      "prompt": "Which form completes <em>Wir haben ______ Garten</em> (“we have a garden”)?",
      "options": [
       "<em>ein</em>",
       "<em>einen</em>",
       "<em>einem</em>",
       "<em>eines</em>"
      ],
      "answer": 1,
      "explain": "<em>Garten</em> is masculine, and the object of <em>haben</em> is accusative."
     },
     {
      "prompt": "In which gender do the nominative and accusative articles differ?",
      "options": [
       "The masculine",
       "The feminine",
       "The neuter",
       "All three"
      ],
      "answer": 0,
      "explain": "Only the masculine has <em>der</em> and <em>den</em>."
     }
    ]
   }
  },
  {
   "id": "case-verb",
   "title": "Case, the adjective, and the verb’s place",
   "body": "<p>Several German prepositions always take one case, and so another case after them is a solecism: the preposition and the article are both real German, but they do not fit. The prepositions fall into these groups:</p>\n<p><strong><em>mit, zu, aus, von</em></strong>, which take the dative (<em>mit der Schwester</em>, “with the sister”; <em>aus der Schule</em>, “out of the school”)<br><strong><em>für, durch, ohne</em></strong>, which take the accusative (<em>für das Kind</em>, “for the child”; <em>durch den Garten</em>, “through the garden”)<br><strong><em>an</em></strong> and <strong><em>in</em></strong>, which take the dative for the place where and the accusative for motion toward a place (<em>an der Schule</em>, “at the school”; <em>an die Schule</em>, “to the school”)</p><p>After <em>der</em>, <em>die</em>, or <em>das</em> in the nominative singular, the adjective ends in <em>-e</em>: <em>der gute Vater</em>, <em>die kleine Schwester</em>. With no article, a masculine nominative adjective shows <em>-er</em>: <em>heißer Kaffee</em> (“hot coffee”).</p><p>In a statement the finite verb is the second element, so <em>Morgen kommt die Schwester</em> (“tomorrow the sister is coming”) has <em>kommt</em> second. In a subordinate clause introduced by <em>dass</em> (“that”), the finite verb stands at the end: <em>ich weiß, dass sie schläft</em> (“I know that she is sleeping”). A yes-or-no question puts the verb first: <em>schläft sie?</em> (“is she sleeping?”). A separable prefix stands at the end of the main clause: <em>ich mache die Tür zu</em> (“I close the door”).</p>",
   "qp": {
    "id": "q-case-verb",
    "variants": [
     {
      "prompt": "Choose the phrase for “without the father.”",
      "options": [
       "<em>ohne dem Vater</em>",
       "<em>ohne den Vater</em>",
       "<em>ohne des Vaters</em>",
       "<em>ohne der Vater</em>"
      ],
      "answer": 1,
      "explain": "<em>Ohne</em> takes the accusative, as <em>für</em> and <em>durch</em> do. <em>Den Vater</em> is the masculine accusative. <em>Dem</em> is dative."
     },
     {
      "prompt": "Where is the finite verb in <em>Heute schläft der Vater</em>?",
      "options": [
       "First, because <em>heute</em> is an adverb",
       "Second: <em>schläft</em> follows <em>heute</em>",
       "At the end, because the clause begins with <em>heute</em>",
       "Third, after <em>der Vater</em>"
      ],
      "answer": 1,
      "explain": "A statement keeps the finite verb second, as <em>Morgen kommt die Schwester</em> does. <em>Heute</em> is the first element, and <em>schläft</em> is the second."
     },
     {
      "prompt": "Why does the adjective end in <em>-er</em> in <em>kalter Wein</em> (“cold wine”)?",
      "options": [
       "Because <em>Wein</em> is feminine",
       "Because there is no article, and the noun is masculine nominative",
       "Because <em>kalter</em> is the ending after <em>der</em>",
       "Because <em>-er</em> marks the past tense"
      ],
      "answer": 1,
      "explain": "With no article, a masculine nominative adjective shows <em>-er</em>, as in <em>heißer Kaffee</em>. After <em>der</em> the ending would be <em>-e</em>: <em>der kalte Wein</em>."
     }
    ]
   }
  }
 ]
};
