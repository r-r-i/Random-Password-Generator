// Assignment Code
var generateBtn = document.querySelector("#generate"); //variable is targeting the generate id within the HTML.

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Generate password is not a function.
  var passwordText = document.querySelector("#password"); //#password refers to the card created within the HTML. Stores the generated password.

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When user clicks, writePassword function is called.
