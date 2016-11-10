var estimateCalc = require('../estimateCalc');
var Materials = require('../constants').Materials;

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
    var params = {
      basePrice: 20,
    };
    var sut = estimateCalc(params);

    expect(sut).toEqual(21);
  });

  describe('when applying markup for people', function() {
    it('should apply no markup for 0 people', function() {
      var params = {
        basePrice: 20,
        numPeople: 0,
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(21);
    });
    it('should apply the correct markup for one person', function() {
      var params = {
        basePrice: 20,
        numPeople: 1,
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(21.25);
    });
    it('should apply the correct markup for 100 people', function() {
      var params = {
        basePrice: 20,
        numPeople: 100,
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(46.2);
    });
  });

  describe('when applying markup for materials', function() {
    it('should apply the correct markup for drugs', function() {
      var params = {
        basePrice: 20,
        materials: [Materials.DRUGS]
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(22.57);
    });
    it('should apply the correct markup for food', function() {
      var params = {
        basePrice: 20,
        materials: [Materials.FOOD]
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(23.73);
    });
    it('should apply the correct markup for electronics', function() {
      var params = {
        basePrice: 20,
        materials: [Materials.ELECTRONICS]
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(21.42);
    });
    it('should apply multiple markups for multiple materials', function() {
      var params = {
        basePrice: 20,
        materials: [Materials.ELECTRONICS, Materials.FOOD, 'foobar', Materials.DRUGS],
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(25.73);
    });
    it('should not markup for materials not needing a markup', function() {
      var params = {
        basePrice: 20,
        materials: ['foobar']
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(21);
    });
  });

  describe('when applying markup for people and materials', function() {
    it('should apply the correct markup', function() {
      var params = {
        basePrice: 1299.99,
        numPeople: 3,
        materials: [Materials.FOOD]
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(1591.58);
    });
    it('should pass example 2', function() {
      var params = {
        basePrice: 5432.00,
        numPeople: 1,
        materials: [Materials.DRUGS]
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(6199.81);
    });
    it('should pass example 3', function() {
      var params = {
        basePrice: 12456.95,
        numPeople: 4,
        materials: ['books']
      };
      var sut = estimateCalc(params);

      expect(sut).toEqual(13707.63);
    });
  });
});
