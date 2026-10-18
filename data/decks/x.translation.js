/* X.3 Translation [x.translation]
   Plan (ITEM-LIST.md): 12 panels, 4 question points (placeholders: qpTodo; to be written). Translators are named only in
   the source lines (REVISION-GUIDE M).
   Live material drawn on: DECKS.traditions (why a concept cannot be the end of signification), in part. Aristotle,
   De interpretatione 1, is quoted as in i.sign. Cicero is quoted in Latin (checked) with a
   paraphrase; Jerome is paraphrased (see sources/TRANSLATIONS-USED.md). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['x.translation'] = {
  id: 'x.translation',
  title: 'Translation',
  sub: 'Why is translation necessary, what is its history, and can translations be trusted?',
  sources: `Aristotle, <i>De interpretatione</i> 1; Cicero, <i>De optimo genere oratorum</i> 14; Jerome, <i>Epistula</i> 57; Leonardo Bruni, <i>De interpretatione recta</i> (c. 1424); Roger Ascham, <i>The Scholemaster</i> (1570).`,
  panels: [

{ id: 'why',
  title: 'Why is translation necessary?',
  body: `<p>We saw in Section I that words signify by imposition, and that different peoples have imposed different words: English says “horse” where Latin says <i>equus</i>. A speaker of one language therefore cannot understand a text in another without learning that language or reading a translation. <strong>Translation</strong> (Latin <i>trānslātiō</i>, “carrying across”) is the expression in one language of what has been said in another.</p>
<p>Translation has always been necessary for the transmission of learning. The Romans read Greek philosophy and poetry in translation, and they learned to write their own by translating; the Latin West received Aristotle in translation from Greek and Arabic; and the Bible has been read for most of its history in translation. So the grammarian, whose task is to read and explain texts, must also understand what a translation can and cannot carry over.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1; general history, in paraphrase.` },

{ id: 'aristotle',
  title: 'Why translation is possible',
  body: `<p>We saw in Section I the passage of Aristotle on which the possibility of translation rests: “Just as all men have not the same writing, so all men have not the same speech sounds, but the mental experiences, which these directly symbolize, are the same for all, as also are those things of which our experiences are the images” (<i>De interpretatione</i> 1, 16a5–8).</p>
<p>If the words of different languages signify the same concepts, and the concepts are likenesses of the same things, then what is said in one language can be said in another, because the translator carries over the concept, not the sound. This is the classical answer to the question whether translation is possible. It does not claim that translation is easy or perfect, since languages differ in their words, their constructions, and their sounds; it claims that the thing understood is common, and that a translation can therefore be faithful to it.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1, 16a5–8 (trans. E. M. Edghill, as quoted in Section I; checked against Edghill's text).` },

{ id: 'cicero',
  title: 'Cicero: as an orator, not as an interpreter',
  body: `<p>Anyone who has tried to translate knows that a version that follows the original word for word often sounds strange, and that a good translation must sometimes change the words in order to keep the sense. Cicero translated two Greek speeches, Demosthenes’ and Aeschines’ speeches on the crown, and he explained his method: <i>nec converti ut interpres, sed ut orator, sententiis isdem et earum formis tamquam figuris, verbis ad nostram consuetudinem aptis. In quibus non verbum pro verbo necesse habui reddere, sed genus omne verborum vimque servavi</i> (<i>De optimo genere oratorum</i> 14). That is, he did not translate as an interpreter but as an orator, keeping the same thoughts and their forms, which he calls their figures, in words suited to Latin usage; and he did not think it necessary to render word for word, but kept the whole character and force of the words.</p>
<p>Cicero distinguishes two ways of translating. The interpreter (<i>interpres</i>) renders word for word; the orator renders the thought and the style in the words that his own language uses. Cicero chose the second way because his purpose was to give Romans a model of Greek eloquence in Latin, and a word-for-word version would not have been eloquent Latin.</p>`,
  src: `Cicero, <i>De optimo genere oratorum</i> 14 (the Latin checked against the Latin Library and Perseus texts; the English in paraphrase; H. M. Hubbell, Loeb, for reference).`,
  qpTodo: `Cicero’s method: what does Cicero mean by translating “as an orator” rather than “as an interpreter,” and what does each kind of translator preserve.` },

{ id: 'jerome',
  title: 'Jerome: sense for sense',
  body: `<p>St. Jerome, who translated the Bible into Latin, defended his method in a letter to his friend Pammachius. He says that in translating from the Greek, except in the case of the Holy Scriptures, where even the order of the words is a mystery, he renders not word for word but sense for sense (<i>Epistula</i> 57.5), and he cites Cicero as his authority.</p>
<p>Jerome’s exception is important. For most texts he follows Cicero and renders the sense; for Scripture he holds that the words and even their order may carry meaning, so he keeps closer to the original. So the method of translation depends on the kind of text and the purpose of the translation: the more the exact words matter, the closer the translation must keep to them.</p>`,
  src: `Jerome, <i>Epistula</i> 57.5, in paraphrase (W. H. Fremantle, NPNF, for reference).` },

{ id: 'word-sense',
  title: 'Word for word and sense for sense',
  body: `<p>The difference between word-for-word and sense-for-sense translation can be seen in a single sentence. Latin <i>grātiās agō</i> means, word for word, “I do thanks,” but in sense, “I thank you.” The ablative absolute <i>urbe captā</i> means, word for word, “the city having been captured,” but English usually says “when the city had been captured” or “after the capture of the city.” <i>Carthāgō dēlenda est</i> is, word for word, “Carthage is to-be-destroyed,” but in sense, “Carthage must be destroyed.”</p>
<p>In each case the word-for-word version is either not English or not natural English, because the two languages express the same relation by different constructions, as we saw in Sections V and VII. A sense-for-sense translation finds the English construction that expresses the same relation. But the closer version still has a use: it shows the construction of the original, and so it serves the student of the language, as we saw with the close translations used in the analysis of passages.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.`,
  qpTodo: `Word for word and sense for sense: given a Latin expression (<i>grātiās agō</i>, <i>urbe captā</i>, <i>Carthāgō dēlenda est</i>), which English version is word for word and which sense for sense, and what does each preserve.` },

{ id: 'bruni',
  title: 'Bruni on the correct way to translate',
  body: `<p>In about 1424 the Florentine humanist Leonardo Bruni, who had translated Plato and Aristotle from Greek into Latin, wrote a short treatise, <i>De interpretatione recta</i> (“On the Correct Way to Translate”). He holds that the translator must know both languages thoroughly, not only their words but their idioms and figures, and that he must preserve the style of the original as well as its sense, so that an eloquent author remains eloquent in translation (<i>De interpretatione recta</i>).</p>
<p>Bruni criticized the medieval Latin translations of Aristotle, which rendered the Greek word for word, as faithful to the words but false to the author, because Aristotle wrote well and the translations did not. So Bruni joined Cicero’s method to a demand for knowledge: the translator who renders sense for sense must understand the original exactly, or he will render a sense that the author did not intend.</p>`,
  src: `Bruni, <i>De interpretatione recta</i> (trans. in Griffiths, Hankins, and Thompson, <i>The Humanism of Leonardo Bruni</i>, 1987, for reference), in paraphrase.` },

{ id: 'ascham',
  title: 'Ascham’s double translation',
  body: `<p>Roger Ascham, whom we met with imitation, made translation the center of his method of teaching Latin. In <i>The Scholemaster</i> (1570) he describes what he calls double translation: the student translates a passage of Cicero into English, puts the Latin away, and later translates his English back into Latin; then the teacher compares the student’s Latin with Cicero’s, and the student sees where his words and constructions differ from the author’s (<i>The Scholemaster</i>, Book I).</p>
<p>The exercise uses translation in both directions to teach composition. Translating into English requires the student to understand the Latin construction; translating back requires him to choose the Latin forms that express the English sense; and the comparison shows him the difference between his choices and those of a master. So double translation joins analysis, composition, and imitation in one exercise.</p>`,
  src: `Ascham, <i>The Scholemaster</i>, Book I, in paraphrase.` },

{ id: 'what-is-lost',
  title: 'What translation cannot carry over',
  body: `<p>Some things in a text cannot be carried over into another language. The meter of a Latin poem, which depends on the quantity of Latin syllables, cannot be reproduced in English, which measures verse by stress, as we saw in Section II. Figures that depend on sound, such as paronomasia and alliteration, are usually lost: “Thou art Peter, and upon this rock” keeps the sense of the Greek, but English “Peter” and “rock” do not sound alike as <i>Petros</i> and <i>petra</i> do. And synonyms, as we saw in Section III, differ in tone and association, which a translation may not match.</p>
<p>So every translation gives up something, and the translator must decide what matters most for the purpose. A translation of a law or a philosophical argument must keep the exact sense; a translation of a poem may keep the sense and seek an English rhythm of its own. The reader of a translation should know what has been given up, and the grammarian, who knows both languages, can say what it is.</p>`,
  src: `General, in paraphrase.` },

{ id: 'whorf',
  title: 'An objection: does language shape thought?',
  body: `<p>Languages mark different distinctions: English verbs mark tense, for example, whereas the verbs of some other languages do not. In the twentieth century some linguists argued from such differences that translation is less possible than the classical account supposes. The American linguists Edward Sapir and Benjamin Lee Whorf held that the grammar of a language shapes the way its speakers perceive and think about the world, so that speakers of very different languages think in different ways. This view is often called the <strong>Sapir–Whorf hypothesis</strong>. Whorf argued, for example, that the Hopi language, which does not mark tense as English does, gives its speakers a different conception of time.</p>
<p>If the strong form of this view were true, translation between very different languages would be impossible, because the concepts themselves would differ. Whorf’s account of Hopi has since been widely disputed, notably by Ekkehart Malotki, who found that Hopi has many expressions for time, and most linguists now accept only a weak form of the hypothesis: that a language makes some distinctions easier or more habitual to express than others, without preventing its speakers from understanding distinctions that their language does not mark.</p>`,
  src: `Whorf, <i>Language, Thought, and Reality</i> (1956); Ekkehart Malotki, <i>Hopi Time</i> (1983); both in paraphrase.` },

{ id: 'quine',
  title: 'An objection: the indeterminacy of translation',
  body: `<p>Suppose a linguist is trying to translate a wholly unknown language. When a rabbit runs by and a speaker says “Gavagai,” the linguist may translate it as “rabbit”; but the evidence seems equally consistent with “undetached rabbit part” or “rabbit-stage.” The American philosopher W. V. O. Quine, in <i>Word and Object</i> (1960), used this example to raise a different objection. He argued that no further evidence of behavior could settle which translation is right, and he concluded that translation is <strong>indeterminate</strong>, that is, there is no fact of the matter about which translation is correct (<i>Word and Object</i>, ch. 2).</p>
<p>Quine’s argument depends on his view that meaning is nothing beyond the observable behavior of speakers. If meanings are only patterns of behavior, then whatever the behavior leaves open, the meaning leaves open as well. The objection therefore does not concern the difficulty of translation, which everyone admits, but the existence of a common meaning to be translated.</p>`,
  src: `Quine, <i>Word and Object</i> (1960), ch. 2, in paraphrase.` },

{ id: 'answer',
  title: 'The classical answer',
  body: `<p>The classical account answers both objections from the doctrine of signification that we studied in Section I. Words signify things by means of concepts, and the concepts are likenesses of the things; so the meaning of a word is not only a pattern of behavior, as Quine supposed, nor a creation of the grammar of each language, as the strong form of the Sapir–Whorf hypothesis supposed. The rabbit is one animal, and the concept of it is one, whatever words different peoples have imposed.</p>
<p>This answer does not deny what the objections rightly observe: that languages divide and mark things differently, and that a translator can be uncertain what a word means. It holds that such uncertainty is overcome, as it is in fact overcome by every child who learns a language and by every translator who learns a foreign one, by attending to the things that are spoken about and to the use of the words in many sentences. So translation is difficult and always imperfect in some respects, but it is possible, because what is understood is common to all.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1; St. Thomas, <i>In Peri hermeneias</i> I, lect. 2; both in paraphrase.`,
  qpTodo: `The objections and the answer: what do the Sapir–Whorf hypothesis and Quine’s indeterminacy each claim about translation, and how does the classical account of signification answer them.` },

{ id: 'grammar-exercise',
  title: 'Translation as an exercise of grammar',
  body: `<p>Translation draws on every part of the grammar we have studied. The translator must parse and construe the original, as in the analysis of sentences; recognize its figures and tropes; know the signification of its words and the differences among synonyms; and then compose in the other language, choosing the constructions that express the same relations. So translation is both a test of understanding and an exercise in composition.</p>
<p>This is why the tradition, from Cicero’s translations of Demosthenes to Ascham’s double translation, used translation to teach both the foreign language and one’s own. A student who translates a sentence of Latin into good English has understood the Latin and has written English, and in comparing the two he learns what each language can do.</p>`,
  src: `Ascham, <i>The Scholemaster</i>; Quintilian, <i>Institutio oratoria</i> X.5, in paraphrase.`,
  qpTodo: `Translation and grammar: which parts of grammar does a translator use at each step (parsing and construing the original, recognizing its figures, choosing the constructions of the other language).` }

  ]
};
