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
        name: 'name',
        message: `What is your app's name?`
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    )
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    )
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    })
  }
};
