/**
 * 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
 * Затем написать скрипт, который работает по следующему принципу:
 * если a и b положительные, вывести их разность;
 * если а и b отрицательные, вывести их произведение;
 * если а и b разных знаков, вывести их сумму;
 * Ноль можно считать положительным числом.
 */

'use strict';

var a = -4;
var b = 6;

function mathCalculation(valueA, valueB){
  if (valueA >= 0 && valueB >= 0) {
    return valueA - valueB;
  } else if (valueA < 0 && valueB < 0) {
    return valueA * valueB;
  } else if ((valueA > 0 && valueB < 0) || (valueA < 0 && valueB > 0)) {
    return valueA + valueB;
  }
}

console.log(mathCalculation(a, b));
