var React = require('react');
require('../style/Widget.css')
//Inherit
class Widget extends React.Component {
  constructor(){
    super();
    this.state = {text: "Hello"}
  }
  _prompt(){
    //alert('with some wrong logic');
    alert('It works now');
  }
  render(){
    return (
      <div className="container">
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <button onClick={this._prompt}>click me</button>
      </div>
    );
  }
}


module.exports = Widget;
