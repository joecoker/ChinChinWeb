const expect = require('chai').expect;
const Cocktail = require('../lib/cocktail');

describe('Cocktail', function() {

  describe('#listAll', function() {
    it('lists out cocktails names and ingredients', async function() {

      let cocktailList = await Cocktail.listAll();

      expect(cocktailList[0].name).equal("Vesper");
      expect(cocktailList[0].ingredients).to.include("Gin");
      expect(cocktailList[0].ingredients).to.include("Vodka");
      expect(cocktailList[0].ingredients).to.include("Lillet Blonde");

    })

  });



});
