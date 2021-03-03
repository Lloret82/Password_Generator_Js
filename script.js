//created variable containing all the characters, a variable for the password string and one for the generated password
function generatePassword() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = "1234567890";
  let special = "!@£$%^&*()_+={}[]:|;?><,./~`";
  let finalPasswordCharacterOptions = "";
  let finalPassword = "";
  // added a parseInt function to transform the user input string and parse into an integer
  let length = parseInt(prompt("How long would you like your password, between 8 and 128"))
  // added a validation for the user input, lenght and isNaN so the user can't input not number characters and lenght outside the parameters
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
  // declaring boolean variables based on user input
  let wantsLowerCase = confirm("Do you want lower case letters?");
  let wantsUpperCase = confirm("Do you want upper case letters?");
  let wantsNumber = confirm("Do you want Number?");
  let wantsSpecial = confirm("Do you want Special characters?");
  // added a while loop to validate that at least one option is selected
  while (wantsLowerCase == false && wantsUpperCase == false && wantsNumber == false && wantsSpecial == false) {
    alert("Please select one type of character");
    wantsLowerCase = confirm("Do you want lower case letters?");
    wantsUpperCase = confirm("Do you want upper case letters?");
    wantsNumber = confirm("Do you want Number?");
    wantsSpecial = confirm("Do you want Special characters?");
  }
  // if a character type is selected, it will be added to the variable of final password options
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

// a loop run for the password lenght choose by the user (-1 to return the exact lenght)
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
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
