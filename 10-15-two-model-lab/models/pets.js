const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {type: String, require: true},
  age: Number,
  owner: String
});

module.exports = mongoose.model('Pets', petSchema);
