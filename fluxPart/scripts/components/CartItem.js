var React = require('react');

class CartItem extends React.Component{
  render() {
    return (
      <tr>
        <td>{this.props.value.name}</td>
        <td className="text-right">${this.props.value.price}</td>
        <td>x {this.props.value.count}</td>
        <td className="text-right">${this.props.value.subTotal}</td>
      </tr>
    );
  }
};

module.exports = CartItem;
