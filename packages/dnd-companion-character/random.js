var Randomizer = function () {
  var self = {
    name: function () {
      return "John Doe";
    },
    class: function (race) {
      return "Warrior";
    },
    size: function (race) {
      return "Medium";
    },
    gender: function (race) {
      var gender;
      if (race.type === "Humanoid") {
        gender = _.sample(["Male", "Female"]);
      } else if (race.type === "Beast") {
        gender = _.sample(["Beast"]);
      } else {
        gender = _.sample(["Male", "Female", "Other"]);
      }
      return gender;
    },
    race: function () {
      return "Human";
    },
    personality: function () {
      return _.sample(['Cheerful', 'Talkative', 'Grim', 'Hopeful', 'Gullible', 'Naive']);
    },
    traits: function () {
      return _.sample(['Humble', 'Timid', 'Honest', 'Flexible', 'Kind', 'Stern']);
    }
  };

  return self;
}();
