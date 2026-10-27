/* The four levels of the course (Timothy, 27 Oct 2026; TIERS-PROPOSAL.md, with his answers).
   Each line gives the level at which a deck, a section review, or a language deck first appears; it stays in every
   higher level. To move a deck, change the word on its line: essentials, proficient, mastered, or comprehensive.
   An exercise set has the level of the deck it is opened from (its Exercise button), so exercise sets are not listed.
   A section review shows, at each level, only its questions on the decks open at that level.
   A set with stages (Stage I, II, ...) opens Stage I at its deck's level and one more stage at each higher level.
   passages: the reading collections of Section IX, opened passage by passage. Each line lists all the passages of the
   deck in order (the id of each passage's first card), then those open at Proficient and at Mastered; Comprehensive
   opens them all. A passage runs from its first card to the card before the next passage.
   Anything not listed here appears only at Comprehensive. Read by levels.js. */
window.ARS = window.ARS || {};
ARS.tiers = {
 order: ['essentials', 'proficient', 'mastered', 'comprehensive'],
 names: { essentials:'Essentials', proficient:'Proficient', mastered:'Mastered', comprehensive:'Comprehensive' },
 items: {
  /* General course, Preliminaries */
  'prelim.definition': 'essentials',
  'prelim.offices': 'proficient',
  'prelim.methodice': 'essentials',
  'prelim.criteria': 'proficient',
  /* General course, I */
  'i.sign': 'essentials',
  'i.imposition': 'proficient',
  'i.consignification': 'mastered',
  'i.syncategorematic': 'mastered',
  'i.functions': 'proficient',
  'i.ambiguity': 'proficient',
  'i.review': 'essentials',
  /* General course, II */
  'ii.voice': 'proficient',
  'ii.letter': 'essentials',
  'ii.syllable': 'essentials',
  'ii.quantity': 'proficient',
  'ii.punctuation': 'proficient',
  'ii.meter': 'mastered',
  'ii.review': 'essentials',
  /* General course, III */
  'iii.parts': 'essentials',
  'iii.reasons': 'mastered',
  'iii.figure': 'proficient',
  'iii.homonymy': 'mastered',
  'iii.noun-1': 'essentials',
  'iii.noun-2': 'essentials',
  'iii.pronoun': 'essentials',
  'iii.verb-1': 'essentials',
  'iii.verb-2': 'essentials',
  'iii.participle': 'essentials',
  'iii.review-declinable': 'essentials',
  'iii.adverb': 'essentials',
  'iii.preposition': 'essentials',
  'iii.conjunction': 'essentials',
  'iii.interjection': 'essentials',
  'iii.review-indeclinable': 'essentials',
  /* General course, IV */
  'iv.derivation': 'proficient',
  'iv.composition': 'proficient',
  'iv.etymology': 'mastered',
  'iv.review': 'proficient',
  /* General course, V */
  'v.congruity': 'proficient',
  'v.agreement': 'essentials',
  'v.government': 'essentials',
  'v.dependence': 'proficient',
  'v.order': 'proficient',
  'v.phrase': 'essentials',
  'v.clause': 'essentials',
  'v.period': 'mastered',
  'v.mood': 'proficient',
  'v.figures': 'mastered',
  'v.review': 'essentials',
  /* General course, VI */
  'vi.usage': 'proficient',
  'vi.barbarism': 'proficient',
  'vi.solecism': 'proficient',
  'vi.metaplasm': 'mastered',
  'vi.review': 'proficient',
  /* General course, VII */
  'vii.literal': 'proficient',
  'vii.schemata': 'mastered',
  'vii.tropes': 'proficient',
  'vii.review': 'proficient',
  /* General course, VIII */
  'viii.supposition': 'mastered',
  'viii.equivalents': 'mastered',
  'viii.review': 'mastered',
  /* General course, IX */
  'ix.sentences': 'essentials',
  'ix.passages': 'mastered',
  'ix.marking': 'proficient',
  'ix.review': 'essentials',
  /* General course, X */
  'x.composition': 'proficient',
  'x.imitation': 'comprehensive',
  'x.translation': 'mastered',
  'x.progymnasmata': 'mastered',
  'x.review': 'proficient',
  /* General course, XI */
  'xi.traditions': 'comprehensive',
  'xi.modern': 'comprehensive',
  'xi.review': 'comprehensive',
  /* English, bar prelim */
  'lang.prelim.en/overview': 'essentials',
  /* English, bar ii */
  'lang.ii.en/spelling': 'essentials',
  'lang.ii.en/punctuation': 'essentials',
  'lang.ii.en/syllable': 'proficient',
  'lang.ii.en/meter': 'mastered',
  /* English, bar iii-decl */
  'lang.iii-decl.en/accidents': 'essentials',
  'lang.iii-decl.en/noun': 'essentials',
  'lang.iii-decl.en/pronouns': 'essentials',
  'lang.iii-decl.en/verbs': 'essentials',
  'lang.iii-decl.en/verbals': 'essentials',
  'lang.iii-decl.en/form': 'essentials',
  /* English, bar iii-indecl */
  'lang.iii-indecl.en/parts': 'essentials',
  'lang.iii-indecl.en/usage': 'essentials',
  /* English, bar iv */
  'lang.iv.en/formation': 'proficient',
  'lang.iv.en/composition': 'proficient',
  'lang.iv.en/etymology': 'mastered',
  /* English, bar v */
  'lang.v.en/sentence': 'essentials',
  'lang.v.en/phrase': 'essentials',
  'lang.v.en/clause': 'essentials',
  'lang.v.en/agreement': 'proficient',
  'lang.v.en/dependence': 'proficient',
  /* English, bar vi */
  'lang.vi.en/faults': 'essentials',
  /* English, bar vii */
  'lang.vii.en/figures': 'proficient',
  /* English, bar ix */
  'lang.ix.en/diagram': 'proficient',
  'lang.ix.en/prose': 'proficient',
  'lang.ix.en/poetry': 'proficient',
  /* English, bar x */
  'lang.x.en/decl': 'mastered',
  'lang.x.en/gibbon': 'mastered',
  'lang.x.en/johnson': 'mastered',
  'lang.x.en/austen': 'mastered',
  'lang.x.en/bacon': 'mastered',
  'lang.x.en/lincoln': 'mastered',
  'lang.x.en/dickens': 'mastered',
  'lang.x.en/thoreau': 'mastered',
  /* Latin, bar prelim */
  'lang.prelim.la/overview': 'essentials',
  /* Latin, bar ii */
  'lang.ii.la/syllable': 'essentials',
  'lang.ii.la/orthography': 'proficient',
  'lang.ii.la/meter': 'mastered',
  /* Latin, bar iii-decl */
  'lang.iii-decl.la/noun': 'essentials',
  'lang.iii-decl.la/adjectives': 'essentials',
  'lang.iii-decl.la/pronouns': 'essentials',
  'lang.iii-decl.la/verb': 'essentials',
  'lang.iii-decl.la/irregular': 'essentials',
  'lang.iii-decl.la/participles': 'essentials',
  'lang.iii-decl.la/casework': 'proficient',
  /* Latin, bar iii-indecl */
  'lang.iii-indecl.la/parts': 'proficient',
  'lang.iii-indecl.la/prepositions': 'essentials',
  'lang.iii-indecl.la/adverbs': 'proficient',
  /* Latin, bar iv */
  'lang.iv.la/formation': 'proficient',
  'lang.iv.la/composition': 'proficient',
  'lang.iv.la/etymology': 'mastered',
  /* Latin, bar v */
  'lang.v.la/agreement': 'essentials',
  'lang.v.la/government': 'essentials',
  'lang.v.la/voice': 'proficient',
  'lang.v.la/subjunctive': 'proficient',
  'lang.v.la/clause-kinds': 'proficient',
  'lang.v.la/clauses': 'comprehensive',
  'lang.v.la/building': 'proficient',
  'lang.v.la/dependence': 'mastered',
  /* Latin, bar vi */
  'lang.vi.la/faults': 'proficient',
  /* Latin, bar vii */
  'lang.vii.la/figures': 'mastered',
  /* Latin, bar ix */
  'lang.ix.la/prose': 'proficient',
  'lang.ix.la/poetry': 'proficient',
  'lang.ix.la/servius': 'comprehensive',
  /* Latin, bar x */
  'lang.x.la/livy': 'mastered',
  'lang.x.la/cicero1': 'mastered',
  'lang.x.la/cicero2': 'mastered',
  'lang.x.la/sallust': 'mastered',
  'lang.x.la/tacitus': 'mastered',
  'lang.x.la/augustine': 'mastered',
  'lang.x.la/virgil': 'mastered',
  'lang.x.la/horace': 'mastered',
  /* Greek, bar prelim */
  'lang.prelim.grc/overview': 'essentials',
  /* Greek, bar ii */
  'lang.ii.grc/writing': 'essentials',
  'lang.ii.grc/syllable': 'essentials',
  'lang.ii.grc/meter': 'mastered',
  'lang.ii.grc/hexameter': 'comprehensive',
  /* Greek, bar iii-decl */
  'lang.iii-decl.grc/accidents': 'essentials',
  'lang.iii-decl.grc/paradigms': 'essentials',
  'lang.iii-decl.grc/pronouns': 'essentials',
  'lang.iii-decl.grc/contract': 'proficient',
  'lang.iii-decl.grc/mi': 'proficient',
  'lang.iii-decl.grc/perfect': 'proficient',
  'lang.iii-decl.grc/participle': 'proficient',
  'lang.iii-decl.grc/compared': 'essentials',
  /* Greek, bar iii-indecl */
  'lang.iii-indecl.grc/prepositions': 'essentials',
  'lang.iii-indecl.grc/particles': 'proficient',
  /* Greek, bar iv */
  'lang.iv.grc/formation': 'proficient',
  'lang.iv.grc/composition': 'proficient',
  'lang.iv.grc/etymology': 'mastered',
  /* Greek, bar v */
  'lang.v.grc/agreement': 'essentials',
  'lang.v.grc/government': 'essentials',
  'lang.v.grc/voice': 'proficient',
  'lang.v.grc/mood': 'proficient',
  'lang.v.grc/clauses': 'proficient',
  'lang.v.grc/order': 'mastered',
  /* Greek, bar vi */
  'lang.vi.grc/errors': 'proficient',
  'lang.vi.grc/attic': 'mastered',
  /* Greek, bar vii */
  'lang.vii.grc/figures': 'mastered',
  'lang.vii.grc/tropes': 'mastered',
  /* Greek, bar ix */
  'lang.ix.grc/prose': 'proficient',
  'lang.ix.grc/poetry': 'proficient',
  /* Greek, bar x */
  'lang.x.grc/herodotus': 'mastered',
  'lang.x.grc/thucydides1': 'mastered',
  'lang.x.grc/thucydides2': 'mastered',
  'lang.x.grc/plato': 'mastered',
  'lang.x.grc/xenophon': 'mastered',
  'lang.x.grc/john': 'mastered',
  'lang.x.grc/demosthenes': 'mastered',
  'lang.x.grc/homer': 'mastered',
  /* French, bar prelim */
  'lang.prelim.fr/overview': 'essentials',
  /* French, bar ii */
  'lang.ii.fr/syllable': 'essentials',
  'lang.ii.fr/orthography': 'essentials',
  'lang.ii.fr/meter': 'mastered',
  /* French, bar iii-decl */
  'lang.iii-decl.fr/accidents': 'essentials',
  'lang.iii-decl.fr/paradigms': 'essentials',
  'lang.iii-decl.fr/parts': 'essentials',
  'lang.iii-decl.fr/pronouns': 'proficient',
  'lang.iii-decl.fr/tenses': 'proficient',
  'lang.iii-decl.fr/subjunctive': 'proficient',
  'lang.iii-decl.fr/participle': 'proficient',
  /* French, bar iii-indecl */
  'lang.iii-indecl.fr/compared': 'essentials',
  'lang.iii-indecl.fr/prepositions': 'essentials',
  'lang.iii-indecl.fr/invariable': 'essentials',
  /* French, bar iv */
  'lang.iv.fr/formation': 'proficient',
  'lang.iv.fr/composition': 'proficient',
  'lang.iv.fr/etymology': 'mastered',
  /* French, bar v */
  'lang.v.fr/agreement': 'essentials',
  'lang.v.fr/government': 'proficient',
  'lang.v.fr/voice': 'proficient',
  'lang.v.fr/mood': 'proficient',
  'lang.v.fr/clauses': 'proficient',
  'lang.v.fr/order': 'mastered',
  /* French, bar vi */
  'lang.vi.fr/errors': 'proficient',
  'lang.vi.fr/usage': 'proficient',
  /* French, bar vii */
  'lang.vii.fr/figures': 'mastered',
  'lang.vii.fr/tropes': 'mastered',
  /* French, bar ix */
  'lang.ix.fr/prose': 'proficient',
  'lang.ix.fr/poetry': 'proficient',
  /* French, bar x */
  'lang.x.fr/descartes': 'mastered',
  'lang.x.fr/pascal': 'mastered',
  'lang.x.fr/montaigne': 'mastered',
  'lang.x.fr/rousseau': 'mastered',
  'lang.x.fr/larochefoucauld': 'mastered',
  'lang.x.fr/proust': 'mastered',
  'lang.x.fr/racine': 'mastered',
  'lang.x.fr/ronsard': 'mastered',
  /* German, bar prelim */
  'lang.prelim.de/overview': 'essentials',
  /* German, bar ii */
  'lang.ii.de/syllable': 'essentials',
  'lang.ii.de/orthography': 'essentials',
  'lang.ii.de/meter': 'mastered',
  /* German, bar iii-decl */
  'lang.iii-decl.de/accidents': 'essentials',
  'lang.iii-decl.de/paradigms': 'essentials',
  'lang.iii-decl.de/parts': 'essentials',
  'lang.iii-decl.de/plurals': 'essentials',
  'lang.iii-decl.de/pronouns': 'proficient',
  'lang.iii-decl.de/strong': 'essentials',
  'lang.iii-decl.de/modals': 'essentials',
  'lang.iii-decl.de/konjunktiv': 'proficient',
  'lang.iii-decl.de/compared': 'essentials',
  /* German, bar iii-indecl */
  'lang.iii-indecl.de/prepositions': 'essentials',
  'lang.iii-indecl.de/particles': 'essentials',
  /* German, bar iv */
  'lang.iv.de/formation': 'proficient',
  'lang.iv.de/composition': 'proficient',
  'lang.iv.de/etymology': 'mastered',
  /* German, bar v */
  'lang.v.de/agreement': 'proficient',
  'lang.v.de/government': 'essentials',
  'lang.v.de/voice': 'proficient',
  'lang.v.de/mood': 'proficient',
  'lang.v.de/clauses': 'proficient',
  'lang.v.de/order': 'essentials',
  /* German, bar vi */
  'lang.vi.de/errors': 'proficient',
  'lang.vi.de/usage': 'proficient',
  /* German, bar vii */
  'lang.vii.de/figures': 'mastered',
  'lang.vii.de/tropes': 'mastered',
  /* German, bar ix */
  'lang.ix.de/prose': 'proficient',
  'lang.ix.de/poetry': 'proficient',
  /* German, bar x */
  'lang.x.de/kant': 'mastered',
  'lang.x.de/werther': 'mastered',
  'lang.x.de/grimm': 'mastered',
  'lang.x.de/kleist': 'mastered',
  'lang.x.de/manifest': 'mastered',
  'lang.x.de/zarathustra': 'mastered',
  'lang.x.de/nachtlied': 'mastered',
  'lang.x.de/heine': 'mastered',
  /* Spanish, bar prelim */
  'lang.prelim.es/overview': 'essentials',
  /* Spanish, bar ii */
  'lang.ii.es/syllable': 'essentials',
  'lang.ii.es/orthography': 'essentials',
  'lang.ii.es/meter': 'mastered',
  /* Spanish, bar iii-decl */
  'lang.iii-decl.es/accidents': 'essentials',
  'lang.iii-decl.es/paradigms': 'essentials',
  'lang.iii-decl.es/parts': 'essentials',
  'lang.iii-decl.es/pronouns': 'proficient',
  'lang.iii-decl.es/tenses': 'proficient',
  'lang.iii-decl.es/subjunctive': 'proficient',
  'lang.iii-decl.es/participle': 'proficient',
  'lang.iii-decl.es/irregular': 'essentials',
  /* Spanish, bar iii-indecl */
  'lang.iii-indecl.es/prepositions': 'essentials',
  'lang.iii-indecl.es/invariable': 'essentials',
  'lang.iii-indecl.es/compared': 'mastered',
  /* Spanish, bar iv */
  'lang.iv.es/formation': 'proficient',
  'lang.iv.es/composition': 'proficient',
  'lang.iv.es/etymology': 'mastered',
  /* Spanish, bar v */
  'lang.v.es/agreement': 'essentials',
  'lang.v.es/government': 'proficient',
  'lang.v.es/voice': 'proficient',
  'lang.v.es/mood': 'proficient',
  'lang.v.es/clauses': 'proficient',
  'lang.v.es/order': 'mastered',
  /* Spanish, bar vi */
  'lang.vi.es/errors': 'proficient',
  'lang.vi.es/usage': 'proficient',
  /* Spanish, bar vii */
  'lang.vii.es/figures': 'mastered',
  'lang.vii.es/tropes': 'mastered',
  /* Spanish, bar ix */
  'lang.ix.es/prose': 'proficient',
  'lang.ix.es/poetry': 'proficient',
  /* Spanish, bar x */
  'lang.x.es/cervantes': 'mastered',
  'lang.x.es/teresa': 'mastered',
  'lang.x.es/lazarillo': 'mastered',
  'lang.x.es/gracian': 'mastered',
  'lang.x.es/galdos': 'mastered',
  'lang.x.es/unamuno': 'mastered',
  'lang.x.es/becquer': 'mastered',
  'lang.x.es/dario': 'mastered'
 },
 passages: {
  'lang.ix.en/prose': { all: ['prose-1','prose-10','prose-16','prose-24','prose-32','prose-38','prose-44','prose-52','prose-59','prose-66','prose-73','prose-78','prose-83','prose-88','prose-93'], proficient: ['prose-1','prose-10','prose-16'], mastered: ['prose-1','prose-10','prose-16','prose-24','prose-32','prose-38','prose-44','prose-52'] },
  'lang.ix.en/poetry': { all: ['poetry-1','poetry-7','poetry-13','poetry-18','poetry-23','poetry-29','poetry-35','poetry-40','poetry-45','poetry-51'], proficient: ['poetry-1','poetry-7'], mastered: ['poetry-1','poetry-7','poetry-13','poetry-18','poetry-23'] },
  'lang.ix.la/prose': { all: ['prose-1','prose-8','prose-14','prose-19','prose-25','prose-30','prose-35','prose-41','prose-45','prose-49','prose-54','prose-59','prose-63','prose-68','prose-73'], proficient: ['prose-1','prose-8','prose-14'], mastered: ['prose-1','prose-8','prose-14','prose-19','prose-25','prose-30','prose-35','prose-41'] },
  'lang.ix.la/poetry': { all: ['poetry-1','poetry-12','poetry-18','poetry-25','poetry-33','poetry-42','poetry-50','poetry-56','poetry-62','poetry-68'], proficient: ['poetry-1','poetry-12'], mastered: ['poetry-1','poetry-12','poetry-18','poetry-25','poetry-33'] },
  'lang.ix.grc/prose': { all: ['prose-1','prose-8','prose-15','prose-22','prose-28','prose-34','prose-39','prose-44','prose-50','prose-56','prose-61','prose-65','prose-70','prose-75','prose-80'], proficient: ['prose-1','prose-8','prose-15'], mastered: ['prose-1','prose-8','prose-15','prose-22','prose-28','prose-34','prose-39','prose-44'] },
  'lang.ix.grc/poetry': { all: ['poetry-1','poetry-9','poetry-15','poetry-21','poetry-26','poetry-31','poetry-37','poetry-43','poetry-48','poetry-53'], proficient: ['poetry-1','poetry-9'], mastered: ['poetry-1','poetry-9','poetry-15','poetry-21','poetry-26'] },
  'lang.ix.fr/prose': { all: ['prose-1','prose-6','prose-13','prose-19','prose-24','prose-29','prose-34','prose-39','prose-43','prose-47','prose-52','prose-56','prose-60','prose-64','prose-69'], proficient: ['prose-1','prose-6','prose-13'], mastered: ['prose-1','prose-6','prose-13','prose-19','prose-24','prose-29','prose-34','prose-39'] },
  'lang.ix.fr/poetry': { all: ['poetry-1','poetry-7','poetry-12','poetry-18','poetry-23','poetry-28','poetry-32','poetry-37','poetry-41','poetry-46'], proficient: ['poetry-1','poetry-7'], mastered: ['poetry-1','poetry-7','poetry-12','poetry-18','poetry-23'] },
  'lang.ix.de/prose': { all: ['prose-1','prose-7','prose-13','prose-19','prose-26','prose-30','prose-34','prose-40','prose-46','prose-51','prose-57','prose-62','prose-67','prose-72','prose-77'], proficient: ['prose-1','prose-7','prose-13'], mastered: ['prose-1','prose-7','prose-13','prose-19','prose-26','prose-30','prose-34','prose-40'] },
  'lang.ix.de/poetry': { all: ['poetry-1','poetry-7','poetry-12','poetry-16','poetry-21','poetry-26','poetry-32','poetry-36','poetry-41','poetry-46'], proficient: ['poetry-1','poetry-7'], mastered: ['poetry-1','poetry-7','poetry-12','poetry-16','poetry-21'] },
  'lang.ix.es/prose': { all: ['prose-1','prose-7','prose-12','prose-22','prose-27','prose-32','prose-37','prose-42','prose-47','prose-52','prose-56','prose-61','prose-65','prose-69'], proficient: ['prose-1','prose-7','prose-12'], mastered: ['prose-1','prose-7','prose-12','prose-22','prose-27','prose-32','prose-37','prose-42'] },
  'lang.ix.es/poetry': { all: ['poetry-1','poetry-7','poetry-17','poetry-22','poetry-12','poetry-32','poetry-47','poetry-27','poetry-42','poetry-37'], proficient: ['poetry-1','poetry-7'], mastered: ['poetry-1','poetry-7','poetry-17','poetry-22','poetry-12'] }
 }
};
