window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.la/noun"] = {
 "id": "lang.iii-decl.la/noun",
 "title": "The Latin Noun",
 "sub": "The five declensions, and how to read an ending",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "noun-1",
   "title": "Declension",
   "body": "<p>The Latin nouns <em>puella</em> (“girl”) and <em>rēx</em> (“king”) do not take the same endings: “of the girl” is <em>puellae</em>, whereas “of the king” is <em>rēgis</em>. A <strong>declension</strong> is a class of nouns that share one set of endings. Latin has five declensions, and the declension of a noun is known from its genitive singular, which the dictionary gives after the nominative: <em>puella, puellae</em>; <em>dominus, dominī</em>; <em>rēx, rēgis</em>; <em>manus, manūs</em>; <em>rēs, reī</em>.</p>\n<p>The genitive singular also gives the stem, that is, the part of the word to which the endings are added. Without its ending <em>-is</em>, <em>rēgis</em> leaves the stem <em>rēg-</em>, and so the other cases are <em>rēgī, rēgem, rēge</em>. The nominative singular often does not show the stem, especially in the third declension, and so a noun is learned with both forms.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Declension</th> <th>Genitive singular</th> <th>Examples</th></tr>\n<tr><td>First</td> <td class=\"f\">-ae</td> <td class=\"f\">puella, puellae</td></tr>\n<tr><td>Second</td> <td class=\"f\">-ī</td> <td class=\"f\">dominus, dominī; bellum, bellī</td></tr>\n<tr><td>Third</td> <td class=\"f\">-is</td> <td class=\"f\">rēx, rēgis; corpus, corporis</td></tr>\n<tr><td>Fourth</td> <td class=\"f\">-ūs</td> <td class=\"f\">manus, manūs; cornū, cornūs</td></tr>\n<tr><td>Fifth</td> <td class=\"f\">-ēī or -eī</td> <td class=\"f\">diēs, diēī; rēs, reī</td></tr>\n</table></div>",
   "qp": {
    "id": "q-la-noun-declension",
    "variants": [
     {
      "prompt": "From which form is the declension of a noun known?",
      "options": [
       "The genitive singular",
       "The nominative singular",
       "The ablative plural",
       "The accusative singular"
      ],
      "answer": 0,
      "explain": "The dictionary gives the genitive singular after the nominative, and its ending shows the declension: <em>-ae</em>, <em>-ī</em>, <em>-is</em>, <em>-ūs</em>, <em>-ēī</em> or <em>-eī</em>."
     },
     {
      "prompt": "<em>Mīles, mīlitis</em> (“soldier”): what is the stem?",
      "options": [
       "<em>mīles-</em>",
       "<em>mīl-</em>",
       "<em>mīliti-</em>",
       "<em>mīlit-</em>"
      ],
      "answer": 3,
      "explain": "The stem is the genitive singular without its ending: <em>mīlit-is</em>, so <em>mīlit-</em>, and the other cases are <em>mīlitī</em>, <em>mīlitem</em>, <em>mīlite</em>."
     },
     {
      "prompt": "<em>Fidēs, fideī</em> (“faith”): which declension?",
      "options": [
       "Third",
       "Fourth",
       "Fifth",
       "Second"
      ],
      "answer": 2,
      "explain": "The genitive in <em>-eī</em> after a consonant marks the fifth declension, like <em>rēs, reī</em>."
     }
    ]
   }
  },
  {
   "id": "noun-2",
   "title": "The first and second declensions",
   "body": "<p>The first declension has stems in <em>a</em>, and most of its nouns are feminine; but a few that name men, such as <em>nauta</em> (“sailor”) and <em>poēta</em> (“poet”), are masculine. The second declension has stems in <em>o</em>; its nouns in <em>-us</em> and <em>-er</em> are mostly masculine, and its nouns in <em>-um</em> are neuter.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th><th>puella (“girl”)</th> <th>dominus (“master”)</th> <th>puer (“boy”)</th> <th>bellum (“war”)</th></tr>\n<tr><th colspan=\"5\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">puella</td> <td class=\"f\">dominus</td> <td class=\"f\">puer</td> <td class=\"f\">bellum</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">puellae</td> <td class=\"f\">dominī</td> <td class=\"f\">puerī</td> <td class=\"f\">bellī</td></tr>\n<tr><td>Dative</td> <td class=\"f\">puellae</td> <td class=\"f\">dominō</td> <td class=\"f\">puerō</td> <td class=\"f\">bellō</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">puellam</td> <td class=\"f\">dominum</td> <td class=\"f\">puerum</td> <td class=\"f\">bellum</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">puellā</td> <td class=\"f\">dominō</td> <td class=\"f\">puerō</td> <td class=\"f\">bellō</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">puella</td> <td class=\"f\">domine</td> <td class=\"f\">puer</td> <td class=\"f\">bellum</td></tr>\n<tr><th colspan=\"5\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">puellae</td> <td class=\"f\">dominī</td> <td class=\"f\">puerī</td> <td class=\"f\">bella</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">puellārum</td> <td class=\"f\">dominōrum</td> <td class=\"f\">puerōrum</td> <td class=\"f\">bellōrum</td></tr>\n<tr><td>Dative</td> <td class=\"f\">puellīs</td> <td class=\"f\">dominīs</td> <td class=\"f\">puerīs</td> <td class=\"f\">bellīs</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">puellās</td> <td class=\"f\">dominōs</td> <td class=\"f\">puerōs</td> <td class=\"f\">bella</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">puellīs</td> <td class=\"f\">dominīs</td> <td class=\"f\">puerīs</td> <td class=\"f\">bellīs</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">puellae</td> <td class=\"f\">dominī</td> <td class=\"f\">puerī</td> <td class=\"f\">bella</td></tr>\n</table></div>\n<p>Some nouns in <em>-er</em> lose the <em>e</em> outside the nominative and vocative singular, as <em>ager, agrī</em> (“field”) and <em>magister, magistrī</em> (“teacher”), whereas <em>puer, puerī</em> keeps it. A noun in <em>-ius</em> has its vocative singular in <em>-ī</em>, so the vocative of <em>fīlius</em> (“son”) is <em>fīlī</em>. A neuter noun has one form for the nominative, accusative, and vocative, and in the plural that form ends in <em>-a</em>.</p>",
   "qp": {
    "id": "q-la-noun-12",
    "variants": [
     {
      "prompt": "What is the vocative singular of <em>Cornēlius</em>?",
      "options": [
       "<em>Cornēlie</em>",
       "<em>Cornēlī</em>",
       "<em>Cornēlius</em>",
       "<em>Cornēliō</em>"
      ],
      "answer": 1,
      "explain": "A noun in <em>-ius</em> has its vocative singular in <em>-ī</em>."
     },
     {
      "prompt": "What is the genitive singular of <em>liber</em> (“book”), which drops its <em>e</em>?",
      "options": [
       "<em>liberī</em>",
       "<em>libris</em>",
       "<em>librī</em>",
       "<em>librae</em>"
      ],
      "answer": 2,
      "explain": "Some nouns in <em>-er</em> lose the <em>e</em> outside the nominative and vocative singular, as <em>ager, agrī</em>."
     },
     {
      "prompt": "What is the nominative plural of <em>dōnum</em> (“gift”)?",
      "options": [
       "<em>dōnī</em>",
       "<em>dōnae</em>",
       "<em>dōnōs</em>",
       "<em>dōna</em>"
      ],
      "answer": 3,
      "explain": "A neuter noun has the same form in the nominative, accusative, and vocative, and in the plural it ends in <em>-a</em>."
     }
    ]
   }
  },
  {
   "id": "noun-3",
   "title": "The third declension",
   "body": "<p>The third declension has two kinds of stem. The first, a <strong>consonant stem</strong>, ends in a consonant, as <em>rēx, rēgis</em> (“king”) and the neuter <em>corpus, corporis</em> (“body”); the second, an <strong>i-stem</strong>, has an <em>i</em> in some of its endings, chiefly the genitive plural in <em>-ium</em>, as <em>cīvis, cīvis</em> (“citizen”). A neuter i-stem, such as <em>mare, maris</em> (“sea”), also has the ablative singular in <em>-ī</em> and the nominative and accusative plural in <em>-ia</em>.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th><th>rēx (“king”)</th> <th>corpus (“body”)</th> <th>cīvis (“citizen”)</th> <th>mare (“sea”)</th></tr>\n<tr><th colspan=\"5\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">rēx</td> <td class=\"f\">corpus</td> <td class=\"f\">cīvis</td> <td class=\"f\">mare</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">rēgis</td> <td class=\"f\">corporis</td> <td class=\"f\">cīvis</td> <td class=\"f\">maris</td></tr>\n<tr><td>Dative</td> <td class=\"f\">rēgī</td> <td class=\"f\">corporī</td> <td class=\"f\">cīvī</td> <td class=\"f\">marī</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">rēgem</td> <td class=\"f\">corpus</td> <td class=\"f\">cīvem</td> <td class=\"f\">mare</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">rēge</td> <td class=\"f\">corpore</td> <td class=\"f\">cīve</td> <td class=\"f\">marī</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">rēx</td> <td class=\"f\">corpus</td> <td class=\"f\">cīvis</td> <td class=\"f\">mare</td></tr>\n<tr><th colspan=\"5\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">rēgēs</td> <td class=\"f\">corpora</td> <td class=\"f\">cīvēs</td> <td class=\"f\">maria</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">rēgum</td> <td class=\"f\">corporum</td> <td class=\"f\">cīvium</td> <td class=\"f\">marium</td></tr>\n<tr><td>Dative</td> <td class=\"f\">rēgibus</td> <td class=\"f\">corporibus</td> <td class=\"f\">cīvibus</td> <td class=\"f\">maribus</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">rēgēs</td> <td class=\"f\">corpora</td> <td class=\"f\">cīvēs</td> <td class=\"f\">maria</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">rēgibus</td> <td class=\"f\">corporibus</td> <td class=\"f\">cīvibus</td> <td class=\"f\">maribus</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">rēgēs</td> <td class=\"f\">corpora</td> <td class=\"f\">cīvēs</td> <td class=\"f\">maria</td></tr>\n</table></div>\n<p>The nominative singular of this declension takes many shapes (<em>homō, hominis</em>; <em>virtūs, virtūtis</em>; <em>nōmen, nōminis</em>), and so it is learned with the genitive. Allen and Greenough also give, for some i-stems such as <em>cīvis</em>, an ablative singular in <em>-ī</em> and an accusative plural in <em>-īs</em>; this course uses the forms in <em>-e</em> and <em>-ēs</em>.</p>",
   "qp": {
    "id": "q-la-noun-3",
    "variants": [
     {
      "prompt": "Which is the genitive plural of the i-stem <em>urbs, urbis</em> (“city”)?",
      "options": [
       "<em>urbum</em>",
       "<em>urbōrum</em>",
       "<em>urbēs</em>",
       "<em>urbium</em>"
      ],
      "answer": 3,
      "explain": "An i-stem has its genitive plural in <em>-ium</em>; a consonant stem has <em>-um</em>."
     },
     {
      "prompt": "What is the accusative singular of the neuter <em>nōmen, nōminis</em> (“name”)?",
      "options": [
       "<em>nōmen</em>",
       "<em>nōminem</em>",
       "<em>nōmine</em>",
       "<em>nōmina</em>"
      ],
      "answer": 0,
      "explain": "A neuter has the same form in the nominative and accusative."
     },
     {
      "prompt": "What is the ablative singular of the neuter i-stem <em>animal, animālis</em>?",
      "options": [
       "<em>animāle</em>",
       "<em>animālī</em>",
       "<em>animal</em>",
       "<em>animālia</em>"
      ],
      "answer": 1,
      "explain": "A neuter i-stem has the ablative singular in <em>-ī</em>, like <em>mare, marī</em>."
     }
    ]
   }
  },
  {
   "id": "noun-4",
   "title": "The fourth and fifth declensions",
   "body": "<p>The fourth declension has stems in <em>u</em>; its nouns in <em>-us</em> are mostly masculine, though <em>manus</em> (“hand”) is feminine, and its nouns in <em>-ū</em>, such as <em>cornū</em> (“horn”), are neuter. The fifth declension has stems in <em>ē</em>; most of its nouns are feminine, but <em>diēs</em> (“day”) is usually masculine.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th><th>manus (“hand”)</th> <th>cornū (“horn”)</th> <th>rēs (“thing”)</th> <th>diēs (“day”)</th></tr>\n<tr><th colspan=\"5\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">manus</td> <td class=\"f\">cornū</td> <td class=\"f\">rēs</td> <td class=\"f\">diēs</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">manūs</td> <td class=\"f\">cornūs</td> <td class=\"f\">reī</td> <td class=\"f\">diēī</td></tr>\n<tr><td>Dative</td> <td class=\"f\">manuī</td> <td class=\"f\">cornū</td> <td class=\"f\">reī</td> <td class=\"f\">diēī</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">manum</td> <td class=\"f\">cornū</td> <td class=\"f\">rem</td> <td class=\"f\">diem</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">manū</td> <td class=\"f\">cornū</td> <td class=\"f\">rē</td> <td class=\"f\">diē</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">manus</td> <td class=\"f\">cornū</td> <td class=\"f\">rēs</td> <td class=\"f\">diēs</td></tr>\n<tr><th colspan=\"5\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">manūs</td> <td class=\"f\">cornua</td> <td class=\"f\">rēs</td> <td class=\"f\">diēs</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">manuum</td> <td class=\"f\">cornuum</td> <td class=\"f\">rērum</td> <td class=\"f\">diērum</td></tr>\n<tr><td>Dative</td> <td class=\"f\">manibus</td> <td class=\"f\">cornibus</td> <td class=\"f\">rēbus</td> <td class=\"f\">diēbus</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">manūs</td> <td class=\"f\">cornua</td> <td class=\"f\">rēs</td> <td class=\"f\">diēs</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">manibus</td> <td class=\"f\">cornibus</td> <td class=\"f\">rēbus</td> <td class=\"f\">diēbus</td></tr>\n<tr><td>Vocative</td> <td class=\"f\">manūs</td> <td class=\"f\">cornua</td> <td class=\"f\">rēs</td> <td class=\"f\">diēs</td></tr>\n</table></div>\n<p>The genitive and dative singular of the fifth declension end in <em>-ēī</em> after a vowel, as <em>diēī</em>, and in <em>-eī</em> after a consonant, as <em>reī</em>.</p>",
   "qp": {
    "id": "q-la-noun-45",
    "variants": [
     {
      "prompt": "What is the dative plural of <em>exercitus</em> (“army,” fourth declension)?",
      "options": [
       "<em>exercituum</em>",
       "<em>exercitibus</em>",
       "<em>exercitūs</em>",
       "<em>exercitīs</em>"
      ],
      "answer": 1,
      "explain": "The fourth declension has <em>-ibus</em> in the dative and ablative plural, like <em>manibus</em>."
     },
     {
      "prompt": "What is the accusative singular of <em>spēs</em> (“hope,” fifth declension)?",
      "options": [
       "<em>spēm</em>",
       "<em>speī</em>",
       "<em>spem</em>",
       "<em>spēs</em>"
      ],
      "answer": 2,
      "explain": "The fifth declension has the accusative singular in <em>-em</em>, like <em>rem</em> and <em>diem</em>."
     },
     {
      "prompt": "What is the genitive singular of <em>genū</em> (“knee,” neuter of the fourth declension)?",
      "options": [
       "<em>genū</em>",
       "<em>genuī</em>",
       "<em>genuum</em>",
       "<em>genūs</em>"
      ],
      "answer": 3,
      "explain": "The fourth declension has the genitive singular in <em>-ūs</em>, neuter as well as masculine: <em>cornū, cornūs</em>."
     }
    ]
   }
  },
  {
   "id": "noun-5",
   "title": "Reading an ending",
   "body": "<p>To <strong>parse</strong> a noun is to give its case and number. We take the stem and the declension from the dictionary form, and then find the ending in the table of that declension. In <em>rēgibus</em>, for example, the stem is <em>rēg-</em>, and <em>-ibus</em> in the third declension is the dative or ablative plural.</p>\n<p>Many endings belong to more than one case, as the tables show:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Form</th> <th>Every analysis</th></tr>\n<tr><td class=\"f\">puellae</td> <td>genitive singular, dative singular, nominative plural, vocative plural</td></tr>\n<tr><td class=\"f\">dominō</td> <td>dative singular, ablative singular</td></tr>\n<tr><td class=\"f\">bella</td> <td>nominative plural, accusative plural, vocative plural</td></tr>\n<tr><td class=\"f\">manūs</td> <td>genitive singular, nominative plural, accusative plural, vocative plural</td></tr>\n<tr><td class=\"f\">rēs</td> <td>nominative singular, vocative singular, nominative plural, accusative plural, vocative plural</td></tr>\n</table></div>\n<p>Only the rest of the sentence can decide which analysis is meant. When a form stands alone, therefore, every one of its analyses is correct.</p>",
   "qp": {
    "id": "q-la-noun-reading",
    "variants": [
     {
      "prompt": "What are all the analyses of <em>templa</em> (from <em>templum</em>)?",
      "options": [
       "Nominative singular only",
       "Ablative singular",
       "Nominative, accusative, and vocative plural",
       "Genitive plural"
      ],
      "answer": 2,
      "explain": "A neuter of the second declension has <em>-a</em> in the nominative, accusative, and vocative plural."
     },
     {
      "prompt": "What are all the analyses of <em>legiōnī</em> (from <em>legiō, legiōnis</em>)?",
      "options": [
       "Dative and ablative singular",
       "Dative singular only",
       "Genitive singular and nominative plural",
       "Ablative singular only"
      ],
      "answer": 1,
      "explain": "A consonant stem of the third declension has <em>-ī</em> only in the dative singular; its ablative is <em>legiōne</em>."
     },
     {
      "prompt": "How is it decided which analysis of an ambiguous ending is meant?",
      "options": [
       "By the rest of the sentence",
       "By the declension alone",
       "By the length of the word",
       "By the gender of the noun"
      ],
      "answer": 0,
      "explain": "Only the rest of the sentence can decide; when a form stands alone, every one of its analyses is correct."
     }
    ]
   }
  }
 ]
};
