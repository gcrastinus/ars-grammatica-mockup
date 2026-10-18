/* X.4 Classical Composition Exercises [x.progymnasmata]
   Plan (ITEM-LIST.md): 22 panels (2 introductory, 14 one per exercise, 2 on why the fable comes first, 4 on the order),
   6 question points (placeholders: qpTodo; to be written).
   Every quotation of Kennedy and of the handbooks in his translation is taken from sources/KENNEDY-FABLE-AND-ORDER.md, with
   the printed page numbers given there; nothing is quoted from any other report of Kennedy. The illustrations of each
   exercise are ours unless a model is named; Aphthonius's model subjects other than the cicadas and ants are named from
   memory and marked to verify in the report. Quintilian I.9.2 checked against the Perseus text of Butler's translation.
   Overlap with Ars Rhetorica: encomion and invective (epideictic), refutation and confirmation (parts of the oration), and
   the maxim (sententia) are named here as exercises and referred to the rhetoric course for their use in speeches.
   Live material drawn on: none (the live app has no progymnasmata). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['x.progymnasmata'] = {
  id: 'x.progymnasmata',
  title: 'Classical Composition Exercises',
  sub: 'The fourteen progymnasmata, why the fable comes first, and why they follow their order',
  sources: `George A. Kennedy, <i>Progymnasmata: Greek Textbooks of Prose Composition and Rhetoric</i> (2003): Theon, [Hermogenes], Aphthonius, Nicolaus, John of Sardis; Quintilian, <i>Institutio oratoria</i> I.9; Priscian, <i>Praeexercitamina</i>.`,
  panels: [

{ id: 'what',
  title: 'What are the progymnasmata?',
  body: `<p>Schools still teach writing by a series of assignments that grow harder: a student first retells a story, then describes a place, and later writes an essay that argues for a position. The ancient schools gave students such a series of written exercises between the study of grammar and the study of rhetoric. They were called <strong>progymnasmata</strong> (Greek, “preliminary exercises”). George Kennedy, the modern historian of these exercises, explains that they were preliminary “to the practice of declamation in the schools of rhetoric,” and that they “were assigned by Greek grammarians to students after they had learned to read and write as preparation for declamation” (Kennedy, <i>Progymnasmata</i>, p. x).</p>
<p>Quintilian assigns the first of them to the Roman grammarian: “Their pupils should learn to paraphrase Aesop’s fables, the natural successors of the fairy stories of the nursery, in simple and restrained language and subsequently to set down this paraphrase in writing with the same simplicity of style” (<i>Institutio oratoria</i> I.9.2). So the progymnasmata stand at the meeting of grammar and rhetoric: they begin with the stories that children already know and end with exercises in argument that prepare for the speeches of the rhetorical schools.</p>`,
  src: `Kennedy, <i>Progymnasmata</i>, p. x; Quintilian, <i>Institutio oratoria</i> I.9.2 (trans. Butler; checked against the Perseus text).` },

{ id: 'fourteen',
  title: 'The fourteen exercises of Aphthonius',
  body: `<p>Several Greek handbooks of the progymnasmata survive, by Theon, by an author whose work was attributed to Hermogenes, by Aphthonius, and by Nicolaus, and Priscian translated one of them into Latin as the <i>Praeexercitamina</i>. Kennedy observes that “there is some variation in the number, names, and sequence of the exercises among the extant works” (p. xiii). The handbook of Aphthonius, of the fourth century, became the standard one, and it gives fourteen exercises in this order:</p>
<p><strong>fable</strong> (<i>mythos</i>);<br><strong>narrative</strong> (<i>diēgēma</i>);<br><strong>chreia</strong> (<i>chreia</i>);<br><strong>maxim</strong> (<i>gnōmē</i>);<br><strong>refutation</strong> (<i>anaskeuē</i>);<br><strong>confirmation</strong> (<i>kataskeuē</i>);<br><strong>common-place</strong> (<i>koinos topos</i>);<br><strong>encomion</strong> (<i>enkōmion</i>);<br><strong>invective</strong> (<i>psogos</i>);<br><strong>syncrisis</strong>, or comparison (<i>synkrisis</i>);<br><strong>ethopoeia</strong>, or characterization (<i>ēthopoiia</i>);<br><strong>ecphrasis</strong>, or description (<i>ekphrasis</i>);<br><strong>thesis</strong> (<i>thesis</i>); and, finally,<br><strong>introduction of a law</strong> (<i>nomos</i>).</p>`,
  src: `Kennedy, <i>Progymnasmata</i>, pp. xiii, 96–127 (Aphthonius’s chapter titles, trans. Kennedy).` },

{ id: 'fable',
  title: 'Fable',
  body: `<p>A fable is a short story, usually about animals, that teaches a moral truth, as the fables of Aesop do: the tortoise who wins the race against the hare teaches that steady effort overcomes careless speed. Aphthonius begins his account of it: “Fable (<i>mythos</i>) originated with poets but has come to be used also by orators for the sake of the moral. Fable is a fictive statement, imaging truth”.</p>
<p>Aphthonius’s own model is “an ethical fable of the cicadas and ants, exhorting the young to toil” (p. 96): the cicadas sing all summer while the ants gather food, and in winter the cicadas starve. The student retells such a fable in his own words, as Quintilian describes, sometimes shortening it and sometimes adding to it, and states its moral. So the first exercise uses a story that the student already knows, and the work is in the telling.</p>`,
  src: `Aphthonius, ch. 1 (trans. Kennedy, p. 96).` },

{ id: 'narrative',
  title: 'Narrative',
  body: `<p>A narrative is a story told in order, whether true, as in history, or invented, as in poetry. The student tells, for example, the story of Daedalus and Icarus, or the crossing of the Rubicon by Caesar, setting out who acted, what was done, when, where, how, and why. Aphthonius defines it: “Narrative (<i>diēgēma</i>) is an exposition of an action that has happened or as though it had happened.”</p>
<p>The narrative is longer and more varied than the fable and has no moral attached. It teaches the student to order events clearly in time, to connect them by their causes, and to keep the main action in view. These are the grammatical skills of the sentence and the period applied to a whole story.</p>`,
  src: `Aphthonius, ch. 2 (trans. Kennedy, p. 96).` },

{ id: 'chreia',
  title: 'Chreia',
  body: `<p>A chreia reports a memorable saying or action of a named person, such as the saying attributed to Isocrates, that the root of education is bitter but its fruit is sweet. Aphthonius defines it: “Chreia (<i>khreia</i>) is a brief recollection, referring to some person in a pointed way.” The student expands the chreia in a set order: praise of the speaker, a paraphrase of the saying, the reason for it, a contrast, a comparison, an example, the testimony of others, and a short conclusion.</p>
<p>The chreia is the first exercise in which the student argues for something, because he must give reasons why the saying is true. But the argument is supported by a famous authority, and the steps are fixed in advance, so it remains an easy exercise.</p>`,
  src: `Aphthonius, ch. 3 (trans. Kennedy, p. 97); the Isocrates chreia and the order of the expansion in paraphrase.` },

{ id: 'maxim',
  title: 'Maxim',
  body: `<p>A maxim is a general saying, such as “Haste makes waste” or “A friend in need is a friend indeed,” and it is expanded in the same way as the chreia. Aphthonius defines it: “Maxim (<i>gnōmē</i>) is a summary statement, in declarative sentences, urging or dissuading something.”</p>
<p>The maxim differs from the chreia in one point: the chreia is attributed to a person and may report an action, whereas the maxim is a general statement, attributed to no one in particular. Quintilian draws a similar line between the aphorism and the character sketch (<i>ethologia</i>): “aphorisms are general propositions, while ethologiae are concerned with persons” (<i>Institutio oratoria</i> I.9.3). The maxim used as an ornament of a speech, the <i>sententia</i>, is studied in rhetoric.</p>`,
  src: `Aphthonius, ch. 4 (trans. Kennedy, p. 99); Quintilian, <i>Institutio oratoria</i> I.9.3 (trans. Butler; checked against the Perseus text).`,
  qpTodo: `Chreia and maxim: is a given saying a chreia or a maxim (a saying attributed to Isocrates; “Haste makes waste”), and what distinguishes the two.` },

{ id: 'refutation',
  title: 'Refutation',
  body: `<p>In the exercise of refutation the student argues that a story, usually from myth or poetry, is not credible, because it is unclear, impossible, inconsistent, or improper. He might argue, for example, that the story of a boy flying on wings of wax is impossible, because wax could not hold feathers against the force of the wind. Aphthonius defines it: “Refutation (<i>anaskeuē</i>) is an overturning of some matter at hand.”</p>
<p>Refutation is the first of the exercises that require argument against a received view, and so it is harder than the chreia and the maxim, which argue for a saying already accepted. It prepares the student for the part of a speech in which the speaker answers the arguments of the other side, which is studied in rhetoric.</p>`,
  src: `Aphthonius, ch. 5 (trans. Kennedy, p. 101).` },

{ id: 'confirmation',
  title: 'Confirmation',
  body: `<p>Confirmation is the opposite of refutation, because in it the student argues that a story is credible, clear, possible, consistent, and fitting. Often the same story is first refuted and then confirmed, so that the student learns to see the arguments on both sides. Aphthonius defines it: “Confirmation (<i>kataskeuē</i>) is the corroboration of some matter at hand.”</p>
<p>The two exercises together train the student to examine a narrative as a judge would, asking whether it is clear, whether it could have happened, and whether its parts agree with one another. So they connect the grammarian’s task of judging, which we saw in the Preliminary section, with the orator’s task of proving.</p>`,
  src: `Aphthonius, ch. 6 (trans. Kennedy, p. 103).`,
  qpTodo: `Refutation and confirmation: what does each exercise do with a given story, and by what headings (clear, possible, consistent, fitting) is the story examined.` },

{ id: 'common-place',
  title: 'Common-place',
  body: `<p>In the exercise of the common-place the student writes against a type of wrongdoer, such as a tyrant, a traitor, or a thief, not against a particular person. He shows how great the wrong is, what harm it causes, and why it deserves punishment. Aphthonius defines it: “Common-place (<i>koinos topos</i>) is language amplifying evils that are attached to something.”</p>
<p>The common-place is called “common” because its arguments apply to any person of that type, and they can be used in any case where such a person is accused. It teaches the student to amplify, that is, to show the importance of a matter by its circumstances and consequences, which Theon calls one of the two functions of the orator.</p>`,
  src: `Aphthonius, ch. 7 (trans. Kennedy, p. 105); Theon (trans. Kennedy, pp. 8–9).` },

{ id: 'encomion',
  title: 'Encomion',
  body: `<p>The encomion praises a person, a city, an animal, or a thing, following a set order: the subject’s origin, upbringing, deeds, and qualities, compared with others, and a conclusion. Aphthonius defines it: “Encomion is language expressive of inherent excellences,” and his model is an encomion of the historian Thucydides.</p>
<p>Praise of a person was one of the chief kinds of speech in antiquity, and its use in oratory is studied in rhetoric. As a preliminary exercise, the encomion teaches the student to arrange material under fixed headings and to describe the virtues of a subject in appropriate language.</p>`,
  src: `Aphthonius, ch. 8 (trans. Kennedy, p. 108); the model subject in paraphrase.` },

{ id: 'invective',
  title: 'Invective',
  body: `<p>Invective is the opposite of the encomion, and it follows the same headings, showing the vices of a subject instead of its virtues. Aphthonius defines it: “Invective (<i>psogos</i>) is language expressive of inherent evils,” and his model is an invective against Philip of Macedon.</p>
<p>The invective differs from the common-place because it is directed against a particular person, not against a type. Together, the encomion and the invective teach the student to apply the same order of headings to opposite ends, and they prepare for the kind of speech that praises or blames, which is studied in rhetoric.</p>`,
  src: `Aphthonius, ch. 9 (trans. Kennedy, p. 111); the model subject in paraphrase.` },

{ id: 'syncrisis',
  title: 'Syncrisis',
  body: `<p>In the exercise of syncrisis the student compares two persons or things, to show that they are equal or that one is better or worse than the other: two heroes, such as Achilles and Hector, or two cities, or two ways of life. The comparison follows the headings of the encomion, applied to both subjects side by side. Aphthonius defines it briefly: “Syncrisis (<i>synkrisis</i>) is a comparison.”</p>
<p>Syncrisis requires the student to hold two subjects in view at once and to arrange his sentences so that the parallel is clear. It therefore draws on the parallel construction and the figures of balance that we have studied, and it prepares for the comparisons that are used in argument.</p>`,
  src: `Aphthonius, ch. 10 (trans. Kennedy, p. 113).` },

{ id: 'ethopoeia',
  title: 'Ethopoeia',
  body: `<p>In the exercise of ethopoeia the student writes the words that a known person might have said in a given situation, such as what Niobe might say over her dead children, or what a general might say to his soldiers before a battle. The speech must fit the character, the age, and the circumstances of the speaker. Aphthonius defines it: “Ethopoeia (<i>ēthopoiia</i>) is imitation of the character of a proposed speaker.”</p>
<p>Ethopoeia teaches the student to write in a voice other than his own, adapting his words to a person and an occasion. It is closely related to what the ancient critics admired in the poets and historians, who put fitting speeches into the mouths of their characters, as Homer does in the <i>Iliad</i> and Thucydides in his <i>History</i>.</p>`,
  src: `Aphthonius, ch. 11 (trans. Kennedy, p. 115); the Niobe subject in paraphrase.` },

{ id: 'ecphrasis',
  title: 'Ecphrasis',
  body: `<p>In the exercise of ecphrasis the student describes a person, a place, a time, an event, or a work of art so vividly that the reader seems to see it. Aphthonius defines it: “Ecphrasis (<i>ekphrasis</i>) is descriptive language, bringing what is shown clearly before the eyes.” Homer’s description of the shield of Achilles in the eighteenth book of the <i>Iliad</i> is the most famous ancient example.</p>
<p>Ecphrasis teaches the student to choose details and to order them, from the whole to the parts or from one side to the other, so that the description can be followed. It draws on the vocabulary that the student has gathered from reading and on the epithets and periphrases that we studied among the tropes.</p>`,
  src: `Aphthonius, ch. 12 (trans. Kennedy, p. 117); Homer, <i>Iliad</i> XVIII.`,
  qpTodo: `Ethopoeia, ecphrasis, and syncrisis: which exercise is described in a given task (what Niobe might say; a description of a harbor; Achilles and Hector compared), and what does it require of the writer.` },

{ id: 'thesis',
  title: 'Thesis',
  body: `<p>A thesis is a general question, not tied to particular persons or circumstances, such as whether one should marry, whether one should go to sea, or whether the city should be fortified. The student argues for one answer and answers the objections. Aphthonius defines it: “Thesis (<i>thesis</i>) is a logical examination of any matter under inspection.”</p>
<p>The thesis is the first exercise that treats a general question by argument without the support of a story or a famous saying. It stands close to philosophy, which also discusses general questions, and it prepares for the arguments of the rhetorical schools, where the same questions arise in particular cases.</p>`,
  src: `Aphthonius, ch. 13 (trans. Kennedy, p. 120).` },

{ id: 'law',
  title: 'Introduction of a law',
  body: `<p>The last exercise is the argument for or against a proposed law. Aphthonius begins: “Some have also allowed that the introduction of a law is an exercise”. The student argues that a law is or is not just, lawful, advantageous, and practicable, considering what it would require and what effects it would have.</p>
<p>The introduction of a law is the most difficult of the exercises, because it requires the student to argue about a particular measure as a citizen would in an assembly. It is the last step before the full speeches of the rhetorical schools, which Kennedy calls declamation, and with it the preliminary exercises end.</p>`,
  src: `Aphthonius, ch. 14 (trans. Kennedy, p. 124); Kennedy, p. x.` },

{ id: 'fable-first-1',
  title: 'Why does the fable come first?',
  body: `<p>A child who has heard the story of the fox who could not reach the grapes and called them sour can retell it long before he can argue about anything, and the story already teaches a lesson. The handbooks give two reasons of this kind for placing the fable first. Nicolaus says that the teachers “put the fable first among them as being naturally plain and simpler than the others and as having some relationship to poems. In their transition from poems to rhetoric, students should not all at once encounter things that are strange and unusual to them”. The handbook attributed to Hermogenes gives a moral reason: “Fable (<i>mythos</i>) is regarded as the first exercise to be assigned to the young because it can bring their minds into harmony for the better. In this way they (i.e., teachers of grammar) think to form students while still tender”.</p>
<p>Both reasons belong to the grammar school. The fable is easy, because it is short and familiar from the poets that the students have been reading, and it is morally useful, because it teaches a lesson in a form that the young accept. The note in the translation, “teachers of grammar,” shows that the exercise was assigned by the grammarian, as Quintilian also says.</p>`,
  src: `Nicolaus (trans. Kennedy, p. 133); [Hermogenes] (trans. Kennedy, p. 74).`,
  qpTodo: `Why the fable comes first: what two reasons do the handbooks give (its ease and its relation to the poets; its moral use for the young), and which handbook gives each.` },

{ id: 'fable-first-2',
  title: 'The fable and what follows it',
  body: `<p>Aphthonius gives no reason outright for putting the fable first, but he connects it with poetry and with the moral: “Fable (<i>mythos</i>) originated with poets but has come to be used also by orators for the sake of the moral”. Nicolaus adds that the fable belongs to the kind of speech that gives advice: “that it clearly belongs to the deliberative part, no one should doubt”.</p>
<p>John of Sardis, in his commentary on Aphthonius, states the general rule: “in the progymnasmata one should begin first from the easier ones, and this is the fable”. So the fable comes first because it is the easiest exercise, because it continues the reading of the poets, and because it already contains, in a simple form, the advising and persuading that the later exercises develop.</p>`,
  src: `Aphthonius (trans. Kennedy, p. 96); Nicolaus (trans. Kennedy, p. 135); John of Sardis (trans. Kennedy, pp. 176–77).` },

{ id: 'order-rule',
  title: 'The rule of the sequence',
  body: `<p>The exercises are arranged so that each is harder than the one before: the student begins by retelling a story and ends by arguing about a law. Kennedy describes the whole series as “a sequence of assignments in reading, writing, and speaking which gradually increase in difficulty and in maturity of thought from simple story-telling to argumentation” (p. x). Theon states the principle behind it: “Easier things should be learned before more difficult ones, and it is easier to amplify what is clear than to demonstrate what is unclear”.</p>
<p>So the order runs from retelling (the fable and the narrative), through arguing for an accepted saying (the chreia and the maxim), to arguing for and against a story (refutation and confirmation), to amplifying and praising (the common-place, encomion, invective, and syncrisis), to writing in another’s voice and describing (ethopoeia and ecphrasis), and finally to arguing general and practical questions (the thesis and the law). Each exercise uses what the earlier ones have taught.</p>`,
  src: `Kennedy, <i>Progymnasmata</i>, p. x; Theon (trans. Kennedy, pp. 8–9).` },

{ id: 'order-lesser-greater',
  title: 'From lesser to greater',
  body: `<p>Nicolaus explains the order in the same way: “as we move ahead to greater things from lesser things we need to take proportionally more care about each of the exercises discussed”. Kennedy glosses this as a movement “from the simpler, relatively non-argumentative exercises, to more difficult ones involving argument” (p. 147 n.).</p>
<p>Nicolaus also gives a reason for the place of a particular exercise. He argues that the common-place belongs after refutation and confirmation, because the exercises prepare for the parts of a speech: “if we are imitating the succession and order in speeches it is necessary to put common-place right after refutation and confirmation”. So the order follows two principles at once: the difficulty of the exercises, and the order of the parts of a speech for which they prepare.</p>`,
  src: `Nicolaus (trans. Kennedy, pp. 147–48); Kennedy, p. 147 n.` },

{ id: 'order-theon',
  title: 'Theon’s different order',
  body: `<p>Theon, the earliest of the handbooks, begins not with the fable but with the chreia: “We begin, first, with the chreia; for this is short and easily remembered. Then comes fable and narration”. Kennedy explains that the Greek text of Theon was later rearranged: “Sometime in later antiquity Theon’s work was edited, and the order of the chapters was rearranged to make it conform more closely to the system of exercises described in the handbook of Aphthonius” (p. 2), and that Armenian manuscripts “preserve the original order of the text” (p. 2).</p>
<p>Kennedy’s table of the handbooks shows the difference: Theon places the chreia first, the fable second, and the narrative third, whereas [Hermogenes], Aphthonius, and Nicolaus place the fable first, the narrative second, and the chreia third (p. xiii). Nicolaus reports the dispute: “There are some who assign it before both fable and narrative … It is not unreasonable to assign it a place after the fable and the narrative, because it requires the use of more logical divisions”.</p>`,
  src: `Theon (trans. Kennedy, p. 8); Kennedy, pp. 2, xiii; Nicolaus (trans. Kennedy, p. 139).`,
  qpTodo: `Theon’s order: which exercise does Theon put first and why, how does his order differ from Aphthonius’s, and what reason does Nicolaus give for placing the chreia third.` },

{ id: 'grammar',
  title: 'Why these exercises belong to grammar',
  body: `<p>The progymnasmata belong to grammar because they are exercises in composition: the student retells, expands, describes, and argues in correct and clear sentences, using the constructions, figures, and tropes that grammar has taught. For this reason they were taught by the grammarian, as Kennedy says, to students “after they had learned to read and write as preparation for declamation” (p. x), and Quintilian assigns the first of them, the paraphrase of Aesop’s fables, to the Roman grammarian (<i>Institutio oratoria</i> I.9.2).</p>
<p>So the progymnasmata complete the course of grammar and open the way to rhetoric. They begin from the reading of the poets, which is the grammarian’s first task, and they end at the threshold of the full speech, which is the work of rhetoric. The student who has completed them has learned to produce good writing as well as to understand it.</p>`,
  src: `Kennedy, <i>Progymnasmata</i>, p. x; Quintilian, <i>Institutio oratoria</i> I.9.2.`,
  qpTodo: `Grammar and the progymnasmata: why were these exercises assigned by the grammarian, and what parts of grammar does each kind of exercise use.` }

  ]
};
