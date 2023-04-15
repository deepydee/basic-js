const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === undefined) return false;

  str = String(str);

  if (typeof str === 'object') {
    str = str[Symbol.toPrimitive](hint);
  }

  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  if (!repeatTimes) return str + addition;

  if (addition !== undefined) {
    if (typeof addition === 'object' && addition !== null &&  Object.getOwnPropertySymbols(addition).length !== 0) {
      addition = addition[Symbol.toPrimitive]('string');
    } else {
      addition = String(addition);
    }
  }

  separator = separator ?? '+';
  additionSeparator = additionSeparator ?? '|';

  let repeatedString = '';
  let addStr = '';

  for (let i = 0; i < repeatTimes; i++) {
    addStr = '';

    if (additionRepeatTimes) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        if (j === additionRepeatTimes - 1) {
          addStr += addition;
          break;
        }

        addStr += addition + additionSeparator;
      }
    } else if (addition) {
      addStr += addition;
    }

    if (i === repeatTimes - 1) {
      repeatedString += str + addStr;
      break;
    }

    repeatedString += str + addStr + separator;
  }

  return repeatedString;
}

const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};

console.log( repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }) );

module.exports = {
  repeater
};
