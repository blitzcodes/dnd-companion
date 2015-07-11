Package.describe({
  name: 'blitzcodes:dnd-companion-character',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "ampersand-model": "5.0.3",
  "ampersand-collection": "1.4.5"
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use(["erasaur:meteor-lodash"],['client,server']);
  api.addFiles([
      'dnd-companion-character.js'
    ],
    ['client,server']);
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('blitzcodes:dnd-companion-character');
  api.addFiles('dnd-companion-character-tests.js');
});
