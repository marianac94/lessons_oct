const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.listen(port, function() {
  console.log("App is running on port: ", port);
});

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db
const products = require('./products');

// index route
app.get('/products', function(req, res) {
  res.send(products);
});

app.get('/products/new', (req, res) => {
  res.render('new.ejs')
});

app.post('/products', (req, res) => {
  console.log(req.body, ' this is your object');

products.push(req.body);
res.redirect('/products');
app.send(products);
});

// show route
app.get('/products/:id', function(req, res) {
  res.send(products[req.params.id]);
});

// create route
app.post('/products', function(req, res) {
  console.log('CREATE route accessed');
  console.log('Data within req.body: ', req.body);
  products.push(req.body);
  res.redirect('/products');
});
