const mySQL = require("./db initialize/initializeCon");
const mongoDB = require("./db initialize/initializemongodb");

const database = {
  mySQL: {
    get: () => {
      return mySQL.get();
    },
    post: cow => {
      return mySQL.post(cow);
    },
    delete: cow => {
      return mySQL.delete(cow);
    }
  },

  mongoDB: {
    get: () => {
      return mongoDB.get();
    },
    post: cow => {
      return mongoDB.post(cow);
    },
    delete: cow => {
      return mongoDB.delete(cow);
    }
  }
};

module.exports = database;
