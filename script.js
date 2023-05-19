// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = ("abcdefghijklmnopqrstuvwxyz".toUpperCase()).split("");
var spChar = "~`!@#$%^&*()-_+={}[]|/:;'<>,.?".split("");
var numbers = [1,2,3,4,5,6,7,8,9,0];

function promptPass() {
  var passwordLength = prompt("Enter the amount of characters you want in your password");

  if (isNaN(passwordLength)){
    alert("Please enter a valid number");
    promptPass();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128");
    promptPass();
  }
}


function generatePassword() {
  return promptPass();
}
