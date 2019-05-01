// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

    //Start all() fct in burger Model
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    }//End all() fct in burger Model
    
    ,

    // ^^^^^^ Start create() fct in burger Model ^^^^^^
    create: function(table, cols, vals, cb) {

      orm.create("burgers", cols, vals, function(res) {

        cb(res);

      });

    },//^^^^^ End create() fct in burger Model ^^^^^^^
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },

  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  
  // orm.selectWhere("parties", "party_type", "grown-up", function(result) {
  //   var data = result;
  //   console.log(data);
  // });
  