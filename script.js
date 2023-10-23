// Assignment Code
var generateBtn = document.querySelector("#generate");

var Lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var Numbers = '1234567890'.split('');
var SpecialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=".split('');

var includeLowercase = false;
var includeUppercase = false;
var includeNumbers = false;
var includeSpecialCharacters = false;

function generatePassword() {
  var allCharacters = []
  var passwordLength = prompt("Please choose a number of characters between 8 and 128.");
  passwordLength = parseInt (passwordLength);

  if (passwordLength <8 || passwordLength >128) {
    alert ("Please pick a number between 8 and 128.")
  } else {
    alert ("You have selected " + passwordLength + " characters.")
  }

  includeLowercase = confirm("Would you like to use Lowercase letters?");
  includeUppercase = confirm("Would you like to use Uppercase letters?");
  includeNumbers = confirm("Would you like to use Numbers?");
  includeSpecialCharacters = confirm("Would you like to use Special Characters?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert ("Please select at least one of the options to create your password.") }

    if (includeLowercase) {
      allCharacters = allCharacters.concat(Lowercase);
  }

  if (includeUppercase) {
      allCharacters = allCharacters.concat(Uppercase);
  }

  if (includeNumbers) {
      allCharacters = allCharacters.concat(Numbers);
  }

  if (includeSpecialCharacters) {
      allCharacters = allCharacters.concat(SpecialCharacters);
  }

  var password = ''

  for (var i = 0; i < passwordLength; i++) {
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  return password;
};

// Write password to the #password input
function writePassword() {
  includeLowercase = false
  includeUppercase = false
  includeNumbers = false
  includeSpecialCharacters = false

  var password = '';
  
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);