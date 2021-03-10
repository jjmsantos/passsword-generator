//when button is pressed show activate 1 prompt window, followed by 4 confirm windows

//pwLength, length of password between 8 - 128 characters
    //wrap following if statement in while loop
    //if pwLength >= 8 && pwLength <= 128
    //else invalid input

//lowerGen, will lowercase be included

//upperGen, will uppercase be included

//numberGen, will numbers be included

//specialGen, will special characters be included


//once all prompts answered generate password using true confirm prompts criteria


/*SET GLOBAL VARIABLES*/

var generateBtn = document.querySelector("#generate");
//string.prototype.split() found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
//learned that placing '\' infront of the symbol you want to include will call it in the string, and js will not recognize it as syntax
var special = "!@#$%^&*()_+-={}[]:;<,>.?/'\"|\\";


/*END OF GLOBAL VARIABLES*/


/* START OF FUNCTIONS*/

function generatePassword() {
  var genLength = window.prompt("How many characters do you want the password to be? Enter a value between 8 - 128.");

  if (genLength <= 7 || genLength >= 129) {
      window.alert("Invalid entry. Please enter a value between 8 - 128");
      generatePassword();
  }
  else{
    console.log("Password length is " + genLength);

    //User wants lowercase letters?
    var needLower = confirm("Would you like lowercase characters to be included?");
  
    //User wants uppercase letters?
    var needUpper = confirm("Would you like uppercase characters to be included?");
    
    //User wants numbers?
    var needNumber = confirm("Would you like number characters to be included?");
    
    //User wants special characters?
    var needSpecial = confirm("Would you like special characters to be included?");

    while (needLower !== true && needUpper !== true && needNumber !== true && needSpecial !== true){
      window.alert("You must select at least 1 parameter.")
      var needLower = confirm("Would you like lowercase characters to be included?");
      var needUpper = confirm("Would you like uppercase characters to be included?");
      var needNumber = confirm("Would you like number characters to be included?");
      var needSpecial = confirm("Would you like special characters to be included?")
    }
  }

  //Pass all true parameters into object
  var passwordObject = [""];

  //check if includeLower will pass to passwordOject oject
  var includeLower = lower.split("");

  if (needLower === true) {
    passwordObject = passwordObject.concat(includeLower);
    console.log("Lowercase to be included");
  }
  else{
    console.log("Lowercase will not be included");
  }

  //check if includeUpper will pass to passwordObject object
  var includeUpper = upper.split("");

  if (needUpper === true) {
    passwordObject = passwordObject.concat(includeUpper);
    console.log("Uppercase letters to be included");
  }
  else {
    console.log("Uppercase letter will not be included");
  }

   //check if includeNumber will pass to passwordObject object
   var includeNumber = number.split("");

   if (needNumber === true) {
    passwordObject = passwordObject.concat(includeNumber);
    console.log("Numbers to be included");
  }
  else {
    console.log("Numbers will not be included");
    console.log("String that password will generate from " + passwordObject);
  }

 //check if includeSpecial will pass to passwordObject object
 var includeSpecial = special.split("");

 if (needSpecial === true) {
  passwordObject = passwordObject.concat(includeSpecial);
  console.log("Special characters to be included");
  }
  else {
  console.log("Special characters will not be included");
  }

  //initiate randomly generated password
  for (var i = 0; i < genLength; i++) {
    var finalPassword = finalPassword + passwordObject[Math.floor(Math.random() * passwordObject.length)];
    console.log(finalPassword);
  }
  return finalPassword;

}

/*END OF FUNCTIONS*/



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password") ; // return to html
  
  passwordText.value = password;
}

//On click, call generatePassword
generateBtn.addEventListener("click", writePassword);