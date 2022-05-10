var express = require("express");
var app = express();
const port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));


app.get("/", function(req, res) {
    res.render("index")
})

app.get("/projects", function(req, res) {
    res.render("projects")
})

app.get("/plantation-drive", (req, res) => {
    res.render("plantation-drive")
})

app.get("/mission-roshni", (req, res) => {
    res.render("mission-roshni")
})

app.get("/fundraiser", (req, res) => {
    res.render("fundraiser")
})

app.get("/shiksha-kit", (req, res) => {
    res.render("shiksha-kit")
})


app.get("/mask-workshop", (req, res) => {
    res.render("mask-workshop")
})

app.get()

app.listen(port, function() {
    console.log("success is a crime")
})