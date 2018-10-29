const mongoose = require('mongoose');
const Article = require('./articles');


const authorSchema = new mongoose.Schema({
  name: String,
  articles: [Article.schema]
});


module.exports = mongoose.model('Author', authorSchema);
