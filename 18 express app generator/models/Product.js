const mongoose = require("mongoose");

var schema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

var Product = mongoose.model("Product", schema);

module.exports = Product;
