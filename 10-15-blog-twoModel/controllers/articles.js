const express = require('express');
const router  = express.Router();
const Article = require('../models/articles');
const Author  = require('../models/authors');


router.get('/', async (req, res)=>{
   try  {
        // We are retrieving all the Article's and storing them in
        // a variable called foundArticle, THEN the render method
        // can finally be executed
        const foundArticles = await Article.find({});
        // this happens after the await is finished
        res.render('articles/index.ejs', {
          articles: foundArticles,
        });
      } catch (err){
        res.send(err);
      }
});

router.get('/new', async (req, res)=>{
  try {
       // We are retrieving all the Authors's and storing them in
      // a variable called allAuthors, THEN the render method
      // can finally be executed

      // also we are finding all the authors so
      // we can list them in a dropdown so the user
      // can choose an author for an article
      // when they are creating a new article
      // Please go look at the articles/new.ejs now
      // and think about what is happening on the page
     const allAuthors = await Author.find();

    res.render('articles/new.ejs', {
        authors: allAuthors
      });
  } catch (err) {
      res.send(err);
  }
});

router.get('/:id', async (req, res)=>{
  try {
      // Here we are defining are database queries
      // we can wait for both of them to finish, instead of await
      // each one, because the result from each one are not
      // dependent on each other,
      // we can wait for the concurrently by using Promise.all as seen
      // below
      const findArticle = Article.findById(req.params.id);
      const findAuthor  = Author.findOne({'articles._id': req.params.id});

      // Promise All returns an array of the repsonse from DB queries,
      // Using array destructing to save the corresponding responses
      // as the variables thisArticle, and foundAuthor
      // the array destructering is the const [thisArticle, foundAuther]
      // Basially what this is doing is creating varaibles for each index in the array that
      // is returned from await Promise.all([findArticle, findAuthor])
      //if you are still confused look up array destructering, its fancy new javascript
      const [foundArticle, foundAuthor] = await Promise.all([findArticle, findAuthor]);

      // The above is short for
      // const finishedPromiseArray = await Promise.all([findArticle, findAuthor]);
      // const foundArticle = finishedPromiseArray[0];
      // const foundAuthor  = finishedPromiseArray[1];

      // Think about why!!! we are finding the article and the author!
      res.render('articles/show.ejs', {
        article: foundArticle,
        author: foundAuthor
      });
  } catch (err) {
      next(err);
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
      // Just like above we are defining all our queries
      // which don't rely on each other's result to finish
      // so we just have to wait for them all to finish
      // before we CAN RESPOND TO THE CLIENT!!!!
      const findArticle = Article.findById(req.params.id);
      const findAllAuthors = Author.find();
      const findArticleAuthor = Author.findOne({'articles._id': req.params.id});

      // Promise.all lets us wait for all of the db queries above to finish, then we are storing
      // them in the respective variables, just like the previous route
      const [foundArticle, allAuthors, foundArticleAuthor] = await Promise.all([findArticle, findAllAuthors, findArticleAuthor]);

      res.render('articles/edit.ejs', {
            article: foundArticle,
            authors: allAuthors,
            articleAuthor: foundArticleAuthor
          });
  } catch (err) {
      res.send(err);
  }
});

router.post('/', async (req, res)=>{
   try {
      // Why do we have to find the Author and, create the article?
      // When we create an article is it stored in the Author's article array
      // Look at the authors model
      const findAuthor = Author.findById(req.body.authorId);
      const createArticle = Article.create(req.body);
      const [foundAuthor, createdArticle] = await Promise.all([findAuthor, createArticle]);

      // Is this where you are adding the article to the Author's model
      // What is foundAuthor? What is it the result of? Read the code above
      // and think through it
      foundAuthor.articles.push(createdArticle);

      await foundAuthor.save();
      res.redirect('/articles');

  } catch(err){
    console.log('errroor')
     res.send(err);
  }
});

router.delete('/:id', async (req, res)=>{
  try {
        // Once again we are defining both are database queries, that
        // are not dependant on each other (the results don't depend on each other)
        // and we just have to await Promise.all below for them to finish
        // so we can remove the article from the author? Why do we have to do this?
        const deleteArticle = Article.findByIdAndRemove(req.params.id);
        const findAuthor    = Author.findOne({'articles._id': req.params.id});

        const [deletedArticle, foundAuthor] = await Promise.all([deleteArticle, findAuthor]);

        // Why do we have to find the author
        // then remove the article from the foundAuthor document?
        // If we remove an article from the Article COllection,
        // does it automatically remove from the author collection?
        foundAuthor.articles.id(req.params.id).remove();
        // Don't forget to save! the document back to the database
        await foundAuthor.save();
        res.redirect('/articles');
    } catch(err){
        console.log(err)
          res.send(err);
    }
});

router.put('/:id', async (req, res)=>{
  try {
    const findUpdatedArticle = Article.findByIdAndUpdate(req.params.id, req.body, {new: true});

    const findFoundAuthor = Author.findOne({'articles._id': req.params.id });

    // For running pararrell async taks
    const [updatedArticle, foundAuthor ] = await Promise.all([findUpdatedArticle, findFoundAuthor])

    // What is this check for again?

    // If the if is true, then what is happening?

    // That means the user changed the author on the edit page
    if(foundAuthor._id.toString() != req.body.authorId){

          // This line is removing the article from
          // the original author's array or articles
          foundAuthor.articles.id(req.params.id).remove();
          // then we are saving the original authors array
          await foundAuthor.save();
          // then we are finding the new author and adding the article
          // to the newAuthor's array
          const newAuthor = await Author.findById(req.body.authorId);
          newAuthor.articles.push(updatedArticle);
          // now we are saving the new authors array
          // Think about this Are both of these actions dependent on each
          // other? Seriously sit and stare at your wall and think about this!

          // If they are could you refactor this using Promise.all()
          const savedNewAuthor = await newAuthor.save();
          // if you want to go back to the show page you can do something like this
          res.redirect('/articles/' + req.params.id)

    } else {
          // So if the author wasn't changes, we are removing the
          // original article
          foundAuthor.articles.id(req.params.id).remove();
          // then pushing in the new one
          foundAuthor.articles.push(updatedArticle);
          // save the updated author to database
          await foundAuthor.save()
          res.redirect('/articles/' + req.params.id);
    }
  } catch (err){
    res.send(err);
  }
});





module.exports = router;
