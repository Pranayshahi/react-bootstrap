'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the legendary ' + chalk.red('generator-react-app-boilerplate') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }];

    return this.prompt(prompts).then(function (answers) {
      this.props = answers;
      this.log(answers.name);
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('app'),
      this.destinationPath(this.props.name+'/app')
    );
    this.fs.copy(
      this.templatePath('configs'),
      this.destinationPath(this.props.name+'/configs')
    );
    this.fs.copyTpl(
      this.templatePath('_README'),
      this.destinationPath(this.props.name+'/README.md'), {
          name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath(this.props.name+'/.babelrc')
    );
    this.fs.copy(
      this.templatePath('eslintrc'),
      this.destinationPath(this.props.name+'/.eslintrc')
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath(this.props.name+'/.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath(this.props.name+'/package.json'), {
          name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath(this.props.name+'/server.js')
    );
    this.fs.copy(
      this.templatePath('user.yml.example'),
      this.destinationPath(this.props.name+'/user.yml.example')
    );
  },

  install: function () {
    var elementDir = process.cwd() + '/' + this.props.name;
    process.chdir(elementDir);
    var prompts = [{
      type: 'confirm',
      name: 'install',
      message: 'Would you like to enable install Dependencies?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      if(props.install){
        this.installDependencies();
      }
    }.bind(this));
  },

  end: function() {
    this.log("All Done!");
  },
});
