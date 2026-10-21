window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.grc/pronouns"] = {
 "id": "lang.iii-decl.grc/pronouns",
 "title": "The Greek Pronoun",
 "sub": "The personal pronouns, αὐτός, the demonstratives, the relative, the interrogative and indefinite, and the reflexive",
 "sources": "Smyth, <i>Greek Grammar</i> §§ 325–340",
 "panels": [
  {
   "id": "personal",
   "title": "The personal pronouns",
   "body": "<p>As in Latin, the ending of a Greek verb already shows the person, so <i>γράφω</i> is “I write,” and the nominative pronoun is used only for emphasis or contrast: <i>ἐγὼ μὲν γράφω, σὺ δὲ οὔ</i>, “<i>I</i> write, but <i>you</i> do not.” The pronouns of the first and second persons are:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>First person</th> <th>Second person</th></tr>\n<tr><th colspan=\"3\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἐγώ</td> <td class=\"f\">σύ</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἐμοῦ, μου</td> <td class=\"f\">σοῦ, σου</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἐμοί, μοι</td> <td class=\"f\">σοί, σοι</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἐμέ, με</td> <td class=\"f\">σέ, σε</td></tr>\n<tr><th colspan=\"3\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἡμεῖς</td> <td class=\"f\">ὑμεῖς</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἡμῶν</td> <td class=\"f\">ὑμῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἡμῖν</td> <td class=\"f\">ὑμῖν</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἡμᾶς</td> <td class=\"f\">ὑμᾶς</td></tr>\n</table></div>\n<p>The shorter forms <i>μου</i>, <i>μοι</i>, <i>με</i> and <i>σου</i>, <i>σοι</i>, <i>σε</i> are enclitic, that is, they lean on the word before them and give up their own accent; they are used when the pronoun is not emphatic. Attic prose has no personal pronoun of the third person in ordinary use: for “him,” “her,” “it,” and “them,” it uses the oblique cases of <i>αὐτός</i>, and for an emphatic “he” it uses a demonstrative.</p>",
   "qp": {
    "id": "q-grc-personal",
    "variants": [
     {
      "prompt": "What is the dative plural of <i>σύ</i>?",
      "options": [
       "<i>ἡμῖν</i>",
       "<i>ὑμᾶς</i>",
       "<i>ὑμῖν</i>",
       "<i>σοί</i>"
      ],
      "answer": 2,
      "explain": "<i>Ὑμῖν</i> is the dative plural of the second person; <i>ἡμῖν</i> is the first person, and <i>ὑμᾶς</i> the accusative."
     },
     {
      "prompt": "When is <i>με</i> used rather than <i>ἐμέ</i>?",
      "options": [
       "When the pronoun is plural",
       "When the pronoun is not emphatic",
       "After a preposition",
       "When it is the subject"
      ],
      "answer": 1,
      "explain": "<i>Με</i> is the enclitic form, used without emphasis; <i>ἐμέ</i> is the emphatic form, used also after prepositions."
     },
     {
      "prompt": "How does Attic prose say “I saw him”?",
      "options": [
       "<i>εἶδον αὐτόν</i>",
       "<i>εἶδον ἐγώ</i>",
       "<i>εἶδον σέ</i>",
       "<i>εἶδον αὐτός</i>"
      ],
      "answer": 0,
      "explain": "For “him” Attic uses the oblique cases of <i>αὐτός</i>: <i>αὐτόν</i>. The nominative <i>αὐτός</i> means “himself.”"
     }
    ]
   }
  },
  {
   "id": "autos",
   "title": "The three uses of <i>αὐτός</i>",
   "body": "<p>English “himself” and “the same” are different words, but Greek uses one, <i>αὐτός, αὐτή, αὐτό</i>, declined like <i>ἀγαθός</i> except that the neuter is <i>αὐτό</i>. Its sense depends on where it stands:</p>\n<p><strong>Intensive</strong>, “himself,” “itself,” when it stands outside the article and its noun (in the predicate position), or alone in the nominative: <i>αὐτὸς ὁ στρατηγός</i> or <i>ὁ στρατηγὸς αὐτός</i>, “the general himself”<br><strong>“The same,”</strong> when it stands between the article and its noun (in the attributive position): <i>ὁ αὐτὸς στρατηγός</i>, “the same general”<br><strong>“Him,” “her,” “it,” “them,”</strong> in the oblique cases, standing alone: <i>πέμπω αὐτούς</i>, “I send them”</p>\n<p>So the place of a word with respect to the article changes its meaning, which is a resource Latin, having no article, does not have.</p>",
   "qp": {
    "id": "q-grc-autos",
    "variants": [
     {
      "prompt": "What does <i>ἡ αὐτὴ γυνή</i> mean?",
      "options": [
       "“the woman herself”",
       "“her woman”",
       "“the same woman”",
       "“this woman”"
      ],
      "answer": 2,
      "explain": "<i>Αὐτός</i> between the article and the noun, in the attributive position, means “the same.”"
     },
     {
      "prompt": "What does <i>αὐτὸς ὁ βασιλεύς</i> mean?",
      "options": [
       "“the same king”",
       "“the king himself”",
       "“his king”",
       "“that king”"
      ],
      "answer": 1,
      "explain": "<i>Αὐτός</i> outside the article and noun, in the predicate position, is intensive: “the king himself.”"
     },
     {
      "prompt": "In <i>ὁρῶμεν αὐτήν</i>, what does <i>αὐτήν</i> mean?",
      "options": [
       "“her”",
       "“herself”",
       "“the same”",
       "“this woman”"
      ],
      "answer": 0,
      "explain": "In the oblique cases, standing alone, <i>αὐτός</i> is the pronoun of the third person: “we see her.”"
     }
    ]
   }
  },
  {
   "id": "demonstratives",
   "title": "The demonstratives",
   "body": "<p>Greek has three demonstratives where English has two. <i>Οὗτος</i> (“this”) points to what is near or has just been mentioned; <i>ὅδε</i> (“this here”) points to what is present or is about to be mentioned; <i>ἐκεῖνος</i> (“that”) points to what is farther away. <i>Ὅδε, ἥδε, τόδε</i> is the article with the enclitic <i>-δε</i>, and <i>ἐκεῖνος, ἐκείνη, ἐκεῖνο</i> is declined like <i>αὐτός</i>. <i>Οὗτος</i> changes its stem between <i>ου</i> and <i>αυ</i>, and between the rough breathing and <i>τ</i>, as the article does:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">οὗτος</td> <td class=\"f\">αὕτη</td> <td class=\"f\">τοῦτο</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">τούτου</td> <td class=\"f\">ταύτης</td> <td class=\"f\">τούτου</td></tr>\n<tr><td>Dative</td> <td class=\"f\">τούτῳ</td> <td class=\"f\">ταύτῃ</td> <td class=\"f\">τούτῳ</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">τοῦτον</td> <td class=\"f\">ταύτην</td> <td class=\"f\">τοῦτο</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">οὗτοι</td> <td class=\"f\">αὗται</td> <td class=\"f\">ταῦτα</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">τούτων</td> <td class=\"f\">τούτων</td> <td class=\"f\">τούτων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">τούτοις</td> <td class=\"f\">ταύταις</td> <td class=\"f\">τούτοις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">τούτους</td> <td class=\"f\">ταύτᾱς</td> <td class=\"f\">ταῦτα</td></tr>\n</table></div>\n<p>A demonstrative used with a noun stands outside the article, in the predicate position, and the noun keeps its article: <i>οὗτος ὁ ἀνήρ</i> or <i>ὁ ἀνὴρ οὗτος</i>, “this man”; never <i>ὁ οὗτος ἀνήρ</i>.</p>",
   "qp": {
    "id": "q-grc-demonstratives",
    "variants": [
     {
      "prompt": "What is the genitive singular feminine of <i>οὗτος</i>?",
      "options": [
       "<i>τούτου</i>",
       "<i>αὕτης</i>",
       "<i>ταύτης</i>",
       "<i>ταύτῃ</i>"
      ],
      "answer": 2,
      "explain": "The feminine has the stem <i>ταυτ-</i> in the oblique cases: <i>ταύτης</i>. <i>Ταύτῃ</i> is the dative."
     },
     {
      "prompt": "How does Greek say “that city” with <i>ἐκεῖνος</i>?",
      "options": [
       "<i>ἡ ἐκείνη πόλις</i>",
       "<i>ἐκείνη ἡ πόλις</i>",
       "<i>ἐκείνη πόλις</i>",
       "<i>ἡ πόλις ἡ ἐκείνη</i>"
      ],
      "answer": 1,
      "explain": "A demonstrative stands outside the article, and the noun keeps its article: <i>ἐκείνη ἡ πόλις</i> or <i>ἡ πόλις ἐκείνη</i>."
     },
     {
      "prompt": "Which demonstrative points to what is about to be mentioned?",
      "options": [
       "<i>ὅδε</i>",
       "<i>οὗτος</i>",
       "<i>ἐκεῖνος</i>",
       "<i>αὐτός</i>"
      ],
      "answer": 0,
      "explain": "<i>Ὅδε</i> points to what is present or is about to be said; <i>οὗτος</i> usually to what has just been said."
     }
    ]
   }
  },
  {
   "id": "relative",
   "title": "The relative pronoun",
   "body": "<p>The Greek relative <i>ὅς, ἥ, ὅ</i> (“who,” “which”) looks like the article with an accent and the rough breathing in every form: <i>ὅς, ἥ, ὅ</i>; <i>οὗ, ἧς, οὗ</i>; <i>ᾧ, ᾗ, ᾧ</i>; <i>ὅν, ἥν, ὅ</i>; and in the plural <i>οἵ, αἵ, ἅ</i>; <i>ὧν</i>; <i>οἷς, αἷς, οἷς</i>; <i>οὕς, ἅς, ἅ</i>. As in Latin and English, it agrees with its antecedent in gender and number and takes its case from its own clause: <i>ὁ ἀνὴρ ὃν εἴδομεν</i>, “the man whom we saw.”</p>\n<p>Greek often lets the relative take the case of its antecedent when the antecedent is genitive or dative and the relative would be accusative. This is called <strong>attraction</strong>: <i>ἐκ τῶν πόλεων ὧν ἔχει</i>, “from the cities which he holds,” where the regular case would be <i>ἅς</i>, the object of <i>ἔχει</i>.</p>",
   "qp": {
    "id": "q-grc-relative",
    "variants": [
     {
      "prompt": "Choose the relative: <i>ἡ γυνὴ ___ εἴδομεν</i> (“the woman whom we saw”).",
      "options": [
       "<i>ἥ</i>",
       "<i>ἧς</i>",
       "<i>ἥν</i>",
       "<i>ὅν</i>"
      ],
      "answer": 2,
      "explain": "The relative agrees with <i>γυνή</i> (feminine singular) and is the object of <i>εἴδομεν</i> (accusative): <i>ἥν</i>."
     },
     {
      "prompt": "In <i>σὺν τοῖς ἵπποις οἷς ἔχομεν</i>, why is the relative <i>οἷς</i> dative?",
      "options": [
       "It is the indirect object of <i>ἔχομεν</i>",
       "It is attracted into the case of its antecedent",
       "<i>Σύν</i> governs it",
       "The relative is always dative after a plural"
      ],
      "answer": 1,
      "explain": "<i>Ἔχομεν</i> would take the accusative <i>οὕς</i>; the relative takes the dative of its antecedent <i>ἵπποις</i> by attraction."
     },
     {
      "prompt": "How does the relative <i>ἥ</i> differ in writing from the article <i>ἡ</i>?",
      "options": [
       "It has an accent",
       "It has a smooth breathing",
       "It has an iota subscript",
       "It does not differ"
      ],
      "answer": 0,
      "explain": "The article <i>ἡ</i> is a proclitic without an accent; the relative <i>ἥ</i> is accented."
     }
    ]
   }
  },
  {
   "id": "tis-reflexive",
   "title": "The interrogative, the indefinite, and the reflexive",
   "body": "<p>English “who?” and “someone” are different words, but Greek uses one word for both and tells them apart by the accent. The interrogative <i>τίς, τί</i> (“who?” “what?”) always has the acute on its first syllable and never changes it to the grave: <i>τίς ἦλθεν;</i> “who came?” The indefinite <i>τις, τι</i> (“someone,” “something,” “a certain”) is enclitic: <i>ἦλθέ τις</i>, “someone came”; <i>ἀνήρ τις</i>, “a certain man.” Both are declined alike: genitive <i>τίνος</i> (<i>τινός</i>), dative <i>τίνι</i> (<i>τινί</i>), accusative <i>τίνα, τί</i>; plural <i>τίνες, τίνα</i>; <i>τίνων</i>; <i>τίσι(ν)</i>; <i>τίνας, τίνα</i>.</p>\n<p>The reflexive pronouns are compounds of the personal pronouns with <i>αὐτός</i>, and they have no nominative: <i>ἐμαυτοῦ</i> (“of myself”), <i>σεαυτοῦ</i> or <i>σαυτοῦ</i> (“of yourself”), <i>ἑαυτοῦ</i> or <i>αὑτοῦ</i> (“of himself”); in the plural, <i>ἡμῶν αὐτῶν</i>, <i>ὑμῶν αὐτῶν</i>, and <i>ἑαυτῶν</i>. So <i>γνῶθι σεαυτόν</i> is “know yourself.”</p>",
   "qp": {
    "id": "q-grc-tis",
    "variants": [
     {
      "prompt": "What does <i>λέγει τι</i> mean?",
      "options": [
       "“What does he say?”",
       "“He says this”",
       "“He says something”",
       "“Who says it?”"
      ],
      "answer": 2,
      "explain": "The enclitic <i>τι</i> is the indefinite “something”; the interrogative would be accented, <i>τί λέγει;</i>"
     },
     {
      "prompt": "Which word asks “who?”",
      "options": [
       "<i>τις</i>",
       "<i>τίς</i>",
       "<i>ὅς</i>",
       "<i>αὐτός</i>"
      ],
      "answer": 1,
      "explain": "The interrogative <i>τίς</i> always keeps its acute; the unaccented <i>τις</i> is the indefinite."
     },
     {
      "prompt": "What is the accusative singular masculine of the reflexive of the third person?",
      "options": [
       "<i>ἑαυτόν</i>",
       "<i>αὐτόν</i>",
       "<i>ἐμαυτόν</i>",
       "<i>ἑαυτός</i>"
      ],
      "answer": 0,
      "explain": "The reflexive <i>ἑαυτοῦ</i> has no nominative; its accusative is <i>ἑαυτόν</i>. <i>Αὐτόν</i> is “him,” not “himself.”"
     }
    ]
   }
  }
 ]
};
