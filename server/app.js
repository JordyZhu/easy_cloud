const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(router)
app.use('/', express.static(path.join(__dirname, '../dist')))
app.use(/^(?!\/(api).*$).*/, express.static(path.join(__dirname, '../dist/index.html')))

process.on('uncaughtException', err => {
  console.error('An uncaught error occurred!')
  console.error(err.message)
  console.error(err.stack)
})

module.exports = app
