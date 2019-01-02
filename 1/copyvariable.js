/*
 * 2. Объявить две переменные: admin и name. Записать в name строку "Василий"; 
 * Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»).
 */

'use strict';

var admin = null;
var userName = null;

userName = 'Василий';

admin = userName;

console.log(`В переменной admin содержится значение: ${admin}`);
