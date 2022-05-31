// Assignment Code
var generateBtn = document.querySelector("#generate"); //variable is targeting the generate id within the HTML.

// 1. prompt the user for password criteria
//    a. password length 8-128
//    b. lowercase, uppercase, numeric, and/or special characters
// 2. validate the user's input
// 3. password is generated based on criteria
// 4. display password to page
var number = ['0','1', '2','3','4','5','6','7','8','9'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbol = [ '@', '%', '+', '\\', '/', "'", '!','#','$','^', '?', ':', ',', ')', '(', '}', '{', ']','[', '~','-','_','.'];

var isUpperCase = false;
var isSpecialChar= false;
var isLowerCase=false;
var isNumber=false;
var choices;
var enter;
var password = [];

//Prompting the user for password criteria
function generatePassword()
{
    let lMin = 8;
    let lMax = 128;
    let length = 0;
    enter = parseInt(prompt("How long would you like your password to be? "));

    while (enter < lMin || enter > 128)
    {
        // if user input is less than 8 or greater than 128, keep looping
        if (enter <= lMin ||  enter >= 128)
        {
            enter = parseInt(prompt("Password must be between 8 and 128 characters. Please try again. "));
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
        choices = number.concat(upper,lower,symbol);
    }
    else if (isUpperCase && isLowerCase && isSpecialChar){
        choices = upper.concat(lower,symbol);
    }
    else if(isUpperCase && isLowerCase && isNumber){
        choices = upper.concat(lower,number);
    }
    else if(isUpperCase && isSpecialChar && isNumber){
        choices = upper.concat(symbol,number);
    }
    else if(isSpecialChar && isLowerCase && isNumber){
        choices = symbol.concat(lower,number);
    }
    else if(isSpecialChar && isNumber){
        choices = symbol.concat(number);
    }
    else if(isSpecialChar && isLowerCase){
        choices = symbol.concat(lower);
    }
    else if(isSpecialChar && isUpperCase){
        choices = symbol.concat(upper);
    }
    else if(isSpecialChar && isNumber){
        choices = symbol.concat(number);
    }
    else if(isLowerCase && isUpperCase){
        choices = lower.concat(upper);
    }
    else if(isNumber && isUpperCase){
        choices = number.concat(upper);
    }
    else if (isNumber){
        choices = number;
    }
    else if (isLowerCase){
        choices = lower;
    }
    else if (isUpperCase){
        choices = upper;
    }
    else if (isSpecialChar){
        choices = symbol;
    }

    var randomPass = [];
    

    for(i = 0; i <= enter; i++){
        var userChoices = choices [Math.floor(Math.random() * choices.length)];
        randomPass.push(userChoices);
        
    }

    var password = randomPass.join("");
    writePassword(password);
    return password;



    
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Generate password is not a function.
  var passwordText = document.querySelector("#password") = password; //#password refers to the card created within the HTML. Stores the generated password.
  
  

  passwordText.value = password;

}

// Add event listener to generate button //When user clicks, writePassword function is called.
generateBtn.addEventListener("click", writePassword);




//Password Generator functions

function getRandomNumber(){
    
    return number[Math.floor(Math.random()* number.length)]
}

function getRandomLower(){
    
    return lower[Math.floor(Math.random()* lower.length)]
}

function getRandomUpper(){
    
    return upper[Math.floor(Math.random()* upper.length)]
    
}
function getRandomSymbol(){
    
    return symbol[Math.floor(Math.random()* symbol.length)]
}




