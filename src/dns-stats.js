const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};

  const resultDns = {};

  domains.forEach((domain) => {
    let dns = '';

    domain
      .split('.')
      .reverse()
      .forEach((el) => {
        dns += `.${el}`;
        if (resultDns[dns]) {
          resultDns[dns] += 1;
        } else {
          resultDns[dns] = 1;
        }
      });
  });

  return resultDns;
}

const domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]

console.log(getDNSStats(domains));

module.exports = {
  getDNSStats
};
