window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.grc/attic"] = {
 "id": "lang.vi.grc/attic",
 "title": "Attic Correctness and the Dialects",
 "sub": "Attic as the standard of prose, the Atticists and the common dialect, and the article, the case, and the augment",
 "sources": "Smyth, <i>Greek Grammar</i>; Diogenes Laertius, <i>Lives of the Philosophers</i> VII.59",
 "panels": [
  {
   "id": "standard",
   "title": "Attic as the standard of prose",
   "body": "<p>A student who has read Homer and Herodotus may write <i lang=\"grc\">χώρη</i> for “land” or <i lang=\"grc\">ποιέει</i> for “he makes.” These are real Greek forms, but they are not Attic: <i lang=\"grc\">χώρη</i> is Ionic, and Attic keeps <i lang=\"grc\">α</i> after <i lang=\"grc\">ε</i>, <i lang=\"grc\">ι</i>, and <i lang=\"grc\">ρ</i> (<i lang=\"grc\">χώρα</i>); <i lang=\"grc\">ποιέει</i> is uncontracted, and Attic contracts it to <i lang=\"grc\">ποιεῖ</i>. The Homeric genitive in <i lang=\"grc\">-οιο</i> (<i lang=\"grc\">ποταμοῖο</i>, “of the river”) and the dative plural in <i lang=\"grc\">-οισι</i> belong to epic verse.</p>\n<p>The Greek grammarians judged correct Greek, which they called <i lang=\"grc\">Ἑλληνισμός</i> (“correct Greek”), by the usage of the best writers, and the Stoics, as Diogenes Laertius reports, named it the first of the virtues of speech (<i lang=\"grc\">Lives</i> VII.59). For prose the standard became the Attic of the fifth and fourth centuries BC. So in a sentence of Attic prose a form of another dialect is a barbarism, though in its own author it is correct.</p>",
   "qp": {
    "id": "q-grc-vi-std",
    "variants": [
     {
      "prompt": "A student writing Attic prose writes <i lang=\"grc\">κώμη</i> for “village.” Is that an error?",
      "options": [
       "Yes: Attic writes <i lang=\"grc\">κώμα</i>",
       "Yes: it is Ionic",
       "Yes: it is a solecism of gender",
       "No: <i lang=\"grc\">κώμη</i> is the Attic form"
      ],
      "answer": 3,
      "explain": "Attic keeps <i lang=\"grc\">α</i> only after <i lang=\"grc\">ε</i>, <i lang=\"grc\">ι</i>, and <i lang=\"grc\">ρ</i>; after <i lang=\"grc\">μ</i> it has <i lang=\"grc\">η</i>, as Ionic does."
     },
     {
      "prompt": "Why is <i lang=\"grc\">ποιέει</i> a barbarism in Attic prose?",
      "options": [
       "Attic contracts it to <i lang=\"grc\">ποιεῖ</i>",
       "It is a poetic accent",
       "It joins two words",
       "It has the wrong augment"
      ],
      "answer": 0,
      "explain": "The uncontracted form belongs to Ionic."
     },
     {
      "prompt": "By what standard did the grammarians judge correct Greek prose?",
      "options": [
       "The usage of Homer alone",
       "The usage of the Attic writers",
       "The spoken Greek of their own day",
       "The rules of Latin grammar"
      ],
      "answer": 1,
      "explain": "For prose the standard became the Attic of the classical writers."
     }
    ]
   }
  },
  {
   "id": "atticists",
   "title": "The Atticists and the common dialect",
   "body": "<p>After the conquests of Alexander, a common dialect, the <i lang=\"grc\">κοινή</i>, became the Greek of the whole eastern Mediterranean. It grew out of Attic, but it changed many Attic forms: it wrote <i lang=\"grc\">γινώσκω</i> for Attic <i lang=\"grc\">γιγνώσκω</i> (“know”), and <i lang=\"grc\">πράσσω</i> for Attic <i lang=\"grc\">πράττω</i> (“do”), with the <i lang=\"grc\">σσ</i> of Ionic in place of the Attic <i lang=\"grc\">ττ</i>.</p>\n<p>In the first and second centuries AD a movement of writers and teachers, the Atticists, sought to write as the classical Athenians had written, and lexicographers such as Phrynichus compiled lists of words and forms that the best Attic authors did not use. By their standard, a form of the common dialect in a composition meant to be Attic was a barbarism, and a construction of the common dialect was a solecism.</p>",
   "qp": {
    "id": "q-grc-vi-att",
    "variants": [
     {
      "prompt": "Which is the Attic form of the verb “do”?",
      "options": [
       "<i lang=\"grc\">πράσσω</i>",
       "<i lang=\"grc\">πράττω</i>",
       "<i lang=\"grc\">πράτω</i>",
       "<i lang=\"grc\">πράζω</i>"
      ],
      "answer": 1,
      "explain": "Attic writes <i lang=\"grc\">ττ</i> where Ionic and the common dialect write <i lang=\"grc\">σσ</i>."
     },
     {
      "prompt": "What did the Atticists seek?",
      "options": [
       "To write in the common dialect",
       "To write Greek in the Latin alphabet",
       "To write as the classical Athenians had written",
       "To write in Homeric verse"
      ],
      "answer": 2,
      "explain": "The Atticists took the classical Attic writers as their standard."
     },
     {
      "prompt": "By the Atticists’ standard, what was <i lang=\"grc\">γινώσκω</i> in a composition meant to be Attic?",
      "options": [
       "A solecism",
       "A metaplasm",
       "A figure",
       "A barbarism"
      ],
      "answer": 3,
      "explain": "It is an error in one word, a form of the common dialect for Attic <i lang=\"grc\">γιγνώσκω</i>."
     }
    ]
   }
  },
  {
   "id": "article-case",
   "title": "Article, case, and augment",
   "body": "<p>The Greek article and its noun agree in gender, number, and case. <i lang=\"grc\">τὸν λόγος</i> joins an accusative article to a nominative noun, whereas the accusative is <i lang=\"grc\">τὸν λόγον</i>; and <i lang=\"grc\">ἡ δῶρον</i> joins a feminine article to a neuter noun, whereas the neuter article is <i lang=\"grc\">τό</i>. The article has these three genders:</p>\n<p><strong><i lang=\"grc\">ὁ</i></strong>, masculine (<i lang=\"grc\">ὁ λόγος</i>, “the word”)<br><strong><i lang=\"grc\">ἡ</i></strong>, feminine (<i lang=\"grc\">ἡ πόλις</i>, “the city”)<br><strong><i lang=\"grc\">τό</i></strong>, neuter (<i lang=\"grc\">τὸ δῶρον</i>, “the gift”)</p><p>A preposition requires a certain case, and the wrong case is a solecism, because the preposition and the form of the noun are both real. <i lang=\"grc\">ἐν</i> (“in”) takes the dative, as in <i lang=\"grc\">ἐν τῷ οἴκῳ</i> (“in the house”). <i lang=\"grc\">εἰς</i> (“into”) takes the accusative, as in <i lang=\"grc\">εἰς τὴν ἀγοράν</i> (“into the market”). <i lang=\"grc\">σύν</i> (“with”) takes the dative, as in <i lang=\"grc\">σὺν τῷ πατρί</i> (“with the father”). In Attic prose <i lang=\"grc\">μετά</i> meaning “with” takes the genitive, as in <i lang=\"grc\">μετὰ τῶν πολιτῶν</i> (“with the citizens”). With the dative, <i lang=\"grc\">μετά</i> is chiefly epic (Smyth §1691).</p><p>A wrong augment (the prefix that marks the past tenses of the indicative), however, is a barbarism, not a solecism, because the one verb form is not Attic. In a compound verb the augment stands between the preposition and the verb. The imperfect of <i lang=\"grc\">εἰσβάλλω</i> (“I throw into”) is <i lang=\"grc\">εἰσέβαλλον</i>, not <i lang=\"grc\">εἴσβαλλον</i> (Smyth §449).</p>",
   "qp": {
    "id": "q-article-case",
    "variants": [
     {
      "prompt": "Choose the Attic phrase for “in the market.”",
      "options": [
       "<i lang=\"grc\">ἐν τὴν ἀγοράν</i>",
       "<i lang=\"grc\">ἐν τῇ ἀγορᾷ</i>",
       "<i lang=\"grc\">εἰς τῇ ἀγορᾷ</i>",
       "<i lang=\"grc\">ἐν ἡ ἀγορά</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">ἐν</i> takes the dative, as <i lang=\"grc\">ἐν τῷ οἴκῳ</i> does. <i lang=\"grc\">τῇ ἀγορᾷ</i> is the dative. <i lang=\"grc\">εἰς</i> would take the accusative <i lang=\"grc\">τὴν ἀγοράν</i>."
     },
     {
      "prompt": "Where does the augment of a compound verb stand?",
      "options": [
       "Before the whole compound, as if the verb were simple",
       "Between preposition and verb",
       "After the personal ending",
       "After the stem, before the ending"
      ],
      "answer": 1,
      "explain": "Smyth §449 places the augment between the preposition and the verb. <i lang=\"grc\">εἰσέβαλλον</i> is built that way. <i lang=\"grc\">εἴσβαλλον</i> puts the change on the front of the compound."
     },
     {
      "prompt": "What kind of error is <i lang=\"grc\">τὸ τιμή</i> for “the honor”?",
      "options": [
       "No error: <i lang=\"grc\">τιμή</i> is neuter",
       "A barbarism: <i lang=\"grc\">τιμή</i> is not a Greek word",
       "A solecism of gender",
       "A barbarism: <i lang=\"grc\">τό</i> is not an article"
      ],
      "answer": 2,
      "explain": "Both words are real. <i lang=\"grc\">τιμή</i> is feminine, so the article is <i lang=\"grc\">ἡ</i>. The genders do not match, as in <i lang=\"grc\">ἡ δῶρον</i>, which joins a feminine article to a neuter noun."
     }
    ]
   }
  }
 ]
};
