const DB = require('./db')
const postDB = new DB('posts')

module.exports = {
  getPosts: postDB.getEntities('posts')
}
