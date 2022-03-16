const express = require("express");
const User = require("../../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const _ = require("lodash");
router.get("/signup", async (req, res) => {
  try {
    let result = new User();
    result.email = req.body.email;
    result.name = req.body.name;
    let salt = await bcrypt.genSalt(10);
    result.password = await bcrypt.hash(req.body.password, salt);
    result = await result.save();
    result = _.pick(result, ["name", "email", "role", "_id"]);
    res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
});
router.get("/signin", async (req, res) => {
  try {
    // let result = new User();
    let { email, password } = req.body;

    let result = await User.findOne({ email: email });
    if (!result) {
      res.status(404).send("User with given email was not found");
    }

    let isValid = await bcrypt.compare(password, result.password);
    if (!isValid) {
      res.status(404).send("Invalid Password");
    }

    result = _.pick(result, ["name", "email", "role", "_id"]);
    // console.log(await _.omit(result, ["password"]));

    res.send(result);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = router;
