var express = require("express");
var url = require("url");
var path = require("path");
var app = express();

app.get("/", function(request, response) {
    response.sendFile(path.join("C:/Users/Tejas/Desktop/Node/login.html"));
});
app.get("/register", function(request, response) {
    response.sendFile(path.join("C:/Users/Tejas/Desktop/Node/register.html"));
});
app.listen(8080);
console.log("Running on port 8080");
