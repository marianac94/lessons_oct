const express = require('express');
const app = express();
const People = require('./models/people');


app.get('/', (req, res) => {
  res.send('yepppp, workin just fine!')
})




app.listen(3000, (req, res) => {
  console.log('its alive!!!');
})
