/* III.4 Homonymy and Synonymy [iii.homonymy]
   Plan (ITEM-LIST.md): 7 panels, 2 question points. One panel points back to I.6.
   Live material drawn on: none (ITEM-LIST.md: "Reuse: none"); built from Donatus and Aristotle, Categories 1. */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['iii.homonymy'] = {
  id: 'iii.homonymy',
  title: 'Homonymy and Synonymy',
  sub: 'One word with many meanings, and many words with one meaning',
  sources: `Donatus, <i>Ars maior</i> II; Aristotle, <i>Categories</i> 1.`,
  recitation: [
    `The same sound can be imposed more than once with different meanings, and a word of this kind is called a <strong>homonym</strong>, from the Greek <i>homōnymos</i>, “having the same name.”`,
    `Donatus names, among the kinds of noun, the homonyms, which signify many things by one name.`,
    `Different words that signify the same thing are called <strong>synonyms</strong>.`,
    `Donatus names this case as well: nouns that are many in name but signify one thing, which he calls <strong>synonyms</strong> or <strong>polyonyms</strong> (Greek <i>synōnymos</i>, “named together,” and <i>polyōnymos</i>, “many-named”).`,
    `English is especially rich in synonyms because it has taken many words from French and Latin beside its native ones.`,
    `Synonyms signify the same thing but rarely signify it in exactly the same way: they often differ in tone, in the kind of speech to which they belong, or in a shade of meaning.`,
    `So the grammarian, in explaining a text, asks not only what a word means but why the author chose this word rather than its synonym, and a reader who treats synonyms as interchangeable will miss much of what an author has chosen.`,
    `The terms “homonymous” and “synonymous” were first used in Aristotle’s <i>Categories</i>, and Aristotle uses them of things, not of words.`,
    `Things are homonymous, he says, when they have only a name in common and the account of what each is differs; things are synonymous when they have both the name and the account in common.`,
    `So for Aristotle two things of one kind called by the same name are synonymous, whereas for the grammarians synonyms are different words with the same meaning: the grammarians took the terms from the logicians but applied them to words.`,
    `Aristotle names a third relation: things are <strong>paronymous</strong> (Greek <i>parōnymos</i>, “named alongside”) when they take their name from something else with a change of ending.`,
    `Paronymy is closely related to species: the derived word is formed from the primitive by a change of ending, and its meaning depends on the meaning of the primitive.`,
    `The logician considers the relation of the things named, and the grammarian the relation of the words.`,
    `Modern grammars distinguish kinds of homonyms by sound and spelling: <strong>homophones</strong> are words that sound alike but may be spelled differently, and <strong>homographs</strong> are words that are spelled alike but may sound different.`,
    `A homophone is ambiguous only in speech, and a homograph with two pronunciations only in writing, because of the imperfect fit between English spelling and sound.`,
    `Ambiguity in a single word is homonymy in use, whereas synonymy does not cause ambiguity, though it raises the question why one word was chosen over another.`,
    `A homonym is not ambiguous in every sentence, because in most sentences the context decides which meaning is intended.`,
    `The grammarian’s task, in reading and explaining, is to recognize the homonym and show from the context which meaning the author intended, and where the context does not decide, to say that the passage is ambiguous.`
  ],
  panels: [

{ id: 'homonyms',
  title: 'One word with many meanings',
  body: `<p>English has many words with more than one meaning: “bear” means an animal and to carry; “pitcher” means a jug and a player who throws the ball; “mint” means a place where coins are made and an herb. We saw in Section I that a word is imposed to signify, and that the same sound can be imposed more than once with different meanings. A word of this kind is called a <strong>homonym</strong>, from the Greek <i>homōnymos</i>, “having the same name.”</p>
<p>Donatus, among the kinds of noun, names those that signify many things by one name: “some are homonyms, which signify many things by one name” (<i>sunt alia homonyma, quae una appellatione plura significant</i>; <i>Ars maior</i> II). His examples include <i>aciēs</i>, which we met in Section I and which means a line of battle, the sharp edge of a blade, and the keenness of the eye; and <i>nepōs</i>, which means a grandson and also a spendthrift.</p>`,
  src: `Donatus, <i>Ars maior</i> II, on the noun (the Latin; the English in substance).` },

{ id: 'synonyms',
  title: 'Many words with one meaning',
  body: `<p>The opposite case is just as common. “Begin” and “commence,” “buy” and “purchase,” and “freedom” and “liberty” are different words that signify the same thing. Such words are called <strong>synonyms</strong>. Donatus names this case as well: nouns that are many in name but signify one thing, which he calls <strong>synonyms</strong> or <strong>polyonyms</strong> (Greek <i>synōnymos</i>, “named together,” and <i>polyōnymos</i>, “many-named”). His examples are <i>terra</i>, <i>humus</i>, and <i>tellūs</i>, all meaning “earth,” and <i>ēnsis</i>, <i>mucrō</i>, and <i>gladius</i>, all meaning “sword” (<i>Ars maior</i> II).</p>
<p>English is especially rich in synonyms because it has taken many words from French and Latin beside its native ones, so that the native “kingly” stands beside the French “royal” and the Latin “regal.”</p>`,
  src: `Donatus, <i>Ars maior</i> II, on the noun, in paraphrase.`,
  qp: { id: 'q-synonyms', variants: [
    { prompt: `Latin <i>mālus</i> means both “mast” and “apple tree.” What is it?`,
      options: [`A homonym`, `A synonym`, `A word without signification`, `A compound`],
      answer: 0,
      explain: `<i>Mālus</i> is one word with two meanings, the mast of a ship and the apple tree, so it is a homonym. Synonyms are the opposite case: many words with one meaning.` },
    { prompt: `Latin <i>metus</i> and <i>formīdō</i> both mean “fear.” What are they?`,
      options: [`Homonyms`, `Two meanings of one word`, `Synonyms`, `One word in two cases`],
      answer: 2,
      explain: `<i>Metus</i> and <i>formīdō</i> are two different words that signify the same thing, so they are synonyms, as Donatus’s <i>terra</i>, <i>humus</i>, and <i>tellūs</i> are. They are not two forms of one word, since they come from different stems.` },
    { prompt: `“Ask” and “inquire” signify the same thing. Why are they called synonyms and not homonyms?`,
      options: [`Because they are one word with two meanings`, `Because they sound alike`, `Because one is formed from the other`, `Because they are two words with one meaning`],
      answer: 3,
      explain: `A synonym is one of many words that signify the same thing, and “ask” and “inquire” are two words with one meaning. A homonym is the opposite: one word with more than one meaning. The two words neither sound alike nor come from each other.` }
  ]} },

{ id: 'exact-synonyms',
  title: 'Are synonyms ever exactly the same?',
  body: `<p>Synonyms signify the same thing, but they rarely signify it in exactly the same way. They often differ in tone, in the kind of speech to which they belong, or in a shade of meaning. “Begin” is the ordinary word, and “commence” is formal; “kingly,” “royal,” and “regal” are not used in all the same phrases, since we say “royal family” but not “kingly family.” Latin <i>ēnsis</i> belongs to poetry and <i>gladius</i> to ordinary prose.</p>
<p>So the grammarian, in explaining a text, asks not only what a word means but why the author chose this word rather than its synonym. Quintilian counts the choice of words among the first concerns of style, and a reader who treats synonyms as interchangeable will miss much of what an author has chosen.</p>`,
  src: `Quintilian, <i>Institutio oratoria</i> VIII.3, in paraphrase.` },

{ id: 'aristotle',
  title: 'Aristotle: homonymous and synonymous things',
  body: `<p>We may point to a statue and say “That is Caesar,” though only the living man was Caesar in fact; but when we call both a horse and an eagle “animals,” both are animals in the same sense. In the first case two things share only a name; in the second they share the name and what it means. The terms “homonymous” and “synonymous” were first used for this difference, in the opening chapter of Aristotle’s <i>Categories</i>, and Aristotle uses them of things, not of words. Things are homonymous, he says, when they have only a name in common and the account of what each is differs; things are synonymous when they have both the name and the account in common (<i>Categories</i> 1, 1a1–12).</p>
<p>His example of homonymous things is a man and a picture of a man, both of which could be called “animal” in Greek, though only the man is an animal in fact. His example of synonymous things is a man and an ox, which are both called “animal” and both are animals in the same sense. So for Aristotle a man and an ox are synonymous, because they share the name “animal” and its meaning, whereas for the grammarians “synonyms” are different words with the same meaning. The grammarians took the terms from the logicians but applied them to words.</p>`,
  src: `Aristotle, <i>Categories</i> 1, 1a1–12 (Edghill for reference), in paraphrase.` },

{ id: 'paronyms',
  title: 'Paronyms',
  body: `<p>“Musician” is named from “music,” and “lawyer” from “law”: in each pair one word takes its name from another with a change of ending. Aristotle names this third relation in the same chapter of the <i>Categories</i>. Things are <strong>paronymous</strong> (Greek <i>parōnymos</i>, “named alongside”) when they take their name from something else with a change of ending: the grammarian is named from grammar, and the brave man from bravery (<i>Categories</i> 1, 1a12–15).</p>
<p>So paronymy is closely related to what we called species: the derived word is formed from the primitive by a change of ending, and its meaning depends on the meaning of the primitive. Latin <i>sapiēns</i> (“wise”) and <i>sapientia</i> (“wisdom”) are such a pair. The logician considers the relation of the things named; the grammarian considers the relation of the words.</p>`,
  src: `Aristotle, <i>Categories</i> 1, 1a12–15, in paraphrase.` },

{ id: 'homophones',
  title: 'Same sound, same spelling',
  body: `<p>“Pale” and “pail” sound alike but are spelled differently, whereas “tear” (to rip) and “tear” (from the eye) are spelled alike but sound different. Modern grammars therefore distinguish kinds of homonyms by sound and spelling. <strong>Homophones</strong> are words that sound alike but may be spelled differently, as also “there,” “their,” and “they’re.” <strong>Homographs</strong> are words that are spelled alike but may sound different, as also “bow” (of a ship) and “bow” (for arrows).</p>
<p>The distinction matters because writing and speech can produce different ambiguities. A homophone is ambiguous only in speech, since writing distinguishes “pale” from “pail”; a homograph with two pronunciations is ambiguous only in writing, since speech distinguishes the two words “tear.” This follows from what we saw in Section II about the imperfect fit between English spelling and sound.</p>`,
  src: `Standard English grammars, in paraphrase.`,
  qp: { id: 'q-homophones', variants: [
    { prompt: `“Flea” and “flee” sound alike but are spelled differently. What are they called?`,
      options: [`Homographs`, `Homophones`, `Synonyms`, `Paronyms`],
      answer: 1,
      explain: `Words that sound alike but are spelled differently are homophones. Homographs are spelled alike but may sound different, and synonyms are different words with one meaning.` },
    { prompt: `Is the pair “horse” and “hoarse” ambiguous in speech or in writing?`,
      options: [`In writing only`, `In speech only`, `In both speech and writing`, `In neither`],
      answer: 1,
      explain: `“Horse” and “hoarse” are homophones: they sound alike, so a hearer may take one for the other, but writing distinguishes them by their spelling. So the pair is ambiguous only in speech.` },
    { prompt: `“Minute” (sixty seconds) and “minute” (very small) are spelled alike but pronounced differently. Where can the word be ambiguous?`,
      options: [`In speech only`, `In both speech and writing`, `In neither`, `In writing only`],
      answer: 3,
      explain: `The two words are homographs with different pronunciations. Speech distinguishes them, because “MIN-it” and “my-NOOT” sound different, but writing does not, so the word is ambiguous only in writing.` }
  ]} },

{ id: 'ambiguity',
  title: 'Homonymy and ambiguity',
  body: `<p>“The pitcher was on the table” is ambiguous because “pitcher” is a homonym. Ambiguity can lie in a single word or in the arrangement of words, as we saw in Section I, and ambiguity in a single word is homonymy in use. Synonymy, by contrast, does not cause ambiguity, though it can cause the question why one word was chosen over another.</p>
<p>A homonym is not ambiguous in every sentence. In most sentences the context decides which meaning is intended, as in “She poured water from the pitcher” or “The pitcher threw the ball.” The grammarian’s task, in reading and explaining, is to recognize the homonym and to show from the context which meaning the author intended; and where the context does not decide, to say that the passage is ambiguous.</p>`,
  src: `Aristotle, <i>Sophistical Refutations</i> 4, in paraphrase.` }

  ]
};
