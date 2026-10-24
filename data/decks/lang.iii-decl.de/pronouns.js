window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.de/pronouns"] = {
 "id": "lang.iii-decl.de/pronouns",
 "title": "The German Pronoun",
 "sub": "Possessives, demonstratives, the relative, the interrogative, the reflexive, and the indefinite pronouns",
 "sources": "Duden, <i>Die Grammatik</i>; Duden, <i>Die deutsche Rechtschreibung</i>",
 "panels": [
  {
   "id": "possessive",
   "title": "The possessives",
   "body": "<p>The German possessives, <i lang=\"de\">mein</i> (“my”), <i lang=\"de\">dein</i> (“your”), <i lang=\"de\">sein</i> (“his,” “its”), <i lang=\"de\">ihr</i> (“her,” “their”), <i lang=\"de\">unser</i> (“our”), <i lang=\"de\">euer</i> (“your,” plural), and <i lang=\"de\">Ihr</i> (“your,” formal), take the endings of <i lang=\"de\">ein</i> in the singular and of <i lang=\"de\">die</i> in the plural, and so they show the gender, number, and case of the thing possessed: <i lang=\"de\">mein Bruder</i>, <i lang=\"de\">meine Schwester</i>, <i lang=\"de\">mein Haus</i>; <i lang=\"de\">meinen Bruder</i>; <i lang=\"de\">meinem Bruder</i>; <i lang=\"de\">meine Brüder</i>. The choice of the stem shows the possessor: <i lang=\"de\">sein Hut</i> is “his hat,” <i lang=\"de\">ihr Hut</i> “her hat” or “their hat.” <i lang=\"de\">Euer</i> drops its second <i lang=\"de\">e</i> before an ending: <i lang=\"de\">eure Kinder</i>. <i lang=\"de\">Kein</i> (“no,” “not any”) is declined in the same way.</p>",
   "qp": {
    "id": "q-de-possessive",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"de\">Ich sehe ___ Vater</i> (“I see my father”).",
      "options": [
       "<i lang=\"de\">mein</i>",
       "<i lang=\"de\">meinen</i>",
       "<i lang=\"de\">meinem</i>",
       "<i lang=\"de\">meiner</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Vater</i> is masculine and the direct object, so the possessive takes the accusative ending of <i lang=\"de\">einen</i>."
     },
     {
      "prompt": "How does German say “her son”?",
      "options": [
       "<i lang=\"de\">sein Sohn</i>",
       "<i lang=\"de\">ihre Sohn</i>",
       "<i lang=\"de\">ihr Sohn</i>",
       "<i lang=\"de\">seine Sohn</i>"
      ],
      "answer": 2,
      "explain": "The stem <i lang=\"de\">ihr-</i> shows the possessor (a woman); the ending agrees with <i lang=\"de\">Sohn</i>, masculine nominative, which has none."
     },
     {
      "prompt": "Choose the form: <i lang=\"de\">mit ___ Freunden</i> (“with your friends,” said to several people).",
      "options": [
       "<i lang=\"de\">eueren</i>",
       "<i lang=\"de\">eure</i>",
       "<i lang=\"de\">euer</i>",
       "<i lang=\"de\">euren</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"de\">Euer</i> drops its second <i lang=\"de\">e</i> before an ending, and the dative plural ending is <i lang=\"de\">-en</i>."
     }
    ]
   }
  },
  {
   "id": "demonstrative",
   "title": "The demonstratives",
   "body": "<p><i lang=\"de\">Dieser</i> (“this”) and <i lang=\"de\">jener</i> (“that”) take the endings of the definite article: <i lang=\"de\">dieser Mann</i>, <i lang=\"de\">diese Frau</i>, <i lang=\"de\">dieses Kind</i>; <i lang=\"de\">diesen Mann</i>; <i lang=\"de\">diesem Mann</i>; <i lang=\"de\">dieses Mannes</i>. <i lang=\"de\">Jener</i> is mostly written; in speech German more often uses <i lang=\"de\">der</i> with stress, or <i lang=\"de\">der da</i>, as a demonstrative: <i lang=\"de\">Den kenne ich nicht</i> (“I don’t know that one”). Used as a demonstrative pronoun, <i lang=\"de\">der</i> has the genitive <i lang=\"de\">dessen</i> and <i lang=\"de\">deren</i> and the dative plural <i lang=\"de\">denen</i>, the same forms as the relative.</p>",
   "qp": {
    "id": "q-de-demonstrative",
    "variants": [
     {
      "prompt": "Choose the form: <i lang=\"de\">Ich kaufe ___ Buch</i> (“I am buying this book”).",
      "options": [
       "<i lang=\"de\">diesen</i>",
       "<i lang=\"de\">diesem</i>",
       "<i lang=\"de\">dieses</i>",
       "<i lang=\"de\">dieser</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Buch</i> is neuter, and the neuter accusative ending is <i lang=\"de\">-es</i>."
     },
     {
      "prompt": "Choose the form: <i lang=\"de\">mit ___ Frau</i> (“with this woman”).",
      "options": [
       "<i lang=\"de\">diese</i>",
       "<i lang=\"de\">dieser</i>",
       "<i lang=\"de\">diesem</i>",
       "<i lang=\"de\">dieses</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Mit</i> takes the dative, and the feminine dative ending is <i lang=\"de\">-er</i>."
     },
     {
      "prompt": "What is the dative plural of the demonstrative <i lang=\"de\">der</i>?",
      "options": [
       "<i lang=\"de\">denen</i>",
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">deren</i>",
       "<i lang=\"de\">dem</i>"
      ],
      "answer": 0,
      "explain": "Standing alone, the demonstrative has <i lang=\"de\">denen</i> in the dative plural, as the relative does; the article has <i lang=\"de\">den</i>."
     }
    ]
   }
  },
  {
   "id": "relative",
   "title": "The relative pronoun",
   "body": "<p>In <i lang=\"de\">der Mann, der dort steht</i> (“the man who is standing there”), the relative <i lang=\"de\">der</i> agrees with its antecedent in gender and number, takes its case from its own clause, and sends the verb to the end of the clause. The German relative is the article with a few longer forms:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">der</td> <td class=\"f\">die</td> <td class=\"f\">das</td> <td class=\"f\">die</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">den</td> <td class=\"f\">die</td> <td class=\"f\">das</td> <td class=\"f\">die</td></tr>\n<tr><td>Dative</td> <td class=\"f\">dem</td> <td class=\"f\">der</td> <td class=\"f\">dem</td> <td class=\"f\">denen</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">dessen</td> <td class=\"f\">deren</td> <td class=\"f\">dessen</td> <td class=\"f\">deren</td></tr>\n</table></div>\n<p>So <i lang=\"de\">die Frau, deren Sohn ich kenne</i> is “the woman whose son I know,” and <i lang=\"de\">die Kinder, denen ich helfe</i> “the children whom I help.” A relative clause is always set off by commas. <i lang=\"de\">Welcher, welche, welches</i> can serve as a relative too, chiefly in formal writing, and <i lang=\"de\">was</i> is the relative after <i lang=\"de\">alles</i>, <i lang=\"de\">etwas</i>, <i lang=\"de\">nichts</i>, and a whole clause: <i lang=\"de\">alles, was er sagt</i> (“everything he says”).</p>",
   "qp": {
    "id": "q-de-relative",
    "variants": [
     {
      "prompt": "Choose the relative: <i lang=\"de\">der Hund, ___ ich gefüttert habe</i> (“the dog that I fed”).",
      "options": [
       "<i lang=\"de\">der</i>",
       "<i lang=\"de\">dem</i>",
       "<i lang=\"de\">dessen</i>",
       "<i lang=\"de\">den</i>"
      ],
      "answer": 3,
      "explain": "The relative agrees with <i lang=\"de\">Hund</i> (masculine) and is the direct object of <i lang=\"de\">gefüttert habe</i>: accusative <i lang=\"de\">den</i>."
     },
     {
      "prompt": "Choose the relative: <i lang=\"de\">die Leute, ___ wir danken</i> (“the people whom we thank”).",
      "options": [
       "<i lang=\"de\">denen</i>",
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">die</i>",
       "<i lang=\"de\">deren</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"de\">Danken</i> takes the dative, and the dative plural of the relative is <i lang=\"de\">denen</i>."
     },
     {
      "prompt": "Choose the relative: <i lang=\"de\">das Kind, ___ Mutter krank ist</i> (“the child whose mother is ill”).",
      "options": [
       "<i lang=\"de\">deren</i>",
       "<i lang=\"de\">dessen</i>",
       "<i lang=\"de\">das</i>",
       "<i lang=\"de\">dem</i>"
      ],
      "answer": 1,
      "explain": "The genitive of the neuter relative is <i lang=\"de\">dessen</i>."
     }
    ]
   }
  },
  {
   "id": "others",
   "title": "The interrogative, the reflexive, and the indefinite pronouns",
   "body": "<p>The interrogative pronoun for persons has four cases: <i lang=\"de\">wer</i> (“who”), <i lang=\"de\">wen</i> (“whom”), <i lang=\"de\">wem</i> (“to whom”), <i lang=\"de\">wessen</i> (“whose”); for things it is <i lang=\"de\">was</i> (“what”). <i lang=\"de\">Welcher</i>, with the endings of <i lang=\"de\">dieser</i>, asks “which”: <i lang=\"de\">Welches Buch?</i> The reflexive pronoun of the third person is <i lang=\"de\">sich</i>, in both the accusative and the dative, singular and plural: <i lang=\"de\">er wäscht sich</i>, <i lang=\"de\">sie kaufen sich ein Auto</i> (“they buy themselves a car”); in the first and second persons the personal pronoun serves (<i lang=\"de\">ich wasche mich</i>, <i lang=\"de\">ich kaufe mir</i>). The indefinite <i lang=\"de\">man</i> (“one,” “people”) is always the subject of a third person singular verb, and in the other cases it uses <i lang=\"de\">einen</i> and <i lang=\"de\">einem</i>; <i lang=\"de\">jemand</i> (“someone”), <i lang=\"de\">niemand</i> (“no one”), <i lang=\"de\">etwas</i> (“something”), and <i lang=\"de\">nichts</i> (“nothing”) complete the common set.</p>",
   "qp": {
    "id": "q-de-others",
    "variants": [
     {
      "prompt": "Choose the interrogative: <i lang=\"de\">___ hast du das Geld gegeben?</i> (“To whom did you give the money?”).",
      "options": [
       "<i lang=\"de\">Wem</i>",
       "<i lang=\"de\">Wen</i>",
       "<i lang=\"de\">Wer</i>",
       "<i lang=\"de\">Wessen</i>"
      ],
      "answer": 0,
      "explain": "“To whom” is the dative <i lang=\"de\">wem</i>."
     },
     {
      "prompt": "Choose the reflexive: <i lang=\"de\">Sie freuen ___ auf die Ferien</i> (“They are looking forward to the holidays”).",
      "options": [
       "<i lang=\"de\">sie</i>",
       "<i lang=\"de\">ihnen</i>",
       "<i lang=\"de\">euch</i>",
       "<i lang=\"de\">sich</i>"
      ],
      "answer": 3,
      "explain": "The reflexive of the third person is <i lang=\"de\">sich</i>, singular and plural."
     },
     {
      "prompt": "Which sentence uses <i lang=\"de\">man</i> correctly?",
      "options": [
       "<i lang=\"de\">Hier sprechen man Deutsch.</i>",
       "<i lang=\"de\">Hier spricht mans Deutsch.</i>",
       "<i lang=\"de\">Hier spricht man Deutsch.</i>",
       "<i lang=\"de\">Hier sprecht man Deutsch.</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Man</i> always takes a third person singular verb."
     }
    ]
   }
  }
 ]
};
