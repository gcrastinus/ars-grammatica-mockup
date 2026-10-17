/* III.6 The Noun II: Gender, Number, and Case [iii.noun-2]
   Plan (ITEM-LIST.md): 14 panels, 4 question points (placeholders: qpTodo; to be written). Two closing panels give the
   modistic account of the noun's accidents and the objection from grammatical gender. Exercise: Nouns and Adjectives
   (iii.ex.nouns, after this deck; not yet written).
   Live material drawn on: DECKS.latnoun (declension, the five declensions), DECKS.casework (the cases and English word order
   and prepositions), DECKS.enacc (English number and case), DECKS.objections (grammatical gender). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.noun-2'] = {
  id: 'iii.noun-2',
  title: 'The Noun II: Gender, Number, and Case',
  sub: 'The accidents that make declension, set beside English word order and prepositions',
  sources: `Donatus, <i>Ars minor</i>; Priscian, <i>Institutiones grammaticae</i> V–VII; Allen and Greenough, <i>New Latin Grammar</i>; Thomas of Erfurt, <i>Grammatica speculativa</i>.`,
  panels: [

{ id: 'gender',
  title: 'Gender',
  body: `<p>The first of the accidents studied here is <strong>gender</strong> (Latin <i>genus</i>, “kind”). Donatus says that there are four genders of nouns: <i>masculīnum, ut hic magister; fēminīnum, ut haec Mūsa; neutrum, ut hoc scamnum; commūne, ut hic et haec sacerdōs</i> (<i>Ars minor</i>). That is, the <strong>masculine</strong>, as <i>magister</i> (“teacher”); the <strong>feminine</strong>, as <i>Mūsa</i> (“Muse”); the <strong>neuter</strong> (“neither”), as <i>scamnum</i> (“bench”); and the <strong>common</strong>, as <i>sacerdōs</i> (“priest” or “priestess”), which is masculine or feminine according to the person meant.</p>
<p>The small words <i>hic</i>, <i>haec</i>, and <i>hoc</i> (“this,” in the three genders) were used in the schools to show the gender of a noun. Donatus also names the <strong>epicene</strong> noun (Greek <i>epikoinos</i>, “shared”), which names an animal of either sex under one gender, as <i>passer</i> (“sparrow”) is always masculine and <i>aquila</i> (“eagle”) always feminine.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the gender of the noun (the Latin).` },

{ id: 'natural-grammatical',
  title: 'Natural and grammatical gender',
  body: `<p>In Latin the gender of a noun that names a person usually follows the sex of the person: <i>pater</i> (“father”) is masculine and <i>māter</i> (“mother”) feminine. But Latin assigns a gender to every noun, including nouns that name things without sex: <i>mēnsa</i> (“table”) is feminine, <i>hortus</i> (“garden”) masculine, and <i>dōnum</i> (“gift”) neuter. This is called <strong>grammatical gender</strong>. It is known partly from the ending of the noun and partly from the usage of the language; so most nouns in <i>-a</i> are feminine, but <i>nauta</i> (“sailor”) and <i>agricola</i> (“farmer”) are masculine, because they name men.</p>
<p>English has <strong>natural gender</strong>: a noun is masculine, feminine, or neuter according to what it refers to, and the gender appears only in the pronouns that refer to it, “he,” “she,” and “it.” So “table” is referred to as “it,” and “mother” as “she.” English keeps a few traces of other usage, as when a ship or a nation is called “she.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 30–34, in paraphrase.`,
  qpTodo: `Natural and grammatical gender: what gender is a given Latin noun (<i>mēnsa</i>, <i>nauta</i>, <i>dōnum</i>), and how is the gender of an English noun shown.` },

{ id: 'number',
  title: 'Number',
  body: `<p>The second accident is <strong>number</strong> (<i>numerus</i>). Donatus gives two numbers, the <strong>singular</strong>, as <i>hic magister</i> (“this teacher”), and the <strong>plural</strong>, as <i>hī magistrī</i> (“these teachers”) (<i>Ars minor</i>). We saw in Section I that number is consignified along with the principal meaning of a word: “horse” and “horses” signify the same kind of animal, but the second signifies more than one.</p>
<p>Greek also has a <strong>dual</strong> number for two things, as τὼ ἵππω (<i>tō hippō</i>, “the two horses”). English forms most plurals by adding <i>-s</i> or <i>-es</i> (“ship,” “ships”; “box,” “boxes”), but keeps some older forms: “child,” “children”; “man,” “men”; “mouse,” “mice”; and “sheep,” which has the same form in both numbers. Some nouns are used only in the plural, as “scissors” and Latin <i>arma</i> (“arms”), and some, such as “courage,” are rarely used in the plural at all.</p>`,
  src: `Donatus, <i>Ars minor</i>, on number (the Latin); Smyth, <i>Greek Grammar</i>, on the dual.` },

{ id: 'case',
  title: 'What is case?',
  body: `<p>The third accident is <strong>case</strong> (<i>casus</i>, “falling”), which translates the Greek <i>ptōsis</i>. The Greek grammarians thought of the first form of the noun as upright and of the other forms as “falling” from it. A case is a form of a noun that shows the relation of the noun to the other words of the sentence. Donatus counts six cases in Latin (<i>Ars minor</i>):</p>
<p><strong>nominative</strong> (<i>nōminātīvus</i>, “naming”), <i>puella</i>;<br><strong>genitive</strong> (<i>genetīvus</i>, “of origin”), <i>puellae</i>;<br><strong>dative</strong> (<i>datīvus</i>, “of giving”), <i>puellae</i>;<br><strong>accusative</strong> (<i>accūsātīvus</i>), <i>puellam</i>;<br><strong>vocative</strong> (<i>vocātīvus</i>, “of calling”), <i>puella</i>;<br><strong>ablative</strong> (<i>ablātīvus</i>, “of taking away”), <i>puellā</i>.</p>
<p>The name “accusative” is a mistranslation: the Greek <i>aitiatikē</i> meant the case of what is caused or affected, but the Latin grammarians took it from <i>aitiasthai</i>, “to accuse.” Greek has no ablative, so the Latin grammarians had to name this case themselves.</p>`,
  src: `Donatus, <i>Ars minor</i>, on case; Priscian, <i>Institutiones grammaticae</i> V, in paraphrase.` },

{ id: 'case-uses',
  title: 'The chief uses of the cases',
  body: `<p>Each case has many uses, which are studied in the syntax of the language, but each has a principal use that can be learned first:<br>the <strong>nominative</strong> is the case of the subject: <i>puella cantat</i>, “the girl sings”;<br>the <strong>genitive</strong> usually shows possession or relation, and is often translated with “of”: <i>liber puellae</i>, “the book of the girl,” “the girl’s book”;<br>the <strong>dative</strong> is the case of the indirect object, translated with “to” or “for”: <i>puellae librum dat</i>, “he gives a book to the girl”;<br>the <strong>accusative</strong> is the case of the direct object: <i>puellam videt</i>, “he sees the girl”;<br>the <strong>vocative</strong> is the case of address: <i>Venī, puella</i>, “Come, girl”;<br>the <strong>ablative</strong> shows means, manner, place, or time, and is translated with “by,” “with,” “from,” or “in”: <i>gladiō</i>, “with a sword.”</p>
<p>Many uses of the cases also depend on prepositions, which govern particular cases, as <i>ad</i> governs the accusative and <i>cum</i> the ablative. We will study these relations as government in Section V.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 338–431, in paraphrase.`,
  qpTodo: `The uses of the cases: in a given Latin sentence, which case is the marked noun, and what does that case show (subject, possession, indirect object, direct object, address, means).` },

{ id: 'english-case',
  title: 'Case in English: endings, word order, and prepositions',
  body: `<p>English nouns have kept only one case ending, the <strong>possessive</strong>: “the girl’s book,” “the sailors’ ropes.” The English personal pronouns keep three cases: the subjective (“I,” “he,” “she,” “we,” “they,” “who”), the objective (“me,” “him,” “her,” “us,” “them,” “whom”), and the possessive (“my,” “his,” “her,” “our,” “their,” “whose”).</p>
<p>For the other relations that Latin shows by case endings, English uses the order of words and prepositions. In “The dog bites the man,” the subject comes before the verb and the object after it; if we exchange them, the meaning is reversed. In Latin <i>canis virum mordet</i> the endings show that <i>canis</i> (“dog”) is the subject and <i>virum</i> (“man”) the object, so the order can change without changing the meaning: <i>virum canis mordet</i> says the same thing. English “to the girl” and “with a sword” do with prepositions what Latin does with the dative <i>puellae</i> and the ablative <i>gladiō</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, on the order of words, in paraphrase.`,
  qpTodo: `English and Latin case: why can <i>canis virum mordet</i> become <i>virum canis mordet</i> without changing its meaning, while “The dog bites the man” cannot; or which English pronoun form a sentence requires.` },

{ id: 'declension',
  title: 'What is a declension?',
  body: `<p>The forms of a noun in all its cases and numbers make up its <strong>declension</strong> (<i>dēclīnātiō</i>), and to give them in order is to <strong>decline</strong> the noun. A declension is also a class of nouns that share one set of endings. Latin has five declensions, and the declension of a noun is known from its genitive singular, which a dictionary gives after the nominative.</p>
<div class="para-wrap"><table class="para"><tr><th>Declension</th><th>Genitive singular</th><th>Examples</th></tr>
<tr><td>First</td><td class="f"><i>-ae</i></td><td><i>puella, puellae</i> (“girl”)</td></tr>
<tr><td>Second</td><td class="f"><i>-ī</i></td><td><i>dominus, dominī</i> (“master”); <i>bellum, bellī</i> (“war”)</td></tr>
<tr><td>Third</td><td class="f"><i>-is</i></td><td><i>rēx, rēgis</i> (“king”); <i>corpus, corporis</i> (“body”)</td></tr>
<tr><td>Fourth</td><td class="f"><i>-ūs</i></td><td><i>manus, manūs</i> (“hand”)</td></tr>
<tr><td>Fifth</td><td class="f"><i>-ēī</i> or <i>-eī</i></td><td><i>diēs, diēī</i> (“day”); <i>rēs, reī</i> (“thing”)</td></tr></table></div>
<p>The genitive also shows the <strong>stem</strong>, that is, the part of the word to which the endings are added. When the ending <i>-is</i> is taken from <i>rēgis</i>, the stem <i>rēg-</i> remains, which the nominative <i>rēx</i> does not show. So a Latin noun is learned with its nominative, its genitive, and its gender.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 35–37, in paraphrase.` },

{ id: 'first-second',
  title: 'The first and second declensions',
  body: `<p>Most nouns of the first declension are feminine, and most nouns of the second declension in <i>-us</i> are masculine; nouns of the second declension in <i>-um</i> are neuter. In the table the cases are given in the order of Donatus, without the vocative, which has the same form as the nominative except in nouns in <i>-us</i> of the second declension (<i>domine</i>, “O master”).</p>
<div class="para-wrap"><table class="para"><tr><th></th><th>First</th><th>Second (m.)</th><th>Second (n.)</th></tr>
<tr><td>Nom. sg.</td><td class="f"><i>puella</i></td><td class="f"><i>dominus</i></td><td class="f"><i>bellum</i></td></tr>
<tr><td>Gen. sg.</td><td class="f"><i>puellae</i></td><td class="f"><i>dominī</i></td><td class="f"><i>bellī</i></td></tr>
<tr><td>Dat. sg.</td><td class="f"><i>puellae</i></td><td class="f"><i>dominō</i></td><td class="f"><i>bellō</i></td></tr>
<tr><td>Acc. sg.</td><td class="f"><i>puellam</i></td><td class="f"><i>dominum</i></td><td class="f"><i>bellum</i></td></tr>
<tr><td>Abl. sg.</td><td class="f"><i>puellā</i></td><td class="f"><i>dominō</i></td><td class="f"><i>bellō</i></td></tr>
<tr><td>Nom. pl.</td><td class="f"><i>puellae</i></td><td class="f"><i>dominī</i></td><td class="f"><i>bella</i></td></tr>
<tr><td>Gen. pl.</td><td class="f"><i>puellārum</i></td><td class="f"><i>dominōrum</i></td><td class="f"><i>bellōrum</i></td></tr>
<tr><td>Dat. pl.</td><td class="f"><i>puellīs</i></td><td class="f"><i>dominīs</i></td><td class="f"><i>bellīs</i></td></tr>
<tr><td>Acc. pl.</td><td class="f"><i>puellās</i></td><td class="f"><i>dominōs</i></td><td class="f"><i>bella</i></td></tr>
<tr><td>Abl. pl.</td><td class="f"><i>puellīs</i></td><td class="f"><i>dominīs</i></td><td class="f"><i>bellīs</i></td></tr></table></div>
<p>A neuter noun always has the same form in the nominative and the accusative, and in the plural these cases end in <i>-a</i>: <i>bella</i>, “wars.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 40–49.` },

{ id: 'third',
  title: 'The third declension',
  body: `<p>The third declension contains nouns of all three genders, and its nominative singular takes many forms, so that the stem must be learned from the genitive. Two examples show the masculine and feminine type and the neuter type.</p>
<div class="para-wrap"><table class="para"><tr><th></th><th>Masc. or fem.</th><th>Neuter</th></tr>
<tr><td>Nom. sg.</td><td class="f"><i>rēx</i></td><td class="f"><i>corpus</i></td></tr>
<tr><td>Gen. sg.</td><td class="f"><i>rēgis</i></td><td class="f"><i>corporis</i></td></tr>
<tr><td>Dat. sg.</td><td class="f"><i>rēgī</i></td><td class="f"><i>corporī</i></td></tr>
<tr><td>Acc. sg.</td><td class="f"><i>rēgem</i></td><td class="f"><i>corpus</i></td></tr>
<tr><td>Abl. sg.</td><td class="f"><i>rēge</i></td><td class="f"><i>corpore</i></td></tr>
<tr><td>Nom. pl.</td><td class="f"><i>rēgēs</i></td><td class="f"><i>corpora</i></td></tr>
<tr><td>Gen. pl.</td><td class="f"><i>rēgum</i></td><td class="f"><i>corporum</i></td></tr>
<tr><td>Dat. pl.</td><td class="f"><i>rēgibus</i></td><td class="f"><i>corporibus</i></td></tr>
<tr><td>Acc. pl.</td><td class="f"><i>rēgēs</i></td><td class="f"><i>corpora</i></td></tr>
<tr><td>Abl. pl.</td><td class="f"><i>rēgibus</i></td><td class="f"><i>corporibus</i></td></tr></table></div>
<p>So <i>corpus</i>, like every neuter, has the same form in the nominative and accusative, and its plural ends in <i>-a</i>. Many English words come from the stems of third-declension nouns rather than from their nominatives: “regal” from <i>rēg-</i>, “corporal” and “corporation” from <i>corpor-</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 56–65.` },

{ id: 'fourth-fifth',
  title: 'The fourth and fifth declensions',
  body: `<p>The fourth and fifth declensions contain fewer nouns. Most nouns of the fourth declension are masculine, and <i>manus</i> (“hand”) is one of the few feminines. Most nouns of the fifth are feminine, but <i>diēs</i> (“day”) is usually masculine.</p>
<div class="para-wrap"><table class="para"><tr><th></th><th>Fourth</th><th>Fifth</th></tr>
<tr><td>Nom. sg.</td><td class="f"><i>manus</i></td><td class="f"><i>rēs</i></td></tr>
<tr><td>Gen. sg.</td><td class="f"><i>manūs</i></td><td class="f"><i>reī</i></td></tr>
<tr><td>Dat. sg.</td><td class="f"><i>manuī</i></td><td class="f"><i>reī</i></td></tr>
<tr><td>Acc. sg.</td><td class="f"><i>manum</i></td><td class="f"><i>rem</i></td></tr>
<tr><td>Abl. sg.</td><td class="f"><i>manū</i></td><td class="f"><i>rē</i></td></tr>
<tr><td>Nom. pl.</td><td class="f"><i>manūs</i></td><td class="f"><i>rēs</i></td></tr>
<tr><td>Gen. pl.</td><td class="f"><i>manuum</i></td><td class="f"><i>rērum</i></td></tr>
<tr><td>Dat. pl.</td><td class="f"><i>manibus</i></td><td class="f"><i>rēbus</i></td></tr>
<tr><td>Acc. pl.</td><td class="f"><i>manūs</i></td><td class="f"><i>rēs</i></td></tr>
<tr><td>Abl. pl.</td><td class="f"><i>manibus</i></td><td class="f"><i>rēbus</i></td></tr></table></div>
<p>The word <i>rēs</i> is one of the most common in Latin, and its meaning is very wide: a thing, an affair, a matter, property. The phrase <i>rēs pūblica</i> (“the public thing,” the commonwealth) gives English “republic.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 88–98.` },

{ id: 'reading-ending',
  title: 'Reading an ending',
  body: `<p>An ending does not always show a single case. In the first declension <i>puellae</i> can be genitive singular, dative singular, or nominative plural; in the second, <i>dominō</i> can be dative or ablative; in the third, <i>rēgēs</i> can be nominative or accusative plural. So the reader must decide from the other words of the sentence which case is meant.</p>
<p>In <i>puellae rosās dant</i> (“the girls give roses”), the verb <i>dant</i> (“they give”) is plural, so <i>puellae</i> is the nominative plural and the subject. In <i>puellae rosam dat</i> (“he gives a rose to the girl”), the verb <i>dat</i> (“he gives”) is singular and has its own subject understood, so <i>puellae</i> is the dative, the person to whom the rose is given. This is the first example of what we will study as construction in Section V: the words of a sentence determine one another.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.`,
  qpTodo: `Reading an ending: in a given sentence, which case and number is an ambiguous form (<i>puellae</i>, <i>dominō</i>, <i>rēgēs</i>), and which word of the sentence decides it.` },

{ id: 'adjectives',
  title: 'The declension of adjectives',
  body: `<p>We saw that the Latin adjective is counted under the noun because it is declined like a noun. Most Latin adjectives belong to one of two classes. Adjectives of the first and second declensions have masculine forms like <i>dominus</i>, feminine forms like <i>puella</i>, and neuter forms like <i>bellum</i>: <i>bonus</i>, <i>bona</i>, <i>bonum</i> (“good”). Adjectives of the third declension have one form for the masculine and feminine and one for the neuter, as <i>omnis</i>, <i>omne</i> (“every,” “all”), or one form for all three genders, as <i>fēlīx</i> (“happy”).</p>
<p>An adjective takes the gender, number, and case of the noun that it describes: <i>bonus dominus</i>, <i>bona puella</i>, <i>bonum dōnum</i>; <i>bonae puellae</i> (“good girls”). The adjective need not have the same ending as the noun, because the noun may belong to another declension: <i>bonus nauta</i> (“a good sailor”) is correct, because <i>nauta</i> is masculine. We will study this agreement in Section V.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 109–121, in paraphrase.` },

{ id: 'modist-accidents',
  title: 'The modists’ account of the noun’s accidents',
  body: `<p>We saw that the modists explain the parts of speech by their essential modes of signifying. They explain the accidents of the noun by accidental modes, each taken from some property of the thing as it is understood. Number, according to Thomas of Erfurt, is taken from the property of being one or many: the singular signifies the thing as undivided, the plural as divided into many. Case is taken from the relation of the thing to another in the sentence, as the source from which something proceeds or the end to which it is directed; so the nominative signifies the thing as that of which something is said, and the oblique cases (the cases other than the nominative) signify it as the end or object of another word (<i>Grammatica speculativa</i>, on the accidents of the noun, in paraphrase).</p>
<p>Gender, they held, is taken from the property of acting or of being acted upon: the masculine signifies the thing under the property of acting, the feminine under the property of receiving, and the neuter under neither. This account of number and case is close to the grammarians’ ordinary teaching, but the account of gender meets an objection, which follows.</p>`,
  src: `Thomas of Erfurt, <i>Grammatica speculativa</i>, on the accidents of the noun (Bursill-Hall), in paraphrase.` },

{ id: 'gender-objection',
  title: 'The objection from grammatical gender',
  body: `<p>The objection is this. <i>Mēnsa</i> (“table”) is feminine, but a table is not female and does not receive anything more than a garden does, and <i>hortus</i> (“garden”) is masculine. German <i>das Mädchen</i> (“the girl”) is neuter, because of its ending, though a girl is female. If the modes of signifying are taken from properties of things, what property of a table is its femininity?</p>
<p>Priscian had already given the answer that most grammarians accept. He says that the principal genders are two, masculine and feminine, which alone nature knows, since they are named from generation, and that the others are known more from the form of the word than from nature (<i>Institutiones grammaticae</i> V, in paraphrase). So in names of living things gender usually follows sex, and in other nouns it follows the form of the word and the usage of the language. Thomas of Erfurt, for nouns such as <i>deitās</i> (“godhead”), which is feminine though nothing in God is passive, must say that the mode is taken from another thing. That answer saves the theory, but it does not explain why any particular noun has its gender, and here Priscian’s account is the more accurate one.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> V, in paraphrase; Thomas of Erfurt, <i>Grammatica speculativa</i> (Bursill-Hall), in paraphrase.` }

  ]
};
