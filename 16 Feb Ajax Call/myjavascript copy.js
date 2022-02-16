console.log("Javascript start");
$(function () {
  console.log("Html DOM created");
  $("#submit").click(btnclickfnc);
});

function btnclickfnc() {
  console.log("Before reading data");
  $.get("data.txt", datareadfunction);
  console.log("After reading data");
}

function datareadfunction(res) {
  console.log("In data read function");
  console.log(res);
  $("#datadiv").empty();
  $("#datadiv").append(res);
}

console.log("Javascript end");
