#!/usr/bin/env node
const { resolve } = require('path')
const { writeFileSync } = require('fs')

const floatArray = async (len, path) => {
  const target = resolve(path)
  const res = []
  for (let i = 0; i < len; i += 1) {
    res.push(Math.random() * Math.floor(10000))
  }
  await writeFileSync(target, JSON.stringify(res))
  
}

;(async () => {
  const argv = require('yargs').argv
  if (argv.n && argv.p) {
    await floatArray(argv.n, argv.p)
  }
})()


