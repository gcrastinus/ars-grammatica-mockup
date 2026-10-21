window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.de/compared"] = {
 "id": "lang.iii-decl.de/compared",
 "title": "German and the Article",
 "sub": "Case on the article, and the noun written with a capital",
 "sources": "Duden",
 "panels": [
  {
   "id": "compared-1",
   "title": "The article carries the case",
   "body": "<p>English says “the man,” “of the man,” and “to the man,” and the article stays the same in every use, whereas German changes the article: <i>der Mann</i> (“the man,” nominative), <i>des Mannes</i> (genitive), <i>dem Mann</i> (dative), <i>den Mann</i> (accusative). German has a definite article (<i>der</i>, <i>die</i>, <i>das</i>) and an indefinite article (<i>ein</i>, <i>eine</i>), and since most nouns change little or not at all for case, the article carries most of the case and gender of the noun. So the reader of German looks first to the article: <i>den</i> before a masculine noun shows the accusative, and <i>dem</i> the dative, whatever the noun itself does.</p>\n<p>The prepositions show the same reliance on the article. <i>Mit</i>, <i>von</i>, and <i>zu</i> always take the dative, and <i>für</i> and <i>ohne</i> the accusative, so the article after them changes accordingly: <i>mit dem Freund</i>, <i>für den Freund</i>. A few prepositions, such as <i>in</i> and <i>auf</i>, take the dative for the place where and the accusative for motion toward a place, as we saw, and here only the article shows which is meant: <i>in dem Haus</i> (“in the house”), <i>in das Haus</i> (“into the house”).</p>",
   "qp": {
    "id": "q-de-cmp-article",
    "variants": [
     {
      "prompt": "Choose the article: <i>Ich komme von ___ Bahnhof</i> (“I am coming from the station”).",
      "options": [
       "<i>den</i>",
       "<i>der</i>",
       "<i>dem</i>",
       "<i>des</i>"
      ],
      "answer": 2,
      "explain": "<i>Von</i> always takes the dative, and the masculine dative is <i>dem</i>."
     },
     {
      "prompt": "What does the article show in <i>in das Zimmer</i>?",
      "options": [
       "Rest in the room",
       "Motion into the room",
       "Possession of the room",
       "The plural"
      ],
      "answer": 1,
      "explain": "<i>In</i> with the accusative <i>das</i> shows motion toward a place; <i>in dem</i> would show the place where."
     },
     {
      "prompt": "Why does the reader of German look first to the article?",
      "options": [
       "It carries most of the case and gender",
       "It always stands at the end",
       "It has no endings",
       "It shows the tense of the verb"
      ],
      "answer": 0,
      "explain": "Most German nouns change little for case, so the article carries the case and gender."
     }
    ]
   }
  },
  {
   "id": "compared-2",
   "title": "The noun written with a capital",
   "body": "<p>German writes every noun with a capital letter, wherever it stands in the sentence: <i>Der Hund bellt im Garten</i> (“The dog barks in the garden”). The rule covers every word used as a noun, so an adjective or an infinitive used as a noun, usually after an article or a word such as <i>alles</i>, <i>etwas</i>, or <i>nichts</i>, is capitalized too: <i>das Gute</i> (“the good”), <i>etwas Neues</i> (“something new”), <i>das Lesen</i> (“reading”), <i>beim Essen</i> (“while eating”). The name of a language used as a noun is capitalized (<i>Er lernt Deutsch</i>), whereas the adjective is not (<i>die deutsche Sprache</i>). The formal pronoun <i>Sie</i> and its forms <i>Ihnen</i> and <i>Ihr</i> are also written with a capital, which distinguishes them from <i>sie</i> (“she,” “they”).</p>\n<p>So the capital shows at a glance which words of a German sentence are used as nouns. Old English and early modern English printing often capitalized nouns as well, but the practice died out in English in the eighteenth century, whereas German made it a rule of its spelling.</p>",
   "qp": {
    "id": "q-de-cmp-capital",
    "variants": [
     {
      "prompt": "Which spelling is correct?",
      "options": [
       "<i>Ich wünsche dir viel Glück.</i>",
       "<i>Ich wünsche dir viel glück.</i>",
       "<i>ich Wünsche dir viel Glück.</i>",
       "<i>Ich wünsche Dir Viel Glück.</i>"
      ],
      "answer": 0,
      "explain": "Only the noun <i>Glück</i> and the first word are capitalized here."
     },
     {
      "prompt": "Why is <i>Neues</i> capitalized in <i>Gibt es etwas Neues?</i>",
      "options": [
       "It begins a clause",
       "It is a proper name",
       "Every adjective is capitalized",
       "It is an adjective used as a noun"
      ],
      "answer": 3,
      "explain": "After <i>etwas</i>, an adjective used as a noun is written with a capital."
     },
     {
      "prompt": "Which sentence uses the formal “you”?",
      "options": [
       "<i>Haben sie Zeit?</i>",
       "<i>Hat sie Zeit?</i>",
       "<i>Haben Sie Zeit?</i>",
       "<i>Habt ihr Zeit?</i>"
      ],
      "answer": 2,
      "explain": "The capital in <i>Sie</i> marks the formal “you”; <i>sie</i> is “she” or “they.”"
     }
    ]
   }
  }
 ]
};
