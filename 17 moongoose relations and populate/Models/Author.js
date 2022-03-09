const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: String,
  age: { type: Number, default: 18 },
  email: String,
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
