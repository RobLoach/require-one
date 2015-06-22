# Require One

[![Build Status](https://img.shields.io/travis/RobLoach/require-one/master.svg)](http://travis-ci.org/RobLoach/jquery-once "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/require-one.svg)](https://npmjs.org/package/require-one "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/require-one.svg)](https://npmjs.org/package/require-one "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/RobLoach/jquery-once.svg)](https://david-dm.org/RobLoach/jquery-once)

Load the first package found from the given array.


## Install

Method | Installation
------ | ------------
[npm](http://npmjs.com/package/jquery-once) | `npm install require-one --save`
[Composer](https://packagist.org/packages/robloach/require-one) | `composer require require-one`
[Bower](http://bower.io/search/?q=require-one) | `bower install require-one`


## Usage

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
        <script>
          var con = requireOne(['nope', 'nopers', 'nopes', 'console']);
          con.log('Hello World! Found the console?');
        </script>
    </head>
    <body>
        <h1>My Sample Project</h1>
    </body>
</html>