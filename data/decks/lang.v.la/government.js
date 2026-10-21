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
   "body": "<p>Every Latin noun in a sentence stands in a case, and the case shows its use. These are the chief uses:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Case</th> <th>Chief uses</th> <th>Example</th></tr>\n<tr><td>Nominative</td> <td>the subject; the predicate noun or adjective</td> <td><i>agricola labōrat</i></td></tr>\n<tr><td>Genitive</td> <td>possession; the whole of which a part is taken; with some nouns, adjectives, and verbs</td> <td><i>domus agricolae</i>, <i>pars mīlitum</i></td></tr>\n<tr><td>Dative</td> <td>the indirect object; with some verbs and adjectives</td> <td><i>agricolae equum dat</i></td></tr>\n<tr><td>Accusative</td> <td>the direct object; place to which; extent of time and space</td> <td><i>agrum colit</i>, <i>Rōmam it</i>, <i>trēs hōrās</i></td></tr>\n<tr><td>Ablative</td> <td>means, manner, time when, separation, the agent with <i>ā</i> or <i>ab</i></td> <td><i>gladiō</i>, <i>prīmā lūce</i>, <i>ā rēge</i></td></tr>\n<tr><td>Vocative</td> <td>the person addressed</td> <td><i>Mārce</i></td></tr>\n</table></div>\n<p>The personal pronouns show the same cases: <i>ego</i>, <i>mē</i>, <i>mihi</i>; <i>tū</i>, <i>tē</i>, <i>tibi</i>; <i>nōs</i>, <i>nōs</i>, <i>nōbīs</i>; <i>vōs</i>, <i>vōs</i>, <i>vōbīs</i>. Two words joined by <i>et</i> have the same use, and so they stand in the same case: <i>agrōs et silvās videt</i> (“he sees the fields and the forests”).</p>",
   "qp": {
    "id": "q-la-gov-uses",
    "variants": [
     {
      "prompt": "What is the case of <i>hōrās</i> in <i>trēs hōrās labōrāvit</i> (“he worked for three hours”)?",
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
      "prompt": "Which form completes <i>Māter ______ fābulam nārrat</i> (“the mother tells us a story”)?",
      "options": [
       "<i>nōs</i>",
       "<i>nostrum</i>",
       "<i>vōbīs</i>",
       "<i>nōbīs</i>"
      ],
      "answer": 3,
      "explain": "The persons to whom the story is told are the indirect object, in the dative."
     },
     {
      "prompt": "What is the case of <i>lūce</i> in <i>prīmā lūce discessit</i> (“he left at dawn”)?",
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
   "body": "<p>Some Latin verbs govern a case other than the accusative. Many verbs of favoring, helping, pleasing, trusting, obeying, persuading, and pardoning, and their opposites, govern the dative: <i>amīcīs favet</i> (“he favors his friends”), <i>litterīs student</i> (“they are devoted to letters”), <i>eī persuāsit</i> (“he persuaded him”). Verbs of remembering and forgetting often govern the genitive: <i>oblīvīscī iniūriārum</i> (“to forget wrongs”). Five deponents, <i>ūtor</i>, <i>fruor</i>, <i>fungor</i>, <i>potior</i>, and <i>vescor</i>, govern the ablative: <i>nāvibus ūtuntur</i> (“they use ships”).</p>\n<p>Adjectives also govern cases: adjectives of likeness, nearness, and fitness the dative (<i>cārus patrī</i>, “dear to his father”); adjectives of fullness the genitive or the ablative (<i>plēnus perīculōrum</i>, “full of dangers”); <i>dignus</i> (“worthy”) the ablative (<i>dignus laude</i>, “worthy of praise”).</p>",
   "qp": {
    "id": "q-la-gov-verbs",
    "variants": [
     {
      "prompt": "Which form completes <i>Mīlitēs ______ pārent</i> (“the soldiers obey the general”)?",
      "options": [
       "<i>ducem</i>",
       "<i>duce</i>",
       "<i>ducī</i>",
       "<i>ducis</i>"
      ],
      "answer": 2,
      "explain": "<i>Pāreō</i> governs the dative."
     },
     {
      "prompt": "Which form completes <i>Hostēs castrīs ______</i> (“the enemy gained possession of the camp”)?",
      "options": [
       "<i>cēpērunt</i>",
       "<i>potītī sunt</i>",
       "<i>habuērunt</i>",
       "<i>tenuērunt</i>"
      ],
      "answer": 1,
      "explain": "<i>Castrīs</i> is ablative, and of these verbs only <i>potior</i> governs the ablative."
     },
     {
      "prompt": "Which case does <i>dignus</i> (“worthy”) govern?",
      "options": [
       "The ablative",
       "The genitive",
       "The dative",
       "The accusative"
      ],
      "answer": 0,
      "explain": "<i>Dignus</i> takes the ablative: <i>dignus laude</i>."
     }
    ]
   }
  },
  {
   "id": "prepositions",
   "title": "The prepositions",
   "body": "<p>Each Latin preposition governs a case, as we saw in Section III: <i>ad</i>, <i>ante</i>, <i>per</i>, <i>post</i>, and <i>trāns</i> the accusative; <i>ā</i> or <i>ab</i>, <i>cum</i>, <i>dē</i>, <i>ē</i> or <i>ex</i>, <i>prō</i>, and <i>sine</i> the ablative. <i>In</i> and <i>sub</i> take the accusative for motion toward and the ablative for rest: <i>in hortum</i> (“into the garden”), <i>in hortō</i> (“in the garden”).</p>\n<p>With the names of cities and small islands, and with <i>domus</i> and <i>rūs</i>, Latin uses no preposition: the accusative for place to which (<i>Rōmam</i>, “to Rome”; <i>domum</i>, “home”), the ablative for place from which (<i>Rōmā</i>, “from Rome”), and the locative for place where (<i>Rōmae</i>, “at Rome”; <i>domī</i>, “at home”).</p>",
   "qp": {
    "id": "q-la-gov-prep",
    "variants": [
     {
      "prompt": "Which phrase is correct for “across the river”?",
      "options": [
       "<i>trāns flūmine</i>",
       "<i>trāns flūminis</i>",
       "<i>trāns flūminī</i>",
       "<i>trāns flūmen</i>"
      ],
      "answer": 3,
      "explain": "<i>Trāns</i> governs the accusative; <i>flūmen</i> is neuter, so the accusative is <i>flūmen</i>."
     },
     {
      "prompt": "Which phrase is correct for “he went to Athens”?",
      "options": [
       "<i>Athēnās īvit</i>",
       "<i>in Athēnīs īvit</i>",
       "<i>Athēnīs īvit</i>",
       "<i>Athēnārum īvit</i>"
      ],
      "answer": 0,
      "explain": "With the name of a city, place to which is the accusative without a preposition."
     },
     {
      "prompt": "What does <i>domī</i> mean?",
      "options": [
       "“home,” after a verb of motion",
       "“at home”",
       "“from home”",
       "“of the house”"
      ],
      "answer": 1,
      "explain": "<i>Domī</i> is the locative: “at home.”"
     }
    ]
   }
  }
 ]
};
