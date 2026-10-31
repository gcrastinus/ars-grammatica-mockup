/* XI.2 Sanskrit Grammar [xi.sanskrit]
   31 Oct 2026: one of the five decks made from xi.traditions (now retired), as approved by Timothy (traditions-plan/XI-SPLIT-DRAFTS-1.md).
   13 panels, 4 question points (q-sandhi, q-yaska, q-karaka, q-patanjali), 48 Full points, numbered from R1.
   No Quick lines yet (the Editor writes them). No exercise.
   Built by traditions-plan/build/build-split.js. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['xi.sanskrit'] = {
  id: 'xi.sanskrit',
  title: 'Sanskrit Grammar',
  sub: 'The Indian art of analysis, from Pāṇini to Bhartṛhari',
  sources: `Yāska, <i>Nirukta</i>; Pāṇini, <i>Aṣṭādhyāyī</i>; Patañjali, <i>Mahābhāṣya</i>; Bhartṛhari, <i>Vākyapadīya</i>.`,
  recitation: [
    `A text that must be recited word for word for many centuries requires a careful study of its words.`,
    `The Indian name for that study is <i>vyākaraṇa</i>, “analysis” or “separation,” that is, the separating of speech into its parts.`,
    `It was counted among the six auxiliary sciences of the Veda, because the exact wording of the Veda had to be preserved and understood, and that required the ability to take a word apart and put it together again.`,
    `The central work of the tradition is Pāṇini’s <i>Aṣṭādhyāyī</i> (“The Eight Chapters”), composed perhaps in the fourth century BC; before it stands Yāska’s <i>Nirukta</i>, and after it come Patañjali’s Great Commentary and Bhartṛhari’s <i>Vākyapadīya</i>.`,
    `So the Indian tradition is older than the Greek grammar of Dionysius Thrax and developed independently of it, and its central work has a form unlike any Greek or Latin grammar.`,
    `Donatus teaches grammar by questions and answers, defining each part of speech and naming its accidents, but Pāṇini’s grammar does not explain.`,
    `It consists of nearly four thousand rules called <strong>sūtras</strong> (“threads”), each stated in as few syllables as possible, with technical abbreviations of Pāṇini’s own invention.`,
    `The rules are ordered so that a later rule can rely on an earlier one, and together they generate the correct forms of Sanskrit from roots and affixes.`,
    `So the Indian grammar is learned by learning the rules in their order, with the commentaries that explain them; Patañjali’s Great Commentary discusses why each rule is needed and what would go wrong without it.`,
    `This is a different form of art from Donatus’s: it aims at a complete and economical set of rules from which every correct form can be derived.`,
    `The Indian tradition gave close attention to the sounds of speech, which it studied in a separate science (<i>śikṣā</i>, “instruction”) as well as in grammar.`,
    `The sounds were classified by the place in the mouth where they are made and by the manner of making them, and the Devanagari alphabet is arranged in that order, the vowels first and then the consonants by their place, from the throat to the lips.`,
    `Pāṇini’s grammar begins with fourteen short lists of the sounds, arranged so that any group of sounds can be named by its first sound and a marker, so the order of the alphabet is itself part of the grammar.`,
    `The Indian classification of sounds is more exact than the Latin division into vowels, semivowels, and mutes, because it describes how each sound is made.`,
    `When two sounds meet in Sanskrit, at the end of one word and the beginning of the next or within a word, they often change; this change is called <strong>sandhi</strong> (“putting together”), and its rules are part of the grammar.`,
    `A change in a single word is a barbarism in Latin prose and a metaplasm in verse, but in Sanskrit the changes of sandhi are required in correct speech, and omitting them would be an error.`,
    `English has a few such changes (“an apple” but “a pear”), and Latin elision in verse is a kind of sandhi, but no other classical tradition made the joining of sounds so large a part of the grammar.`,
    `The Indian tradition divided words into kinds and gave a reason for its first division.`,
    `Yāska divides words into four kinds: the name (<i>nāman</i>), the verb (<i>ākhyāta</i>), the preverb (<i>upasarga</i>), which is placed before a verb and changes its sense, and the particle (<i>nipāta</i>).`,
    `Yāska says that the verb has becoming as its principal meaning, and that names have a being, a thing, as theirs.`,
    `This account comes strikingly close to the modists’ distinction between the mode of becoming and the mode of a stable thing, although the two traditions had no contact.`,
    `But Yāska counts four kinds, not eight: the adjective belongs with the name, and there is no participle or interjection as a separate kind.`,
    `Sanskrit, like Latin, has stems that cannot stand in a sentence until they receive an ending.`,
    `Pāṇini defines a word in use (<i>pada</i>) by its ending: a word is that which ends in a nominal or a verbal ending, so a stem without its ending is not yet a word of the sentence.`,
    `Priscian defines the word as the least part of a constructed sentence; both relate the word to the sentence, but Pāṇini makes the ending the mark of a word, so that a stem belongs to a level below the word.`,
    `The difference reflects the languages: in Sanskrit, as in Latin, nouns and verbs almost never appear without an ending, whereas in English many words do.`,
    `The Indian grammar derives almost every form from a root (<i>dhātu</i>) and one or more affixes (<i>pratyaya</i>); the roots are listed in a separate catalogue with their meanings.`,
    `A verb of the sentence is made by adding affixes to the root, so the Indian grammarian does not parse a finished form, as we do when we name its accidents, but builds the form from its root.`,
    `Pāṇini made derivation the method of the whole grammar, so that nouns, verbs, and even many particles are derived from roots by rules.`,
    `The center of Pāṇini’s syntax is the doctrine of the <strong>kārakas</strong> (“factors” of an action); a kāraka is a role that a thing plays in the action signified by the verb.`,
    `Pāṇini names six: the agent (<i>kartṛ</i>), the independent doer; the object (<i>karman</i>), what the agent most wishes to reach; the instrument (<i>karaṇa</i>), the most effective means; the recipient (<i>sampradāna</i>), the one to whom something is given; the source (<i>apādāna</i>), the fixed point from which something departs; and the locus (<i>adhikaraṇa</i>), the place or time in which the action occurs.`,
    `The kārakas are relations in the action, not names of endings: the endings of the noun mark them, but not one for one, since the same role may be marked by different endings in different constructions, as the agent is in an active and a passive sentence.`,
    `So the kārakas resemble the uses of the Latin cases, but they belong to the action and are prior to the endings that express them.`,
    `In a simple Sanskrit sentence the agent is marked by the first ending, which corresponds to our nominative, and the object by the second, which corresponds to our accusative.`,
    `Because the endings mark the roles, Sanskrit, like Latin, can change the order of the words without changing the sense.`,
    `The Indian explanation of this freedom is the marking of the kārakas by endings; ours is the marking of construction by cases; the two describe the same fact from different starting points, the Indian from the action and its factors, ours from the noun and its accidents.`,
    `The Indian grammar counts seven sets of nominal endings, called <i>vibhakti</i> (“division”), with the vocative as a use of the first; they correspond roughly to the Latin cases with two more, the instrumental and the locative.`,
    `The endings also mark relations that are not kārakas, such as possession, so the endings and the kārakas form two systems, and a Latin table of cases imposed on Sanskrit would misrepresent both.`,
    `Sanskrit also forms compounds (<i>samāsa</i>) very freely, expressing within the compound a relation that Latin expresses by the genitive, so that much of its construction takes place within single words.`,
    `Patañjali opens his Great Commentary by asking what grammar is for, and he gives five chief purposes: the preservation of the Veda; the adapting of its formulas to new occasions; the command of scripture; brevity, since rules teach more quickly than lists of words; and the removal of doubt about the correct form.`,
    `These purposes resemble those of the Greek and Latin art, to speak correctly and to explain the authors, but Patañjali’s first purpose is the preservation of a sacred text.`,
    `His fourth purpose, brevity, explains the form of Pāṇini’s grammar: a short set of rules that generates every correct form is easier to learn than a list of all the forms.`,
    `Bhartṛhari argued that the true unit of meaning is the sentence (<i>vākya</i>), and that its meaning is grasped as a whole, in a single act of understanding, not by adding the meanings of the words one after another.`,
    `He called the meaning-bearing unit that the hearer grasps the <i>sphoṭa</i>, distinct from the sequence of sounds that reveal it.`,
    `So the Indian tradition, which built its grammar from roots and affixes, ended in a philosophy that put the sentence first, sharing with the modists the conviction that understanding a sentence is more than adding its words.`,
    `The Sanskrit grammar shares much with the Greek and Latin art: both serve a classical language and its texts; both distinguish noun and verb and connect the verb with becoming; and both describe the endings that mark the construction of the noun.`,
    `But the Sanskrit art differs in method and center: it is a system of rules that generates forms from roots, not a set of definitions; its syntax is centered on the kārakas, not on the cases; and it gives the sounds and their combinations a much larger place.`,
    `Unlike the scribal lists, the Sanskrit grammar explains Sanskrit from itself, and in the nineteenth century it influenced the beginnings of modern linguistics.`
  ],
  panels: [

{ id: 'vyakarana',
  title: 'Vyākaraṇa, the analysis of speech',
  body: `<p>A text that must be recited word for word, without the change of a single sound, for many centuries requires a careful study of its words. The Indian name for that study is <i>vyākaraṇa</i>, “analysis” or “separation,” that is, the separating of speech into its parts. It was counted among the six auxiliary sciences of the Veda, the sacred texts of Hinduism, because the exact wording of the Veda had to be preserved and understood, and that required the ability to take a word apart and put it together again.</p>
<p>The central work of the tradition is Pāṇini’s <i>Aṣṭādhyāyī</i> (“The Eight Chapters”), composed perhaps in the fourth century BC. Before it stands Yāska’s <i>Nirukta</i>, a work on the explanation of difficult Vedic words; after it come Patañjali’s <i>Mahābhāṣya</i> (“The Great Commentary”), of about the second century BC, and Bhartṛhari’s <i>Vākyapadīya</i>, a philosophy of language of about the fifth century AD. So the Indian tradition is older than the Greek grammar of Dionysius Thrax and developed independently of it, and its central work has a form unlike any Greek or Latin grammar.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i>; Yāska, <i>Nirukta</i>; Patañjali, <i>Mahābhāṣya</i>; Bhartṛhari, <i>Vākyapadīya</i>; general history, in paraphrase.` },

{ id: 'sutra',
  title: 'The sūtra',
  body: `<p>Donatus, as we saw in Section III, teaches grammar by questions and answers, defining each part of speech and naming its accidents. The Sanskrit grammar takes a different form. Pāṇini’s grammar does not explain; it consists of nearly four thousand rules called <strong>sūtras</strong> (“threads”), each stated in as few syllables as possible, with technical abbreviations of Pāṇini’s own invention. The rules are ordered so that a later rule can rely on an earlier one, and together they generate the correct forms of Sanskrit from roots and affixes.</p>
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
  qp: {
    "id": "q-sandhi",
    "variants": [
      {
        "prompt": "Sanskrit <i>na</i> (“not”) and <i>asti</i> (“is”) are joined as <i>nāsti</i>, “is not.” What has happened?",
        "options": [
          "A letter has been added to the second word",
          "The first word has been dropped altogether",
          "The words have been joined by a conjunction",
          "Two vowels have merged into one long vowel"
        ],
        "answer": 3,
        "explain": "The final <i>a</i> of <i>na</i> and the initial <i>a</i> of <i>asti</i> meet and become one long <i>ā</i>. This change at the meeting of sounds is sandhi."
      },
      {
        "prompt": "In Latin a change in the sounds of a single word is a barbarism in prose and a metaplasm in verse. How does sandhi differ?",
        "options": [
          "It is permitted only in verse, never in prose",
          "It is an error in prose as well as in verse",
          "In Sanskrit it is required in correct speech",
          "It occurs only within a word, never between words"
        ],
        "answer": 2,
        "explain": "The changes of sandhi are part of correct Sanskrit, and omitting them would be an error; in Latin the corresponding changes are an error in prose and a permitted license in verse."
      },
      {
        "prompt": "Which English change is a kind of sandhi?",
        "options": [
          "“child” but “children”",
          "“an apple” but “a pear”",
          "“go” but “went” or “gone”",
          "“foot” but “feet”"
        ],
        "answer": 1,
        "explain": "The article takes the form “an” before a vowel and “a” before a consonant, so its form changes where two sounds meet. The other pairs are changes of inflection within a word."
      }
    ]
  } },

{ id: 'yaska',
  title: 'Yāska’s four kinds of word',
  body: `<p>The Greek and Latin grammarians, as we have seen, counted eight parts of speech, and the modists distinguished the noun from the verb by its mode of signifying. The Indian tradition also divided words into kinds, and it gave a reason for its first division. Yāska divides words into four kinds: the <strong>name</strong> (<i>nāman</i>), the <strong>verb</strong> (<i>ākhyāta</i>), the <strong>preverb</strong> (<i>upasarga</i>), which is placed before a verb and changes its sense, and the <strong>particle</strong> (<i>nipāta</i>), which includes words such as <i>ca</i> (“and”) and <i>na</i> (“not”). He also says what distinguishes the first two: the verb has becoming as its principal meaning (<i>bhāvapradhānam ākhyātam</i>), and names have a being, a thing, as theirs (<i>sattvapradhānāni nāmāni</i>) (<i>Nirukta</i> I.1, in substance).</p>
<p>This account comes strikingly close to the modists’ distinction that we saw in Section III, between the mode of becoming and the mode of a stable thing, although the two traditions had no contact. But Yāska counts four kinds, not eight: the adjective belongs with the name, and there is no participle or interjection as a separate kind.</p>`,
  src: `Yāska, <i>Nirukta</i> I.1 (Lakshman Sarup for reference), the Sanskrit in transliteration and the English in substance.`,
  qp: {
    "id": "q-yaska",
    "variants": [
      {
        "prompt": "What are Yāska’s four kinds of word?",
        "options": [
          "Noun, verb, adjective, and participle",
          "Name, verb, preverb, and particle",
          "Noun, pronoun, verb, and adverb",
          "Root, affix, ending, and compound"
        ],
        "answer": 1,
        "explain": "Yāska divides words into the name (<i>nāman</i>), the verb (<i>ākhyāta</i>), the preverb (<i>upasarga</i>), and the particle (<i>nipāta</i>)."
      },
      {
        "prompt": "How does Yāska distinguish the verb from the name?",
        "options": [
          "Becoming for the verb, a being for the name",
          "The verb has endings and the name has none",
          "The verb always comes first in the sentence",
          "The name is always shorter than the verb"
        ],
        "answer": 0,
        "explain": "Yāska says that the verb has becoming as its principal meaning, and names have a being, a thing, as theirs (<i>Nirukta</i> I.1, in substance)."
      },
      {
        "prompt": "Yāska’s account of the name and the verb comes close to which doctrine that we have studied?",
        "options": [
          "Donatus’s eight accidents of the Latin verb",
          "The Stoic division of the sentence into parts",
          "Priscian’s definition of the word as least part",
          "The modists’ modes of a stable thing and of becoming"
        ],
        "answer": 3,
        "explain": "The modists distinguished the noun by the mode of a stable thing and the verb by the mode of becoming, which is strikingly close to Yāska’s account, although the two traditions had no contact."
      }
    ]
  } },

{ id: 'pada',
  title: 'The word in the sentence',
  body: `<p>The English word “peace” can stand in a sentence just as it is, but the Latin stem <i>pāc-</i> cannot; it must first receive an ending, as in <i>pāx</i> or <i>pācem</i>. Sanskrit is like Latin in this respect, and Pāṇini defines a word in use, a <strong>pada</strong>, by its ending: a word is that which ends in a nominal ending or a verbal ending (<i>Aṣṭādhyāyī</i> 1.4.14, <i>suptiṅantaṃ padam</i>, in substance). So the stem <i>rāma</i> is not yet a word of the sentence; with the nominative ending it becomes <i>rāmaḥ</i>, “Rāma,” which can stand in a sentence.</p>
<p>This definition differs from Priscian’s, which we saw in Section III defines the word as the least part of a constructed sentence. Both relate the word to the sentence, but Pāṇini makes the ending the mark of a word, so that a stem without its ending belongs to a level below the word. The difference reflects the languages: in Sanskrit, as in Latin, nouns and verbs almost never appear without an ending, whereas in English many words do.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i> 1.4.14 (Vasu for reference), in substance.` },

{ id: 'root-affix',
  title: 'Root and affix',
  body: `<p>Many English words can be traced to a shorter word from which they were made, as “player” to “play.” The Indian grammar derives almost every form in this way, from a <strong>root</strong> (<i>dhātu</i>) and one or more <strong>affixes</strong> (<i>pratyaya</i>). The roots are listed in a separate catalogue with their meanings: <i>gam</i> (“go”), <i>kṛ</i> (“make”), <i>bhū</i> (“be, become”). A verb of the sentence is made by adding affixes to the root: from <i>gam</i> comes <i>gacchati</i>, “he goes,” and with a past affix <i>agacchat</i>, “he went.”</p>
<p>So the Indian grammarian does not parse a finished form, as we do when we name the accidents of <i>audiēbātur</i>; he builds the form from its root. We saw in Section IV that Latin and English words are formed by derivation and composition; Pāṇini made derivation the method of the whole grammar, so that nouns, verbs, and even many particles are derived from roots by rules.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i>; the <i>Dhātupāṭha</i>; both in paraphrase.` },

{ id: 'karaka',
  title: 'The kārakas',
  body: `<p>In the English sentence “The cook takes the bread from the shelf, cuts it with a knife in the kitchen, and gives it to the guests,” each noun names something that has a part in the action: the one who acts (the cook), what is acted on (the bread), the means (the knife), the ones to whom it is given (the guests), the place from which it is taken (the shelf), and the place in which it is done (the kitchen). The center of Pāṇini’s syntax is the doctrine of these roles, which he calls the <strong>kārakas</strong> (“factors” of an action). A kāraka is a role that a thing plays in the action signified by the verb. Pāṇini names six:</p>
<p>the <strong>agent</strong> (<i>kartṛ</i>), the independent doer;<br>the <strong>object</strong> (<i>karman</i>), what the agent most wishes to reach;<br>the <strong>instrument</strong> (<i>karaṇa</i>), the most effective means;<br>the <strong>recipient</strong> (<i>sampradāna</i>), the one to whom something is given;<br>the <strong>source</strong> (<i>apādāna</i>), the fixed point from which something departs;<br>and the <strong>locus</strong> (<i>adhikaraṇa</i>), the place or time in which the action occurs.</p>
<p>These are relations in the action, not names of endings. The endings of the noun mark them, but not one for one: the same role may be marked by different endings in different constructions, as the agent is marked differently in an active and a passive sentence. So the kārakas resemble the uses of the Latin cases, but they belong to the action and are prior to the endings that express them.</p>`,
  src: `Pāṇini, <i>Aṣṭādhyāyī</i> 1.4.23–55 (Vasu for reference), in paraphrase.`,
  qp: {
    "id": "q-karaka",
    "variants": [
      {
        "prompt": "“The farmer cuts the grain with a sickle in the field.” Which kāraka does “sickle” express?",
        "options": [
          "The agent (<i>kartṛ</i>)",
          "The locus (<i>adhikaraṇa</i>)",
          "The source (<i>apādāna</i>)",
          "The instrument (<i>karaṇa</i>)"
        ],
        "answer": 3,
        "explain": "The sickle is the most effective means of the cutting, so it is the instrument."
      },
      {
        "prompt": "“The priest draws water from the well for the guests.” Which kāraka does “well” express?",
        "options": [
          "The recipient (<i>sampradāna</i>)",
          "The object (<i>karman</i>)",
          "The source (<i>apādāna</i>)",
          "The instrument (<i>karaṇa</i>)"
        ],
        "answer": 2,
        "explain": "The well is the fixed point from which the water departs, so it is the source."
      },
      {
        "prompt": "Why is a kāraka not the same as a case ending?",
        "options": [
          "It is always marked by one and the same ending",
          "It is a role in the action, which various endings mark",
          "It belongs to the noun alone and never to the action",
          "It is a kind of compound word, not a relation"
        ],
        "answer": 1,
        "explain": "A kāraka is a role in the action signified by the verb. The endings mark the kārakas, but not one for one: the agent is marked differently in an active and a passive sentence."
      }
    ]
  } },

{ id: 'sentence-example',
  title: 'A Sanskrit sentence',
  body: `<p>The sentence <i>rāmo vanaṃ gacchati</i> (word by word, without sandhi, <i>rāmaḥ vanam gacchati</i>), “Rāma goes to the forest,” shows the kārakas at work. <i>Rāmaḥ</i> is the agent, marked by the first ending, which corresponds to our nominative; <i>vanam</i> (“forest”) is the object, the place he wishes to reach, marked by the second ending, which corresponds to our accusative; and <i>gacchati</i> is the verb, formed from the root <i>gam</i> with the ending of the third person singular present.</p>
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
  qp: {
    "id": "q-patanjali",
    "variants": [
      {
        "prompt": "Which of these is among Patañjali’s purposes of grammar?",
        "options": [
          "The preservation of the Veda",
          "The composition of new hymns",
          "The translation of the Veda into Greek",
          "The teaching of good handwriting"
        ],
        "answer": 0,
        "explain": "Patañjali names the preservation of the Veda, its adaptation to new occasions, the command of scripture, brevity, and the removal of doubt about the correct form."
      },
      {
        "prompt": "Which of Patañjali’s purposes explains the form of Pāṇini’s grammar?",
        "options": [
          "The removal of doubt about the meaning of words",
          "The adaptation of formulas to new uses",
          "The command of the scriptures",
          "Brevity, since rules teach faster than lists"
        ],
        "answer": 3,
        "explain": "A short set of rules that generates every correct form is easier to learn than a list of all the forms, so brevity explains the form of Pāṇini’s grammar."
      },
      {
        "prompt": "How do Patañjali’s purposes compare with those of the Greek and Latin art?",
        "options": [
          "They are identical in every respect",
          "His purposes concern only sounds",
          "His first purpose is a sacred text",
          "The Latin art had no stated purpose"
        ],
        "answer": 2,
        "explain": "The Greek and Latin grammarians aimed to speak correctly and to explain the authors; Patañjali shares these aims, but his first purpose is the preservation of a sacred text."
      }
    ]
  } },

{ id: 'bhartrhari',
  title: 'Bhartṛhari and the sentence',
  body: `<p>When we hear a sentence such as “The bread is fresh,” we understand it at once as a whole, and not as “bread,” then “fresh,” added together. Pāṇini’s rules produce words. Bhartṛhari, in the <i>Vākyapadīya</i> (“On the Sentence and the Word”), argued that the true unit of meaning is the sentence (<i>vākya</i>), and that its meaning is grasped as a whole, in a single act of understanding, not by adding the meanings of the words one after another. He called the meaning-bearing unit that the hearer grasps the <strong>sphoṭa</strong> (literally, “bursting forth”), distinct from the sequence of sounds that reveal it (<i>Vākyapadīya</i> I).</p>
<p>So the Indian tradition, which built its grammar from roots and affixes, ended in a philosophy that put the sentence first. We saw in Section V that the modists required a construction to produce a complete sense in the mind of the hearer. Bhartṛhari’s account is different in its details, but it shares the conviction that understanding a sentence is more than adding its words.</p>`,
  src: `Bhartṛhari, <i>Vākyapadīya</i> I (K. A. Subramania Iyer for reference), in paraphrase.` },

{ id: 'sanskrit-compare',
  title: 'The Sanskrit art compared with ours',
  body: `<p>The Sanskrit grammar shares much with the Greek and Latin art. Both serve a classical language and its sacred or literary texts; both distinguish noun and verb, and both connect the verb with becoming; both describe the endings that mark the construction of the noun. But the Sanskrit art differs in its method and its center. It is a system of rules that generates forms from roots, not a set of definitions; its syntax is centered on the kārakas, the roles in the action, not on the cases; and it gives the sounds and their combinations a much larger place.</p>
<p>Unlike the scribal lists, which explain one language by another, the Sanskrit grammar explains Sanskrit from itself. In the nineteenth century, European scholars who learned Pāṇini’s grammar were deeply impressed by it, and it influenced the beginnings of modern linguistics.</p>`,
  src: `General comparison, in paraphrase.` }
  ]
};
