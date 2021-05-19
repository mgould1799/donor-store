const express = require("express");
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// set port, listen for requests
app.listen(8081, () => {
  console.log("Server is running on port 8081.");
});