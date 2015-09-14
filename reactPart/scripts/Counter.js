var React = require('react');
require('../style/counter.css');

//Properties
class Counter extends React.Component {
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

//state
//use lifecycle method here
//others:
//  componentDidMount
//  componentDidUpdate
//  componentWillUnmount
//  .....https://facebook.github.io/react/docs/component-specs.html
// class Counter extends React.Component {
//   componentWillMount(){
//     this.state = {'count': this.props.count};
//   }
//   render(){
//     return (
//       <div>
//         <h1 className='title'>{this.state.count}</h1>
//         <button className='increase'> + </button>
//         <button className='decrease'> - </button>
//       </div>
//     );
//   }
// }

//event
//
// class Counter extends React.Component {
//   componentWillMount(){
//     this.state = {'count': parseInt(this.props.count)};
//   }
//   _change(increment){
//     this.setState({'count': this.state.count + increment});
//   }
//   render(){
//     return (
//       <div>
//         <h1 className='title'>{this.state.count}</h1>
//         <button className='increase' onClick={this._change.bind(this, 1)}> + </button>
//         <button className='decrease' onClick={this._change.bind(this, -1)}> - </button>
//       </div>
//     );
//   }
// }
module.exports = Counter;
