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
   "body": "<p>English says “the man,” “of the man,” and “to the man,” and the article stays the same in every use, whereas German changes the article: <i lang=\"de\">der Mann</i> (“the man,” nominative), <i lang=\"de\">des Mannes</i> (genitive), <i lang=\"de\">dem Mann</i> (dative), <i lang=\"de\">den Mann</i> (accusative). German has a definite article (<i lang=\"de\">der</i>, <i lang=\"de\">die</i>, <i lang=\"de\">das</i>) and an indefinite article (<i lang=\"de\">ein</i>, <i lang=\"de\">eine</i>), and since most nouns change little or not at all for case, the article carries most of the case and gender of the noun. So the reader of German looks first to the article: <i lang=\"de\">den</i> before a masculine noun shows the accusative, and <i lang=\"de\">dem</i> the dative, whatever the noun itself does.</p>\n<p>The prepositions show the same reliance on the article. <i lang=\"de\">Mit</i>, <i lang=\"de\">von</i>, and <i lang=\"de\">zu</i> always take the dative, and <i lang=\"de\">für</i> and <i lang=\"de\">ohne</i> the accusative, so the article after them changes accordingly: <i lang=\"de\">mit dem Freund</i>, <i lang=\"de\">für den Freund</i>. A few prepositions, such as <i lang=\"de\">in</i> and <i lang=\"de\">auf</i>, take the dative for the place where and the accusative for motion toward a place, as we saw, and here only the article shows which is meant: <i lang=\"de\">in dem Haus</i> (“in the house”), <i lang=\"de\">in das Haus</i> (“into the house”).</p>",
   "qp": {
    "id": "q-de-cmp-article",
    "variants": [
     {
      "prompt": "Choose the article: <i lang=\"de\">Ich komme von ___ Bahnhof</i> (“I am coming from the station”).",
      "options": [
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">der</i>",
       "<i lang=\"de\">dem</i>",
       "<i lang=\"de\">des</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Von</i> always takes the dative, and the masculine dative is <i lang=\"de\">dem</i>."
     },
     {
      "prompt": "What does the article show in <i lang=\"de\">in das Zimmer</i>?",
      "options": [
       "Rest in the room",
       "Motion into the room",
       "Possession of the room",
       "The plural"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">In</i> with the accusative <i lang=\"de\">das</i> shows motion toward a place; <i lang=\"de\">in dem</i> would show the place where."
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
   "body": "<p>German writes every noun with a capital letter, wherever it stands in the sentence: <i lang=\"de\">Der Hund bellt im Garten</i> (“The dog barks in the garden”). The rule covers every word used as a noun, so an adjective or an infinitive used as a noun, usually after an article or a word such as <i lang=\"de\">alles</i>, <i lang=\"de\">etwas</i>, or <i lang=\"de\">nichts</i>, is capitalized too: <i lang=\"de\">das Gute</i> (“the good”), <i lang=\"de\">etwas Neues</i> (“something new”), <i lang=\"de\">das Lesen</i> (“reading”), <i lang=\"de\">beim Essen</i> (“while eating”). The name of a language used as a noun is capitalized (<i lang=\"de\">Er lernt Deutsch</i>), whereas the adjective is not (<i lang=\"de\">die deutsche Sprache</i>). The formal pronoun <i lang=\"de\">Sie</i> and its forms <i lang=\"de\">Ihnen</i> and <i lang=\"de\">Ihr</i> are also written with a capital, which distinguishes them from <i lang=\"de\">sie</i> (“she,” “they”).</p>\n<p>So the capital shows at a glance which words of a German sentence are used as nouns. Old English and early modern English printing often capitalized nouns as well, but the practice died out in English in the eighteenth century, whereas German made it a rule of its spelling.</p>",
   "qp": {
    "id": "q-de-cmp-capital",
    "variants": [
     {
      "prompt": "Which spelling is correct?",
      "options": [
       "<i lang=\"de\">Ich wünsche dir viel Glück.</i>",
       "<i lang=\"de\">Ich wünsche dir viel glück.</i>",
       "<i lang=\"de\">ich Wünsche dir viel Glück.</i>",
       "<i lang=\"de\">Ich wünsche Dir Viel Glück.</i>"
      ],
      "answer": 0,
      "explain": "Only the noun <i lang=\"de\">Glück</i> and the first word are capitalized here."
     },
     {
      "prompt": "Why is <i lang=\"de\">Neues</i> capitalized in <i lang=\"de\">Gibt es etwas Neues?</i>",
      "options": [
       "It begins a clause",
       "It is a proper name",
       "Every adjective is capitalized",
       "It is an adjective used as a noun"
      ],
      "answer": 3,
      "explain": "After <i lang=\"de\">etwas</i>, an adjective used as a noun is written with a capital."
     },
     {
      "prompt": "Which sentence uses the formal “you”?",
      "options": [
       "<i lang=\"de\">Haben sie Zeit?</i>",
       "<i lang=\"de\">Hat sie Zeit?</i>",
       "<i lang=\"de\">Haben Sie Zeit?</i>",
       "<i lang=\"de\">Habt ihr Zeit?</i>"
      ],
      "answer": 2,
      "explain": "The capital in <i lang=\"de\">Sie</i> marks the formal “you”; <i lang=\"de\">sie</i> is “she” or “they.”"
     }
    ]
   }
  }
 ]
};
