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
   "body": "<p>A student writes <em lang=\"grc\">γράφωμι</em> for “I write,” and <em lang=\"grc\">βιβλίονες</em> for “books.” Neither is an Attic form, because “I write” is simply <em lang=\"grc\">γράφω</em>, and the nominative plural of <em lang=\"grc\">βιβλίον</em> (“book”) is <em lang=\"grc\">βιβλία</em>. The other words of the student’s sentence may be ordinary Attic, so the error lies in the one word.</p><p>Donatus calls a fault in one word a <strong>barbarism</strong>, “one part of speech faulty in ordinary speech” (<em lang=\"grc\">una pars orationis vitiosa in communi sermone</em>; <em lang=\"grc\">Ars maior</em> III). So the student’s <em lang=\"grc\">γράφωμι</em> is a barbarism.</p>",
   "qp": {
    "id": "q-one-word",
    "variants": [
     {
      "prompt": "A student writes <em lang=\"grc\">παιδεύωμι</em> for the present, first person singular. What kind of error is that?",
      "options": [
       "A solecism: two real endings have been joined",
       "A barbarism: <em lang=\"grc\">παιδεύωμι</em> is not an Attic form",
       "No error: every present may end in <em lang=\"grc\">-μι</em>",
       "A metaplasm, since the form is unusual"
      ],
      "answer": 1,
      "explain": "The present of <em lang=\"grc\">παιδεύω</em> is <em lang=\"grc\">παιδεύω</em>, as the present of <em lang=\"grc\">γράφω</em> is <em lang=\"grc\">γράφω</em>. <em lang=\"grc\">παιδεύωμι</em> is not an Attic word, so the error is a barbarism."
     },
     {
      "prompt": "What is the nominative plural of <em lang=\"grc\">ἔργον</em> (“work”)?",
      "options": [
       "<em lang=\"grc\">ἔργονες</em>",
       "<em lang=\"grc\">ἔργοι</em>",
       "<em lang=\"grc\">ἔργα</em>",
       "<em lang=\"grc\">ἔργοις</em>"
      ],
      "answer": 2,
      "explain": "A neuter of the second declension forms the nominative plural in <em lang=\"grc\">-α</em>, as <em lang=\"grc\">βιβλία</em> is the plural of <em lang=\"grc\">βιβλίον</em>, so the plural is <em lang=\"grc\">ἔργα</em>. <em lang=\"grc\">ἔργοις</em> is a real form, but it is the dative plural."
     },
     {
      "prompt": "Why is <em lang=\"grc\">ἔγραψαν</em> not a barbarism?",
      "options": [
       "Because a barbarism is an error in the joining of words",
       "It is the Attic aorist, third person plural",
       "Because the aorist takes no augment",
       "Because a barbarism must be a noun"
      ],
      "answer": 1,
      "explain": "<em lang=\"grc\">ἔγραψαν</em> is a real Attic form, the aorist, third person plural, of <em lang=\"grc\">γράφω</em>. A barbarism is a form the language does not have."
     }
    ]
   }
  },
  {
   "id": "joining",
   "title": "Good words badly joined",
   "body": "<p><em lang=\"grc\">ἡ πόλις μέγας ἐστίν</em> (“the city is great”) is made of Attic words, but they do not fit, because <em lang=\"grc\">πόλις</em> (“city”) is feminine, whereas <em lang=\"grc\">μέγας</em> (“great”) is masculine; the feminine is <em lang=\"grc\">μεγάλη</em>. <em lang=\"grc\">οἱ πολῖται ἔρχεται</em> (“the citizens come”) fails in number, because <em lang=\"grc\">πολῖται</em> (“citizens”) is plural, whereas <em lang=\"grc\">ἔρχεται</em> is singular; the third person plural is <em lang=\"grc\">ἔρχονται</em>.</p><p>Donatus calls an error of this kind a <strong>solecism</strong>, “a fault in the joining of the parts of speech, made against the rule of the art of grammar” (<em lang=\"grc\">vitium in contextu partium orationis contra regulam artis grammaticae factum</em>; <em lang=\"grc\">Ars maior</em> III.2). Each word is a real word, but the construction is incorrect.</p><p>A neuter plural subject, however, is a different matter. <em lang=\"grc\">τὰ τέκνα καλά ἐστιν</em> (“the children are good”) has a singular verb, and that is regular Attic, because a neuter plural subject takes a singular verb (Smyth §958); <em lang=\"grc\">καλά</em>, for its part, is neuter plural and agrees with <em lang=\"grc\">τέκνα</em>.</p>",
   "qp": {
    "id": "q-joining",
    "variants": [
     {
      "prompt": "What kind of error is <em lang=\"grc\">οἱ νόμοι γράφει</em>?",
      "options": [
       "No error: every plural subject takes a singular verb",
       "A barbarism: <em lang=\"grc\">γράφει</em> is not an Attic form",
       "A solecism of number",
       "A barbarism: <em lang=\"grc\">νόμοι</em> is not a plural"
      ],
      "answer": 2,
      "explain": "<em lang=\"grc\">γράφει</em> is a real singular verb, and <em lang=\"grc\">νόμοι</em> is a real plural noun. The two do not agree in number. The third person plural is <em lang=\"grc\">γράφουσι</em>."
     },
     {
      "prompt": "Why is the singular verb in <em lang=\"grc\">τὰ δῶρά ἐστιν</em> regular Attic?",
      "options": [
       "Because <em lang=\"grc\">δῶρα</em> is feminine singular",
       "A neuter plural takes a singular verb",
       "Because <em lang=\"grc\">ἐστίν</em> is plural",
       "Because the article <em lang=\"grc\">τὰ</em> is singular"
      ],
      "answer": 1,
      "explain": "Smyth §958 gives the rule, and <em lang=\"grc\">τὰ τέκνα καλά ἐστιν</em> is the same construction. <em lang=\"grc\">δῶρα</em> is neuter plural. <em lang=\"grc\">τὰ</em> is the neuter plural article."
     },
     {
      "prompt": "What fails in <em lang=\"grc\">ἡ κρήνη μέγας ἐστίν</em>?",
      "options": [
       "Gender does not match",
       "<em lang=\"grc\">ἐστίν</em> is not an Attic form",
       "The article <em lang=\"grc\">ἡ</em> is neuter",
       "Nothing: <em lang=\"grc\">μέγας</em> is the feminine of this adjective"
      ],
      "answer": 0,
      "explain": "The words are real, and the genders do not match. The feminine is <em lang=\"grc\">μεγάλη</em>, as it is with <em lang=\"grc\">πόλις</em>. The error is a solecism."
     }
    ]
   }
  },
  {
   "id": "prose-poem",
   "title": "Ordinary speech and the poet",
   "body": "<p>Homer writes <em lang=\"grc\">ἔμμεναι</em> as an infinitive of <em lang=\"grc\">εἰμί</em> (“I am”), whereas the Attic infinitive is <em lang=\"grc\">εἶναι</em> (“to be”). The Homeric form is not a mistake in the poem; but a student who writes <em lang=\"grc\">ἔμμεναι</em> in an Attic prose sentence has used a form that Attic does not use, and that is a barbarism.</p><p>Donatus distinguishes by setting. The barbarism belongs to ordinary speech, whereas in a poem he calls the same departure a <strong>metaplasm</strong> (<em lang=\"grc\">in poemate metaplasmus</em>), a change of form allowed to the poet. That permission belongs to the poet; it is not a permission for Attic prose.</p>",
   "qp": {
    "id": "q-prose-poem",
    "variants": [
     {
      "prompt": "A student writes <em lang=\"grc\">λόγοιο</em> as the genitive singular in an Attic prose sentence. What is that?",
      "options": [
       "No error: <em lang=\"grc\">λόγοιο</em> is the Attic genitive",
       "A barbarism: Attic prose uses <em lang=\"grc\">λόγου</em>",
       "A solecism: <em lang=\"grc\">λόγοιο</em> is the Attic dative",
       "Correct prose, because every Homeric form is Attic"
      ],
      "answer": 1,
      "explain": "The Attic genitive singular of <em lang=\"grc\">λόγος</em> is <em lang=\"grc\">λόγου</em>. <em lang=\"grc\">λόγοιο</em> is a Homeric form. In Attic prose the one word is a barbarism."
     },
     {
      "prompt": "What does Donatus call a poet’s departure in a single word, such as Homer’s genitive <em lang=\"grc\">πόληος</em> for Attic <em lang=\"grc\">πόλεως</em>?",
      "options": [
       "A solecism, because the poem joins two dialects",
       "A barbarism, and the poem is incorrect",
       "A metaplasm",
       "No departure: <em lang=\"grc\">πόληος</em> is the Attic genitive"
      ],
      "answer": 2,
      "explain": "In a poem Donatus calls the departure a metaplasm. <em lang=\"grc\">πόλεως</em> is the Attic genitive of <em lang=\"grc\">πόλις</em>; <em lang=\"grc\">πόληος</em> is at home in Homer, but not in Attic prose."
     },
     {
      "prompt": "A student writes the Homeric infinitive <em lang=\"grc\">ἔμμεν</em> for <em lang=\"grc\">εἶναι</em> in Attic prose. What kind of error is that?",
      "options": [
       "A solecism of case",
       "No error: <em lang=\"grc\">ἔμμεν</em> is the Attic form",
       "A barbarism: Attic prose does not use <em lang=\"grc\">ἔμμεν</em>",
       "A metaplasm, since the form is Homeric"
      ],
      "answer": 2,
      "explain": "<em lang=\"grc\">ἔμμεν</em>, like <em lang=\"grc\">ἔμμεναι</em>, is a Homeric infinitive of <em lang=\"grc\">εἰμί</em>. In Attic prose the form is <em lang=\"grc\">εἶναι</em>. The error is in the one word."
     }
    ]
   }
  }
 ]
};
