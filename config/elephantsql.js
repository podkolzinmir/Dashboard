// This is where we're creating a connection to the database

var pg = require("pg");
//or native libpq bindings
//var pg = require('pg').native

var conString =
  "postgres://zdwkvtfh:Jc3rLhG14M9TR2U77iz8PX8Lgb-UyHZl@queenie.db.elephantsql.com:5432/zdwkvtfh"; //Can be found in the Details page
var client = new pg.Client(conString);
async function getData() {
  client.connect(async function (err) {
    if (err) {
      return console.error("Could not connect to db", err);
    }
    client.query("SELECT * FROM Output LIMIT 100;", function (err, result) {
      if (err) {
        return console.error("error running query", err);
      }
      console.log("hit");
      return result.rows;
    });
  });
}
module.exports = {
  getData,
};
