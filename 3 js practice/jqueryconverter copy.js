$(function () {
  $("#miles").on("input", converter);
});

function converter() {
  var miles = $("#miles").val();
  var kms = miles * 1.609;
  $("#kms").val(kms);
}
