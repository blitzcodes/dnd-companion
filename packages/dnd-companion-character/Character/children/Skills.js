/*
 "skills": {
 "acrobatics": {
 "score": 0,
 "ability": "dex",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "arcana": {
 "score": 0,
 "ability": "int",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "athletics": {
 "score": 0,
 "ability": "str",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "bluff": {
 "score": 0,
 "ability": "cha",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "diplomacy": {
 "score": 0,
 "ability": "cha",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "dungeoneering": {
 "score": 0,
 "ability": "wis",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "endurance": {
 "score": 0,
 "ability": "con",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "heal": {
 "score": 0,
 "ability": "wis",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "history": {
 "score": 0,
 "ability": "int",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "insight": {
 "score": 0,
 "ability": "wis",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "intimidate": {
 "score": 0,
 "ability": "cha",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "nature": {
 "score": 0,
 "ability": "wis",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "perception": {
 "score": 0,
 "ability": "wis",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "religion": {
 "score": 0,
 "ability": "int",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "stealth": {
 "score": 0,
 "ability": "dex",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "streetwise": {
 "score": 0,
 "ability": "cha",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 },
 "thievery": {
 "score": 0,
 "ability": "dex",
 "abilityPlusHalfLevel": 0,
 "trained": false,
 "armorPenalty": 0,
 "misc": []
 }
 },
 */
Skill = AmpersandModel.extend({
  props: {
    "ability": "string",
    "abilityPlusHalfLevel": "number",
    "trained": {"type": "boolean", "default": false},
    "armorPenalty": "number",
    "misc": "array"
  },
  derived: {
    "score": {
      deps: ['ability', 'abilityPlusHalfLevel', 'trained', 'armorPenalty', 'misc'],
      fn: function () {
        var abilityMod = char.abilitiyScores[this.ability].abilityModifier;
        var halfLevel = char.halfLevel;

        return parseInt((abilityMod + halfLevel) + (this.trained ? 5 : 0) + (this.armorPenalty < 0 ? this.armorPenalty : -1 * this.armorPenalty) + _.sum(_.flatten(this.misc)));
      }
    }
  }
});

Skills = AmpersandModel.extend({
  children: {
    "acrobatics": Skill,
    "arcana": Skill,
    "athletics": Skill,
    "bluff": Skill,
    "diplomacy": Skill,
    "dungeoneering": Skill,
    "endurance": Skill,
    "heal": Skill,
    "history": Skill,
    "insight": Skill,
    "intimidate": Skill,
    "nature": Skill,
    "perception": Skill,
    "religion": Skill,
    "stealth": Skill,
    "streetwise": Skill,
    "thievery": Skill
  }
});
