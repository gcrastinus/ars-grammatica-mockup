window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.grc/contract"] = {
 "id": "lang.iii-decl.grc/contract",
 "title": "Contract Verbs",
 "sub": "Verbs in -άω, -έω, and -όω, and the rules of contraction in the present system",
 "sources": "Smyth, <i>Greek Grammar</i> §§ 49–59, 385, 393–398",
 "panels": [
  {
   "id": "what",
   "title": "What a contract verb is",
   "body": "<p>English “do not” becomes “don’t” in quick speech, two syllables run into one. Greek does something like this regularly in a large class of verbs whose stem ends in <i>α</i>, <i>ε</i>, or <i>ο</i>: the vowel of the stem meets the vowel of the ending and the two are contracted into one long vowel or diphthong. So <i>ποιέω</i> (“I make”) is written and spoken <i>ποιῶ</i>, and <i>ποιέει</i> becomes <i>ποιεῖ</i>. These are the <strong>contract verbs</strong>. The dictionary gives the uncontracted form (<i>τιμάω</i>, “I honor”; <i>ποιέω</i>, “I make”; <i>δηλόω</i>, “I show”), so that the stem vowel can be seen, but Attic uses the contracted forms.</p>\n<p>Contraction happens only in the present and the imperfect, where the stem vowel meets the vowel of the ending. In the other tenses the stem vowel is lengthened before the tense sign: <i>τιμήσω</i>, <i>ἐτίμησα</i>; <i>ποιήσω</i>, <i>ἐποίησα</i>; <i>δηλώσω</i>, <i>ἐδήλωσα</i>.</p>",
   "qp": {
    "id": "q-grc-contract-what",
    "variants": [
     {
      "prompt": "In which tenses do contract verbs contract?",
      "options": [
       "All tenses",
       "The present and the imperfect",
       "The future and the aorist",
       "The perfect and the pluperfect"
      ],
      "answer": 1,
      "explain": "Contraction happens only where the stem vowel meets the vowel of the ending, in the present system; elsewhere the vowel is lengthened before the tense sign."
     },
     {
      "prompt": "What is the future of <i>νικάω</i> (“I conquer”)?",
      "options": [
       "<i>νικάσω</i>",
       "<i>νικῶ</i>",
       "<i>νικήσω</i>",
       "<i>νικώσω</i>"
      ],
      "answer": 2,
      "explain": "Outside the present system the stem vowel is lengthened before the tense sign: <i>α</i> becomes <i>η</i>, so <i>νικήσω</i>."
     },
     {
      "prompt": "Why does the dictionary give <i>φιλέω</i> rather than <i>φιλῶ</i>?",
      "options": [
       "Because Attic uses the uncontracted form",
       "Because <i>φιλῶ</i> is a different verb",
       "Because the dictionary form is the future",
       "So that the stem vowel can be seen"
      ],
      "answer": 3,
      "explain": "The uncontracted form shows the stem vowel, from which the contracted forms can be worked out; Attic itself says <i>φιλῶ</i>."
     }
    ]
   }
  },
  {
   "id": "present",
   "title": "The present active indicative",
   "body": "<p>Set side by side, the present active indicative of the three kinds of contract verb is:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>τιμάω (“honor”)</th> <th>ποιέω (“make”)</th> <th>δηλόω (“show”)</th></tr>\n<tr><td>First singular</td> <td class=\"f\">τιμῶ</td> <td class=\"f\">ποιῶ</td> <td class=\"f\">δηλῶ</td></tr>\n<tr><td>Second singular</td> <td class=\"f\">τιμᾷς</td> <td class=\"f\">ποιεῖς</td> <td class=\"f\">δηλοῖς</td></tr>\n<tr><td>Third singular</td> <td class=\"f\">τιμᾷ</td> <td class=\"f\">ποιεῖ</td> <td class=\"f\">δηλοῖ</td></tr>\n<tr><td>First plural</td> <td class=\"f\">τιμῶμεν</td> <td class=\"f\">ποιοῦμεν</td> <td class=\"f\">δηλοῦμεν</td></tr>\n<tr><td>Second plural</td> <td class=\"f\">τιμᾶτε</td> <td class=\"f\">ποιεῖτε</td> <td class=\"f\">δηλοῦτε</td></tr>\n<tr><td>Third plural</td> <td class=\"f\">τιμῶσι(ν)</td> <td class=\"f\">ποιοῦσι(ν)</td> <td class=\"f\">δηλοῦσι(ν)</td></tr>\n</table></div>\n<p>The infinitives are <i>τιμᾶν</i>, <i>ποιεῖν</i>, and <i>δηλοῦν</i>. When the contracted syllable bears the accent it takes the circumflex, because the accent fell on the first of the two vowels before they were joined: <i>ποιέ-ει</i>, <i>ποιεῖ</i>.</p>",
   "qp": {
    "id": "q-grc-contract-present",
    "variants": [
     {
      "prompt": "What is the third person singular present of <i>ὁράω</i> (“I see”)?",
      "options": [
       "<i>ὁρεῖ</i>",
       "<i>ὁροῖ</i>",
       "<i>ὁρᾷ</i>",
       "<i>ὁράει</i>"
      ],
      "answer": 2,
      "explain": "An <i>α</i>-contract verb has <i>-ᾷ</i> in the third person singular, like <i>τιμᾷ</i>; <i>α</i> and <i>ει</i> make <i>ᾳ</i>."
     },
     {
      "prompt": "What is the first person plural present of <i>φιλέω</i> (“I love”)?",
      "options": [
       "<i>φιλεῖμεν</i>",
       "<i>φιλοῦμεν</i>",
       "<i>φιλῶμεν</i>",
       "<i>φιλέομεν</i>"
      ],
      "answer": 1,
      "explain": "<i>Ε</i> and <i>ο</i> contract to <i>ου</i>: <i>φιλέ-ομεν</i>, <i>φιλοῦμεν</i>."
     },
     {
      "prompt": "What is the present infinitive of <i>ἀξιόω</i> (“I think worthy”)?",
      "options": [
       "<i>ἀξιοῦν</i>",
       "<i>ἀξιοῖν</i>",
       "<i>ἀξιῶν</i>",
       "<i>ἀξιεῖν</i>"
      ],
      "answer": 0,
      "explain": "The infinitive of an <i>ο</i>-contract verb ends in <i>-οῦν</i>, like <i>δηλοῦν</i>."
     }
    ]
   }
  },
  {
   "id": "rules",
   "title": "The rules of contraction",
   "body": "<p>The contracted forms follow a few rules, which hold in other parts of Greek as well:</p>\n<p><strong><i>α</i> with an <i>e</i>-sound</strong> (<i>ε</i> or <i>η</i>) gives long <i>ᾱ</i>; <strong><i>α</i> with an <i>o</i>-sound</strong> (<i>ο</i>, <i>ω</i>, or <i>ου</i>) gives <i>ω</i>: <i>τιμάετε</i>, <i>τιμᾶτε</i>; <i>τιμάομεν</i>, <i>τιμῶμεν</i><br><strong><i>ε</i> with <i>ε</i></strong> gives <i>ει</i>, and <strong><i>ε</i> with <i>ο</i></strong> gives <i>ου</i>: <i>ποιέετε</i>, <i>ποιεῖτε</i>; <i>ποιέομεν</i>, <i>ποιοῦμεν</i><br><strong><i>ο</i> with <i>ε</i> or <i>ο</i></strong> gives <i>ου</i>, and <strong><i>ο</i> with an <i>i</i>-diphthong</strong> gives <i>οι</i>: <i>δηλόετε</i>, <i>δηλοῦτε</i>; <i>δηλόει</i>, <i>δηλοῖ</i><br>An <i>ε</i> before a long vowel or a diphthong is absorbed into it: <i>ποιέω</i>, <i>ποιῶ</i>; <i>ποιέει</i>, <i>ποιεῖ</i>.</p>\n<p>An iota in the second vowel stays as iota subscript, as in <i>τιμᾷς</i> from <i>τιμάεις</i>. Knowing the rules, a reader can always go back from a contracted form to its parts and so find the verb in the dictionary.</p>",
   "qp": {
    "id": "q-grc-contract-rules",
    "variants": [
     {
      "prompt": "What does <i>ε</i> + <i>ο</i> give?",
      "options": [
       "<i>ει</i>",
       "<i>ω</i>",
       "<i>ου</i>",
       "<i>οι</i>"
      ],
      "answer": 2,
      "explain": "<i>Ε</i> and <i>ο</i> contract to the spurious diphthong <i>ου</i>: <i>ποιέομεν</i>, <i>ποιοῦμεν</i>."
     },
     {
      "prompt": "What does <i>α</i> + <i>ο</i> give?",
      "options": [
       "<i>ᾱ</i>",
       "<i>ω</i>",
       "<i>ου</i>",
       "<i>αυ</i>"
      ],
      "answer": 1,
      "explain": "<i>Α</i> with an <i>o</i>-sound gives <i>ω</i>: <i>τιμάομεν</i>, <i>τιμῶμεν</i>."
     },
     {
      "prompt": "From which uncontracted form does <i>νικᾶτε</i> come?",
      "options": [
       "<i>νικάετε</i>",
       "<i>νικάοτε</i>",
       "<i>νικέετε</i>",
       "<i>νικόετε</i>"
      ],
      "answer": 0,
      "explain": "<i>Α</i> with <i>ε</i> gives long <i>ᾱ</i>: <i>νικάετε</i>, <i>νικᾶτε</i>."
     }
    ]
   }
  },
  {
   "id": "imperfect-middle",
   "title": "The imperfect and the middle",
   "body": "<p>The imperfect takes the augment and contracts in the same way: <i>ἐτίμων</i>, <i>ἐτίμᾱς</i>, <i>ἐτίμᾱ</i>, <i>ἐτιμῶμεν</i>, <i>ἐτιμᾶτε</i>, <i>ἐτίμων</i>; <i>ἐποίουν</i>, <i>ἐποίεις</i>, <i>ἐποίει</i>, <i>ἐποιοῦμεν</i>, <i>ἐποιεῖτε</i>, <i>ἐποίουν</i>; <i>ἐδήλουν</i>, <i>ἐδήλους</i>, <i>ἐδήλου</i>, <i>ἐδηλοῦμεν</i>, <i>ἐδηλοῦτε</i>, <i>ἐδήλουν</i>. The first person singular and the third person plural have the same form, as in <i>ἔλῡον</i>.</p>\n<p>The middle and passive contract by the same rules: <i>ποιοῦμαι</i>, <i>ποιῇ</i> (or <i>ποιεῖ</i>), <i>ποιεῖται</i>, <i>ποιούμεθα</i>, <i>ποιεῖσθε</i>, <i>ποιοῦνται</i>; <i>τιμῶμαι</i>, <i>τιμᾷ</i>, <i>τιμᾶται</i>; <i>δηλοῦμαι</i>, <i>δηλοῖ</i>, <i>δηλοῦται</i>. Many common verbs are deponent contract verbs, such as <i>ἡγέομαι</i> (“I lead,” “I think”), <i>ἡγοῦμαι</i>.</p>",
   "qp": {
    "id": "q-grc-contract-impf",
    "variants": [
     {
      "prompt": "What is the third person singular imperfect active of <i>ποιέω</i>?",
      "options": [
       "<i>ἐποίεε</i>",
       "<i>ποιεῖ</i>",
       "<i>ἐποίου</i>",
       "<i>ἐποίει</i>"
      ],
      "answer": 3,
      "explain": "The augment with <i>ε</i> + <i>ε</i> contracted: <i>ἐποίε-ε</i>, <i>ἐποίει</i>."
     },
     {
      "prompt": "What is the third person plural present middle of <i>ἡγέομαι</i>?",
      "options": [
       "<i>ἡγοῦνται</i>",
       "<i>ἡγεῖνται</i>",
       "<i>ἡγῶνται</i>",
       "<i>ἡγέονται</i>"
      ],
      "answer": 0,
      "explain": "<i>Ε</i> + <i>ο</i> gives <i>ου</i>: <i>ἡγέ-ονται</i>, <i>ἡγοῦνται</i>."
     },
     {
      "prompt": "Which two forms of the imperfect of <i>τιμάω</i> are alike?",
      "options": [
       "Second and third person singular",
       "First person singular and third person plural, <i>ἐτίμων</i>",
       "First and second person plural",
       "Third person singular and plural"
      ],
      "answer": 1,
      "explain": "As in <i>ἔλῡον</i>, the first person singular and the third person plural of the imperfect are the same: <i>ἐτίμων</i>."
     }
    ]
   }
  }
 ]
};
