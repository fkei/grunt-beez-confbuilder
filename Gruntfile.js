/*
 * grunt-beez-confbuilder
 * https://github.com/fkei/grunt-beez-confbuilder
 *
 * Copyright (c) 2014 fkei
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Configuration to be run.
        beez_confbuilder: {
            options: {
                srcdir: __dirname + '/example/conf.template',
                pjdir: __dirname + '/example/projectA',
                env: 'local',
                indent: '        ',
                loglevel: 3,
                encoding: 'utf8',
                no_mkdirp: false
            }
        }

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', [
        'beez_confbuilder'
    ]);

    grunt.registerTask('default', [
        'jshint',
    ]);

};
