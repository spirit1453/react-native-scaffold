const fs = require('fs')
const path = require('path')
const semver = require('semver')
const moment = require('moment')
const childProcess = require('child_process')

const rootDir = path.resolve(__dirname, '../')

const appJsonPath = path.resolve(rootDir, 'app.json')

let versionBefore = '0.0.1'

if (fs.existsSync(appJsonPath)) {
    const obj = require(appJsonPath)
    versionBefore = obj.version

}


const newVer = semver.inc(versionBefore, 'patch')

const obj = {
    version: newVer,
    time: moment().format('YYYY-MM-DD HH:mm:ss')
}

fs.writeFileSync(appJsonPath, JSON.stringify(obj))

const cmd = `ys git ${newVer}`
childProcess.execSync(cmd, {
    stdio: 'inherit'
})