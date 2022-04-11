const express = require("express");
const User = require("../../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
var jwt = require("jsonwebtoken");
const _ = require("lodash");
router.post("/signup", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("User with this email already exists");
    }
    let result = new User();
    result.email = req.body.email;
    result.name = req.body.name;
    await result.generatePasswordHash(req.body.password);
    result = await result.save();
    result = _.pick(result, ["name", "email", "role", "_id"]);
    res.send(result);
  } catch (err) {
    return res.status(401).send(err.message);
  }
});
router.post("/login", async (req, res) => {
  try {
    console.log("HERE");
    // let result = new User();
    let { email, password } = req.body;
    let result = await User.findOne({ email: email });
    if (!result) {
      return res.status(404).send("User with given email was not found");
    }

    let isValid = await bcrypt.compare(password, result.password);
    if (!isValid) {
      return res.status(404).send("Invalid Password");
    }

    //JWT
    let privateKey = config.get("jwtprivatekey");
    let token = jwt.sign(
      { _id: result._id, name: result.name, role: result.role },
      privateKey
    );
    // result = _.pick(result, ["name", "email", "role", "_id"]);
    // console.log(await _.omit(result, ["password"]));

    res.send(token);
  } catch (err) {
    return res.status(401).send(err.message);
  }
});

module.exports = router;
