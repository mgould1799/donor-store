const express = require("express");
const path = require('path');
var cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('')
})

require("./app/routes/donor.routes.js")(app);

// set port, listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});