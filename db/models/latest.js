const mongo = require('mongoose')
//select database
const db = mongo.connection.useDb('scrapy')
//select collection
const getAllNews = db.model('news1', new mongo.Schema({
  header: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  content: { type: String, required: true },
  department: { type: String, required: true },
  created_at: { type: Date}
}))

module.exports = getAllNews
