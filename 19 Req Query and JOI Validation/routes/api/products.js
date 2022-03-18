var express = require("express");
var router = express.Router();
const { Products } = require("../../models/Product");
const { validateProduct } = require("../../models/Product");
router.get("/", async function (req, res) {
  try {
    console.log(req.query);
    let page = Number(req.query.page);
    let perPage = Number(req.query.perPage);

    page = (page - 1) * perPage;
    console.log(page, perPage);

    let result = await Product.find(req.body).skip(page).limit(perPage);

    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
});
router.get("/:id", async function (req, res) {
  try {
    let result = await Product.findById(req.params.id);
    if (!result) {
      return res.status(400).send("Product with given ID not found");
    }
    return res.send(result);
  } catch (err) {
    console.log(err);
    // return res.status(400).send(err.message);
    return res.status(400).send("The format of id is not correct");
  }
});
router.post("/", async function (req, res) {
  try {
    let { error } = validateProduct(req.body);
    if (error) {
      return res.status(400).send(error.message);
    }

    let result = new Product();
    result.name = req.body.name;
    result.price = req.body.price;
    result = await result.save();
    return res.send(error);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
});
router.put("/:id", async function (req, res) {
  try {
    let result = await Product.findById(req.params.id);
    if (!result) {
      return res.status(400).send("The record with given id was not found");
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
    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
});
router.delete("/:id", async function (req, res) {
  try {
    let result = await Product.findById(req.params.id);
    if (!result) {
      return res.status(400).send("record with given ID not found");
    }
    result = await Product.findByIdAndDelete(req.params.id);
    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
    // return res.status(400).send("The format of id is not correct");
  }
});
// router.delete("/deletePage", async function (req, res) {
//   try {
//     let page = Number(req.query.page);
//     let perPage = Number(req.query.perPage);

//     let result = await Product.find(req.body).skip(page).limit(perPage);
//     result.forEach(async (data)=>{
//       await data.delete();
//     })
//
//     return res.send(result);
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send(err.message);
//     // return res.status(400).send("The format of id is not correct");
//   }
// });

module.exports = router;
