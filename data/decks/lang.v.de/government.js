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
   "body": "<p>German shows the case of a noun chiefly by its article, and the case of a pronoun by the pronoun itself. A transitive verb governs the accusative of the direct object, and a verb of giving, showing, or telling also takes the dative of the person, the indirect object: <i lang=\"de\">Ich schreibe meiner Mutter einen Brief</i> (“I am writing my mother a letter”).</p>\n<div class=\"para-wrap\"><table class=\"para\">\n<tr><th></th> <th>Nominative</th> <th>Accusative</th> <th>Dative</th></tr>\n<tr><td>1 sg.</td> <td class=\"f\">ich</td> <td class=\"f\">mich</td> <td class=\"f\">mir</td></tr>\n<tr><td>2 sg.</td> <td class=\"f\">du</td> <td class=\"f\">dich</td> <td class=\"f\">dir</td></tr>\n<tr><td>3 sg. m.</td> <td class=\"f\">er</td> <td class=\"f\">ihn</td> <td class=\"f\">ihm</td></tr>\n<tr><td>3 sg. f.</td> <td class=\"f\">sie</td> <td class=\"f\">sie</td> <td class=\"f\">ihr</td></tr>\n<tr><td>3 sg. n.</td> <td class=\"f\">es</td> <td class=\"f\">es</td> <td class=\"f\">ihm</td></tr>\n<tr><td>1 pl.</td> <td class=\"f\">wir</td> <td class=\"f\">uns</td> <td class=\"f\">uns</td></tr>\n<tr><td>2 pl.</td> <td class=\"f\">ihr</td> <td class=\"f\">euch</td> <td class=\"f\">euch</td></tr>\n<tr><td>3 pl.</td> <td class=\"f\">sie</td> <td class=\"f\">sie</td> <td class=\"f\">ihnen</td></tr>\n<tr><td>polite</td> <td class=\"f\">Sie</td> <td class=\"f\">Sie</td> <td class=\"f\">Ihnen</td></tr>\n</table></div>\n<p>Two nouns as objects usually stand in the order dative, accusative: <i lang=\"de\">Er zeigt dem Gast das Zimmer</i> (“he shows the guest the room”). Two pronouns stand in the order accusative, dative: <i lang=\"de\">Er zeigt es ihm</i> (“he shows it to him”). A few verbs take two accusatives, one of the person and one of the thing, as Latin <i lang=\"de\">doceō</i> does: <i lang=\"de\">Er lehrt den Jungen die Sprache</i> (“he teaches the boy the language”). With <i lang=\"de\">lehren</i> the grammars give the accusative of the person, although the dative is often heard.</p>",
   "qp": {
    "id": "q-de-gov-obj",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">Wir besuchen ______ morgen</i> (“we are visiting you tomorrow,” to several friends)?",
      "options": [
       "<i lang=\"de\">ihr</i>",
       "<i lang=\"de\">euch</i>",
       "<i lang=\"de\">euer</i>",
       "<i lang=\"de\">Ihnen</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Besuchen</i> takes the accusative, and the accusative of <i lang=\"de\">ihr</i> is <i lang=\"de\">euch</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Ich schreibe ______ einen Brief</i> (“I am writing her a letter”)?",
      "options": [
       "<i lang=\"de\">sie</i>",
       "<i lang=\"de\">ihn</i>",
       "<i lang=\"de\">ihr</i>",
       "<i lang=\"de\">ihnen</i>"
      ],
      "answer": 2,
      "explain": "The person written to is the indirect object, in the dative: <i lang=\"de\">ihr</i>."
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
      "explain": "Two pronouns stand in the order accusative, dative: <i lang=\"de\">Er gibt es ihr</i>."
     }
    ]
   }
  },
  {
   "id": "dative",
   "title": "Verbs and adjectives that govern the dative and the genitive",
   "body": "<p>Some German verbs govern the dative where English has a direct object, and each must be learned with its case: <i lang=\"de\">helfen</i>, <i lang=\"de\">danken</i>, <i lang=\"de\">antworten</i>, <i lang=\"de\">gehören</i>, <i lang=\"de\">folgen</i>, <i lang=\"de\">vertrauen</i>, and <i lang=\"de\">gefallen</i>. So we say <i lang=\"de\">Der Hund folgt dem Kind</i> (“the dog follows the child”) and <i lang=\"de\">Das Lied gefällt mir</i> (“I like the song,” literally “the song pleases me”). Some adjectives also govern the dative, among them <i lang=\"de\">ähnlich</i> (“like”), <i lang=\"de\">dankbar</i> (“grateful”), and <i lang=\"de\">treu</i> (“faithful”): <i lang=\"de\">Er ist seinem Vater ähnlich</i>.</p>\n<p>A noun governs the genitive of another noun that limits it: <i lang=\"de\">das Auto meines Vaters</i> (“my father’s car”). With proper names the genitive usually stands first and adds <i lang=\"de\">-s</i>: <i lang=\"de\">Peters Fahrrad</i>. A few verbs and adjectives govern the genitive in formal German: <i lang=\"de\">Wir gedenken der Toten</i> (“we remember the dead”).</p>",
   "qp": {
    "id": "q-de-gov-dat",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">Wir vertrauen ______ Arzt</i> (“we trust the doctor”)?",
      "options": [
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">dem</i>",
       "<i lang=\"de\">der</i>",
       "<i lang=\"de\">des</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Vertrauen</i> governs the dative."
     },
     {
      "prompt": "What does <i lang=\"de\">Der Film gefällt ihnen</i> mean?",
      "options": [
       "“the film likes them”",
       "“they like the films”",
       "“they like the film”",
       "“he likes their film”"
      ],
      "answer": 2,
      "explain": "<i lang=\"de\">Gefallen</i> governs the dative of the person pleased: “the film pleases them.”"
     },
     {
      "prompt": "Which phrase is correct for “my sister’s room”?",
      "options": [
       "<i lang=\"de\">das Zimmer meine Schwester</i>",
       "<i lang=\"de\">das Zimmer meinem Schwester</i>",
       "<i lang=\"de\">das Zimmer meines Schwesters</i>",
       "<i lang=\"de\">das Zimmer meiner Schwester</i>"
      ],
      "answer": 3,
      "explain": "The possessor stands in the genitive: <i lang=\"de\">meiner Schwester</i>."
     }
    ]
   }
  },
  {
   "id": "prepositions",
   "title": "The prepositions and their cases",
   "body": "<p>We saw in Section III that each German preposition governs a case. <i lang=\"de\">Durch</i>, <i lang=\"de\">für</i>, <i lang=\"de\">gegen</i>, <i lang=\"de\">ohne</i>, and <i lang=\"de\">um</i> govern the accusative; <i lang=\"de\">aus</i>, <i lang=\"de\">bei</i>, <i lang=\"de\">mit</i>, <i lang=\"de\">nach</i>, <i lang=\"de\">seit</i>, <i lang=\"de\">von</i>, and <i lang=\"de\">zu</i> the dative; <i lang=\"de\">wegen</i>, <i lang=\"de\">während</i>, <i lang=\"de\">trotz</i>, and <i lang=\"de\">statt</i> the genitive. Nine prepositions (<i lang=\"de\">an</i>, <i lang=\"de\">auf</i>, <i lang=\"de\">hinter</i>, <i lang=\"de\">in</i>, <i lang=\"de\">neben</i>, <i lang=\"de\">über</i>, <i lang=\"de\">unter</i>, <i lang=\"de\">vor</i>, <i lang=\"de\">zwischen</i>) govern the accusative for motion toward a place and the dative for rest in a place: <i lang=\"de\">Ich lege das Heft auf den Tisch</i> (“I put the notebook on the table”), but <i lang=\"de\">Das Heft liegt auf dem Tisch</i> (“the notebook is lying on the table”).</p>\n<p>Several prepositions combine with the article: <i lang=\"de\">im</i> (<i lang=\"de\">in dem</i>), <i lang=\"de\">ins</i> (<i lang=\"de\">in das</i>), <i lang=\"de\">am</i>, <i lang=\"de\">beim</i>, <i lang=\"de\">vom</i>, <i lang=\"de\">zum</i>, <i lang=\"de\">zur</i>. For going to a city or a country without an article, German uses <i lang=\"de\">nach</i> (<i lang=\"de\">nach Wien</i>); for going to a person or a building, <i lang=\"de\">zu</i> (<i lang=\"de\">zum Bäcker</i>, “to the baker’s”).</p>",
   "qp": {
    "id": "q-de-gov-prep",
    "variants": [
     {
      "prompt": "Which form completes <i lang=\"de\">Sie hängt das Bild an ______ Wand</i> (“she hangs the picture on the wall”)?",
      "options": [
       "<i lang=\"de\">der</i>",
       "<i lang=\"de\">den</i>",
       "<i lang=\"de\">dem</i>",
       "<i lang=\"de\">die</i>"
      ],
      "answer": 3,
      "explain": "The picture moves to the wall, so <i lang=\"de\">an</i> takes the accusative: <i lang=\"de\">die Wand</i>."
     },
     {
      "prompt": "Which form completes <i lang=\"de\">Wir fliegen ______ Rom</i> (“we are flying to Rome”)?",
      "options": [
       "<i lang=\"de\">nach</i>",
       "<i lang=\"de\">zu</i>",
       "<i lang=\"de\">in</i>",
       "<i lang=\"de\">bei</i>"
      ],
      "answer": 0,
      "explain": "For a city without an article, German uses <i lang=\"de\">nach</i>."
     },
     {
      "prompt": "Which case does <i lang=\"de\">trotz</i> (“in spite of”) govern?",
      "options": [
       "The dative",
       "The genitive",
       "The accusative",
       "The nominative"
      ],
      "answer": 1,
      "explain": "<i lang=\"de\">Trotz</i>, like <i lang=\"de\">wegen</i> and <i lang=\"de\">während</i>, governs the genitive in written German."
     }
    ]
   }
  }
 ]
};
