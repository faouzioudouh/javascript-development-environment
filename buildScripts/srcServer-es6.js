import express from "express";
import path from "path";
import open from "open";

/* eslint-disable no-console */

// Feel free to use iny port, if port 3000 is not avialable on your machine.
const port = 3000;

// create an instance of Express.
const app = express();

// Tell Express which routes it should handle
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

// We want Express to listen on the port we declared above, and add some error handling!
app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
