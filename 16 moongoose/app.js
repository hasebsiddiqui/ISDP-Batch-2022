const express = require("express");
const app = express();
const Human = require("./Models/Human");
app.listen(8081);
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/JamiaDB")
  .then(async () => {
    console.log("DB connected");

    //******Find********
    // let result = await Human.find({ name: "Haseeb" });
    // console.log(result);

    //******Create*******
    // let myhuman = new Human();
    // myhuman.name = "My Human";
    // myhuman.age = 67;
    // myhuman.gender = true;
    // await myhuman.save();
    // console.log(myhuman);

    //*******Update*******
    // let result = await Human.findByIdAndUpdate("62223ec8f7082582cde8d21d", {
    //   gender: false,
    //   name: "New name",
    // });
    // let result = await Human.findById("62223ec8f7082582cde8d21d");
    // result.name = "new new new name";
    // result = await result.save();
    // console.log(result);

    //*****************Delete******************/
    // let result = await Human.findByIdAndDelete("62223ec8f7082582cde8d21d");
    // console.log(result);
    //next
  })
  .catch((error) => {
    console.log("Error connecting db");
    console.log(error);
  });
