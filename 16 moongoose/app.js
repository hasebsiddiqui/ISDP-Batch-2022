const express = require("express");
const app = express();
const Human = require("./Models/Human");
app.listen(8080);
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/JamiaDB")
  .then(async () => {
    console.log("DB connected");
    // let result = await Human.find({ name: "Haseeb", age: 18 });
    // console.log(result);

    let myhuman = new Human();
    myhuman.name = "My Human";
    myhuman.age = 67;
    myhuman.gender = true;
    await myhuman.save();
    console.log(myhuman);
    //next
  })
  .catch((error) => {
    console.log("Error connecting db");
    console.log(error);
  });
