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
   "body": "<p>A student who knows that the masculine article is <em lang=\"de\">der</em> may write <em lang=\"de\">ich sehe der Hund</em> for “I see the dog.” Each word is real German, but the construction is a solecism, because <em lang=\"de\">sehen</em> takes the accusative, and the masculine accusative is <em lang=\"de\">den</em>: <em lang=\"de\">ich sehe den Hund</em>. In the masculine the article changes in every case (<em lang=\"de\">der</em>, <em lang=\"de\">den</em>, <em lang=\"de\">dem</em>, <em lang=\"de\">des</em>), and so do <em lang=\"de\">ein</em> and the possessives (<em lang=\"de\">ein</em>, <em lang=\"de\">einen</em>, <em lang=\"de\">einem</em>, <em lang=\"de\">eines</em>). In the feminine and the neuter the nominative and the accusative are alike (<em lang=\"de\">die</em>, <em lang=\"de\">das</em>).</p>\n<p>So most German errors of case show in the masculine, and a sentence such as <em lang=\"de\">Er hat ein Bruder</em> (“he has a brother”) is incorrect, whereas <em lang=\"de\">Er hat einen Bruder</em> is correct.</p>",
   "qp": {
    "id": "q-de-vi-art",
    "variants": [
     {
      "prompt": "What kind of error is <em lang=\"de\">Ich kenne der Lehrer</em>?",
      "options": [
       "A barbarism in <em lang=\"de\">kenne</em>",
       "A solecism of number",
       "A solecism of case",
       "No error"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Kennen</em> takes the accusative: <em lang=\"de\">den Lehrer</em>."
     },
     {
      "prompt": "Which form completes <em lang=\"de\">Wir haben ______ Garten</em> (“we have a garden”)?",
      "options": [
       "<em lang=\"de\">ein</em>",
       "<em lang=\"de\">einen</em>",
       "<em lang=\"de\">einem</em>",
       "<em lang=\"de\">eines</em>"
      ],
      "answer": 1,
      "explain": "<em lang=\"de\">Garten</em> is masculine, and the object of <em lang=\"de\">haben</em> is accusative."
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
      "explain": "Only the masculine has <em lang=\"de\">der</em> and <em lang=\"de\">den</em>."
     }
    ]
   }
  },
  {
   "id": "case-verb",
   "title": "Case, the adjective, and the verb’s place",
   "body": "<p>Several German prepositions always take one case, and so another case after them is a solecism: the preposition and the article are both real German, but they do not fit. The prepositions fall into these groups:</p>\n<p><strong><em lang=\"de\">mit, zu, aus, von</em></strong>, which take the dative (<em lang=\"de\">mit der Schwester</em>, “with the sister”; <em lang=\"de\">aus der Schule</em>, “out of the school”)<br><strong><em lang=\"de\">für, durch, ohne</em></strong>, which take the accusative (<em lang=\"de\">für das Kind</em>, “for the child”; <em lang=\"de\">durch den Garten</em>, “through the garden”)<br><strong><em lang=\"de\">an</em></strong> and <strong><em lang=\"de\">in</em></strong>, which take the dative for the place where and the accusative for motion toward a place (<em lang=\"de\">an der Schule</em>, “at the school”; <em lang=\"de\">an die Schule</em>, “to the school”)</p><p>After <em lang=\"de\">der</em>, <em lang=\"de\">die</em>, or <em lang=\"de\">das</em> in the nominative singular, the adjective ends in <em lang=\"de\">-e</em>: <em lang=\"de\">der gute Vater</em>, <em lang=\"de\">die kleine Schwester</em>. With no article, a masculine nominative adjective shows <em lang=\"de\">-er</em>: <em lang=\"de\">heißer Kaffee</em> (“hot coffee”).</p><p>In a statement the finite verb is the second element, so <em lang=\"de\">Morgen kommt die Schwester</em> (“tomorrow the sister is coming”) has <em lang=\"de\">kommt</em> second. In a subordinate clause introduced by <em lang=\"de\">dass</em> (“that”), the finite verb stands at the end: <em lang=\"de\">ich weiß, dass sie schläft</em> (“I know that she is sleeping”). A yes-or-no question puts the verb first: <em lang=\"de\">schläft sie?</em> (“is she sleeping?”). A separable prefix stands at the end of the main clause: <em lang=\"de\">ich mache die Tür zu</em> (“I close the door”).</p>",
   "qp": {
    "id": "q-case-verb",
    "variants": [
     {
      "prompt": "Choose the phrase for “without the father.”",
      "options": [
       "<em lang=\"de\">ohne dem Vater</em>",
       "<em lang=\"de\">ohne den Vater</em>",
       "<em lang=\"de\">ohne des Vaters</em>",
       "<em lang=\"de\">ohne der Vater</em>"
      ],
      "answer": 1,
      "explain": "<em lang=\"de\">Ohne</em> takes the accusative, as <em lang=\"de\">für</em> and <em lang=\"de\">durch</em> do. <em lang=\"de\">Den Vater</em> is the masculine accusative. <em lang=\"de\">Dem</em> is dative."
     },
     {
      "prompt": "Where is the finite verb in <em lang=\"de\">Heute schläft der Vater</em>?",
      "options": [
       "First, because <em lang=\"de\">heute</em> is an adverb",
       "Second: <em lang=\"de\">schläft</em> follows <em lang=\"de\">heute</em>",
       "At the end, because the clause begins with <em lang=\"de\">heute</em>",
       "Third, after <em lang=\"de\">der Vater</em>"
      ],
      "answer": 1,
      "explain": "A statement keeps the finite verb second, as <em lang=\"de\">Morgen kommt die Schwester</em> does. <em lang=\"de\">Heute</em> is the first element, and <em lang=\"de\">schläft</em> is the second."
     },
     {
      "prompt": "Why does the adjective end in <em lang=\"de\">-er</em> in <em lang=\"de\">kalter Wein</em> (“cold wine”)?",
      "options": [
       "Because <em lang=\"de\">Wein</em> is feminine",
       "Because there is no article, and the noun is masculine nominative",
       "Because <em lang=\"de\">kalter</em> is the ending after <em lang=\"de\">der</em>",
       "Because <em lang=\"de\">-er</em> marks the past tense"
      ],
      "answer": 1,
      "explain": "With no article, a masculine nominative adjective shows <em lang=\"de\">-er</em>, as in <em lang=\"de\">heißer Kaffee</em>. After <em lang=\"de\">der</em> the ending would be <em lang=\"de\">-e</em>: <em lang=\"de\">der kalte Wein</em>."
     }
    ]
   }
  }
 ]
};
