const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const port = 8000;

app.use(express.static(path.join(__dirname + '/public')));

app.listen(port, () => {console.log(`Server is listening at http://localhost:${port}`)});


// Collections
app.get('/:restaurant_id/collections', (req, res) => {
  axios.get(`http://13.57.246.172/${req.params.restaurant_id}/collections`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});

app.get('/:collection_id/restaurants', (req, res) => {
  axios.get(`http://13.57.246.172/${req.params.collection_id}/restaurants`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});

// Reviews
app.get('/api/restaurantreviews', (req, res) => {
  axios.get('http://54.183.220.133:3001/api/restaurants')
  .then(results => res.status(200).send(results.data))
  .catch(err => console.log('Logging error => ', err));
});

app.get('/api/users', (req, res) => {
  axios.get('http://54.183.220.133:3001/api/users')
  .then(results => res.status(200).send(results.data))
  .catch(err => console.log('Logging error => ', err));
});

app.get('/api/posts', (req, res) => {
  axios.get('http://54.183.220.133:3001/api/posts')
  .then(results => res.status(200).send(results.data))
  .catch(err => console.log('Logging error => ', err));
});

app.get('/api/postImages', (req, res) => {
  axios.get('http://54.183.220.133:3001/api/postImages')
  .then(results => res.status(200).send(results.data))
  .catch(err => console.log('Logging error => ', err));
})

app.get('/api/:restaurant_id/reviews', (req, res) => {
  axios.get(`http://54.183.220.133:3001/api/${req.params.restaurant_id}/reviews`)
  .then(results => res.status(200).send(results.data))
  .catch(err => console.log('Logging error => ', err));
});

// Gallery
app.get('/photos', (req, res) => {
  axios.get(' http://18.218.219.141:3001/photos')
  .then(results => res.status(200).send(results.data))
  .catch(err => console.log('Logging error => ', err));
});

app.get('/restaurants/:restaurant_id/photos', (req, res) => {
  axios.get(` http://18.218.219.141:3001/restaurants/${req.params.restaurant_id}/photos`)
  .then(results => res.status(200).send(results.data))
  .catch(err => console.log('Logging error => ', err));
});

app.get('/restaurants/:restaurant_id', (req, res) => {
  axios.get(` http://18.218.219.141:3001/restaurants/${req.params.restaurant_id}`)
  .then(results => res.status(200).send(results.data))
  .catch(err => console.log('Logging error => ', err));
});