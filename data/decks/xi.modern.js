/* XI.2 Universal Grammar and Modern Linguistics [xi.modern]
   Plan (ITEM-LIST.md): 45 panels, 15 question points (placeholders: qpTodo; to be written). No exercise.
   Live material drawn on: DECKS.traditions (Three Ways of Studying Language, whole: three ways, the humanists, what
   philology gained, Saussure, what the modists granted, langue as habit, John of St. Thomas on the signified, what a
   closed system loses, where this leaves the student); DECKS.typo (typology); DECKS.ug (two universal grammars; what
   each century had and lacked); DECKS.objections (Ockham and Aurifaber; why languages differ). The chimaera is in III.2
   and the gender objection in III.6. All modern authors are paraphrased; the one exact quotation is Chomsky's example
   sentence. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['xi.modern'] = {
  id: 'xi.modern',
  title: 'Universal Grammar and Modern Linguistics',
  sub: 'From Port-Royal to the present: universal grammar, typology, and functional grammar',
  sources: `Arnauld and Lancelot, <i>Grammaire générale et raisonnée</i> (1660); Saussure, <i>Cours de linguistique générale</i> (1916); Bloomfield, <i>Language</i> (1933); Chomsky, <i>Syntactic Structures</i> (1957), <i>Aspects of the Theory of Syntax</i> (1965), <i>Cartesian Linguistics</i> (1966); Tesnière, <i>Éléments de syntaxe structurale</i> (1959); Greenberg (1963); Comrie, <i>Language Universals and Linguistic Typology</i>; Dik, <i>The Theory of Functional Grammar</i>; Halliday, <i>An Introduction to Functional Grammar</i>; Austin, <i>How to Do Things with Words</i> (1962); Searle, <i>Speech Acts</i> (1969).`,
  panels: [

/* ---------- Three ways, and the history after the modists (8) ---------- */

{ id: 'three-ways',
  title: 'Three ways of studying language',
  body: `<p>A single line of Virgil can be studied in more than one way. We may ask why its words have the forms and constructions they have, or what Virgil actually wrote and how his Latin came to be what it was, or how the line works as part of the system of the Latin language. Since the late Middle Ages, language has been studied in these three principal ways. The <strong>classical art</strong>, Priscian’s grammar with the reasons that the medieval masters added, asks why grammar is as it is, and answers from the modes of signifying. <strong>Philology</strong> asks what an author actually wrote and how his language came to be what it was. <strong>Modern linguistics</strong>, since the early twentieth century, asks how a language works as a system and what is common to all languages, and it sets the other two questions aside by design.</p>
<p>These are not three answers to one question but three questions. Boethius of Dacia, asking whether grammar is one science, grants that sciences may differ in their manner of knowing even when they concern the same object (<i>Modi significandi</i>, q. 2). So the student of the classical art need not treat the philologist or the linguist as a rival, but can ask what each way of knowing reaches and what it leaves aside.</p>`,
  src: `Boethius of Dacia, <i>Modi significandi</i> (no complete published English translation), in paraphrase.` },

{ id: 'ockham',
  title: 'Ockham and the end of speculative grammar',
  body: `<p>We saw in Section III that the modists held that the mode of signifying is a real property of the word, given to it when it is imposed. In the fourteenth century William of Ockham answered that this is only a manner of speaking: different words simply signify in different ways, and there is no further property in the word. John Aurifaber pressed the point further, arguing that signifying belongs to the intellect, and that the spoken word is only that by which the intellect signifies.</p>
<p>If these critics are right, a science of the modes in the word loses its subject, but the art of grammar does not. Ockham grants, as Priscian does, that words are imposed to signify what the mind understands, and that nouns and verbs signify in different ways; what is disputed is where the modists placed the mode. So this course has used the modists’ explanations where they explain, without resting the art on their thesis about the word.</p>`,
  src: `Ockham, <i>Summa logicae</i> I; John Aurifaber, <i>Determinatio de modis significandi</i>; both in paraphrase.` },

{ id: 'humanists',
  title: 'The humanists and the modists',
  body: `<p>Speculative grammar was not so much refuted as abandoned. The humanists of the fifteenth and sixteenth centuries, who sought to write Latin like Cicero, found the modists’ Latin barbarous and their questions useless, and they returned to the grammar of usage and of the classical authors. G. L. Bursill-Hall observes that the division was already forming in the thirteenth century, between the speculative grammar of Paris and the practical grammar of the schools of southern Europe, which taught Latin for law and letters.</p>
<p>So the question that the modists had asked, why the parts of speech and the accidents are what they are, ceased to be asked in the schools for several centuries. The grammars of the Renaissance, such as Linacre’s, which we saw in Section V, returned to Priscian and the authors, and the question of reasons returned only with the general grammars of the seventeenth century.</p>`,
  src: `Bursill-Hall, introduction to Thomas of Erfurt, <i>Grammatica speculativa</i> (1972), in paraphrase.` },

{ id: 'general-grammars',
  title: 'The general grammars',
  body: `<p>We saw in Section VIII that the Port-Royal <i>Grammaire générale et raisonnée</i> (1660) founded grammar on the operations of the mind and analyzed the sentence as the expression of a judgment. Its title gave a name to a kind of work: the <strong>general grammar</strong>, which sought the principles common to all languages. In England, James Harris published <i>Hermes, or a Philosophical Inquiry concerning Universal Grammar</i> (1751), and in France, Nicolas Beauzée published a <i>Grammaire générale</i> (1767).</p>
<p>The general grammarians asked again the question of the modists, but they answered it from the mind rather than from the modes of being: the parts of speech correspond to the operations of the mind, conceiving, judging, and reasoning. So the idea of a universal grammar survived the end of speculative grammar, in a new form that looks forward to Chomsky’s.</p>`,
  src: `Arnauld and Lancelot, <i>Grammaire générale</i> (1660); James Harris, <i>Hermes</i> (1751); Beauzée, <i>Grammaire générale</i> (1767); all in paraphrase.` },

{ id: 'jones',
  title: 'The discovery of Sanskrit',
  body: `<p>English “mother,” Latin <i>māter</i>, Greek <i>mētēr</i>, and Sanskrit <i>mātṛ</i> are plainly alike, and such likenesses run through many words of many languages. In 1786 Sir William Jones, a British judge in Calcutta who had learned Sanskrit, told the Asiatic Society of Bengal that Sanskrit bears to Greek and Latin a stronger likeness, both in the roots of its verbs and in its grammatical forms, than could have come about by chance, so that a scholar who examined all three would conclude that they had sprung from some common source, which perhaps no longer exists (“Third Anniversary Discourse”).</p>
<p>This observation began the study of the history and relations of languages. Philologists came to see that Latin, Greek, Sanskrit, and the Germanic, Celtic, and Slavic languages descend from a common parent language, now called Proto-Indo-European, which was never written. We saw in Section IV that comparative etymology explains English “father” and Latin <i>pater</i> as cognates; that explanation rests on the discovery that Jones announced.</p>`,
  src: `Sir William Jones, “Third Anniversary Discourse” (1786), in paraphrase.`,
  qpTodo: `The discovery of Sanskrit: what did Jones observe about Sanskrit, Greek, and Latin, and what did his observation begin.` },

{ id: 'comparative',
  title: 'Comparative and historical grammar',
  body: `<p>In the nineteenth century comparative grammar became the principal form of the study of language. Franz Bopp compared the conjugation of the verb in Sanskrit, Greek, Latin, Persian, and the Germanic languages (1816); Jacob Grimm described the regular changes of consonants in the Germanic languages (1822), which we saw in Section IV; and later in the century the scholars called the Neogrammarians held that sound changes operate without exception, so that every apparent exception must have its own explanation.</p>
<p>So the nineteenth century discovered a fact that the modists had no obvious place for: languages have histories, and they change according to regular laws. Latin was not a fixed system outside time but a stage between an older language and the Romance languages that descended from it. A grammar derived from unchanging modes of being does not plainly predict that a language should change at all.</p>`,
  src: `General history of linguistics, in paraphrase.` },

{ id: 'boethius-change',
  title: 'Can there be a science of what changes?',
  body: `<p>The modists had foreseen part of this difficulty. Boethius of Dacia, arguing that grammar is a science, considered the objection that a science must be of what is necessary and unchanging. He answered that there is a true science of things that come to be and pass away, through the causes that always accompany them; otherwise there would be a science only of things that never change (<i>Modi significandi</i>, q. 4).</p>
<p>So the classical account can admit that languages change, as long as the change follows causes that can be known. The modes of signifying would then be the constant part, and the sounds and forms that change would be the accidents. Whether this answer reaches far enough to account for the whole history of the Indo-European languages is a fair question, and it is one of the points at which the classical art and modern linguistics meet.</p>`,
  src: `Boethius of Dacia, <i>Modi significandi</i>, in paraphrase.` },

{ id: 'humboldt',
  title: 'Humboldt and the types of language',
  body: `<p>Languages differ not only in their words but in the way they build their words, and the differences are large enough to suggest that each language has its own character. Wilhelm von Humboldt (1767–1835), a Prussian statesman and scholar who studied languages from Basque to Kawi, held that a language is not a finished product (<i>ergon</i>) but an activity (<i>energeia</i>), and that each language has an “inner form,” a characteristic way of shaping thought. He and the brothers August and Friedrich Schlegel classified languages by how they build words: <strong>isolating</strong> languages, such as Chinese, in which words do not change their form; <strong>agglutinating</strong> languages, such as Turkish, in which each meaning is added as a separate piece; and <strong>inflecting</strong> languages, such as Latin, in which one ending carries several meanings at once.</p>
<p>Humboldt’s view that each language shapes the thought of its speakers led, by way of later scholars, to the Sapir–Whorf hypothesis that we considered in Section X. His classification of languages by their structure was the beginning of linguistic typology, the comparison of languages by their structure, which modern linguists continue.</p>`,
  src: `Wilhelm von Humboldt, <i>Über die Verschiedenheit des menschlichen Sprachbaues</i> (1836), in paraphrase.` },

/* ---------- Structural linguistics (8) ---------- */

{ id: 'saussure',
  title: 'Saussure: langue and parole',
  body: `<p>When someone says “The sailor waits,” two things are involved: a particular act of speaking, and the English language that makes the act possible. The Swiss linguist Ferdinand de Saussure (1857–1913) is usually counted the founder of modern linguistics. His <i>Cours de linguistique générale</i> (“Course in General Linguistics”), published from his students’ notes in 1916, distinguishes <i>langue</i>, the system of a language shared by its speakers, from <i>parole</i>, the particular acts of speaking in which the system is used. No single speaker invents or controls the <i>langue</i>; each speaker draws on it. Saussure held that linguistics should take the <i>langue</i> as its object (<i>Cours</i>, Introduction).</p>
<p>So in the sentence “The sailor waits,” spoken by a particular person at a particular time, the act of speaking is <i>parole</i>, and the English words, forms, and rules that make it possible are <i>langue</i>. The grammarian of the classical art studied the language of the authors, which is neither simply the one nor the other, but the best usage within the <i>langue</i>.</p>`,
  src: `Saussure, <i>Cours de linguistique générale</i> (trans. Wade Baskin, 1959, for reference), in paraphrase.`,
  qpTodo: `Langue and parole: in a given example, what is the <i>langue</i> and what is the <i>parole</i>, and which did Saussure make the object of linguistics.` },

{ id: 'signifier',
  title: 'The sign: signifier and signified',
  body: `<p>Nothing in the sound of English “tree” or Latin <i>arbor</i> fits it to a tree, and different languages use different words for the same thing. Saussure describes the linguistic sign as the union of a <strong>signifier</strong> (<i>signifiant</i>), a sound-image, and a <strong>signified</strong> (<i>signifié</i>), a concept. The sign does not join a name to a thing but a sound-image to a concept. And the bond between them is <strong>arbitrary</strong>: nothing in the sound of English “tree” or Latin <i>arbor</i> fits it to the concept of a tree, as the existence of different words in different languages shows (<i>Cours</i>, Part I, ch. 1).</p>
<p>The classical tradition agrees with much of this. We saw in Section I that words signify by imposition, not by nature, and that they signify things by means of concepts. Boethius of Dacia explained the existence of many languages by the arbitrariness of imposition: the words differ because they are imposed, whereas the modes of signifying are alike because they follow the things. The difference between Saussure and the tradition lies in what follows the concept.</p>`,
  src: `Saussure, <i>Cours</i>, Part I, ch. 1, in paraphrase.`,
  qpTodo: `Signifier and signified: what does Saussure mean by the signifier and the signified, what does he mean by calling the sign arbitrary, and where does the classical doctrine of imposition agree.` },

{ id: 'synchronic',
  title: 'Synchronic and diachronic',
  body: `<p>English can be studied as it is spoken today, or as it has changed from the English of Chaucer to our own. Saussure distinguished these two ways of studying a language. A <strong>synchronic</strong> study describes a language as a system at one time, as English is spoken today or Latin was written in the age of Cicero. A <strong>diachronic</strong> study describes how a language changes through time, as Latin became French and Italian. He held that the two must be kept apart, and that the system of a language at a given moment can be described without reference to its history.</p>
<p>The nineteenth-century philologists had studied languages chiefly diachronically. Saussure’s distinction made the synchronic description of a language the principal task of linguistics. The classical grammarian had done something similar, describing the Latin of the authors as a system; but he also drew on its history, through the criterion of antiquity and through etymology, as we saw in the Preliminary section and in Section IV.</p>`,
  src: `Saussure, <i>Cours</i>, Part I, ch. 3, in paraphrase.` },

{ id: 'value',
  title: 'Value and difference',
  body: `<p>English has two words, “sheep” for the animal and “mutton” for the meat, whereas French uses <i>mouton</i> for both. So English “sheep” and French <i>mouton</i> may refer to the same animal, but they do not cover the same ground. From such facts Saussure drew his most radical claim, that the value of a sign comes not from what it refers to but from its place among the other signs of the system, that is, from its differences from them; “sheep” and <i>mouton</i> are his example (<i>Cours</i>, Part II, ch. 4).</p>
<p>The same principle applies to sounds. We saw in Section II that English speakers distinguish “thin” from “tin” because the difference between the two sounds changes the word; the sounds have their value in English by contrast with each other. The modern study of such contrasts is phonology, which Saussure’s principle made possible, and it is one of the real discoveries of modern linguistics.</p>`,
  src: `Saussure, <i>Cours</i>, Part II, ch. 4, in paraphrase.` },

{ id: 'relations',
  title: 'Two kinds of relation',
  body: `<p>In “the old sailor waits,” each word is related to the words beside it, and also to the words that could stand in its place. Saussure distinguished these two kinds of relation among the elements of a language. <strong>Syntagmatic</strong> relations hold between elements that occur together in a sequence: in “the old sailor waits,” “old” is related to “sailor” and “sailor” to “waits.” <strong>Associative</strong> relations, later called <strong>paradigmatic</strong>, hold between an element and others that could take its place: “sailor” is related to “captain,” “fisherman,” and “boy,” any of which could stand in the same position.</p>
<p>The classical art knew both relations, though it did not name them so. Construction, which we studied in Section V, concerns the relations of words that occur together; the paradigms of declension and conjugation, which we studied in Section III, set out the forms that can take one another’s place. So Saussure’s distinction gives general names to the two dimensions that every grammar has always described.</p>`,
  src: `Saussure, <i>Cours</i>, Part II, ch. 5, in paraphrase.` },

{ id: 'habit',
  title: 'A reply: langue as a habit',
  body: `<p>The classical tradition can accept Saussure’s distinction between <i>langue</i> and <i>parole</i>, because it has a place ready for it: the distinction between a <strong>habit</strong> and an <strong>act</strong>. A habit (<i>habitus</i>) is a settled disposition of a power, really present in the one who has it, from which particular acts proceed. Boethius of Dacia calls a science a habit of the intellect, and a language known by its speakers is such a disposition. <i>Parole</i> is the act; <i>langue</i> is the habit from which it proceeds.</p>
<p>The philosopher John Deely observes that a shared language carries the habits of a people, its customs and its experience, and that this is why the words of a common language resonate in one speaker’s mind in ways they may not in another’s. A Thomist adds that a habit is always the habit of someone and is ordered to something. So the <i>langue</i> is not a third thing between minds and the world but a disposition in minds, and the disposition has objects: the things that the language is used to speak about.</p>`,
  src: `Boethius of Dacia, <i>Modi significandi</i>; John Deely, <i>Basics of Semiotics</i>; both in paraphrase.` },

{ id: 'poinsot',
  title: 'A reply: the concept is not the end of signification',
  body: `<p>When we think of a horse, it is the horse that we think of, not our idea of it. We saw in Section I that smoke or a spoken word must first be known as an object before it leads the mind to something else, and is therefore an <strong>instrumental sign</strong>, whereas the concept leads the mind to its object without first being known as an object itself, and is therefore a <strong>formal sign</strong>. The concept is that by which we know, not that which we know. Saussure makes the signified a concept and stops there. The classical reply rests on this doctrine of signs, which comes from John of St. Thomas (John Poinsot) (<i>Tractatus de signis</i>).</p>
<p>If the concept is a formal sign, then signification cannot end in the concept, because a formal sign consists entirely in leading to something else. Saussure’s account treats the concept as the end point of signification; the classical account holds that through the concept the word signifies the thing. This is the central point at which the two accounts differ, and it concerns not the facts of language but what signification is.</p>`,
  src: `John of St. Thomas, <i>Tractatus de signis</i> (trans. John Deely, 1985, for reference), in paraphrase.`,
  qpTodo: `Instrumental and formal signs: why is the concept a formal sign, and why does the classical account hold that signification does not end in the concept, as Saussure’s account does.` },

{ id: 'bloomfield',
  title: 'Bloomfield and American structuralism',
  body: `<p>A linguist who describes a language that has never been written must begin from what can be heard. In the United States, Leonard Bloomfield’s <i>Language</i> (1933) set the method of linguistics for a generation. Bloomfield sought to describe languages, many of them American Indian languages never before written, by strict procedures based on the observable forms of speech. Because meaning could not be observed in the same way, he and his followers set it aside as far as possible and described each language by the distribution of its sounds and forms.</p>
<p>Bloomfield also analyzed sentences into their <strong>immediate constituents</strong>, dividing “The old sailor waits” first into “the old sailor” and “waits,” and then each part into its parts. This analysis by constituents resembles the classical division of the sentence into subject and predicate, and the diagram of Reed and Kellogg; but it was made without appeal to meaning, whereas the classical analysis rests on signification throughout.</p>`,
  src: `Bloomfield, <i>Language</i> (1933), in paraphrase.` },

/* ---------- Generative grammar (8) ---------- */

{ id: 'syntactic-structures',
  title: 'Chomsky: a grammar that generates',
  body: `<p>A speaker of English knows at once that “The sailor waits” is an English sentence and that “Waits sailor the” is not, though no one taught a rule that decides it. In <i>Syntactic Structures</i> (1957) Noam Chomsky proposed that a grammar of a language should be a set of rules that generates all the grammatical sentences of the language and none of the ungrammatical ones. Such a grammar is called <strong>generative</strong>. Chomsky argued that a speaker’s knowledge of grammar is independent of meaning, and gave the example “Colorless green ideas sleep furiously,” which is grammatical though it makes no sense, whereas “Furiously sleep ideas green colorless” is not grammatical (<i>Syntactic Structures</i>, ch. 2).</p>
<p>We saw in Section V that the classical grammarians distinguished congruity from truth: “The chimaera runs” is congruous, though false. Chomsky’s example makes a similar point, that grammatical correctness is distinct from sense. But the modists would add that “Colorless green ideas” is congruous because its words fit one another by their modes of signifying, which are themselves taken from meaning; so for them grammar is never wholly independent of signification.</p>`,
  src: `Chomsky, <i>Syntactic Structures</i> (1957), ch. 2; the example sentence quoted.`,
  qpTodo: `Grammatical and meaningful: why is “Colorless green ideas sleep furiously” grammatical but meaningless, and how does this compare with the classical distinction between congruity and truth.` },

{ id: 'phrase-structure',
  title: 'Phrase-structure rules',
  body: `<p>We can divide “The sailor sees the king” into “the sailor” and “sees the king,” and then divide each part again. A generative grammar does this by rules that divide the sentence into its constituents, called <strong>phrase-structure rules</strong>. The first rule may state that a sentence (S) consists of a noun phrase (NP) and a verb phrase (VP): S → NP VP. Further rules divide each phrase: NP → Det N (a determiner and a noun, as “the sailor”), VP → V NP (a verb and a noun phrase, as “sees the king”). The result can be drawn as a tree, with the sentence at the top and the words at the bottom.</p>
<p>The phrase-structure tree groups words into phrases, as Bloomfield’s immediate constituents do, whereas the dependency diagram of Thomas and Tesnière, which we studied in Section V, joins each word to the word on which it depends. The two kinds of analysis describe the same sentence in different ways, and modern linguists continue to debate which is more fundamental.</p>`,
  src: `Chomsky, <i>Syntactic Structures</i>, ch. 4, in paraphrase.` },

{ id: 'transformations',
  title: 'Transformations',
  body: `<p>The active “The boy broke the window” and the passive “The window was broken by the boy” express the same relations of doer and thing done in two forms. Chomsky proposed rules called <strong>transformations</strong>, which relate one structure to another; a transformation derives the one form from the other. Questions, such as “Did the boy break the window?”, and negations were also derived by transformations from simpler structures.</p>
<p>The classical grammarians had observed the same relations without this apparatus. We saw in Section III that the active and passive describe the same event with different subjects, and in Section VIII that the Port-Royal grammarians analyzed one sentence as a combination of simpler judgments. Chomsky’s transformations gave such observations a precise and general form.</p>`,
  src: `Chomsky, <i>Syntactic Structures</i>, ch. 5–7, in paraphrase.` },

{ id: 'competence',
  title: 'Competence and performance; deep and surface',
  body: `<p>A speaker who stumbles over a sentence, or forgets how it began, has not thereby forgotten the language. In <i>Aspects of the Theory of Syntax</i> (1965) Chomsky distinguished a speaker’s <strong>competence</strong>, the knowledge of the language, from his <strong>performance</strong>, the actual use of that knowledge in speaking, which is affected by memory, attention, and error. The distinction resembles Saussure’s between <i>langue</i> and <i>parole</i>, but Chomsky’s competence belongs to the individual mind, whereas Saussure’s <i>langue</i> belongs to the community.</p>
<p>He also distinguished the <strong>deep structure</strong> of a sentence, which represents its relations of meaning, from its <strong>surface structure</strong>, the form in which it is spoken. “John is easy to please” and “John is eager to please” have the same surface form but different deep structures, because in the first John is the one pleased and in the second John is the one who pleases. The classical analysis of the sentence by its dependences and its sense, which we practiced in Section IX, distinguishes such sentences in the same way.</p>`,
  src: `Chomsky, <i>Aspects of the Theory of Syntax</i> (1965), ch. 1, in paraphrase.` },

{ id: 'innateness',
  title: 'Universal grammar as innate',
  body: `<p>We saw in Section VIII that Chomsky’s universal grammar is a theory of the mind. He argued that children learn their native language quickly, from limited and imperfect evidence, and arrive at knowledge of rules that no one taught them. The evidence a child hears is too poor, he argued, to account for what the child comes to know, and so the structure common to all languages must be part of the human mind from birth. This argument is called the argument from the <strong>poverty of the stimulus</strong>.</p>
<p>The argument has been much debated. Some linguists hold that children learn more from what they hear than Chomsky supposed, and that general powers of learning suffice. The classical tradition would ask a different question: not only what the mind must contain to learn a language, but why the categories of language are these, which it answers from the modes of understanding and of being.</p>`,
  src: `Chomsky, <i>Aspects</i>, ch. 1; <i>Cartesian Linguistics</i>; both in paraphrase.` },

{ id: 'parameters',
  title: 'Principles and parameters',
  body: `<p>In English the verb comes before its object (“reads the book”) and the preposition before its noun (“in the house”); in Japanese both come after. In the 1980s Chomsky proposed that universal grammar consists of <strong>principles</strong>, which hold for every language, and <strong>parameters</strong>, which have a small number of possible settings, fixed differently in different languages. One proposed parameter concerns the position of the head of a phrase, the word on which the others depend: in English the verb comes before its object and the preposition before its noun, whereas in Japanese the verb comes after its object and the postposition after its noun.</p>
<p>This proposal connects generative grammar with the typology that we saw in Section V: Greenberg’s observation that the order of verb and object goes together with the order of preposition and noun can be explained as the setting of one parameter. It also resembles Roger Bacon’s claim that grammar is one in substance and differs in accidents, with the principles in the place of the substance and the parameters in the place of the accidents.</p>`,
  src: `Chomsky, <i>Lectures on Government and Binding</i> (1981), in paraphrase.`,
  qpTodo: `Principles and parameters: what is a parameter, how does the head parameter explain the difference between English and Japanese order, and how does the proposal compare with Bacon’s substance and accidents.` },

{ id: 'minimalism',
  title: 'The minimalist program',
  body: `<p>Every phrase can be built by joining two pieces at a time: “the” and “sailor” make “the sailor,” and that phrase and “waits” make a sentence. Since the 1990s Chomsky has pursued what he calls the <strong>minimalist program</strong>, which seeks to reduce universal grammar to as few operations as possible. Its central operation is <strong>Merge</strong>, which takes two elements and combines them into one: “the” and “sailor” into “the sailor,” and “waits” and “the sailor” into “the sailor waits.” Repeated Merge builds every structure of every language.</p>
<p>The idea that a sentence is built by joining two elements at a time recalls Thomas of Erfurt’s doctrine, which we studied in Section V, that every construction joins two words, one depending and one terminating, and that a sentence contains as many constructions as it has dependences. The modern and the medieval accounts arrive, by different routes, at the binary construction as the basic unit of syntax.</p>`,
  src: `Chomsky, <i>The Minimalist Program</i> (1995), in paraphrase.` },

{ id: 'generative-classical',
  title: 'Generative grammar and the classical art',
  body: `<p>Generative grammar and the classical art agree that there is a grammar common to all languages, that a science of it is possible, and that the sentence is built by regular relations among its parts. They differ in what they take grammar to be about. Generative grammar studies the form of sentences, largely apart from their meaning, and grounds universal grammar in the biology of the human mind. The classical art studies sentences as signs, whose forms follow their modes of signifying, and grounds the common grammar in the things that all minds understand.</p>
<p>So the two universal grammars, as we saw in Section VIII, answer different questions. Generative grammar asks what the mind must contain to acquire any language; the classical art asks why the categories of language are what they are. The student who knows both can see that each reaches something the other leaves aside.</p>`,
  src: `General comparison, in paraphrase.` },

/* ---------- Dependency grammar (3) ---------- */

{ id: 'tesniere',
  title: 'Dependency grammar as heir of the modists',
  body: `<p>We studied Tesnière’s <i>Éléments de syntaxe structurale</i> (1959) in Section V, where we saw that he describes the sentence as a set of words depending on words, drawn as a tree (<i>stemma</i>), and that he measures the number of words a verb requires by its valency. His dependency grammar is the modern heir of the medieval doctrine of the dependent and the terminant, though Tesnière did not draw on the modists directly.</p>
<p>Tesnière also introduced the idea of <strong>translation</strong> (in his technical sense), by which a word or phrase of one category is made to function as another: in “the book of Peter,” the preposition “of” translates the noun “Peter” into the function of an adjective. We saw in Section V that a phrase or clause can be used as a single part of speech; Tesnière’s translation gives this observation a general name and a place in the analysis.</p>`,
  src: `Tesnière, <i>Éléments de syntaxe structurale</i> (1959), Books A and C, in paraphrase.` },

{ id: 'dependency-today',
  title: 'Dependency grammar today',
  body: `<p>Dependency grammar has become widely used, especially in the computer analysis of language, because it describes the relations among words directly and works well for languages with free word order, such as Latin and Czech. An international project called Universal Dependencies has annotated sentences in more than a hundred languages with the same set of dependency relations, so that their constructions can be compared.</p>
<p>In these modern systems, as in Tesnière, the verb is usually the root of the sentence, and the subject and objects depend on it. We saw in Section V that Thomas of Erfurt draws the dependence the other way, with the verb depending on its subject and object. The difference shows that the direction of a dependence is a question of theory: the modern systems follow the verb’s central place in the sentence; Thomas follows the verb’s mode of signifying, which requires a subject.</p>`,
  src: `Universal Dependencies project documentation; Tesnière; both in paraphrase.` },

{ id: 'dependency-compare',
  title: 'Thomas and Tesnière compared',
  body: `<p>Thomas and Tesnière agree on most dependences: the adjective on its noun, the adverb on its verb, the article on its noun, and the object in a relation to its verb. They agree that every construction joins two words and that the sentence is a structure of such joinings. They differ chiefly on the relation of the verb to its subject, and on the reason for the dependences.</p>
<p>For Thomas, a word depends on another because its mode of signifying requires what the other supplies; the reason lies in signification. For Tesnière, a word depends on another because of its place in the structure of the sentence; the reason lies in the structure itself. So the modern dependency grammar describes the same relations that the modists described, but it does not ask the modists’ question why the relations hold.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Tesnière, <i>Éléments</i>; both in paraphrase.`,
  qpTodo: `Thomas and Tesnière: on which dependences do they agree, on which do they differ, and where does each find the reason for a dependence.` },

/* ---------- Typology and universals (6) ---------- */

{ id: 'universals',
  title: 'Greenberg’s universals',
  body: `<p>We saw in Section V that Joseph Greenberg classified languages by the order of subject, verb, and object, and found that other facts of order go together with it. Many of his universals are <strong>implicational</strong>: they state that if a language has one property, it has another. So languages whose usual order is verb, subject, object always have prepositions; and languages with the order subject, object, verb usually have postpositions (Greenberg, Universals 3 and 4).</p>
<p>Such universals do not say that every language has a given property; they say how properties are related. This is a different kind of universal from those of the general grammarians, who sought properties present in every language, such as the distinction of noun and verb. Typology, the comparison of languages by their structure, has shown that implicational universals are far more common than absolute ones.</p>`,
  src: `Greenberg, “Some Universals of Grammar” (1963), in paraphrase.`,
  qpTodo: `Implicational universals: what does an implicational universal state (if VSO, then prepositions), and how does it differ from a universal present in every language.` },

{ id: 'morphological-types',
  title: 'How languages build their words',
  body: `<p>Modern typology refines the classification that began with Humboldt and the Schlegels. An <strong>isolating</strong> language, such as Chinese, has words that do not change their form, so that its relations are shown by order and by particles, as we saw in the study of the Chinese tradition. An <strong>agglutinating</strong> language, such as Turkish, adds a separate piece for each meaning: <i>ev</i> (“house”), <i>ev-ler</i> (“houses”), <i>ev-ler-den</i> (“from the houses”). A <strong>fusional</strong> language, such as Latin, joins several meanings in one ending: the <i>-ō</i> of <i>amō</i> marks first person, singular, present, indicative, and active at once. A <strong>polysynthetic</strong> language, such as some languages of the Inuit, can express in one long word what English expresses in a sentence.</p>
<p>These are tendencies, not boxes. English is now largely isolating, but it keeps some fusional forms such as “sees” and “went”; Latin is fusional, but it uses separate words in <i>ad urbem</i>. So the types describe how much each language does by endings and how it combines them.</p>`,
  src: `Comrie, <i>Language Universals and Linguistic Typology</i>, ch. 2, in paraphrase.`,
  qpTodo: `Morphological types: is a given form isolating, agglutinating, or fusional (Turkish <i>ev-ler-den</i>; Latin <i>amō</i>; Chinese 來), and what does each type do with the meanings of a word.` },

{ id: 'alignment',
  title: 'Case, order, and alignment',
  body: `<p>Languages differ in how they mark the subject and the object. Latin marks the subject of every verb in the nominative and the object in the accusative: <i>puer currit</i> (“the boy runs”), <i>puer puellam videt</i> (“the boy sees the girl”). Some languages, such as Basque and, according to modern scholars, Sumerian, mark the subject of a transitive verb with a special ending but treat the subject of an intransitive verb like the object of a transitive one. Such languages are called <strong>ergative</strong>.</p>
<p>The ergative pattern shows that the grouping of subject against object, which seems natural to a speaker of Latin or English, is one possibility among others. The relations of doer, thing done, and the one who undergoes are present in every language, as Pāṇini’s kārakas and the Latin cases both show; but languages group them differently in their endings. So the facts of construction are common, whereas their marking varies.</p>`,
  src: `Comrie, <i>Language Universals and Linguistic Typology</i>, ch. 6, in paraphrase.` },

{ id: 'comrie',
  title: 'Absolute and statistical universals',
  body: `<p>Every known language has vowels, but not every language whose verb comes last has postpositions, although most do. Bernard Comrie, in <i>Language Universals and Linguistic Typology</i>, distinguishes universals that hold without exception from those that hold for most languages. An <strong>absolute</strong> universal holds for every known language; few such universals have been found, and they are often very general, such as that every language has vowels. A <strong>statistical</strong> universal holds for most languages, as the tendency of SOV languages to have postpositions does.</p>
<p>Comrie also stresses that a universal can be tested only on a sample of languages chosen from many families and regions, because languages that are related or neighbors share properties by inheritance or by contact. So the modern search for universals is a careful comparison of many languages, and its results are often tendencies rather than laws. This is a caution for any universal grammar, classical or modern.</p>`,
  src: `Comrie, <i>Language Universals and Linguistic Typology</i>, ch. 1, in paraphrase.` },

{ id: 'categories',
  title: 'Categories that some languages have',
  body: `<p>Typology has also found grammatical categories that the classical grammarians never met. Some languages mark on the verb how the speaker knows what he says, whether by seeing it, by hearing of it, or by inference; such marks are called <strong>evidentials</strong>, and they are found in Turkish, Quechua, and many other languages. Chinese and many languages of East Asia use <strong>classifiers</strong> when counting: Chinese says 三本書 (<i>sān běn shū</i>, “three [volume-shaped] books”), where 本 is a classifier for bound books.</p>
<p>We saw that Arabic and Greek have a dual number, which Latin lacks. So languages differ in which accidents they mark, and a grammar of Latin does not contain every category that a grammar of all languages would need. The classical account can call such categories accidents; a modern linguist may regard some of them as deeper. Either way, they show that the list of accidents is not fixed by one language.</p>`,
  src: `Comrie, <i>Language Universals and Linguistic Typology</i>; Aikhenvald, <i>Evidentiality</i> (2004); both in paraphrase.` },

{ id: 'typology-claim',
  title: 'What typology shows for the classical claim',
  body: `<p>We have seen Roger Bacon’s claim that grammar is one and the same in substance in all languages, though it varies in its accidents. Typology supplies the evidence on which such a claim can be tested. It shows that languages differ widely in their sounds, their ways of building words, their order, and the categories they mark; but it also shows that every known language has means of naming things and of saying something about them, of distinguishing in some way what acts from what is acted upon, of negating, and of asking.</p>
<p>So the classical claim can be defended in a qualified form: the relations that grammar expresses, such as the relation of what is said to what it is said of, are common to all languages, whereas the means of expressing them are accidents that vary. Whether the parts of speech themselves, especially the distinction of noun and verb, are found in every language has been disputed, and the answer depends partly on how the parts are defined, by their forms or by their modes of signifying.</p>`,
  src: `Comrie, <i>Language Universals and Linguistic Typology</i>; Roger Bacon, <i>Greek Grammar</i>; both in paraphrase.`,
  qpTodo: `Typology and the classical claim: what does typology show that all languages share, what does it show that they do not, and how does this bear on Bacon’s claim that grammar is one in substance.` },

/* ---------- Functional grammar (5) ---------- */

{ id: 'functional',
  title: 'Functional grammar',
  body: `<p>Some modern linguists hold that the forms of a language are best explained by the uses to which language is put: to represent things, to address others, and to build a connected text. Such accounts are called <strong>functional</strong>, in contrast with <strong>formal</strong> accounts, such as Chomsky’s, which describe the forms of a language apart from their uses.</p>
<p>We saw in Section I that the tradition distinguished the functions of language, stating, asking, commanding, praying, calling, and expressing feeling, and that Bühler and Jakobson classified them in the twentieth century. Functional grammar goes further: it seeks to explain the grammatical forms themselves, such as the order of words or the choice of voice, by the functions they serve.</p>`,
  src: `Dik, <i>The Theory of Functional Grammar</i>; Halliday, <i>An Introduction to Functional Grammar</i>; both in paraphrase.` },

{ id: 'theme-rheme',
  title: 'Theme and rheme',
  body: `<p>Asked about a letter, we naturally answer “The letter was written by the clerk,” beginning with what has already been mentioned and ending with what is new. Linguists of the Prague School, beginning with Vilém Mathesius in the 1920s, observed that a sentence usually begins with what is already known or under discussion, called the <strong>theme</strong>, and continues with what is new, called the <strong>rheme</strong>. In “The letter was written by the clerk,” the letter is the theme and the clerk the new information; in “The clerk wrote the letter,” the clerk is the theme. So the choice of voice and order serves to place the known before the new.</p>
<p>We saw in the study of the Arabic tradition that the Arabic grammarians distinguished the topic (<i>mubtadaʾ</i>) from the comment (<i>khabar</i>), and in Section V that Latin places emphatic words first or last. The Prague account of theme and rheme describes the same arrangement of a sentence for the hearer, and it explains why the same thought is often expressed by different constructions in different contexts, as we saw with the choice of voice in Section X.</p>`,
  src: `Mathesius and the Prague School, in paraphrase; Halliday, <i>An Introduction to Functional Grammar</i>, ch. 3.` },

{ id: 'halliday',
  title: 'Halliday’s three functions',
  body: `<p>The question “Did the clerk write the letter?” speaks of an event, asks the hearer something, and begins from the clerk, who may already have been mentioned. M. A. K. Halliday held that every clause serves three functions at once, which he called <strong>metafunctions</strong>. The <strong>ideational</strong> function represents things and events: who did what to whom. The <strong>interpersonal</strong> function establishes a relation between speaker and hearer: whether the clause states, asks, or commands, and with what attitude. The <strong>textual</strong> function joins the clause to the text around it: what is theme and what is new.</p>
<p>These three functions correspond in part to the older classifications. Bühler’s representation corresponds to Halliday’s ideational function, and his appeal to the hearer to the interpersonal; the textual function adds what the classical rhetoricians treated under the arrangement of words. So Halliday’s account brings together, within the grammar of the clause, what the tradition divided among grammar, logic, and rhetoric.</p>`,
  src: `Halliday, <i>An Introduction to Functional Grammar</i>, ch. 2, in paraphrase; Bühler, <i>Sprachtheorie</i> (1934).`,
  qpTodo: `Halliday’s three functions: which function is served by a given feature of a clause (who did what to whom; whether it is a question; what is placed first), and which older classification does each resemble.` },

{ id: 'roles',
  title: 'Semantic roles',
  body: `<p>In “The boy broke the window with a stone,” the boy acts, the window undergoes the action, and the stone is the means. Several modern theories describe the relations of the participants in an action as <strong>semantic roles</strong>. Charles Fillmore, in “The Case for Case” (1968), proposed roles such as the agent (who does the action), the instrument (with which it is done), the experiencer (who perceives or feels), and the location; Simon Dik, in his Functional Grammar, uses similar roles such as agent, goal, and recipient. These roles are distinguished from the grammatical subject and object, since the agent can be the subject (“The boy broke the window”) or not (“The window was broken by the boy”).</p>
<p>The semantic roles closely resemble Pāṇini’s kārakas, which we saw are roles in the action distinct from the endings that mark them, and the uses of the Latin cases, such as the ablative of means and the ablative of agent. So modern linguistics has rediscovered, in its own terms, a distinction that the Indian grammarians made central more than two thousand years earlier.</p>`,
  src: `Fillmore, “The Case for Case” (1968); Dik, <i>The Theory of Functional Grammar</i>; both in paraphrase.`,
  qpTodo: `Semantic roles: what role does each participant play in a given sentence (agent, instrument, recipient), why is a role distinct from the subject, and which earlier doctrines does the idea resemble.` },

{ id: 'formal-functional',
  title: 'Formal and functional accounts compared',
  body: `<p>Formal and functional accounts of grammar are often presented as rivals, but they answer different questions. A formal account asks what the structures of a language are and what rules generate them; a functional account asks why the structures are as they are, by what they do. Many linguists now use both, describing the form of a construction and explaining its use.</p>
<p>The classical art combined something of both. It described the forms of words and constructions precisely, as a formal account does, and it explained them by their signification and their use, as a functional account does. The modists’ explanation of the parts of speech by their modes of signifying is, in this sense, a functional explanation, though its functions are those of signifying rather than of communicating.</p>`,
  src: `General comparison, in paraphrase.` },

/* ---------- Speech acts (5) ---------- */

{ id: 'austin',
  title: 'Austin: doing things with words',
  body: `<p>To say “I do,” in a marriage ceremony, is not to describe a marriage but to marry, and to say “I name this ship the <i>Queen Elizabeth</i>,” at a launching, is to name the ship. Some sentences, then, do not describe an action but perform it. The English philosopher J. L. Austin made this observation in lectures published as <i>How to Do Things with Words</i> (1962). He called such utterances <strong>performatives</strong>, and he distinguished them from <strong>constatives</strong>, which state that something is so and are true or false.</p>
<p>We saw in Section I that only the statement is true or false, and that commands, questions, and prayers are sentences that signify without being true or false. Austin’s performatives add another kind of sentence that is neither true nor false: one that accomplishes what it says. A performative can succeed or fail, as a naming fails if the speaker has no authority to name the ship, but it cannot be false.</p>`,
  src: `Austin, <i>How to Do Things with Words</i> (1962), Lectures I–II, in paraphrase.` },

{ id: 'three-acts',
  title: 'Three acts in one utterance',
  body: `<p>Austin went on to argue that every utterance performs several acts at once. The <strong>locutionary</strong> act is the saying of a sentence with a certain sense and reference, as “The bull is in the field.” The <strong>illocutionary</strong> act is what is done in saying it: a statement, a warning, a promise, or a command; the same sentence may be a warning. The <strong>perlocutionary</strong> act is what is brought about by saying it: the hearer is alarmed and leaves the field.</p>
<p>So the illocutionary act corresponds to what the tradition called the kind of sentence: a statement, a question, a command, a prayer, or a call. The perlocutionary act, the effect on the hearer, belongs to what Aristotle assigned to rhetoric, as we saw in Section I. Austin’s analysis shows that grammar, logic, and rhetoric each consider one aspect of every utterance.</p>`,
  src: `Austin, <i>How to Do Things with Words</i>, Lectures VIII–IX, in paraphrase.`,
  qpTodo: `Three acts: in a given utterance (“The bull is in the field,” said as a warning), what is the locutionary act, the illocutionary act, and the perlocutionary act, and which belongs to which art of the trivium.` },

{ id: 'searle',
  title: 'Searle’s classes of speech act',
  body: `<p>With sentences we state, we try to get others to act, we promise, we thank, and we pronounce a couple married. The American philosopher John Searle, in <i>Speech Acts</i> (1969) and later work, classified illocutionary acts into five kinds: <strong>assertives</strong>, which commit the speaker to the truth of something (“It is raining”); <strong>directives</strong>, which attempt to get the hearer to do something (“Close the door”); <strong>commissives</strong>, which commit the speaker to a future action (“I promise to come”); <strong>expressives</strong>, which express a feeling (“Thank you,” “Alas”); and <strong>declarations</strong>, which bring about what they say (“I pronounce you man and wife”).</p>
<p>Searle’s classes can be compared with St. Thomas’s kinds of sentence that we saw in Section I: the enunciative sentence corresponds to the assertive, the imperative and the deprecative to the directive, and the expression of feeling to the expressive. The commissive and the declaration are kinds that the medieval account did not distinguish separately, although promises and sacramental formulas were much discussed in medieval theology.</p>`,
  src: `Searle, <i>Speech Acts</i> (1969); “A Classification of Illocutionary Acts” (1976); both in paraphrase.`,
  qpTodo: `Searle’s classes: which class is a given utterance (an assertive, a directive, a commissive, an expressive, a declaration), and which of St. Thomas’s kinds of sentence does it correspond to.` },

{ id: 'indirect',
  title: 'Indirect speech acts',
  body: `<p>A sentence of one grammatical kind is often used to perform an act of another kind. “Can you pass the salt?” is grammatically a question about the hearer’s ability, but it is used as a request; no one answers “Yes” and does nothing. Searle called such utterances <strong>indirect speech acts</strong>: the speaker performs one act (a request) by means of another (a question).</p>
<p>We saw in Section VII that irony says the contrary of what the words say, and that the hearer understands it from the situation. An indirect speech act works in a similar way, but it does not reverse the sense; it uses a polite or customary form for the act intended. So the mood and form of a sentence mark its usual function, but the speaker’s intention, known from the context, decides what act is performed, as St. Thomas says the author’s intention decides the literal sense.</p>`,
  src: `Searle, “Indirect Speech Acts” (1975), in paraphrase.` },

{ id: 'speech-acts-grammar',
  title: 'Speech acts and grammar',
  body: `<p>The theory of speech acts belongs chiefly to the philosophy of language, but it bears on grammar because languages mark the kinds of act in their forms. We saw in Section III that the moods of the verb, indicative, imperative, and subjunctive, mark statements, commands, and wishes, and in Section I that English and Latin mark questions by order and by particles. Performative verbs, such as “promise,” “name,” and “declare,” are used in the first person present to perform the act they name: “I promise,” not “He promises.”</p>
<p>So the grammar of a language provides the means by which speakers perform their acts, and the theory of speech acts explains what those means are for. The classical grammarians, who placed the moods among the accidents of the verb and the modists, who explained mood as the inclination of the mind, already treated the speaker’s act as a part of grammar.</p>`,
  src: `Austin, <i>How to Do Things with Words</i>; Searle, <i>Speech Acts</i>; both in paraphrase.` },

/* ---------- Conclusion (2) ---------- */

{ id: 'had-lacked',
  title: 'What each age had, and lacked',
  body: `<p>The twentieth century found things that the thirteenth did not: phonology, the study of sounds as a system of contrasts; a clear account of the structure of words; the grouping of words into constituents; the comparison of hundreds of languages and the discovery of their tendencies; and a serious study of how children acquire a language. Saussure’s description of a language as a system was a real discovery, and so was Greenberg’s method of comparison.</p>
<p>The thirteenth century had something that modern linguistics mostly set aside: the question why the categories of grammar are these categories, and the refusal to treat that question as unanswerable. John of St. Thomas, writing after speculative grammar had been abandoned, still would not let signification stop at a concept with no further reach. So each age saw what the other did not, and the student who knows both can hold together the modern discoveries and the classical questions.</p>`,
  src: `General comparison, in paraphrase.` },

{ id: 'end',
  title: 'Grammar as a liberal art',
  body: `<p>Grammar is the art of speaking and writing correctly and of understanding what others have spoken and written. This course has studied it in its parts: the definition and tasks of grammar, the sign, the material of speech, the parts of speech and their reasons, the formation of words, construction, correctness and its errors, the figures and tropes, signification and supposition, analysis, composition, and the other traditions and the modern study of language.</p>
<p>Whether grammar is in substance one in all languages is still an open question, and modern linguistics has both challenged and renewed the classical claim. The classical art does not depend on settling that question. It depends on the claim that words are signs of what the mind understands, and that the mind understands things. Because this is so, it is possible to learn another language, to translate, and to read the authors of other ages; and these are the reasons that the tradition gave for studying grammar first among the liberal arts.</p>`,
  src: `General conclusion.`,
  qpTodo: `The question of the course: what does the classical art claim that all languages share, what has modern linguistics found that bears on the claim, and on what conviction does the classical art finally rest.` }

  ]
};
