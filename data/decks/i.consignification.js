/* I.3 Signification and Consignification [i.consignification]
   Plan (ITEM-LIST.md): 9 panels, 3 question points, each with exactly 3 variants.
   Live material drawn on: DECKS.modes ("Noun and verb," "The same thing, signified twice": why the verb signifies time;
   St. Thomas on cursus and curro); MODE_ITEMS (the item on why the verb carries tense, recast for Section I). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['i.consignification'] = {
  id: 'i.consignification',
  title: 'Signification and Consignification',
  sub: 'What a word signifies, and what it signifies along with that meaning',
  sources: `Aristotle, <i>De interpretatione</i> 1–3; St. Thomas, <i>In Peri hermeneias</i> I, lect. 4–5; Priscian, <i>Institutiones grammaticae</i> II.`,
  panels: [

{ id: 'signification',
  title: 'What does a word signify?',
  body: `<p>We have seen that a word signifies by imposition: a sound is given a meaning by those who use it. The meaning that a word was imposed to signify is called its <strong>signification</strong> (Latin <i>significatio</i>). The signification of “horse” is a certain kind of animal, the signification of “white” is a certain color, and the signification of “run” is a certain kind of motion.</p>
<p>A word keeps its signification from one sentence to the next. “Horse” signifies the same kind of animal in “The horse is in the field,” in “I sold my horse,” and in “A horse is a mammal.” What the word stands for in a particular sentence can vary (this horse, my horse, any horse), and logic studies that variation under the name of supposition, as we will see in Section VIII. But the signification of the word, what it was imposed to mean, remains the same.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 2.` },

{ id: 'consignification',
  title: 'What is consignification?',
  body: `<p>Some words signify something more along with their principal meaning. The tradition calls this <strong>consignification</strong> (Latin <i>consignificatio</i>, from <i>consignificare</i>, “to signify along with”). Aristotle gives the chief example in his definition of the verb: “A verb is that which, in addition to its proper meaning, carries with it the notion of time. No part of it has any independent meaning, and it is a sign of something said of something else” (<i>De interpretatione</i> 3, 16b6–7).</p>
<p>So the verb “ran” signifies running, which is its proper meaning; but it also signifies, along with that meaning, that the running took place in the past. The verb “will run” signifies the same running and consignifies the future. The proper meaning is the same in “runs,” “ran,” and “will run”; what changes is the time that each consignifies.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 3, 16b6–7.`,
  qp: { id: 'q-consignify', variants: [
    { prompt: `In the verb “ran,” what is consignified along with the proper meaning?`,
      options: [`The runner`, `The place where the running happened`, `Past time`, `Nothing; “ran” has only one meaning`],
      answer: 2,
      explain: `The proper meaning of “ran” is running, and along with that meaning it signifies that the running took place in the past. Aristotle says that the verb “carries with it the notion of time” in addition to its proper meaning (<i>De interpretatione</i> 3).` },
    { prompt: `What does “consignification” mean?`,
      options: [`Signifying the same thing as another word`, `Signifying something along with a word’s principal meaning`, `Signifying by nature rather than by imposition`, `Signifying nothing at all`],
      answer: 1,
      explain: `The Latin <i>consignificare</i> means “to signify along with.” A word consignifies when it signifies something in addition to its principal meaning, as a verb signifies time along with the action.` },
    { prompt: `“Runs,” “ran,” and “will run” all signify running. How do they differ?`,
      options: [`They signify three different actions`, `Only “runs” signifies running; the others signify time alone`, `They differ in their imposition, since each was imposed separately`, `They signify the same action, and each consignifies a different time`],
      answer: 3,
      explain: `The proper meaning, running, is the same in all three. What differs is the time that each consignifies: present, past, and future.` }
  ]}},

{ id: 'time-in-verb',
  title: 'Time in the verb, in English and in Latin',
  body: `<p>The verb consignifies time in English and in Latin alike, though the two languages mark it in different ways. In Latin, the time is usually shown by a change in the ending of the verb itself: <i>currit</i> (“he runs”), <i>cucurrit</i> (“he ran”), <i>curret</i> (“he will run”). English shows the time partly by a change in the verb (“runs,” “ran”) and partly by a separate word (“will run”).</p>
<p>The noun, by contrast, does not consignify time. The noun “race” or “running” signifies the same kind of motion as the verb “run,” but it does not say whether the running is past, present, or future. Aristotle makes the point in his definition of the noun, which, he says, “has no reference to time” (<i>De interpretatione</i> 2, 16a19–20). So “The race was long” and “The race will be long” use the same noun; the time is shown by the verbs “was” and “will be.”</p>`,
  src: `Aristotle, <i>De interpretatione</i> 2–3.` },

{ id: 'cursus-curro',
  title: 'The same thing signified with and without time',
  body: `<p>St. Thomas, commenting on Aristotle, observes that one and the same action can be signified in two ways. It can be signified as a thing, as in the Latin noun <i>cursus</i> (“a running” or “a race”), and then the word signifies without time; or it can be signified as an action, as in the verb <i>curro</i> (“I run”), and then the word signifies with time. The reason, he says, is that it belongs to motion to be measured by time, and the verb signifies its meaning as a motion or action (<i>In Peri hermeneias</i> I, lect. 5, in paraphrase).</p>
<p>English shows the same thing in many pairs of nouns and verbs: “arrival” and “arrives,” “a walk” and “walked,” “departure” and “will depart.” The action is the same in each pair, but the noun signifies it as a thing that we can speak about, while the verb signifies it as something happening at some time.</p>`,
  src: `St. Thomas, <i>In Peri hermeneias</i> I, lect. 5, in paraphrase.`,
  qp: { id: 'q-with-time', variants: [
    { prompt: `Latin <i>cursus</i> (“a running”) and <i>curro</i> (“I run”) signify the same action. Which of them consignifies time?`,
      options: [`<i>Curro</i>, because it signifies the action as an action, and motion is measured by time`, `<i>Cursus</i>, because it is the longer word`, `Both equally`, `Neither, because time is never signified by a word`],
      answer: 0,
      explain: `St. Thomas says that the action signified as a thing, <i>cursus</i>, signifies without time, while the action signified as an action, <i>curro</i>, signifies with time, because it belongs to motion to be measured by time.` },
    { prompt: `In “His arrival was late” and “He arrives late,” which word consignifies time?`,
      options: [`“Arrival,” because it names the action`, `“Late,” because it refers to time`, `“Arrives,” because it signifies the action as happening now`, `Neither word`],
      answer: 2,
      explain: `“Arrival” signifies the action as a thing we can speak about, without time; the time in the first sentence is shown by the verb “was.” “Arrives” signifies the action as happening, and it consignifies the present.` },
    { prompt: `Why does the noun “race” not consignify time, although it signifies a motion?`,
      options: [`Because races do not take place in time`, `Because the noun signifies the motion as a thing, not as an action happening`, `Because English nouns are never imposed`, `Because only Latin nouns signify motion`],
      answer: 1,
      explain: `The noun signifies its meaning as a thing that we can speak about, and so, as Aristotle says, it “has no reference to time.” The verb signifies its meaning as an action, and so it consignifies time.` }
  ]}},

{ id: 'other-consignified',
  title: 'What else can a word signify along with its meaning?',
  body: `<p>Time is the chief example of consignification, but it is not the only one. A word can also signify, along with its principal meaning, whether it refers to one thing or to more than one (number), and whether it refers to the speaker, to the one spoken to, or to someone else (person). So “horse” and “horses” signify the same kind of animal, but the second consignifies more than one; and “I run,” “you run,” and “he runs” signify the same action, but each consignifies a different person.</p>
<p>Latin often shows these things in a single ending: <i>curro</i> (“I run”) consignifies the first person and the singular, and <i>currunt</i> (“they run”) the third person and the plural. The grammarians call such additional meanings the accidents of a word, and we will study them in Section III, with the parts of speech to which each belongs.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II, in paraphrase.` },

{ id: 'why-time',
  title: 'Why does the verb consignify time?',
  body: `<p>Aristotle’s definition also tells us why the verb, and not the noun, consignifies time: the verb is “a sign of something said of something else” (<i>De interpretatione</i> 3, 16b7). When we say “The horse runs,” the verb “runs” is said of the horse; it signifies an action as happening to or in something. Whatever happens, happens at some time; and so the word that signifies something as happening also signifies, along with it, when it happens.</p>
<p>The noun, by contrast, names something that we can speak about, as “horse” in “The horse runs,” or “running” in “Running is good exercise.” It signifies its meaning as a thing at rest under our consideration, and so it does not signify when. That is why a sentence needs a verb to say that something is, was, or will be so; a list of nouns, such as “horse, field, morning,” signifies things but says nothing of when or whether anything happens.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 3; St. Thomas, <i>In Peri hermeneias</i> I, lect. 5, in paraphrase.` },

{ id: 'parts-no-meaning',
  title: 'The parts of a word do not signify',
  body: `<p>Aristotle adds to his definitions of the noun and the verb that no part of either signifies by itself. His example is a proper name made of two words: in the noun “Fairsteed,” he says, “the part ‘steed’ has no significance in and by itself, as in the phrase ‘fair steed’” (<i>De interpretatione</i> 2, 16a21–22). When two words are joined into one name, the parts lose the meaning they had as separate words.</p>
<p>English has many words of this kind. In “horseradish,” the part “horse” does not signify a horse; in “butterfly,” the part “butter” does not signify butter; and in “Newcastle,” the part “new” does not say that the city is new. Each of these words signifies as a whole. The word, therefore, is the least part of an expression that signifies; its parts may have signified something once, as separate words, but within the word they signify nothing by themselves.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 2, 16a21–22.` },

{ id: 'not-true',
  title: 'A word signifies, but it is not yet true or false',
  body: `<p>A word signifies, and a verb consignifies time; but neither, by itself, is true or false. Aristotle gives the example of a name for an imaginary animal: “‘goat-stag’ does indeed signify something, but nothing either true or false, unless ‘is’ or ‘is not’ is added, either in the present or in some other tense” (<i>De interpretatione</i> 1, 16a16–18).</p>
<p>So the word “goat-stag” signifies an imagined animal, and the word “unicorn” signifies one as well; but neither word is true or false. “A unicorn is in the garden” is false, and “There is no unicorn in the garden” is true, because in each of these sentences something is said of something. Truth and falsity, as we saw in the Preliminary section, begin only at the sentence; signification begins at the word.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1, 16a16–18.`,
  qp: { id: 'q-not-true', variants: [
    { prompt: `Is the word “unicorn,” by itself, true or false?`,
      options: [`False, because there are no unicorns`, `True, because the word signifies something`, `Neither; a word signifies, but it says nothing of anything`, `False, because it is not a real word`],
      answer: 2,
      explain: `A word signifies, but it is not true or false until something is said of something. Aristotle says that “goat-stag” signifies something, “but nothing either true or false, unless ‘is’ or ‘is not’ is added” (<i>De interpretatione</i> 1).` },
    { prompt: `What must be added to “goat-stag,” according to Aristotle, for something true or false to be said?`,
      options: [`“Is” or “is not,” in some tense`, `A second noun`, `The definition of the word`, `Nothing; the word is already false`],
      answer: 0,
      explain: `Aristotle says that “goat-stag” signifies something, but nothing true or false, “unless ‘is’ or ‘is not’ is added, either in the present or in some other tense” (<i>De interpretatione</i> 1, 16a16–18). Then something is said of something, and the sentence is true or false.` },
    { prompt: `Where do signification and truth first appear?`,
      options: [`Both at the word`, `Both at the sentence`, `Signification at the sentence, and truth at the word`, `Signification at the word, and truth at the sentence`],
      answer: 3,
      explain: `A word signifies by itself, as “horse” or “unicorn” does. Truth and falsity begin only when something is said of something, that is, at the sentence.` }
  ]}},

{ id: 'priscian',
  title: 'Signification and the parts of speech',
  body: `<p>Priscian, the Latin grammarian of the sixth century whose work became the advanced grammar of the Middle Ages, teaches that the parts of speech are to be told apart by what is proper to the signification of each (<i>Institutiones grammaticae</i> II.17, in paraphrase). That is, a word is a noun or a verb not because of its sound or its length but because of the way in which it signifies.</p>
<p>We have now seen the first example of this. The noun and the verb can signify the same thing, as “running” and “runs” do; but the verb consignifies time and the noun does not, because they signify in different ways. The tradition later calls these different ways of signifying the modes of signifying (<i>modi significandi</i>), and we will see in Section III how they account for each of the parts of speech and their accidents.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II.17, in paraphrase (no published English translation).` }

  ]
};
