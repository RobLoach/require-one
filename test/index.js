var assert = require('assert');
var test = require('testit');
var requireOne = require('..');

test('Load from an array', function () {
  var testFramework = requireOne(['tape', 'testit']);
  assert.deepEqual(testFramework, test);
});

test('Throws an error when not found', function() {
  assert.throws(function() {
    requireOne(['not-found', '404']);
  });
});
