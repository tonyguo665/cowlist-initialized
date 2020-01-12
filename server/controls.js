const talkToData = require("./dataTalk.js");

module.exports = {
  get: (req, res) => {
    console.log('GET WAS SUBMIT');
    talkToData.get((err, data) => {
      console.log('DATA: ',data)
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(data);
      }
    });
  },

  post: (req, res) => {
    console.log('POST WAS SUBMIT: ', req.body);
    talkToData.post(req.body, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        console.log('REQUEST POSTED')
        res.send("Your Cow Has Been POSTED!");
      }
    });
  },

  delete: (req, res) => {
    console.log('DELETE WAS SUBMIT')
    talkToData.delete(req.body, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send("That Cow Has Been DELETED");
      }
    });
  }
};
