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
