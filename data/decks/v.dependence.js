/* V.4 Dependence [v.dependence]
   Plan (ITEM-LIST.md): 9 panels, 5 question points, 2 of them short analysis questions (placeholders: qpTodo; to be written).
   Live material drawn on: DECKS.workshop (dependent and terminant, dependency grammar, how to read a markup), DECKS.markup
   (marking every dependence, the article). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.dependence'] = {
  id: 'v.dependence',
  title: 'Dependence',
  sub: 'The dependent and the term on which it depends (<i>dependens</i> and <i>terminans</i>)',
  sources: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction; Lucien Tesnière, <i>Éléments de syntaxe structurale</i> (1959).`,
  panels: [

{ id: 'dependence',
  title: 'The dependent and the terminant',
  body: `<p>We have seen that agreement and government are relations between pairs of words. Thomas of Erfurt gives the reason why one word is constructed with another at all. Every construction, he says, has two parts: one word that <strong>depends</strong> (<i>dependēns</i>) and one word that <strong>terminates</strong> the dependence (<i>termināns</i>), that is, that completes what the dependent word requires (<i>Grammatica speculativa</i>, on construction, in paraphrase).</p>
<p>A word depends on another when its mode of signifying requires something that the other supplies. The adjective “white” signifies a quality as adhering to something, so it depends on a noun that signifies something standing by itself: in “white horse,” “white” depends and “horse” terminates. So dependence is the relation that explains why agreement and government occur: the dependent word takes the form required by the word on which it depends.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.` },

{ id: 'kinds',
  title: 'The principal dependences',
  body: `<p>Thomas gives the principal kinds of dependence:<br>the <strong>adjective</strong> depends on the noun: “the white horse,” <i>homō albus</i> (“a white man”);<br>the <strong>adverb</strong> depends on the verb: “he reads well,” <i>legit bene</i>;<br>the <strong>verb</strong> depends on its subject: “Socrates runs,” <i>Sōcratēs currit</i>;<br>the <strong>verb</strong> also depends on its object: “I strike Socrates,” <i>percutiō Sōcratem</i>.</p>
<p>The last two may seem surprising, since we usually think of the verb as the principal word of the sentence. But Thomas reasons that the verb signifies something going on, and something going on must be the action of something and, if it passes over, an action upon something. So the verb requires a subject and, if it is transitive, an object, and in this sense it depends on both.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.`,
  qpTodo: `The principal dependences: in a given pair of words (“white horse,” “reads well,” “Socrates runs,” “strike Socrates”), which word depends and which terminates, according to Thomas.` },

{ id: 'many-constructions',
  title: 'One sentence, many constructions',
  body: `<p>Because each construction joins two words, a sentence of more than two words contains more than one construction. Thomas’s own example is <i>homō albus currit bene</i>, “a white man runs well.” It contains three constructions: <i>albus</i> depends on <i>homō</i>; <i>currit</i> depends on <i>homō</i>; and <i>bene</i> depends on <i>currit</i>. The English “The white horse runs well” has the same three, with the article “the” depending on “horse” as an adjective does.</p>
<p>So the analysis of a sentence finds every dependence, one pair at a time. A sentence is congruous when every one of its constructions is congruous, and it is complete when the dependences together produce a complete sense, which requires at least the construction of a subject and a verb.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.`,
  qpTodo: `Counting constructions: how many constructions does a given short sentence contain (<i>homō albus currit bene</i>; “The brave sailor sees the king”), and what are they.` },

{ id: 'transitive-intransitive',
  title: 'Transitive and intransitive constructions',
  body: `<p>Priscian sorts constructions according to whether the action passes from one person to another, and from him the schools took the names <strong>transitive</strong> and <strong>intransitive</strong> construction. Thomas of Erfurt uses these names in a broader way. A construction is intransitive when its two words refer to the same thing, as in <i>Sōcratēs currit</i> (“Socrates runs”), where the running is Socrates’ own, or <i>homō albus</i>, where the whiteness belongs to the man. A construction is transitive when the dependent word passes over to something else, as in <i>percutiō Sōcratem</i> (“I strike Socrates”) or <i>fīlius Sōcratis</i> (“the son of Socrates”) (<i>Grammatica speculativa</i>, on construction, in paraphrase).</p>
<p>So Thomas’s transitive construction includes not only the verb with its object but also the noun with a genitive, because in both cases the construction reaches from one thing to another. This classification shows that the relation of a verb to its object and the relation of a noun to its genitive, which look different, are of the same kind.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XVII–XVIII; Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction; both in paraphrase.` },

{ id: 'tesniere',
  title: 'Modern dependency grammar',
  body: `<p>In the twentieth century the French linguist Lucien Tesnière, in his <i>Éléments de syntaxe structurale</i> (1959), developed a grammar that also describes the sentence as a set of words depending on words. He drew each sentence as a tree, which he called a <i>stemma</i>, with the governing word above and its dependents below. For the adjective and the adverb, Tesnière’s account agrees with Thomas’s: “white” depends on “horse,” and “well” on “runs.”</p>
<p>For the verb, however, the two accounts differ. Tesnière makes the verb the head of the whole sentence, with the subject and the object depending on it, while Thomas makes the verb depend on the subject and on the object. Both accounts agree that the verb and its subject and object are joined by dependence; they disagree about which way it runs. Thomas reasons from the mode of signifying of the verb, which requires a subject; Tesnière reasons from the verb’s place at the center of the sentence, on which every other word finally depends.</p>`,
  src: `Tesnière, <i>Éléments de syntaxe structurale</i> (1959), Book A, in paraphrase.` },

{ id: 'valency',
  title: 'The valency of the verb',
  body: `<p>Tesnière also described how many words a verb requires to complete it, which he called its <strong>valency</strong>, by comparison with the number of other atoms with which an atom of a chemical element can combine. A verb with no required participant, such as Latin <i>pluit</i> (“it rains”), has no valency; a verb with one, such as “sleeps,” has a valency of one; a verb with two, such as “strikes” (someone strikes someone), has a valency of two; and a verb with three, such as “gives” (someone gives something to someone), has a valency of three.</p>
<p>The idea of valency agrees with the older doctrine of government. A verb of two places, such as <i>amat</i>, governs an accusative; a verb of three places, such as <i>dat</i>, governs an accusative and a dative: <i>puer puellae rosam dat</i>, “the boy gives the girl a rose.” So the number of words that a verb requires, and the cases in which it requires them, are both part of its meaning.</p>`,
  src: `Tesnière, <i>Éléments de syntaxe structurale</i> (1959), Book D, in paraphrase.`,
  qpTodo: `Valency: how many participants does a given verb require (<i>pluit</i>, “sleeps,” <i>amat</i>, <i>dat</i>), and in which cases does a Latin verb require them.` },

{ id: 'marking',
  title: 'Marking the dependences of a sentence',
  body: `<p>A sentence can be analyzed by marking each dependence with an arrow, drawn from the word that depends to the word that terminates its dependence. In this course the arrows follow Thomas of Erfurt. In “The brave sailor sees the king,” “brave” depends on “sailor,” “the” depends on “sailor” and the second “the” on “king,” and “sees” depends on “sailor” and on “king.”</p>
<p>The marking makes visible what the endings of Latin show and the order of English implies. In <i>nauta fortis rēgem videt</i>, the endings show that <i>fortis</i> belongs with <i>nauta</i> and that <i>rēgem</i> is the object; in English the order shows the same relations. In both languages the dependences are the same, and the analysis of a sentence consists in finding them.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, in paraphrase.`,
  qpTodo: `Analysis: in a given short sentence, which word does each marked word depend on (the adjective, the adverb, the verb on subject and object).` },

{ id: 'prepositional',
  title: 'The dependence of phrases',
  body: `<p>A preposition and its noun make a phrase, and the whole phrase depends on another word. In “the house on the hill,” “on the hill” depends on “house” and describes it, as an adjective would; in “She sat on the bench,” “on the bench” depends on “sat” and tells where, as an adverb would. Within the phrase, the noun depends on the preposition, which governs its case: <i>in hortō</i>, where <i>hortō</i> is in the ablative because <i>in</i> requires it.</p>
<p>So dependence works at more than one level. Single words depend on single words, and groups of words depend on words as wholes. This is why we will study the phrase and the clause as units of construction: each of them depends on another word as a single part of speech would.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Tesnière, <i>Éléments</i>; both in paraphrase.` },

{ id: 'together',
  title: 'Dependence, agreement, and government',
  body: `<p>We can now see how the relations studied in this section fit together. Dependence is the relation that every construction has: one word requires another. Agreement and government are the forms in which dependence is shown. When the dependent word shares accidents with the terminant, as the adjective with its noun, there is agreement; when one word requires a case in another, as the verb in its object, there is government.</p>
<p>In <i>puer bonus librum legit</i>, “the good boy reads the book,” <i>bonus</i> depends on <i>puer</i> and agrees with it; <i>legit</i> depends on <i>puer</i> and agrees with it in person and number; and <i>legit</i> depends on <i>librum</i> and governs it in the accusative. These relations do not depend on the order of the words, which in Latin can vary widely; what the order of words does is a further question of construction.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.`,
  qpTodo: `Analysis: in a given Latin sentence, give each dependence and say whether it is shown by agreement, by government, or by neither.` }

  ]
};
