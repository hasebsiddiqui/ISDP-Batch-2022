// function s(flavor) {
//   return "Pizza " + flavor + " is preparing";
// }

// let s = (flavor) => {
//   return "Pizza " + flavor + " is preparing";
// };
// let s = (flavor) => "Pizza " + flavor + " is preparing";
// let s = flavor => "Pizza " + flavor + " is preparing";

// console.log(s("fajita"));
let postcodes = require("./postcodes.json");

// let result = postcodes.find(function (data) {
//   if (data.Region == "Aberdeen") return true;
// });
// let result = postcodes.find((data) => {
//   if (data.Region == "Aberdeen") return true;
// });

let result = postcodes.find((data) =>
  data.Region == "Aberdeen" ? true : false
);

// console.log(result);

let person = {
  name: "Butt Sahib",
  age: 23,
  famous: "Khana Peena",
  famous2: "badmash",
};

// let name = person.name;
// let age = person.age;
let { name, age } = person;

console.log(name, age);
