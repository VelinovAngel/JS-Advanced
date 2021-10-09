function solve() {
   document
      .getElementsByClassName('shopping-cart')[0]
      .addEventListener('click', onClick);
   const cart = [];
   const output = document.getElementsByTagName('textarea')[0];

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON'
         && ev.target.classList.contains('add-product')) {
         const product = ev.target.parentNode.parentNode;
         const productName = product.getElementsByClassName('product-title')[0].textContent;
         const productPrice = Number(product.getElementsByClassName('product-line-price')[0].textContent);

         cart.push({
            name: productName,
            price: productPrice,
         })
         output.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         //console.log(`Added ${productName} for ${productPrice} to the cart.\n`);
      }
   }

   document.getElementsByClassName('checkout')[0]
      .addEventListener('click', calculate);

   function calculate(ev) {
      document
      .getElementsByClassName('shopping-cart')[0]
      .removeEventListener('click', onClick);
      if (ev.target.tagName == 'BUTTON'
         && ev.target.classList.contains('checkout')) {
         let totalPrice = 0;
         let productList = [];
         cart.forEach((el) => {
            totalPrice += el.price;
            if(!productList.includes(el.name)){
               productList.push(el.name);
            }
         });
         output.value += `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.`;
      }
      document.getElementsByClassName('checkout')[0]
      .removeEventListener('click', calculate);
   }
}