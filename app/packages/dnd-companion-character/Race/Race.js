
let CharacterRace = function (race) {
  return _.defaults(race || {}, {
    name: '',
    minHeight: '',
    maxHeight: '',
    abilityScores: [],
    size: '',
    speed: '',
    vision: [],
    languages: [],
    skillBonuses: [],
    racialFeats: [],
    racialPowers: []
  });
};

let Races = [
  CharacterRace({
    name: 'Dragonborn',
    minHeight: '6\' 2"',
    maxHeight: '6\' 8"',
    abilityScores: [
      {str: 2},
      {cha: 2}
    ],
    size: 'Medium',
    speed: 6,
    vision: ['Normal'],
    languages: ['Common', 'Draconic'],
    skillBonuses: [
      {history: 2},
      {intimidate: 2}
    ],
    racialFeats: [
      {dragonbornFury: "+1 to attack when bloodied"},
      {draconicHeritage: "Healing surges equal 1/4 max HP plus Con modifier"}
    ],
    racialPowers: [
      {
        dragonBreath: {
          type: 'Encounter',
          damageType: ['Acid', 'Cold', 'Fire', 'Lightning', 'Poison'],
          actionRequired: 'Minor',
          range: 'Close Blast 3',
          targets: 'All creatures in area',
          attackWith: ['str', 'con', 'dex'],
          attackAndDamage: {
            1: {
              attack: {
                modifier: 2,
                against: 'ac'
              },
              damage: {
                dice: '1d6',
                modifier: 'con'
              }
            },
            11: {
              attack: {
                modifier: 4,
                against: 'ac'
              },
              damage: {
                dice: '2d6',
                modifier: 'con'
              }
            },
            21: {
              attack: {
                modifier: 6,
                against: 'ac'
              },
              damage: {
                dice: '3d6',
                modifier: 'con'
              }
            }
          }
        }
      }
    ]
  })
];

export { CharacterRace };
export default Races;