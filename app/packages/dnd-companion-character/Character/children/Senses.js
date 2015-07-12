import AmpersandModel from 'ampersand-model';

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
let Sense = AmpersandModel.extend({
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

let Senses = AmpersandModel.extend({
  children: {
    passiveInsight: Sense,
    passivePerception: Sense
  }
});

export { Sense };
export default Senses;