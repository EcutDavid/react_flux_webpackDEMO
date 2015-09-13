console.log(require('./componentA'));
console.log(require('./componentB'));
console.log(require('./componentC'));

/*
  ES 6 or ES 2015
*/
// class demo{
//   static prompt(){
//     console.log('webpack is aswsome');
//   }
// }
//
// demo.prompt();

/*
  Load chunks
*/
// var callback = () => {
//   require(['./componentD']);//AMD
// }
//
// var btn = document.querySelector('#button');
// btn.addEventListener("click", callback);

/*
  style sheet
*/
// require('../style/buttonStyle.scss')
