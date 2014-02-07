/*
 * grunt-beez-confbuilder
 * https://github.com/fkei/grunt-beez-confbuilder
 *
 * Copyright (c) 2014 fkei
 * Licensed under the MIT license.
 */

'use strict';

var confbuilder = require('beez-confbuilder');

var description = 'Build configuration files for beez project template.';

module.exports = function(grunt) {

    grunt.registerTask('beez_confbuilder', description, function() {

        var options = this.options();
        grunt.log.debug(options);
        if (confbuilder.runner(options) === 0) {
            grunt.log.writeln('Success :)');
        } else {
            grunt.log.writeln('Failure :(');
        }
    });
};
