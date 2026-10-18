/* Samples for the typed-answer renderers in course.js. NOT part of the course.
   This file is not listed in data/exercises/index.js and must not be added to ARS.exerciseFiles.
   One item of each type drawn by runEx. Nothing here is a question in a real set. */
window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises['typed-samples'] = {
  id: 'typed-samples',
  kind: 'exercise',
  status: 'written',
  section: '',
  title: 'Typed-answer samples',
  instr: 'Samples for the renderers. Not part of the course.',
  items: [
    {
      id: 'smp-count', set: 'A', type: 'count',
      prompt: 'Type the number of syllables in “basket.”',
      answer: 2,
      explain: '“Basket” has two vowel sounds, one in “bas” and one in “ket,” so it has two syllables.'
    },
    {
      id: 'smp-form', set: 'A', type: 'form', macrons: false,
      prompt: 'Give the present infinitive of Latin <i>amō</i>. Macrons need not be typed.',
      answer: 'amāre',
      explain: '<i>Amō</i> is a verb of the first conjugation, so its present infinitive is <i>amāre</i>.'
    },
    {
      id: 'smp-divide', set: 'A', type: 'divide', macrons: false,
      prompt: 'Divide <i>poēta</i> into syllables, with a hyphen between the syllables. Macrons need not be typed.',
      answer: 'po-ē-ta',
      explain: 'The <i>o</i> and the <i>ē</i> of <i>poēta</i> are two vowels in two syllables, and the single consonant <i>t</i> goes with the following vowel, so the word is <i>po-ē-ta</i>.'
    },
    {
      id: 'smp-transform', set: 'A', type: 'transform',
      prompt: 'Rewrite the sentence so that the verb agrees with its subject: “The flock of birds are loud.”',
      accept: ['The flock of birds is loud.'],
      explain: 'The subject is “flock,” which is singular, so the verb is “is.” “Birds” is the object of the preposition “of” and does not govern the verb.'
    },
    {
      id: 'smp-identify', set: 'A', type: 'identify',
      prompt: '“The old bridge held.” Click the noun.',
      tokens: ['The', 'old', 'bridge', 'held.'],
      answer: 2,
      explain: '“Bridge” is the noun. “The” is an article, “old” is an adjective, and “held” is a verb.'
    },
    {
      id: 'smp-mark', set: 'A', type: 'mark',
      prompt: 'Mark every dependence in “The brave sailor sees the king.” The arrow runs from the word that depends to the word it depends on.',
      tokens: ['The', 'brave', 'sailor', 'sees', 'the', 'king.'],
      analysis: [[0, 2], [1, 2], [3, 2], [4, 5], [3, 5]],
      explain: 'The adjective “brave” and the article “The” depend on “sailor.” The article “the” depends on “king.” The verb “sees” depends on its subject “sailor” and on its object “king.”'
    },
    {
      id: 'smp-analysis', set: 'A', type: 'analysis',
      prompt: '“Birds fly.” Type the part of speech of each word, then its accidents, separated by commas, and mark every dependence.',
      tokens: ['Birds', 'fly.'],
      analysis: { parse: ['noun, plural', ['verb, present', 'verb, present tense']], arrows: [[1, 0]] },
      explain: '“Birds” is a plural noun and the subject. “Fly” is a verb in the present tense, and it depends on its subject.'
    },
    {
      id: 'smp-copy', set: 'A', type: 'copy',
      prompt: 'Copy the passage word for word.',
      text: 'The old bridge held.',
      explain: 'The copy matches the passage when the words, the capitals, and the punctuation are the same.'
    }
  ]
};
