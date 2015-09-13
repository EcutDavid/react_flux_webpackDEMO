var _products = require('../ProductsData');

var productStore = {
  getProducts(){
    return _products;
  }
}

module.exports = productStore;
