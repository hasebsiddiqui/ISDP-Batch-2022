const mongoose = require("mongoose");

const humanSchema = mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: [18, "You are too young to app;y for CNIC"],
    max: 100,
  },
  gender: Boolean,
  email: { type: String, required: true },
});

const Human = mongoose.model("Human", humanSchema);

module.exports = Human;
