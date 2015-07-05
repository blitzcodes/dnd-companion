var skillBonus = function(character){
  var halfLevel = parseInt(character.level / 2);
  _.each(character.skills,function(skill){
    skill.abilityPlusHalfLevel = halfLevel + character.abilityScores[skill.ability].abilityModifier;

    skill.score = _.sum([skill.abilityPlusHalfLevel, skill.trained ? 5 : 0, skill.armorPenalty, _.values(skill.misc)])
  })
};