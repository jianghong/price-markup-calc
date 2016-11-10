var estimateCalc = require('../estimateCalc');

describe('estimateCalc', function() {
  describe('should check for basePrice', function() {
    it('should throw an error if basePrice is not a Number', function() {
      var params = {
        basePrice: '45',
      };

      expect(function() {estimateCalc(params)}).toThrowError();
    });
    it('should throw an error if basePrice is not specified', function() {
      var params = {};

      expect(function() {estimateCalc(params)}).toThrowError();
    });
  });

  it('should apply the flat base markup', function() {

  });

  describe('when applying markup for people', function() {
    it('should apply no markup for 0 people', function() {

    });
    it('should apply no markup if numPersons is not specified', function() {

    });
    it('should apply the correct markup for one person', function() {

    });
    it('should apply the correct markup for 3 people', function() {

    });
  });

  describe('when applying markup for materials', function() {
    it('should apply no markup if no materials are specified', function() {

    });
    it('should the correct markup for drugs', function() {

    });
    it('should the correct markup for food', function() {

    });
    it('should the correct markup for electronics', function() {

    });
    it('should no markup for materials not needing a markup', function() {

    });
  });

  describe('when applying markup for people and materials', function() {
    it('should apply the correct markup', function() {

    });
  });
});
