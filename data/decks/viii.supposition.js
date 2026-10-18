/* VIII.1 Supposition [viii.supposition]
   Plan (ITEM-LIST.md): 17 panels, 5 question points (placeholders: qpTodo; to be written). Exercise: Supposition (not yet
   written). The first three panels review signification and the modes of signifying; then material, simple, and personal
   supposition, and the kinds of personal supposition (discrete, determinate, confused and distributive, merely confused).
   Overlap with Ars Syllogistica, which teaches supposition from the side of logic.
   Live material drawn on: DECKS.suppos (two questions; where grammar hands over). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['viii.supposition'] = {
  id: 'viii.supposition',
  title: 'Supposition',
  sub: 'What a term stands for in a proposition',
  sources: `Peter of Spain, <i>Tractatus</i> VI; William of Sherwood, <i>Introductiones in logicam</i> V; William of Ockham, <i>Summa logicae</i> I.63–77.`,
  panels: [

{ id: 'review-signification',
  title: 'Signification: a review',
  body: `<p>We saw in Section I that a word signifies by imposition: speakers have set a sound to signify something, and the word signifies things by means of the concepts of the mind. So “man” signifies the nature of man, a rational animal, and it signifies this in every sentence in which it is used. What a word signifies by its imposition does not change from one sentence to another.</p>
<p>We also saw that the word is the least part of a sentence that signifies, and that only a statement is true or false. A word by itself, such as “man,” signifies but says nothing true or false. In this section we ask a further question, which arises only when a word is used in a statement: in this statement, what does the word stand for?</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1–4, in paraphrase.` },

{ id: 'review-modes',
  title: 'The modes of signifying: a review',
  body: `<p>We saw in Section III that the modists distinguished the mode of being, the mode of understanding, and the mode of signifying, and that the parts of speech differ by their modes of signifying: the noun signifies by the mode of a stable thing, the verb by the mode of becoming. We also saw that “running” and “runs” signify the same activity in different modes.</p>
<p>The modists considered how words signify in order to explain their construction. The logicians of the same century, beginning from the same doctrine of signification, asked how words function in statements that are true or false. Their answer was the doctrine of supposition, which the grammarian must know because it explains how the same noun can refer to different things in different sentences.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, in paraphrase.` },

{ id: 'review-syncategorematic',
  title: 'Syncategorematic words: a review',
  body: `<p>We saw in Section I that some words signify by themselves, such as “man” and “runs,” and are called categorematic, and that others, such as “every,” “no,” “some,” and “not,” signify only with other words and are called syncategorematic. We saw that the syncategorematic words do not bring a thing to mind but determine how the other words are taken: “every man” and “some man” signify the same nature, but they say different things about how many men are meant.</p>
<p>The doctrine of supposition is largely an account of what these words do. A noun stands for different things according to the syncategorematic words that go with it, and according to its place in the statement. So supposition depends on the distinction between categorematic and syncategorematic words, and on the order of words, which we studied in Section V.</p>`,
  src: `William of Sherwood, <i>Syncategoremata</i> (Kretzmann for reference), in paraphrase.` },

{ id: 'what-supposition',
  title: 'What is supposition?',
  body: `<p>In “A man is running,” the word “man” signifies the nature of man, and it stands for some particular man who is running. In “Man is a species,” the same word signifies the same nature, but it stands for something else: not for any particular man but for the kind. So we must distinguish what a word signifies, which it has from its imposition and keeps in every sentence, from what it stands for, which depends on the statement in which it is used.</p>
<p>Peter of Spain, whose <i>Tractatus</i> (thirteenth century) was the most widely used textbook of logic in the medieval schools, draws this distinction. <strong>Signification</strong>, he says, is the representation of a thing by a word according to convention; <strong>supposition</strong> (Latin <i>suppositiō</i>, “placing under”) is the taking of a substantive term for something (<i>Tractatus</i> VI). So signification belongs to the word by itself, and supposition belongs to the term as it is used in a statement. The name “supposition” is related to the grammarians’ <i>suppositum</i>, which we saw is the subject of a sentence: the term placed under what is said of it.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI (Copenhaver for reference), in paraphrase.` },

{ id: 'in-proposition',
  title: 'Supposition belongs to a term in a proposition',
  body: `<p>A word by itself has signification but no supposition. The word “man” in a dictionary signifies a rational animal, but it does not stand for anything in particular, because nothing is said of it. Only when it is used as a term in a proposition, as the subject or the predicate, does the question arise what it stands for. So supposition is a property of terms in propositions, not of words by themselves.</p>
<p>This is why supposition belongs chiefly to logic, which studies the proposition as true or false, whereas signification belongs to grammar as well. But grammar must know the doctrine, because the same grammatical form, a noun in the nominative with a verb, can carry different suppositions, and the reader who does not distinguish them will misunderstand what is said.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; Ockham, <i>Summa logicae</i> I.63; both in paraphrase.`,
  qpTodo: `Signification and supposition: does a given word have supposition by itself (“man” in a dictionary) or only in a proposition (“A man is running”), and what is the difference between what it signifies and what it stands for.` },

{ id: 'material',
  title: 'Material supposition',
  body: `<p>A term has <strong>material supposition</strong> when it stands for itself as a word, that is, for the sound or the written mark. In “Man is a noun,” “man” stands for the word “man,” not for any man; in “Man has three letters,” it stands for the written word. We saw in Section I that names of the second imposition, such as “noun,” are used to speak about words, and a term in material supposition is the word that is spoken about.</p>
<p>Modern writing marks material supposition with quotation marks or italics: “‘Man’ is a noun,” or “<i>Man</i> is a noun.” The medieval logicians had no such marks, and they distinguished material supposition by the predicate: only a word can be a noun or have three letters. Ockham gives material supposition as the first of his three principal kinds (<i>Summa logicae</i> I.64); Peter of Spain does not list it separately.</p>`,
  src: `Ockham, <i>Summa logicae</i> I.64 (Loux for reference); William of Sherwood, <i>Introductiones</i> V; both in paraphrase.` },

{ id: 'simple',
  title: 'Simple supposition',
  body: `<p>A term has <strong>simple supposition</strong> when it stands for the common nature or concept that it signifies, not for any individual. In “Man is a species,” “man” does not stand for any particular man, since no particular man is a species; it stands for the nature or concept of man, which is the species. In the same way, in “Horse is a kind of animal,” “horse” stands for the kind, not for any particular horse.</p>
<p>The medieval logicians disagreed about what a term in simple supposition stands for. Peter of Spain and William of Sherwood said that it stands for the common nature signified; Ockham, who denied that there are common natures outside the mind, said that it stands for the concept in the mind. But all agreed that in “Man is a species,” “man” does not stand for any individual man.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; William of Sherwood, <i>Introductiones</i> V; Ockham, <i>Summa logicae</i> I.64; all in paraphrase.` },

{ id: 'personal',
  title: 'Personal supposition',
  body: `<p>A term has <strong>personal supposition</strong> when it stands for the individual things that it signifies. In “A man is running,” “man” stands for some individual man; in “Every man is mortal,” it stands for each individual man. Personal supposition is the most common kind, because most statements are about individual things. The name “personal” does not mean that the term stands for persons only: in “Every horse is an animal,” “horse” has personal supposition for individual horses.</p>
<p>So the same word “man” can have three suppositions in three statements: material in “Man is a noun,” simple in “Man is a species,” and personal in “A man is running.” Its signification is the same in all three; what it stands for differs. The grammar of the three sentences is the same, a noun subject with a verb and a predicate, and only the sense of the whole shows which supposition is meant.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; Ockham, <i>Summa logicae</i> I.64; both in paraphrase.`,
  qpTodo: `Material, simple, or personal: what does “man” (or “horse”) stand for in a given statement (“Man is a noun,” “Man is a species,” “A man is running”), and which supposition is it.` },

{ id: 'discrete',
  title: 'Discrete supposition',
  body: `<p>“Socrates is running” speaks of one man only, whereas “A man is running” could be made true by any one of many men. So personal supposition is divided into discrete and common. A term has <strong>discrete supposition</strong> when it stands for one individual only. A proper name has discrete supposition: in “Socrates is running,” “Socrates” stands for one man. A common noun with a demonstrative pronoun also has discrete supposition: in “This man is running,” “this man” stands for one man, the one pointed out.</p>
<p>A term has <strong>common supposition</strong> when it is a common noun that can stand for many individuals: “man” in “A man is running” or “Every man is mortal.” We saw in Section III that a proper noun names one particular thing and a common noun any member of a kind; discrete and common supposition correspond to this distinction, but they belong to terms in statements. So “this man” is a common noun in grammar but has discrete supposition in logic, because the demonstrative restricts it to one individual.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; William of Sherwood, <i>Introductiones</i> V; both in paraphrase.` },

{ id: 'determinate',
  title: 'Determinate supposition',
  body: `<p>When someone says “A man is at the door,” the statement is true whichever man is there, provided that one is. Common personal supposition is divided again. A term has <strong>determinate supposition</strong> when the statement is true if it is true of at least one of the individuals for which the term stands. In “A man is running,” “man” has determinate supposition, because the statement is true if some one man is running, whichever he is.</p>
<p>The logicians tested determinate supposition by a rule of <strong>descent</strong>: from “A man is running,” one may descend to “This man is running, or that man is running, or that man is running,” and so on for every man, joined by “or.” A term has determinate supposition when this descent to a disjunction of singular statements (statements joined by “or”) is valid. So determinate supposition is the supposition of a common term with “some,” or of a common term with no sign of quantity in an affirmative statement.</p>`,
  src: `William of Sherwood, <i>Introductiones</i> V; Ockham, <i>Summa logicae</i> I.70; both in paraphrase.`,
  qpTodo: `Determinate supposition: in a given statement (“A man is running”; “Some horse is white”), does the subject have determinate supposition, and to what disjunction can one descend.` },

{ id: 'distributive',
  title: 'Confused and distributive supposition',
  body: `<p>“Every man is mortal” says something of each man, one by one, so that it is false if a single man is not mortal. A term has <strong>confused and distributive supposition</strong> when it stands for every one of the individuals for which it can stand, each taken separately. In “Every man is mortal,” “man” has this supposition, because the statement says that this man is mortal, and that man is mortal, and so on for every man. The test of descent is to a conjunction: “This man is mortal, and that man is mortal, and that man is mortal,” joined by “and.”</p>
<p>The word “every” (Latin <i>omnis</i>) is the sign that gives the term after it this supposition; the logicians said that it <strong>distributes</strong> the term. “No” (Latin <i>nūllus</i>) also distributes its term: in “No man is a stone,” the statement says of each man that he is not a stone. So the syncategorematic words “every” and “no” determine how the common noun after them stands.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI and XII; Ockham, <i>Summa logicae</i> I.70; both in paraphrase.` },

{ id: 'merely-confused',
  title: 'Merely confused supposition',
  body: `<p>In “Every man is an animal,” the word “animal” does not stand for one animal, since no one animal is every man, nor for each animal, since not every animal is a man. It stands for many animals in another way. A term has <strong>merely confused supposition</strong> when it stands for many individuals but one cannot descend from it either to a disjunction of statements or to a conjunction. The standard example is the predicate of a universal affirmative statement: in “Every man is an animal,” “animal” has merely confused supposition. One cannot descend to “Every man is this animal, or every man is that animal,” because no single animal is every man; nor to “Every man is this animal, and every man is that animal.”</p>
<p>One can descend only to a disjunction within the predicate: “Every man is this animal or that animal or that animal.” So the term “animal” stands for many animals, but not distributively and not determinately; it stands for them in a merely confused way. This kind of supposition shows how much the sense of a statement depends on the place of a term and on the signs that go before it.</p>`,
  src: `William of Sherwood, <i>Introductiones</i> V; Ockham, <i>Summa logicae</i> I.70; both in paraphrase.`,
  qpTodo: `The kinds of personal supposition: in “Every man is an animal,” what supposition does each term have (“man” confused and distributive, “animal” merely confused), and what descent does each allow.` },

{ id: 'negation',
  title: 'Negation and supposition',
  body: `<p>Negation also distributes a term. In “No man is a stone,” both “man” and “stone” have confused and distributive supposition: the statement says of every man and every stone that the one is not the other. In “Some man is not white,” “man” has determinate supposition, because of “some,” but “white” has confused and distributive supposition, because of “not”: the statement says that some man is not this white thing, and not that white thing, and so on.</p>
<p>So the logicians gave a general rule: a universal affirmative sign (“every”) distributes the term that immediately follows it, and a negative sign (“no,” “not”) distributes every term that follows it. The order of the words therefore matters. “Not every man is running” and “Every man is not running” differ in sense, because in the first “not” comes before “every” and in the second after it. We saw in Section V that English order carries the construction; here it also carries the logical sense.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> XII; Ockham, <i>Summa logicae</i> I.72–74; both in paraphrase.` },

{ id: 'rules',
  title: 'The kinds of supposition together',
  body: `<p>The kinds of supposition can now be set out together:<br><strong>material</strong>: the term stands for itself as a word (“Man is a noun”);<br><strong>simple</strong>: the term stands for the common nature or concept (“Man is a species”);<br><strong>personal</strong>: the term stands for individuals, and personal supposition is either<br>   <strong>discrete</strong>, for one individual (“Socrates,” “this man”), or common, which is either<br>   <strong>determinate</strong>, for at least one (“A man is running”), or<br>   <strong>confused and distributive</strong>, for each (“Every man is mortal”), or<br>   <strong>merely confused</strong>, for many, but not each separately (“animal” in “Every man is an animal”).</p>
<p>The kind of supposition is decided by the predicate (for material and simple supposition) and by the signs and the order of the words (for the kinds of personal supposition). So supposition is a doctrine of logic that rests on grammar: on the distinction of proper and common nouns, on the syncategorematic words, and on the order of the sentence.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; William of Sherwood, <i>Introductiones</i> V; Ockham, <i>Summa logicae</i> I.63–77; all in paraphrase.`,
  qpTodo: `The whole division: in a given statement, what supposition does the marked term have, and which feature of the sentence (the predicate, a sign, a demonstrative, the order) decides it.` },

{ id: 'latin-english',
  title: 'Supposition in Latin and in English',
  body: `<p>The doctrine of supposition was worked out for Latin, which has no articles. Latin <i>homō currit</i> may mean “a man is running” or “the man is running,” and the logicians had to decide its supposition from the context; they called a statement without a sign of quantity <strong>indefinite</strong>. English distinguishes some of these cases by its articles: “a man” usually has determinate supposition, “the man” usually discrete supposition, referring to one man already known.</p>
<p>English also has forms that Latin lacks, such as the plural without an article in “Dogs bark,” which speaks of dogs in general. So the grammar of each language provides different means of showing supposition, and a translation from one language to another must sometimes add or remove a sign, an article, or a demonstrative to keep the same supposition.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> I and VI, in paraphrase.` },

{ id: 'ampliation',
  title: 'Ampliation and restriction',
  body: `<p>The tense of the verb also affects supposition. In “A white thing was black,” the subject “white thing” may stand for what is white now or for what was white then, and the statement may be true in one sense and false in the other. The logicians said that a past or future verb <strong>ampliates</strong> (extends) the supposition of its subject to things that were or will be, whereas a present verb <strong>restricts</strong> it to things that are (Peter of Spain, <i>Tractatus</i> XI).</p>
<p>So in “Every man who will be born will die,” the term “man” is extended to future men by the future verbs. This shows again that what a term stands for depends not only on what it signifies but on the whole construction of the statement, including the accidents of the verb that we studied in Section III.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> XI (Copenhaver for reference), in paraphrase.` },

{ id: 'why-grammarian',
  title: 'Why the grammarian studies supposition',
  body: `<p>Supposition belongs to logic, and it is studied at length in logic, where it serves the analysis of arguments. But the grammarian studies it for two reasons. First, it explains how the same word, with the same signification, can be used of different things in different sentences, which is a question about the use of words that the reader of any text must answer. Second, it shows how much the logical sense of a sentence depends on its grammar: on the syncategorematic words, the order of words, the articles, and the tenses.</p>
<p>So supposition is a place where grammar and logic meet. Grammar supplies the forms; logic asks what the terms stand for and whether the statement is true. The general relation between grammatical forms and logical forms (the subject and predicate, the copula, quantity, and negation) is the other subject of this section.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI, in paraphrase.` }

  ]
};
