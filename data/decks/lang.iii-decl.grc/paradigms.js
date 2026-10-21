window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.grc/paradigms"] = {
 "id": "lang.iii-decl.grc/paradigms",
 "title": "Greek Paradigms",
 "sub": "The tables as Smyth prints them",
 "sources": "Smyth, <i>Greek Grammar</i>",
 "panels": [
  {
   "id": "paradigms-1",
   "title": "ὁ, ἡ, τό",
   "body": "<p><strong>ὁ, ἡ, τό</strong> (“the”), Smyth §332</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ὁ</td> <td class=\"f\">ἡ</td> <td class=\"f\">τό</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">τοῦ</td> <td class=\"f\">τῆς</td> <td class=\"f\">τοῦ</td></tr>\n<tr><td>Dative</td> <td class=\"f\">τῷ</td> <td class=\"f\">τῇ</td> <td class=\"f\">τῷ</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">τόν</td> <td class=\"f\">τήν</td> <td class=\"f\">τό</td></tr>\n<tr><th colspan=\"4\">Dual</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">τώ</td> <td class=\"f\">τώ</td> <td class=\"f\">τώ</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">τοῖν</td> <td class=\"f\">τοῖν</td> <td class=\"f\">τοῖν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">τοῖν</td> <td class=\"f\">τοῖν</td> <td class=\"f\">τοῖν</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">τώ</td> <td class=\"f\">τώ</td> <td class=\"f\">τώ</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">οἱ</td> <td class=\"f\">αἱ</td> <td class=\"f\">τά</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">τῶν</td> <td class=\"f\">τῶν</td> <td class=\"f\">τῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">τοῖς</td> <td class=\"f\">ταῖς</td> <td class=\"f\">τοῖς</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">τούς</td> <td class=\"f\">τᾱ́ς</td> <td class=\"f\">τά</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-article",
    "variants": [
     {
      "prompt": "Which form of the article goes with <i>ψυχήν</i> (accusative singular, feminine)?",
      "options": [
       "<i>τόν</i>",
       "<i>τῆς</i>",
       "<i>τήν</i>",
       "<i>τῇ</i>"
      ],
      "answer": 2,
      "explain": "The feminine accusative singular is <i>τήν</i>."
     },
     {
      "prompt": "Which form of the article goes with <i>λόγου</i> (genitive singular, masculine)?",
      "options": [
       "<i>τῷ</i>",
       "<i>τοῦ</i>",
       "<i>τῶν</i>",
       "<i>τόν</i>"
      ],
      "answer": 1,
      "explain": "The masculine genitive singular is <i>τοῦ</i>."
     },
     {
      "prompt": "Which form of the article is the neuter nominative plural?",
      "options": [
       "<i>τά</i>",
       "<i>τό</i>",
       "<i>αἱ</i>",
       "<i>οἱ</i>"
      ],
      "answer": 0,
      "explain": "The neuter plural nominative and accusative is <i>τά</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-2",
   "title": "χώρᾱ",
   "body": "<p><strong>χώρᾱ</strong> (“land”), Smyth §216</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">χώρᾱ</td> <td class=\"f\">χώρᾱ</td> <td class=\"f\">χῶραι</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">χώρᾱς</td> <td class=\"f\">χώραιν</td> <td class=\"f\">χωρῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">χώρᾳ</td> <td class=\"f\">χώραιν</td> <td class=\"f\">χώραις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">χώρᾱν</td> <td class=\"f\">χώρᾱ</td> <td class=\"f\">χώρᾱς</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">χώρᾱ</td> <td class=\"f\">χώρᾱ</td> <td class=\"f\">χῶραι</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-chora",
    "variants": [
     {
      "prompt": "<i>οἰκίᾱ</i> (“house”) is declined like <i>χώρᾱ</i>. What is its genitive singular?",
      "options": [
       "<i>οἰκίης</i>",
       "<i>οἰκίᾱς</i>",
       "<i>οἰκίου</i>",
       "<i>οἰκιῶν</i>"
      ],
      "answer": 1,
      "explain": "After <i>ε</i>, <i>ι</i>, or <i>ρ</i>, the first declension keeps long <i>ᾱ</i> in the singular: <i>οἰκίᾱς</i>."
     },
     {
      "prompt": "What is the dative singular of <i>οἰκίᾱ</i>?",
      "options": [
       "<i>οἰκίαι</i>",
       "<i>οἰκίῃ</i>",
       "<i>οἰκίᾳ</i>",
       "<i>οἰκίαν</i>"
      ],
      "answer": 2,
      "explain": "The dative singular has the iota subscript: <i>οἰκίᾳ</i>."
     },
     {
      "prompt": "Why does <i>χώρᾱ</i> keep <i>ᾱ</i> in the genitive singular?",
      "options": [
       "It is masculine",
       "It has a short ultima",
       "It is a neuter noun",
       "Its <i>α</i> follows <i>ρ</i>"
      ],
      "answer": 3,
      "explain": "After <i>ε</i>, <i>ι</i>, or <i>ρ</i> the long <i>ᾱ</i> is kept; elsewhere Attic has <i>η</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-3",
   "title": "νῑ́κη",
   "body": "<p><strong>νῑ́κη</strong> (“victory”), Smyth §216</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">νῑ́κη</td> <td class=\"f\">νῑ́κᾱ</td> <td class=\"f\">νῖκαι</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">νῑ́κης</td> <td class=\"f\">νῑ́καιν</td> <td class=\"f\">νῑκῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">νῑ́κῃ</td> <td class=\"f\">νῑ́καιν</td> <td class=\"f\">νῑ́καις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">νῑ́κην</td> <td class=\"f\">νῑ́κᾱ</td> <td class=\"f\">νῑ́κᾱς</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">νῑ́κη</td> <td class=\"f\">νῑ́κᾱ</td> <td class=\"f\">νῖκαι</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-nike",
    "variants": [
     {
      "prompt": "<i>ψυχή</i> (“soul”) is declined like <i>νῑ́κη</i>, but accented on the ultima. What is its genitive singular?",
      "options": [
       "<i>ψυχής</i>",
       "<i>ψυχῆς</i>",
       "<i>ψυχᾶς</i>",
       "<i>ψυχοῦ</i>"
      ],
      "answer": 1,
      "explain": "An oxytone of the first declension takes the circumflex in the genitive and dative: <i>ψυχῆς</i>, <i>ψυχῇ</i>."
     },
     {
      "prompt": "What is the nominative plural of <i>ψυχή</i>?",
      "options": [
       "<i>ψυχῆς</i>",
       "<i>ψυχοί</i>",
       "<i>ψυχαί</i>",
       "<i>ψυχά</i>"
      ],
      "answer": 2,
      "explain": "The first declension has <i>-αι</i> in the nominative plural."
     },
     {
      "prompt": "What is the genitive plural of every first-declension noun?",
      "options": [
       "<i>-ων</i> with the accent of the nominative",
       "<i>-ου</i>",
       "<i>-οις</i>",
       "<i>-ῶν</i>"
      ],
      "answer": 3,
      "explain": "The first declension always has the circumflex on <i>-ῶν</i> in the genitive plural."
     }
    ]
   }
  },
  {
   "id": "paradigms-4",
   "title": "θάλαττα",
   "body": "<p><strong>θάλαττα</strong> (“sea”), Smyth §216</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">θάλαττα</td> <td class=\"f\">θαλάττᾱ</td> <td class=\"f\">θάλατται</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">θαλάττης</td> <td class=\"f\">θαλάτταιν</td> <td class=\"f\">θαλαττῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">θαλάττῃ</td> <td class=\"f\">θαλάτταιν</td> <td class=\"f\">θαλάτταις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">θάλατταν</td> <td class=\"f\">θαλάττᾱ</td> <td class=\"f\">θαλάττᾱς</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">θάλαττα</td> <td class=\"f\">θαλάττᾱ</td> <td class=\"f\">θάλατται</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-5",
   "title": "μοῖρα",
   "body": "<p><strong>μοῖρα</strong> (“fate”), Smyth §216</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">μοῖρα</td> <td class=\"f\">μοίρᾱ</td> <td class=\"f\">μοῖραι</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">μοίρᾱς</td> <td class=\"f\">μοίραιν</td> <td class=\"f\">μοιρῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">μοίρᾳ</td> <td class=\"f\">μοίραιν</td> <td class=\"f\">μοίραις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">μοῖραν</td> <td class=\"f\">μοίρᾱ</td> <td class=\"f\">μοίρᾱς</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">μοῖρα</td> <td class=\"f\">μοίρᾱ</td> <td class=\"f\">μοῖραι</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-6",
   "title": "νεᾱνίᾱς",
   "body": "<p><strong>νεᾱνίᾱς</strong> (“young man”), Smyth §222</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">νεᾱνίᾱς</td> <td class=\"f\">νεᾱνίᾱ</td> <td class=\"f\">νεᾱνίαι</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">νεᾱνίου</td> <td class=\"f\">νεᾱνίαιν</td> <td class=\"f\">νεᾱνιῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">νεᾱνίᾳ</td> <td class=\"f\">νεᾱνίαιν</td> <td class=\"f\">νεᾱνίαις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">νεᾱνίᾱν</td> <td class=\"f\">νεᾱνίᾱ</td> <td class=\"f\">νεᾱνίᾱς</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">νεᾱνίᾱ</td> <td class=\"f\">νεᾱνίᾱ</td> <td class=\"f\">νεᾱνίαι</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-7",
   "title": "κριτής",
   "body": "<p><strong>κριτής</strong> (“judge”), Smyth §222</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">κριτής</td> <td class=\"f\">κριτᾱ́</td> <td class=\"f\">κριταί</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">κριτοῦ</td> <td class=\"f\">κριταῖν</td> <td class=\"f\">κριτῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">κριτῇ</td> <td class=\"f\">κριταῖν</td> <td class=\"f\">κριταῖς</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">κριτήν</td> <td class=\"f\">κριτᾱ́</td> <td class=\"f\">κριτᾱ́ς</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">κριτά</td> <td class=\"f\">κριτᾱ́</td> <td class=\"f\">κριταί</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-8",
   "title": "ἵππος",
   "body": "<p><strong>ἵππος</strong> (“horse”), Smyth §231</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἵππος</td> <td class=\"f\">ἵππω</td> <td class=\"f\">ἵπποι</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἵππου</td> <td class=\"f\">ἵπποιν</td> <td class=\"f\">ἵππων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἵππῳ</td> <td class=\"f\">ἵπποιν</td> <td class=\"f\">ἵπποις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἵππον</td> <td class=\"f\">ἵππω</td> <td class=\"f\">ἵππους</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἵππε</td> <td class=\"f\">ἵππω</td> <td class=\"f\">ἵπποι</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-hippos",
    "variants": [
     {
      "prompt": "<i>θεός</i> (“god”) is of the second declension. What is its genitive singular?",
      "options": [
       "<i>θεός</i>",
       "<i>θεοῦ</i>",
       "<i>θεῷ</i>",
       "<i>θεόν</i>"
      ],
      "answer": 1,
      "explain": "The genitive singular of the second declension is <i>-ου</i>, with the circumflex on an oxytone: <i>θεοῦ</i>."
     },
     {
      "prompt": "What is the accusative plural of <i>ποταμός</i> (“river”)?",
      "options": [
       "<i>ποταμοί</i>",
       "<i>ποταμοῖς</i>",
       "<i>ποταμούς</i>",
       "<i>ποταμῶν</i>"
      ],
      "answer": 2,
      "explain": "The accusative plural of the second declension ends in <i>-ους</i>."
     },
     {
      "prompt": "What is the vocative singular of <i>ἀδελφός</i> (“brother”)?",
      "options": [
       "<i>ἀδελφέ</i>",
       "<i>ἀδελφός</i>",
       "<i>ἀδελφοῦ</i>",
       "<i>ἄδελφε</i>"
      ],
      "answer": 3,
      "explain": "The vocative is in <i>-ε</i>, and <i>ἀδελφός</i> is one of the nouns that draw the accent back in the vocative: <i>ἄδελφε</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-9",
   "title": "ἄνθρωπος",
   "body": "<p><strong>ἄνθρωπος</strong> (“human being”), Smyth §231</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἄνθρωπος</td> <td class=\"f\">ἀνθρώπω</td> <td class=\"f\">ἄνθρωποι</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀνθρώπου</td> <td class=\"f\">ἀνθρώποιν</td> <td class=\"f\">ἀνθρώπων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀνθρώπῳ</td> <td class=\"f\">ἀνθρώποιν</td> <td class=\"f\">ἀνθρώποις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἄνθρωπον</td> <td class=\"f\">ἀνθρώπω</td> <td class=\"f\">ἀνθρώπους</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἄνθρωπε</td> <td class=\"f\">ἀνθρώπω</td> <td class=\"f\">ἄνθρωποι</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-10",
   "title": "ὁδός",
   "body": "<p><strong>ὁδός</strong> (“road”), Smyth §231</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ὁδός</td> <td class=\"f\">ὁδώ</td> <td class=\"f\">ὁδοί</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ὁδοῦ</td> <td class=\"f\">ὁδοῖν</td> <td class=\"f\">ὁδῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ὁδῷ</td> <td class=\"f\">ὁδοῖν</td> <td class=\"f\">ὁδοῖς</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ὁδόν</td> <td class=\"f\">ὁδώ</td> <td class=\"f\">ὁδούς</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ὁδέ</td> <td class=\"f\">ὁδώ</td> <td class=\"f\">ὁδοί</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-11",
   "title": "δῶρον",
   "body": "<p><strong>δῶρον</strong> (“gift”), Smyth §231</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">δῶρον</td> <td class=\"f\">δώρω</td> <td class=\"f\">δῶρα</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">δώρου</td> <td class=\"f\">δώροιν</td> <td class=\"f\">δώρων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">δώρῳ</td> <td class=\"f\">δώροιν</td> <td class=\"f\">δώροις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">δῶρον</td> <td class=\"f\">δώρω</td> <td class=\"f\">δῶρα</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">δῶρον</td> <td class=\"f\">δώρω</td> <td class=\"f\">δῶρα</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-doron",
    "variants": [
     {
      "prompt": "What is the genitive plural of <i>τέκνον</i> (“child”)?",
      "options": [
       "<i>τέκνων</i>",
       "<i>τέκνα</i>",
       "<i>τέκνοις</i>",
       "<i>τέκνου</i>"
      ],
      "answer": 0,
      "explain": "The genitive plural of the second declension is <i>-ων</i>."
     },
     {
      "prompt": "Which forms of a neuter noun are always alike?",
      "options": [
       "The genitive and dative",
       "The dative and accusative",
       "The nominative and genitive",
       "The nominative, accusative, and vocative"
      ],
      "answer": 3,
      "explain": "A neuter has one form for the nominative, accusative, and vocative in each number."
     },
     {
      "prompt": "What is the accusative plural of <i>τέκνον</i>?",
      "options": [
       "<i>τέκνους</i>",
       "<i>τέκνας</i>",
       "<i>τέκνα</i>",
       "<i>τέκνον</i>"
      ],
      "answer": 2,
      "explain": "A neuter plural nominative and accusative ends in <i>-α</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-12",
   "title": "φύλαξ",
   "body": "<p><strong>φύλαξ</strong> (“guard”), Smyth §256</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">φύλαξ</td> <td class=\"f\">φύλακε</td> <td class=\"f\">φύλακες</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">φύλακος</td> <td class=\"f\">φυλάκοιν</td> <td class=\"f\">φυλάκων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">φύλακι</td> <td class=\"f\">φυλάκοιν</td> <td class=\"f\">φύλαξι</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">φύλακα</td> <td class=\"f\">φύλακε</td> <td class=\"f\">φύλακας</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">φύλαξ</td> <td class=\"f\">φύλακε</td> <td class=\"f\">φύλακες</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-13",
   "title": "ἐλπίς",
   "body": "<p><strong>ἐλπίς</strong> (“hope”), Smyth §257</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἐλπίς</td> <td class=\"f\">ἐλπίδε</td> <td class=\"f\">ἐλπίδες</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἐλπίδος</td> <td class=\"f\">ἐλπίδοιν</td> <td class=\"f\">ἐλπίδων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἐλπίδι</td> <td class=\"f\">ἐλπίδοιν</td> <td class=\"f\">ἐλπίσι</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἐλπίδα</td> <td class=\"f\">ἐλπίδε</td> <td class=\"f\">ἐλπίδας</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἐλπί</td> <td class=\"f\">ἐλπίδε</td> <td class=\"f\">ἐλπίδες</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-14",
   "title": "σῶμα",
   "body": "<p><strong>σῶμα</strong> (“body”), Smyth §258</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">σῶμα</td> <td class=\"f\">σώματε</td> <td class=\"f\">σώματα</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">σώματος</td> <td class=\"f\">σωμάτοιν</td> <td class=\"f\">σωμάτων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">σώματι</td> <td class=\"f\">σωμάτοιν</td> <td class=\"f\">σώμασι</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">σῶμα</td> <td class=\"f\">σώματε</td> <td class=\"f\">σώματα</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">σῶμα</td> <td class=\"f\">σώματε</td> <td class=\"f\">σώματα</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-soma",
    "variants": [
     {
      "prompt": "<i>πρᾶγμα, πρᾱ́γματος, τό</i> (“deed”): what is the dative plural?",
      "options": [
       "<i>πρᾱ́γμασι(ν)</i>",
       "<i>πρᾱγμάτοις</i>",
       "<i>πρᾱ́γματι</i>",
       "<i>πρᾱγμάτων</i>"
      ],
      "answer": 0,
      "explain": "In the dative plural the <i>τ</i> of the stem is lost before <i>-σι</i>: <i>πρᾱ́γμασι(ν)</i>."
     },
     {
      "prompt": "What is the nominative plural of <i>στόμα</i> (“mouth”)?",
      "options": [
       "<i>στόμαι</i>",
       "<i>στομάτων</i>",
       "<i>στόμα</i>",
       "<i>στόματα</i>"
      ],
      "answer": 3,
      "explain": "A neuter of the third declension has <i>-α</i> on the stem in the plural: <i>στόματα</i>."
     },
     {
      "prompt": "Where is the stem of <i>σῶμα</i> seen?",
      "options": [
       "In the nominative <i>σῶμα</i>",
       "In the dative plural <i>σώμασι</i>",
       "In the genitive <i>σώματος</i>",
       "In the article <i>τό</i>"
      ],
      "answer": 2,
      "explain": "As in Latin, the genitive singular shows the stem: <i>σώματ-ος</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-15",
   "title": "πόλις",
   "body": "<p><strong>πόλις</strong> (“city”), Smyth §268</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">πόλις</td> <td class=\"f\">πόλει</td> <td class=\"f\">πόλεις</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">πόλεως</td> <td class=\"f\">πολέοιν</td> <td class=\"f\">πόλεων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">πόλει</td> <td class=\"f\">πολέοιν</td> <td class=\"f\">πόλεσι</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">πόλιν</td> <td class=\"f\">πόλει</td> <td class=\"f\">πόλεις</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">πόλι</td> <td class=\"f\">πόλει</td> <td class=\"f\">πόλεις</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-polis",
    "variants": [
     {
      "prompt": "<i>δύναμις</i> (“power”) is declined like <i>πόλις</i>. What is its genitive singular?",
      "options": [
       "<i>δυνάμιος</i>",
       "<i>δυνάμεος</i>",
       "<i>δυνάμιδος</i>",
       "<i>δυνάμεως</i>"
      ],
      "answer": 3,
      "explain": "Nouns in <i>-ις</i> of this kind have the genitive in <i>-εως</i> in Attic."
     },
     {
      "prompt": "What is the accusative singular of <i>τάξις</i> (“order”)?",
      "options": [
       "<i>τάξιν</i>",
       "<i>τάξεα</i>",
       "<i>τάξιδα</i>",
       "<i>τάξεως</i>"
      ],
      "answer": 0,
      "explain": "The accusative singular is <i>-ιν</i>, like <i>πόλιν</i>."
     },
     {
      "prompt": "What is the nominative plural of <i>πόλις</i>?",
      "options": [
       "<i>πόλιες</i>",
       "<i>πόλεις</i>",
       "<i>πόλεως</i>",
       "<i>πόλιδες</i>"
      ],
      "answer": 1,
      "explain": "The nominative plural is contracted: <i>πόλεις</i>, the same form as the accusative plural."
     }
    ]
   }
  },
  {
   "id": "paradigms-16",
   "title": "βασιλεύς",
   "body": "<p><strong>βασιλεύς</strong> (“king”), Smyth §275</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Singular</th> <th>Dual</th> <th>Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">βασιλεύς</td> <td class=\"f\">βασιλῆ</td> <td class=\"f\">βασιλῆς</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">βασιλέως</td> <td class=\"f\">βασιλέοιν</td> <td class=\"f\">βασιλέων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">βασιλεῖ</td> <td class=\"f\">βασιλέοιν</td> <td class=\"f\">βασιλεῦσι</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">βασιλέᾱ</td> <td class=\"f\">βασιλῆ</td> <td class=\"f\">βασιλέᾱς</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">βασιλεῦ</td> <td class=\"f\">βασιλῆ</td> <td class=\"f\">βασιλῆς</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-basileus",
    "variants": [
     {
      "prompt": "<i>ἱππεύς</i> (“horseman”) is declined like <i>βασιλεύς</i>. What is its genitive singular?",
      "options": [
       "<i>ἱππεῦς</i>",
       "<i>ἱππέος</i>",
       "<i>ἱππέως</i>",
       "<i>ἱππεύου</i>"
      ],
      "answer": 2,
      "explain": "Nouns in <i>-εύς</i> have the genitive singular in <i>-έως</i>."
     },
     {
      "prompt": "What is the vocative singular of <i>βασιλεύς</i>?",
      "options": [
       "<i>βασιλεύ</i>",
       "<i>βασιλεῦ</i>",
       "<i>βασιλέα</i>",
       "<i>βασιλεύς</i>"
      ],
      "answer": 1,
      "explain": "The vocative of nouns in <i>-εύς</i> is in <i>-εῦ</i>."
     },
     {
      "prompt": "What is the nominative plural of <i>ἱππεύς</i>?",
      "options": [
       "<i>ἱππῆς</i> or <i>ἱππεῖς</i>",
       "<i>ἱππεύοι</i>",
       "<i>ἱππέᾱς</i>",
       "<i>ἱππέων</i>"
      ],
      "answer": 0,
      "explain": "The nominative plural of nouns in <i>-εύς</i> is <i>-ῆς</i> in older Attic and <i>-εῖς</i> later."
     }
    ]
   }
  },
  {
   "id": "paradigms-17",
   "title": "ἀγαθός",
   "body": "<p><strong>ἀγαθός</strong> (“good”), Smyth §287</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἀγαθός</td> <td class=\"f\">ἀγαθή</td> <td class=\"f\">ἀγαθόν</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀγαθοῦ</td> <td class=\"f\">ἀγαθῆς</td> <td class=\"f\">ἀγαθοῦ</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀγαθῷ</td> <td class=\"f\">ἀγαθῇ</td> <td class=\"f\">ἀγαθῷ</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἀγαθόν</td> <td class=\"f\">ἀγαθήν</td> <td class=\"f\">ἀγαθόν</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἀγαθέ</td> <td class=\"f\">ἀγαθή</td> <td class=\"f\">ἀγαθόν</td></tr>\n<tr><th colspan=\"4\">Dual</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἀγαθώ</td> <td class=\"f\">ἀγαθᾱ́</td> <td class=\"f\">ἀγαθώ</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀγαθοῖν</td> <td class=\"f\">ἀγαθαῖν</td> <td class=\"f\">ἀγαθοῖν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀγαθοῖν</td> <td class=\"f\">ἀγαθαῖν</td> <td class=\"f\">ἀγαθοῖν</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἀγαθώ</td> <td class=\"f\">ἀγαθᾱ́</td> <td class=\"f\">ἀγαθώ</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἀγαθώ</td> <td class=\"f\">ἀγαθᾱ́</td> <td class=\"f\">ἀγαθώ</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἀγαθοί</td> <td class=\"f\">ἀγαθαί</td> <td class=\"f\">ἀγαθά</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀγαθῶν</td> <td class=\"f\">ἀγαθῶν</td> <td class=\"f\">ἀγαθῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀγαθοῖς</td> <td class=\"f\">ἀγαθαῖς</td> <td class=\"f\">ἀγαθοῖς</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἀγαθούς</td> <td class=\"f\">ἀγαθᾱ́ς</td> <td class=\"f\">ἀγαθά</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἀγαθοί</td> <td class=\"f\">ἀγαθαί</td> <td class=\"f\">ἀγαθά</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-agathos",
    "variants": [
     {
      "prompt": "Which form of <i>καλός</i> agrees with <i>τὴν ψυχήν</i>?",
      "options": [
       "<i>καλόν</i>",
       "<i>καλήν</i>",
       "<i>καλῆς</i>",
       "<i>καλάν</i>"
      ],
      "answer": 1,
      "explain": "The adjective agrees in gender, number, and case: feminine accusative singular <i>καλήν</i>."
     },
     {
      "prompt": "What is the neuter nominative plural of <i>καλός</i>?",
      "options": [
       "<i>καλοί</i>",
       "<i>καλαί</i>",
       "<i>καλά</i>",
       "<i>καλῶν</i>"
      ],
      "answer": 2,
      "explain": "The neuter plural nominative ends in <i>-α</i>: <i>καλά</i>."
     },
     {
      "prompt": "What is the masculine vocative singular of <i>καλός</i>?",
      "options": [
       "<i>καλός</i>",
       "<i>καλοῦ</i>",
       "<i>καλή</i>",
       "<i>καλέ</i>"
      ],
      "answer": 3,
      "explain": "The masculine vocative follows the second declension: <i>καλέ</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-18",
   "title": "μακρός",
   "body": "<p><strong>μακρός</strong> (“long”), Smyth §287</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">μακρός</td> <td class=\"f\">μακρά</td> <td class=\"f\">μακρόν</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">μακροῦ</td> <td class=\"f\">μακρᾶς</td> <td class=\"f\">μακροῦ</td></tr>\n<tr><td>Dative</td> <td class=\"f\">μακρῷ</td> <td class=\"f\">μακρᾷ</td> <td class=\"f\">μακρῷ</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">μακρόν</td> <td class=\"f\">μακράν</td> <td class=\"f\">μακρόν</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">μακρέ</td> <td class=\"f\">μακρά</td> <td class=\"f\">μακρόν</td></tr>\n<tr><th colspan=\"4\">Dual</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">μακρώ</td> <td class=\"f\">μακρά</td> <td class=\"f\">μακρώ</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">μακροῖν</td> <td class=\"f\">μακραῖν</td> <td class=\"f\">μακροῖν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">μακροῖν</td> <td class=\"f\">μακραῖν</td> <td class=\"f\">μακροῖν</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">μακρώ</td> <td class=\"f\">μακρά</td> <td class=\"f\">μακρώ</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">μακρώ</td> <td class=\"f\">μακρά</td> <td class=\"f\">μακρώ</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">μακροί</td> <td class=\"f\">μακραί</td> <td class=\"f\">μακρά</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">μακρῶν</td> <td class=\"f\">μακρῶν</td> <td class=\"f\">μακρῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">μακροῖς</td> <td class=\"f\">μακραῖς</td> <td class=\"f\">μακροῖς</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">μακρούς</td> <td class=\"f\">μακράς</td> <td class=\"f\">μακρά</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">μακροί</td> <td class=\"f\">μακραί</td> <td class=\"f\">μακρά</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-19",
   "title": "ἄξιος",
   "body": "<p><strong>ἄξιος</strong> (“worthy”), Smyth §287</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἄξιος</td> <td class=\"f\">ἀξίᾱ</td> <td class=\"f\">ἄξιον</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀξίου</td> <td class=\"f\">ἀξίᾱς</td> <td class=\"f\">ἀξίου</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀξίῳ</td> <td class=\"f\">ἀξίᾳ</td> <td class=\"f\">ἀξίῳ</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἄξιον</td> <td class=\"f\">ἀξίᾱν</td> <td class=\"f\">ἄξιον</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἄξιε</td> <td class=\"f\">ἀξίᾱ</td> <td class=\"f\">ἄξιον</td></tr>\n<tr><th colspan=\"4\">Dual</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἀξίω</td> <td class=\"f\">ἀξίᾱ</td> <td class=\"f\">ἀξίω</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀξίοιν</td> <td class=\"f\">ἀξίαιν</td> <td class=\"f\">ἀξίοιν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀξίοιν</td> <td class=\"f\">ἀξίαιν</td> <td class=\"f\">ἀξίοιν</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἀξίω</td> <td class=\"f\">ἀξίᾱ</td> <td class=\"f\">ἀξίω</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἀξίω</td> <td class=\"f\">ἀξίᾱ</td> <td class=\"f\">ἀξίω</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἄξιοι</td> <td class=\"f\">ἄξιαι</td> <td class=\"f\">ἄξια</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀξίων</td> <td class=\"f\">ἀξίων</td> <td class=\"f\">ἀξίων</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀξίοις</td> <td class=\"f\">ἀξίαις</td> <td class=\"f\">ἀξίοις</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἀξίους</td> <td class=\"f\">ἀξίᾱς</td> <td class=\"f\">ἄξια</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἄξιοι</td> <td class=\"f\">ἄξιαι</td> <td class=\"f\">ἄξια</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-20",
   "title": "σοφός",
   "body": "<p><strong>σοφός</strong> (“wise”), Smyth §287</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">σοφός</td> <td class=\"f\">σοφή</td> <td class=\"f\">σοφόν</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">σοφοῦ</td> <td class=\"f\">σοφῆς</td> <td class=\"f\">σοφοῦ</td></tr>\n<tr><td>Dative</td> <td class=\"f\">σοφῷ</td> <td class=\"f\">σοφῇ</td> <td class=\"f\">σοφῷ</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">σοφόν</td> <td class=\"f\">σοφήν</td> <td class=\"f\">σοφόν</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">σοφέ</td> <td class=\"f\">σοφή</td> <td class=\"f\">σοφόν</td></tr>\n<tr><th colspan=\"4\">Dual</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">σοφώ</td> <td class=\"f\">σοφᾱ́</td> <td class=\"f\">σοφώ</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">σοφοῖν</td> <td class=\"f\">σοφαῖν</td> <td class=\"f\">σοφοῖν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">σοφοῖν</td> <td class=\"f\">σοφαῖν</td> <td class=\"f\">σοφοῖν</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">σοφώ</td> <td class=\"f\">σοφᾱ́</td> <td class=\"f\">σοφώ</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">σοφώ</td> <td class=\"f\">σοφᾱ́</td> <td class=\"f\">σοφώ</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">σοφοί</td> <td class=\"f\">σοφαί</td> <td class=\"f\">σοφά</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">σοφῶν</td> <td class=\"f\">σοφῶν</td> <td class=\"f\">σοφῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">σοφοῖς</td> <td class=\"f\">σοφαῖς</td> <td class=\"f\">σοφοῖς</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">σοφούς</td> <td class=\"f\">σοφᾱ́ς</td> <td class=\"f\">σοφά</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">σοφοί</td> <td class=\"f\">σοφαί</td> <td class=\"f\">σοφά</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-21",
   "title": "κακός",
   "body": "<p><strong>κακός</strong> (“bad”), Smyth §287</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">κακός</td> <td class=\"f\">κακή</td> <td class=\"f\">κακόν</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">κακοῦ</td> <td class=\"f\">κακῆς</td> <td class=\"f\">κακοῦ</td></tr>\n<tr><td>Dative</td> <td class=\"f\">κακῷ</td> <td class=\"f\">κακῇ</td> <td class=\"f\">κακῷ</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">κακόν</td> <td class=\"f\">κακήν</td> <td class=\"f\">κακόν</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">κακέ</td> <td class=\"f\">κακή</td> <td class=\"f\">κακόν</td></tr>\n<tr><th colspan=\"4\">Dual</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">κακώ</td> <td class=\"f\">κακᾱ́</td> <td class=\"f\">κακώ</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">κακοῖν</td> <td class=\"f\">κακαῖν</td> <td class=\"f\">κακοῖν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">κακοῖν</td> <td class=\"f\">κακαῖν</td> <td class=\"f\">κακοῖν</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">κακώ</td> <td class=\"f\">κακᾱ́</td> <td class=\"f\">κακώ</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">κακώ</td> <td class=\"f\">κακᾱ́</td> <td class=\"f\">κακώ</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">κακοί</td> <td class=\"f\">κακαί</td> <td class=\"f\">κακά</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">κακῶν</td> <td class=\"f\">κακῶν</td> <td class=\"f\">κακῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">κακοῖς</td> <td class=\"f\">κακαῖς</td> <td class=\"f\">κακοῖς</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">κακούς</td> <td class=\"f\">κακᾱ́ς</td> <td class=\"f\">κακά</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">κακοί</td> <td class=\"f\">κακαί</td> <td class=\"f\">κακά</td></tr>\n</table></div>"
  },
  {
   "id": "paradigms-22",
   "title": "ἀληθής",
   "body": "<p><strong>ἀληθής</strong> (“true”), Smyth §292</p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἀληθής</td> <td class=\"f\">ἀληθής</td> <td class=\"f\">ἀληθές</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀληθοῦς</td> <td class=\"f\">ἀληθοῦς</td> <td class=\"f\">ἀληθοῦς</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀληθεῖ</td> <td class=\"f\">ἀληθεῖ</td> <td class=\"f\">ἀληθεῖ</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἀληθῆ</td> <td class=\"f\">ἀληθῆ</td> <td class=\"f\">ἀληθές</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἀληθές</td> <td class=\"f\">ἀληθές</td> <td class=\"f\">ἀληθές</td></tr>\n<tr><th colspan=\"4\">Dual</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἀληθεῖ</td> <td class=\"f\">ἀληθεῖ</td> <td class=\"f\">ἀληθεῖ</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀληθοῖν</td> <td class=\"f\">ἀληθοῖν</td> <td class=\"f\">ἀληθοῖν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀληθοῖν</td> <td class=\"f\">ἀληθοῖν</td> <td class=\"f\">ἀληθοῖν</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἀληθεῖ</td> <td class=\"f\">ἀληθεῖ</td> <td class=\"f\">ἀληθεῖ</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἀληθεῖ</td> <td class=\"f\">ἀληθεῖ</td> <td class=\"f\">ἀληθεῖ</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">ἀληθεῖς</td> <td class=\"f\">ἀληθεῖς</td> <td class=\"f\">ἀληθῆ</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">ἀληθῶν</td> <td class=\"f\">ἀληθῶν</td> <td class=\"f\">ἀληθῶν</td></tr>\n<tr><td>Dative</td> <td class=\"f\">ἀληθέσι</td> <td class=\"f\">ἀληθέσι</td> <td class=\"f\">ἀληθέσι</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">ἀληθεῖς</td> <td class=\"f\">ἀληθεῖς</td> <td class=\"f\">ἀληθῆ</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">ἀληθεῖς</td> <td class=\"f\">ἀληθεῖς</td> <td class=\"f\">ἀληθῆ</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-alethes",
    "variants": [
     {
      "prompt": "<i>σαφής, σαφές</i> (“clear”) is declined like <i>ἀληθής</i>. What is its neuter nominative singular?",
      "options": [
       "<i>σαφές</i>",
       "<i>σαφόν</i>",
       "<i>σαφῆ</i>",
       "<i>σαφής</i>"
      ],
      "answer": 0,
      "explain": "Adjectives of this kind have one form for the masculine and feminine and the neuter in <i>-ές</i>."
     },
     {
      "prompt": "What is the genitive singular of <i>σαφής</i>?",
      "options": [
       "<i>σαφέος</i>",
       "<i>σαφῆς</i>",
       "<i>σαφοῦ</i>",
       "<i>σαφοῦς</i>"
      ],
      "answer": 3,
      "explain": "The stem <i>σαφεσ-</i> loses its <i>σ</i> between vowels and contracts: <i>σαφέος</i>, <i>σαφοῦς</i>."
     },
     {
      "prompt": "How many sets of endings has <i>ἀληθής</i>?",
      "options": [
       "Three, one for each gender",
       "One for all three genders",
       "Two: one for masculine and feminine, one for neuter",
       "Four, counting the dual"
      ],
      "answer": 2,
      "explain": "<i>Ἀληθής</i> is an adjective of two endings."
     }
    ]
   }
  },
  {
   "id": "paradigms-23",
   "title": "λῡ́ω",
   "body": "<p><strong>λῡ́ω</strong> (“I loose”), Smyth §383</p><p><em>Active</em></p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th>Imperfect</th> <th>Future</th> <th>Aorist</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">λῡ́ω</td> <td class=\"f\">ἔλῡον</td> <td class=\"f\">λῡ́σω</td> <td class=\"f\">ἔλῡσα</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">λῡ́εις</td> <td class=\"f\">ἔλῡες</td> <td class=\"f\">λῡ́σεις</td> <td class=\"f\">ἔλῡσας</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">λῡ́ει</td> <td class=\"f\">ἔλῡε</td> <td class=\"f\">λῡ́σει</td> <td class=\"f\">ἔλῡσε</td></tr>\n<tr><td>2nd dual</td> <td class=\"f\">λῡ́ετον</td> <td class=\"f\">ἐλῡ́ετον</td> <td class=\"f\">λῡ́σετον</td> <td class=\"f\">ἐλῡ́σατον</td></tr>\n<tr><td>3rd dual</td> <td class=\"f\">λῡ́ετον</td> <td class=\"f\">ἐλῡέτην</td> <td class=\"f\">λῡ́σετον</td> <td class=\"f\">ἐλῡσάτην</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">λῡ́ομεν</td> <td class=\"f\">ἐλῡ́ομεν</td> <td class=\"f\">λῡ́σομεν</td> <td class=\"f\">ἐλῡ́σαμεν</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">λῡ́ετε</td> <td class=\"f\">ἐλῡ́ετε</td> <td class=\"f\">λῡ́σετε</td> <td class=\"f\">ἐλῡ́σατε</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">λῡ́ουσι</td> <td class=\"f\">ἔλῡον</td> <td class=\"f\">λῡ́σουσι</td> <td class=\"f\">ἔλῡσαν</td></tr>\n</table></div><p><em>Middle and passive</em></p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">λῡ́ομαι</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">λῡ́ῃ or λῡ́ει</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">λῡ́εται</td></tr>\n<tr><td>2nd dual</td> <td class=\"f\">λῡ́εσθον</td></tr>\n<tr><td>3rd dual</td> <td class=\"f\">λῡ́εσθον</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">λῡόμεθα</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">λῡ́εσθε</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">λῡ́ονται</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-luo",
    "variants": [
     {
      "prompt": "<i>θηρεύω</i> (“hunt”) is conjugated like <i>λῡ́ω</i>. What is its third person plural imperfect active?",
      "options": [
       "<i>ἐθήρευον</i>",
       "<i>ἐθήρευσαν</i>",
       "<i>θηρεύουσι</i>",
       "<i>ἐθηρεύετε</i>"
      ],
      "answer": 0,
      "explain": "The imperfect has <i>-ον</i> in the third person plural, like <i>ἔλῡον</i>."
     },
     {
      "prompt": "What is the first person plural future active of <i>θηρεύω</i>?",
      "options": [
       "<i>ἐθηρεύσαμεν</i>",
       "<i>θηρεύομεν</i>",
       "<i>θηρεύσαμεν</i>",
       "<i>θηρεύσομεν</i>"
      ],
      "answer": 3,
      "explain": "The future adds <i>σ</i> to the present endings: <i>θηρεύσομεν</i>."
     },
     {
      "prompt": "Which form of <i>θηρεύω</i> is the present middle, third person plural?",
      "options": [
       "<i>θηρεύουσι</i>",
       "<i>ἐθηρεύοντο</i>",
       "<i>θηρεύονται</i>",
       "<i>θηρεύσονται</i>"
      ],
      "answer": 2,
      "explain": "The present middle has <i>-ονται</i>, like <i>λῡ́ονται</i>."
     }
    ]
   }
  },
  {
   "id": "paradigms-24",
   "title": "εἰμί",
   "body": "<p><strong>εἰμί</strong> (“I am”), Smyth §768</p><p><em>Active</em></p><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Present</th> <th>Imperfect</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">εἰμί</td> <td class=\"f\">ἦ or ἦν</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">εἶ</td> <td class=\"f\">ἦσθα</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">ἐστί</td> <td class=\"f\">ἦν</td></tr>\n<tr><td>2nd dual</td> <td class=\"f\">ἐστόν</td> <td class=\"f\">ἤστον</td></tr>\n<tr><td>3rd dual</td> <td class=\"f\">ἐστόν</td> <td class=\"f\">ἤστην</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">ἐσμέν</td> <td class=\"f\">ἦμεν</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">ἐστέ</td> <td class=\"f\">ἦτε or ἦστε</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">εἰσί</td> <td class=\"f\">ἦσαν</td></tr>\n</table></div><div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Future, middle in form</th></tr>\n<tr><td>1st singular</td> <td class=\"f\">ἔσομαι</td></tr>\n<tr><td>2nd singular</td> <td class=\"f\">ἔσῃ or ἔσει</td></tr>\n<tr><td>3rd singular</td> <td class=\"f\">ἔσται</td></tr>\n<tr><td>2nd dual</td> <td class=\"f\">ἔσεσθον</td></tr>\n<tr><td>3rd dual</td> <td class=\"f\">ἔσεσθον</td></tr>\n<tr><td>1st plural</td> <td class=\"f\">ἐσόμεθα</td></tr>\n<tr><td>2nd plural</td> <td class=\"f\">ἔσεσθε</td></tr>\n<tr><td>3rd plural</td> <td class=\"f\">ἔσονται</td></tr>\n</table></div>",
   "qp": {
    "id": "q-grc-par-eimi",
    "variants": [
     {
      "prompt": "What is the first person plural present of <i>εἰμί</i>?",
      "options": [
       "<i>ἐσμέν</i>",
       "<i>ἦμεν</i>",
       "<i>ἐσόμεθα</i>",
       "<i>ἐστέ</i>"
      ],
      "answer": 0,
      "explain": "<i>Εἰμί, εἶ, ἐστί, ἐσμέν, ἐστέ, εἰσί</i>."
     },
     {
      "prompt": "In what form is the future of <i>εἰμί</i>?",
      "options": [
       "Active, <i>ἔσω</i>",
       "Passive, <i>ἐσθήσομαι</i>",
       "It has no future",
       "Middle, <i>ἔσομαι</i>"
      ],
      "answer": 3,
      "explain": "The future of <i>εἰμί</i> is middle in form: <i>ἔσομαι</i>."
     },
     {
      "prompt": "What is the second person singular imperfect of <i>εἰμί</i>?",
      "options": [
       "<i>ἦς</i>",
       "<i>εἶ</i>",
       "<i>ἦσθα</i>",
       "<i>ἦτε</i>"
      ],
      "answer": 2,
      "explain": "The imperfect is <i>ἦ</i> or <i>ἦν</i>, <i>ἦσθα</i>, <i>ἦν</i>; <i>εἶ</i> is present."
     }
    ]
   }
  }
 ]
};
