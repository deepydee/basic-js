const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    this.n = this.ALPHABET.length;
  }

  /**
   *
   * @param {string} message string to encode
   * @param {string} key keyword
   */
  encrypt(message, key) {
    if (!message || ! key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encoded = '';
    let newKey = this.makeKeyEqualToString(message, key);

    for (let i = 0; i < message.length; i++) {
      if (!this.ALPHABET.includes(message[i])) {
        encoded += message[i];
      } else {
        let letterIndex =
        ( this.ALPHABET.indexOf(message[i]) +
        this.ALPHABET.indexOf(newKey[i]) ) % this.n;

        let letter = this.ALPHABET[letterIndex];

        encoded += letter
      }
    }

    return this.direct
      ? encoded
      : [...encoded].reverse().join('');
  }

  /**
   *
   * @param {string} encryptedMessage string to decode
   * @param {string} key keyword
   */
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || ! key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decoded = '';
    let newKey = this.makeKeyEqualToString(encryptedMessage, key);

    for (let i = 0; i < encryptedMessage.length; i++) {

      if (!this.ALPHABET.includes(encryptedMessage[i])) {
        decoded += encryptedMessage[i];
      } else {
        let letterIndex =
        ( this.ALPHABET.indexOf(encryptedMessage[i]) -
        this.ALPHABET.indexOf(newKey[i]) ) % this.n;

        if (letterIndex < 0) {
          letterIndex += this.n;
        }

        let letter = this.ALPHABET[letterIndex];

        decoded += letter
      }
    }

    return this.direct
      ? decoded
      : [...decoded].reverse().join('');
  }

  /**
   *
   * @param {string} string
   * @param {string} key
   */
  makeKeyEqualToString(string, key) {
    let keyLength = key.length;
    let newKey = '';

    for (let i = 0, cnt = 0; i < string.length; i++) {
      if (cnt === keyLength) {
        cnt = 0;
      }

      if (!this.ALPHABET.includes(string[i])) {
        newKey += string[i];
        continue;
      }

      newKey += key[cnt];
      cnt++
    }

    return newKey;
  }
}

const directMachine = new VigenereCipheringMachine();

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));


module.exports = {
  VigenereCipheringMachine
};
