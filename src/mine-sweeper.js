const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cols
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cols. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = matrix.map(row => row.map(el => 0));

  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    for (let colIdx = 0; colIdx < cols; colIdx++) {

      if (matrix[rowIdx][colIdx]) {
        for (let ri = rowIdx - 1; ri <= rowIdx + 1; ri++) {
          if (ri > -1) {
            for (let ci = colIdx - 1; ci <= colIdx + 1; ci++) {
              if (ci > -1 && !(ri === rowIdx && ci === colIdx)) {
                resultMatrix[ri][ci]++;
              }
            }
          }
        }
      }
    }
  }

  return resultMatrix;
}

// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ];

/*(i) 0 1 2 (j)
 * 0 [1 2 1]
 * 1 [2 1 1]
 * 2 [1 1 1]
 */

// console.log(minesweeper(matrix));

module.exports = {
  minesweeper
};
