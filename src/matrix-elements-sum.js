const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2], [0]
 *  [0, 5, 0, 0], [0, 2, 3]    [0]
 *  [2, 0, 3, 3]  [1]          [0, 2, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let zeroIndexes = [...matrix];
  let sum = 0;

  // for (let row of matrix) {
  //   zeroIndexes.push([...row]
  //     .reduce((a, e, i) => e === 0 ? [...a, i] : a, []));
  // }

  zeroIndexes = zeroIndexes.map(row =>
    row.map(e => e === 0 ? 1 : 0));

  let filtered = [...matrix].map((row, idx) =>
    row.map((el, i) => idx > 0 ? zeroIndexes[idx - 1][i] === 1 ? '' : el : el)
    .filter(e => typeof e === 'number')
    .reduce((a, e) => a += e, 0))
    .reduce((sum, el) => sum += el, 0);


  return filtered;

}

// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
// ]

// console.log(getMatrixElementsSum(matrix));

module.exports = {
  getMatrixElementsSum
};
