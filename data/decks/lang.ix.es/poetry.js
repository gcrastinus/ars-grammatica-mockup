window.ARS = window.ARS || {};
ARS.decks = ARS.decks || {};
ARS.decks["lang.ix.es/poetry"] = {
 "id": "lang.ix.es/poetry",
 "title": "Spanish Poetry",
 "sub": "Spanish verse, read part by part",
 "sources": "Fernando José Wolf and Conrado Hofmann, <i lang=\"es\">Primavera y flor de romances</i>, vol. 2 (Berlin, A. Asher y Comp., 1856), for the ballad, in the spelling of that edition; Felipe Robles Dégano, <i lang=\"es\">Ortología clásica de la lengua castellana</i> (1905), for the count of syllables and for the old practice in assonance. The English of the verse is the course’s own plain rendering, line by line.",
 "panels": [
  {
   "id": "poetry-1",
   "title": "The prisoner’s ballad · Octosyllable",
   "body": "<p lang=\"es\">Que por mayo era, por mayo,<br>cuando los grandes calores,<br>cuando los enamorados<br>van servir á sus amores,<br>sino yo, triste mezquino,<br>que yago en estas prisiones,<br>que ni sé cuándo es de dia,<br>ni ménos cuándo es de noche<br>sino por una avecilla<br>que me cantaba al albor:<br>matómela un ballestero;<br>¡déle Dios mal galardon!</p><p>For it was May, it was May,<br>when the great heats,<br>when the lovers<br>go serve their loves,<br>except me, sad wretch,<br>who lie in these prisons,<br>for I do not know when it is day,<br>nor less when it is night,<br>except by a little bird<br>that sang to me at dawn:<br>a crossbowman killed it for me;<br>may God give him a bad reward!</p><p><strong>Context.</strong> An anonymous speaker, a prisoner in Castile, says that it is May, when lovers go to the women they love, whereas he lies in prison and cannot tell day from night except by a bird that sings at dawn. A crossbowman kills the bird. Wolf and Hofmann print the lines from the <i lang=\"es\">Cancionero general</i> of 1511, folio 136, and they number them 114. Each line is an octosyllable, a line of eight syllables. The even lines carry the assonance.</p>",
   "qp": {
    "id": "q-es-ixv-poetry-1",
    "variants": [
     {
      "prompt": "What is <i lang=\"es\">yago</i> in <i lang=\"es\">que yago en estas prisiones</i>?",
      "options": [
       "A noun for the prison",
       "An old present of <i lang=\"es\">yacer</i>",
       "A command to the jailer",
       "The preterite of <i lang=\"es\">ir</i>"
      ],
      "answer": 1,
      "explain": "<i lang=\"es\">Yago</i> is an old present of <i lang=\"es\">yacer</i>, “I lie.”"
     },
     {
      "prompt": "What does <i lang=\"es\">sino yo</i> mean here?",
      "options": [
       "Except me",
       "If I do not go",
       "But the day is mine",
       "His own fate"
      ],
      "answer": 0,
      "explain": "<i lang=\"es\">Sino</i> here means “except.” The heats and the lovers are set aside, and the prisoner remains."
     },
     {
      "prompt": "What is <i lang=\"es\">déle</i> in <i lang=\"es\">déle Dios</i>?",
      "options": [
       "A wish: may God give",
       "An infinitive of <i lang=\"es\">dar</i>",
       "A preterite: he gave",
       "A plural command"
      ],
      "answer": 0,
      "explain": "<i lang=\"es\">Dé</i> is the present subjunctive of <i lang=\"es\">dar</i>, with <i lang=\"es\">le</i> joined to it. The clause is a wish."
     }
    ]
   }
  },
  {
   "id": "poetry-2",
   "title": "Eight syllables, and the even lines",
   "body": "<p>The line of eight syllables is counted to the last stressed syllable, and one syllable more. Robles Dégano records this as the count the preceptists admit: a line that ends on a stressed syllable counts one more than the syllables written up to that stress, and a line that ends on a word stressed on the third syllable from the end counts one less. Synalepha, in Spanish <i lang=\"es\">sinalefa</i>, joins vowels of two words in one syllable. He says that a silent <i lang=\"es\">h</i> counts for nothing in that joining. The same two rules are the ones already used for Spanish verse.</p><p><i lang=\"es\">Van servir á sus amores</i> has no synalepha. The eight syllables are <i lang=\"es\">van</i>, <i lang=\"es\">ser</i>, <i lang=\"es\">vir</i>, <i lang=\"es\">á</i>, <i lang=\"es\">sus</i>, <i lang=\"es\">a</i>, <i lang=\"es\">mo</i>, <i lang=\"es\">res</i>. <i lang=\"es\">Que me cantaba al albor</i> joins the last <i lang=\"es\">a</i> of <i lang=\"es\">cantaba</i> with <i lang=\"es\">al</i>, and <i lang=\"es\">albor</i> is stressed on its last syllable, so the seven written syllables count as eight: <i lang=\"es\">que</i>, <i lang=\"es\">me</i>, <i lang=\"es\">can</i>, <i lang=\"es\">ta</i>, <i lang=\"es\">baal</i>, <i lang=\"es\">al</i>, <i lang=\"es\">bor</i>. <i lang=\"es\">Que por mayo era, por mayo</i> likewise counts eight, with synalepha in <i lang=\"es\">mayo era</i>.</p><p>Assonance uses the vowels from the last stress. <i lang=\"es\">Calores</i>, <i lang=\"es\">amores</i>, <i lang=\"es\">prisiones</i>, and <i lang=\"es\">noche</i> share the vowels <i lang=\"es\">o</i> and <i lang=\"es\">e</i>. <i lang=\"es\">Albor</i> and <i lang=\"es\">galardon</i> are stressed on the last syllable, in <i lang=\"es\">o</i> alone. Robles Dégano says that old verse often matched an oxytone, on its stressed vowel alone, with a paroxytone assonance, and that the old ballads often added an <i lang=\"es\">e</i> to make the match (<i lang=\"es\">Beltrane</i> beside <i lang=\"es\">Dirlos</i>). He says that later preceptists do not allow the match of the stressed vowel alone. This ballad, as Wolf and Hofmann print it, does not add that <i lang=\"es\">e</i>. The description of these two endings rests on that one book.</p>"
  },
  {
   "id": "poetry-3",
   "title": "Yago, and the prisons",
   "body": "<p><i lang=\"es\">Que yago en estas prisiones</i>: <i lang=\"es\">yago</i> is an old present of <i lang=\"es\">yacer</i>, “to lie.” A later spelling of the same form is <i lang=\"es\">yazco</i> or <i lang=\"es\">yazgo</i>. The edition keeps <i lang=\"es\">yago</i>. <i lang=\"es\">Prisiones</i> is plural in form. In this line it is the prison where he lies, and the plural is the old way of naming it. <i lang=\"es\">Que</i> joins the clause to <i lang=\"es\">yo</i>: “I, who lie.”</p>"
  },
  {
   "id": "poetry-4",
   "title": "Sino, except",
   "body": "<p><i lang=\"es\">Sino yo, triste mezquino</i>: <i lang=\"es\">sino</i> means “except.” The sentence has set the lovers on one side, and the prisoner on the other. <i lang=\"es\">Triste</i> and <i lang=\"es\">mezquino</i> both describe <i lang=\"es\">yo</i>. <i lang=\"es\">Mezquino</i> is “wretched.” The same <i lang=\"es\">sino</i> returns in <i lang=\"es\">sino por una avecilla</i>, “except by a little bird.” <i lang=\"es\">Por</i> there means “by means of.”</p>"
  },
  {
   "id": "poetry-5",
   "title": "The bird and the wish",
   "body": "<p><i lang=\"es\">Matómela un ballestero</i>: <i lang=\"es\">mató</i> is the preterite of <i lang=\"es\">matar</i>, “killed.” <i lang=\"es\">Me</i> and <i lang=\"es\">la</i> are joined to the verb. <i lang=\"es\">La</i> is the bird, <i lang=\"es\">avecilla</i>, which is feminine. <i lang=\"es\">Me</i> is the person affected: the crossbowman killed it for him. <i lang=\"es\">¡Déle Dios mal galardon!</i> <i lang=\"es\">Dé</i> is the present subjunctive of <i lang=\"es\">dar</i>, a wish, and <i lang=\"es\">le</i> is the crossbowman. <i lang=\"es\">Galardon</i> is “reward.” <i lang=\"es\">Mal galardon</i> is a bad reward.</p>"
  },
  {
   "id": "poetry-6",
   "title": "The spelling of the 1856 print",
   "body": "<p>The lines were copied in the <i lang=\"es\">Cancionero general</i> of 1511. The text above is not that copy. It is the print of Wolf and Hofmann (Berlin, 1856), which writes a later spelling and keeps some old forms. On these lines the print does three things:</p><p><strong>Accents it writes.</strong> <i lang=\"es\">á</i>, <i lang=\"es\">sé</i>, <i lang=\"es\">cuándo</i>, <i lang=\"es\">ménos</i>, <i lang=\"es\">matómela</i>, and <i lang=\"es\">déle</i>.<br><strong>Accents it does not write.</strong> <i lang=\"es\">dia</i> and <i lang=\"es\">galardon</i>, which a later spelling accents.<br><strong>Old forms it keeps.</strong> <i lang=\"es\">yago</i>, and <i lang=\"es\">van servir</i> with no <i lang=\"es\">a</i> before the infinitive.</p><p>An editor who modernizes the spelling does not add a word, drop a word, or exchange one copy for another. Wolf and Hofmann print a second copy of the same ballad on the same page. Its first line is <i lang=\"es\">Por el mes era de mayo</i>. The lines in this deck are only the copy they number 114.</p>"
  }
 ]
};
