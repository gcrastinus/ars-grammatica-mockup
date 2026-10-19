/* V.2 Agreement (concordantia) [v.agreement]
   Plan (ITEM-LIST.md): 8 panels, 5 question points, 2 of them short analysis questions.
   Live material drawn on: DECKS.agree (agreement, Thomas's reason, the verb and the relative), DECKS.enform (English
   agreement: intervening phrases, compound subjects, there is/are, each and every; the verse not rewritten). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.agreement'] = {
  id: 'v.agreement',
  title: 'Agreement (<i>concordantia</i>)',
  sub: 'How words agree in gender, number, case, and person',
  sources: `Priscian, <i>Institutiones grammaticae</i> XVII; Thomas of Erfurt, <i>Grammatica speculativa</i>; Allen and Greenough, <i>New Latin Grammar</i> §§ 280–326.`,
  panels: [

{ id: 'what-agreement',
  title: 'What is agreement?',
  body: `<p>We say “this cup” but “these cups,” and “the kettle whistles” but “the kettles whistle”: one word changes its form to match another. In Latin <i>vir prūdēns</i> (“a prudent man”), the adjective is masculine, singular, and nominative because <i>vir</i> is. This correspondence of two words in the accidents that they share is called <strong>agreement</strong> (Latin <i>concordantia</i>). It is one of the chief ways in which the words of a congruous construction fit one another, as we saw that their modes of signifying must.</p>
<p>Grammarians traditionally name three agreements, sometimes called the three concords:</p>
<p>An <strong>adjective</strong> (or participle) agrees with its noun in gender, number, and case.<br>A <strong>verb</strong> agrees with its subject in person and number.<br>A <strong>relative pronoun</strong> agrees with its antecedent in gender and number.</p>
<p>We saw each of these in Section III, with the adjective, the verb, and the pronoun. Here we study them as relations of construction.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 280–281, in paraphrase.` },

{ id: 'adjective-noun',
  title: 'The adjective and its noun',
  body: `<p>Latin has many forms of the adjective “small,” such as <i>parvus</i>, <i>parva</i>, <i>parvum</i>, <i>parvī</i>, and <i>parvae</i>, and a speaker must choose the one that matches the noun. A Latin adjective agrees with its noun in gender, number, and case: <i>parva casa</i>, “a small cottage”; <i>parvae casae</i>, “small cottages” (or “of a small cottage”); <i>magnō cum gaudiō</i>, “with great joy.” An error in any of the three accidents makes the construction incongruous. <i>Parvus casa</i> disagrees in gender, because <i>casa</i> is feminine; <i>parvī casa</i> disagrees in number or case; and <i>parvam casam</i> is correct only if the cottage is the object of the verb.</p>
<p>English adjectives do not change their form, so English shows no agreement of adjective and noun: “a small cottage,” “small cottages.” The demonstratives are the one exception: “this book,” “these books”; “that house,” “those houses.” So “these kind of books” is an error of agreement in English, because the plural “these” is joined to the singular “kind”; the correct forms are “this kind of book” and “these kinds of books.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 286.`,
  qp: { id: 'q-adjective-noun', variants: [
    { prompt: `Which form of the adjective agrees with Latin <i>nauta</i> (“sailor”) as the subject of a sentence?`,
      options: [`<i>bona</i>`, `<i>bonus</i>`, `<i>bonum</i>`, `<i>bonī</i>`],
      answer: 1,
      explain: `<i>Nauta</i> ends in <i>-a</i> but names a man, so it is masculine; as subject it is nominative singular. The adjective must agree in gender, number, and case, not in the sound of the ending: <i>nauta bonus</i>.` },
    { prompt: `Which form of the adjective agrees with Latin <i>bellum</i> (“war”) as the subject of a sentence?`,
      options: [`<i>longus</i>`, `<i>longa</i>`, `<i>longum</i>`, `<i>longī</i>`],
      answer: 2,
      explain: `<i>Bellum</i> is neuter, singular, and here nominative, so the adjective takes the neuter nominative singular: <i>bellum longum</i>, “a long war.”` },
    { prompt: `What is wrong with “those sort of questions”?`,
      options: [`“Those” does not agree with “sort”`, `“Questions” should be singular`, `Nothing; careful usage accepts the phrase`, `“Of” cannot follow a noun`],
      answer: 0,
      explain: `The English demonstratives agree in number with their noun. The plural “those” is joined to the singular “sort,” so the agreement fails; careful usage says “that sort of question” or “those sorts of questions.”` }
  ]} },

{ id: 'reason',
  title: 'Why do words agree?',
  body: `<p>In “a vigorous charioteer,” the vigor is the charioteer’s: the adjective names a quality as belonging to the thing that the noun names. It is therefore reasonable that, in a language that marks gender, number, and case, the adjective should carry the same marks as its noun. Latin <i>aurīga</i> (“charioteer”) is a masculine noun of the first declension, whose endings are like those of feminine nouns such as <i>fābula</i> (“story”); yet we say <i>aurīga strēnuus</i>, not <i>aurīga strēnua</i>, and in the plural <i>aurīgae strēnuī</i>, in the accusative <i>aurīgam strēnuum</i>. So the adjective agrees with its noun in gender, number, and case, not in the sound of the ending. In the same way the verb signifies its action as belonging to a subject, so it takes the person and number of that subject: <i>aurīga vincit</i>, “the charioteer wins”; <i>aurīgae vincunt</i>, “the charioteers win.”</p>
<p>The modists give this reason for agreement. Thomas of Erfurt says that the adjective signifies by the mode of adhering to another, so it requires in that other the mode of standing by itself; and the accidents that the two words share, gender, number, and case, must conform, because the adjective signifies its quality as belonging to that thing and no other (<i>Grammatica speculativa</i>, on construction).</p>
<p>So agreement is not a mere custom of Latin. It follows from the way the dependent word signifies: what adheres to another must correspond to it. Languages differ in how much of this correspondence they show by endings. Latin shows it in gender, number, and case; English shows it chiefly in the number of the verb and of the demonstratives; Chinese, as we will see in Section XI, shows almost none by endings. But the relation that the endings show is the same.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on construction (Bursill-Hall), in paraphrase.` },

{ id: 'verb-subject',
  title: 'The verb and its subject',
  body: `<p>We say “the clock ticks” but “the clocks tick,” and “I am” but “they are”: the verb changes with its subject. A finite verb, that is, a verb that has person and number, agrees with its subject in both. Latin shows the agreement in every form: <i>mercātor emit</i>, “the merchant buys”; <i>mercātōrēs emunt</i>, “the merchants buy”; <i>ego emō</i>, “I buy”; <i>vōs emitis</i>, “you (plural) buy.” English shows it chiefly in the third person singular of the present: “the merchant buys,” “the merchants buy,” and in the verb “to be”: “I am,” “he is,” “they are,” “I was,” “they were.”</p>
<p>A predicate noun or adjective after “to be” agrees with the subject as well. In Latin <i>Cicerō cōnsul est</i>, “Cicero is consul,” <i>cōnsul</i> is nominative like <i>Cicerō</i>, and in <i>nox obscūra est</i>, “the night is dark,” <i>obscūra</i> is feminine, singular, and nominative. In English the predicate pronoun takes the subjective case in formal usage, “It is I,” although ordinary speech commonly says “It’s me.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 283–284, 316.`,
  qp: { id: 'q-verb-subject', variants: [
    { prompt: `Which form of the verb agrees with Latin <i>nautae</i> (“the sailors”) as subject?`,
      options: [`<i>spectat</i>`, `<i>spectant</i>`, `<i>spectās</i>`, `<i>spectō</i>`],
      answer: 1,
      explain: `<i>Nautae</i> as subject is nominative plural and third person, so the verb takes the third person plural: <i>nautae spectant</i>, “the sailors watch.”` },
    { prompt: `Which form of the verb agrees with Latin <i>ego</i> (“I”) as subject?`,
      options: [`<i>scrībit</i>`, `<i>scrībunt</i>`, `<i>scrībis</i>`, `<i>scrībō</i>`],
      answer: 3,
      explain: `A verb agrees with its subject in person and number. <i>Ego</i> is first person singular, so the verb is <i>scrībō</i>, “I write.”` },
    { prompt: `Which form completes “He ___ the bell at noon” with the present tense?`,
      options: [`“ring”`, `“rings”`, `“are ringing”`, `“have rung”`],
      answer: 1,
      explain: `English shows the agreement of verb and subject chiefly in the third person singular of the present, with “-s”: “he rings,” but “they ring.”` }
  ]} },

{ id: 'relative',
  title: 'The relative and its antecedent',
  body: `<p>In <i>lēgātus quem laudāvimus</i>, “the envoy whom we praised,” <i>quem</i> is masculine and singular because <i>lēgātus</i> is, but accusative because it is the object of <i>laudāvimus</i>. A relative pronoun, as we saw in Section III, takes the gender and number of its antecedent but takes its case from its own clause. In <i>soror cui ānulum dedī</i>, “the sister to whom I gave the ring,” <i>cui</i> is dative because it is the indirect object of <i>dedī</i>.</p>
<p>So the relative pronoun stands in two constructions at once. By its gender and number it agrees with a word in the main clause; by its case it is part of the construction of its own clause. English shows the same in “who” and “whom”: “the man who called” (subject of “called”), “the man whom we called” (object of “called”). The case is decided in the relative clause, not by the case of the antecedent.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 305–306.`,
  qp: { id: 'q-relative', variants: [
    { prompt: `In Latin <i>puella quam vīdimus</i> (“the girl whom we saw”), from what does the accusative case of <i>quam</i> come?`,
      options: [`From its antecedent <i>puella</i>`, `From its own clause`, `From the main verb of the sentence`, `From its gender`],
      answer: 1,
      explain: `<i>Quam</i> is the object of <i>vīdimus</i>. It takes its gender and number from <i>puella</i>, feminine singular, but its case from its own clause. <i>Puella</i> itself is nominative.` },
    { prompt: `In Latin <i>flūmina quae fluunt</i> (“the rivers that flow”), what are the gender and number of <i>quae</i>, and from where do they come?`,
      options: [`Neuter plural, from <i>flūmina</i>`, `Feminine singular, from its own clause`, `Neuter plural, from the verb <i>fluunt</i>`, `Masculine plural, from the sense`],
      answer: 0,
      explain: `A relative pronoun takes the gender and number of its antecedent. <i>Flūmina</i> is neuter plural, so <i>quae</i> is neuter plural; it is nominative because it is the subject of <i>fluunt</i> in its own clause.` },
    { prompt: `In formal usage, which word completes “the guide ___ we hired”?`,
      options: [`“who”`, `“whose”`, `“whom”`, `“which”`],
      answer: 2,
      explain: `The case of the relative is decided in its own clause. There it is the object of “hired,” so formal usage has the objective “whom.” Its antecedent, “the guide,” names a person, so “which” does not fit.` }
  ]} },

{ id: 'english-hard-cases',
  title: 'Agreement in English: some difficult cases',
  body: `<p>English agreement is simple in form but has some difficult cases:</p>
<p>A phrase that stands between the subject and the verb does not change the subject: “The flock of starlings <em>is</em> loud,” because the subject is “flock,” not “starlings.”<br>Two subjects joined by “and” are plural: “The king and the queen <em>are</em> here.”<br>With “or,” “nor,” “either … or,” and “neither … nor,” the verb agrees with the nearer subject: “Neither the king nor the queens <em>are</em> here”; “Neither the queens nor the king <em>is</em> here.”<br>In sentences beginning “there is” and “there are,” the verb agrees with the real subject, which follows it: “There <em>are</em> two gates.”<br>“Each,” “every,” “either,” and “neither” used as subjects are singular: “Each of the players <em>is</em> ready.”</p>
<p>In each case the rule follows from finding the word that is really the subject, and then making the verb agree with it, as Latin regularly does.</p>`,
  src: `Standard English grammars, in paraphrase.`,
  qp: { id: 'q-english-hard-cases', variants: [
    { prompt: `Which form completes “The basket of apples ___ heavy”?`,
      options: [`“is”`, `“are”`, `“were”`, `“be”`],
      answer: 0,
      explain: `The subject is “basket,” which is singular; “of apples” tells which basket and does not change the subject. So the verb is “is.”` },
    { prompt: `Which form completes “Neither the captain nor the sailors ___ ashore”?`,
      options: [`“was”`, `“were”`, `“is”`, `“has been”`],
      answer: 1,
      explain: `With “neither … nor” the verb agrees with the nearer subject. The nearer subject is “the sailors,” which is plural, so the verb is “were.”` },
    { prompt: `Which form completes “There ___ two letters on the desk”?`,
      options: [`“is”`, `“was”`, `“has been”`, `“are”`],
      answer: 3,
      explain: `After “there,” the verb agrees with the real subject, which follows it: “two letters,” which is plural. So the verb is “are.”` }
  ]} },

{ id: 'sense',
  title: 'Agreement by the sense',
  body: `<p>Sometimes a word agrees not with the form of another word but with its meaning. A collective noun, which we saw is singular in form but names many, may take a plural verb when the members are thought of separately. Latin authors sometimes write a plural verb with a collective noun such as <i>multitūdō</i> (“multitude”) or <i>pars</i> (“part”), and British English often says “The committee are agreed,” where American English says “The committee is agreed.” The grammarians call this agreement according to the sense (Greek <i>synesis</i>, “understanding”; Latin <i>cōnstrūctiō ad sēnsum</i>).</p>
<p>Such constructions are not solecisms when they are established in good usage, because the sense of the word decides the agreement. So agreement is a rule that serves the meaning: the verb agrees with what the subject signifies, and usually the form of the subject shows this, but where the form and the meaning part, good authors may follow the meaning. We will see such departures again among the figures of construction.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 280, 317, in paraphrase.` },

{ id: 'authors',
  title: 'Agreement and the authors',
  body: `<p>The rules of agreement describe what correct speech does, but the grammarian must also read authors whose usage differs from a modern handbook. The King James Version of the Bible says, “For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord” (Romans 6:23). “Wages” has a plural form, and a modern handbook would often expect “are.” But in older English “wages” was often used with a singular verb, and the verse is not an error to be corrected.</p>
<p>So when an author is quoted, the quotation is the text, and the grammarian’s task is to explain what the text does, not to rewrite it. We saw in the Preliminary section that the criteria of antiquity and authority weigh the usage of the best authors, and here they decide against a rule applied without regard to the history of the language.</p>`,
  src: `Romans 6:23 (King James Version); Quintilian, <i>Institutio oratoria</i> I.6, in paraphrase.`,
  qp: { id: 'q-authors', variants: [
    { prompt: `In Latin <i>Rōmānī fortēs urbem dēfendunt</i> (“the brave Romans defend the city”), in which accidents does <i>fortēs</i> agree with <i>Rōmānī</i>?`,
      options: [`Gender, number, and case`, `Person and number`, `Gender and number, but not case`, `Case only`],
      answer: 0,
      explain: `An adjective agrees with its noun in gender, number, and case: <i>fortēs</i> is masculine, plural, and nominative, like <i>Rōmānī</i>. Person and number are the accidents in which a verb agrees with its subject.` },
    { prompt: `In Latin <i>mīlitēs fessī dormiunt</i> (“the tired soldiers sleep”), in which accidents does <i>dormiunt</i> agree with <i>mīlitēs</i>?`,
      options: [`Gender and number`, `Case and number`, `Person and number`, `Gender, number, and case`],
      answer: 2,
      explain: `A finite verb agrees with its subject in person and number: <i>dormiunt</i> is third person plural, like <i>mīlitēs</i>. The verb has no gender or case; <i>fessī</i> is the word that agrees in those.` },
    { prompt: `An author quoted in a lesson uses a form of agreement that a modern handbook would not expect. What is the grammarian’s task?`,
      options: [`To correct it to the modern form`, `To explain what the text does`, `To leave the passage out`, `To mark it as a solecism`],
      answer: 1,
      explain: `When an author is quoted, the quotation is the text. The criteria of antiquity and authority weigh the usage of good authors, so the grammarian explains what the text does and does not rewrite it by a rule.` }
  ]} }

  ]
};
