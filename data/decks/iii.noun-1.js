/* III.5 The Noun I: Kinds, Quality, and Comparison [iii.noun-1]
   Plan (ITEM-LIST.md): 10 panels, 3 question points (placeholders: qpTodo; to be written). Exercise: in the shared Nouns and
   Adjectives set (after III.6).
   Live material drawn on: DECKS.pos (the noun and the adjective under it), DECKS.latpos, DECKS.enacc (comparison). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.noun-1'] = {
  id: 'iii.noun-1',
  title: 'The Noun I: Kinds, Quality, and Comparison',
  sub: 'Proper and common nouns, the adjective under the noun, and the degrees of comparison',
  sources: `Donatus, <i>Ars minor</i> and <i>Ars maior</i> II; Priscian, <i>Institutiones grammaticae</i> II–III.`,
  panels: [

{ id: 'accidents',
  title: 'The accidents of the noun',
  body: `<p>We have seen that the noun signifies a body or a thing, with case, and that it signifies by the mode of a stable thing. But nouns also differ from one another in several ways. “Rome” names one city, whereas “city” names any city; “tall” can become “taller” and “tallest”; Latin <i>puella</i> (“girl”) is feminine, and <i>puellae</i> (“girls”) plural; “greenhouse” is made of two words; and <i>puellam</i> differs from <i>puella</i> by its relation to the other words of the sentence. Donatus asks how many accidents the noun has and answers six (<i>Ars minor</i>):<br><strong>quality</strong> (<i>qualitas</i>);<br><strong>comparison</strong> (<i>comparatio</i>);<br><strong>gender</strong> (<i>genus</i>);<br><strong>number</strong> (<i>numerus</i>);<br><strong>figure</strong> (<i>figura</i>);<br><strong>case</strong> (<i>casus</i>).</p>
<p>We have already studied figure, the distinction between simple and compound nouns. Here we study quality, which divides nouns into proper and common, and comparison, which belongs to adjectives of quality and quantity. Gender, number, and case are the accidents by which a Latin noun is declined, and they are studied together in the second part of the study of the noun.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the noun.` },

{ id: 'quality',
  title: 'Proper and common nouns',
  body: `<p>“Rome,” “Cicero,” and “the Thames” each name one particular place or person, whereas “city,” “man,” and “river” name any member of a kind. So a <strong>proper noun</strong> names one particular person, place, or thing, as also Latin <i>Rōma</i> and <i>Tiberis</i> (“the Tiber”), and a <strong>common noun</strong> names any member of a kind, as also Latin <i>urbs</i>, <i>vir</i>, and <i>flūmen</i>.</p>
<p>Donatus calls this distinction the <strong>quality</strong> of the noun: <i>aut enim unius nomen est et proprium dicitur, aut multorum et appellativum</i>, that is, a noun is either the name of one thing, and is called proper, or the name of many, and is called appellative (<i>Ars minor</i>). The usual English term for the appellative noun is the <strong>common noun</strong>. In English a proper noun usually begins with a capital letter, but the distinction is one of meaning, not of spelling: “Rome” would be a proper noun even if it were written with a small letter.</p>`,
  src: `Donatus, <i>Ars minor</i>, on the quality of the noun (the Latin; the English in substance).`,
  qpTodo: `Proper or common: is a given noun (“Rome,” “city,” <i>Tiberis</i>, <i>flūmen</i>) proper or common, and why the capital letter does not decide it.` },

{ id: 'roman-names',
  title: 'The kinds of proper name',
  body: `<p>A person in an English-speaking country usually has a given name, such as “John,” and a family name or surname, such as “Smith,” and sometimes a middle name; a few have a title added for some deed or quality, such as “the Great” in “Alfred the Great.” Each of these names is a proper noun, because each names one person.</p>
<p>Roman names followed a fuller pattern. Donatus divides the proper names of Romans into four kinds, with the example <i>Publius Cornelius Scipio Africanus</i> (<i>Ars maior</i> II). The <strong>praenomen</strong> (“forename”), <i>Pūblius</i>, was the personal name, used in the family. The <strong>nomen</strong> (“name”), <i>Cornēlius</i>, was the name of the clan (<i>gēns</i>). The <strong>cognomen</strong> (“added name”), <i>Scīpiō</i>, distinguished a branch of the clan. The <strong>agnomen</strong> (“further name”), <i>Āfricānus</i>, was given for some deed or quality, here for Scipio’s victory in Africa, and English titles such as “the Great” resemble it.</p>`,
  src: `Donatus, <i>Ars maior</i> II, on the quality of the noun, in paraphrase.` },

{ id: 'common-kinds',
  title: 'The kinds of common noun',
  body: `<p>Some common nouns, such as “horse” and “stone,” name bodies that can be seen and touched, and some, such as “courage” and “justice,” name things that cannot. Modern grammars call the first <strong>concrete nouns</strong> and the second <strong>abstract nouns</strong>. The division follows from Donatus’s definition of the noun as signifying a body or a thing, and Donatus makes it himself, into nouns that are <i>corporalia</i> (“bodily”), as <i>homo, terra, mare</i> (“man, earth, sea”), and <i>incorporalia</i> (“bodiless”), as <i>pietas, iustitia, dignitas</i> (“dutifulness, justice, dignity”) (<i>Ars maior</i> II).</p>
<p>The words “crowd,” “army,” and “family,” Latin <i>populus</i> (“people”) and <i>exercitus</i> (“army”), are singular in form but name a group of many. Such a noun is called a <strong>collective noun</strong>. Donatus describes such nouns as singular in form but plural in meaning (<i>positione singularia, intellectu pluralia</i>), with the examples <i>populus</i>, <i>contio</i> (“assembly”), and <i>plebs</i> (“the common people”) (<i>Ars maior</i> II). Because a collective noun refers to many while being singular in form, it raises questions of agreement that we will consider in Section V, as in the English choice between “The family is” and “The family are.”</p>`,
  src: `Donatus, <i>Ars minor</i> and <i>Ars maior</i> II; Allen and Greenough, <i>New Latin Grammar</i>, on nouns, in paraphrase.` },

{ id: 'adjective',
  title: 'The adjective under the noun',
  body: `<p>We have seen that Donatus counts the adjective as a kind of noun. The Latin grammarians call it the <strong>noun adjective</strong> (<i>nōmen adiectīvum</i>, “the noun that is added”), because it is added to another noun to signify a quality or quantity of the thing that noun names. In <i>bonus puer</i> (“a good boy”) the adjective <i>bonus</i> is added to <i>puer</i>, and in <i>magna urbs</i> (“a great city”) the adjective <i>magna</i> is added to <i>urbs</i>.</p>
<p>The reason for counting it under the noun is that a Latin adjective has the accidents of the noun: it is declined for gender, number, and case, and it agrees with its noun in all three, as in <i>bonus puer</i>, <i>bona puella</i> (“a good girl”), and <i>bonum dōnum</i> (“a good gift”). English adjectives are not declined, and English grammars therefore count the adjective as a separate part of speech. In both languages, however, the adjective depends on a noun and tells what sort of thing the noun refers to.</p>`,
  src: `Donatus, <i>Ars maior</i> II; Priscian, <i>Institutiones grammaticae</i> II, in paraphrase.` },

{ id: 'substantive-use',
  title: 'Adjectives used as nouns, and nouns used as adjectives',
  body: `<p>Because the adjective and the substantive share the mode of a stable thing, each can sometimes be used in the place of the other. An adjective is used as a noun when the noun it would describe is understood: In “The rich must help the poor,” “the rich” and “the poor” mean rich people and poor people, and Latin <i>bonī</i> (“the good”) means “good men.” Such an adjective is said to be used <strong>substantively</strong>.</p>
<p>A noun can also be used to describe another noun, as “stone” in “a stone wall,” “school” in “a school bus,” and “London” in “a London street.” English does this very freely, and Latin does it rarely, preferring an adjective (<i>mūrus lapideus</i>, “a wall of stone”) or a genitive. So in a given sentence we must ask how the word is used, as we saw with the parts of speech in general.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>, on adjectives used as nouns, in paraphrase.` },

{ id: 'comparison',
  title: 'The degrees of comparison',
  body: `<p>“Peter is tall,” “Peter is taller than Paul,” and “Peter is the tallest of the brothers” say the same quality of Peter in three degrees. This accident of the noun is called <strong>comparison</strong> (<i>comparātiō</i>). The <strong>positive</strong> degree signifies the quality simply: “tall,” <i>altus</i>. The <strong>comparative</strong> signifies more of the quality in one thing than in another: “taller,” <i>altior</i>. The <strong>superlative</strong> signifies the most of the quality among several things, or a very high degree of it: “tallest,” <i>altissimus</i>. Latin <i>altissimus</i> can also mean simply “very tall,” without comparison to others.</p>
<p>Donatus gives the same three degrees: <i>positivus, ut doctus; comparativus, ut doctior; superlativus, ut doctissimus</i>, that is, the positive, as “learned”; the comparative, as “more learned”; and the superlative, as “most learned” (<i>Ars minor</i>).</p>`,
  src: `Donatus, <i>Ars minor</i>, on comparison (the Latin).`,
  qpTodo: `The degrees of comparison: which degree is a given form (<i>doctior</i>, “tallest,” <i>altus</i>), and what it signifies.` },

{ id: 'forming',
  title: 'How the degrees are formed',
  body: `<p>In Latin the comparative is usually formed by adding <i>-ior</i> to the stem of the adjective, and the superlative by adding <i>-issimus</i>: <i>doctus</i>, <i>doctior</i>, <i>doctissimus</i>; <i>fortis</i> (“brave”), <i>fortior</i>, <i>fortissimus</i>. Adjectives ending in <i>-er</i> form the superlative in <i>-rimus</i>: <i>pulcher</i> (“beautiful”), <i>pulchrior</i>, <i>pulcherrimus</i>.</p>
<p>In English short adjectives add <i>-er</i> and <i>-est</i>: “tall,” “taller,” “tallest”; “kind,” “kinder,” “kindest.” Longer adjectives usually form the degrees with the adverbs “more” and “most”: “beautiful,” “more beautiful,” “most beautiful.” Latin uses the same method with some adjectives, especially those ending in <i>-us</i> after a vowel: <i>idōneus</i> (“suitable”), <i>magis idōneus</i>, <i>maximē idōneus</i>.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 123–128, in paraphrase.` },

{ id: 'irregular',
  title: 'Irregular comparison',
  body: `<p>Some of the most common adjectives are compared irregularly, by forms taken from different words. In Latin:<br><i>bonus</i>, <i>melior</i>, <i>optimus</i> (“good,” “better,” “best”);<br><i>malus</i>, <i>peior</i>, <i>pessimus</i> (“bad,” “worse,” “worst”);<br><i>magnus</i>, <i>maior</i>, <i>maximus</i> (“great,” “greater,” “greatest”);<br><i>parvus</i>, <i>minor</i>, <i>minimus</i> (“small,” “smaller,” “smallest”).</p>
<p>English has the same irregularities in its most common adjectives: “good,” “better,” “best”; “bad,” “worse,” “worst”; “much,” “more,” “most”; “little,” “less,” “least.” It is commonly observed that the words used most often are the most likely to keep irregular forms, because they are learned by hearing rather than formed by rule. Many English words come from these Latin forms: “ameliorate,” “optimist,” “pessimist,” “major,” “maximum,” “minor,” and “minimum.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> § 129, in paraphrase.`,
  qpTodo: `Irregular comparison: which form completes a series (<i>bonus</i>, <i>melior</i>, …; “bad,” “worse,” …), and which English word is derived from a given Latin form.` },

{ id: 'which-compared',
  title: 'Which nouns admit comparison?',
  body: `<p>One man can be more learned than another, but one horse is not more a horse than another. So not every noun can be compared. A substantive such as <i>equus</i> (“horse”) cannot be compared, whereas adjectives such as <i>doctus</i> (“learned”), <i>altus</i> (“high”), and <i>magnus</i> (“great”) can, because they signify something that can be more or less. Donatus says that only appellative nouns that signify quality or quantity are compared (<i>Ars minor</i>).</p>
<p>Some adjectives also do not admit comparison, because what they signify does not admit more or less: “dead,” “square,” “unique,” Latin <i>mortuus</i> (“dead”). We can say “more nearly square,” but careful writers avoid “more unique.” So comparison is an accident that belongs to the noun because of what the noun signifies, and we will see that the other accidents of the noun, gender, number, and case, belong to it for reasons of the same kind.</p>`,
  src: `Donatus, <i>Ars minor</i>, on comparison, in paraphrase.` }

  ]
};
