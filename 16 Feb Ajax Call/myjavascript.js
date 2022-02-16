$(function () {
  $("#submit").click(function () {
    $.get("data.txt", function (res) {
      $("#datadiv").empty();
      $("#datadiv").append(res);
    });
  });
});
