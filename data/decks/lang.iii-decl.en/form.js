window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.en/form"] = {
 "id": "lang.iii-decl.en/form",
 "title": "Agreement and Case",
 "sub": "Agreement, the case of pronouns, quoted authors, and contractions",
 "sources": "a standard English grammar; Donatus, <i>Ars maior</i>; the Bible, King James Version",
 "panels": [
  {
   "id": "form-1",
   "title": "The verb and its subject",
   "body": "<p>In “The bees hum,” the plural subject “bees” takes the plural verb “hum,” and in “The bee hums,” the singular subject takes the singular verb “hums.” Any speaker of English hears that “The bees hums” is wrong, because the verb does not match its subject. This is the first rule of English agreement: a verb agrees with its subject in person and number.</p>",
   "qp": {
    "id": "q-en-form-subject",
    "variants": [
     {
      "prompt": "Why is “The bells rings” incorrect?",
      "options": [
       "The verb does not agree with its subject in number",
       "The subject is in the wrong case",
       "The verb is in the wrong tense",
       "The sentence has no verb"
      ],
      "answer": 0,
      "explain": "“Bells” is plural, and “rings” is singular; a verb agrees with its subject in person and number."
     },
     {
      "prompt": "Which sentence has the verb agreeing with its subject?",
      "options": [
       "“The candle flicker.”",
       "“The candles flickers.”",
       "“The candle are flickering.”",
       "“The candle flickers.”"
      ],
      "answer": 3,
      "explain": "“Candle” is singular, so the verb is singular: “flickers.”"
     },
     {
      "prompt": "In what does an English verb agree with its subject?",
      "options": [
       "Gender and case",
       "Tense and mood",
       "Person and number",
       "Number and gender"
      ],
      "answer": 2,
      "explain": "The first rule of English agreement is that a verb agrees with its subject in person and number."
     }
    ]
   }
  },
  {
   "id": "form-2",
   "title": "Agreement",
   "body": "<p><strong>Agreement</strong> is the matching of the accidents of one word to the accidents of another. It is one kind of <strong>congruity</strong>, that is, the fit of words with one another in a construction, which we take up in Section V. In English two kinds of agreement matter most. The verb agrees with its subject in person and number, and a pronoun agrees with its <strong>antecedent</strong> (the noun it stands for) in number and gender; but the pronoun takes its case from its own clause.</p>\n<p>To find the number of the verb, we find the simple subject, that is, the main word of the subject, and we do not let a phrase that stands between the subject and the verb decide the number. In “The box of letters is heavy,” the subject is “box,” which is singular; “of letters” tells which box, and it does not become the subject. Two subjects joined by “and” make a compound subject, which is plural: “The captain and the pilot are on deck.” But with “or,” “nor,” “either … or,” and “neither … nor,” the verb agrees with the nearer subject: “Either the pilot or the sailors are to blame,” whereas “Neither the sailors nor the pilot is to blame.”</p>\n<p>After “there is” and “there are,” the verb agrees with the real subject, which follows it: “There are three wells in the village.” The words “each,” “every,” “either,” and “neither,” used as subjects, are singular: “Each of the runners has a number.”</p>",
   "qp": {
    "id": "q-en-form-agreement",
    "variants": [
     {
      "prompt": "Choose the verb that agrees with its subject: “The basket of apples ___ heavy.”",
      "options": [
       "is",
       "are",
       "were",
       "have been"
      ],
      "answer": 0,
      "explain": "The simple subject is “basket,” singular; “of apples” tells which basket."
     },
     {
      "prompt": "Choose the verb that agrees with its subject: “Neither the dogs nor the cat ___ hungry.”",
      "options": [
       "are",
       "were",
       "have been",
       "is"
      ],
      "answer": 3,
      "explain": "With “neither … nor,” the verb agrees with the nearer subject, “the cat.”"
     },
     {
      "prompt": "From what does a pronoun take its case?",
      "options": [
       "From its antecedent",
       "From the verb of the main clause",
       "From its own clause",
       "From the nearest noun"
      ],
      "answer": 2,
      "explain": "A pronoun agrees with its antecedent in number and gender, but it takes its case from its own clause."
     }
    ]
   }
  },
  {
   "id": "form-3",
   "title": "Pronoun case",
   "body": "<p><strong>Case</strong> is an accident of the noun and the pronoun that shows the relation of the word to the other words of the sentence; the name comes from the Latin <i>cāsus</i>, “a falling.” Latin shows case on almost every noun, whereas English has kept it chiefly in the pronouns. Modern English grammars name three cases.</p>\n<p>The <strong>subjective</strong> case, which the classical grammarians call the nominative, is the case of the subject and of the predicate nominative (a noun or pronoun after “be” that names the subject again): “I,” “he,” “she,” “we,” “they,” “who.” The <strong>objective</strong> case covers what Latin divides into the accusative and the dative, that is, the direct object, the indirect object, and the object of a preposition: “me,” “him,” “her,” “us,” “them,” “whom.” The <strong>possessive</strong> case corresponds to the Latin genitive: “my,” “his,” “her,” “our,” “their,” “whose.”</p>\n<p>So we write “The money was divided between her and me,” because “between” is a preposition and governs the objective case, and “The coach praised him and me,” because both pronouns are objects of “praised.” After the verb “be,” a pronoun stands in the subjective case as a predicate nominative: “It was she who called.” In conversation “It was her” is common, but careful usage, especially in formal prose, prefers “It was she.”</p>\n<p>“Who” is subjective, whereas “whom” is objective, and the case comes from the clause in which the word itself stands, not from the clause around it. In “Whom did the committee choose?” “whom” is the object of “choose,” so it is objective. In “Who do you think will win?” “who” is the subject of “will win,” so it is subjective; “do you think” only stands around that clause.</p>",
   "qp": {
    "id": "q-en-form-case",
    "variants": [
     {
      "prompt": "Choose the pronoun careful usage requires: “The coach chose Sam and ___.”",
      "options": [
       "me",
       "I",
       "myself",
       "mine"
      ],
      "answer": 0,
      "explain": "“Sam and me” is the object of “chose,” so the pronoun is objective."
     },
     {
      "prompt": "In “Who do you think wrote the letter?” why is “who” subjective?",
      "options": [
       "It is the object of “think”",
       "It follows a verb",
       "It begins the sentence",
       "It is the subject of “wrote”"
      ],
      "answer": 3,
      "explain": "The case comes from the pronoun’s own clause: “who” is the subject of “wrote,” and “do you think” only stands around that clause."
     },
     {
      "prompt": "Which Latin cases does the English objective case cover?",
      "options": [
       "The nominative and the genitive",
       "The genitive and the ablative",
       "The accusative and the dative",
       "The vocative and the accusative"
      ],
      "answer": 2,
      "explain": "The English objective case serves for the direct object, the indirect object, and the object of a preposition, which Latin divides between the accusative and the dative (and other cases after prepositions)."
     }
    ]
   }
  },
  {
   "id": "form-5",
   "title": "Quoted authors are not corrected",
   "body": "<p>As we have seen in Section V, an older author sometimes uses a form that a modern handbook would not expect, as when the King James Version joins a singular verb to a subject that looks plural. Grammar describes what such a sentence does, but it does not, on that ground, rewrite the author. A translation’s grammar and a handbook’s rule are two different questions.</p>\n<p>The incorrect sentences given for practice are made up in order to be corrected. But when an author is quoted, the quotation is the text, and the question is what the text is doing.</p>",
   "qp": {
    "id": "q-en-form-quoted",
    "variants": [
     {
      "prompt": "When an older author uses a form a modern handbook would not expect, what does grammar do?",
      "options": [
       "It describes what the sentence does",
       "It corrects the author",
       "It counts the form as a barbarism",
       "It leaves the sentence out of study"
      ],
      "answer": 0,
      "explain": "Grammar describes what a quoted sentence does and does not rewrite the author."
     },
     {
      "prompt": "Why may the practice sentences of an exercise be corrected?",
      "options": [
       "Because they are quoted from authors",
       "Because they follow older usage",
       "Because the handbook is older than the author",
       "Because they are made up to be corrected"
      ],
      "answer": 3,
      "explain": "The incorrect sentences given for practice are composed to be corrected, whereas a quotation is the text itself."
     },
     {
      "prompt": "In “Thou art the man” (2 Samuel 12:7), how should grammar treat “art”?",
      "options": [
       "As an error of agreement to be corrected to “are”",
       "As a barbarism",
       "As the old second person singular of “be,” described as it stands",
       "As a misprint"
      ],
      "answer": 2,
      "explain": "“Art” is the old second person singular present of “be,” which goes with “thou.” Grammar describes it; it does not correct the text."
     }
    ]
   }
  },
  {
   "id": "form-8",
   "title": "Contractions",
   "body": "<p>Some short English words can be shortened and attached to the word before them, in speech and in informal writing. “Is” and “has” become “’s” (“she’s here”), “will” becomes “’ll,” “not” becomes “n’t” (“isn’t,” “can’t”), and “have” becomes “’ve.” A word that is pronounced as part of its neighbor in this way is called a <strong>clitic</strong> (from the Greek for “leaning”). The possessive “’s,” as in “the king’s horse,” is also attached in this way, and it can be attached to the end of a whole phrase: “the king of Spain’s horse.”</p>",
   "qp": {
    "id": "q-en-form-contractions",
    "variants": [
     {
      "prompt": "What does “’d” stand for in “She’d gone”?",
      "options": [
       "“would”",
       "“had”",
       "“did”",
       "“could”"
      ],
      "answer": 1,
      "explain": "With the past participle “gone,” “’d” stands for “had,” forming the past perfect. Before an infinitive (“She’d go”) it stands for “would.”"
     },
     {
      "prompt": "What is a clitic?",
      "options": [
       "A word with no meaning of its own",
       "A word that has lost its last letter",
       "A word pronounced as part of its neighbor",
       "A word borrowed from Greek"
      ],
      "answer": 2,
      "explain": "A clitic, from the Greek for “leaning,” is a word pronounced as part of the word before it, as “’ll” in “we’ll.”"
     },
     {
      "prompt": "Which phrase attaches the possessive “’s” to a whole phrase?",
      "options": [
       "“the duke’s men of York”",
       "“the men’s duke of York”",
       "“the York’s duke”",
       "“the Duke of York’s men”"
      ],
      "answer": 3,
      "explain": "In “the Duke of York’s men,” the possessive belongs to the whole phrase “the Duke of York.”"
     }
    ]
   }
  }
 ]
};
