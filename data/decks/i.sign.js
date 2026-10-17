/* I.1 Sign and Symbol [i.sign]
   Plan (ITEM-LIST.md): 10 panels, 3 question points, each with exactly 3 variants.
   Live material drawn on: DECKS.traditions (the John of St. Thomas panel: formal and instrumental signs);
   old DECKS.prelim ("The material," "From voice to the sentence"); DECKS.vox (sign by nature and by imposition). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['i.sign'] = {
  id: 'i.sign',
  title: 'Sign and Symbol',
  sub: 'Natural and conventional signs, and the spoken word as a sign of what is in the mind',
  sources: `Augustine, <i>De doctrina christiana</i> II.1–4; Aristotle, <i>De interpretatione</i> 1; St. Thomas, <i>In Peri hermeneias</i> I; John of St. Thomas, <i>Tractatus de signis</i>.`,
  panels: [

{ id: 'what-sign',
  title: 'What is a sign?',
  body: `<p>We saw in the Preliminary section that the material of grammar is speech, that is, the voice as it signifies thoughts in the mind (i.e., voice as it has meaning) and as it is arranged into phrases and sentences. Something that signifies (or has meaning) is a sign. A word, then, is some kind of sign. This means that, before grammar considers the sounds and letters of which words are made, it must say what a sign is and how a word signifies. That is the subject of this first section of the course.</p>
<p>St. Augustine gives the definition that the medieval schools used: “a sign is a thing which, over and above the impression it makes on the senses, causes something else to come into the mind as a consequence of itself” (<i>De doctrina christiana</i> II.1.1). John of St. Thomas, twelve hundred years later, states the definition like this: a sign is “that which represents something other than itself to a cognitive power” (<i>Summulae logicae</i> I.2).</p>
<p>A sign, therefore, is first something that we perceive, like sound or a gesture or writing; but it does not stop there, since the sign brings something else to mind by means of what we perceive. To take some simple examples, a footprint in the snow makes us think of the animal that passed, smoke makes us think of fire, and the spoken word “fire” makes us think of fire as well, although the sound of the word is nothing like a flame. This is a general account of what a sign is. But we need to say more.</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II.1.1; John of St. Thomas, <i>Summulae logicae</i> I.2, in <i>Tractatus de Signis</i>, tr. John Deely.` },

{ id: 'three-aspects',
  title: 'The sign, what it signifies, and the one who knows',
  body: `<p>Every sign involves three things: the sign itself, what it signifies, and someone who knows by means of it. The sign is what is perceived, such as the smoke or the spoken word; what it signifies is what the sign brings to mind, such as the fire; and the one who knows is the person whose mind is led from the sign to what it signifies.</p>
<p>The third of these is easy to overlook, but a sign signifies only to a knowing power. Smoke signifies fire to a traveler who knows that smoke comes from fire, but it signifies nothing to the trees around it. In the same way, the Latin word <i>ignis</i> (“fire”) signifies fire to someone who knows Latin, but to someone who does not know Latin it is only a sound. So the study of signs is always also a study of how something is known by someone. Our concern in this course is on a particular kind of sign, words.</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II.1.1–2, in paraphrase.` },

{ id: 'natural',
  title: 'Natural signs',
  body: `<p>St. Augustine divides signs into two kinds, natural signs and conventional signs. “Natural signs are those which, apart from any intention or desire of using them as signs, do still lead to the knowledge of something else” (<i>De doctrina christiana</i> II.1.2). So the track of an animal signifies the animal that made it, a dark cloud signifies coming rain, and the face of an angry man signifies his anger even when he would rather hide it. A groan is also a natural sign: it shows pain by nature, and it shows the same pain in every country, whatever language the one who groans speaks. A natural sign, therefore, signifies because of what it is and how it is connected with what it signifies, and not because anyone means it to signify.</p>
<p>A word, however, is not a natural sign, since the meaning of a given word, like “water,” has no natural connection with what it signifies, i.e., “water” as a sound has no natural connection with water itself.</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II.1.2.` },

{ id: 'given',
  title: 'Conventional (i.e., given) signs',
  body: `<p>The second kind is conventional signs (<i>signa data</i>, literally “given signs,” which the English translation of St. Augustine renders “conventional signs” and which other authors often call given signs). These are signs “which living beings mutually exchange for the purpose of showing, as well as they can, the emotions of their minds, or their perceptions, or their thoughts” (<i>De doctrina christiana</i> II.2.3). A given sign, therefore, signifies because someone means it to signify; it is given by one mind to another.</p>
<p>A nod of the head, a raised hand in a classroom, the sound of a trumpet that signals an attack, and a flag raised over a ship are all conventional signs. They are conventional because they have their meaning from agreement and the convention of a social group.</p>
<p>But St. Augustine adds that among the signs by which human beings express their thoughts, words hold by far the first place; he observes that he can put into words what gestures and other signs signify, but that he cannot express words by gestures (II.3.4, in paraphrase). It should be added here that he is not referring to sign language, but to an attempt to communicate only by gestures that are not connected with words; such gestures can be put into words, he is saying, but words themselves cannot be put into gestures (unless we make the gestures into words, as in sign language).</p>
<p>Words, then, are conventional signs, since the sound of a word only signifies its meaning by agreement in a social group.</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II.2.3, II.3.4.`,
  qp: { id: 'q-natural-given', variants: [
    { prompt: `A column of smoke rises over a hill. What kind of sign is it, in St. Augustine’s division?`,
      options: [`A conventional sign, because someone lit the fire`, `A natural sign, because it signifies fire whether or not anyone means it to`, `Not a sign at all, because it is only smoke`, `A word, because it signifies something`],
      answer: 1,
      explain: `Smoke signifies fire because of the connection between them, and not because anyone means it to signify. That is what St. Augustine calls a natural sign; his own example is smoke indicating fire (<i>De doctrina christiana</i> II.1.2).` },
    { prompt: `A sailor raises a flag to tell another ship to stop. What kind of sign is the flag?`,
      options: [`A conventional sign, because the sailor means it to signify his thought`, `A natural sign, because flags are made of natural materials`, `Not a sign, because it makes no sound`, `A natural sign, because it is seen by the eyes`],
      answer: 0,
      explain: `The flag signifies because the sailor means it to signify, and the other ship understands it by an agreement between them. A conventional sign is one that living beings exchange to show their thoughts; it need not be spoken.` },
    { prompt: `Which of these is a natural sign?`,
      options: [`The word “rain”`, `A bell rung to call students to class`, `A raised hand in a classroom`, `A dark cloud before a storm`],
      answer: 3,
      explain: `A dark cloud signifies coming rain by its natural connection with rain, whether or not anyone means it to signify. The word, the bell, and the raised hand signify because someone means them to; they are conventional signs.` }
  ]}},

{ id: 'aristotle',
  title: 'The spoken word as a sign of what is in the mind',
  body: `<p>When we hear the word “horse,” our mind is led to a horse, but not directly. The sound “horse” has no natural likeness to a horse, as we have seen, and so it cannot by itself bring the animal to mind. What it brings to mind is what we already understand when we understand what a horse is. That understanding is the concept, that is, what the mind forms within itself when it understands something. The concept is itself a sign of a special kind: we do not first notice it and then think of the horse; in conceiving, we simply know the horse. So the spoken word signifies the concept directly, and through the concept it signifies the thing.</p>
<p>Writing adds one more step. The written word “horse” is a sign of the spoken word; the spoken word is a sign of the concept; and the concept, in turn, is of the horse itself. In the same way, the Latin <i>equus</i> written on the page signifies the Latin word as it is spoken, and the spoken word signifies the concept of a horse in the mind of someone who knows Latin.</p>
<p>The whole later tradition took this account from the opening of Aristotle’s short work on the statement, <i>De interpretatione</i> (in Greek <i>Peri hermeneias</i>, “On Interpretation”): “Spoken words are the symbols of mental experience and written words are the symbols of spoken words” (<i>De interpretatione</i> 1, 16a3–4). The “mental experience” Aristotle speaks of is the concept.</p>`,
  src: `John of St. Thomas, <i>Tractatus de signis</i>, in paraphrase; Aristotle, <i>De interpretatione</i> 1, 16a3–4.` },

{ id: 'same-for-all',
  title: 'Why do words differ while concepts are the same?',
  body: `<p>The words that signify the same thing differ from language to language. English “horse,” Latin <i>equus</i>, German <i>Pferd</i>, and French <i>cheval</i> are four different sounds and four different written forms, and as conventional signs each has its meaning only by the agreement of those who speak that language. Yet a speaker of each language who hears his own word thinks of the same kind of animal. The words differ, but the concept is the same for all.</p>
<p>This may seem surprising, but the reason is easy to see. Think of two photographs of the same horse: they may differ in angle, light, and color, but they cannot be photographs of different things. In the same way, two concepts of the same thing both represent that thing. A concept, moreover, is unlike a photograph in one respect: it has no medium, no paper or ink, through which it represents. It is a special kind of sign, one which represents through itself alone (a formal sign, as we will see later). So, nothing distinguishes two concepts of the same thing except the thing they represent. What makes one concept differ from another is the thing each represents, not the mind that forms it or the language in which it is expressed. It is true that an expert in a given area, for example, knows more about something than a novice in that discipline does; but they both know the same thing and the concepts they have are of the same thing; it is only that, in a way, the expert’s concept is less confused and more clear than the concept that the novice learner has.</p>
<p>We know this from ordinary experience as well. Someone who knows two languages can translate from one to the other, and he can judge how well a word or sentence in one language fits what is said in the other. That would be impossible if there were nothing behind the words to which both could be compared, that is, without what the words signify. Translation is something we do successfully all the time, and it is possible only because the concepts are the same where the words differ.</p>
<p>Aristotle states this at the beginning of <i>De interpretatione</i>: “Just as all men have not the same writing, so all men have not the same speech sounds, but the mental experiences, which these directly symbolize, are the same for all, as also are those things of which our experiences are the images” (<i>De interpretatione</i> 1, 16a5–8). This is also why grammar can study what is common to all languages as well as what belongs to one language alone.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1, 16a5–8.` },

{ id: 'through-concepts',
  title: 'Words signify things by means of concepts',
  body: `<p>When we speak, we speak about things, not about our concepts: if I say “The sun is warm,” I am talking about the sun, not about my idea of the sun. Yet the word cannot reach the thing directly. Consider the word “man.” It does not signify this man or that man, since it applies equally to every man; what it signifies is what is common to all of them, human nature taken apart from any one man. But human nature taken in that way does not exist anywhere outside the mind; what exists are singular men, Peter and Paul and the man at the door. So the word “man” cannot signify any existing thing immediately. It signifies first what the mind has grasped, the concept, and through the concept, which is of the things themselves, it signifies the things. We can speak of things only as we understand them, and so the word reaches the thing by way of the concept.</p>
<p>This order explains a fact that every student of language notices. A single thing can be named in many ways, according to the way it is understood: the same man can be called “the teacher,” “the father of three children,” or “the man at the door.” The man is the same, but each name signifies him according to a different understanding of him. If words signified things without concepts between them, one thing could not have so many names that mean such different things.</p>
<p>St. Thomas, commenting on Aristotle, states the same order: words signify the concepts of the mind immediately, and through those concepts they signify things (<i>In Peri hermeneias</i> I, lect. 2, in paraphrase).</p>`,
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
      options: [`An instrumental sign must first be known as an object; a formal sign need not be`, `An instrumental sign is written, and a formal sign is spoken`, `An instrumental sign is natural, and a formal sign is conventional`, `They are two names for the same kind of sign`],
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
  body: `<p>We have now seen what a sign is, how natural signs differ from conventional signs, and how the spoken word signifies things by means of concepts. Grammar begins here because its material is speech, and speech is made of conventional signs. A sound becomes a word only when it signifies; so the grammarian must know what it is for a sound to signify before he can study the sounds themselves, their letters and syllables, and the ways in which words are formed and arranged.</p>
<p>This order also explains why grammar is not the same as the study of sounds in natural philosophy or in modern phonetics. A groan, a cough, and the word “horse” are all sounds, but only the word belongs to grammar, because only the word signifies by the agreement of those who use it. How a sound comes to signify in this way is the question of imposition, which belongs to this section as well; and the sounds themselves are the subject of Section II, The Matter of Speech.</p>`,
  src: `Augustine, <i>De doctrina christiana</i> II; Aristotle, <i>De interpretatione</i> 1–2.` }

  ]
};
