require('./db');
const Company = require('./company');


// Creating new company (Apple)
Company.create({
  name: 'Apple',
  founded: 'April 1, 1976',
  employees: 2,
  active: false,
  products: ['computers'],
  name: 'Steve Jobs',
  age: 21
}, (err, createdAppleCompany) => {
  if(err) {
    console.log(err);
} else {
    console.log(createdAppleCompany);
  }
});


// Creating new company (Google)
Company.create({
  name: 'Google',
  founded: 'September 4, 1998',
  employees: 57100,
  active: true,
  products: ['search','maps','email'],
  name: 'Larry Page',
  age: 43
}, (err, createdGoogleCompany) => {
  if(err) {
    console.log(err);
} else {
    console.log(createdGoogleCompany);
  }
});


// Update company (Apple)
Company.updateOne({
  name: 'Apple',
  founded: 'April 1, 1976',
  employees: 2,
  active: false,
  products: ['computers'],
  name: 'Steve Jobs',
  age: 21
}, {$set:
{
  name: 'Apple Inc',
  founded: 'April 1, 1976',
  employees: 66000,
  active: true,
  products: ['computers', 'phones', 'tablets'],
  name: 'Time Cook', age: 56
}}, {
  new: true
}, (err, updatedArticle) => {
  if(err) {
    console.log(err);
} else {
    console.log(updatedArticle);
  }
});


// Find company (Apple)
Company.find({
  employees: 66000
}, (err, foundAppleCompany) => {
  if(err) {
    console.log(err);
} else {
    console.log(foundAppleCompany);
  }
});


// Find company (Google)
Company.find({
  employees: 57100
}, (err, foundGoogleCompany) => {
  if(err) {
    console.log(err);
} else {
    console.log(foundGoogleCompany);
  }
});


// Delete company (Apple)
Company.deleteOne({
  name: 'Apple Inc',
  founded: 'April 1, 1976',
  employees: 66000,
  active: true,
  products: ['computers', 'phones', 'tablets'],
  name: 'Time Cook', age: 56
}, (err, responseApple) => {
  if(err) {
    console.log(err);
  } else {
    console.log(responseApple);
  }
});


// Delete company (Google)
Company.deleteOne({
  name: 'Google',
  founded: 'September 4, 1998',
  employees: 57100,
  active: true,
  products: ['search','maps','email'],
  name: 'Larry Page', age: 43
}, (err, responseGoogle) => {
  if(err) {
    console.log(err);
  } else {
    console.log(responseGoogle);
  }
});
