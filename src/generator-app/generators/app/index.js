'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      `Welcome to the react-native template generator!`
    );

    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: `What is your app's name?`
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    })
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        appName: this.props.appName
      }
    )
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    })
  }
};
