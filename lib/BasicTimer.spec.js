var chai = require('chai');
var sinon = require('sinon');
var EventEmitter = require('events');
var BasicTimer = require('./BasicTimer');

var expect = chai.expect;


function theFunction () {

}

var theModule = {
  theFunction: theFunction,
};

describe('the spy', function () {
  var theSpy;

  beforeEach(function () {
    theSpy = sinon.spy(theModule, 'theFunction');
  });

  it('should get invoked when invoked', function () {
    theModule.theFunction();
    expect(theSpy.called).to.be.true;
  });

});

describe('BasicTimer', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers();
  });

  afterEach(function () {
    this.clock.restore();
  });

  it('should be a function', function () {
    expect(BasicTimer).to.be.a('function');
  });

  it('should be an instance of EventEmitter', function () {
    var timer = new BasicTimer();
    expect(timer).to.be.an.instanceof(EventEmitter);
    expect(timer).to.have.constructor(BasicTimer);
  });

  it('should emit a "tick" event every second', function () {
    var tickHandler = sinon.spy();

    var timer = new BasicTimer();
    timer.on('tick', tickHandler);
    expect(tickHandler.callCount).to.equal(0);

    // If I wait 1 second, the tick event should have been emitted
    // Wait 1 second

    this.clock.tick(1000);
    expect(tickHandler.callCount).to.equal(1);

    this.clock.tick(500);
    expect(tickHandler.callCount).to.equal(1);

    this.clock.tick(500);
    expect(tickHandler.callCount).to.equal(2);

  });


});