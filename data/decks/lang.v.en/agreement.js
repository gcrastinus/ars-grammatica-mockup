window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.en/agreement"] = {
 "id": "lang.v.en/agreement",
 "title": "Agreement, Case, and Congruity in English",
 "sub": "Further cases of subject and verb, the agreement and case of pronouns, and the three judgments",
 "sources": "Alonzo Reed and Brainerd Kellogg, <i>Higher Lessons in English</i> (1877); a standard English grammar",
 "panels": [
  {
   "id": "verb",
   "title": "Further cases of subject and verb",
   "body": "<p>An English verb shows agreement chiefly in the third person singular of the present (“the bell rings,” “the bells ring”) and in the forms of “be.” We have seen the commonest difficult cases; several more are worth knowing. Words such as “each,” “every,” “either,” “neither,” “everyone,” and “nobody” are singular: “Each of the pupils has a book.” In a sentence that begins with “there,” the verb agrees with the subject that follows it: “There is a key on the table,” but “There are two keys on the table.”</p>\n<p>“The number of” takes a singular verb, but “a number of,” meaning “several,” takes a plural one: “The number of visitors is small”; “A number of visitors were waiting.” An amount thought of as one sum is singular: “Ten miles is a long walk.” In American usage a collective noun, such as “team,” “jury,” or “family,” usually takes a singular verb: “The team is winning.”</p>",
   "qp": {
    "id": "q-en-agr-verb",
    "variants": [
     {
      "prompt": "Which form completes “Every one of the doors ______ locked”?",
      "options": [
       "“were”",
       "“are”",
       "“have been”",
       "“was”"
      ],
      "answer": 3,
      "explain": "“Every one” is singular, so the verb is singular; “of the doors” does not change the subject."
     },
     {
      "prompt": "Which form completes “There ______ several reasons for the delay”?",
      "options": [
       "“are”",
       "“is”",
       "“was”",
       "“has been”"
      ],
      "answer": 0,
      "explain": "After “there,” the verb agrees with the subject that follows, “reasons,” which is plural."
     },
     {
      "prompt": "Which form completes “Five dollars ______ too much for a pencil”?",
      "options": [
       "“are”",
       "“is”",
       "“were”",
       "“have been”"
      ],
      "answer": 1,
      "explain": "An amount thought of as one sum takes a singular verb."
     }
    ]
   }
  },
  {
   "id": "pronouns",
   "title": "Pronouns: agreement and case",
   "body": "<p>A pronoun agrees with its antecedent in number and gender: “The girls lost their way”; “The tree lost its leaves.” In formal writing a singular antecedent such as “each” or “everyone” has traditionally taken a singular pronoun (“Each of the boys raised his hand”); “they” with such an antecedent is common in speech and is now accepted in much writing.</p>\n<p>The case of a pronoun follows its use in the sentence, as the case of a Latin noun does. The subject of a finite verb is in the nominative: “She and I left early.” The object of a verb or of a preposition is in the objective: “between you and me,” “for him and her,” “They invited us.” After “than” and “as,” the case shows the verb that is understood: “She is taller than I” (that is, “than I am”). “Who” is the nominative and “whom” the objective, and each takes its case from its own clause: “the guide whom we hired,” but “the guide who we thought was lost,” where “who” is the subject of “was.”</p>",
   "qp": {
    "id": "q-en-agr-pron",
    "variants": [
     {
      "prompt": "Which form completes “The letter was addressed to my brother and ______”?",
      "options": [
       "“I”",
       "“me”",
       "“myself”",
       "“mine”"
      ],
      "answer": 1,
      "explain": "“To” governs the objective case: “to my brother and me.”"
     },
     {
      "prompt": "Which form completes “______ and his sister won the race”?",
      "options": [
       "“Him”",
       "“His”",
       "“He”",
       "“Himself”"
      ],
      "answer": 2,
      "explain": "The subject of a finite verb is in the nominative."
     },
     {
      "prompt": "Which form completes “The officer ______ the mayor appointed resigned”?",
      "options": [
       "“who”",
       "“whose”",
       "“which”",
       "“whom”"
      ],
      "answer": 3,
      "explain": "The relative is the object of “appointed,” so it is “whom.”"
     }
    ]
   }
  },
  {
   "id": "congruity",
   "title": "Congruity and completeness in English",
   "body": "<p>The three judgments of a construction apply to English as to Latin. “The keys is lost” is incongruous, because the plural subject and the singular verb do not fit. A phrase such as “the broken gate,” or a subordinate clause such as “when the guests arrive,” is congruous but incomplete; written by itself as though it were a sentence, it is the error called a sentence fragment. “The guests arrived” is congruous and complete.</p>\n<p>An English sentence needs a subject and a finite verb, but the subject of a command is understood rather than written: “Shut the gate” is complete, with “you” understood as its subject.</p>",
   "qp": {
    "id": "q-en-agr-cong",
    "variants": [
     {
      "prompt": "How does “Because the river was high” stand?",
      "options": [
       "Congruous and complete",
       "Incongruous",
       "Complete, because it has a verb",
       "Congruous but incomplete"
      ],
      "answer": 3,
      "explain": "It is a subordinate clause, and it waits for a main clause."
     },
     {
      "prompt": "How does “The flowers needs water” stand?",
      "options": [
       "Incongruous",
       "Congruous but incomplete",
       "Congruous and complete",
       "Complete, because it has an object"
      ],
      "answer": 0,
      "explain": "The plural subject and the singular verb do not fit."
     },
     {
      "prompt": "How does “Close the window” stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Incongruous",
       "Incomplete, because it has no subject"
      ],
      "answer": 1,
      "explain": "A command is complete; its subject, “you,” is understood."
     }
    ]
   }
  }
 ]
};
