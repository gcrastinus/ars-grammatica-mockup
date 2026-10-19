window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.fr/formation"] = {
 "id": "lang.iv.fr/formation",
 "title": "Word Formation in French",
 "sub": "The adverb in -ment, the noun in -eur and -tion, the prefix re-, and the doublet",
 "sources": "Grevisse and Goosse, <i>Le bon usage</i>; Larousse",
 "panels": [
  {
   "id": "ment",
   "title": "The adverb in -ment",
   "body": "<p>“Happy” becomes “happily,” and “slow” becomes “slowly”: English makes the adverb with “-ly.” French makes the same kind of adverb with <em>-ment</em>. <em>Heureuse</em> (“happy,” feminine) gives <em>heureusement</em> (“happily”), and <em>lent</em> (“slow”) gives <em>lentement</em> (“slowly”).</p><p>The ending <strong>-ment</strong> makes an adverb from an adjective. It is added in one of two ways:</p>\n<p><strong>to the feminine</strong>, when the masculine ends in a consonant (<em>heureux</em>, feminine <em>heureuse</em>, gives <em>heureusement</em>; <em>lent</em> gives <em>lentement</em>, with the <em>e</em> of the feminine <em>lente</em>)<br><strong>to the masculine</strong>, when the masculine already ends in a vowel (<em>vrai</em>, “true,” gives <em>vraiment</em>, “truly”)</p><p>Because <em>-ment</em> stands at the end of the word, it is a suffix.</p>",
   "qp": {
    "id": "q-ment",
    "variants": [
     {
      "prompt": "What does the suffix -ment make?",
      "options": ["A noun for the one who acts", "An adverb", "A verb meaning that the act is done again", "A learned word kept near a Latin spelling"],
      "answer": 1,
      "explain": "<em>-ment</em> makes an adverb from an adjective, as “-ly” does in English. It does not name a person, and it does not mean “again.”"
     },
     {
      "prompt": "When the masculine form of an adjective ends in a consonant, which form receives -ment?",
      "options": ["The feminine", "The masculine, with no further letter", "The masculine plural", "The noun made from the adjective"],
      "answer": 0,
      "explain": "If the masculine ends in a consonant, <em>-ment</em> is added to the feminine. <em>Heureuse</em> and the feminine shape behind <em>lentement</em> show that pattern. The masculine is used only when it already ends in a vowel."
     },
     {
      "prompt": "When the masculine form already ends in a vowel, which form receives -ment?",
      "options": ["A fresh feminine built for the purpose", "The masculine", "The feminine, as after a consonant", "The masculine plural"],
      "answer": 1,
      "explain": "A masculine that already ends in a vowel takes <em>-ment</em> itself. <em>Vrai</em> ends in a vowel, and the adverb is <em>vraiment</em>, not a form built on a feminine."
     }
    ]
   }
  },
  {
   "id": "eur-tion",
   "title": "The one who acts, and the act",
   "body": "<p><em>Vendre</em> is “to sell,” and <em>vendeur</em> is “seller,” the one who sells; <em>chanter</em> is “to sing,” and <em>chanteur</em> is “singer.” These nouns have a feminine form as well: <em>vendeuse</em> and <em>chanteuse</em>. <em>Former</em> is “to form,” and <em>formation</em> is the act of forming or what it forms; <em>admirer</em> is “to admire,” and <em>admiration</em> is the act of admiring.</p><p>Two endings do this work:</p>\n<p><strong>the one who acts</strong> (<em>-eur</em>; feminine <em>-euse</em>: <em>vendeur</em>, <em>vendeuse</em>; <em>chanteur</em>, <em>chanteuse</em>)<br><strong>an action, or its result</strong> (<em>-tion</em>: <em>formation</em>, <em>admiration</em>)</p><p>So <em>-eur</em> names a person, whereas <em>-tion</em> names an action or what that action leaves.</p>",
   "qp": {
    "id": "q-eur-tion",
    "variants": [
     {
      "prompt": "Which ending names the one who acts?",
      "options": ["-tion", "-eur", "-ment", "re-"],
      "answer": 1,
      "explain": "<em>-eur</em> names the person who does the act, as <em>vendeur</em> names the one who sells. <em>-tion</em> names the act or its result, not the person."
     },
     {
      "prompt": "What does a noun in -tion name?",
      "options": ["The one who acts", "An action, or its result", "The adverb of an adjective", "The popular partner in a doublet"],
      "answer": 1,
      "explain": "<em>Formation</em> and <em>admiration</em> are nouns in <em>-tion</em>. That ending names an action or its result. The person who acts is named by <em>-eur</em>."
     },
     {
      "prompt": "How is the feminine of a noun in -eur made?",
      "options": ["By adding -ment to the masculine", "By the ending -euse", "By adding <em>-e</em>, as most adjectives do", "By the article alone, with no change to the noun"],
      "answer": 1,
      "explain": "The feminine beside <em>-eur</em> is <em>-euse</em>. <em>Vendeur</em> has <em>vendeuse</em>, and <em>chanteur</em> has <em>chanteuse</em>."
     }
    ]
   }
  },
  {
   "id": "re",
   "title": "The prefix re-",
   "body": "<p>English says “do it again,” and it also says “redo.” French has the same pair, and the second is an ordinary verb: <em>faire</em> is “to do,” and <em>refaire</em> is “to do again”; <em>dire</em> is “to say,” and <em>redire</em> is “to say again.”</p><p>The prefix <strong>re-</strong> marks that the act is done again. Because it stands at the front of the verb, it is a prefix, not a suffix, and the word it makes is still a verb, not the name of a person or an adverb. <em>Re-</em> can be put on a verb that is already in use whenever the act is done a second time.</p>",
   "qp": {
    "id": "q-re",
    "variants": [
     {
      "prompt": "What does the prefix re- mark?",
      "options": ["That the act is done again", "The one who acts", "An adverb of manner", "A popular word worn down from Latin"],
      "answer": 0,
      "explain": "<em>Re-</em> marks repetition. <em>Refaire</em> is <em>faire</em> done again, and <em>redire</em> is <em>dire</em> said again."
     },
     {
      "prompt": "Where does re- stand on the verb?",
      "options": ["At the end, like -ment", "At the front", "Between the stem and the ending", "At the end of the infinitive"],
      "answer": 1,
      "explain": "<em>Re-</em> is a prefix, so it stands at the front, as in <em>refaire</em> and <em>redire</em>. <em>-ment</em>, <em>-eur</em>, and <em>-tion</em> stand at the end."
     },
     {
      "prompt": "Why is refaire not a noun in -eur?",
      "options": ["Because re- makes an adverb", "Because refaire is the act done again, not the person who acts", "Because faire was borrowed again from Latin", "Because <em>-eur</em> is never added to a verb with a prefix"],
      "answer": 1,
      "explain": "<em>Refaire</em> is a verb, <em>faire</em> with <em>re-</em>. A noun in <em>-eur</em> would name the person who acts. <em>Re-</em> does not do that."
     }
    ]
   }
  },
  {
   "id": "doublets",
   "title": "Popular word and learned word",
   "body": "<p>A traveler looking for a night’s lodging looks for an <em>hôtel</em> (“hotel”), and a sick person is taken to an <em>hôpital</em> (“hospital”). Both words come from Latin <em>hospitāle</em> (“guest house”). <em>Hôtel</em> is the popular word, and <em>hôpital</em> is the learned word.</p><p>A pair of this kind is a <strong>doublet</strong>: a popular word and a learned word, both from one Latin word. The popular word was worn down by sound change over the centuries, whereas the learned word was borrowed again from Latin and stays nearer the Latin spelling. Four doublets of this kind are these, the popular word first and the learned word second:</p>\n<p><em>hôtel</em> (“hotel”) and <em>hôpital</em> (“hospital”), from Latin <em>hospitāle</em><br><em>chose</em> (“thing”) and <em>cause</em> (“cause”), from Latin <em>causa</em><br><em>loyal</em> (“loyal”) and <em>légal</em> (“legal”), from Latin <em>lēgālis</em><br><em>entier</em> (“whole”) and <em>intègre</em> (“upright”), from Latin <em>integer</em></p><p>Neither word of a pair was made by adding <em>-ment</em> or <em>re-</em> to the other.</p>",
   "qp": {
    "id": "q-doublets",
    "variants": [
     {
      "prompt": "What is a doublet?",
      "options": ["An adverb and the adjective it comes from", "A popular word and a learned word, both from one Latin word", "A verb and the same verb with re-", "A masculine noun and its feminine in -euse"],
      "answer": 1,
      "explain": "A doublet is two French words from one Latin word. One is the popular word, worn down by sound change. The other is the learned word, borrowed again and nearer the Latin spelling."
     },
     {
      "prompt": "Which word in a doublet was worn down by sound change?",
      "options": ["The learned word", "The popular word", "Both, by the same change", "Neither, because both were built with -ment"],
      "answer": 1,
      "explain": "The popular word is the one worn down by sound change. The learned word was borrowed again from Latin and stays nearer the Latin spelling."
     },
     {
      "prompt": "Which word in a doublet stays nearer the Latin spelling?",
      "options": ["The popular word", "The learned word", "The adverb in -ment", "The noun in -eur"],
      "answer": 1,
      "explain": "The learned word was borrowed again from Latin, so its spelling stays nearer the Latin. The popular word is the one that sound change wore down."
     }
    ]
   }
  },
  {
   "id": "pieces",
   "title": "A part still in use, and a history in the word",
   "body": "<p>The adverb of <em>lent</em> is still made by adding <em>-ment</em>, <em>lentement</em>; the one who sings is still called <em>chanteur</em> or <em>chanteuse</em>; and the act done again is still expressed by <em>refaire</em>. So <em>-ment</em>, <em>-eur</em>, <em>-tion</em>, and <em>re-</em> are parts with which French words are still built today.</p><p>A doublet is not a part of that kind. <em>Hôtel</em> and <em>hôpital</em> are both already in the vocabulary, and so are <em>chose</em> and <em>cause</em>, <em>loyal</em> and <em>légal</em>, and <em>entier</em> and <em>intègre</em>. The pair is a history kept in the vocabulary, whereas the suffix and the prefix are still used to build words.</p><p>So a present-day word such as <em>heureusement</em> or <em>redire</em> can be taken apart into parts that a speaker could add today, but a doublet cannot be taken apart in that way, because its two words are two arrivals of one Latin word, not a stem and an ending.</p>",
   "qp": {
    "id": "q-pieces",
    "variants": [
     {
      "prompt": "How does a present-day word built with -ment differ from a doublet?",
      "options": ["<em>-ment</em> still builds words; a doublet is a history", "Both are ways of building new words today", "A doublet is a word with <em>-ment</em> added twice", "<em>-ment</em> came from Latin, so it no longer builds words"],
      "answer": 0,
      "explain": "<em>-ment</em>, <em>-eur</em>, <em>-tion</em>, and <em>re-</em> are pieces still used to build a word. A doublet is two words already in the vocabulary, a popular word and a learned word from one Latin word."
     },
     {
      "prompt": "Why is a doublet not a stem and a suffix?",
      "options": ["Because the learned word is an adverb in -ment", "Because its two words are two arrivals of one Latin word", "Because the two words have different meanings", "Because the learned word is longer"],
      "answer": 1,
      "explain": "<em>Heureusement</em> is a stem and a suffix. <em>Hôtel</em> and <em>hôpital</em> are not related in that way. Each is a separate arrival of Latin <em>hospitāle</em>."
     },
     {
      "prompt": "Which of these is still a way to build a French word, rather than a history kept in a pair?",
      "options": ["The popular partner of a doublet", "The masculine plural", "The prefix re-", "Sound change, which wore the popular word down"],
      "answer": 2,
      "explain": "<em>Re-</em> is still added to a verb to mark that the act is done again. The two words of a doublet are already in the vocabulary. They are not a prefix and a stem."
     }
    ]
   }
  }
 ]
};
