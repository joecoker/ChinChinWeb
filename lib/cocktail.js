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

  static async findByIngredient(ingredientName) {
    let comparator = new RegExp(ingredientName, "i");
    let filteredList = recipes.filter(
      recipe => !!recipe.ingredients.find(
        component => (
          !!component.ingredient && component.ingredient.match(comparator)
        )
      )
    );
    return filteredList.map(function(recipe) { return recipe.name });
  }

}

module.exports = Cocktail;
