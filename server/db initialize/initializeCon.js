var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cowly"
});
con.connect();

module.exports.get = callback => {
  let sql = "SELECT * FROM cows";
  return new Promise((resolve, reject) => {
    con.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports.post = cow => {
  let sql =
    "INSERT INTO cows(cow_name, cow_description, cow_pic) VALUES (?, ?, ?)";
  let dataArr = [cow.name, cow.description, cow.pic];
  return new Promise((resolve, reject) => {
    con.query(sql, dataArr, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports.delete = cow => {
  let sql = "DELETE FROM cows WHERE cow_name = ?";
  return new Promise((resolve, reject) => {
    con.query(sql, [cow.name], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
