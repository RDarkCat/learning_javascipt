/**
 * Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
 * Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
 * Пустая корзина должна выводить строку «Корзина пуста»;
 * Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 */

var cart = [
  {
    name: 'New T-Shirt',
    brand: 'Very Famous brand',
    price: 100,
    quantity: 40,
    type: 'shirts',
    sex: 'unisex',
    sale: false,
    discount: 0
  },
  {
    name: 'Nice skirt',
    brand: 'Famous brand',
    price: 400,
    quantity: 20,
    type: 'skirt',
    sex: 'women',
    sale: true,
    discount: 40
  }
];

function countBasketPrice(inputCart) {
  var cartSummary = 0;
  for (var i = 0; i < inputCart.length; i++) {
    cartSummary += inputCart[i].price * inputCart[i].quantity;
  }

  return cartSummary;
}

function cartItemsCounter(inputCart) {
  var amountOfItems = inputCart.length;
  var goodsString;

  if (amountOfItems === 0) {
    return 'Корзина пустая';
  } else {
    var allPrice = countBasketPrice(inputCart);
    switch (amountOfItems) {
      case 1:
        goodsString = 'товар';
        break;
      case 2:
      case 3:
      case 4:
        goodsString = 'товара';
        break;
      default:
        goodsString = 'товаров';
        break;
    }
    return 'В корзине: ' + amountOfItems + ' ' + goodsString + ' на сумму ' + allPrice + ' рублей';
  }
}

function cartRender(countedCart) {
  var cartLine = document.createElement('div');

  cartLine.classList.add('cart');
  cartLine.setAttribute('id','cart');
  cartLine.textContent = countedCart;

  return cartLine;
}

var content = document.getElementById('content');
content.appendChild(cartRender(cartItemsCounter(cart)));
