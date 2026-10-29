/* Latin form tables and fresh sittings, ported from the old app (index.html:
   LAT_NOUNS, LAT_ADJS, LAT_VERBS, and the noun, verb, sentence, and syllable drills).
   Each sitting is drawn when the exercise opens. Macrons are not required (macrons: false).
   j/v are not folded to i/u: the typed-answer renderer does not do that.
   Alternates that Allen and Greenough also allows are not generated: see the report. */
(function () {
  const root = typeof window !== 'undefined' ? window : globalThis;
  const ARS = root.ARS = root.ARS || {};

  const CASES = ['nom', 'gen', 'dat', 'acc', 'abl', 'voc'];
  const CASE_NAME = {
    nom: 'nominative', gen: 'genitive', dat: 'dative',
    acc: 'accusative', abl: 'ablative', voc: 'vocative'
  };
  const NUMS = ['sg', 'pl'];
  const GEN_NAME = { m: 'masculine', f: 'feminine', n: 'neuter' };
  const TENSE_NAME = {
    pres: 'present', impf: 'imperfect', fut: 'future',
    perf: 'perfect', plup: 'pluperfect', futp: 'future perfect'
  };
  const MOOD_NAME = { ind: 'indicative', subj: 'subjunctive', imp: 'imperative' };
  const VOICE_NAME = { act: 'active', pass: 'passive' };
  const ORD = { 1: 'first', 2: 'second', 3: 'third' };

  const N_END = {
    d1: { sg: { gen: 'ae', dat: 'ae', acc: 'am', abl: 'ā', voc: '=nom' },
          pl: { nom: 'ae', gen: 'ārum', dat: 'īs', acc: 'ās', abl: 'īs', voc: 'ae' } },
    d2m: { sg: { gen: 'ī', dat: 'ō', acc: 'um', abl: 'ō', voc: '*2voc' },
           pl: { nom: 'ī', gen: 'ōrum', dat: 'īs', acc: 'ōs', abl: 'īs', voc: 'ī' } },
    d2n: { sg: { gen: 'ī', dat: 'ō', acc: '=nom', abl: 'ō', voc: '=nom' },
           pl: { nom: 'a', gen: 'ōrum', dat: 'īs', acc: 'a', abl: 'īs', voc: 'a' } },
    d3: { sg: { gen: 'is', dat: 'ī', acc: 'em', abl: 'e', voc: '=nom' },
          pl: { nom: 'ēs', gen: 'um', dat: 'ibus', acc: 'ēs', abl: 'ibus', voc: 'ēs' } },
    d3i: { sg: { gen: 'is', dat: 'ī', acc: 'em', abl: 'e', voc: '=nom' },
           pl: { nom: 'ēs', gen: 'ium', dat: 'ibus', acc: 'ēs', abl: 'ibus', voc: 'ēs' } },
    d3n: { sg: { gen: 'is', dat: 'ī', acc: '=nom', abl: 'e', voc: '=nom' },
           pl: { nom: 'a', gen: 'um', dat: 'ibus', acc: 'a', abl: 'ibus', voc: 'a' } },
    d3ni: { sg: { gen: 'is', dat: 'ī', acc: '=nom', abl: 'ī', voc: '=nom' },
            pl: { nom: 'ia', gen: 'ium', dat: 'ibus', acc: 'ia', abl: 'ibus', voc: 'ia' } },
    d4: { sg: { gen: 'ūs', dat: 'uī', acc: 'um', abl: 'ū', voc: '=nom' },
          pl: { nom: 'ūs', gen: 'uum', dat: 'ibus', acc: 'ūs', abl: 'ibus', voc: 'ūs' } },
    d4n: { sg: { gen: 'ūs', dat: 'ū', acc: '=nom', abl: 'ū', voc: '=nom' },
           pl: { nom: 'ua', gen: 'uum', dat: 'ibus', acc: 'ua', abl: 'ibus', voc: 'ua' } },
    d5: { sg: { gen: '*5gd', dat: '*5gd', acc: 'em', abl: 'ē', voc: '=nom' },
          pl: { nom: 'ēs', gen: 'ērum', dat: 'ēbus', acc: 'ēs', abl: 'ēbus', voc: 'ēs' } }
  };

  const VOWELS = 'aeiouāēīōūyȳ';
  const isVowel = c => VOWELS.indexOf(c) >= 0;

  function nounEnding(entry, cs, num) {
    const t = N_END[entry.d];
    let e = (num === 'sg') ? (cs === 'nom' ? null : t.sg[cs]) : t.pl[cs];
    if (num === 'sg' && cs === 'nom') return entry.nom;
    if (e === '=nom') return entry.nom;
    if (e === '*2voc') {
      if (/ius$/.test(entry.nom)) return entry.nom.slice(0, -3) + 'ī';
      if (/us$/.test(entry.nom)) return entry.stem + 'e';
      return entry.nom;
    }
    if (e === '*5gd') {
      const last = entry.stem.slice(-1);
      return entry.stem + (isVowel(last) ? 'ēī' : 'eī');
    }
    return entry.stem + e;
  }

  const V_PRES = {
    'pres.ind.act': {
      '1': ['ō', 'ās', 'at', 'āmus', 'ātis', 'ant'],
      '2': ['eō', 'ēs', 'et', 'ēmus', 'ētis', 'ent'],
      '3': ['ō', 'is', 'it', 'imus', 'itis', 'unt'],
      '3io': ['iō', 'is', 'it', 'imus', 'itis', 'iunt'],
      '4': ['iō', 'īs', 'it', 'īmus', 'ītis', 'iunt']
    },
    'impf.ind.act': {
      '1': ['ābam', 'ābās', 'ābat', 'ābāmus', 'ābātis', 'ābant'],
      '2': ['ēbam', 'ēbās', 'ēbat', 'ēbāmus', 'ēbātis', 'ēbant'],
      '3': ['ēbam', 'ēbās', 'ēbat', 'ēbāmus', 'ēbātis', 'ēbant'],
      '3io': ['iēbam', 'iēbās', 'iēbat', 'iēbāmus', 'iēbātis', 'iēbant'],
      '4': ['iēbam', 'iēbās', 'iēbat', 'iēbāmus', 'iēbātis', 'iēbant']
    },
    'fut.ind.act': {
      '1': ['ābō', 'ābis', 'ābit', 'ābimus', 'ābitis', 'ābunt'],
      '2': ['ēbō', 'ēbis', 'ēbit', 'ēbimus', 'ēbitis', 'ēbunt'],
      '3': ['am', 'ēs', 'et', 'ēmus', 'ētis', 'ent'],
      '3io': ['iam', 'iēs', 'iet', 'iēmus', 'iētis', 'ient'],
      '4': ['iam', 'iēs', 'iet', 'iēmus', 'iētis', 'ient']
    },
    'pres.subj.act': {
      '1': ['em', 'ēs', 'et', 'ēmus', 'ētis', 'ent'],
      '2': ['eam', 'eās', 'eat', 'eāmus', 'eātis', 'eant'],
      '3': ['am', 'ās', 'at', 'āmus', 'ātis', 'ant'],
      '3io': ['iam', 'iās', 'iat', 'iāmus', 'iātis', 'iant'],
      '4': ['iam', 'iās', 'iat', 'iāmus', 'iātis', 'iant']
    },
    'impf.subj.act': {
      '1': ['ārem', 'ārēs', 'āret', 'ārēmus', 'ārētis', 'ārent'],
      '2': ['ērem', 'ērēs', 'ēret', 'ērēmus', 'ērētis', 'ērent'],
      '3': ['erem', 'erēs', 'eret', 'erēmus', 'erētis', 'erent'],
      '3io': ['erem', 'erēs', 'eret', 'erēmus', 'erētis', 'erent'],
      '4': ['īrem', 'īrēs', 'īret', 'īrēmus', 'īrētis', 'īrent']
    },
    'pres.ind.pass': {
      '1': ['or', 'āris', 'ātur', 'āmur', 'āminī', 'antur'],
      '2': ['eor', 'ēris', 'ētur', 'ēmur', 'ēminī', 'entur'],
      '3': ['or', 'eris', 'itur', 'imur', 'iminī', 'untur'],
      '3io': ['ior', 'eris', 'itur', 'imur', 'iminī', 'iuntur'],
      '4': ['ior', 'īris', 'ītur', 'īmur', 'īminī', 'iuntur']
    },
    'impf.ind.pass': {
      '1': ['ābar', 'ābāris', 'ābātur', 'ābāmur', 'ābāminī', 'ābantur'],
      '2': ['ēbar', 'ēbāris', 'ēbātur', 'ēbāmur', 'ēbāminī', 'ēbantur'],
      '3': ['ēbar', 'ēbāris', 'ēbātur', 'ēbāmur', 'ēbāminī', 'ēbantur'],
      '3io': ['iēbar', 'iēbāris', 'iēbātur', 'iēbāmur', 'iēbāminī', 'iēbantur'],
      '4': ['iēbar', 'iēbāris', 'iēbātur', 'iēbāmur', 'iēbāminī', 'iēbantur']
    },
    'fut.ind.pass': {
      '1': ['ābor', 'āberis', 'ābitur', 'ābimur', 'ābiminī', 'ābuntur'],
      '2': ['ēbor', 'ēberis', 'ēbitur', 'ēbimur', 'ēbiminī', 'ēbuntur'],
      '3': ['ar', 'ēris', 'ētur', 'ēmur', 'ēminī', 'entur'],
      '3io': ['iar', 'iēris', 'iētur', 'iēmur', 'iēminī', 'ientur'],
      '4': ['iar', 'iēris', 'iētur', 'iēmur', 'iēminī', 'ientur']
    },
    'pres.subj.pass': {
      '1': ['er', 'ēris', 'ētur', 'ēmur', 'ēminī', 'entur'],
      '2': ['ear', 'eāris', 'eātur', 'eāmur', 'eāminī', 'eantur'],
      '3': ['ar', 'āris', 'ātur', 'āmur', 'āminī', 'antur'],
      '3io': ['iar', 'iāris', 'iātur', 'iāmur', 'iāminī', 'iantur'],
      '4': ['iar', 'iāris', 'iātur', 'iāmur', 'iāminī', 'iantur']
    },
    'impf.subj.pass': {
      '1': ['ārer', 'ārēris', 'ārētur', 'ārēmur', 'ārēminī', 'ārentur'],
      '2': ['ērer', 'ērēris', 'ērētur', 'ērēmur', 'ērēminī', 'ērentur'],
      '3': ['erer', 'erēris', 'erētur', 'erēmur', 'erēminī', 'erentur'],
      '3io': ['erer', 'erēris', 'erētur', 'erēmur', 'erēminī', 'erentur'],
      '4': ['īrer', 'īrēris', 'īrētur', 'īrēmur', 'īrēminī', 'īrentur']
    }
  };

  const V_PERF = {
    'perf.ind.act': ['ī', 'istī', 'it', 'imus', 'istis', 'ērunt'],
    'plup.ind.act': ['eram', 'erās', 'erat', 'erāmus', 'erātis', 'erant'],
    'futp.ind.act': ['erō', 'eris', 'erit', 'erimus', 'eritis', 'erint'],
    'perf.subj.act': ['erim', 'erīs', 'erit', 'erīmus', 'erītis', 'erint'],
    'plup.subj.act': ['issem', 'issēs', 'isset', 'issēmus', 'issētis', 'issent']
  };

  /* Only the present imperative is drawn. noImp leaves it out for dīcō, dūcō, and faciō (dīc, dūc, fac) and for sciō,
     which regularly uses the future scītō, scītōte instead (Allen and Greenough §449 a; Timothy, 28 Oct 2026). */
  const V_IMP = { '1': ['ā', 'āte'], '2': ['ē', 'ēte'], '3': ['e', 'ite'], '3io': ['e', 'ite'], '4': ['ī', 'īte'] };

  function latVerbForms(entry) {
    const out = [];
    const idx = i => ({ per: (i % 3) + 1, num: i < 3 ? 'sg' : 'pl' });
    for (const key in V_PRES) {
      const parts = key.split('.');
      const tense = parts[0], mood = parts[1], voice = parts[2];
      if (voice === 'pass' && entry.noPass) continue;
      V_PRES[key][entry.conj].forEach((e, i) => {
        const p = idx(i);
        out.push({ form: entry.base + e, per: p.per, num: p.num, tense: tense, mood: mood, voice: voice, entry: entry });
      });
    }
    if (entry.perf) {
      for (const key in V_PERF) {
        const parts = key.split('.');
        const tense = parts[0], mood = parts[1], voice = parts[2];
        V_PERF[key].forEach((e, i) => {
          const p = idx(i);
          out.push({ form: entry.perf + e, per: p.per, num: p.num, tense: tense, mood: mood, voice: voice, entry: entry });
        });
      }
    }
    if (!entry.noImp) {
      V_IMP[entry.conj].forEach((e, i) => {
        out.push({
          form: entry.base + e, per: 2, num: i === 0 ? 'sg' : 'pl',
          tense: 'pres', mood: 'imp', voice: 'act', entry: entry
        });
      });
    }
    return out;
  }

  function latAdjForm(adj, cs, num, g) {
    if (adj.cl === '12') {
      if (g === 'f') return nounEnding({ nom: adj.stem + 'a', stem: adj.stem, d: 'd1' }, cs, num);
      if (g === 'n') return nounEnding({ nom: adj.stem + 'um', stem: adj.stem, d: 'd2n' }, cs, num);
      return nounEnding({ nom: adj.nom, stem: adj.stem, d: 'd2m' }, cs, num);
    }
    if (g === 'n') return nounEnding({ nom: adj.stem + 'e', stem: adj.stem, d: 'd3ni' }, cs, num);
    if (cs === 'abl' && num === 'sg') return adj.stem + 'ī';
    return nounEnding({ nom: adj.nom, stem: adj.stem, d: 'd3i' }, cs, num);
  }

  const LAT_NOUNS = [
    { nom: 'puella', stem: 'puell', d: 'd1', g: 'f', gloss: 'girl' },
    { nom: 'mēnsa', stem: 'mēns', d: 'd1', g: 'f', gloss: 'table' },
    { nom: 'silva', stem: 'silv', d: 'd1', g: 'f', gloss: 'wood, forest' },
    { nom: 'terra', stem: 'terr', d: 'd1', g: 'f', gloss: 'land, earth' },
    { nom: 'aqua', stem: 'aqu', d: 'd1', g: 'f', gloss: 'water' },
    { nom: 'rēgīna', stem: 'rēgīn', d: 'd1', g: 'f', gloss: 'queen' },
    { nom: 'nauta', stem: 'naut', d: 'd1', g: 'm', gloss: 'sailor', note: ' masculine, though it declines like the feminine nouns' },
    { nom: 'poēta', stem: 'poēt', d: 'd1', g: 'm', gloss: 'poet', note: ' masculine, though it declines like the feminine nouns' },
    { nom: 'dominus', stem: 'domin', d: 'd2m', g: 'm', gloss: 'master, lord' },
    { nom: 'servus', stem: 'serv', d: 'd2m', g: 'm', gloss: 'slave, servant' },
    { nom: 'amīcus', stem: 'amīc', d: 'd2m', g: 'm', gloss: 'friend' },
    { nom: 'equus', stem: 'equ', d: 'd2m', g: 'm', gloss: 'horse' },
    { nom: 'puer', stem: 'puer', d: 'd2m', g: 'm', gloss: 'boy' },
    { nom: 'ager', stem: 'agr', d: 'd2m', g: 'm', gloss: 'field' },
    { nom: 'magister', stem: 'magistr', d: 'd2m', g: 'm', gloss: 'teacher, master' },
    { nom: 'fīlius', stem: 'fīli', d: 'd2m', g: 'm', gloss: 'son' },
    { nom: 'bellum', stem: 'bell', d: 'd2n', g: 'n', gloss: 'war' },
    { nom: 'dōnum', stem: 'dōn', d: 'd2n', g: 'n', gloss: 'gift' },
    { nom: 'verbum', stem: 'verb', d: 'd2n', g: 'n', gloss: 'word' },
    { nom: 'templum', stem: 'templ', d: 'd2n', g: 'n', gloss: 'temple' },
    { nom: 'oppidum', stem: 'oppid', d: 'd2n', g: 'n', gloss: 'town' },
    { nom: 'signum', stem: 'sign', d: 'd2n', g: 'n', gloss: 'sign' },
    { nom: 'rēx', stem: 'rēg', d: 'd3', g: 'm', gloss: 'king' },
    { nom: 'lēx', stem: 'lēg', d: 'd3', g: 'f', gloss: 'law' },
    { nom: 'homō', stem: 'homin', d: 'd3', g: 'm', gloss: 'human being, man' },
    { nom: 'virtūs', stem: 'virtūt', d: 'd3', g: 'f', gloss: 'virtue, excellence' },
    { nom: 'pater', stem: 'patr', d: 'd3', g: 'm', gloss: 'father' },
    { nom: 'mīles', stem: 'mīlit', d: 'd3', g: 'm', gloss: 'soldier' },
    { nom: 'ōrātor', stem: 'ōrātōr', d: 'd3', g: 'm', gloss: 'speaker, orator' },
    { nom: 'corpus', stem: 'corpor', d: 'd3n', g: 'n', gloss: 'body' },
    { nom: 'nōmen', stem: 'nōmin', d: 'd3n', g: 'n', gloss: 'name' },
    { nom: 'tempus', stem: 'tempor', d: 'd3n', g: 'n', gloss: 'time' },
    { nom: 'opus', stem: 'oper', d: 'd3n', g: 'n', gloss: 'work' },
    { nom: 'cīvis', stem: 'cīv', d: 'd3i', g: 'm', gloss: 'citizen' },
    { nom: 'urbs', stem: 'urb', d: 'd3i', g: 'f', gloss: 'city' },
    { nom: 'pars', stem: 'part', d: 'd3i', g: 'f', gloss: 'part' },
    { nom: 'ars', stem: 'art', d: 'd3i', g: 'f', gloss: 'art, skill' },
    { nom: 'mors', stem: 'mort', d: 'd3i', g: 'f', gloss: 'death' },
    { nom: 'mare', stem: 'mar', d: 'd3ni', g: 'n', gloss: 'sea' },
    { nom: 'animal', stem: 'animāl', d: 'd3ni', g: 'n', gloss: 'animal' },
    { nom: 'manus', stem: 'man', d: 'd4', g: 'f', gloss: 'hand', note: ' feminine, though it looks like the masculine nouns' },
    { nom: 'exercitus', stem: 'exercit', d: 'd4', g: 'm', gloss: 'army' },
    { nom: 'senātus', stem: 'senāt', d: 'd4', g: 'm', gloss: 'senate' },
    { nom: 'frūctus', stem: 'frūct', d: 'd4', g: 'm', gloss: 'fruit, profit' },
    { nom: 'cornū', stem: 'corn', d: 'd4n', g: 'n', gloss: 'horn' },
    { nom: 'genū', stem: 'gen', d: 'd4n', g: 'n', gloss: 'knee' },
    { nom: 'rēs', stem: 'r', d: 'd5', g: 'f', gloss: 'thing, matter' },
    { nom: 'diēs', stem: 'di', d: 'd5', g: 'm', gloss: 'day' },
    { nom: 'fidēs', stem: 'fid', d: 'd5', g: 'f', gloss: 'faith, trust', sgOnly: true },
    { nom: 'speciēs', stem: 'speci', d: 'd5', g: 'f', gloss: 'appearance, species', plCases: ['nom', 'acc'] }
  ];

  const LAT_VERBS = [
    { lemma: 'amō, amāre, amāvī, amātum', base: 'am', perf: 'amāv', conj: '1', gloss: 'to love' },
    { lemma: 'laudō, laudāre, laudāvī, laudātum', base: 'laud', perf: 'laudāv', conj: '1', gloss: 'to praise' },
    { lemma: 'portō, portāre, portāvī, portātum', base: 'port', perf: 'portāv', conj: '1', gloss: 'to carry' },
    { lemma: 'vocō, vocāre, vocāvī, vocātum', base: 'voc', perf: 'vocāv', conj: '1', gloss: 'to call' },
    { lemma: 'parō, parāre, parāvī, parātum', base: 'par', perf: 'parāv', conj: '1', gloss: 'to prepare' },
    { lemma: 'nārrō, nārrāre, nārrāvī, nārrātum', base: 'nārr', perf: 'nārrāv', conj: '1', gloss: 'to tell, relate' },
    { lemma: 'moneō, monēre, monuī, monitum', base: 'mon', perf: 'monu', conj: '2', gloss: 'to warn, advise' },
    { lemma: 'videō, vidēre, vīdī, vīsum', base: 'vid', perf: 'vīd', conj: '2', gloss: 'to see' },
    { lemma: 'teneō, tenēre, tenuī, tentum', base: 'ten', perf: 'tenu', conj: '2', gloss: 'to hold' },
    { lemma: 'habeō, habēre, habuī, habitum', base: 'hab', perf: 'habu', conj: '2', gloss: 'to have' },
    { lemma: 'timeō, timēre, timuī', base: 'tim', perf: 'timu', conj: '2', gloss: 'to fear' },
    { lemma: 'doceō, docēre, docuī, doctum', base: 'doc', perf: 'docu', conj: '2', gloss: 'to teach' },
    { lemma: 'regō, regere, rēxī, rēctum', base: 'reg', perf: 'rēx', conj: '3', gloss: 'to rule, guide' },
    { lemma: 'dūcō, dūcere, dūxī, ductum', base: 'dūc', perf: 'dūx', conj: '3', gloss: 'to lead', noImp: true },
    { lemma: 'scrībō, scrībere, scrīpsī, scrīptum', base: 'scrīb', perf: 'scrīps', conj: '3', gloss: 'to write' },
    { lemma: 'mittō, mittere, mīsī, missum', base: 'mitt', perf: 'mīs', conj: '3', gloss: 'to send' },
    { lemma: 'dīcō, dīcere, dīxī, dictum', base: 'dīc', perf: 'dīx', conj: '3', gloss: 'to say', noImp: true },
    { lemma: 'agō, agere, ēgī, āctum', base: 'ag', perf: 'ēg', conj: '3', gloss: 'to do, drive' },
    { lemma: 'legō, legere, lēgī, lēctum', base: 'leg', perf: 'lēg', conj: '3', gloss: 'to read, choose' },
    { lemma: 'vincō, vincere, vīcī, victum', base: 'vinc', perf: 'vīc', conj: '3', gloss: 'to conquer' },
    { lemma: 'capiō, capere, cēpī, captum', base: 'cap', perf: 'cēp', conj: '3io', gloss: 'to take, seize' },
    { lemma: 'faciō, facere, fēcī, factum', base: 'fac', perf: 'fēc', conj: '3io', gloss: 'to make, do', noImp: true, noPass: true },
    { lemma: 'iaciō, iacere, iēcī, iactum', base: 'iac', perf: 'iēc', conj: '3io', gloss: 'to throw' },
    { lemma: 'fugiō, fugere, fūgī, fugitum', base: 'fug', perf: 'fūg', conj: '3io', gloss: 'to flee', noPass: true },
    { lemma: 'audiō, audīre, audīvī, audītum', base: 'aud', perf: 'audīv', conj: '4', gloss: 'to hear' },
    { lemma: 'veniō, venīre, vēnī, ventum', base: 'ven', perf: 'vēn', conj: '4', gloss: 'to come', noPass: true },
    { lemma: 'sciō, scīre, scīvī, scītum', base: 'sc', perf: 'scīv', conj: '4', gloss: 'to know', noImp: true },
    { lemma: 'mūniō, mūnīre, mūnīvī, mūnītum', base: 'mūn', perf: 'mūnīv', conj: '4', gloss: 'to fortify' },
    { lemma: 'sentiō, sentīre, sēnsī, sēnsum', base: 'sent', perf: 'sēns', conj: '4', gloss: 'to feel, perceive' }
  ];

  const LAT_ADJS = [
    { nom: 'bonus', stem: 'bon', cl: '12', gloss: 'good' },
    { nom: 'magnus', stem: 'magn', cl: '12', gloss: 'great, large' },
    { nom: 'parvus', stem: 'parv', cl: '12', gloss: 'small' },
    { nom: 'malus', stem: 'mal', cl: '12', gloss: 'bad' },
    { nom: 'longus', stem: 'long', cl: '12', gloss: 'long' },
    { nom: 'altus', stem: 'alt', cl: '12', gloss: 'high, deep' },
    { nom: 'novus', stem: 'nov', cl: '12', gloss: 'new' },
    { nom: 'clārus', stem: 'clār', cl: '12', gloss: 'bright, famous' },
    { nom: 'fortis', stem: 'fort', cl: '3', gloss: 'brave, strong' },
    { nom: 'omnis', stem: 'omn', cl: '3', gloss: 'every, all' },
    { nom: 'gravis', stem: 'grav', cl: '3', gloss: 'heavy, serious' },
    { nom: 'brevis', stem: 'brev', cl: '3', gloss: 'short' },
    { nom: 'facilis', stem: 'facil', cl: '3', gloss: 'easy' }
  ];

  function rand(a) { return a[Math.floor(Math.random() * a.length)]; }
  function shuffle(a) {
    const c = a.slice();
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = c[i]; c[i] = c[j]; c[j] = t;
    }
    return c;
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function joinAn(list) {
    if (list.length === 1) return list[0];
    if (list.length === 2) return list[0] + ' and ' + list[1];
    return list.slice(0, -1).join(', ') + ', and ' + list[list.length - 1];
  }
  let freshN = 0;
  function freshId(prefix) {
    freshN += 1;
    return prefix + ':fresh:' + freshN + ':' + Math.random().toString(36).slice(2, 8);
  }
  function em(s) { return '<em>' + s + '</em>'; }

  function caseNum(cs, num) {
    return CASE_NAME[cs] + ' ' + (num === 'sg' ? 'singular' : 'plural');
  }
  function nounHasForm(entry, cs, num) {
    if (entry.sgOnly && num !== 'sg') return false;
    if (num === 'pl' && entry.plCases && entry.plCases.indexOf(cs) < 0) return false;
    return true;
  }
  function nounSlots(entry) {
    const out = [];
    NUMS.forEach(num => CASES.forEach(cs => {
      if (!nounHasForm(entry, cs, num)) return;
      out.push({ form: nounEnding(entry, cs, num), cs: cs, num: num });
    }));
    return out;
  }
  function adjSlots(adj) {
    const out = [];
    ['m', 'f', 'n'].forEach(g => NUMS.forEach(num => CASES.forEach(cs => {
      out.push({ form: latAdjForm(adj, cs, num, g), cs: cs, num: num, g: g });
    })));
    return out;
  }
  function groupForms(slots) {
    const map = new Map();
    slots.forEach(s => {
      if (!map.has(s.form)) map.set(s.form, []);
      map.get(s.form).push(s);
    });
    return map;
  }
  function nounLabel(slot) { return cap(caseNum(slot.cs, slot.num)); }
  function adjLabel(slot) { return cap(caseNum(slot.cs, slot.num) + ' ' + GEN_NAME[slot.g]); }
  function verbLabel(a) {
    return cap(ORD[a.per] + ' person ' + (a.num === 'sg' ? 'singular' : 'plural') + ' ' +
      TENSE_NAME[a.tense] + ' ' + MOOD_NAME[a.mood] + ' ' + VOICE_NAME[a.voice]);
  }
  function nounHead(entry) {
    return em(entry.nom + ', ' + nounEnding(entry, 'gen', 'sg')) + ', ' + GEN_NAME[entry.g] + ', ' + entry.gloss;
  }
  function noteSentence(entry) {
    return entry.note ? ' This noun is' + entry.note + '.' : '';
  }

  function mcItem(base, correct, distractors) {
    const opts = shuffle(distractors).slice(0, 3);
    if (opts.length < 3) return null;
    const at = Math.floor(Math.random() * (opts.length + 1));
    opts.splice(at, 0, correct);
    base.type = 'mc';
    base.options = opts;
    base.answer = at;
    return base;
  }

  function pickDistractors(slots, validForms, labelOf, validLabels) {
    const out = [];
    const seen = {};
    slots.forEach(s => {
      if (validForms.indexOf(s.form) >= 0) return;
      const label = labelOf(s);
      if (validLabels[label] || seen[label]) return;
      seen[label] = true;
      out.push(label);
    });
    return out;
  }

  /* Forms left out of the parse items because Allen and Greenough also allows a reading the table
     does not give, which would then be offered as a wrong answer: fīlī is also the genitive singular
     (§49 b), and cīvī is also an ablative singular (§76). */
  const NO_PARSE = { 'fīlius': ['fīlī'], 'cīvis': ['cīvī'] };
  function nounParseItem(entry, form, analyses, idPrefix) {
    const labels = analyses.map(nounLabel);
    const valid = {};
    labels.forEach(l => { valid[l] = true; });
    const slots = nounSlots(entry);
    const forms = analyses.map(a => a.form);
    const distractors = pickDistractors(slots, forms, nounLabel, valid);
    const ambiguous = labels.length > 1;
    const correct = rand(labels);
    const head = nounHead(entry);
    const prompt = ambiguous
      ? 'Which of these readings of ' + em(form) + ' is possible? The noun is ' + head + '.'
      : 'What is the case and number of ' + em(form) + '? The noun is ' + head + '.';
    const all = joinAn(labels.map(l => l.toLowerCase()));
    const explain = em(form) + ' of ' + em(entry.nom) + ' can be read as the ' + all + '.' + noteSentence(entry) +
      (ambiguous ? ' Only the sentence around the form can decide among them.' : '');
    return mcItem({
      id: freshId(idPrefix), deck: idPrefix, section: 'iii', prompt: prompt, explain: explain
    }, correct, distractors);
  }

  function adjParseItem(adj, form, analyses, idPrefix) {
    const labels = analyses.map(adjLabel);
    const valid = {};
    labels.forEach(l => { valid[l] = true; });
    const slots = adjSlots(adj);
    const forms = analyses.map(a => a.form);
    const distractors = pickDistractors(slots, forms, adjLabel, valid);
    const ambiguous = labels.length > 1;
    const correct = rand(labels);
    const head = em(adj.nom) + ', ' + adj.gloss;
    const prompt = ambiguous
      ? 'Which of these readings of ' + em(form) + ' is possible? The adjective is ' + head + '.'
      : 'What is the case, number, and gender of ' + em(form) + '? The adjective is ' + head + '.';
    const all = joinAn(labels.map(l => l.toLowerCase()));
    const explain = em(form) + ' of ' + em(adj.nom) + ' can be read as the ' + all + '.' +
      (ambiguous ? ' Only the noun it agrees with can decide among them.' : '');
    return mcItem({
      id: freshId(idPrefix), deck: idPrefix, section: 'iii', prompt: prompt, explain: explain
    }, correct, distractors);
  }

  function produceNoun(entry, slot, idPrefix) {
    const label = caseNum(slot.cs, slot.num);
    const same = nounSlots(entry).filter(s => s.form === slot.form).map(nounLabel);
    const explain = em(slot.form) + ' is the ' + label + ' of ' + em(entry.nom) + ', ' + entry.gloss + '.' +
      (same.length > 1 ? ' The same spelling is also the ' + joinAn(same.filter(l => l.toLowerCase() !== label).map(l => l.toLowerCase())) + '.' : '') +
      noteSentence(entry);
    return {
      id: freshId(idPrefix), deck: idPrefix, section: 'iii', type: 'form', macrons: false,
      prompt: 'Write the ' + label + ' of ' + em(entry.nom) + ' (' + entry.gloss + ').',
      answer: slot.form, explain: explain
    };
  }

  function produceAdj(adj, slot, idPrefix) {
    const label = caseNum(slot.cs, slot.num) + ' ' + GEN_NAME[slot.g];
    return {
      id: freshId(idPrefix), deck: idPrefix, section: 'iii', type: 'form', macrons: false,
      prompt: 'Write the ' + label + ' of ' + em(adj.nom) + ' (' + adj.gloss + ').',
      answer: slot.form,
      explain: em(slot.form) + ' is the ' + label + ' of ' + em(adj.nom) + '.'
    };
  }

  function fillParse(n, make, seen) {
    const out = [];
    let guard = 0;
    while (out.length < n && guard < n * 40) {
      guard += 1;
      const item = make(seen);
      if (!item) continue;
      if (seen[item._key]) continue;
      seen[item._key] = true;
      delete item._key;
      out.push(item);
    }
    return out;
  }

  function nounSitting(n) {
    n = n || 20;
    const idPrefix = 'lang.iii-decl.la/noun-ex';
    let prod = 0, adjN = 0, nounN = n;
    if (n >= 4) {
      prod = Math.max(1, Math.round(n * 0.2));
      adjN = Math.max(1, Math.round(n * 0.2));
      nounN = n - prod - adjN;
    } else if (n === 3) { nounN = 1; adjN = 1; prod = 1; }
    else if (n === 2) { nounN = 1; prod = 1; }
    const seen = {};
    const nouns = fillParse(nounN, function () {
      const entry = rand(LAT_NOUNS);
      const map = groupForms(nounSlots(entry));
      const form = rand(Array.from(map.keys()));
      if (NO_PARSE[entry.nom] && NO_PARSE[entry.nom].indexOf(form) >= 0) return null;
      const item = nounParseItem(entry, form, map.get(form), idPrefix);
      if (!item) return null;
      item._key = 'n:' + entry.nom + ':' + form;
      return item;
    }, seen);
    const adjs = fillParse(adjN, function () {
      const adj = rand(LAT_ADJS);
      const map = groupForms(adjSlots(adj));
      const form = rand(Array.from(map.keys()));
      const item = adjParseItem(adj, form, map.get(form), idPrefix);
      if (!item) return null;
      item._key = 'a:' + adj.nom + ':' + form;
      return item;
    }, seen);
    const produced = fillParse(prod, function () {
      if (Math.random() < 0.5) {
        const entry = rand(LAT_NOUNS);
        const slot = rand(nounSlots(entry));
        const item = produceNoun(entry, slot, idPrefix);
        item._key = 'pn:' + entry.nom + ':' + slot.cs + ':' + slot.num;
        return item;
      }
      const adj = rand(LAT_ADJS);
      const g = rand(['m', 'f', 'n']);
      const slot = { cs: rand(CASES), num: rand(NUMS), g: g };
      slot.form = latAdjForm(adj, slot.cs, slot.num, g);
      const item = produceAdj(adj, slot, idPrefix);
      item._key = 'pa:' + adj.nom + ':' + slot.cs + ':' + slot.num + ':' + g;
      return item;
    }, seen);
    return shuffle(nouns.concat(adjs, produced));
  }

  function verbBucket(a) {
    if (a.mood === 'imp') return 'imp';
    if (a.mood === 'subj') return 'subj';
    if (a.tense === 'perf' || a.tense === 'plup' || a.tense === 'futp') return 'perf';
    return 'pres';
  }

  function verbGroups(entry) {
    const groups = { pres: [], perf: [], subj: [], imp: [] };
    const byForm = groupForms(latVerbForms(entry));
    byForm.forEach((list, form) => {
      const row = { form: form, analyses: list };
      const bags = {};
      list.forEach(a => { bags[verbBucket(a)] = true; });
      Object.keys(bags).forEach(b => groups[b].push(row));
    });
    return groups;
  }

  function pickVerbRow(entry) {
    const g = verbGroups(entry);
    const roll = Math.random();
    const order = roll < 0.55 ? ['pres', 'perf', 'subj', 'imp']
      : roll < 0.8 ? ['perf', 'pres', 'subj', 'imp']
      : ['subj', 'imp', 'pres', 'perf'];
    for (let i = 0; i < order.length; i++) {
      if (g[order[i]].length) return rand(g[order[i]]);
    }
    return null;
  }

  function verbParseItem(entry, row, idPrefix) {
    const labels = row.analyses.map(verbLabel);
    const valid = {};
    labels.forEach(l => { valid[l] = true; });
    const allForms = latVerbForms(entry);
    const distractors = [];
    const seen = {};
    shuffle(allForms).forEach(a => {
      const label = verbLabel(a);
      if (valid[label] || seen[label]) return;
      seen[label] = true;
      distractors.push(label);
    });
    const ambiguous = labels.length > 1;
    const correct = rand(labels);
    const head = em(entry.lemma) + ', ' + entry.gloss;
    const prompt = ambiguous
      ? 'Which of these readings of ' + em(row.form) + ' is possible? The verb is ' + head + '.'
      : 'What is the person, number, tense, mood, and voice of ' + em(row.form) + '? The verb is ' + head + '.';
    const all = joinAn(labels.map(l => l.toLowerCase()));
    const explain = em(row.form) + ' of ' + em(entry.lemma.split(',')[0]) + ' can be read as the ' + all + '.' +
      (ambiguous ? ' Latin does not always distinguish them, and the sentence must.' : '');
    return mcItem({
      id: freshId(idPrefix), deck: idPrefix, section: 'iii', prompt: prompt, explain: explain
    }, correct, distractors);
  }

  function produceVerb(entry, analysis, idPrefix) {
    const label = verbLabel(analysis).toLowerCase();
    const same = latVerbForms(entry).filter(a => a.form === analysis.form);
    const others = same.filter(a => verbLabel(a).toLowerCase() !== label).map(a => verbLabel(a).toLowerCase());
    const explain = em(analysis.form) + ' is the ' + label + ' of ' + em(entry.lemma.split(',')[0]) + '.' +
      (others.length ? ' The same form is also the ' + joinAn(others) + '.' : '');
    return {
      id: freshId(idPrefix), deck: idPrefix, section: 'iii', type: 'form', macrons: false,
      prompt: 'Write the ' + label + ' of ' + em(entry.lemma.split(',')[0]) + ' (' + entry.gloss + ').',
      answer: analysis.form, explain: explain
    };
  }

  function verbSitting(n) {
    n = n || 20;
    const idPrefix = 'lang.iii-decl.la/verb-ex';
    const prod = n < 2 ? 0 : Math.floor(n / 2);
    const parseN = n - prod;
    const seen = {};
    const parsed = fillParse(parseN, function () {
      const entry = rand(LAT_VERBS);
      const row = pickVerbRow(entry);
      if (!row) return null;
      const item = verbParseItem(entry, row, idPrefix);
      if (!item) return null;
      item._key = 'v:' + entry.lemma + ':' + row.form;
      return item;
    }, seen);
    const produced = fillParse(prod, function () {
      const entry = rand(LAT_VERBS);
      const row = pickVerbRow(entry);
      if (!row) return null;
      const analysis = rand(row.analyses);
      const item = produceVerb(entry, analysis, idPrefix);
      item._key = 'vp:' + entry.lemma + ':' + verbLabel(analysis);
      return item;
    }, seen);
    return shuffle(parsed.concat(produced));
  }

  /* Building the Latin sentence. English glosses are this course's own.
     The perfect is rendered by the English simple past ("praised," "did not praise"),
     which is narrower than the Latin perfect. */
  const LB_PERSONS = {
    'puella': ['girl', 'girls'], 'rēgīna': ['queen', 'queens'], 'nauta': ['sailor', 'sailors'], 'poēta': ['poet', 'poets'],
    'dominus': ['master', 'masters'], 'servus': ['slave', 'slaves'], 'amīcus': ['friend', 'friends'], 'puer': ['boy', 'boys'],
    'magister': ['teacher', 'teachers'], 'fīlius': ['son', 'sons'], 'rēx': ['king', 'kings'], 'pater': ['father', 'fathers'],
    'mīles': ['soldier', 'soldiers'], 'cīvis': ['citizen', 'citizens']
  };
  const LB_THINGS = {
    'dōnum': ['gift', 'gifts'], 'signum': ['standard', 'standards'], 'templum': ['temple', 'temples'], 'oppidum': ['town', 'towns'],
    'urbs': ['city', 'cities'], 'bellum': ['war', 'wars'], 'equus': ['horse', 'horses'], 'ager': ['field', 'fields'], 'silva': ['forest', 'forests']
  };
  const LB_VERBS = [
    ['amō', ['loves', 'love', 'loved', 'loving'], 'p'],
    ['laudō', ['praises', 'praise', 'praised', 'praising'], 'p'],
    ['vocō', ['calls', 'call', 'called', 'calling'], 'p'],
    ['moneō', ['warns', 'warn', 'warned', 'warning'], 'p'],
    ['videō', ['sees', 'see', 'saw', 'seeing'], 'pt'],
    ['doceō', ['teaches', 'teach', 'taught', 'teaching'], 'p'],
    ['dūcō', ['leads', 'lead', 'led', 'leading'], 'p'],
    ['audiō', ['hears', 'hear', 'heard', 'hearing'], 'p'],
    ['timeō', ['fears', 'fear', 'feared', 'fearing'], 'p'],
    ['vincō', ['defeats', 'defeat', 'defeated', 'defeating'], 'p'],
    ['portō', ['carries', 'carry', 'carried', 'carrying'], 't', ['dōnum', 'signum']],
    ['parō', ['prepares', 'prepare', 'prepared', 'preparing'], 't', ['bellum', 'dōnum']],
    ['habeō', ['has', 'have', 'had', 'having'], 't', ['equus', 'dōnum', 'ager']],
    ['capiō', ['captures', 'capture', 'captured', 'capturing'], 't', ['oppidum', 'urbs', 'signum']],
    ['mūniō', ['fortifies', 'fortify', 'fortified', 'fortifying'], 't', ['oppidum', 'urbs']]
  ];
  const LB_ADJ_P = ['bonus', 'magnus', 'parvus', 'fortis', 'clārus'];
  const LB_ADJ_T = ['magnus', 'parvus', 'novus'];
  const LB_ADJ_EN = { bonus: 'good', magnus: 'great', parvus: 'small', fortis: 'brave', clārus: 'famous', novus: 'new' };
  const LB_PLACES = ['silva', 'urbs', 'ager', 'templum', 'oppidum'];
  const LB_ADVS = [['saepe', 'often'], ['nōn', 'not']];

  function lbNoun(nom) { return LAT_NOUNS.filter(n => n.nom === nom)[0]; }
  function lbVerb(lemma) { return LAT_VERBS.filter(v => v.lemma.split(',')[0] === lemma)[0]; }
  function lbAdj(nom) { return LAT_ADJS.filter(a => a.nom === nom)[0]; }
  function lbVerbForm(entry, tense, num) {
    const f = latVerbForms(entry).filter(x => x.tense === tense && x.mood === 'ind' && x.voice === 'act' && x.per === 3 && x.num === num)[0];
    return f ? f.form : null;
  }
  function foldTok(s) {
    return String(s).toLowerCase()
      .replace(/[āēīōūȳ]/g, ch => ({ 'ā': 'a', 'ē': 'e', 'ī': 'i', 'ō': 'o', 'ū': 'u', 'ȳ': 'y' }[ch]));
  }

  function lbDraw(spec) {
    for (let tries = 0; tries < 80; tries++) {
      const pool = LB_VERBS.filter(x => spec.things || x[2] !== 't');
      const v = rand(pool);
      const ve = lbVerb(v[0]);
      if (!ve) continue;
      const subjNom = rand(Object.keys(LB_PERSONS));
      let objPool;
      if (v[3]) objPool = v[3];
      else if (v[2] === 'pt' && Math.random() < 0.4) objPool = Object.keys(LB_THINGS);
      else objPool = Object.keys(LB_PERSONS);
      const objChoices = objPool.filter(o => o !== subjNom);
      if (!objChoices.length) continue;
      const objNom = rand(objChoices);
      const se = lbNoun(subjNom), oe = lbNoun(objNom);
      if (!se || !oe || se.g === 'n') continue;
      const sNum = rand(NUMS);
      let oNum = rand(NUMS);
      if (v[0] === 'parō' && objNom === 'bellum') oNum = 'sg';
      const tense = spec.tense;
      const vForm = lbVerbForm(ve, tense, sNum);
      if (!vForm) continue;
      const subj = { role: 'subj', entry: se, cs: 'nom', num: sNum, form: nounEnding(se, 'nom', sNum) };
      const obj = { role: 'obj', entry: oe, cs: 'acc', num: oNum, form: nounEnding(oe, 'acc', oNum) };
      const verb = { role: 'verb', entry: ve, tense: tense, num: sNum, form: vForm };
      let adj = null, place = null, adv = null;
      if (spec.adj) {
        const onSubj = Math.random() < 0.5;
        const host = onSubj ? subj : obj;
        const isPerson = !!LB_PERSONS[host.entry.nom];
        const ae = lbAdj(rand(isPerson ? LB_ADJ_P : LB_ADJ_T));
        adj = { role: 'adj', on: host, entry: ae, form: latAdjForm(ae, host.cs, host.num, host.entry.g) };
      }
      if (spec.place) {
        const places = LB_PLACES.filter(p => p !== objNom && p !== subjNom);
        if (!places.length) continue;
        const pe = lbNoun(rand(places));
        place = { role: 'place', entry: pe, form: nounEnding(pe, 'abl', 'sg'), prep: 'in' };
      }
      if (spec.adv) adv = { role: 'adv', w: rand(LB_ADVS) };
      const words = [subj.form, obj.form, verb.form];
      if (adj) words.push(adj.form);
      if (place) words.push('in', place.form);
      if (adv) words.push(adv.w[0]);
      const folded = words.map(foldTok);
      if (folded.length !== new Set(folded).size) continue;
      const nEn = (e, num) => (LB_PERSONS[e.nom] || LB_THINGS[e.nom])[num === 'sg' ? 0 : 1];
      const np = (h, num) => {
        const adjBit = adj && adj.on === h ? LB_ADJ_EN[adj.entry.nom] + ' ' : '';
        if (v[0] === 'parō' && h.entry.nom === 'bellum') return (adjBit ? 'a ' + adjBit : 'a ') + 'war';
        return 'the ' + adjBit + nEn(h.entry, num);
      };
      const ve2 = v[1];
      const neg = adv && adv.w[0] === 'nōn';
      const often = adv && adv.w[0] === 'saepe';
      let vp;
      if (tense === 'pres') vp = neg ? (sNum === 'sg' ? 'does not ' : 'do not ') + ve2[1] : (often ? 'often ' : '') + (sNum === 'sg' ? ve2[0] : ve2[1]);
      else if (tense === 'impf') vp = (sNum === 'sg' ? 'was ' : 'were ') + (neg ? 'not ' : often ? 'often ' : '') + ve2[3];
      else vp = neg ? 'did not ' + ve2[1] : (often ? 'often ' : '') + ve2[2];
      let en = np(subj, sNum) + ' ' + vp + ' ' + np(obj, oNum) + (place ? ' in the ' + LB_THINGS[place.entry.nom][0] : '') + '.';
      en = en.charAt(0).toUpperCase() + en.slice(1);
      return { en: en, subj: subj, obj: obj, verb: verb, adj: adj, place: place, adv: adv, tense: tense, sNum: sNum, gloss: v };
    }
    return null;
  }

  function lbOrder(s) {
    const out = [];
    out.push(s.subj.form);
    if (s.adj && s.adj.on === s.subj) out.push(s.adj.form);
    if (s.place) { out.push('in'); out.push(s.place.form); }
    out.push(s.obj.form);
    if (s.adj && s.adj.on === s.obj) out.push(s.adj.form);
    if (s.adv) out.push(s.adv.w[0]);
    out.push(s.verb.form);
    return out;
  }

  function lbLemmas(s) {
    const bits = [];
    const nl = e => em(e.nom + ', ' + nounEnding(e, 'gen', 'sg')) + ' (' + GEN_NAME[e.g] + '), ' + (LB_PERSONS[e.nom] || LB_THINGS[e.nom])[0];
    bits.push(nl(s.subj.entry));
    bits.push(nl(s.obj.entry));
    bits.push(em(s.verb.entry.lemma) + ', ' + s.verb.entry.gloss);
    if (s.adj) bits.push(em(s.adj.entry.nom) + ', ' + LB_ADJ_EN[s.adj.entry.nom]);
    if (s.place) bits.push(em('in') + ' with the ablative, in; ' + nl(s.place.entry));
    if (s.adv) bits.push(em(s.adv.w[0]) + ', ' + s.adv.w[1]);
    return bits.join('; ');
  }

  function lbWhy(s) {
    const order = lbOrder(s);
    const bits = [
      em(s.subj.form) + ' is the subject, in the nominative',
      em(s.obj.form) + ' receives the action, in the accusative',
      em(s.verb.form) + ' is ' + TENSE_NAME[s.tense] + ' and ' + (s.sNum === 'sg' ? 'singular' : 'plural') + ', agreeing with its subject'
    ];
    if (s.adj) bits.push(em(s.adj.form) + ' agrees with ' + em(s.adj.on.form) + ' in gender, number, and case');
    if (s.place) bits.push(em('in ' + s.place.form) + ' is place where, with the ablative');
    if (s.adv) bits.push(em(s.adv.w[0]) + ' is the adverb, “' + s.adv.w[1] + '”');
    return cap(bits.join('; ')) + '. Latin word order is free, so any order of these words is accepted. The usual prose order puts the verb last: ' + em(order.join(' ')) + '.';
  }

  function buildOne(spec, idPrefix) {
    const s = lbDraw(spec);
    if (!s) return null;
    const order = lbOrder(s);
    const tenseWord = spec.tense === 'pres' ? 'present' : spec.tense === 'impf' ? 'imperfect' : 'perfect';
    return {
      id: freshId(idPrefix),
      deck: idPrefix,
      section: 'v',
      type: 'form',
      order: 'any',
      macrons: false,
      prompt: 'Write this sentence in Latin. Any word order is accepted, and macrons are not required. “' + s.en + '” The words are ' + lbLemmas(s) + '.',
      answer: order.join(' '),
      explain: lbWhy(s),
      _key: order.map(foldTok).sort().join(' ') + ':' + tenseWord
    };
  }

  function buildSitting(n) {
    n = n || 20;
    const idPrefix = 'lang.v.la/building-ex';
    let simple = n, adj = 0, extra = 0, both = 0;
    if (n >= 4) {
      both = Math.max(1, Math.round(n * 0.1));
      extra = Math.max(1, Math.round(n * 0.2));
      adj = Math.max(1, Math.round(n * 0.3));
      simple = n - both - extra - adj;
    } else if (n === 3) { simple = 1; adj = 1; extra = 1; }
    else if (n === 2) { simple = 1; adj = 1; }
    const specs = [];
    for (let i = 0; i < simple; i++) specs.push({ adj: false, place: false, adv: false, tense: 'pres', things: false });
    for (let i = 0; i < adj; i++) specs.push({ adj: true, place: false, adv: false, tense: 'pres', things: true });
    for (let i = 0; i < extra; i++) {
      const place = Math.random() < 0.5;
      specs.push({ adj: false, place: place, adv: !place, tense: rand(['pres', 'impf', 'perf']), things: true });
    }
    for (let i = 0; i < both; i++) {
      const place = Math.random() < 0.5;
      specs.push({ adj: true, place: place, adv: !place, tense: rand(['impf', 'perf']), things: true });
    }
    const seen = {};
    const out = [];
    shuffle(specs).forEach(spec => {
      let item = null;
      for (let t = 0; t < 8 && !item; t++) {
        const made = buildOne(spec, idPrefix);
        if (made && !seen[made._key]) item = made;
      }
      if (!item) return;
      seen[item._key] = true;
      delete item._key;
      out.push(item);
    });
    return out;
  }

  const ACCENT_WORDS = [
    { w: 'rosa', syll: ['ro', 'sa'], div: 'ro-sa', longPen: null, acc: 0, why: 'There are two syllables, so the first is accented. The penultimate law is for words of three syllables or more.' },
    { w: 'homō', syll: ['ho', 'mō'], div: 'ho-mō', longPen: null, acc: 0, why: 'The word has two syllables, and in a word of two syllables the accent always falls on the first.' },
    { w: 'mīles', syll: ['mī', 'les'], div: 'mī-les', longPen: null, acc: 0, why: 'The word has two syllables. The first is long by nature, but a two-syllable word is accented on the first without measuring the penult.' },
    { w: 'causa', syll: ['cau', 'sa'], div: 'cau-sa', longPen: null, acc: 0, why: em('au') + ' is one diphthong, so there are two syllables, and the first is accented.' },
    { w: 'aqua', syll: ['a', 'qua'], div: 'a-qua', longPen: null, acc: 0, why: 'Since ' + em('qu') + ' counts as one consonant, the division is ' + em('a-qua') + '. There are two syllables, and the first is accented.' },
    { w: 'amīcus', syll: ['a', 'mī', 'cus'], div: 'a-mī-cus', longPen: true, acc: 1, why: 'There are three syllables, and the penult ' + em('mī') + ' is long by nature, so the accent falls on it.' },
    { w: 'dominus', syll: ['do', 'mi', 'nus'], div: 'do-mi-nus', longPen: false, acc: 0, why: 'There are three syllables, and the penult ' + em('mi') + ' is short, so the accent falls on the antepenult.' },
    { w: 'nātūra', syll: ['nā', 'tū', 'ra'], div: 'nā-tū-ra', longPen: true, acc: 1, why: 'The penult ' + em('tū') + ' is long by nature, so the accent falls on it.' },
    { w: 'populus', syll: ['po', 'pu', 'lus'], div: 'po-pu-lus', longPen: false, acc: 0, why: 'The penult ' + em('pu') + ' is short, so the accent falls on the antepenult.' },
    { w: 'īnsula', syll: ['īn', 'su', 'la'], div: 'īn-su-la', longPen: false, acc: 0, why: 'The penult ' + em('su') + ' is short, so the accent falls on the antepenult.' },
    { w: 'fortūna', syll: ['for', 'tū', 'na'], div: 'for-tū-na', longPen: true, acc: 1, why: 'The penult ' + em('tū') + ' is long, so the accent falls on it.' },
    { w: 'puella', syll: ['pu', 'el', 'la'], div: 'pu-el-la', longPen: true, acc: 1, why: 'The penult ' + em('el') + ' is long by position, because a double ' + em('l') + ' follows the vowel.' },
    { w: 'magister', syll: ['ma', 'gis', 'ter'], div: 'ma-gis-ter', longPen: true, acc: 1, why: 'The penult ' + em('gis') + ' is long by position, since its vowel stands before two consonants.' },
    { w: 'porta', syll: ['por', 'ta'], div: 'por-ta', longPen: null, acc: 0, why: 'The two consonants are split, giving two syllables, and the first is accented.' },
    { w: 'pater', syll: ['pa', 'ter'], div: 'pa-ter', longPen: null, acc: 0, why: 'One consonant between vowels goes with the second vowel. There are two syllables, and the first is accented.' },
    { w: 'agricola', syll: ['a', 'gri', 'co', 'la'], div: 'a-gri-co-la', alt: 'ag-ri-co-la', longPen: false, acc: 1, why: 'There are four syllables. The penult ' + em('co') + ' is short, so the accent falls on the antepenult. The mute and liquid ' + em('gr') + ' stay with the following vowel.' },
    { w: 'cōnsul', syll: ['cōn', 'sul'], div: 'cōn-sul', longPen: null, acc: 0, why: 'The word has two syllables, so the first is accented. The ' + em('ns') + ' also makes that syllable long by position.' },
    { w: 'fortitūdō', syll: ['for', 'ti', 'tū', 'dō'], div: 'for-ti-tū-dō', longPen: true, acc: 2, why: 'There are four syllables, and the penult ' + em('tū') + ' is long by nature, so the accent falls on it.' },
    { w: 'hominēs', syll: ['ho', 'mi', 'nēs'], div: 'ho-mi-nēs', longPen: false, acc: 0, why: 'The penult ' + em('mi') + ' is short, so the accent falls on the antepenult. This is the nominative plural of ' + em('homō') + '.' },
    { w: 'ōrātor', syll: ['ō', 'rā', 'tor'], div: 'ō-rā-tor', longPen: true, acc: 1, why: 'The penult ' + em('rā') + ' is long by nature, so the accent falls on it.' },
    { w: 'aequitās', syll: ['ae', 'qui', 'tās'], div: 'ae-qui-tās', longPen: false, acc: 0, why: 'The penult ' + em('qui') + ' is short, so the accent falls on the antepenult. The long ultima does not take the accent.' },
    { w: 'officium', syll: ['of', 'fi', 'ci', 'um'], div: 'of-fi-ci-um', longPen: false, acc: 1, why: 'The penult ' + em('ci') + ' is short, because a vowel before a vowel is short, and the accent falls on the antepenult.' },
    { w: 'tenebrae', syll: ['te', 'ne', 'brae'], div: 'te-ne-brae', alt: 'te-neb-rae', longPen: false, acc: 0, why: 'The mute and liquid ' + em('br') + ' stay with the following vowel. The penult ' + em('ne') + ' is short, so the accent falls on the antepenult.' },
    { w: 'rosaque', syll: ['ro', 'sa', 'que'], div: 'ro-sa-que', longPen: false, acc: 1, why: 'The enclitic ' + em('-que') + ' pulls the accent onto the syllable that stood last, even though that syllable is short. ' + em('Rosa') + ' is accented on ' + em('ro') + '; ' + em('rosaque') + ' is accented on ' + em('sa') + '.' },
    { w: 'fīlia', syll: ['fī', 'li', 'a'], div: 'fī-li-a', longPen: false, acc: 0, why: 'A vowel before a vowel is short, so the ' + em('i') + ' of the penult is short and the accent falls on the antepenult.' },
    { w: 'videō', syll: ['vi', 'de', 'ō'], div: 'vi-de-ō', longPen: false, acc: 0, why: 'The penult ' + em('de') + ' is short, because a vowel before a vowel is short, and the accent falls on the antepenult.' },
    { w: 'portaque', syll: ['por', 'ta', 'que'], div: 'por-ta-que', longPen: false, acc: 1, why: 'The enclitic ' + em('-que') + ' pulls the accent onto the syllable that stood last: ' + em('por-ta-que') + '.' },
    { w: 'patris', syll: ['pa', 'tris'], div: 'pa-tris', alt: 'pat-ris', longPen: null, acc: 0, why: 'The mute and liquid ' + em('tr') + ' may go with the following vowel, giving two syllables, and the first is accented. The ' + em('a') + ' need not be long by position.' }
  ];

  const SYLL_RULES = [
    {
      id: 'sy2',
      prompt: 'When is a Latin syllable long by position?',
      options: [
        'A vowel before two consonants, or before ' + em('x') + ' or ' + em('z'),
        'When its vowel is long by nature, whatever follows',
        'When a macron is written over its vowel',
        'When it is the last syllable of the word'
      ],
      explain: 'Length by position depends on what follows the vowel. A mute followed by a liquid often does not make the syllable long.'
    },
    {
      id: 'sy3',
      prompt: 'Where does the Latin penultimate law place the accent in a word of three or more syllables?',
      options: [
        'On the penult if it is long, and on the antepenult if the penult is short',
        'Always on the first syllable of the word',
        'On the penult if it is short, and on the last syllable if the penult is long',
        'On the antepenult if the last syllable is long'
      ],
      explain: 'The second syllable from the end is measured. If it is long, it takes the accent. If it is short, the accent falls back one syllable. A word of more than one syllable is not accented on its last syllable.'
    },
    {
      id: 'sy7',
      prompt: 'How is a single consonant between two vowels divided?',
      options: [
        'It goes with the following vowel, as in ' + em('pa-ter'),
        'It goes with the preceding vowel, as in ' + em('pat-er'),
        'It is split between the two syllables',
        'It is doubled, so that each vowel has one'
      ],
      explain: 'One consonant between vowels belongs to the following syllable.'
    },
    {
      id: 'sy8',
      prompt: 'What are ' + em('ae') + ', ' + em('oe') + ', and ' + em('au') + ' in Latin?',
      options: [
        'Diphthongs: one long syllable',
        'Two syllables each, one for each vowel',
        'Short vowels, which never take the accent',
        'Consonants, when they stand between vowels'
      ],
      explain: 'One impulse of the voice makes one long syllable. ' + em('Cau-sa') + ' is two syllables, not three.'
    },
    {
      id: 'sy9',
      prompt: 'What does the enclitic ' + em('-que') + ' do to the accent?',
      options: [
        'It pulls the accent onto the syllable before it',
        'It leaves the accent where it was',
        'It moves the accent to the first syllable',
        'It takes the accent on itself, as the last syllable'
      ],
      explain: em('Rosa') + ' is accented on ' + em('ro') + '. ' + em('Rosaque') + ' is accented on ' + em('sa') + '.'
    },
    {
      id: 'sy13',
      prompt: 'What may a mute and a liquid do when they stand between vowels?',
      options: [
        'They may stay with the next vowel, or split',
        'They must always split, like any two consonants',
        'They are never counted as part of a syllable',
        'They always make the preceding vowel long by position'
      ],
      explain: 'So ' + em('pa-trem') + ' and ' + em('a-grī') + '. A mute and a liquid often do not make the preceding syllable long by position, and in ' + em('pa-tris') + ' the ' + em('a') + ' may stay short.'
    }
  ];

  const COUNT_WORD = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six' };

  function syllableSitting(n) {
    n = n || 20;
    const idPrefix = 'lang.ii.la/syllable-ex';
    const rulesN = n >= 8 ? 2 : n >= 4 ? 1 : 0;
    const remain = n - rulesN;
    let divideN = Math.round(remain * 5 / 18);
    let countN = Math.round(remain * 4 / 18);
    let penultN = Math.round(remain * 4 / 18);
    let stressN = remain - divideN - countN - penultN;
    if (stressN < 0) {
      divideN = Math.max(0, divideN + stressN);
      stressN = 0;
    }
    const words = shuffle(ACCENT_WORDS);
    const used = {};
    const out = [];
    function take(pred) {
      for (let i = 0; i < words.length; i++) {
        if (used[words[i].w]) continue;
        if (pred && !pred(words[i])) continue;
        used[words[i].w] = true;
        return words[i];
      }
      return null;
    }
    function push(it) { if (it) out.push(it); }
    for (let i = 0; i < penultN; i++) {
      const it = take(w => w.longPen !== null);
      if (!it) { stressN += 1; continue; }
      const answer = it.longPen ? 0 : 1;
      const options = ['Long', 'Short'];
      push({
        id: freshId(idPrefix), deck: idPrefix, section: 'ii', type: 'mc',
        prompt: 'Is the penult of ' + em(it.w) + ' long or short?',
        options: options, answer: answer,
        explain: it.why
      });
    }
    for (let i = 0; i < divideN; i++) {
      const it = take();
      if (!it) continue;
      push({
        id: freshId(idPrefix), deck: idPrefix, section: 'ii', type: 'divide', macrons: false,
        prompt: 'Divide ' + em(it.w) + ' into syllables, with a hyphen between the syllables.',
        answer: it.div,
        accept: it.alt ? [it.div, it.alt] : [it.div],
        explain: 'The division is ' + em(it.div) + '. ' + it.why
      });
    }
    for (let i = 0; i < countN; i++) {
      const it = take();
      if (!it) continue;
      const num = it.syll.length;
      push({
        id: freshId(idPrefix), deck: idPrefix, section: 'ii', type: 'count', macrons: false,
        prompt: 'How many syllables are in ' + em(it.w) + '?',
        answer: String(num),
        accept: [String(num), COUNT_WORD[num]],
        explain: em(it.div) + ' has ' + COUNT_WORD[num] + ' syllables. ' + it.why
      });
    }
    for (let i = 0; i < stressN; i++) {
      const it = take();
      if (!it) continue;
      const options = it.syll.map(s => em(s));
      push({
        id: freshId(idPrefix), deck: idPrefix, section: 'ii', type: 'mc',
        prompt: 'Which syllable of ' + em(it.w) + ' takes the accent?',
        options: options, answer: it.acc,
        explain: it.why + ' The accent falls on ' + em(it.syll[it.acc]) + '.'
      });
    }
    shuffle(SYLL_RULES).slice(0, rulesN).forEach(rule => {
      out.push({
        id: freshId(idPrefix + ':' + rule.id), deck: idPrefix, section: 'ii', type: 'mc',
        prompt: rule.prompt, options: rule.options.slice(), answer: 0, explain: rule.explain
      });
    });
    return shuffle(out);
  }

  ARS.latinForms = {
    nouns: LAT_NOUNS,
    adjectives: LAT_ADJS,
    verbs: LAT_VERBS,
    nounForm: nounEnding,
    adjForm: latAdjForm,
    verbForms: latVerbForms,
    nounSitting: nounSitting,
    verbSitting: verbSitting,
    buildSitting: buildSitting,
    syllableSitting: syllableSitting,
    accentWords: ACCENT_WORDS
  };
})();
