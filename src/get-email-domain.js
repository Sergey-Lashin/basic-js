const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  const arrFromEmail = email.split("");
  const lastMailSymbol = arrFromEmail.lastIndexOf("@");
  return arrFromEmail.splice(lastMailSymbol + 1).join("");
}

module.exports = {
  getEmailDomain
};
