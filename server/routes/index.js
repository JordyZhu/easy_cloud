const express = require('express')
const router = express.Router()
const postHandler = require('./post')

router.get('/api/v1/post', postHandler.getPost)
router.get('/api/v1/posts', postHandler.getPosts)
router.post('/api/v1/post/add', postHandler.addPost)

module.exports = router
