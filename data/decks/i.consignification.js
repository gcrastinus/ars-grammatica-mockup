/* I.3 Signification and Consignification [i.consignification]
   Rebuilt Oct 17, 2026 as a full theory of consignification (time and the other accidents, the modes of signifying,
   and the composition signified by the verb). 11 panels, 4 question points, each with exactly 3 variants.
   Drawn on: the earlier version of this deck; Aristotle, De interpretatione 1–3 (Edghill); St. Thomas, In Peri hermeneias I,
   lect. 4–5 (Latin checked at corpusthomisticum.org); Timothy's ECT logic article (copula; categories of quality and action).
   The full modistic account is in III.reasons; keep this deck introductory. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['i.consignification'] = {
  id: 'i.consignification',
  title: 'Signification and Consignification',
  sub: 'What a word signifies, and what it signifies along with that meaning: time and the other accidents, the mode of signifying, and composition',
  sources: `Aristotle, <i>De interpretatione</i> 1–3; St. Thomas, <i>In Peri hermeneias</i> I, lect. 4–5; Priscian, <i>Institutiones grammaticae</i> II; Thomas of Erfurt, <i>Grammatica speculativa</i>.`,
  panels: [

{ id: 'signification',
  title: 'What does a word signify?',
  body: `<p>We have seen that a word signifies by imposition: a sound is given a meaning by those who use it, and through that meaning it brings to mind a concept and, by means of the concept, a thing. The meaning that was imposed on a word, that is, what the word signifies, is called its <strong>signification</strong> (Latin <i>significatio</i>). So the signification of “horse” is a certain kind of animal, the signification of “white” is a certain color, and the signification of “run” is a certain kind of motion.</p>
<p>A word keeps its signification from one sentence to the next. “Horse” signifies the same kind of animal in “The horse is in the field,” in “I sold my horse,” and in “A horse is a mammal.” What the word stands for in a particular sentence can vary (this horse, my horse, any horse), and logic studies that variation under the name of <strong>supposition</strong> (from the Latin <i>suppositio</i>, the way a word stands for something in a sentence), as we will see in Section VIII. But the signification of the word, what it was imposed to mean, remains the same.</p>
<p>A word, however, often carries more meaning than its signification alone.</p>`,
  src: `Recap of imposition; supposition left to Section VIII.` },

{ id: 'consignification',
  title: 'What is consignification?',
  body: `<p>The words “runs,” “ran,” and “will run” all signify the same action, running; yet they do not say the same thing. “Ran” signifies running and also signifies that the running took place in the past; “will run” signifies the same running and also signifies that it is still to come; and “runs” signifies it as present. So some words signify something more along with their principal meaning. The tradition calls this <strong>consignification</strong> (Latin <i>consignificatio</i>, from <i>consignificare</i>, “to signify along with”). What a word was imposed principally to signify is its proper meaning; what it signifies along with that meaning is said to be consignified.</p>
<p>The proper meaning is the same in “runs,” “ran,” and “will run”; what changes is the time that each consignifies. Aristotle names this as the mark of the verb: “A verb is that which, in addition to its proper meaning, carries with it the notion of time. No part of it has any independent meaning, and it is a sign of something said of something else” (<i>De interpretatione</i> 3, 16b6–7).</p>`,
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
  body: `<p>The verb consignifies time in English and in Latin alike, though the two languages mark it in different ways. In Latin, the time is usually shown by a change in the form of the verb itself: <i>currit</i> (“he runs”), <i>cucurrit</i> (“he ran”), <i>curret</i> (“he will run”). English shows the time partly by a change in the verb (“runs,” “ran”) and partly by auxiliary verbs, that is, helping verbs joined to the main verb, as “will” in “will run” or “has” in “has run.” The grammatical name for the time that a verb consignifies is <strong>tense</strong> (from the Latin <i>tempus</i>, “time”).</p>
<p>The noun, by contrast, does not consignify time. The noun “race” or “running” signifies the same kind of motion as the verb “run,” but it does not say whether the running is past, present, or future; so “The race was long” and “The race will be long” use the same noun, and the time is shown by the verbs “was” and “will be.” Some nouns, such as “day,” “year,” and “hour,” do signify time, but they signify it as their proper meaning, as a thing that we can speak about; they do not signify something else along with time. To signify time and to consignify time are therefore different. Aristotle accordingly defines the noun as a sound significant by convention “which has no reference to time” (<i>De interpretatione</i> 2, 16a19–20).</p>`,
  src: `Aristotle, <i>De interpretatione</i> 2, 16a19–20; St. Thomas, <i>In Peri hermeneias</i> I, lect. 5 (time signified vs. consignified).` },

{ id: 'cursus-curro',
  title: 'The same thing signified with and without time',
  body: `<p>One and the same action can be signified either with time or without it. English shows this in many pairs of nouns and verbs: “arrival” and “arrives,” “a walk” and “walked,” “departure” and “will depart.” The action is the same in each pair, but the noun signifies it as a thing that we can speak about, while the verb signifies it as something happening at some time.</p>
<p>Latin shows the same thing in <i>cursus</i> (“a running” or “a race”) and <i>curro</i> (“I run”). Both signify the same action; but <i>cursus</i> signifies it as a thing and so signifies without time, while <i>curro</i> signifies it as an action and so signifies with time. St. Thomas uses this very pair, in his commentary on Aristotle’s <i>De interpretatione</i>, to explain what it means for the verb to consignify time (<i>In Peri hermeneias</i> I, lect. 5).</p>`,
  src: `St. Thomas, <i>In Peri hermeneias</i> I, lect. 5, n. 7.`,
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

{ id: 'why-time',
  title: 'Why does the verb consignify time and the noun not consignify time?',
  body: `<p>The reason the verb consignifies time lies in the way it signifies. When we say “The horse runs,” the verb “runs” signifies the running as going on in the horse and as said of the horse; it signifies an action as happening. But whatever happens, happens at some time, since motion and action are measured by time, and we know actions only as taking place in time. So the word that signifies something as happening also signifies, along with it, when it happens.</p>
<p>The noun, by contrast, names something that we can speak about, as “horse” does in “The horse runs,” or as “running” does in “Running is good exercise.” It signifies its meaning as a thing under our consideration, not as something going on, and so it does not signify when. St. Thomas gives this reason: it is proper to motion to be measured by time, and actions are known to us in time (<i>In Peri hermeneias</i> I, lect. 5). Aristotle’s definition points the same way, since the verb is always “a sign of something said of something else” (<i>De interpretatione</i> 3, 16b7).</p>`,
  src: `St. Thomas, <i>In Peri hermeneias</i> I, lect. 5, nn. 5, 7; Aristotle, <i>De interpretatione</i> 3, 16b7.` },

{ id: 'accidents',
  title: 'The accidents consignified within a word',
  body: `<p>Time is the most evident thing that a word consignifies, but it is not the only one. “Horse” and “horses” signify the same kind of animal, but the second also signifies more than one; “I run,” “you run,” and “he runs” signify the same action, but each also signifies a different person, that is, the speaker, the one spoken to, or someone else. The grammarians call such additional meanings the <strong>accidents</strong> of a word (Latin <i>accidentia</i>, from <i>accidere</i>, “to happen to”), because they belong to a word without changing its proper meaning or the part of speech that it is and the word, in the given context, only happens to have a given accident and in other contexts would have a different accident.</p>
<p>Besides tense, the chief accidents are these:<br><strong>number</strong>, whether one or more than one is meant: “horse” and “horses,” “child” and “children,” Latin <i>equus</i> and <i>equi</i>;<br><strong>person</strong>, whether the speaker, the one spoken to, or someone else is meant: “I love,” “you love,” “he loves”; Latin <i>amo</i> (“I love”), <i>amas</i> (“you love”), <i>amat</i> (“he loves”) (notice the endings in older English: “I love,” “thou lovest,” “he loveth”);<br><strong>case</strong>, the form that shows how a noun or pronoun is related to the other words of a sentence, for example as subject or as object: “he” and “him” in “He saw the boy” and “The boy saw him”; Latin <i>dominus</i> (“the master,” as subject) and <i>dominum</i> (“the master,” as object);<br><strong>mood</strong>, the form of a verb that shows the manner in which the action is stated, for example as a fact, as a command, or as a wish or a possibility: “You go” states a fact, “Go!” gives a command, and “If only you would go” expresses a wish; Latin <i>venit</i> (“he comes”) and <i>veni</i> (“come!”);<br><strong>gender</strong>, the class of a noun as masculine, feminine, or neuter: English shows it chiefly in the pronouns “he,” “she,” and “it” and in pairs such as “actor” and “actress”; Latin <i>dominus</i> (“master,” masculine), <i>domina</i> (“mistress,” feminine), and <i>templum</i> (“temple,” neuter).</p>
<p>Latin often shows several of these in a single ending. To take some simple examples, <i>curro</i> (“I run”) consignifies the first person, the singular, the present tense, and the indicative mood (the mood of stating a fact), and <i>currunt</i> (“they run”) the third person and the plural; <i>equus</i> (“horse”) is the form used for the subject and <i>equum</i> the form used for the object; and <i>bonus</i>, <i>bona</i>, and <i>bonum</i> (“good”) differ in gender. English has fewer such forms and shows some of these accidents by other means: case remains chiefly in the pronouns (“he,” “him,” “his”) and in the possessive “’s,” gender chiefly in “he,” “she,” and “it,” person in verbs only in a few forms such as “runs” beside “run” and “am,” “are,” and “is,” and mood in a few forms such as “were” in “If I were king.”</p>
<p>Not every accident belongs to every word. Case and gender belong to the noun, and tense and mood to the verb, while number and person are found in both, in different ways. The full study of the accidents belongs to Section III, where each is treated with the part of speech to which it belongs.</p>`,
  src: `Accidents introduced only; full treatment in Section III.` },

{ id: 'parts-no-meaning',
  title: 'The parts of a word do not signify by themselves',
  body: `<p>A word signifies as a whole, and its parts do not signify by themselves. In “horseradish,” the part “horse” does not signify a horse; in “butterfly,” the part “butter” does not signify butter; and in “Newcastle,” the part “new” does not say that the city is new. These parts may once have signified something as separate words, but within the word they signify nothing by themselves.</p>
<p>The same is true of the endings that mark the accidents. The “-s” of “horses” or the <i>-unt</i> of <i>currunt</i> signifies nothing when it is said by itself; it marks, within the word, an accident that the whole word consignifies. So it is the word “horses,” and not its ending alone, that signifies more than one horse. The word, therefore, is the least part of an expression that signifies.</p>
<p>Aristotle includes this in his definitions of both the noun and the verb, which he gives at the start of his logical treatise <i>On Interpretation</i>, where he considers words as the parts of a statement. His example is a proper name made of two words: “In the noun ‘Fairsteed,’ the part ‘steed’ has no significance in and by itself, as in the phrase ‘fair steed’” (<i>De interpretatione</i> 2, 16a21–22).</p>`,
  src: `Aristotle, <i>De interpretatione</i> 2, 16a21–22; 3, 16b6–7.` },

{ id: 'modes',
  title: 'The same reality signified in different ways',
  body: `<p>The difference between the noun and the verb goes further than time. The words “pain,” “hurts,” and “painful” all signify the same reality, a certain suffering, but each signifies it in a different way. “Pain” signifies it as a thing, something that we can name and speak about, as in “The pain was sharp.” “Hurts” signifies it as something happening, as in “My arm hurts.” And “painful” signifies it as a quality belonging to something else, as in “a painful wound.” In the same way, “running” in “Running is good exercise” signifies an action as a thing, while “runs” in “The horse runs” signifies the same action as happening.</p>
<p>Latin shows the same thing. <i>Dolor</i> (“pain”) is a noun and <i>dolet</i> (“it hurts”) is a verb, while <i>dolens</i> (“feeling pain”), a participle, signifies the same suffering as belonging to someone, as an adjective does; and <i>cursus</i> (“a running”) and <i>currit</i> (“he runs”) signify one action, first as a thing and then as something happening. The way in which a word presents what it signifies is called its <strong>mode of signifying</strong> (Latin <i>modus significandi</i>). The noun signifies by way of a thing or substance (<i>per modum substantiae</i>), that is, as something stable that can be spoken about; the verb signifies by way of action or becoming, as something going on; and the adjective signifies by way of a quality inhering in something, that is, as existing in a thing and belonging to it.</p>
<p>The mode of signifying is not a second meaning alongside the first; it is the way in which the first meaning is presented (<i>modus</i> in Latin means “way” or “manner”). But since the word signifies this way of presenting along with its meaning, as the verb signifies time along with its meaning, the mode of signifying is also consignified. “Pain” does not mean “a thing,” and “hurts” does not mean “a happening”; but each signifies the suffering and, along with it, the way in which the suffering is presented. The reason is the one we saw earlier, that words signify things by means of concepts: the mind can understand one and the same reality as a thing to be considered, as something happening, or as a quality of something else, and words follow these ways of understanding.</p>`,
  src: `Modes of signifying introduced; cf. III.reasons (dolor, doleo, dolens, heu).`,
  qp: { id: 'q-modes', variants: [
    { prompt: `“Pain,” “hurts,” and “painful” all signify the same suffering. How do they differ?`,
      options: [`They signify three different realities`, `They signify the same reality in different modes: as a thing, as something happening, and as a quality of something else`, `They differ only in length and sound`, `Only “pain” signifies the suffering; the other two signify time`],
      answer: 1,
      explain: `The reality signified is one. “Pain” signifies it by way of a thing, “hurts” by way of something happening, and “painful” by way of a quality belonging to something else. These are different modes of signifying, and the mode is consignified along with the meaning.` },
    { prompt: `Which of these words signifies running by way of an action happening?`,
      options: [`“Running” in “Running is good exercise”`, `“Race” in “The race was long”`, `“Runs” in “The horse runs”`, `“Swift” in “a swift horse”`],
      answer: 2,
      explain: `“Runs” signifies the running as going on in the horse, by way of action or becoming; that is the verb’s mode of signifying. “Running” in “Running is good exercise” and “race” signify a motion by way of a thing, and “swift” signifies a quality belonging to the horse.` },
    { prompt: `Latin <i>dolor</i> (“pain”) and <i>dolet</i> (“it hurts”) signify the same suffering. Why are they different parts of speech?`,
      options: [`Because they signify the same thing in different modes of signifying, as a thing and as happening`, `Because they signify different things`, `Because <i>dolor</i> was imposed by nature and <i>dolet</i> by agreement`, `Because <i>dolet</i> is shorter`],
      answer: 0,
      explain: `A word is a noun or a verb not because of what it signifies or how it sounds, but because of how it signifies. <i>Dolor</i> signifies the suffering by way of a thing, and <i>dolet</i> by way of something happening.` }
  ]}},

{ id: 'priscian',
  title: 'Modes of signifying and the parts of speech',
  body: `<p>Because the mode of signifying belongs to a word as a whole, it is what makes a word the part of speech that it is. A word is not a noun because of its sound or its length, nor because of the reality it signifies, since “pain” and “hurts” signify the same reality; it is a noun because it signifies by way of a thing, and a verb because it signifies by way of action or becoming. This also accounts for what we have seen about time and the accidents: the verb consignifies time because it signifies by way of something happening, and each part of speech has the accidents that fit its mode of signifying.</p>
<p>Priscian, the Latin grammarian of the sixth century whose work became the advanced grammar of the Middle Ages, teaches that the parts of speech can be told apart only by attending to what is proper to the signification of each (<i>Institutiones grammaticae</i> II.17). In the thirteenth and early fourteenth centuries a group of grammarians worked out this teaching in detail; because they explained grammar through the modes of signifying (<i>modi significandi</i>), they are called the <strong>Modistae</strong>, or modists. Among the best known are Boethius of Dacia and Martin of Dacia, who taught at Paris, and Thomas of Erfurt, whose <i>Grammatica speculativa</i> became the standard account of the school. We will see in Section III how their account explains each of the parts of speech and its accidents.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II.17 (reference, not quoted); Modistae named only; full account in III.reasons.` },

{ id: 'composition',
  title: 'The composition signified by the verb',
  body: `<p>“Horse” signifies an animal and “runs” signifies an action, and each word by itself brings something to mind. But only when they are joined, as in “The horse runs,” is something said of something. What joins them is not a third word; it is something that the verb itself signifies. “Runs,” heard by itself, leaves the mind waiting to hear what runs, because it signifies running as belonging to something of which it is said. So the verb signifies, along with its proper meaning and its time, a joining of what it signifies to that of which it is said. The tradition calls this joining <strong>composition</strong> (Latin <i>compositio</i>, “a putting together”): in “The horse is white,” what is said (“white”) is put together with what it is said of (“the horse”).</p>
<p>The verb “is” shows this most plainly. Said by itself, “is” states nothing; it signifies a joining, a composition, but the joining cannot be understood until the things joined are given, as in “The horse is white” or “The day is cold.” That is why a sentence that states something needs a verb. A list of nouns such as “horse, field, morning” signifies three things but joins none of them, and so it says nothing of anything; “The horse is in the field” joins them, and so it states something.</p>
<p>Aristotle says that a verb said by itself is a kind of name and signifies something, but it does not yet state that anything is or is not; even “to be” and “not to be” do not of themselves indicate anything, “but imply a copulation, of which we cannot form a conception apart from the things coupled” (<i>De interpretatione</i> 3, 16b19–25), that is, a joining or composition that cannot be understood without what it joins. In the Latin text that the medieval schools read, “is” <i>consignificat autem quamdam compositionem</i>, “but it consignifies a certain composition.” St. Thomas adds that the verb signifies this composition not principally but along with what it signifies, and that every verb includes it, since to run is to be running (<i>In Peri hermeneias</i> I, lect. 5).</p>`,
  src: `Aristotle, <i>De interpretatione</i> 3, 16b19–25; St. Thomas, <i>In Peri hermeneias</i> I, lect. 5, nn. 15–22 (currere est currentem esse, n. 18).` },

{ id: 'not-true',
  title: 'A word signifies, but it is not yet true or false',
  body: `<p>A word signifies, and a verb consignifies time and composition; but no word by itself is true or false. A sentence is true when what it says agrees with the way things are, and false when it does not; and so there is truth or falsity only where something is said of something. The word “unicorn” signifies an imagined animal, but by itself it says nothing of anything, and so it is neither true nor false. “A unicorn is in the garden” is false, and “There is no unicorn in the garden” is true, because in each of these sentences something is said of something. Truth and falsity, as we saw in the Preliminary section, begin only at the sentence; signification begins at the word.</p>
<p>Aristotle makes the same point: “‘man’ and ‘white’, as isolated terms, are not yet either true or false.” His example is a name for an imaginary animal, “goat-stag”: “It has significance, but there is no truth or falsity about it, unless ‘is’ or ‘is not’ is added, either in the present or in some other tense” (<i>De interpretatione</i> 1, 16a13–18).</p>
<p>Every word considered here, such as “horse,” “runs,” and “pain,” signifies something definite when it is heard by itself. Not every word does. Words such as “every,” “not,” and “if” bring nothing definite to mind by themselves, and yet they can change the whole meaning of a sentence. How such words signify is the question that follows.</p>`,
  src: `Aristotle, <i>De interpretatione</i> 1, 16a13–18 (Edghill).`,
  qp: { id: 'q-not-true', variants: [
    { prompt: `Is the word “unicorn,” by itself, true or false?`,
      options: [`False, because there are no unicorns`, `True, because the word signifies something`, `Neither; a word signifies, but it says nothing of anything`, `False, because it is not a real word`],
      answer: 2,
      explain: `A word signifies, but it is not true or false until something is said of something. Aristotle says of “goat-stag”: “It has significance, but there is no truth or falsity about it, unless ‘is’ or ‘is not’ is added” (<i>De interpretatione</i> 1).` },
    { prompt: `What must be added to “goat-stag,” according to Aristotle, for something true or false to be said?`,
      options: [`“Is” or “is not,” in some tense`, `A second noun`, `The definition of the word`, `Nothing; the word is already false`],
      answer: 0,
      explain: `Aristotle says that “goat-stag” has significance, but there is no truth or falsity about it, “unless ‘is’ or ‘is not’ is added, either in the present or in some other tense” (<i>De interpretatione</i> 1, 16a16–18). Then something is said of something, and the sentence is true or false.` },
    { prompt: `Where do signification and truth first appear?`,
      options: [`Both at the word`, `Both at the sentence`, `Signification at the sentence, and truth at the word`, `Signification at the word, and truth at the sentence`],
      answer: 3,
      explain: `A word signifies by itself, as “horse” or “unicorn” does. Truth and falsity begin only when something is said of something, that is, at the sentence.` }
  ]}}

  ]
};
