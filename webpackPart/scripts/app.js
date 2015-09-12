console.log(require('./componentA'));
console.log(require('./componentB'));
console.log(require('./componentC'));

var callback = () => {
  require(['./componentD']);//AMD
}

var btn = document.querySelector('#button');
btn.addEventListener("click", callback);
