var express = require("express");
var url = require("url");
var path = require("path");
var app = express();

app.get("/login", function(request, response) {
    response.sendFile(path.join(__dirname + "/views/login.html"));
});
app.get("/register", function(request, response) {
    response.sendFile(path.join(__dirname + "/views/register.html"));
});
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname + "/views/dashboard.html"));
});
app.listen(8080);
console.log("Running on port 8080");
