var EventEmitter = require('events');
var util = require('util');

module.exports = BasicTimer;

function BasicTimer () {
  var _this = this;
  setInterval(function () {
    this.emit('tick');
  });
}

util.inherits(BasicTimer, EventEmitter);