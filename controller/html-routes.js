const express = require("express");
const path = require("path");
const html_routes = express.Router();

// Import the model (post.js) to use its database functions.
const post = require("../models/post.js");

// Create all our routes and set up logic within those routes where required.

html_routes.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// all additional jitter page routes would go here
// if page 'anotherpage' was created its route would look like this:

// html_routes.get("/anotherpage", function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/anotherpage.html'));
// });

// Export routes for server.js to use.
module.exports = html_routes;
