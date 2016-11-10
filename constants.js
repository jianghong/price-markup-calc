var Materials = Object.freeze({
  DRUGS: 'drugs',
  FOOD: 'food',
  ELECTRONICS: 'electronics',
});

var Markups = Object.freeze({
  FLAT_BASE: 0.05,
  PERSONS: 0.012,
  MATERIALS: {
    [Materials.DRUGS]: 0.075,
    [Materials.FOOD]: 0.13,
    [Materials.ELECTRONICS]: 0.02
  }
});

module.exports = {
  Markups: Markups,
  Materials: Materials,
}
