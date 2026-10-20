/* III.7 The Pronoun [iii.pronoun]
   Plan (ITEM-LIST.md): 10 panels, 3 question points. Exercise: Pronouns (not yet written).
   Live material drawn on: DECKS.enacc (the English personal pronouns: case, person, number, gender); DECKS.pos (the pronoun). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.pronoun'] = {
  id: 'iii.pronoun',
  title: 'The Pronoun',
  sub: 'The pronoun and its accidents: quality, gender, number, figure, person, and case',
  sources: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> XII–XIII; Allen and Greenough, <i>New Latin Grammar</i>.`,
  recitation: [
    `A pronoun is put in place of a noun and signifies almost as much as the noun, because it refers to a thing without saying what kind of thing it is.`,
    `Donatus gives the pronoun six accidents: <strong>quality</strong> (<i>qualitas</i>), <strong>gender</strong> (<i>genus</i>), <strong>number</strong> (<i>numerus</i>), <strong>figure</strong> (<i>figura</i>), <strong>person</strong> (<i>persona</i>), and <strong>case</strong> (<i>casus</i>).`,
    `Gender, number, figure, and case have the same meaning here as in the noun; the two that are new are quality, which for the pronoun means something different, and person.`,
    `For the pronoun, <strong>quality</strong> is the distinction between definite and indefinite pronouns.`,
    `<strong>Definite</strong> pronouns refer to a definite person, and <strong>indefinite</strong> pronouns do not.`,
    `Donatus states that pronouns are either definite or indefinite.`,
    `So the quality of the pronoun concerns how definitely it refers, whereas the quality of the noun concerns whether it names one thing or a kind.`,
    `<strong>Person</strong> (<i>persōna</i>) is the relation of the thing referred to the act of speaking.`,
    `The <strong>first person</strong> is the speaker, the <strong>second person</strong> is the one spoken to, and the <strong>third person</strong> is anyone or anything spoken about.`,
    `The verb also consignifies person, and because the Latin verb shows the person by its ending, Latin often omits the pronoun subject.`,
    `When the Latin pronoun subject is expressed, it usually gives emphasis, whereas English almost always expresses the pronoun, because its verb endings no longer show the person clearly.`,
    `The English personal pronouns keep three cases, so they keep the distinction of subject and object that English nouns have lost.`,
    `A pronoun in the wrong case is an error of case (“Her and me arrived late” for “She and I arrived late”).`,
    `The Latin pronouns of the first and second person have no distinction of gender, because the speaker and the one spoken to are present and need no description.`,
    `Latin has no single personal pronoun of the third person; it uses the demonstratives <i>is</i>, <i>ea</i>, <i>id</i> or <i>ille</i>, <i>illa</i>, <i>illud</i>, which have all three genders.`,
    `A pronoun of the third person refers to something named elsewhere, usually earlier, in the sentence or the conversation, and the noun to which it refers is called its <strong>antecedent</strong> (Latin <i>antecēdēns</i>, “going before”).`,
    `The pronoun takes the gender and number of its antecedent, but its case depends on its own use in its clause.`,
    `Pronouns that point out a thing as if by gesture are called <strong>demonstrative</strong> pronouns (from <i>dēmōnstrāre</i>, “to point out”).`,
    `Latin has three demonstratives that correspond to the three persons: <i>hic</i> points to what is near the speaker, <i>iste</i> to what is near the one spoken to, and <i>ille</i> to what is farther from both.`,
    `English has two demonstratives, “this” and “that,” with their plurals.`,
    `A demonstrative can stand alone as a pronoun or be used with a noun as an adjective.`,
    `A pronoun that refers to an antecedent and at the same time introduces a clause that tells something about it is called a <strong>relative</strong> pronoun.`,
    `The relative pronoun takes the gender and number of its antecedent, but its case depends on its use in its own clause.`,
    `A pronoun that asks a question about the person or thing, marking the place in the sentence that the answer fills, is an <strong>interrogative</strong> pronoun.`,
    `An <strong>indefinite</strong> pronoun refers to a person or thing without identifying it, and these pronouns are the clearest examples of Donatus’s indefinite quality.`,
    `Several indefinite pronouns, such as “each” and “nobody,” are also syncategorematic words.`,
    `A pronoun that refers back to the subject of its own clause is a <strong>reflexive</strong> pronoun.`,
    `The <strong>possessive</strong> pronouns are adjectives formed from the personal pronouns.`,
    `Latin distinguishes the reflexive possessive, which refers to the subject, from the possessive of another person, and so removes an ambiguity that English often leaves; an English writer must often rephrase the sentence to remove it.`,
    `Because a pronoun refers to a thing without describing it, its meaning depends entirely on its antecedent, and if the antecedent is unclear, the sentence is ambiguous.`,
    `Latin, which marks gender, can sometimes resolve such cases, but if both nouns have the same gender, Latin is ambiguous in the same way.`,
    `So a pronoun is correctly used only when the hearer can tell what it refers to, and an unclear pronoun is one of the common errors in the arrangement of words.`,
    `The noun and the pronoun signify by the mode of a stable thing, whereas the verb signifies by the mode of becoming and also has person, as the pronoun does.`
  ],
  panels: [

{ id: 'accidents',
  title: 'The accidents of the pronoun',
  body: `<p>In “The baker came early, and he opened the shop,” the word “he” stands in place of “the baker” and refers to the same man without saying again what he is. A pronoun, as we have seen, is put in place of a noun and signifies almost as much as the noun, because it refers to a thing without saying what kind of thing it is. Like the noun, it has accidents, and Donatus gives it six (<i>Ars minor</i>):</p>
<p><strong>quality</strong> (<i>qualitas</i>);<br><strong>gender</strong> (<i>genus</i>);<br><strong>number</strong> (<i>numerus</i>);<br><strong>figure</strong> (<i>figura</i>);<br><strong>person</strong> (<i>persona</i>);<br><strong>case</strong> (<i>casus</i>).</p>
<p>Four of these are accidents of the noun as well, and they have the same meaning here: gender, number, figure, and case. So Latin <i>ille</i>, <i>illa</i>, <i>illud</i> (“that”) has three genders, singular and plural numbers, and six cases, as an adjective does, and <i>quīcumque</i> (“whoever”) is compound in figure. The two accidents that are new are quality, which for the pronoun means something different from the quality of the noun, and person.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the pronoun.` },

{ id: 'quality',
  title: 'Definite and indefinite pronouns',
  body: `<p>“I,” “you,” and “she” refer to definite persons in the situation of speaking, whereas “anybody” and “whatever” do not; they leave the person to be found or leave it unknown. For the pronoun, therefore, <strong>quality</strong> is the distinction between definite and indefinite pronouns. <strong>Definite</strong> pronouns are those that refer to a definite person: <i>ego</i> (“I”), <i>tū</i> (“you”), <i>ille</i> (“he,” “that one”). <strong>Indefinite</strong> pronouns do not refer to a definite person: <i>quis</i>, <i>quae</i>, <i>quod</i> (“who?” “anyone”).</p>
<p>Donatus states the distinction: “pronouns are either definite or indefinite” (<i>aut enim finita sunt pronomina aut infinita</i>; <i>Ars minor</i>). So the quality of the pronoun concerns how definitely it refers, whereas the quality of the noun concerns whether it names one thing or a kind. The other new accident, person, concerns the act of speaking itself.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the quality of the pronoun (the Latin).`,
  qp: { id: 'q-quality', variants: [
    { prompt: `Is Latin <i>nōs</i> (“we”) a definite or an indefinite pronoun?`,
      options: [`Definite, because it includes the speaker`, `Indefinite, because it refers to many people`, `Indefinite, because it has no gender`, `Definite, because it is a noun`],
      answer: 0,
      explain: `<i>Nōs</i> refers to definite persons in the situation of speaking, the speaker and those with him, so it is definite. Referring to several people does not make a pronoun indefinite, and the first-person pronouns have no gender because the speaker is present.` },
    { prompt: `Is Latin <i>quisquam</i> (“anyone”) a definite or an indefinite pronoun?`,
      options: [`Definite`, `Indefinite`, `Neither, because it is a noun`, `Both`],
      answer: 1,
      explain: `<i>Quisquam</i> refers to a person without saying which person, so it is indefinite, like <i>quis</i> (“anyone”). A definite pronoun such as <i>ego</i> or <i>tū</i> refers to a definite person.` },
    { prompt: `Why is “somebody” an indefinite pronoun?`,
      options: [`Because it has no plural`, `Because it does not say which person is meant`, `Because it names a kind of person, as a common noun does`, `Because it is a compound`],
      answer: 1,
      explain: `“Somebody” refers to a person but leaves the person unknown, which is Donatus’s indefinite quality. It does not name a kind, as a common noun does, and being a compound is a matter of figure, not of quality.` }
  ]} },

{ id: 'person',
  title: 'Person',
  body: `<p>In every conversation there is someone who speaks, someone who is spoken to, and someone or something that is spoken about, and the pronouns “I,” “you,” and “he” refer to them. <strong>Person</strong> (<i>persōna</i>) is the relation of the thing referred to the act of speaking. The <strong>first person</strong> is the speaker: “I,” “we,” Latin <i>ego</i>, <i>nōs</i>. The <strong>second person</strong> is the one spoken to: “you,” Latin <i>tū</i>, <i>vōs</i>. The <strong>third person</strong> is anyone or anything spoken about: “he,” “she,” “it,” “they,” Latin <i>is</i>, <i>ea</i>, <i>id</i>, <i>ille</i>.</p>
<p>We saw in Section I that the verb also consignifies person, as “I sail,” “you sail,” and “he sails” do, and Latin <i>nāvigō</i>, <i>nāvigās</i>, and <i>nāvigat</i>. Because the Latin verb shows the person by its ending, Latin often omits the pronoun subject: <i>nāvigō</i> alone means “I sail.” When the pronoun is expressed, as in <i>ego nāvigō</i>, it usually gives emphasis: “<em>I</em> sail” (that is, I and not another). English almost always expresses the pronoun, because its verb endings no longer show the person clearly.</p>`,
  src: `Donatus, <i>Ars minor</i>; Allen and Greenough, <i>New Latin Grammar</i> § 295, in paraphrase.` },

{ id: 'personal',
  title: 'The personal pronouns',
  body: `<p>The English personal pronouns keep three cases: “I,” “me,” “my”; “we,” “us,” “our”; “he,” “him,” “his”; “she,” “her,” “her”; “they,” “them,” “their.” So the English pronoun keeps the distinction of subject and object that English nouns have lost (they keep only a possessive form, as in “the girl’s”), and “Her and me arrived late” is an error of case, because the subject requires “She and I.”</p>
<p>The Latin pronouns of the first and second person are declined as follows. They have no distinction of gender, because the speaker and the one spoken to are present and need no description.</p>
<div class="para-wrap"><table class="para"><tr><th></th><th>First sg.</th><th>Second sg.</th><th>First pl.</th><th>Second pl.</th></tr>
<tr><td>Nom.</td><td class="f"><i>ego</i></td><td class="f"><i>tū</i></td><td class="f"><i>nōs</i></td><td class="f"><i>vōs</i></td></tr>
<tr><td>Gen.</td><td class="f"><i>meī</i></td><td class="f"><i>tuī</i></td><td class="f"><i>nostrum, nostrī</i></td><td class="f"><i>vestrum, vestrī</i></td></tr>
<tr><td>Dat.</td><td class="f"><i>mihi</i></td><td class="f"><i>tibi</i></td><td class="f"><i>nōbīs</i></td><td class="f"><i>vōbīs</i></td></tr>
<tr><td>Acc.</td><td class="f"><i>mē</i></td><td class="f"><i>tē</i></td><td class="f"><i>nōs</i></td><td class="f"><i>vōs</i></td></tr>
<tr><td>Abl.</td><td class="f"><i>mē</i></td><td class="f"><i>tē</i></td><td class="f"><i>nōbīs</i></td><td class="f"><i>vōbīs</i></td></tr></table></div>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 143.` },

{ id: 'third-person',
  title: 'The pronoun of the third person and its antecedent',
  body: `<p>For the pronoun of the third person English has “he,” “she,” and “it” in the singular and “they” in the plural. Latin has no single personal pronoun of the third person. It uses the demonstrative <i>is</i>, <i>ea</i>, <i>id</i> (“he,” “she,” “it”; “that”), or <i>ille</i>, <i>illa</i>, <i>illud</i>, which have all three genders.</p>
<p>A pronoun of the third person refers to something named elsewhere, usually earlier, in the sentence or the conversation. The noun to which it refers is called its <strong>antecedent</strong> (Latin <i>antecēdēns</i>, “going before”). In “Helen found the key, and she kept it,” the antecedent of “she” is “Helen” and the antecedent of “it” is “the key.” The pronoun takes the gender and number of its antecedent, but its case depends on its own use in its clause: in <i>Gāium vīdī et eī epistulam dedī</i> (“I saw Gaius and gave him a letter”), <i>eī</i> is masculine singular like <i>Gāium</i>, but dative, because it is the indirect object of <i>dedī</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 146, 296–297, in paraphrase.`,
  qp: { id: 'q-third-person', variants: [
    { prompt: `In “The gardener lost the spade, and he searched for it,” what is the antecedent of “it”?`,
      options: [`“The gardener”`, `“the spade”`, `“he”`, `There is none`],
      answer: 1,
      explain: `The antecedent is the noun to which the pronoun refers. “It” refers to the spade, so “the spade” is its antecedent; the antecedent of “he” is “the gardener.”` },
    { prompt: `In <i>Iūlia vēnit et eam salūtāvī</i> (“Julia came, and I greeted her”), which accidents does <i>eam</i> take from its antecedent <i>Iūlia</i>?`,
      options: [`Case only`, `Gender, number, and case`, `Number only`, `Gender and number, but not case`],
      answer: 3,
      explain: `<i>Eam</i> is feminine and singular, like <i>Iūlia</i>, but it is accusative, because it is the object of <i>salūtāvī</i>, whereas <i>Iūlia</i> is the nominative subject of <i>vēnit</i>. A pronoun takes its case from its use in its own clause.` },
    { prompt: `In “The queen arrived, and the crowd cheered her,” why is “her” in the objective case, though “the queen” is a subject?`,
      options: [`Because it takes its case from its antecedent`, `Because “her” is a possessive pronoun`, `Because it is the object in its own clause`, `Because English pronouns have only one case`],
      answer: 2,
      explain: `A pronoun takes the gender and number of its antecedent, but its case comes from its own clause. In “the crowd cheered her,” “her” is the object of “cheered,” so it is objective.` }
  ]} },

{ id: 'demonstratives',
  title: 'Demonstrative pronouns',
  body: `<p>“This coat” and “that coat” point out a coat as if by gesture, the first near the speaker and the second farther away. Such pronouns are called <strong>demonstrative</strong> pronouns (from <i>dēmōnstrāre</i>, “to point out”). Latin has three that correspond to the three persons. <i>Hic</i>, <i>haec</i>, <i>hoc</i> (“this”) points to what is near the speaker; <i>iste</i>, <i>ista</i>, <i>istud</i> (“that of yours”) to what is near the one spoken to; and <i>ille</i>, <i>illa</i>, <i>illud</i> (“that”) to what is farther from both. So <i>hic pīleus</i> is “this cap (here by me),” <i>iste pīleus</i> is “that cap (by you),” and <i>ille pīleus</i> is “that cap (over there).”</p>
<p>English has two demonstratives, “this” and “that,” with the plurals “these” and “those.” A demonstrative can stand alone as a pronoun, as in “This is mine,” or be used with a noun as an adjective, as in “this coat.” We saw earlier in this section that the Latin grammarians used <i>hic</i>, <i>haec</i>, <i>hoc</i> to show the gender of nouns, and the same words serve as the commonest Latin demonstratives.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 146, 296–298, in paraphrase.` },

{ id: 'relative',
  title: 'The relative pronoun',
  body: `<p>In “The boy who found the coin was honest,” “who” refers to “the boy” and introduces the clause “who found the coin,” which tells which boy is meant; in Latin, <i>puer quī nummum invēnit probus erat</i>. A pronoun that refers to an antecedent and at the same time introduces a clause that tells something about it is called a <strong>relative</strong> pronoun. Latin uses <i>quī</i>, <i>quae</i>, <i>quod</i> (“who,” “which,” “that”); English uses “who,” “whom,” “whose,” “which,” and “that.”</p>
<p>The relative pronoun follows the rule we have seen for the pronoun of the third person: it takes the gender and number of its antecedent, but its case depends on its use in its own clause. In <i>puer quem vīdī</i> (“the boy whom I saw”), <i>quem</i> is masculine singular like <i>puer</i>, but accusative, because it is the object of <i>vīdī</i>; English shows the same in “whom.” The relative clause itself will be studied in Section V.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 147, 303–305, in paraphrase.` },

{ id: 'interrogative-indefinite',
  title: 'Interrogative and indefinite pronouns',
  body: `<p>“Who came?” is answered by “Lucy came,” and the word “who” marks the place in the sentence that the answer fills. We saw in Section I that a question asks for a statement in reply. A pronoun that asks a question about the person or thing in this way is an <strong>interrogative</strong> pronoun: Latin <i>quis?</i> (“who?”) and <i>quid?</i> (“what?”), English “who?”, “what?”, and “which?”</p>
<p>“Someone knocked” refers to a person without identifying the person. An <strong>indefinite</strong> pronoun refers to a person or thing without identifying it: Latin <i>aliquis</i> (“someone”), <i>quīdam</i> (“a certain one”), <i>quisque</i> (“each one”), and English “someone,” “anyone,” “each,” and “nobody.” These pronouns are the clearest examples of Donatus’s indefinite quality, and several of them, such as “each” and “nobody,” are also among the syncategorematic words we studied in Section I.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 148–151, in paraphrase.` },

{ id: 'reflexive-possessive',
  title: 'Reflexive and possessive pronouns',
  body: `<p>In “Marcus praises himself,” <i>Marcus sē laudat</i>, the one praised is the one who praises. A pronoun that refers back in this way to the subject of its own clause is a <strong>reflexive</strong> pronoun. Latin has <i>sē</i> (“himself,” “herself,” “itself,” “themselves”); English has “myself,” “yourself,” “himself,” and the rest. The <strong>possessive</strong> pronouns are adjectives formed from the personal pronouns: <i>meus</i> (“my”), <i>tuus</i> (“your”), <i>suus</i> (“his own,” “her own,” “their own”).</p>
<p>Latin distinguishes here what English often leaves ambiguous. In “Marcus told Titus that he had lost his book,” we cannot tell whose book is meant. Latin distinguishes <i>suum librum</i> (“his own book,” the subject’s) from <i>eius librum</i> (“his book,” someone else’s). So the Latin reflexive removes an ambiguity of the kind we saw in Section I, and an English writer must often rephrase the sentence to remove it.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 144–145, 299–302, in paraphrase.`,
  qp: { id: 'q-reflexive-possessive', variants: [
    { prompt: `In <i>Lūcia amīcam suam vocat</i> (“Lucy calls her friend”), whose friend is meant?`,
      options: [`Lucy’s own friend`, `Someone else’s friend`, `It cannot be told`, `The hearer’s friend`],
      answer: 0,
      explain: `<i>Suus</i> refers back to the subject of its clause, so <i>amīcam suam</i> is Lucy’s own friend. To speak of another woman’s friend, Latin would say <i>amīcam eius</i>.` },
    { prompt: `In <i>Mārcus equum eius vendidit</i> (“Marcus sold his horse”), whose horse is meant?`,
      options: [`Marcus’s own horse`, `Either, as in English`, `Another man’s horse`, `No one’s`],
      answer: 2,
      explain: `<i>Eius</i> (“his”) refers to someone other than the subject. If the horse were Marcus’s own, Latin would say <i>equum suum</i>. So the Latin is clear where the English “his” is not.` },
    { prompt: `In “Paul told James that he had lost his sword,” we cannot tell whose sword is meant. Which Latin possessive, agreeing with <i>gladium</i> (“sword”), would show that the sword is Paul’s own?`,
      options: [`<i>eius</i>`, `<i>suum</i>`, `<i>tuum</i>`, `<i>meum</i>`],
      answer: 1,
      explain: `<i>Suus</i> refers back to the subject, here Paul, the one who speaks, so <i>suum</i> shows that the sword is his own. <i>Eius</i> would point to someone else. English must rephrase to say the same, for example “Paul told James, ‘I have lost my sword.’”` }
  ]} },

{ id: 'clear-reference',
  title: 'Clear reference',
  body: `<p>Because a pronoun refers to a thing without describing it, its meaning depends entirely on its antecedent. If the antecedent is unclear, the sentence is ambiguous. In “When the cup fell on the plate, it broke,” we cannot tell whether “it” refers to the cup or to the plate. Latin, which marks gender, can sometimes resolve such cases, but if both nouns have the same gender, Latin is ambiguous in the same way.</p>
<p>So a pronoun is correctly used only when the hearer can tell what it refers to. We will see in Section VI that an unclear pronoun is one of the common errors in the arrangement of words. We have now studied the noun and the pronoun, which signify by the mode of a stable thing. The verb, which signifies by the mode of becoming, also has person, as the pronoun does.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>; standard English grammars, in paraphrase.` }

  ]
};
