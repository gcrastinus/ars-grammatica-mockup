/* VI.1 Usage and Authority [vi.usage]
   Plan (ITEM-LIST.md): 7 panels, 2 question points. Applies the four criteria of P.4;
   the first panel refers back to P.4 and does not teach the criteria again.
   Live material drawn on: none. Horace, Ars poetica 70–72, quoted in Smart's prose translation (Perseus); ITEM-LIST names
   Fairclough's Loeb, which could not be checked here. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['vi.usage'] = {
  id: 'vi.usage',
  title: 'Usage and Authority',
  sub: 'Custom, the authors, and reason as judges of what is correct',
  sources: `Quintilian, <i>Institutio oratoria</i> I.5–6; Horace, <i>Ars poetica</i> 70–72.`,
  panels: [

{ id: 'criteria-again',
  title: 'The criteria applied',
  body: `<p>Every speaker sometimes hesitates over which of two forms is correct: “lie” or “lay,” “fewer” or “less,” “different from” or “different than.” We saw in the Preliminary section that the grammarians judge what is correct by four criteria: reason (with its supports, analogy and etymology), antiquity, authority, and usage, and that when they disagree, usage generally prevails. We have since studied the forms of words and the rules of construction. In this section we apply the criteria to particular questions: what makes a word or a construction correct, and what kinds of error the grammarians distinguished.</p>
<p>The Latin name for correct speech was <i>Latīnitās</i> (“Latinity”), as the Greek was <i>Hellēnismos</i> (“Greekness”): to speak correctly was to speak the language as it should be spoken. English has no single word for this, and we use the plain term <strong>correctness</strong>. Its opposite is error, and the grammarians named its chief kinds the barbarism and the solecism, which are studied in this section.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.1–3, in paraphrase.` },

{ id: 'horace',
  title: 'Horace on usage',
  body: `<p>Words, like all human works, change: some go out of use and some return. A word that was correct in one age may be obsolete in the next, and an old word may be revived. So the grammarian cannot judge correctness by the rules alone, or by the oldest form alone; he must know the usage of his own time and of the authors he reads.</p>
<p>Horace, in his poem on the art of poetry, states the power of usage over words: “Many words shall revive, which now have fallen off; and many which are now in esteem shall fall off, if it be the will of custom, in whose power is the decision and right and standard of language” (<i>Ars poetica</i> 70–72). The Latin of the last line, <i>quem penes arbitrium est et ius et norma loquendi</i>, was quoted for centuries as the classic statement that usage (<i>ūsus</i>) is the judge of speech.</p>`,
  src: `Horace, <i>Ars poetica</i> 70–72 (Latin checked against the Perseus text; trans. Christopher Smart, checked against the Perseus text).`,
  qp: { id: 'q-horace', variants: [
    { prompt: `According to Horace, what decides whether a word is in use?`,
      options: [`Custom, that is, usage`, `The oldest form of the word`, `The rules of analogy`, `The word’s etymology`],
      answer: 0,
      explain: `Horace says that custom holds “the decision and right and standard of language”: usage (<i>ūsus</i>) judges which words are in use.` },
    { prompt: `What does Horace say happens to words over time?`,
      options: [`None changes once it is correct`, `Some fall off, and some revive`, `All old words return in time`, `Only borrowed words change`],
      answer: 1,
      explain: `“Many words shall revive, which now have fallen off; and many which are now in esteem shall fall off, if it be the will of custom.”` },
    { prompt: `“Thou” has fallen out of ordinary English but remains in prayer and in older poetry. How would Horace explain this?`,
      options: [`Analogy has forbidden it`, `It was always incorrect`, `Its etymology has changed`, `Custom decides where it is used`],
      answer: 3,
      explain: `For Horace custom is the judge of speech: usage has let “thou” fall from ordinary speech while keeping it in the kinds of speech where it is still at home.` }
  ]} },

{ id: 'educated-usage',
  title: 'Whose usage?',
  body: `<p>A form can be heard every day and still not be good usage: “ain’t” is common in speech, but it is not used in careful writing. Usage, as Quintilian defines it and as we saw in the Preliminary section, is the agreed practice of educated speakers, not whatever most people say. This definition raises a question for every language: how do we know what educated speakers agree on? The grammarians answer from the authors, from the speech of those who are trained in the language, and from the agreement of good dictionaries and grammars, which record that usage.</p>
<p>Usage also differs according to the kind of speech. In formal and scientific writing, “The data are” keeps the Latin plural of <i>datum</i>; in conversation and much ordinary writing, “The data is” is the established usage of educated speakers. Neither is simply wrong; each is correct in its place. So a question of usage is often a question of fitness to the occasion, and the grammarian must judge not only whether a form is used but where and by whom.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.45, in paraphrase.` },

{ id: 'authors',
  title: 'The authority of the authors',
  body: `<p>Good authors sometimes use forms that a grammar would mark as incorrect. Shakespeare’s Antony calls the wound that Brutus gave Caesar “the most unkindest cut of all” (<i>Julius Caesar</i> III.2), with a double superlative, and no reader takes it for an ignorant error. The authors are the second witness of correct usage, and Quintilian warns the teacher not to treat their departures from the rule as errors. Some teachers, he says, “are in the habit of picking out examples of barbarism from the poets and attacking the authors whom they are expounding for using such words. A boy should however realize that in poets such peculiarities are pardonable or even praiseworthy” (<i>Institutio oratoria</i> I.5.11).</p>
<p>So when a good author departs from the rule, the grammarian first asks whether the departure is a figure or a license, made for a reason, or a form that was correct in the author’s time. We saw this with “the wages of sin is death” in Section V. Only when no such reason can be found does the grammarian call the form an error, and even then he explains the author rather than rewriting him.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.5.11 (trans. Butler; checked against the Perseus text).` },

{ id: 'prescribe-describe',
  title: 'Prescribing and describing',
  body: `<p>Modern discussions of usage often distinguish two attitudes. A <strong>prescriptive</strong> grammar states how the language should be used; a <strong>descriptive</strong> grammar states how it is used. The English grammarians of the eighteenth century, such as Robert Lowth (1762), were largely prescriptive, and some of their preferences were judged by Latin models. So Lowth preferred to place a preposition before its relative (“the man to whom I spoke”) rather than at the end of the clause (“the man whom I spoke to”); but he allowed the final preposition in conversation and in familiar writing, and preferred the other order only in the solemn style. The later rule that a sentence must never end with a preposition is stricter than his. Many modern linguists are strictly descriptive and decline to call any established usage incorrect.</p>
<p>The classical grammarian stands between these attitudes. He describes, because the criteria of usage and authority are facts about how the language is used by its best speakers and writers. He also prescribes, because those facts give a standard by which a particular form can be judged. Samuel Johnson, in the preface to his <i>Dictionary</i> (1755), held that the lexicographer must record the language as it is used by good writers, while recognizing that he cannot stop it from changing. Yet he also wrote that “every language has likewise its improprieties and absurdities, which it is the duty of the lexicographer to correct or proscribe” (Preface to the <i>Dictionary</i>).</p>`,
  src: `Lowth, <i>A Short Introduction to English Grammar</i> (1762); Johnson, Preface to the <i>Dictionary</i> (1755); in paraphrase, except the quotation from Johnson (Project Gutenberg #5430).` },

{ id: 'change',
  title: 'When does a new usage become correct?',
  body: `<p>Usage changes, as Horace says, and a form that begins as an error may become correct when educated speakers and writers adopt it. As we have seen, words change their meaning by usage. The word “meat” once meant any food, as it still does in “sweetmeat,” and now means flesh; no one would call the modern sense an error. The word “decimate” originally meant to kill one in every ten, as a Roman punishment of mutinous soldiers; it is now used of any great destruction, and that use is established in good writers, though some still object to it.</p>
<p>So the grammarian judges a new usage by asking whether it has been accepted by the speakers and authors whose usage sets the standard, not by whether it agrees with the origin of the word. We saw in Section IV that the original meaning of a word does not decide its present meaning. A disputed usage remains disputed while good authors disagree, and then the grammarian must say that it is disputed, and in which kinds of writing each form is accepted.</p>`,
  src: `The <i>Oxford English Dictionary</i>, s.vv. “meat,” “decimate,” in paraphrase.`,
  qp: { id: 'q-change', variants: [
    { prompt: `“Quick” once meant “alive,” as in “the quick and the dead.” Is its use to mean “fast” correct?`,
      options: [`Yes; usage has established it`, `No; the original meaning decides`, `No; it is a barbarism`, `Yes, because of its etymology`],
      answer: 0,
      explain: `A new usage becomes correct when the speakers and authors who set the standard accept it, and this sense has long been accepted. The original meaning of a word does not decide its present meaning.` },
    { prompt: `“Hopefully, the train will be on time” is widely used, but some careful writers still object to it. How should the grammarian describe it?`,
      options: [`As a barbarism, since its origin is otherwise`, `As disputed, and say where it is accepted`, `As a solecism in every kind of writing`, `As correct beyond any objection`],
      answer: 1,
      explain: `While good authors disagree, a usage remains disputed, and the grammarian says so and states in which kinds of writing each form is accepted.` },
    { prompt: `By what does the grammarian judge whether a new usage has become correct?`,
      options: [`The original meaning of the word`, `Whether analogy with similar words supports it`, `Acceptance by good speakers and authors`, `The oldest recorded form of the word`],
      answer: 2,
      explain: `The grammarian asks whether the speakers and authors whose usage sets the standard have accepted it, not whether it agrees with the origin of the word.` }
  ]} },

{ id: 'kinds-of-error',
  title: 'The kinds of error',
  body: `<p>“Knowed” for “knew” is wrong in itself; “The box of apples are heavy” is wrong only in the way its words are joined; and “infer” used for “imply” is a correct word in the wrong sense. The grammarians named the principal kinds of error by where the error lies:</p>
<p><strong>barbarism</strong> (<i>barbarismus</i>), an error in a single word, in its letters, syllables, accent, or form, as “growed” for “grew” or “heighth” for “height”;<br><strong>solecism</strong> (<i>soloecismus</i>), an error in the arrangement of words, as “Each of the students have a book”;<br><strong>impropriety</strong> (<i>acyrologia</i>, Greek, “improper speech”), the use of a word in a sense it does not have, as “infer” for “imply.”</p>
<p>Donatus counts the impropriety among the other faults of speech (<i>vitia</i>).</p>
<p>Each kind of error has a corresponding license. A change in a single word, allowed in verse, is a metaplasm; a departure from the rules of construction, made for a reason, is a figure; and a word used in a sense not its own, for a reason, is a trope. We will study the barbarism, the solecism, and the metaplasm in this section, and the figures and tropes in Section VII.</p>`,
  src: `Donatus, <i>Ars maior</i> III.1–4, in paraphrase.` }

  ]
};
