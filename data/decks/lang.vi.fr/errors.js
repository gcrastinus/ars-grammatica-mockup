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
   "body": "<p>A student writes <em lang=\"fr\">des journals</em> for “newspapers,” and <em lang=\"fr\">nous mangezons</em> for “we eat.” Neither <em lang=\"fr\">journals</em> nor <em lang=\"fr\">mangezons</em> is a French form, because the plural of <em lang=\"fr\">journal</em> is <em lang=\"fr\">journaux</em>, and the first person plural of <em lang=\"fr\">manger</em> (“to eat”) is <em lang=\"fr\">nous mangeons</em>. <em lang=\"fr\">Vous mangez</em> (“you eat”) is a real form of the second person, but joining its ending to <em lang=\"fr\">-ons</em> does not make a word.</p><p>An accent can make the same difference within one written word: <em lang=\"fr\">là</em> means “there,” whereas <em lang=\"fr\">la</em> is the feminine article; <em lang=\"fr\">sûr</em> means “sure,” whereas <em lang=\"fr\">sur</em> means “on.” The accented and the unaccented forms are two different words, and so writing one for the other is an error in that word.</p><p>Donatus calls a fault in one word a <strong>barbarism</strong>, “one part of speech faulty in ordinary speech” (<em lang=\"fr\">una pars orationis vitiosa in communi sermone</em>; <em lang=\"fr\">Ars maior</em> III). So <em lang=\"fr\">journals</em> and <em lang=\"fr\">mangezons</em> are barbarisms, and so is <em lang=\"fr\">la</em> written where the sentence requires <em lang=\"fr\">là</em>.</p>",
   "qp": {
    "id": "q-one-word",
    "variants": [
     {
      "prompt": "A student writes <em lang=\"fr\">des hôpitals</em>. What kind of error is <em lang=\"fr\">hôpitals</em>?",
      "options": [
       "No error: the plural of <em lang=\"fr\">hôpital</em> adds <em lang=\"fr\">-s</em>",
       "A solecism: <em lang=\"fr\">des</em> and <em lang=\"fr\">hôpitals</em> disagree in gender",
       "A barbarism: the plural is <em lang=\"fr\">hôpitaux</em>",
       "A metaplasm, since the form is unusual"
      ],
      "answer": 2,
      "explain": "<em lang=\"fr\">Hôpital</em> forms the plural <em lang=\"fr\">hôpitaux</em>, as <em lang=\"fr\">journal</em> forms <em lang=\"fr\">journaux</em>. <em lang=\"fr\">Hôpitals</em> is not a French form, so the error is in the one word."
     },
     {
      "prompt": "Why is <em lang=\"fr\">canaux</em> (“canals”) not a barbarism, although it does not end in <em lang=\"fr\">-s</em>?",
      "options": [
       "Because every plural in <em lang=\"fr\">-aux</em> is a poet’s license",
       "Because it is the real plural of <em lang=\"fr\">canal</em>",
       "Because a barbarism is an error in the joining of words",
       "Because a plural noun cannot be a barbarism"
      ],
      "answer": 1,
      "explain": "<em lang=\"fr\">Canaux</em> is the real plural, of the same pattern as <em lang=\"fr\">journaux</em>. A barbarism is a form the language does not have, such as <em lang=\"fr\">canals</em>; an error in the joining of words is a solecism."
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
   "body": "<p><em lang=\"fr\">Le maison</em> joins two real French words, but they do not fit, because <em lang=\"fr\">maison</em> (“house”) is feminine, and its article is <em lang=\"fr\">la</em>. <em lang=\"fr\">Les enfants joue</em> fails in number, because <em lang=\"fr\">enfants</em> (“children”) is plural, whereas <em lang=\"fr\">joue</em> is the third person singular of <em lang=\"fr\">jouer</em> (“to play”); the third person plural is <em lang=\"fr\">jouent</em>.</p><p>Donatus calls an error of this kind a <strong>solecism</strong>, “a fault in the joining of the parts of speech, made against the rule of the art of grammar” (<em lang=\"fr\">vitium in contextu partium orationis contra regulam artis grammaticae factum</em>; <em lang=\"fr\">Ars maior</em> III.2). Each word exists, but the construction is incorrect. So <em lang=\"fr\">le maison</em> is not a barbarism, because <em lang=\"fr\">maison</em> is a real word and <em lang=\"fr\">le</em> is a real article.</p>",
   "qp": {
    "id": "q-agreement",
    "variants": [
     {
      "prompt": "What kind of error is <em lang=\"fr\">le chaise</em>?",
      "options": [
       "A barbarism: <em lang=\"fr\">chaise</em> is not a French word",
       "No error: <em lang=\"fr\">chaise</em> (“chair”) is masculine",
       "A solecism of gender",
       "A metaplasm: prose must use <em lang=\"fr\">le</em> with every noun"
      ],
      "answer": 2,
      "explain": "<em lang=\"fr\">Chaise</em> is a real feminine noun, and <em lang=\"fr\">le</em> is a real masculine article. They do not agree, as <em lang=\"fr\">le maison</em> does not agree. The error is in the joining."
     },
     {
      "prompt": "What fails in <em lang=\"fr\">les élève chante</em>?",
      "options": [
       "Nothing: a plural article takes a singular noun and a singular verb",
       "<em lang=\"fr\">Chante</em> is not a form of <em lang=\"fr\">chanter</em>",
       "Number: <em lang=\"fr\">les</em> is plural, and <em lang=\"fr\">élève</em> and <em lang=\"fr\">chante</em> are singular",
       "Gender: <em lang=\"fr\">élève</em> is feminine"
      ],
      "answer": 2,
      "explain": "The words are real. <em lang=\"fr\">Les</em> is plural, so the noun is <em lang=\"fr\">élèves</em> and the verb is <em lang=\"fr\">chantent</em>. The same mismatch of number makes <em lang=\"fr\">les enfants joue</em> a solecism."
     },
     {
      "prompt": "Why is <em lang=\"fr\">la fleur</em> (“the flower”) not a solecism?",
      "options": [
       "Because <em lang=\"fr\">fleur</em> has no gender",
       "The article agrees",
       "Because <em lang=\"fr\">la</em> means “there” in this phrase",
       "Because a solecism needs a verb"
      ],
      "answer": 1,
      "explain": "<em lang=\"fr\">Fleur</em> is feminine, and <em lang=\"fr\">la</em> agrees with it. In <em lang=\"fr\">le maison</em>, by contrast, the masculine article does not agree with a feminine noun."
     }
    ]
   }
  },
  {
   "id": "prose-poem",
   "title": "Ordinary speech and the poet",
   "body": "<p>A poet may invert the ordinary order of a French sentence, but that inversion is not the same kind of departure as <em lang=\"fr\">journals</em> in a student’s sentence, because the poet’s words are all real French words, and the departure is one that verse allows, whereas <em lang=\"fr\">journals</em> is not a French form.</p><p>Donatus also distinguishes by setting. A barbarism belongs to ordinary speech, whereas in a poem he calls a departure in a single word a <strong>metaplasm</strong> (<em lang=\"fr\">in poemate metaplasmus</em>), a change of form allowed to the poet. That permission belongs to the poem; it does not make <em lang=\"fr\">journals</em> a French plural in prose.</p>",
   "qp": {
    "id": "q-prose-poem",
    "variants": [
     {
      "prompt": "A student writes <em lang=\"fr\">des travails</em> in an ordinary sentence. The plural of <em lang=\"fr\">travail</em> (“work”) is <em lang=\"fr\">travaux</em>. What is <em lang=\"fr\">travails</em>?",
      "options": [
       "The ordinary plural of <em lang=\"fr\">travail</em>",
       "A barbarism: the plural is <em lang=\"fr\">travaux</em>",
       "A metaplasm, and therefore the right prose plural",
       "A solecism of gender inside a real plural"
      ],
      "answer": 1,
      "explain": "<em lang=\"fr\">Travaux</em> is the plural of <em lang=\"fr\">travail</em>, as <em lang=\"fr\">journaux</em> is the plural of <em lang=\"fr\">journal</em>. <em lang=\"fr\">Travails</em> is not a French form. In ordinary speech that is a barbarism."
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
      "prompt": "Why does a poet’s inversion of word order differ from <em lang=\"fr\">des animals</em> for “animals”?",
      "options": [
       "The inversion uses real words; <em lang=\"fr\">animals</em> is not a French form",
       "Both are barbarisms, because both depart from ordinary prose",
       "Both are metaplasms, because both are unusual",
       "<em lang=\"fr\">Animals</em> is a solecism, and the inversion is a barbarism"
      ],
      "answer": 0,
      "explain": "The plural of <em lang=\"fr\">animal</em> is <em lang=\"fr\">animaux</em>, so <em lang=\"fr\">animals</em> fails as a word. An inversion keeps real French words and changes their order, which verse may do."
     }
    ]
   }
  }
 ]
};
