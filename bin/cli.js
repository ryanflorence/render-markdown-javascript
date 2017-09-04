#!/usr/bin/env node
const renderJS = require("../index")
const fs = require("fs")

const file = process.argv[2]
if (!file) {
  console.log("I need a file, do `render-js <file path>`.")
}

console.log(renderJS(fs.readFileSync(file).toString()))
