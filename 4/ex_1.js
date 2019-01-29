/**
 * 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
 * надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
 * десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
 * Если число превышает 999, необходимо выдать соответствующее сообщение с помощью 
 * console.log и вернуть пустой объект.
 */

"use strict";

function getHundreds(number) {
  return (number - (number % 100)) / 100;
}

function getDozens(number) {
  return ((number % 100) - (number % 10)) / 10;
}

function getUnits(number) {
  return number % 10;
}

function numberToSeparateDigits(number) {
  if (number > 999) {
    console.log('The number is over than 999');
    return {};
  }

  return {
    hundreds: getHundreds(number),
    dosens: getDozens(number),
    units: getUnits(number)
  };
}

console.log('342 = ' + JSON.stringify(numberToSeparateDigits(342), 0, 2));
console.log('721 = ' + JSON.stringify(numberToSeparateDigits(721), 0, 2));
