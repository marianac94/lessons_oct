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
// create our application
const app   = express();
// app is an object which has methods for listin and responding to requests.


// express is a function that when call, produces an object that allows us to create a server. Remember, express is a framework that has an inherit architecture.

// set up a get request listener
// just the slash is localhost:3000
// aka the home page or first route
app.get('/', (request, response) => { //<- (req, res) in short
  response.send('This is the serverver responding, to the request')
});




// keep the port between 3000 and 9000
app.listen(3000, () => {
  console.log('server is listening, on port 3000');
})
