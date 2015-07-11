/*
 "senses": {
 "passiveInsight": {
 "score": 10,
 "base": 10,
 "skillBonus": 0
 },
 "passivePerception": {
 "score": 10,
 "base": 10,
 "skillBonus": 0
 }
 },
 */
Sense = AmpersandModel.extend({
  props: {
    "base": "number",
    "skillBonus": "number"
  },
  derived: {
    "score": {
      deps: ['base', 'skillBonus'],
      fn: function () {
        return parseInt(this.base + this.skillBonus);
      }
    }
  }
});
Senses = AmpersandModel.extend({
  children: {
    passiveInsight: Sense,
    passivePerception: Sense
  }
});
