# grunt-beez-confbuilder

> Build configuration files for beez project template.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-beez-confbuilder --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-beez-confbuilder');
```

## The "beez_confbuilder" task

### Overview
In your project's Gruntfile, add a section named `beez_confbuilder` to the data object passed into `grunt.initConfig()`.


```js
grunt.initConfig({
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
  },
});
```

### Options

@see [beez-confbuilder#command-line-help](https://github.com/fkei/beez-confbuilder#command-line-help)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/fkei/grunt-beez-confbuilder/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

