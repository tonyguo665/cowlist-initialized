const db = require("./use_db");
const theDatabase = "mongoDB";
//change databases by adjusting theDatabase to <<mySQL, mongoDB>>

module.exports = {
  get: () => {
    return db[theDatabase].get();
  },

  post: cow => {
    return db[theDatabase].post(cow);
  },

  delete: cow => {
    return db[theDatabase].delete(cow);
  }
};
