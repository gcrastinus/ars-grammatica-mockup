window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.la/government"] = {
 "id": "lang.v.la/government",
 "title": "Cases and Government in Latin",
 "sub": "The chief uses of the cases, verbs and adjectives that govern a case, and the prepositions",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "uses",
   "title": "The chief uses of the cases",
   "body": "<p>Every Latin noun in a sentence stands in a case, and the case shows its use. These are the chief uses:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Case</th> <th>Chief uses</th> <th>Example</th></tr>\n<tr><td>Nominative</td> <td>the subject; the predicate noun or adjective</td> <td><i lang=\"la\">agricola labōrat</i></td></tr>\n<tr><td>Genitive</td> <td>possession; the whole of which a part is taken; with some nouns, adjectives, and verbs</td> <td><i lang=\"la\">domus agricolae</i>, <i lang=\"la\">pars mīlitum</i></td></tr>\n<tr><td>Dative</td> <td>the indirect object; with some verbs and adjectives</td> <td><i lang=\"la\">agricolae equum dat</i></td></tr>\n<tr><td>Accusative</td> <td>the direct object; place to which; extent of time and space</td> <td><i lang=\"la\">agrum colit</i>, <i lang=\"la\">Rōmam it</i>, <i lang=\"la\">trēs hōrās</i></td></tr>\n<tr><td>Ablative</td> <td>means, manner, time when, separation, the agent with <i lang=\"la\">ā</i> or <i lang=\"la\">ab</i></td> <td><i lang=\"la\">gladiō</i>, <i lang=\"la\">prīmā lūce</i>, <i lang=\"la\">ā rēge</i></td></tr>\n<tr><td>Vocative</td> <td>the person addressed</td> <td><i lang=\"la\">Mārce</i></td></tr>\n</table></div>\n<p>The personal pronouns show the same cases: <i lang=\"la\">ego</i>, <i lang=\"la\">mē</i>, <i lang=\"la\">mihi</i>; <i lang=\"la\">tū</i>, <i lang=\"la\">tē</i>, <i lang=\"la\">tibi</i>; <i lang=\"la\">nōs</i>, <i lang=\"la\">nōs</i>, <i lang=\"la\">nōbīs</i>; <i lang=\"la\">vōs</i>, <i lang=\"la\">vōs</i>, <i lang=\"la\">vōbīs</i>. Two words joined by <i lang=\"la\">et</i> have the same use, and so they stand in the same case: <i lang=\"la\">agrōs et silvās videt</i> (“he sees the fields and the forests”).</p>",
   "qp": {
    "id": "q-la-gov-uses",
    "variants": [
     {
      "prompt": "What is the case of <i lang=\"la\">hōrās</i> in <i lang=\"la\">trēs hōrās labōrāvit</i> (“he worked for three hours”)?",
      "options": [
       "Accusative of extent of time",
       "Ablative of time when",
       "Genitive of the whole",
       "Dative of the indirect object"
      ],
      "answer": 0,
      "explain": "The accusative names how long something lasts."
     },
     {
      "prompt": "Which form completes <i lang=\"la\">Māter ______ fābulam nārrat</i> (“the mother tells us a story”)?",
      "options": [
       "<i lang=\"la\">nōs</i>",
       "<i lang=\"la\">nostrum</i>",
       "<i lang=\"la\">vōbīs</i>",
       "<i lang=\"la\">nōbīs</i>"
      ],
      "answer": 3,
      "explain": "The persons to whom the story is told are the indirect object, in the dative."
     },
     {
      "prompt": "What is the case of <i lang=\"la\">lūce</i> in <i lang=\"la\">prīmā lūce discessit</i> (“he left at dawn”)?",
      "options": [
       "Accusative of extent",
       "Dative of reference",
       "Ablative of time when",
       "Genitive of time"
      ],
      "answer": 2,
      "explain": "The ablative names the time at which something happens."
     }
    ]
   }
  },
  {
   "id": "verbs",
   "title": "Verbs and adjectives that govern a case",
   "body": "<p>Some Latin verbs govern a case other than the accusative. Many verbs of favoring, helping, pleasing, trusting, obeying, persuading, and pardoning, and their opposites, govern the dative: <i lang=\"la\">amīcīs favet</i> (“he favors his friends”), <i lang=\"la\">litterīs student</i> (“they are devoted to letters”), <i lang=\"la\">eī persuāsit</i> (“he persuaded him”). Verbs of remembering and forgetting often govern the genitive: <i lang=\"la\">oblīvīscī iniūriārum</i> (“to forget wrongs”). Five deponents, <i lang=\"la\">ūtor</i>, <i lang=\"la\">fruor</i>, <i lang=\"la\">fungor</i>, <i lang=\"la\">potior</i>, and <i lang=\"la\">vescor</i>, govern the ablative: <i lang=\"la\">nāvibus ūtuntur</i> (“they use ships”).</p>\n<p>Adjectives also govern cases: adjectives of likeness, nearness, and fitness the dative (<i lang=\"la\">cārus patrī</i>, “dear to his father”); adjectives of fullness the genitive or the ablative (<i lang=\"la\">plēnus perīculōrum</i>, “full of dangers”); <i lang=\"la\">dignus</i> (“worthy”) the ablative (<i lang=\"la\">dignus laude</i>, “worthy of praise”).</p>",
   "qp": {
    "id": "q-la-gov-verbs",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"la\">Mīlitēs ______ pārent</i> (“the soldiers obey the general”)?",
      "options": [
       "<i lang=\"la\">ducem</i>",
       "<i lang=\"la\">duce</i>",
       "<i lang=\"la\">ducī</i>",
       "<i lang=\"la\">ducis</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">Pāreō</i> governs the dative."
     },
     {
      "prompt": "Which form completes <i lang=\"la\">Hostēs castrīs ______</i> (“the enemy gained possession of the camp”)?",
      "options": [
       "<i lang=\"la\">cēpērunt</i>",
       "<i lang=\"la\">potītī sunt</i>",
       "<i lang=\"la\">habuērunt</i>",
       "<i lang=\"la\">tenuērunt</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"la\">Castrīs</i> is ablative, and of these verbs only <i lang=\"la\">potior</i> governs the ablative."
     },
     {
      "prompt": "Which case does <i lang=\"la\">dignus</i> (“worthy”) govern?",
      "options": [
       "The ablative",
       "The genitive",
       "The dative",
       "The accusative"
      ],
      "answer": 0,
      "explain": "<i lang=\"la\">Dignus</i> takes the ablative: <i lang=\"la\">dignus laude</i>."
     }
    ]
   }
  },
  {
   "id": "prepositions",
   "title": "The prepositions",
   "body": "<p>Each Latin preposition governs a case, as we saw in Section III: <i lang=\"la\">ad</i>, <i lang=\"la\">ante</i>, <i lang=\"la\">per</i>, <i lang=\"la\">post</i>, and <i lang=\"la\">trāns</i> the accusative; <i lang=\"la\">ā</i> or <i lang=\"la\">ab</i>, <i lang=\"la\">cum</i>, <i lang=\"la\">dē</i>, <i lang=\"la\">ē</i> or <i lang=\"la\">ex</i>, <i lang=\"la\">prō</i>, and <i lang=\"la\">sine</i> the ablative. <i lang=\"la\">In</i> and <i lang=\"la\">sub</i> take the accusative for motion toward and the ablative for rest: <i lang=\"la\">in hortum</i> (“into the garden”), <i lang=\"la\">in hortō</i> (“in the garden”).</p>\n<p>With the names of cities and small islands, and with <i lang=\"la\">domus</i> and <i lang=\"la\">rūs</i>, Latin uses no preposition: the accusative for place to which (<i lang=\"la\">Rōmam</i>, “to Rome”; <i lang=\"la\">domum</i>, “home”), the ablative for place from which (<i lang=\"la\">Rōmā</i>, “from Rome”), and the locative for place where (<i lang=\"la\">Rōmae</i>, “at Rome”; <i lang=\"la\">domī</i>, “at home”).</p>",
   "qp": {
    "id": "q-la-gov-prep",
    "variants": [
     {
      "prompt": "Which phrase is correct for “across the river”?",
      "options": [
       "<i lang=\"la\">trāns flūmine</i>",
       "<i lang=\"la\">trāns flūminis</i>",
       "<i lang=\"la\">trāns flūminī</i>",
       "<i lang=\"la\">trāns flūmen</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"la\">Trāns</i> governs the accusative; <i lang=\"la\">flūmen</i> is neuter, so the accusative is <i lang=\"la\">flūmen</i>."
     },
     {
      "prompt": "Which phrase is correct for “he went to Athens”?",
      "options": [
       "<i lang=\"la\">Athēnās īvit</i>",
       "<i lang=\"la\">in Athēnīs īvit</i>",
       "<i lang=\"la\">Athēnīs īvit</i>",
       "<i lang=\"la\">Athēnārum īvit</i>"
      ],
      "answer": 0,
      "explain": "With the name of a city, place to which is the accusative without a preposition."
     },
     {
      "prompt": "What does <i lang=\"la\">domī</i> mean?",
      "options": [
       "“home,” after a verb of motion",
       "“at home”",
       "“from home”",
       "“of the house”"
      ],
      "answer": 1,
      "explain": "<i lang=\"la\">Domī</i> is the locative: “at home.”"
     }
    ]
   }
  }
 ]
};
