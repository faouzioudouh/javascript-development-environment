var express = require("express");
var path = require("path");
var open = require("open");

/* eslint-disable no-console */

// Feel free to use iny port, if port 3000 is not avialable on your machine.
var port = 3000;

// create an instance of Express.
var app = express();

// Tell Express which routes it should handle
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

// We want Express to listen on the port we declared above, and add some error handling!
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
