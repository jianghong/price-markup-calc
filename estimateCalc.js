var utils = require('./utils');
var Markups = require('./constants').Markups;

function calculateFlatMarkup(cents) {
  return cents + (cents * Markups.FLAT_BASE);
}

function calculatePersonsMarkup(cents, numPeople) {
  return cents * (numPeople * Markups.PERSONS);
}

function calculateMaterialsMarkup(cents, materials) {
  var markups = materials.map(function(material) {
    return Markups.MATERIALS[material] || 0;
  });

  return markups.reduce(function(prev, curr) {
    return prev + (cents * curr);
  }, 0);
}

/*
 * Return an estimate price based on parameters.
 *
 * Required param:
 *   basePrice {Number}
 *
 * Optional params:
 *   numPeople {Number}
 *   materials {Array}
 *
 * @param {Object} params
 * @return {Number} estimate
 */
function estimateCalc(params) {
  // Thankfully, this sort of param checking is easily handled with ES6 :)
  var basePrice = params.basePrice;
  var numPeople = params.numPeople || 0;
  var materials = params.materials || [];

  if (!basePrice || !utils.isNumber(basePrice)) {
    throw new Error('Invalid param basePrice: should be a Number');
  }

  var cents = utils.toCents(basePrice);
  var withFlatMarkup = calculateFlatMarkup(cents);
  var estimate = withFlatMarkup +
                 calculatePersonsMarkup(withFlatMarkup, numPeople) +
                 calculateMaterialsMarkup(withFlatMarkup, materials);

  return utils.toDollars(estimate);
}

module.exports = estimateCalc;
