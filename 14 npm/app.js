const sum = require("./sum"); //Import single functions
const { sub, div } = require("./calculator"); //Import multiple functions
const axios = require("axios");
console.log(sum(9, 10));
console.log(sub(9, 10));
console.log(div(9, 10));

axios
  .get("https://haseeb-apis.herokuapp.com/api/person")
  .then((response) => {
    console.log(response.data[0]);
  })
  .catch((error) => {
    console.log(error.message);
  });
