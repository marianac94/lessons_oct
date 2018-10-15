const express = require('express');
const router = express.Router();

// We are requiring our model that our controller need
const Fruits = require('../module/fruits');


// Index route
// Shows all the fruits
router.get('/', (req, res) => {

  Fruits.find({}, (err, allFruits) => {
    if(err){
      console.log(err);
    } else {
      console.log(allFruits)
      // allFruits, is still an array
      res.render('index.ejs', {
        fruits: allFruits
      });
    }
  });
});


// making a new page route (new.ejs) it has to be above index otherwise its not going to read it (the file)
router.get('/new', (req, res) => {
  res.render('new.ejs');
});


// Post new fruits (create)
router.post('/', (req, res) => {
  console.log(req.body, ' this is where our info from the fruit form will live');

  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  // Rewrite this code to use mongodb
  Fruits.create(req.body, (err, createdFruit) => {
    if(err){
      console.log(err)
    } else {
      console.log(createdFruit);
      res.redirect('/fruits')
    }
  });
});


// edit a product in the form (first part)
router.get('/:id/edit', (req, res) => {
  Fruits.findById(req.params.id, (err, foundFruit) => {
      res.render('edit.ejs', {
        fruit: foundFruit,
      });
  });
});


// This shows just 1 fruit when you click
router.get('/:id', (req, res) => {
  console.log(req.params);

  Fruits.findById(req.params.id, (err, foundFruit) => {
    console.log(foundFruit, 'found Fruit')
  res.render('show.ejs', {
    fruit: foundFruit
  });
});
});


// delete method
router.delete('/:id', (req, res) => {
  console.log(req.params.id, ' index in delete route');
  Fruits.findByIdAndRemove(req.params.id, (err, deleteFruits) => {
    res.redirect('/fruits')
  });
});


// edit a product in the form (second part)
router.put('/:id', (req, res) => {
  console.log(req.params.id, ' id in the put route');
  console.log(req.body, ' this should be our form data');
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruits.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
    res.redirect('/fruits')
  });
});










module.exports = router;
