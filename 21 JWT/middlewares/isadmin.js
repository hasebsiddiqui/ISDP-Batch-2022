// const { validateProduct } = require("../models/Product");
module.exports = function (req, res, next) {
  let user = req.user;

  if (user.role === "admin") {
    next();
  } else {
    return res.status(401).send("You are not admin");
  }
};
