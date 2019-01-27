
"use strict";

var cart = [
  {
    name: 'Jacket',
    price: 300,
    quantity: 2
  },
  {
    name: 'T-shirt',
    price: 150,
    quantity: 1
  },
  {
    name: 'Skirt',
    price: 400,
    quantity: 1
  }
];

function countBasketPrice(inputCart) {
  var cartSummary = 0;
  for (var i = 0; i < inputCart.length; i++) {
    cartSummary += inputCart[i].price;
  }

  return cartSummary;
}

var summary = 0.0;

summary = countBasketPrice(cart);

console.log('Sum of all product cart is: ' + summary + ' rubbles.');
