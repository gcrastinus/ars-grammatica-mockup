window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.la/voice"] = {
 "id": "lang.v.la/voice",
 "title": "The Passive, the Infinitive, and the Participle",
 "sub": "The passive endings, the present infinitive, and the participle used as an adjective",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "voice-1",
   "title": "The Passive",
   "body": "<p>“The general praises the soldier” and “The soldier is praised by the general” report the same event, but in the first the subject does the action and in the second the subject receives it. In the active voice the subject does the action; in the passive voice the subject receives it. <i>Dux mīlitem laudat</i> means “the general praises the soldier,” and <i>mīles ā duce laudātur</i> means “the soldier is praised by the general.” The one who receives the action becomes the subject, in the nominative. The doer, when it is a person and is named, is in the ablative with <i>ā</i>, or with <i>ab</i> before a vowel or <i>h</i>.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Voice</th> <th>Subject</th> <th>Object</th> <th>Doer</th> <th>Verb</th></tr>\n<tr><td>Active</td> <td class=\"f\">puella</td> <td class=\"f\">poētam</td> <td>the subject itself</td> <td class=\"f\">laudat</td></tr>\n<tr><td>Passive</td> <td class=\"f\">poēta</td> <td>none</td> <td class=\"f\">ā puellā</td> <td class=\"f\">laudātur</td></tr>\n</table></div>",
   "qp": {
    "id": "q-la-voice-1",
    "variants": [
     {
      "prompt": "What does <i>Epistula ā rēgīnā scrībitur</i> mean?",
      "options": [
       "“the queen writes the letter”",
       "“the letter is written by the queen”",
       "“the letter was written to the queen”",
       "“the queen is written a letter”"
      ],
      "answer": 1,
      "explain": "The verb is passive, and <i>ā rēgīnā</i> names the doer."
     },
     {
      "prompt": "How does Latin name the person by whom a passive action is done?",
      "options": [
       "The dative alone",
       "<i>per</i> with the genitive",
       "<i>ā</i> or <i>ab</i> with the ablative",
       "<i>cum</i> with the accusative"
      ],
      "answer": 2,
      "explain": "The personal agent is <i>ā</i> or <i>ab</i> with the ablative."
     },
     {
      "prompt": "In the passive, which word becomes the subject?",
      "options": [
       "The one who does the action",
       "The indirect object",
       "The instrument",
       "The one who receives the action"
      ],
      "answer": 3,
      "explain": "The receiver of the action becomes the subject, in the nominative."
     }
    ]
   }
  },
  {
   "id": "voice-2",
   "title": "The passive endings",
   "body": "<p>The passive personal endings are <i>-r</i>, <i>-ris</i>, <i>-tur</i> in the singular, and <i>-mur</i>, <i>-minī</i>, <i>-ntur</i> in the plural. They take the place of the active endings <i>-ō</i> (or <i>-m</i>), <i>-s</i>, <i>-t</i>, <i>-mus</i>, <i>-tis</i>, <i>-nt</i>. The present indicative passive shows them in each conjugation:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th><th>amō</th> <th>moneō</th> <th>regō</th> <th>capiō</th> <th>audiō</th></tr>\n<tr><td>First singular</td> <td class=\"f\">amor</td> <td class=\"f\">moneor</td> <td class=\"f\">regor</td> <td class=\"f\">capior</td> <td class=\"f\">audior</td></tr>\n<tr><td>Second singular</td> <td class=\"f\">amāris</td> <td class=\"f\">monēris</td> <td class=\"f\">regeris</td> <td class=\"f\">caperis</td> <td class=\"f\">audīris</td></tr>\n<tr><td>Third singular</td> <td class=\"f\">amātur</td> <td class=\"f\">monētur</td> <td class=\"f\">regitur</td> <td class=\"f\">capitur</td> <td class=\"f\">audītur</td></tr>\n<tr><td>First plural</td> <td class=\"f\">amāmur</td> <td class=\"f\">monēmur</td> <td class=\"f\">regimur</td> <td class=\"f\">capimur</td> <td class=\"f\">audīmur</td></tr>\n<tr><td>Second plural</td> <td class=\"f\">amāminī</td> <td class=\"f\">monēminī</td> <td class=\"f\">regiminī</td> <td class=\"f\">capiminī</td> <td class=\"f\">audīminī</td></tr>\n<tr><td>Third plural</td> <td class=\"f\">amantur</td> <td class=\"f\">monentur</td> <td class=\"f\">reguntur</td> <td class=\"f\">capiuntur</td> <td class=\"f\">audiuntur</td></tr>\n</table></div>\n<p>The verb agrees in number with its subject in the passive as in the active: <i>urbs capitur</i>, “the city is captured,” but <i>urbēs capiuntur</i>, “the cities are captured.”</p>",
   "qp": {
    "id": "q-la-voice-2",
    "variants": [
     {
      "prompt": "Which form is the present passive, third person plural, of <i>vocō</i>?",
      "options": [
       "<i>vocantur</i>",
       "<i>vocant</i>",
       "<i>vocātur</i>",
       "<i>vocāminī</i>"
      ],
      "answer": 0,
      "explain": "The passive ending of the third person plural is <i>-ntur</i>."
     },
     {
      "prompt": "Which ending is the passive of the second person singular?",
      "options": [
       "<i>-s</i>",
       "<i>-tur</i>",
       "<i>-minī</i>",
       "<i>-ris</i>"
      ],
      "answer": 3,
      "explain": "The passive endings are <i>-r</i>, <i>-ris</i>, <i>-tur</i>, <i>-mur</i>, <i>-minī</i>, <i>-ntur</i>."
     },
     {
      "prompt": "What does <i>dūcimur</i> mean?",
      "options": [
       "“we lead”",
       "“they are led”",
       "“we are led”",
       "“we were led”"
      ],
      "answer": 2,
      "explain": "<i>-mur</i> is the passive ending of the first person plural."
     }
    ]
   }
  },
  {
   "id": "voice-3",
   "title": "The infinitive",
   "body": "<p>The infinitive names the action without person or number, as English “to praise.” The present active infinitive is the second principal part; the present passive infinitive ends in <i>-rī</i> in the first, second, and fourth conjugations, and in <i>-ī</i> in the third.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Conjugation</th> <th>Active</th> <th>Passive</th></tr>\n<tr><td>First</td> <td class=\"f\">amāre, “to love”</td> <td class=\"f\">amārī, “to be loved”</td></tr>\n<tr><td>Second</td> <td class=\"f\">monēre, “to warn”</td> <td class=\"f\">monērī, “to be warned”</td></tr>\n<tr><td>Third</td> <td class=\"f\">regere, “to rule”</td> <td class=\"f\">regī, “to be ruled”</td></tr>\n<tr><td>Third, <i>-iō</i></td> <td class=\"f\">capere, “to take”</td> <td class=\"f\">capī, “to be taken”</td></tr>\n<tr><td>Fourth</td> <td class=\"f\">audīre, “to hear”</td> <td class=\"f\">audīrī, “to be heard”</td></tr>\n</table></div>\n<p>Some verbs need an infinitive to complete their sense, such as <i>sciō</i> (“to know how”), <i>timeō</i> (“to be afraid”), and <i>parō</i> (“to prepare”), and an infinitive used in this way is called the complementary infinitive. For example, <i>puer verba scrībere scit</i> means “the boy knows how to write words.” The finite verb, <i>scit</i>, agrees with the subject, and the infinitive does not change for person or number.</p>",
   "qp": {
    "id": "q-la-voice-3",
    "variants": [
     {
      "prompt": "Which form is the present passive infinitive of <i>mittō</i>?",
      "options": [
       "<i>mittere</i>",
       "<i>mittērī</i>",
       "<i>missum</i>",
       "<i>mittī</i>"
      ],
      "answer": 3,
      "explain": "In the third conjugation the present passive infinitive ends in <i>-ī</i>."
     },
     {
      "prompt": "Which form completes <i>Puer natāre ______</i> (“the boy knows how to swim”)?",
      "options": [
       "<i>scit</i>",
       "<i>scīre</i>",
       "<i>sciunt</i>",
       "<i>scītur</i>"
      ],
      "answer": 0,
      "explain": "The finite verb agrees with the subject, and the complementary infinitive completes it."
     },
     {
      "prompt": "What does <i>laudārī</i> mean?",
      "options": [
       "“to praise”",
       "“to be praised”",
       "“to have praised”",
       "“having been praised”"
      ],
      "answer": 1,
      "explain": "<i>-rī</i> marks the present passive infinitive of the first conjugation."
     }
    ]
   }
  },
  {
   "id": "voice-4",
   "title": "The perfect passive participle",
   "body": "<p>The perfect passive participle is the participial stem with the endings of <i>bonus, bona, bonum</i>; so from <i>capiō, capere, cēpī, captum</i> comes <i>captus, capta, captum</i>, “captured.” The participle is used as an adjective, and so it agrees with its noun in gender, number, and case.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th><th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">captus</td> <td class=\"f\">capta</td> <td class=\"f\">captum</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">captī</td> <td class=\"f\">captae</td> <td class=\"f\">captī</td></tr>\n<tr><td>Dative</td> <td class=\"f\">captō</td> <td class=\"f\">captae</td> <td class=\"f\">captō</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">captum</td> <td class=\"f\">captam</td> <td class=\"f\">captum</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">captō</td> <td class=\"f\">captā</td> <td class=\"f\">captō</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">captī</td> <td class=\"f\">captae</td> <td class=\"f\">capta</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">captōrum</td> <td class=\"f\">captārum</td> <td class=\"f\">captōrum</td></tr>\n<tr><td>Dative</td> <td class=\"f\">captīs</td> <td class=\"f\">captīs</td> <td class=\"f\">captīs</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">captōs</td> <td class=\"f\">captās</td> <td class=\"f\">capta</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">captīs</td> <td class=\"f\">captīs</td> <td class=\"f\">captīs</td></tr>\n</table></div>\n<p><i>Cīvēs nāvem captam spectant</i> means “the citizens look at the captured ship.” <i>Nāvem</i> is feminine, singular, and accusative, and so the participle is <i>captam</i>. The participle agrees with its noun in gender, number, and case, even when its ending differs from the noun’s: <i>nāvem</i> is of the third declension, whereas <i>captam</i> has the ending of <i>bonam</i>.</p>",
   "qp": {
    "id": "q-la-voice-4",
    "variants": [
     {
      "prompt": "Which form completes <i>Mīlitēs urbem ______ intrant</i> (“the soldiers enter the conquered city”)?",
      "options": [
       "<i>victa</i>",
       "<i>victum</i>",
       "<i>victam</i>",
       "<i>victās</i>"
      ],
      "answer": 2,
      "explain": "The participle agrees with <i>urbem</i>, feminine singular accusative."
     },
     {
      "prompt": "What is the perfect passive participle of <i>mittō</i>, <i>mittere</i>, <i>mīsī</i>, <i>missum</i>?",
      "options": [
       "<i>mīsus</i>",
       "<i>missus</i>",
       "<i>mittus</i>",
       "<i>missūrus</i>"
      ],
      "answer": 1,
      "explain": "The participle is built on the fourth principal part: <i>missus</i>, <i>missa</i>, <i>missum</i>."
     },
     {
      "prompt": "In what does the perfect passive participle agree with its noun?",
      "options": [
       "Gender, number, and case",
       "Person and number",
       "Case only",
       "Declension and case"
      ],
      "answer": 0,
      "explain": "The participle is used as an adjective, so it agrees in gender, number, and case."
     }
    ]
   }
  },
  {
   "id": "voice-5",
   "title": "The perfect passive",
   "body": "<p>The present, the imperfect, and the future passive are single words with passive endings, but the perfect, the pluperfect, and the future perfect passive are made of two words: the perfect passive participle and a form of <i>sum</i>. <i>Laudātus est</i> means “he was praised” or “he has been praised,” <i>laudātus erat</i> means “he had been praised,” and <i>laudātus erit</i> means “he will have been praised.”</p>\n<p>The participle agrees with the subject in gender, number, and case, so it changes with the subject: <i>puella laudāta est</i>, “the girl was praised,” and <i>puerī laudātī sunt</i>, “the boys were praised.”</p>",
   "qp": {
    "id": "q-la-voice-5",
    "variants": [
     {
      "prompt": "What does <i>Litterae scrīptae sunt</i> mean?",
      "options": [
       "“the letter is being written”",
       "“the letter was written”",
       "“the letter will be written”",
       "“the letter had been written”"
      ],
      "answer": 1,
      "explain": "The perfect passive is the participle with the present of <i>sum</i>."
     },
     {
      "prompt": "Which form completes <i>Rēgīna ______ est</i> (“the queen was saved”)?",
      "options": [
       "<i>servātus</i>",
       "<i>servātum</i>",
       "<i>servāta</i>",
       "<i>servātae</i>"
      ],
      "answer": 2,
      "explain": "The participle agrees with the subject, feminine singular nominative."
     },
     {
      "prompt": "What does <i>laudātī erant</i> mean?",
      "options": [
       "“they have been praised”",
       "“they will have been praised”",
       "“they were being praised”",
       "“they had been praised”"
      ],
      "answer": 3,
      "explain": "The participle with the imperfect of <i>sum</i> gives the pluperfect passive."
     }
    ]
   }
  },
  {
   "id": "voice-6",
   "title": "Deponent verbs",
   "body": "<p>Some Latin verbs are passive in form but active in meaning. They are called deponent verbs, as though they had laid aside (<i>dēpōnere</i>) their active forms. <i>Mīror</i> means “I wonder at,” <i>sequor</i> means “I follow,” and <i>fateor</i> means “I confess”; their infinitives, <i>mīrārī</i>, <i>sequī</i>, and <i>fatērī</i>, are passive in form as well.</p>\n<p>Latin has no middle voice of its own, as Greek has, but a few verbs use the passive form with a reflexive sense, close to the Greek middle: <i>lavor</i> can mean “I wash myself.” So a passive ending does not always mean that the subject receives the action, and the dictionary shows which verbs are deponent by giving their principal parts in the passive: <i>mīror, mīrārī, mīrātus sum</i>.</p>",
   "qp": {
    "id": "q-la-voice-6",
    "variants": [
     {
      "prompt": "What does <i>loquitur</i> mean?",
      "options": [
       "“he speaks”",
       "“he is spoken”",
       "“he is spoken to”",
       "“he spoke”"
      ],
      "answer": 0,
      "explain": "<i>Loquor</i> is deponent: passive in form, active in meaning."
     },
     {
      "prompt": "What shows in the dictionary that a verb is deponent?",
      "options": [
       "It has no infinitive",
       "It has only three principal parts",
       "It governs the dative",
       "Its principal parts are passive"
      ],
      "answer": 3,
      "explain": "A deponent is listed with passive parts: <i>mīror</i>, <i>mīrārī</i>, <i>mīrātus sum</i>."
     },
     {
      "prompt": "What does <i>secūtī sunt</i> mean?",
      "options": [
       "“they were followed”",
       "“they will follow”",
       "“they followed”",
       "“they are following”"
      ],
      "answer": 2,
      "explain": "<i>Sequor</i> is deponent, so the perfect passive form has an active meaning."
     }
    ]
   }
  }
 ]
};
