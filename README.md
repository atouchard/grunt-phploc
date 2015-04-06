# grunt-phploc

> Grunt plugin for running phploc.

##Getting Started

This plugin requires Grunt `0.4.0`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

1. Install this grunt plugin with the following command:

  ```shell
  npm install grunt-phploc --save-dev
  ```


2. [Install phploc](https://github.com/sebastianbergmann/phploc#installation) (preferably with [composer](https://github.com/composer/composer))

  ```shell
  composer install
  ```


3. Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

  ```js
  grunt.loadNpmTasks('grunt-phloc');
  ```


## The "phploc" task

### Overview
In your project's Gruntfile, add a section named `phploc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  phploc: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Target Properties
#### dir
Type: `String`

The directory where phploc should be run, i.e. where the test classes and the bootstrap are located in.

### Options
#### options.bin
Type: `String`  Default: `'phploc'`

The executable binary.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
