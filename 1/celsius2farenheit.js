/**
 * 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
 * Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.
 */

'use strict';

var celsius = 0.0;
var farenheit = 0.0;

celsius = +prompt('Введите градусы Цельсия:');

if (isNaN(celsius)) {
    alert('Введите число.');
} else {
    farenheit = (9 / 5) * celsius + 32;

    alert('Температура ' + celsius + ' по Цельсию в Фаренгейтах будет равна ' + farenheit);

    // debug console
    console.log('Значение переменной farenheit: ' + farenheit);
}
