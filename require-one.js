/*!
 * require-once - http://github.com/robloach/require-once
 * @license MIT
 *   http://opensource.org/licenses/MIT
 */

/**
 * Universal Module Definition: http://github.com/umdjs/umd
 *
 * Find out how we should load the packages.
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(function(require) {
      // Use AMD's require() wrapper.
      return (root.requireOne = factory(require));
    });
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require);
  } else {
    // Browser globals
    root.requireOne = factory(function (packageName) {
      // Build our own require function, checking the global scope.
      if (root[packageName]) {
        return root[packageName];
      }
      else {
        throw new Error("Package " + packageName + "not found");
      }
    });
  }
}(this, function (requireFunction) {
  /**
   * Iterate through each package, and return the first loadable one.
   */
  return function(requires) {
    for (var i in requires) {
      var name = requires[i];
      try {
        return requireFunction(name);
      }
      catch (e) {
        // Do nothing.
      }
    }
    throw new Error('Could not found one of the expected packages: ' + JSON.stringify(requires));
  };
}));
