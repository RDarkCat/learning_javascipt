"use strict";

var cart = [];

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
  },
  {
    name: 'Hoodie',
    brand: 'Famous brand',
    price: 500,
    quantity: 70,
    type: 'top',
    sex: 'unisex'
  }

];

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
      $buyButton = document.createElement('a');
      $buyButton.setAttribute('href', '#');
      $buyButton.classList.add('buy-button');
      $buyButton.textContent = 'Купить';
      $buyedItem.appendChild($buyButton);
      $catalogList.appendChild($buyedItem);
    }
  }
}

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

function buildCart() {
  var $cart = document.getElementById('cart-render');
  var $template = document.getElementById('template-cart').children[0];
  $cart.innerHTML = 'Корзина пуста';

  for (var i = 0; i < cart.length; i++) {
    var $item = $template.cloneNode(true);
    $item.querySelector('.name').textContent = cart[i].name;
    $item.querySelector('.price').textContent = cart[i].price;
    $item.querySelector('.quantity').textContent = cart[i].quantity;

    $cart.appendChild($item);
  }
}

// roulette cart -> address -> comment
var rouletteCounter = 0;
var $nextRoulette = document.getElementById('next');
$nextRoulette.addEventListener('click', function (event) {

  if (rouletteCounter < 3) {
    rouletteCounter++;
  }

  if (rouletteCounter == 1) {
    document.querySelector('#cart-order').classList.add('roulette-none');
    document.querySelector('#comment').classList.add('roulette-none');
    document.querySelector('#address').classList.toggle('roulette-none');
  }
  if (rouletteCounter == 2) {
    document.querySelector('#cart-order').classList.add('roulette-none');
    document.querySelector('#address').classList.add('roulette-none');
    document.querySelector('#comment').classList.toggle('roulette-none');
  }
  console.log(rouletteCounter);
});


// Delete product from cart

var $deleteItem = document.getElementById('cart-render');
$deleteItem.addEventListener('click', function (event) {
  if (event.target.className === 'delete-item') {
    var $parent = event.target.parentNode;
    var name = $parent.querySelector('.name').textContent;
    var brand = $parent.querySelector('.brand').textContent;
    var price = $parent.querySelector('.price').textContent;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        if (cart[i].quantity < 1) {
          cart.splice(i, 1);
        } else {
          cart[i].quantity--;
        }
      }
    }
    buildCart();
    var content = document.getElementById('content');
    content.innerHTML = cartItemsCounter(cart);
  }
});


function cartRender(countedCart) {
  var cartLine = document.createElement('div');

  cartLine.classList.add('cart');
  cartLine.setAttribute('id', 'cart-all');
  cartLine.innerText = countedCart;

  return cartLine;
}

// Add product to cart
var $buyButton = document.getElementById('catalog-list');
$buyButton.addEventListener('click', function (event) {
  if (event.target.className === 'buy-button') {
    var $parent = event.target.parentNode;
    var name = $parent.querySelector('.name').textContent;
    var brand = $parent.querySelector('.brand').textContent;
    var price = $parent.querySelector('.price').textContent;

    var index = -1;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].name === name) {
        index = i;
      }
    }

    if (index !== -1) {
      cart[index].quantity++;
    } else {
      cart.push({
        name: name,
        price: price,
        brand: brand,
        quantity: 1,
      });
    }
    buildCart();
    var content = document.getElementById('content');
    content.innerHTML = cartItemsCounter(cart);
  }

});

buildCart();
drawAllProducts(products);
