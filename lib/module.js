"use strict";

const eventsModule = require("events");
const pathModule = require("path");

exports.Module = function(path) {
  this.AbsolutePath = path;
  this.AbsoluteDirectory = pathModule.dirname(path);
  this.Output = {};
  eventsModule.EventEmitter.apply(this, arguments);
};
exports.Module.prototype = {
  constructor: exports.Module,
  __proto__: eventsModule.EventEmitter.prototype
};