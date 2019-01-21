const recipes = require('../recipes');

class Cocktail {
  static async listAll() {
    let list = [];
    recipes.forEach(function(recipe) {
      list.push(recipe.name)
    });
    return list;
  }

  static async viewDetails(cocktailName) {
    return recipes.find(recipe => recipe.name === cocktailName);
  }

}

module.exports = Cocktail;
