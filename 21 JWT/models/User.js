const Joi = require("joi");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var schema = mongoose.Schema({
  name: String,
  email: { type: String, lowercase: true },
  password: String,
  role: { type: String, default: "normal" }, //admin,normal
});

schema.statics.validateUser = (data) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(3).max(50),
    password: Joi.string().min(3).max(50),
    email: Joi.string().email(),
    role: Joi.string(),
  });
  return joiSchema.validate(data, { abortEarly: false });
};
schema.methods.generatePasswordHash = async function (password) {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(password, salt);
};

const User = mongoose.model("User", schema);

module.exports = User;
