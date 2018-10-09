const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Is it working?')
});

const superheroes = ['batman', 'superman', 'hulk'];

app.get('/superheroes', (req, res) => {
  res.send(superheroes)
  // console.log(superheroes);
});

app.get('/superheroes/:index', (req, res) => {
  res.send(superheroes[req.params.index])
})


app.listen(3000, (req, res) => {
  console.log('Here to save the day...');
});
