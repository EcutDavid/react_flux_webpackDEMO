"use strict"

var dispatcher = require('../dispatcher/dispatcher');
var appConstants = require('../constants/appConstants');

var appActionCreator = {
  add(product) {
    dispatcher.dispatch({
      actionType: appConstants.CART_ADD,
      product: product
    });
  },
  clear(){
    dispatcher.dispatch({
      actionType: appConstants.CLEARCART,
    });
  }
};


module.exports = appActionCreator;
