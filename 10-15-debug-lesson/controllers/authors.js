const express = require('express');
const router  = express.Router();
// Models job is to communicate with the DB
const Author  = require('../models/authors');

router.get('/', (req, res) => {
  Author.find({}, (err, foundAuthors) => {
    res.render('authors/index.ejs', {
      authors: foundAuthors
    });
  })
});

router.get('/new', (req, res) => {
  res.render('authors/new.ejs');
});

router.get('/:id',(req, res) => {

  Author.findById(req.params.id, (err, authorFound) => {
    res.render('authors/show.ejs', {
      author: authorFound
    })
  });
});


router.get('/:id/edit', (req, res) => {
  Author.findById(req.params.id, (err, editAuthor) => {
    res.render('authors/edit.ejs', {
      author: editAuthor
    });
  });
});

router.post('/', (req, res) => {

  Author.create(req.body, (err, createdAuthor) => {

    if(err){
      console.log(err)
    } else {
      res.redirect('/authors')
    }
  });

});

router.put('/:id', (req, res) => {
  Author.findByIdAndUpdate(req.params.id, req.body, (err, updateAuthor) => {
    res.redirect('/authors');
  });
});

router.delete('/:id', (req, res) => {
  Author.findOneAndDelete(req.params.id, (err, deleted) => {
    res.redirect('/authors')
  })
});


module.exports = router;
