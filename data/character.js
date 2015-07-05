var Character = function (config) {
  var race = config.race || Randomizer.race(),
    self = _.defaults(config, {
      "name": Randomizer.name(),
      "level": 0,
      "class": Randomizer.class(race),
      "paragonPath": "",
      "epicDestiny": "",
      "totalXP": 0,
      "race": race,
      "size": Randomizer.size(race),
      "age": 20,
      "gender": "",
      "height": "6' 1\"",
      "weight": "220 lbs.",
      "alignment": "",
      "deity": ""
    });

  return self;
};
