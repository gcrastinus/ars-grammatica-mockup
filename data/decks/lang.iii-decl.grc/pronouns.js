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
   "body": "<p>As in Latin, the ending of a Greek verb already shows the person, so <i lang=\"grc\">γράφω</i> is “I write,” and the nominative pronoun is used only for emphasis or contrast: <i lang=\"grc\">ἐγὼ μὲν γράφω, σὺ δὲ οὔ</i>, “<i lang=\"grc\">I</i> write, but <i lang=\"grc\">you</i> do not.” The pronouns of the first and second persons are:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>First person</th> <th>Second person</th></tr>\n<tr><th colspan=\"3\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἐγώ</td> <td class=\"f\">σύ</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἐμοῦ, μου</td> <td class=\"f\">σοῦ, σου</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἐμοί, μοι</td> <td class=\"f\">σοί, σοι</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἐμέ, με</td> <td class=\"f\">σέ, σε</td></tr>\n<tr><th colspan=\"3\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἡμεῖς</td> <td class=\"f\">ὑμεῖς</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἡμῶν</td> <td class=\"f\">ὑμῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἡμῖν</td> <td class=\"f\">ὑμῖν</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἡμᾶς</td> <td class=\"f\">ὑμᾶς</td></tr>\n</table></div>\n<p>The shorter forms <i lang=\"grc\">μου</i>, <i lang=\"grc\">μοι</i>, <i lang=\"grc\">με</i> and <i lang=\"grc\">σου</i>, <i lang=\"grc\">σοι</i>, <i lang=\"grc\">σε</i> are enclitic, that is, they lean on the word before them and give up their own accent; they are used when the pronoun is not emphatic. Attic prose has no personal pronoun of the third person in ordinary use: for “him,” “her,” “it,” and “them,” it uses the oblique cases of <i lang=\"grc\">αὐτός</i>, and for an emphatic “he” it uses a demonstrative.</p>",
   "qp": {
    "id": "q-grc-personal",
    "variants": [
     {
      "prompt": "What is the dative plural of <i lang=\"grc\">σύ</i>?",
      "options": [
       "<i lang=\"grc\">ἡμῖν</i>",
       "<i lang=\"grc\">ὑμᾶς</i>",
       "<i lang=\"grc\">ὑμῖν</i>",
       "<i lang=\"grc\">σοί</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"grc\">Ὑμῖν</i> is the dative plural of the second person; <i lang=\"grc\">ἡμῖν</i> is the first person, and <i lang=\"grc\">ὑμᾶς</i> the accusative."
     },
     {
      "prompt": "When is <i lang=\"grc\">με</i> used rather than <i lang=\"grc\">ἐμέ</i>?",
      "options": [
       "When the pronoun is plural",
       "When the pronoun is not emphatic",
       "After a preposition",
       "When it is the subject"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">Με</i> is the enclitic form, used without emphasis; <i lang=\"grc\">ἐμέ</i> is the emphatic form, used also after prepositions."
     },
     {
      "prompt": "How does Attic prose say “I saw him”?",
      "options": [
       "<i lang=\"grc\">εἶδον αὐτόν</i>",
       "<i lang=\"grc\">εἶδον ἐγώ</i>",
       "<i lang=\"grc\">εἶδον σέ</i>",
       "<i lang=\"grc\">εἶδον αὐτός</i>"
      ],
      "answer": 0,
      "explain": "For “him” Attic uses the oblique cases of <i lang=\"grc\">αὐτός</i>: <i lang=\"grc\">αὐτόν</i>. The nominative <i lang=\"grc\">αὐτός</i> means “himself.”"
     }
    ]
   }
  },
  {
   "id": "autos",
   "title": "The three uses of <i lang=\"grc\">αὐτός</i>",
   "body": "<p>English “himself” and “the same” are different words, but Greek uses one, <i lang=\"grc\">αὐτός, αὐτή, αὐτό</i>, declined like <i lang=\"grc\">ἀγαθός</i> except that the neuter is <i lang=\"grc\">αὐτό</i>. Its sense depends on where it stands:</p>\n<p><strong>Intensive</strong>, “himself,” “itself,” when it stands outside the article and its noun (in the predicate position), or alone in the nominative: <i lang=\"grc\">αὐτὸς ὁ στρατηγός</i> or <i lang=\"grc\">ὁ στρατηγὸς αὐτός</i>, “the general himself”<br><strong>“The same,”</strong> when it stands between the article and its noun (in the attributive position): <i lang=\"grc\">ὁ αὐτὸς στρατηγός</i>, “the same general”<br><strong>“Him,” “her,” “it,” “them,”</strong> in the oblique cases, standing alone: <i lang=\"grc\">πέμπω αὐτούς</i>, “I send them”</p>\n<p>So the place of a word with respect to the article changes its meaning, which is a resource Latin, having no article, does not have.</p>",
   "qp": {
    "id": "q-grc-autos",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">ἡ αὐτὴ γυνή</i> mean?",
      "options": [
       "“the woman herself”",
       "“her woman”",
       "“the same woman”",
       "“this woman”"
      ],
      "answer": 2,
      "explain": "<i lang=\"grc\">Αὐτός</i> between the article and the noun, in the attributive position, means “the same.”"
     },
     {
      "prompt": "What does <i lang=\"grc\">αὐτὸς ὁ βασιλεύς</i> mean?",
      "options": [
       "“the same king”",
       "“the king himself”",
       "“his king”",
       "“that king”"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">Αὐτός</i> outside the article and noun, in the predicate position, is intensive: “the king himself.”"
     },
     {
      "prompt": "In <i lang=\"grc\">ὁρῶμεν αὐτήν</i>, what does <i lang=\"grc\">αὐτήν</i> mean?",
      "options": [
       "“her”",
       "“herself”",
       "“the same”",
       "“this woman”"
      ],
      "answer": 0,
      "explain": "In the oblique cases, standing alone, <i lang=\"grc\">αὐτός</i> is the pronoun of the third person: “we see her.”"
     }
    ]
   }
  },
  {
   "id": "demonstratives",
   "title": "The demonstratives",
   "body": "<p>Greek has three demonstratives where English has two. <i lang=\"grc\">Οὗτος</i> (“this”) points to what is near or has just been mentioned; <i lang=\"grc\">ὅδε</i> (“this here”) points to what is present or is about to be mentioned; <i lang=\"grc\">ἐκεῖνος</i> (“that”) points to what is farther away. <i lang=\"grc\">Ὅδε, ἥδε, τόδε</i> is the article with the enclitic <i lang=\"grc\">-δε</i>, and <i lang=\"grc\">ἐκεῖνος, ἐκείνη, ἐκεῖνο</i> is declined like <i lang=\"grc\">αὐτός</i>. <i lang=\"grc\">Οὗτος</i> changes its stem between <i lang=\"grc\">ου</i> and <i lang=\"grc\">αυ</i>, and between the rough breathing and <i lang=\"grc\">τ</i>, as the article does:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">οὗτος</td> <td class=\"f\">αὕτη</td> <td class=\"f\">τοῦτο</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">τούτου</td> <td class=\"f\">ταύτης</td> <td class=\"f\">τούτου</td></tr>\n<tr><td>Dative</td> <td class=\"f\">τούτῳ</td> <td class=\"f\">ταύτῃ</td> <td class=\"f\">τούτῳ</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">τοῦτον</td> <td class=\"f\">ταύτην</td> <td class=\"f\">τοῦτο</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">οὗτοι</td> <td class=\"f\">αὗται</td> <td class=\"f\">ταῦτα</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">τούτων</td> <td class=\"f\">τούτων</td> <td class=\"f\">τούτων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">τούτοις</td> <td class=\"f\">ταύταις</td> <td class=\"f\">τούτοις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">τούτους</td> <td class=\"f\">ταύτᾱς</td> <td class=\"f\">ταῦτα</td></tr>\n</table></div>\n<p>A demonstrative used with a noun stands outside the article, in the predicate position, and the noun keeps its article: <i lang=\"grc\">οὗτος ὁ ἀνήρ</i> or <i lang=\"grc\">ὁ ἀνὴρ οὗτος</i>, “this man”; never <i lang=\"grc\">ὁ οὗτος ἀνήρ</i>.</p>",
   "qp": {
    "id": "q-grc-demonstratives",
    "variants": [
     {
      "prompt": "What is the genitive singular feminine of <i lang=\"grc\">οὗτος</i>?",
      "options": [
       "<i lang=\"grc\">τούτου</i>",
       "<i lang=\"grc\">αὕτης</i>",
       "<i lang=\"grc\">ταύτης</i>",
       "<i lang=\"grc\">ταύτῃ</i>"
      ],
      "answer": 2,
      "explain": "The feminine has the stem <i lang=\"grc\">ταυτ-</i> in the oblique cases: <i lang=\"grc\">ταύτης</i>. <i lang=\"grc\">Ταύτῃ</i> is the dative."
     },
     {
      "prompt": "How does Greek say “that city” with <i lang=\"grc\">ἐκεῖνος</i>?",
      "options": [
       "<i lang=\"grc\">ἡ ἐκείνη πόλις</i>",
       "<i lang=\"grc\">ἐκείνη ἡ πόλις</i>",
       "<i lang=\"grc\">ἐκείνη πόλις</i>",
       "<i lang=\"grc\">ἡ πόλις ἡ ἐκείνη</i>"
      ],
      "answer": 1,
      "explain": "A demonstrative stands outside the article, and the noun keeps its article: <i lang=\"grc\">ἐκείνη ἡ πόλις</i> or <i lang=\"grc\">ἡ πόλις ἐκείνη</i>."
     },
     {
      "prompt": "Which demonstrative points to what is about to be mentioned?",
      "options": [
       "<i lang=\"grc\">ὅδε</i>",
       "<i lang=\"grc\">οὗτος</i>",
       "<i lang=\"grc\">ἐκεῖνος</i>",
       "<i lang=\"grc\">αὐτός</i>"
      ],
      "answer": 0,
      "explain": "<i lang=\"grc\">Ὅδε</i> points to what is present or is about to be said; <i lang=\"grc\">οὗτος</i> usually to what has just been said."
     }
    ]
   }
  },
  {
   "id": "relative",
   "title": "The relative pronoun",
   "body": "<p>The Greek relative <i lang=\"grc\">ὅς, ἥ, ὅ</i> (“who,” “which”) looks like the article with an accent and the rough breathing in every form: <i lang=\"grc\">ὅς, ἥ, ὅ</i>; <i lang=\"grc\">οὗ, ἧς, οὗ</i>; <i lang=\"grc\">ᾧ, ᾗ, ᾧ</i>; <i lang=\"grc\">ὅν, ἥν, ὅ</i>; and in the plural <i lang=\"grc\">οἵ, αἵ, ἅ</i>; <i lang=\"grc\">ὧν</i>; <i lang=\"grc\">οἷς, αἷς, οἷς</i>; <i lang=\"grc\">οὕς, ἅς, ἅ</i>. As in Latin and English, it agrees with its antecedent in gender and number and takes its case from its own clause: <i lang=\"grc\">ὁ ἀνὴρ ὃν εἴδομεν</i>, “the man whom we saw.”</p>\n<p>Greek often lets the relative take the case of its antecedent when the antecedent is genitive or dative and the relative would be accusative. This is called <strong>attraction</strong>: <i lang=\"grc\">ἐκ τῶν πόλεων ὧν ἔχει</i>, “from the cities which he holds,” where the regular case would be <i lang=\"grc\">ἅς</i>, the object of <i lang=\"grc\">ἔχει</i>.</p>",
   "qp": {
    "id": "q-grc-relative",
    "variants": [
     {
      "prompt": "Choose the relative: <i lang=\"grc\">ἡ γυνὴ ___ εἴδομεν</i> (“the woman whom we saw”).",
      "options": [
       "<i lang=\"grc\">ἥ</i>",
       "<i lang=\"grc\">ἧς</i>",
       "<i lang=\"grc\">ἥν</i>",
       "<i lang=\"grc\">ὅν</i>"
      ],
      "answer": 2,
      "explain": "The relative agrees with <i lang=\"grc\">γυνή</i> (feminine singular) and is the object of <i lang=\"grc\">εἴδομεν</i> (accusative): <i lang=\"grc\">ἥν</i>."
     },
     {
      "prompt": "In <i lang=\"grc\">σὺν τοῖς ἵπποις οἷς ἔχομεν</i>, why is the relative <i lang=\"grc\">οἷς</i> dative?",
      "options": [
       "It is the indirect object of <i lang=\"grc\">ἔχομεν</i>",
       "It is attracted into the case of its antecedent",
       "<i lang=\"grc\">Σύν</i> governs it",
       "The relative is always dative after a plural"
      ],
      "answer": 1,
      "explain": "<i lang=\"grc\">Ἔχομεν</i> would take the accusative <i lang=\"grc\">οὕς</i>; the relative takes the dative of its antecedent <i lang=\"grc\">ἵπποις</i> by attraction."
     },
     {
      "prompt": "How does the relative <i lang=\"grc\">ἥ</i> differ in writing from the article <i lang=\"grc\">ἡ</i>?",
      "options": [
       "It has an accent",
       "It has a smooth breathing",
       "It has an iota subscript",
       "It does not differ"
      ],
      "answer": 0,
      "explain": "The article <i lang=\"grc\">ἡ</i> is a proclitic without an accent; the relative <i lang=\"grc\">ἥ</i> is accented."
     }
    ]
   }
  },
  {
   "id": "tis-reflexive",
   "title": "The interrogative, the indefinite, and the reflexive",
   "body": "<p>English “who?” and “someone” are different words, but Greek uses one word for both and tells them apart by the accent. The interrogative <i lang=\"grc\">τίς, τί</i> (“who?” “what?”) always has the acute on its first syllable and never changes it to the grave: <i lang=\"grc\">τίς ἦλθεν;</i> “who came?” The indefinite <i lang=\"grc\">τις, τι</i> (“someone,” “something,” “a certain”) is enclitic: <i lang=\"grc\">ἦλθέ τις</i>, “someone came”; <i lang=\"grc\">ἀνήρ τις</i>, “a certain man.” Both are declined alike: genitive <i lang=\"grc\">τίνος</i> (<i lang=\"grc\">τινός</i>), dative <i lang=\"grc\">τίνι</i> (<i lang=\"grc\">τινί</i>), accusative <i lang=\"grc\">τίνα, τί</i>; plural <i lang=\"grc\">τίνες, τίνα</i>; <i lang=\"grc\">τίνων</i>; <i lang=\"grc\">τίσι(ν)</i>; <i lang=\"grc\">τίνας, τίνα</i>.</p>\n<p>The reflexive pronouns are compounds of the personal pronouns with <i lang=\"grc\">αὐτός</i>, and they have no nominative: <i lang=\"grc\">ἐμαυτοῦ</i> (“of myself”), <i lang=\"grc\">σεαυτοῦ</i> or <i lang=\"grc\">σαυτοῦ</i> (“of yourself”), <i lang=\"grc\">ἑαυτοῦ</i> or <i lang=\"grc\">αὑτοῦ</i> (“of himself”); in the plural, <i lang=\"grc\">ἡμῶν αὐτῶν</i>, <i lang=\"grc\">ὑμῶν αὐτῶν</i>, and <i lang=\"grc\">ἑαυτῶν</i>. So <i lang=\"grc\">γνῶθι σεαυτόν</i> is “know yourself.”</p>",
   "qp": {
    "id": "q-grc-tis",
    "variants": [
     {
      "prompt": "What does <i lang=\"grc\">λέγει τι</i> mean?",
      "options": [
       "“What does he say?”",
       "“He says this”",
       "“He says something”",
       "“Who says it?”"
      ],
      "answer": 2,
      "explain": "The enclitic <i lang=\"grc\">τι</i> is the indefinite “something”; the interrogative would be accented, <i lang=\"grc\">τί λέγει;</i>"
     },
     {
      "prompt": "Which word asks “who?”",
      "options": [
       "<i lang=\"grc\">τις</i>",
       "<i lang=\"grc\">τίς</i>",
       "<i lang=\"grc\">ὅς</i>",
       "<i lang=\"grc\">αὐτός</i>"
      ],
      "answer": 1,
      "explain": "The interrogative <i lang=\"grc\">τίς</i> always keeps its acute; the unaccented <i lang=\"grc\">τις</i> is the indefinite."
     },
     {
      "prompt": "What is the accusative singular masculine of the reflexive of the third person?",
      "options": [
       "<i lang=\"grc\">ἑαυτόν</i>",
       "<i lang=\"grc\">αὐτόν</i>",
       "<i lang=\"grc\">ἐμαυτόν</i>",
       "<i lang=\"grc\">ἑαυτός</i>"
      ],
      "answer": 0,
      "explain": "The reflexive <i lang=\"grc\">ἑαυτοῦ</i> has no nominative; its accusative is <i lang=\"grc\">ἑαυτόν</i>. <i lang=\"grc\">Αὐτόν</i> is “him,” not “himself.”"
     }
    ]
   }
  }
 ]
};
