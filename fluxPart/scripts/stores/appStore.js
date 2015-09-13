"use strict"
var dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var appConstants = require('../constants/appConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var textList = [];

var appStore = assign({}, EventEmitter.prototype, {
  create: function(text){
    textList.push(text);
  },
  getAll: function() {
    return textList;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

dispatcher.register(function(action) {
  switch(action.actionType) {
    case appConstants.CREATE:
      appStore.create(action.text);
      appStore.emitChange();
      break;
    case appConstants.DEMO:
      appStore.create('demo');
      appStore.emitChange();
      break;
    default:
  }
});

module.exports = appStore;
