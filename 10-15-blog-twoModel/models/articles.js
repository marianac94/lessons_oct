const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  body:  String
});

module.exports = mongoose.model('Article', articleSchema);
