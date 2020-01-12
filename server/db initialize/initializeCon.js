var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cowly"
});
con.connect();

module.exports = con;