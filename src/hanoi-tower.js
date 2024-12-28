const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( disksNumber, turnsSpeed ) {
  let movesProperty = {};
  const n = disksNumber;
  const movesNumber = (2 ** n) - 1;
  const oneMoveTime = (turnsSpeed / 60) / 60;
  const totalTime = Math.floor(movesNumber / oneMoveTime);
  movesProperty.turns = movesNumber;
  movesProperty.seconds = totalTime;
  return movesProperty;
}

module.exports = {
  calculateHanoi
};
