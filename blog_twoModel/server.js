const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db/db');
const authorsController = require('./controllers/authors');

// where every route will start with /authors
app.use('/authors', authorsController);

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.render('index.ejs');
});






app.listen(3000, () => {
  console.log('server is listening!');
})
