const express = require('express');
const app = express();
// add variable bodyParser for the req.body to work
const bodyParser = require('body-parser')
// everything that lives in the file of beers.js is stored on this new variable Beers
const Beer = require('./models/beers');


// you need to add this when adding the const (variable) of bodyParser
app.use(bodyParser.urlencoded({extended: false}));


// this is to make sure something is showing up on the page (run with: nodemon)
app.get('/', (req, res) => {
  res.send('Is something showing on my page?')
});


// this is to make sure all my data is showing up on the page
app.get('/beers', (req, res) => {
  res.send(Beer)
});


// this is how you create a new page app.page and res.render is to show it on the page (add the html in the file new.ejs)
app.get('/beers/new', (req, res) => {
  res.render('new.ejs')
});


// request.body means that the user do the request to the server to add the information in whichever place its needed
app.post('/beers', (req, res) => {
  console.log(req.body, ' this is where the information of the beers for will live');
// install the body parse: npm install body-parser
  if(req.body.readyToDrink === 'on') {
    req.body.readyToDrink = true;
  } else {
    req.body.readyToDrink = false;
  }
  Beer.push(req.body)
  res.redirect('/beers')
});


// delete the information you just posted in the array for the user to delete information in their posts and forms



// this is to make sure the exact index of data is showing up <-- index always have to be at the bottom of most things for the items to work and run before this function
app.get('/beers/:index', (req, res) => {
  // res.send(Beer[req.params.index])
  res.render('show.ejs', {
    beer: Beer[req.params.index]
  })
});


app.listen(3000, (req, res) => {
  console.log('THIS APP IS LIVINNN');
});
