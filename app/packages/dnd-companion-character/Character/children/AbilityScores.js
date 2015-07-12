import AmpersandModel from 'ampersand-model';

/*
 "abilityStores": {
 "str": {
 "score": 10,
 "abilityModifier": 0,
 "modPlusHalfLevel": 0
 },
 "con": {
 "score": 10,
 "abilityModifier": 0,
 "modPlusHalfLevel": 0
 },
 "dex": {
 "score": 10,
 "abilityModifier": 0,
 "modPlusHalfLevel": 0
 },
 "int": {
 "score": 10,
 "abilityModifier": 0,
 "modPlusHalfLevel": 0
 },
 "wis": {
 "score": 10,
 "abilityModifier": 0,
 "modPlusHalfLevel": 0
 },
 "cha": {
 "score": 10,
 "abilityModifier": 0,
 "modPlusHalfLevel": 0
 }
 },
 */
let Ability = AmpersandModel.extend({
  props: {
    "score": {"type": "number", "default": 10}
  },
  derived: {
    "abilityModifier": {
      "deps": ['score'],
      fn: function () {
        var score = this.score;
        var modifier, i, j;

        for (i = 0, j = -5; i <= score; i += 2, j++) {
          if (score === i || score === i + 1) {
            modifier = j;
          }
        }

        return modifier;
      }
    },
    "modPlusHalfLevel": {
      "deps": ['abilityModifier'],
      fn: function () {
        var halfLevel = char.halfLevel;

        return praseInt(this.abilityModifier + halfLevel);
      }
    }
  }
});

let AbilityStores = AmpersandModel.extend({
  children: {
    str: Ability,
    con: Ability,
    dex: Ability,
    int: Ability,
    wis: Ability,
    cha: Ability
  }
});

export { Ability };
export default AbilityStores