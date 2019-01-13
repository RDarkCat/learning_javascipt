/** 
 * 4. Присвоить переменной а значение в промежутке [0..15].
 * С помощью оператора switch организовать вывод чисел от a до 15.
 */

'use strict';

/**
 * Решение, что называется, в лоб
 */

var number = 7;

console.log('a = ' + number);

switch(number) {
  case 1:
    console.log('Numbers from ' + number + ' to 15 are 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
    break;
  case 2:
    console.log('Numbers from ' + number + ' to 15 are 2 3 4 5 6 7 8 9 10 11 12 13 14 15');
    break;
  case 3:
    console.log('Numbers from ' + number + ' to 15 are 3 4 5 6 7 8 9 10 11 12 13 14 15');
    break;
  case 4:
    console.log('Numbers from ' + number + ' to 15 are 4 5 6 7 8 9 10 11 12 13 14 15');
    break;
  case 5:
    console.log('Numbers from ' + number + ' to 15 are 5 6 7 8 9 10 11 12 13 14 15');
    break;
  case 6:
    console.log('Numbers from ' + number + ' to 15 are 6 7 8 9 10 11 12 13 14 15');
    break;
  case 7:
    console.log('Numbers from ' + number + ' to 15 are 7 8 9 10 11 12 13 14 15');
    break;
  case 8:
    console.log('Numbers from ' + number + ' to 15 are 8 9 10 11 12 13 14 15');
    break;
  case 9:
    console.log('Numbers from ' + number + ' to 15 are 9 10 11 12 13 14 15');
    break;
  case 10:
    console.log('Numbers from ' + number + ' to 15 are 10 11 12 13 14 15');
    break;
  case 11:
    console.log('Numbers from ' + number + ' to 15 are 11 12 13 14 15');
    break;
  case 12:
    console.log('Numbers from ' + number + ' to 15 are 12 13 14 15');
    break;
  case 13:
    console.log('Numbers from ' + number + ' to 15 are 13 14 15');
    break;
  case 14:
    console.log('Numbers from ' + number + ' to 15 are 14 15');
    break;
  case 15:
    console.log('Numbers from ' + number + ' to 15 are 15');
    break;
}
