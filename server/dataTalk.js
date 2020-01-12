const db = require("./db initialize/initializeCon");

module.exports = {
  get: callback => {
    let sql = "SELECT * FROM cows";
    db.query(sql, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(err, data);
      }
    });
  },

  post: (cow, callback) => {
    let sql = "INSERT INTO cows(cow_name, cow_description, cow_pic) VALUES (?, ?, ?)";
    db.query(sql, [cow.name, cow.description, cow.pic], (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(err, results);
      }
    });
  },

  delete: (cow, callback) => {
    let sql = "DELETE FROM cows WHERE cow_name = ?";
    db.query(sql, [cow.name], (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(err, results);
      }
    });
  }
};
