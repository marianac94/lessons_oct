const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('its working');
});

app.get('/greetings', (req, res) => {
  res.send('Hello, stranger!')
});

app.get('/greetings/:name', (req, res) => {
  res.send('Wow! Hello there, ' + req.params.name);
});




app.listen(3000, (req, res) => {
  console.log('Server is working just fine');
});
