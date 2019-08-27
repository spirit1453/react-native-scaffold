#!/usr/bin/env node

const childProcess = require('child_process')
const path = require('path')

const rootDir = path.resolve(__dirname, '../')

const cmd = `yo ${path.resolve(rootDir, 'src/generator-app')}`
childProcess.execSync(cmd, {
    stdio: 'inherit'
})