window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.de/formation"] = {
 "id": "lang.iv.de/formation",
 "title": "Word Formation in German",
 "sub": "Compounds, the suffixes that make nouns, and separable and inseparable prefixes",
 "sources": "Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "compounds",
   "title": "The last word of a compound",
   "body": "<p>A front door is a door, and the house is what the door belongs to. German joins the two nouns into one word. <em>Das Haus</em> (“the house”) and <em>die Tür</em> (“the door”) make <em>die Haustür</em> (“the front door”). A workday is a day, and the work is what fills it. <em>Die Arbeit</em> (“work”) and <em>der Tag</em> (“the day”) make <em>der Arbeitstag</em> (“the workday”). In a compound the first noun narrows the sense, and the last noun names the kind of thing.</p><p>The gender of the compound is the gender of that last noun. <em>Tür</em> is feminine, so the compound is <em>die Haustür</em>, not a neuter like <em>Haus</em>. <em>Tag</em> is masculine, so the compound is <em>der Arbeitstag</em>, not a feminine like <em>Arbeit</em>. The same rule makes <em>das Arbeitszimmer</em> (“the workroom”) neuter, because <em>das Zimmer</em> (“the room”) is neuter.</p><p>Some compounds set a linking <em>-s-</em> between the parts. <em>Die Geburt</em> (“birth”) and <em>Tag</em> make <em>der Geburtstag</em> (“the birthday”), with <em>-s-</em> between them. <em>Arbeit</em> and <em>Zimmer</em> make <em>das Arbeitszimmer</em>, again with <em>-s-</em>. The <em>-s-</em> only links the parts. It is not a plural ending, and it does not decide the gender, which still comes from the last noun. <em>Haustür</em> and <em>Arbeitstag</em> are written with no linking <em>-s-</em>.</p><p>Duden’s grammar gives the same account of the compound: the last element decides the gender, and a linking <em>-s-</em> may stand between the parts.</p>",
   "qp": {
    "id": "q-compounds",
    "variants": [
     {
      "prompt": "In a German compound, which part decides the gender?",
      "options": ["The first noun, because it comes first", "The last noun", "The linking -s-, whenever it is written", "A prefix, if the compound is a noun"],
      "answer": 1,
      "explain": "The last noun names the kind of thing, and the compound takes that noun’s gender. <em>Die Haustür</em> is feminine because <em>Tür</em> is feminine, and <em>der Arbeitstag</em> is masculine because <em>Tag</em> is masculine."
     },
     {
      "prompt": "<em>Der Liebesbrief</em> has a linking <em>-s-</em>, and <em>der Wintermantel</em> does not. What do the two compounds still share?",
      "options": ["Feminine gender, taken from <em>Liebe</em> and from <em>Winter</em>", "A plural ending on the last noun", "Masculine gender, because each ends in a masculine noun", "The suffix <em>-ung</em>"],
      "answer": 2,
      "explain": "<em>Brief</em> and <em>Mantel</em> are masculine, and each compound ends in one of them, so both take <em>der</em>. The linking <em>-s-</em> of <em>Liebesbrief</em> does not change that gender."
     },
     {
      "prompt": "What does the first noun do in <em>der Buchladen</em>?",
      "options": ["It narrows the shop to a bookshop", "It makes the whole compound feminine", "It is the linking <em>-s-</em>", "It marks a separable prefix"],
      "answer": 0,
      "explain": "<em>Buch</em> narrows <em>Laden</em> to a shop for books. The gender is not taken from <em>Buch</em>. It is taken from <em>Laden</em>, the last noun."
     }
    ]
   }
  },
  {
   "id": "suffixes",
   "title": "Nouns in -ung, -heit, and -keit",
   "body": "<p><em>Wohnen</em> means to dwell, and the noun <em>die Wohnung</em> means a dwelling. <em>Bilden</em> means to form, and <em>die Bildung</em> means formation, or education. The ending that makes these nouns is <em>-ung</em>, and it is added to a verb. A speaker who needs a name for the act, or for what the act produces, reaches for that ending.</p><p><em>Frei</em> means free, and <em>die Freiheit</em> means freedom. <em>Möglich</em> means possible, and <em>die Möglichkeit</em> means possibility. The endings <em>-heit</em> and <em>-keit</em> are added to adjectives, and they too make nouns. <em>-keit</em> is the form used when the adjective already ends in <em>-ig</em>, <em>-lich</em>, <em>-bar</em>, or <em>-sam</em>. <em>Möglich</em> ends in <em>-lich</em>, so the noun is <em>Möglichkeit</em>. <em>Frei</em> ends in none of those, so the noun is <em>Freiheit</em>.</p><p>The three endings, and the gender they share, are these:<br><strong>-ung</strong>, from a verb, as in <em>die Wohnung</em> and <em>die Bildung</em><br><strong>-heit</strong>, from an adjective, as in <em>die Freiheit</em><br><strong>-keit</strong>, from an adjective that already ends in <em>-ig</em>, <em>-lich</em>, <em>-bar</em>, or <em>-sam</em>, as in <em>die Möglichkeit</em></p><p>Each of these nouns is feminine. Duden’s grammar records the same three endings, and the nouns made with them are feminine.</p>",
   "qp": {
    "id": "q-suffixes",
    "variants": [
     {
      "prompt": "What gender do nouns in <em>-ung</em>, <em>-heit</em>, and <em>-keit</em> have?",
      "options": ["The gender of the verb or adjective they come from", "Masculine when the ending is <em>-heit</em>", "Feminine", "Neuter, because they name a quality"],
      "answer": 2,
      "explain": "<em>Die Wohnung</em>, <em>die Bildung</em>, <em>die Freiheit</em>, and <em>die Möglichkeit</em> are feminine. The ending itself brings that gender."
     },
     {
      "prompt": "When does the noun of an adjective take <em>-keit</em> rather than <em>-heit</em>?",
      "options": ["After <em>-ig</em>, <em>-lich</em>, <em>-bar</em>, or <em>-sam</em>", "When the adjective is a compound of two nouns", "When the noun made from it is to be masculine", "When a linking <em>-s-</em> is required between two nouns"],
      "answer": 0,
      "explain": "<em>-keit</em> is the form used after <em>-ig</em>, <em>-lich</em>, <em>-bar</em>, or <em>-sam</em>. <em>Möglich</em> ends in <em>-lich</em>, so the noun is <em>Möglichkeit</em>. <em>Frei</em> ends in none of those, so the noun is <em>Freiheit</em>."
     },
     {
      "prompt": "An adjective ends in <em>-ig</em>. Which ending makes its noun?",
      "options": ["<em>-keit</em>", "<em>-ung</em>, because every noun of quality uses it", "<em>-heit</em>, even after <em>-ig</em>", "A linking <em>-s-</em> and no suffix"],
      "answer": 0,
      "explain": "<em>-keit</em> is the form used after <em>-ig</em>, <em>-lich</em>, <em>-bar</em>, or <em>-sam</em>. <em>Möglich</em> shows the <em>-lich</em> case. An adjective in <em>-ig</em> takes the same ending, and <em>-ung</em> is not added to an adjective."
     }
    ]
   }
  },
  {
   "id": "separable",
   "title": "Prefixes that leave the verb",
   "body": "<p>Some German verbs carry a prefix that can stand as a word of its own, and the prefix is stressed. In a main clause it leaves the verb and goes to the end. <em>Aufstehen</em> (“to get up”) is <em>ich stehe auf</em>. <em>Ankommen</em> (“to arrive”) is <em>ich komme an</em>. <em>Einkaufen</em> (“to shop”) is <em>ich kaufe ein</em>. In the infinitive the prefix is written together with the verb.</p><p>The perfect places <em>ge-</em> between that prefix and the stem. Of these three, <em>aufstehen</em> and <em>ankommen</em> take <em>sein</em> (“to be”): <em>ich bin aufgestanden</em>, and <em>ich bin angekommen</em>. <em>Einkaufen</em> takes <em>haben</em> (“to have”): <em>ich habe eingekauft</em>.</p><p>The separable prefixes are these:<br><strong>ab</strong><br><strong>an</strong><br><strong>auf</strong><br><strong>aus</strong><br><strong>bei</strong><br><strong>ein</strong><br><strong>mit</strong><br><strong>nach</strong><br><strong>vor</strong><br><strong>zu</strong></p><p>Duden’s grammar treats a prefix of this group as separable: it leaves the verb in a main clause, and the participle keeps <em>ge-</em> between the prefix and the stem.</p>",
   "qp": {
    "id": "q-separable",
    "variants": [
     {
      "prompt": "Which of these prefixes is separable?",
      "options": ["<em>ver-</em>", "<em>nach</em>", "<em>be-</em>", "<em>er-</em>"],
      "answer": 1,
      "explain": "<em>Nach</em> belongs to the separable list, with <em>ab</em>, <em>an</em>, <em>auf</em>, <em>aus</em>, <em>bei</em>, <em>ein</em>, <em>mit</em>, <em>vor</em>, and <em>zu</em>. <em>Ver-</em>, <em>be-</em>, and <em>er-</em> are not in that list."
     },
     {
      "prompt": "How is a separable prefix distinguished in sound from an unstressed prefix?",
      "options": ["It is silent", "It is written only as <em>-ung</em>", "It takes a linking <em>-s-</em>", "It is stressed"],
      "answer": 3,
      "explain": "A separable prefix is stressed. <em>Auf</em>, <em>an</em>, and <em>ein</em> take the stress, and in a main clause each can leave the verb."
     },
     {
      "prompt": "The prefix <em>vor</em> is separable. What follows for a main clause?",
      "options": ["<em>Vor</em> can leave the verb and stand at the end", "<em>Vor</em> must stay on the front of the verb in every clause", "<em>Vor</em> adds <em>-ung</em> and makes a feminine noun", "<em>Vor</em> is written only as a linking <em>-s-</em>"],
      "answer": 0,
      "explain": "<em>Vor</em> is one of the separable prefixes. In a main clause that prefix leaves the verb and stands at the end, as <em>auf</em> does in <em>ich stehe auf</em>."
     }
    ]
   }
  },
  {
   "id": "inseparable",
   "title": "Prefixes that stay on the verb",
   "body": "<p>Other prefixes never leave the verb, and they are not stressed. <em>Verstehen</em> (“to understand”) is <em>ich verstehe</em>, with <em>ver-</em> still on the verb. <em>Bekommen</em> (“to receive”) is <em>ich bekomme</em>. <em>Erzählen</em> (“to tell”) is <em>ich erzähle</em>. The prefix is not a word of its own, and the infinitive is one word in the same way the finite verb is one word.</p><p>The perfect of these verbs adds no <em>ge-</em>. The three examples take <em>haben</em>: <em>ich habe verstanden</em>, <em>ich habe bekommen</em>, and <em>ich habe erzählt</em>. <em>Bekommen</em> has the same form in the infinitive and in the participle. <em>Erzählt</em> adds <em>-t</em> to the stem and still has no <em>ge-</em>.</p><p>The inseparable prefixes are these:<br><strong>be-</strong><br><strong>emp-</strong><br><strong>ent-</strong><br><strong>er-</strong><br><strong>ge-</strong><br><strong>miss-</strong><br><strong>ver-</strong><br><strong>zer-</strong></p><p>The <em>ge-</em> on this list is a prefix of the verb itself. It is not the <em>ge-</em> that a participle adds. A verb that already has an inseparable prefix does not add that participle <em>ge-</em>. Duden’s grammar counts these prefixes as inseparable.</p>",
   "qp": {
    "id": "q-inseparable",
    "variants": [
     {
      "prompt": "<em>Emp-</em> is inseparable. Where does it stand in a main clause?",
      "options": ["At the end, away from the verb", "On the verb, and it is unstressed", "Between a participle <em>ge-</em> and the stem", "Only as a linking <em>-s-</em> inside a noun"],
      "answer": 1,
      "explain": "An inseparable prefix stays on the verb, and it is not stressed. <em>Emp-</em> is one of those prefixes, with <em>be-</em>, <em>ent-</em>, <em>er-</em>, <em>ge-</em>, <em>miss-</em>, <em>ver-</em>, and <em>zer-</em>."
     },
     {
      "prompt": "The prefix <em>zer-</em> is inseparable. What is true of its participle?",
      "options": ["The participle adds <em>ge-</em> in front of <em>zer-</em>", "The participle adds no <em>ge-</em>", "The prefix stands at the end of the main clause", "The prefix is stressed, like <em>auf</em>"],
      "answer": 1,
      "explain": "A verb with an inseparable prefix does not add the participle’s <em>ge-</em>. <em>Zer-</em> stays on the verb, as <em>ver-</em> stays in <em>verstanden</em>."
     },
     {
      "prompt": "The inseparable list includes <em>ge-</em>. Which <em>ge-</em> is that?",
      "options": ["The <em>ge-</em> that a participle adds", "A prefix of the verb itself", "A prefix that leaves the verb in a main clause", "A linking letter between two nouns"],
      "answer": 1,
      "explain": "The <em>ge-</em> on the inseparable list is a prefix of the verb itself. It is not the <em>ge-</em> added in a participle. A verb that already has an inseparable prefix does not add that further <em>ge-</em>."
     }
    ]
   }
  },
  {
   "id": "telling",
   "title": "How the sentence shows the prefix",
   "body": "<p><em>Ankommen</em> and <em>bekommen</em> look alike in the infinitive: each is one written word ending in <em>kommen</em>. The sentence shows which prefix it is. A separable prefix leaves the verb in a main clause, and the participle puts <em>ge-</em> between the prefix and the stem. An inseparable prefix stays on the verb, and the participle takes no <em>ge-</em>.</p><p><em>Ankommen</em> therefore gives <em>ich komme an</em> and <em>ich bin angekommen</em>. <em>Bekommen</em> gives <em>ich bekomme</em> and <em>ich habe bekommen</em>. The same split separates <em>aufstehen</em> from <em>verstehen</em>: <em>ich stehe auf</em> and <em>ich bin aufgestanden</em>, whereas <em>ich verstehe</em> and <em>ich habe verstanden</em>. <em>Einkaufen</em> follows the separable pattern and takes <em>haben</em>: <em>ich kaufe ein</em>, <em>ich habe eingekauft</em>. <em>Erzählen</em> follows the inseparable pattern: <em>ich erzähle</em>, <em>ich habe erzählt</em>.</p><p>Of these verbs, <em>aufstehen</em> and <em>ankommen</em> form the perfect with <em>sein</em>. <em>Einkaufen</em>, <em>verstehen</em>, <em>bekommen</em>, and <em>erzählen</em> form it with <em>haben</em>. Duden’s grammar uses the same two tests: whether the prefix can leave the verb, and whether the participle takes <em>ge-</em>.</p>",
   "qp": {
    "id": "q-telling",
    "variants": [
     {
      "prompt": "Which of these is a sentence test for a separable prefix?",
      "options": ["It can leave the verb", "It takes <em>sein</em>", "It takes <em>haben</em>", "It adds the noun ending <em>-heit</em> to the stem"],
      "answer": 0,
      "explain": "A separable prefix can leave the verb in a main clause. <em>Sein</em> and <em>haben</em> do not decide that question: <em>einkaufen</em> takes <em>haben</em> and still separates, and <em>verstehen</em> takes <em>haben</em> and does not."
     },
     {
      "prompt": "A participle has <em>ge-</em> between the prefix and the stem. What kind of prefix is that?",
      "options": ["A separable prefix", "An inseparable prefix", "The suffix <em>-keit</em>", "A linking <em>-s-</em>"],
      "answer": 0,
      "explain": "The participle of a separable verb places <em>ge-</em> between the prefix and the stem, as in <em>aufgestanden</em>, <em>angekommen</em>, and <em>eingekauft</em>. An inseparable verb adds no <em>ge-</em>."
     },
     {
      "prompt": "Where does <em>ent-</em> stand in a main clause?",
      "options": ["At the end, away from the verb", "On the verb, and it is unstressed", "Between a participle <em>ge-</em> and the stem", "Only as a linking <em>-s-</em> inside a noun"],
      "answer": 1,
      "explain": "An inseparable prefix stays on the verb, and it is not stressed. <em>Ent-</em> is in that list, with <em>be-</em> and <em>ver-</em>, so it does not leave the verb."
     }
    ]
   }
  }
 ]
};
