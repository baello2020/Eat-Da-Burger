// Orlando Baello
// Eat-Da-Burger!

// Requires mysql
var mysql = require("mysql");

var connection;

// Creates connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    //Port
    port: 3306,
    // Username
    user: "ffon04usjp1xvnky",
    // Password
    password: "jwdjlw668aoy1rq6",
    // DataBase
    database: "i0ujss5pbf70h70j"
  });
};

// Error handling
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// Test comment
module.exports = connection;