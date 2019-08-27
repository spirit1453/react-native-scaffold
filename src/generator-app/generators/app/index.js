'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')

module.exports = class extends Generator {
  prompting() {
    this.log(
      `Welcome to the react-native template generator!`
    );

    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: `What is your app's name?`
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props;
    })
  }

  writing() {
    fs.readdirSync(path.resolve(__dirname, 'templates')).forEach(ele => {
      const copyAry = ['ios']
      if (copyAry.includes(ele)) {
        this.fs.copy(
          this.templatePath(ele),
          this.destinationPath(ele)
        )
      } else {
        this.fs.copyTpl(
          this.templatePath(ele),
          this.destinationPath(ele),
          {
            appName: this.props.appName
          }
        )
      }
    })
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: false,
      yarn: true
    })
  }

  async end() {
    console.log(chalk.blue(`\nThe project has been initialized successfully!\n`))

    const prompts = [
      {
        type: 'confirm',
        name: 'shouldStart',
        message: `Do you want start the project immediately?`,
        default: false
      }
    ]

    const {shouldStart} = await this.prompt(prompts)

    if (shouldStart) {
      const cmd = `react-native run-android`
      console.log(`exec: ${chalk.blue(cmd)}`)
      childProcess.execSync(cmd, {
        stdio: 'inherit'
      })
    }
  }
}
