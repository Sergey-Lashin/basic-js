const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const arrayOfN = n.toString().split("");
  let maxCount = -Infinity;
  for (let i = 0; i < arrayOfN.length; i++) {
    const modifiedArray = arrayOfN.slice();
    modifiedArray.splice(i, 1);
    const newNumber = +modifiedArray.join("");
    if (newNumber > maxCount) {
      maxCount = newNumber;
    }
  } return maxCount;
}

module.exports = {
  deleteDigit
};
