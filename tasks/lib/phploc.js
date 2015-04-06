/*
 * grunt-phpunit
 * https://github.com/atouchard/grunt-phploc
 *
 * Copyright (c) 2015 Alexandre Touchard
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;
var path = require('path');

var typeIsArray = Array.isArray || function(value) {
  return {}.toString.call(value) === '[object Array]';
};

exports.init = function(grunt) {

  var exports = {},
      config = {},
      cmd = null,
      done = null,
      defaults = {
        bin: 'phploc',
        exclude: false,
        names: '*.php',
        quiet: true,
        verbose: false,
        reportFileXML: undefined,
        reportFileCSV: undefined
      };

  var buildCommand = function(dir) {
    var excl;

    cmd = path.normalize(config.bin);

    if (config.reportFileXML) {
      cmd += " --log-xml " + config.reportFileXML;
    }

    if (config.reportFileCSV) {
      cmd += " --log-csv " + config.reportFileCSV;
    }

    if (typeIsArray(config.exclude)) {
      var _ref = config.exclude;
      for (var i = 0, len = _ref.length; i < len; i++) {
        excl = _ref[i];
        cmd += " --exclude " + excl;
      }
    }
    else if (config.exclude) {
      cmd += " --exclude " + config.exclude;
    }

    if (config.names) {
      cmd += " --names \"" + config.names + "\"";
    }

    if (config.quiet) {
      cmd += " --quiet";
    }

    if (config.verbose) {
      cmd += " --verbose";
    }

    return cmd += " " + dir;
  };

  /**
   * Setup task before running it
   *
   * @param Object runner
   */
  exports.setup = function(runner) {
    var dir = path.normalize(runner.data.dir);

    config = runner.options(defaults);
    cmd = buildCommand(dir);
    grunt.log.writeln("Starting phploc (target: " + runner.target.cyan + ") in " + dir.cyan);
    grunt.verbose.writeln("Execute: " + cmd);

    return done = runner.async();
  };


  /**
   * Runs phploc command with options
   */
  exports.run = function() {
    return exec(cmd, function(err, stdout, stderr) {
      if (stdout) {
        grunt.log.write(stdout);
      }

      if (err) {
        if (!config.ignoreExitCode) {
          grunt.fatal(err);
        }
      }

      return done();
    });
  };

  return exports;
};
