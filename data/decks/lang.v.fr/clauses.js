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
   "body": "<p>The French relative pronoun shows its use in its own clause by its form. <i>Qui</i> is the subject: <i>l’élève qui chante</i> (“the pupil who is singing”). <i>Que</i> (<i>qu’</i> before a vowel) is the direct object: <i>la chanson que nous chantons</i> (“the song that we are singing”). <i>Dont</i> stands for <i>de</i> with the relative and means “of which,” “of whom,” or “whose”: <i>le professeur dont je connais le fils</i> (“the teacher whose son I know”). <i>Où</i> gives the place or the time: <i>le café où nous déjeunons</i> (“the café where we have lunch”), <i>l’année où il est né</i> (“the year when he was born”).</p>\n<p>After other prepositions French uses <i>lequel</i>, which agrees with its antecedent in gender and number: <i>le stylo avec lequel j’écris</i> (“the pen with which I write”), <i>la table sur laquelle il travaille</i> (“the table on which he works”). For persons, <i>qui</i> is also used after a preposition: <i>l’ami avec qui je voyage</i>.</p>",
   "qp": {
    "id": "q-fr-cls-rel",
    "variants": [
     {
      "prompt": "Which form completes <i>Le film ______ nous avons vu était long</i> (“the film that we saw was long”)?",
      "options": [
       "<i>que</i>",
       "<i>qui</i>",
       "<i>dont</i>",
       "<i>où</i>"
      ],
      "answer": 0,
      "explain": "The relative is the direct object of <i>avons vu</i>, so it is <i>que</i>."
     },
     {
      "prompt": "Which form completes <i>La femme ______ je connais la sœur est ici</i> (“the woman whose sister I know is here”)?",
      "options": [
       "<i>que</i>",
       "<i>qui</i>",
       "<i>où</i>",
       "<i>dont</i>"
      ],
      "answer": 3,
      "explain": "<i>Dont</i> means “whose,” standing for <i>de</i> with the relative."
     },
     {
      "prompt": "Which form completes <i>la boîte dans ______ il garde ses lettres</i> (“the box in which he keeps his letters”)?",
      "options": [
       "<i>lequel</i>",
       "<i>que</i>",
       "<i>laquelle</i>",
       "<i>lesquelles</i>"
      ],
      "answer": 2,
      "explain": "After <i>dans</i>, French uses <i>lequel</i>, which agrees with <i>boîte</i>, feminine singular."
     }
    ]
   }
  },
  {
   "id": "conditions",
   "title": "Causal clauses and conditions",
   "body": "<p>A clause of cause is introduced by <i>parce que</i> (“because”), which answers the question <i>pourquoi ?</i>, or by <i>comme</i> and <i>puisque</i> (“since”), which usually come first and give a cause that is already known: <i>comme il était tard, nous sommes rentrés</i> (“since it was late, we went home”). These clauses state a fact and take the indicative.</p>\n<p>In a condition with <i>si</i>, the tenses follow a fixed pattern. <i>Si</i> with the present goes with the present, the future, or the imperative: <i>s’il pleut demain, nous resterons</i> (“if it rains tomorrow, we will stay”). <i>Si</i> with the imperfect goes with the conditional: <i>s’il pleuvait, nous resterions</i> (“if it were raining, we would stay”). <i>Si</i> with the pluperfect goes with the past conditional: <i>s’il avait plu, nous serions restés</i> (“if it had rained, we would have stayed”). <i>Si</i> becomes <i>s’</i> only before <i>il</i> and <i>ils</i>.</p>",
   "qp": {
    "id": "q-fr-cls-cond",
    "variants": [
     {
      "prompt": "Which form completes <i>Si nous partons tôt, nous ______ à midi</i> (“if we leave early, we will arrive at noon”)?",
      "options": [
       "<i>arriverions</i>",
       "<i>arriverons</i>",
       "<i>arrivions</i>",
       "<i>arrivons</i>"
      ],
      "answer": 1,
      "explain": "<i>Si</i> with the present goes with the future."
     },
     {
      "prompt": "Which form completes <i>S’il avait su, il ______ venu</i> (“if he had known, he would have come”)?",
      "options": [
       "<i>sera</i>",
       "<i>était</i>",
       "<i>serait</i>",
       "<i>aurait</i>"
      ],
      "answer": 2,
      "explain": "<i>Si</i> with the pluperfect goes with the past conditional, here <i>serait venu</i>."
     },
     {
      "prompt": "Before which word does <i>si</i> become <i>s’</i>?",
      "options": [
       "<i>elle</i>",
       "<i>on</i>",
       "<i>un</i>",
       "<i>il</i>"
      ],
      "answer": 3,
      "explain": "<i>Si</i> is elided only before <i>il</i> and <i>ils</i>: <i>s’il</i>, but <i>si elle</i>."
     }
    ]
   }
  },
  {
   "id": "indirect",
   "title": "Indirect discourse and indirect questions",
   "body": "<p>A statement is reported with <i>que</i> and the indicative: <i>elle dit qu’elle est fatiguée</i> (“she says that she is tired”). When the main verb is in a past tense, the tense of the reported verb moves back: the present becomes the imperfect, and the future becomes the conditional. So <i>elle a dit qu’elle était fatiguée</i> (“she said that she was tired”), and <i>il a dit qu’il viendrait</i> (“he said that he would come”).</p>\n<p>A question is reported with <i>si</i> (“whether”) or with a question word: <i>je me demande si elle viendra</i> (“I wonder whether she will come”), <i>dis-moi où tu vas</i> (“tell me where you are going”). For “what,” French writes <i>ce que</i> when it is the object and <i>ce qui</i> when it is the subject: <i>je ne sais pas ce qu’il veut</i> (“I do not know what he wants”), <i>je ne sais pas ce qui arrive</i> (“I do not know what is happening”).</p>",
   "qp": {
    "id": "q-fr-cls-ind",
    "variants": [
     {
      "prompt": "Which form completes <i>Il a dit qu’il ______ malade</i> (“he said that he was ill”)?",
      "options": [
       "<i>est</i>",
       "<i>sera</i>",
       "<i>était</i>",
       "<i>serait</i>"
      ],
      "answer": 2,
      "explain": "After a past main verb, the present of the original statement becomes the imperfect."
     },
     {
      "prompt": "Which form completes <i>Je ne comprends pas ______ tu dis</i> (“I do not understand what you are saying”)?",
      "options": [
       "<i>ce qui</i>",
       "<i>ce que</i>",
       "<i>que</i>",
       "<i>quoi</i>"
      ],
      "answer": 1,
      "explain": "“What” is the object of <i>dis</i>, so French writes <i>ce que</i>."
     },
     {
      "prompt": "Which form completes <i>Elle demande ______ nous venons</i> (“she asks whether we are coming”)?",
      "options": [
       "<i>si</i>",
       "<i>que</i>",
       "<i>ce que</i>",
       "<i>dont</i>"
      ],
      "answer": 0,
      "explain": "A reported yes-or-no question is introduced by <i>si</i>."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The participle in place of a clause",
   "body": "<p>French, like Latin, can use a participle where English would often use a clause. The gerund (<i>en</i> with the present participle) has the same subject as the main verb and tells the time, the means, or the manner: <i>en sortant, elle a fermé la porte</i> (“as she went out, she closed the door”). The present participle without <i>en</i> can give a cause: <i>sachant la vérité, il s’est tu</i> (“knowing the truth, he fell silent”). <i>Ayant</i> or <i>étant</i> with the past participle gives an action completed before the main action: <i>ayant terminé son travail, elle est sortie</i> (“having finished her work, she went out”).</p>\n<p>A noun with a past participle can also stand apart from the main clause, much like the Latin ablative absolute: <i>la nuit tombée, ils sont rentrés</i> (“when night had fallen, they went home”).</p>",
   "qp": {
    "id": "q-fr-cls-ptc",
    "variants": [
     {
      "prompt": "What does <i>en lisant</i> mean in <i>Il s’est endormi en lisant</i>?",
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
      "prompt": "What does <i>ayant compris</i> express in <i>Ayant compris, il a souri</i>?",
      "options": [
       "An action going on at the same time",
       "An action completed earlier",
       "A purpose",
       "A condition contrary to fact"
      ],
      "answer": 1,
      "explain": "<i>Ayant</i> with the past participle gives the earlier action: “having understood.”"
     },
     {
      "prompt": "Which Latin construction does <i>le dîner fini</i> (“dinner being over”) resemble?",
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
   "body": "<p>A clause of purpose tells the end for which something is done. French introduces it with <i>pour que</i> or <i>afin que</i> and puts its verb in the subjunctive: <i>je parle lentement pour que tu comprennes</i> (“I speak slowly so that you may understand”). When the subject of the purpose is the same as the subject of the main verb, French uses <i>pour</i> or <i>afin de</i> with the infinitive instead: <i>je travaille pour réussir</i> (“I work in order to succeed”).</p>\n<p>A clause of result tells what follows from the action. French prepares it with <i>si</i> or <i>tellement</i> before an adjective or adverb, or with <i>tant</i> before a verb, and introduces it with <i>que</i>; the result is stated as a fact, so the verb is in the indicative: <i>il parlait si vite que personne ne le comprenait</i> (“he spoke so fast that no one understood him”). <i>De sorte que</i> takes the indicative when it states a result and the subjunctive when it states a purpose: <i>il a crié, de sorte que tout le monde l’a entendu</i> (“he shouted, so that everyone heard him”), but <i>parle de sorte qu’on t’entende</i> (“speak so that people may hear you”).</p>",
   "qp": {
    "id": "q-fr-clauses-purpose",
    "variants": [
     {
      "prompt": "Which mood follows <i>pour que</i>?",
      "options": [
       "The indicative",
       "The subjunctive",
       "The conditional",
       "The imperative"
      ],
      "answer": 1,
      "explain": "<i>Pour que</i> and <i>afin que</i> take the subjunctive."
     },
     {
      "prompt": "Which mood does a clause of result after <i>si … que</i> take?",
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
      "prompt": "When does French use <i>pour</i> with the infinitive for purpose?",
      "options": [
       "When the subject is different",
       "When the purpose is a fact",
       "When the main verb is past",
       "When the subject is the same"
      ],
      "answer": 3,
      "explain": "With the same subject, <i>pour</i> or <i>afin de</i> takes the infinitive."
     }
    ]
   }
  },
  {
   "id": "time",
   "title": "Temporal clauses",
   "body": "<p>A temporal clause tells when the action of the main verb takes place. <i>Quand</i> and <i>lorsque</i> (“when”), <i>pendant que</i> (“while”), <i>depuis que</i> (“since”), and <i>après que</i> (“after”) state a time that is real, so they take the indicative: <i>quand il pleut, nous restons à la maison</i> (“when it rains, we stay at home”). The grammars require the indicative after <i>après que</i>, although the subjunctive is common in speech.</p>\n<p><i>Avant que</i> (“before”) and <i>jusqu’à ce que</i> (“until”) look forward to something that has not yet happened, so they take the subjunctive: <i>rentre avant qu’il pleuve</i> (“come home before it rains”). After <i>avant que</i> written French often adds a <i>ne</i> that is not a negation (the expletive <i>ne</i>): <i>avant qu’il ne pleuve</i> means the same thing.</p>",
   "qp": {
    "id": "q-fr-clauses-time",
    "variants": [
     {
      "prompt": "Which mood follows <i>avant que</i>?",
      "options": [
       "The subjunctive",
       "The indicative",
       "The conditional",
       "The infinitive"
      ],
      "answer": 0,
      "explain": "<i>Avant que</i> looks forward to what has not yet happened and takes the subjunctive."
     },
     {
      "prompt": "What is the <i>ne</i> in <i>avant qu’il ne pleuve</i>?",
      "options": [
       "A negation of the rain",
       "Part of the verb",
       "A pronoun",
       "An expletive, not a negation"
      ],
      "answer": 3,
      "explain": "The expletive <i>ne</i> adds no negation; the sentence means “before it rains.”"
     },
     {
      "prompt": "Which mood do the grammars require after <i>après que</i>?",
      "options": [
       "The subjunctive",
       "The conditional",
       "The indicative",
       "The imperative"
      ],
      "answer": 2,
      "explain": "<i>Après que</i> states a time that is real and takes the indicative."
     }
    ]
   }
  }
 ]
};
