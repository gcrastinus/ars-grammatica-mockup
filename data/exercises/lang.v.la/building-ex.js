window.ARS = window.ARS || {};
ARS.exercises = ARS.exercises || {};
ARS.exercises["lang.v.la/building-ex"] = {
  "id": "lang.v.la/building-ex",
  "kind": "exercise",
  "status": "written",
  "section": "V",
  "title": "Building the Latin Sentence",
  "instr": "Type the Latin sentence. Any word order is accepted, and macrons are not required.",
  "openedFrom": "lang.v.la/building",
  "reviewCount": 4,
  "items": [],
  "fresh": function (n) { return window.ARS.latinForms.buildSitting(n); }
};
