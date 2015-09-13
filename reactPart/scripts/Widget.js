var React = require('react');

//Inherit
class Widget extends React.Component {
  constructor(){
    super();
    this.state = {text: "Hello"}
  }
  _change(){
    this.setState({text: this.state.text +'o21'});
  }
  render(){
    return (
      <div>
        <input type="text"/>
        <h1>{this.state.text}</h1>
        <button onClick={this._change.bind(this)}>click me</button>
      </div>
    );
  }
}


module.exports = Widget;
