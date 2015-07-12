
let Alignment = {
  "good": "Freedom and kindness",
  "lawfulGood": "Civilization and order",
  "evil": "Tyranny and hatred",
  "chaoticEvil": "Entropy and destruction",
  "unaligned": "Having no alignment; not taking a stand"
};

let Deities = [
  {
    "name": "Avandra",
    "alignment": "good",
    "details": "",
    "favors": ""
  },
  {
    "name": "Bahamut",
    "alignment": "lawfulGood",
    "details": "",
    "favors": ""
  },
  {
    "name": "Corellon",
    "alignment": "unaligned",
    "details": "",
    "favors": ""
  }
];

let Languages = {
  "common": {
    "spokenBy": ['Human', 'Halfing', 'Theflings'],
    "script": "Common"
  },
  "deepSpeech": {
    "spokenBy": ['Mind flayers', 'glthyankl', 'kuo-toas'],
    "script": "Rellanic"
  },
  "draconic": {
    "spokenBy": ['Dragons', 'Dragonborn', 'Kobolds'],
    "script": "Iokharic"
  },
  "dwarven": {
    "spokenBy": ['Dwarves', 'Azer'],
    "script": "Davek"
  },
  "elven": {
    "spokenBy": ['Elves', 'Eladrin', 'Fomorians'],
    "script": "Rellanic"
  },
  "giant": {
    "spokenBy": ['Giants', 'Orcs', 'Ogres'],
    "script": "Davek"
  },
  "goblin": {
    "spokenBy": ['Goblins', 'Hobgoblins', 'Bugbears'],
    "script": "Common"
  },
  "primordial": {
    "spokenBy": ['Efreets', 'Archons', 'Elementals'],
    "script": "Barazhad"
  },
  "supernal": {
    "spokenBy": ['Angles', 'Devils', 'Gods'],
    "script": "Supernal"
  },
  "abyssal": {
    "spokenBy": ['Demons', 'Gnolls', 'Sahuagin'],
    "script": "Barazhad"
  }
};

export default {
  Alignment:Alignment,
  Deities:Deities,
  Languages: Languages
};