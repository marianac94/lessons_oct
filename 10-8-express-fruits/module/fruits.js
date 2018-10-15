// this will be are data aka our model -->Model is a representation of our data
// start the Schema of the fruit collection

const mongoose = require('mongoose');


const fruitSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  readyToEat: Boolean
});


module.exports = mongoose.model('Fruit', fruitSchema);
