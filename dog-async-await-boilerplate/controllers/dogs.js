const express = require('express');
const router  = express.Router();
const Dog  = require('../models/dogs');

router.get('/', async (req, res) => {
  // install of what we had before
  // this is are database call, so we are "trying"
  // to find all the dogs, and a successful response, will save a successful
  // response in the foundDogs variable, Compare this to the above
  try {
    const allDogs = await Dog.find()
    res.render('index.ejs', {
      dogs: allDogs,
    });
  } catch (err) {
    // If the await Dogs.find() fails this is where the error message will go
    // This passes the error on too the middleware route
    res.send(err);
  }
  // Dog.find({}, (err, foundDogs) => {
  //     res.render('index.ejs', {
  //       dogs: foundDogs
  // });
  // });
});


router.get('/new', (req, res) => {
  res.render('new.ejs');
});


router.get('/:id', async (req, res) => {
  try {
    const foundDog = await Dog.findById(req.params.id);
    res.render('show.ejs', {
      dog: foundDog
    });
  } catch(err) {
    res.send(err)
  };
  // Dog.findById(req.params.id, (err, foundDog) => {
  //   res.render('authors/show.ejs', {
  //     dog: foundDog
  //   });
  // });
});


router.get('/:id/edit', async (req, res) => {
  try {
    // here we are waiting for the Dog query to finish then we are storing the response in foundDog and
    const foundDog = await Dog.findById(req.params.id);
    // respond to the client (aka to tha browser)
    res.render('edit.ejs', {
      dog: foundDog
    });
  } catch(err) {
    res.send(err)
  }
  // Dog.findById(req.params.id, (err, foundDog) => {
  //   res.render('edit.ejs', {
  //     dog: foundDog
  // });
  // });
});


router.put('/:id', async (req, res) => {
  try {
    const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.redirect('/dogs');
  } catch(err) {
    res.send(err)
  }
  // Dog.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedDog)=> {
  //   console.log(updatedDog, ' this is updatedDog');
  //   res.redirect('/dogs');
  // });
});


router.post('/', async (req, res) => {
  try {
    const createdDog = await Dog.create(req.body);
    res.redirect('/dogs')
  } catch(err) {
    res.send(err);
  }
  // console.log(req.body)
  // Dog.create(req.body, (err, createdDog) => {
  //   console.log(createdDog, ' this is the createdDog');
  //   res.redirect('/dogs');
  // });
});


router.delete('/:id', async (req, res) => {
  try {
    const deletedDog = await Dog.findByIdAndRemove(req.params.id);
    res.redirect('/dogs')
  } catch(err) {
    res.send(err)
  }
  // Dog.findByIdAndRemove(req.params.id, (err, deletedDog) => {
  //   console.log(deletedDog, ' this is deletedDog');
  //   res.redirect('/dogs')
  // })
});









module.exports = router;
