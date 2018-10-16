const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');

const authorsController = require('./controllers/authors');
const articlesController = require('./controllers/articles')

// always require this befor our controllers
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
// setting up the middleware for our controller
// where every route will start with /authors
app.use('/authors', authorsController);
app.use('/articles', articlesController);


app.get('/', (req, res) => {
  res.render('index.ejs');
});






app.listen(3000, () => {
  console.log('server is listening!');
})
