const recipes = require('../recipes');

class Cocktail {
  static async listAll() {
    let list = [];
    recipes.forEach(function(recipe) {
      list.push(recipe.name)
    });
    return list;
  }
}

module.exports = Cocktail;
