$(function () {
  console.log("before");
  $.get("server.txt", function (response) {
    console.log(response);
  });
  console.log("Here");
  console.log("Next functionality");
});
