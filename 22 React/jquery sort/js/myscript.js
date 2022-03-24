var students = ["SHabir", "BUTT", "Abdullah"];
$(function () {
  console.log("Script loaded");
  populateArr();
  $("#sortBtn").click(sort);
});

function populateArr() {
  $("#listdiv").html("");
  for (let i = 0; i < students.length; i++) {
    $("#listdiv").append("<li>" + students[i] + "</li>");
  }
}

function sort() {
  students.sort();
  populateArr();
}
