const express = require('express');
const router = express.Router();
const Article  = require('../models/articles');


router.get('/', (req, res)=>{
  Article.find({}, (err, foundArticles)=>{
    res.render('articles/index.ejs', {
      article: foundArticles
    });
  });
});

router.get('/new', (req, res) => {
  res.render('articles/new.ejs')
});


router.get('/:id', (req, res)=>{
  Article.findById(req.params.id, (err, foundArticle)=>{
    res.render('articles/show.ejs', {
      article: foundArticle
    });
  });
});

router.get('/:id/edit', (req, res)=>{
  Article.findById(req.body.id, (err, foundArticle)=>{
    res.render('articles/edit.ejs', {
      article: foundArticle
    });
  });
});

router.post('/', (req, res)=>{
  console.log(req.body, 'router is working');
    Article.create(req.body, (err, createdArticle) => {
      res.redirect('/articles');
    });
});

router.delete('/:id', (req, res)=>{
  Article.findByIdAndRemove(req.body.id, ()=>{
    res.redirect('/articles');
  });
});

router.put('/:id', (req, res)=>{
  Article.findByIdAndUpdate(req.params.id, req.query, ()=>{
    res.redirect('/articles');
  });
});

module.exports = router;
