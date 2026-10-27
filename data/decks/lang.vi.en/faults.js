window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.en/faults"] = {
 "id": "lang.vi.en/faults",
 "title": "Common Errors in English",
 "sub": "The errors that English handbooks name, set beside barbarism and solecism",
 "sources": "Donatus, <i>Ars maior</i>; a standard English grammar; Priscian, <i>Institutiones grammaticae</i>",
 "panels": [
  {
   "id": "faults-1",
   "title": "Where a sentence ends",
   "body": "<p>“The rain stopped. We went out.” is correctly written, whereas “The rain stopped we went out.” is not, and a reader hears at once where the first sentence should end and the second begin. Many common errors in English come from a sentence boundary in the wrong place: two sentences are run together, or part of a sentence is written as if it were a whole one.</p>",
   "qp": {
    "id": "q-en-vi-1",
    "variants": [
     {
      "prompt": "Which of these is correctly written?",
      "options": [
       "“The bus was late. We walked.”",
       "“The bus was late we walked.”",
       "“The bus was late, we walked.”",
       "“Because the bus was late.”"
      ],
      "answer": 0,
      "explain": "Each sentence ends where its sense is complete, and the period marks the end."
     },
     {
      "prompt": "What is wrong with “The lights dimmed the play began”?",
      "options": [
       "It has no verb",
       "It is a fragment",
       "A modifier dangles from the subject",
       "Two sentences are run together"
      ],
      "answer": 3,
      "explain": "Two independent clauses stand with no punctuation or conjunction between them."
     },
     {
      "prompt": "Where do many common errors in English come from?",
      "options": [
       "A misspelled word",
       "A foreign word used in place of an English one",
       "A sentence boundary in the wrong place",
       "A wrong accent"
      ],
      "answer": 2,
      "explain": "Sentences are run together, or part of a sentence is written as a whole one."
     }
    ]
   }
  },
  {
   "id": "faults-2",
   "title": "Barbarism and solecism, and the modern list",
   "body": "<p>We have seen that Donatus divides the faults of speech (<i>vitia</i>) into the barbarism and the solecism, and that he allows the same departures to the poets as figures. A <strong>barbarism</strong> is an error in a single word, in its letters, its form, or its pronunciation. A <strong>solecism</strong> is an error in the arrangement of words, where each word is possible but the construction is not. English handbooks use a shorter list of errors in the sentence, and for each of them we can say which of the two classical names it falls under.</p>\n<p>The incorrect sentences given as examples are made up for the purpose; they are not quotations. When a sentence of an author departs from what a handbook expects, the grammarian describes what the sentence does and does not silently correct it, as we saw in the Preliminary section.</p>",
   "qp": {
    "id": "q-en-vi-2",
    "variants": [
     {
      "prompt": "Under which classical name does the misspelling “recieve” fall?",
      "options": [
       "A solecism",
       "A barbarism",
       "A metaplasm",
       "A figure"
      ],
      "answer": 1,
      "explain": "The error lies in a single word."
     },
     {
      "prompt": "Under which classical name does “The dogs barks” fall?",
      "options": [
       "A barbarism",
       "A metaplasm",
       "A solecism",
       "An impropriety"
      ],
      "answer": 2,
      "explain": "Each word is possible, but the construction is not."
     },
     {
      "prompt": "What does Donatus allow the poets that he calls an error in ordinary speech?",
      "options": [
       "Foreign words of every kind, in prose and verse",
       "Errors of spelling",
       "Sentences without verbs",
       "The same departures, as figures and metaplasms"
      ],
      "answer": 3,
      "explain": "The same departures are figures or metaplasms in a poet."
     }
    ]
   }
  },
  {
   "id": "faults-3",
   "title": "Fragment, run-on, comma splice",
   "body": "<p>A <strong>fragment</strong> is a group of words written as if it were a sentence, though it is not one. Usually it lacks a finite verb, or it is a subordinate clause standing alone, as in “Because the bridge had washed away.” This clause depends on another, but there is no other clause for it to depend on. Priscian requires that a sentence show a complete sense, and a fragment fails that requirement; so a fragment may be congruous in its parts and still be incomplete.</p>\n<p>A <strong>run-on</strong> sentence joins two independent clauses with no mark of punctuation and no conjunction: “The fire went out the room grew cold.” A <strong>comma splice</strong> joins them with a comma alone: “The fire went out, the room grew cold.” Both are solecisms, because the clauses are not correctly joined. English requires a period, a semicolon, or a coordinating conjunction such as “and,” “but,” or “or”: “The fire went out, and the room grew cold.”</p>\n<p>A semicolon between two independent clauses is also correct, as in “The harvest was late; the barns stood empty.” The comma splice, then, is the use of a comma where a semicolon or a conjunction is needed.</p>",
   "qp": {
    "id": "q-en-vi-3",
    "variants": [
     {
      "prompt": "What is “The wind rose, the boats returned”?",
      "options": [
       "A run-on sentence with no punctuation",
       "A fragment",
       "A comma splice",
       "A correct sentence"
      ],
      "answer": 2,
      "explain": "Two independent clauses are joined by a comma alone."
     },
     {
      "prompt": "Which of these corrects a comma splice?",
      "options": [
       "“The wind rose, the boats returned.”",
       "“The wind rose; the boats returned.”",
       "“The wind rose the boats returned.”",
       "“The wind rose, the boats, returned.”"
      ],
      "answer": 1,
      "explain": "A semicolon may stand between two independent clauses."
     },
     {
      "prompt": "Why is “Although the road was long” a fragment?",
      "options": [
       "It is a subordinate clause standing alone",
       "It has no subject",
       "It has no verb",
       "It is a run-on sentence"
      ],
      "answer": 0,
      "explain": "The clause depends on another clause, and there is none."
     }
    ]
   }
  },
  {
   "id": "faults-4",
   "title": "Misplaced and dangling modifiers",
   "body": "<p>A modifier belongs to one word, and it should stand where that word is plain. A <strong>misplaced modifier</strong> is in the sentence but stands beside the wrong word, so that the construction says something the writer did not mean. In “The farmer sold a cow to his neighbor with a crooked horn,” the phrase “with a crooked horn,” as the sentence is built, depends on “neighbor”; if the writer meant that the cow had the crooked horn, the phrase is misplaced.</p>\n<p>A <strong>dangling modifier</strong> has nothing in the sentence to depend on. In “Climbing the stairs, the lights went out,” the participial phrase requires a person who climbed, but the only subject is “the lights,” and lights do not climb stairs. The modifier therefore dangles, and this is a solecism. The correction gives the phrase its noun: “Climbing the stairs, she saw the lights go out.”</p>",
   "qp": {
    "id": "q-en-vi-4",
    "variants": [
     {
      "prompt": "What is wrong with “Running for the bus, my hat blew off”?",
      "options": [
       "The modifier is misplaced beside the right noun",
       "It is a comma splice",
       "It is a fragment",
       "The participial phrase dangles"
      ],
      "answer": 3,
      "explain": "The phrase needs a person who ran, and the subject is “my hat.”"
     },
     {
      "prompt": "In “She served cake to the children on paper plates,” what is the risk?",
      "options": [
       "A misplaced modifier",
       "A dangling modifier with no noun",
       "A run-on sentence",
       "A comma splice"
      ],
      "answer": 0,
      "explain": "The phrase stands beside “children,” though it belongs with “cake” or “served.”"
     },
     {
      "prompt": "How is a dangling modifier corrected?",
      "options": [
       "By adding a comma",
       "By giving the phrase its noun",
       "By moving the verb",
       "By removing the subject"
      ],
      "answer": 1,
      "explain": "The correction supplies the word that the phrase depends on."
     }
    ]
   }
  },
  {
   "id": "faults-5",
   "title": "What we do not confuse",
   "body": "<p>None of these errors is a barbarism. “The fire wnet out” contains a barbarism, because the error lies in the spelling of one word, whereas “The fire went out the room grew cold” is a solecism, which English handbooks call a run-on sentence. These errors must also be kept distinct from falsehood: a sentence may be congruous and false, and it may be incongruous and still point at something true. The errors named here are errors of form.</p>",
   "qp": {
    "id": "q-en-vi-5",
    "variants": [
     {
      "prompt": "Which of these contains a barbarism?",
      "options": [
       "“The gaurd waited.”",
       "“The guard waited the gate opened.”",
       "“Waiting at the gate.”",
       "“The guards waits.”"
      ],
      "answer": 0,
      "explain": "“Gaurd” is a misspelling, an error in one word."
     },
     {
      "prompt": "Can a sentence be congruous and false?",
      "options": [
       "No; every false sentence is incongruous in grammar",
       "Only in poetry",
       "Only when it is a question",
       "Yes; grammar asks only whether it is well formed"
      ],
      "answer": 3,
      "explain": "Correctness of form and truth are different questions."
     },
     {
      "prompt": "Under which name does the run-on sentence fall?",
      "options": [
       "Barbarism",
       "Metaplasm",
       "Solecism",
       "Figure"
      ],
      "answer": 2,
      "explain": "The words are real, and the error is in how the clauses are joined."
     }
    ]
   }
  },
  {
   "id": "faults-6",
   "title": "“Fewer” and “less,” parallel series, and clear reference",
   "body": "<p>Three further errors are often named in English handbooks. In “There were less cars on the road today,” “less” stands with a plural noun whose members are counted. Careful writers use “fewer” with plural nouns that are counted (“fewer cars,” “fewer eggs”) and “less” with nouns of quantity that are not counted (“less traffic,” “less flour”). To use the one where usage requires the other is an impropriety, a word used in a sense it does not have. Like the barbarism, it lies in a single word.</p>\n<p>In “The guide was patient, cheerful, and knew the mountains well,” the series joins two adjectives and a verb phrase, so its members are not of the same construction. The members of a series joined by a conjunction should be of one kind: “The guide was patient, cheerful, and well informed about the mountains.” This is the requirement we saw with the correlative conjunctions in Section III, and a series that breaks it is called a faulty parallel.</p>\n<p>In “When Paul met his brother, he was tired,” the pronoun “he” can refer to either man. A pronoun is correctly used only when its antecedent is clear, as we saw in Section III, and so the sentence must be rephrased: “Paul was tired when he met his brother.” The faulty parallel and the unclear pronoun are failures of construction, and so they are solecisms.</p>",
   "qp": {
    "id": "q-en-vi-6",
    "variants": [
     {
      "prompt": "Which phrase uses “fewer” or “less” as careful writers do?",
      "options": [
       "“less apples”",
       "“less sugar”",
       "“fewer sugar”",
       "“fewer water”"
      ],
      "answer": 1,
      "explain": "“Less” goes with nouns of quantity that are not counted."
     },
     {
      "prompt": "What is wrong with “He likes hiking, to swim, and reading”?",
      "options": [
       "It is a comma splice",
       "It is a fragment",
       "The series is not parallel",
       "A pronoun has no clear antecedent"
      ],
      "answer": 2,
      "explain": "The members of the series should be of one kind: “hiking, swimming, and reading.”"
     },
     {
      "prompt": "What is wrong with “When Sam saw his father, he smiled”?",
      "options": [
       "The verb does not agree with its subject",
       "It is a fragment",
       "The series is not parallel",
       "The pronoun could refer to either man"
      ],
      "answer": 3,
      "explain": "The antecedent of “he” is not clear."
     }
    ]
   }
  }
 ]
};
