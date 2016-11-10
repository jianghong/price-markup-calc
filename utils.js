/*
 * Convert a number representing an dollars of money to a number representing cents.
 * @param {Number} dollars
 * @return {Number} cents
 */
function toCents(dollars) {
  return Math.round(dollars * 100);
}

/*
 * Convert a number representing cents of money to a number representing dollars.
 * @param {Number} cents
 * @return {Number} dollars
 */
function toDollars(cents) {
  return cents / 100;
}

/*
 * Check if n is a Number.
 * @param {Number} n
 * @return {Boolean} isNumber
 */
function isNumber(n) {
  return typeof n === 'number';
}

module.exports = {
  toCents: toCents,
  toDollars: toDollars,
  isNumber: isNumber,
}
