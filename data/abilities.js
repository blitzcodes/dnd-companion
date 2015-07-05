var AbilityModifier = function (score) {
  var modifier, i, j;

  for (i = 0, j = -5; i <= score; i += 2, j++) {
    if (score === i || score === i + 1) {
      modifier = j;
    }
  }

  return modifier;
};

var CustomAbilityScore = function (score, pointsLeft) {
  var result;
};
