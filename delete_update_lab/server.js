const express = require('express');
const app = express();
const People = require('./models/people');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
  res.send('yepppp, workin just fine!')
})

app.get('/people', (req, res) => {
  res.render('index.ejs', {
    classroom: People
  });
});

app.delete('/people/:index', (req, res) => {
  People.splice(req.params.index, 1);
  res.redirect('/people')
});






app.listen(3000, (req, res) => {
  console.log('its alive!!!');
})
