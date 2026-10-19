/* IV.1 Derivation [iv.derivation]
   Plan (ITEM-LIST.md): 8 panels, 2 question points.
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
  body: `<p>English speakers easily see that “neighborhood” is made from “neighbor,” “sweetness” from “sweet,” and “singer” from “sing,” and they can make and understand new words in the same way. We saw in Section III that every word has a species: it is either primitive, not formed from another word, or derived, formed from another. <strong>Derivation</strong> is the process by which a derived word is formed from a primitive, usually by adding an ending called a <strong>suffix</strong>: English “neighbor” gives “neighborhood,” and Latin <i>rūs</i> (“the country”) gives <i>rūsticus</i> (“of the country”). Priscian treats the kinds of derived nouns at length in the fourth book of his grammar.</p>
<p>A derived word keeps the meaning of its primitive and adds to it a further meaning that the suffix signifies. So <i>-icus</i> in <i>rūsticus</i> signifies “belonging to,” and “-hood” in “neighborhood” signifies the neighbors taken together, or the place where they live. Modern grammars also count prefixes, such as “un-” in “unwise,” as means of derivation; the Latin grammarians, as we saw, treated a word with a prefix as compound, because most Latin prefixes are prepositions. Latin forms most of its derived nouns with a small number of regular suffixes.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> IV, in paraphrase; Marchand, <i>Categories and Types</i>, the introductory chapter, in paraphrase.` },

{ id: 'latin-nouns',
  title: 'Latin suffixes that form nouns',
  body: `<p>The English nouns “orator,” “motion,” “charity,” and “magnitude” all come from Latin nouns formed by regular suffixes. Latin forms nouns from verbs and adjectives by a small number of such suffixes:</p>
<p><i>-tor</i> forms the <strong>agent</strong>, the one who does the action: <i>ōrātor</i> (“speaker”) from <i>ōrāre</i>; <i>victor</i> (“conqueror”) from <i>vincere</i>;<br><i>-tiō</i> forms the <strong>action</strong>: <i>āctiō</i> (“a doing”) from <i>agere</i>; <i>mōtiō</i> (“a moving”) from <i>movēre</i>;<br><i>-tās</i> and <i>-tūdō</i> form the <strong>quality</strong>: <i>cāritās</i> (“dearness,” “love”) from <i>cārus</i>; <i>magnitūdō</i> (“greatness”) from <i>magnus</i>;<br><i>-ulus</i>, <i>-culus</i>, and <i>-ellus</i> form <strong>diminutives</strong>, which signify something small: <i>libellus</i> (“little book”) from <i>liber</i>; <i>puerulus</i> (“little boy”) from <i>puer</i>.</p>
<p>The English “libel” also comes from one of these derivatives, <i>libellus</i>, which meant a little book and then a written accusation. So a student who knows the Latin suffixes can often recognize the structure of English words that were borrowed from Latin. Latin forms adjectives by suffixes in the same way.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 236–243, in paraphrase.`,
  qp: { id: 'q-latin-nouns', variants: [
    { prompt: `What does the suffix of Latin <i>amātor</i> signify, and from what word is it formed?`,
      options: [`The agent, one who loves, from <i>amāre</i>`, `The action, a loving, from <i>amāre</i>`, `A quality, lovableness, from <i>amīcus</i>`, `A diminutive, a little lover, from <i>amor</i>`],
      answer: 0,
      explain: `<i>-tor</i> forms the agent, the one who does the action, so <i>amātor</i> is “lover,” from <i>amāre</i> (“to love”), as <i>ōrātor</i> is from <i>ōrāre</i>. The action would be formed with <i>-tiō</i>.` },
    { prompt: `Latin <i>lectiō</i> is formed from <i>legere</i> (“to read”). What does it signify?`,
      options: [`The one who reads`, `The act of reading`, `The quality of being readable`, `A little book`],
      answer: 1,
      explain: `<i>-tiō</i> forms the action, so <i>lectiō</i> is “a reading,” as <i>āctiō</i> is “a doing.” The one who reads would be <i>lēctor</i>, with <i>-tor</i>.` },
    { prompt: `What is Latin <i>agellus</i>, formed from <i>ager</i> (“field”)?`,
      options: [`One who works a field`, `The quality of being fertile`, `The act of plowing`, `A diminutive, “a little field”`],
      answer: 3,
      explain: `<i>-ellus</i> is one of the diminutive suffixes, which signify something small, as in <i>libellus</i> from <i>liber</i>. So <i>agellus</i> is “a little field.”` }
  ]} },

{ id: 'latin-adjectives',
  title: 'Latin suffixes that form adjectives',
  body: `<p>The English adjectives “glorious,” “natural,” “credible,” and “Roman” show the suffixes by which Latin forms adjectives:</p>
<p><i>-ōsus</i> signifies “full of”: <i>glōriōsus</i> (“full of glory”), <i>perīculōsus</i> (“dangerous”);<br><i>-ālis</i> and <i>-āris</i> signify “belonging to” or “of the kind of”: <i>nātūrālis</i> (“natural”), <i>vulgāris</i> (“common”);<br><i>-bilis</i> signifies what can be done: <i>mīrābilis</i> (“wonderful”), <i>crēdibilis</i> (“believable”);<br><i>-eus</i> signifies the material: <i>argenteus</i> (“of silver”), <i>ligneus</i> (“wooden”);<br><i>-ānus</i> signifies belonging to a place or person: <i>Rōmānus</i> (“Roman”), <i>urbānus</i> (“of the city”).</p>
<p>The suffix <i>-ālis</i> has a variant <i>-āris</i>, used when the stem already contains an <i>l</i>: <i>vulgāris</i>, not <i>vulgālis</i>. English shows the same pair in “natural” and “popular,” “legal” and “regular.” This is an example of the regular changes of form that accompany derivation, which the grammarians recorded as rules of analogy.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 245–252, in paraphrase.` },

{ id: 'latin-verbs',
  title: 'Derived verbs',
  body: `<p>We saw in Section III that Donatus counts among the forms of the verb the desiderative, the frequentative, and the inchoative. These are derived verbs, formed from other verbs by regular suffixes: <i>ēsuriō</i> (“I am hungry,” that is, I want to eat) from <i>edō</i> (“I eat”), <i>dictitō</i> (“I say often”) from <i>dīcō</i>, and <i>senēscō</i> (“I grow old”) from <i>seneō</i> (“I am old”).</p>
<p>English speakers “paper” a wall and “shelve” books, making verbs from nouns. Latin also forms verbs from nouns and adjectives. Such verbs are called <strong>denominative</strong> verbs (from <i>dē</i> and <i>nōmen</i>, “from a noun”): <i>nūntiāre</i> (“to announce”) from <i>nūntius</i> (“messenger”), <i>nōmināre</i> (“to name”) from <i>nōmen</i>, <i>sānāre</i> (“to heal”) from <i>sānus</i> (“healthy”). Most denominative verbs belong to the first conjugation, and the first conjugation is the one to which new Latin verbs were added. English has a parallel in its verbs in “-ize” and “-ify,” which were formed from Greek and Latin models: “modernize,” “simplify,” “purify.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 258–263, in paraphrase.` },

{ id: 'english-native',
  title: 'Native English suffixes',
  body: `<p>English has its own suffixes, inherited from Old English, as well as those it has borrowed. The native suffixes are among the most productive, that is, most freely used to make new words:</p>
<p>“-ness” forms nouns of quality from adjectives: “boldness,” “fairness”;<br>“-dom,” “-hood,” and “-ship” form nouns of state or office: “wisdom,” “boyhood,” “fellowship”;<br>“-ful” and “-less” form adjectives meaning “full of” and “without”: “tactful,” “tactless”;<br>“-ly” forms adverbs from adjectives, and some adjectives from nouns: “slowly,” “friendly”;<br>“-en” forms verbs from adjectives: “sharpen,” “soften”;<br>“-er” forms the agent: “baker,” “farmer.”</p>
<p>These suffixes correspond in meaning to the Latin ones: “-ness” to <i>-tās</i>, “-ful” to <i>-ōsus</i>, and “-er” to <i>-tor</i>. So English often has two words for the same idea, one formed with a native suffix and one borrowed from Latin: “brotherhood” and “fraternity,” “boldness” and “audacity.” But English has also borrowed the Latin suffixes themselves.</p>`,
  src: `Marchand, <i>Categories and Types</i>, the chapter on suffixation, in paraphrase.` },

{ id: 'english-borrowed',
  title: 'Borrowed suffixes in English',
  body: `<p>English has also borrowed many suffixes from Latin, Greek, and French, usually in words borrowed whole and then extended to new words: “-tion” (“creation,” “information”), “-ity” (“unity,” “purity”), “-able” (“readable,” “washable”), “-ous” (“joyous,” “dangerous”), “-al” (“seasonal,” “personal”), and the Greek “-ize” and “-ist” (“baptize,” “artist”).</p>
<p>Some of these suffixes now form English words from native roots, so that a word may be part English and part Latin. “Readable” joins the English verb “read” to the Latin suffix “-able,” and “starvation” joins the English verb “starve” to the Latin suffix “-ation.” Such words are called <strong>hybrids</strong>. Some writers have objected to them on the ground that a word should be formed from one language, but many are well established, and the criterion of usage that we saw in the Preliminary section decides their correctness.</p>`,
  src: `Marchand, <i>Categories and Types</i>, the chapter on suffixation, in paraphrase.` },

{ id: 'conversion',
  title: 'Conversion and back-formation',
  body: `<p>English also forms new words without adding any suffix. A word of one part of speech can be used as another without change of form: the noun “hammer” gives the verb “to hammer,” the verb “to throw” gives the noun “a throw,” and the noun “butter” gives the verb “to butter the bread.” Marchand calls this <strong>zero-derivation</strong>, that is, derivation with no visible suffix; it is also called <strong>conversion</strong>. We saw in Section III that English words of one form can be different parts of speech, and conversion is how many such pairs arose.</p>
<p>A word can also be formed by removing what looks like a suffix. “Editor” is older than the verb “to edit,” which was formed from it by taking away “-or”; “burglar” gave “to burgle,” and “television” gave “to televise.” This is called <strong>back-formation</strong>. It shows that speakers recognize the patterns of derivation and apply them in reverse, even when the history of the word is different.</p>`,
  src: `Marchand, <i>Categories and Types</i>, the chapters on zero-derivation and back-derivation, in paraphrase.`,
  qp: { id: 'q-conversion', variants: [
    { prompt: `How is the verb “to mail” (a letter) formed from the noun “mail”?`,
      options: [`By a suffix`, `By conversion`, `By back-formation`, `By composition`],
      answer: 1,
      explain: `The noun is used as a verb without any change of form, which is conversion, or zero-derivation, as “hammer” gives “to hammer.”` },
    { prompt: `The verb “to babysit” was formed from the older noun “babysitter.” What kind of formation is this?`,
      options: [`Conversion`, `Back-formation`, `A hybrid`, `Derivation by a suffix`],
      answer: 1,
      explain: `The noun came first, and the verb was made by taking away what looks like the agent suffix “-er,” as “to edit” was made from “editor.” That is back-formation.` },
    { prompt: `“Laughable” joins the English verb “laugh” to the Latin suffix “-able.” What is such a word called?`,
      options: [`A back-formation`, `A conversion`, `A hybrid`, `A diminutive`],
      answer: 2,
      explain: `A word made of parts from two languages is a hybrid, as “readable” and “starvation” are. Usage, not the mixture of languages, decides whether such a word is correct.` }
  ]} },

{ id: 'analogy',
  title: 'Derivation and analogy',
  body: `<p>Derivation is one of the clearest examples of what the grammarians called analogy, the regular patterns by which words are formed. We saw in the Preliminary section that analogy supports reason, one of the four criteria of correct speech. Because suffixes have regular meanings, a speaker can form a new word and be understood: the first speakers to say “drinkable” or “breakable” formed the word by an existing pattern, the suffix “-able,” and hearers understood it at once.</p>
<p>The seventeenth-century Dutch scholar Gerard Vossius, in his <i>Aristarchus</i>, gathered the Latin patterns of derivation into a systematic order, so that the student could recognize the formation of words that he had not met before (<i>Aristarchus</i> IV). But analogy is limited by usage: “sadness” exists and “sadity” does not, although both would follow a pattern. So derivation is governed by both of the criteria we have seen, analogy and usage, and in Section VI we will see that a word formed against usage can be a barbarism.</p>`,
  src: `Vossius, <i>Aristarchus sive de arte grammatica</i> IV, in paraphrase.` }

  ]
};
