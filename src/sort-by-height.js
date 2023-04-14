const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let length = arr.length;
  let negOnesIndexes = [...arr]
    .reduce((a, e, i) => (e === -1) ? [...a, i] : a, []);

  let sorted = [...arr]
    .filter(el => el !== -1)
    .sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < length; i++) {
    if (negOnesIndexes.includes(i)) {
      result.push(-1);
      continue;
    }

    result.push(sorted.shift());
  }

  return result;
}

// const arr = [-1, 150, 190, 170, -1, -1, 160, 180];
// console.log(sortByHeight(arr));

module.exports = {
  sortByHeight
};
