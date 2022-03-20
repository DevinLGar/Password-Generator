function generatePassword() {
    // How many characters 
    var passLength = window.prompt("How many characters would you like the password to be?");
    if(isNaN(passLength)) {
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

// Password criteria prompts
// *length criteria (8, 128)
// *lowercase, uppercase, etc