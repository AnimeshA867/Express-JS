const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1> Hello world </h1>");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.listen(port, () => {
  console.log("Server started at port " + port);
});
