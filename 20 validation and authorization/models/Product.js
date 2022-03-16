const Joi = require("joi");
const mongoose = require("mongoose");

var schema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});
schema.statics.validateProduct = (data) => {
  const joischema = Joi.object({
    name: Joi.string().min(3).max(10),
    price: Joi.number().min(0),
  });
  return joischema.validate(data, { abortEarly: false });
};

var Product = mongoose.model("Product", schema);

module.exports = Product;
// module.exports.validateProduct = validateProduct;
