$(function () {
  $("#miles").on("input", function () {
    var miles = $("#miles").val();
    var kms = miles * 1.609;
    $("#kms").val(kms);
  });
});
