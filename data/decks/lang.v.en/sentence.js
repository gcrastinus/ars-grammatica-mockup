window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.en/sentence"] = {
 "id": "lang.v.en/sentence",
 "title": "Subject, Predicate, and the Patterns",
 "sub": "What the sentence is about, and what is said of it",
 "sources": "Priscian, <i>Institutiones grammaticae</i>; a standard English grammar",
 "panels": [
  {
   "id": "sentence-1",
   "title": "What does a sentence need?",
   "body": "<p>Which is a sentence: “The tired sailors” or “The tired sailors slept”? We hear at once that the first is unfinished. A sentence needs a subject, that is, what it is about, and a predicate, that is, what is said of the subject.</p>",
   "qp": {
    "id": "q-en-sent-1",
    "variants": [
     {
      "prompt": "Which of these is a sentence?",
      "options": [
       "“The rusty gate.”",
       "“Creaking in the wind.”",
       "“When the rusty gate creaked.”",
       "“The rusty gate creaked.”"
      ],
      "answer": 3,
      "explain": "Only the first has both a subject and a predicate and a complete sense."
     },
     {
      "prompt": "What does a sentence need?",
      "options": [
       "A subject and a predicate",
       "A noun and an adjective",
       "A verb and an adverb",
       "Two clauses joined by a conjunction"
      ],
      "answer": 0,
      "explain": "A sentence says something (the predicate) about something (the subject)."
     },
     {
      "prompt": "Why is “The old fisherman” not a sentence?",
      "options": [
       "It has no adjective",
       "Nothing is said of the fisherman",
       "It begins with an article, not a noun",
       "It has no object"
      ],
      "answer": 1,
      "explain": "It has a subject but no predicate."
     }
    ]
   }
  },
  {
   "id": "sentence-2",
   "title": "Subject and Predicate",
   "body": "<p>A sentence says something about something. The <strong>subject</strong> is what the sentence is about, and the <strong>predicate</strong> is what is said of it. In “The bells rang,” “the bells” is the subject and “rang” is the whole predicate. Priscian’s sentence (<span class=\"lat\">oratio</span>) is this arrangement of subject and predicate once its sense is complete, and the patterns of the English sentence are built on these two parts.</p>\n<p>The <strong>simple subject</strong> is the noun or pronoun itself, without its modifiers. In “The light of the lamp was dim,” the simple subject is “light”; “the” and “of the lamp” depend on it, and the whole group is the complete subject. The <strong>simple predicate</strong> is the verb, here “was,” and “dim” completes what is said.</p>",
   "qp": {
    "id": "q-en-sent-2",
    "variants": [
     {
      "prompt": "In “The leaves of the oak turned red,” what is the simple subject?",
      "options": [
       "“oak”",
       "“the leaves of the oak”",
       "“leaves”",
       "“turned”"
      ],
      "answer": 2,
      "explain": "The simple subject is the noun itself, without its modifiers."
     },
     {
      "prompt": "In “The children sang loudly,” what is the predicate?",
      "options": [
       "“The children”",
       "“sang loudly”",
       "“loudly”",
       "“children sang”"
      ],
      "answer": 1,
      "explain": "The predicate is what is said of the subject."
     },
     {
      "prompt": "In “A box of old letters was found,” what is the complete subject?",
      "options": [
       "“A box of old letters”",
       "“box”",
       "“letters”",
       "“was found”"
      ],
      "answer": 0,
      "explain": "The complete subject is the simple subject with all that depends on it."
     }
    ]
   }
  },
  {
   "id": "sentence-3",
   "title": "Six patterns",
   "body": "<p>Modern English grammars sort the ordinary English sentence into a few patterns, and they name the parts with letters as a shorthand: “S” is the subject, “V” the verb, “DO” the direct object, “IO” the indirect object, “LV” a linking verb, “PN” a predicate nominative, “PA” a predicate adjective, and “OC” an objective complement.</p>\n<p><strong>S-V.</strong> The verb needs nothing after it to complete the sense: “The candle flickered.”</p>\n<p><strong>S-V-DO.</strong> A <strong>direct object</strong> is the noun or pronoun that receives the action, and the grammarians say that the verb governs it: “The farmer mended the fence.”</p>\n<p><strong>S-V-IO-DO.</strong> An <strong>indirect object</strong> is the one to whom or for whom the action is done, and it stands before the direct object when no preposition is written: “The captain handed the pilot a map.” If we write “to the pilot,” the phrase is a prepositional phrase, and the pattern is S-V-DO.</p>\n<p><strong>S-LV-PN</strong> and <strong>S-LV-PA.</strong> A <strong>linking verb</strong> does not carry the action across to an object; it joins the subject to a word that completes it. “Be,” “seem,” and “become,” and often “appear,” “feel,” “look,” and “taste,” work in this way. So does “is” in Burke’s “the age of chivalry is gone,” where “gone” describes the age. A <strong>predicate nominative</strong> renames the subject: “The whale is a mammal.” A <strong>predicate adjective</strong> describes it: “The orchard looks bare.” Both are <strong>subject complements</strong>, which is the wider modern name for a word that completes the subject.</p>\n<p><strong>S-V-DO-OC.</strong> An <strong>objective complement</strong> completes the direct object: “The jury found the prisoner guilty.” Here “the prisoner” receives the action, and “guilty” tells what the jury found him to be.</p>",
   "qp": {
    "id": "q-en-sent-3",
    "variants": [
     {
      "prompt": "Which pattern is “The cook tasted the soup”?",
      "options": [
       "S-V",
       "S-V-DO",
       "S-LV-PA",
       "S-V-IO-DO"
      ],
      "answer": 1,
      "explain": "“Soup” receives the action of “tasted.”"
     },
     {
      "prompt": "Which pattern is “The teacher gave the class a test”?",
      "options": [
       "S-V-DO",
       "S-V-DO-OC",
       "S-V-IO-DO",
       "S-LV-PN"
      ],
      "answer": 2,
      "explain": "“Class” is the one to whom the test is given, and it stands before the direct object with no preposition."
     },
     {
      "prompt": "Which pattern is “The soup tastes salty”?",
      "options": [
       "S-V-DO",
       "S-LV-PN",
       "S-V",
       "S-LV-PA"
      ],
      "answer": 3,
      "explain": "“Tastes” links the subject to an adjective that describes it."
     }
    ]
   }
  },
  {
   "id": "sentence-4",
   "title": "The patterns in a short list, and the adverbial slot",
   "body": "<p>Every sentence has a subject and a predicate, and the predicate takes one of these shapes:</p>\n<p>S-V: “The baby slept.”<br>S-V-DO: “The baby dropped the spoon.”<br>S-V-IO-DO: “The nurse gave the baby a spoon.”<br>S-LV-PN: “The baby is my nephew.”<br>S-LV-PA: “The baby is tired.”<br>S-V-DO-OC: “The noise made the baby cross.”</p>\n<p>Any of these patterns can also take an <strong>adverbial</strong>, that is, a word, phrase, or clause that tells when, where, why, or how. The adverbial is optional, and the pattern is complete without it. In “The baby slept after lunch,” “after lunch” is a prepositional phrase used as an adverb, because it tells when, and the pattern is still S-V. An adverbial can often move to the front: “After lunch, the baby slept.”</p>",
   "qp": {
    "id": "q-en-sent-4",
    "variants": [
     {
      "prompt": "In “The dog barked at midnight,” what is “at midnight”?",
      "options": [
       "An adverbial, which leaves the pattern S-V",
       "A direct object of the verb “barked”",
       "A predicate nominative",
       "An objective complement"
      ],
      "answer": 0,
      "explain": "It tells when, and the pattern is complete without it."
     },
     {
      "prompt": "Which pattern is “The heat made the milk sour”?",
      "options": [
       "S-V-IO-DO",
       "S-LV-PA",
       "S-V-DO",
       "S-V-DO-OC"
      ],
      "answer": 3,
      "explain": "“Sour” completes the direct object “milk.”"
     },
     {
      "prompt": "Which pattern is “My uncle is a carpenter”?",
      "options": [
       "S-LV-PA",
       "S-V-DO",
       "S-LV-PN",
       "S-V"
      ],
      "answer": 2,
      "explain": "“Carpenter” renames the subject after the linking verb."
     }
    ]
   }
  },
  {
   "id": "sentence-5",
   "title": "How to tell the patterns apart",
   "body": "<p>We ask three questions, in order.</p>\n<p>First, is the verb a linking verb? If what follows renames or describes the subject, the pattern is S-LV-PN or S-LV-PA. In “The whale is a mammal,” “mammal” renames “whale,” and so it is a predicate nominative; in “The orchard looks bare,” “bare” describes “orchard,” and so it is a predicate adjective.</p>\n<p>Second, if the verb carries an action, is there a noun or pronoun that receives it? That word is the direct object, and the pattern is at least S-V-DO. If a second noun or pronoun tells to whom or for whom, and no preposition marks it, that word is the indirect object.</p>\n<p>Third, does a word after the direct object rename or describe that object? Then it is an objective complement, and the pattern is S-V-DO-OC. In “The jury found the prisoner guilty,” “guilty” does not receive the action of “found”; “prisoner” does, and “guilty” completes “prisoner.”</p>",
   "qp": {
    "id": "q-en-sent-5",
    "variants": [
     {
      "prompt": "In “The lake looks calm,” what is “calm”?",
      "options": [
       "A direct object",
       "An adverb",
       "An objective complement",
       "A predicate adjective"
      ],
      "answer": 3,
      "explain": "“Looks” is a linking verb, and “calm” describes the subject."
     },
     {
      "prompt": "In “They elected her captain,” what is “captain”?",
      "options": [
       "An objective complement",
       "An indirect object of the verb",
       "A predicate nominative",
       "A direct object"
      ],
      "answer": 0,
      "explain": "“Her” receives the action, and “captain” renames that object."
     },
     {
      "prompt": "Which question comes first in telling the patterns apart?",
      "options": [
       "Is there an indirect object?",
       "Is the verb a linking verb?",
       "Is there an adverbial?",
       "Is the subject compound?"
      ],
      "answer": 1,
      "explain": "We ask first whether the verb is a linking verb."
     }
    ]
   }
  },
  {
   "id": "sentence-6",
   "title": "Compound parts, and understood words",
   "body": "<p>A subject, a verb, or an object may be compound, and the pattern does not change on that account. In “The cook washed the pots and the pans,” “the pots and the pans” is one direct object with two parts. But “Cowards die many times before their deaths; / The valiant never taste of death but once” is not one pattern with a compound verb; it is two independent clauses, and each has its own pattern. A <strong>clause</strong>, which we consider later in this section of the course, is a group of words with its own subject and finite verb. A <strong>finite verb</strong> is a verb that can assert, such as “die” or “taste,” and not an infinitive such as “to be.”</p>\n<p>Bacon writes, “Reading maketh a full man; conference a ready man; and writing an exact man.” The verb “maketh” is written once and understood after. The second and third clauses are S-V-DO, like the first, with the verb left out because the first clause has supplied it. (“Full,” “ready,” and “exact” modify “man”; they are not objective complements.) So we name the pattern from the way the words are used, and we note the word that is left out.</p>",
   "qp": {
    "id": "q-en-sent-6",
    "variants": [
     {
      "prompt": "How many patterns are in “The wind rose, and the waves grew high”?",
      "options": [
       "One, with a compound verb",
       "One, with a compound subject",
       "Two, one in each clause",
       "Three"
      ],
      "answer": 2,
      "explain": "Each independent clause has its own subject, verb, and pattern."
     },
     {
      "prompt": "What is the pattern of “Tom and Ann painted the shed”?",
      "options": [
       "Two patterns of S-V-DO, one for each name",
       "S-V-DO, with a compound subject",
       "S-V-IO-DO",
       "S-LV-PN"
      ],
      "answer": 1,
      "explain": "A compound subject does not change the pattern."
     },
     {
      "prompt": "In “Some read history; others, poetry,” what is understood in the second clause?",
      "options": [
       "The verb “read”",
       "The subject “some”",
       "The object “history”",
       "Nothing"
      ],
      "answer": 0,
      "explain": "The verb is written once and understood after."
     }
    ]
   }
  },
  {
   "id": "sentence-7",
   "title": "Word order",
   "body": "<p>An English noun does not change its form for the subject and the object, so the order of the words shows which noun is the subject and which is the object. The ordinary order is subject, verb, object: “the hawk chased the sparrow” and “the sparrow chased the hawk” say different things. A question usually puts a helping verb before the subject: “did the hawk chase the sparrow?” Latin can change the order freely because its endings show the case, whereas English can change it only within narrow limits.</p>",
   "qp": {
    "id": "q-en-sent-7",
    "variants": [
     {
      "prompt": "What shows the subject in “The cat chased the mouse”?",
      "options": [
       "Its ending",
       "Its place before the verb",
       "Its article",
       "Its capital letter at the start"
      ],
      "answer": 1,
      "explain": "English nouns do not change for subject and object, so the order shows the subject."
     },
     {
      "prompt": "How does English usually form a question such as “Did the cat chase the mouse?”",
      "options": [
       "With the object first",
       "With a change of ending",
       "With a helping verb before the subject",
       "With the verb at the end"
      ],
      "answer": 2,
      "explain": "A question usually puts a helping verb before the subject."
     },
     {
      "prompt": "Why can Latin change its word order more freely than English?",
      "options": [
       "It has no verbs of motion",
       "It has an article",
       "Its verbs come first",
       "Its endings show the case"
      ],
      "answer": 3,
      "explain": "The endings show who does what, so the order is free to show emphasis."
     }
    ]
   }
  }
 ]
};
