const express = require('express');
const router = express.Router();

// We are requiring our model that our controller need
const Fruits = require('../module/fruits');


// Index route -shows all the fruits
router.get('/', (req, res) => {
  res.render('index.ejs', {fruits: Fruits});
});


// making a new page route (new.ejs) it has to be above index otherwise its not going to read it (the file)
router.get('/new', (req, res) => {
  res.render('new.ejs');
});


// whenever used the req.body you need to install (npm install body-parser) in the terminal for the function to work
router.post('/', (req, res) => {
  console.log(req.body, ' this is where our info from the fruit live');

// redirect the information that uploads to the array of fruits
if (req.body.readyToEat === 'on'){
  req.body.readyToEat = true;
} else {
  req.body.readyToEat = false;
}

Fruits.push(req.body);
  res.redirect('/');
});


router.get('/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    fruit: Fruits[req.params.index],
    index: req.params.index
  });
});


// url params, is extra stuff we can put in our URL for our server to dynamically read.
// url params - is a variable that we can capture in the URL
router.get('/:index', (req, res) => {
  console.log(req.params);


// The property name becomes a variable within the ejs page
  res.render('show.ejs', {
    fruit: Fruits[req.params.index]
  });
});


// delete method --> https://www.npmjs.com/package/method-override
router.delete('/:index', (req, res) => {
  console.log(req.params.index, ' index in delete route');
  Fruits.splice(req.params.index, 1);
  res.redirect('/fruits')
});


// edit a product in the form
router.put('/:index', (req, res) => {
  console.log(req.params.index, ' id in the route');
  console.log(req.body, ' this should be our form data');

  if (req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruits[req.params.index] = req.body;

  res.redirect('/fruits');
});










module.exports = router;
