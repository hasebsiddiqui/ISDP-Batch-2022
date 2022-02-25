let person = {
  name: "Haseeb",
  age: 18,
  gender: true,
  weight: 98,
};

console.log(person.age);
console.log(person);
console.log(person.height);

person.height = 6.6;
console.log(person.height);
console.log(person);

//Another way to get keys value of JSON
person["age"];

person.age = 56;
console.log(person);
