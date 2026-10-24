window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ix.la/servius"] = {
 "id": "lang.ix.la/servius",
 "title": "Servius on the Aeneid",
 "sub": "The ancient commentator, his questions, and the form of his grammatical notes",
 "sources": "Servius, <i>In Vergilii Aeneidem commentarii</i>, ed. Thilo (Wikisource transcription); the translations of Servius and of Virgil’s lines are the course’s own",
 "panels": [
  {
   "id": "servius",
   "title": "Servius and his commentary",
   "body": "<p>Servius, a grammarian who taught at Rome about AD 400, wrote a line-by-line commentary on Virgil that was read in the schools for a thousand years. He begins with the questions a teacher must ask before explaining an author: “In explaining authors these things are to be considered: the poet’s life, the title of the work, the kind of poem, the writer’s intention, the number of the books, the order of the books, and the explanation” (<i lang=\"la\">In exponendis auctoribus haec consideranda sunt: poetae vita, titulus operis, qualitas carminis, scribentis intentio, numerus librorum, ordo librorum, explanatio</i>).</p>\n<p>The last of these, the explanation, is the commentary itself. Servius takes a word or phrase of the poem as his heading (the lemma), and then says what it means, how it is constructed, and whether it departs from ordinary usage. His notes are therefore a record of the four tasks of the grammarian applied to one author.</p>",
   "qp": {
    "id": "q-la-serv-1",
    "variants": [
     {
      "prompt": "What is a lemma in a commentary such as Servius’s?",
      "options": [
       "The poet’s life",
       "The word or phrase of the text that a note explains",
       "A list of the books",
       "The meter of a line"
      ],
      "answer": 1,
      "explain": "Servius heads each note with the words of the poem that it explains."
     },
     {
      "prompt": "Which of these is not among the things Servius says must be considered in explaining an author?",
      "options": [
       "The poet’s life",
       "The title of the work",
       "The price of the book",
       "The writer’s intention"
      ],
      "answer": 2,
      "explain": "His list is the life, the title, the kind of poem, the intention, the number and order of the books, and the explanation."
     },
     {
      "prompt": "About when did Servius teach?",
      "options": [
       "In the time of Augustus",
       "In the twelfth century",
       "About 200 BC",
       "About AD 400"
      ],
      "answer": 3,
      "explain": "Servius was a grammarian of late antiquity, about AD 400."
     }
    ]
   }
  },
  {
   "id": "pro",
   "title": "The note “X for Y”",
   "body": "<p>Many of Servius’s notes have the form “X <i lang=\"la\">pro</i> Y,” “X stands for Y”: the poet has written X where ordinary speech would write Y. On <i lang=\"la\">Italiam … venit</i> (I.2), he states the rule of the art, that we add prepositions to the names of provinces but never to the names of cities, and then observes that the poet has taken the preposition away: <i lang=\"la\">Italiam venit pro ad Italiam venit</i>. “And it is a figure” (<i lang=\"la\">et est figura</i>), he adds.</p>\n<p>So a note of this kind does three things at once. It names the ordinary construction, it shows the poet’s departure from it, and it judges the departure: a figure, allowed to the poet, not an error.</p>",
   "qp": {
    "id": "q-la-serv-2",
    "variants": [
     {
      "prompt": "What does a note of the form “X <i lang=\"la\">pro</i> Y” say?",
      "options": [
       "The poet wrote X where ordinary speech would write Y",
       "X is an error for Y",
       "X and Y are two readings of the manuscripts",
       "X is the Greek for Y"
      ],
      "answer": 0,
      "explain": "The note sets the poet’s word beside the ordinary one."
     },
     {
      "prompt": "According to Servius’s rule, to which names does the art add prepositions?",
      "options": [
       "The names of cities",
       "The names of persons",
       "The names of rivers only",
       "The names of provinces"
      ],
      "answer": 3,
      "explain": "Prepositions go with the names of provinces, never with those of cities."
     },
     {
      "prompt": "How does Servius judge <i lang=\"la\">Italiam venit</i> without <i lang=\"la\">ad</i>?",
      "options": [
       "As a barbarism",
       "As a solecism",
       "As a figure",
       "As a scribe’s error"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">Et est figura</i>: the departure is allowed to the poet."
     }
    ]
   }
  }
 ]
};
