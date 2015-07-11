
var Leveling = function (character) {
  var newLevel;

  var levels = {
    30: 1000000,
    29: 825000,
    28: 675000,
    27: 550000,
    26: 450000,
    25: 375000,
    24: 310000,
    23: 255000,
    22: 210000,
    21: 175000,
    20: 143000,
    19: 119000,
    18: 99000,
    17: 83000,
    16: 69000,
    15: 57000,
    14: 47000,
    13: 39000,
    12: 32000,
    11: 26000,
    10: 20500,
    9: 16500,
    8: 13000,
    7: 10000,
    6: 7500,
    5: 5500,
    4: 3750,
    3: 2250,
    2: 1000,
    1: 0
  };

  _.each(levels, function (xp, level) {
    if (character.totalXP >= xp && character.level < level) {
      character.level = newLevel = level;
    }
  });

  if (newLevel) {
    switch (newLevel) {
      case 4:
      case 8:
      case 14:
      case 18:
      case 24:
      case 28:
        character.points.abilities += 2;
        break;
      case 11:
      case 21:
        _.each(character.abilityScores, function (ability) {
          ability.score += 1;
        });
        break;
    }

    switch (newLevel) {
      case 1:
      case 2:
      case 4:
      case 6:
      case 8:
      case 10:
      case 11:
      case 12:
      case 14:
      case 16:
      case 18:
      case 20:
      case 21:
      case 22:
      case 24:
      case 26:
      case 28:
      case 30:
        character.points.feats += 1;
        break;
    }

    switch (newLevel) {
      case 1:
        character.points.powers.atWill += 2;
        character.points.powers.encounter += 1;
        character.points.powers.daily += 1;
        break;
      case 2:
      case 6:
      case 10:
      case 12:
      case 16:
      case 22:
      case 26:
        character.points.powers.utility += 1;
        break;
      case 5:
      case 9:
      case 20:
        character.points.powers.daily += 1;
        break;
      case 3:
      case 7:
      case 11:
        character.points.powers.encounter += 1;
        break;
    }
  }
};