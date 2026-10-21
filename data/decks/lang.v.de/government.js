window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.v.de/government"] = {
 "id": "lang.v.de/government",
 "title": "Case and Government in German",
 "sub": "The cases of the pronoun and the objects, verbs and adjectives that govern the dative and the genitive, and the prepositions",
 "sources": "Duden, <i>Die Grammatik</i>",
 "panels": [
  {
   "id": "objects",
   "title": "The pronoun and the two objects",
   "body": "<p>German shows the case of a noun chiefly by its article, and the case of a pronoun by the pronoun itself. A transitive verb governs the accusative of the direct object, and a verb of giving, showing, or telling also takes the dative of the person, the indirect object: <i>Ich schreibe meiner Mutter einen Brief</i> (“I am writing my mother a letter”).</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Nominative</th> <th>Accusative</th> <th>Dative</th></tr>\n<tr><td>1 sg.</td> <td class=\"f\">ich</td> <td class=\"f\">mich</td> <td class=\"f\">mir</td></tr>\n<tr><td>2 sg.</td> <td class=\"f\">du</td> <td class=\"f\">dich</td> <td class=\"f\">dir</td></tr>\n<tr><td>3 sg. m.</td> <td class=\"f\">er</td> <td class=\"f\">ihn</td> <td class=\"f\">ihm</td></tr>\n<tr><td>3 sg. f.</td> <td class=\"f\">sie</td> <td class=\"f\">sie</td> <td class=\"f\">ihr</td></tr>\n<tr><td>3 sg. n.</td> <td class=\"f\">es</td> <td class=\"f\">es</td> <td class=\"f\">ihm</td></tr>\n<tr><td>1 pl.</td> <td class=\"f\">wir</td> <td class=\"f\">uns</td> <td class=\"f\">uns</td></tr>\n<tr><td>2 pl.</td> <td class=\"f\">ihr</td> <td class=\"f\">euch</td> <td class=\"f\">euch</td></tr>\n<tr><td>3 pl.</td> <td class=\"f\">sie</td> <td class=\"f\">sie</td> <td class=\"f\">ihnen</td></tr>\n<tr><td>polite</td> <td class=\"f\">Sie</td> <td class=\"f\">Sie</td> <td class=\"f\">Ihnen</td></tr>\n</table></div>\n<p>Two nouns as objects usually stand in the order dative, accusative: <i>Er zeigt dem Gast das Zimmer</i> (“he shows the guest the room”). Two pronouns stand in the order accusative, dative: <i>Er zeigt es ihm</i> (“he shows it to him”). A few verbs take two accusatives, one of the person and one of the thing, as Latin <i>doceō</i> does: <i>Er lehrt den Jungen die Sprache</i> (“he teaches the boy the language”). With <i>lehren</i> the grammars give the accusative of the person, although the dative is often heard.</p>",
   "qp": {
    "id": "q-de-gov-obj",
    "variants": [
     {
      "prompt": "Which form completes <i>Wir besuchen ______ morgen</i> (“we are visiting you tomorrow,” to several friends)?",
      "options": [
       "<i>ihr</i>",
       "<i>euch</i>",
       "<i>euer</i>",
       "<i>Ihnen</i>"
      ],
      "answer": 1,
      "explain": "<i>Besuchen</i> takes the accusative, and the accusative of <i>ihr</i> is <i>euch</i>."
     },
     {
      "prompt": "Which form completes <i>Ich schreibe ______ einen Brief</i> (“I am writing her a letter”)?",
      "options": [
       "<i>sie</i>",
       "<i>ihn</i>",
       "<i>ihr</i>",
       "<i>ihnen</i>"
      ],
      "answer": 2,
      "explain": "The person written to is the indirect object, in the dative: <i>ihr</i>."
     },
     {
      "prompt": "Which order is usual for two pronoun objects?",
      "options": [
       "Dative before accusative",
       "Either, without difference",
       "The longer pronoun first",
       "Accusative before dative"
      ],
      "answer": 3,
      "explain": "Two pronouns stand in the order accusative, dative: <i>Er gibt es ihr</i>."
     }
    ]
   }
  },
  {
   "id": "dative",
   "title": "Verbs and adjectives that govern the dative and the genitive",
   "body": "<p>Some German verbs govern the dative where English has a direct object, and each must be learned with its case: <i>helfen</i>, <i>danken</i>, <i>antworten</i>, <i>gehören</i>, <i>folgen</i>, <i>vertrauen</i>, and <i>gefallen</i>. So we say <i>Der Hund folgt dem Kind</i> (“the dog follows the child”) and <i>Das Lied gefällt mir</i> (“I like the song,” literally “the song pleases me”). Some adjectives also govern the dative, among them <i>ähnlich</i> (“like”), <i>dankbar</i> (“grateful”), and <i>treu</i> (“faithful”): <i>Er ist seinem Vater ähnlich</i>.</p>\n<p>A noun governs the genitive of another noun that limits it: <i>das Auto meines Vaters</i> (“my father’s car”). With proper names the genitive usually stands first and adds <i>-s</i>: <i>Peters Fahrrad</i>. A few verbs and adjectives govern the genitive in formal German: <i>Wir gedenken der Toten</i> (“we remember the dead”).</p>",
   "qp": {
    "id": "q-de-gov-dat",
    "variants": [
     {
      "prompt": "Which form completes <i>Wir vertrauen ______ Arzt</i> (“we trust the doctor”)?",
      "options": [
       "<i>den</i>",
       "<i>dem</i>",
       "<i>der</i>",
       "<i>des</i>"
      ],
      "answer": 1,
      "explain": "<i>Vertrauen</i> governs the dative."
     },
     {
      "prompt": "What does <i>Der Film gefällt ihnen</i> mean?",
      "options": [
       "“the film likes them”",
       "“they like the films”",
       "“they like the film”",
       "“he likes their film”"
      ],
      "answer": 2,
      "explain": "<i>Gefallen</i> governs the dative of the person pleased: “the film pleases them.”"
     },
     {
      "prompt": "Which phrase is correct for “my sister’s room”?",
      "options": [
       "<i>das Zimmer meine Schwester</i>",
       "<i>das Zimmer meinem Schwester</i>",
       "<i>das Zimmer meines Schwesters</i>",
       "<i>das Zimmer meiner Schwester</i>"
      ],
      "answer": 3,
      "explain": "The possessor stands in the genitive: <i>meiner Schwester</i>."
     }
    ]
   }
  },
  {
   "id": "prepositions",
   "title": "The prepositions and their cases",
   "body": "<p>We saw in Section III that each German preposition governs a case. <i>Durch</i>, <i>für</i>, <i>gegen</i>, <i>ohne</i>, and <i>um</i> govern the accusative; <i>aus</i>, <i>bei</i>, <i>mit</i>, <i>nach</i>, <i>seit</i>, <i>von</i>, and <i>zu</i> the dative; <i>wegen</i>, <i>während</i>, <i>trotz</i>, and <i>statt</i> the genitive. Nine prepositions (<i>an</i>, <i>auf</i>, <i>hinter</i>, <i>in</i>, <i>neben</i>, <i>über</i>, <i>unter</i>, <i>vor</i>, <i>zwischen</i>) govern the accusative for motion toward a place and the dative for rest in a place: <i>Ich lege das Heft auf den Tisch</i> (“I put the notebook on the table”), but <i>Das Heft liegt auf dem Tisch</i> (“the notebook is lying on the table”).</p>\n<p>Several prepositions combine with the article: <i>im</i> (<i>in dem</i>), <i>ins</i> (<i>in das</i>), <i>am</i>, <i>beim</i>, <i>vom</i>, <i>zum</i>, <i>zur</i>. For going to a city or a country without an article, German uses <i>nach</i> (<i>nach Wien</i>); for going to a person or a building, <i>zu</i> (<i>zum Bäcker</i>, “to the baker’s”).</p>",
   "qp": {
    "id": "q-de-gov-prep",
    "variants": [
     {
      "prompt": "Which form completes <i>Sie hängt das Bild an ______ Wand</i> (“she hangs the picture on the wall”)?",
      "options": [
       "<i>der</i>",
       "<i>den</i>",
       "<i>dem</i>",
       "<i>die</i>"
      ],
      "answer": 3,
      "explain": "The picture moves to the wall, so <i>an</i> takes the accusative: <i>die Wand</i>."
     },
     {
      "prompt": "Which form completes <i>Wir fliegen ______ Rom</i> (“we are flying to Rome”)?",
      "options": [
       "<i>nach</i>",
       "<i>zu</i>",
       "<i>in</i>",
       "<i>bei</i>"
      ],
      "answer": 0,
      "explain": "For a city without an article, German uses <i>nach</i>."
     },
     {
      "prompt": "Which case does <i>trotz</i> (“in spite of”) govern?",
      "options": [
       "The dative",
       "The genitive",
       "The accusative",
       "The nominative"
      ],
      "answer": 1,
      "explain": "<i>Trotz</i>, like <i>wegen</i> and <i>während</i>, governs the genitive in written German."
     }
    ]
   }
  }
 ]
};
