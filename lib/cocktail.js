const recipes = require('../recipes');

class Cocktail {
  static async listAll() {
    let list = [];
    recipes.forEach(function(recipe) {
      let simplifiedIngredients = [];
      recipe.ingredients.forEach(function(member) {
        simplifiedIngredients.push(member.ingredient);
      });
      let recipeDetails = {
        name: recipe.name,
        ingredients: simplifiedIngredients
      };
      list.push(recipeDetails);
    });
    return list;
  }
}

module.exports = Cocktail;
