window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.fr/tenses"] = {
 "id": "lang.iii-decl.fr/tenses",
 "title": "The Compound and Literary Tenses",
 "sub": "The passé simple, the plus-que-parfait, the passé antérieur, the futur antérieur, and the conditionnel passé",
 "sources": "Lawless; Larousse; Le Conjugueur; Maurice Grevisse, <i>Le Bon Usage</i>",
 "panels": [
  {
   "id": "passe-simple",
   "title": "The <i lang=\"fr\">passé simple</i>",
   "body": "<p>A French newspaper says <i lang=\"fr\">le roi est mort</i> (“the king died”), but a history book or a novel says <i lang=\"fr\">le roi mourut</i>. The second tense is the <strong><i lang=\"fr\">passé simple</i></strong> (“simple past”), the past of written narrative. In speech it has given way to the <i lang=\"fr\">passé composé</i>, but it remains the ordinary past of literature, and a reader of French must recognize it at once. It has three sets of endings:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>parler</th> <th>finir</th> <th>vendre</th> <th>être</th> <th>avoir</th></tr>\n<tr><td>First singular</td> <td class=\"f\">parlai</td> <td class=\"f\">finis</td> <td class=\"f\">vendis</td> <td class=\"f\">fus</td> <td class=\"f\">eus</td></tr>\n<tr><td>Second singular</td> <td class=\"f\">parlas</td> <td class=\"f\">finis</td> <td class=\"f\">vendis</td> <td class=\"f\">fus</td> <td class=\"f\">eus</td></tr>\n<tr><td>Third singular</td> <td class=\"f\">parla</td> <td class=\"f\">finit</td> <td class=\"f\">vendit</td> <td class=\"f\">fut</td> <td class=\"f\">eut</td></tr>\n<tr><td>First plural</td> <td class=\"f\">parlâmes</td> <td class=\"f\">finîmes</td> <td class=\"f\">vendîmes</td> <td class=\"f\">fûmes</td> <td class=\"f\">eûmes</td></tr>\n<tr><td>Second plural</td> <td class=\"f\">parlâtes</td> <td class=\"f\">finîtes</td> <td class=\"f\">vendîtes</td> <td class=\"f\">fûtes</td> <td class=\"f\">eûtes</td></tr>\n<tr><td>Third plural</td> <td class=\"f\">parlèrent</td> <td class=\"f\">finirent</td> <td class=\"f\">vendirent</td> <td class=\"f\">furent</td> <td class=\"f\">eurent</td></tr>\n</table></div>\n<p>Verbs in <i lang=\"fr\">-er</i> take the <i lang=\"fr\">a</i>-endings (including <i lang=\"fr\">aller</i>: <i lang=\"fr\">il alla</i>); most other verbs take the <i lang=\"fr\">i</i>-endings; and some, such as <i lang=\"fr\">être</i>, <i lang=\"fr\">avoir</i>, <i lang=\"fr\">pouvoir</i> (<i lang=\"fr\">il put</i>), and <i lang=\"fr\">vouloir</i> (<i lang=\"fr\">il voulut</i>), take the <i lang=\"fr\">u</i>-endings. <i lang=\"fr\">Venir</i> has its own: <i lang=\"fr\">je vins</i>, <i lang=\"fr\">il vint</i>, <i lang=\"fr\">ils vinrent</i>. Like the Latin perfect in narrative, the <i lang=\"fr\">passé simple</i> presents an action as a completed event, whereas the imparfait presents the background against which it happens.</p>",
   "qp": {
    "id": "q-fr-passe-simple",
    "variants": [
     {
      "prompt": "What is the third person singular passé simple of <i lang=\"fr\">chanter</i>?",
      "options": [
       "<i lang=\"fr\">chantit</i>",
       "<i lang=\"fr\">chantait</i>",
       "<i lang=\"fr\">a chanté</i>",
       "<i lang=\"fr\">chanta</i>"
      ],
      "answer": 3,
      "explain": "Verbs in <i lang=\"fr\">-er</i> take the <i lang=\"fr\">a</i>-endings: <i lang=\"fr\">il chanta</i>. <i lang=\"fr\">Chantait</i> is the imparfait, and <i lang=\"fr\">a chanté</i> the passé composé."
     },
     {
      "prompt": "Where is the passé simple usually found?",
      "options": [
       "In written narrative",
       "In conversation among friends",
       "In commands",
       "In questions only"
      ],
      "answer": 0,
      "explain": "The passé simple is the past of written narrative; in speech the passé composé has replaced it."
     },
     {
      "prompt": "What is <i lang=\"fr\">ils furent</i>?",
      "options": [
       "The future of <i lang=\"fr\">être</i>, “they will be”",
       "The passé simple of <i lang=\"fr\">être</i>, “they were”",
       "The imparfait of <i lang=\"fr\">faire</i>, “they were doing”",
       "The present of <i lang=\"fr\">fuir</i>, “they flee”"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Être</i> takes the <i lang=\"fr\">u</i>-endings in the passé simple: <i lang=\"fr\">je fus</i>, <i lang=\"fr\">ils furent</i>."
     }
    ]
   }
  },
  {
   "id": "compound",
   "title": "The compound tenses",
   "body": "<p>Every simple tense of French has a compound tense beside it, formed with the same tense of <i lang=\"fr\">avoir</i> or <i lang=\"fr\">être</i> and the past participle, and the compound tense looks back on the action as complete from the time of the simple one:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>With avoir</th> <th>With être</th></tr>\n<tr><td>Passé composé</td> <td class=\"f\">il a parlé</td> <td class=\"f\">il est venu</td></tr>\n<tr><td>Plus-que-parfait</td> <td class=\"f\">il avait parlé</td> <td class=\"f\">il était venu</td></tr>\n<tr><td>Passé antérieur</td> <td class=\"f\">il eut parlé</td> <td class=\"f\">il fut venu</td></tr>\n<tr><td>Futur antérieur</td> <td class=\"f\">il aura parlé</td> <td class=\"f\">il sera venu</td></tr>\n<tr><td>Conditionnel passé</td> <td class=\"f\">il aurait parlé</td> <td class=\"f\">il serait venu</td></tr>\n</table></div>\n<p>So the <strong>plus-que-parfait</strong> (“pluperfect”) is the past of a past, <i lang=\"fr\">il avait parlé</i>, “he had spoken”; the <strong>futur antérieur</strong> (“future perfect”) is the future of a completed act, <i lang=\"fr\">il aura parlé</i>, “he will have spoken”; and the <strong>conditionnel passé</strong> is what would have happened, <i lang=\"fr\">il aurait parlé</i>, “he would have spoken.” The <strong>passé antérieur</strong>, <i lang=\"fr\">il eut parlé</i>, belongs to written narrative with the <i lang=\"fr\">passé simple</i>, chiefly after <i lang=\"fr\">quand</i>, <i lang=\"fr\">lorsque</i>, <i lang=\"fr\">dès que</i>, and <i lang=\"fr\">après que</i>: <i lang=\"fr\">quand il eut fini, il partit</i> (“when he had finished, he left”).</p>",
   "qp": {
    "id": "q-fr-compound",
    "variants": [
     {
      "prompt": "What tense is <i lang=\"fr\">nous serons partis</i>?",
      "options": [
       "The plus-que-parfait",
       "The conditionnel passé",
       "The passé antérieur",
       "The futur antérieur"
      ],
      "answer": 3,
      "explain": "The future of <i lang=\"fr\">être</i> with the participle forms the futur antérieur: “we shall have left.”"
     },
     {
      "prompt": "What does <i lang=\"fr\">elle aurait chanté</i> mean?",
      "options": [
       "“she would have sung”",
       "“she had sung”",
       "“she will have sung by then”",
       "“she sang”"
      ],
      "answer": 0,
      "explain": "The conditional of <i lang=\"fr\">avoir</i> with the participle forms the conditionnel passé."
     },
     {
      "prompt": "With what tense is the passé antérieur used?",
      "options": [
       "With the present, in conversation",
       "With the passé simple",
       "With the future, in prophecy",
       "With the imperative, in commands"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Quand il eut fini, il partit</i>: the passé antérieur goes with the passé simple."
     }
    ]
   }
  },
  {
   "id": "uses",
   "title": "Sequence and use of the past tenses",
   "body": "<p>The French past tenses are used in pairs. In conversation, the <i lang=\"fr\">passé composé</i> tells what happened and the imparfait what was going on: <i lang=\"fr\">il pleuvait quand nous sommes sortis</i> (“it was raining when we went out”). In written narrative, the <i lang=\"fr\">passé simple</i> takes the place of the <i lang=\"fr\">passé composé</i>: <i lang=\"fr\">il pleuvait quand nous sortîmes</i>. The plus-que-parfait tells what had happened before either: <i lang=\"fr\">nous étions déjà sortis quand il a commencé à pleuvoir</i> (“we had already gone out when it began to rain”).</p>\n<p>The futur antérieur also states a probability about the past: <i lang=\"fr\">il aura oublié</i>, “he must have forgotten.” And after <i lang=\"fr\">si</i> (“if”) in a condition contrary to fact about the past, French uses the plus-que-parfait, with the conditionnel passé in the main clause: <i lang=\"fr\">si j’avais su, je serais venu</i> (“if I had known, I would have come”).</p>",
   "qp": {
    "id": "q-fr-uses",
    "variants": [
     {
      "prompt": "Choose the tense after <i lang=\"fr\">si</i>: <i lang=\"fr\">Si tu ___, tu aurais compris</i> (“If you had listened, you would have understood”).",
      "options": [
       "<i lang=\"fr\">aurais écouté</i>",
       "<i lang=\"fr\">auras écouté</i>",
       "<i lang=\"fr\">avais écouté</i>",
       "<i lang=\"fr\">as écouté</i>"
      ],
      "answer": 2,
      "explain": "In an unreal condition about the past, <i lang=\"fr\">si</i> takes the plus-que-parfait, and the main clause the conditionnel passé."
     },
     {
      "prompt": "What does <i lang=\"fr\">il se sera trompé</i> usually mean?",
      "options": [
       "“He will make a mistake tomorrow.”",
       "“He must have made a mistake.”",
       "“He would make a mistake.”",
       "“He had made a mistake.”"
      ],
      "answer": 1,
      "explain": "The futur antérieur can state a probability about the past."
     },
     {
      "prompt": "In a novel, which tense usually replaces the passé composé?",
      "options": [
       "The passé simple",
       "The imparfait",
       "The plus-que-parfait",
       "The futur antérieur"
      ],
      "answer": 0,
      "explain": "In written narrative the passé simple takes the place of the passé composé, and the imparfait keeps its use."
     }
    ]
   }
  }
 ]
};
