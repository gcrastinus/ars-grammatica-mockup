window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-indecl.la/adverbs"] = {
 "id": "lang.iii-indecl.la/adverbs",
 "title": "Latin Adverbs, Conjunctions, and Interjections",
 "sub": "How Latin forms and compares its adverbs, the kinds of conjunction, and the enclitics",
 "sources": "Allen and Greenough, <em>New Latin Grammar</em> §§ 214–218, 223–224",
 "panels": [
  {
   "id": "formation",
   "title": "How adverbs are formed",
   "body": "<p>English makes most adverbs of manner with “-ly”: “wide,” “widely.” Latin forms them from adjectives with two chief endings. Adjectives of the first and second declensions take <em lang=\"la\">-ē</em>: <em lang=\"la\">lātus</em>, <em lang=\"la\">lātē</em> (“widely”); <em lang=\"la\">līber</em>, <em lang=\"la\">līberē</em> (“freely”); <em lang=\"la\">pulcher</em>, <em lang=\"la\">pulchrē</em> (“beautifully”); and <em lang=\"la\">bonus</em> gives <em lang=\"la\">bene</em>, <em lang=\"la\">malus</em> gives <em lang=\"la\">male</em>. Adjectives of the third declension take <em lang=\"la\">-iter</em>: <em lang=\"la\">fortis</em>, <em lang=\"la\">fortiter</em> (“bravely”); <em lang=\"la\">ācer</em>, <em lang=\"la\">ācriter</em> (“sharply”); and those in <em lang=\"la\">-ns</em> take <em lang=\"la\">-nter</em>: <em lang=\"la\">prūdēns</em>, <em lang=\"la\">prūdenter</em> (“wisely”). Some adverbs are old case forms: <em lang=\"la\">subitō</em> (“suddenly”), <em lang=\"la\">prīmō</em> (“at first”), <em lang=\"la\">multum</em> (“much”), <em lang=\"la\">facile</em> (“easily”).</p>",
   "qp": {
    "id": "q-la-adv-form",
    "variants": [
     {
      "prompt": "What is the adverb from <em lang=\"la\">miser</em> (“wretched”)?",
      "options": [
       "<em lang=\"la\">miseriter</em>",
       "<em lang=\"la\">miserē</em>",
       "<em lang=\"la\">miseranter</em>",
       "<em lang=\"la\">miserō</em>"
      ],
      "answer": 1,
      "explain": "An adjective of the first and second declensions forms its adverb with <em lang=\"la\">-ē</em>."
     },
     {
      "prompt": "What is the adverb from <em lang=\"la\">celer</em> (“swift”)?",
      "options": [
       "<em lang=\"la\">celerē</em>",
       "<em lang=\"la\">celerōs</em>",
       "<em lang=\"la\">celeriter</em>",
       "<em lang=\"la\">celerius</em> only"
      ],
      "answer": 2,
      "explain": "An adjective of the third declension forms its adverb with <em lang=\"la\">-iter</em>."
     },
     {
      "prompt": "What is the adverb from <em lang=\"la\">sapiēns</em> (“wise”)?",
      "options": [
       "<em lang=\"la\">sapientē</em>",
       "<em lang=\"la\">sapientiter</em>",
       "<em lang=\"la\">sapiēns</em>",
       "<em lang=\"la\">sapienter</em>"
      ],
      "answer": 3,
      "explain": "Adjectives in <em lang=\"la\">-ns</em> form the adverb in <em lang=\"la\">-nter</em>."
     }
    ]
   }
  },
  {
   "id": "comparison",
   "title": "The comparison of adverbs",
   "body": "<p>The comparative of an adverb is the neuter accusative singular of the comparative adjective, in <em lang=\"la\">-ius</em>: <em lang=\"la\">lātius</em> (“more widely”), <em lang=\"la\">fortius</em> (“more bravely”). The superlative ends in <em lang=\"la\">-issimē</em> (or <em lang=\"la\">-errimē</em>, <em lang=\"la\">-illimē</em>, as the adjective does): <em lang=\"la\">lātissimē</em>, <em lang=\"la\">fortissimē</em>, <em lang=\"la\">ācerrimē</em>, <em lang=\"la\">facillimē</em>. The irregular adjectives give irregular adverbs: <em lang=\"la\">bene</em>, <em lang=\"la\">melius</em>, <em lang=\"la\">optimē</em>; <em lang=\"la\">male</em>, <em lang=\"la\">peius</em>, <em lang=\"la\">pessimē</em>; <em lang=\"la\">multum</em>, <em lang=\"la\">plūs</em>, <em lang=\"la\">plūrimum</em>; <em lang=\"la\">parum</em>, <em lang=\"la\">minus</em>, <em lang=\"la\">minimē</em>; and <em lang=\"la\">magnopere</em>, <em lang=\"la\">magis</em>, <em lang=\"la\">maximē</em>.</p>",
   "qp": {
    "id": "q-la-adv-comp",
    "variants": [
     {
      "prompt": "What is the comparative of the adverb <em lang=\"la\">longē</em> (“far”)?",
      "options": [
       "<em lang=\"la\">longius</em>",
       "<em lang=\"la\">longior</em>",
       "<em lang=\"la\">longissimē</em>",
       "<em lang=\"la\">longēius</em>"
      ],
      "answer": 0,
      "explain": "The comparative adverb is the neuter of the comparative adjective: <em lang=\"la\">longius</em>."
     },
     {
      "prompt": "What is the superlative of <em lang=\"la\">bene</em>?",
      "options": [
       "<em lang=\"la\">melius</em>",
       "<em lang=\"la\">bonissimē</em>",
       "<em lang=\"la\">maximē</em>",
       "<em lang=\"la\">optimē</em>"
      ],
      "answer": 3,
      "explain": "<em lang=\"la\">Bene, melius, optimē</em>."
     },
     {
      "prompt": "What is the superlative of <em lang=\"la\">celeriter</em>?",
      "options": [
       "<em lang=\"la\">celerissimē</em>",
       "<em lang=\"la\">celerius</em>",
       "<em lang=\"la\">celerrimē</em>",
       "<em lang=\"la\">celeritissimē</em>"
      ],
      "answer": 2,
      "explain": "<em lang=\"la\">Celer</em> has the superlative <em lang=\"la\">celerrimus</em>, and the adverb follows it: <em lang=\"la\">celerrimē</em>."
     }
    ]
   }
  },
  {
   "id": "conjunctions",
   "title": "The kinds of conjunction",
   "body": "<p>As in English, Latin conjunctions either join words and clauses of equal rank or join a subordinate clause to another. The <strong>coordinating</strong> conjunctions are copulative (<em lang=\"la\">et</em>, <em lang=\"la\">atque</em> or <em lang=\"la\">ac</em>, <em lang=\"la\">-que</em>, “and”; <em lang=\"la\">neque</em> or <em lang=\"la\">nec</em>, “and not”), disjunctive (<em lang=\"la\">aut</em>, <em lang=\"la\">vel</em>, <em lang=\"la\">-ve</em>, “or”), adversative (<em lang=\"la\">sed</em>, <em lang=\"la\">at</em>, <em lang=\"la\">autem</em>, <em lang=\"la\">tamen</em>, “but,” “however”), causal (<em lang=\"la\">nam</em>, <em lang=\"la\">enim</em>, “for”), and illative (<em lang=\"la\">itaque</em>, <em lang=\"la\">igitur</em>, <em lang=\"la\">ergō</em>, “therefore”). The <strong>subordinating</strong> conjunctions include <em lang=\"la\">cum</em> (“when,” “since,” “although”), <em lang=\"la\">ut</em> (“that,” “as,” “when”), <em lang=\"la\">nē</em> (“that not,” “lest”), <em lang=\"la\">quod</em> and <em lang=\"la\">quia</em> (“because”), <em lang=\"la\">sī</em> (“if”), <em lang=\"la\">nisi</em> (“unless”), <em lang=\"la\">quamquam</em> (“although”), <em lang=\"la\">dum</em> (“while”), and <em lang=\"la\">postquam</em> (“after”).</p>\n<p>Some conjunctions never stand first in their clause. <em lang=\"la\">-Que</em> and <em lang=\"la\">-ve</em> are enclitics, joined to the second of the two words they connect: <em lang=\"la\">senātus populusque Rōmānus</em> (“the senate and the Roman people”). <em lang=\"la\">Autem</em>, <em lang=\"la\">enim</em>, and usually <em lang=\"la\">igitur</em> stand in the second place: <em lang=\"la\">ego autem</em>, “but I.”</p>",
   "qp": {
    "id": "q-la-conj",
    "variants": [
     {
      "prompt": "In <em lang=\"la\">arma virōsque</em>, what does <em lang=\"la\">-que</em> join?",
      "options": [
       "<em lang=\"la\">virōs</em> and a following word",
       "<em lang=\"la\">arma</em> and <em lang=\"la\">virōs</em>",
       "two clauses",
       "nothing; it is an adverb"
      ],
      "answer": 1,
      "explain": "<em lang=\"la\">-Que</em> is joined to the second of the two words it connects: “arms and men.”"
     },
     {
      "prompt": "Which conjunction is adversative?",
      "options": [
       "<em lang=\"la\">nam</em>",
       "<em lang=\"la\">itaque</em>",
       "<em lang=\"la\">tamen</em>",
       "<em lang=\"la\">aut</em>"
      ],
      "answer": 2,
      "explain": "<em lang=\"la\">Tamen</em>, “however,” sets one thing against another."
     },
     {
      "prompt": "Where does <em lang=\"la\">enim</em> stand in its clause?",
      "options": [
       "First",
       "Last",
       "Before the verb",
       "In the second place"
      ],
      "answer": 3,
      "explain": "<em lang=\"la\">Enim</em>, like <em lang=\"la\">autem</em>, stands in the second place."
     }
    ]
   }
  },
  {
   "id": "interjections",
   "title": "Interjections and the enclitic -ne",
   "body": "<p>The Latin interjections show a feeling of the mind, as we have seen: <em lang=\"la\">ō</em> (address or wonder), <em lang=\"la\">heu</em> and <em lang=\"la\">ēheu</em> (grief), <em lang=\"la\">vae</em> (“woe”), <em lang=\"la\">ecce</em> (“look!”), <em lang=\"la\">euge</em> (“well done!”). <em lang=\"la\">Ō</em> is used with the vocative (<em lang=\"la\">ō fortūnāte</em>) and also with the accusative of exclamation (<em lang=\"la\">ō mē miserum!</em>, “oh, wretched me!”); <em lang=\"la\">vae</em> takes the dative (<em lang=\"la\">vae victīs</em>, “woe to the conquered”). The enclitic <em lang=\"la\">-ne</em>, joined to the first word of a sentence, makes it a question without telling which answer is expected: <em lang=\"la\">vidēsne?</em> (“do you see?”); <em lang=\"la\">nōnne</em> expects “yes,” and <em lang=\"la\">num</em> expects “no.”</p>",
   "qp": {
    "id": "q-la-interj",
    "variants": [
     {
      "prompt": "What does <em lang=\"la\">-ne</em> do in <em lang=\"la\">audīsne?</em>",
      "options": [
       "It negates the verb",
       "It joins two words",
       "It marks the vocative",
       "It makes the sentence a question"
      ],
      "answer": 3,
      "explain": "The enclitic <em lang=\"la\">-ne</em> asks a question without suggesting the answer."
     },
     {
      "prompt": "What answer does <em lang=\"la\">nōnne</em> expect?",
      "options": [
       "“Yes”",
       "“No”",
       "Neither",
       "A name"
      ],
      "answer": 0,
      "explain": "<em lang=\"la\">Nōnne</em> expects “yes”; <em lang=\"la\">num</em> expects “no.”"
     },
     {
      "prompt": "What case does <em lang=\"la\">vae</em> take in <em lang=\"la\">vae victīs</em>?",
      "options": [
       "The accusative",
       "The dative",
       "The vocative",
       "The ablative"
      ],
      "answer": 1,
      "explain": "<em lang=\"la\">Vae</em>, “woe,” takes the dative of the one who suffers."
     }
    ]
   }
  }
 ]
};
