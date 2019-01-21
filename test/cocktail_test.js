const expect = require('chai').expect;
const Cocktail = require('../lib/cocktail');

describe('Cocktail', function() {

  describe('#listAll', function() {

    it('lists out cocktails names', async function() {

      let cocktailList = await Cocktail.listAll();

      expect(cocktailList).to.include("Vesper");
      expect(cocktailList).to.include("Lemon Drop Martini");
      expect(cocktailList).to.include("Harvey Wallbanger");

    });
  });

  describe('#viewDetails', function() {

    it('returns the cocktails details', async function() {

      let recipe = await Cocktail.viewDetails("Vesper");

      expect(recipe.glass).equal("martini");
      expect(recipe.preparation).equal("Shake and strain into a chilled cocktail glass.")

    });
  });

    //
    // it('includes special ingredients', async function() {
    //
    //   let cocktailList = await Cocktail.listAll();
    //   let tuxedo = cocktailList.find(recipe => recipe.name === "Tuxedo");
    //
    //   expect(tuxedo.ingredients).to.include("1/2 bar spoon Maraschino");
    //   expect(tuxedo.ingredients).to.include("1/4 bar spoon Absinthe");
    //   expect(tuxedo.ingredients).to.include("3 dashes Orange Bitters");
    //
    // });
    //
    // it('attaches labels, if present, to ingredients', async function() {
    //
    //   let cocktailList = await Cocktail.listAll();
    //   let tuxedo = cocktailList.find(recipe => recipe.name === "Tuxedo");
    //
    //   expect(tuxedo.ingredients).to.include(["Gin", "Old Tom Gin"]);
    //   expect(tuxedo.ingredients).to.include(["Vermouth", "Dry vermouth"]);
    //
    // });

});
