// const { validateProduct } = require("../models/Product");
var jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
module.exports = async function (req, res, next) {
  let token = req.header("x-auth-token");
  if (!token) {
    console.log("ABC");
    return res.status(401).send("Token is not provided");
  }
  let decoded = jwt.decode(token, config.get("jwtprivatekey"));
  if (!decoded) {
    return res.status(401).send("Token is not valid. Signin again");
  }
  console.log(decoded);

  let user = await User.findById(decoded._id);

  if (!user) {
    return res.status(401).send("User not found is db. Signin again");
  }
  req.user = user;
  //   console.log(decoded);
  next();
};
