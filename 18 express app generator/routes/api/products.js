var express = require("express");
var router = express.Router();
const Product = require("../../models/Product");
router.get("/", async function (req, res) {
  try {
    let result = await Product.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});
router.get("/:id", async function (req, res) {
  try {
    let result = await Product.findById(req.params.id);
    if (!result) {
      res.status(400).send("Product with given ID not found");
    }
    res.send(result);
  } catch (err) {
    console.log(err);
    // res.status(400).send(err.message);
    res.status(400).send("The format of id is not correct");
  }
});
router.post("/", async function (req, res) {
  try {
    let result = new Product();
    result.name = req.body.name;
    result.price = req.body.price;
    result = await result.save();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});
router.put("/:id", async function (req, res) {
  try {
    let result = await Product.findById(req.params.id);
    if (!result) {
      res.status(400).send("The record with given id was not found");
    }

    //Another way to do this
    // result.name = req.body.name;
    // result.price = req.body.price;
    // result = await result.save();

    //{new:true} is an option to get updated data from
    //findByIdAndUpdate function. Otherwise it will return old data.
    result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});
router.delete("/:id", async function (req, res) {
  try {
    let result = await Product.findById(req.params.id);
    if (!result) {
      res.status(400).send("record with given ID not found");
    }
    result = await Product.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
    // res.status(400).send("The format of id is not correct");
  }
});

module.exports = router;
