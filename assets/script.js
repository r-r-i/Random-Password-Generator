// Assignment Code
var generateBtn = document.querySelector("#generate"); //variable is targeting the generate id within the HTML.

var lengthMin=8;
var lengthMax=128;

function generatePassword(){
    var userChoice= window.prompt("How many characters would you like your password to contain?");

    if (userChoice < lengthMin || userChoice > lengthMax) {
        window.prompt("your password must contain between 8 and 128 characters"); 

    } else if (userChoice > lengthMin || userChoice < lengthMax) {
        window.confirm("Would you like your password to contain lower case letters?")
    } else {
        window.confirm("Would you like your password to contain upper case letters?")
    }

}
    
    
    
    
        
    



    

// 1. prompt the user for password criteria
//    a. password length 8-128
//    b. lowercase, uppercase, numeric, and/or special characters
// 2. validate the user's input
// 3. password is generated based on criteria
// 4. display password to page







// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Generate password is not a function.
  var passwordText = document.querySelector("#password"); //#password refers to the card created within the HTML. Stores the generated password.

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //When user clicks, writePassword function is called.



function getRandomNumber(){
    var numbers = ['0','1', '2','3','4','5','6','7','8','9'];
    return numbers[Math.floor(Math.random()* numbers.length)]
}

function getRandomLower(){
    var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return lowers[Math.floor(Math.random()* lowers.length)]
}

function getRandomUpper(){
    var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return uppers[Math.floor(Math.random()* uppers.length)]
    
}
function getRandomSymbol(){
    var symbols = [ '@', '%', '+', '\\', '/', "'", '!','#','$','^', '?', ':', ',', ')', '(', '}', '{', ']','[', '~','-','_','.'];
    return symbols[Math.floor(Math.random()* symbols.length)]
}

console.log(getRandomSymbol() + getRandomLower() + getRandomNumber() + getRandomUpper());




