var points = 0;
var FirstName = "James";
var LastName = "Daunt";
var EmailAddess = "jdaunt0@gmail.com";
var Username = "Jdaunt";
var Password = "Password123";

document.getElementById("Fname").innerHTML = FirstName;

function addPoints() {
  var pointsInpput = document.getElementById("inputPoints");
  points = Number(pointsInpput.value);
  document.getElementById("points").innerHTML = points;
}

function loadUserInfo(){
  document.getElementById("Fname").innerHTML = FirstName;
  document.getElementById("Lname").innerHTML = LastName;
  document.getElementById("Email").innerHTML = EmailAddess;
  document.getElementById("User").innerHTML = Username;
}