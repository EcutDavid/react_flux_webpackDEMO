var React = require('react');
require('../style/reset.css')
require('font-awesome/css/font-awesome.min.css');

var products = require('./ProductsData');

var ProductList = require('./components/ProductList');
var Cart = require('./components/Cart');

React.render(
  <div className="container">
    <ProductList products={products}/>
    <Cart />
  </div>,
  document.getElementById('app'));
