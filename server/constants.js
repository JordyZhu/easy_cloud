const DB_NAME = `gzblog-${process.env.NODE_ENV}`

const SERVER_ERROR_MAP = {
  DB_CONNECT: {
    errorCode: 100100,
    errorMessage: '连接数据库时出错'
  },
  DB_COLLECTION: {
    errorCode: 100110,
    errorMessage: '查询数据集时出错'
  }
}

module.exports = {
  DB_NAME,
  SERVER_ERROR_MAP
}
