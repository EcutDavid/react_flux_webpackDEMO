"use strict"
var React = require('react');
require('../../style/main.css');
var appActionCreator = require('../actions/appActionCreator');

var appStore = require('../stores/appStore');

class App extends React.Component{
  constructor(){
    super();
    this.state = {infoList: appStore.getAll()};
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    appStore.addChangeListener(this._onChange);
  }
  componentWillUnmount(){
    appStore.removeChangeListener(this._onChange);
  }
  _onChange(){
    var arr = appStore.getAll();
    this.setState({infoList: appStore.getAll()});
  }
  _add(){
    appActionCreator.create(React.findDOMNode(this.refs.textArea).value);
  }
  _test(){
    appActionCreator.demo();
  }
  render(){
    var textList = this.state.infoList.map(function(item){
      return <p>{item}</p>;
    });
    return(
      <div className="container">
        <input ref="textArea" type="text"></input>
        <button className="button" onClick={this._add.bind(this)}>add</button>
        <button className="button" onClick={this._test}>demo</button>
        {textList}
      </div>
    );
  }
};

module.exports = App;
