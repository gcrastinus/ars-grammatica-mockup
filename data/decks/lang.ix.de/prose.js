window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ix.de/prose"] = {
 "id": "lang.ix.de/prose",
 "title": "German Prose",
 "sub": "Fifteen passages of German prose, from the Grimms to Nietzsche, read part by part",
 "sources": "Duden",
 "panels": [
  {
   "id": "prose-1",
   "title": "Kant, <em lang=\"de\">Grundlegung zur Metaphysik der Sitten</em> I",
   "body": "<p lang=\"de\">Es ist überall nichts in der Welt, ja überhaupt auch außer derselben zu denken möglich, was ohne Einschränkung für gut könnte gehalten werden, als allein ein guter Wille.</p><p>Nothing can possibly be conceived in the world, or even out of it, which can be called good, without qualification, except a good will.<br>Translation: Thomas Kingsmill Abbott.</p><p><strong>Context.</strong> This is the first sentence of Kant’s <em lang=\"de\">Groundwork</em>. It holds back its answer to the very end, after a long relative clause: only a good will is good without qualification.</p>",
   "qp": {
    "id": "q-de-ixp-prose-1",
    "variants": [
     {
      "prompt": "What does <em lang=\"de\">Es ist … nichts</em> mean?",
      "options": [
       "“it is not,” with <em lang=\"de\">es</em> as the real subject",
       "“nothing is it”",
       "“there is nothing”",
       "“it was nothing”"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Es</em> fills the first place, and <em lang=\"de\">nichts</em> is the real subject."
     },
     {
      "prompt": "What does <em lang=\"de\">zu denken</em> complete?",
      "options": [
       "<em lang=\"de\">ist</em>, as a second main verb",
       "<em lang=\"de\">möglich</em>",
       "<em lang=\"de\">Welt</em>",
       "<em lang=\"de\">nichts</em>"
      ],
      "answer": 1,
      "explain": "<em lang=\"de\">Zu denken</em> completes the adjective <em lang=\"de\">möglich</em>: “possible to think.”"
     },
     {
      "prompt": "What does <em lang=\"de\">was</em> take up?",
      "options": [
       "<em lang=\"de\">nichts</em>",
       "<em lang=\"de\">Wille</em>, the answer at the end",
       "<em lang=\"de\">Welt</em>",
       "<em lang=\"de\">Einschränkung</em>"
      ],
      "answer": 0,
      "explain": "After <em lang=\"de\">nichts</em>, the relative is <em lang=\"de\">was</em>."
     }
    ]
   }
  },
  {
   "id": "prose-2",
   "title": "The main clause",
   "body": "<p><em lang=\"de\">Es ist überall nichts in der Welt</em>: <em lang=\"de\">Es ist … nichts</em> means “there is nothing.” <em lang=\"de\">Es</em> fills the first place, and <em lang=\"de\">nichts</em> is the real subject.</p>"
  },
  {
   "id": "prose-3",
   "title": "A preposition with the dative",
   "body": "<p><em lang=\"de\">ja überhaupt auch außer derselben</em>: <em lang=\"de\">Außer</em>, “outside,” takes the dative. <em lang=\"de\">Derselben</em>, “the same,” is dative feminine and stands for <em lang=\"de\">der Welt</em>.</p>"
  },
  {
   "id": "prose-4",
   "title": "The infinitive with zu",
   "body": "<p><em lang=\"de\">zu denken möglich</em>: <em lang=\"de\">Zu denken möglich</em> means “possible to think”; the infinitive with <em lang=\"de\">zu</em> completes the adjective.</p>"
  },
  {
   "id": "prose-5",
   "title": "A relative clause with the verb at the end",
   "body": "<p><em lang=\"de\">was ohne Einschränkung für gut könnte gehalten werden</em>: <em lang=\"de\">Was</em> takes up <em lang=\"de\">nichts</em>. In the relative clause the verbs go to the end: <em lang=\"de\">könnte gehalten werden</em>, “could be held,” with the subjunctive <em lang=\"de\">könnte</em> placed before the passive infinitive, as the older order allowed. <em lang=\"de\">Für gut halten</em> means “to hold to be good.”</p>"
  },
  {
   "id": "prose-6",
   "title": "The answer at the end",
   "body": "<p><em lang=\"de\">als allein ein guter Wille</em>: <em lang=\"de\">Als</em>, “except,” after a negative brings in the one thing excepted. <em lang=\"de\">Ein guter Wille</em> is nominative, with the strong ending <em lang=\"de\">-er</em> on the adjective after <em lang=\"de\">ein</em>.</p>"
  },
  {
   "id": "prose-7",
   "title": "Kant, <em lang=\"de\">Kritik der reinen Vernunft</em> A vii",
   "body": "<p lang=\"de\">Die menschliche Vernunft hat das besondere Schicksal in einer Gattung ihrer Erkenntnisse: dass sie durch Fragen belästigt wird, die sie nicht abweisen kann; denn sie sind ihr durch die Natur der Vernunft selbst aufgegeben, die sie aber auch nicht beantworten kann; denn sie übersteigen alles Vermögen der menschlichen Vernunft.</p><p>Human reason, in one sphere of its cognition, is called upon to consider questions, which it cannot decline, as they are presented by its own nature, but which it cannot answer, as they transcend every faculty of the mind.<br>Translation: J. M. D. Meiklejohn.</p><p><strong>Context.</strong> Kant’s first preface begins with the strange fate of reason: it is pressed by questions it can neither set aside nor answer. The sentence turns on two relative clauses, each followed by a reason with <em lang=\"de\">denn</em>.</p>",
   "qp": {
    "id": "q-de-ixp-prose-7",
    "variants": [
     {
      "prompt": "What ending do the adjectives take in <em lang=\"de\">Die menschliche Vernunft</em>?",
      "options": [
       "The weak ending <em lang=\"de\">-e</em>",
       "The strong ending <em lang=\"de\">-er</em>, which shows the feminine",
       "<em lang=\"de\">-en</em>",
       "No ending"
      ],
      "answer": 0,
      "explain": "After the article the adjective is weak."
     },
     {
      "prompt": "What does <em lang=\"de\">durch</em> give in <em lang=\"de\">durch Fragen belästigt wird</em>?",
      "options": [
       "The place through which reason passes",
       "The time",
       "The purpose",
       "The means"
      ],
      "answer": 3,
      "explain": "<em lang=\"de\">Durch</em> gives the means by which reason is troubled: by questions."
     },
     {
      "prompt": "What do the two relative clauses beginning with <em lang=\"de\">die</em> stand for?",
      "options": [
       "<em lang=\"de\">Vernunft</em>, the subject of the sentence",
       "<em lang=\"de\">Natur</em>",
       "<em lang=\"de\">Fragen</em>",
       "<em lang=\"de\">Erkenntnisse</em>"
      ],
      "answer": 2,
      "explain": "Both relative clauses take up <em lang=\"de\">Fragen</em>: questions which it cannot decline and cannot answer."
     }
    ]
   }
  },
  {
   "id": "prose-8",
   "title": "The main clause",
   "body": "<p><em lang=\"de\">Die menschliche Vernunft hat das besondere Schicksal</em>: <em lang=\"de\">Die menschliche Vernunft</em> is the subject, and <em lang=\"de\">das besondere Schicksal</em> the object. The adjectives take the weak ending <em lang=\"de\">-e</em> after the article.</p>"
  },
  {
   "id": "prose-9",
   "title": "A clause with <em lang=\"de\">dass</em>, and the passive",
   "body": "<p><em lang=\"de\">dass sie durch Fragen belästigt wird</em>: <em lang=\"de\">Dass</em> sends the verb to the end. <em lang=\"de\">Belästigt wird</em>, “is troubled,” is the passive with <em lang=\"de\">werden</em>, and <em lang=\"de\">durch</em> gives the means.</p>"
  },
  {
   "id": "prose-10",
   "title": "A relative clause",
   "body": "<p><em lang=\"de\">die sie nicht abweisen kann</em>: <em lang=\"de\">Die</em> is the relative pronoun, plural, object of <em lang=\"de\">abweisen</em>, and it stands for <em lang=\"de\">Fragen</em>. <em lang=\"de\">Sie</em> is reason. The verb <em lang=\"de\">kann</em> goes to the end.</p>"
  },
  {
   "id": "prose-11",
   "title": "<em lang=\"de\">Denn</em>: main clause order",
   "body": "<p><em lang=\"de\">denn sie sind ihr durch die Natur der Vernunft selbst aufgegeben</em>: <em lang=\"de\">Denn</em>, “for,” does not move the verb, so <em lang=\"de\">sind</em> stays in second place. <em lang=\"de\">Ihr</em> is dative, so the sense is “set to it,” that is, to reason.</p>"
  },
  {
   "id": "prose-12",
   "title": "A second relative clause",
   "body": "<p><em lang=\"de\">die sie aber auch nicht beantworten kann</em>: A second <em lang=\"de\">die</em> takes up <em lang=\"de\">Fragen</em> again, so the sense is “questions which it also cannot answer.”</p>"
  },
  {
   "id": "prose-13",
   "title": "Goethe, <em lang=\"de\">Die Leiden des jungen Werthers</em> 4 May 1771",
   "body": "<p lang=\"de\">Wie froh bin ich, dass ich weg bin! Bester Freund, was ist das Herz des Menschen! Dich zu verlassen, den ich so liebe, von dem ich unzertrennlich war, und froh zu sein!</p><p>How happy I am that I am gone! My dear friend, what a thing is the heart of man! To leave you, from whom I have been inseparable, whom I love so dearly, and yet to feel happy!<br>Translation: R. Dillon Boylan.</p><p><strong>Context.</strong> Goethe’s novel is told in letters, and the first letter opens with three exclamations.</p>",
   "qp": {
    "id": "q-de-ixp-prose-13",
    "variants": [
     {
      "prompt": "Where does <em lang=\"de\">bin</em> stand after <em lang=\"de\">dass</em>?",
      "options": [
       "In second place, as in a main clause",
       "First",
       "After <em lang=\"de\">ich</em> and before <em lang=\"de\">weg</em>",
       "At the end"
      ],
      "answer": 3,
      "explain": "After <em lang=\"de\">dass</em> the verb goes to the end: <em lang=\"de\">dass ich weg bin</em>."
     },
     {
      "prompt": "What kind of noun is <em lang=\"de\">Mensch</em>, which takes <em lang=\"de\">-en</em> in <em lang=\"de\">des Menschen</em>?",
      "options": [
       "A weak noun",
       "A strong noun of the neuter gender",
       "A feminine noun",
       "A plural noun"
      ],
      "answer": 0,
      "explain": "Weak nouns take <em lang=\"de\">-en</em> in the oblique cases."
     },
     {
      "prompt": "What is <em lang=\"de\">Dich zu verlassen</em>?",
      "options": [
       "A clause of purpose with <em lang=\"de\">um</em> left out",
       "An infinitive used as an exclamation",
       "A finite verb",
       "A question"
      ],
      "answer": 1,
      "explain": "The infinitive stands alone as an exclamation: “to leave you!”"
     }
    ]
   }
  },
  {
   "id": "prose-14",
   "title": "An exclamation with inversion",
   "body": "<p><em lang=\"de\">Wie froh bin ich</em>: <em lang=\"de\">Wie froh</em>, “how glad,” comes first, and the verb <em lang=\"de\">bin</em> follows in second place, before its subject.</p>"
  },
  {
   "id": "prose-15",
   "title": "Verb at the end",
   "body": "<p><em lang=\"de\">dass ich weg bin</em>: After <em lang=\"de\">dass</em> the verb <em lang=\"de\">bin</em> goes to the end.</p>"
  },
  {
   "id": "prose-16",
   "title": "The address",
   "body": "<p><em lang=\"de\">Bester Freund</em>: <em lang=\"de\">Bester Freund</em>, “best friend,” has no article, and so the adjective takes the strong ending <em lang=\"de\">-er</em>.</p>"
  },
  {
   "id": "prose-17",
   "title": "The genitive",
   "body": "<p><em lang=\"de\">was ist das Herz des Menschen</em>: <em lang=\"de\">Des Menschen</em>, “of man,” is genitive. <em lang=\"de\">Mensch</em> is a weak noun, and so it takes <em lang=\"de\">-en</em>.</p>"
  },
  {
   "id": "prose-18",
   "title": "Infinitives and relative clauses",
   "body": "<p><em lang=\"de\">Dich zu verlassen, den ich so liebe, von dem ich unzertrennlich war</em>: <em lang=\"de\">Dich zu verlassen</em> (“to leave you”) is an infinitive used as an exclamation. <em lang=\"de\">Den</em> and <em lang=\"de\">von dem</em> are relatives standing for <em lang=\"de\">dich</em>, so the sense is “whom I love so much, from whom I was inseparable.”</p>"
  },
  {
   "id": "prose-19",
   "title": "Grimm, <em lang=\"de\">Der Froschkönig</em> KHM 1",
   "body": "<p lang=\"de\">In den alten Zeiten, wo das Wünschen noch geholfen hat, lebte ein König, dessen Töchter waren alle schön, aber die jüngste war so schön, dass die Sonne selber, die doch so vieles gesehen hat, sich verwunderte, so oft sie ihr ins Gesicht schien.</p><p>In old times when wishing still helped one, there lived a king whose daughters were all beautiful, but the youngest was so beautiful that the sun itself, which has seen so much, was astonished whenever it shone in her face.<br>Translation: Margaret Hunt.</p><p><strong>Context.</strong> This is the first sentence of the first tale in the Grimms’ collection. It is one long sentence that moves from the old days to a king, to his daughters, to the youngest, and to the sun.</p>",
   "qp": {
    "id": "q-de-ixp-prose-19",
    "variants": [
     {
      "prompt": "What does <em lang=\"de\">wo</em> serve for in <em lang=\"de\">wo das Wünschen noch geholfen hat</em>?",
      "options": [
       "“where,” a place in the old times",
       "“when”",
       "“because”",
       "“whether”"
      ],
      "answer": 1,
      "explain": "<em lang=\"de\">Wo</em> here means “when.”"
     },
     {
      "prompt": "What is <em lang=\"de\">das Wünschen</em>?",
      "options": [
       "A participle used as an adjective",
       "A plural noun",
       "An infinitive made a noun",
       "A verb in the present"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Das Wünschen</em>, “wishing,” is an infinitive made a noun, with the article and a capital."
     },
     {
      "prompt": "What does <em lang=\"de\">ihr</em> refer to in <em lang=\"de\">sie ihr ins Gesicht schien</em>?",
      "options": [
       "The sun, which shone",
       "The king",
       "The time",
       "The girl"
      ],
      "answer": 3,
      "explain": "It is dative: into her face."
     }
    ]
   }
  },
  {
   "id": "prose-20",
   "title": "A time clause with wo",
   "body": "<p><em lang=\"de\">In den alten Zeiten, wo das Wünschen noch geholfen hat</em>: <em lang=\"de\">Wo</em>, “where,” serves here for “when.” <em lang=\"de\">Das Wünschen</em>, “wishing,” is an infinitive made a noun. <em lang=\"de\">Geholfen hat</em> (“helped”) is the perfect, with the verb at the end.</p>"
  },
  {
   "id": "prose-21",
   "title": "The main clause, inverted",
   "body": "<p><em lang=\"de\">lebte ein König</em>: The time phrase holds the first place, so the verb <em lang=\"de\">lebte</em> comes second and the subject <em lang=\"de\">ein König</em> follows.</p>"
  },
  {
   "id": "prose-22",
   "title": "<em lang=\"de\">Dessen</em>, and a main-clause order",
   "body": "<p><em lang=\"de\">dessen Töchter waren alle schön</em>: <em lang=\"de\">Dessen</em>, “whose,” is the genitive relative. The tale keeps the verb second, <em lang=\"de\">waren</em>, in the free order of spoken narrative.</p>"
  },
  {
   "id": "prose-23",
   "title": "<em lang=\"de\">So … dass</em>",
   "body": "<p><em lang=\"de\">so schön, dass die Sonne selber</em>: <em lang=\"de\">So schön, dass</em> means “so beautiful that,” and the result clause begins with <em lang=\"de\">dass</em>.</p>"
  },
  {
   "id": "prose-24",
   "title": "A relative inside the result clause",
   "body": "<p><em lang=\"de\">die doch so vieles gesehen hat</em>: <em lang=\"de\">Die</em> takes up <em lang=\"de\">die Sonne</em>, and <em lang=\"de\">doch</em> adds “after all.”</p>"
  },
  {
   "id": "prose-25",
   "title": "A reflexive verb and a dative",
   "body": "<p><em lang=\"de\">sich verwunderte, so oft sie ihr ins Gesicht schien</em>: <em lang=\"de\">Sich verwundern</em> means “to wonder,” and <em lang=\"de\">so oft</em> means “as often as.” <em lang=\"de\">Ihr</em> is dative and refers to the girl, so the sense is “shone into her face.”</p>"
  },
  {
   "id": "prose-26",
   "title": "Grimm, <em lang=\"de\">Rumpelstilzchen</em> KHM 55",
   "body": "<p lang=\"de\">Es war einmal ein Müller, der war arm, aber er hatte eine schöne Tochter.</p><p>Once there was a miller who was poor, but who had a beautiful daughter.<br>Translation: Margaret Hunt.</p><p><strong>Context.</strong> The tale begins with the usual opening of a German tale, <em lang=\"de\">Es war einmal</em>, “once upon a time there was.”</p>",
   "qp": {
    "id": "q-de-ixp-prose-26",
    "variants": [
     {
      "prompt": "What does <em lang=\"de\">einmal</em> mean in <em lang=\"de\">Es war einmal</em>?",
      "options": [
       "“one time more,” again",
       "“never”",
       "“always”",
       "“once”"
      ],
      "answer": 3,
      "explain": "<em lang=\"de\">Einmal</em> means “once”: <em lang=\"de\">es war einmal</em>, “once upon a time there was.”"
     },
     {
      "prompt": "Does <em lang=\"de\">aber</em> move the verb?",
      "options": [
       "No",
       "Yes, to the end of the clause",
       "Yes, to the first place",
       "Only in questions"
      ],
      "answer": 0,
      "explain": "<em lang=\"de\">Aber er hatte</em>: the verb stays second."
     },
     {
      "prompt": "Why is <em lang=\"de\">der</em> in <em lang=\"de\">der war arm</em> a demonstrative?",
      "options": [
       "It is in the dative case",
       "The verb stays second",
       "It stands for a feminine noun",
       "It begins a question"
      ],
      "answer": 1,
      "explain": "In a relative clause the verb would go to the end."
     }
    ]
   }
  },
  {
   "id": "prose-27",
   "title": "<em lang=\"de\">Es war einmal</em>",
   "body": "<p><em lang=\"de\">Es war einmal ein Müller</em>: <em lang=\"de\">Es</em> fills the first place, and the subject is <em lang=\"de\">ein Müller</em> (“a miller”). <em lang=\"de\">Einmal</em> means “once.”</p>"
  },
  {
   "id": "prose-28",
   "title": "<em lang=\"de\">Der</em>: relative or demonstrative?",
   "body": "<p><em lang=\"de\">der war arm</em>: <em lang=\"de\">Der</em> could begin a relative clause, but the verb <em lang=\"de\">war</em> stays second, so it is a demonstrative: “he was poor.” The tale links plain clauses one after another.</p>"
  },
  {
   "id": "prose-29",
   "title": "<em lang=\"de\">Aber</em>",
   "body": "<p><em lang=\"de\">aber er hatte eine schöne Tochter</em>: <em lang=\"de\">Aber</em> does not move the verb. <em lang=\"de\">Eine schöne Tochter</em> is accusative feminine, with the same form as the nominative.</p>"
  },
  {
   "id": "prose-30",
   "title": "Goethe, <em lang=\"de\">Dichtung und Wahrheit</em> I.1",
   "body": "<p lang=\"de\">Am 28. August 1749, mittags mit dem Glockenschlage zwölf, kam ich in Frankfurt am Main auf die Welt.</p><p>On the 28th of August, 1749, at mid-day, as the clock struck twelve, I came into the world, at Frankfort-on-the-Main.<br>Translation: John Oxenford.</p><p><strong>Context.</strong> Goethe opens his autobiography with the hour of his birth.</p>",
   "qp": {
    "id": "q-de-ixp-prose-30",
    "variants": [
     {
      "prompt": "What is <em lang=\"de\">am</em>?",
      "options": [
       "<em lang=\"de\">an dem</em>",
       "<em lang=\"de\">an den</em>, with the accusative",
       "<em lang=\"de\">auf dem</em>",
       "<em lang=\"de\">in dem</em>"
      ],
      "answer": 0,
      "explain": "<em lang=\"de\">Am</em> is the contraction of <em lang=\"de\">an dem</em>: “on the.”"
     },
     {
      "prompt": "What does <em lang=\"de\">auf die Welt kommen</em> mean?",
      "options": [
       "“to travel around the world”",
       "“to die”",
       "“to come home”",
       "“to be born”"
      ],
      "answer": 3,
      "explain": "<em lang=\"de\">Auf die Welt kommen</em>, with the accusative of motion, means “to be born.”"
     },
     {
      "prompt": "What old ending does <em lang=\"de\">Glockenschlage</em> keep?",
      "options": [
       "The genitive <em lang=\"de\">-s</em>",
       "The plural <em lang=\"de\">-e</em>",
       "The dative <em lang=\"de\">-e</em>",
       "The accusative <em lang=\"de\">-en</em>"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Glockenschlage</em> keeps the old dative <em lang=\"de\">-e</em>: “with the stroke of the bell.”"
     }
    ]
   }
  },
  {
   "id": "prose-31",
   "title": "Dates",
   "body": "<p><em lang=\"de\">Am 28. August 1749</em>: <em lang=\"de\">Am</em> is <em lang=\"de\">an dem</em> (“on the”). The ordinal is written with a period, <em lang=\"de\">am 28.</em>, and read <em lang=\"de\">am achtundzwanzigsten</em> (“on the twenty-eighth”).</p>"
  },
  {
   "id": "prose-32",
   "title": "An adverb of time and an old dative",
   "body": "<p><em lang=\"de\">mittags mit dem Glockenschlage zwölf</em>: <em lang=\"de\">Mittags</em>, “at noon,” is an old genitive used as an adverb. <em lang=\"de\">Glockenschlage</em> keeps the old dative <em lang=\"de\">-e</em>.</p>"
  },
  {
   "id": "prose-33",
   "title": "Verb second",
   "body": "<p><em lang=\"de\">kam ich in Frankfurt am Main auf die Welt</em>: The time phrases fill the first place, so <em lang=\"de\">kam</em> comes before <em lang=\"de\">ich</em>. <em lang=\"de\">Auf die Welt kommen</em> means “to be born,” with the accusative of motion.</p>"
  },
  {
   "id": "prose-34",
   "title": "Marx and Engels, <em lang=\"de\">Manifest der Kommunistischen Partei</em> Preamble",
   "body": "<p lang=\"de\">Ein Gespenst geht um in Europa – das Gespenst des Kommunismus. Alle Mächte des alten Europa haben sich zu einer heiligen Hetzjagd gegen dies Gespenst verbündet, der Papst und der Zar, Metternich und Guizot, französische Radikale und deutsche Polizisten.</p><p>A spectre is haunting Europe—the spectre of Communism. All the Powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Czar, Metternich and Guizot, French Radicals and German police-spies.<br>Translation: Samuel Moore.</p><p><strong>Context.</strong> This is the opening of the <em lang=\"de\">Manifesto</em>. The second sentence puts its participle at the end and then lists the allies in pairs.</p>",
   "qp": {
    "id": "q-de-ixp-prose-34",
    "variants": [
     {
      "prompt": "What does <em lang=\"de\">umgehen</em>, said of ghosts, mean?",
      "options": [
       "“to walk about”",
       "“to go around,” to avoid something",
       "“to disappear”",
       "“to fall down”"
      ],
      "answer": 0,
      "explain": "Said of ghosts, <em lang=\"de\">umgehen</em> means “to walk about”: <em lang=\"de\">ein Gespenst geht um</em>."
     },
     {
      "prompt": "What case does <em lang=\"de\">gegen</em> take?",
      "options": [
       "The dative, like <em lang=\"de\">zu</em> before it",
       "The genitive",
       "The nominative",
       "The accusative"
      ],
      "answer": 3,
      "explain": "<em lang=\"de\">Gegen</em> takes the accusative: <em lang=\"de\">gegen dies Gespenst</em>."
     },
     {
      "prompt": "What is <em lang=\"de\">Mächte</em>?",
      "options": [
       "A verb, “might,” in the subjunctive",
       "A dative singular",
       "The plural of <em lang=\"de\">Macht</em>",
       "An adjective"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Mächte</em>, “powers,” is the plural of <em lang=\"de\">Macht</em>, with umlaut and <em lang=\"de\">-e</em>."
     }
    ]
   }
  },
  {
   "id": "prose-35",
   "title": "A separable verb",
   "body": "<p><em lang=\"de\">Ein Gespenst geht um in Europa</em>: <em lang=\"de\">Umgehen</em>, “to walk about,” said of ghosts, splits: <em lang=\"de\">geht … um</em>. The prefix would close the clause, but <em lang=\"de\">in Europa</em> is put after it for weight.</p>"
  },
  {
   "id": "prose-36",
   "title": "Apposition and the genitive",
   "body": "<p><em lang=\"de\">das Gespenst des Kommunismus</em>: The dash introduces a restatement of the subject (“the specter of communism”). <em lang=\"de\">Des Kommunismus</em> is genitive.</p>"
  },
  {
   "id": "prose-37",
   "title": "The subject",
   "body": "<p><em lang=\"de\">Alle Mächte des alten Europa</em>: <em lang=\"de\">Mächte</em> (“powers”) is the plural of <em lang=\"de\">Macht</em>. In <em lang=\"de\">des alten Europa</em> (“of old Europe”) the place name has no genitive <em lang=\"de\">-s</em>, as place names after an adjective may do.</p>"
  },
  {
   "id": "prose-38",
   "title": "The perfect brackets the clause",
   "body": "<p><em lang=\"de\">haben sich zu einer heiligen Hetzjagd gegen dies Gespenst verbündet</em>: <em lang=\"de\">Haben</em> stands second and the participle <em lang=\"de\">verbündet</em> closes the clause; all the rest stands between. <em lang=\"de\">Zu</em> takes the dative, <em lang=\"de\">gegen</em> the accusative.</p>"
  },
  {
   "id": "prose-39",
   "title": "Adjectives without an article",
   "body": "<p><em lang=\"de\">französische Radikale und deutsche Polizisten</em>: With no article, the plural adjectives take the strong ending <em lang=\"de\">-e</em>.</p>"
  },
  {
   "id": "prose-40",
   "title": "Nietzsche, <em lang=\"de\">Also sprach Zarathustra</em> Vorrede 1",
   "body": "<p lang=\"de\">Als Zarathustra dreißig Jahr alt war, verließ er seine Heimat und den See seiner Heimat und ging in das Gebirge. Hier genoss er seines Geistes und seiner Einsamkeit und wurde dessen zehn Jahre nicht müde.</p><p>When Zarathustra was thirty years old, he left his home and the lake of his home, and went into the mountains. There he enjoyed his spirit and solitude, and for ten years did not weary of it.<br>Translation: Thomas Common.</p><p><strong>Context.</strong> This is the beginning of the prologue. Nietzsche writes in a biblical manner, and he keeps the older genitive objects with <em lang=\"de\">genießen</em> (“to enjoy”) and <em lang=\"de\">müde</em> (“tired”).</p>",
   "qp": {
    "id": "q-de-ixp-prose-40",
    "variants": [
     {
      "prompt": "Why does <em lang=\"de\">Jahr</em> stay singular in <em lang=\"de\">dreißig Jahr</em>?",
      "options": [
       "It is a genitive singular",
       "It is an old plural without an ending",
       "It agrees with Zarathustra",
       "Nouns of measure often do"
      ],
      "answer": 3,
      "explain": "In <em lang=\"de\">dreißig Jahr</em> the noun stays singular, as nouns of measure often do."
     },
     {
      "prompt": "What case is <em lang=\"de\">seiner Heimat</em> in <em lang=\"de\">den See seiner Heimat</em>?",
      "options": [
       "Genitive",
       "Dative, after a verb of leaving",
       "Accusative",
       "Nominative"
      ],
      "answer": 0,
      "explain": "<em lang=\"de\">Seiner Heimat</em> is genitive: “the lake of his home.”"
     },
     {
      "prompt": "What does <em lang=\"de\">einer Sache müde werden</em> mean?",
      "options": [
       "“to make a thing tired”",
       "“to grow weary of a thing”",
       "“to rest from work”",
       "“to become sleepy”"
      ],
      "answer": 1,
      "explain": "<em lang=\"de\">Müde</em> takes the genitive of the thing one grows weary of."
     }
    ]
   }
  },
  {
   "id": "prose-41",
   "title": "<em lang=\"de\">Als</em>: a single past event",
   "body": "<p><em lang=\"de\">Als Zarathustra dreißig Jahr alt war</em>: <em lang=\"de\">Als</em>, “when,” is used for one past occasion, and it sends the verb to the end. In <em lang=\"de\">dreißig Jahr</em> (“thirty years”) the noun stays singular, as nouns of measure often do.</p>"
  },
  {
   "id": "prose-42",
   "title": "Verb first after the clause",
   "body": "<p><em lang=\"de\">verließ er seine Heimat</em>: The <em lang=\"de\">als</em> clause fills the first place, so <em lang=\"de\">verließ</em> comes next, then the subject <em lang=\"de\">er</em>.</p>"
  },
  {
   "id": "prose-43",
   "title": "The genitive",
   "body": "<p><em lang=\"de\">den See seiner Heimat</em>: <em lang=\"de\">Seiner Heimat</em> is genitive feminine, so the sense is “the lake of his home.”</p>"
  },
  {
   "id": "prose-44",
   "title": "An old genitive object",
   "body": "<p><em lang=\"de\">genoss er seines Geistes und seiner Einsamkeit</em>: <em lang=\"de\">Genießen</em> (“to enjoy”) now takes the accusative, but here it has the older genitive: <em lang=\"de\">seines Geistes</em> (“his spirit”) and <em lang=\"de\">seiner Einsamkeit</em> (“his solitude”).</p>"
  },
  {
   "id": "prose-45",
   "title": "<em lang=\"de\">Müde</em> with the genitive",
   "body": "<p><em lang=\"de\">wurde dessen zehn Jahre nicht müde</em>: <em lang=\"de\">Einer Sache müde werden</em> means “to grow weary of a thing.” <em lang=\"de\">Dessen</em>, “of that,” is genitive, and <em lang=\"de\">zehn Jahre</em> (“for ten years”) is an accusative of time.</p>"
  },
  {
   "id": "prose-46",
   "title": "Schopenhauer, <em lang=\"de\">Die Welt als Wille und Vorstellung</em> I.1",
   "body": "<p lang=\"de\">„Die Welt ist meine Vorstellung“: – dies ist eine Wahrheit, welche in Beziehung auf jedes lebende und erkennende Wesen gilt; wiewohl der Mensch allein sie in das reflektierte abstrakte Bewusstsein bringen kann.</p><p>“The world is my idea:”—this is a truth which holds good for everything that lives and knows, though man alone can bring it into reflective and abstract consciousness.<br>Translation: R. B. Haldane and J. Kemp.</p><p><strong>Context.</strong> These are the first words of Schopenhauer’s chief work. The sentence gives a thesis, then a relative clause, and then a concession.</p>",
   "qp": {
    "id": "q-de-ixp-prose-46",
    "variants": [
     {
      "prompt": "What does <em lang=\"de\">Dies</em> sum up?",
      "options": [
       "The world, a feminine noun",
       "The quoted thesis",
       "The man",
       "The consciousness"
      ],
      "answer": 1,
      "explain": "It stays neuter whatever noun follows."
     },
     {
      "prompt": "What does <em lang=\"de\">wiewohl</em> mean?",
      "options": [
       "“as well as,” joining two nouns",
       "“because”",
       "“although”",
       "“when”"
      ],
      "answer": 2,
      "explain": "It begins a subordinate clause of concession."
     },
     {
      "prompt": "Where does the modal <em lang=\"de\">kann</em> stand in the <em lang=\"de\">wiewohl</em> clause?",
      "options": [
       "In second place, before the subject",
       "First",
       "Before <em lang=\"de\">sie</em>",
       "At the end, after its infinitive"
      ],
      "answer": 3,
      "explain": "It closes the clause."
     }
    ]
   }
  },
  {
   "id": "prose-47",
   "title": "<em lang=\"de\">Dies</em>",
   "body": "<p><em lang=\"de\">dies ist eine Wahrheit</em>: <em lang=\"de\">Dies</em>, “this,” sums up the quoted thesis. It stays neuter whatever the noun that follows.</p>"
  },
  {
   "id": "prose-48",
   "title": "<em lang=\"de\">Welche</em>, and present participles",
   "body": "<p><em lang=\"de\">welche in Beziehung auf jedes lebende und erkennende Wesen gilt</em>: <em lang=\"de\">Welche</em> is a relative, like <em lang=\"de\">die</em>, standing for <em lang=\"de\">Wahrheit</em>; <em lang=\"de\">gilt</em> goes to the end. <em lang=\"de\">Lebende</em> and <em lang=\"de\">erkennende</em> are present participles used as adjectives: living and knowing.</p>"
  },
  {
   "id": "prose-49",
   "title": "A concession",
   "body": "<p><em lang=\"de\">wiewohl der Mensch allein sie</em>: <em lang=\"de\">Wiewohl</em>, “although,” begins a subordinate clause, and <em lang=\"de\">sie</em> refers to the truth.</p>"
  },
  {
   "id": "prose-50",
   "title": "Motion and the accusative",
   "body": "<p><em lang=\"de\">in das reflektierte abstrakte Bewusstsein bringen kann</em>: <em lang=\"de\">In das</em> (“into the”) takes the accusative of motion. The modal <em lang=\"de\">kann</em> (“can”) closes the clause after its infinitive.</p>"
  },
  {
   "id": "prose-51",
   "title": "Kleist, <em lang=\"de\">Michael Kohlhaas</em> opening",
   "body": "<p lang=\"de\">An den Ufern der Havel lebte, um die Mitte des sechzehnten Jahrhunderts, ein Rosshändler, namens Michael Kohlhaas, Sohn eines Schulmeisters, einer der rechtschaffensten zugleich und entsetzlichsten Menschen seiner Zeit.</p><p>Toward the middle of the sixteenth century there lived on the banks of the river Havel a horse-dealer by the name of Michael Kohlhaas, the son of a school-master, one of the most upright and, at the same time, one of the most terrible men of his day.<br>Translation: Frances A. King.</p><p><strong>Context.</strong> In Kleist’s famous opening the subject is put off past a place and a time, and it is then followed by three appositions, the last of them a paradox.</p>",
   "qp": {
    "id": "q-de-ixp-prose-51",
    "variants": [
     {
      "prompt": "What is the subject of <em lang=\"de\">lebte</em>?",
      "options": [
       "<em lang=\"de\">den Ufern</em>, which stand first",
       "<em lang=\"de\">ein Rosshändler</em>",
       "<em lang=\"de\">Michael Kohlhaas</em> alone",
       "<em lang=\"de\">der Havel</em>"
      ],
      "answer": 1,
      "explain": "The subject is put off past a place and a time."
     },
     {
      "prompt": "What case is <em lang=\"de\">der Havel</em>?",
      "options": [
       "Dative, after <em lang=\"de\">an</em>",
       "Nominative",
       "Genitive feminine",
       "Accusative"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Der Havel</em> is genitive feminine: “of the Havel.”"
     },
     {
      "prompt": "What does <em lang=\"de\">einer der</em> mean?",
      "options": [
       "“a single,” with the dative",
       "“the first of”",
       "“none of the”",
       "“one of the”"
      ],
      "answer": 3,
      "explain": "<em lang=\"de\">Einer der</em> is “one” with the genitive plural: “one of the.”"
     }
    ]
   }
  },
  {
   "id": "prose-52",
   "title": "Verb second",
   "body": "<p><em lang=\"de\">An den Ufern der Havel lebte</em>: <em lang=\"de\">An den Ufern</em> (“on the banks”), dative plural, holds the first place, so <em lang=\"de\">lebte</em> (“lived”) comes next. <em lang=\"de\">Der Havel</em> is genitive feminine.</p>"
  },
  {
   "id": "prose-53",
   "title": "A time phrase",
   "body": "<p><em lang=\"de\">um die Mitte des sechzehnten Jahrhunderts</em>: <em lang=\"de\">Um</em> takes the accusative, so the sense is “about the middle.” <em lang=\"de\">Des sechzehnten Jahrhunderts</em> (“of the sixteenth century”) is genitive.</p>"
  },
  {
   "id": "prose-54",
   "title": "The subject, at last",
   "body": "<p><em lang=\"de\">ein Rosshändler, namens Michael Kohlhaas</em>: <em lang=\"de\">Ein Rosshändler</em> (“a horse dealer”) is the subject. <em lang=\"de\">Namens</em>, “by name,” is an old genitive used as a preposition.</p>"
  },
  {
   "id": "prose-55",
   "title": "Apposition",
   "body": "<p><em lang=\"de\">Sohn eines Schulmeisters</em>: <em lang=\"de\">Sohn</em> (“son”) stands in apposition without an article, and <em lang=\"de\">eines Schulmeisters</em> (“of a schoolmaster”) is genitive.</p>"
  },
  {
   "id": "prose-56",
   "title": "Superlatives and the genitive plural",
   "body": "<p><em lang=\"de\">einer der rechtschaffensten zugleich und entsetzlichsten Menschen seiner Zeit</em>: <em lang=\"de\">Einer der</em> means “one of the,” with the genitive plural. <em lang=\"de\">Rechtschaffensten</em> (“most upright”) and <em lang=\"de\">entsetzlichsten</em> (“most terrible”) are superlatives, joined by <em lang=\"de\">zugleich und</em>, “at once … and.”</p>"
  },
  {
   "id": "prose-57",
   "title": "Grimm, <em lang=\"de\">Hänsel und Gretel</em> KHM 15",
   "body": "<p lang=\"de\">Vor einem großen Walde wohnte ein armer Holzhacker mit seiner Frau und seinen zwei Kindern; das Bübchen hieß Hänsel und das Mädchen Gretel.</p><p>Hard by a great forest dwelt a poor wood-cutter with his wife and his two children. The boy was called Hansel and the girl Grethel.<br>Translation: Margaret Hunt.</p><p><strong>Context.</strong> This is the opening of the tale. The datives after <em lang=\"de\">vor</em> and <em lang=\"de\">mit</em> and the gender of the small words deserve attention.</p>",
   "qp": {
    "id": "q-de-ixp-prose-57",
    "variants": [
     {
      "prompt": "What does the place phrase do to the order of <em lang=\"de\">wohnte ein armer Holzhacker</em>?",
      "options": [
       "It sends the verb to the end of the clause",
       "It makes the clause a question",
       "Nothing",
       "It puts the verb second, before the subject"
      ],
      "answer": 3,
      "explain": "The place phrase is first, so <em lang=\"de\">wohnte</em> comes next."
     },
     {
      "prompt": "What ending does <em lang=\"de\">armer</em> show?",
      "options": [
       "The strong ending after <em lang=\"de\">ein</em>",
       "The weak ending after the article <em lang=\"de\">der</em>",
       "The dative ending",
       "The plural ending"
      ],
      "answer": 0,
      "explain": "<em lang=\"de\">Ein</em> has no ending in the masculine nominative."
     },
     {
      "prompt": "What gender are nouns in <em lang=\"de\">-chen</em>?",
      "options": [
       "Feminine, like <em lang=\"de\">die Frau</em>",
       "Neuter",
       "Masculine",
       "They follow the sex of the person"
      ],
      "answer": 1,
      "explain": "Nouns in <em lang=\"de\">-chen</em> are neuter: <em lang=\"de\">das Bübchen</em>, <em lang=\"de\">das Mädchen</em>."
     }
    ]
   }
  },
  {
   "id": "prose-58",
   "title": "<em lang=\"de\">Vor</em> with the dative",
   "body": "<p><em lang=\"de\">Vor einem großen Walde</em>: <em lang=\"de\">Vor</em> (“before”), when it means place at rest, takes the dative, here <em lang=\"de\">einem großen Walde</em> (“a great forest”), with the older dative ending <em lang=\"de\">-e</em>.</p>"
  },
  {
   "id": "prose-59",
   "title": "Verb second",
   "body": "<p><em lang=\"de\">wohnte ein armer Holzhacker</em>: The place phrase is first, so <em lang=\"de\">wohnte</em> (“lived”) comes next, and then the subject, <em lang=\"de\">ein armer Holzhacker</em> (“a poor woodcutter”).</p>"
  },
  {
   "id": "prose-60",
   "title": "<em lang=\"de\">Mit</em> with the dative",
   "body": "<p><em lang=\"de\">mit seiner Frau und seinen zwei Kindern</em>: <em lang=\"de\">Mit</em> always takes the dative, here <em lang=\"de\">seiner Frau</em> (“his wife”) and <em lang=\"de\">seinen zwei Kindern</em> (“his two children”), with the dative plural <em lang=\"de\">-n</em>.</p>"
  },
  {
   "id": "prose-61",
   "title": "Diminutives are neuter",
   "body": "<p><em lang=\"de\">das Bübchen hieß Hänsel</em>: <em lang=\"de\">Bübchen</em>, “little boy,” and <em lang=\"de\">Mädchen</em>, “girl,” are neuter because of the ending <em lang=\"de\">-chen</em>.</p>"
  },
  {
   "id": "prose-62",
   "title": "Grimm, <em lang=\"de\">Die Sterntaler</em> KHM 153",
   "body": "<p lang=\"de\">Es war einmal ein kleines Mädchen, dem war Vater und Mutter gestorben, und es war so arm, dass es kein Kämmerchen mehr hatte, darin zu wohnen, und kein Bettchen mehr, darin zu schlafen.</p><p>There was once on a time a little girl whose father and mother were dead, and she was so poor that she no longer had any little room to live in, or bed to sleep in.<br>Translation: Margaret Hunt.</p><p><strong>Context.</strong> This is the opening of “The Star-Money.” The girl is <em lang=\"de\">es</em>, “it,” throughout, because <em lang=\"de\">Mädchen</em> is neuter.</p>",
   "qp": {
    "id": "q-de-ixp-prose-62",
    "variants": [
     {
      "prompt": "Why is <em lang=\"de\">kleines</em> the form after <em lang=\"de\">ein</em>?",
      "options": [
       "<em lang=\"de\">Mädchen</em> is feminine",
       "It is a genitive",
       "It follows a weak article",
       "<em lang=\"de\">Ein</em> has no ending in the neuter nominative"
      ],
      "answer": 3,
      "explain": "The adjective shows the gender and case."
     },
     {
      "prompt": "What does <em lang=\"de\">kein … mehr</em> mean?",
      "options": [
       "“no longer any”",
       "“no more than one,” of number",
       "“never”",
       "“not yet”"
      ],
      "answer": 0,
      "explain": "<em lang=\"de\">Kein … mehr</em> means “no longer any”: she no longer had any little room."
     },
     {
      "prompt": "What does <em lang=\"de\">darin</em> stand for?",
      "options": [
       "<em lang=\"de\">dort</em>, a place far away",
       "<em lang=\"de\">in dem</em>",
       "<em lang=\"de\">damit</em>",
       "<em lang=\"de\">davon</em>"
      ],
      "answer": 1,
      "explain": "<em lang=\"de\">Darin</em>, “in it,” stands for <em lang=\"de\">in dem</em>."
     }
    ]
   }
  },
  {
   "id": "prose-63",
   "title": "Ein with a neuter",
   "body": "<p><em lang=\"de\">ein kleines Mädchen</em>: <em lang=\"de\">Ein</em> has no ending in the neuter nominative, so the adjective shows the gender and case: <em lang=\"de\">kleines</em> (“little”).</p>"
  },
  {
   "id": "prose-64",
   "title": "A dative of the one who suffers loss",
   "body": "<p><em lang=\"de\">dem war Vater und Mutter gestorben</em>: <em lang=\"de\">Dem</em>, dative, takes up the girl. As in <em lang=\"de\">der war arm</em>, the verb stays second, so <em lang=\"de\">dem</em> is a demonstrative, and the sense is “to her father and mother had died.” <em lang=\"de\">War … gestorben</em> is the past perfect with <em lang=\"de\">sein</em>, as with verbs of change, and the singular <em lang=\"de\">war</em> treats the pair as one.</p>"
  },
  {
   "id": "prose-65",
   "title": "<em lang=\"de\">Es</em> for the girl",
   "body": "<p><em lang=\"de\">und es war so arm</em>: <em lang=\"de\">Es</em> agrees with <em lang=\"de\">Mädchen</em>, which is neuter (“and it was so poor”).</p>"
  },
  {
   "id": "prose-66",
   "title": "<em lang=\"de\">Kein … mehr</em>, and <em lang=\"de\">darin</em>",
   "body": "<p><em lang=\"de\">dass es kein Kämmerchen mehr hatte, darin zu wohnen</em>: <em lang=\"de\">Kein … mehr</em> means “no longer any.” <em lang=\"de\">Darin zu wohnen</em>, “to live in it,” is an infinitive with <em lang=\"de\">zu</em>, and <em lang=\"de\">darin</em> stands for <em lang=\"de\">in dem</em>.</p>"
  },
  {
   "id": "prose-67",
   "title": "Nietzsche, <em lang=\"de\">Die fröhliche Wissenschaft</em> 125",
   "body": "<p lang=\"de\">Gott ist tot! Gott bleibt tot! Und wir haben ihn getötet! Wie trösten wir uns, die Mörder aller Mörder?</p><p>God is dead! God remains dead! And we have killed him! How shall we console ourselves, the most murderous of all murderers?<br>Translation: Thomas Common.</p><p><strong>Context.</strong> The madman speaks in the marketplace. <em lang=\"de\">Tot</em>, the adjective, stands beside <em lang=\"de\">getötet</em>, the participle of <em lang=\"de\">töten</em> (“to kill”).</p>",
   "qp": {
    "id": "q-de-ixp-prose-67",
    "variants": [
     {
      "prompt": "What does <em lang=\"de\">bleibt</em> mean?",
      "options": [
       "“remains”",
       "“becomes,” like <em lang=\"de\">wird</em>",
       "“seems”",
       "“was”"
      ],
      "answer": 0,
      "explain": "<em lang=\"de\">Bleibt</em> means “remains”: <em lang=\"de\">Gott bleibt tot</em>."
     },
     {
      "prompt": "What is <em lang=\"de\">ihn</em>?",
      "options": [
       "Dative masculine, the person to whom it was done",
       "Nominative",
       "A reflexive",
       "Accusative masculine, referring to God"
      ],
      "answer": 3,
      "explain": "<em lang=\"de\">Ihn</em> is the masculine accusative, the object of the verb, referring to God: “have killed him.”"
     },
     {
      "prompt": "What is <em lang=\"de\">uns</em> in <em lang=\"de\">Wie trösten wir uns</em>?",
      "options": [
       "The subject",
       "A dative of possession",
       "Reflexive",
       "An indirect object only"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Uns</em> refers back to the subject <em lang=\"de\">wir</em>, so it is reflexive: “how shall we comfort ourselves.”"
     }
    ]
   }
  },
  {
   "id": "prose-68",
   "title": "Predicate adjectives",
   "body": "<p><em lang=\"de\">Gott ist tot! Gott bleibt tot!</em>: <em lang=\"de\">Tot</em>, “dead,” is a predicate adjective after <em lang=\"de\">sein</em> (“to be”) and <em lang=\"de\">bleiben</em> (“to remain”), so it has no ending.</p>"
  },
  {
   "id": "prose-69",
   "title": "The perfect",
   "body": "<p><em lang=\"de\">Und wir haben ihn getötet</em>: <em lang=\"de\">Haben … getötet</em> means “have killed.” <em lang=\"de\">Ihn</em>, accusative masculine, refers to God.</p>"
  },
  {
   "id": "prose-70",
   "title": "A question and a reflexive",
   "body": "<p><em lang=\"de\">Wie trösten wir uns</em>: In a question with <em lang=\"de\">wie</em> (“how”), the verb comes second and the subject after it. <em lang=\"de\">Uns</em> is reflexive, so the sense is “how shall we comfort ourselves.”</p>"
  },
  {
   "id": "prose-71",
   "title": "Apposition and the genitive plural",
   "body": "<p><em lang=\"de\">die Mörder aller Mörder</em>: <em lang=\"de\">Die Mörder</em> (“the murderers”) stands in apposition to <em lang=\"de\">wir</em>, and <em lang=\"de\">aller Mörder</em>, “of all murderers,” is genitive plural.</p>"
  },
  {
   "id": "prose-72",
   "title": "Clausewitz, <em lang=\"de\">Vom Kriege</em> I.1.24",
   "body": "<p lang=\"de\">Der Krieg ist eine bloße Fortsetzung der Politik mit anderen Mitteln. So sehen wir also, dass der Krieg nicht bloß ein politischer Akt, sondern ein wahres politisches Instrument ist, eine Fortsetzung des politischen Verkehrs, ein Durchführen desselben mit anderen Mitteln.</p><p>War is a mere continuation of policy by other means. We see, therefore, that War is not merely a political act, but also a real political instrument, a continuation of political commerce, a carrying out of the same by other means.<br>Translation: J. J. Graham.</p><p><strong>Context.</strong> The heading of § 24 and its first sentence. Clausewitz states the thesis, and then restates it in a <em lang=\"de\">dass</em> clause with three appositions after the verb.</p>",
   "qp": {
    "id": "q-de-ixp-prose-72",
    "variants": [
     {
      "prompt": "What is <em lang=\"de\">eine bloße Fortsetzung</em>?",
      "options": [
       "The accusative object of <em lang=\"de\">ist</em>",
       "A genitive",
       "The predicate nominative",
       "A dative"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Eine bloße Fortsetzung</em> is joined to the subject by <em lang=\"de\">ist</em>, so it is the predicate nominative: “a mere continuation.”"
     },
     {
      "prompt": "What does <em lang=\"de\">nicht bloß … sondern</em> mean?",
      "options": [
       "“neither … nor,” denying both",
       "“not merely … but”",
       "“either … or”",
       "“both … and”"
      ],
      "answer": 1,
      "explain": "<em lang=\"de\">Nicht bloß … sondern</em> means “not merely … but”: not merely a political act but a real instrument."
     },
     {
      "prompt": "What is <em lang=\"de\">ein Durchführen</em>?",
      "options": [
       "An infinitive made a noun",
       "A present participle used as an adjective",
       "A verb in the present",
       "A plural noun"
      ],
      "answer": 0,
      "explain": "<em lang=\"de\">Ein Durchführen</em>, “a carrying out,” is an infinitive made a noun."
     }
    ]
   }
  },
  {
   "id": "prose-73",
   "title": "The thesis",
   "body": "<p><em lang=\"de\">Der Krieg ist eine bloße Fortsetzung der Politik</em>: <em lang=\"de\">Eine bloße Fortsetzung</em>, “a mere continuation,” is the predicate nominative. <em lang=\"de\">Der Politik</em> (“of policy”) is genitive feminine.</p>"
  },
  {
   "id": "prose-74",
   "title": "<em lang=\"de\">Mit</em> and the dative plural",
   "body": "<p><em lang=\"de\">mit anderen Mitteln</em>: <em lang=\"de\">Mitteln</em> (“means”) is dative plural with <em lang=\"de\">-n</em>, after <em lang=\"de\">mit</em>.</p>"
  },
  {
   "id": "prose-75",
   "title": "<em lang=\"de\">Nicht bloß … sondern</em>",
   "body": "<p><em lang=\"de\">dass der Krieg nicht bloß ein politischer Akt, sondern ein wahres politisches Instrument ist</em>: <em lang=\"de\">Nicht bloß … sondern</em> means “not merely … but.” After <em lang=\"de\">dass</em>, the verb <em lang=\"de\">ist</em> waits until the end.</p>"
  },
  {
   "id": "prose-76",
   "title": "Apposition after the verb",
   "body": "<p><em lang=\"de\">eine Fortsetzung des politischen Verkehrs, ein Durchführen desselben</em>: The phrases restate <em lang=\"de\">Instrument</em> after the clause is closed. <em lang=\"de\">Ein Durchführen</em> (“a carrying out”) is an infinitive made a noun, and <em lang=\"de\">desselben</em>, genitive, takes up <em lang=\"de\">Verkehr</em> (“intercourse”).</p>"
  },
  {
   "id": "prose-77",
   "title": "Nietzsche, <em lang=\"de\">Jenseits von Gut und Böse</em> Vorrede",
   "body": "<p lang=\"de\">Vorausgesetzt, dass die Wahrheit ein Weib ist –, wie? ist der Verdacht nicht gegründet, dass alle Philosophen, sofern sie Dogmatiker waren, sich schlecht auf Weiber verstanden?</p><p>Supposing that Truth is a woman—what then? Is there not ground for suspecting that all philosophers, in so far as they have been dogmatists, have failed to understand women—that the terrible seriousness and clumsy importunity with which they have usually paid their addresses to Truth, have been unskilled and unseemly methods for winning a woman?<br>Translation: Helen Zimmern.</p><p><strong>Context.</strong> The first words of <em lang=\"de\">Beyond Good and Evil</em>: a supposition, then a question with a <em lang=\"de\">dass</em> clause that holds another clause inside it.</p>",
   "qp": {
    "id": "q-de-ixp-prose-77",
    "variants": [
     {
      "prompt": "What does <em lang=\"de\">Vorausgesetzt</em> mean, standing alone?",
      "options": [
       "“presupposed,” describing a noun that follows",
       "“supposing that”",
       "“in advance”",
       "“certainly”"
      ],
      "answer": 1,
      "explain": "A past participle used for a condition."
     },
     {
      "prompt": "What is <em lang=\"de\">gegründet</em> in <em lang=\"de\">ist der Verdacht nicht gegründet</em>?",
      "options": [
       "The perfect of a verb of motion",
       "The subject",
       "The predicate",
       "An infinitive"
      ],
      "answer": 2,
      "explain": "<em lang=\"de\">Gegründet</em>, “founded,” is joined to the subject by <em lang=\"de\">ist</em>, so it is the predicate."
     },
     {
      "prompt": "What does <em lang=\"de\">sich auf etwas verstehen</em> mean?",
      "options": [
       "“to agree with someone about a thing”",
       "“to stand on a thing”",
       "“to misunderstand”",
       "“to understand a thing, to be skilled in it”"
      ],
      "answer": 3,
      "explain": "<em lang=\"de\">Sich auf etwas verstehen</em> means “to be skilled in a thing”: they understood women badly."
     }
    ]
   }
  },
  {
   "id": "prose-78",
   "title": "A participle for a condition",
   "body": "<p><em lang=\"de\">Vorausgesetzt, dass die Wahrheit ein Weib ist</em>: <em lang=\"de\">Vorausgesetzt</em>, “supposed in advance,” is a past participle standing alone, so it means “supposing that.”</p>"
  },
  {
   "id": "prose-79",
   "title": "A yes-or-no question",
   "body": "<p><em lang=\"de\">ist der Verdacht nicht gegründet</em>: In this question the verb <em lang=\"de\">ist</em> comes first. <em lang=\"de\">Gegründet</em>, “founded,” is the predicate.</p>"
  },
  {
   "id": "prose-80",
   "title": "A clause inside a clause",
   "body": "<p><em lang=\"de\">sofern sie Dogmatiker waren</em>: <em lang=\"de\">Sofern</em>, “in so far as,” stands inside the <em lang=\"de\">dass</em> clause, with its own verb at the end.</p>"
  },
  {
   "id": "prose-81",
   "title": "<em lang=\"de\">Sich verstehen auf</em>",
   "body": "<p><em lang=\"de\">sich schlecht auf Weiber verstanden</em>: <em lang=\"de\">Sich auf etwas verstehen</em> means “to understand a thing, to be skilled in it.” <em lang=\"de\">Verstanden</em> is here the simple past plural, and it closes the <em lang=\"de\">dass</em> clause.</p>"
  }
 ]
};
