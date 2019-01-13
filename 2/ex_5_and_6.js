'use strict';

/**
 * 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
 * Обязательно использовать оператор return.
 */

function addition(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function substract(a, b) {
  return a - b;
}

function division(a, b) {
  if (b === 0) {
    console.log('Division by zero');
    return null;
  } else {
    return a / b;
  }
}

/**
 * 6. Реализовать функцию с тремя параметрами: 
 * function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, 
 * operation — строка с названием операции. В зависимости от переданного значения
 * выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть
 * полученное значение (применить switch).
 */

function mathOperation(arg1, arg2, operation) {
  var result = null;
    
  switch (operation) {
    case 'addition':
      result = addition(arg1, arg2);
      break;
    case 'multiply':
      result = multiply(arg1, arg2);
      break;
    case 'division':
      result = division(arg1, arg2);
      break;
    case 'substract':
      result = substract(arg1, arg2);
      break;
    default:
      result = 'undefined';
  }
  
  return result;
}

console.log('35 - 30 = ' + mathOperation(35, 30, 'substract'));
console.log('undefined ' + mathOperation(3, 12, 'test'));
console.log('34 / 2 = ' + mathOperation(34, 2, 'division'));
console.log('4 + 9 = ' + mathOperation(4, 9, 'addition'));
console.log('5 * 9 = ' + mathOperation(5, 9, 'multiply'));
console.log('5 / 0 = ' + mathOperation(5, 0, 'division'));

