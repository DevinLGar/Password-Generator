var passLength;
var confirmUpper;
var confirmLower;
var confirmNum;
var confirmSpec;
var criteria;

specChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

letterLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

letterUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function generatePassword() {
  // How many characters 
  var passLength = window.prompt("How many characters would you like the password to be?");
  if (isNaN(passLength)) {
    window.alert("Input a numeric value");
  }
  else if (passLength < 8 || passLength > 50) {
    window.alert("Password length must be 8-50 characters");
  }
  // confirm uppercase, lowercase, numeric, special characters
  else {
    confirmUpper = confirm("Will the password contain uppercase letters?")
    confirmLower = confirm("Will the password contain lowercase letters?")
    confirmNum = confirm("Will the password contain numbers?")
    confirmSpec = confirm("Will the password contain special characters?")
  };

  // must select atleast one character type
  if (!confirmUpper && !confirmLower && !confirmNum && !confirmSpec) {
    window.alert("You must choose atleast one criteria.")
  }
  // all criterias
  else if (confirmUpper && confirmLower && confirmNum && confirmSpec) {
    criteria = specChar.concat(num, letterLow, letterUp);
  }

  // array placeholder for passLength input
  var password = [];
  // random selection
  for (var i = 0; i < passLength; i++) {
    var pickCrit = criteria[Math.floor(Math.random() * criteria.length)];
    password.push(pickCrit);
  }

  var ps = password.join("");
  return ps;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
