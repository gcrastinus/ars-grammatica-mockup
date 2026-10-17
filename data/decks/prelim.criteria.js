/* P.4 The Criteria of Correctness [prelim.criteria]
   Plan (ITEM-LIST.md): 8 panels, 2 question points, each with exactly 3 variants.
   This deck introduces the four criteria; VI.1 applies them and refers back here. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['prelim.criteria'] = {
  id: 'prelim.criteria',
  title: 'The Criteria of Correctness',
  sub: 'Reason, antiquity, authority, and usage',
  sources: `Quintilian, <i>Institutio oratoria</i> I.5–6; Varro, <i>De lingua Latina</i> VIII–X; Donatus, <i>Ars maior</i> III.`,
  panels: [

{ id: 'four',
  title: 'What are the four criteria of correctness?',
  body: `<p>We have seen that the precepts of grammar are drawn from the usage of the authors and tested against them. But when a form or a construction is doubtful, the grammarian needs a standard by which to judge it. A criterion, in the sense used here, is such a standard. Quintilian names four: “Language is based on reason, antiquity, authority and usage” (<i>Institutio oratoria</i> I.6.1). The four criteria are:</p>
<p><strong>reason</strong> (<i>ratio</i>): the comparison of a doubtful form with a certain one (analogy), and sometimes the study of the origin of a word (etymology);<br><strong>antiquity</strong> (<i>vetustas</i>): the standard of older speech;<br><strong>authority</strong> (<i>auctoritas</i>): the standard of the best authors in general and those relevant to this kind of text;<br><strong>usage</strong> (<i>consuetudo</i>, also translated “custom”): the standard of present speech, that is, the agreed practice of educated speakers.</p>
<p>Each criterion answers the question “Is this correct?” in a different way, and so the grammarian must know how to weigh them against one another. This shows that the evaluation of correctness is not a mechanical task but one that requires wide knowledge and sound judgment.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.1, I.6.5.` },

{ id: 'reason',
  title: 'What is reason, and how do analogy and etymology support it?',
  body: `<p>The first criterion is reason (<i>ratio</i>). Quintilian says: “Reason finds its chief support in analogy and sometimes in etymology” (I.6.1). <strong>Analogy</strong> here is the comparison of a doubtful form with a certain one of the same kind as a standard, one about which there is no doubt. Quintilian defines it as “the testing of all subjects of doubt by the application of some standard of comparison about which there is no question, the proof that is to say of the uncertain by reference to the certain” (I.6.4). So, to take some simple examples, because the plural of “cat” is “cats” and of “dog” is “dogs,” the plural of “zebra” is “zebras”; and Quintilian decides between <i>domuum</i> and <i>domorum</i> (“of houses”) by comparison with words of the same declension, such as <i>anus</i> (“old woman”) and <i>manus</i> (“hand”) (I.6.5).</p>
<p><strong>Etymology</strong>, the study of the origin of words or phrases, does not always support reason, because the origin of a word does not always settle how it is used now. The origin of words or phrases here has two meanings: first, the causes that brought about the formation of the word and its use in past ages; and, second, the words or forms that are used to make up the given word or phrase, since what the parts are can partly determine what the whole is.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.1, I.6.4–5.`,
  qp: { id: 'q-reason', variants: [
    { prompt: `A child says “goed” because the past tense of “walk” is “walked.” Which criterion is the child following?`,
      options: [`Antiquity`, `Authority`, `Reason, by analogy`, `Etymology alone`],
      answer: 2,
      explain: `The child compares a doubtful form with a certain one of the same kind, which is analogy, the chief support of reason. The form is nevertheless incorrect, because the agreed practice of educated speakers is “went.”` },
    { prompt: `What is analogy, as Quintilian defines it?`,
      options: [`The proof of the uncertain by reference to the certain`, `The use of words found in the oldest writers`, `The practice of the majority of speakers`, `The study of the origin of words`],
      answer: 0,
      explain: `Quintilian defines analogy as “the testing of all subjects of doubt by the application of some standard of comparison about which there is no question, the proof that is to say of the uncertain by reference to the certain” (I.6.4). The origin of words is etymology.` },
    { prompt: `Quintilian settles whether to say <i>domuum</i> or <i>domorum</i> by comparing <i>anus</i> and <i>manus</i>. Which criterion is he using?`,
      options: [`Authority`, `Antiquity`, `Usage`, `Reason, by analogy`],
      answer: 3,
      explain: `He compares the doubtful word with words of the same declension whose forms are certain. That is analogy, which Quintilian names as the chief support of reason (I.6.1).` }
  ]}},

{ id: 'antiquity',
  title: 'What is the criterion of antiquity?',
  body: `<p>The second criterion, antiquity (<i>vetustas</i>), is the standard of older speech. Quintilian says: “Archaic words not only enjoy the patronage of distinguished authors, but also give style a certain majesty and charm” (I.6.39). But he adds that “such words must be used sparingly and must not thrust themselves upon our notice” (I.6.40).</p>
<p>Antiquity therefore makes a word acceptable in some kinds of speech, as “thou art” is still acceptable in the reading of Scripture and in prayer, as in the “Our Father”; but it does not by itself make an old word the ordinary form. For example, some poets even up to the twentieth century used forms like “thine” and “thou” although that was no longer common speech; in our time it is less common to use these older forms but it is certainly possible if done well.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.39–41; Ecclesiastes 12:1 (King James Version).` },

{ id: 'authority',
  title: 'What is the criterion of authority?',
  body: `<p>The third criterion, authority (<i>auctoritas</i>), is the standard of the best authors. Quintilian says: “Authority as a rule we derive from orators and historians” (I.6.2). He gives poets less weight, because they are allowed some license for the sake of the meter.</p>
<p>But authority has limits. Quintilian warns that “it is important to notice not merely what they said, but what words they succeeded in giving their approval to” (I.6.42). A form used once by a good author does not become correct unless other speakers and writers have accepted it.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.2, I.6.42.` },

{ id: 'usage',
  title: 'What is the criterion of usage?',
  body: `<p>The fourth criterion, usage (<i>consuetudo</i>), is the standard of present speech. Quintilian calls it the most reliable of the four: “Usage however is the surest pilot in speaking” (I.6.3). But usage does not mean whatever most people say. Quintilian defines it carefully: “I will therefore define usage in speech as the agreed practice of educated men, just as where our way of life is concerned I should define it as the agreed practice of all good men” (I.6.45).</p>
<p>So a form or word or phrase is not correct merely because it is commonly used. It is correct when it is the agreed practice of educated speakers and writers. The twenty-first century faces a special difficulty here because most writers and poets and historians and philosophers use either technical writing styles or common speech; the pursuit of a higher and nobler style that is not pretentious but succeeds in clarity, precision, and power is not common among the educated. But there is no reason that it cannot be. An example of a modern grammarian and teacher of oratory who seeks to do this is Ward Farnsworth, in his book series <i>Classical English</i>. That is also part of the purpose of this course.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.3, I.6.43–45.` },

{ id: 'weighing',
  title: 'How are the criteria weighed against one another?',
  body: `<p>We have now seen each criterion in turn. But the four criteria can disagree, and then the grammarian must judge between them. Quintilian says that “in all these cases we have need of a critical judgment” (I.6.3). When analogy and usage disagree, usage generally prevails: Quintilian quotes with approval the remark “that it is one thing to speak Latin and another to speak grammar” (I.6.27), that is, a form may follow the rules and still not be the form that speakers use.</p>
<p>Antiquity and authority also yield to usage in ordinary speech, though they keep their place in some kinds of writing. Still, in prose and poetry of the highest kind, judgment must be made in ways that follow or take account of the best writing but are not subservient to the styles of the past. This requires a student truly to learn what good style and word choice is and what the purposes of grammar and rhetoric are before he can make a sound decision about a specific case.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.6.3, I.6.27.`,
  qp: { id: 'q-weighing', variants: [
    { prompt: `“Went” is correct and “goed” is not, although “goed” follows the pattern of “walked.” Which criterion decides?`,
      options: [`Analogy`, `Usage`, `Antiquity`, `Etymology`],
      answer: 1,
      explain: `Analogy would give “goed,” but the agreed practice of educated speakers is “went,” and usage prevails. This is what the remark “it is one thing to speak Latin and another to speak grammar” means (Quintilian I.6.27).` },
    { prompt: `How does Quintilian define usage in speech?`,
      options: [`The practice of the majority of speakers`, `The forms found in the oldest writers`, `The agreed practice of educated men`, `The forms that follow the rules of analogy`],
      answer: 2,
      explain: `Quintilian defines usage as “the agreed practice of educated men” (I.6.45). He rejects the practice of the majority as a standard, because crowds often commit barbarisms.` },
    { prompt: `Why is “thou art” not the ordinary form today, although it has the authority of the King James Version?`,
      options: [`Because usage has changed, and in ordinary speech antiquity and authority yield to usage`, `Because “thou art” was never correct English`, `Because analogy forbids the form “art”`, `Because the King James Version has no authority in grammar`],
      answer: 0,
      explain: `“Thou art” was correct and is still correct in the reading of Scripture and in prayer, where antiquity and authority keep their place. In ordinary speech, the agreed practice of educated speakers is now “you are,” and usage prevails.` }
  ]}},

{ id: 'analogy-anomaly',
  title: 'Does language follow analogy or anomaly?',
  body: `<p>Reason, as we saw, finds its chief support in analogy. But the ancient grammarians disputed whether language follows regular patterns (<strong>analogy</strong>) or whether usage admits many irregular forms that no pattern explains (<strong>anomaly</strong>). Varro sets out the arguments on both sides in <i>De lingua Latina</i> VIII–X and concludes, in our paraphrase, that both must be admitted (IX.3): there are regular patterns, and there are irregular forms that usage has fixed. So English has regular forms such as “walk, walked” and “cat, cats,” and irregular forms such as “go, went” and “child, children”; Latin has <i>altus, altior, altissimus</i> (“high, higher, highest”) but <i>bonus, melior, optimus</i> (“good, better, best”).</p>
<p>The grammarian therefore learns the regular patterns as precepts and learns the irregular forms one by one as exceptions to them. In some cases other criteria can help explain why words that seem irregular came to be that way. For example, etymology shows why “go” has the past tense “went.” In the Middle Ages the past tense of “go” became “went,” which was originally the past tense of “wend” (“to turn, to go”), a verb still heard in “to wend one’s way.” Hence the common usage became a combination of two verbs, “go” in the present and “went” in the past.</p>`,
  src: `Varro, <i>De lingua Latina</i> VIII–X, esp. IX.3, in paraphrase.` },

{ id: 'faults',
  title: 'How do the criteria judge errors of speech?',
  body: `<p>So far, we have considered how to judge words, phrases, and passages according to the best standards in order to be able to speak and write in the best way. Our concern throughout most of the study of these criteria is not primarily errors in the strict sense but the more correct and the less correct. This shows that a grammarian is not primarily a strict rule master but a well-measured and careful judge. Carefulness can become mere strictness if it is not guided by a sense of the purpose of the art.</p>
<p>But grammarians also use the criteria of correctness as the standard by which errors are judged. An error in a single word is called a <strong>barbarism</strong>, and an error in the arrangement of words is called a <strong>solecism</strong>. “Irregardless” for “regardless” is a barbarism, and “The list of books are on the table” for “The list of books is on the table” is a solecism. A barbarism or a solecism is a departure from the forms that reason, antiquity, authority, and usage approve.</p>
<p>Errors of speech are treated fully in Section VI, Correctness and Errors, where these criteria are applied to particular questions of usage and authority.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> I.5; Donatus, <i>Ars maior</i> III.1–2.` }

  ]
};
