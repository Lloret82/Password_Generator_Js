// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890";
  var special = "!@£$%^&*()";

  var finalPasswordCharactorOptions = ""; 


  var length = parseInt(prompt("How long would you like password between 8 and 128"))
  if(length < 8){
    alert("the password need to be a minimum of 8 chars");
    return;
  }
  if(length > 128){
    alert("the password can't be longer than 128 chars");
    return;
  }
  var wantsLowerCase = confirm("Do you want lower case letters?");
  var wantsUpperCase = confirm("Do you want upper case letters?");
  var wantsNumber = confirm("Do you want Number?"); 
  var wantsSpecial = confirm("Do you want Special?");
  if(wantsLowerCase === true){
    finalPasswordCharactorOptions += lower;
  } 
  if(wantsUpperCase === true){
    finalPasswordCharactorOptions += upper;
  } 
  if(wantsNumber === true){
    finalPasswordCharactorOptions += number;
  } 
  if(wantsSpecial === true){
    finalPasswordCharactorOptions += special;
  } 

  return finalPasswordCharactorOptions;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
