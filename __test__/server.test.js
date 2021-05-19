var request = require('supertest');
var app = require('../server.js');


describe('server js test', function() {
  describe('GET /', function() {
     it('should respond to GET with empty path', function (done) {
        request(app) 
               .get('')
               .expect(200)
               .end(done) 
     });
  });
});