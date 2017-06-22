/**
 * Created by qianqing on 2017/6/21.
 */
'use strict'

const path = require('path')
const fs = require('fs')
const demoPath = path.resolve(__dirname, '../src/demo_list.json')

const argv = require('yargs').argv
argv.simulate = argv.simulate || false

module.exports = {
  options: {
    vuxDev: !argv.simulate, // true
    vuxSetBabel: argv.simulate, // false
    vuxWriteFile: false,
    env: 'dev'
  },
  plugins: [
    'vux-ui', 'inline-manifest', 'progress-bar', 'duplicate-style',
    {
      name: 'less-theme',
      path: 'src/theme.less'
    }
  ]
}

function toDash(str) {
  return str.replace(/([A-Z])/g, function (m, w) {
    return '-' + w.toLowerCase();
  }).replace('-', '')
}