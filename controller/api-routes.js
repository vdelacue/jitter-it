const express = require("express");
const path = require("path");
const api_routes = express.Router();
const connection = require("../config/connection.js");

// Import the model posts.js to use its database functions.
const post = require("../models/post.js");


//get all posts data
api_routes.get("/api/posts", function (req, res) {
  connection.query("SELECT * FROM posts", function (err, data) {
    if (err) {
      return res.status(500).end();
    }
    return res.json(data);
  })
});

//get single post data according to id given in url
api_routes.get("/api/posts/:postid", function (req, res) {
  
  let postid = req.params.postid
  let queryString = `SELECT * FROM posts WHERE id=${postid}`;

  connection.query(queryString, function (err, data) {
    if (err) {
      return res.status(500).end();
    }
    return res.json(data);
  })
});

//save a new Post to the database
api_routes.post("/api/posts", function (req, res) {
  connection.query(`INSERT INTO posts (body) VALUES ("${req.body.body}")`,
    function (err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    // Send back the ID of the new post
    res.json({
      id: result.insertId
    });
  });
})

api_routes.put("/api/posts/:id", function (req, res) {
  connection.query(`UPDATE posts SET body='${req.body.body}' WHERE id=${req.params.id}`, function (err, data) {
    if (err) {
      return res.status(500).end();
    }
    return res.json(data);
  })
});


// Export routes for server.js to use.
module.exports = api_routes;