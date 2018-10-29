const mongoose = require('mongoose');


const dogSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Dog', dogSchema);
