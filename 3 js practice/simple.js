function converter() {
  var miles = document.getElementById("miles").value;
  var kms = miles * 1.609;
  document.getElementById("kms").value = kms;
}

window.onload = function () {
  var miles = document.getElementById("miles");
  miles.oninput = converter;
};
