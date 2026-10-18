/* III.7 The Pronoun [iii.pronoun]
   Plan (ITEM-LIST.md): 10 panels, 3 question points (placeholders: qpTodo; to be written). Exercise: Pronouns (not yet written).
   Live material drawn on: DECKS.enacc (the English personal pronouns: case, person, number, gender); DECKS.pos (the pronoun). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.pronoun'] = {
  id: 'iii.pronoun',
  title: 'The Pronoun',
  sub: 'The pronoun and its accidents: quality, gender, number, figure, person, and case',
  sources: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> XII–XIII; Allen and Greenough, <i>New Latin Grammar</i>.`,
  panels: [

{ id: 'accidents',
  title: 'The accidents of the pronoun',
  body: `<p>We have seen that the pronoun is put in place of a noun and signifies almost as much as the noun, because it refers to a thing without saying what kind of thing it is. Donatus gives the pronoun six accidents (<i>Ars minor</i>):<br><strong>quality</strong> (<i>qualitas</i>);<br><strong>gender</strong> (<i>genus</i>);<br><strong>number</strong> (<i>numerus</i>);<br><strong>figure</strong> (<i>figura</i>);<br><strong>person</strong> (<i>persona</i>);<br><strong>case</strong> (<i>casus</i>).</p>
<p>Four of these are accidents of the noun as well, and they have the same meaning here: gender, number, figure, and case. So Latin <i>ille</i>, <i>illa</i>, <i>illud</i> (“that”) has three genders, singular and plural numbers, and six cases, as an adjective does, and <i>quisquis</i> (“whoever”) is compound in figure. The two accidents that are new are quality, which for the pronoun means something different from the quality of the noun, and person.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the pronoun.` },

{ id: 'quality',
  title: 'Definite and indefinite pronouns',
  body: `<p>“I,” “you,” and “she” refer to definite persons in the situation of speaking, whereas “who,” “someone,” “anyone,” and “whatever” do not; they leave the person to be found or leave it unknown. For the pronoun, therefore, <strong>quality</strong> is the distinction between definite and indefinite pronouns. <strong>Definite</strong> pronouns are those that refer to a definite person: <i>ego</i> (“I”), <i>tū</i> (“you”), <i>ille</i> (“he,” “that one”). <strong>Indefinite</strong> pronouns do not refer to a definite person: <i>quis</i> (“who?” “anyone”), <i>quae</i>, <i>quod</i>.</p>
<p>Donatus states the distinction: <i>aut enim finita sunt pronomina aut infinita</i>, “pronouns are either definite or indefinite” (<i>Ars minor</i>). So the quality of the pronoun concerns how definitely it refers, whereas the quality of the noun concerns whether it names one thing or a kind.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the quality of the pronoun (the Latin).`,
  qpTodo: `Definite or indefinite: is a given pronoun (<i>ego</i>, <i>quis</i>, “she,” “someone”) definite or indefinite, and why.` },

{ id: 'person',
  title: 'Person',
  body: `<p>In every conversation there is someone who speaks, someone who is spoken to, and someone or something that is spoken about, and the pronouns “I,” “you,” and “he” refer to them. <strong>Person</strong> (<i>persōna</i>) is the relation of the thing referred to the act of speaking. The <strong>first person</strong> is the speaker: “I,” “we,” Latin <i>ego</i>, <i>nōs</i>. The <strong>second person</strong> is the one spoken to: “you,” Latin <i>tū</i>, <i>vōs</i>. The <strong>third person</strong> is anyone or anything spoken about: “he,” “she,” “it,” “they,” Latin <i>is</i>, <i>ea</i>, <i>id</i>, <i>ille</i>.</p>
<p>We saw in Section I that the verb also consignifies person, as “I run,” “you run,” and “he runs” do, and Latin <i>currō</i>, <i>curris</i>, and <i>currit</i>. Because the Latin verb shows the person by its ending, Latin often omits the pronoun subject: <i>currō</i> alone means “I run.” When the pronoun is expressed, as in <i>ego currō</i>, it usually gives emphasis: “<em>I</em> run” (that is, I and not another). English almost always expresses the pronoun, because its verb endings no longer show the person clearly.</p>`,
  src: `Donatus, <i>Ars minor</i>; Allen and Greenough, <i>New Latin Grammar</i> § 295, in paraphrase.` },

{ id: 'personal',
  title: 'The personal pronouns',
  body: `<p>The Latin pronouns of the first and second person are declined as follows. They have no distinction of gender, because the speaker and the one spoken to are present and need no description.</p>
<div class="para-wrap"><table class="para"><tr><th></th><th>First sg.</th><th>Second sg.</th><th>First pl.</th><th>Second pl.</th></tr>
<tr><td>Nom.</td><td class="f"><i>ego</i></td><td class="f"><i>tū</i></td><td class="f"><i>nōs</i></td><td class="f"><i>vōs</i></td></tr>
<tr><td>Gen.</td><td class="f"><i>meī</i></td><td class="f"><i>tuī</i></td><td class="f"><i>nostrum, nostrī</i></td><td class="f"><i>vestrum, vestrī</i></td></tr>
<tr><td>Dat.</td><td class="f"><i>mihi</i></td><td class="f"><i>tibi</i></td><td class="f"><i>nōbīs</i></td><td class="f"><i>vōbīs</i></td></tr>
<tr><td>Acc.</td><td class="f"><i>mē</i></td><td class="f"><i>tē</i></td><td class="f"><i>nōs</i></td><td class="f"><i>vōs</i></td></tr>
<tr><td>Abl.</td><td class="f"><i>mē</i></td><td class="f"><i>tē</i></td><td class="f"><i>nōbīs</i></td><td class="f"><i>vōbīs</i></td></tr></table></div>
<p>The English personal pronouns keep three cases: “I,” “me,” “my”; “we,” “us,” “our”; “he,” “him,” “his”; “she,” “her,” “her”; “they,” “them,” “their.” So the English pronoun keeps the distinction of subject and object that English nouns have lost, and “Him and me left early” is an error of case, because the subject requires “He and I.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 143.` },

{ id: 'third-person',
  title: 'The pronoun of the third person and its antecedent',
  body: `<p>Latin has no single personal pronoun of the third person. It uses the demonstrative <i>is</i>, <i>ea</i>, <i>id</i> (“he,” “she,” “it”; “that”), or <i>ille</i>, <i>illa</i>, <i>illud</i>, which have all three genders. English has “he,” “she,” and “it” in the singular and “they” in the plural.</p>
<p>A pronoun of the third person refers to something named elsewhere, usually earlier, in the sentence or the conversation. The noun to which it refers is called its <strong>antecedent</strong> (Latin <i>antecēdēns</i>, “going before”). In “Mary found the book, and she read it,” the antecedent of “she” is “Mary” and the antecedent of “it” is “the book.” The pronoun takes the gender and number of its antecedent, but its case depends on its own use in its clause: in <i>Marcum vīdī et eī librum dedī</i> (“I saw Marcus and gave him a book”), <i>eī</i> is masculine singular like <i>Marcum</i>, but dative, because it is the indirect object of <i>dedī</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 146, 296–297, in paraphrase.`,
  qpTodo: `Antecedent and case: in a given sentence, what is the antecedent of the pronoun, which accidents does the pronoun take from it (gender, number), and which does it not (case).` },

{ id: 'demonstratives',
  title: 'Demonstrative pronouns',
  body: `<p>“This book” and “that book” point out a book as if by gesture, the first near the speaker and the second farther away. Such pronouns are called <strong>demonstrative</strong> pronouns (from <i>dēmōnstrāre</i>, “to point out”). Latin has three that correspond to the three persons. <i>Hic</i>, <i>haec</i>, <i>hoc</i> (“this”) points to what is near the speaker; <i>iste</i>, <i>ista</i>, <i>istud</i> (“that of yours”) to what is near the one spoken to; and <i>ille</i>, <i>illa</i>, <i>illud</i> (“that”) to what is farther from both. So <i>hic liber</i> is “this book (here by me),” <i>iste liber</i> is “that book (by you),” and <i>ille liber</i> is “that book (over there).”</p>
<p>English has two demonstratives, “this” and “that,” with the plurals “these” and “those.” A demonstrative can stand alone as a pronoun, as in “This is mine,” or be used with a noun as an adjective, as in “this book.” We saw that the Latin grammarians used <i>hic</i>, <i>haec</i>, <i>hoc</i> to show the gender of nouns, and the same words serve as the commonest Latin demonstratives.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 146, 296–298, in paraphrase.` },

{ id: 'relative',
  title: 'The relative pronoun',
  body: `<p>In “The man who waited at the gate was a sailor,” “who” refers to “the man” and introduces the clause “who waited at the gate,” which tells which man is meant; in Latin, <i>vir quī ad portam exspectābat nauta erat</i>. A pronoun that refers to an antecedent and at the same time introduces a clause that tells something about it is called a <strong>relative</strong> pronoun. Latin uses <i>quī</i>, <i>quae</i>, <i>quod</i> (“who,” “which,” “that”); English uses “who,” “whom,” “whose,” “which,” and “that.”</p>
<p>The relative pronoun follows the rule we have seen for the pronoun of the third person: it takes the gender and number of its antecedent, but its case depends on its use in its own clause. In <i>vir quem vīdī</i> (“the man whom I saw”), <i>quem</i> is masculine singular like <i>vir</i>, but accusative, because it is the object of <i>vīdī</i>; English shows the same in “whom.” The relative clause itself will be studied in Section V.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 147, 303–305, in paraphrase.` },

{ id: 'interrogative-indefinite',
  title: 'Interrogative and indefinite pronouns',
  body: `<p>“Who came?” is answered by “John came,” and the word “who” marks the place in the sentence that the answer fills. We saw in Section I that a question asks for a statement in reply. A pronoun that asks a question about the person or thing in this way is an <strong>interrogative</strong> pronoun: Latin <i>quis?</i> (“who?”) and <i>quid?</i> (“what?”), English “who?”, “what?”, and “which?”</p>
<p>“Someone knocked” refers to a person without identifying the person. An <strong>indefinite</strong> pronoun refers to a person or thing without identifying it: Latin <i>aliquis</i> (“someone”), <i>quīdam</i> (“a certain one”), <i>quisque</i> (“each one”), and English “someone,” “anyone,” “each,” and “nobody.” These pronouns are the clearest examples of Donatus’s indefinite quality, and several of them, such as “each” and “nobody,” are also among the syncategorematic words we studied in Section I.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 148–151, in paraphrase.` },

{ id: 'reflexive-possessive',
  title: 'Reflexive and possessive pronouns',
  body: `<p>In “Marcus praises himself,” <i>Marcus sē laudat</i>, the one praised is the one who praises. A pronoun that refers back in this way to the subject of its own clause is a <strong>reflexive</strong> pronoun. Latin has <i>sē</i> (“himself,” “herself,” “itself,” “themselves”); English has “myself,” “yourself,” “himself,” and the rest. The <strong>possessive</strong> pronouns are adjectives formed from the personal pronouns: <i>meus</i> (“my”), <i>tuus</i> (“your”), <i>suus</i> (“his own,” “her own,” “their own”).</p>
<p>Latin distinguishes here what English often leaves ambiguous. In “Marcus told Titus that he had lost his book,” we cannot tell whose book is meant. Latin distinguishes <i>suum librum</i> (“his own book,” the subject’s) from <i>eius librum</i> (“his book,” someone else’s). So the Latin reflexive removes an ambiguity of the kind we saw in Section I, and an English writer must often rephrase the sentence to remove it.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 144–145, 299–302, in paraphrase.`,
  qpTodo: `Reflexive and possessive: in a given Latin sentence, does <i>suus</i> or <i>eius</i> refer to the subject, and how would English make the same distinction.` },

{ id: 'clear-reference',
  title: 'Clear reference',
  body: `<p>Because a pronoun refers to a thing without describing it, its meaning depends entirely on its antecedent. If the antecedent is unclear, the sentence is ambiguous. In “When the cup fell on the plate, it broke,” we cannot tell whether “it” refers to the cup or to the plate. Latin, which marks gender, can sometimes resolve such cases, but if both nouns have the same gender, Latin is ambiguous in the same way.</p>
<p>So a pronoun is correctly used only when the hearer can tell what it refers to. We will see in Section VI that an unclear pronoun is one of the common errors in the arrangement of words. We have now studied the noun and the pronoun, which signify by the mode of a stable thing. The verb, which signifies by the mode of becoming, also has person, as the pronoun does.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>; standard English grammars, in paraphrase.` }

  ]
};
