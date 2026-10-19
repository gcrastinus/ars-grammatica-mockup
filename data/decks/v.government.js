/* V.3 Government (regimen) [v.government]
   Plan (ITEM-LIST.md): 8 panels, 5 question points, 2 of them short analysis questions (placeholders: qpTodo; to be written).
   Live material drawn on: DECKS.govern (government, in with two cases, government in English). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['v.government'] = {
  id: 'v.government',
  title: 'Government (<i>regimen</i>)',
  sub: 'How a verb, a preposition, or a noun requires a case',
  sources: `Priscian, <i>Institutiones grammaticae</i> XVIII; Peter Helias, <i>Summa super Priscianum</i>; Allen and Greenough, <i>New Latin Grammar</i>.`,
  panels: [

{ id: 'what-government',
  title: 'What is government?',
  body: `<p>We have seen that in agreement two words share an accident. In <strong>government</strong> (Latin <i>regimen</i>, “ruling”) one word requires another word to be in a particular case, which the first word does not itself have. The verb <i>dūcit</i> (“he leads”) has no case, but it requires its object to be in the accusative: <i>legiōnem dūcit</i>, “he leads the legion.” So the verb is said to <strong>govern</strong> the accusative.</p>
<p>The grammarians of the twelfth century, especially Peter Helias in his commentary on Priscian, made government one of the principal ideas of syntax. A word governs another, in their account, when it requires that word in a certain form in order to complete the construction (<i>Summa super Priscianum</i>). We have already seen the clearest case of government with the preposition, which governs a particular case in its noun.</p>`,
  src: `Peter Helias, <i>Summa super Priscianum</i>, in paraphrase; Priscian, <i>Institutiones grammaticae</i> XVIII.` },

{ id: 'accusative',
  title: 'Verbs that govern the accusative',
  body: `<p>When we say “She paints the fence,” the action of painting falls on the fence, and the sentence would be incomplete without it. Most Latin transitive verbs govern the accusative of the <strong>direct object</strong>, the person or thing on which the action falls: <i>mūrum aedificat</i>, “he builds the wall”; <i>carmen canit</i>, “he sings a song”; <i>urbem cēpērunt</i>, “they captured the city.” We saw in Section III that a verb that takes a direct object is called transitive, because its action passes over to the object.</p>
<p>English shows the same government by the position of the object after the verb, and in pronouns by the objective case: “He met her,” not “He met she.” Some Latin verbs govern two accusatives, one of the person and one of the thing: <i>puerōs grammaticam docet</i>, “he teaches the boys grammar.” English “teach” takes two objects in the same way.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 386–396.` },

{ id: 'other-cases',
  title: 'Verbs that govern other cases',
  body: `<p>The English verbs “trust,” “obey,” and “use” all take a direct object, but the Latin verbs with the same meanings do not govern the accusative. Some Latin verbs govern a case other than the accusative, and they must be learned with their case:</p>
<p>the <strong>dative</strong>, with many verbs of favoring, helping, obeying, trusting, and their opposites: <i>tibi crēdō</i>, “I trust you”; <i>lēgibus pāret</i>, “he obeys the laws”; <i>hostibus nocet</i>, “he harms the enemy”;<br>the <strong>genitive</strong>, with some verbs of remembering and forgetting: <i>amīcī meminit</i>, “he remembers his friend”;<br>the <strong>ablative</strong>, with five deponent verbs and their compounds: <i>ūtor</i> (“I use”), <i>fruor</i> (“I enjoy”), <i>fungor</i> (“I perform”), <i>potior</i> (“I gain possession of”), and <i>vescor</i> (“I feed on”): <i>gladiō ūtitur</i>, “he uses a sword.”</p>
<p>So the case that a verb governs is a fact of each language, and a student who translates word for word will often choose the wrong case. The dictionary gives the case that each such verb governs.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 350, 367, 410.`,
  qpTodo: `Verbs and their cases: which case does a given Latin verb govern (<i>crēdō</i>, <i>pāreō</i>, <i>meminī</i>, <i>ūtor</i>), and which form of the noun completes it.` },

{ id: 'prepositions',
  title: 'Prepositions and government',
  body: `<p>We saw in Section III that each Latin preposition governs a particular case: <i>ad</i>, <i>per</i>, and <i>post</i> the accusative; <i>ab</i>, <i>cum</i>, and <i>ex</i> the ablative. We also saw that <i>in</i> and <i>sub</i> govern either case with a difference of meaning: <i>in castra</i>, “into the camp” (motion toward), and <i>in castrīs</i>, “in the camp” (rest in a place).</p>
<p>The government of a preposition is the clearest example of what government means, because the preposition has no case of its own and exists only to relate its noun to another word. The case it governs is part of what it signifies: <i>in</i> with the accusative signifies motion into, and <i>in</i> with the ablative signifies position in. English shows the same distinction with two different prepositions, “into” and “in.”</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 220–221.`,
  qpTodo: `Prepositions and their cases: which case does a given preposition govern in a given phrase, and what does the case add to its meaning (<i>in urbem</i>, <i>in urbe</i>, <i>cum amīcō</i>).` },

{ id: 'nouns-adjectives',
  title: 'Nouns and adjectives that govern',
  body: `<p>We say “love of country,” “like his father,” and “full of water”: a noun or an adjective, like a verb, can require another word to complete its meaning. Nouns and adjectives therefore also govern cases. A noun governs the genitive of another noun that completes or limits its meaning: <i>amor patriae</i>, “love of country”; <i>liber puerī</i>, “the boy’s book.” Some adjectives govern the dative, especially adjectives of likeness, nearness, and fitness: <i>similis patrī</i>, “like his father”; <i>amīcus Rōmānīs</i>, “friendly to the Romans.” Others govern the genitive, especially adjectives of desire, knowledge, and fullness: <i>cupidus glōriae</i>, “eager for glory”; <i>plēnus aquae</i>, “full of water.”</p>
<p>English expresses most of these relations with prepositions, “of,” “to,” and “for,” which are themselves governed by the noun or adjective: we say “fond of,” “similar to,” “eager for,” and the choice of preposition is fixed by usage. So in English, government has moved from the endings of the noun to the choice of the preposition.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i> §§ 343–349, 384–385.`,
  qpTodo: `Nouns and adjectives that govern: which case does a given adjective or noun govern (<i>similis</i>, <i>plēnus</i>, <i>amor</i>), and what English preposition corresponds to it.` },

{ id: 'english',
  title: 'Government in English',
  body: `<p>English shows government less plainly than Latin, because its nouns no longer show case. But government remains in two places. First, many English verbs, nouns, and adjectives require a particular preposition: we “listen to,” “wait for,” “depend on,” and are “afraid of,” and to change the preposition (“depend of”) is an error. Second, a preposition or verb governs the objective case of a pronoun: “for you and me,” “Give it to him and me,” “whom did you see?”</p>
<p>The common error “for you and I” is a failure of government, because “for” is a preposition and requires the objective case of both pronouns. Latin makes the same requirement visible in the ending: <i>prō tē et mē</i>, not <i>prō tē et ego</i>. So where English has lost its endings, government still exists, but its marks are fewer, and a speaker must know the rule even where the form does not show it.</p>`,
  src: `Standard English grammars, in paraphrase.`,
  qpTodo: `Analysis: in a given English sentence, which word governs the marked pronoun or preposition, and which form does it require (“between you and me,” “listen to,” “whom”).` },

{ id: 'governed-governing',
  title: 'The governing word and the governed',
  body: `<p>In every case of government there is a <strong>governing</strong> word and a <strong>governed</strong> word. In <i>legiōnem dūcit</i>, <i>dūcit</i> governs and <i>legiōnem</i> is governed; in <i>ad portum</i>, <i>ad</i> governs and <i>portum</i> is governed; in <i>perītus bellī</i> (“skilled in war”), <i>perītus</i> governs and <i>bellī</i> is governed. The governing word is the one whose meaning requires completion, and the governed word supplies it in the required form.</p>
<p>A sentence usually contains several relations of government at once. In <i>tabellārius epistulam ad rēgem fert</i>, “the courier carries the letter to the king,” <i>fert</i> governs <i>epistulam</i> in the accusative, and <i>ad</i> governs <i>rēgem</i> in the accusative. To analyze a sentence is in part to find each governing word and what it governs.</p>`,
  src: `Peter Helias, <i>Summa super Priscianum</i>; Allen and Greenough, <i>New Latin Grammar</i>, in paraphrase.` },

{ id: 'agreement-government',
  title: 'Agreement and government compared',
  body: `<p>Agreement and government are the two principal relations of form between words, and they differ in a clear way. In agreement the two words share the same accident: <i>aurīga strēnuus</i>, both masculine, singular, and nominative. In government one word requires in another an accident that it does not have itself: <i>dūcit</i> has no case, but it requires <i>legiōnem</i> in the accusative.</p>
<p>So in <i>fīdus servus portam claudit</i>, “the faithful slave closes the gate,” <i>fīdus</i> agrees with <i>servus</i>, <i>claudit</i> agrees with <i>servus</i> in person and number, and <i>claudit</i> governs <i>portam</i> in the accusative. Both relations rest on a deeper one, the relation of dependence: in each pair, one word depends on the other.</p>`,
  src: `Allen and Greenough, <i>New Latin Grammar</i>; Thomas of Erfurt, <i>Grammatica speculativa</i>, in paraphrase.`,
  qpTodo: `Analysis: in a given Latin sentence, name each relation of agreement and each of government, with the words involved.` }

  ]
};
