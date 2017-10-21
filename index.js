var express = require('express');
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;


app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "newtable.html"));
});


app.get("/reserve", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "makereservation.html"));
});




app.listen(PORT, function () {
	console.log("Listening on port %s", PORT);
});