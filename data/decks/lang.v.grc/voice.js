window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.grc/voice"] = {
 "id": "lang.v.grc/voice",
 "title": "Voice, the Infinitive, and the Participle in Greek",
 "sub": "The three voices and the agent, the infinitive and its subject, and the attributive and circumstantial participle",
 "sources": "Smyth, <i>Greek Grammar</i>, Part IV (Syntax)",
 "panels": [
  {
   "id": "voices",
   "title": "Active, middle, and passive",
   "body": "<p>English has two voices, and Greek has three. <i lang=\"grc\">ὁ παῖς λούει τὸν κύνα</i> means “the boy washes the dog” (active); <i lang=\"grc\">ὁ παῖς λούεται</i> means “the boy washes himself” (middle); <i lang=\"grc\">ὁ κύων λούεται ὑπὸ τοῦ παιδός</i> means “the dog is washed by the boy” (passive). The middle voice shows that the subject acts on himself or for himself.</p>\n<p>In the present and the imperfect, the middle and the passive have the same forms, and the sense decides between them. In the aorist the passive has its own forms, with <i lang=\"grc\">-θη-</i>: <i lang=\"grc\">ἐπαιδεύθη</i> (“he was educated”), <i lang=\"grc\">ἐγράφη</i> (“it was written”). With a passive verb, the agent is <i lang=\"grc\">ὑπό</i> with the genitive, and the instrument is the dative alone: <i lang=\"grc\">ἐβλήθη λίθῳ ὑπὸ τοῦ πολεμίου</i> (“he was struck with a stone by the enemy”). Some verbs, such as <i lang=\"grc\">βούλομαι</i> (“wish”), <i lang=\"grc\">δύναμαι</i> (“be able”), and <i lang=\"grc\">ἔρχομαι</i> (“go”), have middle or passive forms with an active meaning; they are called deponent verbs, as in Latin.</p>",
   "qp": {
    "id": "q-grc-voice-voices",
    "variants": [
     {
      "prompt": "What does the middle <i lang=\"grc\">λούομαι</i> mean?",
      "options": [
       "“I wash myself”",
       "“I wash someone”",
       "“I washed”",
       "“I shall be washed”"
      ],
      "answer": 0,
      "explain": "The middle shows that the subject acts on himself or for himself."
     },
     {
      "prompt": "How does Greek name the agent of a passive verb?",
      "options": [
       "The dative alone",
       "<i lang=\"grc\">ἐκ</i> with the dative",
       "<i lang=\"grc\">διά</i> with the accusative",
       "<i lang=\"grc\">ὑπό</i> with the genitive"
      ],
      "answer": 3,
      "explain": "The personal agent is <i lang=\"grc\">ὑπό</i> with the genitive; the instrument is the dative alone."
     },
     {
      "prompt": "Why is <i lang=\"grc\">βούλομαι</i> called a deponent verb?",
      "options": [
       "It has no present tense",
       "It takes only the genitive",
       "It has middle or passive forms with active meaning",
       "It has active forms with passive meaning"
      ],
      "answer": 2,
      "explain": "The word <i lang=\"grc\">βούλομαι</i> means “I wish,” an active meaning, though its forms are middle or passive."
     }
    ]
   }
  },
  {
   "id": "infinitive",
   "title": "The infinitive",
   "body": "<p>Verbs of wishing, being able, and being willing are completed by an infinitive, as in English: <i lang=\"grc\">βούλεται μανθάνειν</i> (“he wishes to learn”), <i lang=\"grc\">δύναται γράφειν</i> (“he is able to write”). The present active infinitive ends in <i lang=\"grc\">-ειν</i>, and the present middle and passive infinitive in <i lang=\"grc\">-εσθαι</i>: <i lang=\"grc\">μανθάνειν</i>, <i lang=\"grc\">γράφεσθαι</i>. The aorist infinitive, such as <i lang=\"grc\">γράψαι</i>, differs from the present in aspect, not in time: it presents the act as a single event.</p>\n<p>When the infinitive has a subject of its own, that subject is accusative: <i lang=\"grc\">κελεύει τὸν παῖδα γράφειν</i> (“he orders the boy to write”). Greek can also put the article before the infinitive and use it as a noun, declined by the article: <i lang=\"grc\">τὸ μανθάνειν</i> (“learning”), <i lang=\"grc\">περὶ τοῦ μανθάνειν</i> (“about learning”). The negative with the infinitive is usually <i lang=\"grc\">μή</i>.</p>",
   "qp": {
    "id": "q-grc-voice-inf",
    "variants": [
     {
      "prompt": "Which infinitive completes <i lang=\"grc\">δύναται</i> in “he is able to learn”?",
      "options": [
       "<i lang=\"grc\">μανθάνει</i>",
       "<i lang=\"grc\">μανθάνων</i>",
       "<i lang=\"grc\">μανθάνειν</i>",
       "<i lang=\"grc\">μανθάνουσι</i>"
      ],
      "answer": 2,
      "explain": "The word <i lang=\"grc\">δύναμαι</i> is completed by an infinitive."
     },
     {
      "prompt": "In <i lang=\"grc\">κελεύει τοὺς στρατιώτας μένειν</i>, what case is the subject of the infinitive?",
      "options": [
       "Nominative",
       "Accusative",
       "Genitive",
       "Dative"
      ],
      "answer": 1,
      "explain": "The subject of the infinitive stands in the accusative."
     },
     {
      "prompt": "What does <i lang=\"grc\">τὸ γράφειν</i> mean?",
      "options": [
       "“writing,” the infinitive used as a noun",
       "“the one who writes”",
       "“the thing written”",
       "“to have written”"
      ],
      "answer": 0,
      "explain": "With the article the infinitive is a verbal noun."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The participle",
   "body": "<p>Greek uses the participle much more than English does, and often where English uses a clause. A participle with the article is attributive: it describes its noun or stands as a noun itself. <i lang=\"grc\">ὁ τὴν ἐπιστολὴν γράφων παῖς</i> means “the boy who is writing the letter,” and <i lang=\"grc\">ὁ γράφων</i> means “the one who writes,” “the writer”; <i lang=\"grc\">οἱ παρόντες</i> means “those present.”</p>\n<p>A participle without the article agrees with a noun or pronoun and tells the circumstance of the action: its time, cause, condition, or means. <i lang=\"grc\">γράφων ᾄδει</i> means “while he writes he sings,” and <i lang=\"grc\">καίπερ σοφὸς ὤν</i> means “although he is wise,” where <i lang=\"grc\">καίπερ</i> marks a concession. The participle of <i lang=\"grc\">εἰμί</i> is <i lang=\"grc\">ὤν</i>, <i lang=\"grc\">οὖσα</i>, <i lang=\"grc\">ὄν</i>, and like every participle it agrees with its noun in gender, number, and case.</p>",
   "qp": {
    "id": "q-grc-voice-ptc",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">οἱ μανθάνοντες</i> mean?",
      "options": [
       "“those who are learning”",
       "“they are learning”",
       "“while learning”",
       "“to learn”"
      ],
      "answer": 0,
      "explain": "A participle with the article stands as a noun: “the learners.”"
     },
     {
      "prompt": "Which form of <i lang=\"grc\">εἰμί</i> completes <i lang=\"grc\">ἡ γυνή, σοφὴ ______, σιγᾷ</i> (“the woman, being wise, is silent”)?",
      "options": [
       "<i lang=\"grc\">ὤν</i>",
       "<i lang=\"grc\">ὄν</i>",
       "<i lang=\"grc\">ἐστί</i>",
       "<i lang=\"grc\">οὖσα</i>"
      ],
      "answer": 3,
      "explain": "The participle agrees with <i lang=\"grc\">γυνή</i>, so it is feminine nominative singular."
     },
     {
      "prompt": "What does <i lang=\"grc\">καίπερ</i> add to a participle?",
      "options": [
       "The sense “in order to”",
       "The sense “if not”",
       "The sense “although”",
       "The sense “after”"
      ],
      "answer": 2,
      "explain": "The word <i lang=\"grc\">καίπερ</i> with a participle marks a concession."
     }
    ]
   }
  }
 ]
};
