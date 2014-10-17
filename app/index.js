'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var PrskkGulpBrowserifyReactGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  // prompting: function () {
  //   var done = this.async();
  //
  //   // Have Yeoman greet the user.
  //   this.log(yosay(
  //     'Welcome to the fine PrskkGulpBrowserifyReact generator!'
  //   ));
  //
  //   var prompts = [{
  //     type: 'confirm',
  //     name: 'someOption',
  //     message: 'Would you like to enable this option?',
  //     default: true
  //   }];
  //
  //   this.prompt(prompts, function (props) {
  //     this.someOption = props.someOption;
  //
  //     done();
  //   }.bind(this));
  // },

  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.src.copy('app/index.html', 'app/index.html');

      this.dest.mkdir('app/scripts');

      this.dest.mkdir('app/styles');
      this.src.copy('app/styles/main.scss', 'app/styles/main.scss');

      this.dest.mkdir('src');
      this.src.copy('src/app.jsx', 'src/app.jsx');

      this.dest.mkdir('src/views');
      this.src.copy('src/views/Hello.jsx', 'src/views/Hello.jsx');
      this.src.copy('src/views/User.jsx', 'src/views/User.jsx');

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');
      this.src.copy('_gulpfile.js', 'gulpfile.js');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = PrskkGulpBrowserifyReactGenerator;
