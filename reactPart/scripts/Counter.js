var React = require('react');
require('../style/counter.css');

//Inherit
class Counter extends React.Component {
  constructor(){
    super();
  }
  defaultProps() {
    return {
      'count': 20,
    }
  }
  render(){
    return (
      <div>
        <h1 className='title'>{this.props.count}</h1>
        <button className='increase'> + </button>
        <button className='decrease'> - </button>
      </div>
    );
  }
}


module.exports = Counter;
