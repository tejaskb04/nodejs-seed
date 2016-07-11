var express = require("express");
var app = express();
var path = require("path");

app.get("/", function(request, response) {
    response.sendFile(path.join("C:/Users/Tejas/Desktop/Node/login.html"));
});
app.listen(8080);
console.log("Running on port 8080");
