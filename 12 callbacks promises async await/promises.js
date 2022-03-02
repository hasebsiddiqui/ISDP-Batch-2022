function simulatePromise(flavour) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (flavour == "mango") {
        reject("Mango is not a flavor");
      }
      resolve("Pizza " + flavour + " prepared");
    }, 1000);
  });
}

//promises
//Pending
//Resolve
//Reject

console.log(
  simulatePromise("fajita")
    .then(function (data) {
      console.log("Resolve");
      console.log(data);
    })
    .catch(function (error) {
      console.log("Reject");
      console.log(error);
    })
);

//CRUD 4 operations
//Create sucess error;
//update sucess error
//delete sucess error
//read sucess error
//8 functons for simple CRUD
