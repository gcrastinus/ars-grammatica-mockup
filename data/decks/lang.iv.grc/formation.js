window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iv.grc/formation"] = {
 "id": "lang.iv.grc/formation",
 "title": "Word Formation in Greek",
 "sub": "Suffixes that name an act, a doer, and a thing produced; the privative prefix; compounds; and the augment of a compound verb",
 "sources": "Smyth, <em>Greek Grammar</em>",
 "panels": [
  {
   "id": "suffixes",
   "title": "Action, doer, and thing produced",
   "body": "<p>An educator is the person who educates, education is the act, and a lesson is the thing taught. English shows these differences partly with separate words, whereas Greek shows them by different endings on one stem.</p><p>From <em>παιδεύω</em> (“I educate”) the three nouns are <em>παίδευσις</em> (“education,” the act), <em>παιδευτής</em> (“educator”), and <em>παίδευμα</em> (“a thing taught”). From <em>ποιέω</em> (“I make”) the same three endings give <em>ποίησις</em> (“a making”), <em>ποιητής</em> (“a maker,” or “a poet”), and <em>ποίημα</em> (“a thing made,” or “a poem”).</p><p>The endings used most often are these:</p>\n<p><strong>-σις</strong>, the action (<em>παίδευσις</em>, <em>ποίησις</em>)<br><strong>-της</strong>, the doer (<em>παιδευτής</em>, <em>ποιητής</em>)<br><strong>-μα</strong>, the thing produced (<em>παίδευμα</em>, <em>ποίημα</em>)</p><p>Each ending is a suffix, that is, it is added at the end of the stem, and the result is one noun. So the three nouns are not three tenses of the verb.</p>",
   "qp": {
    "id": "q-suffixes",
    "variants": [
     {
      "prompt": "<em>κρίσις</em> (“judgment”), <em>κριτής</em> (“judge”), and <em>κρίμα</em> (“decision”) all come from <em>κρίνω</em> (“I judge”). What kind of difference is that?",
      "options": ["Three nouns from one verb", "Three tenses of one verb", "Three compounds of two stems", "Three forms of the privative prefix"],
      "answer": 0,
      "explain": "The verb supplies the stem, and each suffix makes a noun: the action, the doer, or the thing produced. A change of tense would still be a form of the verb."
     },
     {
      "prompt": "Where does the suffix <em>-σις</em> stand in <em>δόσις</em> (“a giving”)?",
      "options": ["At the front, as a prefix", "Between two stems", "On the augment", "At the end of the stem"],
      "answer": 3,
      "explain": "A suffix is added at the end of the stem. <em>-σις</em> is the last part of <em>δόσις</em>, as it is the last part of <em>ποίησις</em>."
     },
     {
      "prompt": "English “theater” comes from the same stem as <em>θεατής</em>. What does <em>-της</em> name in <em>θεατής</em>?",
      "options": ["The thing produced", "The action only", "The doer", "A past tense of <em>θεάομαι</em> (“I watch”)"],
      "answer": 2,
      "explain": "<em>θεατής</em> is “a spectator,” the one who watches. The ending <em>-της</em> names the doer, as <em>ποιητής</em> names the maker."
     }
    ]
   }
  },
  {
   "id": "privative",
   "title": "The privative prefix",
   "body": "<p>“Unjust” denies “just,” and “impure” denies “pure”: in each, the part that denies stands at the front of the word. Greek makes the same kind of denial with the letter alpha, and the spelling of that part changes with the sound that follows it.</p><p><em>ἄδικος</em> means “unjust,” and <em>ἄλογος</em> means “without speech,” or “without reason.” Both take <em>ἀ-</em>, because a consonant follows. <em>ἀνέλπιστος</em> means “unhoped for,” and it takes <em>ἀν-</em>, because a vowel follows. The <em>ν</em> is part of the prefix.</p><p>The two shapes are these:</p>\n<p><strong>ἀ-</strong>, before a consonant (<em>ἄδικος</em>, <em>ἄλογος</em>)<br><strong>ἀν-</strong>, before a vowel (<em>ἀνέλπιστος</em>)</p><p>This prefix is called the <strong>alpha privative</strong> (from Latin <em>prīvāre</em>, “to deprive”), because it denies the stem it joins. In <em>ἄλογος</em> the prefix is the denial, and the stem carries “speech” or “reason,” whichever gloss is chosen. The prefix is not a suffix, and it is not a second stem.</p>",
   "qp": {
    "id": "q-privative",
    "variants": [
     {
      "prompt": "What is the <em>ἀ-</em> at the front of <em>ἀθάνατος</em> (“immortal”)?",
      "options": ["A suffix naming the thing produced", "The augment of a past tense", "The second stem of a compound", "The alpha privative, a prefix"],
      "answer": 3,
      "explain": "<em>ἀθάνατος</em> denies its stem, “death,” with <em>ἀ-</em> at the front. <em>-μα</em> would stand at the end and would name a thing produced."
     },
     {
      "prompt": "<em>ἄγραφος</em> is glossed “unwritten” or “not recorded.” What does the prefix contribute in both glosses?",
      "options": ["The denial, while the stem carries the writing", "The meaning “written” in one gloss and “recorded” in the other", "The name of the doer", "A past tense"],
      "answer": 0,
      "explain": "The alpha privative denies. The two English glosses differ in how they render the stem, not in the prefix, which is <em>ἀ-</em> in both."
     },
     {
      "prompt": "What is the <em>ν</em> in <em>ἀνάξιος</em> (“unworthy”)?",
      "options": ["The augment of a past tense", "The suffix <em>-σις</em>", "Part of the prefix", "The second stem of a compound"],
      "answer": 2,
      "explain": "Before a vowel the privative prefix is <em>ἀν-</em>, and <em>ἄξιος</em> (“worthy”) begins with a vowel. The <em>ν</em> belongs to that prefix. It is not the augment, which marks a past tense of a verb."
     }
    ]
   }
  },
  {
   "id": "compounds",
   "title": "Compounds of two stems",
   "body": "<p>A school-teacher is a teacher, and the school says what kind of teacher. English joins two words that can each stand alone, and the second word often names the kind. Greek joins two stems in the same way.</p><p><em>στρατηγός</em> means “general,” and the gloss that shows the join is “army-leader.” <em>φιλόσοφος</em> means “philosopher,” and the gloss that shows the join is “lover of wisdom.” Each word is one compound of two stems.</p><p>The second stem often names the kind, but not always. <em>στρατηγός</em> names a leader, and the first stem narrows the leader to an army. <em>φιλόσοφος</em> is a compound as well, but its second stem names wisdom, the thing loved, and the whole word names the person who loves it.</p><p>A compound is not a stem plus <em>-σις</em>, <em>-της</em>, or <em>-μα</em>, and it is not the alpha privative on a single stem. <em>φιλόσοφος</em> does not deny its stem.</p>",
   "qp": {
    "id": "q-compounds",
    "variants": [
     {
      "prompt": "In the English compound “shipbuilder,” which word names the kind?",
      "options": ["“Ship,” because it stands first", "“Builder”", "Both words equally", "Neither, because a suffix names the kind"],
      "answer": 1,
      "explain": "The second word often names the kind. A shipbuilder is a builder, and “ship” narrows the kind, as the first stem of <em>στρατηγός</em> narrows “leader.”"
     },
     {
      "prompt": "<em>ναυμαχία</em> is one word for a sea battle. How is it built?",
      "options": ["As a compound of two stems", "With the suffix <em>-σις</em> on a verb", "With the privative <em>ἀν-</em>", "By the augment alone"],
      "answer": 0,
      "explain": "<em>ναυμαχία</em> joins two stems, “ship-fight.” <em>-σις</em> would make a noun of an action from one verb, as <em>ποίησις</em> does."
     },
     {
      "prompt": "Does <em>δημοκρατία</em> deny its stem, as <em>ἄδικος</em> does?",
      "options": ["Yes, because it begins with a privative <em>ἀ-</em>", "Yes, because the second stem is a suffix", "No, because it is a past tense", "No; it joins two stems"],
      "answer": 3,
      "explain": "<em>δημοκρατία</em> joins two stems and means “rule of the people.” The alpha privative is the denying prefix in <em>ἄδικος</em> and <em>ἀνέλπιστος</em>, and it is not the formation used here."
     }
    ]
   }
  },
  {
   "id": "augment",
   "title": "The augment between prefix and verb",
   "body": "<p>In English the past of “I throw out” is “I threw out”: the tense is marked on the verb, not on “out.” Greek, in the same way, marks the past tense of a verb compounded with a prefix on the verb itself. It sets the <strong>augment</strong> <em>ε</em>, a mark of past time, between the prefix and the verb.</p><p><em>ἀπολύω</em> means “I release.” The imperfect is <em>ἀπέλυον</em>, and the aorist is <em>ἀπέλυσα</em>. In both, <em>ε</em> stands between <em>ἀπ-</em> and the verb, and the <em>ο</em> of <em>ἀπο-</em> is not written. The prefix keeps that place, and the prefix itself is not augmented.</p><p><em>ἐκβάλλω</em> means “I throw out,” and the aorist is <em>ἐξέβαλον</em>. The augment again stands between the prefix and the verb. Before the vowel of the augment, <em>ἐκ</em> is written <em>ἐξ</em>. The present is written with <em>λλ</em>, and this aorist with a single <em>λ</em>.</p><p>The place of the augment in these compounds is this:</p>\n<p><strong>between the prefix and the verb</strong> (<em>ἀπέλυον</em>, <em>ἀπέλυσα</em>, <em>ἐξέβαλον</em>)<br><strong>not on the prefix itself</strong></p>",
   "qp": {
    "id": "q-augment",
    "variants": [
     {
      "prompt": "<em>κατέλυσα</em> comes from <em>καταλύω</em> (“I dissolve”). What kind of form is it?",
      "options": ["A noun of the action", "A privative adjective", "A past tense of the compound verb", "A compound whose second stem names a kind"],
      "answer": 2,
      "explain": "<em>κατέλυσα</em> is the aorist of <em>καταλύω</em>, with the augment between <em>κατ-</em> and the verb. <em>-σις</em> would make a noun of an action, as <em>παίδευσις</em> does, and that is a different formation."
     },
     {
      "prompt": "The imperfect <em>κατέλυον</em> and the aorist <em>κατέλυσα</em> are different tenses. What do they share in the place of the augment?",
      "options": ["Each augments the prefix itself", "Each drops the prefix", "The augment stands in one shared place", "Each is a noun in <em>-μα</em>"],
      "answer": 2,
      "explain": "Both tenses keep the prefix and set <em>ε</em> between the prefix and the verb. The difference of tense is not a difference in where the augment stands."
     },
     {
      "prompt": "<em>εἰσάγω</em> means “I lead in.” What kind of compound is it?",
      "options": ["A compound noun whose second stem names a leader", "A compound verb", "A privative adjective", "A noun of the thing produced"],
      "answer": 1,
      "explain": "<em>εἰσάγω</em> is a verb joined to a prefix, <em>εἰς</em> (“into”). <em>στρατηγός</em> is a compound noun, “army-leader,” and it has no augment."
     }
    ]
   }
  },
  {
   "id": "reading",
   "title": "Reading a new compound",
   "body": "<p>A compound verb that we have not met before can be read from parts that we already know. <em>συμβάλλω</em> means “I throw together.” A prefix is joined to a verb of throwing, as <em>ἐκβάλλω</em> joins a prefix to a verb of throwing. The present writes <em>μ</em> before <em>β</em>, and it writes <em>λλ</em>.</p><p>The aorist is <em>συνέβαλον</em>. The augment <em>ε</em> stands between the prefix and the verb, as it does in <em>ἀπέλυσα</em> and in <em>ἐξέβαλον</em>. The prefix itself is not augmented. Before the vowel of the augment the prefix shows <em>ν</em>, so the present’s <em>μ</em> before <em>β</em> and the aorist’s <em>ν</em> before <em>ε</em> are two spellings of that prefix. The aorist is written with a single <em>λ</em>. The prefix still contributes “together.”</p><p>Smyth records the same formation.</p>",
   "qp": {
    "id": "q-reading",
    "variants": [
     {
      "prompt": "<em>προσέβαλον</em> is built from <em>προσβάλλω</em> (“I attack”). What kind of form is it?",
      "options": ["A noun in <em>-σις</em>", "An alpha privative", "A compound whose second stem names wisdom", "A past tense of a compound verb"],
      "answer": 3,
      "explain": "<em>προσέβαλον</em> is the aorist. The augment stands between the prefix and the verb. It is not one of the three suffixes that make nouns, and it is not the privative prefix."
     },
     {
      "prompt": "Does the augment make <em>προσβάλλω</em> into a privative, on the pattern of <em>ἄδικος</em>?",
      "options": ["Yes, because <em>ε</em> denies the verb", "No; the augment marks the past", "Yes, because the prefix <em>πρός</em> is a negative", "No, because a compound cannot have a prefix"],
      "answer": 1,
      "explain": "The alpha privative denies a stem. The augment in <em>προσέβαλον</em> marks a past tense, and “toward” remains the force of the prefix."
     },
     {
      "prompt": "In <em>προσέβαλον</em>, what does the prefix still contribute?",
      "options": ["“Toward,” “against”", "The suffix <em>-μα</em>", "A denial of the verb", "The name of a doer in <em>-της</em>"],
      "answer": 0,
      "explain": "<em>προσβάλλω</em> is “I throw toward,” that is, “I attack,” and <em>προσέβαλον</em> is the aorist of that compound. The augment does not replace the prefix’s “toward.”"
     }
    ]
   }
  }
 ]
};
