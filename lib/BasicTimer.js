var EventEmitter = require('events');
var util = require('util');

module.exports = BasicTimer;

function BasicTimer () {

  var _this = this;
  var self = this;

  setInterval(function () {

    _this.emit('tick');
  }, 1000);

  var start;
  var emitStartEvent;
  var i = 0;

  self.start = function () {

    console.log('starting');

    start = new Date();

    emitStartEvent = setInterval(function () {

      self.emit('tick', {

        interval: i++

      }, 1000);

    self.emit('start', {

      start: start

    });

     });

  };

  self.stop = function () {

    self.emit('stop', {

      interval: i

    });

    clearInterval(emitStartEvent);

  };

}

util.inherits(BasicTimer, EventEmitter);

