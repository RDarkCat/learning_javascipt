/**
 * 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

var i = 0;

function checkPrime(number) {
  if (number == 2) {
    return true;
  } else if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

while (i < 100) {
  if (checkPrime(i)) {
    console.log(i);
  }
  i++;
}
