import { cart, addTocart, calculateCartQuantity } from '../data/cart.js';
import { generateProductsHTML } from './renderProducts.js';

 document.querySelector('.js-products-grid').
    innerHTML = generateProductsHTML();

const addedMessageTimeOut = {};

function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;

}

updateCartQuantity();

function addedMessage(productId) {
  const addedToCartMessage = document.querySelector(`.js-added-to-cart-${productId}`);

  addedToCartMessage.classList.add("added-message-to-cart");

  const previousTimeOutId = addedMessageTimeOut[productId];

  if (previousTimeOutId) {
    clearTimeout(previousTimeOutId);
  }

  const timeOutId = setTimeout(() => {
    addedToCartMessage.classList.remove("added-message-to-cart")
  }, 2000);


  addedMessageTimeOut[productId] = timeOutId;

}

document.querySelectorAll('.js-add-to-cart').
  forEach((button) => {
    button.addEventListener('click', () => {
      //  const productId = button.dataset.productId;
      const { productId } = button.dataset;

      addTocart(productId);

      updateCartQuantity();

      addedMessage(productId);

    });
  });