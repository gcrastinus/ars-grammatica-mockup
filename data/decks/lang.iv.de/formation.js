window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.de/formation"] = {
 "id": "lang.iv.de/formation",
 "title": "Word Formation in German",
 "sub": "Compounds, the suffixes that make nouns, and separable and inseparable prefixes",
 "sources": "Duden, <em>Die Grammatik</em>",
 "panels": [
  {
   "id": "compounds",
   "title": "The last word of a compound",
   "body": "<p>A front door is a door, and the house is what the door belongs to. German joins the two nouns into one word. <em lang=\"de\">Das Haus</em> (“the house”) and <em lang=\"de\">die Tür</em> (“the door”) make <em lang=\"de\">die Haustür</em> (“the front door”). A workday is a day, and the work is what fills it. <em lang=\"de\">Die Arbeit</em> (“work”) and <em lang=\"de\">der Tag</em> (“the day”) make <em lang=\"de\">der Arbeitstag</em> (“the workday”). In a compound the first noun narrows the sense, and the last noun names the kind of thing.</p><p>The gender of the compound is the gender of that last noun. <em lang=\"de\">Tür</em> is feminine, so the compound is <em lang=\"de\">die Haustür</em>, not a neuter like <em lang=\"de\">Haus</em>. <em lang=\"de\">Tag</em> is masculine, so the compound is <em lang=\"de\">der Arbeitstag</em>, not a feminine like <em lang=\"de\">Arbeit</em>. The same rule makes <em lang=\"de\">das Arbeitszimmer</em> (“the workroom”) neuter, because <em lang=\"de\">das Zimmer</em> (“the room”) is neuter.</p><p>Some compounds set a linking <em lang=\"de\">-s-</em> between the parts. <em lang=\"de\">Die Geburt</em> (“birth”) and <em lang=\"de\">Tag</em> make <em lang=\"de\">der Geburtstag</em> (“the birthday”), with <em lang=\"de\">-s-</em> between them. <em lang=\"de\">Arbeit</em> and <em lang=\"de\">Zimmer</em> make <em lang=\"de\">das Arbeitszimmer</em>, again with <em lang=\"de\">-s-</em>. The <em lang=\"de\">-s-</em> only links the parts. It is not a plural ending, and it does not decide the gender, which still comes from the last noun. <em lang=\"de\">Haustür</em> and <em lang=\"de\">Arbeitstag</em> are written with no linking <em lang=\"de\">-s-</em>.</p><p>Duden’s grammar gives the same account of the compound.</p>",
   "qp": {
    "id": "q-compounds",
    "variants": [
     {
      "prompt": "In a German compound, which part decides the gender?",
      "options": ["The first noun, because it comes first", "The last noun", "The linking -s-, whenever it is written", "The longer of the two nouns"],
      "answer": 1,
      "explain": "The last noun names the kind of thing, and the compound takes that noun’s gender. <em lang=\"de\">Die Haustür</em> is feminine because <em lang=\"de\">Tür</em> is feminine, and <em lang=\"de\">der Arbeitstag</em> is masculine because <em lang=\"de\">Tag</em> is masculine."
     },
     {
      "prompt": "<em lang=\"de\">Der Liebesbrief</em> has a linking <em lang=\"de\">-s-</em>, and <em lang=\"de\">der Wintermantel</em> does not. What do the two compounds still share?",
      "options": ["Feminine gender, taken from <em lang=\"de\">Liebe</em> and from <em lang=\"de\">Winter</em>", "A plural ending on the last noun", "Masculine gender, because each ends in a masculine noun", "Neuter gender, which every compound takes"],
      "answer": 2,
      "explain": "<em lang=\"de\">Brief</em> and <em lang=\"de\">Mantel</em> are masculine, and each compound ends in one of them, so both take <em lang=\"de\">der</em>. The linking <em lang=\"de\">-s-</em> of <em lang=\"de\">Liebesbrief</em> does not change that gender."
     },
     {
      "prompt": "What does the first noun do in <em lang=\"de\">der Buchladen</em>?",
      "options": ["It narrows the shop to a bookshop", "It makes the whole compound feminine", "It names the kind of thing", "It gives the compound its plural"],
      "answer": 0,
      "explain": "<em lang=\"de\">Buch</em> narrows <em lang=\"de\">Laden</em> to a shop for books. The gender is not taken from <em lang=\"de\">Buch</em>. It is taken from <em lang=\"de\">Laden</em>, the last noun."
     }
    ]
   }
  },
  {
   "id": "suffixes",
   "title": "Nouns in -ung, -heit, and -keit",
   "body": "<p><em lang=\"de\">Wohnen</em> means to dwell, and the noun <em lang=\"de\">die Wohnung</em> means a dwelling. <em lang=\"de\">Bilden</em> means to form, and <em lang=\"de\">die Bildung</em> means formation, or education. The ending that makes these nouns is <em lang=\"de\">-ung</em>; it is added to a verb, and it names the act or what the act produces.</p><p><em lang=\"de\">Frei</em> means free, and <em lang=\"de\">die Freiheit</em> means freedom. <em lang=\"de\">Möglich</em> means possible, and <em lang=\"de\">die Möglichkeit</em> means possibility. The endings <em lang=\"de\">-heit</em> and <em lang=\"de\">-keit</em> are added to adjectives, and they too make nouns. <em lang=\"de\">-keit</em> is the form used when the adjective already ends in <em lang=\"de\">-ig</em>, <em lang=\"de\">-lich</em>, <em lang=\"de\">-bar</em>, or <em lang=\"de\">-sam</em>. <em lang=\"de\">Möglich</em> ends in <em lang=\"de\">-lich</em>, so the noun is <em lang=\"de\">Möglichkeit</em>. <em lang=\"de\">Frei</em> ends in none of those, so the noun is <em lang=\"de\">Freiheit</em>.</p><p>The three endings, and the gender they share, are these:</p>\n<p><strong>-ung</strong>, from a verb, as in <em lang=\"de\">die Wohnung</em> and <em lang=\"de\">die Bildung</em><br><strong>-heit</strong>, from an adjective, as in <em lang=\"de\">die Freiheit</em><br><strong>-keit</strong>, from an adjective that already ends in <em lang=\"de\">-ig</em>, <em lang=\"de\">-lich</em>, <em lang=\"de\">-bar</em>, or <em lang=\"de\">-sam</em>, as in <em lang=\"de\">die Möglichkeit</em></p><p>Each of these nouns is feminine, as Duden’s grammar records.</p>",
   "qp": {
    "id": "q-suffixes",
    "variants": [
     {
      "prompt": "What gender do nouns in <em lang=\"de\">-ung</em>, <em lang=\"de\">-heit</em>, and <em lang=\"de\">-keit</em> have?",
      "options": ["The gender of the verb or adjective they come from", "Masculine when the ending is <em lang=\"de\">-heit</em>", "Feminine", "Neuter, because they name a quality"],
      "answer": 2,
      "explain": "<em lang=\"de\">Die Wohnung</em>, <em lang=\"de\">die Bildung</em>, <em lang=\"de\">die Freiheit</em>, and <em lang=\"de\">die Möglichkeit</em> are feminine. The ending itself brings that gender."
     },
     {
      "prompt": "When does the noun of an adjective take <em lang=\"de\">-keit</em> rather than <em lang=\"de\">-heit</em>?",
      "options": ["After <em lang=\"de\">-ig</em>, <em lang=\"de\">-lich</em>, <em lang=\"de\">-bar</em>, or <em lang=\"de\">-sam</em>", "When the adjective has more than one syllable", "When the noun made from it is to be masculine", "When the adjective ends in a vowel"],
      "answer": 0,
      "explain": "<em lang=\"de\">-keit</em> is the form used after <em lang=\"de\">-ig</em>, <em lang=\"de\">-lich</em>, <em lang=\"de\">-bar</em>, or <em lang=\"de\">-sam</em>. <em lang=\"de\">Möglich</em> ends in <em lang=\"de\">-lich</em>, so the noun is <em lang=\"de\">Möglichkeit</em>. <em lang=\"de\">Frei</em> ends in none of those, so the noun is <em lang=\"de\">Freiheit</em>."
     },
     {
      "prompt": "An adjective ends in <em lang=\"de\">-ig</em>. Which ending makes its noun?",
      "options": ["<em lang=\"de\">-keit</em>", "<em lang=\"de\">-ung</em>, because every noun of quality uses it", "<em lang=\"de\">-heit</em>, even after <em lang=\"de\">-ig</em>", "No ending; the adjective is used as it stands"],
      "answer": 0,
      "explain": "<em lang=\"de\">-keit</em> is the form used after <em lang=\"de\">-ig</em>, <em lang=\"de\">-lich</em>, <em lang=\"de\">-bar</em>, or <em lang=\"de\">-sam</em>. <em lang=\"de\">Möglich</em> shows the <em lang=\"de\">-lich</em> case. An adjective in <em lang=\"de\">-ig</em> takes the same ending, and <em lang=\"de\">-ung</em> is not added to an adjective."
     }
    ]
   }
  },
  {
   "id": "separable",
   "title": "Prefixes that leave the verb",
   "body": "<p><em lang=\"de\">Aufstehen</em> (“to get up”) becomes <em lang=\"de\">ich stehe auf</em> (“I get up”) in a main clause; <em lang=\"de\">ankommen</em> (“to arrive”) becomes <em lang=\"de\">ich komme an</em> (“I arrive”); and <em lang=\"de\">einkaufen</em> (“to shop”) becomes <em lang=\"de\">ich kaufe ein</em> (“I shop”). Each of these verbs has a prefix that can stand as a word of its own, and the prefix is stressed. In a main clause it leaves the verb and goes to the end, whereas in the infinitive it is written together with the verb.</p><p>The perfect places <em lang=\"de\">ge-</em> between that prefix and the stem. Of these three, <em lang=\"de\">aufstehen</em> and <em lang=\"de\">ankommen</em> take <em lang=\"de\">sein</em> (“to be”): <em lang=\"de\">ich bin aufgestanden</em> (“I got up”) and <em lang=\"de\">ich bin angekommen</em> (“I arrived”). <em lang=\"de\">Einkaufen</em> takes <em lang=\"de\">haben</em> (“to have”): <em lang=\"de\">ich habe eingekauft</em> (“I shopped”).</p><p>The separable prefixes are these:</p>\n<p><strong>ab</strong><br><strong>an</strong><br><strong>auf</strong><br><strong>aus</strong><br><strong>bei</strong><br><strong>ein</strong><br><strong>mit</strong><br><strong>nach</strong><br><strong>vor</strong><br><strong>zu</strong></p><p>Duden’s grammar treats these prefixes as separable.</p>",
   "qp": {
    "id": "q-separable",
    "variants": [
     {
      "prompt": "Which of these prefixes is separable?",
      "options": ["<em lang=\"de\">ver-</em>", "<em lang=\"de\">nach</em>", "<em lang=\"de\">be-</em>", "<em lang=\"de\">er-</em>"],
      "answer": 1,
      "explain": "<em lang=\"de\">Nach</em> belongs to the separable list, with <em lang=\"de\">ab</em>, <em lang=\"de\">an</em>, <em lang=\"de\">auf</em>, <em lang=\"de\">aus</em>, <em lang=\"de\">bei</em>, <em lang=\"de\">ein</em>, <em lang=\"de\">mit</em>, <em lang=\"de\">vor</em>, and <em lang=\"de\">zu</em>. <em lang=\"de\">Ver-</em>, <em lang=\"de\">be-</em>, and <em lang=\"de\">er-</em> are not in that list."
     },
     {
      "prompt": "How is a separable prefix distinguished in sound from an unstressed prefix?",
      "options": ["It is unstressed, like <em lang=\"de\">ver-</em>", "It is pronounced with a long vowel", "It loses its final consonant", "It is stressed"],
      "answer": 3,
      "explain": "A separable prefix is stressed. <em lang=\"de\">Auf</em>, <em lang=\"de\">an</em>, and <em lang=\"de\">ein</em> take the stress, and in a main clause each can leave the verb."
     },
     {
      "prompt": "The prefix <em lang=\"de\">vor</em> is separable. What follows for a main clause?",
      "options": ["<em lang=\"de\">Vor</em> can leave the verb and stand at the end", "<em lang=\"de\">Vor</em> must stay on the front of the verb in every clause", "<em lang=\"de\">Vor</em> is unstressed in every form", "The participle has no <em lang=\"de\">ge-</em>"],
      "answer": 0,
      "explain": "<em lang=\"de\">Vor</em> is one of the separable prefixes. In a main clause that prefix leaves the verb and stands at the end, as <em lang=\"de\">auf</em> does in <em lang=\"de\">ich stehe auf</em>."
     }
    ]
   }
  },
  {
   "id": "inseparable",
   "title": "Prefixes that stay on the verb",
   "body": "<p><em lang=\"de\">Verstehen</em> (“to understand”) becomes <em lang=\"de\">ich verstehe</em> (“I understand”), with <em lang=\"de\">ver-</em> still on the verb; <em lang=\"de\">bekommen</em> (“to receive”) becomes <em lang=\"de\">ich bekomme</em>; and <em lang=\"de\">erzählen</em> (“to tell”) becomes <em lang=\"de\">ich erzähle</em>. These prefixes never leave the verb, and they are not stressed. Such a prefix is not a word of its own, so the verb is one word in every form, the infinitive as well as the finite verb.</p><p>The perfect of these verbs adds no <em lang=\"de\">ge-</em>. The three examples take <em lang=\"de\">haben</em>: <em lang=\"de\">ich habe verstanden</em> (“I understood”), <em lang=\"de\">ich habe bekommen</em> (“I received”), and <em lang=\"de\">ich habe erzählt</em> (“I told”). <em lang=\"de\">Bekommen</em> has the same form in the infinitive and in the participle. <em lang=\"de\">Erzählt</em> adds <em lang=\"de\">-t</em> to the stem and still has no <em lang=\"de\">ge-</em>.</p><p>The inseparable prefixes are these:</p>\n<p><strong>be-</strong><br><strong>emp-</strong><br><strong>ent-</strong><br><strong>er-</strong><br><strong>ge-</strong><br><strong>miss-</strong><br><strong>ver-</strong><br><strong>zer-</strong></p><p>The <em lang=\"de\">ge-</em> on this list is a prefix of the verb itself. It is not the <em lang=\"de\">ge-</em> that a participle adds. A verb that already has an inseparable prefix does not add that participle <em lang=\"de\">ge-</em>. Duden’s grammar counts these prefixes as inseparable.</p>",
   "qp": {
    "id": "q-inseparable",
    "variants": [
     {
      "prompt": "<em lang=\"de\">Emp-</em> is inseparable. Where does it stand in a main clause?",
      "options": ["At the end, away from the verb", "On the verb, and it is unstressed", "Between a participle <em lang=\"de\">ge-</em> and the stem", "Before the verb, but stressed"],
      "answer": 1,
      "explain": "An inseparable prefix stays on the verb, and it is not stressed. <em lang=\"de\">Emp-</em> is one of those prefixes, with <em lang=\"de\">be-</em>, <em lang=\"de\">ent-</em>, <em lang=\"de\">er-</em>, <em lang=\"de\">ge-</em>, <em lang=\"de\">miss-</em>, <em lang=\"de\">ver-</em>, and <em lang=\"de\">zer-</em>."
     },
     {
      "prompt": "The prefix <em lang=\"de\">zer-</em> is inseparable. What is true of its participle?",
      "options": ["The participle adds <em lang=\"de\">ge-</em> in front of <em lang=\"de\">zer-</em>", "The participle adds no <em lang=\"de\">ge-</em>", "The prefix stands at the end of the main clause", "The prefix is stressed, like <em lang=\"de\">auf</em>"],
      "answer": 1,
      "explain": "A verb with an inseparable prefix does not add the participle’s <em lang=\"de\">ge-</em>. <em lang=\"de\">Zer-</em> stays on the verb, as <em lang=\"de\">ver-</em> stays in <em lang=\"de\">verstanden</em>."
     },
     {
      "prompt": "The inseparable list includes <em lang=\"de\">ge-</em>. Which <em lang=\"de\">ge-</em> is that?",
      "options": ["The <em lang=\"de\">ge-</em> that a participle adds", "A prefix of the verb itself", "A prefix that leaves the verb in a main clause", "A sign of the past tense"],
      "answer": 1,
      "explain": "The <em lang=\"de\">ge-</em> on the inseparable list is a prefix of the verb itself. It is not the <em lang=\"de\">ge-</em> added in a participle. A verb that already has an inseparable prefix does not add that further <em lang=\"de\">ge-</em>."
     }
    ]
   }
  },
  {
   "id": "telling",
   "title": "How the sentence shows the prefix",
   "body": "<p><em lang=\"de\">Ankommen</em> and <em lang=\"de\">bekommen</em> look alike in the infinitive: each is one written word ending in <em lang=\"de\">kommen</em>. The sentence shows which prefix it is. A separable prefix leaves the verb in a main clause, and the participle puts <em lang=\"de\">ge-</em> between the prefix and the stem. An inseparable prefix stays on the verb, and the participle takes no <em lang=\"de\">ge-</em>.</p><p><em lang=\"de\">Ankommen</em> therefore gives <em lang=\"de\">ich komme an</em> and <em lang=\"de\">ich bin angekommen</em>. <em lang=\"de\">Bekommen</em> gives <em lang=\"de\">ich bekomme</em> and <em lang=\"de\">ich habe bekommen</em>. The same split separates <em lang=\"de\">aufstehen</em> from <em lang=\"de\">verstehen</em>: <em lang=\"de\">ich stehe auf</em> and <em lang=\"de\">ich bin aufgestanden</em>, whereas <em lang=\"de\">ich verstehe</em> and <em lang=\"de\">ich habe verstanden</em>. <em lang=\"de\">Einkaufen</em> follows the separable pattern and takes <em lang=\"de\">haben</em>: <em lang=\"de\">ich kaufe ein</em>, <em lang=\"de\">ich habe eingekauft</em>. <em lang=\"de\">Erzählen</em> follows the inseparable pattern: <em lang=\"de\">ich erzähle</em>, <em lang=\"de\">ich habe erzählt</em>.</p><p>Of these verbs, <em lang=\"de\">aufstehen</em> and <em lang=\"de\">ankommen</em> form the perfect with <em lang=\"de\">sein</em>. <em lang=\"de\">Einkaufen</em>, <em lang=\"de\">verstehen</em>, <em lang=\"de\">bekommen</em>, and <em lang=\"de\">erzählen</em> form it with <em lang=\"de\">haben</em>. Duden’s grammar uses the same two tests: whether the prefix can leave the verb, and whether the participle takes <em lang=\"de\">ge-</em>.</p>",
   "qp": {
    "id": "q-telling",
    "variants": [
     {
      "prompt": "Which of these is a sentence test for a separable prefix?",
      "options": ["It can leave the verb", "It takes <em lang=\"de\">sein</em>", "It takes <em lang=\"de\">haben</em>", "It is written as one word with the verb in the infinitive"],
      "answer": 0,
      "explain": "A separable prefix can leave the verb in a main clause. <em lang=\"de\">Sein</em> and <em lang=\"de\">haben</em> do not decide that question: <em lang=\"de\">einkaufen</em> takes <em lang=\"de\">haben</em> and still separates, and <em lang=\"de\">verstehen</em> takes <em lang=\"de\">haben</em> and does not."
     },
     {
      "prompt": "A participle has <em lang=\"de\">ge-</em> between the prefix and the stem. What kind of prefix is that?",
      "options": ["A separable prefix", "An inseparable prefix", "No prefix; <em lang=\"de\">ge-</em> belongs to the stem", "A prefix that takes <em lang=\"de\">sein</em>"],
      "answer": 0,
      "explain": "The participle of a separable verb places <em lang=\"de\">ge-</em> between the prefix and the stem, as in <em lang=\"de\">aufgestanden</em>, <em lang=\"de\">angekommen</em>, and <em lang=\"de\">eingekauft</em>. An inseparable verb adds no <em lang=\"de\">ge-</em>."
     },
     {
      "prompt": "Where does <em lang=\"de\">ent-</em> stand in a main clause?",
      "options": ["At the end, away from the verb", "On the verb, and it is unstressed", "Between a participle <em lang=\"de\">ge-</em> and the stem", "Before the verb, but stressed"],
      "answer": 1,
      "explain": "An inseparable prefix stays on the verb, and it is not stressed. <em lang=\"de\">Ent-</em> is in that list, with <em lang=\"de\">be-</em> and <em lang=\"de\">ver-</em>, so it does not leave the verb."
     }
    ]
   }
  }
 ]
};
