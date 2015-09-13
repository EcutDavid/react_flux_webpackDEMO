var React = require('react');
var CartActions = require('../actions/appActionCreator');

class Product extends React.Component{
  render() {
    return (
      <tr>
        <td>{this.props.value.name}</td>
        <td className="text-right">${this.props.value.price}</td>
        <td><button onClick={this._onClick.bind(this)}>Add to Cart</button></td>
      </tr>
    );
  }
  _onClick(event) {
    event.preventDefault();
    CartActions.add(this.props.value);
  }
};

module.exports = Product;
