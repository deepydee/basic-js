const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {

  },
  addLink(value) {
    if (value === 'undefined') {
      this.chain.push('(  )');
      return this;
    }

    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~')
    this.chain = [];
    return res;
  }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));

module.exports = {
  chainMaker
};
