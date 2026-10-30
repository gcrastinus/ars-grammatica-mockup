window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.iii-decl.grc/perfect"] = {
 "id": "lang.iii-decl.grc/perfect",
 "title": "The Perfect System",
 "sub": "What the Greek perfect means, reduplication, the first and second perfect, the perfect middle, and the pluperfect",
 "sources": "Smyth, <i>Greek Grammar</i> §§ 439–447, 555–575, 1945–1952",
 "panels": [
  {
   "id": "meaning",
   "title": "What the perfect means",
   "body": "<p>“He has died” and “he is dead” say nearly the same thing: an action is complete, and its result stands at the time of speaking. The Greek perfect expresses this kind of completed state, and it is more precise than the Latin perfect, which serves also for a simple past. So <i lang=\"grc\">τέθνηκε</i> means “he has died,” that is, “he is dead”; <i lang=\"grc\">γέγραπται</i> means “it has been written,” that is, “it stands written.” Some perfects are best translated by an English present, because the state is what is meant: <i lang=\"grc\">οἶδα</i>, “I know” (literally “I have seen”); <i lang=\"grc\">ἕστηκα</i>, “I stand”; <i lang=\"grc\">μέμνημαι</i>, “I remember.”</p>",
   "qp": {
    "id": "q-grc-perfect-meaning",
    "variants": [
     {
      "prompt": "What does the Greek perfect present?",
      "options": [
       "A simple event in the past, with nothing more",
       "A completed action whose result stands",
       "An action going on in the past",
       "An action about to happen"
      ],
      "answer": 1,
      "explain": "The perfect presents the action as complete, with its result at hand; the aorist presents a simple event, and the imperfect an action going on."
     },
     {
      "prompt": "How is <i lang=\"grc\">οἶδα</i> best translated?",
      "options": [
       "“I saw”",
       "“I was seeing”",
       "“I know”",
       "“I shall see”"
      ],
      "answer": 2,
      "explain": "The word <i lang=\"grc\">οἶδα</i> is a perfect (“I have seen”) whose sense is the resulting state, “I know.”"
     },
     {
      "prompt": "Which English sentence best renders the sense of <i lang=\"grc\">ἡ θύρα κέκλεισται</i>?",
      "options": [
       "“The door was being shut.”",
       "“The door shut.”",
       "“The door will be shut.”",
       "“The door is shut.”"
      ],
      "answer": 3,
      "explain": "The perfect passive presents the state that results: the door has been shut, and so it is shut."
     }
    ]
   }
  },
  {
   "id": "reduplication",
   "title": "Reduplication",
   "body": "<p>The perfect stem is marked by <strong>reduplication</strong>, the doubling of the first sound of the verb, which every tense of the perfect system keeps, in all moods. A verb that begins with a single consonant repeats it with <i lang=\"grc\">ε</i>: <i lang=\"grc\">λύω</i>, <i lang=\"grc\">λέλυκα</i>; <i lang=\"grc\">πιστεύω</i>, <i lang=\"grc\">πεπίστευκα</i>. An aspirate is repeated by the corresponding smooth consonant: <i lang=\"grc\">θύω</i>, <i lang=\"grc\">τέθυκα</i>; <i lang=\"grc\">χορεύω</i>, <i lang=\"grc\">κεχόρευκα</i>; <i lang=\"grc\">φονεύω</i>, <i lang=\"grc\">πεφόνευκα</i>.</p>\n<p>A verb that begins with a vowel lengthens it, as in the temporal augment: <i lang=\"grc\">ἀγγέλλω</i>, <i lang=\"grc\">ἤγγελκα</i>; <i lang=\"grc\">ὁπλίζω</i>, <i lang=\"grc\">ὥπλικα</i>. A verb that begins with two consonants (other than a mute with a liquid) or with a double consonant takes only <i lang=\"grc\">ἐ-</i>: <i lang=\"grc\">στρατεύω</i>, <i lang=\"grc\">ἐστράτευκα</i>; <i lang=\"grc\">ζητέω</i>, <i lang=\"grc\">ἐζήτηκα</i>. Since reduplication is not an augment, it stays outside the indicative: the perfect infinitive is <i lang=\"grc\">λελυκέναι</i>, and the participle <i lang=\"grc\">λελυκώς</i>.</p>",
   "qp": {
    "id": "q-grc-reduplication",
    "variants": [
     {
      "prompt": "What is the perfect active of <i lang=\"grc\">παύω</i> (“I stop”), first person singular?",
      "options": [
       "<i lang=\"grc\">ἔπαυκα</i>",
       "<i lang=\"grc\">πέπαυκα</i>",
       "<i lang=\"grc\">παπαύκα</i>",
       "<i lang=\"grc\">ἐπέπαυκα</i>"
      ],
      "answer": 1,
      "explain": "A verb beginning with a single consonant repeats it with <i lang=\"grc\">ε</i>: <i lang=\"grc\">πέ-παυκα</i>."
     },
     {
      "prompt": "What is the perfect active of <i lang=\"grc\">θαυμάζω</i>?",
      "options": [
       "<i lang=\"grc\">θεθαύμακα</i>",
       "<i lang=\"grc\">ἐθαύμακα</i>",
       "<i lang=\"grc\">τεθαύμακα</i>",
       "<i lang=\"grc\">ἑθαύμακα</i>"
      ],
      "answer": 2,
      "explain": "An aspirate is repeated by the smooth consonant: <i lang=\"grc\">θ</i> by <i lang=\"grc\">τ</i>, so <i lang=\"grc\">τε-θαύμακα</i>."
     },
     {
      "prompt": "Why does the perfect infinitive <i lang=\"grc\">λελυκέναι</i> keep the reduplication?",
      "options": [
       "Every infinitive takes the augment",
       "It is the future perfect infinitive",
       "The infinitive is built on the aorist stem",
       "Reduplication marks the perfect stem"
      ],
      "answer": 3,
      "explain": "Reduplication is not an augment; it belongs to the perfect stem in all moods."
     }
    ]
   }
  },
  {
   "id": "active",
   "title": "The first and second perfect active",
   "body": "<p>Most verbs whose stem ends in a vowel form the perfect active with <i lang=\"grc\">κ</i> (the <strong>first perfect</strong>), with the endings <i lang=\"grc\">-α</i>, <i lang=\"grc\">-ας</i>, <i lang=\"grc\">-ε(ν)</i>:</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Perfect of λύω</th> <th>Pluperfect of λύω</th></tr>\n<tr><td>First singular</td> <td class=\"f\">λέλυκα</td> <td class=\"f\">ἐλελύκη</td></tr>\n<tr><td>Second singular</td> <td class=\"f\">λέλυκας</td> <td class=\"f\">ἐλελύκης</td></tr>\n<tr><td>Third singular</td> <td class=\"f\">λέλυκε(ν)</td> <td class=\"f\">ἐλελύκει(ν)</td></tr>\n<tr><td>First plural</td> <td class=\"f\">λελύκαμεν</td> <td class=\"f\">ἐλελύκεμεν</td></tr>\n<tr><td>Second plural</td> <td class=\"f\">λελύκατε</td> <td class=\"f\">ἐλελύκετε</td></tr>\n<tr><td>Third plural</td> <td class=\"f\">λελύκᾱσι(ν)</td> <td class=\"f\">ἐλελύκεσαν</td></tr>\n</table></div>\n<p>Many verbs whose stem ends in a consonant form a <strong>second perfect</strong> without <i lang=\"grc\">κ</i>, often with a change of vowel or an aspirated consonant: <i lang=\"grc\">γράφω</i>, <i lang=\"grc\">γέγραφα</i>; <i lang=\"grc\">λείπω</i>, <i lang=\"grc\">λέλοιπα</i>; <i lang=\"grc\">πέμπω</i>, <i lang=\"grc\">πέπομφα</i>; <i lang=\"grc\">φεύγω</i>, <i lang=\"grc\">πέφευγα</i>. The pluperfect adds the augment to the reduplication and takes the endings <i lang=\"grc\">-η</i>, <i lang=\"grc\">-ης</i>, <i lang=\"grc\">-ει(ν)</i>; it is the perfect set in the past, “he had loosed,” and it is much rarer than the Latin pluperfect, because Greek often uses the aorist for an action that had happened before another.</p>",
   "qp": {
    "id": "q-grc-perfect-active",
    "variants": [
     {
      "prompt": "What is the third person plural perfect active of <i lang=\"grc\">παιδεύω</i>?",
      "options": [
       "<i lang=\"grc\">πεπαιδεύκᾱσι(ν)</i>",
       "<i lang=\"grc\">πεπαίδευκαν</i>",
       "<i lang=\"grc\">ἐπεπαιδεύκεσαν</i>",
       "<i lang=\"grc\">πεπαιδεύκουσι(ν)</i>"
      ],
      "answer": 0,
      "explain": "The perfect active ends in <i lang=\"grc\">-κᾱσι(ν)</i> in the third person plural; <i lang=\"grc\">ἐπεπαιδεύκεσαν</i> is the pluperfect."
     },
     {
      "prompt": "Which is a second perfect?",
      "options": [
       "<i lang=\"grc\">λέλυκα</i>",
       "<i lang=\"grc\">πεπίστευκα</i>",
       "<i lang=\"grc\">τέθυκα</i>",
       "<i lang=\"grc\">γέγραφα</i>"
      ],
      "answer": 3,
      "explain": "The word <i lang=\"grc\">γέγραφα</i> has no <i lang=\"grc\">κ</i>; the others are first perfects in <i lang=\"grc\">-κα</i>."
     },
     {
      "prompt": "What does <i lang=\"grc\">ἐλελύκει</i> mean?",
      "options": [
       "“he has loosed”",
       "“he was loosing”",
       "“he had loosed”",
       "“he will have loosed”"
      ],
      "answer": 2,
      "explain": "The augment with the reduplication and the ending <i lang=\"grc\">-ει</i> marks the pluperfect, third person singular."
     }
    ]
   }
  },
  {
   "id": "middle",
   "title": "The perfect middle and passive",
   "body": "<p>The perfect middle and passive adds the middle endings to the reduplicated stem with no connecting vowel: <i lang=\"grc\">λέλυμαι</i>, <i lang=\"grc\">λέλυσαι</i>, <i lang=\"grc\">λέλυται</i>, <i lang=\"grc\">λελύμεθα</i>, <i lang=\"grc\">λέλυσθε</i>, <i lang=\"grc\">λέλυνται</i>; infinitive <i lang=\"grc\">λελύσθαι</i>, participle <i lang=\"grc\">λελυμένος</i>. The same forms serve for the middle and the passive, so <i lang=\"grc\">λέλυται</i> means “he has ransomed” or “he has been loosed,” as the sentence shows.</p>\n<p>When the stem ends in a consonant, the consonant meets the ending and changes: <i lang=\"grc\">γράφω</i> gives <i lang=\"grc\">γέγραμμαι</i>, <i lang=\"grc\">γέγραψαι</i>, <i lang=\"grc\">γέγραπται</i>; <i lang=\"grc\">πράττω</i> gives <i lang=\"grc\">πέπρᾱγμαι</i>, <i lang=\"grc\">πέπρᾱξαι</i>, <i lang=\"grc\">πέπρᾱκται</i>. In such verbs the third person plural, which would be hard to pronounce, is made with the participle and <i lang=\"grc\">εἰσί</i>, as we have seen: <i lang=\"grc\">γεγραμμένοι εἰσί</i>.</p>",
   "qp": {
    "id": "q-grc-perfect-middle",
    "variants": [
     {
      "prompt": "What is the third person singular perfect middle and passive of <i lang=\"grc\">παιδεύω</i>?",
      "options": [
       "<i lang=\"grc\">πεπαίδευκε</i>",
       "<i lang=\"grc\">ἐπαιδεύετο</i>",
       "<i lang=\"grc\">ἐπεπαίδευτο</i>",
       "<i lang=\"grc\">πεπαίδευται</i>"
      ],
      "answer": 3,
      "explain": "The perfect middle adds <i lang=\"grc\">-ται</i> to the reduplicated stem: <i lang=\"grc\">πεπαίδευ-ται</i>. <i lang=\"grc\">Πεπαίδευκε</i> is active."
     },
     {
      "prompt": "What is the perfect middle and passive participle of <i lang=\"grc\">λύω</i>?",
      "options": [
       "<i lang=\"grc\">λελυμένος</i>",
       "<i lang=\"grc\">λελυκώς</i>",
       "<i lang=\"grc\">λυόμενος</i>",
       "<i lang=\"grc\">λυθησόμενος</i>"
      ],
      "answer": 0,
      "explain": "The perfect middle participle ends in <i lang=\"grc\">-μένος</i>, accented on the penult: <i lang=\"grc\">λελυμένος</i>. <i lang=\"grc\">Λελυκώς</i> is the perfect active."
     },
     {
      "prompt": "Why is “they have been written” <i lang=\"grc\">γεγραμμένοι εἰσί</i> and not one word?",
      "options": [
       "Every perfect passive is two words",
       "The consonant stem makes the one-word form hard to say",
       "<i lang=\"grc\">Γράφω</i> has no perfect",
       "The plural of the perfect is always made with <i lang=\"grc\">εἰμί</i>"
      ],
      "answer": 1,
      "explain": "In verbs with a consonant stem the third person plural is made with the participle and <i lang=\"grc\">εἰσί</i>; vowel stems have one word, <i lang=\"grc\">λέλυνται</i>."
     }
    ]
   }
  }
 ]
};
