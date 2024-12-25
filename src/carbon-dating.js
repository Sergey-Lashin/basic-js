const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  if (typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  const TOTAL_ACTIVITY = parseFloat(sampleActivity);
    if (TOTAL_ACTIVITY <= 0 || TOTAL_ACTIVITY > MODERN_ACTIVITY) {
      return false;
    }
  const K = Math.LN2 / HALF_LIFE_PERIOD;
  const AGE = Math.log(MODERN_ACTIVITY / TOTAL_ACTIVITY) / K;
  return Math.ceil(AGE);
}

module.exports = {
  dateSample
};
