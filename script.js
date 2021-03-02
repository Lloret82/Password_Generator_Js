// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberC = "1234567890";
  var specialC = "!@£$%^&*()_+={}[]:|;?><,./~`";

  var finalPasswordCharacterOptions = ""; 
  var finalPassword = "";
  

  var length = parseInt(prompt("How long would you like password between 8 and 128"))
  if(isNaN(length)){
    alert("Please insert a valid Number!")
    return;
  }
  if(length > 128){
    alert("the password can't be longer than 128 chars");
    return;
  }
if(length < 8){
    alert("the password need to be a minimum of 8 chars");
    return;
  }
  

  var wantsLowerCase = confirm("Do you want lower case letters?");
  var wantsUpperCase = confirm("Do you want upper case letters?");
  var wantsNumber = confirm("Do you want Number?"); 
  var wantsSpecial = confirm("Do you want Special?");

  
  if(wantsLowerCase === true){

    finalPasswordCharacterOptions += lowerCase;
  } 
  if(wantsUpperCase === true){
    finalPasswordCharacterOptions += upperCase;
  } 
  if(wantsNumber === true){
    finalPasswordCharacterOptions += numberC;
  } 
  if(wantsSpecial === true){
    finalPasswordCharacterOptions += specialC;
  } 

  for(var i = 0; i <= length; i++){
    var randomCharacter = Math.floor(Math.random() * finalPasswordCharacterOptions.length)
    finalPassword += finalPasswordCharacterOptions[randomCharacter]
  }

  return finalPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
