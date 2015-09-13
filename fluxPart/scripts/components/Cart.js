var React = require('react');
var CartStore = require('../stores/cartStore');
var CartItem = require('./CartItem');

function _getCartState() {
  return {
    products: CartStore.getAllCartItems()
  };
}

class Cart extends React.Component{
  constructor(){
    super();
    this.state = _getCartState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    CartStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    CartStore.removeChangeListener(this._onChange);
  }
  render() {
    var products = this.state.products.map(function (product) {
      return <CartItem key={product.id} value={product} />
    });
    var total = this.state.products.reduce(function (acc, product) {
      return acc + product.subTotal;
    }, 0.0);
    return (
      <div>
        <h2>Cart</h2>
        <table>
          <tbody>
            {products}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="text-right">Total</td>
              <td className="text-right">${total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
  _onChange() {
    this.setState(_getCartState());
  }
};

module.exports = Cart;
