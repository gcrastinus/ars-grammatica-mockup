/* VII.3 Tropes [vii.tropes]
   Plan (ITEM-LIST.md): 15 panels, 4 question points (placeholders: qpTodo; to be written). Exercise: Tropes (not yet
   written), on twelve tropes: metaphor, catachresis, metalepsis, metonymy, antonomasia, epithet, synecdoche, onomatopoeia,
   periphrasis, hyperbole, allegory, and irony (taken as a species of allegory, as Donatus does).
   Overlap with Ars Rhetorica: metaphor, irony, and hyperbole appear in its glossary and drills; this deck asks what the
   trope does to the signification of the word.
   Live material drawn on: DECKS.figures (tropes: metaphor, synecdoche, metonymy, antonomasia, hyperbole, allegory),
   DECKS.latfigs. Quintilian VIII.6 checked against the Perseus text of Butler's translation. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['vii.tropes'] = {
  id: 'vii.tropes',
  title: 'Tropes',
  sub: 'Metaphor, metonymy, synecdoche, and the other changes of meaning',
  sources: `Donatus, <i>Ars maior</i> III.6; Quintilian, <i>Institutio oratoria</i> VIII.6; Bede, <i>De schematibus et tropis</i>.`,
  panels: [

{ id: 'what-trope',
  title: 'What is a trope?',
  body: `<p>We have seen that a trope changes the signification of a word. Donatus defines the <strong>trope</strong> (Greek <i>tropos</i>, “a turning”) as a word carried over from its proper signification to a likeness that is not its own, for the sake of ornament or of need (<i>dictio translata a propria significatione ad non propriam similitudinem ornatus necessitatisve causa</i>; <i>Ars maior</i> III.6). He counts thirteen tropes. One of them, hyperbaton, concerns the order of words, and we have studied it with the figures of order; the other twelve are studied here.</p>
<p>Quintilian observes that tropes are used for two purposes: “some tropes are employed to help out our meaning and others to adorn our style” (<i>Institutio oratoria</i> VIII.6.2). Bede, in his short work on the figures and tropes, took Donatus’s list and gave examples of each from Scripture, so that the medieval student learned the tropes as a means of reading the Bible as well as the poets.</p>`,
  src: `Donatus, <i>Ars maior</i> III.6, in paraphrase; Quintilian, <i>Institutio oratoria</i> VIII.6.2 (trans. Butler; checked against the Perseus text); Bede, <i>De schematibus et tropis</i> (Kendall for reference).` },

{ id: 'metaphor',
  title: 'Metaphor',
  body: `<p><strong>Metaphor</strong> (Greek <i>metaphora</i>, “carrying over”; Latin <i>trānslātiō</i>) is the use of a word for something that it resembles. Quintilian calls it “the commonest and by far the most beautiful of tropes,” and explains: “A noun or a verb is transferred from the place to which it properly belongs to another where there is either no literal term or the transferred is better than the literal” (<i>Institutio oratoria</i> VIII.6.4–5).</p>
<p>We saw his distinction between metaphor and comparison: “It is a comparison when I say that a man did something <i>like a lion</i>, it is a metaphor when I say of him, <i>He is a lion</i>” (VIII.6.9). So a metaphor is, in Quintilian’s words, “a shorter form of simile” (VIII.6.8), in which the likeness is not stated but implied by the word itself. “The ship plowed the sea” carries “plowed” from the field to the water, because the ship cuts the sea as a plow cuts the earth.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.4–5, 8–9 (trans. Butler; checked against the Perseus text).` },

{ id: 'metaphor-kinds',
  title: 'The four kinds of metaphor',
  body: `<p>Donatus and Quintilian divide metaphors into four kinds, according to whether the things compared are living or lifeless (<i>Ars maior</i> III.6; <i>Institutio oratoria</i> VIII.6.9–11, in paraphrase):<br>from one living thing to another: Livy says that Scipio was continually “barked at” by Cato (Quintilian, VIII.6.9), carrying the dog’s bark to a man;<br>from one lifeless thing to another: in <i>pelagus tenuere rates</i> (<i>Aeneid</i> V.8) Virgil calls the ships <i>rates</i> (“rafts”), and Donatus explains that neither rafts nor ships have life;<br>from the living to the lifeless: Virgil gives the mountain Atlas a pine-crowned “head” (Donatus);<br>from the lifeless to the living: Turnus is told to take “oak” into his breast, meaning hardness (Donatus).</p>
<p>English metaphors follow the same pattern: “a cat burglar” (living to living), “a sea of troubles” (lifeless to lifeless), “the head of the river” (living to lifeless), “a heart of stone” (lifeless to living).</p>`,
  src: `Donatus, <i>Ars maior</i> III.6, in paraphrase; Quintilian, <i>Institutio oratoria</i> VIII.6.9 (trans. Butler; checked against the Perseus text).`,
  qpTodo: `Metaphor: in a given sentence, which word is used as a metaphor, what does it properly signify, and what likeness carries it over (and, if asked, which of the four kinds it is).` },

{ id: 'catachresis',
  title: 'Catachresis',
  body: `<p><strong>Catachresis</strong> (Greek, “misuse”; Latin <i>abūsiō</i>) is the use of the nearest available word for something that has no proper name of its own. Quintilian defines it as “the practice of adapting the nearest available term to describe something for which no actual term exists,” and gives the example of Virgil’s wooden horse, which the Greeks are said to “build” (<i>aedificant</i>), though the verb properly means to build a house (<i>Institutio oratoria</i> VIII.6.34).</p>
<p>Quintilian distinguishes catachresis from metaphor: “the former is employed where there is no proper term available, and the latter when there is another term available” (VIII.6.35). So the “leg” of a table and the “mouth” of a river, which we saw in the study of literal and figurative sense, are catachreses in this strict sense, because English has no other word for these parts. A modern example is the computer “mouse,” named from its likeness to the animal because the thing had no name.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.34–35 (trans. Butler; checked against the Perseus text).` },

{ id: 'metalepsis',
  title: 'Metalepsis',
  body: `<p><strong>Metalepsis</strong> (Greek, “substitution”; Latin <i>trānsūmptiō</i>) is a trope that passes through an intermediate step: one word is substituted for another by way of a third. Quintilian calls it a trope “with which to claim acquaintance, rather than one which we are ever likely to require to use,” and explains it with a Latin example: “<i>cano</i> is a synonym for <i>canto</i> and <i>canto</i> for <i>dico</i>, therefore <i>cano</i> is a synonym for <i>dico</i>, the intermediate step being provided by <i>canto</i>” (<i>Institutio oratoria</i> VIII.6.38).</p>
<p>A common example in the grammarians is the use of “ears of corn” for “summers” or “harvests”: the ears of corn signify the harvest, and the harvest signifies the year. So “after some few ears of corn” means “after a few years,” by two steps. Metalepsis is rare, and the student needs to recognize it chiefly in the poets.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.37–38 (trans. Butler; checked against the Perseus text); Donatus, <i>Ars maior</i> III.6, in paraphrase.` },

{ id: 'metonymy',
  title: 'Metonymy',
  body: `<p><strong>Metonymy</strong> (Greek, “change of name”) is the use of one name for another that is associated with it, not by likeness but by some other relation. Quintilian says it consists “in the substitution of one name for another,” and lists its kinds: the inventor for the invention, as Ceres for grain and Vulcan for fire; the possessor for the possession; the container for the contained; the author for his work, as when “we … speak of Virgil when we mean Virgil’s poems”; and the cause for the effect, as Horace’s “Pale death” (<i>Institutio oratoria</i> VIII.6.23–27).</p>
<p>English metonymies are common: “the crown” for the king, “the White House” for the president’s office, “I am reading Shakespeare” for his plays, and “the kettle is boiling” for the water in it. In each the word keeps its proper signification, but it is used of something related to what it signifies, and the hearer supplies the relation.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.23–27 (trans. Butler; checked against the Perseus text).`,
  qpTodo: `Metonymy: in a given sentence (“the crown,” “reading Shakespeare,” “the kettle is boiling”), what does the word properly signify, what is it used for, and what relation joins them.` },

{ id: 'synecdoche',
  title: 'Synecdoche',
  body: `<p><strong>Synecdoche</strong> (Greek, “understanding together”) puts the part for the whole or the whole for the part, the species for the genus or the genus for the species. Quintilian says it gives variety by “making us realise many things from one, the whole from a part, the genus from a species,” and gives Latin examples: <i>mucrō</i>, “the point,” for the whole sword, and <i>tēctum</i>, “roof,” for a whole house; and the use of the singular for the plural, as when “Livy frequently says, <i>The Roman won the day</i>” (<i>Institutio oratoria</i> VIII.6.19–20).</p>
<p>English synecdoches include “All hands on deck,” where “hands” stands for the sailors; “our daily bread,” where “bread” stands for all food; and “a fleet of fifty sail,” where “sail” stands for ships. Synecdoche differs from metonymy in that the relation is one of part and whole, or of species and genus, rather than of cause, container, or author.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.19–20 (trans. Butler; checked against the Perseus text).` },

{ id: 'antonomasia',
  title: 'Antonomasia',
  body: `<p><strong>Antonomasia</strong> (Greek, “naming instead”) puts a description or an epithet in place of a proper name. Quintilian says that it may be done “by the substitution of an epithet as equivalent to the name which it replaces, such as <i>Tydides</i>, <i>Pelides</i>” (that is, “son of Tydeus” for Diomedes, “son of Peleus” for Achilles), “or by indicating the most striking characteristics of an individual, as in the phrase <i>Father of gods and king of men</i>” for Jupiter (<i>Institutio oratoria</i> VIII.6.29).</p>
<p>Quintilian adds that an orator may speak of “Scipio as the destroyer of Carthage and Numantia, or of Cicero as the prince of Roman orators” (VIII.6.30). English examples are “the Bard” for Shakespeare, “the Iron Duke” for Wellington, and “the Philosopher,” the medieval name for Aristotle. Antonomasia also works the other way, when a proper name is used for a type: “a Solomon” for a wise man.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.29–30 (trans. Butler; checked against the Perseus text).` },

{ id: 'epithet',
  title: 'Epithet',
  body: `<p>An <strong>epithet</strong> (Greek, “something added”) is an adjective or descriptive phrase joined to a noun to adorn it. Quintilian notes that poets use it freely, “since for them it is sufficient that the epithet should suit the word to which it is applied: consequently we shall not blame them when they speak of <i>white teeth</i> or <i>liquid wine</i>” (<i>Institutio oratoria</i> VIII.6.40). Homer’s “rosy-fingered Dawn” and “swift-footed Achilles” are the most famous examples.</p>
<p>Quintilian explains when an epithet is a trope. If it is used alone, in place of the name, it becomes an antonomasia: “if you say, <i>The man who destroyed Numantia and Carthage</i>, it will be an antonomasia, whereas, if you add the word <i>Scipio</i>, the phrase will be an epithet” (VIII.6.43). So the epithet adds a description to a name, while the antonomasia replaces the name with the description.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.40–43 (trans. Butler; checked against the Perseus text).` },

{ id: 'onomatopoeia',
  title: 'Onomatopoeia',
  body: `<p><strong>Onomatopoeia</strong> (Greek, “the making of a name”) is the formation of a word from the sound of the thing it names. Quintilian says that “many words were created in this way by the original founders of the language, who adapted them to suit the sensation which they expressed. For instance, <i>mugitus</i>, lowing, <i>sibilus</i>, a hiss, and <i>murmur</i> owe their origin to this practice” (<i>Institutio oratoria</i> VIII.6.31). Donatus’s example is <i>clangor tubarum</i>, “the blare of trumpets.”</p>
<p>English has many such words: “buzz,” “hiss,” “cuckoo,” “bang,” and “murmur.” We saw in Section I that words signify by imposition, not by nature; onomatopoeia is the case in which the imposed sound imitates the thing. Even so, the imitation differs from language to language, as the dog’s bark is “woof” in English and <i>ouaf</i> in French, so onomatopoeia is still imposition, guided by likeness of sound.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.31 (trans. Butler; checked against the Perseus text); Donatus, <i>Ars maior</i> III.6.` },

{ id: 'periphrasis',
  title: 'Periphrasis',
  body: `<p><strong>Periphrasis</strong> (Greek, “speaking around”; Latin <i>circumlocūtiō</i>) uses several words where one or a few would suffice. Quintilian says it is “sometimes necessary, being of special service when it conceals something which would be indecent, if expressed in so many words,” and that at other times it “is employed solely for decorative effect, a practice most frequent among the poets,” as in Virgil’s “Now was the time / When the first sleep to weary mortals comes” for “it was night” (<i>Institutio oratoria</i> VIII.6.59–60).</p>
<p>English uses periphrasis in “the fair sex” for “women,” “the departed” for “the dead,” and “the land of the rising sun” for Japan. Quintilian warns that periphrasis is a virtue only when it adorns: “when it passes into excess, it is known as perissology” (VIII.6.61), that is, wordiness.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.59–61 (trans. Butler; checked against the Perseus text).` },

{ id: 'hyperbole',
  title: 'Hyperbole',
  body: `<p><strong>Hyperbole</strong> (Greek, “throwing beyond”) is, in Quintilian’s words, “an elegant straining of the truth, and may be employed indifferently for exaggeration or attenuation” (<i>Institutio oratoria</i> VIII.6.67). Virgil speaks of “twin rocks that threaten heaven” (VIII.6.68). English says “I have told you a thousand times” and “He is as slow as a snail,” the first enlarging and the second lessening.</p>
<p>Quintilian explains why hyperbole is not a lie: “hyperbole lies, though without any intention to deceive,” and “such disregard of truth is pardonable, for it does not involve the definite assertion of the thing that is not” (VIII.6.74–75). So hyperbole is a trope, not a false statement: the hearer understands that the words go beyond the fact and takes them as signifying only that the fact is great or small. This is the point at which the tropes touch the distinction between grammar and logic that we saw in Section I.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.67–68, 74–75 (trans. Butler; checked against the Perseus text).`,
  qpTodo: `Hyperbole: in a given sentence, which words go beyond the truth, do they enlarge or lessen, and why is the sentence not a lie.` },

{ id: 'allegory',
  title: 'Allegory',
  body: `<p><strong>Allegory</strong> (Greek, “speaking otherwise”) says one thing and means another. Quintilian says that it “either presents one thing in words and another in meaning, or else something absolutely opposed to the meaning of the words,” and that the first kind “is generally produced by a series of metaphors.” His example is Horace’s ode on the ship of state: “O ship, new waves will bear thee back to sea,” in which Horace “represents the state under the semblance of a ship, the civil wars as tempests, and peace and good-will as the haven” (<i>Institutio oratoria</i> VIII.6.44).</p>
<p>So an allegory is a continued metaphor: each word keeps its proper signification within the story, but the whole story signifies something else. English literature has whole allegorical works, such as Bunyan’s <i>The Pilgrim’s Progress</i>, in which a journey signifies the Christian life. We saw in the study of literal and figurative sense that St. Thomas places the meaning of such figurative language within the literal sense, because it is what the author intends by the words.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.44 (trans. Butler; checked against the Perseus text); Horace, <i>Odes</i> I.14.` },

{ id: 'irony',
  title: 'Irony as a species of allegory',
  body: `<p>Quintilian’s second kind of allegory says something “absolutely opposed to the meaning of the words,” and he names it irony: “that class of allegory in which the meaning is contrary to that suggested by the words, involve an element of irony” (<i>Institutio oratoria</i> VIII.6.54). Donatus likewise counts <strong>irony</strong> (Greek <i>eirōneia</i>, “dissembling”) as a species of allegory, together with other species such as the riddle (<i>aenigma</i>), the proverb (<i>paroemia</i>), and sarcasm (<i>sarcasmos</i>) (<i>Ars maior</i> III.6, in paraphrase).</p>
<p>Quintilian says that irony “is made evident to the understanding either by the delivery, the character of the speaker or the nature of the subject. For if any one of these three is out of keeping with the words, it at once becomes clear that the intention of the speaker is other than what he actually says” (VIII.6.54). So “What lovely weather!” said in a storm is understood as its opposite, because the subject does not fit the words. Irony is therefore a trope of the whole statement: each word keeps its meaning, but the statement means the contrary.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.6.54 (trans. Butler; checked against the Perseus text); Donatus, <i>Ars maior</i> III.6, in paraphrase.`,
  qpTodo: `Allegory and irony: in a given passage, is the trope an allegory (a continued metaphor) or irony (the contrary of the words), and by what does the hearer recognize it.` },

{ id: 'summary',
  title: 'The tropes and signification',
  body: `<p>We have studied twelve tropes, which can be grouped by the relation between the proper signification and the figurative one:<br>by <strong>likeness</strong>: metaphor, catachresis, allegory, and (in its imitation of sound) onomatopoeia;<br>by <strong>association</strong>: metonymy and metalepsis;<br>by <strong>part and whole</strong>: synecdoche;<br>by <strong>description in place of a name</strong>: antonomasia, epithet, and periphrasis;<br>by <strong>excess or contrariety</strong>: hyperbole and irony.</p>
<p>In every trope the word keeps its imposition, and the figurative signification is understood through the proper one. So the tropes do not abolish the order of signification that we studied in Section I; they presuppose it. In Section VIII we turn from the signification of words to what they stand for in a proposition, which the logicians called supposition.</p>`,
  src: `Donatus, <i>Ars maior</i> III.6; Quintilian, <i>Institutio oratoria</i> VIII.6.` }

  ]
};
