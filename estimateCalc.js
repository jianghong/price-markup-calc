var utils = require('./utils');

function estimateCalc(params) {
  // Thankfully, this sort of param checking is easily handled with ES6 :)
  var basePrice = params.basePrice;
  var numPeople = params.numPeople || 0;
  var materials = params.materials || [];

  if (!basePrice || !utils.isNumber(basePrice)) {
    throw new Error('Invalid param basePrice: should be a Number');
  }
  return 0;
}

module.exports = estimateCalc;
