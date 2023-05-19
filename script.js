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
var passwordChoice = [];
var newPass = [];


function indexRandom(arr) {
  var index = Math.floor(Math.random() * arr.length)
  return arr[index];
}


function promptPasswordLength() {
  var passwordLength = prompt("Enter the amount of characters you want in your password");

  if (isNaN(passwordLength)){
    alert("Please enter a valid number");
    promptPasswordLength();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128");
    promptPasswordLength();
  }

  promptPasswordTypes();

  do {
    var i = indexRandom(passwordChoice);
    newPass.push(i);
  } while (newPass.length < passwordLength);

  return newPass.join("");
}

function promptPasswordTypes() {
  var typeNames = ["uppercase letters", "lowercase letters", "special characters", "numbers"];
  var typeChoices = [uppercase, lowercase, spChar, numbers];

  for (var i = 0; i < typeNames.length; i++) {
    if (confirm(`Do you want ${typeNames[i]} in your password?`)) {
      newPass.push(indexRandom(typeChoices[i]));
      passwordChoice.push(...typeChoices[i]);
    }
  }

  if (newPass.length < 1) {
    alert("You need to select a data type for your password");
    promptPasswordTypes();
  }

  return;
}


function generatePassword() {
  newPass = [];
  passwordChoice = [];

  return promptPasswordLength();
}