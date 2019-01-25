/**
 * 3. Организовать такой массив для хранения товаров в корзине;
 * Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */

var cart = [['Jacket', 300], ['T-shirt', 150], ['Skirt', 400]]

function countBasketPrice(inputCart) {
  var cartSummary = 0;
  for (var i = 0; i < inputCart.length; i++) {
    cartSummary += inputCart[i][1];
  }

  return cartSummary;
}

console.log(countBasketPrice(cart));
