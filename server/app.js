const path = require('path')
const express = require('express')
const router = require('./routes')

const app = express()

app.use(router)
app.use('/', express.static(path.join(__dirname, '../dist')))

process.on('uncaughtException', err => {
  console.error('An uncaught error occurred!')
  console.error(err.message)
  console.error(err.stack)
})

module.exports = app
