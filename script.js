// Assignment code here

// Create Global arrays for project
var password_content = []
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// Create funtion to fill password_content array
function fillContent() {

  var confirmLow = window.confirm("Would you like lower case letters in your password?");
  var confirmUpper = window.confirm("Would you like upper case letters in your password?");
  var confirmNumbers = window.confirm("Would you like numbers in your password?");
  var confirmSpecial = window.confirm("Would you like special characters in your password?");

  if (confirmLow) {
    password_content = password_content.concat(lower);
  }

  if (confirmUpper) {
    password_content = password_content.concat(upper);
  }

  if (confirmNumbers) {
    password_content = password_content.concat(numbers);
  }

  if (confirmSpecial) {
    password_content = password_content.concat(special);
  }
  return password_content;
}



// Create function to prompt password length 
function generatePassword() {
  var password_length = window.prompt("How long would you like your password to be? Please pick a number between 8 and 128.");

  if (password_length >= 8 && password_length <= 128) {

    fillContent();
  } else {

    generatePassword();
  }
  password_length = parseInt(password_length);

  var passwordFinished = []

  for (i = 0; i < password_length; i++) {

    passwordFinished[i] = password_content[Math.floor(Math.random() * password_content.length)]
  }

  passwordFinished = passwordFinished.join("");

  return passwordFinished

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
