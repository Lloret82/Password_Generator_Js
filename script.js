// Assignment Code
let generateBtn = document.querySelector("#generate");
function generatePassword() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = "1234567890";
  let special = "!@£$%^&*()_+={}[]:|;?><,./~`";
  let finalPasswordCharacterOptions = "";
  let finalPassword = "";
  let length = parseInt(prompt("How long would you like your password, between 8 and 128"))
  if (isNaN(length)) {
    alert("Please insert a valid Number!")
    return;
  }
  if (length > 128) {
    alert("the password can't be longer than 128 characters");
    return;
  }
  if (length < 8) {
    alert("the password need to be a minimum of 8 characters");
    return;
  }
  let wantsLowerCase = confirm("Do you want lower case letters?");
  let wantsUpperCase = confirm("Do you want upper case letters?");
  let wantsNumber = confirm("Do you want Number?");
  let wantsSpecial = confirm("Do you want Special characters?");
  while (wantsLowerCase == false && wantsUpperCase == false && wantsNumber == false && wantsSpecial == false) {
    alert("Please select one type of character");
    wantsLowerCase = confirm("Do you want lower case letters?");
    wantsUpperCase = confirm("Do you want upper case letters?");
    wantsNumber = confirm("Do you want Number?");
    wantsSpecial = confirm("Do you want Special characters?");
  }
  if (wantsLowerCase === true) {

    finalPasswordCharacterOptions += lowerCase;
  }
  if (wantsUpperCase === true) {
    finalPasswordCharacterOptions += upperCase;
  }
  if (wantsNumber === true) {
    finalPasswordCharacterOptions += number;
  }
  if (wantsSpecial === true) {
    finalPasswordCharacterOptions += special;
  }


  for (let i = 0; i <= length - 1; i++) {
    let randomCharacter = Math.floor(Math.random() * finalPasswordCharacterOptions.length)
    finalPassword += finalPasswordCharacterOptions[randomCharacter]
  }

  return finalPassword;
}



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
