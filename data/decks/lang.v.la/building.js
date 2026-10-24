window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.la/building"] = {
 "id": "lang.v.la/building",
 "title": "Building the Latin Sentence",
 "sub": "From the meaning to the forms",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "building-1",
   "title": "Building a Sentence",
   "body": "<p>To say “The queen praises the farmer” in Latin, we must go from the meaning to the forms, whereas parsing goes from the form to its accidents. We choose the case of each noun by its use in the sentence. The subject is in the nominative, <i lang=\"la\">rēgīna</i>, and the one who receives the action is in the accusative, <i lang=\"la\">agricolam</i>. The verb agrees with its subject in number and person: <i lang=\"la\">laudat</i>. An adjective agrees with its noun in gender, number, and case: <i lang=\"la\">rēgīna bona</i> (“the good queen”), <i lang=\"la\">agricolam bonum</i> (“the good farmer,” as object).</p>",
   "qp": {
    "id": "q-la-bld-1",
    "variants": [
     {
      "prompt": "Which sentence says “the farmer praises the queen”?",
      "options": [
       "<i lang=\"la\">Agricolam rēgīna laudat.</i>",
       "<i lang=\"la\">Agricola rēgīnam laudat.</i>",
       "<i lang=\"la\">Agricola rēgīna laudat.</i>",
       "<i lang=\"la\">Agricolam rēgīnam laudat.</i>"
      ],
      "answer": 1,
      "explain": "The subject is nominative (<i lang=\"la\">agricola</i>) and the object accusative (<i lang=\"la\">rēgīnam</i>)."
     },
     {
      "prompt": "What decides the case of each noun when we build a Latin sentence?",
      "options": [
       "Its place in the English sentence",
       "Its declension",
       "Its use in the sentence",
       "Its gender"
      ],
      "answer": 2,
      "explain": "We go from the meaning to the forms, choosing the case by the use."
     },
     {
      "prompt": "Which form completes <i lang=\"la\">Rēgīna ______ agricolam laudat</i> (“the good queen praises the farmer”)?",
      "options": [
       "<i lang=\"la\">bonam</i>",
       "<i lang=\"la\">bonus</i>",
       "<i lang=\"la\">bonae</i>",
       "<i lang=\"la\">bona</i>"
      ],
      "answer": 3,
      "explain": "The adjective agrees with <i lang=\"la\">rēgīna</i>: feminine, singular, nominative."
     }
    ]
   }
  },
  {
   "id": "building-2",
   "title": "Word order",
   "body": "<p>In English the order of the words shows which noun is the subject: “The queen praises the farmer” does not mean “The farmer praises the queen.” In Latin the endings show it, and so the order can change without changing who does what. <i lang=\"la\">Rēgīna agricolam laudat</i>, <i lang=\"la\">agricolam rēgīna laudat</i>, and <i lang=\"la\">laudat rēgīna agricolam</i> all say the same thing, although they differ in emphasis. The usual prose order puts the subject first and the verb last.</p>",
   "qp": {
    "id": "q-la-bld-2",
    "variants": [
     {
      "prompt": "Do <i lang=\"la\">Lupus ovem videt</i> and <i lang=\"la\">Ovem lupus videt</i> differ in who sees whom?",
      "options": [
       "No; the endings show that the wolf sees the sheep",
       "Yes; the first word is always the subject",
       "Yes; the last noun is the subject",
       "No; both are incongruous"
      ],
      "answer": 0,
      "explain": "The endings, not the order, show the subject and the object."
     },
     {
      "prompt": "What does the order of Latin words chiefly change?",
      "options": [
       "The subject",
       "The case",
       "The tense",
       "The emphasis"
      ],
      "answer": 3,
      "explain": "The order changes the emphasis, not who does what."
     },
     {
      "prompt": "Where does the verb usually stand in Latin prose?",
      "options": [
       "First",
       "Second",
       "Last",
       "After the subject only in questions"
      ],
      "answer": 2,
      "explain": "The usual prose order puts the subject first and the verb last."
     }
    ]
   }
  },
  {
   "id": "building-3",
   "title": "Persons and pronouns",
   "body": "<p>The ending of a Latin verb shows the person and number of its subject, so a pronoun subject is usually left out: <i lang=\"la\">poētam laudāmus</i> means “we praise the poet.” The nominative <i lang=\"la\">ego</i> or <i lang=\"la\">tū</i> is written for emphasis or contrast, as in <i lang=\"la\">ego scrībō, tū legis</i>, “I write, and you read.” A personal pronoun is written when it is the object of the verb, or when it names the person to whom something is given, and then it takes the case of that use.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th><th>Subject (nominative)</th> <th>Object (accusative)</th> <th>To or for (dative)</th></tr>\n<tr><td>I, me</td> <td class=\"f\">ego</td> <td class=\"f\">mē</td> <td class=\"f\">mihi</td></tr>\n<tr><td>You, one person</td> <td class=\"f\">tū</td> <td class=\"f\">tē</td> <td class=\"f\">tibi</td></tr>\n<tr><td>We, us</td> <td class=\"f\">nōs</td> <td class=\"f\">nōs</td> <td class=\"f\">nōbīs</td></tr>\n<tr><td>You, more than one</td> <td class=\"f\">vōs</td> <td class=\"f\">vōs</td> <td class=\"f\">vōbīs</td></tr>\n</table></div>\n<p><i lang=\"la\">Puella mē videt</i> means “the girl sees me,” and <i lang=\"la\">puer mihi dōnum dat</i> means “the boy gives me a gift.”</p>",
   "qp": {
    "id": "q-la-bld-3",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"la\">Magister ______ laudat</i> (“the teacher praises us”)?",
      "options": [
       "<i lang=\"la\">nōbīs</i>",
       "<i lang=\"la\">ego</i>",
       "<i lang=\"la\">nostrī</i>",
       "<i lang=\"la\">nōs</i>"
      ],
      "answer": 3,
      "explain": "The object is accusative: <i lang=\"la\">nōs</i>."
     },
     {
      "prompt": "When is <i lang=\"la\">ego</i> written as the subject?",
      "options": [
       "For emphasis or contrast",
       "Always in the first person",
       "Only in questions",
       "Only with the verb <i lang=\"la\">sum</i>"
      ],
      "answer": 0,
      "explain": "The ending shows the person, so the pronoun is written for emphasis."
     },
     {
      "prompt": "Which form completes <i lang=\"la\">Amīcus ______ librum dat</i> (“my friend gives you a book,” one person)?",
      "options": [
       "<i lang=\"la\">tē</i>",
       "<i lang=\"la\">tibi</i>",
       "<i lang=\"la\">tū</i>",
       "<i lang=\"la\">vōbīs</i>"
      ],
      "answer": 1,
      "explain": "The person to whom the book is given is dative."
     }
    ]
   }
  },
  {
   "id": "building-4",
   "title": "The dative and the genitive",
   "body": "<p>The person to whom or for whom something is done is in the dative: <i lang=\"la\">puer puellae dōnum dat</i>, “the boy gives a gift to the girl.” A noun in the genitive modifies another noun, often to show whose it is, and it keeps its own case, so it does not agree with the noun it modifies: <i lang=\"la\">equus rēgis magnus est</i>, “the king’s horse is large.”</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th><th>Dative singular</th> <th>Dative plural</th> <th>Genitive singular</th> <th>Genitive plural</th></tr>\n<tr><td>puella</td> <td class=\"f\">puellae</td> <td class=\"f\">puellīs</td> <td class=\"f\">puellae</td> <td class=\"f\">puellārum</td></tr>\n<tr><td>servus</td> <td class=\"f\">servō</td> <td class=\"f\">servīs</td> <td class=\"f\">servī</td> <td class=\"f\">servōrum</td></tr>\n<tr><td>rēx</td> <td class=\"f\">rēgī</td> <td class=\"f\">rēgibus</td> <td class=\"f\">rēgis</td> <td class=\"f\">rēgum</td></tr>\n<tr><td>cīvis</td> <td class=\"f\">cīvī</td> <td class=\"f\">cīvibus</td> <td class=\"f\">cīvis</td> <td class=\"f\">cīvium</td></tr>\n</table></div>\n<p>In the first declension <i lang=\"la\">puellae</i> is both the dative and the genitive singular, so the sentence decides which it is. In <i lang=\"la\">terra rēgīnae</i>, “the queen’s land,” <i lang=\"la\">rēgīnae</i> modifies <i lang=\"la\">terra</i> and is genitive.</p>",
   "qp": {
    "id": "q-la-bld-4",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"la\">Fīlius ______ venit</i> (“the farmer’s son is coming”)?",
      "options": [
       "<i lang=\"la\">agricolam</i>",
       "<i lang=\"la\">agricola</i>",
       "<i lang=\"la\">agricolae</i>",
       "<i lang=\"la\">agricolīs</i>"
      ],
      "answer": 2,
      "explain": "The genitive shows whose son."
     },
     {
      "prompt": "In <i lang=\"la\">Puer rēgīnae rosās dat</i>, what case is <i lang=\"la\">rēgīnae</i>?",
      "options": [
       "Genitive",
       "Dative",
       "Nominative plural",
       "Accusative"
      ],
      "answer": 1,
      "explain": "The queen is the one to whom the roses are given."
     },
     {
      "prompt": "Does a genitive agree with the noun it modifies?",
      "options": [
       "No; it keeps its own case",
       "Yes, in gender, number, and case",
       "Yes, in number only",
       "Only in the first declension"
      ],
      "answer": 0,
      "explain": "A genitive limits another noun but keeps its own case."
     }
    ]
   }
  },
  {
   "id": "building-5",
   "title": "Et, and place where",
   "body": "<p><i lang=\"la\">Et</i> (“and”) joins two words that are used in the same way, and so they stand in the same case. In <i lang=\"la\">rēx servōs et nautās vocat</i>, both <i lang=\"la\">servōs</i> and <i lang=\"la\">nautās</i> are the object of <i lang=\"la\">vocat</i>, and both are accusative. Two subjects joined by <i lang=\"la\">et</i> are both nominative, and they usually take a plural verb: <i lang=\"la\">puella et puer urbem vident</i>, “the girl and the boy see the city.”</p>\n<p>Place where is shown by <i lang=\"la\">in</i> with the ablative, and motion into a place by <i lang=\"la\">in</i> with the accusative:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Latin</th> <th>Case</th> <th>Meaning</th></tr>\n<tr><td class=\"f\">in silvā</td> <td>ablative</td> <td>in the forest (place where)</td></tr>\n<tr><td class=\"f\">in silvam</td> <td>accusative</td> <td>into the forest (motion into)</td></tr>\n</table></div>",
   "qp": {
    "id": "q-la-bld-5",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"la\">Lupōs et ______ timēmus</i> (“we fear wolves and bears”)?",
      "options": [
       "<i lang=\"la\">ursī</i>",
       "<i lang=\"la\">ursōs</i>",
       "<i lang=\"la\">ursīs</i>",
       "<i lang=\"la\">ursus</i>"
      ],
      "answer": 1,
      "explain": "Words joined by <i lang=\"la\">et</i> have the same use, so both are accusative."
     },
     {
      "prompt": "What does <i lang=\"la\">in hortum</i> mean?",
      "options": [
       "“in the garden”",
       "“from the garden”",
       "“into the garden”",
       "“of the garden”"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">In</i> with the accusative means motion into."
     },
     {
      "prompt": "Which phrase means “in the field”?",
      "options": [
       "<i lang=\"la\">in agrum</i>",
       "<i lang=\"la\">in agrī</i>",
       "<i lang=\"la\">in ager</i>",
       "<i lang=\"la\">in agrō</i>"
      ],
      "answer": 3,
      "explain": "Place where is <i lang=\"la\">in</i> with the ablative."
     }
    ]
   }
  },
  {
   "id": "building-6",
   "title": "No article, enclitics, and particles",
   "body": "<p>Latin has no article, so <i lang=\"la\">rēx</i> may mean “the king” or “a king,” and the sentence decides which is meant.</p>\n<p>Three short words are enclitics, that is, they are written as part of the word before them and pronounced with it. <i lang=\"la\">-que</i> means “and” and joins its word to what precedes it: <i lang=\"la\">pater fīliusque</i>, “the father and the son.” <i lang=\"la\">-ve</i> means “or.” <i lang=\"la\">-ne</i> marks a question to which the answer is not assumed: <i lang=\"la\">vidēsne rēgem?</i>, “do you see the king?” A question that expects the answer yes begins with <i lang=\"la\">nōnne</i>, and one that expects no begins with <i lang=\"la\">num</i>.</p>\n<p>Some particles do not stand first in their clause. <i lang=\"la\">Enim</i> (“for”), <i lang=\"la\">autem</i> (“however”), and usually <i lang=\"la\">igitur</i> (“therefore”) stand second: <i lang=\"la\">rēx autem nōn vēnit</i>, “the king, however, did not come.”</p>",
   "qp": {
    "id": "q-la-bld-6",
    "variants": [
     {
      "prompt": "What does <i lang=\"la\">nōnne</i> show at the head of a question?",
      "options": [
       "That the answer “yes” is expected",
       "That the answer “no” is expected",
       "That no answer is assumed",
       "That the question is reported"
      ],
      "answer": 0,
      "explain": "<i lang=\"la\">Nōnne</i> expects “yes”; <i lang=\"la\">num</i> expects “no.”"
     },
     {
      "prompt": "What does <i lang=\"la\">-que</i> mean in <i lang=\"la\">senātus populusque</i>?",
      "options": [
       "“or”",
       "“not”",
       "a question",
       "“and”"
      ],
      "answer": 3,
      "explain": "<i lang=\"la\">-Que</i> means “and,” joining its word to what precedes."
     },
     {
      "prompt": "Where does <i lang=\"la\">autem</i> usually stand?",
      "options": [
       "First in its clause",
       "Last in its clause",
       "Second in its clause",
       "Before the verb"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">Autem</i>, like <i lang=\"la\">enim</i>, does not stand first."
     }
    ]
   }
  }
 ]
};
