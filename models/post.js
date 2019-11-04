const orm = require("../config/orm.js");

let post = {
  all: function(cb) {
    orm.all("posts", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("posts", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("posts", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("posts", condition, function(res) {
      cb(res);
    });
  }
};



// Export the database functions for the controller (catsController.js).
module.exports = post;
