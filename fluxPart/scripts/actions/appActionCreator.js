"use strict"

var dispatcher = require('../dispatcher/dispatcher');
var appConstants = require('../constants/appConstants');

var appActionCreator = {
  create: function(text) {
    dispatcher.dispatch({
      actionType: appConstants.CREATE,
      text: text
    });
  },
  demo: function() {
    dispatcher.dispatch({
      actionType: appConstants.DEMO
    });
  }
};


module.exports = appActionCreator;
