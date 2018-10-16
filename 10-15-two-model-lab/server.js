const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db')

const petController = require('./controllers/pC');
app.use('/pets', petController);
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
  res.render('index.ejs')
});








app.listen(3000, () => {
  console.log('its alive and working');
})
