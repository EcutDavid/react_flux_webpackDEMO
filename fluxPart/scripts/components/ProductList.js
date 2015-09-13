var React = require('react');
var Product = require('./ProductItem');
var ProductStore = require('../stores/ProductStore');

class ProductList extends React.Component{
  render() {
    var products = this.props.products.map(function (product) {
      return <Product key={product.id} value={product} />
    });
    return (
      <div>
        <h2>Products</h2>
        <table>
          {products}
        </table>
      </div>
    );
  }

};

module.exports = ProductList;
