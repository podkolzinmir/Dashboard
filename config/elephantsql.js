// This is where we're creating a connection to the database


var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://zdwkvtfh:Jc3rLhG14M9TR2U77iz8PX8Lgb-UyHZl@127.0.0.1:5432/zdwkvtfh" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('Could not connect to db', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});