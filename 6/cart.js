/**
 * Продолжаем реализовывать модуль корзины:
 * Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
 * Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
 */

"use strict";


var products = [
  {
    name: 'New T-Shirt',
    brand: 'Very Famous brand',
    price: 100,
    quantity: 40,
    type: 'shirts',
    sex: 'unisex'
  },
  {
    name: 'Nice skirt',
    brand: 'Famous brand',
    price: 400,
    quantity: 20,
    type: 'skirt',
    sex: 'women'
  }
];


// генерация каталога с кнопкой купить

function drawAllProducts(pList) {
  var $catalogList = document.getElementById('catalog-list');
  var $template = document.getElementById('template').children[0];
  var $buyButton;
  $catalogList.innerHTML = '';

  if (pList && pList.length) {
    for (var i = 0; i < pList.length; i++) {
      var $buyedItem = $template.cloneNode(true);
      $buyedItem.querySelector('.name').textContent = pList[i].name;
      $buyedItem.querySelector('.brand').textContent = pList[i].brand;
      $buyedItem.querySelector('.price').textContent = pList[i].price;
      $buyedItem.querySelector('.quantity').textContent = pList[i].quantity;

      // Добавим кнопку купить в уникальным id

      $buyButton = document.createElement('a');
      $buyButton.setAttribute('href', '#');
      $buyButton.setAttribute('id', 'buy_' + i);
      $buyButton.classList.add('buy-button');
      $buyButton.textContent = 'Купить';
      $buyedItem.appendChild($buyButton);
      $catalogList.appendChild($buyedItem);
    }
  } else {

  }

}

drawAllProducts(products);


var cart = [];

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
  cartLine.setAttribute('id', 'cart');
  cartLine.textContent = countedCart;

  return cartLine;
}

var content = document.getElementById('cart-render');
content.appendChild(cartRender(cartItemsCounter(cart)));


// Обработчик добавления товара в корзину
/**
 *
 * FIXME: из-за недостатка времени
 *  не доделал вызов кнопки купить по id
 * @type {HTMLElement}
 */
var $buyButton = document.body.getElementsByClassName('buy-button');

for (var i = 0; i <= products.length; i++) {
  $buyButton[i].addEventListener('click', function (event) {
    event.preventDefault();
    var item = {
      name: document.getElementById('name').value,
      brand: document.getElementById('brand').value,
      price: document.getElementById('price').value,
      quantity: document.getElementById('quantity').value,
    };
    cart.push(item);
    // обновляем список
  });
}