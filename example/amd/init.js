require(['../../require-one.js', 'existing'], function (requireOne) {

  // Retrieve the first package that is available.
  var output = requireOne(['not-found', 'no-exist', 'existing', 'nope'])

  console.log(output)
  document.getElementsByTagName('h1')[0].textContent = output
})
