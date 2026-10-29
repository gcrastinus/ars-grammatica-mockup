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
   "body": "<p>In <i lang=\"fr\">le livre que je lis</i> (“the book that I am reading”), <i lang=\"fr\">que</i> stands for <i lang=\"fr\">le livre</i> and joins the clause to it. French chooses the relative by its use in its own clause, not by the gender of the antecedent:</p>\n<p><strong><i lang=\"fr\">qui</i></strong>, the subject: <i lang=\"fr\">l’homme qui parle</i> (“the man who is speaking”)<br><strong><i lang=\"fr\">que</i></strong> (<i lang=\"fr\">qu’</i> before a vowel), the direct object: <i lang=\"fr\">la lettre que j’écris</i> (“the letter that I am writing”)<br><strong><i lang=\"fr\">dont</i></strong>, for <i lang=\"fr\">de</i> with the antecedent: <i lang=\"fr\">le livre dont je parle</i> (“the book I am speaking of”)<br><strong><i lang=\"fr\">où</i></strong>, for place or time: <i lang=\"fr\">la ville où il habite</i> (“the town where he lives”); <i lang=\"fr\">le jour où il est venu</i> (“the day when he came”)<br><strong><i lang=\"fr\">lequel</i></strong>, <i lang=\"fr\">laquelle</i>, <i lang=\"fr\">lesquels</i>, <i lang=\"fr\">lesquelles</i>, after a preposition, agreeing with the antecedent: <i lang=\"fr\">la table sur laquelle</i> (“the table on which”)</p>\n<p><i lang=\"fr\">Lequel</i> contracts with <i lang=\"fr\">à</i> and <i lang=\"fr\">de</i> as the article does: <i lang=\"fr\">auquel</i>, <i lang=\"fr\">auxquels</i>, <i lang=\"fr\">duquel</i>, <i lang=\"fr\">desquels</i> (but <i lang=\"fr\">à laquelle</i>, <i lang=\"fr\">de laquelle</i>). After a preposition, <i lang=\"fr\">qui</i> is used for persons: <i lang=\"fr\">l’ami avec qui je voyage</i>. Without an antecedent, French uses <i lang=\"fr\">ce qui</i> and <i lang=\"fr\">ce que</i>, “what”: <i lang=\"fr\">ce qui importe</i> (“what matters”).</p>",
   "qp": {
    "id": "q-fr-relative",
    "variants": [
     {
      "prompt": "Choose the relative: <i lang=\"fr\">la maison ___ nous avons achetée</i> (“the house that we bought”).",
      "options": [
       "<i lang=\"fr\">qui</i>",
       "<i lang=\"fr\">dont</i>",
       "<i lang=\"fr\">que</i>",
       "<i lang=\"fr\">où</i>"
      ],
      "answer": 2,
      "explain": "The relative is the direct object of <i lang=\"fr\">avons achetée</i>, so it is <i lang=\"fr\">que</i>."
     },
     {
      "prompt": "Choose the relative: <i lang=\"fr\">l’auteur ___ j’aime les romans</i> (“the author whose novels I love”).",
      "options": [
       "<i lang=\"fr\">que</i>",
       "<i lang=\"fr\">dont</i>",
       "<i lang=\"fr\">qui</i>",
       "<i lang=\"fr\">lequel</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Dont</i> stands for <i lang=\"fr\">de</i> with the antecedent: <i lang=\"fr\">les romans de l’auteur</i>."
     },
     {
      "prompt": "Choose the relative: <i lang=\"fr\">le stylo avec ___ il écrit</i> (“the pen with which he writes”).",
      "options": [
       "<i lang=\"fr\">lequel</i>",
       "<i lang=\"fr\">que</i>",
       "<i lang=\"fr\">dont</i>",
       "<i lang=\"fr\">qui</i>"
      ],
      "answer": 0,
      "explain": "After a preposition, a thing takes <i lang=\"fr\">lequel</i>, agreeing with <i lang=\"fr\">le stylo</i>; <i lang=\"fr\">qui</i> after a preposition is used of persons."
     }
    ]
   }
  },
  {
   "id": "demonstrative",
   "title": "Demonstratives",
   "body": "<p>English “this” and “that” are both adjectives and pronouns, but French has two sets of words for the two uses. The demonstrative determiners stand before a noun: <i lang=\"fr\">ce</i> (masculine), <i lang=\"fr\">cet</i> (masculine before a vowel or mute <i lang=\"fr\">h</i>), <i lang=\"fr\">cette</i> (feminine), and <i lang=\"fr\">ces</i> (plural): <i lang=\"fr\">ce livre</i>, <i lang=\"fr\">cet arbre</i>, <i lang=\"fr\">cette table</i>, <i lang=\"fr\">ces livres</i>. The suffixes <i lang=\"fr\">-ci</i> and <i lang=\"fr\">-là</i> distinguish near and far: <i lang=\"fr\">ce livre-ci</i> (“this book”), <i lang=\"fr\">ce livre-là</i> (“that book”).</p>\n<p>The demonstrative pronouns stand alone: <i lang=\"fr\">celui</i>, <i lang=\"fr\">celle</i>, <i lang=\"fr\">ceux</i>, <i lang=\"fr\">celles</i>, which are always completed by <i lang=\"fr\">-ci</i> or <i lang=\"fr\">-là</i>, by <i lang=\"fr\">de</i>, or by a relative clause: <i lang=\"fr\">celui-ci</i> (“this one”), <i lang=\"fr\">celle de mon frère</i> (“my brother’s”), <i lang=\"fr\">ceux qui partent</i> (“those who are leaving”). The neuter forms <i lang=\"fr\">ce</i>, <i lang=\"fr\">ceci</i>, <i lang=\"fr\">cela</i>, and the familiar <i lang=\"fr\">ça</i> refer to an idea or a thing not named: <i lang=\"fr\">c’est vrai</i> (“that is true”), <i lang=\"fr\">cela m’étonne</i> (“that surprises me”).</p>",
   "qp": {
    "id": "q-fr-demonstrative",
    "variants": [
     {
      "prompt": "Choose the determiner: <i lang=\"fr\">___ homme</i> (“this man”).",
      "options": [
       "<i lang=\"fr\">ce</i>",
       "<i lang=\"fr\">cet</i>",
       "<i lang=\"fr\">cette</i>",
       "<i lang=\"fr\">celui</i>"
      ],
      "answer": 1,
      "explain": "Before a masculine noun beginning with a vowel or mute <i lang=\"fr\">h</i>, <i lang=\"fr\">ce</i> becomes <i lang=\"fr\">cet</i>."
     },
     {
      "prompt": "Choose the pronoun: <i lang=\"fr\">Je préfère ___ de ma sœur</i> (“I prefer my sister’s,” of a car, <i lang=\"fr\">la voiture</i>).",
      "options": [
       "<i lang=\"fr\">celui</i>",
       "<i lang=\"fr\">cette</i>",
       "<i lang=\"fr\">celle</i>",
       "<i lang=\"fr\">cela</i>"
      ],
      "answer": 2,
      "explain": "The pronoun agrees with the noun it stands for, <i lang=\"fr\">la voiture</i>, feminine: <i lang=\"fr\">celle de ma sœur</i>."
     },
     {
      "prompt": "Why is <i lang=\"fr\">celui</i> never used alone?",
      "options": [
       "It is a determiner and needs a noun",
       "It is neuter and refers to an idea",
       "It is used only in the plural",
       "It must be completed by <i lang=\"fr\">-ci</i>, <i lang=\"fr\">-là</i>, <i lang=\"fr\">de</i>, or a relative clause"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Celui</i>, <i lang=\"fr\">celle</i>, <i lang=\"fr\">ceux</i>, <i lang=\"fr\">celles</i> are always completed; the neuter <i lang=\"fr\">cela</i> stands alone."
     }
    ]
   }
  },
  {
   "id": "possessive",
   "title": "Possessives",
   "body": "<p>In English “his book” and “her book” differ by the possessor, but French says <i lang=\"fr\">son livre</i> for both, because the French possessive agrees with the thing possessed, not with the possessor. The possessive determiners are <i lang=\"fr\">mon, ma, mes</i>; <i lang=\"fr\">ton, ta, tes</i>; <i lang=\"fr\">son, sa, ses</i>; <i lang=\"fr\">notre, nos</i>; <i lang=\"fr\">votre, vos</i>; <i lang=\"fr\">leur, leurs</i>. So <i lang=\"fr\">sa maison</i> is “his house” or “her house,” and <i lang=\"fr\">ses frères</i> “his brothers” or “her brothers.” Before a feminine noun beginning with a vowel or mute <i lang=\"fr\">h</i>, French uses <i lang=\"fr\">mon</i>, <i lang=\"fr\">ton</i>, <i lang=\"fr\">son</i> in place of <i lang=\"fr\">ma</i>, <i lang=\"fr\">ta</i>, <i lang=\"fr\">sa</i>: <i lang=\"fr\">mon amie</i>, <i lang=\"fr\">son histoire</i>.</p>\n<p>The possessive pronouns stand alone and take the article: <i lang=\"fr\">le mien, la mienne, les miens, les miennes</i> (“mine”); likewise <i lang=\"fr\">le tien</i>, <i lang=\"fr\">le sien</i>, <i lang=\"fr\">le nôtre</i>, <i lang=\"fr\">le vôtre</i>, <i lang=\"fr\">le leur</i>. The article contracts as usual: <i lang=\"fr\">je pense au mien</i> (“I am thinking of mine”).</p>",
   "qp": {
    "id": "q-fr-possessive",
    "variants": [
     {
      "prompt": "How does French say “her father”?",
      "options": [
       "<i lang=\"fr\">son père</i>",
       "<i lang=\"fr\">sa père</i>",
       "<i lang=\"fr\">leur père</i>",
       "<i lang=\"fr\">sien père</i>"
      ],
      "answer": 0,
      "explain": "The possessive agrees with the thing possessed, <i lang=\"fr\">père</i>, masculine: <i lang=\"fr\">son père</i>, whatever the possessor’s sex."
     },
     {
      "prompt": "Choose the determiner: <i lang=\"fr\">___ école</i> (“my school,” feminine).",
      "options": [
       "<i lang=\"fr\">ma</i>",
       "<i lang=\"fr\">mes</i>",
       "<i lang=\"fr\">m’</i>",
       "<i lang=\"fr\">mon</i>"
      ],
      "answer": 3,
      "explain": "Before a feminine noun beginning with a vowel, <i lang=\"fr\">mon</i> replaces <i lang=\"fr\">ma</i>: <i lang=\"fr\">mon école</i>."
     },
     {
      "prompt": "Which phrase means “theirs,” of several houses (<i lang=\"fr\">les maisons</i>)?",
      "options": [
       "<i lang=\"fr\">leurs</i>",
       "<i lang=\"fr\">les siennes</i>",
       "<i lang=\"fr\">les leurs</i>",
       "<i lang=\"fr\">la leur</i>"
      ],
      "answer": 2,
      "explain": "The possessive pronoun takes the article and agrees in number with the things possessed: <i lang=\"fr\">les leurs</i>."
     }
    ]
   }
  },
  {
   "id": "interrogative-indefinite",
   "title": "Interrogatives and indefinites",
   "body": "<p>“Who?” and “what?” are <i lang=\"fr\">qui ?</i> and <i lang=\"fr\">que ?</i> (or <i lang=\"fr\">quoi ?</i> after a preposition and at the end of a phrase): <i lang=\"fr\">Qui vient ?</i> (“Who is coming?”), <i lang=\"fr\">Que veux-tu ?</i> (“What do you want?”), <i lang=\"fr\">À quoi penses-tu ?</i> (“What are you thinking about?”). Spoken French often uses the longer forms <i lang=\"fr\">qui est-ce qui</i>, <i lang=\"fr\">qu’est-ce que</i>. “Which?” before a noun is the adjective <i lang=\"fr\">quel, quelle, quels, quelles</i>: <i lang=\"fr\">Quel livre ?</i>; standing alone it is the pronoun <i lang=\"fr\">lequel</i>: <i lang=\"fr\">Lequel préfères-tu ?</i> (“Which one do you prefer?”).</p>\n<p>The indefinite pronouns include <i lang=\"fr\">on</i> (“one,” “people,” and in speech “we”), <i lang=\"fr\">quelqu’un</i> (“someone”), <i lang=\"fr\">quelque chose</i> (“something”), <i lang=\"fr\">chacun</i> (“each one”), and the negatives <i lang=\"fr\">personne</i> (“no one”) and <i lang=\"fr\">rien</i> (“nothing”), which go with <i lang=\"fr\">ne</i>: <i lang=\"fr\">Je ne vois personne</i> (“I see no one”); <i lang=\"fr\">Rien n’est arrivé</i> (“Nothing happened”).</p>",
   "qp": {
    "id": "q-fr-interrogative",
    "variants": [
     {
      "prompt": "Choose the word: <i lang=\"fr\">___ heure est-il ?</i> (“What time is it?”).",
      "options": [
       "<i lang=\"fr\">Que</i>",
       "<i lang=\"fr\">Quelle</i>",
       "<i lang=\"fr\">Quoi</i>",
       "<i lang=\"fr\">Laquelle</i>"
      ],
      "answer": 1,
      "explain": "Before a noun, “which” or “what” is the adjective <i lang=\"fr\">quel</i>, agreeing with <i lang=\"fr\">heure</i> (feminine): <i lang=\"fr\">quelle</i>."
     },
     {
      "prompt": "Choose the word: <i lang=\"fr\">Avec ___ écris-tu ?</i> (“What are you writing with?”).",
      "options": [
       "<i lang=\"fr\">que</i>",
       "<i lang=\"fr\">quel</i>",
       "<i lang=\"fr\">quoi</i>",
       "<i lang=\"fr\">qui</i>"
      ],
      "answer": 2,
      "explain": "After a preposition, “what” is <i lang=\"fr\">quoi</i>; <i lang=\"fr\">qui</i> would ask about a person."
     },
     {
      "prompt": "What does <i lang=\"fr\">Je n’ai rien vu</i> mean?",
      "options": [
       "“I saw someone.”",
       "“I saw no one.”",
       "“I saw everything.”",
       "“I saw nothing.”"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Rien</i> with <i lang=\"fr\">ne</i> means “nothing”; “no one” is <i lang=\"fr\">personne</i>."
     }
    ]
   }
  }
 ]
};
