"use strict"
var dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var appConstants = require('../constants/appConstants');
var _ = require('underscore');

var CHANGE_EVENT = 'change';
var _cartItems = [];
var _products = require('../ProductsData');

function _addToCart(product) {
  var oldItem = _.findWhere(_cartItems, {id: product.id});
  if (oldItem) {
    oldItem.count += 1;
    oldItem.subTotal += product.price;
  } else {
    var newItem = _.clone(product);
    newItem.count = 1;
    newItem.subTotal = product.price;
    _cartItems.push(newItem);
  }
}

class CartStore extends EventEmitter{
  create(text){
    textList.push(text);
  }
  getCartItem(id) {
    return _cartItems[id];
  }
  getAllCartItems() {
    return _cartItems;
  }
  getProducts(){
    return _products;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
};

var cartStore = new CartStore();

dispatcher.register(function(action) {
  switch(action.actionType) {
    case appConstants.CREATE:
      _addToCart(action.product)
      cartStore.emitChange();
      break;
    default:
  }
});

module.exports = cartStore;
