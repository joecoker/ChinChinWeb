const express = require('express');
const recipes = require('./recipes');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', function(req, res) {
  res.send(recipes);
});

app.listen(PORT);
console.log(`Acebook listening on ${PORT}`);

module.exports = app;
