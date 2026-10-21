window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.grc/errors"] = {
 "id": "lang.vi.grc/errors",
 "title": "Barbarism and Solecism in Greek",
 "sub": "An error in one Attic word, and an error in the joining of real Attic words",
 "sources": "Donatus, <em>Ars maior</em>; Smyth, <em>Greek Grammar</em>",
 "panels": [
  {
   "id": "one-word",
   "title": "An error in one word",
   "body": "<p>A student writes <em>γράφωμι</em> for “I write,” and <em>βιβλίονες</em> for “books.” Neither is an Attic form, because “I write” is simply <em>γράφω</em>, and the nominative plural of <em>βιβλίον</em> (“book”) is <em>βιβλία</em>. The other words of the student’s sentence may be ordinary Attic, so the error lies in the one word.</p><p>Donatus calls a fault in one word a <strong>barbarism</strong>, “one part of speech faulty in ordinary speech” (<em>una pars orationis vitiosa in communi sermone</em>; <em>Ars maior</em> III). So the student’s <em>γράφωμι</em> is a barbarism.</p>",
   "qp": {
    "id": "q-one-word",
    "variants": [
     {
      "prompt": "A student writes <em>παιδεύωμι</em> for the present, first person singular. What kind of error is that?",
      "options": [
       "A solecism: two real endings have been joined",
       "A barbarism: <em>παιδεύωμι</em> is not an Attic form",
       "No error: every present may end in <em>-μι</em>",
       "A metaplasm, since the form is unusual"
      ],
      "answer": 1,
      "explain": "The present of <em>παιδεύω</em> is <em>παιδεύω</em>, as the present of <em>γράφω</em> is <em>γράφω</em>. <em>παιδεύωμι</em> is not an Attic word, so the error is a barbarism."
     },
     {
      "prompt": "What is the nominative plural of <em>ἔργον</em> (“work”)?",
      "options": [
       "<em>ἔργονες</em>",
       "<em>ἔργοι</em>",
       "<em>ἔργα</em>",
       "<em>ἔργοις</em>"
      ],
      "answer": 2,
      "explain": "A neuter of the second declension forms the nominative plural in <em>-α</em>, as <em>βιβλία</em> is the plural of <em>βιβλίον</em>, so the plural is <em>ἔργα</em>. <em>ἔργοις</em> is a real form, but it is the dative plural."
     },
     {
      "prompt": "Why is <em>ἔγραψαν</em> not a barbarism?",
      "options": [
       "Because a barbarism is an error in the joining of words",
       "It is the Attic aorist, third person plural",
       "Because the aorist takes no augment",
       "Because a barbarism must be a noun"
      ],
      "answer": 1,
      "explain": "<em>ἔγραψαν</em> is a real Attic form, the aorist, third person plural, of <em>γράφω</em>. A barbarism is a form the language does not have."
     }
    ]
   }
  },
  {
   "id": "joining",
   "title": "Good words badly joined",
   "body": "<p><em>ἡ πόλις μέγας ἐστίν</em> (“the city is great”) is made of Attic words, but they do not fit, because <em>πόλις</em> (“city”) is feminine, whereas <em>μέγας</em> (“great”) is masculine; the feminine is <em>μεγάλη</em>. <em>οἱ πολῖται ἔρχεται</em> (“the citizens come”) fails in number, because <em>πολῖται</em> (“citizens”) is plural, whereas <em>ἔρχεται</em> is singular; the third person plural is <em>ἔρχονται</em>.</p><p>Donatus calls an error of this kind a <strong>solecism</strong>, “a fault in the joining of the parts of speech, made against the rule of the art of grammar” (<em>vitium in contextu partium orationis contra regulam artis grammaticae factum</em>; <em>Ars maior</em> III.2). Each word is a real word, but the construction is incorrect.</p><p>A neuter plural subject, however, is a different matter. <em>τὰ τέκνα καλά ἐστιν</em> (“the children are good”) has a singular verb, and that is regular Attic, because a neuter plural subject takes a singular verb (Smyth §958); <em>καλά</em>, for its part, is neuter plural and agrees with <em>τέκνα</em>.</p>",
   "qp": {
    "id": "q-joining",
    "variants": [
     {
      "prompt": "What kind of error is <em>οἱ νόμοι γράφει</em>?",
      "options": [
       "No error: every plural subject takes a singular verb",
       "A barbarism: <em>γράφει</em> is not an Attic form",
       "A solecism of number",
       "A barbarism: <em>νόμοι</em> is not a plural"
      ],
      "answer": 2,
      "explain": "<em>γράφει</em> is a real singular verb, and <em>νόμοι</em> is a real plural noun. The two do not agree in number. The third person plural is <em>γράφουσι</em>."
     },
     {
      "prompt": "Why is the singular verb in <em>τὰ δῶρα ἐστίν</em> regular Attic?",
      "options": [
       "Because <em>δῶρα</em> is feminine singular",
       "A neuter plural takes a singular verb",
       "Because <em>ἐστίν</em> is plural",
       "Because the article <em>τὰ</em> is singular"
      ],
      "answer": 1,
      "explain": "Smyth §958 gives the rule, and <em>τὰ τέκνα καλά ἐστιν</em> is the same construction. <em>δῶρα</em> is neuter plural. <em>τὰ</em> is the neuter plural article."
     },
     {
      "prompt": "What fails in <em>ἡ κρήνη μέγας ἐστίν</em>?",
      "options": [
       "Gender does not match",
       "<em>ἐστίν</em> is not an Attic form",
       "The article <em>ἡ</em> is neuter",
       "Nothing: <em>μέγας</em> is the feminine of this adjective"
      ],
      "answer": 0,
      "explain": "The words are real, and the genders do not match. The feminine is <em>μεγάλη</em>, as it is with <em>πόλις</em>. The error is a solecism."
     }
    ]
   }
  },
  {
   "id": "prose-poem",
   "title": "Ordinary speech and the poet",
   "body": "<p>Homer writes <em>ἔμμεναι</em> as an infinitive of <em>εἰμί</em> (“I am”), whereas the Attic infinitive is <em>εἶναι</em> (“to be”). The Homeric form is not a mistake in the poem; but a student who writes <em>ἔμμεναι</em> in an Attic prose sentence has used a form that Attic does not use, and that is a barbarism.</p><p>Donatus distinguishes by setting. The barbarism belongs to ordinary speech, whereas in a poem he calls the same departure a <strong>metaplasm</strong> (<em>in poemate metaplasmus</em>), a change of form allowed to the poet. That permission belongs to the poet; it is not a permission for Attic prose.</p>",
   "qp": {
    "id": "q-prose-poem",
    "variants": [
     {
      "prompt": "A student writes <em>λόγοιο</em> as the genitive singular in an Attic prose sentence. What is that?",
      "options": [
       "No error: <em>λόγοιο</em> is the Attic genitive",
       "A barbarism: Attic prose uses <em>λόγου</em>",
       "A solecism: <em>λόγοιο</em> is the Attic dative",
       "Correct prose, because every Homeric form is Attic"
      ],
      "answer": 1,
      "explain": "The Attic genitive singular of <em>λόγος</em> is <em>λόγου</em>. <em>λόγοιο</em> is a Homeric form. In Attic prose the one word is a barbarism."
     },
     {
      "prompt": "What does Donatus call a poet’s departure in a single word, such as Homer’s genitive <em>πόληος</em> for Attic <em>πόλεως</em>?",
      "options": [
       "A solecism, because the poem joins two dialects",
       "A barbarism, and the poem is incorrect",
       "A metaplasm",
       "No departure: <em>πόληος</em> is the Attic genitive"
      ],
      "answer": 2,
      "explain": "In a poem Donatus calls the departure a metaplasm. <em>πόλεως</em> is the Attic genitive of <em>πόλις</em>; <em>πόληος</em> is at home in Homer, but not in Attic prose."
     },
     {
      "prompt": "A student writes the Homeric infinitive <em>ἔμμεν</em> for <em>εἶναι</em> in Attic prose. What kind of error is that?",
      "options": [
       "A solecism of case",
       "No error: <em>ἔμμεν</em> is the Attic form",
       "A barbarism: Attic prose does not use <em>ἔμμεν</em>",
       "A metaplasm, since the form is Homeric"
      ],
      "answer": 2,
      "explain": "<em>ἔμμεν</em>, like <em>ἔμμεναι</em>, is a Homeric infinitive of <em>εἰμί</em>. In Attic prose the form is <em>εἶναι</em>. The error is in the one word."
     }
    ]
   }
  }
 ]
};
