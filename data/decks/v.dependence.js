/* V.4 Dependence [v.dependence]
   Plan (ITEM-LIST.md): 9 panels, 5 question points, 2 of them short analysis questions.
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
  body: `<p>In “reads well,” the word “well” signifies a manner of acting, so it needs a word that signifies an action, and “reads” supplies it. An adjective, as we saw in Section III, needs a noun for the same kind of reason, because it signifies a quality as adhering to something; and agreement and government, as we have seen, are likewise relations between pairs of words. In each pair one word requires something, and the other supplies it. A word <strong>depends</strong> on another when its mode of signifying requires something that the other supplies, and the word that supplies it <strong>terminates</strong> the dependence, that is, completes what the dependent word requires: in “reads well,” “well” depends and “reads” terminates.</p>
<p>Thomas of Erfurt gives this as the reason why one word is constructed with another at all. Every construction, he says, has two parts: one word that depends (<i>dependēns</i>) and one word that terminates the dependence (<i>termināns</i>) (<i>Grammatica speculativa</i>, on construction). So dependence is the relation that explains why agreement and government occur: the dependent word takes the form required by the word on which it depends.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.` },

{ id: 'kinds',
  title: 'The principal dependences',
  body: `<p>Every pair of words joined in construction can be examined in this way. In “the tall tree,” “tall” needs “tree”; in “she speaks clearly,” “clearly” needs “speaks.” Thomas gives the principal kinds of dependence:</p>
<p>The <strong>adjective</strong> depends on the noun: “the tall tree,” <i>homō albus</i> (“a white man”).<br>The <strong>adverb</strong> depends on the verb: “she speaks clearly,” <i>currit bene</i> (“he runs well”).<br>The <strong>verb</strong> depends on its subject: “Socrates runs,” <i>Sōcratēs currit</i>.<br>The <strong>verb</strong> also depends on its object: “I strike Socrates,” <i>percutiō Sōcratem</i>.</p>
<p>The last two may seem surprising, since we usually think of the verb as the principal word of the sentence. But Thomas reasons that the verb signifies something going on, and something going on must be the action of something and, if it passes over, an action upon something. So the verb requires a subject and, if it is transitive, an object, and in this sense it depends on both.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.`,
  qp: { id: 'q-kinds', variants: [
    { prompt: `In “green apple,” which word depends, according to Thomas of Erfurt?`,
      options: [`“green” depends on “apple”`, `“apple” depends on “green”`, `Neither depends on the other`, `Each depends on the other equally`],
      answer: 0,
      explain: `The adjective signifies a quality as adhering to something, so it requires a noun: “green” depends, and “apple” terminates the dependence.` },
    { prompt: `In “Plato teaches,” which word depends, according to Thomas of Erfurt?`,
      options: [`“Plato” depends on “teaches”`, `“teaches” depends on “Plato”`, `Neither depends on the other`, `Each depends on the other equally`],
      answer: 1,
      explain: `Thomas reasons that the verb signifies something going on, which must be the action of something, so the verb depends on its subject: “teaches” depends on “Plato.”` },
    { prompt: `In “praise Plato,” which word depends, according to Thomas of Erfurt?`,
      options: [`“Plato” depends on “praise”`, `Neither depends on the other`, `“praise” depends on “Plato”`, `Each depends on the other equally`],
      answer: 2,
      explain: `For Thomas a transitive verb also depends on its object, because an action that passes over must be an action upon something. So “praise” depends on “Plato.” Tesnière, as we have seen, runs the dependence the other way.` }
  ]} },

{ id: 'many-constructions',
  title: 'One sentence, many constructions',
  body: `<p>Because each construction joins two words, a sentence of more than two words contains more than one construction. “The tired child sleeps soundly” contains three: “tired” depends on “child,” “sleeps” depends on “child,” and “soundly” depends on “sleeps”; the article “the” also depends on “child,” as an adjective does. Thomas’s own example has the same form, <i>homō albus currit bene</i>, “a white man runs well,” with the same three constructions: <i>albus</i> depends on <i>homō</i>; <i>currit</i> depends on <i>homō</i>; and <i>bene</i> depends on <i>currit</i>.</p>
<p>So the analysis of a sentence finds every dependence, one pair at a time. A sentence is congruous when every one of its constructions is congruous, and it is complete when the dependences together produce a complete sense, which requires at least the construction of a subject and a verb.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.`,
  qp: { id: 'q-many-constructions', variants: [
    { prompt: `How many constructions does Latin <i>agricola laetus cantat saepe</i> (“the happy farmer often sings”) contain?`,
      options: [`Two`, `Three`, `Four`, `One`],
      answer: 1,
      explain: `Each construction joins two words: <i>laetus</i> depends on <i>agricola</i>, <i>cantat</i> depends on <i>agricola</i>, and <i>saepe</i> depends on <i>cantat</i>. So there are three, as in <i>homō albus currit bene</i>.` },
    { prompt: `In “The patient angler catches a trout,” on which word does “patient” depend?`,
      options: [`“angler”`, `“catches”`, `“trout”`, `“The”`],
      answer: 0,
      explain: `“Patient” is an adjective and signifies a quality of the angler, so it depends on “angler.”` },
    { prompt: `A sentence is complete when its dependences together produce a complete sense. Which construction must it contain at least?`,
      options: [`An adjective and a noun`, `An adverb and a verb`, `A subject and a verb`, `A preposition and a noun`],
      answer: 2,
      explain: `Completeness requires at least the construction of a subject and a verb; a sentence without it, however many other constructions it has, does not yet say that anything is or is not so.` }
  ]} },

{ id: 'transitive-intransitive',
  title: 'Transitive and intransitive constructions',
  body: `<p>In “Socrates runs,” the running belongs to Socrates himself, and in “white man” the whiteness belongs to the man; in each, the two words refer to the same thing. In “I strike Socrates,” the striking passes from the one who strikes to Socrates, and “the son of Socrates” reaches from the son to another person. Priscian sorts constructions according to whether the action passes from one person to another, and from him later grammarians took the names <strong>transitive</strong> and <strong>intransitive</strong> construction. Thomas of Erfurt uses these names in a broader way: a construction is intransitive when its two words refer to the same thing, as in <i>Sōcratēs currit</i> and <i>homō albus</i>, and transitive when the dependent word passes over to something else, as in <i>percutiō Sōcratem</i> and <i>fīlius Sōcratis</i> (<i>Grammatica speculativa</i>, on construction).</p>
<p>So Thomas’s transitive construction includes not only the verb with its object but also the noun with a genitive, because in both cases the construction reaches from one thing to another. This classification shows that the relation of a verb to its object and the relation of a noun to its genitive, which look different, are of the same kind.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> XVII–XVIII; Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction; both in paraphrase.` },

{ id: 'tesniere',
  title: 'Modern dependency grammar',
  body: `<p>When we ask what a sentence such as “The farmer sold his neighbor a cow” is built around, the natural answer is the verb “sold.” Without it the other words do not hold together, whereas “the farmer,” “his neighbor,” and “a cow” each answer a question that the verb raises: who sold, to whom, and what. On this view the verb is the center of the sentence, and the other words depend on it.</p>
<p>In the twentieth century the French linguist Lucien Tesnière, in his <i>Éléments de syntaxe structurale</i> (1959), developed a grammar on this view, which also describes the sentence as a set of words depending on words. He drew each sentence as a tree, which he called a <i>stemma</i>, with the governing word above and its dependents below. For the adjective and the adverb, Tesnière’s account agrees with Thomas’s: “tired” depends on “child,” and “soundly” on “sleeps.”</p>
<p>For the verb, however, the two accounts differ. Tesnière makes the verb the head of the whole sentence, with the subject and the object depending on it, whereas Thomas makes the verb depend on the subject and on the object. Both accounts agree that the verb and its subject and object are joined by dependence; they disagree about which way it runs. Thomas reasons from the mode of signifying of the verb, which requires a subject; Tesnière reasons from the verb’s place at the center of the sentence, on which every other word finally depends.</p>`,
  src: `Tesnière, <i>Éléments de syntaxe structurale</i> (1959), Book A, in paraphrase.` },

{ id: 'valency',
  title: 'The valency of the verb',
  body: `<p>Verbs differ in how many words they require. Latin <i>pluit</i> (“it rains”) requires no participant at all; “sleeps” requires one, someone who sleeps; “strikes” requires two (someone strikes someone); and “gives” requires three (someone gives something to someone). Tesnière called the number of words that a verb requires to complete it its <strong>valency</strong>, by comparison with the number of other atoms with which an atom of a chemical element can combine. So <i>pluit</i> has no valency, “sleeps” has a valency of one, “strikes” a valency of two, and “gives” a valency of three.</p>
<p>The idea of valency agrees with the older doctrine of government. A verb of two places, such as <i>dūcit</i>, governs an accusative; a verb of three places, such as <i>dat</i>, governs an accusative and a dative: <i>pater fīliō librum dat</i>, “the father gives his son a book.” So the number of words that a verb requires, and the cases in which it requires them, are both part of its meaning.</p>`,
  src: `Tesnière, <i>Éléments de syntaxe structurale</i> (1959), Book D, in paraphrase.`,
  qp: { id: 'q-valency', variants: [
    { prompt: `How many participants does Latin <i>ningit</i> (“it snows”) require?`,
      options: [`None`, `One`, `Two`, `Three`],
      answer: 0,
      explain: `Like <i>pluit</i>, <i>ningit</i> requires no participant at all: no one snows. Its valency is zero.` },
    { prompt: `What is the valency of “sends” in “The queen sends the envoy a letter”?`,
      options: [`One`, `Two`, `Three`, `Four`],
      answer: 2,
      explain: `“Sends” requires three participants: someone who sends (the queen), something sent (a letter), and someone to whom it is sent (the envoy). Like “gives,” it has a valency of three.` },
    { prompt: `In which cases does Latin <i>amat</i> (“he loves”) require its participants?`,
      options: [`Nominative and dative`, `Nominative only, for the subject`, `Accusative and dative`, `Nominative and accusative`],
      answer: 3,
      explain: `<i>Amat</i> is a verb of two places: someone loves (the subject, in the nominative) and someone is loved (the object, governed in the accusative).` }
  ]} },

{ id: 'marking',
  title: 'Marking the dependences of a sentence',
  body: `<p>A sentence can be analyzed by marking each dependence with an arrow, drawn from the word that depends to the word that terminates its dependence. In this course the arrows follow Thomas of Erfurt. In “The clever hunter sees the wolf,” “clever” depends on “hunter,” “the” depends on “hunter” and the second “the” on “wolf,” and “sees” depends on “hunter” and on “wolf.”</p>
<p>The marking makes visible what the endings of Latin show and the order of English implies. In <i>vēnātor callidus lupum videt</i>, the endings show that <i>callidus</i> belongs with <i>vēnātor</i> and that <i>lupum</i> is the object; in English the order shows the same relations. In both languages the dependences are the same, and the analysis of a sentence consists in finding them.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, in paraphrase.`,
  qp: { id: 'q-marking', variants: [
    { prompt: `In “The quiet scribe copies the book,” on which word does “quiet” depend?`,
      options: [`“scribe”`, `“copies”`, `“book”`, `“The”`],
      answer: 0,
      explain: `“Quiet” is an adjective, so its arrow runs to the noun it describes, “scribe.”` },
    { prompt: `In “The deer runs swiftly,” on which word does “swiftly” depend?`,
      options: [`“deer”`, `“runs”`, `“The”`, `On no word`],
      answer: 1,
      explain: `“Swiftly” is an adverb and signifies a manner of acting, so it depends on the verb “runs.”` },
    { prompt: `In “The scribe copies the book,” on which words does “copies” depend, in the arrows of this course?`,
      options: [`On “scribe” only`, `On “book” only, as its object`, `On “scribe” and on “book”`, `On neither`],
      answer: 2,
      explain: `The arrows follow Thomas of Erfurt: the verb depends on its subject, “scribe,” and, being transitive, on its object, “book.”` }
  ]} },

{ id: 'prepositional',
  title: 'The dependence of phrases',
  body: `<p>A preposition and its noun make a phrase, and the whole phrase depends on another word. In “the lamp on the table,” “on the table” depends on “lamp” and describes it, as an adjective would; in “She waited by the door,” “by the door” depends on “waited” and tells where, as an adverb would. Within the phrase, the noun depends on the preposition, which governs its case: <i>in templō</i>, where <i>templō</i> is in the ablative because <i>in</i> requires it.</p>
<p>So dependence works at more than one level. Single words depend on single words, and groups of words depend on words as wholes. This is why we will study the phrase and the clause as units of construction: each of them depends on another word as a single part of speech would.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Tesnière, <i>Éléments</i>; both in paraphrase.` },

{ id: 'together',
  title: 'Dependence, agreement, and government',
  body: `<p>We can now see how the relations studied in this section fit together. Dependence is the relation that every construction has: one word requires another. Agreement and government are the forms in which dependence is shown. When the dependent word shares accidents with the terminant, as the adjective with its noun, there is agreement; when one word requires a case in another, as the verb in its object, there is government.</p>
<p>In <i>gladiātor validus clipeum gerit</i>, “the strong gladiator carries a shield,” <i>validus</i> depends on <i>gladiātor</i> and agrees with it; <i>gerit</i> depends on <i>gladiātor</i> and agrees with it in person and number; and <i>gerit</i> depends on <i>clipeum</i> and governs it in the accusative. These relations do not depend on the order of the words, which in Latin can vary widely; what the order of words does is a further question of construction.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>; Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.`,
  qp: { id: 'q-together', variants: [
    { prompt: `In Latin <i>puer parvus pilam iacit</i> (“the little boy throws the ball”), how is the dependence of <i>parvus</i> on <i>puer</i> shown?`,
      options: [`By agreement`, `By government`, `By neither`, `By the order of the words alone`],
      answer: 0,
      explain: `<i>Parvus</i> shares the gender, number, and case of <i>puer</i>, so the dependence is shown by agreement.` },
    { prompt: `In Latin <i>agricola equum vēndit</i> (“the farmer sells the horse”), how is the dependence of <i>vēndit</i> on <i>equum</i> shown?`,
      options: [`By agreement`, `By government`, `By neither`, `By the order of the words alone`],
      answer: 1,
      explain: `<i>Vēndit</i> has no case, but it requires <i>equum</i> in the accusative, so the dependence is shown by government.` },
    { prompt: `In Latin <i>dormit diū</i> (“he sleeps long”), how is the dependence of <i>diū</i> on <i>dormit</i> shown?`,
      options: [`By agreement`, `By government`, `By neither`, `By the case of <i>diū</i>`],
      answer: 2,
      explain: `<i>Diū</i> is an adverb and has no accidents to share or to be required in, so its dependence is shown by neither agreement nor government; it is known from its meaning.` }
  ]} }

  ]
};
