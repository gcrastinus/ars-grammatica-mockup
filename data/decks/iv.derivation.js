/* IV.1 Derivation [iv.derivation]
   Plan (ITEM-LIST.md): 8 panels, 2 question points (placeholders: qpTodo; to be written).
   Live material drawn on: none (ITEM-LIST.md: "Reuse: none"); built from Priscian, Vossius, and Marchand. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iv.derivation'] = {
  id: 'iv.derivation',
  title: 'Derivation',
  sub: 'How new words are made from old ones by endings and changes of form',
  sources: `Priscian, <i>Institutiones grammaticae</i> IV; G. J. Vossius, <i>Aristarchus</i> IV; Hans Marchand, <i>The Categories and Types of Present-Day English Word-Formation</i> (1960).`,
  panels: [

{ id: 'what-derivation',
  title: 'What is derivation?',
  body: `<p>We saw in Section III that every word has a species: it is either primitive, not formed from another word, or derived, formed from another. <strong>Derivation</strong> is the process by which a derived word is formed from a primitive, usually by adding an ending called a <strong>suffix</strong>: Latin <i>rēx</i> (“king”) gives <i>rēgius</i> (“royal”), and English “king” gives “kingdom.” Priscian treats the kinds of derived nouns at length in the fourth book of his grammar.</p>
<p>A derived word keeps the meaning of its primitive and adds to it a further meaning that the suffix signifies. So <i>-ius</i> in <i>rēgius</i> signifies “belonging to,” and “-dom” in “kingdom” signifies the domain or condition of a king. Modern grammars also count prefixes, such as “un-” in “unkind,” as means of derivation; the Latin grammarians, as we saw, treated a word with a prefix as compound, because most Latin prefixes are prepositions.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> IV, in paraphrase; Marchand, <i>Categories and Types</i>, the introductory chapter, in paraphrase.` },

{ id: 'latin-nouns',
  title: 'Latin suffixes that form nouns',
  body: `<p>Latin forms nouns from verbs and adjectives by a small number of regular suffixes:<br><i>-tor</i> forms the <strong>agent</strong>, the one who does the action: <i>amātor</i> (“lover”) from <i>amāre</i>; <i>victor</i> (“conqueror”) from <i>vincere</i>;<br><i>-tiō</i> forms the <strong>action</strong>: <i>āctiō</i> (“a doing”) from <i>agere</i>; <i>nātiō</i> (“birth,” “nation”) from <i>nāscī</i>;<br><i>-tās</i> and <i>-tūdō</i> form the <strong>quality</strong>: <i>bonitās</i> (“goodness”) from <i>bonus</i>; <i>magnitūdō</i> (“greatness”) from <i>magnus</i>;<br><i>-ulus</i>, <i>-culus</i>, and <i>-ellus</i> form <strong>diminutives</strong>, which signify something small: <i>libellus</i> (“little book”) from <i>liber</i>; <i>puerulus</i> (“little boy”) from <i>puer</i>.</p>
<p>Many English nouns come from these Latin derivatives: “actor,” “action,” “nation,” “magnitude,” and “libel” (from <i>libellus</i>, a little book, then a written accusation). So a student who knows the Latin suffixes can often recognize the structure of English words that were borrowed from Latin.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 236–243, in paraphrase.`,
  qpTodo: `Latin noun suffixes: what does the suffix of a given noun signify (<i>amātor</i>, <i>āctiō</i>, <i>bonitās</i>, <i>libellus</i>), and from what word is it derived.` },

{ id: 'latin-adjectives',
  title: 'Latin suffixes that form adjectives',
  body: `<p>Latin also forms adjectives by regular suffixes:<br><i>-ōsus</i> signifies “full of”: <i>glōriōsus</i> (“full of glory”), <i>perīculōsus</i> (“dangerous”);<br><i>-ālis</i> and <i>-āris</i> signify “belonging to” or “of the kind of”: <i>nātūrālis</i> (“natural”), <i>vulgāris</i> (“common”);<br><i>-bilis</i> signifies what can be done: <i>amābilis</i> (“lovable”), <i>crēdibilis</i> (“believable”);<br><i>-eus</i> signifies the material: <i>aureus</i> (“golden”), <i>ferreus</i> (“made of iron”);<br><i>-ānus</i> signifies belonging to a place or person: <i>Rōmānus</i> (“Roman”), <i>montānus</i> (“of the mountains”).</p>
<p>The suffix <i>-ālis</i> has a variant <i>-āris</i>, used when the stem already contains an <i>l</i>: <i>vulgāris</i>, not <i>vulgālis</i>. English shows the same pair in “natural” and “popular,” “legal” and “regular.” This is an example of the regular changes of form that accompany derivation, which the grammarians recorded as rules of analogy.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 245–252, in paraphrase.` },

{ id: 'latin-verbs',
  title: 'Derived verbs',
  body: `<p>We saw in Section III that Donatus counts among the forms of the verb the desiderative, the frequentative, and the inchoative: <i>lectūriō</i> (“I want to read”), <i>lectitō</i> (“I read often”), <i>calēscō</i> (“I grow warm”). These are derived verbs, formed from other verbs by regular suffixes.</p>
<p>Latin also forms verbs from nouns and adjectives. Such verbs are called <strong>denominative</strong> verbs (from <i>dē</i> and <i>nōmen</i>, “from a noun”): <i>laudāre</i> (“to praise”) from <i>laus</i> (“praise”), <i>nōmināre</i> (“to name”) from <i>nōmen</i>, <i>novāre</i> (“to make new”) from <i>novus</i>. Most denominative verbs belong to the first conjugation, and the first conjugation is the one to which new Latin verbs were added. English has a parallel in its verbs in “-ize” and “-ify,” which were formed from Greek and Latin models: “modernize,” “simplify,” “purify.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 258–263, in paraphrase.` },

{ id: 'english-native',
  title: 'Native English suffixes',
  body: `<p>English has its own suffixes, inherited from Old English, as well as those it has borrowed. The native suffixes are among the most productive, that is, most freely used to make new words:<br><i>-ness</i> forms nouns of quality from adjectives: “kindness,” “darkness”;<br><i>-dom</i>, <i>-hood</i>, and <i>-ship</i> form nouns of state or office: “freedom,” “childhood,” “friendship”;<br><i>-ful</i> and <i>-less</i> form adjectives meaning “full of” and “without”: “hopeful,” “hopeless”;<br><i>-ly</i> forms adverbs from adjectives, and some adjectives from nouns: “quickly,” “friendly”;<br><i>-en</i> forms verbs from adjectives: “darken,” “widen”;<br><i>-er</i> forms the agent: “teacher,” “baker.”</p>
<p>These suffixes correspond in meaning to the Latin ones: “-ness” to <i>-tās</i>, “-ful” to <i>-ōsus</i>, and “-er” to <i>-tor</i>. So English often has two words for the same idea, one formed with a native suffix and one borrowed from Latin: “brotherhood” and “fraternity,” “kindness” and “benignity.”</p>`,
  src: `Marchand, <i>Categories and Types</i>, the chapter on suffixation, in paraphrase.` },

{ id: 'english-borrowed',
  title: 'Borrowed suffixes in English',
  body: `<p>English has also borrowed many suffixes from Latin, Greek, and French, usually in words borrowed whole and then extended to new words: “-tion” (“nation,” “information”), “-ity” (“unity,” “electricity”), “-able” (“readable,” “washable”), “-ous” (“famous,” “glorious”), “-al” (“natural,” “national”), and the Greek “-ize” and “-ist” (“baptize,” “artist”).</p>
<p>Some of these suffixes now form English words from native roots, so that a word may be part English and part Latin. “Readable” joins the English verb “read” to the Latin suffix “-able,” and “starvation” joins the English verb “starve” to the Latin suffix “-ation.” Such words are called <strong>hybrids</strong>. Some writers have objected to them on the ground that a word should be formed from one language, but many are well established, and the criterion of usage that we saw in the Preliminary section decides their correctness.</p>`,
  src: `Marchand, <i>Categories and Types</i>, the chapter on suffixation, in paraphrase.` },

{ id: 'conversion',
  title: 'Conversion and back-formation',
  body: `<p>English also forms new words without adding any suffix. A word of one part of speech can be used as another without change of form: the noun “paint” gives the verb “to paint,” the verb “to run” gives the noun “a run,” and the noun “water” gives the verb “to water the garden.” Marchand calls this <strong>zero-derivation</strong>, that is, derivation with no visible suffix; it is also called <strong>conversion</strong>. We saw in Section III that English words of one form can be different parts of speech, and conversion is how many such pairs arose.</p>
<p>A word can also be formed by removing what looks like a suffix. “Editor” is older than the verb “to edit,” which was formed from it by taking away “-or”; “burglar” gave “to burgle,” and “television” gave “to televise.” This is called <strong>back-formation</strong>. It shows that speakers recognize the patterns of derivation and apply them in reverse, even when the history of the word is different.</p>`,
  src: `Marchand, <i>Categories and Types</i>, the chapters on zero-derivation and back-derivation, in paraphrase.`,
  qpTodo: `Kinds of derivation: is a given word formed by a suffix, by conversion, or by back-formation (“kindness,” “to paint,” “to edit,” “readable”), and from what word.` },

{ id: 'analogy',
  title: 'Derivation and analogy',
  body: `<p>Derivation is one of the clearest examples of what the grammarians called analogy, the regular patterns by which words are formed. We saw in the Preliminary section that analogy supports reason, one of the four criteria of correct speech. Because suffixes have regular meanings, a speaker can form a new word and be understood: a person who first said “rewritable” or “unfriend” formed the word by existing patterns, and hearers understood it at once.</p>
<p>The seventeenth-century Dutch scholar Gerard Vossius, in his <i>Aristarchus</i>, gathered the Latin patterns of derivation into a systematic order, so that the student could recognize the formation of words that he had not met before (<i>Aristarchus</i> IV, in paraphrase). But analogy is limited by usage: “kindness” exists and “kindity” does not, although both would follow a pattern. So derivation is governed by both of the criteria we have seen, analogy and usage, and in Section VI we will see that a word formed against usage can be a barbarism.</p>`,
  src: `Vossius, <i>Aristarchus sive de arte grammatica</i> IV, in paraphrase.` }

  ]
};
