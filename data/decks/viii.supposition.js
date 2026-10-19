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
  body: `<p>We have seen in Section I that a word signifies by imposition, and that what it signifies does not change from one sentence to another: “man” signifies the nature of man in every sentence in which it is used. We have also seen that only a statement is true or false. In this section we ask a further question, which arises only when a word is used in a statement: in this statement, what does the word stand for?</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1–4, in paraphrase.` },

{ id: 'review-modes',
  title: 'The modes of signifying: a review',
  body: `<p>We have seen in Section III that the parts of speech differ by their modes of signifying, so that “running” and “runs” signify the same activity in different modes. The modists considered how words signify in order to explain their construction. The logicians of the same century, beginning from the same doctrine of signification, asked how words function in statements that are true or false. Their answer was the doctrine of supposition, which the grammarian must know because it explains how the same noun can refer to different things in different sentences.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, in paraphrase.` },

{ id: 'review-syncategorematic',
  title: 'Syncategorematic words: a review',
  body: `<p>We have seen in Section I that categorematic words such as “man” and “runs” signify by themselves, whereas syncategorematic words such as “every,” “no,” “some,” and “not” determine how the other words are taken. The doctrine of supposition is largely an account of what these words do. A noun stands for different things according to the syncategorematic words that go with it, and according to its place in the statement. So supposition depends on the distinction between categorematic and syncategorematic words, and on the order of words, which we studied in Section V.</p>`,
  src: `William of Sherwood, <i>Syncategoremata</i> (Kretzmann for reference), in paraphrase.` },

{ id: 'what-supposition',
  title: 'What is supposition?',
  body: `<p>In “A dog is barking,” the word “dog” signifies a certain kind of animal, and it stands for some particular dog that is barking. In “Dog is a species of animal,” the same word signifies the same kind, but it stands for something else: not for any particular dog but for the kind itself. So we must distinguish what a word signifies, which it has from its imposition and keeps in every sentence, from what it stands for, which depends on the statement in which it is used.</p>
<p>Peter of Spain, whose <i>Tractatus</i> (thirteenth century) was the most widely used textbook of logic in the medieval universities, draws this distinction. <strong>Signification</strong>, he says, is the representation of a thing by a word according to convention; <strong>supposition</strong> (Latin <i>suppositiō</i>, “placing under”) is the taking of a substantive term for something (<i>Tractatus</i> VI). So signification belongs to the word by itself, and supposition belongs to the term as it is used in a statement. The name “supposition” is related to the grammarians’ <i>suppositum</i>, which we saw is the subject of a sentence: the term placed under what is said of it. A term has supposition, however, only when it is used in a statement.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI (Copenhaver for reference), in paraphrase.` },

{ id: 'in-proposition',
  title: 'Supposition belongs to a term in a proposition',
  body: `<p>A word by itself has signification but no supposition. The word “dog” in a dictionary signifies a certain animal, but it does not stand for anything in particular, because nothing is said of it. Only when it is used as a term in a proposition, as the subject or the predicate, does the question arise what it stands for. So supposition is a property of terms in propositions, not of words by themselves.</p>
<p>This is why supposition belongs chiefly to logic, which studies the proposition as true or false, whereas signification belongs to grammar as well. But grammar must know the doctrine, because the same grammatical form, a noun in the nominative with a verb, can carry different suppositions, and the reader who does not distinguish them will misunderstand what is said. The first of these differences is between a term that stands for a thing and a term that stands for itself as a word.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; Ockham, <i>Summa logicae</i> I.63; both in paraphrase.`,
  qpTodo: `Signification and supposition: does a given word have supposition by itself (“tree” in a word list) or only in a proposition (“A tree fell”), and what is the difference between what it signifies and what it stands for.` },

{ id: 'material',
  title: 'Material supposition',
  body: `<p>When a teacher says “Dog is a noun,” no one thinks that some dog is a noun; the sentence is about the word. A term has <strong>material supposition</strong> when it stands for itself as a word, that is, for the sound or the written mark. In “Dog is a noun,” “dog” stands for the word “dog,” not for any dog; in “Dog has three letters,” it stands for the written word. As we have seen, names of the second imposition, such as “noun,” are used to speak about words, and a term in material supposition is the word that is spoken about.</p>
<p>Modern writing marks material supposition with quotation marks or italics: “‘Dog’ is a noun,” or “<i>Dog</i> is a noun.” The medieval logicians had no such marks, and they distinguished material supposition by the predicate: only a word can be a noun or have three letters. Ockham gives material supposition as the first of his three principal kinds (<i>Summa logicae</i> I.64); Peter of Spain does not list it separately.</p>`,
  src: `Ockham, <i>Summa logicae</i> I.64 (Loux for reference); William of Sherwood, <i>Introductiones</i> V; both in paraphrase.` },

{ id: 'simple',
  title: 'Simple supposition',
  body: `<p>When a naturalist says “The wolf is a species of animal,” no particular wolf is meant, since no single wolf is a species. A term has <strong>simple supposition</strong> when it stands for the common nature or concept that it signifies, not for any individual. In “Dog is a species of animal,” “dog” does not stand for any particular dog, since no particular dog is a species; it stands for the nature or concept of dog, which is the species.</p>
<p>The medieval logicians disagreed about what a term in simple supposition stands for. Peter of Spain and William of Sherwood said that it stands for the common nature signified; Ockham, who denied that there are common natures outside the mind, said that it stands for the concept in the mind. But all agreed that in their standard example, “Man is a species” (<i>homō est speciēs</i>), “man” does not stand for any individual man.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; William of Sherwood, <i>Introductiones</i> V; Ockham, <i>Summa logicae</i> I.64; all in paraphrase.` },

{ id: 'personal',
  title: 'Personal supposition',
  body: `<p>When we say “A dog is barking” or “Every dog has four legs,” we speak of dogs themselves, the individuals, and not of the word or of the kind. A term has <strong>personal supposition</strong> when it stands for the individual things that it signifies. In “A dog is barking,” “dog” stands for some individual dog; in “Every dog has four legs,” it stands for each individual dog. Personal supposition is the most common kind, because most statements are about individual things. The name “personal” does not mean that the term stands for persons only: “dog” here has personal supposition for individual dogs.</p>
<p>So the same word “dog” can have three suppositions in three statements: material in “Dog is a noun,” simple in “Dog is a species of animal,” and personal in “A dog is barking.” Its signification is the same in all three; what it stands for differs. The grammar of the three sentences is the same, a noun subject with a verb and a predicate, and only the sense of the whole shows which supposition is meant. Personal supposition is itself divided further.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; Ockham, <i>Summa logicae</i> I.64; both in paraphrase.`,
  qpTodo: `Material, simple, or personal: what does “lily” stand for in a given statement (“Lily is a noun,” “Lily is a species of flower,” “A lily is blooming”), and which supposition is it.` },

{ id: 'discrete',
  title: 'Discrete supposition',
  body: `<p>“Plato is speaking” speaks of one man only, whereas “A student is speaking” could be made true by any one of many students. So personal supposition is divided into discrete and common. A term has <strong>discrete supposition</strong> when it stands for one individual only. A proper name has discrete supposition: in “Plato is speaking,” “Plato” stands for one man. A common noun with a demonstrative pronoun also has discrete supposition: in “This student is speaking,” “this student” stands for one student, the one pointed out.</p>
<p>A term has <strong>common supposition</strong> when it is a common noun that can stand for many individuals: “student” in “A student is speaking” or “Every student is enrolled.” We saw in Section III that a proper noun names one particular thing and a common noun any member of a kind; discrete and common supposition correspond to this distinction, but they belong to terms in statements. So “this student” is a common noun in grammar but has discrete supposition in logic, because the demonstrative restricts it to one individual. Common supposition, in turn, has kinds of its own.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; William of Sherwood, <i>Introductiones</i> V; both in paraphrase.` },

{ id: 'determinate',
  title: 'Determinate supposition',
  body: `<p>When someone says “A car is outside,” the statement is true whichever car is there, provided that one is. Common personal supposition is divided again. A term has <strong>determinate supposition</strong> when the statement is true if it is true of at least one of the individuals for which the term stands. In “A bird is singing,” “bird” has determinate supposition, because the statement is true if some one bird is singing, whichever it is.</p>
<p>The logicians tested determinate supposition by a rule of <strong>descent</strong>: from “A bird is singing,” one may descend to “This bird is singing, or that bird is singing, or that bird is singing,” and so on for every bird, joined by “or.” A term has determinate supposition when this descent to a disjunction of singular statements (statements joined by “or”) is valid. So determinate supposition is the supposition of a common term with “some,” or of a common term with no sign of quantity in an affirmative statement. A term taken with “every” stands in another way.</p>`,
  src: `William of Sherwood, <i>Introductiones</i> V; Ockham, <i>Summa logicae</i> I.70; both in paraphrase.`,
  qpTodo: `Determinate supposition: in a given statement (“A ship is sinking”; “Some tree is tall”), does the subject have determinate supposition, and to what disjunction can one descend.` },

{ id: 'distributive',
  title: 'Confused and distributive supposition',
  body: `<p>“Every planet moves” says something of each planet, one by one, so that it is false if a single planet does not move. A term has <strong>confused and distributive supposition</strong> when it stands for every one of the individuals for which it can stand, each taken separately. In “Every planet moves,” “planet” has this supposition, because the statement says that this planet moves, and that planet moves, and so on for every planet. The test of descent is to a conjunction: “This planet moves, and that planet moves, and that planet moves,” joined by “and.”</p>
<p>The word “every” (Latin <i>omnis</i>) is the sign that gives the term after it this supposition; the logicians said that it <strong>distributes</strong> the term. “No” (Latin <i>nūllus</i>) also distributes its term: in “No square is round,” the statement says of each square that it is not round. So the syncategorematic words “every” and “no” determine how the common noun after them stands. The predicate of such a statement, however, may stand in a third way.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI and XII; Ockham, <i>Summa logicae</i> I.70; both in paraphrase.` },

{ id: 'merely-confused',
  title: 'Merely confused supposition',
  body: `<p>In “Every rose is a flower,” the word “flower” does not stand for one flower, since no one flower is every rose, nor for each flower, since not every flower is a rose. It stands for many flowers in another way. A term has <strong>merely confused supposition</strong> when it stands for many individuals but one cannot descend from it either to a disjunction of statements or to a conjunction. The standard case is the predicate of a universal affirmative statement: in “Every rose is a flower,” “flower” has merely confused supposition. One cannot descend to “Every rose is this flower, or every rose is that flower,” because no single flower is every rose; nor to “Every rose is this flower, and every rose is that flower.”</p>
<p>One can descend only to a disjunction within the predicate: “Every rose is this flower or that flower or that flower.” So the term “flower” stands for many flowers, but not distributively and not determinately; it stands for them in a merely confused way. The logicians’ own example was “Every man is an animal” (<i>omnis homō est animal</i>). This kind of supposition shows how much the sense of a statement depends on the place of a term and on the signs that go before it, and negation is one such sign.</p>`,
  src: `William of Sherwood, <i>Introductiones</i> V; Ockham, <i>Summa logicae</i> I.70; both in paraphrase.`,
  qpTodo: `The kinds of personal supposition: in “Every apple is a fruit,” what supposition does each term have (“apple” confused and distributive, “fruit” merely confused), and what descent does each allow.` },

{ id: 'negation',
  title: 'Negation and supposition',
  body: `<p>“No fish is a bird” says of every fish and every bird that the one is not the other. So negation, like “every,” distributes a term: in this statement both “fish” and “bird” have confused and distributive supposition. In “Some flower is not red,” “flower” has determinate supposition, because of “some,” but “red” has confused and distributive supposition, because of “not”: the statement says that some flower is not this red thing, and not that red thing, and so on.</p>
<p>So the logicians gave a general rule: a universal affirmative sign (“every”) distributes the term that immediately follows it, and a negative sign (“no,” “not”) distributes every term that follows it. The order of the words therefore matters. “Not every train is late” and “Every train is not late” differ in sense, because in the first “not” comes before “every” and in the second after it. We saw in Section V that English order carries the construction; here it also carries the logical sense.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> XII; Ockham, <i>Summa logicae</i> I.72–74; both in paraphrase.` },

{ id: 'rules',
  title: 'The kinds of supposition together',
  body: `<p>The kinds of supposition can now be set out together:<br><strong>material</strong>: the term stands for itself as a word (“Dog is a noun”);<br><strong>simple</strong>: the term stands for the common nature or concept (“Dog is a species of animal”);<br><strong>personal</strong>: the term stands for individuals, and personal supposition is either<br>   <strong>discrete</strong>, for one individual (“Plato,” “this student”), or common, which is either<br>   <strong>determinate</strong>, for at least one (“A bird is singing”), or<br>   <strong>confused and distributive</strong>, for each (“Every planet moves”), or<br>   <strong>merely confused</strong>, for many, but not each separately (“flower” in “Every rose is a flower”).</p>
<p>The kind of supposition is decided by the predicate (for material and simple supposition) and by the signs and the order of the words (for the kinds of personal supposition). So supposition is a doctrine of logic that rests on grammar: on the distinction of proper and common nouns, on the syncategorematic words, and on the order of the sentence. Each language, moreover, shows these differences by its own means.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI; William of Sherwood, <i>Introductiones</i> V; Ockham, <i>Summa logicae</i> I.63–77; all in paraphrase.`,
  qpTodo: `The whole division: in a given statement, what supposition does the marked term have, and which feature of the sentence (the predicate, a sign, a demonstrative, the order) decides it.` },

{ id: 'latin-english',
  title: 'Supposition in Latin and in English',
  body: `<p>English says “a soldier is fighting” or “the soldier is fighting,” but Latin, which has no articles, says only <i>mīles pugnat</i>, and the reader must decide from the context which is meant. The doctrine of supposition was worked out for Latin, and the logicians called a statement without a sign of quantity, such as <i>homō currit</i>, <strong>indefinite</strong>. English distinguishes some of these cases by its articles: “a soldier” usually has determinate supposition, “the soldier” usually discrete supposition, referring to one soldier already known.</p>
<p>English also has forms that Latin lacks, such as the plural without an article in “Cats purr,” which speaks of cats in general. So the grammar of each language provides different means of showing supposition, and a translation from one language to another must sometimes add or remove a sign, an article, or a demonstrative to keep the same supposition. The tense of the verb is another such means.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> I and VI, in paraphrase.` },

{ id: 'ampliation',
  title: 'Ampliation and restriction',
  body: `<p>“A white thing was black” can be true or false according to how “white thing” is taken. If it stands for what is white now, the statement says that something now white was once black, which may well be true; if it stands for what was white then, it says that something was white and black at once, which is false. So the tense of the verb also affects supposition. The logicians said that a past or future verb <strong>ampliates</strong> (extends) the supposition of its subject to things that were or will be, whereas a present verb <strong>restricts</strong> it to things that are (Peter of Spain, <i>Tractatus</i> XI).</p>
<p>So in “Every tree that will be planted will grow,” the term “tree” is extended to future trees by the future verbs. This shows again that what a term stands for depends not only on what it signifies but on the whole construction of the statement, including the accidents of the verb that we studied in Section III.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> XI (Copenhaver for reference), in paraphrase.` },

{ id: 'why-grammarian',
  title: 'Why the grammarian studies supposition',
  body: `<p>Supposition belongs to logic, and it is studied at length in logic, where it serves the analysis of arguments. But the grammarian studies it for two reasons. First, it explains how the same word, with the same signification, can be used of different things in different sentences, which is a question about the use of words that the reader of any text must answer. Second, it shows how much the logical sense of a sentence depends on its grammar: on the syncategorematic words, the order of words, the articles, and the tenses.</p>
<p>So supposition is a place where grammar and logic meet. Grammar supplies the forms; logic asks what the terms stand for and whether the statement is true. The general relation between grammatical forms and logical forms (the subject and predicate, the copula, quantity, and negation) is the other subject of this section.</p>`,
  src: `Peter of Spain, <i>Tractatus</i> VI, in paraphrase.` }

  ]
};
