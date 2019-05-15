const DB = require('./db')
const postDB = new DB('posts')

module.exports = {
  getPost: postDB.getEntity(),
  getPosts: postDB.getEntities('posts'),
  addPost: postDB.createEntities(req => {
    const formData = req.body
    return formData
  })
}
