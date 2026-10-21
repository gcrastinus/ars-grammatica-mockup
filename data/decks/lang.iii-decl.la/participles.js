window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.la/participles"] = {
 "id": "lang.iii-decl.la/participles",
 "title": "Participles, Gerund, Gerundive, and Supine",
 "sub": "The forms of the Latin participles, infinitives, gerund, gerundive, and supine",
 "sources": "Allen and Greenough, <em>New Latin Grammar</em> §§ 155–160, 500–510",
 "panels": [
  {
   "id": "participles",
   "title": "The four participles",
   "body": "<p>English has a present participle (“loving”) and a past participle (“loved”). The Latin verb has four participles, two active and two passive, and each is declined as an adjective, so that it agrees with its noun in gender, number, and case:</p>\n<p><strong>Present active</strong>: <em>amāns</em>, <em>amantis</em> (“loving”)<br><strong>Future active</strong>: <em>amātūrus, -a, -um</em> (“about to love”)<br><strong>Perfect passive</strong>: <em>amātus, -a, -um</em> (“loved,” “having been loved”)<br><strong>Future passive (the gerundive)</strong>: <em>amandus, -a, -um</em> (“to be loved”)</p>\n<p>The present participle is formed on the present stem with <em>-ns</em>, genitive <em>-ntis</em>: <em>amāns</em>, <em>monēns</em>, <em>regēns</em>, <em>capiēns</em>, <em>audiēns</em>. It is declined like a third-declension adjective of one ending, with the ablative singular in <em>-e</em> when it is used as a participle (<em>patre regente</em>) and in <em>-ī</em> when it is used as a mere adjective. The future active and the perfect passive are built on the participial stem with <em>-ūrus</em> and <em>-us</em>. Latin has no perfect active participle, except in deponent verbs, whose perfect participle is active in sense: <em>hortātus</em>, “having urged.”</p>",
   "qp": {
    "id": "q-la-participles",
    "variants": [
     {
      "prompt": "What is the present active participle of <em>dūcō</em>, nominative singular?",
      "options": [
       "<em>dūctus</em>",
       "<em>dūcēns</em>",
       "<em>dūcendus</em>",
       "<em>dūctūrus</em>"
      ],
      "answer": 1,
      "explain": "The present participle of a third-conjugation verb is formed with <em>-ēns</em>: <em>dūcēns</em>, genitive <em>dūcentis</em>. <em>Dūctus</em> is the perfect passive participle."
     },
     {
      "prompt": "What does <em>scrīptūrus</em> mean?",
      "options": [
       "“having been written”",
       "“writing”",
       "“about to write”",
       "“to be written”"
      ],
      "answer": 2,
      "explain": "The future active participle in <em>-ūrus</em> means “about to” do the action."
     },
     {
      "prompt": "Why is the perfect participle <em>secūtus</em> (from <em>sequor</em>) active in sense?",
      "options": [
       "Because Latin has a regular perfect active participle",
       "Because it ends in <em>-tus</em>",
       "Because it agrees with a noun in the nominative",
       "Because <em>sequor</em> is deponent"
      ],
      "answer": 3,
      "explain": "Latin has no perfect active participle except in deponent verbs, whose passive forms have an active sense: <em>secūtus</em>, “having followed.”"
     }
    ]
   }
  },
  {
   "id": "infinitives",
   "title": "The infinitives",
   "body": "<p>English says “to love,” “to have loved,” “to be loved.” The Latin verb has six infinitives, three in each voice:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Active</th> <th>Passive</th></tr>\n<tr><td>Present</td> <td class=\"f\">amāre</td> <td class=\"f\">amārī</td></tr>\n<tr><td>Perfect</td> <td class=\"f\">amāvisse</td> <td class=\"f\">amātus esse</td></tr>\n<tr><td>Future</td> <td class=\"f\">amātūrus esse</td> <td class=\"f\">amātum īrī</td></tr>\n</table></div>\n<p>The present passive infinitive ends in <em>-rī</em> in the first, second, and fourth conjugations (<em>amārī</em>, <em>monērī</em>, <em>audīrī</em>) and in <em>-ī</em> in the third (<em>regī</em>, <em>capī</em>). The perfect active is built on the perfect stem with <em>-isse</em>. The perfect passive and the future active are made with <em>esse</em> and a participle, which agrees with the subject: <em>amātam esse</em>, <em>amātūrōs esse</em>. The future passive, <em>amātum īrī</em>, is rare.</p>",
   "qp": {
    "id": "q-la-infinitives",
    "variants": [
     {
      "prompt": "What is the present passive infinitive of <em>mittō</em>?",
      "options": [
       "<em>mittere</em>",
       "<em>mitterī</em>",
       "<em>missus esse</em>",
       "<em>mittī</em>"
      ],
      "answer": 3,
      "explain": "In the third conjugation the present passive infinitive ends in <em>-ī</em>: <em>mittī</em>. <em>Missus esse</em> is the perfect passive."
     },
     {
      "prompt": "What is the perfect active infinitive of <em>audiō</em>?",
      "options": [
       "<em>audīvisse</em>",
       "<em>audīre</em>",
       "<em>audītus esse</em>",
       "<em>audīrī</em>"
      ],
      "answer": 0,
      "explain": "The perfect active infinitive is the perfect stem with <em>-isse</em>: <em>audīv-isse</em>."
     },
     {
      "prompt": "Which infinitive is made with the future active participle?",
      "options": [
       "The perfect passive",
       "The future active",
       "The present passive",
       "The perfect active"
      ],
      "answer": 1,
      "explain": "The future active infinitive is the participle in <em>-ūrus</em> with <em>esse</em>: <em>amātūrus esse</em>."
     }
    ]
   }
  },
  {
   "id": "gerund",
   "title": "The gerund",
   "body": "<p>The English “-ing” form used as a noun, as in “the art of sailing,” is a gerund. Latin has a gerund too, a verbal noun of the second declension in <em>-ndī</em>, <em>-ndō</em>, <em>-ndum</em>, <em>-ndō</em>, used only in the singular and only in the genitive, dative, accusative, and ablative: <em>amandī</em> (“of loving”), <em>amandō</em> (“for loving,” “by loving”), <em>ad amandum</em> (“for loving”). The nominative is lacking, and the infinitive takes its place: <em>errāre hūmānum est</em>, “to err is human.”</p>\n<p>The gerund is formed on the present stem with <em>-nd-</em>: <em>amandī</em>, <em>monendī</em>, <em>regendī</em>, <em>capiendī</em>, <em>audiendī</em>. Its uses follow its cases: the genitive with nouns and adjectives (<em>ars scrībendī</em>, “the art of writing”), the accusative with <em>ad</em> to show purpose (<em>ad discendum</em>, “for learning”), and the ablative to show means (<em>legendō</em>, “by reading”).</p>",
   "qp": {
    "id": "q-la-gerund",
    "variants": [
     {
      "prompt": "What does <em>cupidus vincendī</em> mean?",
      "options": [
       "“eager for winning”",
       "“eager, having won”",
       "“eager to be won”",
       "“eager, about to win”"
      ],
      "answer": 0,
      "explain": "<em>Vincendī</em> is the genitive of the gerund, with an adjective: “eager for winning” or “eager to win.”"
     },
     {
      "prompt": "Why is there no nominative of the gerund?",
      "options": [
       "The gerund is always plural",
       "The gerund is indeclinable",
       "The nominative is the same as the ablative",
       "The infinitive serves in its place"
      ],
      "answer": 3,
      "explain": "The gerund lacks the nominative, and the infinitive is used as the verbal noun in the nominative: <em>nātāre difficile est</em>."
     },
     {
      "prompt": "In <em>docendō discimus</em>, what is <em>docendō</em>?",
      "options": [
       "The dative of the gerund, showing purpose",
       "A present participle in the ablative",
       "The ablative of the gerund, showing means",
       "A future passive participle"
      ],
      "answer": 2,
      "explain": "“We learn by teaching”: the ablative of the gerund shows the means."
     }
    ]
   }
  },
  {
   "id": "gerundive",
   "title": "The gerundive",
   "body": "<p>“A letter to be written” is expressed in Latin by one word that agrees with “letter”: <em>epistula scrībenda</em>. This is the <strong>gerundive</strong>, or future passive participle, an adjective of the first and second declensions in <em>-ndus, -nda, -ndum</em>, formed like the gerund on the present stem. It has two chief uses. With a form of <em>sum</em> it expresses what must be done, the passive periphrastic: <em>lēx servanda est</em>, “the law must be kept”; and the person who must act is in the dative, <em>mihi scrībendum est</em>, “I must write.” In the oblique cases it often takes the place of the gerund with an object: in place of <em>ad videndum urbem</em> (“for seeing the city”), Latin prefers <em>ad urbem videndam</em> (“for the city to be seen”).</p>",
   "qp": {
    "id": "q-la-gerundive",
    "variants": [
     {
      "prompt": "What does <em>urbs capienda est</em> mean?",
      "options": [
       "“The city is being taken”",
       "“The city has been taken”",
       "“The city must be taken”",
       "“The city is about to take”"
      ],
      "answer": 2,
      "explain": "The gerundive with <em>sum</em>, the passive periphrastic, expresses what must be done."
     },
     {
      "prompt": "In <em>nōbīs eundum est</em>, what case is <em>nōbīs</em>, and why?",
      "options": [
       "Ablative, of the agent with <em>ā</em> understood",
       "Dative, of the person who must act",
       "Dative, of the indirect object",
       "Ablative, of means"
      ],
      "answer": 1,
      "explain": "With the passive periphrastic, the person who must act is in the dative (the dative of agent): “we must go.”"
     },
     {
      "prompt": "Which phrase uses the gerundive in place of the gerund with an object?",
      "options": [
       "<em>ad pācem petendam</em>",
       "<em>ad pācem petendum</em>",
       "<em>ad petendum</em>",
       "<em>pācem petēns</em>"
      ],
      "answer": 0,
      "explain": "The gerundive agrees with the noun: <em>pācem petendam</em>, “for peace to be sought,” in place of the gerund with an object."
     }
    ]
   }
  },
  {
   "id": "supine",
   "title": "The supine",
   "body": "<p>The <strong>supine</strong> is a verbal noun of the fourth declension, used only in two cases. The accusative in <em>-um</em> is the fourth principal part (<em>amātum</em>), and it is used after verbs of motion to show purpose: <em>vēnērunt spectātum</em>, “they came to watch.” The ablative in <em>-ū</em> is used with a few adjectives to say in what respect: <em>mīrābile dictū</em>, “wonderful to tell”; <em>facile factū</em>, “easy to do.” The supine is the source of the participial stem, as we have seen.</p>",
   "qp": {
    "id": "q-la-supine",
    "variants": [
     {
      "prompt": "In <em>lēgātī pācem petītum vēnērunt</em>, what is <em>petītum</em>?",
      "options": [
       "The perfect passive participle agreeing with <em>pācem</em>",
       "The accusative supine, showing purpose",
       "The gerund in the accusative",
       "The future active infinitive"
      ],
      "answer": 1,
      "explain": "After a verb of motion, the supine in <em>-um</em> shows purpose: “the envoys came to seek peace.” A participle agreeing with <em>pācem</em> would be <em>petītam</em>."
     },
     {
      "prompt": "What is the ablative supine of <em>audiō</em>?",
      "options": [
       "<em>audītum</em>",
       "<em>audiendō</em>",
       "<em>audītū</em>",
       "<em>audītō</em>"
      ],
      "answer": 2,
      "explain": "The ablative supine ends in <em>-ū</em>: <em>audītū</em>, as in <em>facile audītū</em>."
     },
     {
      "prompt": "With what is the ablative supine used?",
      "options": [
       "With verbs of motion, to show purpose",
       "With <em>sum</em>, to show necessity",
       "With prepositions of place",
       "With a few adjectives, to say in what respect"
      ],
      "answer": 3,
      "explain": "The ablative supine is used with adjectives such as <em>mīrābilis</em> and <em>facilis</em>; the accusative supine goes with verbs of motion."
     }
    ]
   }
  }
 ]
};
