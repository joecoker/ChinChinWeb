const express = require('express');
const recipes = require('./recipes');
const Cocktail = require('./lib/cocktail');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', async function(req, res) {
  res.render('index.ejs', {cocktailList: await Cocktail.listAll()});
});

app.listen(PORT);
console.log(`Acebook listening on ${PORT}`);

module.exports = app;
