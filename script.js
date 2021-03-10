// Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Add event listener to generate button
// //when buttom is clicked activate writePassword function
// generateBtn.addEventListener("click", writePassword);





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

//display password as alert + on the page for ability to copy paste

var generateBtn = document.querySelector("#generate");

//string.prototype.split() found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
var lower = "abcdefghijklmnopqrstuvwxyz";
var includeLower = lower.split("");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeUpper = upper.split("");

var number = "0123456789";
var includeNumber = number.split("");

//learned that placing '\' infront of the symbol you want to include will call it in the string, and js will not recognize it as syntax
var special = "!@#$%^&*()_+-={}[]:;<,>.?/'\"|\\";
var includeSpecial = special.split("");

var passwordObject = [];

function generatePassword() {
  var genLength = window.prompt("How many characters do you want the password to be? Enter a value between 8 - 128.");

  if (genLength <= 7 || genLength >= 129) {
      window.alert("Invalid entry. Please enter a value between 8 - 128");
      return generatePassword();
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
  }



  //check if includeLower will pass to passwordOject oject
  if (needLower === true) {
    passwordObject = passwordObject.concat(includeLower);
    console.log("Lowercase to be included");
  }
  else{
    console.log("Lowercase will not be included");
  }

  //check if includeUpper will pass to passwordObject object
  if (needUpper === true) {
    passwordObject = passwordObject.concat(includeUpper);
    console.log("Uppercase letters to be included");
  }
  else {
    console.log("Uppercase letter will not be included");
  }

   //check if includeNumber will pass to passwordObject object
   if (needNumber === true) {
    passwordObject = passwordObject.concat(includeNumber);
    console.log("Numbers to be included");
  }
  else {
    console.log("Numbers will not be included");
    console.log(passwordObject);
  }

 //check if includeUpper will pass to passwordObject object
 if (needSpecial === true) {
  passwordObject = passwordObject.concat(includeSpecial);
  console.log("Special characters to be included");
  }
  else {
  console.log("Special characters will not be included");
  }

  

}







function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password") ; // return to html


  
  
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);