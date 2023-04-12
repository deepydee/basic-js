const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const actions = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  let transformed = [...arr];

  const doAction = (sequence, array, idxOfSeq) => {
    switch (sequence) {
      case ('--discard-next'):
        if (typeof array[idxOfSeq + 1] === 'undefined') {
          array.splice(idxOfSeq, 1);
          return;
        }

        if (array[idxOfSeq + 2] === '--double-prev' ||
            array[idxOfSeq + 2] === '--discard-prev'
        ) {
          array.splice(idxOfSeq, 3);
          break;
        }

        array.splice(idxOfSeq, 2);
        break;
      case ('--discard-prev'):
        if (typeof array[idxOfSeq - 1] === 'undefined') {
          array.splice(idxOfSeq, 1);

          return;
        }

        array.splice(idxOfSeq - 1, 2);
        break;
      case ('--double-next'):
        if (typeof array[idxOfSeq + 1] === 'undefined') {
          array.splice(idxOfSeq, 1);

          return;
        }

        array.splice(idxOfSeq, 1, array[idxOfSeq + 1]);
        break;
      case ('--double-prev'):
        if (typeof array[idxOfSeq - 1] === 'undefined') {
          array.splice(idxOfSeq, 1);

          return;
        }

        array.splice(idxOfSeq, 1, array[idxOfSeq - 1]);
        break;
    }
  }

  transformed.map((el, idx, array) => {
    return actions.includes(el)
      ? doAction(actions[actions.indexOf(el)], array, idx)
      : el;
  });

  return transformed;
}

// console.log(transform( [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};
