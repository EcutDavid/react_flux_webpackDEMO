var React = require('react');

// var Root = React.createElement('h1', null, "Hello world");

//---- Define Render() using JSX syntax

// var Root = {
//   render(){
//     return React.createElement('h1', null, "Hello world");
//   }
// }
// React.render(Root.render(), document.querySelector('#app'));

// class Root extends React.Component {
//   render(){
//     return (<h1>Hello world but use JSX syntax</h1>);
//   }
// }
// React.render(<Root />, document.querySelector('#app'));

var Counter =  require('./Counter');
React.render(<Counter count="20"/>, document.querySelector('#app'));


// var Widget =  require('./Widget');
// React.render(<Widget />, document.querySelector('#app'));
