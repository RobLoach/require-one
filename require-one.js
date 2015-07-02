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
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(function (require) {
      // Use AMD's require() wrapper.
      root.requireOne = factory(require)
      return root.requireOne
    })
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require)
  } else {
    /**
     * Our own require function for the global scope.
     */
    function globalRequire (packageName) {
      if (root[packageName]) {
        return root[packageName]
      }
      throw new Error('Package ' + packageName + 'not found')
    }
    root.requireOne = factory(globalRequire)
  }
}(this, function (requireFunction) {
  /**
   * Iterate through each package, returning the first loadable one.
   *
   * @arg {(...string|string[])} packages - An array of strings representing
   *   which packages to load, or an argument list of strings to load.
   *
   * @returns The first loaded package from the packages parameter.
   */
  return function requireFromArray (packages) {
    // Retrieve the list of package names.
    var packagesNames = Array.isArray(packages) ? packages : arguments
    for (var i in packagesNames) {
      try {
        return requireFunction(packagesNames[i])
      } catch (e) {
        // Do nothing, but continue on to the next package.
        continue
      }
    }
    throw new Error('Could not found one of the expected packages: ' + JSON.stringify(packages))
  }
}))
