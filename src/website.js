var express = require("express");
var url = require("url");
var path = require("path");
var app = express();

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname + "/login.html"));
});
app.get("/register", function(request, response) {
    response.sendFile(path.join(___dirname + "/register.html"));
});
app.listen(8080);
console.log("Running on port 8080");
