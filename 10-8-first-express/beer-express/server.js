const express = require('express');
const app = express();
const Beer = require('./models/beers');


// this is to make sure something is showing up on the page (run with: nodemon)
app.get('/', (req, res) => {
  res.send('Is something showing on my page?')
});


// this is to make sure all my data is showing up on the page
app.get('/beers', (req, res) => {
  res.send(Beer)
});


// this is to make sure the exact index of data is showing up
app.get('/beers/:index', (req, res) => {
  // res.send(Beer[req.params.index])
  res.render('show.ejs', {
    beer: Beer[req.params.index]
  })
});


app.listen(3000, (req, res) => {
  console.log('THIS APP IS LIVINNN');
});
