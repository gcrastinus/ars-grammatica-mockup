/* I.4 Categorematic and Syncategorematic Words [i.syncategorematic]
   Plan (ITEM-LIST.md): 8 panels, 2 question points, each with exactly 3 variants.
   Live material drawn on: DECKS.suppos, panel "Where grammar hands over" (the syncategorematic words named, with
   Latin omnis, nullus, aliquis, si). The rest is built from the sources, as ITEM-LIST.md says ("little" to reuse). */
window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks['i.syncategorematic'] = {
  id: 'i.syncategorematic',
  title: 'Categorematic and Syncategorematic Words',
  sub: 'Words that signify by themselves, and words that signify only with others',
  sources: `Priscian, <i>Institutiones grammaticae</i> II.15; William of Sherwood, <i>Syncategoremata</i>.`,
  panels: [

{ id: 'by-themselves',
  title: 'Words that signify by themselves',
  body: `<p>We have seen that a word signifies by imposition and that some words consignify, that is, signify something along with their principal meaning. The tradition also divides words according to whether they signify by themselves or only together with other words. A <strong>categorematic</strong> word is a word that signifies something by itself, and so can stand as the subject or the predicate of a sentence, that is, as what the sentence is about or as what is said of it. The name comes from the Greek <i>katēgorēma</i>, “what is said of something,” because such words can be said of things.</p>
<p>So “man,” “horse,” “white,” and “runs” are categorematic words. Each of them, heard by itself, brings something definite to mind: a kind of animal, a color, an action. In “The horse is white,” “horse” is what the sentence is about and “white” is what is said of it; both are categorematic.</p>`,
  src: `William of Sherwood, <i>Syncategoremata</i>, introduction, in paraphrase.` },

{ id: 'with-others',
  title: 'Words that signify only with others',
  body: `<p>A <strong>syncategorematic</strong> word is a word that does not signify something definite by itself, but signifies only together with other words, by determining how they are to be taken. The name adds the Greek <i>syn</i>, “with,” to the same root: a syncategorematic word signifies only with what is said. Examples are “every,” “no,” “some,” “not,” “only,” “except,” “if,” “and,” and “or,” and in Latin <i>omnis</i> (“every”), <i>nullus</i> (“no”), <i>non</i> (“not”), <i>tantum</i> (“only”), and <i>si</i> (“if”).</p>
<p>If we hear the word “every” by itself, we ask, “Every what?” The word does not bring a thing to mind as “horse” does. But in “Every horse runs,” it tells us how “horse” is to be taken: not this horse or some horse, but each and all. The meaning of a syncategorematic word lies in what it does to the other words of the sentence.</p>`,
  src: `William of Sherwood, <i>Syncategoremata</i>, in paraphrase.` },

{ id: 'priscian',
  title: 'Priscian and the dialecticians',
  body: `<p>The distinction is older than the medieval logicians. Priscian reports that the dialecticians (that is, the teachers of logic) counted only two parts of speech, the noun and the verb, because these two alone, joined together, make a complete sentence; the other words they called <i>syncategoremata</i>, that is, “consignifying” words (<i>consignificantia</i>), because they signify only together with the noun and the verb (<i>Institutiones grammaticae</i> II.15, in paraphrase).</p>
<p>Priscian himself, as a grammarian, counts eight parts of speech, and we will study them in Section III. But he grants the point that the dialecticians make: a noun and a verb, such as “horse runs” or Latin <i>equus currit</i>, can make a sentence, while words such as “and,” “if,” or “every” cannot make a sentence by themselves. Here “consignify” has a second sense in the tradition. Earlier in this section it meant that a word signifies something along with its principal meaning; here it means that a word signifies only along with other words.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II.15, in paraphrase (no published English translation).` },

{ id: 'what-they-do',
  title: 'What syncategorematic words do',
  body: `<p>Syncategorematic words do not add a new thing to what is said; they determine how the things already named are to be taken, and so they can change the whole meaning of a sentence. Compare these sentences, which share the same categorematic words, “horse” and “runs”:</p>
<p>“Every horse runs.”<br>“Some horse runs.”<br>“No horse runs.”<br>“Only a horse runs.”</p>
<p>The first says something of all horses, the second of at least one, the third of none, and the fourth says that nothing other than a horse runs. The same is true in Latin: <i>omnis equus currit</i> (“every horse runs”), <i>aliquis equus currit</i> (“some horse runs”), and <i>nullus equus currit</i> (“no horse runs”). Because the categorematic words are the same in each sentence, the whole difference in meaning comes from the syncategorematic words.</p>`,
  src: `William of Sherwood, <i>Syncategoremata</i>, in paraphrase.`,
  qp: { id: 'q-syncat', variants: [
    { prompt: `In “Every horse runs,” which word is syncategorematic?`,
      options: [`“Horse”`, `“Every”`, `“Runs”`, `None of them`],
      answer: 1,
      explain: `“Every” does not bring a thing to mind by itself; it determines how “horse” is to be taken, namely as each and all horses. “Horse” and “runs” signify something by themselves, and so they are categorematic.` },
    { prompt: `Which of these words is categorematic?`,
      options: [`“Not”`, `“If”`, `“Only”`, `“White”`],
      answer: 3,
      explain: `“White” signifies something definite by itself, a color, and it can be said of something, as in “The horse is white.” “Not,” “if,” and “only” signify only together with other words, by determining how they are taken.` },
    { prompt: `“Every horse runs” and “No horse runs” have the same categorematic words. Why do they mean such different things?`,
      options: [`Because the syncategorematic words “every” and “no” determine how “horse” is taken`, `Because “horse” has a different signification in each sentence`, `Because “runs” consignifies a different time in each sentence`, `Because one sentence is in English and the other is not`],
      answer: 0,
      explain: `The categorematic words keep the same signification in both sentences. The difference comes entirely from “every” and “no,” which determine whether what is said is said of all horses or of none.` }
  ]}},

{ id: 'kinds',
  title: 'The kinds of syncategorematic words',
  body: `<p>The medieval logicians wrote whole treatises on these words. One of the best known is the <i>Syncategoremata</i> of William of Sherwood, an English logician of the thirteenth century, who examines words such as “every,” “whole,” “no,” “nothing,” “only,” “except,” “not,” “if,” “unless,” “and,” and “or,” and explains how each of them affects the meaning and the truth of the sentences in which it appears.</p>
<p>These words can be grouped by what they do. Some signify how much of something is meant, as “every,” “some,” and “no” do (Latin <i>omnis</i>, <i>aliquis</i>, <i>nullus</i>). Some exclude or except, as “only” and “except” do (Latin <i>tantum</i>, <i>praeter</i>). Some deny, as “not” does (Latin <i>non</i>). And some join statements together, as “if,” “and,” and “or” do (Latin <i>si</i>, <i>et</i>, <i>vel</i>).</p>`,
  src: `William of Sherwood, <i>Syncategoremata</i>, in paraphrase.` },

{ id: 'not-parts',
  title: 'Not the same division as the parts of speech',
  body: `<p>The division into categorematic and syncategorematic words does not coincide with the division into parts of speech, which we will study in Section III. The two divisions answer different questions. The parts of speech are distinguished by the way in which each word signifies and by how it is arranged with other words; the division into categorematic and syncategorematic asks only whether a word signifies something definite by itself.</p>
<p>So syncategorematic words belong to several parts of speech. “Every” and “no” are adjectives, since they go with nouns, as in “every horse” and “no horse”; “not” and “only” are adverbs; “if” and “and” are conjunctions; and “except” is a preposition in “everyone except John.” In the same way, categorematic words include nouns (“horse”), adjectives (“white”), and verbs (“runs”). One word can therefore be described under both divisions: “every” is an adjective and a syncategorematic word.</p>`,
  src: `Priscian, <i>Institutiones grammaticae</i> II, in paraphrase.`,
  qp: { id: 'q-not-parts', variants: [
    { prompt: `“Every” is an adjective. Is it categorematic or syncategorematic?`,
      options: [`Categorematic, because every adjective is categorematic`, `Neither, because only nouns and verbs belong to this division`, `Syncategorematic, because it signifies only by determining how another word is taken`, `Categorematic, because it can be written by itself`],
      answer: 2,
      explain: `The two divisions answer different questions. As a part of speech, “every” is an adjective; as a sign, it is syncategorematic, because it does not signify a thing by itself but determines how the word it goes with is taken.` },
    { prompt: `Why does the division into categorematic and syncategorematic words not coincide with the parts of speech?`,
      options: [`Because it asks a different question: whether a word signifies something definite by itself`, `Because it applies only to Latin`, `Because syncategorematic words are not words at all`, `Because the parts of speech were invented later`],
      answer: 0,
      explain: `The parts of speech are distinguished by the way each word signifies and is arranged with others. The other division asks only whether a word signifies something definite by itself, and so syncategorematic words are found among adjectives, adverbs, conjunctions, and prepositions.` },
    { prompt: `Which pair lists two syncategorematic words that belong to different parts of speech?`,
      options: [`“Horse” and “white”`, `“Runs” and “stone”`, `“Horse” and “every”`, `“Not” and “if”`],
      answer: 3,
      explain: `“Not” is an adverb and “if” is a conjunction, but both signify only together with other words, so both are syncategorematic. “Horse,” “white,” “runs,” and “stone” signify something by themselves.` }
  ]}},

{ id: 'why-grammar',
  title: 'Why does grammar need this distinction?',
  body: `<p>Because syncategorematic words determine how the other words are taken, a careful reader must notice them, and a careful writer must place them exactly. A small change in such a word, or in its position, can change the whole meaning of a sentence. For example, “Man shall not live by bread alone” (Matthew 4:4, King James Version) does not say that man does not live by bread; the word “alone” (that is, “only”) makes the sentence deny only that bread is enough.</p>
<p>The position of these words matters as well. “Not every student passed” says that at least one student failed. “Every student did not pass” can mean that no student passed, or it can mean, as many speakers intend it, that not every student passed; so the place of “not” leaves the second sentence open to two readings. Likewise, “She only lent him the book” and “She lent only him the book” use the same words, but “only” limits a different word in each. We will see, when we come to ambiguity later in this section, that such words are one source of sentences with two meanings.</p>`,
  src: `Matthew 4:4 (King James Version).` },

{ id: 'logic',
  title: 'Where grammar hands over to logic',
  body: `<p>The syncategorematic words that signify how much is meant (“every,” “some,” “no”) and the word that denies (“not”) are the words on which the truth of a statement most often depends. “Every horse is white” is false if a single horse is black, while “Some horse is white” is true if a single horse is white. For that reason logic studies these words closely, and the art of logic is built in large part on them.</p>
<p>Grammar names these words and shows how they are placed and arranged; logic asks how they determine the truth of a statement and what follows from it. We will return to them in Section VIII, where grammar and logic meet, and the full logical treatment belongs to Ars Syllogistica, the companion course on logic.</p>`,
  src: `William of Sherwood, <i>Syncategoremata</i>, in paraphrase.` }

  ]
};
