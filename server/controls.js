const talkToData = require("./dataTalk.js");

module.exports = {
  get: (req, res) => {
    console.log("GET WAS SUBMIT");
    talkToData
      .get()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log("Error with getting all the cows!");
        res.sendStatus(500);
      });
  },
 
  post: (req, res) => {
    console.log("POST WAS SUBMIT: ", req.body);
    talkToData
      .post(req.body)
      .then(results => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log("Error with posting a cow!");
        res.sendStatus(500);
      });
  },

  delete: (req, res) => {
    console.log("DELETE WAS SUBMIT");
    talkToData
      .delete(req.body)
      .then(results => {
        res.send(200);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  }
};
