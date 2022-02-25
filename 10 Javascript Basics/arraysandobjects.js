let postcodes = require("./postcodes.json");

console.log(postcodes.length);

var region = postcodes.find(function (element) {
  if (element.Region == "Aberdeen") return true;
});
var allregions = postcodes.filter(function (element) {
  if (element.Region == "Aberdeen") return true;
});
console.log(region);
console.log(allregions.length);

let arr = ["haseeb", "sdsds", "ytiiyiy"];
console.log(arr);
console.log(arr[0], arr[1], arr[2]);
console.log(...arr);
