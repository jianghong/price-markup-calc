var utils = require('../utils');

describe('utils', function() {
  describe('toCents', function() {
    it('should convert zero dollars', function() {
      var sut = utils.toCents(0);

      expect(sut).toEqual(0);
    });
    it('should convert dollars without decimals', function() {
      var sut = utils.toCents(50);

      expect(sut).toEqual(5000);
    });
    it('should convert dollars with decimals', function() {
      var sut = utils.toCents(12.34);

      expect(sut).toEqual(1234);
    });
    it('should round and convert dollars with more than two decimal places', function() {
      var sut = utils.toCents(12.3456);

      expect(sut).toEqual(1235)
    });
  });
  describe('toDollars', function() {
    it('should convert zero cents', function() {
      var sut = utils.toDollars(0);

      expect(sut).toEqual(0);
    });
    it('should convert nonzero cents', function() {
      var sut = utils.toDollars(3451);

      expect(sut).toEqual(34.51)
    });
    it('should round to two decimal places', function() {
      var sut = utils.toDollars(3451.634);

      expect(sut).toEqual(34.52)
    });
  });
  describe('isNumber', function() {
    it('should return true for a number', function() {
      var sut = utils.isNumber(45);

      expect(sut).toEqual(true);
    });
    it('should return false for a non number', function() {
      var sut = utils.isNumber('45');

      expect(sut).toEqual(false);
    });
  });
});
