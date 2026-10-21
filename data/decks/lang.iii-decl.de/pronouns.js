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
   "body": "<p>The German possessives, <i>mein</i> (“my”), <i>dein</i> (“your”), <i>sein</i> (“his,” “its”), <i>ihr</i> (“her,” “their”), <i>unser</i> (“our”), <i>euer</i> (“your,” plural), and <i>Ihr</i> (“your,” formal), take the endings of <i>ein</i> in the singular and of <i>die</i> in the plural, and so they show the gender, number, and case of the thing possessed: <i>mein Bruder</i>, <i>meine Schwester</i>, <i>mein Haus</i>; <i>meinen Bruder</i>; <i>meinem Bruder</i>; <i>meine Brüder</i>. The choice of the stem shows the possessor: <i>sein Hut</i> is “his hat,” <i>ihr Hut</i> “her hat” or “their hat.” <i>Euer</i> drops its second <i>e</i> before an ending: <i>eure Kinder</i>. <i>Kein</i> (“no,” “not any”) is declined in the same way.</p>",
   "qp": {
    "id": "q-de-possessive",
    "variants": [
     {
      "prompt": "Choose the form: <i>Ich sehe ___ Vater</i> (“I see my father”).",
      "options": [
       "<i>mein</i>",
       "<i>meinen</i>",
       "<i>meinem</i>",
       "<i>meiner</i>"
      ],
      "answer": 1,
      "explain": "<i>Vater</i> is masculine and the direct object, so the possessive takes the accusative ending of <i>einen</i>."
     },
     {
      "prompt": "How does German say “her son”?",
      "options": [
       "<i>sein Sohn</i>",
       "<i>ihre Sohn</i>",
       "<i>ihr Sohn</i>",
       "<i>seine Sohn</i>"
      ],
      "answer": 2,
      "explain": "The stem <i>ihr-</i> shows the possessor (a woman); the ending agrees with <i>Sohn</i>, masculine nominative, which has none."
     },
     {
      "prompt": "Choose the form: <i>mit ___ Freunden</i> (“with your friends,” said to several people).",
      "options": [
       "<i>eueren</i>",
       "<i>eure</i>",
       "<i>euer</i>",
       "<i>euren</i>"
      ],
      "answer": 3,
      "explain": "<i>Euer</i> drops its second <i>e</i> before an ending, and the dative plural ending is <i>-en</i>."
     }
    ]
   }
  },
  {
   "id": "demonstrative",
   "title": "The demonstratives",
   "body": "<p><i>Dieser</i> (“this”) and <i>jener</i> (“that”) take the endings of the definite article: <i>dieser Mann</i>, <i>diese Frau</i>, <i>dieses Kind</i>; <i>diesen Mann</i>; <i>diesem Mann</i>; <i>dieses Mannes</i>. <i>Jener</i> is mostly written; in speech German more often uses <i>der</i> with stress, or <i>der da</i>, as a demonstrative: <i>Den kenne ich nicht</i> (“I don’t know that one”). Used as a demonstrative pronoun, <i>der</i> has the genitive <i>dessen</i> and <i>deren</i> and the dative plural <i>denen</i>, the same forms as the relative.</p>",
   "qp": {
    "id": "q-de-demonstrative",
    "variants": [
     {
      "prompt": "Choose the form: <i>Ich kaufe ___ Buch</i> (“I am buying this book”).",
      "options": [
       "<i>diesen</i>",
       "<i>diesem</i>",
       "<i>dieses</i>",
       "<i>dieser</i>"
      ],
      "answer": 2,
      "explain": "<i>Buch</i> is neuter, and the neuter accusative ending is <i>-es</i>."
     },
     {
      "prompt": "Choose the form: <i>mit ___ Frau</i> (“with this woman”).",
      "options": [
       "<i>diese</i>",
       "<i>dieser</i>",
       "<i>diesem</i>",
       "<i>dieses</i>"
      ],
      "answer": 1,
      "explain": "<i>Mit</i> takes the dative, and the feminine dative ending is <i>-er</i>."
     },
     {
      "prompt": "What is the dative plural of the demonstrative <i>der</i>?",
      "options": [
       "<i>denen</i>",
       "<i>den</i>",
       "<i>deren</i>",
       "<i>dem</i>"
      ],
      "answer": 0,
      "explain": "Standing alone, the demonstrative has <i>denen</i> in the dative plural, as the relative does; the article has <i>den</i>."
     }
    ]
   }
  },
  {
   "id": "relative",
   "title": "The relative pronoun",
   "body": "<p>In <i>der Mann, der dort steht</i> (“the man who is standing there”), the relative <i>der</i> agrees with its antecedent in gender and number, takes its case from its own clause, and sends the verb to the end of the clause. The German relative is the article with a few longer forms:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">der</td> <td class=\"f\">die</td> <td class=\"f\">das</td> <td class=\"f\">die</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">den</td> <td class=\"f\">die</td> <td class=\"f\">das</td> <td class=\"f\">die</td></tr>\n<tr><td>Dative</td> <td class=\"f\">dem</td> <td class=\"f\">der</td> <td class=\"f\">dem</td> <td class=\"f\">denen</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">dessen</td> <td class=\"f\">deren</td> <td class=\"f\">dessen</td> <td class=\"f\">deren</td></tr>\n</table></div>\n<p>So <i>die Frau, deren Sohn ich kenne</i> is “the woman whose son I know,” and <i>die Kinder, denen ich helfe</i> “the children whom I help.” A relative clause is always set off by commas. <i>Welcher, welche, welches</i> can serve as a relative too, chiefly in formal writing, and <i>was</i> is the relative after <i>alles</i>, <i>etwas</i>, <i>nichts</i>, and a whole clause: <i>alles, was er sagt</i> (“everything he says”).</p>",
   "qp": {
    "id": "q-de-relative",
    "variants": [
     {
      "prompt": "Choose the relative: <i>der Hund, ___ ich gefüttert habe</i> (“the dog that I fed”).",
      "options": [
       "<i>der</i>",
       "<i>dem</i>",
       "<i>dessen</i>",
       "<i>den</i>"
      ],
      "answer": 3,
      "explain": "The relative agrees with <i>Hund</i> (masculine) and is the direct object of <i>gefüttert habe</i>: accusative <i>den</i>."
     },
     {
      "prompt": "Choose the relative: <i>die Leute, ___ wir danken</i> (“the people whom we thank”).",
      "options": [
       "<i>denen</i>",
       "<i>den</i>",
       "<i>die</i>",
       "<i>deren</i>"
      ],
      "answer": 0,
      "explain": "<i>Danken</i> takes the dative, and the dative plural of the relative is <i>denen</i>."
     },
     {
      "prompt": "Choose the relative: <i>das Kind, ___ Mutter krank ist</i> (“the child whose mother is ill”).",
      "options": [
       "<i>deren</i>",
       "<i>dessen</i>",
       "<i>das</i>",
       "<i>dem</i>"
      ],
      "answer": 1,
      "explain": "The genitive of the neuter relative is <i>dessen</i>."
     }
    ]
   }
  },
  {
   "id": "others",
   "title": "The interrogative, the reflexive, and the indefinite pronouns",
   "body": "<p>The interrogative pronoun for persons has four cases: <i>wer</i> (“who”), <i>wen</i> (“whom”), <i>wem</i> (“to whom”), <i>wessen</i> (“whose”); for things it is <i>was</i> (“what”). <i>Welcher</i>, with the endings of <i>dieser</i>, asks “which”: <i>Welches Buch?</i> The reflexive pronoun of the third person is <i>sich</i>, in both the accusative and the dative, singular and plural: <i>er wäscht sich</i>, <i>sie kaufen sich ein Auto</i> (“they buy themselves a car”); in the first and second persons the personal pronoun serves (<i>ich wasche mich</i>, <i>ich kaufe mir</i>). The indefinite <i>man</i> (“one,” “people”) is always the subject of a third person singular verb, and in the other cases it uses <i>einen</i> and <i>einem</i>; <i>jemand</i> (“someone”), <i>niemand</i> (“no one”), <i>etwas</i> (“something”), and <i>nichts</i> (“nothing”) complete the common set.</p>",
   "qp": {
    "id": "q-de-others",
    "variants": [
     {
      "prompt": "Choose the interrogative: <i>___ hast du das Geld gegeben?</i> (“To whom did you give the money?”).",
      "options": [
       "<i>Wem</i>",
       "<i>Wen</i>",
       "<i>Wer</i>",
       "<i>Wessen</i>"
      ],
      "answer": 0,
      "explain": "“To whom” is the dative <i>wem</i>."
     },
     {
      "prompt": "Choose the reflexive: <i>Sie freuen ___ auf die Ferien</i> (“They are looking forward to the holidays”).",
      "options": [
       "<i>sie</i>",
       "<i>ihnen</i>",
       "<i>euch</i>",
       "<i>sich</i>"
      ],
      "answer": 3,
      "explain": "The reflexive of the third person is <i>sich</i>, singular and plural."
     },
     {
      "prompt": "Which sentence uses <i>man</i> correctly?",
      "options": [
       "<i>Hier sprechen man Deutsch.</i>",
       "<i>Hier spricht mans Deutsch.</i>",
       "<i>Hier spricht man Deutsch.</i>",
       "<i>Hier sprecht man Deutsch.</i>"
      ],
      "answer": 2,
      "explain": "<i>Man</i> always takes a third person singular verb."
     }
    ]
   }
  }
 ]
};
