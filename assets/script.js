// Assignment Code
var generateBtn = document.querySelector("#generate"); //variable is targeting the generate id within the HTML.

// 1. prompt the user for password criteria
//    a. password length 8-128
//    b. lowercase, uppercase, numeric, and/or special characters
// 2. validate the user's input
// 3. password is generated based on criteria
// 4. display password to page


var lengthMin=8;
var lengthMax=128;
var number = ['0','1', '2','3','4','5','6','7','8','9'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbol = [ '@', '%', '+', '\\', '/', "'", '!','#','$','^', '?', ':', ',', ')', '(', '}', '{', ']','[', '~','-','_','.'];

var isUpperCase = false;
var isSpecialChar= false;
var isLowerCase=false;
var uin;
var password = [];

//Prompting the user for password criteria
function generatePassword()
{
    let lMin = 8;
    let lMax = 128;
    let length = 0;
    uin = window.prompt("How long would you like your password to be? ");

    while (uin < lMin || uin > 128)
    {
        // if user input is less than 8 or greater than 128, keep looping
        if (uin <= lMin ||  uin >= 128)
        {
            uin = window.prompt("Password must be between 8 and 128 characters. Please try again. ");
        }
        
    }

    isNumber = confirm("Do you want to include numbers in your password?")
    isUpperCase = confirm("Do you want to include Uppercase letters in your password?");
    isLowerCase = confirm("Do you want to include lowercase letters in your password?");
    isSpecialChar = confirm("Do you want to include Special Characters in your password?");

    
    // Password generators

    if(!isUpperCase && !isLowerCase && !isSpecialChar && !isNumber){
        choices = alert("You must choose a criteria!");
    }
    else if (isUpperCase && isLowerCase && isSpecialChar && isNumber){
        uin = number.concat(upper,lower,symbol);
    }
    else if (isUpperCase && isLowerCase && isSpecialChar){
        uin = upper.concat(lower,symbol);
    }
    else if(isUpperCase && isLowerCase && isNumber){
        uin = upper.concat(lower,number);
    }
    else if(isUpperCase && isSpecialChar && isNumber){
        uin = upper.concat(symbol,number);
    }
    else if(isSpecialChar && isLowerCase && isNumber){
        uin = symbol.concat(lower,number);
    }
    else if(isSpecialChar && isNumber){
        uin = symbol.concat(number);
    }
    else if(isSpecialChar && isLowerCase){
        uin = symbol.concat(lower);
    }
    else if(isSpecialChar && isUpperCase){
        uin = symbol.concat(upper);
    }
    else if(isSpecialChar && isNumber){
        uin = symbol.concat(number);
    }
    else if(isLowerCase && isUpperCase){
        uin = lower.concat(upper);
    }
    else if(isNumber && isUpperCase){
        uin = number.concat(upper);
    }
    else if (isNumber){
        uin = number;
    }
    else if (isLowerCase){
        uin = lower;
    }
    else if (isUpperCase){
        uin = upper;
    }
    else if (isSpecialChar){
        uin = symbol;
    }
    

    for(i = 0; i <= +uin; i++){
        var userChoice = uin [Math.floor(Math.random() * uin.length)];
        userChoice.push(uin);
        
    }

    return uin;
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Generate password is not a function.
  var passwordText = document.querySelector("#password"); //#password refers to the card created within the HTML. Stores the generated password.
  
  

  passwordText.value = password;

}

// Add event listener to generate button //When user clicks, writePassword function is called.
generateBtn.addEventListener("click", writePassword);




//Password Generator functions

function getRandomNumber(){
    
    return numbers[Math.floor(Math.random()* numbers.length)]
}

function getRandomLower(){
    
    return lowers[Math.floor(Math.random()* lowers.length)]
}

function getRandomUpper(){
    
    return uppers[Math.floor(Math.random()* uppers.length)]
    
}
function getRandomSymbol(){
    
    return symbols[Math.floor(Math.random()* symbols.length)]
}




