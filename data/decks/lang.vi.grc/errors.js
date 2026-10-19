window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.grc/errors"] = {
 "id": "lang.vi.grc/errors",
 "title": "Barbarism and Solecism in Greek",
 "sub": "An error in one Attic word, and an error in the joining of real Attic words",
 "sources": "Donatus, <i>Ars maior</i>; Smyth, <i>Greek Grammar</i>",
 "panels": [
  {
   "id": "one-word",
   "title": "An error in one word",
   "body": "<p>A student writes <em>γράφωμι</em> for “I write,” and <em>βιβλίονες</em> for “books.” Neither word is an Attic form. The present, first person singular, of <em>γράφω</em> (“I write”) is <em>γράφω</em>. The nominative plural of <em>βιβλίον</em> (“book”) is <em>βιβλία</em>.</p><p>The error sits in the one word. The other words in the sentence may be ordinary Attic. Donatus calls a fault in one word a <strong>barbarism</strong> (<em>barbarismus est una pars orationis vitiosa in communi sermone</em>; <em>Ars maior</em> III). The student’s <em>γράφωμι</em> is a barbarism.</p>",
   "qp": {
    "id": "q-one-word",
    "variants": [
     {
      "prompt": "A student writes <em>παιδεύωμι</em> for the present, first person singular. What kind of error is that?",
      "options": ["A solecism: two real endings have been joined", "A barbarism: <em>παιδεύωμι</em> is not an Attic form", "No error: every present may end in <em>-μι</em>", "A metaplasm: the form is required in prose"],
      "answer": 1,
      "explain": "The present of <em>παιδεύω</em> is <em>παιδεύω</em>, as the present of <em>γράφω</em> is <em>γράφω</em>. <em>παιδεύωμι</em> is not an Attic word, so the error is a barbarism."
     },
     {
      "prompt": "Choose the nominative plural of <em>δῶρον</em> (“gift”).",
      "options": ["<em>δώρονες</em>", "<em>δῶροι</em>", "<em>δῶρα</em>", "<em>δώροις</em>"],
      "answer": 2,
      "explain": "A neuter of the second declension makes the nominative plural in <em>-α</em>, as <em>βιβλία</em> is the plural of <em>βιβλίον</em>. <em>δῶρα</em> is that plural. <em>δώροις</em> is the dative plural."
     },
     {
      "prompt": "Why is <em>ἔγραψαν</em> not a barbarism?",
      "options": ["The plural ending is a solecism in every verb", "It is the Attic aorist, third person plural", "The augment stands before a preposition here", "It is the genitive singular of a noun"],
      "answer": 1,
      "explain": "<em>ἔγραψαν</em> is a real Attic form, the aorist, third person plural, of <em>γράφω</em>. A barbarism is a form the language does not have."
     }
    ]
   }
  },
  {
   "id": "joining",
   "title": "Good words badly joined",
   "body": "<p><em>ἡ πόλις μέγας ἐστίν</em> is made of Attic words, and the words do not fit. <em>πόλις</em> (“city”) is feminine, and <em>μέγας</em> (“great”) is masculine. The feminine is <em>μεγάλη</em>. <em>οἱ πολῖται ἔρχεται</em> fails in number. <em>πολῖται</em> (“citizens”) is plural, and <em>ἔρχεται</em> is singular. The third person plural is <em>ἔρχονται</em>.</p><p>Donatus calls a fault in the joining a <strong>solecism</strong> (<em>soloecismus est vitium in contextu partium orationis contra regulam artis grammaticae factum</em>). Each word is a real word. The construction is incorrect.</p><p>A neuter plural is a different case. <em>τὰ τέκνα καλά ἐστιν</em> (“the children are good”) has a singular verb, and that is regular Attic. A neuter plural subject takes a singular verb (Smyth §958). <em>καλά</em> is neuter plural, and it agrees with <em>τέκνα</em>.</p>",
   "qp": {
    "id": "q-joining",
    "variants": [
     {
      "prompt": "What kind of error is <em>οἱ νόμοι γράφει</em>?",
      "options": ["No error: every plural subject takes a singular verb", "A barbarism: <em>γράφει</em> is not an Attic form", "A solecism of number", "A metaplasm: <em>νόμοι</em> is allowed only in verse"],
      "answer": 2,
      "explain": "<em>γράφει</em> is a real singular verb, and <em>νόμοι</em> is a real plural noun. The two do not agree in number. The third person plural is <em>γράφουσι</em>."
     },
     {
      "prompt": "Why is the singular verb in <em>τὰ δῶρα ἐστίν</em> regular Attic?",
      "options": ["Because <em>δῶρα</em> is feminine singular", "A neuter plural takes a singular verb", "Because <em>ἐστίν</em> is a barbarism that prose allows", "Because the article <em>τὰ</em> is singular"],
      "answer": 1,
      "explain": "Smyth §958 gives the rule, and <em>τὰ τέκνα καλά ἐστιν</em> is the same construction. <em>δῶρα</em> is neuter plural. <em>τὰ</em> is the neuter plural article."
     },
     {
      "prompt": "What fails in <em>ἡ κρήνη μέγας ἐστίν</em>?",
      "options": ["Gender does not match", "<em>ἐστίν</em> is not an Attic form", "The article <em>ἡ</em> is neuter", "Nothing: <em>μέγας</em> is the feminine of this adjective"],
      "answer": 0,
      "explain": "The words are real, and the genders do not match. The feminine is <em>μεγάλη</em>, as it is with <em>πόλις</em>. The error is a solecism."
     }
    ]
   }
  },
  {
   "id": "article-case",
   "title": "Article, case, and augment",
   "body": "<p>The article and its noun agree in gender, number, and case. <em>τὸν λόγος</em> joins an accusative article to a nominative noun. The accusative is <em>τὸν λόγον</em>. <em>ἡ δῶρον</em> joins a feminine article to a neuter noun. The neuter article is <em>τό</em>.</p><p>The three genders of the article are these:</p>\n<p><strong>ὁ</strong>, masculine (“ὁ λόγος,” “the word”)<br><strong>ἡ</strong>, feminine (“ἡ πόλις,” “the city”)<br><strong>τό</strong>, neuter (“τὸ δῶρον,” “the gift”)</p><p>A preposition asks for one case. The wrong case is a solecism, because the preposition and the noun form are both real. <em>ἐν</em> (“in”) takes the dative, as in <em>ἐν τῷ οἴκῳ</em> (“in the house”). <em>εἰς</em> (“into”) takes the accusative, as in <em>εἰς τὴν ἀγοράν</em> (“into the market”). <em>σύν</em> (“with”) takes the dative, as in <em>σὺν τῷ πατρί</em> (“with the father”). In Attic prose <em>μετά</em> meaning “with” takes the genitive, as in <em>μετὰ τῶν πολιτῶν</em> (“with the citizens”). With the dative, <em>μετά</em> is chiefly epic (Smyth §1691).</p><p>A wrong augment is a barbarism, not a solecism. The one verb form is not Attic. In a compound the augment stands between the preposition and the verb. The imperfect of <em>εἰσβάλλω</em> (“I throw into”) is <em>εἰσέβαλλον</em>, not <em>εἴσβαλλον</em> (Smyth §449).</p>",
   "qp": {
    "id": "q-article-case",
    "variants": [
     {
      "prompt": "Choose the Attic phrase for “in the market.”",
      "options": ["<em>ἐν τὴν ἀγοράν</em>", "<em>ἐν τῇ ἀγορᾷ</em>", "<em>εἰς τῇ ἀγορᾷ</em>", "<em>ἐν ἡ ἀγορά</em>"],
      "answer": 1,
      "explain": "<em>ἐν</em> takes the dative, as <em>ἐν τῷ οἴκῳ</em> does. <em>τῇ ἀγορᾷ</em> is the dative. <em>εἰς</em> would take the accusative <em>τὴν ἀγοράν</em>."
     },
     {
      "prompt": "Where does the augment of a compound verb stand?",
      "options": ["Before the whole compound, as if the verb were simple", "Between preposition and verb", "After the personal ending", "On the article of the subject"],
      "answer": 1,
      "explain": "Smyth §449 places the augment between the preposition and the verb. <em>εἰσέβαλλον</em> is built that way. <em>εἴσβαλλον</em> puts the change on the front of the compound."
     },
     {
      "prompt": "What kind of error is <em>τὸ πόλις</em>?",
      "options": ["No error: <em>πόλις</em> is neuter", "A barbarism: <em>πόλις</em> is not a Greek word", "A solecism of gender", "A metaplasm required in every prose sentence"],
      "answer": 2,
      "explain": "Both words are real. <em>πόλις</em> is feminine, so the article is <em>ἡ</em>. The genders do not match, as <em>ἡ δῶρον</em> joins a feminine article to neuter <em>δῶρον</em>."
     }
    ]
   }
  },
  {
   "id": "prose-poem",
   "title": "Ordinary speech and the poet",
   "body": "<p>Homer writes <em>ἔμμεναι</em> as an infinitive of <em>εἰμί</em> (“I am”). The Attic infinitive is <em>εἶναι</em>. The Homeric form is not a mistake in the poem. A student who writes <em>ἔμμεναι</em> in an Attic prose sentence has used a form Attic does not use. That is a barbarism.</p><p>Donatus marks the difference of setting. The barbarism belongs to ordinary speech. In a poem he calls the same departure a metaplasm (<em>in poemate metaplasmus</em>). The license belongs to the poet. It is not a license for Attic prose.</p>",
   "qp": {
    "id": "q-prose-poem",
    "variants": [
     {
      "prompt": "A student writes <em>λόγοιο</em> as the genitive singular in an Attic prose sentence. What is that?",
      "options": ["No error: <em>λόγοιο</em> is the Attic genitive", "A barbarism: Attic prose uses <em>λόγου</em>", "A solecism: <em>λόγοιο</em> is the Attic dative", "Correct prose, because every Homeric form is Attic"],
      "answer": 1,
      "explain": "The Attic genitive singular of <em>λόγος</em> is <em>λόγου</em>. <em>λόγοιο</em> is a Homeric form. In Attic prose the one word is a barbarism."
     },
     {
      "prompt": "What does Donatus call a poet’s departure of the kind Homer makes with an infinitive such as <em>ἔμμεναι</em>?",
      "options": ["A solecism, because the poem joins two dialects", "A barbarism, and the poem is incorrect", "A metaplasm", "No departure: <em>ἔμμεναι</em> is the Attic infinitive"],
      "answer": 2,
      "explain": "In a poem Donatus calls the departure a metaplasm. <em>εἶναι</em> is the Attic infinitive. <em>ἔμμεναι</em> is at home in Homer and is not Attic prose."
     },
     {
      "prompt": "A student writes the Homeric infinitive <em>ἔμμεν</em> for <em>εἶναι</em> in Attic prose. What kind of error is that?",
      "options": ["A solecism of case", "No error: <em>ἔμμεν</em> is the Attic form", "A barbarism: Attic prose does not use <em>ἔμμεν</em>", "A metaplasm, and therefore required in prose"],
      "answer": 2,
      "explain": "<em>ἔμμεν</em>, like <em>ἔμμεναι</em>, is a Homeric infinitive of <em>εἰμί</em>. In Attic prose the form is <em>εἶναι</em>. The error is in the one word."
     }
    ]
   }
  }
 ]
};
