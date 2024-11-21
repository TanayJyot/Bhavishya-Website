// api/projects.js
const express = require("express");
const app = express();

app.get("/projects", (req, res) => {
  res.send("Projects Page");
});

module.exports = app;
