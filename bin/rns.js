#!/usr/bin/env node

const childProcess = require('child_process')
const path = require('path')
const yargs = require('yargs')

const {argv} = yargs

const rootDir = path.resolve(__dirname, '../')

if (argv.v) {
    console.log(require(path.resolve(rootDir, 'app.json')))
} else {
    const cmd = `yo ${path.resolve(rootDir, 'src/generator-app')}`
    childProcess.execSync(cmd, {
        stdio: 'inherit'
    })
}

