/* XI.1 The Other Classical Traditions [xi.traditions]
   Plan (ITEM-LIST.md): 56 panels (scribal lists 6, Sanskrit 13, Arabic 13, Hebrew 12, Chinese 12), 18 question points
   (placeholders: qpTodo; to be written). No exercise.
   Live material drawn on: DECKS.scribal (33), DECKS.vyakarana (34), DECKS.nahw (30), DECKS.xiaoxue (31), each cut to the
   target; DECKS.quaestiones for the question-point topics. Hebrew is new, built from the sources named in ITEM-LIST.md.
   Sībawayh and the other sources without a published English translation of the passage are paraphrased; quotations in
   Sanskrit, Arabic, Hebrew, and Chinese are given in transliteration with a gloss in substance, not as a published
   translation, except where a translator is recorded in sources/TRANSLATIONS-USED.md. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['xi.traditions'] = {
  id: 'xi.traditions',
  title: 'The Other Classical Traditions',
  sub: 'The scribal lists, and the Sanskrit, Arabic, Hebrew, and Chinese grammatical traditions',
  sources: `<i>Materials for the Sumerian Lexicon</i> IV; J. A. Black, <i>Sumerian Grammar in Babylonian Theory</i>; Yāska, <i>Nirukta</i>; Pāṇini, <i>Aṣṭādhyāyī</i>; Patañjali, <i>Mahābhāṣya</i>; Bhartṛhari, <i>Vākyapadīya</i>; Sībawayh, <i>al-Kitāb</i>; al-Zajjājī, <i>al-Īḍāḥ</i>; Saadia Gaon; Judah Ḥayyūj; Jonah ibn Janāḥ; David Kimḥi, <i>Mikhlol</i>; the <i>Erya</i>; Xu Shen, <i>Shuowen jiezi</i>; Lu Fayan, <i>Qieyun</i>; Ma Jianzhong, <i>Mashi wentong</i>.`,
  panels: [

/* ---------- The scribal lists (6) ---------- */

{ id: 'other-arts',
  title: 'Other arts of grammar',
  body: `<p>We have studied the art of grammar as the Greeks and Romans made it and as the medieval and later schools received it. But other peoples also made the words of a classical language the object of a school study, and some of them did so long before Donatus. In this section we consider five such traditions: the scribal lists of Babylon, the Sanskrit grammar of India, the Arabic grammar of the Islamic world, the Hebrew grammar of the medieval Jewish scholars, and the Chinese study of the written character.</p>
<p>We study them with the terms of our own art, because those are the terms we have learned, but the aim is not to find Donatus’s eight parts in every tradition. The aim is to see where the other traditions asked the same questions as ours, where they asked different ones, and what each found. So in each tradition we begin from its own name for the art and its own first questions, and only then compare it with the art we have studied.</p>`,
  src: `General introduction.` },

{ id: 'scribal-school',
  title: 'Sumerian in the Babylonian school',
  body: `<p>In Mesopotamia, some two thousand years before Donatus, the scribes who spoke Akkadian kept Sumerian as a language of learning after it had ceased to be anyone’s mother tongue, as Latin was later kept in the West. They did not write a treatise called grammar. They wrote lists and paradigms on clay tablets, with a Sumerian form in the left column and its Akkadian equivalent in the right, so that the Sumerian was understood through the Akkadian.</p>
<p>The simplest line of such a list is a pair: Sumerian <i>lugal</i> = Akkadian <i>šarru</i>, “king.” The art begins with this pairing, not with a definition of the noun, and every Sumerian word, prefix, or form is taught by the Akkadian form that faces it. So the scribal art of words is a bilingual art: its unit is the match between two languages, not the analysis of one.</p>`,
  src: `<i>Materials for the Sumerian Lexicon</i> IV; Black, <i>Sumerian Grammar in Babylonian Theory</i>; both in paraphrase.` },

{ id: 'scribal-sign',
  title: 'The sign and its readings',
  body: `<p>Our art begins with the letter, the least part of articulate voice that can be written. The scribal art begins with the <strong>sign</strong>, a cuneiform character that may write a whole word, a syllable, or several different words. The sign called KA, for example, may be read <i>inim</i> (“word”), <i>dug</i> (“to speak”), or <i>gù</i> (“voice”), so that one figure has several powers, and the powers are different words.</p>
<p>The scribes compiled sign lists, such as the series called <i>Ea</i>, which give each sign with its readings and often an Akkadian equivalent, and the series <i>Diri</i>, which treats signs written together for one reading. So the scribal “letter” is not a sound without meaning, as ours is, but a written sign that often already has a meaning. We saw in Section II that a letter has a name, a figure, and a power; the sign lists record the same three things for each sign, but the power of a sign is often a word.</p>`,
  src: `<i>Materials for the Sumerian Lexicon</i>, the <i>Ea</i> and <i>Diri</i> series, in paraphrase.`,
  qpTodo: `The sign: how does a cuneiform sign such as KA differ from a Latin letter (it may write a word; it has several readings), and what did the sign lists record.` },

{ id: 'scribal-lists',
  title: 'The thematic lists',
  body: `<p>Beside the sign lists, the scribes copied great thematic lists of words, such as the series <i>ḪAR-ra = ḫubullu</i>, in which Sumerian words are grouped by subject: trees, vessels, stones, garments, offices. Each entry is a pair: Sumerian <i>é</i> = Akkadian <i>bītum</i>, “house”; <i>dumu</i> = <i>māru</i>, “child, son.”</p>
<p>These lists are the scribes’ account of the word. They do not discuss imposition or define the noun; the list itself fixes what each Sumerian word means, by its Akkadian equivalent and its place among the things of its kind. So the thematic list is closer to a dictionary arranged by subject than to a grammar, but it was the foundation of the scribe’s knowledge of the language.</p>`,
  src: `<i>Materials for the Sumerian Lexicon</i>, <i>ḪAR-ra = ḫubullu</i>, in paraphrase.` },

{ id: 'scribal-paradigms',
  title: 'The grammatical paradigms',
  body: `<p>The most ambitious tablets are paradigms of the Sumerian verb, the Old Babylonian Grammatical Texts. One of them takes the Sumerian verb for “to go” and runs it through more than three hundred lines of forms, each paired with an Akkadian form: Sumerian <i>ba-ši-ŋen</i> = Akkadian <i>ittalakšum</i>, “he went away to him.” The paradigms often give the persons in the order third, first, second (“he,” “I,” “you”), not our first, second, third.</p>
<p>Later Neo-Babylonian texts isolate the pieces of a Sumerian form, such as a prefix or a suffix, and give each an Akkadian explanation. This is the nearest the scribes come to our accidents of the word. But they do not name a genitive or a tense; they say that this Sumerian piece is the equivalent of that Akkadian relation. So the scribal grammar is a grammar of correspondences, and its categories are the forms of the other language.</p>`,
  src: `<i>Materials for the Sumerian Lexicon</i> IV (Old Babylonian and Neo-Babylonian Grammatical Texts); Black, <i>Sumerian Grammar in Babylonian Theory</i>; both in paraphrase.`,
  qpTodo: `The paradigms: what does a line of a Sumerian verbal paradigm pair (a Sumerian form with an Akkadian form), and how do the scribes’ categories differ from accidents such as tense and case.` },

{ id: 'scribal-compare',
  title: 'What the scribes asked',
  body: `<p>The scribal tablets never say how many parts of speech there are. Their questions were these: how is this sign written and read; what is the Akkadian for this Sumerian word; what form does this verb take for “he,” “I,” and “you,” or with “to him” and “from it”; and what does this piece of the form signify? These are real grammatical questions, though they are not Donatus’s <i>partes orationis quot sunt?</i></p>
<p>So the scribal art differs from ours in three ways. It is bilingual, explaining one language by another; it begins with the written sign, not with the voice; and it arranges forms in lists and paradigms instead of defining classes and rules. Yet it shows the same need that produced our art: a classical language had to be kept and understood in a school, and that required a systematic study of its words.</p>`,
  src: `Black, <i>Sumerian Grammar in Babylonian Theory</i>, in paraphrase.` },

/* ---------- Sanskrit (13) ---------- */

{ id: 'vyakarana',
  title: 'Vyākaraṇa, the analysis of speech',
  body: `<p>The Indian name for grammar is <i>vyākaraṇa</i>, “analysis” or “separation,” that is, the separating of speech into its parts. It was counted among the six auxiliary sciences of the Veda, the sacred texts of Hinduism, because the exact wording of the Veda had to be preserved and understood, and that required the ability to take a word apart and put it together again.</p>
<p>The central work of the tradition is Pāṇini’s <i>Aṣṭādhyāyī</i> (“The Eight Chapters”), composed perhaps in the fourth century BC. Before it stands Yāska’s <i>Nirukta</i>, a work on the explanation of difficult Vedic words; after it come Patañjali’s <i>Mahābhāṣya</i> (“The Great Commentary”), of about the second century BC, and Bhartṛhari’s <i>Vākyapadīya</i>, a philosophy of language of about the fifth century AD. So the Indian tradition is older than the Greek grammar of Dionysius Thrax and developed independently of it.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i>; Yāska, <i>Nirukta</i>; Patañjali, <i>Mahābhāṣya</i>; Bhartṛhari, <i>Vākyapadīya</i>; general history, in paraphrase.` },

{ id: 'sutra',
  title: 'The sūtra',
  body: `<p>We have seen that Donatus teaches grammar by questions and answers, defining each part of speech and naming its accidents. The Sanskrit grammar takes a different form. Pāṇini’s grammar does not explain; it consists of nearly four thousand rules called <strong>sūtras</strong> (“threads”), each stated in as few syllables as possible, with technical abbreviations of Pāṇini’s own invention. The rules are ordered so that a later rule can rely on an earlier one, and together they generate the correct forms of Sanskrit from roots and affixes.</p>
<p>So the Indian grammar is learned not by reading a chapter on the noun but by learning the rules in their order, with the commentaries that explain them. Patañjali’s <i>Great Commentary</i> discusses why each rule is needed and what would go wrong without it. This is a different form of art from Donatus’s questions and answers: it aims at a complete and economical set of rules from which every correct form can be derived.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i> (Vasu for reference); Patañjali, <i>Mahābhāṣya</i>; both in paraphrase.` },

{ id: 'sounds',
  title: 'The sounds of Sanskrit',
  body: `<p>The Indian tradition gave close attention to the sounds of speech, which it studied in a separate science called <i>śikṣā</i> (“instruction”) as well as in grammar. The sounds were classified by the place in the mouth where they are made and by the manner of making them, and the Devanagari alphabet is arranged in that order: the vowels first, and then the consonants by their place, from the throat to the lips.</p>
<p>Pāṇini’s grammar begins with fourteen short lists of the sounds, arranged so that any group of sounds can be named by its first sound and a marker at the end of a list. So the order of the alphabet is itself part of the grammar. We saw in Section II that the Latin grammarians divided the letters into vowels, semivowels, and mutes; the Indian classification is more exact, because it describes how each sound is made.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i>, the fourteen <i>Śivasūtras</i>; <i>śikṣā</i> texts; both in paraphrase.` },

{ id: 'sandhi',
  title: 'Sandhi',
  body: `<p>When two sounds meet in Sanskrit, at the end of one word and the beginning of the next, or within a word, they often change. This change is called <strong>sandhi</strong> (“putting together”), and its rules are part of the grammar. So <i>tat</i> (“that”) and <i>api</i> (“also”) are joined as <i>tad api</i> (“that too”), and <i>rāmaḥ</i> (“Rāma”) and <i>gacchati</i> (“goes”) are joined as <i>rāmo gacchati</i>.</p>
<p>We saw in Section VI that a change in a single word is a barbarism in prose and a metaplasm in verse. In Sanskrit, by contrast, the changes of sandhi are required in correct speech, and omitting them would be an error. English has a few such changes, as “an apple” but “a pear,” and Latin elision in verse is a kind of sandhi; but no other classical tradition made the joining of sounds so large a part of the grammar.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i>, the rules of sandhi, in paraphrase.`,
  qpTodo: `Sandhi: what happens when two Sanskrit words are joined (<i>tat</i> + <i>api</i>), and how does sandhi differ from a barbarism or a metaplasm in Latin.` },

{ id: 'yaska',
  title: 'Yāska’s four kinds of word',
  body: `<p>We have seen that the Greek and Latin grammarians counted eight parts of speech and that the modists distinguished the noun from the verb by its mode of signifying. The Indian tradition also divided words into kinds, and it gave a reason for its first division. Yāska divides words into four kinds: the <strong>name</strong> (<i>nāman</i>), the <strong>verb</strong> (<i>ākhyāta</i>), the <strong>preverb</strong> (<i>upasarga</i>), which is placed before a verb and changes its sense, and the <strong>particle</strong> (<i>nipāta</i>), which includes words such as <i>ca</i> (“and”) and <i>na</i> (“not”). He also says what distinguishes the first two: the verb has becoming as its principal meaning (<i>bhāvapradhānam ākhyātam</i>), and names have a being, a thing, as theirs (<i>sattvapradhānāni nāmāni</i>) (<i>Nirukta</i> I.1, in substance).</p>
<p>This account comes strikingly close to the modists’ distinction that we saw in Section III, between the mode of becoming and the mode of a stable thing, although the two traditions had no contact. But Yāska counts four kinds, not eight: the adjective belongs with the name, and there is no participle or interjection as a separate kind.</p>`,
  src: `Yāska, <i>Nirukta</i> I.1 (Lakshman Sarup for reference), the Sanskrit in transliteration and the English in substance.`,
  qpTodo: `Yāska’s four kinds: what are Yāska’s four kinds of word, and how does his account of the name and the verb compare with the modists’ modes of signifying.` },

{ id: 'pada',
  title: 'The word in the sentence',
  body: `<p>The English word “king” can stand in a sentence just as it is, but the Latin stem <i>rēg-</i> cannot; it must first receive an ending, as in <i>rēx</i> or <i>rēgem</i>. Sanskrit is like Latin in this respect, and Pāṇini defines a word in use, a <strong>pada</strong>, by its ending: a word is that which ends in a nominal ending or a verbal ending (<i>Aṣṭādhyāyī</i> 1.4.14, <i>suptiṅantaṃ padam</i>, in substance). So the stem <i>rāma</i> is not yet a word of the sentence; with the nominative ending it becomes <i>rāmaḥ</i>, “Rāma,” which can stand in a sentence.</p>
<p>This definition differs from Priscian’s, which we saw in Section III defines the word as the least part of a constructed sentence. Both relate the word to the sentence, but Pāṇini makes the ending the mark of a word, so that a stem without its ending belongs to a level below the word. The difference reflects the languages: in Sanskrit, as in Latin, nouns and verbs almost never appear without an ending, whereas in English many words do.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i> 1.4.14 (Vasu for reference), in substance.` },

{ id: 'root-affix',
  title: 'Root and affix',
  body: `<p>The Indian grammar derives almost every form from a <strong>root</strong> (<i>dhātu</i>) and one or more <strong>affixes</strong> (<i>pratyaya</i>). The roots are listed in a separate catalogue with their meanings: <i>gam</i> (“go”), <i>kṛ</i> (“make”), <i>bhū</i> (“be, become”). A verb of the sentence is made by adding affixes to the root: from <i>gam</i> comes <i>gacchati</i>, “he goes,” and with a past affix <i>agacchat</i>, “he went.”</p>
<p>So the Indian grammarian does not parse a finished form, as we do when we name the accidents of <i>laudābantur</i>; he builds the form from its root. We saw in Section IV that Latin and English words are formed by derivation and composition; Pāṇini made derivation the method of the whole grammar, so that nouns, verbs, and even many particles are derived from roots by rules.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i>; the <i>Dhātupāṭha</i>; both in paraphrase.` },

{ id: 'karaka',
  title: 'The kārakas',
  body: `<p>In the English sentence “The cook takes the bread from the shelf, cuts it with a knife in the kitchen, and gives it to the guests,” each noun names something that has a part in the action: the one who acts (the cook), what is acted on (the bread), the means (the knife), the ones to whom it is given (the guests), the place from which it is taken (the shelf), and the place in which it is done (the kitchen). The center of Pāṇini’s syntax is the doctrine of these roles, which he calls the <strong>kārakas</strong> (“factors” of an action). A kāraka is a role that a thing plays in the action signified by the verb. Pāṇini names six:<br>the <strong>agent</strong> (<i>kartṛ</i>), the independent doer;<br>the <strong>object</strong> (<i>karman</i>), what the agent most wishes to reach;<br>the <strong>instrument</strong> (<i>karaṇa</i>), the most effective means;<br>the <strong>recipient</strong> (<i>sampradāna</i>), the one to whom something is given;<br>the <strong>source</strong> (<i>apādāna</i>), the fixed point from which something departs;<br>and the <strong>locus</strong> (<i>adhikaraṇa</i>), the place or time in which the action occurs.</p>
<p>These are relations in the action, not names of endings. The endings of the noun mark them, but not one for one: the same role may be marked by different endings in different constructions, as the agent is marked differently in an active and a passive sentence. So the kārakas resemble the uses of the Latin cases, but they belong to the action and are prior to the endings that express them.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i> 1.4.23–55 (Vasu for reference), in paraphrase.`,
  qpTodo: `The kārakas: which kāraka does a given noun express in a simple sentence (agent, object, instrument, recipient, source, locus), and why is a kāraka not the same as a case ending.` },

{ id: 'sentence-example',
  title: 'A Sanskrit sentence',
  body: `<p>The sentence <i>rāmaḥ vanaṃ gacchati</i>, “Rāma goes to the forest,” shows the kārakas at work. <i>Rāmaḥ</i> is the agent, marked by the first ending, which corresponds to our nominative; <i>vanam</i> (“forest”) is the object, the place he wishes to reach, marked by the second ending, which corresponds to our accusative; and <i>gacchati</i> is the verb, formed from the root <i>gam</i> with the ending of the third person singular present.</p>
<p>Because the endings mark the roles, Sanskrit, like Latin, can change the order of the words without changing the sense. The Indian explanation of this freedom is the marking of the kārakas by endings; ours is the marking of construction by cases. The two accounts describe the same fact from different starting points: the Indian from the action and its factors, ours from the noun and its accidents.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i>, in paraphrase.` },

{ id: 'vibhakti',
  title: 'The endings and the compounds',
  body: `<p>The Indian grammar counts seven sets of nominal endings, called <strong>vibhakti</strong> (“division”), with the vocative as a use of the first. They correspond roughly to the Latin cases with two more, the instrumental and the locative. But they also mark relations that are not kārakas, such as possession, which is marked by the sixth ending but is not a role in the action. So the endings and the kārakas form two systems, and a Latin table of cases imposed on Sanskrit would misrepresent both.</p>
<p>Sanskrit also forms compounds (<i>samāsa</i>) very freely, and the grammar has a full account of their kinds. <i>Rājapuruṣaḥ</i>, “the king’s man,” joins <i>rāja</i> (“king”) and <i>puruṣa</i> (“man”) in one word, expressing within the compound the relation that Latin expresses by the genitive, <i>rēgis vir</i>. We saw in Section IV that German forms long compounds; Sanskrit forms them even more freely, so that much of its construction takes place within single words.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i>, on the endings and on compounds, in paraphrase.` },

{ id: 'patanjali',
  title: 'Patañjali on the purposes of grammar',
  body: `<p>Anyone who begins the study of grammar may ask what it is for, and we saw in the Preliminary section the answers that the Greek and Latin grammarians gave. Patañjali opens his <i>Great Commentary</i> by asking the same question, and he gives five chief purposes in a single compound: <i>rakṣohāgamalaghvasaṃdehāḥ prayojanam</i>, that is, the preservation of the Veda; the adapting of its formulas to new occasions; the command of scripture; brevity, since rules teach more quickly than lists of words; and the removal of doubt about the correct form (<i>Mahābhāṣya</i>, Paspaśāhnika, in substance).</p>
<p>These purposes resemble those that the Greek and Latin grammarians gave for their art: to speak correctly and to explain the authors. But Patañjali’s first purpose is the preservation of a sacred text, and his fourth, brevity, explains the form of Pāṇini’s grammar: a short set of rules that generates every correct form is easier to learn than a list of all the forms.</p>`,
  src: `Patañjali, <i>Mahābhāṣya</i>, Paspaśāhnika (trans. S. D. Joshi and J. A. F. Roodbergen, 1986, for reference), the Sanskrit in transliteration and the English in substance.`,
  qpTodo: `Patañjali’s purposes: what purposes does Patañjali give for grammar, and how do they compare with the purposes of the Greek and Latin art.` },

{ id: 'bhartrhari',
  title: 'Bhartṛhari and the sentence',
  body: `<p>When we hear a sentence such as “The bread is fresh,” we understand it at once as a whole, and not as “bread,” then “fresh,” added together. Pāṇini’s rules produce words. Bhartṛhari, in the <i>Vākyapadīya</i> (“On the Sentence and the Word”), argued that the true unit of meaning is the sentence (<i>vākya</i>), and that its meaning is grasped as a whole, in a single act of understanding, not by adding the meanings of the words one after another. He called the meaning-bearing unit that the hearer grasps the <strong>sphoṭa</strong> (literally, “bursting forth”), distinct from the sequence of sounds that reveal it (<i>Vākyapadīya</i> I).</p>
<p>So the Indian tradition, which built its grammar from roots and affixes, ended in a philosophy that put the sentence first. We saw in Section V that the modists required a construction to produce a complete sense in the mind of the hearer. Bhartṛhari’s account is different in its details, but it shares the conviction that understanding a sentence is more than adding its words.</p>`,
  src: `Bhartṛhari, <i>Vākyapadīya</i> I (K. A. Subramania Iyer for reference), in paraphrase.` },

{ id: 'sanskrit-compare',
  title: 'The Sanskrit art compared with ours',
  body: `<p>The Sanskrit grammar shares much with the Greek and Latin art. Both serve a classical language and its sacred or literary texts; both distinguish noun and verb, and both connect the verb with becoming; both describe the endings that mark the construction of the noun. But the Sanskrit art differs in its method and its center. It is a system of rules that generates forms from roots, not a set of definitions; its syntax is centered on the kārakas, the roles in the action, not on the cases; and it gives the sounds and their combinations a much larger place.</p>
<p>Unlike the scribal lists, which explain one language by another, the Sanskrit grammar explains Sanskrit from itself. In the nineteenth century, European scholars who learned Pāṇini’s grammar were deeply impressed by it, and it influenced the beginnings of modern linguistics, as we will see in the study of modern grammar.</p>`,
  src: `General comparison, in paraphrase.` },

/* ---------- Arabic (13) ---------- */

{ id: 'nahw',
  title: 'Naḥw, the way of speech',
  body: `<p>The Arabic name for grammar is <i>naḥw</i>, “way” or “direction,” that is, the way in which speech goes when it is correct Arabic. Arabic grammar arose in the eighth century in Iraq, when the spread of Islam brought many speakers of other languages into the Arabic-speaking world. Errors in the reading of the Qurʾān and in ordinary speech made it necessary to describe correct Arabic and to teach it.</p>
<p>The founding work is the <i>Kitāb</i> (“The Book”) of Sībawayh, a Persian who died about 796, and the later tradition called it simply “the Book.” Sībawayh described the Arabic of the Qurʾān, of the old poets, and of the Bedouin, whose speech was regarded as the standard. So, like the Sanskrit grammar, the Arabic grammar served a sacred text, but its standard was also the living speech of those who spoke Arabic best.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>; general history, in paraphrase.` },

{ id: 'three-parts',
  title: 'Three parts of speech',
  body: `<p>We saw in Section III that Donatus counted eight parts of speech, whereas the logicians spoke of the noun, the verb, and the other words. The Arabic grammarians made their own division. Sībawayh begins his book with the parts of speech, and he counts three: <i>fa-l-kalimu smun wa-fiʿlun wa-ḥarfun jāʾa li-maʿnan laysa bi-smin wa-lā fiʿlin</i>, that is, words are the <strong>noun</strong> (<i>ism</i>), the <strong>verb</strong> (<i>fiʿl</i>), and the <strong>particle</strong> (<i>ḥarf</i>), which comes for a meaning that is neither noun nor verb (<i>al-Kitāb</i>, ch. 1, in substance).</p>
<p>The Arabic noun includes our noun, adjective, and pronoun, and the participle, which in Arabic is formed like a noun. The particle includes our prepositions, conjunctions, and many words that we class as adverbs or interjections. So the Arabic division resembles the logicians’ division into noun, verb, and the rest that we saw in Section III, but it is a grammarian’s division, made for the construction of Arabic, and it has remained the standard of the Arabic tradition.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>, ch. 1, the Arabic in transliteration and the English in substance.`,
  qpTodo: `Sībawayh’s three parts: what are the three parts of speech in Arabic grammar, and to which of them do our adjective, pronoun, preposition, and conjunction belong.` },

{ id: 'root-pattern',
  title: 'Letters, roots, and patterns',
  body: `<p>The word <i>ḥarf</i> means both a particle and a letter of the alphabet, and the context shows which is meant. The Arabic alphabet writes the consonants and the long vowels; the short vowels are marked by small signs above or below the letters, which are usually omitted in ordinary writing. So <i>kataba</i>, “he wrote,” is written with three letters, <i>k-t-b</i>, and its vowels may or may not be marked.</p>
<p>Most Arabic words are formed from a <strong>root</strong> of three consonants, which carries a general meaning, and a <strong>pattern</strong> of vowels and added letters, which gives the particular form. From the root <i>k-t-b</i>, “writing,” come <i>kataba</i> (“he wrote”), <i>kātib</i> (“writer”), <i>kitāb</i> (“book”), and <i>maktab</i> (“office,” “place of writing”). This system resembles the Sanskrit derivation from roots, but the Arabic root is a set of consonants into which vowels are inserted, not a syllable to which affixes are added.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>; standard grammars of Arabic; both in paraphrase.` },

{ id: 'irab',
  title: 'Iʿrāb, the case endings',
  body: `<p>The Arabic noun changes its final vowel according to its use in the sentence, and this change is called <strong>iʿrāb</strong> (“making Arabic,” that is, giving a word its correct Arabic ending). There are three states: <i>rafʿ</i>, with the ending <i>-u</i>, used for the subject and the predicate; <i>naṣb</i>, with the ending <i>-a</i>, used for the object; and <i>jarr</i>, with the ending <i>-i</i>, used after prepositions and for the second noun of a possessive construction. So <i>zaydun</i>, <i>zaydan</i>, and <i>zaydin</i> are three forms of the name Zayd.</p>
<p>Words that do not change their endings are called <i>mabnī</i> (“built,” fixed), and the distinction between words with iʿrāb and fixed words corresponds to our distinction between declinable and indeclinable words. The three states of the Arabic noun resemble the Latin nominative, accusative, and genitive, but there are only three, and their uses are defined by the Arabic theory of government.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>, in paraphrase.`,
  qpTodo: `Iʿrāb: which state (<i>rafʿ</i>, <i>naṣb</i>, <i>jarr</i>) is shown by a given form of a noun (<i>zaydun</i>, <i>zaydan</i>, <i>zaydin</i>), and which Latin case does each resemble.` },

{ id: 'amil',
  title: 'The governor',
  body: `<p>Why does a noun take one ending rather than another? The Arabic grammarians answered that something governs it, an <strong>ʿāmil</strong> (“operator,” “governor”), and the word governed is the <i>maʿmūl</i>. The verb governs its agent in <i>rafʿ</i> and its object in <i>naṣb</i>; a preposition such as <i>fī</i> (“in”) governs its noun in <i>jarr</i>: <i>fī l-bayti</i>, “in the house.”</p>
<p>We studied government in Section V as one of the principal relations of construction. In Arabic grammar, government is the center of the whole syntax: every ending is explained by naming its governor, and where no word can be found to govern, the grammarians posited an abstract governor. So the Arabic theory of the ʿāmil is a fuller development of the idea that Peter Helias and the medieval grammarians called <i>regimen</i>.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>, in paraphrase.` },

{ id: 'verbal-sentence',
  title: 'The verbal sentence',
  body: `<p>The Arabic grammarians distinguished two kinds of sentence by their first word. A <strong>verbal sentence</strong> (<i>jumla fiʿliyya</i>) begins with a verb: <i>kataba zaydun kitāban</i>, “Zayd wrote a book.” The verb <i>kataba</i> governs the agent, <i>zaydun</i>, in <i>rafʿ</i>, and the object, <i>kitāban</i>, in <i>naṣb</i>. The usual order is verb, agent, object, the VSO order that we saw in Section V in the classification of languages.</p>
<p>As in Latin, the endings show the roles, so the order can change: <i>kataba kitāban zaydun</i> still means that Zayd wrote the book. The Arabic names for the three parts, <i>fiʿl</i> (verb), <i>fāʿil</i> (agent), and <i>mafʿūl</i> (object), are all formed from the root <i>f-ʿ-l</i>, “doing,” which the grammarians used as the model root for naming the patterns of words.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>, in paraphrase.`,
  qpTodo: `The verbal sentence: in <i>kataba zaydun kitāban</i>, which word is the verb, the agent, and the object, what governs each ending, and why can the order change.` },

{ id: 'nominal-sentence',
  title: 'The nominal sentence',
  body: `<p>A <strong>nominal sentence</strong> (<i>jumla ismiyya</i>) begins with a noun and may contain no verb at all: <i>zaydun ʿālimun</i>, “Zayd is learned.” The first noun is the <strong>topic</strong> (<i>mubtadaʾ</i>, “that with which one begins”), and the second is the <strong>comment</strong> (<i>khabar</i>, “information”); both are in <i>rafʿ</i>. The grammarians said that the topic is governed by the act of beginning itself, an abstract governor that is not a spoken word.</p>
<p>So in Arabic a sentence can be complete without a verb. We saw in Section V that the modists held a construction to be complete only with a subject and a verb, and that Latin often omits the copula, as in <i>omnia praeclara, rara</i>. The Arabic grammarians did not treat the nominal sentence as an omission; they treated it as a kind of sentence in its own right. This is a real difference in the account of completeness.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>, in paraphrase.`,
  qpTodo: `The nominal sentence: in <i>zaydun ʿālimun</i>, which word is the topic and which the comment, what case are they in, and how does the Arabic account of completeness differ from the modists’.` },

{ id: 'particles-govern',
  title: 'Particles that govern',
  body: `<p>In Arabic some particles govern like verbs. The particle <i>inna</i> (“indeed”) puts the following noun into <i>naṣb</i>: <i>inna zaydan ʿālimun</i>, “Indeed, Zayd is learned.” <i>Inna</i> and the particles that behave like it are called “<i>inna</i> and her sisters.” Other particles govern the imperfect verb, which, unlike the Latin verb, also takes different endings according to what governs it: <i>yaktubu</i> (“he writes”), but <i>lan yaktuba</i> (“he will not write”), and <i>lam yaktub</i> (“he did not write”).</p>
<p>So in Arabic grammar the list of governors is long and varied, and it includes particles that Latin grammar would class as adverbs or conjunctions. The theory of the ʿāmil explains each of these endings in the same way, by naming the word that governs it.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>, in paraphrase.` },

{ id: 'idafa',
  title: 'The article and annexation',
  body: `<p>Arabic has a definite article, <i>al-</i>, which the grammarians classed as a particle: <i>rajulun</i> (“a man”), <i>al-rajulu</i> (“the man”). We saw in Section III that the Latin grammarians removed the article from the Greek list of eight parts because Latin has none; the Arabic grammarians had to give it a place, and they placed it among the particles.</p>
<p>Arabic expresses possession by <strong>annexation</strong> (<i>iḍāfa</i>): the first noun is “annexed” to the second, which stands in <i>jarr</i>, and the first noun takes no article. So <i>kitābu zaydin</i> means “Zayd’s book,” literally “book of Zayd,” and <i>ʿabdu llāhi</i> means “the servant of God.” This construction resembles the Latin genitive, but it changes the form of the first noun as well as the second.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>, in paraphrase.` },

{ id: 'number-arabic',
  title: 'The dual and the plurals',
  body: `<p>Arabic nouns have three numbers: singular, <strong>dual</strong> (for two), and plural. The dual has its own endings: <i>rajulun</i>, “a man”; <i>rajulāni</i>, “two men.” We saw in Section III that Greek also has a dual; Latin has none, and so Donatus had no reason to name it, whereas the Arabic grammarians had to describe it.</p>
<p>The Arabic plural is formed in two ways. The <strong>sound plural</strong> adds an ending to the unchanged singular: <i>muʿallimun</i>, “teacher,” <i>muʿallimūna</i>, “teachers.” The <strong>broken plural</strong> changes the vowels and pattern within the root: <i>rajulun</i>, “man,” <i>rijālun</i>, “men”; <i>kitābun</i>, “book,” <i>kutubun</i>, “books.” English has a few plurals of the second kind, such as “man,” “men” and “foot,” “feet,” but in Arabic they are very common, and they show again how much of Arabic grammar is worked out within the root.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>; standard grammars of Arabic; both in paraphrase.` },

{ id: 'zajjaji',
  title: 'Al-Zajjājī on the reasons of grammar',
  body: `<p>A student who has learned a rule of grammar may go on to ask why the rule holds. In the tenth century al-Zajjājī wrote <i>al-Īḍāḥ fī ʿilal al-naḥw</i> (“The Explanation of the Reasons of Grammar”), in which he asked why the rules of grammar are as they are. He distinguished three kinds of reason: <strong>educational</strong> reasons, which simply state the rule for the learner (“<i>zaydun</i> is in <i>rafʿ</i> because it is the agent”); <strong>analogical</strong> reasons, which explain a rule by its likeness to another; and <strong>theoretical</strong> reasons, which ask why the rule itself holds (<i>al-Īḍāḥ</i>).</p>
<p>So the Arabic tradition, like the medieval Latin one, came to ask for the causes of the rules, not only the rules themselves. We saw in Section III that the modists sought the reasons of the parts of speech in the modes of signifying. Al-Zajjājī’s theoretical reasons are the Arabic counterpart of that question, although they were sought in the internal logic of the language rather than in the modes of being.</p>`,
  src: `Al-Zajjājī, <i>al-Īḍāḥ fī ʿilal al-naḥw</i> (trans. Kees Versteegh, 1995, for reference), in paraphrase.` },

{ id: 'lahn',
  title: 'Laḥn, the error of speech',
  body: `<p>An error in Arabic, whether a wrong ending, a wrong government, or a form that correct speech does not have, is called <strong>laḥn</strong>. The word covers what we distinguish as the barbarism and the solecism, because an error in the ending of a word is at the same time an error in its construction. The grammarians were strict about laḥn because the wording of the Qurʾān and of the old poets was the measure of correct Arabic.</p>
<p>So the Arabic grammarians had a body of authors, as the Latin grammarians did: the Qurʾān, the pre-Islamic poets, and the speech of the Bedouin. We saw in the Preliminary section that the Latin criteria of correctness were reason, antiquity, authority, and usage; the Arabic grammarians weighed the same kinds of evidence, under names of their own, such as transmitted usage (<i>samāʿ</i>, “hearing”) and analogy (<i>qiyās</i>).</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>; general history, in paraphrase.` },

{ id: 'arabic-compare',
  title: 'The Arabic art compared with ours',
  body: `<p>Of the traditions we are studying, the Arabic is in some ways the closest to the Greek and Latin art. It names parts of speech, though three instead of eight; it describes case endings and their uses; it has a theory of government and a theory of agreement; and it has a doctrine of the complete sentence and a standard of correctness drawn from authors and usage. Some scholars have argued that early Arabic grammar was influenced by Greek logic or grammar, but the question is disputed, and the Arabic system is in any case original in its form.</p>
<p>It differs in placing government at the center of the syntax, in admitting complete sentences without a verb, and in its system of roots and patterns. Compared with Pāṇini, it begins not from the roles in the action but from the governor of each ending. So each of the three traditions that analyzed an inflected classical language, the Sanskrit, the Arabic, and the Latin, found the same facts on the page but explained them from a different starting point.</p>`,
  src: `General comparison; Versteegh, <i>Greek Elements in Arabic Linguistic Thinking</i> (1977), for the question of influence; both in paraphrase.` },

/* ---------- Hebrew (12) ---------- */

{ id: 'hebrew-beginnings',
  title: 'The beginnings of Hebrew grammar',
  body: `<p>Hebrew is the language of the Bible, and Jewish scholars studied its text with great care from ancient times. But a systematic grammar of Hebrew, with parts of speech, roots, and rules, appeared only in the tenth century, in the Islamic world, among scholars who knew Arabic grammar and applied its methods to Hebrew. So Hebrew grammar developed later than the Greek, Sanskrit, and Arabic traditions, and under the influence of the Arabic one.</p>
<p>The development ran from Saadia Gaon in Babylonia, in the early tenth century, through the scholars of Muslim Spain in the tenth and eleventh centuries, to David Kimḥi in Provence about 1200, whose grammar became the standard for Jewish and Christian students of Hebrew alike. Most of the early works were written in Arabic, the language of learning in the Islamic world, and only later in Hebrew.</p>`,
  src: `General history, in paraphrase.` },

{ id: 'masoretes',
  title: 'The Masoretes',
  body: `<p>A text written only in consonants can be read in more than one way, as the English letters “bt” could stand for “bat,” “bet,” “bit,” or “but.” The Hebrew Bible was written in this way, and so it needed a fixed tradition of how it was to be read. Before the grammarians came the <strong>Masoretes</strong> (from Hebrew <i>masorah</i>, “tradition”), scholars of the seventh to the tenth centuries, chiefly at Tiberias in Galilee, who fixed the text of the Hebrew Bible as it was to be read. The Hebrew alphabet writes only consonants, so the Masoretes added a system of small signs for the vowels (<i>niqqud</i>, “points”) and for the accents (<i>teʿamim</i>), which mark both the stress of each word and the divisions of the verse for chanting.</p>
<p>The Masoretic text, especially as fixed by the family of Ben Asher, became the text that the grammarians took as their standard. So the Masoretes did for Hebrew something like what the Alexandrian scholars did for Greek when they added accents to Homer, as we saw in Section II: they recorded the pronunciation of a sacred text so that it could be read correctly, and their marks made the grammar of the vowels possible.</p>`,
  src: `General history of the Masorah, in paraphrase.` },

{ id: 'saadia',
  title: 'Saadia Gaon',
  body: `<p>We have seen that Hebrew grammar began among scholars who knew Arabic grammar. The first of them was Saadia ben Joseph (882–942), head of the academy of Sura in Babylonia and known by the title Gaon, wrote the first works of Hebrew grammar and lexicography. His <i>Agron</i>, composed in his youth, is a list of Hebrew words arranged by their first and last letters, intended to help poets find rhymes; his <i>Book of the Elegance of the Language of the Hebrews</i>, written in Arabic, treated the grammar of Hebrew, though only parts of it survive.</p>
<p>Saadia applied to Hebrew the categories of Arabic grammar, including the three parts of speech, and he compared Hebrew words with Aramaic and Arabic ones. So the first Hebrew grammarian was also, in a sense, the first comparative grammarian of the Semitic languages, since he saw that Hebrew, Aramaic, and Arabic share many roots and forms.</p>`,
  src: `Saadia Gaon, <i>Agron</i> and <i>Kutub al-lugha</i> (fragments), in paraphrase; general history.` },

{ id: 'hebrew-parts',
  title: 'Three parts of speech in Hebrew',
  body: `<p>The Hebrew grammarians took over the Arabic division of words into three parts: the <strong>noun</strong> (<i>shem</i>, “name”), the <strong>verb</strong> (<i>poʿal</i>, “action”), and the <strong>particle</strong> (<i>millah</i>, “word,” or particle). Kimḥi’s grammar, like the Arabic ones, is arranged by these three parts, with the verb treated first and at greatest length.</p>
<p>So the Hebrew tradition counts three parts, as the Arabic does, not eight, as the Latin does. The choice follows the model of Arabic grammar, but it also fits the Hebrew language, in which the adjective is formed and inflected like a noun and the prepositions are often joined to the following word as prefixes, as in <i>ba-bayit</i>, “in the house.”</p>`,
  src: `David Kimḥi, <i>Mikhlol</i> (William Chomsky, 1952, for reference), in paraphrase.`,
  qpTodo: `The three Hebrew parts: what are the three parts of speech in Hebrew grammar, from which tradition did the Hebrew grammarians take them, and how do they differ from Donatus’s eight.` },

{ id: 'roots-dispute',
  title: 'The dispute over the root',
  body: `<p>Some forms of a Hebrew verb show all the letters of its root, and some show only one or two. So the Hebrew grammarians had to decide how many letters a root has. This question occupied the Hebrew grammarians of tenth-century Spain. Menahem ben Saruq, in his dictionary, the <i>Maḥberet</i>, held that many Hebrew roots consist of one or two letters, because in many forms of the verb only one or two letters of the root appear. His opponent, Dunash ben Labrat, criticized many of Menahem’s analyses, and the dispute was carried on by their students.</p>
<p>The dispute was settled by Judah Ḥayyūj, who showed that Hebrew roots, like Arabic roots, consist regularly of three consonants, and that the letters which seem to disappear in some forms are “weak” letters (such as <i>w</i>, <i>y</i>, and <i>n</i>) that drop out or change by rule. So the root <i>n-p-l</i>, “fall,” appears as <i>yippol</i>, “he will fall,” where the <i>n</i> has disappeared, but the root is still three letters.</p>`,
  src: `Menahem ben Saruq, <i>Maḥberet</i>; Dunash ben Labrat, <i>Teshuvot</i>; Judah Ḥayyūj; all in paraphrase.`,
  qpTodo: `The root: what was the dispute between Menahem and Dunash, how did Ḥayyūj settle it, and what is a “weak” letter.` },

{ id: 'hayyuj',
  title: 'Judah Ḥayyūj',
  body: `<p>We have seen that the dispute over the root was settled by Judah ben David Ḥayyūj (about 945 to about 1000), who lived in Córdoba. He wrote two treatises in Arabic on the Hebrew verbs whose roots contain weak letters and on the verbs whose second and third letters are the same. In them he established the principle that every Hebrew verb has a root of three consonants, and he explained the apparently irregular forms by rules of how the weak letters behave.</p>
<p>Ḥayyūj’s principle made a systematic grammar of the Hebrew verb possible, because it allowed every form to be traced to a regular root. It is the Hebrew counterpart of the Arabic doctrine of the root that we saw in Sībawayh, and of the Sanskrit derivation from roots, although in Hebrew, as in Arabic, the root is a set of consonants into which vowels are inserted. Ḥayyūj’s works have no complete published English translation, and they are known chiefly through later grammarians.</p>`,
  src: `Judah Ḥayyūj, treatises on the weak and doubled verbs (no published English translation), in paraphrase.` },

{ id: 'ibn-janah',
  title: 'Jonah ibn Janāḥ',
  body: `<p>A student of Latin uses a grammar and a dictionary side by side, and the Hebrew grammarians produced both. Jonah ibn Janāḥ (about 990 to about 1050), a physician of Córdoba and Saragossa, built on Ḥayyūj’s work the most complete Hebrew grammar of the Middle Ages, written in Arabic. It has two parts: a grammar, called in Hebrew <i>Sefer ha-Riqmah</i> (“The Book of Variegation”), and a dictionary of roots, <i>Sefer ha-Shorashim</i> (“The Book of Roots”). He drew freely on Arabic grammar and compared Hebrew with Arabic throughout.</p>
<p>Ibn Janāḥ also treated the syntax of Hebrew and the figures of the biblical text, such as ellipsis and the use of one form for another, which the Latin grammarians called figures of construction. So his work covers much of the ground that Donatus and Priscian covered for Latin, and it shows how much the Hebrew grammarians learned from Arabic grammar while describing a different language.</p>`,
  src: `Jonah ibn Janāḥ, <i>Kitāb al-Lumaʿ</i> (<i>Sefer ha-Riqmah</i>) and <i>Kitāb al-Uṣūl</i> (<i>Sefer ha-Shorashim</i>), no complete published English translation; in paraphrase.` },

{ id: 'binyanim',
  title: 'The patterns of the verb',
  body: `<p>The Hebrew verb is formed from its root in several patterns, which modern grammars call <strong>binyanim</strong> (“buildings”), each with its own meaning. From the root <i>sh-b-r</i>, “break,” come <i>shavar</i> (“he broke”), <i>nishbar</i> (“it was broken”), <i>shibber</i> (“he shattered”), and <i>hishbir</i> (“he caused to break”). The patterns express voice and kinds of action: active and passive, intensive, causative, and reflexive.</p>
<p>The Hebrew grammarians, following the Arabic practice of naming patterns by the model root <i>f-ʿ-l</i>, named the Hebrew patterns by the root <i>p-ʿ-l</i>, “do”: <i>paʿal</i> (also called <i>qal</i>, “light”), <i>nifʿal</i>, <i>piʿel</i>, <i>hifʿil</i>, and the rest. We saw in Section III that Donatus counted five voices of the Latin verb; the Hebrew patterns do the work of voice and of some of Donatus’s forms, such as the frequentative, within a single system.</p>`,
  src: `David Kimḥi, <i>Mikhlol</i>; standard grammars of Biblical Hebrew; both in paraphrase.`,
  qpTodo: `The patterns of the verb: what does each pattern add to the root <i>sh-b-r</i> (<i>shavar</i>, <i>nishbar</i>, <i>hishbir</i>), and how are the patterns named.` },

{ id: 'construct',
  title: 'The article and the construct state',
  body: `<p>Hebrew has a definite article, <i>ha-</i>, joined to the front of the noun: <i>melekh</i> (“a king”), <i>ha-melekh</i> (“the king”). Like Arabic, it expresses possession by joining two nouns, the first in a shortened form called the <strong>construct state</strong> (<i>semikhut</i>, “leaning”): <i>bayit</i> (“house”), but <i>beit ha-melekh</i> (“the house of the king”). The first noun loses its article and often changes its vowels, and the second noun carries the article for the whole phrase.</p>
<p>Hebrew nouns have no case endings, so the construct state does the work that the Latin genitive does by an ending. We saw that Arabic marks annexation by changing both nouns; Hebrew marks it by changing only the first. So the three Semitic traditions, Arabic, Hebrew, and Aramaic, share a construction that the Latin grammarians had no name for, and the Hebrew grammarians described it in terms taken from Arabic.</p>`,
  src: `Standard grammars of Biblical Hebrew, in paraphrase.`,
  qpTodo: `The construct state: in <i>beit ha-melekh</i>, which noun is in the construct state, which carries the article, and how does Latin express the same relation.` },

{ id: 'kimhi',
  title: 'David Kimḥi',
  body: `<p>We have seen that most of the early Hebrew grammars were written in Arabic. David Kimḥi (about 1160 to about 1235), of Narbonne in Provence, known by the acronym Radak, wrote in Hebrew instead, for Jewish readers in Christian Europe who did not know Arabic. His <i>Mikhlol</i> (“Compendium”) has two parts, a grammar and a dictionary of roots, the <i>Sefer ha-Shorashim</i>, following the plan of Ibn Janāḥ. He also wrote commentaries on the Bible that apply his grammar to the explanation of the text.</p>
<p>Kimḥi’s grammar was clear, complete, and written in Hebrew, and it became the standard grammar of Hebrew for three centuries. The grammar part of the <i>Mikhlol</i> was translated into English in 1952, and it is still the usual way into Kimḥi’s grammar for English readers. The Hebrew scholar William Chomsky, who wrote on Kimḥi’s grammar, was the father of the linguist Noam Chomsky, whose universal grammar we saw in Section VIII and whose early work included a study of the morphophonemics of Modern Hebrew.</p>`,
  src: `David Kimḥi, <i>Mikhlol</i> (trans. William Chomsky, <i>David Kimhi’s Hebrew Grammar</i>, 1952; the translator was the father of Noam Chomsky), in paraphrase.` },

{ id: 'hebraists',
  title: 'Hebrew grammar in Christian Europe',
  body: `<p>In the Renaissance, Christian scholars began to study Hebrew in order to read the Old Testament in its original language. The German humanist Johannes Reuchlin published <i>De rudimentis Hebraicis</i> (1506), a grammar and dictionary of Hebrew for Christian readers, drawing on Kimḥi. Through such works the Hebrew grammar of the medieval Jewish scholars, itself shaped by Arabic grammar, entered the European tradition.</p>
<p>So the European study of Hebrew brought into the Latin schools a grammar organized by roots and patterns and by three parts of speech, quite different from Donatus’s. The Protestant and Catholic translators of the Bible in the sixteenth and seventeenth centuries learned their Hebrew from grammars in this tradition. David Daiches, in his study of the sources of the King James Version, argued that its translators often followed Kimḥi’s interpretations of the Hebrew, which reached them both directly and through the Latin versions of the Christian Hebraists.</p>`,
  src: `Reuchlin, <i>De rudimentis Hebraicis</i> (1506), in paraphrase; David Daiches, <i>The King James Version of the English Bible</i> (1941), in paraphrase.` },

{ id: 'hebrew-compare',
  title: 'The Hebrew art compared with ours',
  body: `<p>The Hebrew tradition differs from the others in that it was formed largely by applying another tradition’s methods, those of Arabic grammar, to a related language. Its achievements were the doctrine of the three-letter root, established by Ḥayyūj, the systematic description of the verb by its patterns, and the dictionaries of roots that made the Hebrew Bible accessible to readers who did not speak Hebrew.</p>
<p>Compared with the Latin art, the Hebrew grammar starts from the root rather than the word, counts three parts of speech rather than eight, and describes possession by the construct state rather than by a case. Like the Latin art, however, it served the reading of a classical text, and its precepts were drawn from that text and tested against it, as we saw in the Preliminary section that the precepts of Latin grammar were drawn from the authors.</p>`,
  src: `General comparison, in paraphrase.` },

/* ---------- Chinese (12) ---------- */

{ id: 'xiaoxue',
  title: 'Xiaoxue, the lesser learning',
  body: `<p>The Chinese tradition called the study of language <i>xiǎoxué</i> (小學, “the lesser learning”), meaning the studies that must come before the reading of the classics. It had three branches: the study of the written character, the study of its sound, and the study of its meaning in the old texts. There was no list of parts of speech and no account of case or conjugation, because classical Chinese has no inflection: its words do not change their form.</p>
<p>So the Chinese tradition differs most from ours. Our art begins with the voice and the letter, studies the parts of speech and their accidents, and ends with the construction of the sentence. The Chinese art begins with the written character, which is often a whole word, and studies its form, its sound, and its meaning. Its aim, like ours, was to make the classical texts readable, but the language required a different art.</p>`,
  src: `General history, in paraphrase.` },

{ id: 'shuowen',
  title: 'The character and the Shuowen jiezi',
  body: `<p>The basic unit of written Chinese is the <strong>character</strong>, a written sign that usually stands for a single syllable and a single word or meaningful part of a word: 日 (<i>rì</i>), “sun, day”; 木 (<i>mù</i>), “tree, wood”; 人 (<i>rén</i>), “person.” So the Chinese “letter” already has a meaning, as many of the Sumerian signs did, and meaning can begin at a single written sign.</p>
<p>About AD 100 Xu Shen compiled the <i>Shuowen jiezi</i> (說文解字, “Explaining Simple Graphs and Analyzing Compound Characters”), which explains about nine thousand characters. He arranged them under 540 components, called radicals, according to the part of each character that indicates its meaning, so that the order of the dictionary is itself an analysis of the characters. The <i>Shuowen</i> remained the foundation of the study of the character for the rest of Chinese history.</p>`,
  src: `Xu Shen, <i>Shuowen jiezi</i>, in paraphrase.` },

{ id: 'six-writings',
  title: 'The six kinds of character',
  body: `<p>Some Chinese characters are pictures of what they signify, but most are not, and the Chinese scholars asked how the others were made. In the postface to his dictionary, Xu Shen describes six ways in which characters are formed, called the <strong>six writings</strong> (六書, <i>liùshū</i>):<br><strong>pictographs</strong> (象形 <i>xiàngxíng</i>), which picture a thing: 日 “sun,” 木 “tree”;<br><strong>simple indicatives</strong> (指事 <i>zhǐshì</i>), which point to an idea by a mark: 上 “above,” 下 “below”;<br><strong>compound ideographs</strong> (會意 <i>huìyì</i>), which join two characters to make a meaning: 人 “person” and 言 “speech” make 信 “trust”;<br><strong>phono-semantic compounds</strong> (形聲 <i>xíngshēng</i>), which join a part for the meaning with a part for the sound: 江 <i>jiāng</i>, “river,” with “water” for the meaning and 工 <i>gōng</i> for the sound;<br><strong>derivative cognates</strong> (轉注 <i>zhuǎnzhù</i>), a class whose meaning is disputed;<br>and <strong>phonetic loans</strong> (假借 <i>jiǎjiè</i>), characters borrowed for another word of similar sound.</p>
<p>Most Chinese characters are phono-semantic compounds. So the six writings are the Chinese tradition’s account of the parts of the written word, as our figure and species are an account of how words are made.</p>`,
  src: `Xu Shen, <i>Shuowen jiezi</i>, postface, in paraphrase.`,
  qpTodo: `The six writings: which kind of character is a given example (日 a pictograph, 上 an indicator, 信 a compound indicator, 江 a form-and-sound character), and what does each part contribute.` },

{ id: 'imposition-graphs',
  title: 'The character and imposition',
  body: `<p>A pictograph such as 日 may seem to signify by nature, because it looks like the sun. But the character signifies the word “sun,” not only the shape, and the word itself was imposed by the speakers of the language. The loan characters show this most clearly: a character made for one word is borrowed for another word that sounds alike, so that it signifies by convention alone.</p>
<p>We saw in Section I that words signify by imposition, and that writing is a sign of speech. The Chinese tradition, by recognizing the loan and the form-and-sound characters, recognized that the character signifies the spoken word and not only the thing pictured. So the Chinese account of writing agrees with Aristotle’s, that written marks are signs of spoken words, though it gives the written sign a much larger place in the study of language.</p>`,
  src: `Xu Shen, <i>Shuowen jiezi</i>, postface; Aristotle, <i>De interpretatione</i> 1; both in paraphrase.` },

{ id: 'erya',
  title: 'The Erya and the glossing of the classics',
  body: `<p>The oldest Chinese work on words is the <i>Erya</i> (爾雅, “Approaching What Is Correct”), compiled perhaps in the third century BC, which explains old words by more familiar ones, arranged in groups by meaning: words for relatives, for buildings, for plants, for animals. This practice of explaining the words of an old text by those of the present was called <i>xùngǔ</i> (訓詁, “glossing”).</p>
<p>Glossing was the Chinese counterpart of what we called explaining (<i>ēnarrātiō</i>), the second task of the grammarian. The classics, such as the <i>Book of Odes</i> and the <i>Analects</i> of Confucius, were the texts on which it was exercised, as the poets were for the Greek and Latin grammarians. So the Chinese tradition, like ours, joined the study of the language to the reading of a body of authors.</p>`,
  src: `The <i>Erya</i>, in paraphrase; general history.` },

{ id: 'qieyun',
  title: 'The sound of the character',
  body: `<p>Because the character does not show its sound fully, the Chinese scholars needed a way to record the pronunciation. They developed the method called <strong>fǎnqiè</strong> (反切), which spells the sound of a syllable by two other characters: the first gives the initial consonant, and the second gives the rest of the syllable, its vowel, its ending, and its tone. So the syllable <i>dōng</i> could be spelled by <i>dé</i> (for the initial <i>d</i>) and <i>hóng</i> (for the rest, <i>-ōng</i>).</p>
<p>In 601 Lu Fayan and his collaborators completed the <i>Qieyun</i> (切韻, “Divided Rhymes”), a dictionary that arranged characters by their tone and rhyme and gave their sounds by fǎnqiè. Its successors became the standard references for pronunciation and for the rhymes of poetry. We saw in Section II that the Latin syllable is divided by its vowel and consonants; fǎnqiè divides the Chinese syllable into initial and remainder, a division suited to a language of single-syllable words with tones.</p>`,
  src: `Lu Fayan, <i>Qieyun</i> (601), in paraphrase.`,
  qpTodo: `Fǎnqiè: how does fǎnqiè spell the sound of a syllable by two characters, and how does it divide the syllable compared with the Latin division into letters.` },

{ id: 'tones',
  title: 'Tone',
  body: `<p>Chinese is a <strong>tonal</strong> language: the pitch of the voice on a syllable distinguishes words that are otherwise alike. In modern Mandarin, <i>mā</i> (with a high level tone) means “mother,” <i>má</i> (rising) “hemp,” <i>mǎ</i> (falling and rising) “horse,” and <i>mà</i> (falling) “scold.” The rhyme dictionaries classified every character by its tone, and the tones governed the rules of classical poetry.</p>
<p>We saw in Section II that the Greek accent was a matter of pitch, and that it could distinguish words. In Chinese, pitch distinguishes far more words, because every syllable has a tone and many words are a single syllable. So the Chinese study of sound gave tone the central place that the Latin study of sound gave to quantity.</p>`,
  src: `Lu Fayan, <i>Qieyun</i>; standard descriptions of Mandarin; both in paraphrase.` },

{ id: 'full-empty',
  title: 'Full words and empty words',
  body: `<p>The nearest the traditional Chinese scholars came to parts of speech was the distinction, made from about the twelfth century, between <strong>full words</strong> (實字, <i>shízì</i>), which name a thing or an action, such as 人 (“person”) and 來 (“come”), and <strong>empty words</strong> (虛字, <i>xūzì</i>), which do not name but have a function in the sentence, such as 之 (<i>zhī</i>), 乎 (<i>hū</i>), 者 (<i>zhě</i>), 也 (<i>yě</i>), and 而 (<i>ér</i>).</p>
<p>The distinction resembles the medieval division between categorematic and syncategorematic words that we saw in Section I, more than Donatus’s eight parts. The empty words do the work that Latin does by endings and by many of its conjunctions and particles: they mark the relations between the full words, ask a question, or close a sentence. Treatises devoted to the empty words were among the most important works of Chinese grammatical study.</p>`,
  src: `General history of Chinese grammatical study, in paraphrase.`,
  qpTodo: `Full and empty words: is a given character full or empty (人, 來, 之, 也, 而), and which medieval distinction does the division resemble.` },

{ id: 'analects',
  title: 'Empty words in a line of the Analects',
  body: `<p>The first line of the <i>Analects</i> of Confucius shows the empty words at work: 學而時習之，不亦說乎 (<i>xué ér shí xí zhī, bù yì yuè hū</i>), which is translated “Is it not pleasant to learn with a constant perseverance and application?” (<i>Analects</i> I.1). In it 學 (“learn”) and 習 (“practice”) are full words; 而 (“and,” “then”) joins them; 之 (“it”) refers to what is learned; and 乎 at the end makes the sentence a question.</p>
<p>So the construction of the line is shown by the order of the characters and by the empty words, not by endings. Our art would call 之 a pronoun and 而 a conjunction, but the Chinese tradition called both empty words, and explained each by its use in the line. The commentators glossed such words in their place, as Servius glossed Virgil.</p>`,
  src: `Confucius, <i>Analects</i> I.1 (trans. James Legge; the wording checked against Legge’s text as reprinted by Standard Ebooks and Project Gutenberg).` },

{ id: 'order-chinese',
  title: 'Order without inflection',
  body: `<p>Because classical Chinese has no inflection, its construction is shown almost entirely by the order of the words and by the empty words. In 王命之 (<i>wáng mìng zhī</i>), “The king ordered it,” 王 (“king”) stands first as the one who acts, 命 (“order”) second as the action, and 之 (“it”) last as the thing ordered. Time is shown, when it is shown, by a word of time, as 昨日 (“yesterday”), not by a form of the verb.</p>
<p>We saw in Section V that English, which has lost most of its endings, relies on order to show its construction, and that languages can be classed by their usual order. Chinese is the extreme case: the relations that Latin shows by case and conjugation are shown by the place of each word. The traditional Chinese marks of punctuation, 句 (<i>jù</i>, a completed stretch) and 讀 (<i>dòu</i>, a pause), which readers added to the classics, divided the text into its units, as the ancient marks of pause did in Latin.</p>`,
  src: `General description of classical Chinese, in paraphrase.`,
  qpTodo: `Order without inflection: how does 王命之 show which word acts and which is acted upon, and how does this compare with Latin and with English.` },

{ id: 'mashi',
  title: 'Ma Jianzhong and the Latin model',
  body: `<p>We have seen that the traditional Chinese scholars made no list of parts of speech. The first to make one was a scholar trained in European grammar. In 1898 Ma Jianzhong, a Chinese scholar who had studied Latin and French in Europe, published the <i>Mashi wentong</i> (馬氏文通, “Mr. Ma’s Grammar”), the first systematic grammar of classical Chinese on the European model. He divided Chinese words into parts of speech, nine in all, and described subjects, objects, and kinds of sentence, using the categories of Latin grammar adapted to Chinese.</p>
<p>Ma’s grammar was the beginning of modern Chinese grammatical study, but it also raised the question that runs through this section: is it right to describe a language in categories made for another? Later Chinese grammarians criticized Ma for imposing Latin categories on Chinese, and they sought categories drawn from Chinese itself. The question whether the parts of speech and the relations of construction are the same in all languages is the question that the study of modern grammar takes up.</p>`,
  src: `Ma Jianzhong, <i>Mashi wentong</i> (1898), in paraphrase.` },

{ id: 'traditions-compare',
  title: 'The five traditions together',
  body: `<p>We have now seen five classical traditions besides the Greek and Latin one. Each arose to keep and understand a classical language and its texts: Sumerian for the Babylonian scribes, the Veda for the Indian grammarians, the Qurʾān for the Arabic, the Bible for the Hebrew, and the classics for the Chinese. Each began from what was most evident in its language and writing: the bilingual match, the root and affix, the governor of the ending, the three-letter root, and the written character.</p>
<p>The traditions agree in some things. All distinguish words that name things from words that relate them; most distinguish the noun from the verb, and several connect the verb with becoming or action. They differ in the number of the parts of speech, in where they place meaning, and in how they explain construction. Whether these agreements show a grammar common to all languages, and whether the differences are only of accidents, as Roger Bacon held, is a question for the study of modern grammar.</p>`,
  src: `General comparison.` }

  ]
};
