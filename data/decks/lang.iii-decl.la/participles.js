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
   "body": "<p>English has a present participle (“loving”) and a past participle (“loved”). The Latin verb has four participles, two active and two passive, and each is declined as an adjective, so that it agrees with its noun in gender, number, and case:</p>\n<p><strong>Present active</strong>: <em lang=\"la\">amāns</em>, <em lang=\"la\">amantis</em> (“loving”)<br><strong>Future active</strong>: <em lang=\"la\">amātūrus, -a, -um</em> (“about to love”)<br><strong>Perfect passive</strong>: <em lang=\"la\">amātus, -a, -um</em> (“loved,” “having been loved”)<br><strong>Future passive (the gerundive)</strong>: <em lang=\"la\">amandus, -a, -um</em> (“to be loved”)</p>\n<p>The present participle is formed on the present stem with <em lang=\"la\">-ns</em>, genitive <em lang=\"la\">-ntis</em>: <em lang=\"la\">amāns</em>, <em lang=\"la\">monēns</em>, <em lang=\"la\">regēns</em>, <em lang=\"la\">capiēns</em>, <em lang=\"la\">audiēns</em>. It is declined like a third-declension adjective of one ending, with the ablative singular in <em lang=\"la\">-e</em> when it is used as a participle (<em lang=\"la\">patre regente</em>) and in <em lang=\"la\">-ī</em> when it is used as a mere adjective. The future active and the perfect passive are built on the participial stem with <em lang=\"la\">-ūrus</em> and <em lang=\"la\">-us</em>. Latin has no perfect active participle, except in deponent verbs, whose perfect participle is active in sense: <em lang=\"la\">hortātus</em>, “having urged.”</p>",
   "qp": {
    "id": "q-la-participles",
    "variants": [
     {
      "prompt": "What is the present active participle of <em lang=\"la\">dūcō</em>, nominative singular?",
      "options": [
       "<em lang=\"la\">dūctus</em>",
       "<em lang=\"la\">dūcēns</em>",
       "<em lang=\"la\">dūcendus</em>",
       "<em lang=\"la\">dūctūrus</em>"
      ],
      "answer": 1,
      "explain": "The present participle of a third-conjugation verb is formed with <em lang=\"la\">-ēns</em>: <em lang=\"la\">dūcēns</em>, genitive <em lang=\"la\">dūcentis</em>. <em lang=\"la\">Dūctus</em> is the perfect passive participle."
     },
     {
      "prompt": "What does <em lang=\"la\">scrīptūrus</em> mean?",
      "options": [
       "“having been written”",
       "“writing”",
       "“about to write”",
       "“to be written”"
      ],
      "answer": 2,
      "explain": "The future active participle in <em lang=\"la\">-ūrus</em> means “about to” do the action."
     },
     {
      "prompt": "Why is the perfect participle <em lang=\"la\">secūtus</em> (from <em lang=\"la\">sequor</em>) active in sense?",
      "options": [
       "Because Latin has a regular perfect active participle",
       "Because it ends in <em lang=\"la\">-tus</em>",
       "Because it agrees with a noun in the nominative",
       "Because <em lang=\"la\">sequor</em> is deponent"
      ],
      "answer": 3,
      "explain": "Latin has no perfect active participle except in deponent verbs, whose passive forms have an active sense: <em lang=\"la\">secūtus</em>, “having followed.”"
     }
    ]
   }
  },
  {
   "id": "infinitives",
   "title": "The infinitives",
   "body": "<p>English says “to love,” “to have loved,” “to be loved.” The Latin verb has six infinitives, three in each voice:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Active</th> <th>Passive</th></tr>\n<tr><td>Present</td> <td class=\"f\">amāre</td> <td class=\"f\">amārī</td></tr>\n<tr><td>Perfect</td> <td class=\"f\">amāvisse</td> <td class=\"f\">amātus esse</td></tr>\n<tr><td>Future</td> <td class=\"f\">amātūrus esse</td> <td class=\"f\">amātum īrī</td></tr>\n</table></div>\n<p>The present passive infinitive ends in <em lang=\"la\">-rī</em> in the first, second, and fourth conjugations (<em lang=\"la\">amārī</em>, <em lang=\"la\">monērī</em>, <em lang=\"la\">audīrī</em>) and in <em lang=\"la\">-ī</em> in the third (<em lang=\"la\">regī</em>, <em lang=\"la\">capī</em>). The perfect active is built on the perfect stem with <em lang=\"la\">-isse</em>. The perfect passive and the future active are made with <em lang=\"la\">esse</em> and a participle, which agrees with the subject: <em lang=\"la\">amātam esse</em>, <em lang=\"la\">amātūrōs esse</em>. The future passive, <em lang=\"la\">amātum īrī</em>, is rare.</p>",
   "qp": {
    "id": "q-la-infinitives",
    "variants": [
     {
      "prompt": "What is the present passive infinitive of <em lang=\"la\">mittō</em>?",
      "options": [
       "<em lang=\"la\">mittere</em>",
       "<em lang=\"la\">mitterī</em>",
       "<em lang=\"la\">missus esse</em>",
       "<em lang=\"la\">mittī</em>"
      ],
      "answer": 3,
      "explain": "In the third conjugation the present passive infinitive ends in <em lang=\"la\">-ī</em>: <em lang=\"la\">mittī</em>. <em lang=\"la\">Missus esse</em> is the perfect passive."
     },
     {
      "prompt": "What is the perfect active infinitive of <em lang=\"la\">audiō</em>?",
      "options": [
       "<em lang=\"la\">audīvisse</em>",
       "<em lang=\"la\">audīre</em>",
       "<em lang=\"la\">audītus esse</em>",
       "<em lang=\"la\">audīrī</em>"
      ],
      "answer": 0,
      "explain": "The perfect active infinitive is the perfect stem with <em lang=\"la\">-isse</em>: <em lang=\"la\">audīv-isse</em>."
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
      "explain": "The future active infinitive is the participle in <em lang=\"la\">-ūrus</em> with <em lang=\"la\">esse</em>: <em lang=\"la\">amātūrus esse</em>."
     }
    ]
   }
  },
  {
   "id": "gerund",
   "title": "The gerund",
   "body": "<p>The English “-ing” form used as a noun, as in “the art of sailing,” is a gerund. Latin has a gerund too, a verbal noun of the second declension in <em lang=\"la\">-ndī</em>, <em lang=\"la\">-ndō</em>, <em lang=\"la\">-ndum</em>, <em lang=\"la\">-ndō</em>, used only in the singular and only in the genitive, dative, accusative, and ablative: <em lang=\"la\">amandī</em> (“of loving”), <em lang=\"la\">amandō</em> (“for loving,” “by loving”), <em lang=\"la\">ad amandum</em> (“for loving”). The nominative is lacking, and the infinitive takes its place: <em lang=\"la\">errāre hūmānum est</em>, “to err is human.”</p>\n<p>The gerund is formed on the present stem with <em lang=\"la\">-nd-</em>: <em lang=\"la\">amandī</em>, <em lang=\"la\">monendī</em>, <em lang=\"la\">regendī</em>, <em lang=\"la\">capiendī</em>, <em lang=\"la\">audiendī</em>. Its uses follow its cases: the genitive with nouns and adjectives (<em lang=\"la\">ars scrībendī</em>, “the art of writing”), the accusative with <em lang=\"la\">ad</em> to show purpose (<em lang=\"la\">ad discendum</em>, “for learning”), and the ablative to show means (<em lang=\"la\">legendō</em>, “by reading”).</p>",
   "qp": {
    "id": "q-la-gerund",
    "variants": [
     {
      "prompt": "What does <em lang=\"la\">cupidus vincendī</em> mean?",
      "options": [
       "“eager for winning”",
       "“eager, having won”",
       "“eager to be won”",
       "“eager, about to win”"
      ],
      "answer": 0,
      "explain": "<em lang=\"la\">Vincendī</em> is the genitive of the gerund, with an adjective: “eager for winning” or “eager to win.”"
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
      "explain": "The gerund lacks the nominative, and the infinitive is used as the verbal noun in the nominative: <em lang=\"la\">nātāre difficile est</em>."
     },
     {
      "prompt": "In <em lang=\"la\">docendō discimus</em>, what is <em lang=\"la\">docendō</em>?",
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
   "body": "<p>“A letter to be written” is expressed in Latin by one word that agrees with “letter”: <em lang=\"la\">epistula scrībenda</em>. This is the <strong>gerundive</strong>, or future passive participle, an adjective of the first and second declensions in <em lang=\"la\">-ndus, -nda, -ndum</em>, formed like the gerund on the present stem. It has two chief uses. With a form of <em lang=\"la\">sum</em> it expresses what must be done, the passive periphrastic: <em lang=\"la\">lēx servanda est</em>, “the law must be kept”; and the person who must act is in the dative, <em lang=\"la\">mihi scrībendum est</em>, “I must write.” In the oblique cases it often takes the place of the gerund with an object: in place of <em lang=\"la\">ad videndum urbem</em> (“for seeing the city”), Latin prefers <em lang=\"la\">ad urbem videndam</em> (“for the city to be seen”).</p>",
   "qp": {
    "id": "q-la-gerundive",
    "variants": [
     {
      "prompt": "What does <em lang=\"la\">urbs capienda est</em> mean?",
      "options": [
       "“The city is being taken”",
       "“The city has been taken”",
       "“The city must be taken”",
       "“The city is about to take”"
      ],
      "answer": 2,
      "explain": "The gerundive with <em lang=\"la\">sum</em>, the passive periphrastic, expresses what must be done."
     },
     {
      "prompt": "In <em lang=\"la\">nōbīs eundum est</em>, what case is <em lang=\"la\">nōbīs</em>, and why?",
      "options": [
       "Ablative, of the agent with <em lang=\"la\">ā</em> understood",
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
       "<em lang=\"la\">ad pācem petendam</em>",
       "<em lang=\"la\">ad pācem petendum</em>",
       "<em lang=\"la\">ad petendum</em>",
       "<em lang=\"la\">pācem petēns</em>"
      ],
      "answer": 0,
      "explain": "The gerundive agrees with the noun: <em lang=\"la\">pācem petendam</em>, “for peace to be sought,” in place of the gerund with an object."
     }
    ]
   }
  },
  {
   "id": "supine",
   "title": "The supine",
   "body": "<p>The <strong>supine</strong> is a verbal noun of the fourth declension, used only in two cases. The accusative in <em lang=\"la\">-um</em> is the fourth principal part (<em lang=\"la\">amātum</em>), and it is used after verbs of motion to show purpose: <em lang=\"la\">vēnērunt spectātum</em>, “they came to watch.” The ablative in <em lang=\"la\">-ū</em> is used with a few adjectives to say in what respect: <em lang=\"la\">mīrābile dictū</em>, “wonderful to tell”; <em lang=\"la\">facile factū</em>, “easy to do.” The supine is the source of the participial stem, as we have seen.</p>",
   "qp": {
    "id": "q-la-supine",
    "variants": [
     {
      "prompt": "In <em lang=\"la\">lēgātī pācem petītum vēnērunt</em>, what is <em lang=\"la\">petītum</em>?",
      "options": [
       "The perfect passive participle agreeing with <em lang=\"la\">pācem</em>",
       "The accusative supine, showing purpose",
       "The gerund in the accusative",
       "The future active infinitive"
      ],
      "answer": 1,
      "explain": "After a verb of motion, the supine in <em lang=\"la\">-um</em> shows purpose: “the envoys came to seek peace.” A participle agreeing with <em lang=\"la\">pācem</em> would be <em lang=\"la\">petītam</em>."
     },
     {
      "prompt": "What is the ablative supine of <em lang=\"la\">audiō</em>?",
      "options": [
       "<em lang=\"la\">audītum</em>",
       "<em lang=\"la\">audiendō</em>",
       "<em lang=\"la\">audītū</em>",
       "<em lang=\"la\">audītō</em>"
      ],
      "answer": 2,
      "explain": "The ablative supine ends in <em lang=\"la\">-ū</em>: <em lang=\"la\">audītū</em>, as in <em lang=\"la\">facile audītū</em>."
     },
     {
      "prompt": "With what is the ablative supine used?",
      "options": [
       "With verbs of motion, to show purpose",
       "With <em lang=\"la\">sum</em>, to show necessity",
       "With prepositions of place",
       "With a few adjectives, to say in what respect"
      ],
      "answer": 3,
      "explain": "The ablative supine is used with adjectives such as <em lang=\"la\">mīrābilis</em> and <em lang=\"la\">facilis</em>; the accusative supine goes with verbs of motion."
     }
    ]
   }
  }
 ]
};
