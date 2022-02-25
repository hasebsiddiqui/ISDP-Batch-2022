let number = 7;
let name = "haseeb";

let person = {
  pname: "Ali",
  page: 19,
};

function changevalues(number, name, person) {
  number = 0;
  name = "Abubakar";

  person.pname = "New Ali";
  console.log("Inside function", number, name, person);
}

changevalues(number, name, person);
console.log("Outside function", number, name, person);
