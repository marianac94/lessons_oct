const express = require('express');
const app = express();
const People = require('./models/people');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));



app.post('/people', (req, res) => {
  console.log(req.body, ' info from the people');

  People.push(req.body);
  res.redirect('/people');
});


app.get('/people', (req, res) => {
  res.render('index.ejs', {
    classroom: People
  });
});


// creating new People
app.get('/people/new', (req, res) => {
  res.render('new.ejs');
});


// delete
app.delete('/people/:index', (req, res) => {
  People.splice(req.params.index, 1);
  res.redirect('/people')
});


// edit
app.get('/people/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    people: People[req.params.index],
    index: req.params.index
  });
});

app.put('/people/:index', (req, res) => {
  console.log(req.params.index, ' index in the route');
  console.log(req.body, ' this should be our form data');

  People[req.body.index] = req.body;
  res.redirect('/people')
});




app.listen(3000, (req, res) => {
  console.log('its alive!!!');
})
