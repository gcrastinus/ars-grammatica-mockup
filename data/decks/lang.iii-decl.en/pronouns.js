window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.en/pronouns"] = {
 "id": "lang.iii-decl.en/pronouns",
 "title": "The English Pronoun",
 "sub": "The personal, possessive, reflexive, demonstrative, interrogative, relative, and indefinite pronouns",
 "sources": "A standard English grammar (George O. Curme, <i>English Grammar</i>; Otto Jespersen, <i>Essentials of English Grammar</i>)",
 "panels": [
  {
   "id": "personal",
   "title": "The personal pronouns",
   "body": "<p>In “I warned you that they had seen us,” four words stand for persons without naming them, and each shows by its form who is meant. These are the personal pronouns. They show person, number, and case, and in the third person singular they show gender, as we have seen. Set out by person and number, with the subjective, objective, and possessive forms, they are:</p>\n<p><strong>First person singular</strong>: “I,” “me,” “my” (“mine”)<br><strong>First person plural</strong>: “we,” “us,” “our” (“ours”)<br><strong>Second person</strong>, singular and plural: “you,” “you,” “your” (“yours”)<br><strong>Third person singular</strong>: “he,” “him,” “his”; “she,” “her,” “her” (“hers”); “it,” “it,” “its”<br><strong>Third person plural</strong>: “they,” “them,” “their” (“theirs”)</p>\n<p>English once had a second person singular of its own, “thou” (subjective), “thee” (objective), and “thy” or “thine” (possessive), with the plural “ye” and “you.” These survive in prayer and in older poetry, and the verb that goes with “thou” has its own ending: “thou knowest,” “thou art.” In ordinary modern English “you” serves for both numbers, and only the context shows how many are meant.</p>",
   "qp": {
    "id": "q-en-personal",
    "variants": [
     {
      "prompt": "Which pronoun is first person, plural, and objective?",
      "options": [
       "“we”",
       "“our”",
       "“them”",
       "“us”"
      ],
      "answer": 3,
      "explain": "“Us” is the objective form of the first person plural; “we” is the subjective form and “our” the possessive. “Them” is third person."
     },
     {
      "prompt": "Which accidents does “her” show in “The judge thanked her”?",
      "options": [
       "Third person, singular, feminine, objective",
       "Third person, singular, feminine, possessive",
       "Third person, plural, objective",
       "Second person, singular, objective"
      ],
      "answer": 0,
      "explain": "“Her” is the object of “thanked,” so it is objective here. The same spelling is possessive in “her book,” and only its use in the sentence tells the two apart."
     },
     {
      "prompt": "In older English, which form is the objective of “thou”?",
      "options": [
       "“thy”",
       "“thee”",
       "“ye”",
       "“thine”"
      ],
      "answer": 1,
      "explain": "“Thou” is subjective, “thee” objective, and “thy” or “thine” possessive. “Ye” is the old plural subjective."
     }
    ]
   }
  },
  {
   "id": "possessives",
   "title": "Possessive adjectives and possessive pronouns",
   "body": "<p>“This is my coat” and “This coat is mine” say the same thing, but “my” stands before a noun, whereas “mine” stands alone in place of a noun. Many grammars call the first set (“my,” “your,” “his,” “her,” “its,” “our,” “their”) <strong>possessive adjectives</strong>, because they stand before a noun as an adjective does, and the second set (“mine,” “yours,” “his,” “hers,” “ours,” “theirs”) <strong>possessive pronouns</strong>, because they take the place of the noun: “Yours is on the table.”</p>\n<p>No possessive pronoun takes an apostrophe: “The choice is theirs”; “The horse hurt its leg.” The form “it’s,” with the apostrophe, is a contraction of “it is” or “it has” (“It’s raining”; “It’s been a long day”), and “who’s” is likewise a contraction, whereas “whose” is the possessive.</p>",
   "qp": {
    "id": "q-en-possessives",
    "variants": [
     {
      "prompt": "Which sentence is written correctly?",
      "options": [
       "“The committee gave it’s answer.”",
       "“The committee gave its’ answer.”",
       "“The committee gave its answer.”",
       "“The committee gave it is answer.”"
      ],
      "answer": 2,
      "explain": "“Its” is the possessive of “it,” and no possessive pronoun takes an apostrophe. “It’s” is a contraction of “it is” or “it has.”"
     },
     {
      "prompt": "In “The fault is ours,” what is “ours”?",
      "options": [
       "A possessive adjective, standing before a noun",
       "A possessive pronoun, standing in place of a noun",
       "An objective personal pronoun",
       "A reflexive pronoun"
      ],
      "answer": 1,
      "explain": "“Ours” stands alone in place of a noun (“our fault”), so it is a possessive pronoun. “Our” in “our fault” would be the possessive adjective."
     },
     {
      "prompt": "Which sentence is written correctly?",
      "options": [
       "“Whose umbrella is this?”",
       "“Who’s umbrella is this?”",
       "“Whos’ umbrella is this?”",
       "“Whom’s umbrella is this?”"
      ],
      "answer": 0,
      "explain": "“Whose” is the possessive of “who.” “Who’s” is a contraction of “who is” or “who has.”"
     }
    ]
   }
  },
  {
   "id": "reflexive",
   "title": "Reflexive and intensive pronouns",
   "body": "<p>In “She taught herself Greek,” the person taught is the same as the person who teaches, and the pronoun “herself” shows it. The forms in “-self” and “-selves” are “myself,” “yourself,” “himself,” “herself,” “itself,” “ourselves,” “yourselves,” and “themselves.” Used as an object that refers back to the subject, as here, such a form is a <strong>reflexive pronoun</strong>. Used beside a noun or pronoun only to emphasize it, the same form is an <strong>intensive pronoun</strong>: “The mayor herself opened the gate”; “I saw it myself.” The test is simple: an intensive pronoun can be left out without changing the sense of the sentence, whereas a reflexive cannot.</p>\n<p>Careful usage does not use a form in “-self” where the ordinary objective form will do. “The letter was sent to Paul and me” is preferred to “to Paul and myself,” because nothing in the sentence is turned back on the speaker.</p>",
   "qp": {
    "id": "q-en-reflexive",
    "variants": [
     {
      "prompt": "In “The king himself rode at the front,” what is “himself”?",
      "options": [
       "A reflexive pronoun",
       "An intensive pronoun",
       "A possessive pronoun",
       "A relative pronoun"
      ],
      "answer": 1,
      "explain": "“Himself” only emphasizes “the king” and can be left out without changing the sense, so it is intensive. In “The king armed himself” it would be reflexive."
     },
     {
      "prompt": "In “The children hid themselves in the barn,” what is “themselves”?",
      "options": [
       "An intensive pronoun",
       "A demonstrative pronoun",
       "A reflexive pronoun",
       "A subjective personal pronoun"
      ],
      "answer": 2,
      "explain": "“Themselves” is the object of “hid” and refers back to the subject “children,” so it is reflexive. It cannot be left out without changing the sense."
     },
     {
      "prompt": "Which sentence follows careful usage?",
      "options": [
       "“The prize was shared by Anna and myself.”",
       "“The prize was shared by Anna and I.”",
       "“The prize was shared by myself and Anna.”",
       "“The prize was shared by Anna and me.”"
      ],
      "answer": 3,
      "explain": "Nothing in the sentence is turned back on the speaker, so careful usage uses the ordinary objective “me” after the preposition “by,” not “myself.”"
     }
    ]
   }
  },
  {
   "id": "demonstrative-interrogative",
   "title": "Demonstrative and interrogative pronouns",
   "body": "<p>“This” and “that” point to something; their plurals are “these” and “those,” and they agree in number with what they point to: “this road,” “these roads”; “that hill,” “those hills.” They are <strong>demonstrative pronouns</strong> when they stand alone (“That is my house”) and demonstrative adjectives when they stand before a noun (“that house”). “This” points to what is near the speaker, and “that” to what is farther away.</p>\n<p>The <strong>interrogative pronouns</strong> ask a question: “who” (with its objective “whom” and possessive “whose”), “which,” and “what.” “Who” asks about persons and “what” about things (“Who rang?”; “What fell?”), whereas “which” asks for a choice among a known number of persons or things: “Which of the two roads is shorter?” “Which” and “what” also stand before a noun as interrogative adjectives: “Which road?” “What time is it?”</p>",
   "qp": {
    "id": "q-en-demonstrative",
    "variants": [
     {
      "prompt": "Which sentence uses the demonstrative as careful usage does?",
      "options": [
       "“Those kind of apples keep well.”",
       "“That kinds of apples keep well.”",
       "“Those kinds of apples keep well.”",
       "“This kinds of apples keep well.”"
      ],
      "answer": 2,
      "explain": "A demonstrative agrees in number with the noun it goes with, so the plural “kinds” takes the plural “those.” “This kind of apple keeps well” would be the singular."
     },
     {
      "prompt": "Which interrogative asks for a choice among a known number?",
      "options": [
       "“who”",
       "“which”",
       "“what”",
       "“whose”"
      ],
      "answer": 1,
      "explain": "“Which” asks for a choice among persons or things already in view (“Which of the three?”). “Who” asks about persons and “what” about things without such a limit."
     },
     {
      "prompt": "In “Whose is this scarf?” what is “whose”?",
      "options": [
       "An interrogative pronoun in the possessive case",
       "A relative pronoun in the possessive case",
       "A demonstrative pronoun",
       "A contraction of “who is”"
      ],
      "answer": 0,
      "explain": "“Whose” asks a question here, so it is interrogative, and it is the possessive form of “who.” The contraction of “who is” is “who’s.”"
     }
    ]
   }
  },
  {
   "id": "relative",
   "title": "The relative pronouns",
   "body": "<p>In “The farmer who owns the mill is away,” the clause “who owns the mill” tells which farmer is meant, and “who” both stands for “the farmer” and joins the clause to it. A pronoun that does this is a <strong>relative pronoun</strong>, and the noun it stands for is its antecedent. The English relatives are “who” (with “whom” and “whose”), used of persons; “which,” used of things and animals; “that,” used of persons or things; and “what,” which contains its own antecedent and means “that which”: “What he said was true.”</p>\n<p>A relative pronoun takes its number and gender from its antecedent, but its case from its own clause, as we saw with “who” and “whom”: in “The guide whom we hired was late,” “whom” is the object of “hired.” A clause that tells which one is meant (a restrictive clause) is not set off by commas and may use “that”: “The book that I lent you is rare.” A clause that only adds something about a person or thing already identified (a nonrestrictive clause) is set off by commas and uses “who” or “which,” not “that”: “My brother, who lives in Ohio, is coming.” “Whose” may be used of things as well as persons: “a house whose roof leaked.”</p>",
   "qp": {
    "id": "q-en-relative",
    "variants": [
     {
      "prompt": "In “The doctor whom the village trusted retired,” why is “whom” objective?",
      "options": [
       "Because its antecedent “doctor” is the subject of “retired”",
       "Because a relative after a noun is always objective",
       "Because “whom” is used of persons and “who” of things",
       "Because it is the object of “trusted” in its own clause"
      ],
      "answer": 3,
      "explain": "A relative takes its case from its own clause. In “whom the village trusted,” “village” is the subject and “whom” the object of “trusted.” “Who” and “whom” are both used of persons."
     },
     {
      "prompt": "Which sentence uses the relative as careful usage prefers?",
      "options": [
       "“Our neighbor, who keeps bees, sold us honey.”",
       "“Our neighbor, that keeps bees, sold us honey.”",
       "“Our neighbor, which keeps bees, sold us honey.”",
       "“Our neighbor, whom keeps bees, sold us honey.”"
      ],
      "answer": 0,
      "explain": "The clause only adds something about a neighbor already identified, so it is nonrestrictive, set off by commas, and uses “who” for a person, in the subjective case as the subject of “keeps.”"
     },
     {
      "prompt": "In “Take what you need,” what is “what”?",
      "options": [
       "An interrogative pronoun asking a question",
       "A relative that contains its own antecedent, “that which”",
       "A demonstrative pointing to something near",
       "A conjunction joining two clauses"
      ],
      "answer": 1,
      "explain": "“What” here means “that which”: “Take that which you need.” It asks nothing, so it is not interrogative."
     }
    ]
   }
  },
  {
   "id": "indefinite",
   "title": "Indefinite pronouns",
   "body": "<p>“Somebody left the gate open”; “Nothing was missing”; “Each of the boys had a lantern.” Pronouns such as these refer to persons or things without saying which. Grammars call them <strong>indefinite pronouns</strong>: “some,” “any,” “each,” “either,” “neither,” “none,” “one,” “all,” “both,” “few,” “many,” and the compounds “somebody,” “anyone,” “everyone,” “nobody,” “something,” and the rest.</p>\n<p>Their number decides the verb, as we saw with agreement. “Each,” “either,” “neither,” “one,” and the compounds in “-body” and “-one” are singular: “Everyone was ready.” “Both,” “few,” and “many” are plural. “Some,” “all,” “any,” and “none” are singular or plural according to what they refer to: “All of the milk was spilled,” whereas “All of the cups were broken.” With “none,” both numbers are found in good writers, and careful usage chooses the number the sense requires.</p>",
   "qp": {
    "id": "q-en-indefinite",
    "variants": [
     {
      "prompt": "Which sentence has the verb agreeing with its indefinite subject?",
      "options": [
       "“Neither of the keys fits the lock.”",
       "“Neither of the keys fit the lock.”",
       "“Neither of the keys are fitting the lock.”",
       "“Neither of the keys have fitted the lock.”"
      ],
      "answer": 0,
      "explain": "“Neither” is singular, so the verb is singular: “fits.” The plural “keys” stands in a phrase after it and does not decide the number."
     },
     {
      "prompt": "Which sentence is correct?",
      "options": [
       "“Some of the bread were stale.”",
       "“Some of the loaves was stale.”",
       "“Some of the loaf were stale.”",
       "“Some of the bread was stale.”"
      ],
      "answer": 3,
      "explain": "“Some” is singular or plural according to what it refers to. “Bread” is a singular mass noun, so the verb is singular; with “loaves” it would be plural."
     },
     {
      "prompt": "What is “nobody” in “Nobody answered”?",
      "options": [
       "A demonstrative pronoun",
       "A noun in the possessive case",
       "An indefinite pronoun",
       "A relative pronoun"
      ],
      "answer": 2,
      "explain": "“Nobody” refers to persons without saying which, so it is an indefinite pronoun, and it is singular."
     }
    ]
   }
  }
 ]
};
