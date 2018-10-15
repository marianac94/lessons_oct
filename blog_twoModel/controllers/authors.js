const express = require('express');
const router = express.Router();

const Authors = require('../models/authors');

router.get('/', (req, res) => {
  res.render('authors/index.ejs');
});

router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
})

module.exports = router;
