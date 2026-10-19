/* The order of the whole course: 73 buttons (ITEM-LIST.md's 71, with section reviews added for I, VIII, IX, X, and XI on Timothy's instruction, 17 Oct 2026;
   the Section I exercise merged into its review, 18 Oct; the Nouns and Verbs exercise tiles split by deck into the Exercise
   buttons of iii.noun-1, iii.noun-2, iii.verb-1, and iii.verb-2, 19 Oct 2026).
   Each item has a stable id (never changed when a title or a position changes; progress is stored under it).
   kind: 'study' (a deck), 'study-ex' (a deck with its own exercise set), 'exercise' (a shared exercise set),
         'review' (a section review).
   built: true when the deck's data file exists in data/decks/<id>.js.
   An exercise or a review is built when its questions open in the player.
   langBars: the particular-languages bar for this section (LANGUAGES-LAYER-SPEC.md). after:'cumul' places it
   under the Cumulative Review bar; after an item id places it directly under that item. The screens are
   lang.<bar>.<code> (data/languages/). */
window.ARS = window.ARS || {};
ARS.structure = [
 { id:'prelim', roman:'', latin:'Quid sit grammatica', name:'What Is Grammar?',
   gloss:'The definition, the tasks, and the parts of the art, and the criteria of correct speech.',
   items:[
   { id:'prelim.definition', kind:'study', built:true, title:'The Definition of Grammar', desc:'What is grammar, what does it treat, and why is it the first art of the trivium?' },
   { id:'prelim.offices', kind:'study', built:true, title:'The Tasks of the Grammarian', desc:'Reading, explaining, correcting, and judging (<i>lectio</i>, <i>enarratio</i>, <i>emendatio</i>, <i>iudicium</i>).' },
   { id:'prelim.methodice', kind:'study', built:true, title:'Precepts and Interpretation', desc:'The two parts of grammar: the precepts of the art and the interpretation of the authors.' },
   { id:'prelim.criteria', kind:'study', built:true, title:'The Criteria of Correctness', desc:'Reason, antiquity, authority, and usage as the standards of correct speech.' }
 ]},
 { id:'i', roman:'I', latin:'De signo et voce significativa', name:'Sign and Significant Voice',
   gloss:'What a word is as a sign: imposed, signifying, and joined to other words.',
   items:[
   { id:'i.sign', kind:'study', built:true, title:'Sign and Symbol', desc:'Natural and conventional signs, and the spoken word as a sign of what is in the mind.' },
   { id:'i.imposition', kind:'study', built:true, title:'Imposition', desc:'How does a sound come to signify by the will of those who first used it? What are first and second imposition?' },
   { id:'i.consignification', kind:'study', built:true, title:'Signification and Consignification', desc:'What does a word mean, and what does it signify along with that meaning: time and the other accidents, the mode of signifying, and the composition signified by the verb?' },
   { id:'i.syncategorematic', kind:'study', built:true, title:'Categorematic and Syncategorematic Words', desc:'Words that signify of themselves, and words such as “every” and “not” that signify only with other words.' },
   { id:'i.functions', kind:'study', built:true, title:'The Functions of Language', desc:'Stating, asking, commanding, praying, calling, and expressing feeling, and why only the statement is true or false.' },
   { id:'i.ambiguity', kind:'study', built:true, title:'Ambiguity', desc:'How can one word or one construction have two senses, and how does the grammarian distinguish them?' },
   { id:'i.review', kind:'review', built:true, title:'Section Review: Sign and Significant Voice', desc:'One hundred twenty questions on I.1 to I.6, in six sets of twenty that rotate, with every kind of question.' }
 ]},
 { id:'ii', roman:'II', latin:'De materia orationis', name:'The Matter of Speech',
   gloss:'Voice, letter, and syllable, and how speech is written, punctuated, and measured.',
   items:[
   { id:'ii.voice', kind:'study', built:true, title:'Voice (<i>vox</i>)', desc:'Voice as the motion of air perceptible to hearing, and articulate and inarticulate voice.' },
   { id:'ii.letter', kind:'study', built:true, title:'The Letter and Orthography', desc:'The letter and its accidents (name, figure, and power), and how Latin is spelled and pronounced.' },
   { id:'ii.syllable', kind:'study-ex', built:true, title:'The Syllable', desc:'What is a syllable, and how are words divided into syllables in English and in Latin?' },
   { id:'ii.quantity', kind:'study-ex', built:true, title:'Quantity and Accent', desc:'Long and short syllables, the Latin accent, and English stress.' },
   { id:'ii.punctuation', kind:'study', built:true, title:'Punctuation (<i>posituræ</i>)', desc:'The old marks of pause beside the modern ones.' },
   { id:'ii.meter', kind:'study', built:true, title:'Feet and Meter', desc:'Feet and verse in English and Latin, with Greek, German, or French where they show something distinctive.' },
   { id:'ii.review', kind:'review', title:'Section Review: The Matter of Speech', desc:'Forty-five questions on II.1 to II.6, in three fixed sets of fifteen.' }
 ],
 langBars:[
   { id:'ii', after:'cumul', heading:'The grammars of the particular languages' }
 ]},
 { id:'iii', roman:'III', latin:'De partibus orationis', name:'The Parts of Speech',
   gloss:'The eight parts of speech, the reasons for them, and their accidents.',
   items:[
   { id:'iii.parts', kind:'study-ex', built:true, group:'The word in general', title:'The Word (<i>dictio</i>) and the Eight Parts', desc:'The least part of a sentence, and the eight parts of speech, each decided by how the word is used.' },
   { id:'iii.reasons', kind:'study', built:true, title:'The Reasons for the Parts', desc:'Why are there eight parts of speech, and how do they differ by their mode of signifying?' },
   { id:'iii.figure', kind:'study-ex', built:true, title:'Figure and Species', desc:'Simple and compound words, and primitive and derived words.' },
   { id:'iii.homonymy', kind:'study', built:true, title:'Homonymy and Synonymy', desc:'One word with many meanings, and many words with one meaning.' },
   { id:'iii.noun-1', kind:'study-ex', built:true, group:'The declinable parts', title:'The Noun I: Kinds, Quality, and Comparison', desc:'Proper and common nouns, the adjective under the noun, and the degrees of comparison.' },
   { id:'iii.noun-2', kind:'study-ex', built:true, title:'The Noun II: Gender, Number, and Case', desc:'The accidents that make declension, set beside English word order and prepositions.' },
   { id:'iii.pronoun', kind:'study-ex', built:true, title:'The Pronoun', desc:'The pronoun and its accidents: quality, gender, number, figure, person, and case.' },
   { id:'iii.verb-1', kind:'study-ex', built:true, title:'The Verb I: Quality, Mood, and Voice', desc:'The forms and moods of the verb, and active, passive, neuter, and deponent verbs.' },
   { id:'iii.verb-2', kind:'study-ex', built:true, title:'The Verb II: Tense, Person, Number, and Conjugation', desc:'How does the verb mark time, aspect, and person, and how are verbs conjugated?' },
   { id:'iii.participle', kind:'study-ex', built:true, title:'The Participle', desc:'The part of speech that shares in the noun and the verb, and its accidents.' },
   { id:'iii.review-declinable', kind:'review', title:'Section Review: The Word and the Declinable Parts', desc:'Forty-five questions on III.1 to III.10, in three fixed sets of fifteen.' },
   { id:'iii.adverb', kind:'study', built:true, group:'The indeclinable parts', title:'The Adverb', desc:'The adverb and its accidents: signification, comparison, and figure.' },
   { id:'iii.preposition', kind:'study', built:true, title:'The Preposition', desc:'The preposition and its one accident, case, and its use in composition.' },
   { id:'iii.conjunction', kind:'study', built:true, title:'The Conjunction', desc:'The conjunction and its accidents: power, figure, and order.' },
   { id:'iii.interjection', kind:'study', built:true, title:'The Interjection', desc:'The part of speech that signifies a feeling of the mind.' },
   { id:'iii.review-indeclinable', kind:'review', title:'Section Review: The Indeclinable Parts', desc:'Forty-five questions on III.11 to III.14, in three fixed sets of fifteen.' }
 ],
 langBars:[
   { id:'iii-decl', after:'iii.review-declinable', heading:'The grammars of the particular languages' },
   { id:'iii-indecl', after:'cumul', heading:'The grammars of the particular languages' }
 ]},
 { id:'iv', roman:'IV', latin:'De etymologia', name:'Word Formation and Etymology',
   gloss:'How words are derived and compounded, and what can be known of their origins.',
   items:[
   { id:'iv.derivation', kind:'study', built:true, title:'Derivation', desc:'How are new words made from old ones by endings and changes of form?' },
   { id:'iv.composition', kind:'study', built:true, title:'Composition', desc:'How are words joined to make compounds in English and Latin?' },
   { id:'iv.etymology', kind:'study', built:true, title:'Etymology', desc:'The origin of words, ancient and comparative, and the cautions it requires.' },
   { id:'iv.review', kind:'review', title:'Section Review: Word Formation and Etymology', desc:'Thirty questions on IV.1 to IV.3, in three fixed sets of ten.' }
 ],
 langBars:[
   { id:'iv', after:'cumul', heading:'The grammars of the particular languages' }
 ]},
 { id:'v', roman:'V', latin:'De constructione', name:'Construction',
   gloss:'Congruity, agreement, government, dependence, and order, from the phrase to the period.',
   items:[
   { id:'v.congruity', kind:'study-ex', built:true, title:'Congruity', desc:'A sentence correctly formed and complete, as distinct from a sentence that is true.' },
   { id:'v.agreement', kind:'study-ex', built:true, title:'Agreement (<i>concordantia</i>)', desc:'How do words agree in gender, number, case, and person?' },
   { id:'v.government', kind:'study-ex', built:true, title:'Government (<i>regimen</i>)', desc:'How does a verb, a preposition, or a noun require a case?' },
   { id:'v.dependence', kind:'study-ex', built:true, title:'Dependence', desc:'The dependent and the term on which it depends (<i>dependens</i> and <i>terminans</i>).' },
   { id:'v.order', kind:'study-ex', built:true, title:'Order (<i>ordo</i>)', desc:'Natural and artificial order, word order in English and in Latin, and the basic orders that typology classifies.' },
   { id:'v.phrase', kind:'study-ex', built:true, title:'The Phrase', desc:'Groups of words that act as one part of speech.' },
   { id:'v.clause', kind:'study-ex', built:true, title:'The Clause', desc:'Subject and predicate, and independent and dependent clauses.' },
   { id:'v.period', kind:'study-ex', built:true, title:'The Period', desc:'The sentence of many members.' },
   { id:'v.mood', kind:'study-ex', built:true, title:'Mood and Voice in Construction', desc:'The passive with its agent, the infinitive, the participle, and the subjunctive in clauses.' },
   { id:'v.figures', kind:'study-ex', built:true, title:'Figures of Construction', desc:'Ellipsis, zeugma, syllepsis, and the other departures from regular construction.' },
   { id:'v.review', kind:'review', title:'Section Review: Construction', desc:'Forty-five questions on V.1 to V.10, in three fixed sets of fifteen.' }
 ],
 langBars:[
   { id:'v', after:'cumul', heading:'The grammars of the particular languages' }
 ]},
 { id:'vi', roman:'VI', latin:'De vitiis', name:'Correctness and Errors',
   gloss:'Usage and authority as the standard of correctness, and the errors that depart from it.',
   items:[
   { id:'vi.usage', kind:'study-ex', built:true, title:'Usage and Authority', desc:'The criteria of correctness applied to questions of usage and authority.' },
   { id:'vi.barbarism', kind:'study-ex', built:true, title:'Barbarism', desc:'An error in a single word.' },
   { id:'vi.solecism', kind:'study-ex', built:true, title:'Solecism', desc:'An error in the arrangement of words.' },
   { id:'vi.metaplasm', kind:'study-ex', built:true, title:'Metaplasm', desc:'A change in a word permitted for meter or ornament.' },
   { id:'vi.review', kind:'review', title:'Section Review: Errors', desc:'Forty-five questions on VI.1 to VI.4, in three fixed sets of fifteen.' }
 ],
 langBars:[
   { id:'vi', after:'cumul', heading:'The grammars of the particular languages' }
 ]},
 { id:'vii', roman:'VII', latin:'De schematibus et tropis', name:'Figures and Tropes',
   gloss:'The literal and the figurative sense, the figures of words, and the tropes.',
   items:[
   { id:'vii.literal', kind:'study-ex', built:true, title:'Literal and Figurative Sense', desc:'What does a word signify properly, and what does it signify by a figure?' },
   { id:'vii.schemata', kind:'study-ex', built:true, title:'Figures of Words (<i>schemata lexeos</i>)', desc:'Repetition, omission, and arrangement used for effect.' },
   { id:'vii.tropes', kind:'study-ex', built:true, title:'Tropes', desc:'Metaphor, metonymy, synecdoche, and the other changes of meaning.' },
   { id:'vii.review', kind:'review', title:'Section Review: Figures', desc:'Forty-five questions on VII.1 to VII.3, in three fixed sets of fifteen.' }
 ],
 langBars:[
   { id:'vii', after:'cumul', heading:'The grammars of the particular languages' }
 ]},
 { id:'viii', roman:'VIII', latin:'De significatione et suppositione', name:'Signification and Supposition',
   gloss:'What a term stands for in a proposition, and how the forms of logic appear in grammar.',
   items:[
   { id:'viii.supposition', kind:'study-ex', built:true, title:'Supposition', desc:'Signification reviewed, and material, simple, and personal supposition.' },
   { id:'viii.equivalents', kind:'study', built:true, title:'Grammatical Equivalents of Logical Forms', desc:'Subject, copula, and predicate, quantity, and negation in grammar.' },
   { id:'viii.review', kind:'review', title:'Section Review: Signification and Supposition', desc:'Thirty questions on VIII.1 and VIII.2, in three fixed sets of ten.' }
 ]},
 { id:'ix', roman:'IX', latin:'De analysi', name:'Analysis of Sentences and Passages',
   gloss:'The whole art applied to sentences and passages, mostly in English, with some Latin.',
   items:[
   { id:'ix.sentences', kind:'exercise', built:true, title:'Analysis of Sentences', desc:'Parsing and construing whole sentences.' },
   { id:'ix.passages', kind:'exercise', built:true, title:'Analysis of Passages', desc:'Reading, explaining, and judging passages of prose and poetry.' },
   { id:'ix.marking', kind:'exercise', built:true, title:'Workshop and Marking', desc:'Marking every dependence in a sentence whose analysis is stored.' },
   { id:'ix.review', kind:'review', title:'Section Review: Analysis', desc:'Thirty questions on the method of IX.1 to IX.3, in three fixed sets of ten.' }
 ],
 langBars:[
   { id:'ix', after:'cumul', heading:'The grammars of the particular languages' }
 ]},
 { id:'x', roman:'X', latin:'De compositione', name:'Making',
   gloss:'From reading to writing.',
   items:[
   { id:'x.composition', kind:'study', built:true, title:'Composition', desc:'Building sentences and periods.' },
   { id:'x.imitation', kind:'exercise', built:true, introFor:'x.ex.imitation', title:'Imitation', desc:'Ten passages of English prose, copied word for word.' },
   { id:'x.translation', kind:'study', built:true, title:'Translation', desc:'Why is translation necessary, what is its history, and can translations be trusted?' },
   { id:'x.progymnasmata', kind:'study', built:true, title:'Classical Composition Exercises', desc:'The fourteen progymnasmata, why the fable comes first, and why they follow their order.' },
   { id:'x.review', kind:'review', title:'Section Review: Making', desc:'Forty-five questions on X.1 to X.4, in three fixed sets of fifteen.' }
 ]},
 { id:'xi', roman:'XI', latin:'De aliis traditionibus et grammatica recentiore', name:'Other Traditions and Modern Grammar',
   gloss:'The other classical grammars, and the modern study of universal grammar.',
   items:[
   { id:'xi.traditions', kind:'study', built:true, title:'The Other Classical Traditions', desc:'The scribal lists, and the Sanskrit, Arabic, Hebrew, and Chinese grammatical traditions.' },
   { id:'xi.modern', kind:'study', built:true, title:'Universal Grammar and Modern Linguistics', desc:'From Port-Royal to the present: universal grammar, typology, and functional grammar.' },
   { id:'xi.review', kind:'review', title:'Section Review: Other Traditions and Modern Grammar', desc:'Forty-five questions on XI.1 and XI.2, in three fixed sets of fifteen.' }
 ]}
];
