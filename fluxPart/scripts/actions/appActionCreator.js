"use strict"

var dispatcher = require('../dispatcher/dispatcher');
var appConstants = require('../constants/appConstants');

var appActionCreator = {
  add: function(product) {
    dispatcher.dispatch({
      actionType: appConstants.CART_ADD,
      product: product
    });
  }
};


module.exports = appActionCreator;
