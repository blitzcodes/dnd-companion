_ = lodash;

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    character: function() {
      var race = Character.random.race();
      var c = new Character.model({
        "name": Character.random.name(),
        "level": 1,
        "class": Character.random.class(race),
        "paragonPath": "",
        "epicDestiny": "",
        "totalXP": 0,
        "race": race,
        "size": Character.random.size(race),
        "age": 32,
        "gender": Character.random.gender(race),
        "height": "6'",
        "weight": "220lbs",
        "alignment": "good",
        "deity": "",
        "adventuringCompany": ""
      });
      return JSON.stringify(c.toJSON());
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
