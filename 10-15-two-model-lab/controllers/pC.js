const express = require('express');
const router = express.Router();

const Pets = require('../models/pets');

router.get('/:id', () => {
  Pets.find({}, (err, foundPets) => {
    res.render('pets/index.ejs', {
      pets: foundPets
    })
  })
})





module.exports = router;
