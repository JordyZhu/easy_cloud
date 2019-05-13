/* eslint-disable space-before-function-paren */
const { MongoClient } = require('mongodb')
const { DB_NAME, SERVER_ERROR_MAP } = require('../constants')

module.exports = class DB {
  constructor(collectionName) {
    this.currentClient = null
    this.collectionName = collectionName
    this.connect.bind(this)
    this.close.bind(this)
    this.getEntities.bind(this)
  }

  connect() {
    return MongoClient.connect(
      'mongodb://gzblog:Gz_1234@172.104.83.207:27017/test',
      { useNewUrlParser: true }
    ).then(client => {
      this.currentClient = client
      return client.db(DB_NAME)
    }).then(db => {
      return db.collection(this.collectionName)
    })
  }

  getEntities(recordsKey) {
    return (req, res) => {
      const { offset, limit = 100 } = req.query

      this.connect().then(collection => {
        const queryCommand = collection.find()

        if (offset) {
          queryCommand.skip(offset)
        }

        if (limit) {
          queryCommand.limit(limit)
        }

        return queryCommand.toArray()
      }).then(records => {
        this.close()
        res.send({
          errorCode: 100000,
          data: { [recordsKey || this.collectionName]: records }
        })
      }).catch(err => {
        this.close()
        res.send({
          ...SERVER_ERROR_MAP.DB_CONNECT,
          originalError: err
        })
      })
    }
  }

  createEntities(entityFormatter) {
    return (req, res) => {
      const entities = entityFormatter(req)
      this.connect().then(collection => {
        collection[Array.isArray(entities) ? 'insertMany' : 'insertOne'](entities)
      }).then(res => {
        this.close()
        res.status(204)
      }).catch(err => {
        this.close()
        res.send({
          ...SERVER_ERROR_MAP.DB_CONNECT,
          originalError: err
        })
      })
    }
  }

  close() {
    if (this.currentClient) {
      this.currentClient.close().then(() => {
        this.currentClient = null
      }).catch(() => {

      })
    }
  }
}
