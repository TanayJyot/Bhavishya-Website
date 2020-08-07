var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render("home")
})

app.listen(3007, function() {
    console.log("success is a crime")
})