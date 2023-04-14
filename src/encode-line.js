const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = [];
  let length = str.length;

  for (let i = 0; i < length; i++) {
    let count = 1;

    while (i < length - 1 && str[i] === str[i + 1]) {
        count++;
        i++;
    }

    count > 1
      ? encoded.push(`${count}${str[i]}`)
      : encoded.push(`${str[i]}`);
  }

  return encoded.join('');
}

// console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
