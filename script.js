// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// og code
// generateBtn.addEventListener("click", writePassword);
// og code

generateBtn.addEventListener('click', function() {
  confirm("Would you like to include lowercase letters? \n OK or Cancel")
  if (confirm === true) {
    console.log("User wants lowercase characters in their password.")
  } else {
      console.log("User does NOT want lowercase characters in their password.")}
  });
  // continueConfirm("Would you like to include uppercase letters? \n OK or Cancel")
