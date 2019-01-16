/**
 * 8. С помощью рекурсии организовать функцию возведения числа в степень.
 * Формат: function power(val, pow), где val — заданное число, pow –— степень.
 */

'use strict';

/**
 * power() returns power of a value
 */
function power(val, pow) {
  if (pow === 0) {
    return 1;
  }

  return pow === 1 ? val : val * power(val, pow - 1);
}

/**
 * Some functions testers
 */

console.log('2 ^ 0 = ' + power(2, 0));
console.log('2 ^ 1 = ' + power(2, 1));
console.log('2 ^ 2 = ' + power(2, 2));
console.log('2 ^ 3 = ' + power(2, 3));
console.log('2 ^ 4 = ' + power(2, 4));

