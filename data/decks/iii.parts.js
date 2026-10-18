/* III.1 The Word (dictio) and the Eight Parts [iii.parts]
   Plan (ITEM-LIST.md): 13 panels, 4 question points (placeholders: qpTodo; to be written). Exercise: The Eight Parts (not yet written).
   Live material drawn on: DECKS.pos (the word; a list of uses; the eight; noun, verb, pronoun and participle, the remaining
   four; how to tell), DECKS.enpos, DECKS.latpos (the eight in Latin; post as preposition and adverb), the article panels
   of DECKS.poscompare. Donatus's definitions are quoted in Latin from the Ars minor and given in English in substance. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.parts'] = {
  id: 'iii.parts',
  title: 'The Word (<i>dictio</i>) and the Eight Parts',
  sub: 'The least part of a constructed sentence, and the eight parts of speech, each decided by how the word is used',
  sources: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> II.14–21; Dionysius Thrax, <i>Technē</i> 11–20.`,
  panels: [

{ id: 'what-word',
  title: 'What is a word?',
  body: `<p>In Section II we studied the material of speech: the voice, the letter, the syllable, and the measures of the syllable. None of these signifies by imposition. We saw in Section I that signification by imposition begins with the word, so the grammar of the word begins here.</p>
<p>A sentence such as “The doctor drank the water” can be divided into words, and each word still signifies something. If we divide further, into syllables, the parts no longer signify: the syllable “tor” in “doctor” and the syllable “wa” in “water” signify nothing by themselves, whereas “doctor” and “water” do. So the word is defined by its place in the sentence: it is the least part into which a sentence can be divided that still signifies.</p>
<p>Priscian defines the word (Latin <i>dictio</i>) in this way, as <i>pars minima orationis constructae</i>, that is, the least part of a constructed sentence, or of a sentence put together in order (<i>Institutiones grammaticae</i> II.14). Dionysius Thrax had given the same definition in Greek (<i>Technē</i> 11).</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II.14 (the Latin); Dionysius Thrax, <i>Technē</i> 11, in paraphrase.` },

{ id: 'parts-of-speech',
  title: 'Why are they called parts of speech?',
  body: `<p>In “The girl sings in the garden,” each word serves the sentence in a different way: “girl” names the one who sings, “sings” says what she does, and “in” relates “the garden” to the singing. The words of a sentence are therefore of different kinds. The Latin name for the kinds of word is <i>partes orationis</i>. The word <i>oratio</i> here means a sentence, or connected speech, so the parts of speech are the kinds of word of which sentences are made. The English name “parts of speech” translates the Latin; it is the established term, and English grammars use it.</p>
<p>So the parts of speech are not, in the first place, a classification of the words in a dictionary. They are a classification of the ways in which a word can serve as a part of a sentence. A dictionary records for each word the parts of speech that it usually has, but the part of speech of a word in a given sentence is decided by how it is used there, as we will see.</p>`,
  src: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> II.15–17, in paraphrase.` },

{ id: 'the-eight',
  title: 'The eight parts of speech',
  body: `<p>When the grammarians sorted the words of Latin by the ways in which they serve in a sentence, they found eight kinds. Donatus’s <i>Ars minor</i>, the first Latin grammar studied in the medieval schools, begins with a question and answer: <i>partes orationis quot sunt? octo</i>, “How many parts of speech are there? Eight.” He then lists them:</p>
<p><strong>noun</strong> (<i>nomen</i>);<br><strong>pronoun</strong> (<i>pronomen</i>);<br><strong>verb</strong> (<i>verbum</i>);<br><strong>adverb</strong> (<i>adverbium</i>);<br><strong>participle</strong> (<i>participium</i>);<br><strong>conjunction</strong> (<i>coniunctio</i>);<br><strong>preposition</strong> (<i>praepositio</i>);<br><strong>interjection</strong> (<i>interiectio</i>).</p>
<p>In the Latin sentence <i>Puella in hortō cantat</i>, “The girl sings in the garden,” <i>puella</i> is a noun, <i>in</i> a preposition, <i>hortō</i> a noun, and <i>cantat</i> a verb. Donatus has no separate part for the adjective, because, as we will see, the Latin grammarians count the adjective as a kind of noun.</p>`,
  src: `Donatus, <i>Ars minor</i>, the opening question.`,
  qpTodo: `The eight parts: which of a list is not one of Donatus’s eight (the adjective, the article), or which part a marked word in a simple Latin or English sentence is.` },

{ id: 'by-use',
  title: 'The part of speech is decided by use',
  body: `<p>The same word can be a noun in one sentence and a verb in another, as “run” is in “a long run” and “they run.” So the parts of speech cannot be distinguished by the sound or spelling of a word, but only by the way it signifies in the sentence, and we ask of a word not only what it means but how it is used.</p>
<p>English shows this clearly, because many English words have one form for several parts of speech. In “We bought the paint,” “paint” is a noun, because it refers to a thing; in “We paint the wall,” it is a verb, because it says what is done. Latin usually distinguishes the two by their forms (<i>amor</i>, “love,” is a noun, and <i>amat</i>, “he loves,” is a verb), but Latin also has words with more than one use. <i>Post</i> is a preposition in <i>post bellum</i> (“after the war”) and an adverb in <i>paulō post</i> (“a little later”); <i>cum</i> is a preposition in <i>cum amīcō</i> (“with a friend”) and a conjunction in <i>cum venit</i> (“when he comes”).</p>
<p>Priscian draws the same conclusion: the parts of speech can be distinguished from one another only by attending to what is proper to the signification of each (<i>non aliter possunt discerni a se partes orationis, nisi uniuscuiusque proprietates significationum attendamus</i>; <i>Institutiones grammaticae</i> II.17).</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II.17, in paraphrase.`,
  qpTodo: `Decided by use: in a given pair of sentences (“We bought the paint” / “We paint the wall”; <i>post bellum</i> / <i>paulō post</i>), what part of speech is the marked word in each, and why.` },

{ id: 'noun',
  title: 'The noun',
  body: `<p>The words “horse,” “city,” “courage,” “justice,” and “Rome” all name something. Some of them name something that can be seen or touched, such as a horse or a city, and some name something that cannot, such as courage or justice. Some name one particular thing, as “Rome” does, and some name a kind, as “city” does. Words of this sort are <strong>nouns</strong>.</p>
<p>Donatus defines the noun as <i>pars orationis cum casu corpus aut rem proprie communiterve significans</i>, that is, a part of speech with case, signifying a body or a thing, either properly or commonly (<i>Ars minor</i>). By “body” he means something that can be seen or touched; by “thing,” something that cannot. “Properly” means that the noun names one particular thing; “commonly” means that it names a kind.</p>
<p><strong>Case</strong> (Latin <i>casus</i>) is a form of a noun that shows its relation to the other words of the sentence, as Latin <i>puella</i> (“girl,” as subject) differs from <i>puellam</i> (“girl,” as object); we will study it with the noun. Donatus counts the adjective under the noun, because Latin adjectives have case and are declined like nouns: <i>bonus</i> (“good”) in <i>bonus puer</i> (“a good boy”) is, in his terms, a noun that signifies a quality.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the noun (the Latin; the English in substance).` },

{ id: 'pronoun',
  title: 'The pronoun',
  body: `<p>In “Mary came, and she sat down,” the word “she” is put for “Mary” and refers to the same person, so that the name need not be repeated. A word used in this way is a <strong>pronoun</strong>. Donatus defines the pronoun as <i>pars orationis quae pro nomine posita tantundem paene significat personamque interdum recipit</i>, that is, a part of speech that, put in place of a noun, signifies almost as much as the noun and sometimes indicates a person (<i>Ars minor</i>).</p>
<p>The pronoun signifies “almost as much” as the noun, because it refers to a thing without saying what kind of thing it is. “She” refers to a woman but does not name her; “this” can refer to anything that is pointed out. The pronouns of the first and second person, “I” and “you,” Latin <i>ego</i> and <i>tū</i>, refer to the speaker and to the one spoken to; this is what Donatus means by indicating a person.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the pronoun (the Latin; the English in substance).` },

{ id: 'verb',
  title: 'The verb',
  body: `<p>In “The boy writes,” “The letter is written,” and “The baby sleeps,” the words “writes,” “is written,” and “sleeps” each say something about the subject: “writes” signifies a doing, “is written” an undergoing, and “sleeps” neither. Words of this sort are <strong>verbs</strong>. Donatus defines the verb as <i>pars orationis cum tempore et persona sine casu aut agere aliquid aut pati aut neutrum significans</i>, that is, a part of speech with time and person, without case, signifying either doing something, or undergoing something, or neither (<i>Ars minor</i>).</p>
<p>We saw in Section I that the verb consignifies time, and that it is also marked for person (“I run,” “he runs”). These are the two accidents that Donatus puts into his definition. The verb has no case: Latin <i>scrībit</i> (“he writes”) has no form that shows it as subject or object, as a noun has. A noun and a verb together make a complete sentence, as in “The sailor waits” or <i>Nauta exspectat</i>, and this is why the verb is the principal part of the sentence besides the noun.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the verb (the Latin; the English in substance).` },

{ id: 'participle',
  title: 'The participle',
  body: `<p>In “the running horse,” “running” describes the horse, as an adjective does, but it still signifies an action going on, as a verb does. In <i>Mīles vulnerātus cecidit</i>, “The wounded soldier fell,” <i>vulnerātus</i> (“wounded”) agrees with <i>mīles</i> (“soldier”) in case and gender, as an adjective does, but it is formed from the verb <i>vulnerō</i> (“I wound”) and signifies an undergoing in past time. A word of this kind is a <strong>participle</strong>.</p>
<p>Donatus defines the participle as <i>pars orationis partem capiens nominis, partem verbi</i>, that is, a part of speech that takes part of the noun and part of the verb (<i>Ars minor</i>); its name comes from <i>pars</i> (“part”) and <i>capere</i> (“to take”). From the noun it takes gender and case; from the verb it takes time and the signification of doing or undergoing. Donatus counts the participle as a part of its own because it belongs fully to neither the noun nor the verb.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the participle (the Latin; the English in substance).` },

{ id: 'adverb-preposition',
  title: 'The adverb and the preposition',
  body: `<p>In “He runs quickly,” “quickly” makes clear how he runs, and in “He will come tomorrow,” “tomorrow” completes the meaning of “will come” by saying when. Such a word is an <strong>adverb</strong> (<i>adverbium</i>, “what is added to the verb”), which is, in Donatus’s words, <i>pars orationis quae adiecta verbo significationem eius explanat atque inplet</i>, that is, a part of speech that, added to a verb, makes its meaning clear and completes it (<i>Ars minor</i>). Donatus’s own examples are <i>iam faciam</i> (“I will do it now”) and <i>non faciam</i> (“I will not do it”) (<i>Ars maior</i> II). Latin examples are <i>bene</i> (“well”), <i>nōn</i> (“not”), and <i>heri</i> (“yesterday”).</p>
<p>In “in the garden” and “to her,” the words “in” and “to” are placed before a noun or pronoun and relate it to the rest of the sentence; in Latin such a word is placed before a noun and takes a particular case, as <i>in hortō</i> (“in the garden”) and <i>ad urbem</i> (“to the city”). Such a word is a <strong>preposition</strong> (<i>praepositio</i>, “what is placed before”), which Donatus defines as a part of speech placed before other parts of speech, which completes, changes, or lessens their meaning (<i>praeposita aliis partibus orationis significationem earum aut conplet aut mutat aut minuit</i>; <i>Ars minor</i>).</p>`,
  src: `Donatus, <i>Ars minor</i>, on the adverb and the preposition (the Latin; the English in substance).` },

{ id: 'conjunction-interjection',
  title: 'The conjunction and the interjection',
  body: `<p>Some words join words, as “and” does in “bread and wine,” <i>pānis et vīnum</i>, and some join clauses and show how they are related, as “but,” “if,” and “because” do, and Latin <i>sed</i>, <i>sī</i>, and <i>quia</i>. Such a word is a <strong>conjunction</strong> (<i>coniunctio</i>, “joining”), which is, in Donatus’s words, <i>pars orationis adnectens ordinansque sententiam</i>, that is, a part of speech that joins and orders the thought (<i>Ars minor</i>).</p>
<p>Words such as “alas” and “oh,” Latin <i>heu</i> (“alas”) and <i>ō</i> (“oh”), express a feeling and are thrown into a sentence without being constructed with its other words; we saw in Section I that speech can express feeling in this way. Such a word is an <strong>interjection</strong> (<i>interiectio</i>, “what is thrown in”), which Donatus defines as <i>pars orationis significans mentis affectum voce incondita</i>, that is, a part of speech that signifies a feeling of the mind by an unformed utterance (<i>Ars minor</i>). An interjection is a word, unlike a groan, because it signifies by imposition, but it is thrown into the sentence without being constructed with the other words.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the conjunction and the interjection (the Latin; the English in substance).`,
  qpTodo: `Naming the part: in a given sentence, which part of speech is the marked word (an adverb, a preposition, a conjunction, an interjection), decided by Donatus’s definitions.` },

{ id: 'greek-article',
  title: 'The Greek eight and the article',
  body: `<p>In English we say “the girl” or “a girl,” and the small words “the” and “a” show whether a particular girl is meant or any girl. English therefore has articles: the definite article “the” and the indefinite article “a” or “an.” Latin has no article, so Latin <i>puella</i> can mean “the girl” or “a girl,” as the sense requires.</p>
<p>Greek, like English, has an article, and the list of eight parts was first made for Greek. Dionysius Thrax counts noun, verb, participle, <strong>article</strong>, pronoun, preposition, adverb, and conjunction (<i>Technē</i> 11). The Greek article, ὁ, ἡ, τό (<i>ho, hē, to</i>, “the”), is declined for gender, number, and case, as in ὁ ἄνθρωπος (<i>ho anthrōpos</i>, “the man”).</p>
<p>Because Latin has no article, the Latin grammarians removed it from the list. They kept the number at eight by counting the interjection, which the Greek grammarians had placed under the adverb, as a part of its own. We will see the article again among the modern accounts of the parts of speech in Section XI.</p>`,
  src: `Dionysius Thrax, <i>Technē</i> 11, in paraphrase; Priscian, <i>Institutiones grammaticae</i> II.16, in paraphrase.` },

{ id: 'english-eight',
  title: 'The parts of speech in English grammars',
  body: `<p>English school grammars also usually count eight parts of speech, but not the same eight. The traditional English list is noun, pronoun, adjective, verb, adverb, preposition, conjunction, and interjection, and the articles are usually counted with the adjectives (some older grammars, such as Robert Lowth’s of 1762, count the article separately and so have nine parts). So the English list differs from Donatus’s in two ways. It counts the <strong>adjective</strong> as a part of its own, because English adjectives are not declined like nouns; and it does not count the <strong>participle</strong> as a part of its own, but treats it as a form of the verb.</p>
<p>The lists differ because the languages differ and because the distinctions can be drawn more finely or less finely. The ways of signifying that the lists describe are largely the same. In this course we use Donatus’s eight, because they are the parts of the tradition, and we note the English practice where it differs.</p>`,
  src: `Standard English school grammars; Lowth, <i>A Short Introduction to English Grammar</i> (1762), in paraphrase.`,
  qpTodo: `Donatus’s list and the English list: in which list is the adjective a separate part, in which the participle, and why.` },

{ id: 'declinable',
  title: 'Declinable and indeclinable parts',
  body: `<p>The eight parts fall into two groups. The noun, the pronoun, the verb, and the participle change their form to show their accidents: Latin <i>puella</i>, <i>puellae</i>, <i>puellam</i>, or <i>cantō</i>, <i>cantās</i>, <i>cantat</i> (“I sing,” “you sing,” “he sings”). These are called the <strong>declinable</strong> parts, from the Latin <i>dēclīnāre</i>, “to turn aside,” because their forms turn away from the first form. The adverb, the preposition, the conjunction, and the interjection keep one form, and they are called the <strong>indeclinable</strong> parts. (Some adverbs have degrees of comparison, as “quickly” and “more quickly,” but they are not declined for case or time.)</p>
<p>This division orders the study of the parts of speech in this section of the course: after the question why there are these eight parts, the declinable parts are studied with their accidents, and then the indeclinable parts.</p>`,
  src: `Donatus, <i>Ars minor</i> and <i>Ars maior</i> II, in paraphrase.` }

  ]
};
