// Steps=
// When staring a new application -> npm init (creates the package.json)
// After we created, you install (installs the express module)-> npm install express
// Create a touch "server.js" (inside of the directory)
// atom .
// Change the "main" to "server.js" instead of "index.js"
// At the end click: node server.js (for the server to run) "http://localhost:3000/"
// Then create variable that require the express module (as in line 8)
// Run in server to see it works (line 27)
// Then app.get for the server to listen the request and send to the client
const express = require('express');
const app   = express();


// We are requiring our model
const Fruits = require('./models/fruits');


app.get('/', (req, res) => {
  res.send('This server is responding to the request');
});


// MVC - Model View Controller (Architecture pattern)
  // Model is a representation of our data
    // the file of models are the data of all the page

// The view - what that data looks like in essence its what we are sending to the client
// Controller is a way to organize modularize out code, the glue between the model and the view it will look like our roots


// Index route -shows all the fruits
app.get('/fruits', (req, res) => {
  res.send(Fruits);
});


// url params, is extra stuff we can put in our URL for our server to dynamically read.
// url params - is a variable that we can capture in the URL
app.get('/fruits/:index', (req, res) => {
  console.log(req.params);


// The property name becomes a variable within the ejs page
  res.render('show.ejs', {
    fruit: Fruits[req.params.index]
  });
});


// keep the port between 3000 and 9000 (no less, no more)
app.listen(3000, () => {
  console.log('Server is listening, on port 3000');
})
