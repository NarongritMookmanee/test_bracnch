const { readFileSync, readdirSync } = require('node:fs')
const { extname ,parse} = require('node:path')
const files = readdirSync(__dirname)
console.log(extname(files[6]) === null)