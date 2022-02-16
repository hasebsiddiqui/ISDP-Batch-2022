$(function () {
  $("#todobtn").click(btnclick);
  $("#todos").on("click", "li", function () {
    $(this).remove();
  });
});

function btnclick() {
  var value = $("#todoinput").val();

  if (!value) {
    $("#todoinput").addClass("error");
    return;
  }
  $("#todoinput").removeClass("error");
  $("#todos").append("<li>" + value + "</li>");
  $("#todoinput").val("");
}
