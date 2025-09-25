let express = require('express');
let app = express();

console.log("Hello, World!");


app.get("/", function (req, res) {
  res.status(200).send("Hello Express");
});

module.exports = app;
































 module.exports = app;
