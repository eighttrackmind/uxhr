// Generated by CoffeeScript 1.6.3
var expect;

expect = chai.expect;

mocha.setup('bdd');

describe('uxhr', function() {
  it('should default the XMLHttpRequest method to GET', function() {
    var xhr;
    xhr = sinon.useFakeXMLHttpRequest();
    return xhr.onCreate = function(xhr) {
      uxhr('#', {});
      return expect(xhr.method).to.equal('GET');
    };
  });
  it('should set the XMLHttpRequest method to options.method', function() {
    var xhr;
    xhr = sinon.useFakeXMLHttpRequest();
    return xhr.onCreate = function(xhr) {
      uxhr('#', {}, {
        method: 'POST'
      });
      return expect(xhr.method).to.equal('POST');
    };
  });
  return describe('callbacks', function() {
    it('should call options.complete()', function() {
      var complete, server;
      complete = sinon.spy();
      server = sinon.fakeServer.create();
      uxhr('#', {}, {
        complete: complete
      });
      server.requests[0].respond(200);
      return expect(complete.calledOnce).to.equal(true);
    });
    it('should call options.success()', function() {
      var server, success;
      success = sinon.spy();
      server = sinon.fakeServer.create();
      uxhr('#', {}, {
        success: success
      });
      server.requests[0].respond(200);
      return expect(success.calledOnce).to.equal(true);
    });
    return it('should call options.error()', function() {
      var error, server;
      error = sinon.spy();
      server = sinon.fakeServer.create();
      uxhr('#', {}, {
        error: error
      });
      server.requests[0].respond(400);
      return expect(error.calledOnce).to.equal(true);
    });
  });
});

mocha.run();
