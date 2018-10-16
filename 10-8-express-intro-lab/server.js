const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Its working just fine!');
});

app.get('/greetings', (req, res) => {
  res.send('Hello, stranger!')
});


// Your app should have a route of '/greeting/' and it should send a generic greeting to the screen like "Hello, stranger". Your app should have a route of '/greeting/:name' and it should expect 1 param which takes in a person's name. When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!"
app.get('/greetings/:name', (req, res) => {
  res.send('Wow! Hello there, ' + req.params.name);
});


// Your app should have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage. When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20' should display 20 on the page).
app.get('/tip/:total/:tipPercentage', (req, res) => {
  res.send(req.params.tip )
})


// Create a route of '/magic' that should expect a phrase in the URL that ask the Magic 8 ball a question. So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') they should see returned to them their question AND a random Magic 8 ball response (see the array below) on the screen.



app.listen(3000, (req, res) => {
  console.log('Server is working just fine');
});
