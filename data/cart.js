export const cart = [];

export function addTocart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {//item will contain productName and quantity.
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

  const quantity = Number(quantitySelector.value);


  if (matchingItem) {//Truthy
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}