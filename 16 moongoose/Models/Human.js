const mongoose = require("mongoose");

const humanSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: Boolean,
});

const Human = mongoose.model("Human", humanSchema);

module.exports = Human;
