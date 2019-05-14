const DB = require('./db')
const postDB = new DB('posts')

module.exports = {
  getPosts: postDB.getEntities('posts'),
  addPost: postDB.createEntities(req => req.body)
}
