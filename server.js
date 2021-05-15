// https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mysql = require('mysql'),
  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

var con = mysql.createConnection({
    host: "db",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var routes = require('./api/routes/donor-routes'); //importing route
routes(app);

app.listen(port);

console.log('donor-store running on: ' + port);