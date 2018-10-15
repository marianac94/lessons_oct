const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('page works just fine!');
})


app.listen(3000, (req, res) => {
  console.log('server is listening!');
})
