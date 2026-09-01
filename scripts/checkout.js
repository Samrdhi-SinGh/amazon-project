import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

async function loadPage() {
  try {
    // throw 'error1';//we manually created an error.
    await loadProductsFetch();//throw 'error1' will skip all this code and go straight to catch. 

    await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {//throw 'error2' will skip all the loadCart() and go straight to catch.
        // reject('error3');
        resolve();
      });
    });

  } catch (error) {
    console.log('Unexpected error. Please try again later.')
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}

loadPage();

/*

Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((value) => {
  console.log(value); //(2) ['value1', undefined]
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value); //value1

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  console.log(value);//undefined
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
})
*/


/*
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
