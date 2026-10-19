window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.la/formation"] = {
 "id": "lang.iv.la/formation",
 "title": "Word Formation in Latin",
 "sub": "Suffixes, the vowel of a compound, and the consonants of the prefix",
 "sources": "Allen and Greenough, <i>New Latin Grammar</i>",
 "panels": [
  {
   "id": "doer",
   "title": "The doer and the action",
   "body": "<p>English “actor” still shows a Latin ending. An actor is the one who acts, and the ending “-or” continues the Latin suffix <em>-tor</em>. A suffix is an ending added to a stem, and the stem is the part of the verb to which that ending is added. Latin <em>laudō</em> (to praise) gives <em>laudātor</em> (the one who praises) and <em>laudātiō</em> (the praising).</p><p>The suffixes that return are these:<br><strong>the doer</strong> (<em>-tor</em>: <em>laudātor</em>, the one who praises; <em>victor</em>, the winner)<br><strong>the action</strong> (<em>-tiō</em>: <em>laudātiō</em>, the praising; <em>ōrātiō</em>, the speech, from <em>ōrō</em>, to speak)</p><p>So <em>-tor</em> names the doer, and <em>-tiō</em> names the action. A noun in <em>-tor</em> or <em>-tiō</em> belongs to the third declension, the class whose genitive singular ends in <em>-is</em>.</p>",
   "qp": {
    "id": "q-doer",
    "variants": [
     {
      "prompt": "What does <em>scriptor</em>, from <em>scrībō</em> (to write), name?",
      "options": ["The act of writing", "The one who writes", "Truth, as a quality", "A people, from a birth"],
      "answer": 1,
      "explain": "<em>scriptor</em> is made from <em>scrībō</em> with <em>-tor</em>. That suffix names the doer, so the noun is the one who writes, a writer. The action would take <em>-tiō</em>, and a quality takes <em>-tās</em> or <em>-tūdō</em>."
     },
     {
      "prompt": "<em>nātiō</em> is made from <em>nāscor</em> (to be born) with <em>-tiō</em>. What does the suffix name?",
      "options": ["The doer of being born", "An action", "The quality of being true", "Full of care"],
      "answer": 1,
      "explain": "The suffix <em>-tiō</em> names the action. <em>nātiō</em> is the noun of that action from <em>nāscor</em>, and the word means a people. It does not name the doer, which would end in <em>-tor</em>."
     },
     {
      "prompt": "To which declension does <em>scriptor</em> belong?",
      "options": ["The first", "The second", "The third", "The fourth"],
      "answer": 2,
      "explain": "A noun in <em>-tor</em> belongs to the third declension, the class whose genitive singular ends in <em>-is</em>. <em>scriptor</em>, from <em>scrībō</em>, is such a noun. A noun in <em>-tiō</em> belongs to the same declension."
     }
    ]
   }
  },
  {
   "id": "quality",
   "title": "Nouns of quality and adjectives",
   "body": "<p>Nouns are also made from adjectives, and adjectives from nouns. A noun of quality is made from an adjective. <em>līber</em> (free) gives <em>lībertās</em> (freedom), with <em>-tās</em>. <em>magnus</em> (great) gives <em>magnitūdō</em> (greatness), with <em>-tūdō</em>. Both nouns name a quality, the same quality the adjective names.</p><p>An adjective is made from a noun in the same way. <em>glōria</em> (glory) gives <em>glōriōsus</em> (full of glory), and <em>fōrma</em> (shape) gives <em>fōrmōsus</em> (shapely, beautiful). The suffix <em>-ōsus</em> means full of. <em>facilis</em> (easy to do) shows the suffix <em>-ilis</em>.</p><p>The suffixes that return are these:<br><strong>quality</strong> (<em>-tās</em>, as in <em>lībertās</em>; <em>-tūdō</em>, as in <em>magnitūdō</em>)<br><strong>full of</strong> (<em>-ōsus</em>, as in <em>glōriōsus</em> and <em>fōrmōsus</em>)<br><strong>easy to do</strong> (<em>-ilis</em>, as in <em>facilis</em>)</p>",
   "qp": {
    "id": "q-quality",
    "variants": [
     {
      "prompt": "<em>vērus</em> means true. Which suffix makes <em>vēritās</em>, the noun of quality?",
      "options": ["<em>-tūdō</em>", "<em>-tās</em>", "<em>-ōsus</em>", "<em>-ilis</em>"],
      "answer": 1,
      "explain": "The suffix <em>-tās</em> makes a noun of quality, as <em>lībertās</em> is made from <em>līber</em>. From <em>vērus</em> the noun is <em>vēritās</em>, truth. <em>-tūdō</em> is the other suffix of quality, and it is not the one in <em>vēritās</em>."
     },
     {
      "prompt": "<em>sōlus</em> means alone. What does <em>sōlitūdō</em> name?",
      "options": ["The one who is alone", "The act of being alone", "Solitude", "A thing full of care"],
      "answer": 2,
      "explain": "The suffix <em>-tūdō</em> makes a noun of quality. <em>sōlitūdō</em> is solitude, from <em>sōlus</em>. It does not name a doer, and it is not the noun of an action."
     },
     {
      "prompt": "What does <em>-ōsus</em> mean in <em>cūriōsus</em>, from <em>cūra</em> (care)?",
      "options": ["The doer of the act", "The name of an action", "Easy to do", "Full of"],
      "answer": 3,
      "explain": "The suffix <em>-ōsus</em> means full of. <em>cūriōsus</em> means full of care. “Easy to do” is the sense of <em>facilis</em>, which shows <em>-ilis</em>, not <em>-ōsus</em>."
     }
    ]
   }
  },
  {
   "id": "vowel",
   "title": "The vowel in a compound",
   "body": "<p>English “perfect” comes from Latin <em>perfectus</em> (finished). The vowel is <em>e</em>, whereas <em>factus</em> (made) has <em>a</em>. Allen and Greenough record the same weakening in <em>cōnfectus</em>, from <em>faciō</em> (to make). A preposition has been joined to the verb, and the two have become one compound. <em>per</em> joined to <em>faciō</em> likewise gives <em>perficiō</em> (to complete) and <em>perfectus</em>.</p><p>In <em>faciō</em> the <em>a</em> stands before one consonant, in the open syllable <em>fa-</em>. An open syllable ends in a vowel. In <em>factus</em> the <em>a</em> stands before two consonants, in the closed syllable <em>fac-</em>. A closed syllable ends in a consonant. Allen and Greenough (§15, §267) state the weakening as follows:<br><strong>short a before one consonant</strong> becomes <em>i</em> (<em>faciō</em>, but <em>cōnficiō</em>, to finish; so also <em>perficiō</em>)<br><strong>short a before two consonants</strong> becomes <em>e</em> (<em>factus</em>, but <em>cōnfectus</em> and <em>perfectus</em>)<br><strong>ae</strong> becomes <em>ī</em> (<em>caedō</em>, to strike, but <em>occīdō</em>, to kill)</p><p>Two further compounds show the simple verb’s vowel changed in the written form. <em>claudō</em> (to shut) gives <em>reclūdō</em> (to open), and <em>au</em> appears as <em>ū</em> (§267). <em>teneō</em> (to hold) gives <em>contineō</em> (to hold in), and the short <em>e</em> appears as <em>i</em>. The prefix may also change its own consonants, so that the compound can be pronounced.</p>",
   "qp": {
    "id": "q-vowel",
    "variants": [
     {
      "prompt": "<em>premō</em> (to press) has a short <em>e</em>, and the compound is <em>comprimō</em>. What has that <em>e</em> become?",
      "options": ["<em>ī</em>", "<em>i</em>", "<em>e</em>", "<em>ū</em>"],
      "answer": 1,
      "explain": "The <em>e</em> of <em>teneō</em> appears as <em>i</em> in <em>contineō</em>. The <em>e</em> of <em>premō</em> likewise appears as <em>i</em> in <em>comprimō</em>. The change of <em>ae</em> to <em>ī</em> is a different one."
     },
     {
      "prompt": "<em>quaerō</em> has <em>ae</em>, and the compound is <em>inquīrō</em>. What has <em>ae</em> become?",
      "options": ["A short <em>i</em>", "<em>e</em>", "<em>ū</em>", "<em>ī</em>"],
      "answer": 3,
      "explain": "In a compound, <em>ae</em> becomes <em>ī</em>. <em>caedō</em> gives <em>occīdō</em>, and <em>quaerō</em> gives <em>inquīrō</em>, with <em>ī</em>. A short <em>i</em> is the change of a short <em>a</em> before one consonant, or of a short <em>e</em>."
     },
     {
      "prompt": "<em>capiō</em> (to take) has a short <em>a</em> before one consonant. What does that <em>a</em> become in <em>accipiō</em>?",
      "options": ["<em>e</em>, the vowel before two consonants", "<em>i</em>", "<em>ī</em>, the vowel that replaces <em>ae</em>", "<em>ū</em>, the vowel in <em>reclūdō</em>"],
      "answer": 1,
      "explain": "A short <em>a</em> before one consonant becomes <em>i</em>. The <em>a</em> of <em>capiō</em> stands before one consonant, in the open syllable <em>ca-</em>, so <em>accipiō</em> has <em>i</em>. Before two consonants a short <em>a</em> becomes <em>e</em>."
     }
    ]
   }
  },
  {
   "id": "prefix",
   "title": "The consonants of the prefix",
   "body": "<p>The compound has to be a word that can be pronounced. Allen and Greenough (§16) record that the last consonant of a preposition is often assimilated to the following consonant. <em>ad</em> (to) and <em>ferō</em> (to carry) give <em>afferō</em> (to bring), with <em>d</em> assimilated to <em>f</em>. The paradigm of <em>ferō</em> (§200) also prints <em>adferō</em>, the same compound with the preposition left unchanged. <em>ex</em> before <em>f</em> is written <em>ef-</em>, so <em>efferō</em> is to carry forth. <em>ob</em> (toward) gives <em>offerō</em> (to offer). <em>sub</em> (under) assimilates in the same way, and <em>sufferō</em> is to endure.</p><p>The compounds that show the change are these:<br><strong>to</strong> (<em>ad</em> and <em>ferō</em> give <em>afferō</em>, to bring; the paradigm also prints <em>adferō</em>)<br><strong>under</strong> (<em>sub</em> and <em>ferō</em> give <em>sufferō</em>, to endure)<br><strong>toward</strong> (<em>ob</em> and <em>ferō</em> give <em>offerō</em>, to offer)<br><strong>out</strong> (<em>ex</em> and <em>ferō</em> give <em>efferō</em>, to carry forth)<br><strong>together</strong> (<em>con</em> and <em>locō</em>, to place, give <em>collocō</em>, to set firm; <em>conl-</em> or <em>coll-</em>)<br><strong>away</strong> (<em>ab</em> and <em>au-</em> give <em>auferō</em>, to carry away)</p><p>Allen and Greenough note that <em>au-</em> and <em>ab-</em> are two prefixes with the same meaning, not one prefix with <em>b</em> rewritten as <em>u</em> (§200). Before <em>l</em>, <em>con-</em> may be written <em>coll-</em>, as in <em>collocō</em>. Before a labial, <em>con-</em> is written <em>com-</em>. The inseparable prefix <em>dis-</em> means apart. Allen and Greenough’s example is <em>discēdere</em> (to depart). Before <em>f</em>, the <em>s</em> of <em>dis-</em> is assimilated to <em>f</em> (§16).</p>",
   "qp": {
    "id": "q-prefix",
    "variants": [
     {
      "prompt": "<em>ad</em> is joined to <em>cēdō</em> (to go) in <em>accēdō</em>. Why is the prefix written <em>acc-</em>?",
      "options": ["The short <em>e</em> has become <em>i</em>", "<em>ae</em> has become <em>ī</em>", "The <em>d</em> has become <em>c</em>", "The <em>b</em> of <em>sub</em> has become <em>f</em>"],
      "answer": 2,
      "explain": "The prefix is assimilated so that it can be pronounced with the verb. The <em>d</em> of <em>ad</em> becomes <em>c</em> before <em>c</em>. The doubled <em>c</em> is not a change of the vowel of <em>cēdō</em>."
     },
     {
      "prompt": "<em>con</em> is joined to <em>rumpō</em> (to break) in <em>corrumpō</em> (to spoil). What has the <em>n</em> become?",
      "options": ["<em>r</em>", "<em>m</em>", "<em>l</em>", "<em>f</em>"],
      "answer": 0,
      "explain": "Before <em>r</em>, <em>con-</em> may be written <em>corr-</em>. The <em>n</em> becomes <em>r</em>, so that the prefix can be pronounced with the verb. <em>corrumpō</em> is <em>con</em> joined to <em>rumpō</em>, and it means to spoil."
     },
     {
      "prompt": "Before <em>p</em>, how does Allen and Greenough write <em>con-</em>?",
      "options": ["<em>coll-</em>, as before <em>l</em>", "<em>corr-</em>, as before <em>r</em>", "<em>com-</em>", "<em>au-</em>, the other form of <em>ab-</em>"],
      "answer": 2,
      "explain": "Before a labial, <em>con-</em> is written <em>com-</em> (§16). <em>p</em> is a labial, so the prefix is <em>com-</em>. <em>coll-</em> is the spelling before <em>l</em>, and <em>corr-</em> is the spelling before <em>r</em>."
     }
    ]
   }
  },
  {
   "id": "parts",
   "title": "Reading a word from its parts",
   "body": "<p>A reader who knows the suffix and the prefix can take a new word apart. <em>amō</em> (to love) with <em>-tor</em> gives <em>amātor</em> (a lover), the one who loves. The suffix names the doer.</p><p><em>ad</em> (to) joined to <em>capiō</em> (to take) is written <em>accipiō</em> (to receive). The preposition’s sense is kept, and the <em>a</em> of <em>capiō</em> has become <em>i</em>, because that <em>a</em> stands before one consonant. The suffix shows what kind of word has been made, and the prefix shows what has been joined to the simple word.</p>",
   "qp": {
    "id": "q-parts",
    "variants": [
     {
      "prompt": "<em>eximō</em> joins <em>ex</em> (out of) to <em>emō</em>. What does the compound mean?",
      "options": ["To press together", "To take out", "To spoil", "To depart"],
      "answer": 1,
      "explain": "<em>ex</em> means out of, and <em>eximō</em> means to take out. Pressing together, spoiling, and departing are the senses of other compounds."
     },
     {
      "prompt": "What suffix does <em>ūtilis</em> (useful) show?",
      "options": ["<em>-tās</em>", "<em>-tūdō</em>", "<em>-ōsus</em>", "<em>-ilis</em>"],
      "answer": 3,
      "explain": "<em>ūtilis</em> shows <em>-ilis</em>, as <em>facilis</em> (easy to do) does. It is not a noun of quality in <em>-tās</em> or <em>-tūdō</em>, and it is not an adjective in <em>-ōsus</em>."
     },
     {
      "prompt": "<em>iaciō</em> (to throw) has a short <em>a</em> before one consonant. What does that <em>a</em> become in <em>ēiciō</em>?",
      "options": ["<em>e</em>, the vowel before two consonants", "<em>i</em>", "<em>ī</em>, the vowel that replaces <em>ae</em>", "<em>ū</em>"],
      "answer": 1,
      "explain": "A short <em>a</em> before one consonant becomes <em>i</em>. Allen and Greenough print <em>iaciō</em>, <em>ēiciō</em> beside <em>faciō</em>, <em>cōnficiō</em>. <em>ēiciō</em> therefore has <em>i</em>."
     }
    ]
   }
  }
 ]
};
