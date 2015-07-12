import AmpersandModel from 'ampersand-model';

/*
 "movement": {
 "score": 6,
 "base": 6,
 "armor": 0,
 "item": 0,
 "misc": [
 0
 ]
 },
 */
let Movement = AmpersandModel.extend({
  props: {
    "base": "number",
    "armor": "number",
    "item": "number",
    "misc": "array"
  },
  derived: {
    "score": {
      deps: ['base', 'armor','item', 'misc'],
      fn: function () {
        return parseInt(this.base + this.armor + this.item + _.sum(_.flatten(this.misc)));
      }
    }
  }
});

export default Movement;