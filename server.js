// https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
// https://github.com/bezkoder/nodejs-express-mysql/tree/d8cef0f9dace78d1a78da58611526e6474cb2a52
// https://bezkoder.com/node-js-rest-api-express-mysql/ 
// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 8080,
//   mysql = require('mysql'),
//   bodyParser = require('body-parser');

//   app.use(bodyParser.urlencoded({ extended: true }));
//   app.use(bodyParser.json());

// var routes = require('./api/routes/donor-routes'); //importing route
// routes(app);

// app.listen(port);

// console.log('donor-store running on: ' + port);



const express = require("express");
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/www/index.html'));
});

require("./app/routes/donor.routes.js")(app);

// set port, listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});