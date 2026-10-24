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
   "body": "<p>“The general praises the soldier” and “The soldier is praised by the general” report the same event, but in the first the subject does the action and in the second the subject receives it. In the active voice the subject does the action; in the passive voice the subject receives it. <i lang=\"la\">Dux mīlitem laudat</i> means “the general praises the soldier,” and <i lang=\"la\">mīles ā duce laudātur</i> means “the soldier is praised by the general.” The one who receives the action becomes the subject, in the nominative. The doer, when it is a person and is named, is in the ablative with <i lang=\"la\">ā</i>, or with <i lang=\"la\">ab</i> before a vowel or <i lang=\"la\">h</i>.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Voice</th> <th>Subject</th> <th>Object</th> <th>Doer</th> <th>Verb</th></tr>\n<tr><td>Active</td> <td class=\"f\">puella</td> <td class=\"f\">poētam</td> <td>the subject itself</td> <td class=\"f\">laudat</td></tr>\n<tr><td>Passive</td> <td class=\"f\">poēta</td> <td>none</td> <td class=\"f\">ā puellā</td> <td class=\"f\">laudātur</td></tr>\n</table></div>",
   "qp": {
    "id": "q-la-voice-1",
    "variants": [
     {
      "prompt": "What does <i lang=\"la\">Epistula ā rēgīnā scrībitur</i> mean?",
      "options": [
       "“the queen writes the letter”",
       "“the letter is written by the queen”",
       "“the letter was written to the queen”",
       "“the queen is written a letter”"
      ],
      "answer": 1,
      "explain": "The verb is passive, and <i lang=\"la\">ā rēgīnā</i> names the doer."
     },
     {
      "prompt": "How does Latin name the person by whom a passive action is done?",
      "options": [
       "The dative alone",
       "<i lang=\"la\">per</i> with the genitive",
       "<i lang=\"la\">ā</i> or <i lang=\"la\">ab</i> with the ablative",
       "<i lang=\"la\">cum</i> with the accusative"
      ],
      "answer": 2,
      "explain": "The personal agent is <i lang=\"la\">ā</i> or <i lang=\"la\">ab</i> with the ablative."
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
   "body": "<p>The passive personal endings are <i lang=\"la\">-r</i>, <i lang=\"la\">-ris</i>, <i lang=\"la\">-tur</i> in the singular, and <i lang=\"la\">-mur</i>, <i lang=\"la\">-minī</i>, <i lang=\"la\">-ntur</i> in the plural. They take the place of the active endings <i lang=\"la\">-ō</i> (or <i lang=\"la\">-m</i>), <i lang=\"la\">-s</i>, <i lang=\"la\">-t</i>, <i lang=\"la\">-mus</i>, <i lang=\"la\">-tis</i>, <i lang=\"la\">-nt</i>. The present indicative passive shows them in each conjugation:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th><th>amō</th> <th>moneō</th> <th>regō</th> <th>capiō</th> <th>audiō</th></tr>\n<tr><td>First singular</td> <td class=\"f\">amor</td> <td class=\"f\">moneor</td> <td class=\"f\">regor</td> <td class=\"f\">capior</td> <td class=\"f\">audior</td></tr>\n<tr><td>Second singular</td> <td class=\"f\">amāris</td> <td class=\"f\">monēris</td> <td class=\"f\">regeris</td> <td class=\"f\">caperis</td> <td class=\"f\">audīris</td></tr>\n<tr><td>Third singular</td> <td class=\"f\">amātur</td> <td class=\"f\">monētur</td> <td class=\"f\">regitur</td> <td class=\"f\">capitur</td> <td class=\"f\">audītur</td></tr>\n<tr><td>First plural</td> <td class=\"f\">amāmur</td> <td class=\"f\">monēmur</td> <td class=\"f\">regimur</td> <td class=\"f\">capimur</td> <td class=\"f\">audīmur</td></tr>\n<tr><td>Second plural</td> <td class=\"f\">amāminī</td> <td class=\"f\">monēminī</td> <td class=\"f\">regiminī</td> <td class=\"f\">capiminī</td> <td class=\"f\">audīminī</td></tr>\n<tr><td>Third plural</td> <td class=\"f\">amantur</td> <td class=\"f\">monentur</td> <td class=\"f\">reguntur</td> <td class=\"f\">capiuntur</td> <td class=\"f\">audiuntur</td></tr>\n</table></div>\n<p>The verb agrees in number with its subject in the passive as in the active: <i lang=\"la\">urbs capitur</i>, “the city is captured,” but <i lang=\"la\">urbēs capiuntur</i>, “the cities are captured.”</p>",
   "qp": {
    "id": "q-la-voice-2",
    "variants": [
     {
      "prompt": "Which form is the present passive, third person plural, of <i lang=\"la\">vocō</i>?",
      "options": [
       "<i lang=\"la\">vocantur</i>",
       "<i lang=\"la\">vocant</i>",
       "<i lang=\"la\">vocātur</i>",
       "<i lang=\"la\">vocāminī</i>"
      ],
      "answer": 0,
      "explain": "The passive ending of the third person plural is <i lang=\"la\">-ntur</i>."
     },
     {
      "prompt": "Which ending is the passive of the second person singular?",
      "options": [
       "<i lang=\"la\">-s</i>",
       "<i lang=\"la\">-tur</i>",
       "<i lang=\"la\">-minī</i>",
       "<i lang=\"la\">-ris</i>"
      ],
      "answer": 3,
      "explain": "The passive endings are <i lang=\"la\">-r</i>, <i lang=\"la\">-ris</i>, <i lang=\"la\">-tur</i>, <i lang=\"la\">-mur</i>, <i lang=\"la\">-minī</i>, <i lang=\"la\">-ntur</i>."
     },
     {
      "prompt": "What does <i lang=\"la\">dūcimur</i> mean?",
      "options": [
       "“we lead”",
       "“they are led”",
       "“we are led”",
       "“we were led”"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">-mur</i> is the passive ending of the first person plural."
     }
    ]
   }
  },
  {
   "id": "voice-3",
   "title": "The infinitive",
   "body": "<p>The infinitive names the action without person or number, as English “to praise.” The present active infinitive is the second principal part; the present passive infinitive ends in <i lang=\"la\">-rī</i> in the first, second, and fourth conjugations, and in <i lang=\"la\">-ī</i> in the third.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th>Conjugation</th> <th>Active</th> <th>Passive</th></tr>\n<tr><td>First</td> <td class=\"f\">amāre, “to love”</td> <td class=\"f\">amārī, “to be loved”</td></tr>\n<tr><td>Second</td> <td class=\"f\">monēre, “to warn”</td> <td class=\"f\">monērī, “to be warned”</td></tr>\n<tr><td>Third</td> <td class=\"f\">regere, “to rule”</td> <td class=\"f\">regī, “to be ruled”</td></tr>\n<tr><td>Third, <i lang=\"la\">-iō</i></td> <td class=\"f\">capere, “to take”</td> <td class=\"f\">capī, “to be taken”</td></tr>\n<tr><td>Fourth</td> <td class=\"f\">audīre, “to hear”</td> <td class=\"f\">audīrī, “to be heard”</td></tr>\n</table></div>\n<p>Some verbs need an infinitive to complete their sense, such as <i lang=\"la\">sciō</i> (“to know how”), <i lang=\"la\">timeō</i> (“to be afraid”), and <i lang=\"la\">parō</i> (“to prepare”), and an infinitive used in this way is called the complementary infinitive. For example, <i lang=\"la\">puer verba scrībere scit</i> means “the boy knows how to write words.” The finite verb, <i lang=\"la\">scit</i>, agrees with the subject, and the infinitive does not change for person or number.</p>",
   "qp": {
    "id": "q-la-voice-3",
    "variants": [
     {
      "prompt": "Which form is the present passive infinitive of <i lang=\"la\">mittō</i>?",
      "options": [
       "<i lang=\"la\">mittere</i>",
       "<i lang=\"la\">mittērī</i>",
       "<i lang=\"la\">missum</i>",
       "<i lang=\"la\">mittī</i>"
      ],
      "answer": 3,
      "explain": "In the third conjugation the present passive infinitive ends in <i lang=\"la\">-ī</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"la\">Puer natāre ______</i> (“the boy knows how to swim”)?",
      "options": [
       "<i lang=\"la\">scit</i>",
       "<i lang=\"la\">scīre</i>",
       "<i lang=\"la\">sciunt</i>",
       "<i lang=\"la\">scītur</i>"
      ],
      "answer": 0,
      "explain": "The finite verb agrees with the subject, and the complementary infinitive completes it."
     },
     {
      "prompt": "What does <i lang=\"la\">laudārī</i> mean?",
      "options": [
       "“to praise”",
       "“to be praised”",
       "“to have praised”",
       "“having been praised”"
      ],
      "answer": 1,
      "explain": "<i lang=\"la\">-rī</i> marks the present passive infinitive of the first conjugation."
     }
    ]
   }
  },
  {
   "id": "voice-4",
   "title": "The perfect passive participle",
   "body": "<p>The perfect passive participle is the participial stem with the endings of <i lang=\"la\">bonus, bona, bonum</i>; so from <i lang=\"la\">capiō, capere, cēpī, captum</i> comes <i lang=\"la\">captus, capta, captum</i>, “captured.” The participle is used as an adjective, and so it agrees with its noun in gender, number, and case.</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th><th>Masculine</th> <th>Feminine</th> <th>Neuter</th></tr>\n<tr><th colspan=\"4\">Singular</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">captus</td> <td class=\"f\">capta</td> <td class=\"f\">captum</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">captī</td> <td class=\"f\">captae</td> <td class=\"f\">captī</td></tr>\n<tr><td>Dative</td> <td class=\"f\">captō</td> <td class=\"f\">captae</td> <td class=\"f\">captō</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">captum</td> <td class=\"f\">captam</td> <td class=\"f\">captum</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">captō</td> <td class=\"f\">captā</td> <td class=\"f\">captō</td></tr>\n<tr><th colspan=\"4\">Plural</th></tr>\n<tr><td>Nominative</td> <td class=\"f\">captī</td> <td class=\"f\">captae</td> <td class=\"f\">capta</td></tr>\n<tr><td>Genitive</td> <td class=\"f\">captōrum</td> <td class=\"f\">captārum</td> <td class=\"f\">captōrum</td></tr>\n<tr><td>Dative</td> <td class=\"f\">captīs</td> <td class=\"f\">captīs</td> <td class=\"f\">captīs</td></tr>\n<tr><td>Accusative</td> <td class=\"f\">captōs</td> <td class=\"f\">captās</td> <td class=\"f\">capta</td></tr>\n<tr><td>Ablative</td> <td class=\"f\">captīs</td> <td class=\"f\">captīs</td> <td class=\"f\">captīs</td></tr>\n</table></div>\n<p><i lang=\"la\">Cīvēs nāvem captam spectant</i> means “the citizens look at the captured ship.” <i lang=\"la\">Nāvem</i> is feminine, singular, and accusative, and so the participle is <i lang=\"la\">captam</i>. The participle agrees with its noun in gender, number, and case, even when its ending differs from the noun’s: <i lang=\"la\">nāvem</i> is of the third declension, whereas <i lang=\"la\">captam</i> has the ending of <i lang=\"la\">bonam</i>.</p>",
   "qp": {
    "id": "q-la-voice-4",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"la\">Mīlitēs urbem ______ intrant</i> (“the soldiers enter the conquered city”)?",
      "options": [
       "<i lang=\"la\">victa</i>",
       "<i lang=\"la\">victum</i>",
       "<i lang=\"la\">victam</i>",
       "<i lang=\"la\">victās</i>"
      ],
      "answer": 2,
      "explain": "The participle agrees with <i lang=\"la\">urbem</i>, feminine singular accusative."
     },
     {
      "prompt": "What is the perfect passive participle of <i lang=\"la\">mittō</i>, <i lang=\"la\">mittere</i>, <i lang=\"la\">mīsī</i>, <i lang=\"la\">missum</i>?",
      "options": [
       "<i lang=\"la\">mīsus</i>",
       "<i lang=\"la\">missus</i>",
       "<i lang=\"la\">mittus</i>",
       "<i lang=\"la\">missūrus</i>"
      ],
      "answer": 1,
      "explain": "The participle is built on the fourth principal part: <i lang=\"la\">missus</i>, <i lang=\"la\">missa</i>, <i lang=\"la\">missum</i>."
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
   "body": "<p>The present, the imperfect, and the future passive are single words with passive endings, but the perfect, the pluperfect, and the future perfect passive are made of two words: the perfect passive participle and a form of <i lang=\"la\">sum</i>. <i lang=\"la\">Laudātus est</i> means “he was praised” or “he has been praised,” <i lang=\"la\">laudātus erat</i> means “he had been praised,” and <i lang=\"la\">laudātus erit</i> means “he will have been praised.”</p>\n<p>The participle agrees with the subject in gender, number, and case, so it changes with the subject: <i lang=\"la\">puella laudāta est</i>, “the girl was praised,” and <i lang=\"la\">puerī laudātī sunt</i>, “the boys were praised.”</p>",
   "qp": {
    "id": "q-la-voice-5",
    "variants": [
     {
      "prompt": "What does <i lang=\"la\">Litterae scrīptae sunt</i> mean?",
      "options": [
       "“the letter is being written”",
       "“the letter was written”",
       "“the letter will be written”",
       "“the letter had been written”"
      ],
      "answer": 1,
      "explain": "The perfect passive is the participle with the present of <i lang=\"la\">sum</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"la\">Rēgīna ______ est</i> (“the queen was saved”)?",
      "options": [
       "<i lang=\"la\">servātus</i>",
       "<i lang=\"la\">servātum</i>",
       "<i lang=\"la\">servāta</i>",
       "<i lang=\"la\">servātae</i>"
      ],
      "answer": 2,
      "explain": "The participle agrees with the subject, feminine singular nominative."
     },
     {
      "prompt": "What does <i lang=\"la\">laudātī erant</i> mean?",
      "options": [
       "“they have been praised”",
       "“they will have been praised”",
       "“they were being praised”",
       "“they had been praised”"
      ],
      "answer": 3,
      "explain": "The participle with the imperfect of <i lang=\"la\">sum</i> gives the pluperfect passive."
     }
    ]
   }
  },
  {
   "id": "voice-6",
   "title": "Deponent verbs",
   "body": "<p>Some Latin verbs are passive in form but active in meaning. They are called deponent verbs, as though they had laid aside (<i lang=\"la\">dēpōnere</i>) their active forms. <i lang=\"la\">Mīror</i> means “I wonder at,” <i lang=\"la\">sequor</i> means “I follow,” and <i lang=\"la\">fateor</i> means “I confess”; their infinitives, <i lang=\"la\">mīrārī</i>, <i lang=\"la\">sequī</i>, and <i lang=\"la\">fatērī</i>, are passive in form as well.</p>\n<p>Latin has no middle voice of its own, as Greek has, but a few verbs use the passive form with a reflexive sense, close to the Greek middle: <i lang=\"la\">lavor</i> can mean “I wash myself.” So a passive ending does not always mean that the subject receives the action, and the dictionary shows which verbs are deponent by giving their principal parts in the passive: <i lang=\"la\">mīror, mīrārī, mīrātus sum</i>.</p>",
   "qp": {
    "id": "q-la-voice-6",
    "variants": [
     {
      "prompt": "What does <i lang=\"la\">loquitur</i> mean?",
      "options": [
       "“he speaks”",
       "“he is spoken”",
       "“he is spoken to”",
       "“he spoke”"
      ],
      "answer": 0,
      "explain": "<i lang=\"la\">Loquor</i> is deponent: passive in form, active in meaning."
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
      "explain": "A deponent is listed with passive parts: <i lang=\"la\">mīror</i>, <i lang=\"la\">mīrārī</i>, <i lang=\"la\">mīrātus sum</i>."
     },
     {
      "prompt": "What does <i lang=\"la\">secūtī sunt</i> mean?",
      "options": [
       "“they were followed”",
       "“they will follow”",
       "“they followed”",
       "“they are following”"
      ],
      "answer": 2,
      "explain": "<i lang=\"la\">Sequor</i> is deponent, so the perfect passive form has an active meaning."
     }
    ]
   }
  }
 ]
};
