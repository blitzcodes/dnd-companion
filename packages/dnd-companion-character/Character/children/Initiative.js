Initiative = AmpersandModel.extend({
  props: {
    "dex": "number",
    "halfLevel": "number",
    "misc": "array"
  },
  derived: {
    "score":{
      deps:['dex','halfLevel','misc'],
      fn: function(){
        return parseInt(this.dex + this.halfLevel + _.sum(_.flatten(this.misc)));
      }
    }
  }
});