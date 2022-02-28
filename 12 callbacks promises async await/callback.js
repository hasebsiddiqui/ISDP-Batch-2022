function preparePizza(flavor, callback) {
  console.log("Order received");
  setTimeout(function () {
    callback("Pizaa " + flavor + " prepared");
  }, 1000);
}

function callback(data) {
  console.log(data);
}

console.log(preparePizza("fajita", callback));
