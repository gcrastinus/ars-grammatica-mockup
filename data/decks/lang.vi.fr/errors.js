window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.vi.fr/errors"] = {
 "id": "lang.vi.fr/errors",
 "title": "Barbarism and Solecism in French",
 "sub": "An error in one French word, and an error in the joining of real French words",
 "sources": "Donatus, <em>Ars maior</em>; Grevisse and Goosse, <em>Le bon usage</em>; Larousse",
 "panels": [
  {
   "id": "one-word",
   "title": "An error in one word",
   "body": "<p>A student writes <em>des journals</em> for “newspapers,” and <em>nous mangezons</em> for “we eat.” Neither <em>journals</em> nor <em>mangezons</em> is a French form, because the plural of <em>journal</em> is <em>journaux</em>, and the first person plural of <em>manger</em> (“to eat”) is <em>nous mangeons</em>. <em>Vous mangez</em> (“you eat”) is a real form of the second person, but joining its ending to <em>-ons</em> does not make a word.</p><p>An accent can make the same difference within one written word: <em>là</em> means “there,” whereas <em>la</em> is the feminine article; <em>sûr</em> means “sure,” whereas <em>sur</em> means “on.” The accented and the unaccented forms are two different words, and so writing one for the other is an error in that word.</p><p>Donatus calls a fault in one word a <strong>barbarism</strong>, “one part of speech faulty in ordinary speech” (<em>una pars orationis vitiosa in communi sermone</em>; <em>Ars maior</em> III). So <em>journals</em> and <em>mangezons</em> are barbarisms, and so is <em>la</em> written where the sentence requires <em>là</em>.</p>",
   "qp": {
    "id": "q-one-word",
    "variants": [
     {
      "prompt": "A student writes <em>des hôpitals</em>. What kind of error is <em>hôpitals</em>?",
      "options": [
       "No error: the plural of <em>hôpital</em> adds <em>-s</em>",
       "A solecism: <em>des</em> and <em>hôpitals</em> disagree in gender",
       "A barbarism: the plural is <em>hôpitaux</em>",
       "A metaplasm, since the form is unusual"
      ],
      "answer": 2,
      "explain": "<em>Hôpital</em> forms the plural <em>hôpitaux</em>, as <em>journal</em> forms <em>journaux</em>. <em>Hôpitals</em> is not a French form, so the error is in the one word."
     },
     {
      "prompt": "Why is <em>canaux</em> (“canals”) not a barbarism, although it does not end in <em>-s</em>?",
      "options": [
       "Because every plural in <em>-aux</em> is a poet’s license",
       "Because it is the real plural of <em>canal</em>",
       "Because a barbarism is an error in the joining of words",
       "Because a plural noun cannot be a barbarism"
      ],
      "answer": 1,
      "explain": "<em>Canaux</em> is the real plural, of the same pattern as <em>journaux</em>. A barbarism is a form the language does not have, such as <em>canals</em>; an error in the joining of words is a solecism."
     },
     {
      "prompt": "What does Donatus call an error in one word, in ordinary speech?",
      "options": [
       "A solecism",
       "A barbarism",
       "A metaplasm",
       "A contraction"
      ],
      "answer": 1,
      "explain": "A barbarism is an error in one word, whereas a solecism is an error in the joining of words. A metaplasm is Donatus’s name for the poet’s departure, not for the error in ordinary speech."
     }
    ]
   }
  },
  {
   "id": "agreement",
   "title": "Gender and number",
   "body": "<p><em>Le maison</em> joins two real French words, but they do not fit, because <em>maison</em> (“house”) is feminine, and its article is <em>la</em>. <em>Les enfants joue</em> fails in number, because <em>enfants</em> (“children”) is plural, whereas <em>joue</em> is the third person singular of <em>jouer</em> (“to play”); the third person plural is <em>jouent</em>.</p><p>Donatus calls an error of this kind a <strong>solecism</strong>, “a fault in the joining of the parts of speech, made against the rule of the art of grammar” (<em>vitium in contextu partium orationis contra regulam artis grammaticae factum</em>; <em>Ars maior</em> III.2). Each word exists, but the construction is incorrect. So <em>le maison</em> is not a barbarism, because <em>maison</em> is a real word and <em>le</em> is a real article.</p>",
   "qp": {
    "id": "q-agreement",
    "variants": [
     {
      "prompt": "What kind of error is <em>le chaise</em>?",
      "options": [
       "A barbarism: <em>chaise</em> is not a French word",
       "No error: <em>chaise</em> (“chair”) is masculine",
       "A solecism of gender",
       "A metaplasm: prose must use <em>le</em> with every noun"
      ],
      "answer": 2,
      "explain": "<em>Chaise</em> is a real feminine noun, and <em>le</em> is a real masculine article. They do not agree, as <em>le maison</em> does not agree. The error is in the joining."
     },
     {
      "prompt": "What fails in <em>les élève chante</em>?",
      "options": [
       "Nothing: a plural article takes a singular noun and a singular verb",
       "<em>Chante</em> is not a form of <em>chanter</em>",
       "Number: <em>les</em> is plural, and <em>élève</em> and <em>chante</em> are singular",
       "Gender: <em>élève</em> is feminine"
      ],
      "answer": 2,
      "explain": "The words are real. <em>Les</em> is plural, so the noun is <em>élèves</em> and the verb is <em>chantent</em>. The same mismatch of number makes <em>les enfants joue</em> a solecism."
     },
     {
      "prompt": "Why is <em>la fleur</em> (“the flower”) not a solecism?",
      "options": [
       "Because <em>fleur</em> has no gender",
       "The article agrees",
       "Because <em>la</em> means “there” in this phrase",
       "Because a solecism needs a verb"
      ],
      "answer": 1,
      "explain": "<em>Fleur</em> is feminine, and <em>la</em> agrees with it. In <em>le maison</em>, by contrast, the masculine article does not agree with a feminine noun."
     }
    ]
   }
  },
  {
   "id": "prose-poem",
   "title": "Ordinary speech and the poet",
   "body": "<p>A poet may invert the ordinary order of a French sentence, but that inversion is not the same kind of departure as <em>journals</em> in a student’s sentence, because the poet’s words are all real French words, and the departure is one that verse allows, whereas <em>journals</em> is not a French form.</p><p>Donatus also distinguishes by setting. A barbarism belongs to ordinary speech, whereas in a poem he calls a departure in a single word a <strong>metaplasm</strong> (<em>in poemate metaplasmus</em>), a change of form allowed to the poet. That permission belongs to the poem; it does not make <em>journals</em> a French plural in prose.</p>",
   "qp": {
    "id": "q-prose-poem",
    "variants": [
     {
      "prompt": "A student writes <em>des travails</em> in an ordinary sentence. The plural of <em>travail</em> (“work”) is <em>travaux</em>. What is <em>travails</em>?",
      "options": [
       "The ordinary plural of <em>travail</em>",
       "A barbarism: the plural is <em>travaux</em>",
       "A metaplasm, and therefore the right prose plural",
       "A solecism of gender inside a real plural"
      ],
      "answer": 1,
      "explain": "<em>Travaux</em> is the plural of <em>travail</em>, as <em>journaux</em> is the plural of <em>journal</em>. <em>Travails</em> is not a French form. In ordinary speech that is a barbarism."
     },
     {
      "prompt": "What does Donatus call a poet’s departure in a single word?",
      "options": [
       "A solecism, because the error lies in the joining",
       "A metaplasm",
       "A barbarism, and the poem is incorrect for that reason",
       "No departure: a poem cannot change a word"
      ],
      "answer": 1,
      "explain": "Donatus calls the departure a metaplasm in a poem, and a barbarism in ordinary speech. The license is the poet’s."
     },
     {
      "prompt": "Why does a poet’s inversion of word order differ from <em>des animals</em> for “animals”?",
      "options": [
       "The inversion uses real words; <em>animals</em> is not a French form",
       "Both are barbarisms, because both depart from ordinary prose",
       "Both are metaplasms, because both are unusual",
       "<em>Animals</em> is a solecism, and the inversion is a barbarism"
      ],
      "answer": 0,
      "explain": "The plural of <em>animal</em> is <em>animaux</em>, so <em>animals</em> fails as a word. An inversion keeps real French words and changes their order, which verse may do."
     }
    ]
   }
  }
 ]
};
