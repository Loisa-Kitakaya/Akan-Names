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

  var day =
    parseInt(cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) %
    7;

  var gender = document.querySelector('input[name="gender"]:checked').value;

  if (gender == 1) {
    if (day === 0) {
      alert("You were born on a Sunday");
      alert("Your name is: " + femaleNames[0]);
    } else if (day === 1) {
      alert("You were born on a Monday");
      alert("Your name is: " + femaleNames[1]);
    } else if (day === 2) {
      alert("You were born on a Tuesday");
      alert("Your name is: " + femaleNames[2]);
    } else if (day === 3) {
      alert("You were born on a Wednesday");
      alert("Your name is: " + femaleNames[3]);
    } else if (day === 4) {
      alert("You were born on a Thursday");
      alert("Your name is: " + femaleNames[4]);
    } else if (day === 5) {
      alert("You were born on a Friday");
      alert("Your name is: " + femaleNames[5]);
    } else if (day === 6) {
      alert("You were born on a Saturday");
      alert("Your name is: " + femaleNames[6]);
    } else {
      alert("Please try again. Input valid data");
    }
  } else {
    if (day === 0) {
      alert("You were born on a Sunday");
      alert("Your name is: " + maleNames[0]);
    } else if (day === 1) {
      alert("You were born on a Monday");
      alert("Your name is: " + maleNames[1]);
    } else if (day === 2) {
      alert("You were born on a Tuesday");
      alert("Your name is: " + maleNames[2]);
    } else if (day === 3) {
      alert("You were born on a Wednesday");
      alert("Your name is: " + maleNames[3]);
    } else if (day === 4) {
      alert("You were born on a Thursday");
      alert("Your name is: " + maleNames[4]);
    } else if (day === 5) {
      alert("You were born on a Friday");
      alert("Your name is: " + maleNames[5]);
    } else if (day === 6) {
      alert("You were born on a Saturday");
      alert("Your name is: " + maleNames[6]);
    } else {
      alert("Please try again. Input valid data");
    }
  }
}
