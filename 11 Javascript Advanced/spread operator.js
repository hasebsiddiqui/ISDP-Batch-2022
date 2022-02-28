let arr = ["Apple", "Pineapple", "Kino", "Amrood"];
let arr2 = ["Banana", "Khajoor", "Gajar", "Moli", "Timatar"];
// arr.push(arr2[0]);
// arr.push(arr2[1]);
// arr.push(arr2[2]);
// arr.push(arr2[3]);
// arr.push(arr2[4]);
arr.push(...arr2);
// console.log(arr);

let person = {
  name: "Butt Sahib",
  age: 23,
  famous: "Khana Peena",
  famous2: "badmash",
};
let eat = {
  breakfast: "Naan Chane",
  lunch: "Biryani",
  dinner: "Mutton",
};

// let buttPerson = {
//   name: person.name,
//   age: person.age,
//   famous: person.famous,
//   breakfast: eat.breakfast,
//   lunch: eat.lunch,
//   dinner: eat.dinner,
// };
let buttPerson = {
  ...person,
  ...eat,
};
console.log(buttPerson);
