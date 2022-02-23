$(function () {
  console.log("Script loaded");
  loadReceipe();
  $("#receipediv").on("click", ".deletebutton", handleDelete);
});

function handleDelete() {
  var btn = $(this);

  var id = btn.attr("data-id");
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes/" + id,
    method: "DELETE",
    success: loadReceipe,
  });
}

function loadReceipe() {
  $.ajax({
    url: "https://usman-recipes.herokuapp.com/api/recipes",
    method: "GET",
    success: getRequestData,
    error: handleError,
  });
}
function handleError() {
  $("#receipediv").empty();
  $("#receipediv").html("Error on server");
}
function getRequestData(response) {
  $("#receipediv").empty();
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    $("#receipediv").append(
      `<div class = "receipe"><h3>${response[i].title}<button class="btn btn-danger deletebutton float-right" data-id=${response[i]._id}>Delete</button></h3><p>${response[i].body}</p></div>`
      // "<div class = receipe><h3>" +float-right
      //   response[i].title +
      //   "</h3><p>" +
      //   response[i].body +
      //   "</p></div>"
    );
  }
}
