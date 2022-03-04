// /npm i axios
const axios = require("axios");

const getAll = () => {
  axios
    .get("https://haseeb-apis.herokuapp.com/api/person")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const getOne = (id) => {
  axios
    .get("https://haseeb-apis.herokuapp.com/api/person/" + id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const post = (data) => {
  axios
    .post("https://haseeb-apis.herokuapp.com/api/person", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const put = (id, data) => {
  axios
    .put("https://haseeb-apis.herokuapp.com/api/person/" + id, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const deleteOne = (id) => {
  axios
    .delete("https://haseeb-apis.herokuapp.com/api/person/" + id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// getAll();
put("62220b3564ebb66c99387594", { name: "new abc" });
// post({ name: "hasewewb", age: 18, gender: true, city: "lahore" });
// put("621f218c5cf997157dc53456", {
//   name: "hasewewb",
//   age: 18,
//   gender: true,
//   city: "lahore",
// });
