// TODO:
// (1) prompt the user for password criteria
//    a. password length 8-128
//    b. lowercase, uppercase, numeric, and/or special characters
// (2) validate the user's input
// (3) password is generated based on criteria
// (4) display password to page

// Assignment Code
var generateBtn = document.querySelector("#generate"); //Targeting the generate id within the HTML.
var number = ['0','1', '2','3','4','5','6','7','8','9'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbol = [ '@', '%', '+', '\\', '/', "'", '!','#','$','^', '?', ':', ',', ')', '(', '}', '{', ']','[', '~','-','_','.'];
var isUpperCase = false;
var isSpecialChar= false;
var isLowerCase=false;
var isNumber=false;
var choices = [];
var enter;
var password = [];

// (1) Prompting the user for password criteria
function generatePassword()
{
    let lMin = 8;
    let lMax = 128;
    let length = 0;
    enter = parseInt(prompt("How long would you like your password to be? ")); // parseInt acts as a somewhat defensive code here. It ensures that the length is only determined by the numbers the user inputs - e.g. will only take the length of 12 if "12 characters" in inputted.

    while (enter < lMin || enter > 128)
    {
        // if user input is less than 8 or greater than 128, keep looping
        if (enter <= lMin ||  enter >= 128)
        {
            enter = parseInt(prompt("Password must be between 8 and 128 characters. Please try again. "));
        }
    }

    isNumber = confirm("Do you want to include Numbers in your password?");
    isUpperCase = confirm("Do you want to include Uppercase letters in your password?");
    isLowerCase = confirm("Do you want to include Lowercase letters in your password?");
    isSpecialChar = confirm("Do you want to include Special Characters in your password?");

    
    // (2) Validate the user's input. My tutor helped me incorporate the use of the spread operator.

    // Condition for when user does not select a criteria.

    if(!isUpperCase && !isLowerCase && !isSpecialChar && !isNumber){
        alert("You must choose a criteria!");
        return false;
     }
    // Conditions for when user selects yes or no for each criteria.   
     if (isNumber){
       choices.push(...number);
     }
     if (isLowerCase){
       choices.push(...lower);
     }
     if (isUpperCase){
       choices.push(...upper);
     }
     if (isSpecialChar){
       choices.push(...symbol);
     }

    // A variable that is an array, storing the user's criteria choice.
    var randomPass = [];
    
    // (3) Password is generated based on user's chosen length and criteria.
    for(i = 1; i <= enter; i++){
        var userChoices = choices [Math.floor(Math.random() * choices.length)];
        randomPass.push(userChoices);
        
    }

    // Removes the commas from the outputted password.
    var password = randomPass.join("");
    return password;

}

// (4) Displays password to page.
function writePassword() {
  var password = generatePassword(); // Generate password is now a function, and is able to be called.
  var passwordText = document.querySelector("#password") ; //#password refers to the id of the card in the HTML (stores the password).
  passwordText.value = password;

}

// Add event listener to generate button //When user clicks, writePassword function is called.
generateBtn.addEventListener("click", writePassword);




