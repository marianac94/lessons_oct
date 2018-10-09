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
const bodyParser = require('body-parser');


// We are requiring our model
const Fruits = require('./models/fruits');


// setting up middleWare - is the functions that happen sychronously in the request from the client on the server
app.use(bodyParser.urlencoded({extended: false}));


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


// making a new page route (new.ejs) it has to be above index otherwise its not going to read it (the file)
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
});


// whenever used the req.body you need to install (npm install body-parser) in the terminal for the function to work
app.post('/fruits', (req, res) => {
  console.log(req.body, ' this is where our info from the fruit live');

// redirect the information that uploads to the array of fruits
if (req.body.readyToEat === 'on'){
  req.body.readyToEat = true;
} else {
  req.body.readyToEat = false;
}

Fruits.push(req.body);
  res.redirect('/fruits');
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
});
