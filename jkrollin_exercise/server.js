const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('We be rollinnnnn');
})

const jkrollin = ['Mariana', 'Jawad', 'Alex', 'Julian', 'Mirza', 'Stephen', 'Christine', 'Ben', 'Sha'];

app.get('/jkrollin', (req, res) => {
  res.send(jkrollin)
})

app.get('/jkrollin/:index', (req, res) => {
  console.log(req.params);
  res.send(jkrollin[req.params.index])
})


app.listen(3000, (req, res) => {
  console.log('This app is alive');
})
