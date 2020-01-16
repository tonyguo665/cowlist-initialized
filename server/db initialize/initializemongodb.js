const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cowlist");

cowListSchema = mongoose.Schema({
  cow_name: String,
  cow_description: String,
  cow_pic: String
});

Cow = mongoose.model("Cow", cowListSchema);

module.exports.get = () => {
  return Cow.find().exec();
};

module.exports.post = cow => {
  let newCow = new Cow({
    cow_name: cow.name,
    cow_description: cow.description,
    cow_pic: cow.pic
  });

  return newCow.save();
};

module.exports.delete = cow => {
  return Cow.deleteOne({ cow_name: cow.name });
};
