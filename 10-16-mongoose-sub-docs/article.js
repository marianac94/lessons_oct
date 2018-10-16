const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  body: String,
  comments: [{body: String, commentDate: Date}],
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

// First argument, is what we are naming our collection,
// mongodb I believe will lowercase, and plurarize
module.exports = mongoose.model('Article', articleSchema);
