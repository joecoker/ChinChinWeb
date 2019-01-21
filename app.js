const express = require('express');
const recipes = require('./recipes');
const Cocktail = require('./lib/cocktail');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', async function(req, res) {
  res.render('index.ejs', {cocktailList: await Cocktail.listAll()});
});

app.get('/cocktail/:cocktailName', async function(req, res) {
  let cocktailName = req.params.cocktailName;
  res.render('cocktail-details.ejs', {
    cocktailDetails: await Cocktail.viewDetails(cocktailName)
  });
});

app.listen(PORT);
console.log(`Acebook listening on ${PORT}`);

module.exports = app;
