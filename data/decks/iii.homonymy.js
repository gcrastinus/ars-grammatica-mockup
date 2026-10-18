/* III.4 Homonymy and Synonymy [iii.homonymy]
   Plan (ITEM-LIST.md): 7 panels, 2 question points (placeholders: qpTodo; to be written). One panel points back to I.6.
   Live material drawn on: none (ITEM-LIST.md: "Reuse: none"); built from Donatus and Aristotle, Categories 1. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.homonymy'] = {
  id: 'iii.homonymy',
  title: 'Homonymy and Synonymy',
  sub: 'One word with many meanings, and many words with one meaning',
  sources: `Donatus, <i>Ars maior</i> II; Aristotle, <i>Categories</i> 1.`,
  panels: [

{ id: 'homonyms',
  title: 'One word with many meanings',
  body: `<p>English has many words with more than one meaning: “bear” means an animal and to carry; “pitcher” means a jug and a player who throws the ball; “seal” means a sea animal and a stamp pressed into wax. We saw in Section I that a word is imposed to signify, and that the same sound can be imposed more than once with different meanings. A word of this kind is called a <strong>homonym</strong>, from the Greek <i>homōnymos</i>, “having the same name.”</p>
<p>Donatus, among the kinds of noun, names those that signify many things by one name: “some are homonyms, which signify many things by one name” (<i>sunt alia homonyma, quae una appellatione plura significant</i>; <i>Ars maior</i> II). His examples include <i>aciēs</i>, which we met in Section I and which means a line of battle, the sharp edge of a blade, and the keenness of the eye; and <i>nepōs</i>, which means a grandson and also a spendthrift.</p>`,
  src: `Donatus, <i>Ars maior</i> II, on the noun (the Latin; the English in substance).` },

{ id: 'synonyms',
  title: 'Many words with one meaning',
  body: `<p>The opposite case is just as common. “Begin” and “commence,” “buy” and “purchase,” and “freedom” and “liberty” are different words that signify the same thing. Such words are called <strong>synonyms</strong>. Donatus names this case as well: nouns that are many in name but signify one thing, which he calls <strong>synonyms</strong> or <strong>polyonyms</strong> (Greek <i>synōnymos</i>, “named together,” and <i>polyōnymos</i>, “many-named”). His examples are <i>terra</i>, <i>humus</i>, and <i>tellūs</i>, all meaning “earth,” and <i>ēnsis</i>, <i>mucrō</i>, and <i>gladius</i>, all meaning “sword” (<i>Ars maior</i> II).</p>
<p>English is especially rich in synonyms because it has taken many words from French and Latin beside its native ones, so that the native “kingly” stands beside the French “royal” and the Latin “regal.”</p>`,
  src: `Donatus, <i>Ars maior</i> II, on the noun, in paraphrase.`,
  qpTodo: `Homonym or synonym: given a pair or group of words (<i>aciēs</i>; <i>ēnsis</i>, <i>gladius</i>; “bank”; “begin,” “commence”), say which it is and why.` },

{ id: 'exact-synonyms',
  title: 'Are synonyms ever exactly the same?',
  body: `<p>Synonyms signify the same thing, but they rarely signify it in exactly the same way. They often differ in tone, in the kind of speech to which they belong, or in a shade of meaning. “Begin” is the ordinary word, and “commence” is formal; “kingly,” “royal,” and “regal” are not used in all the same phrases, since we say “royal family” but not “kingly family.” Latin <i>ēnsis</i> belongs to poetry and <i>gladius</i> to ordinary prose.</p>
<p>So the grammarian, in explaining a text, asks not only what a word means but why the author chose this word rather than its synonym. Quintilian counts the choice of words among the first concerns of style, and a reader who treats synonyms as interchangeable will miss much of what an author has chosen.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.3, in paraphrase.` },

{ id: 'aristotle',
  title: 'Aristotle: homonymous and synonymous things',
  body: `<p>The terms “homonymous” and “synonymous” come from the opening chapter of Aristotle’s <i>Categories</i>, but Aristotle uses them of things, not of words. Things are homonymous, he says, when they have only a name in common and the account of what each is differs; things are synonymous when they have both the name and the account in common (<i>Categories</i> 1, 1a1–12).</p>
<p>His example of homonymous things is a man and a picture of a man, both of which could be called “animal” in Greek, though only the man is an animal in fact. His example of synonymous things is a man and an ox, which are both called “animal” and both are animals in the same sense. So for Aristotle a man and an ox are synonymous, because they share the name “animal” and its meaning, whereas for the grammarians “synonyms” are different words with the same meaning. The grammarians took the terms from the logicians but applied them to words.</p>`,
  src: `Aristotle, <i>Categories</i> 1, 1a1–12 (Edghill for reference), in paraphrase.` },

{ id: 'paronyms',
  title: 'Paronyms',
  body: `<p>“Musician” is named from “music,” and “painter” from “paint”: in each pair one word takes its name from another with a change of ending. Aristotle names this third relation in the same chapter of the <i>Categories</i>. Things are <strong>paronymous</strong> (Greek <i>parōnymos</i>, “named alongside”) when they take their name from something else with a change of ending: the grammarian is named from grammar, and the brave man from bravery (<i>Categories</i> 1, 1a12–15).</p>
<p>So paronymy is closely related to what we called species: the derived word is formed from the primitive by a change of ending, and its meaning depends on the meaning of the primitive. Latin <i>sapiēns</i> (“wise”) and <i>sapientia</i> (“wisdom”) are such a pair. The logician considers the relation of the things named; the grammarian considers the relation of the words.</p>`,
  src: `Aristotle, <i>Categories</i> 1, 1a12–15, in paraphrase.` },

{ id: 'homophones',
  title: 'Same sound, same spelling',
  body: `<p>“Right,” “write,” and “rite” sound alike but are spelled differently, whereas “tear” (to rip) and “tear” (from the eye) are spelled alike but sound different. Modern grammars therefore distinguish kinds of homonyms by sound and spelling. <strong>Homophones</strong> are words that sound alike but may be spelled differently, as also “there,” “their,” and “they’re.” <strong>Homographs</strong> are words that are spelled alike but may sound different, as also “bow” (of a ship) and “bow” (for arrows).</p>
<p>The distinction matters because writing and speech can produce different ambiguities. A homophone is ambiguous only in speech, since writing distinguishes “write” from “right”; a homograph with two pronunciations is ambiguous only in writing, since speech distinguishes the two words “tear.” This follows from what we saw in Section II about the imperfect fit between English spelling and sound.</p>`,
  src: `Standard English grammars, in paraphrase.`,
  qpTodo: `Homophones and homographs: given a pair (“right” and “write”; “lead” and “lead”), which is it, and is the pair ambiguous in speech or in writing.` },

{ id: 'ambiguity',
  title: 'Homonymy and ambiguity',
  body: `<p>We saw in Section I that ambiguity can lie in a single word or in the arrangement of words. Ambiguity in a single word is homonymy in use: “The pitcher was on the table” is ambiguous because “pitcher” is a homonym. Synonymy, by contrast, does not cause ambiguity, though it can cause the question why one word was chosen over another.</p>
<p>A homonym is not ambiguous in every sentence. In most sentences the context decides which meaning is intended, as in “She poured water from the pitcher” or “The pitcher threw the ball.” The grammarian’s task, in reading and explaining, is to recognize the homonym and to show from the context which meaning the author intended; and where the context does not decide, to say that the passage is ambiguous.</p>`,
  src: `Aristotle, <i>Sophistical Refutations</i> 4, in paraphrase.` }

  ]
};
