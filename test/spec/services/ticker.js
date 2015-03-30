'use strict';

describe('Service: ticker', function () {

  // load the service's module
  beforeEach(module('ffivApp'));

  // instantiate service
  var ticker;
  beforeEach(inject(function (_ticker_) {
    ticker = _ticker_;
  }));

  it('should do something', function () {
    expect(!!ticker).toBe(true);
  });

});
