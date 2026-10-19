window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.fr/errors"] = {
 "id": "lang.vi.fr/errors",
 "title": "Barbarism and Solecism in French",
 "sub": "An error in one French word, and an error in the joining of real French words",
 "sources": "Donatus, <i>Ars maior</i>; Grevisse and Goosse, <i>Le bon usage</i>; Larousse",
 "panels": [
  {
   "id": "one-word",
   "title": "An error in one word",
   "body": "<p>A student writes <em>des journals</em> for “newspapers,” and <em>nous mangezons</em> for “we eat.” Neither word is a French form. The plural of <em>journal</em> is <em>journaux</em>. The first person plural of <em>manger</em> is <em>nous mangeons</em>. <em>Vous mangez</em> is a real form, and it is second person. Joining that ending to <em>-ons</em> does not make a word.</p><p>An accent can make the same difference inside one written word. <em>Là</em> means “there.” <em>La</em> is the feminine article. <em>Sûr</em> means “sure.” <em>Sur</em> means “on.” The accented word and the unaccented word are two words. Writing one for the other is an error in that word.</p><p>Donatus calls a fault in one word a <strong>barbarism</strong> (<em>barbarismus est una pars orationis vitiosa in communi sermone</em>; <em>Ars maior</em> III). <em>Journals</em> and <em>mangezons</em> are barbarisms. So is <em>la</em> written where the sentence requires <em>là</em>.</p>",
   "qp": {
    "id": "q-one-word",
    "variants": [
     {
      "prompt": "A student writes <em>des hôpitals</em>. What kind of error is <em>hôpitals</em>?",
      "options": ["No error: the plural of <em>hôpital</em> adds <em>-s</em>", "A solecism: <em>des</em> and <em>hôpitals</em> disagree in gender", "A barbarism: the plural is <em>hôpitaux</em>", "A metaplasm required in ordinary prose"],
      "answer": 2,
      "explain": "<em>Hôpital</em> forms the plural <em>hôpitaux</em>, as <em>journal</em> forms <em>journaux</em>. <em>Hôpitals</em> is not a French form, so the error is in the one word."
     },
     {
      "prompt": "Why is <em>chevaux</em> not a barbarism?",
      "options": ["Because every plural in <em>-aux</em> is a poet’s license", "Because it is the French plural of <em>cheval</em>", "Because <em>chevaux</em> is a verb, not a noun", "Because a barbarism can occur only in a preposition"],
      "answer": 1,
      "explain": "<em>Chevaux</em> is the real plural, of the same pattern as <em>journaux</em>. A barbarism is a form the language does not have."
     },
     {
      "prompt": "What does Donatus call an error in one word, in ordinary speech?",
      "options": ["A solecism", "A barbarism", "A metaplasm", "A contraction"],
      "answer": 1,
      "explain": "A barbarism is a fault in one word. A solecism is a fault in the joining. A metaplasm is Donatus’s name for the poet’s departure, not for the error in ordinary speech."
     }
    ]
   }
  },
  {
   "id": "agreement",
   "title": "Gender and number",
   "body": "<p><em>Le maison</em> joins two real French words, and they do not fit. <em>Maison</em> (“house”) is feminine. The article is <em>la</em>. <em>Les enfants joue</em> fails in number. <em>Enfants</em> is plural, and <em>joue</em> is the third person singular of <em>jouer</em> (“to play”). The third person plural is <em>jouent</em>.</p><p>Donatus calls a fault in the joining a <strong>solecism</strong> (<em>soloecismus est vitium in contextu partium orationis contra regulam artis grammaticae factum</em>). Each word exists. The construction is incorrect. <em>Le maison</em> is not a barbarism, because <em>maison</em> is a real word and <em>le</em> is a real article.</p>",
   "qp": {
    "id": "q-agreement",
    "variants": [
     {
      "prompt": "What kind of error is <em>le chaise</em>?",
      "options": ["A barbarism: <em>chaise</em> is not a French word", "No error: <em>chaise</em> (“chair”) is masculine", "A solecism of gender", "A metaplasm: prose must use <em>le</em> with every noun"],
      "answer": 2,
      "explain": "<em>Chaise</em> is a real feminine noun, and <em>le</em> is a real masculine article. They do not agree, as <em>le maison</em> does not agree. The error is in the joining."
     },
     {
      "prompt": "What fails in <em>les élève chante</em>?",
      "options": ["Nothing: a plural article takes a singular noun and a singular verb", "<em>Chante</em> is not a form of <em>chanter</em>", "Number: <em>les</em> is plural, and <em>élève</em> and <em>chante</em> are singular", "<em>Élève</em> is an adverb"],
      "answer": 2,
      "explain": "The words are real. <em>Les</em> is plural, so the noun is <em>élèves</em> and the verb is <em>chantent</em>. The same mismatch of number makes <em>les enfants joue</em> a solecism."
     },
     {
      "prompt": "Why is <em>la maison</em> not a solecism?",
      "options": ["Because <em>maison</em> has no gender", "The article agrees", "Because <em>la</em> means “there” in this phrase", "Because a solecism is an error inside one letter"],
      "answer": 1,
      "explain": "<em>Maison</em> is feminine, and <em>la</em> agrees with it. The solecism was <em>le maison</em>, where the article did not agree."
     }
    ]
   }
  },
  {
   "id": "participle",
   "title": "The participle, au, and de",
   "body": "<p><em>Les portes que j’ai ouvert</em> uses real forms, and the participle does not fit. <em>Portes</em> (“doors”) is feminine plural, and <em>que</em> stands for that direct object, before the verb. With <em>avoir</em>, the past participle then agrees: <em>les portes que j’ai ouvertes</em>. When the direct object follows, the participle does not agree. <em>J’ai ouvert les portes</em> is the matching sentence.</p><p>With <em>être</em>, the participle agrees with the subject. <em>Elle est arrivé</em> fails. <em>Elle est arrivée</em> (“she has arrived”) agrees.</p><p><em>À le marché</em> is the same kind of error. <em>À</em> and <em>le</em> are real words, and before the singular article they contract: <em>au marché</em> (“to the market,” or “at the market”). After a negation, and after <em>beaucoup</em>, the partitive is <em>de</em> alone: <em>pas de lait</em> (“no milk”), <em>beaucoup de lait</em> (“a lot of milk”), not <em>pas du lait</em>. Before an adjective in the plural, <em>des</em> likewise becomes <em>de</em>: <em>de bons livres</em> (“good books”), not <em>des bons livres</em>.</p>",
   "qp": {
    "id": "q-participle",
    "variants": [
     {
      "prompt": "Why is the participle <em>fermées</em> in <em>les fenêtres que j’ai fermées</em>?",
      "options": ["Because every participle with <em>avoir</em> takes <em>-es</em>", "A preceding direct object, feminine plural", "Because <em>fermées</em> agrees with <em>je</em>", "Because <em>que</em> is feminine by itself"],
      "answer": 1,
      "explain": "With <em>avoir</em>, the participle agrees with a preceding direct object. <em>Fenêtres</em> is feminine plural, as <em>portes</em> is in <em>les portes que j’ai ouvertes</em>."
     },
     {
      "prompt": "Choose the phrase for “to the teacher.”",
      "options": ["<em>à le professeur</em>", "<em>au professeur</em>", "<em>à les professeur</em>", "<em>aux le professeur</em>"],
      "answer": 1,
      "explain": "<em>À</em> contracts with <em>le</em> to <em>au</em>, as <em>au marché</em> replaces <em>à le marché</em>. <em>Professeur</em> is masculine singular."
     },
     {
      "prompt": "Why is the phrase <em>pas de vin</em>, not <em>pas du vin</em>?",
      "options": ["Because <em>vin</em> is feminine", "Negation takes <em>de</em> alone", "Because <em>pas</em> is a preposition that takes <em>au</em>", "Because <em>du</em> is the past participle of <em>devoir</em>"],
      "answer": 1,
      "explain": "After a negation the partitive is <em>de</em> alone, as in <em>pas de lait</em>. <em>Du vin</em> is the partitive in an affirmative phrase such as <em>il boit du vin</em>."
     }
    ]
   }
  },
  {
   "id": "prose-poem",
   "title": "Ordinary speech and the poet",
   "body": "<p><em>Journals</em> in a student’s sentence is a barbarism. The plural is <em>journaux</em>. A poet may invert the ordinary order of a sentence, and that inversion is not the same error. The words are real, and the departure is one the verse allows.</p><p>Donatus marks the difference of setting. A barbarism belongs to ordinary speech. In a poem he calls the same departure in a word a metaplasm (<em>in poemate metaplasmus</em>). The license belongs to the poem. It does not make <em>journals</em> a French plural in prose.</p>",
   "qp": {
    "id": "q-prose-poem",
    "variants": [
     {
      "prompt": "A student writes <em>des travails</em> in an ordinary sentence. The plural of <em>travail</em> (“work”) is <em>travaux</em>. What is <em>travails</em>?",
      "options": ["The ordinary plural of <em>travail</em>", "A barbarism: the plural is <em>travaux</em>", "A metaplasm, and therefore the right prose plural", "A solecism of gender inside a real plural"],
      "answer": 1,
      "explain": "<em>Travaux</em> is the plural of <em>travail</em>, as <em>journaux</em> is the plural of <em>journal</em>. <em>Travails</em> is not a French form. In ordinary speech that is a barbarism."
     },
     {
      "prompt": "What does Donatus call a poet’s departure in a single word?",
      "options": ["A solecism, because verse has no words", "A metaplasm", "A barbarism, and the poem is incorrect for that reason", "No departure: a poem cannot change a word"],
      "answer": 1,
      "explain": "Donatus calls the departure a metaplasm in a poem, and a barbarism in ordinary speech. The license is the poet’s."
     },
     {
      "prompt": "Why does a poet’s inversion of word order differ from <em>des journals</em>?",
      "options": ["The inversion uses real words; <em>journals</em> is not a French form", "Both are barbarisms, because both occur in writing", "The inversion is a gender error, and <em>journals</em> is a tense", "There is no difference"],
      "answer": 0,
      "explain": "<em>Journals</em> fails as a word. The plural is <em>journaux</em>. An inversion keeps real French words and changes their order, which verse may do."
     }
    ]
   }
  }
 ]
};
