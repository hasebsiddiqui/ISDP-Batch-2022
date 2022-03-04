const express = require("express");
const app = express();
let products = ["Shampoo", "Dove"];

app.use(express.json());

//default
app.get("/", function (req, res) {
  res.send("Hello World I am here");
});

//get all
app.get("/api/products", function (req, res) {
  res.send(products);
});
//getOne
app.get("/api/products/:id", function (req, res) {
  res.send(products[req.params.id]);
});

//Post data
app.post("/api/products", function (req, res) {
  var data = req.body;
  products.push(data.name);
  res.send(data.name);
  //   res.send("Product created");
});
//Put data
app.put("/api/products/:id", function (req, res) {
  var data = req.body;
  console.log(data);
  products[req.params.id] = data.name;
  res.send(data.name);
  // var productToEdit = products[req.params.id];

  // productToEdit = data.name;

  // products[req.params.id] = productToEdit;
  // res.send(productToEdit);
  //   res.send("Product created");
});
//Delete data
app.delete("/api/products/:id", function (req, res) {
  var product = products[req.params.id];
  products.splice(req.params.id, 1);

  res.send(product);
  //   res.send("Product created");
});

app.listen(8080);
