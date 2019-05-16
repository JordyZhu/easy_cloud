/* eslint-disable space-before-function-paren */
const { MongoClient, ObjectId } = require('mongodb')
const { SERVER_ERROR_MAP } = require('../constants')

const DB_NAME = `gzblog-${process.env.NODE_ENV}`

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

  getEntity(queryParser) {
    return (req, res) => {
      const query = queryParser ? queryParser(req.query) : req.query

      if (query._id) {
        query._id = ObjectId(query._id)
      }

      this.connect().then(
        collection => collection.find(query).toArray()
      ).then(array => {
        this.close()
        res.send({
          errorCode: 100000,
          data: array && array[0] || {}
        })
      })
    }
  }

  getEntities(recordsKey, query = '{}', requiredKeys) {
    return (req, res) => {
      const { offset, limit = 100, order } = req.query

      this.connect().then(
        collection => collection.find(
          JSON.parse(query),
          requiredKeys ? requiredKeys.split(',').reduce(
            (result, key) => ({ ...result, [key]: 1 }),
            {}
          ) : null
        ).sort(
          order ? JSON.parse(order) : { _id: -1 }
        ).skip(
          offset ? Number(offset) : 0
        ).limit(
          limit ? Number(limit) : 100
        ).toArray()
      ).then(records => {
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
      }).then(() => {
        this.close()
        res.send({
          errorCode: 100000
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

  close() {
    if (this.currentClient) {
      this.currentClient.close().then(() => {
        this.currentClient = null
      }).catch(() => {
        this.currentClient.close()
      })
    }
  }
}
