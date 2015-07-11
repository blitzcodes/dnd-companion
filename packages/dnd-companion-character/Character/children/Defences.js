/*
 "defenses": {
 "ac": {
 "score": 10,
 "tenPlusHalfLevel": 10,
 "armorAbility": 0,
 "class": 0,
 "feat": 0,
 "enhancement": 0,
 "misc": [
 0
 ]
 },
 "fort": {
 "score": 10,
 "tenPlusHalfLevel": 10,
 "armorAbility": 0,
 "class": 0,
 "feat": 0,
 "enhancement": 0,
 "misc": [
 0
 ]
 },
 "ref": {
 "score": 10,
 "tenPlusHalfLevel": 10,
 "armorAbility": 0,
 "class": 0,
 "feat": 0,
 "enhancement": 0,
 "misc": [
 0
 ]
 },
 "will": {
 "score": 10,
 "tenPlusHalfLevel": 10,
 "armorAbility": 0,
 "class": 0,
 "feat": 0,
 "enhancement": 0,
 "misc": [
 0
 ]
 }
 },
 */
Defense = AmpersandModel.extend({
  "props": {
    "tenPlusHalfLevel": "number",
    "armor": "number",
    "ability": "number",
    "class": "number",
    "feat": "number",
    "enhancement": "number",
    "misc": "array"
  },
  "derived": {
    "score": {
      "deps": ["tenPlusHalfLevel", "armorAbility", "class", "feat", "enhancement", "misc"],
      fn: function () {
        return parseInt(this.tenPlusHalfLevel + this.armor + this.ability + this.class + this.feat + this.enhancement + _.sum(_.flatten(this.misc)));
      }
    }
  }
});

Defenses = AmpersandModel.extend({
  children: {
    "ac": Defense,
    "fort": Defense,
    "ref": Defense,
    "will": Defense
  }
});