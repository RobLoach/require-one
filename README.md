# Require One

Load the first package found from the given array.

## API

This works across CommonJS/Node, AMD and with global variables.

### CommonJS/Node

``` javascript
var $ = requireOne(['jquery', 'cheerio']);
// => jQuery or Cheerio, depending on which one is loaded first.
```

### AMD

``` javascript
require(['require-one'], function(requireOne) {

  // Retrieve the first package that is available.
  var $ = requireOne(["jquery", "cheerio"]);
  // => jQuery or Cheerio, depending on which one is loaded first.

  // ...
});
```

### Globals

``` html
<!DOCTYPE html>
<html>
    <head>
        <title>My Sample Project</title>
        <script type="text/javascript" src="../require-one.js"></script>
    </head>
    <body>
        <h1>My Sample Project</h1>
    </body>
</html>