const express = require('express');
const router = express.Router();

const Authors = require('../models/authors');

router.get('/', (req, res) => {
  Author.find({}, (err, foundAuthors) => {
    res.render('authors/index.ejs', {
      authors: foundAuthors
    });
  });
});

router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
});

router.get('/:id', (req, res) => {
  Author findById(req.params.id, (err, authorFound) => {
    res.render('authors/show.ejs', {
      authors: authorFound
    })
  })
})

router.post('/', (req, res) => {
  Author.create(req.body, (err, createdAuthor) => {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/authors');
    }
  });
});









module.exports = router;
