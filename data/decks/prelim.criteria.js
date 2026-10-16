/* P.4 The Criteria of Correctness [prelim.criteria]
   Plan (ITEM-LIST.md): 8 panels, 2 question points, each with exactly 3 variants.
   This deck introduces the four criteria; VI.1 applies them and refers back here. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['prelim.criteria'] = {
  id: 'prelim.criteria',
  title: 'The Criteria of Correctness',
  sub: 'Reason, antiquity, authority, and usage',
  panels: [

{ id: 'four',
  title: 'The four criteria',
  body: `<p>When a form or a construction is doubtful, the grammarian needs a standard by which to judge it. Quintilian names four: “Language is based on reason, antiquity, authority and usage” (<i>Institutio oratoria</i> I.6.1, trans. Butler). The Latin names are <i>ratio</i> (reason), <i>vetustas</i> (antiquity), <i>auctoritas</i> (authority), and <i>consuetudo</i> (usage, also translated “custom”).</p>
<p>Each criterion answers the question “Is this correct?” in a different way, and the grammarian must know how to weigh them against one another.</p>`,
  examples: [
    `Is the past tense of “dive” “dived” or “dove”? Both forms are used by educated speakers of American English, so the grammarian must decide which criterion settles the question.`,
    `Should we write “thou art” or “you are”? Antiquity and authority support the first, but present usage supports the second.`,
    `Quintilian asks whether Latin should say <i>hac domu</i> or <i>hac domo</i> (“by this house”), and he settles the question by comparison with other words (I.6.5).`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.6.1, I.6.5 (trans. H. E. Butler, Loeb).` },

{ id: 'reason',
  title: 'Reason: analogy and etymology',
  body: `<p>Quintilian says: “Reason finds its chief support in analogy and sometimes in etymology” (I.6.1, trans. Butler). <strong>Analogy</strong> is the comparison of a doubtful form with a certain one of the same kind. Quintilian defines it as “the testing of all subjects of doubt by the application of some standard of comparison about which there is no question, the proof that is to say of the uncertain by reference to the certain” (I.6.4).</p>
<p><strong>Etymology</strong>, the study of the origin of words, supports reason less often, because the origin of a word does not always settle how it is used now.</p>`,
  examples: [
    `English plurals: because the plural of “cat” is “cats” and of “dog” is “dogs,” the plural of “zebra” is “zebras.”`,
    `English past tenses: because the past tense of “walk” is “walked,” the past tense of “talk” is “talked.”`,
    `Latin: Quintilian decides between <i>domuum</i> and <i>domorum</i> (“of houses”) by comparison with words of the same declension, such as <i>anus</i> (“old woman”) and <i>manus</i> (“hand”) (I.6.5).`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.6.1, I.6.4–5 (trans. Butler).`,
  qp: { id: 'q-reason', variants: [
    { prompt: `A child says “goed” because the past tense of “walk” is “walked.” Which criterion is the child following?`,
      options: [`Antiquity`, `Authority`, `Reason, by analogy`, `Etymology alone`],
      answer: 2,
      explain: `The child compares a doubtful form with a certain one of the same kind, which is analogy, the chief support of reason. The form is nevertheless incorrect, because the agreed practice of educated speakers is “went.”` },
    { prompt: `What is analogy, as Quintilian defines it?`,
      options: [`The proof of the uncertain by reference to the certain`, `The use of words found in the oldest writers`, `The practice of the majority of speakers`, `The study of the origin of words`],
      answer: 0,
      explain: `Quintilian defines analogy as “the testing of all subjects of doubt by the application of some standard of comparison about which there is no question, the proof that is to say of the uncertain by reference to the certain” (I.6.4, trans. Butler). The origin of words is etymology.` },
    { prompt: `Quintilian settles whether to say <i>domuum</i> or <i>domorum</i> by comparing <i>anus</i> and <i>manus</i>. Which criterion is he using?`,
      options: [`Authority`, `Antiquity`, `Usage`, `Reason, by analogy`],
      answer: 3,
      explain: `He compares the doubtful word with words of the same declension whose forms are certain. That is analogy, which Quintilian names as the chief support of reason (I.6.1).` }
  ]}},

{ id: 'antiquity',
  title: 'Antiquity',
  body: `<p>Antiquity is the standard of older speech. Quintilian says: “Archaic words not only enjoy the patronage of distinguished authors, but also give style a certain majesty and charm” (I.6.39, trans. Butler). But he adds that “such words must be used sparingly and must not thrust themselves upon our notice” (I.6.40).</p>
<p>Antiquity therefore makes a word acceptable in some kinds of speech, but it does not by itself make an old word the ordinary form.</p>`,
  examples: [
    `English “thou” and “thee,” the older singular pronouns of the second person, as in “when thou shalt say” (Ecclesiastes 12:1, King James Version).`,
    `English “nigh” for “near,” as in “nor the years draw nigh” (Ecclesiastes 12:1).`,
    `Latin <i>topper</i> and <i>antegerio</i>, which Quintilian gives as examples of words that must not be “drawn from remote and forgotten ages” (I.6.40).`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.6.39–41 (trans. Butler); Ecclesiastes 12:1 (King James Version).` },

{ id: 'authority',
  title: 'Authority',
  body: `<p>Authority is the standard of the best authors. Quintilian says: “Authority as a rule we derive from orators and historians” (I.6.2, trans. Butler). He gives poets less weight, because they are allowed some license for the sake of the meter.</p>
<p>But authority has limits. Quintilian warns that “it is important to notice not merely what they said, but what words they succeeded in sanctioning” (I.6.42). A form used once by a good author does not become correct unless other speakers and writers have accepted it.</p>`,
  examples: [
    `Quintilian notes that no one would now use the words <i>tuburchinabundus</i> (“voracious”) or <i>lurchinabundus</i> (“guzzling”), although Cato used them (I.6.42).`,
    `He notes that no one would make <i>lodices</i> (“blankets”) masculine, although Pollio did (I.6.42).`,
    `In English, the King James Version gives authority to “thou” in prayer and in the reading of Scripture, but not in ordinary speech.`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.6.2, I.6.42 (trans. Butler).` },

{ id: 'usage',
  title: 'Usage',
  body: `<p>Usage is the standard of present speech. Quintilian calls it the most reliable of the four: “Usage however is the surest pilot in speaking” (I.6.3, trans. Butler). But usage does not mean whatever most people say. Quintilian defines it carefully: “I will therefore define usage in speech as the agreed practice of educated men, just as where our way of life is concerned I should define it as the agreed practice of all good men” (I.6.45).</p>
<p>So a form is not correct merely because it is common. It is correct when it is the agreed practice of educated speakers and writers.</p>`,
  examples: [
    `English “went,” not “goed,” is the past tense of “go,” because educated speakers agree in using it.`,
    `English “you” is now used for one person as well as for several, and “thou” has gone out of ordinary use.`,
    `Quintilian notes that whole crowds in the theater “will often commit barbarisms in the cries which they utter as one man” (I.6.45), and these do not become usage by being common.`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.6.3, I.6.43–45 (trans. Butler).` },

{ id: 'weighing',
  title: 'Weighing the criteria',
  body: `<p>The four criteria can disagree, and then the grammarian must judge between them. Quintilian says that “in all these cases we have need of a critical judgment” (I.6.3, trans. Butler). When analogy and usage disagree, usage generally prevails: Quintilian quotes with approval the remark “that it is one thing to speak Latin and another to speak grammar” (I.6.27), that is, a form may follow the rules and still not be the form that speakers use.</p>
<p>Antiquity and authority also yield to usage in ordinary speech, though they keep their place in some kinds of writing.</p>`,
  examples: [
    `Analogy gives “goed,” but usage gives “went,” and usage prevails.`,
    `Analogy cannot decide whether the genitive of Latin <i>senatus</i> (“senate”) is <i>senati</i> or <i>senatus</i>; Quintilian says that this is “doubtful” (I.6.27).`,
    `Antiquity and authority support “thou art,” but usage supports “you are” in ordinary speech.`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.6.3, I.6.27 (trans. Butler).`,
  qp: { id: 'q-weighing', variants: [
    { prompt: `“Went” is correct and “goed” is not, although “goed” follows the pattern of “walked.” Which criterion decides?`,
      options: [`Analogy`, `Usage`, `Antiquity`, `Etymology`],
      answer: 1,
      explain: `Analogy would give “goed,” but the agreed practice of educated speakers is “went,” and usage prevails. This is what the remark “it is one thing to speak Latin and another to speak grammar” means (Quintilian I.6.27, trans. Butler).` },
    { prompt: `How does Quintilian define usage in speech?`,
      options: [`The practice of the majority of speakers`, `The forms found in the oldest writers`, `The agreed practice of educated men`, `The forms that follow the rules of analogy`],
      answer: 2,
      explain: `Quintilian defines usage as “the agreed practice of educated men” (I.6.45, trans. Butler). He rejects the practice of the majority as a standard, because crowds often commit barbarisms.` },
    { prompt: `Why is “thou art” not the ordinary form today, although it has the authority of the King James Version?`,
      options: [`Because usage has changed, and in ordinary speech antiquity and authority yield to usage`, `Because “thou art” was never correct English`, `Because analogy forbids the form “art”`, `Because the King James Version has no authority in grammar`],
      answer: 0,
      explain: `“Thou art” was correct and is still correct in the reading of Scripture and in prayer, where antiquity and authority keep their place. In ordinary speech, the agreed practice of educated speakers is now “you are,” and usage prevails.` }
  ]}},

{ id: 'analogy-anomaly',
  title: 'Analogy and anomaly',
  body: `<p>The ancient grammarians disputed whether language follows regular patterns (<strong>analogy</strong>) or whether usage admits many irregular forms that no pattern explains (<strong>anomaly</strong>). Varro sets out the arguments on both sides in <i>De lingua Latina</i> VIII–X and concludes that both must be admitted: there are regular patterns, and there are irregular forms that usage has fixed.</p>
<p>The grammarian therefore learns the regular patterns as precepts, and learns the irregular forms one by one as exceptions to them.</p>`,
  examples: [
    `Analogy in English: “walk, walked” and “talk, talked.” Anomaly: “go, went.”`,
    `Analogy in English: “cat, cats.” Anomaly: “child, children” and “mouse, mice.”`,
    `Analogy in Latin: <i>altus, altior, altissimus</i> (“high, higher, highest”). Anomaly: <i>bonus, melior, optimus</i> (“good, better, best”).`
  ],
  src: `Varro, <i>De lingua Latina</i> VIII–X, esp. IX.3 (trans. R. G. Kent, Loeb), in paraphrase.` },

{ id: 'faults',
  title: 'The criteria and the faults of speech',
  body: `<p>The criteria of correctness are also the standard by which faults are judged. A fault in a single word is called a <strong>barbarism</strong>, and a fault in the arrangement of words is called a <strong>solecism</strong>. A barbarism or a solecism is a departure from the forms that reason, antiquity, authority, and usage approve.</p>
<p>The faults of speech are treated fully in Section VI, Correctness and Faults, where these criteria are applied to particular questions of usage and authority.</p>`,
  examples: [
    `A barbarism in English: “goed” for “went.”`,
    `A solecism in English: “The boys runs” for “The boys run.”`,
    `A solecism in Latin: <i>puella cantant</i> for <i>puella cantat</i> (“the girl sings”).`
  ],
  src: `Quintilian, <i>Institutio oratoria</i> I.5 (trans. Butler); Donatus, <i>Ars maior</i> III.1–2.` }

  ]
};
