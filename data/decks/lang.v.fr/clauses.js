window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.fr/clauses"] = {
 "id": "lang.v.fr/clauses",
 "title": "Clauses in French",
 "sub": "Relative clauses, causal clauses and conditions, indirect discourse, and the participle in place of a clause",
 "sources": "Maurice Grevisse and André Goosse, <i>Le Bon Usage</i>; Larousse; Le Conjugueur",
 "panels": [
  {
   "id": "relative",
   "title": "Relative clauses",
   "body": "<p>The French relative pronoun shows its use in its own clause by its form. <i lang=\"fr\">Qui</i> is the subject: <i lang=\"fr\">l’élève qui chante</i> (“the pupil who is singing”). <i lang=\"fr\">Que</i> (<i lang=\"fr\">qu’</i> before a vowel) is the direct object: <i lang=\"fr\">la chanson que nous chantons</i> (“the song that we are singing”). <i lang=\"fr\">Dont</i> stands for <i lang=\"fr\">de</i> with the relative and means “of which,” “of whom,” or “whose”: <i lang=\"fr\">le professeur dont je connais le fils</i> (“the teacher whose son I know”). <i lang=\"fr\">Où</i> gives the place or the time: <i lang=\"fr\">le café où nous déjeunons</i> (“the café where we have lunch”), <i lang=\"fr\">l’année où il est né</i> (“the year when he was born”).</p>\n<p>After other prepositions French uses <i lang=\"fr\">lequel</i>, which agrees with its antecedent in gender and number: <i lang=\"fr\">le stylo avec lequel j’écris</i> (“the pen with which I write”), <i lang=\"fr\">la table sur laquelle il travaille</i> (“the table on which he works”). For persons, <i lang=\"fr\">qui</i> is also used after a preposition: <i lang=\"fr\">l’ami avec qui je voyage</i>.</p>",
   "qp": {
    "id": "q-fr-cls-rel",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Le film ______ nous avons vu était long</i> (“the film that we saw was long”)?",
      "options": [
       "<i lang=\"fr\">que</i>",
       "<i lang=\"fr\">qui</i>",
       "<i lang=\"fr\">dont</i>",
       "<i lang=\"fr\">où</i>"
      ],
      "answer": 0,
      "explain": "The relative is the direct object of <i lang=\"fr\">avons vu</i>, so it is <i lang=\"fr\">que</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">La femme ______ je connais la sœur est ici</i> (“the woman whose sister I know is here”)?",
      "options": [
       "<i lang=\"fr\">que</i>",
       "<i lang=\"fr\">qui</i>",
       "<i lang=\"fr\">où</i>",
       "<i lang=\"fr\">dont</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Dont</i> means “whose,” standing for <i lang=\"fr\">de</i> with the relative."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">la boîte dans ______ il garde ses lettres</i> (“the box in which he keeps his letters”)?",
      "options": [
       "<i lang=\"fr\">lequel</i>",
       "<i lang=\"fr\">que</i>",
       "<i lang=\"fr\">laquelle</i>",
       "<i lang=\"fr\">lesquelles</i>"
      ],
      "answer": 2,
      "explain": "After <i lang=\"fr\">dans</i>, French uses <i lang=\"fr\">lequel</i>, which agrees with <i lang=\"fr\">boîte</i>, feminine singular."
     }
    ]
   }
  },
  {
   "id": "conditions",
   "title": "Causal clauses and conditions",
   "body": "<p>A clause of cause is introduced by <i lang=\"fr\">parce que</i> (“because”), which answers the question <i lang=\"fr\">pourquoi ?</i>, or by <i lang=\"fr\">comme</i> and <i lang=\"fr\">puisque</i> (“since”), which usually come first and give a cause that is already known: <i lang=\"fr\">comme il était tard, nous sommes rentrés</i> (“since it was late, we went home”). These clauses state a fact and take the indicative.</p>\n<p>In a condition with <i lang=\"fr\">si</i>, the tenses follow a fixed pattern. <i lang=\"fr\">Si</i> with the present goes with the present, the future, or the imperative: <i lang=\"fr\">s’il pleut demain, nous resterons</i> (“if it rains tomorrow, we will stay”). <i lang=\"fr\">Si</i> with the imperfect goes with the conditional: <i lang=\"fr\">s’il pleuvait, nous resterions</i> (“if it were raining, we would stay”). <i lang=\"fr\">Si</i> with the pluperfect goes with the past conditional: <i lang=\"fr\">s’il avait plu, nous serions restés</i> (“if it had rained, we would have stayed”). <i lang=\"fr\">Si</i> becomes <i lang=\"fr\">s’</i> only before <i lang=\"fr\">il</i> and <i lang=\"fr\">ils</i>.</p>",
   "qp": {
    "id": "q-fr-cls-cond",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Si nous partons tôt, nous ______ à midi</i> (“if we leave early, we will arrive at noon”)?",
      "options": [
       "<i lang=\"fr\">arriverions</i>",
       "<i lang=\"fr\">arriverons</i>",
       "<i lang=\"fr\">arrivions</i>",
       "<i lang=\"fr\">arrivons</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Si</i> with the present goes with the future."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">S’il avait su, il ______ venu</i> (“if he had known, he would have come”)?",
      "options": [
       "<i lang=\"fr\">sera</i>",
       "<i lang=\"fr\">était</i>",
       "<i lang=\"fr\">serait</i>",
       "<i lang=\"fr\">aurait</i>"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Si</i> with the pluperfect goes with the past conditional, here <i lang=\"fr\">serait venu</i>."
     },
     {
      "prompt": "Before which word does <i lang=\"fr\">si</i> become <i lang=\"fr\">s’</i>?",
      "options": [
       "<i lang=\"fr\">elle</i>",
       "<i lang=\"fr\">on</i>",
       "<i lang=\"fr\">un</i>",
       "<i lang=\"fr\">il</i>"
      ],
      "answer": 3,
      "explain": "<i lang=\"fr\">Si</i> is elided only before <i lang=\"fr\">il</i> and <i lang=\"fr\">ils</i>: <i lang=\"fr\">s’il</i>, but <i lang=\"fr\">si elle</i>."
     }
    ]
   }
  },
  {
   "id": "indirect",
   "title": "Indirect discourse and indirect questions",
   "body": "<p>A statement is reported with <i lang=\"fr\">que</i> and the indicative: <i lang=\"fr\">elle dit qu’elle est fatiguée</i> (“she says that she is tired”). When the main verb is in a past tense, the tense of the reported verb moves back: the present becomes the imperfect, and the future becomes the conditional. So <i lang=\"fr\">elle a dit qu’elle était fatiguée</i> (“she said that she was tired”), and <i lang=\"fr\">il a dit qu’il viendrait</i> (“he said that he would come”).</p>\n<p>A question is reported with <i lang=\"fr\">si</i> (“whether”) or with a question word: <i lang=\"fr\">je me demande si elle viendra</i> (“I wonder whether she will come”), <i lang=\"fr\">dis-moi où tu vas</i> (“tell me where you are going”). For “what,” French writes <i lang=\"fr\">ce que</i> when it is the object and <i lang=\"fr\">ce qui</i> when it is the subject: <i lang=\"fr\">je ne sais pas ce qu’il veut</i> (“I do not know what he wants”), <i lang=\"fr\">je ne sais pas ce qui arrive</i> (“I do not know what is happening”).</p>",
   "qp": {
    "id": "q-fr-cls-ind",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"fr\">Il a dit qu’il ______ malade</i> (“he said that he was ill”)?",
      "options": [
       "<i lang=\"fr\">est</i>",
       "<i lang=\"fr\">sera</i>",
       "<i lang=\"fr\">était</i>",
       "<i lang=\"fr\">serait</i>"
      ],
      "answer": 2,
      "explain": "After a past main verb, the present of the original statement becomes the imperfect."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">Je ne comprends pas ______ tu dis</i> (“I do not understand what you are saying”)?",
      "options": [
       "<i lang=\"fr\">ce qui</i>",
       "<i lang=\"fr\">ce que</i>",
       "<i lang=\"fr\">que</i>",
       "<i lang=\"fr\">quoi</i>"
      ],
      "answer": 1,
      "explain": "“What” is the object of <i lang=\"fr\">dis</i>, so French writes <i lang=\"fr\">ce que</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"fr\">Elle demande ______ nous venons</i> (“she asks whether we are coming”)?",
      "options": [
       "<i lang=\"fr\">si</i>",
       "<i lang=\"fr\">que</i>",
       "<i lang=\"fr\">ce que</i>",
       "<i lang=\"fr\">dont</i>"
      ],
      "answer": 0,
      "explain": "A reported yes-or-no question is introduced by <i lang=\"fr\">si</i>."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The participle in place of a clause",
   "body": "<p>French, like Latin, can use a participle where English would often use a clause. The gerund (<i lang=\"fr\">en</i> with the present participle) has the same subject as the main verb and tells the time, the means, or the manner: <i lang=\"fr\">en sortant, elle a fermé la porte</i> (“as she went out, she closed the door”). The present participle without <i lang=\"fr\">en</i> can give a cause: <i lang=\"fr\">sachant la vérité, il s’est tu</i> (“knowing the truth, he fell silent”). <i lang=\"fr\">Ayant</i> or <i lang=\"fr\">étant</i> with the past participle gives an action completed before the main action: <i lang=\"fr\">ayant terminé son travail, elle est sortie</i> (“having finished her work, she went out”).</p>\n<p>A noun with a past participle can also stand apart from the main clause, much like the Latin ablative absolute: <i lang=\"fr\">la nuit tombée, ils sont rentrés</i> (“when night had fallen, they went home”).</p>",
   "qp": {
    "id": "q-fr-cls-ptc",
    "variants": [
     {
      "prompt": "What does <i lang=\"fr\">en lisant</i> mean in <i lang=\"fr\">Il s’est endormi en lisant</i>?",
      "options": [
       "“having read”",
       "“in order to read”",
       "“while reading”",
       "“in the reading room”"
      ],
      "answer": 2,
      "explain": "The gerund tells what the subject was doing at the same time."
     },
     {
      "prompt": "What does <i lang=\"fr\">ayant compris</i> express in <i lang=\"fr\">Ayant compris, il a souri</i>?",
      "options": [
       "An action going on at the same time",
       "An action completed earlier",
       "A purpose",
       "A condition contrary to fact"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Ayant</i> with the past participle gives the earlier action: “having understood.”"
     },
     {
      "prompt": "Which Latin construction does <i lang=\"fr\">le dîner fini</i> (“dinner being over”) resemble?",
      "options": [
       "The ablative absolute",
       "The accusative with the infinitive",
       "The gerundive of purpose",
       "The dative of possession"
      ],
      "answer": 0,
      "explain": "A noun with a participle standing apart from the main clause resembles the ablative absolute."
     }
    ]
   }
  },
  {
   "id": "purpose-result",
   "title": "Purpose and result",
   "body": "<p>A clause of purpose tells the end for which something is done. French introduces it with <i lang=\"fr\">pour que</i> or <i lang=\"fr\">afin que</i> and puts its verb in the subjunctive: <i lang=\"fr\">je parle lentement pour que tu comprennes</i> (“I speak slowly so that you may understand”). When the subject of the purpose is the same as the subject of the main verb, French uses <i lang=\"fr\">pour</i> or <i lang=\"fr\">afin de</i> with the infinitive instead: <i lang=\"fr\">je travaille pour réussir</i> (“I work in order to succeed”).</p>\n<p>A clause of result tells what follows from the action. French prepares it with <i lang=\"fr\">si</i> or <i lang=\"fr\">tellement</i> before an adjective or adverb, or with <i lang=\"fr\">tant</i> before a verb, and introduces it with <i lang=\"fr\">que</i>; the result is stated as a fact, so the verb is in the indicative: <i lang=\"fr\">il parlait si vite que personne ne le comprenait</i> (“he spoke so fast that no one understood him”). <i lang=\"fr\">De sorte que</i> takes the indicative when it states a result and the subjunctive when it states a purpose: <i lang=\"fr\">il a crié, de sorte que tout le monde l’a entendu</i> (“he shouted, so that everyone heard him”), but <i lang=\"fr\">parle de sorte qu’on t’entende</i> (“speak so that people may hear you”).</p>",
   "qp": {
    "id": "q-fr-clauses-purpose",
    "variants": [
     {
      "prompt": "Which mood follows <i lang=\"fr\">pour que</i>?",
      "options": [
       "The indicative",
       "The subjunctive",
       "The conditional",
       "The imperative"
      ],
      "answer": 1,
      "explain": "<i lang=\"fr\">Pour que</i> and <i lang=\"fr\">afin que</i> take the subjunctive."
     },
     {
      "prompt": "Which mood does a clause of result after <i lang=\"fr\">si … que</i> take?",
      "options": [
       "The subjunctive",
       "The conditional",
       "The indicative",
       "The infinitive"
      ],
      "answer": 2,
      "explain": "The result is stated as a fact, so the verb is in the indicative."
     },
     {
      "prompt": "When does French use <i lang=\"fr\">pour</i> with the infinitive for purpose?",
      "options": [
       "When the subject is different",
       "When the purpose is a fact",
       "When the main verb is past",
       "When the subject is the same"
      ],
      "answer": 3,
      "explain": "With the same subject, <i lang=\"fr\">pour</i> or <i lang=\"fr\">afin de</i> takes the infinitive."
     }
    ]
   }
  },
  {
   "id": "time",
   "title": "Temporal clauses",
   "body": "<p>A temporal clause tells when the action of the main verb takes place. <i lang=\"fr\">Quand</i> and <i lang=\"fr\">lorsque</i> (“when”), <i lang=\"fr\">pendant que</i> (“while”), <i lang=\"fr\">depuis que</i> (“since”), and <i lang=\"fr\">après que</i> (“after”) state a time that is real, so they take the indicative: <i lang=\"fr\">quand il pleut, nous restons à la maison</i> (“when it rains, we stay at home”). The grammars require the indicative after <i lang=\"fr\">après que</i>, although the subjunctive is common in speech.</p>\n<p><i lang=\"fr\">Avant que</i> (“before”) and <i lang=\"fr\">jusqu’à ce que</i> (“until”) look forward to something that has not yet happened, so they take the subjunctive: <i lang=\"fr\">rentre avant qu’il pleuve</i> (“come home before it rains”). After <i lang=\"fr\">avant que</i> written French often adds a <i lang=\"fr\">ne</i> that is not a negation (the expletive <i lang=\"fr\">ne</i>): <i lang=\"fr\">avant qu’il ne pleuve</i> means the same thing.</p>",
   "qp": {
    "id": "q-fr-clauses-time",
    "variants": [
     {
      "prompt": "Which mood follows <i lang=\"fr\">avant que</i>?",
      "options": [
       "The subjunctive",
       "The indicative",
       "The conditional",
       "The infinitive"
      ],
      "answer": 0,
      "explain": "<i lang=\"fr\">Avant que</i> looks forward to what has not yet happened and takes the subjunctive."
     },
     {
      "prompt": "What is the <i lang=\"fr\">ne</i> in <i lang=\"fr\">avant qu’il ne pleuve</i>?",
      "options": [
       "A negation of the rain",
       "Part of the verb",
       "A pronoun",
       "An expletive, not a negation"
      ],
      "answer": 3,
      "explain": "The expletive <i lang=\"fr\">ne</i> adds no negation; the sentence means “before it rains.”"
     },
     {
      "prompt": "Which mood do the grammars require after <i lang=\"fr\">après que</i>?",
      "options": [
       "The subjunctive",
       "The conditional",
       "The indicative",
       "The imperative"
      ],
      "answer": 2,
      "explain": "<i lang=\"fr\">Après que</i> states a time that is real and takes the indicative."
     }
    ]
   }
  }
 ]
};
