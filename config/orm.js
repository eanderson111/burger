// Import MySQL connection.
var connection = require("../config/connection.js");

// (remember: connection.js -> orm.js -> route file)

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //  **** -----Start create() fct ORM -----***
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += vals;
    queryString += ") ";

    console.log("QS:");
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });//  **** -----End create() fct ORM -----***
  },

  update: function(table, objColVals, condition, cb) {

    console.log("devoured") 
    console.log(objColVals.devoured);

    var queryString = "UPDATE " + table;

    queryString += " SET DEVOURED=";
    queryString += objColVals.devoured;
    queryString += " WHERE ";
    queryString += condition;
    

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};

// Export the orm object for the model (cat.js).
module.exports = orm;
