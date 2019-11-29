//the function userInfo()
function userInfo() {
  var maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var cc = parseInt(document.getElementById("cc").value);
  var yy = parseInt(document.getElementById("yy").value);
  var mm = parseInt(document.getElementById("mm").value);
  var dd = parseInt(document.getElementById("dd").value);

  if (mm == "" || mm < 1 || mm > 12) {
    alert("Please enter a valid month ");
    return false;
  }

  if (dd == "" || dd < 1 || dd > 31) {
    alert("Please enter a valid day ");
    return false;
  }
}
