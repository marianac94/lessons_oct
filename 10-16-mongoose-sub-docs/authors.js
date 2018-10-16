const mongoose = require('mongoose');
const Article  = require('./article');

const authorSchema = new mongoose.Schema({
  name: { type: String },
  articles: [Article.schema]
})

module.exports = mongoose.model('Author', authorSchema);
