/* XI.3 Arabic Grammar [xi.arabic]
   31 Oct 2026: one of the five decks made from xi.traditions (now retired), as approved by Timothy (traditions-plan/XI-SPLIT-DRAFTS-1.md).
   13 panels, 4 question points (q-three-parts, q-irab, q-verbal-sentence, q-nominal-sentence), 45 Full points, numbered from R1.
   No Quick lines yet (the Editor writes them). No exercise.
   Built by traditions-plan/build/build-split.js. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['xi.arabic'] = {
  id: 'xi.arabic',
  title: 'Arabic Grammar',
  sub: 'The Arabic grammarians, from Sībawayh to al-Zajjājī',
  sources: `Sībawayh, <i>al-Kitāb</i>; al-Zajjājī, <i>al-Īḍāḥ</i>.`,
  recitation: [
    `The Arabic name for the description of correct Arabic is <strong>naḥw</strong>, “way” or “direction,” that is, the way in which speech goes when it is correct Arabic.`,
    `Arabic grammar arose in the eighth century in Iraq, when the spread of Islam brought many speakers of other languages into the Arabic-speaking world, and errors in reading the Qurʾān and in ordinary speech made it necessary to describe and teach correct Arabic.`,
    `The founding work is the <i>Kitāb</i> (“The Book”) of Sībawayh, which described the Arabic of the Qurʾān, of the old poets, and of the Bedouin, whose speech was regarded as the standard.`,
    `So, like the Sanskrit grammar, the Arabic grammar served a sacred text, but its standard was also the living speech of those who spoke Arabic best.`,
    `Sībawayh counts three parts of speech: the noun (<i>ism</i>), the verb (<i>fiʿl</i>), and the particle (<i>ḥarf</i>), which comes for a meaning that is neither noun nor verb.`,
    `The Arabic noun includes our noun, adjective, and pronoun, and the participle; the particle includes our prepositions, conjunctions, and many words that we class as adverbs or interjections.`,
    `So the Arabic division resembles the logicians’ division into noun, verb, and the rest, but it is a grammarian’s division, made for the construction of Arabic, and it has remained the standard of the Arabic tradition.`,
    `The word <i>ḥarf</i> means both a particle and a letter of the alphabet.`,
    `The Arabic alphabet writes the consonants and the long vowels; the short vowels are marked by small signs, which are usually omitted in ordinary writing.`,
    `Most Arabic words are formed from a root of three consonants, which carries a general meaning, and a pattern of vowels and added letters, which gives the particular form.`,
    `This system resembles the Sanskrit derivation from roots, but the Arabic root is a set of consonants into which vowels are inserted, not a syllable to which affixes are added.`,
    `The Arabic noun changes its final vowel according to its use in the sentence, and this change is called <strong>iʿrāb</strong> (“making Arabic,” that is, giving a word its correct ending).`,
    `There are three states: <i>rafʿ</i>, with the ending <i>-u</i>, for the subject and the predicate; <i>naṣb</i>, with the ending <i>-a</i>, for the object; and <i>jarr</i>, with the ending <i>-i</i>, after prepositions and for the second noun of a possessive construction.`,
    `Words that do not change their endings are called <i>mabnī</i> (“built,” fixed), and the distinction between words with iʿrāb and fixed words corresponds to our distinction between declinable and indeclinable words.`,
    `The three states resemble the Latin nominative, accusative, and genitive, but there are only three, and their uses are defined by the Arabic theory of government.`,
    `The Arabic grammarians explained each ending by something that governs it, an <strong>ʿāmil</strong> (“operator,” “governor”), and called the word governed the <i>maʿmūl</i>.`,
    `The verb governs its agent in <i>rafʿ</i> and its object in <i>naṣb</i>, and a preposition governs its noun in <i>jarr</i>.`,
    `In Arabic grammar government is the center of the whole syntax: every ending is explained by naming its governor, and where no word can be found to govern, the grammarians posited an abstract governor.`,
    `So the Arabic theory of the ʿāmil is a fuller development of the idea that the medieval Latin grammarians called <i>regimen</i>.`,
    `The Arabic grammarians distinguished two kinds of sentence by their first word.`,
    `A verbal sentence (<i>jumla fiʿliyya</i>) begins with a verb, and the verb governs the agent in <i>rafʿ</i> and the object in <i>naṣb</i>; the usual order is verb, agent, object.`,
    `As in Latin, the endings show the roles, so the order can change without changing the sense.`,
    `The Arabic names for verb, agent, and object (<i>fiʿl</i>, <i>fāʿil</i>, <i>mafʿūl</i>) are all formed from the root <i>f-ʿ-l</i>, “doing,” which the grammarians used as the model root for naming the patterns of words.`,
    `A nominal sentence (<i>jumla ismiyya</i>) begins with a noun and may contain no verb at all.`,
    `Its first noun is the topic (<i>mubtadaʾ</i>, “that with which one begins”), and its second is the comment (<i>khabar</i>, “information”); both are in <i>rafʿ</i>, and the topic is governed by the act of beginning itself, an abstract governor.`,
    `So in Arabic a sentence can be complete without a verb: the Arabic grammarians treated the nominal sentence as a kind of sentence in its own right, not as an omission, whereas the modists held a construction complete only with a subject and a verb.`,
    `In Arabic some particles govern like verbs, such as the particle <i>inna</i> (“indeed”), which puts the following noun into <i>naṣb</i>.`,
    `Other particles govern the imperfect verb, which, unlike the Latin verb, takes different endings according to what governs it.`,
    `So the list of governors is long and varied, and it includes particles that Latin grammar would class as adverbs or conjunctions, each ending explained in the same way, by naming the word that governs it.`,
    `Arabic has a definite article, <i>al-</i>, which the grammarians classed as a particle, whereas the Latin grammarians removed the article from the Greek list because Latin has none.`,
    `Arabic expresses possession by <strong>annexation</strong> (<i>iḍāfa</i>): the first noun is annexed to the second, which stands in <i>jarr</i>, and the first noun takes no article.`,
    `This construction resembles the Latin genitive, but it changes the form of the first noun as well as the second.`,
    `Arabic nouns have three numbers: singular, dual (for two), and plural, and the dual has its own endings; Latin has no dual, so Donatus had no reason to name it.`,
    `The <strong>sound plural</strong> adds an ending to the unchanged singular, and the <strong>broken plural</strong> changes the vowels and pattern within the root.`,
    `English has a few plurals of the second kind (“man,” “men”), but in Arabic they are very common, which shows again how much of Arabic grammar is worked out within the root.`,
    `Al-Zajjājī asked why the rules of grammar are as they are, and he distinguished three kinds of reason: educational reasons, which simply state the rule for the learner; analogical reasons, which explain a rule by its likeness to another; and theoretical reasons, which ask why the rule itself holds.`,
    `So the Arabic tradition, like the medieval Latin one, came to ask for the causes of the rules; al-Zajjājī’s theoretical reasons are the counterpart of the modists’ question, though sought in the internal logic of the language rather than in the modes of being.`,
    `An error in Arabic, whether a wrong ending, a wrong government, or a form that correct speech does not have, is called <strong>laḥn</strong>.`,
    `The word covers both the barbarism and the solecism, because an error in the ending of a word is at the same time an error in its construction.`,
    `The Arabic grammarians had a body of authors, as the Latin grammarians did: the Qurʾān, the pre-Islamic poets, and the speech of the Bedouin.`,
    `They weighed the same kinds of evidence as the Latin criteria of correctness, under names of their own, such as transmitted usage (<i>samāʿ</i>, “hearing”) and analogy (<i>qiyās</i>).`,
    `Of the traditions studied, the Arabic is in some ways the closest to the Greek and Latin art: it names parts of speech, describes case endings and their uses, has theories of government and agreement, and has a doctrine of the complete sentence and a standard of correctness drawn from authors and usage.`,
    `Whether early Arabic grammar was influenced by Greek logic or grammar is disputed, and the Arabic system is in any case original in its form.`,
    `It differs in placing government at the center of the syntax, in admitting complete sentences without a verb, and in its system of roots and patterns.`,
    `Compared with Pāṇini, it begins not from the roles in the action but from the governor of each ending, so the Sanskrit, the Arabic, and the Latin traditions found the same facts on the page but explained them from different starting points.`
  ],
  panels: [

{ id: 'nahw',
  title: 'Naḥw, the way of speech',
  body: `<p>When a language spreads quickly to many new speakers, errors multiply, and those who care for the language must describe its correct forms. The Arabic name for this description is <i>naḥw</i>, “way” or “direction,” that is, the way in which speech goes when it is correct Arabic. Arabic grammar arose in the eighth century in Iraq, when the spread of Islam brought many speakers of other languages into the Arabic-speaking world. Errors in the reading of the Qurʾān and in ordinary speech made it necessary to describe correct Arabic and to teach it.</p>
<p>The founding work is the <i>Kitāb</i> (“The Book”) of Sībawayh, a Persian who died about 796, and the later tradition called it simply “the Book.” Sībawayh described the Arabic of the Qurʾān, of the old poets, and of the Bedouin, whose speech was regarded as the standard. So, like the Sanskrit grammar, the Arabic grammar served a sacred text, but its standard was also the living speech of those who spoke Arabic best. Sībawayh’s first question was how many kinds of word there are.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>; general history, in paraphrase.` },

{ id: 'three-parts',
  title: 'Three parts of speech',
  body: `<p>Donatus counted eight parts of speech, as we saw in Section III, whereas the logicians spoke of the noun, the verb, and the other words. The Arabic grammarians made their own division. Sībawayh begins his book with the parts of speech, and he counts three: words are the <strong>noun</strong> (<i>ism</i>), the <strong>verb</strong> (<i>fiʿl</i>), and the <strong>particle</strong> (<i>ḥarf</i>), which comes for a meaning that is neither noun nor verb (<i>fa-l-kalimu smun wa-fiʿlun wa-ḥarfun jāʾa li-maʿnan laysa bi-smin wa-lā fiʿlin</i>; <i>al-Kitāb</i>, ch. 1, in substance).</p>
<p>The Arabic noun includes our noun, adjective, and pronoun, and the participle, which in Arabic is formed like a noun. The particle includes our prepositions, conjunctions, and many words that we class as adverbs or interjections. So the Arabic division resembles the logicians’ division into noun, verb, and the rest that we saw in Section III, but it is a grammarian’s division, made for the construction of Arabic, and it has remained the standard of the Arabic tradition.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>, ch. 1, the Arabic in transliteration and the English in substance.`,
  qp: {
    "id": "q-three-parts",
    "variants": [
      {
        "prompt": "To which of Sībawayh’s three parts does Arabic <i>kabīr</i> (“big”) belong?",
        "options": [
          "The verb (<i>fiʿl</i>)",
          "The particle (<i>ḥarf</i>)",
          "None of the three",
          "The noun (<i>ism</i>)"
        ],
        "answer": 3,
        "explain": "The Arabic noun includes our noun, adjective, and pronoun, so the adjective <i>kabīr</i> belongs to the noun."
      },
      {
        "prompt": "To which of Sībawayh’s three parts does Arabic <i>thumma</i> (“then”) belong?",
        "options": [
          "The noun (<i>ism</i>)",
          "The verb (<i>fiʿl</i>)",
          "The particle (<i>ḥarf</i>)",
          "None of the three"
        ],
        "answer": 2,
        "explain": "<i>Thumma</i> comes for a meaning that is neither noun nor verb, so it is a particle, which includes our conjunctions and many of our adverbs."
      },
      {
        "prompt": "What are the three parts of speech in Arabic grammar?",
        "options": [
          "The noun, the verb, and the adjective",
          "The noun, the verb, and the particle",
          "The root, the pattern, and the ending",
          "The topic, the comment, and the verb"
        ],
        "answer": 1,
        "explain": "Sībawayh begins his book by dividing words into the noun (<i>ism</i>), the verb (<i>fiʿl</i>), and the particle (<i>ḥarf</i>)."
      }
    ]
  } },

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
  qp: {
    "id": "q-irab",
    "variants": [
      {
        "prompt": "Which state of <i>iʿrāb</i> does <i>qalamun</i> (“pen”) show?",
        "options": [
          "<i>Naṣb</i>, which resembles the accusative",
          "<i>Jarr</i>, which resembles the genitive",
          "<i>Rafʿ</i>, which resembles the nominative",
          "None; the word is <i>mabnī</i> (fixed)"
        ],
        "answer": 2,
        "explain": "The ending <i>-u</i> marks <i>rafʿ</i>, used for the subject and the predicate, so it resembles the Latin nominative."
      },
      {
        "prompt": "Which state of <i>iʿrāb</i> does <i>qalaman</i> show?",
        "options": [
          "<i>Rafʿ</i>, which resembles the nominative",
          "<i>Naṣb</i>, which resembles the accusative",
          "<i>Jarr</i>, which resembles the genitive",
          "None; the word is <i>mabnī</i> (fixed)"
        ],
        "answer": 1,
        "explain": "The ending <i>-a</i> marks <i>naṣb</i>, used for the object, so it resembles the Latin accusative."
      },
      {
        "prompt": "Which state of <i>iʿrāb</i> does <i>qalamin</i> show?",
        "options": [
          "<i>Jarr</i>, which resembles the genitive",
          "<i>Rafʿ</i>, which resembles the nominative",
          "<i>Naṣb</i>, which resembles the accusative",
          "None; the word is <i>mabnī</i> (fixed)"
        ],
        "answer": 0,
        "explain": "The ending <i>-i</i> marks <i>jarr</i>, used after prepositions and for the second noun of a possessive construction, so it resembles the Latin genitive."
      }
    ]
  } },

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
  qp: {
    "id": "q-verbal-sentence",
    "variants": [
      {
        "prompt": "In <i>qaraʾa ʿaliyyun risālatan</i> (“Ali read a letter”), which word is the agent (<i>fāʿil</i>)?",
        "options": [
          "<i>qaraʾa</i>",
          "<i>risālatan</i>",
          "<i>ʿaliyyun</i>",
          "None; the sentence has no agent"
        ],
        "answer": 2,
        "explain": "<i>ʿAliyyun</i> is the agent, in <i>rafʿ</i> with the ending <i>-un</i>; <i>qaraʾa</i> is the verb and <i>risālatan</i> the object."
      },
      {
        "prompt": "In <i>qaraʾa ʿaliyyun risālatan</i>, what governs the ending of <i>risālatan</i>?",
        "options": [
          "The agent <i>ʿaliyyun</i>, by agreement",
          "The verb <i>qaraʾa</i>",
          "The act of beginning the sentence",
          "No governor; the ending is fixed"
        ],
        "answer": 1,
        "explain": "The verb governs its agent in <i>rafʿ</i> and its object in <i>naṣb</i>, so <i>risālatan</i> takes the ending <i>-an</i>."
      },
      {
        "prompt": "Why can the order of <i>qaraʾa ʿaliyyun risālatan</i> change without changing its sense?",
        "options": [
          "The endings show the roles",
          "Arabic has no rules of order at all",
          "The verb always agrees with the object",
          "The article marks the agent"
        ],
        "answer": 0,
        "explain": "As in Latin, the endings show the roles, so the order can change and the agent and the object are still known."
      }
    ]
  } },

{ id: 'nominal-sentence',
  title: 'The nominal sentence',
  body: `<p>A <strong>nominal sentence</strong> (<i>jumla ismiyya</i>) begins with a noun and may contain no verb at all: <i>zaydun ʿālimun</i>, “Zayd is learned.” The first noun is the <strong>topic</strong> (<i>mubtadaʾ</i>, “that with which one begins”), and the second is the <strong>comment</strong> (<i>khabar</i>, “information”); both are in <i>rafʿ</i>. The grammarians said that the topic is governed by the act of beginning itself, an abstract governor that is not a spoken word.</p>
<p>So in Arabic a sentence can be complete without a verb. We saw in Section V that the modists held a construction to be complete only with a subject and a verb, and that Latin often omits the copula, as in <i>omnia praeclara, rara</i>. The Arabic grammarians did not treat the nominal sentence as an omission; they treated it as a kind of sentence in its own right. This is a real difference in the account of completeness.</p>`,
  src: `Sībawayh, <i>al-Kitāb</i>, in paraphrase.`,
  qp: {
    "id": "q-nominal-sentence",
    "variants": [
      {
        "prompt": "In <i>al-baytu kabīrun</i> (“The house is big”), which word is the topic (<i>mubtadaʾ</i>)?",
        "options": [
          "<i>al-baytu</i>",
          "<i>kabīrun</i>",
          "An omitted verb “is”",
          "Both words equally"
        ],
        "answer": 0,
        "explain": "The first noun, <i>al-baytu</i>, is the topic, “that with which one begins”; <i>kabīrun</i> is the comment (<i>khabar</i>)."
      },
      {
        "prompt": "In <i>al-baytu kabīrun</i>, in which state are the topic and the comment?",
        "options": [
          "The topic in <i>rafʿ</i>, the comment in <i>naṣb</i>",
          "Both are in <i>jarr</i>",
          "The topic in <i>naṣb</i>, the comment in <i>rafʿ</i>",
          "Both are in <i>rafʿ</i>"
        ],
        "answer": 3,
        "explain": "In the nominal sentence both the topic and the comment are in <i>rafʿ</i>; the topic is governed by the act of beginning itself."
      },
      {
        "prompt": "How does the Arabic account of the nominal sentence differ from the modists’ account of completeness?",
        "options": [
          "It requires two verbs in every complete sentence",
          "It denies that any sentence is complete",
          "It counts a verbless sentence as complete",
          "It treats the topic as a kind of verb"
        ],
        "answer": 2,
        "explain": "The modists held a construction to be complete only with a subject and a verb; the Arabic grammarians treated the nominal sentence as a kind of sentence in its own right, not as an omission."
      }
    ]
  } },

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
  src: `General comparison; Versteegh, <i>Greek Elements in Arabic Linguistic Thinking</i> (1977), for the question of influence; both in paraphrase.` }
  ]
};
