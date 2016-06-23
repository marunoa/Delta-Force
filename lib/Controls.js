/*var EventEmitter = require('events');
var util = require('util');

module.exports = BasicTimer;

function BasicTimer () {
  var _this = this;
  setInterval(function () {
    _this.emit('tick');
  }, 1000);
}

util.inherits(BasicTimer, EventEmitter);

BasicTimer.prototype.start = function start() {
  var self = this;

  if (self._started) return;

  var tic = true;

  this._started = Date.now();

  self._interval = setInterval(function() {
    var event = tic ? 'tic' : 'toc';
    self.emit(event, self.time());
    tic = ! tic;
  }, 1000);
};

Clock.prototype.stop = function stop() {
  clearInterval(this._interval);
  this._started = false;
};

Clock.prototype.time = function() {
  return this._started && Date.now() - this._started;
};*/

var BasicTimer = require('./Basictimer');
var newTimer = new BasicTimer();

 newTimer.addListener('tick', function(event) {

   process.stdout.write('tick ' + event.interval + '\n');

   /*if (event.interval === event.maxTime-1) {

     newTimer.complete();

   }

   if (event.lagTime >= event.maxDev) {

     newTimer.lag();

   }*/

 });

 newTimer.addListener('start', function(event) {

 });

 newTimer.addListener('stop', function(event) {

 });

 /*newTimer.addListener('complete', function(event) {
   myTimer.stop();
   console.log("Stop Time: ", event.endTime);
   console.log("Total Time: ", event.endTime - event.startTime);
   console.log("Total Lag: ", event.lagTime);
 });

 newTimer.addListener('lag', function(event) {
   console.log({Lagging: event.lagTime});
 });*/

 newTimer.start();