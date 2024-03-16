export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

/**
 * Reverse a string
 * @constructor
 * @param {string} str - String to be reversed
 */

export function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i > -1; i--) {
    result += str[i];
  }
  return result;
}

export class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

/**
 * Cypher a string using Caesar Shift
 * @constructor
 * @param {string} str - String to be cyphered
 * @param {Number} shift - Cypher shifting number
 */
export function shiftCypher(str, shift) {
  const loweredStr = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let cyphered = {};
  let result = "";

  for (let i = 0; i < alphabet.length; i++) {
    if (i + shift >= alphabet.length) {
      cyphered[alphabet[i]] = alphabet[i + shift - alphabet.length];
    } else {
      cyphered[alphabet[i]] = alphabet[i + shift];
    }
  }

  for (let i = 0; i < loweredStr.length; i++) {
    if (loweredStr[i].match(/^[;?.,@#$%^&*() \'\"]/)) {
      result += loweredStr[i];
    } else {
      result += cyphered[loweredStr[i]];
    }
  }

  return result;
}

/**
 * Analyzes and array and returns the following:
 * average, min, max, and length
 * @constructor
 * @param {Int32Array} arr - Array of numbers to analyze
 */
export function analyzeArray(arr) {
  let result = {};

  result.average =
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    arr.length;
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  result.length = arr.length;

  return result;
}
