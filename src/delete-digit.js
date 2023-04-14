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
function deleteDigit(n) {
  return [...String(n)]
    .reduce((max, el, idx, arr) => {
      let num = [...arr];
      num.splice(idx, 1);
      num = +num.join('');

      return max = Math.max(max, num);
    }, 0);
}

// console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};
