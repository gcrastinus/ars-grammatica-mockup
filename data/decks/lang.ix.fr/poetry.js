window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ix.fr/poetry"] = {
 "id": "lang.ix.fr/poetry",
 "title": "French Poetry",
 "sub": "Ten passages of French verse, read part by part",
 "sources": "Lawless; the translations of the verse, other than Mongan’s prose for Corneille, are the course’s own plain renderings, line by line",
 "panels": [
  {
   "id": "poetry-1",
   "title": "Racine, <em lang=\"fr\">Phèdre</em> I.1.1–4 · Alexandrine",
   "body": "<p lang=\"fr\">Le dessein en est pris : je pars, cher Théramène,<br>Et quitte le séjour de l’aimable Trézène.<br>Dans le doute mortel dont je suis agité,<br>Je commence à rougir de mon oisiveté.</p><p>The plan for it is made: I am leaving, dear Theramenes,<br>and I leave the dwelling of lovely Troezen.<br>In the mortal doubt by which I am shaken,<br>I begin to blush for my idleness.</p><p><strong>Context.</strong> Hippolytus, son of Theseus, tells his tutor Theramenes that he will go in search of his father. The lines are alexandrines, of twelve syllables, rhyming in pairs.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-1",
    "variants": [
     {
      "prompt": "What does the present <em lang=\"fr\">je pars</em> state?",
      "options": [
       "What happened in the past and is now over",
       "What is already decided",
       "A wish",
       "A habit"
      ],
      "answer": 1,
      "explain": "The present <em lang=\"fr\">je pars</em> states what is already decided: “I am leaving.”"
     },
     {
      "prompt": "Why is the pronoun not repeated before <em lang=\"fr\">quitte</em>?",
      "options": [
       "<em lang=\"fr\">Quitte</em> is an imperative",
       "It is an infinitive",
       "It shares the subject <em lang=\"fr\">je</em>",
       "Its subject is <em lang=\"fr\">Théramène</em>"
      ],
      "answer": 2,
      "explain": "The two verbs share one subject, so <em lang=\"fr\">je</em> is not repeated."
     },
     {
      "prompt": "What does <em lang=\"fr\">rougir de</em> take?",
      "options": [
       "<em lang=\"fr\">à</em>, as <em lang=\"fr\">commencer</em> does",
       "no preposition",
       "<em lang=\"fr\">pour</em>",
       "<em lang=\"fr\">de</em>"
      ],
      "answer": 3,
      "explain": "<em lang=\"fr\">Rougir</em> takes <em lang=\"fr\">de</em> for the cause: “to blush for.”"
     }
    ]
   }
  },
  {
   "id": "poetry-2",
   "title": "<em lang=\"fr\">En</em> and the passive",
   "body": "<p><em lang=\"fr\">Le dessein en est pris</em>: <em lang=\"fr\">Est pris</em>, “is taken,” is passive. <em lang=\"fr\">En</em>, “of it,” refers to what he is about to say, so the sense is “the plan for it is made.”</p>"
  },
  {
   "id": "poetry-3",
   "title": "The present for a decision",
   "body": "<p><em lang=\"fr\">je pars, cher Théramène</em>: <em lang=\"fr\">Je pars</em> (“I am leaving”) is a present that states what is already decided. <em lang=\"fr\">Cher Théramène</em> (“dear Theramenes”) is the address.</p>"
  },
  {
   "id": "poetry-4",
   "title": "A second verb",
   "body": "<p><em lang=\"fr\">Et quitte le séjour de l’aimable Trézène</em>: <em lang=\"fr\">Quitte</em> (“leave”) shares the subject <em lang=\"fr\">je</em>, so the pronoun is not repeated.</p>"
  },
  {
   "id": "poetry-5",
   "title": "The relative <em lang=\"fr\">dont</em>",
   "body": "<p><em lang=\"fr\">Dans le doute mortel dont je suis agité</em>: <em lang=\"fr\">Dont</em> stands for <em lang=\"fr\">de</em> with the relative, so the sense is “the mortal doubt by which I am shaken.” <em lang=\"fr\">Je suis agité</em> is passive, and <em lang=\"fr\">de</em> gives the agent.</p>"
  },
  {
   "id": "poetry-6",
   "title": "<em lang=\"fr\">Commencer à</em>",
   "body": "<p><em lang=\"fr\">Je commence à rougir de mon oisiveté</em>: <em lang=\"fr\">Commencer</em> takes <em lang=\"fr\">à</em> with the infinitive. <em lang=\"fr\">Rougir de</em>, “to blush for,” takes <em lang=\"fr\">de</em>.</p>"
  },
  {
   "id": "poetry-7",
   "title": "Ronsard, <em lang=\"fr\">Odes</em> “Mignonne, allons voir si la rose” 1–6 · Octosyllable",
   "body": "<p lang=\"fr\">Mignonne, allons voir si la rose<br>Qui ce matin avait déclose<br>Sa robe de pourpre au soleil,<br>A point perdu cette vesprée<br>Les plis de sa robe pourprée,<br>Et son teint au vôtre pareil.</p><p>Darling, let us go and see whether the rose<br>that this morning had opened<br>its purple gown to the sun<br>has at all lost, this evening,<br>the folds of its purple gown,<br>and its color, like yours.</p><p><strong>Context.</strong> Ronsard asks a young woman to come and see whether the rose that opened this morning has faded by evening; the poem ends with a call to gather youth while it lasts. Each line has eight syllables, or nine with a final mute <em lang=\"fr\">e</em>.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-7",
    "variants": [
     {
      "prompt": "What is <em lang=\"fr\">Mignonne</em>?",
      "options": [
       "The subject of <em lang=\"fr\">allons</em>, placed first",
       "An object",
       "An adjective of the rose",
       "The address"
      ],
      "answer": 3,
      "explain": "<em lang=\"fr\">Mignonne</em>, “darling,” is the person spoken to, so it is the address."
     },
     {
      "prompt": "What tense is <em lang=\"fr\">avait déclose</em>?",
      "options": [
       "Pluperfect",
       "<i lang=\"fr\">Passé composé</i>, like <em lang=\"fr\">a perdu</em> after it",
       "Imperfect",
       "Future perfect"
      ],
      "answer": 0,
      "explain": "It describes the rose opening this morning."
     },
     {
      "prompt": "What does <em lang=\"fr\">point</em> mean without <em lang=\"fr\">ne</em> in <em lang=\"fr\">A point perdu</em>?",
      "options": [
       "“not,” as part of the negative",
       "“at all”",
       "“a little”",
       "“soon”"
      ],
      "answer": 1,
      "explain": "Without <em lang=\"fr\">ne</em>, <em lang=\"fr\">point</em> keeps its older sense “at all”: whether the rose has at all lost its folds."
     }
    ]
   }
  },
  {
   "id": "poetry-8",
   "title": "The imperative of the first person plural",
   "body": "<p><em lang=\"fr\">Mignonne, allons voir</em>: <em lang=\"fr\">Mignonne</em>, “darling,” is the address. <em lang=\"fr\">Allons</em> is the imperative, “let us go,” with the infinitive <em lang=\"fr\">voir</em>.</p>"
  },
  {
   "id": "poetry-9",
   "title": "An indirect question and a relative clause",
   "body": "<p><em lang=\"fr\">si la rose\nQui ce matin avait déclose\nSa robe de pourpre au soleil</em>: <em lang=\"fr\">Si</em>, “whether,” begins the indirect question. <em lang=\"fr\">Qui … avait déclose</em>, pluperfect, describes the rose. <em lang=\"fr\">Déclose</em>, an old word for “opened,” agrees with <em lang=\"fr\">sa robe</em>, its object, as the older language allowed even when the object came after.</p>"
  },
  {
   "id": "poetry-10",
   "title": "The verb of the question",
   "body": "<p><em lang=\"fr\">A point perdu cette vesprée</em>: <em lang=\"fr\">A … perdu</em>, <em lang=\"fr\">passé composé</em>, is the verb of the question: whether the rose has lost. <em lang=\"fr\">Point</em> without <em lang=\"fr\">ne</em> means “at all.” <em lang=\"fr\">Cette vesprée</em>, “this evening,” is an old word.</p>"
  },
  {
   "id": "poetry-11",
   "title": "The possessive pronoun",
   "body": "<p><em lang=\"fr\">Et son teint au vôtre pareil</em>: <em lang=\"fr\">Le vôtre</em>, “yours,” is a possessive pronoun, and <em lang=\"fr\">au vôtre</em> is <em lang=\"fr\">à le vôtre</em>. <em lang=\"fr\">Pareil à</em> means “like,” so the sense is “its color like yours.”</p>"
  },
  {
   "id": "poetry-12",
   "title": "Verlaine, <em lang=\"fr\">Romances sans paroles</em> “Ariettes oubliées” III.1–8 · Hexasyllable",
   "body": "<p lang=\"fr\">Il pleure dans mon cœur<br>Comme il pleut sur la ville ;<br>Quelle est cette langueur<br>Qui pénètre mon cœur ?<br><br>Ô bruit doux de la pluie<br>Par terre et sur les toits !<br>Pour un cœur qui s’ennuie,<br>Ô le chant de la pluie !</p><p>It weeps in my heart<br>as it rains on the town;<br>what is this languor<br>that pierces my heart?<br><br>O sweet sound of the rain<br>on the ground and on the roofs!<br>For a heart that is weary,<br>O the song of the rain!</p><p><strong>Context.</strong> Verlaine makes an impersonal verb of weeping on the model of <em lang=\"fr\">il pleut</em>, “it rains.” The lines have six syllables.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-12",
    "variants": [
     {
      "prompt": "What does <em lang=\"fr\">Comme</em> make in <em lang=\"fr\">Comme il pleut sur la ville</em>?",
      "options": [
       "A clause of cause, “since it rains”",
       "A comparison",
       "A question",
       "A clause of time"
      ],
      "answer": 1,
      "explain": "<em lang=\"fr\">Comme</em> sets the weeping of the heart beside the rain: “as it rains on the town.”"
     },
     {
      "prompt": "What is the subject of <em lang=\"fr\">pénètre</em>?",
      "options": [
       "<em lang=\"fr\">mon cœur</em>, which follows the verb",
       "<em lang=\"fr\">Quelle</em>",
       "<em lang=\"fr\">Qui</em>",
       "<em lang=\"fr\">il</em>"
      ],
      "answer": 2,
      "explain": "<em lang=\"fr\">Qui</em> stands for <em lang=\"fr\">langueur</em>."
     },
     {
      "prompt": "What does <em lang=\"fr\">Ô</em> with a noun make?",
      "options": [
       "A question with its verb understood",
       "A command",
       "A relative clause",
       "An exclamation"
      ],
      "answer": 3,
      "explain": "<em lang=\"fr\">Ô</em> with a noun makes an exclamation: “O sweet sound of the rain.”"
     }
    ]
   }
  },
  {
   "id": "poetry-13",
   "title": "An impersonal verb made new",
   "body": "<p><em lang=\"fr\">Il pleure dans mon cœur</em>: <em lang=\"fr\">Pleurer</em>, “to weep,” is not impersonal; Verlaine uses it like <em lang=\"fr\">pleuvoir</em>, with the empty subject <em lang=\"fr\">il</em>: it weeps in my heart.</p>"
  },
  {
   "id": "poetry-14",
   "title": "The impersonal pleuvoir",
   "body": "<p><em lang=\"fr\">Comme il pleut sur la ville</em>: <em lang=\"fr\">Il pleut</em> (“it rains”) is the true impersonal. <em lang=\"fr\">Comme</em> makes the comparison: “as it rains on the town.”</p>"
  },
  {
   "id": "poetry-15",
   "title": "The interrogative <em lang=\"fr\">quel</em>",
   "body": "<p><em lang=\"fr\">Quelle est cette langueur\nQui pénètre mon cœur ?</em>: <em lang=\"fr\">Quelle</em> (“what”) agrees with <em lang=\"fr\">langueur</em>, which is feminine. <em lang=\"fr\">Qui</em> is the subject of <em lang=\"fr\">pénètre</em> (“pierces”).</p>"
  },
  {
   "id": "poetry-16",
   "title": "An exclamation without a verb",
   "body": "<p><em lang=\"fr\">Ô bruit doux de la pluie</em>: <em lang=\"fr\">Ô</em> with a noun makes an exclamation (“O sweet sound of the rain”), and the line has no verb.</p>"
  },
  {
   "id": "poetry-17",
   "title": "A reflexive verb",
   "body": "<p><em lang=\"fr\">Pour un cœur qui s’ennuie</em>: <em lang=\"fr\">S’ennuyer</em>, “to be weary, to grieve,” is reflexive in French.</p>"
  },
  {
   "id": "poetry-18",
   "title": "Charles d’Orléans, <em lang=\"fr\">Rondeaux</em> “Le temps a laissié son manteau” 1–4 · Octosyllable",
   "body": "<p lang=\"fr\">Le temps a laissié son manteau<br>De vent, de froidure et de pluye,<br>Et s’est vestu de brouderie,<br>De soleil luyant, cler et beau.</p><p>The season has left off his cloak<br>of wind, of cold, and of rain,<br>and has clothed himself with embroidery<br>of shining sun, clear and fair.</p><p><strong>Context.</strong> This is a rondeau of the fifteenth century, in the spelling of its time: <em lang=\"fr\">laissié</em> for <em lang=\"fr\">laissé</em>, <em lang=\"fr\">pluye</em> for <em lang=\"fr\">pluie</em>, <em lang=\"fr\">vestu</em> for <em lang=\"fr\">vêtu</em>, <em lang=\"fr\">luyant</em> for <em lang=\"fr\">luisant</em>, and <em lang=\"fr\">cler</em> for <em lang=\"fr\">clair</em>. The line is the octosyllable, of eight syllables.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-18",
    "variants": [
     {
      "prompt": "What is the object of <em lang=\"fr\">a laissié</em>?",
      "options": [
       "<em lang=\"fr\">le temps</em>, the season",
       "<em lang=\"fr\">pluye</em>",
       "<em lang=\"fr\">vent</em>",
       "<em lang=\"fr\">son manteau</em>"
      ],
      "answer": 3,
      "explain": "<em lang=\"fr\">Son manteau</em> is what the season has left off, so it is the object."
     },
     {
      "prompt": "What is the modern spelling of <em lang=\"fr\">cler</em>?",
      "options": [
       "<em lang=\"fr\">clair</em>",
       "<em lang=\"fr\">clerc</em>, the clergyman",
       "<em lang=\"fr\">cher</em>",
       "<em lang=\"fr\">clé</em>"
      ],
      "answer": 0,
      "explain": "The rondeau keeps the spelling of its time."
     },
     {
      "prompt": "What does <em lang=\"fr\">De brouderie</em> tell?",
      "options": [
       "What the cloak of winter was made of",
       "What he wears",
       "When he dressed",
       "Where he went"
      ],
      "answer": 1,
      "explain": "<em lang=\"fr\">De brouderie</em>, “with embroidery,” tells what he is dressed in."
     }
    ]
   }
  },
  {
   "id": "poetry-19",
   "title": "Subject, verb, object",
   "body": "<p><em lang=\"fr\">Le temps a laissié son manteau</em>: <em lang=\"fr\">Le temps</em>, “the season” or “the weather,” is the subject. <em lang=\"fr\">A laissié</em> is the <em lang=\"fr\">passé composé</em> of <em lang=\"fr\">laisser</em>, “has left off,” and <em lang=\"fr\">son manteau</em> its object.</p>"
  },
  {
   "id": "poetry-20",
   "title": "What the cloak is made of",
   "body": "<p><em lang=\"fr\">De vent, de froidure et de pluye</em>: The three phrases with <em lang=\"fr\">de</em> tell what the cloak is made of: wind, cold, and rain.</p>"
  },
  {
   "id": "poetry-21",
   "title": "A reflexive verb",
   "body": "<p><em lang=\"fr\">Et s’est vestu de brouderie</em>: <em lang=\"fr\">S’est vestu</em>, “has clothed himself,” is the <em lang=\"fr\">passé composé</em> of the reflexive <em lang=\"fr\">se vêtir</em>, and so it takes <em lang=\"fr\">être</em>. <em lang=\"fr\">De brouderie</em>, “with embroidery,” tells what he wears.</p>"
  },
  {
   "id": "poetry-22",
   "title": "The embroidery named",
   "body": "<p><em lang=\"fr\">De soleil luyant, cler et beau</em>: <em lang=\"fr\">Luyant</em>, “shining,” is a present participle used as an adjective. <em lang=\"fr\">Cler et beau</em>, “clear and fair,” also describe the sun.</p>"
  },
  {
   "id": "poetry-23",
   "title": "Corneille, <em lang=\"fr\">Le Cid</em> I.4.1–4 · Alexandrine",
   "body": "<p lang=\"fr\">Ô rage ! ô désespoir ! ô vieillesse ennemie !<br>N’ai-je donc tant vécu que pour cette infamie ?<br>Et ne suis-je blanchi dans les travaux guerriers<br>Que pour voir en un jour flétrir tant de lauriers ?</p><p>O rage! O despair! O inimical old age! Have I then lived so long only for this disgrace? And have I grown gray in warlike toils, only to see in one day so many of my laurels wither?<br>Translation: Roscoe Mongan.</p><p><strong>Context.</strong> Don Diègue, too old to avenge the slap he has just received, laments alone. The alexandrine has twelve syllables, with a pause after the sixth.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-23",
    "variants": [
     {
      "prompt": "What is <em lang=\"fr\">ennemie</em> here?",
      "options": [
       "A noun, “enemy,” the subject of the line",
       "An adjective, “hostile”",
       "A verb",
       "An adverb"
      ],
      "answer": 1,
      "explain": "It agrees with <em lang=\"fr\">vieillesse</em>."
     },
     {
      "prompt": "What does <em lang=\"fr\">Que pour voir</em> complete?",
      "options": [
       "A clause of purpose with <em lang=\"fr\">pour que</em>",
       "A comparison with <em lang=\"fr\">tant</em>",
       "<em lang=\"fr\">ne … que</em> from the line above",
       "A question with <em lang=\"fr\">que</em>"
      ],
      "answer": 2,
      "explain": "<em lang=\"fr\">Que</em> completes the <em lang=\"fr\">ne</em> of the line above: “only to see.”"
     },
     {
      "prompt": "What is the subject of <em lang=\"fr\">flétrir</em>?",
      "options": [
       "<em lang=\"fr\">je</em>, the speaker who sees",
       "<em lang=\"fr\">jour</em>",
       "<em lang=\"fr\">travaux</em>",
       "<em lang=\"fr\">tant de lauriers</em>"
      ],
      "answer": 3,
      "explain": "After <em lang=\"fr\">voir</em>, the infinitive comes before its subject."
     }
    ]
   }
  },
  {
   "id": "poetry-24",
   "title": "Three exclamations",
   "body": "<p><em lang=\"fr\">Ô rage ! ô désespoir ! ô vieillesse ennemie !</em>: Three nouns are called on with <em lang=\"fr\">ô</em> (“O rage! O despair! O hostile old age!”). <em lang=\"fr\">Ennemie</em> is here an adjective, “hostile,” agreeing with <em lang=\"fr\">vieillesse</em>.</p>"
  },
  {
   "id": "poetry-25",
   "title": "<em lang=\"fr\">Ne … que</em>, and inversion",
   "body": "<p><em lang=\"fr\">N’ai-je donc tant vécu que pour cette infamie ?</em>: <em lang=\"fr\">Ne … que</em> means “only”: have I lived so long only for this disgrace? The subject <em lang=\"fr\">je</em> follows the verb because it is a question.</p>"
  },
  {
   "id": "poetry-26",
   "title": "<em lang=\"fr\">Être</em> with a participle",
   "body": "<p><em lang=\"fr\">Et ne suis-je blanchi dans les travaux guerriers</em>: <em lang=\"fr\">Suis-je blanchi</em>, “have I grown white,” uses <em lang=\"fr\">être</em> with the participle of <em lang=\"fr\">blanchir</em>, describing a state.</p>"
  },
  {
   "id": "poetry-27",
   "title": "The second <em lang=\"fr\">ne … que</em>, and an infinitive after <em lang=\"fr\">voir</em>",
   "body": "<p><em lang=\"fr\">Que pour voir en un jour flétrir tant de lauriers ?</em>: <em lang=\"fr\">Que pour voir</em> completes <em lang=\"fr\">ne … que</em> from the line above. After <em lang=\"fr\">voir</em> the infinitive <em lang=\"fr\">flétrir</em> comes before its subject <em lang=\"fr\">tant de lauriers</em>: to see so many laurels wither.</p>"
  },
  {
   "id": "poetry-28",
   "title": "Corneille, <em lang=\"fr\">Le Cid</em> I.5 · Alexandrine",
   "body": "<p lang=\"fr\">Rodrigue, as-tu du cœur ?<br>— Tout autre que mon père<br>L’éprouverait sur l’heure.</p><p>Rodrigo, have you courage?<br>— Any other than my father would have found that out instantly.<br>Translation: Roscoe Mongan.</p><p><strong>Context.</strong> Don Diègue, too old to avenge an insult, asks his son whether he has the courage to do it for him. One alexandrine is divided between the two speakers.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-28",
    "variants": [
     {
      "prompt": "What is <em lang=\"fr\">Rodrigue</em>?",
      "options": [
       "The address",
       "The subject of <em lang=\"fr\">as-tu</em>",
       "The object",
       "An apposition"
      ],
      "answer": 0,
      "explain": "Don Diègue speaks to his son, so <em lang=\"fr\">Rodrigue</em> is the address."
     },
     {
      "prompt": "What does <em lang=\"fr\">L’</em> stand for in <em lang=\"fr\">L’éprouverait</em>?",
      "options": [
       "The father, the person tested",
       "The hour",
       "Rodrigue",
       "The courage"
      ],
      "answer": 3,
      "explain": "<em lang=\"fr\">L’</em> stands for the courage: any other would put it to the test."
     },
     {
      "prompt": "How is the alexandrine divided here?",
      "options": [
       "Into two separate sentences by the same speaker",
       "Into three lines",
       "Between two speakers",
       "It is not divided"
      ],
      "answer": 2,
      "explain": "One alexandrine is shared by the two speakers."
     }
    ]
   }
  },
  {
   "id": "poetry-29",
   "title": "Inversion in a question, and the partitive",
   "body": "<p><em lang=\"fr\">Rodrigue, as-tu du cœur ?</em>: <em lang=\"fr\">As-tu</em> asks by putting the pronoun after the verb. <em lang=\"fr\">Du cœur</em> is partitive: some heart, that is, courage.</p>"
  },
  {
   "id": "poetry-30",
   "title": "<em lang=\"fr\">Tout autre que</em>",
   "body": "<p><em lang=\"fr\">Tout autre que mon père</em>: <em lang=\"fr\">Tout autre que</em>, “anyone other than,” is the subject, so the sense is “anyone other than my father.”</p>"
  },
  {
   "id": "poetry-31",
   "title": "The conditional",
   "body": "<p><em lang=\"fr\">L’éprouverait sur l’heure</em>: <em lang=\"fr\">Éprouverait</em> is conditional: any other would find it out, if he had asked. <em lang=\"fr\">L’</em> stands for the courage.</p>"
  },
  {
   "id": "poetry-32",
   "title": "Ronsard, <em lang=\"fr\">Sonnets pour Hélène</em> II.24.1–4 · Alexandrine",
   "body": "<p lang=\"fr\">Quand vous serez bien vieille, au soir, à la chandelle,<br>Assise auprès du feu, dévidant et filant,<br>Direz, chantant mes vers, en vous émerveillant :<br>Ronsard me célébrait du temps que j’étais belle.</p><p>When you are very old, in the evening, by the candle,<br>seated near the fire, winding and spinning,<br>you will say, singing my verses, marveling:<br>“Ronsard praised me in the days when I was beautiful.”</p><p><strong>Context.</strong> Ronsard imagines the woman he loves grown old, remembering that a poet once praised her. The poem is a sonnet in alexandrines.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-32",
    "variants": [
     {
      "prompt": "What is <em lang=\"fr\">Assise</em>?",
      "options": [
       "A present participle, like <em lang=\"fr\">filant</em>",
       "A noun",
       "A finite verb",
       "A past participle in the feminine"
      ],
      "answer": 3,
      "explain": "<em lang=\"fr\">Assise</em>, “seated,” is a past participle with the feminine <em lang=\"fr\">-e</em>, agreeing with the speaker."
     },
     {
      "prompt": "What does <em lang=\"fr\">du temps que</em> mean?",
      "options": [
       "“in the days when”",
       "“because of the time that,” giving a reason",
       "“until”",
       "“since”"
      ],
      "answer": 0,
      "explain": "Ronsard praised me in the days when I was beautiful."
     },
     {
      "prompt": "What tense are <em lang=\"fr\">célébrait</em> and <em lang=\"fr\">étais</em>?",
      "options": [
       "<i lang=\"fr\">Passé simple</i>, of single events",
       "Imperfect",
       "Conditional",
       "Future"
      ],
      "answer": 1,
      "explain": "The imperfect describes a state that lasted over a period of time."
     }
    ]
   }
  },
  {
   "id": "poetry-33",
   "title": "The future after quand",
   "body": "<p><em lang=\"fr\">Quand vous serez bien vieille</em>: <em lang=\"fr\">Serez</em> is future. After <em lang=\"fr\">quand</em>, of time to come, French uses the future, where English uses the present: when you are.</p>"
  },
  {
   "id": "poetry-34",
   "title": "Participles",
   "body": "<p><em lang=\"fr\">Assise auprès du feu, dévidant et filant</em>: <em lang=\"fr\">Assise</em>, “seated,” is a past participle in the feminine. <em lang=\"fr\">Dévidant et filant</em>, “winding and spinning,” are present participles.</p>"
  },
  {
   "id": "poetry-35",
   "title": "The verb without its pronoun",
   "body": "<p><em lang=\"fr\">Direz, chantant mes vers, en vous émerveillant</em>: <em lang=\"fr\">Direz</em> has no pronoun; the older language could leave out <em lang=\"fr\">vous</em>. <em lang=\"fr\">En vous émerveillant</em>, with <em lang=\"fr\">en</em>, is the gerund: marveling.</p>"
  },
  {
   "id": "poetry-36",
   "title": "The words she will say",
   "body": "<p><em lang=\"fr\">Ronsard me célébrait du temps que j’étais belle</em>: <em lang=\"fr\">Célébrait</em> (“praised”) and <em lang=\"fr\">étais</em> (“was”) are imperfects, of a time that lasted. <em lang=\"fr\">Du temps que</em> means “in the days when.”</p>"
  },
  {
   "id": "poetry-37",
   "title": "Du Bellay, <em lang=\"fr\">Divers jeux rustiques</em> “D’un vanneur de blé aux vents” 1–6 · Lines of six syllables",
   "body": "<p lang=\"fr\">À vous, troupe légère,<br>Qui d’aile passagère<br>Par le monde volez,<br>Et d’un sifflant murmure<br>L’ombrageuse verdure<br>Doucement ébranlez,</p><p>To you, light band,<br>who with passing wing<br>fly through the world,<br>and with a whistling murmur<br>the shady green<br>gently shake,</p><p><strong>Context.</strong> A winnower of grain calls on the winds. The sentence begins with its indirect object, <em lang=\"fr\">à vous</em>, and the verb, “I offer,” does not come until the seventh line, after the passage ends.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-37",
    "variants": [
     {
      "prompt": "What is <em lang=\"fr\">À vous</em>?",
      "options": [
       "The indirect object of a verb still to come",
       "The subject of <em lang=\"fr\">volez</em>",
       "An exclamation without a verb",
       "A direct object"
      ],
      "answer": 0,
      "explain": "The verb, “I offer,” comes later."
     },
     {
      "prompt": "What does <em lang=\"fr\">D’aile passagère</em> tell?",
      "options": [
       "Where the winds come from",
       "When they fly",
       "To whom they fly",
       "How they fly"
      ],
      "answer": 3,
      "explain": "<em lang=\"fr\">D’aile passagère</em>, “with passing wing,” tells how they fly."
     },
     {
      "prompt": "Where does the object of <em lang=\"fr\">ébranlez</em> stand?",
      "options": [
       "After the verb, in the usual order",
       "In the next stanza",
       "Before the verb",
       "It is understood"
      ],
      "answer": 2,
      "explain": "The object comes first in the clause and the verb last: <em lang=\"fr\">L’ombrageuse verdure … ébranlez</em>."
     }
    ]
   }
  },
  {
   "id": "poetry-38",
   "title": "The indirect object first",
   "body": "<p><em lang=\"fr\">À vous, troupe légère</em>: <em lang=\"fr\">À vous</em>, “to you,” is the indirect object of a verb still to come. <em lang=\"fr\">Troupe légère</em>, “light band,” is in apposition to <em lang=\"fr\">vous</em>: the winds.</p>"
  },
  {
   "id": "poetry-39",
   "title": "A relative clause",
   "body": "<p><em lang=\"fr\">Qui d’aile passagère\nPar le monde volez</em>: <em lang=\"fr\">Qui</em> takes up <em lang=\"fr\">vous</em>, and so its verb is second person plural, <em lang=\"fr\">volez</em>. <em lang=\"fr\">D’aile passagère</em>, “with passing wing,” tells how they fly.</p>"
  },
  {
   "id": "poetry-40",
   "title": "A second verb, the object before it",
   "body": "<p><em lang=\"fr\">Et d’un sifflant murmure\nL’ombrageuse verdure\nDoucement ébranlez</em>: <em lang=\"fr\">Et</em> adds a second verb to the same <em lang=\"fr\">qui</em>: <em lang=\"fr\">ébranlez</em>, “you shake.” Its object, <em lang=\"fr\">l’ombrageuse verdure</em>, “the shady green,” comes before it, and <em lang=\"fr\">d’un sifflant murmure</em> tells how.</p>"
  },
  {
   "id": "poetry-41",
   "title": "Racine, <em lang=\"fr\">Phèdre</em> I.3.273–276 · Alexandrine",
   "body": "<p lang=\"fr\">Je le vis, je rougis, je pâlis à sa vue ;<br>Un trouble s’éleva dans mon âme éperdue ;<br>Mes yeux ne voyaient plus, je ne pouvais parler ;<br>Je sentis tout mon corps et transir et brûler :</p><p>I saw him, I blushed, I grew pale at the sight of him;<br>a trouble arose in my distraught soul;<br>my eyes no longer saw, I could not speak;<br>I felt my whole body both freeze and burn:</p><p><strong>Context.</strong> Phèdre tells Œnone how she first saw Hippolyte. The <em lang=\"fr\">passé simple</em> gives each event once and complete; the imperfect gives the states that lasted.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-41",
    "variants": [
     {
      "prompt": "What is <em lang=\"fr\">le</em> in <em lang=\"fr\">Je le vis</em>?",
      "options": [
       "The article of a noun understood",
       "The object pronoun, “him”",
       "The subject",
       "An indirect object"
      ],
      "answer": 1,
      "explain": "It stands before <em lang=\"fr\">vis</em>."
     },
     {
      "prompt": "What does <em lang=\"fr\">Ne … plus</em> mean?",
      "options": [
       "“only,” limiting the verb",
       "“never”",
       "“no longer”",
       "“nothing”"
      ],
      "answer": 2,
      "explain": "<em lang=\"fr\">Ne … plus</em> means “no longer”: my eyes no longer saw."
     },
     {
      "prompt": "What does <em lang=\"fr\">Et … et</em> mean in <em lang=\"fr\">et transir et brûler</em>?",
      "options": [
       "“either … or,” of two choices",
       "“neither … nor”",
       "“and then”",
       "“both … and”"
      ],
      "answer": 3,
      "explain": "<em lang=\"fr\">Et … et</em> joins the two verbs as “both … and”: both freeze and burn."
     }
    ]
   }
  },
  {
   "id": "poetry-42",
   "title": "Three verbs in the <em lang=\"fr\">passé simple</em>",
   "body": "<p><em lang=\"fr\">Je le vis, je rougis, je pâlis à sa vue</em>: <em lang=\"fr\">Vis</em> (“saw”), <em lang=\"fr\">rougis</em> (“blushed”), and <em lang=\"fr\">pâlis</em> (“grew pale”) are three forms of the <em lang=\"fr\">passé simple</em>, each a single completed event, one after another. <em lang=\"fr\">Le</em> is the object of <em lang=\"fr\">vis</em>, placed before the verb.</p>"
  },
  {
   "id": "poetry-43",
   "title": "A reflexive verb",
   "body": "<p><em lang=\"fr\">Un trouble s’éleva dans mon âme éperdue</em>: <em lang=\"fr\">S’éleva</em>, “arose,” is the <em lang=\"fr\">passé simple</em> of the reflexive <em lang=\"fr\">s’élever</em>. <em lang=\"fr\">Éperdue</em> is feminine to agree with <em lang=\"fr\">âme</em>.</p>"
  },
  {
   "id": "poetry-44",
   "title": "The imperfect for a state",
   "body": "<p><em lang=\"fr\">Mes yeux ne voyaient plus, je ne pouvais parler</em>: <em lang=\"fr\">Voyaient</em> and <em lang=\"fr\">pouvais</em> are imperfects: states that lasted, not single events. <em lang=\"fr\">Ne … plus</em> means “no longer”; with <em lang=\"fr\">pouvoir</em> the <em lang=\"fr\">pas</em> may be left out in literary French.</p>"
  },
  {
   "id": "poetry-45",
   "title": "<em lang=\"fr\">Sentir</em> with an infinitive",
   "body": "<p><em lang=\"fr\">Je sentis tout mon corps et transir et brûler</em>: After <em lang=\"fr\">sentis</em> the infinitives <em lang=\"fr\">transir</em> and <em lang=\"fr\">brûler</em> have <em lang=\"fr\">tout mon corps</em> as their subject: I felt my whole body both freeze and burn. <em lang=\"fr\">Et … et</em> means “both … and.”</p>"
  },
  {
   "id": "poetry-46",
   "title": "Verlaine, <em lang=\"fr\">Poèmes saturniens</em> “Mon rêve familier” 1–4 · Alexandrine",
   "body": "<p lang=\"fr\">Je fais souvent ce rêve étrange et pénétrant<br>D’une femme inconnue, et que j’aime, et qui m’aime,<br>Et qui n’est, chaque fois, ni tout à fait la même<br>Ni tout à fait une autre, et m’aime et me comprend.</p><p>I often have this strange and piercing dream<br>of an unknown woman, whom I love, and who loves me,<br>and who is, each time, neither quite the same<br>nor quite another, and loves me and understands me.</p><p><strong>Context.</strong> These lines open a sonnet. They make one sentence of four lines, in which a woman is named and then a series of relative clauses joined by <em lang=\"fr\">et</em> tells what she is.</p>",
   "qp": {
    "id": "q-fr-ixv-poetry-46",
    "variants": [
     {
      "prompt": "What does <em lang=\"fr\">faire un rêve</em> mean?",
      "options": [
       "“to have a dream”",
       "“to make up a dream,” to invent it",
       "“to dream of making”",
       "“to wake from a dream”"
      ],
      "answer": 0,
      "explain": "It is the French for “to have a dream.”"
     },
     {
      "prompt": "What is <em lang=\"fr\">que</em> in <em lang=\"fr\">et que j’aime</em>?",
      "options": [
       "The subject relative, like <em lang=\"fr\">qui</em>",
       "A conjunction",
       "A comparison",
       "The object relative"
      ],
      "answer": 3,
      "explain": "<em lang=\"fr\">Que</em> is the object of <em lang=\"fr\">j’aime</em>: “whom I love.”"
     },
     {
      "prompt": "What is the subject of <em lang=\"fr\">m’aime et me comprend</em> in the last line?",
      "options": [
       "<em lang=\"fr\">je</em>, the dreamer",
       "<em lang=\"fr\">ce rêve</em>",
       "<em lang=\"fr\">qui</em>",
       "<em lang=\"fr\">une autre</em>"
      ],
      "answer": 2,
      "explain": "They still have <em lang=\"fr\">qui</em> as their subject."
     }
    ]
   }
  },
  {
   "id": "poetry-47",
   "title": "The main clause",
   "body": "<p><em lang=\"fr\">Je fais souvent ce rêve étrange et pénétrant</em>: <em lang=\"fr\">Faire un rêve</em> is French for “to have a dream.” <em lang=\"fr\">Étrange et pénétrant</em> follow the noun they describe.</p>"
  },
  {
   "id": "poetry-48",
   "title": "Two relatives, object and subject",
   "body": "<p><em lang=\"fr\">D’une femme inconnue, et que j’aime, et qui m’aime</em>: <em lang=\"fr\">D’une femme</em> says what the dream is of. <em lang=\"fr\">Que</em> is the object relative (whom I love), <em lang=\"fr\">qui</em> the subject relative (who loves me).</p>"
  },
  {
   "id": "poetry-49",
   "title": "<em lang=\"fr\">Ni … ni</em>",
   "body": "<p><em lang=\"fr\">Et qui n’est, chaque fois, ni tout à fait la même\nNi tout à fait une autre</em>: <em lang=\"fr\">Ne … ni … ni</em> denies both, so the sense is that she is neither quite the same nor quite another.</p>"
  },
  {
   "id": "poetry-50",
   "title": "Two more verbs on <em lang=\"fr\">qui</em>",
   "body": "<p><em lang=\"fr\">et m’aime et me comprend</em>: <em lang=\"fr\">M’aime</em> (“loves me”) and <em lang=\"fr\">me comprend</em> (“understands me”) still have <em lang=\"fr\">qui</em> as their subject, and the object pronoun stands before each verb.</p>"
  }
 ]
};
