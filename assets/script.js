// Assignment Code
var generateBtn = document.querySelector("#generate"); //variable is targeting the generate id within the HTML.

function generatePassword(){

// 1. prompt the user for password criteria
//    a. password length 8-128
//    b. lowercase, uppercase, numeric, and/or special characters
// 2. validate the user's input
// 3. password is generated based on criteria
// 4. display password to page



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Generate password is not a function.
  var passwordText = document.querySelector("#password"); //#password refers to the card created within the HTML. Stores the generated password.

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When user clicks, writePassword function is called.
