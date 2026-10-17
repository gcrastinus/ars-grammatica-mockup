/* I.2 Imposition [i.imposition]
   Plan (ITEM-LIST.md): 8 panels, 2 question points, each with exactly 3 variants.
   Live material drawn on: DECKS.vox ("Significant and not significant": by nature and by imposition, ad placitum);
   EX.vox (groan, bark, the name "horse"); old DECKS.prelim, panel "Where this question has been argued"
   (languages differ in their sounds, Boethius of Dacia). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['i.imposition'] = {
  id: 'i.imposition',
  title: 'Imposition',
  sub: 'How a sound comes to signify, and the names of the first and the second imposition',
  sources: `Aristotle, <i>De interpretatione</i> 2; Boethius, <i>In Categorias Aristotelis</i> I; St. Thomas, <i>In Peri hermeneias</i> I, and <i>Summa theologiae</i> I, q. 13.`,
  panels: [

{ id: 'what-imposition',
  title: 'What is imposition?',
  body: `<p>We have seen that words are conventional signs: they signify because those who use them assign them a meaning, a signification; words do not have meaning by nature. The tradition calls the act by which a sound is first given a meaning <strong>imposition</strong> (Latin <i>impositio</i>, from <i>imponere</i>, “to place upon”), because a meaning is, as it were, placed upon a sound. A word that signifies in this way is said to signify by imposition, or, in Latin, <i>ad placitum</i>, that is, “by agreement” or “as it has pleased” those who use it.</p>
<p>Imposition is not only something that happened in the past. It still happens whenever we name something new. Parents impose a name on a child, a discoverer names a new element or a new species, and an inventor names a new machine. For most words the first imposition is in the past and unknown; indeed, many words have undergone significant changes in sound over the centuries as languages themselves change, and the sounds the words have now are due in significant ways to gradual shifts; for example, the English word “neither” used to be pronounced like n-ee-ther, as it still is in North America, but is now pronounced n-eye-ther in England. Still, every word was imposed by someone at some time. Those who learn a language do not impose its words again; they receive meanings that others have already imposed. That is why learning a word means learning what it has been used to signify and why a learner cannot simply decide for himself what a word will mean.</p>`,
  src: ``, },

{ id: 'not-by-nature',
  title: 'Why do words signify by imposition and not by nature?',
  body: `<p>Aristotle explains why he added “by convention” to the definition: “nothing is by nature a noun or name—it is only so when it becomes a symbol; inarticulate sounds, such as those which brutes produce, are significant, yet none of these constitutes a noun” (<i>De interpretatione</i> 2, 16a26–29). A groan or the bark of a dog signifies something by nature, as we saw with natural signs; but it is not a word, because no one has given it a meaning.</p>
<p>The clearest evidence that words signify by imposition is that languages differ. If the sound of a word signified by nature, every people would use the same sound for the same thing, as every people groans in the same way. Even words that imitate a sound are imposed: the cry of a rooster is “cock-a-doodle-doo” in English and <i>cocorico</i> in French, and the sound of a bee is “buzz” in English. These words are chosen because they resemble a natural sound, but each language has chosen its own, and so they too signify by imposition.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 2, 16a26–29.`,
  qp: { id: 'q-imposition', variants: [
    { prompt: `A groan signifies pain. Why is it not a word?`,
      options: [`Because it signifies nothing at all`, `Because it signifies by nature, and no one has given it its meaning`, `Because it is too short to be a word`, `Because it cannot be written down`],
      answer: 1,
      explain: `A groan does signify pain, but it signifies by nature, as all natural signs do. A word signifies by imposition, that is, because those who use it have given it a meaning; Aristotle says that the inarticulate sounds of animals are significant, yet none of them is a noun (<i>De interpretatione</i> 2).` },
    { prompt: `The English word “buzz” imitates the sound of a bee. How does it signify?`,
      options: [`By imposition, because English speakers chose it, even though it resembles a natural sound`, `By nature, because it sounds like what it names`, `It does not signify, because it only imitates a sound`, `By nature in English, but by imposition in other languages`],
      answer: 0,
      explain: `A word that imitates a sound is still chosen by the speakers of a language, and other languages choose other sounds for the same thing. So it signifies by imposition, although the sound was chosen for its likeness to a natural sound.` },
    { prompt: `What is the clearest evidence that words signify by imposition?`,
      options: [`That words can be written down`, `That some words are longer than others`, `That different languages use different sounds for the same thing`, `That animals cannot speak`],
      answer: 2,
      explain: `If words signified by nature, every people would use the same sound for the same thing, as every people groans in the same way. Because English says “horse” and Latin says <i>equus</i>, the sound must signify because of the speakers’ use, that is, by imposition.` }
  ]}},

{ id: 'cratylus',
  title: 'The ancient question: are names by nature or by convention?',
  body: `<p>The question whether names signify by nature or by convention is one of the oldest questions in the study of language. In Plato’s dialogue <i>Cratylus</i>, Cratylus holds that each thing has a name that belongs to it by nature, while Hermogenes holds that names are fixed only by the agreement and custom of those who use them. Socrates examines both views and grants something to each: he shows that many names seem to have been chosen for a reason, but he also shows that custom and agreement play a part in every name.</p>
<p>The tradition that follows Aristotle gives the answer that we have seen: the sound of a word is imposed, and so it is not by nature. But that answer does not deny everything that Cratylus held. As we will see, the one who imposes a name usually has a reason for the name he chooses, even though the sound itself does not signify by nature.</p>`,
  src: `Plato, <i>Cratylus</i>, in paraphrase.` },

{ id: 'reason-for-name',
  title: 'The reason for a name, and what the name signifies',
  body: `<p>St. Thomas distinguishes two things in the imposition of a name: that from which the name is taken, and that which the name is imposed to signify. His example comes from the old etymology of the Latin word for stone, <i>lapis</i>, which was said to come from <i>laedit pedem</i>, “it hurts the foot.” The name, on that account, was taken from the fact that a stone hurts the foot; but it was not imposed to signify hurting the foot. It was imposed to signify a stone, a certain kind of body (<i>Summa theologiae</i> I, q. 13, a. 2, ad 2, in paraphrase).</p>
<p>So the reason for a name and the meaning of the name are not the same. The English word “daisy” comes from “day’s eye,” because the flower opens in the morning and closes at night; but “daisy” signifies the flower, and not an eye or a day. The word “breakfast” was taken from breaking the fast of the night, but it signifies the morning meal, even when no one has fasted. The reason for the name explains why a sound was chosen, but the meaning is fixed by the imposition and by usage.</p>`,
  src: `St. Thomas, <i>Summa theologiae</i> I, q. 13, a. 2, ad 2, in paraphrase.` },

{ id: 'usage-change',
  title: 'Imposition and usage',
  body: `<p>A word receives its meaning by imposition, but it keeps or changes that meaning by usage. We saw in the Preliminary section that usage, the agreed practice of educated speakers, is one of the criteria of correctness. Usage also governs meaning: when the speakers of a language come to use a word for something new, the word comes to signify the new thing.</p>
<p>So the English word “nice” comes from the Latin <i>nescius</i>, “ignorant,” and for centuries it meant “foolish” before it came to mean “pleasant.” The word “silly” once meant “blessed” or “happy,” and the word “girl” in Middle English could mean a young person of either sex. In each case the sound remained, but the agreement of those who used it changed, and so the meaning changed. This is one more sign that words signify by imposition and not by nature, since a natural sign does not change its meaning when people change their minds.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.3, I.6.45.` },

{ id: 'first-second',
  title: 'The first and the second imposition',
  body: `<p>Boethius, in his commentary on Aristotle’s <i>Categories</i>, distinguishes two impositions. Names of the <strong>first imposition</strong> were imposed to signify things: “horse,” “stone,” “white,” and “run” signify a kind of animal, a kind of body, a color, and an action. Names of the <strong>second imposition</strong> were imposed to signify words themselves: “noun,” “verb,” “syllable,” and “plural” signify not things in the world but words, considered as words (<i>In Categorias Aristotelis</i> I, in paraphrase).</p>
<p>So in “The horse is running,” the word “horse” is a name of the first imposition, because it signifies an animal. But in “‘Horse’ is a noun,” the word “noun” is a name of the second imposition, because it signifies the word “horse” as a word. The first imposition gives us words for things; the second gives us words for talking about words.</p>`,
  src: `Boethius, <i>In Categorias Aristotelis</i> I, in paraphrase (no published English translation).`,
  qp: { id: 'q-second', variants: [
    { prompt: `In “‘Horse’ is a noun,” the word “noun” is a name of which imposition?`,
      options: [`The first imposition, because it signifies a thing in the world`, `The second imposition, because it signifies a word as a word`, `Neither, because it signifies by nature`, `Both, because it signifies a horse`],
      answer: 1,
      explain: `“Noun” was imposed to signify words considered as words, and here it signifies the word “horse.” Such names belong to the second imposition. Names like “horse” and “stone,” which signify things, belong to the first.` },
    { prompt: `In “The horse is running,” the word “horse” is a name of which imposition?`,
      options: [`The second imposition, because it is a noun`, `Neither, because it is part of a sentence`, `The first imposition, because it signifies an animal`, `The second imposition, because it can be written`],
      answer: 2,
      explain: `“Horse” was imposed to signify a kind of animal, and here it signifies that animal; so it is a name of the first imposition. The name “noun,” which signifies the word “horse” as a word, would belong to the second.` },
    { prompt: `Which of these words is a name of the second imposition?`,
      options: [`“Syllable”`, `“Stone”`, `“White”`, `“Run”`],
      answer: 0,
      explain: `“Syllable” signifies a part of a word, and so it signifies words as words; it is a name of the second imposition. “Stone,” “white,” and “run” signify a body, a color, and an action, and so they are names of the first imposition.` }
  ]}},

{ id: 'grammar-second',
  title: 'Why does grammar need names of the second imposition?',
  body: `<p>Grammar is the art of speaking and writing correctly, and so it must speak about words: it says that “horse” is a noun, that “horses” is plural, that “runs” agrees with “horse.” For that reason almost every technical term of grammar is a name of the second imposition. “Noun,” “verb,” “letter,” “syllable,” “sentence,” “subject,” and “plural” all signify words or parts or arrangements of words.</p>
<p>When we speak about a word as a word, we mark it so that the reader knows it is being mentioned and not used. In this course an English word mentioned as a word is set in double quotation marks, as in “‘Horse’ has five letters,” and a Latin word mentioned as a word is set in italics, as in “<i>equus</i> is a noun.” The sentence “The horse has four legs” speaks about an animal; the sentence “‘Horse’ has five letters” speaks about a word. Logic studies this difference further, as we will see in Section VIII.</p>`,
  src: `Boethius, <i>In Categorias Aristotelis</i> I, in paraphrase.` },

{ id: 'many-languages',
  title: 'Imposition and the many languages',
  body: `<p>Because each people imposes its own sounds, languages differ in their words. But, as we have seen, what the words signify (the concepts of the mind and the things themselves) is the same for all. The medieval grammarian Boethius of Dacia draws the conclusion for grammar: the languages differ in their sounds because the sounds are imposed, but what is signified, and the ways in which it is signified, are common to all (<i>Modi significandi</i>, in paraphrase).</p>
<p>This is why the art of grammar can be studied in English and Latin together. The particular grammar of a language describes the sounds and forms that its speakers have imposed: English says “the horse runs,” Latin says <i>equus currit</i>, and German says <i>das Pferd läuft</i>. The art of grammar also asks what is common to them all; in all three sentences, a word that names a thing is joined to a word that says what the thing is doing.</p>`,
  src: `Boethius of Dacia, <i>Modi significandi</i>, in paraphrase (locus to be checked).` }

  ]
};
