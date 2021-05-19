var request = require('supertest');
var app = require('../server.js');


test('GET /test', (t) => {
   app.get('/test')
   .expect(200)
   .expect(res => {
     t.equal(res.response, 'test');
   })
   .end(t.end.bind(t));
});