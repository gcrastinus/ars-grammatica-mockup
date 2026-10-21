window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.grc/agreement"] = {
 "id": "lang.v.grc/agreement",
 "title": "Agreement in Greek",
 "sub": "The adjective and its noun, the verb and its subject, the relative and its antecedent, and congruity",
 "sources": "Smyth, <i>Greek Grammar</i>, Part IV (Syntax)",
 "panels": [
  {
   "id": "adjective",
   "title": "The adjective and its noun",
   "body": "<p>Greek, like Latin, has many forms of each adjective, and the speaker must choose the one that matches the noun. A Greek adjective agrees with its noun in gender, number, and case, and so does the article: <i>ὁ σοφὸς διδάσκαλος</i> (“the wise teacher”), <i>τῆς σοφῆς γυναικός</i> (“of the wise woman”), <i>τοῖς σοφοῖς παισί</i> (“for the wise children”).</p>\n<p>As in Latin, the gender of the noun decides the form, not the look of the noun’s ending. <i>Νῆσος</i> (“island”) is feminine though it ends in <i>-ος</i>, so we say <i>ἡ μικρὰ νῆσος</i> (“the small island”); <i>στρατιώτης</i> (“soldier”) is masculine though it belongs to the first declension, so we say <i>ὁ ἀγαθὸς στρατιώτης</i>. Some adjectives, such as <i>ἀληθής</i> (“true”) and <i>ἄδικος</i> (“unjust”), have only two endings, one for the masculine and feminine together and one for the neuter: <i>ἄδικος γυνή</i> (“an unjust woman”) is correct.</p>",
   "qp": {
    "id": "q-grc-agr-adj",
    "variants": [
     {
      "prompt": "Which phrase is correct for “the small island”?",
      "options": [
       "<i>ἡ μικρὰ νῆσος</i>",
       "<i>ὁ μικρὸς νῆσος</i>",
       "<i>ἡ μικρὸς νῆσος</i>",
       "<i>τὸ μικρὸν νῆσος</i>"
      ],
      "answer": 0,
      "explain": "<i>Νῆσος</i> is feminine, so the article and the adjective are feminine, though the noun ends in <i>-ος</i>."
     },
     {
      "prompt": "Why is <i>ἄδικος γυνή</i> (“an unjust woman”) correct?",
      "options": [
       "<i>Γυνή</i> is a masculine noun in form",
       "Adjectives in <i>-ος</i> never change for gender",
       "The adjective agrees only in case",
       "<i>Ἄδικος</i> has one form for the masculine and feminine"
      ],
      "answer": 3,
      "explain": "<i>Ἄδικος</i> is an adjective of two endings, so its feminine is the same as its masculine."
     },
     {
      "prompt": "In which accidents does a Greek adjective agree with its noun?",
      "options": [
       "Gender and number only",
       "Case and person",
       "Gender, number, and case",
       "Number, person, and case"
      ],
      "answer": 2,
      "explain": "The adjective, like the article, agrees with its noun in gender, number, and case."
     }
    ]
   }
  },
  {
   "id": "verb",
   "title": "The verb and its subject",
   "body": "<p>We say <i>ὁ παῖς γράφει</i> (“the boy writes”) but <i>οἱ παῖδες γράφουσι</i> (“the boys write”). A finite verb agrees with its subject in person and number. Because the ending shows the person, the subject pronoun is usually not written: <i>γράφομεν</i> means “we write.” The pronoun is added for emphasis or contrast: <i>ἐγὼ μὲν γράφω, σὺ δὲ παίζεις</i> (“I am writing, but you are playing”). Two subjects joined by <i>καί</i> usually take a plural verb.</p>\n<p>Greek has one rule that Latin does not. A neuter plural subject usually takes a singular verb, because the many things are thought of as one collection: <i>τὰ ζῷα τρέχει</i> (“the animals run”). So <i>τὰ ζῷα τρέχει</i> is correct, although <i>οἱ ἵπποι τρέχει</i> would be incongruous.</p>",
   "qp": {
    "id": "q-grc-agr-verb",
    "variants": [
     {
      "prompt": "Which sentence is correct for “the children play”?",
      "options": [
       "<i>τὰ παιδία παίζεις</i>",
       "<i>τὸ παιδίον παίζουσι</i>",
       "<i>τὰ παιδία παίζει</i>",
       "<i>τὰ παιδία παίζομεν</i>"
      ],
      "answer": 2,
      "explain": "<i>Παιδία</i> is a neuter plural, and a neuter plural subject usually takes a singular verb."
     },
     {
      "prompt": "Why does <i>γράφετε</i> need no subject pronoun?",
      "options": [
       "Greek has no second person pronoun",
       "Its ending shows the person and number",
       "The pronoun is always omitted in Greek",
       "The verb is in the imperative only"
      ],
      "answer": 1,
      "explain": "The ending <i>-ετε</i> shows the second person plural, so the pronoun is written only for emphasis."
     },
     {
      "prompt": "When is <i>ἐγώ</i> written with a verb like <i>γράφω</i>?",
      "options": [
       "For emphasis or contrast",
       "Whenever the verb is singular",
       "Only in questions",
       "Only after <i>καί</i>"
      ],
      "answer": 0,
      "explain": "The ending already shows the person, so the pronoun adds emphasis or marks a contrast."
     }
    ]
   }
  },
  {
   "id": "relative",
   "title": "The relative and its antecedent",
   "body": "<p>In <i>ὁ ἀνὴρ ὃν εἶδες</i> (“the man whom you saw”), <i>ὅν</i> is masculine and singular because <i>ἀνήρ</i> is, but accusative because it is the object of <i>εἶδες</i>. In <i>ἡ γυνὴ ᾗ τὴν ἐπιστολὴν ἔδωκα</i> (“the woman to whom I gave the letter”), <i>ᾗ</i> is dative because it is the indirect object of <i>ἔδωκα</i>. So the Greek relative, like the Latin one, takes its gender and number from its antecedent and its case from its own clause.</p>\n<p>Greek often departs from this rule in one way. A relative that would be accusative is often drawn into the genitive or dative of its antecedent; this is called the attraction of the relative: <i>ἐκ τῶν πόλεων ὧν ἔχει</i> (“from the cities which he holds”), where the plain construction would be <i>ἃς ἔχει</i>.</p>",
   "qp": {
    "id": "q-grc-agr-rel",
    "variants": [
     {
      "prompt": "In <i>ἡ ἐπιστολὴ ἣν γράφω</i> (“the letter which I am writing”), why is the relative accusative?",
      "options": [
       "<i>Ἐπιστολή</i> is accusative",
       "Relatives are always accusative",
       "It is the object of <i>γράφω</i>",
       "It agrees with the subject of <i>γράφω</i>"
      ],
      "answer": 2,
      "explain": "The relative takes its gender and number from <i>ἐπιστολή</i> and its case from its own clause, where it is the object."
     },
     {
      "prompt": "What is the attraction of the relative?",
      "options": [
       "A relative that agrees with the verb",
       "A relative drawn into the case of its antecedent",
       "A relative that takes the gender of the subject",
       "A relative placed before its antecedent"
      ],
      "answer": 1,
      "explain": "A relative that would be accusative is often drawn into the genitive or dative of its antecedent."
     },
     {
      "prompt": "From which word does the relative take its gender and number?",
      "options": [
       "From its antecedent",
       "From the verb of its own clause",
       "From the subject of the main clause",
       "From the nearest noun after it"
      ],
      "answer": 0,
      "explain": "Gender and number come from the antecedent; the case comes from the relative’s own clause."
     }
    ]
   }
  },
  {
   "id": "congruity",
   "title": "Congruity and completeness in Greek",
   "body": "<p>The three judgments of a construction apply to Greek as to Latin. <i>οἱ στρατιῶται μάχεται</i> is incongruous, because the plural subject and the singular verb do not fit (the subject is not neuter). <i>ὁ σοφὸς διδάσκαλος</i> is congruous but incomplete, because nothing is yet said of the teacher. <i>ὁ διδάσκαλος διδάσκει</i> is congruous and complete.</p>\n<p>Two features of Greek make a sentence complete with fewer words than English. First, a finite verb alone can be a sentence, because its ending supplies the subject: <i>νικῶμεν</i> (“we are winning”). Second, the verb <i>ἐστί</i> is often left out when the adjective stands in the predicate position: <i>σοφὸς ὁ διδάσκαλος</i> means “the teacher is wise,” and it is complete.</p>",
   "qp": {
    "id": "q-grc-agr-cong",
    "variants": [
     {
      "prompt": "How does <i>οἱ ναῦται πλεῖ</i> stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Incongruous",
       "Complete, because the subject is plural"
      ],
      "answer": 2,
      "explain": "<i>Ναῦται</i> is a masculine plural, so it needs a plural verb; the parts do not fit."
     },
     {
      "prompt": "How does <i>ἀγαθὸς ὁ στρατηγός</i> stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Incongruous",
       "Incomplete, because there is no verb"
      ],
      "answer": 1,
      "explain": "The adjective stands in the predicate position, and <i>ἐστί</i> is understood: “the general is good.”"
     },
     {
      "prompt": "How does <i>ἡ καλὴ οἰκία</i> stand?",
      "options": [
       "Congruous but incomplete",
       "Congruous and complete",
       "Incongruous",
       "Complete, because the article is present"
      ],
      "answer": 0,
      "explain": "The words fit, but nothing is said of the house."
     }
    ]
   }
  }
 ]
};
