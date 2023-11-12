const fs = require('fs');
const path = require('path');

const p = path.join(
   path.dirname(process.mainModule.filename),
   'data',
   'cart.json'
);

module.exports = class Cart {
   static addProduct(id, productPrice) {
      fs.readFile(p, (err, fileContent) => {
         let cart = { products: [], totalPrice: 0 };
         if (!err) {
            cart = JSON.parse(fileContent);
         }
            // Analyze the cart => Find existing product
            const existingProductIndex = cart.products.findIndex(
               prod => prod.id === id
            );
        });
   }
};
