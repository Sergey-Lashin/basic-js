const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
    return this;
  },
  addLink( value ) {
    this.chain.push(`( ${value !== undefined ? value : ''} )`);
    return this;
  },
  removeLink( position ) {
    if (typeof position !== "number" ||
    position < 1 || position > this.chain.length ||
    !Number.isInteger(position)) {
      this.chain = [];
      throw new Error ("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
