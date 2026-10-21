window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.fr/pronouns"] = {
 "id": "lang.iii-decl.fr/pronouns",
 "title": "The French Pronoun",
 "sub": "The relative, demonstrative, possessive, interrogative, and indefinite pronouns",
 "sources": "Lawless; Larousse; Le Conjugueur; Maurice Grevisse, <i>Le Bon Usage</i>",
 "panels": [
  {
   "id": "relative",
   "title": "The relative pronouns",
   "body": "<p>In <i>le livre que je lis</i> (“the book that I am reading”), <i>que</i> stands for <i>le livre</i> and joins the clause to it. French chooses the relative by its use in its own clause, not by the gender of the antecedent:</p>\n<p><strong><i>qui</i></strong>, the subject: <i>l’homme qui parle</i> (“the man who is speaking”)<br><strong><i>que</i></strong> (<i>qu’</i> before a vowel), the direct object: <i>la lettre que j’écris</i> (“the letter that I am writing”)<br><strong><i>dont</i></strong>, for <i>de</i> with the antecedent: <i>le livre dont je parle</i> (“the book I am speaking of”)<br><strong><i>où</i></strong>, for place or time: <i>la ville où il habite</i> (“the town where he lives”); <i>le jour où il est venu</i> (“the day when he came”)<br><strong><i>lequel</i></strong>, <i>laquelle</i>, <i>lesquels</i>, <i>lesquelles</i>, after a preposition, agreeing with the antecedent: <i>la table sur laquelle</i> (“the table on which”)</p>\n<p><i>Lequel</i> contracts with <i>à</i> and <i>de</i> as the article does: <i>auquel</i>, <i>auxquels</i>, <i>duquel</i>, <i>desquels</i> (but <i>à laquelle</i>, <i>de laquelle</i>). After a preposition, <i>qui</i> is used for persons: <i>l’ami avec qui je voyage</i>. Without an antecedent, French uses <i>ce qui</i> and <i>ce que</i>, “what”: <i>ce qui importe</i> (“what matters”).</p>",
   "qp": {
    "id": "q-fr-relative",
    "variants": [
     {
      "prompt": "Choose the relative: <i>la maison ___ nous avons achetée</i> (“the house that we bought”).",
      "options": [
       "<i>qui</i>",
       "<i>dont</i>",
       "<i>que</i>",
       "<i>où</i>"
      ],
      "answer": 2,
      "explain": "The relative is the direct object of <i>avons achetée</i>, so it is <i>que</i>. (The participle agrees with it, as we will see.)"
     },
     {
      "prompt": "Choose the relative: <i>l’auteur ___ j’aime les romans</i> (“the author whose novels I love”).",
      "options": [
       "<i>que</i>",
       "<i>dont</i>",
       "<i>qui</i>",
       "<i>lequel</i>"
      ],
      "answer": 1,
      "explain": "<i>Dont</i> stands for <i>de</i> with the antecedent: <i>les romans de l’auteur</i>."
     },
     {
      "prompt": "Choose the relative: <i>le stylo avec ___ il écrit</i> (“the pen with which he writes”).",
      "options": [
       "<i>lequel</i>",
       "<i>que</i>",
       "<i>dont</i>",
       "<i>qui</i>"
      ],
      "answer": 0,
      "explain": "After a preposition, a thing takes <i>lequel</i>, agreeing with <i>le stylo</i>; <i>qui</i> after a preposition is used of persons."
     }
    ]
   }
  },
  {
   "id": "demonstrative",
   "title": "Demonstratives",
   "body": "<p>English “this” and “that” are both adjectives and pronouns, but French has two sets of words for the two uses. The demonstrative determiners stand before a noun: <i>ce</i> (masculine), <i>cet</i> (masculine before a vowel or mute <i>h</i>), <i>cette</i> (feminine), and <i>ces</i> (plural): <i>ce livre</i>, <i>cet arbre</i>, <i>cette table</i>, <i>ces livres</i>. The suffixes <i>-ci</i> and <i>-là</i> distinguish near and far: <i>ce livre-ci</i> (“this book”), <i>ce livre-là</i> (“that book”).</p>\n<p>The demonstrative pronouns stand alone: <i>celui</i>, <i>celle</i>, <i>ceux</i>, <i>celles</i>, which are always completed by <i>-ci</i> or <i>-là</i>, by <i>de</i>, or by a relative clause: <i>celui-ci</i> (“this one”), <i>celle de mon frère</i> (“my brother’s”), <i>ceux qui partent</i> (“those who are leaving”). The neuter forms <i>ce</i>, <i>ceci</i>, <i>cela</i>, and the familiar <i>ça</i> refer to an idea or a thing not named: <i>c’est vrai</i> (“that is true”), <i>cela m’étonne</i> (“that surprises me”).</p>",
   "qp": {
    "id": "q-fr-demonstrative",
    "variants": [
     {
      "prompt": "Choose the determiner: <i>___ homme</i> (“this man”).",
      "options": [
       "<i>ce</i>",
       "<i>cet</i>",
       "<i>cette</i>",
       "<i>celui</i>"
      ],
      "answer": 1,
      "explain": "Before a masculine noun beginning with a vowel or mute <i>h</i>, <i>ce</i> becomes <i>cet</i>."
     },
     {
      "prompt": "Choose the pronoun: <i>Je préfère ___ de ma sœur</i> (“I prefer my sister’s,” of a car, <i>la voiture</i>).",
      "options": [
       "<i>celui</i>",
       "<i>cette</i>",
       "<i>celle</i>",
       "<i>cela</i>"
      ],
      "answer": 2,
      "explain": "The pronoun agrees with the noun it stands for, <i>la voiture</i>, feminine: <i>celle de ma sœur</i>."
     },
     {
      "prompt": "Why is <i>celui</i> never used alone?",
      "options": [
       "It is a determiner and needs a noun",
       "It is neuter and refers to an idea",
       "It is used only in the plural",
       "It must be completed by <i>-ci</i>, <i>-là</i>, <i>de</i>, or a relative clause"
      ],
      "answer": 3,
      "explain": "<i>Celui</i>, <i>celle</i>, <i>ceux</i>, <i>celles</i> are always completed; the neuter <i>cela</i> stands alone."
     }
    ]
   }
  },
  {
   "id": "possessive",
   "title": "Possessives",
   "body": "<p>In English “his book” and “her book” differ by the possessor, but French says <i>son livre</i> for both, because the French possessive agrees with the thing possessed, not with the possessor. The possessive determiners are <i>mon, ma, mes</i>; <i>ton, ta, tes</i>; <i>son, sa, ses</i>; <i>notre, nos</i>; <i>votre, vos</i>; <i>leur, leurs</i>. So <i>sa maison</i> is “his house” or “her house,” and <i>ses frères</i> “his brothers” or “her brothers.” Before a feminine noun beginning with a vowel or mute <i>h</i>, French uses <i>mon</i>, <i>ton</i>, <i>son</i> in place of <i>ma</i>, <i>ta</i>, <i>sa</i>: <i>mon amie</i>, <i>son histoire</i>.</p>\n<p>The possessive pronouns stand alone and take the article: <i>le mien, la mienne, les miens, les miennes</i> (“mine”); likewise <i>le tien</i>, <i>le sien</i>, <i>le nôtre</i>, <i>le vôtre</i>, <i>le leur</i>. The article contracts as usual: <i>je pense au mien</i> (“I am thinking of mine”).</p>",
   "qp": {
    "id": "q-fr-possessive",
    "variants": [
     {
      "prompt": "How does French say “her father”?",
      "options": [
       "<i>son père</i>",
       "<i>sa père</i>",
       "<i>leur père</i>",
       "<i>sien père</i>"
      ],
      "answer": 0,
      "explain": "The possessive agrees with the thing possessed, <i>père</i>, masculine: <i>son père</i>, whatever the possessor’s sex."
     },
     {
      "prompt": "Choose the determiner: <i>___ école</i> (“my school,” feminine).",
      "options": [
       "<i>ma</i>",
       "<i>mes</i>",
       "<i>m’</i>",
       "<i>mon</i>"
      ],
      "answer": 3,
      "explain": "Before a feminine noun beginning with a vowel, <i>mon</i> replaces <i>ma</i>: <i>mon école</i>."
     },
     {
      "prompt": "Which phrase means “theirs,” of several houses (<i>les maisons</i>)?",
      "options": [
       "<i>leurs</i>",
       "<i>les siennes</i>",
       "<i>les leurs</i>",
       "<i>la leur</i>"
      ],
      "answer": 2,
      "explain": "The possessive pronoun takes the article and agrees in number with the things possessed: <i>les leurs</i>."
     }
    ]
   }
  },
  {
   "id": "interrogative-indefinite",
   "title": "Interrogatives and indefinites",
   "body": "<p>“Who?” and “what?” are <i>qui?</i> and <i>que?</i> (or <i>quoi?</i> after a preposition and at the end of a phrase): <i>Qui vient?</i> (“Who is coming?”), <i>Que veux-tu?</i> (“What do you want?”), <i>À quoi penses-tu?</i> (“What are you thinking about?”). Spoken French often uses the longer forms <i>qui est-ce qui</i>, <i>qu’est-ce que</i>. “Which?” before a noun is the adjective <i>quel, quelle, quels, quelles</i>: <i>Quel livre?</i>; standing alone it is the pronoun <i>lequel</i>: <i>Lequel préfères-tu?</i> (“Which one do you prefer?”).</p>\n<p>The indefinite pronouns include <i>on</i> (“one,” “people,” and in speech “we”), <i>quelqu’un</i> (“someone”), <i>quelque chose</i> (“something”), <i>chacun</i> (“each one”), and the negatives <i>personne</i> (“no one”) and <i>rien</i> (“nothing”), which go with <i>ne</i>: <i>Je ne vois personne</i> (“I see no one”); <i>Rien n’est arrivé</i> (“Nothing happened”).</p>",
   "qp": {
    "id": "q-fr-interrogative",
    "variants": [
     {
      "prompt": "Choose the word: <i>___ heure est-il?</i> (“What time is it?”).",
      "options": [
       "<i>Que</i>",
       "<i>Quelle</i>",
       "<i>Quoi</i>",
       "<i>Laquelle</i>"
      ],
      "answer": 1,
      "explain": "Before a noun, “which” or “what” is the adjective <i>quel</i>, agreeing with <i>heure</i> (feminine): <i>quelle</i>."
     },
     {
      "prompt": "Choose the word: <i>Avec ___ écris-tu?</i> (“What are you writing with?”).",
      "options": [
       "<i>que</i>",
       "<i>quel</i>",
       "<i>quoi</i>",
       "<i>qui</i>"
      ],
      "answer": 2,
      "explain": "After a preposition, “what” is <i>quoi</i>; <i>qui</i> would ask about a person."
     },
     {
      "prompt": "What does <i>Je n’ai rien vu</i> mean?",
      "options": [
       "“I saw someone.”",
       "“I saw no one.”",
       "“I saw everything.”",
       "“I saw nothing.”"
      ],
      "answer": 3,
      "explain": "<i>Rien</i> with <i>ne</i> means “nothing”; “no one” is <i>personne</i>."
     }
    ]
   }
  }
 ]
};
