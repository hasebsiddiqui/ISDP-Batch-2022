let arr = ["HAseeb", "Arqam"];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[5]);

arr[4] = 4;
arr[5] = "hassan";
arr[6] = { name: "sdsd", age: 5 };
arr[7] = { name: "ccc", age: 6 };
arr[8] = { name: "ddd", age: 7 };
console.log(arr);

console.log(arr.find(findInArr));

console.log("Before splice", arr);
arr.splice(1, 4, ["new name", "new age"]);
console.log("After splice", arr);

let newarr = [1, 2, 3, 4];

let newnewarr = newarr.map(function (element) {
  return element * 2;
});
console.log(newnewarr);

//------------Array Sorting------------
let students = ["Haseeb", "ali", "Shabeer", "Abubakar", "Uzair", "Usman"];
students.sort(function (previous, next) {
  if (previous > next) return 1;
  else return -1;
});

let numbers = [3434, 554, 2321, 78, 3243, -55, 232, 0, 454, 78];
numbers.sort(function (previous, next) {
  if (previous > next) return 1;
  else return -1;
});
console.log(numbers);

function findInArr(data) {
  if (data == "hassan") return true;
}
