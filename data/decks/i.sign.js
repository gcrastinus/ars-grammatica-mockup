/* I.1 Sign and Symbol [i.sign]
   Plan (ITEM-LIST.md): 10 panels, 3 question points, each with exactly 3 variants.
   Live material drawn on: DECKS.traditions (the John of St. Thomas panel: formal and instrumental signs);
   old DECKS.prelim ("The material," "From voice to the sentence"); DECKS.vox (sign by nature and by imposition). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['i.sign'] = {
  id: 'i.sign',
  title: 'Sign and Symbol',
  sub: 'Natural and given signs, and the spoken word as a sign of what is in the mind',
  sources: `Augustine, <i>De doctrina christiana</i> II.1–4; Aristotle, <i>De interpretatione</i> 1; St. Thomas, <i>In Peri hermeneias</i> I; John of St. Thomas, <i>Tractatus de signis</i>.`,
  panels: [

{ id: 'what-sign',
  title: 'What is a sign?',
  body: `<p>We saw in the Preliminary section that the material of grammar is speech, that is, the voice as it signifies thoughts in the mind (i.e., voice as it has meaning) and as it is arranged into phrases and sentences. Something that signifies (or has meaning) is a sign. A word, then, is some kind of sign. This means that, before grammar considers the sounds and letters of which words are made, it must say what a sign is and how a word signifies. That is the subject of this first section of the course.</p>
<p>St. Augustine gives the definition that the medieval schools used: “a sign is a thing which, over and above the impression it makes on the senses, causes something else to come into the mind as a consequence of itself” (<i>De doctrina christiana</i> II.1.1). John of St. Thomas, twelve hundred years later, states the definition like this: a sign is “that which represents something other than itself to a cognitive power” (<i>Summulae logicae</i> I.2, tr. Deely).</p>
<p>A sign, therefore, is first something that we perceive, like sound or a gesture or writing; but it does not stop there, since the sign brings something else to mind by means of what we perceive. To take some simple examples, a footprint in the snow makes us think of the animal that passed, smoke makes us think of fire, and the spoken word “fire” makes us think of fire as well, although the sound of the word is nothing like a flame. This is a general account of what a sign is. But we need to say more.</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II.1.1; John of St. Thomas, <i>Summulae logicae</i> I.2, in <i>Tractatus de Signis</i>, tr. John Deely.` },

{ id: 'three-aspects',
  title: 'The sign, what it signifies, and the one who knows',
  body: `<p>Every sign involves three things: the sign itself, what it signifies, and someone who knows by means of it. The sign is what is perceived, such as the smoke or the spoken word; what it signifies is what the sign brings to mind, such as the fire; and the one who knows is the person whose mind is led from the sign to what it signifies.</p>
<p>The third of these is easy to overlook, but a sign signifies only to a knowing power. Smoke signifies fire to a traveler who knows that smoke comes from fire, but it signifies nothing to the trees around it. In the same way, the Latin word <i>ignis</i> (“fire”) signifies fire to someone who knows Latin, but to someone who does not know Latin it is only a sound. So the study of signs is always also a study of how something is known by someone.</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II.1.1–2, in paraphrase.` },

{ id: 'natural',
  title: 'Natural signs',
  body: `<p>St. Augustine divides signs into two kinds, natural signs and given signs. “Natural signs are those which, apart from any intention or desire of using them as signs, do yet lead to the knowledge of something else, as, for example, smoke when it indicates fire” (<i>De doctrina christiana</i> II.1.2). A natural sign, therefore, signifies because of what it is and how it is connected with what it signifies, and not because anyone means it to signify.</p>
<p>So the track of an animal signifies the animal that made it, a dark cloud signifies coming rain, and the face of an angry man signifies his anger even when he would rather hide it. A groan is also a natural sign: it shows pain by nature, and it shows the same pain in every country, whatever language the one who groans speaks.</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II.1.2.` },

{ id: 'given',
  title: 'Given signs',
  body: `<p>The second kind is given signs (<i>signa data</i>, which the English translation of St. Augustine renders “conventional signs”). These are signs “which living beings mutually exchange for the purpose of showing, as well as they can, the emotions of their minds, or their perceptions, or their thoughts” (<i>De doctrina christiana</i> II.2.3). A given sign, therefore, signifies because someone means it to signify; it is given by one mind to another.</p>
<p>A nod of the head, a raised hand in a classroom, the sound of a trumpet that signals an attack, and a flag raised over a ship are all given signs. But St. Augustine adds that among the signs by which human beings express their thoughts, words hold by far the first place; he observes that he can put into words what gestures and other signs signify, but that he cannot express words by gestures (II.3.4, in paraphrase).</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II.2.3, II.3.4.`,
  qp: { id: 'q-natural-given', variants: [
    { prompt: `A column of smoke rises over a hill. What kind of sign is it, in St. Augustine’s division?`,
      options: [`A given sign, because someone lit the fire`, `A natural sign, because it signifies fire whether or not anyone means it to`, `Not a sign at all, because it is only smoke`, `A word, because it signifies something`],
      answer: 1,
      explain: `Smoke signifies fire because of the connection between them, and not because anyone means it to signify. That is what St. Augustine calls a natural sign; his own example is smoke indicating fire (<i>De doctrina christiana</i> II.1.2).` },
    { prompt: `A sailor raises a flag to tell another ship to stop. What kind of sign is the flag?`,
      options: [`A given sign, because the sailor means it to signify his thought`, `A natural sign, because flags are made of natural materials`, `Not a sign, because it makes no sound`, `A natural sign, because it is seen by the eyes`],
      answer: 0,
      explain: `The flag signifies because the sailor means it to signify, and the other ship understands it by an agreement between them. A given sign is one that living beings exchange to show their thoughts; it need not be spoken.` },
    { prompt: `Which of these is a natural sign?`,
      options: [`The word “rain”`, `A bell rung to call students to class`, `A raised hand in a classroom`, `A dark cloud before a storm`],
      answer: 3,
      explain: `A dark cloud signifies coming rain by its natural connection with rain, whether or not anyone means it to signify. The word, the bell, and the raised hand signify because someone means them to; they are given signs.` }
  ]}},

{ id: 'aristotle',
  title: 'The spoken word as a sign of what is in the mind',
  body: `<p>Aristotle begins his short work on the statement, <i>De interpretatione</i> (in Greek <i>Peri hermeneias</i>, “On Interpretation”), with the account of words that the whole later tradition followed: “Spoken words are the symbols of mental experience and written words are the symbols of spoken words” (<i>De interpretatione</i> 1, 16a3–4). The “mental experience” here is what the tradition calls a concept, that is, what the mind forms within itself when it understands something.</p>
<p>So there are three steps. The written word “horse” is a sign of the spoken word; the spoken word is a sign of the concept of a horse in the mind; and the concept, in turn, is of the horse itself. In the same way, the Latin <i>equus</i> written on the page signifies the Latin word as it is spoken, and the spoken word signifies the concept of a horse in the mind of someone who knows Latin.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1, 16a3–8.` },

{ id: 'same-for-all',
  title: 'Why do words differ while concepts are the same?',
  body: `<p>Aristotle continues: “Just as all men have not the same writing, so all men have not the same speech sounds, but the mental experiences, which these directly symbolize, are the same for all, as also are those things of which our experiences are the images” (<i>De interpretatione</i> 1, 16a5–8). The words of different languages differ, but what they signify does not differ in the same way, because the things are the same and the minds that understand them understand the same things.</p>
<p>So English “horse,” Latin <i>equus</i>, German <i>Pferd</i>, and French <i>cheval</i> are four different sounds and four different written forms, but a speaker of each language who hears his own word thinks of the same kind of animal. That is why translation is possible at all, and it is also why grammar can study what is common to languages as well as what belongs to one language alone.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1, 16a5–8.` },

{ id: 'through-concepts',
  title: 'Words signify things by means of concepts',
  body: `<p>St. Thomas, commenting on this chapter, draws out what follows from it: words signify the concepts of the mind immediately, and through those concepts they signify things (<i>In Peri hermeneias</i> I, lect. 2, in paraphrase). We do not speak in order to talk about our concepts but in order to talk about things; but we can speak of things only as we understand them, and so the word reaches the thing by way of the concept.</p>
<p>This order explains a fact that every student of language notices. A single thing can be named in many ways, according to the way it is understood: the same man can be called “the teacher,” “the father of three children,” or “the man at the door.” The man is the same, but each name signifies him according to a different understanding of him. In the same way, Latin <i>sol</i> and English “sun” signify one and the same star, because the concept of the sun is the same, though the sounds differ.</p>`,
  src: `St. Thomas, <i>In Peri hermeneias</i> I, lect. 2, in paraphrase.`,
  qp: { id: 'q-order', variants: [
    { prompt: `According to Aristotle, of what is the spoken word directly a sign?`,
      options: [`Of the written word`, `Of a concept in the mind`, `Of the thing itself, without any concept`, `Of nothing, since sounds signify nothing`],
      answer: 1,
      explain: `“Spoken words are the symbols of mental experience,” that is, of concepts (<i>De interpretatione</i> 1). The written word is a sign of the spoken word, and the spoken word reaches the thing by means of the concept.` },
    { prompt: `English “horse” and German <i>Pferd</i> are different words. What is the same for an English speaker and a German speaker who hear them?`,
      options: [`The sound of the word`, `The written form of the word`, `The concept of the animal, and the animal itself`, `Nothing at all, since each language signifies a different thing`],
      answer: 2,
      explain: `Aristotle says that speech sounds and writing differ from people to people, but the mental experiences they signify are the same for all, as are the things themselves (<i>De interpretatione</i> 1, 16a5–8).` },
    { prompt: `Put these in the order in which each is a sign of the next: the concept, the written word, the spoken word.`,
      options: [`The concept, then the spoken word, then the written word`, `The spoken word, then the written word, then the concept`, `The written word, then the concept, then the spoken word`, `The written word, then the spoken word, then the concept`],
      answer: 3,
      explain: `The written word is a sign of the spoken word, and the spoken word is a sign of the concept; the concept, in turn, is of the thing. So we read from the mark to the sound, from the sound to the understanding, and through the understanding to the thing.` }
  ]}},

{ id: 'symbol',
  title: 'What is a symbol?',
  body: `<p>Aristotle calls spoken words “symbols” (Greek <i>symbola</i>), and a few lines later he calls them “signs” (<i>sēmeia</i>) of what is in the mind (<i>De interpretatione</i> 1, 16a6). The Greek <i>symbolon</i> was a token, such as half of a broken coin or tablet, kept by each of two parties to an agreement so that the two halves could later be matched. So when Aristotle calls words symbols, he means that they signify by an agreement among those who use them, and not by nature.</p>
<p>In ordinary English, a symbol is a sign of this kind: a sign that signifies by agreement or custom. The cross on a church, the letters of the alphabet, the sign “+” in arithmetic, and the words of every language are all symbols in this sense. Every symbol is a sign, but not every sign is a symbol; smoke is a sign of fire, but it is not a symbol of fire, because no one agreed that it should signify.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1, 16a3–8.` },

{ id: 'formal-instrumental',
  title: 'Instrumental and formal signs',
  body: `<p>John of St. Thomas (also called John Poinsot), a Thomist philosopher of the seventeenth century, adds a further division in his treatise on signs. An <strong>instrumental</strong> sign is one that must first be known as an object in its own right before it leads the mind to something else: smoke must first be seen, a footprint noticed, and a spoken word heard. A <strong>formal</strong> sign is one that leads the mind to its object without first being known as an object itself. The concept is a formal sign; it is that by which we know the thing, not what we first know.</p>
<p>So when we think of a horse, it is the horse that we think of, and not, at first, our concept of the horse; we can reflect on the concept afterwards, but we do not need to notice it in order to know the horse by means of it. The spoken word “horse,” by contrast, must first be heard as a sound. Grammar studies words, and words are instrumental signs; but they signify by means of concepts, which are formal signs.</p>`,
  src: `John of St. Thomas, <i>Tractatus de signis</i> (Ars logica II, q. 22), as expounded by John Deely, in paraphrase.`,
  qp: { id: 'q-formal', variants: [
    { prompt: `According to John of St. Thomas, what is the difference between an instrumental sign and a formal sign?`,
      options: [`An instrumental sign must first be known as an object; a formal sign need not be`, `An instrumental sign is written, and a formal sign is spoken`, `An instrumental sign is natural, and a formal sign is given`, `They are two names for the same kind of sign`],
      answer: 0,
      explain: `Smoke must first be seen and a word must first be heard before either leads the mind to something else; these are instrumental signs. A concept leads the mind to its object without first being known as an object itself; it is a formal sign.` },
    { prompt: `Which of these is a formal sign?`,
      options: [`The spoken word “horse”`, `The written word “horse”`, `A footprint in the snow`, `The concept of a horse in the mind`],
      answer: 3,
      explain: `The concept is that by which we know the horse; we know the horse by means of it without first noticing the concept itself. The spoken word, the written word, and the footprint must each first be perceived, and so they are instrumental signs.` },
    { prompt: `When we think of a horse, what do we first know?`,
      options: [`Our concept of the horse, and then the horse`, `The horse, by means of the concept`, `The word “horse,” and then the concept`, `Nothing, until the horse is in front of us`],
      answer: 1,
      explain: `The concept is a formal sign: it is that by which we know the horse, not what we first know. We can reflect on the concept afterwards, but it is the horse that we think of.` }
  ]}},

{ id: 'why-grammar',
  title: 'Why does grammar begin with the sign?',
  body: `<p>We have now seen what a sign is, how natural signs differ from given signs, and how the spoken word signifies things by means of concepts. Grammar begins here because its material is speech, and speech is made of given signs. A sound becomes a word only when it signifies; so the grammarian must know what it is for a sound to signify before he can study the sounds themselves, their letters and syllables, and the ways in which words are formed and arranged.</p>
<p>This order also explains why grammar is not the same as the study of sounds in natural philosophy or in modern phonetics. A groan, a cough, and the word “horse” are all sounds, but only the word belongs to grammar, because only the word signifies by the agreement of those who use it. How a sound comes to signify in this way is the question of imposition, which belongs to this section as well; and the sounds themselves are the subject of Section II, The Matter of Speech.</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II; Aristotle, <i>De interpretatione</i> 1–2.` }

  ]
};
