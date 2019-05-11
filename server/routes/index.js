const express = require('express')
const router = express.Router()
const postHandler = require('./post')

router.get('/api/v1/posts', postHandler.getPosts)

module.exports = router
