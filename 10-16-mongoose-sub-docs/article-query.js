// We don't have to save this to a variable, because we
// are not doing anything with it
// this file will just run, and connect to the MongoDB for us
require('./db');

// Requiring our Model
const Article = require('./article');
const Author  = require('./authors');

// created an author, in instance of our Model aka the document
const jimbo = new Author({name: 'Jimbo'});
console.log(jimbo)
Author.findById(req.params.id, (err, foundAuthor) => {
  foundAuthor.articles.push(article1)
  foundAuthor.save()
})

// created An Article
const article1 = new Article({title: 'Learning Mando', author: jimbo.name});


jimbo.articles.push(article1);

// save both models, this actually puts in the collection
// jimbo.save();
// article1.save();


// finding a subdocument
// console.log(jimbo.articles.id(article1.id));

// update these on the fly
// PUT ROUTE
jimbo.articles.id(article1.id).title = 'Some other other Title';
jimbo.save();


jimbo.articles.id(article1.id).remove();
jimbo.save()

// Saving the parent will remove the subdocument from the parent,
// It does not delete the instance in the Article Collection

const subdoc_article = jimbo.articles.create({title: 'Machine', author: jimbo.name});
jimbo.articles.push(subdoc_article);

jimbo.save();

Article.create(subdoc_article, (err, createdArticle) => {
  console.log(createdArticle);
})






// When we add or edit an article to the Author Schema as
// sub document we are creating its own instance of the document
// In other words we don't change the original Article in the Article
//collection

console.log(jimbo.articles.id(article1.id));


// Article.find({}, (err, allArticles) => {
//   console.log('===============================')
//   console.log(allArticles)
//   console.log('===============================')
// })





// Were going to make a request to create something in
// mongodb

// Post Route Article
// Article.create({title: 'Old man in the sea', author: 'Hems'}, (err, createdArticle) => {
//   if(err){
//     console.log(err);
//   } else {
//     const hems = new Author({name: createdArticle.author});
//     hems.push(createdArticle)
//     hems.save()
//     console.log(createdArticle);
//   }
// });


// Read date from mongoDB using our Model

// Article.find({author: 'Hems'}, (err, foundArticles) => {
//   // remember arguements can be called anythig
//   if(err){
//     console.log(err);
//   } else {
//     // returns any matches, as an array
//     console.log(foundArticles);
//   }
// })

// Update Infromation

// The third argument is an options object, which is saying,
// send us back the updated document
// argument one = The document we are changing
// argument two = What we are updating too

// Article.updateOne({author: 'Hems'}, {$set: {author: 'hemingway'}}, {new: true}, (err, updatedArticle) =>  {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(updatedArticle);
//   }
// })


// Article.deleteOne({author: 'hemingway'}, (err, response) => {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });
