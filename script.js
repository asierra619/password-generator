// Assignment Code
var generateBtn = document.querySelector("#generate");

var Lowercase = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
var Uppercase = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'];
var Numbers = ['1,2,3,4,5,6,7,8,9,0'];
var SpecialCharacters = ["!,@,#,$,%,^,&,*,(,),_,+,~,`,|,},{,[,],:,;,?,>,<,',',.,/,-,="];

generateBtn.addEventListener('click', function() {
  var passwordLength = prompt("Please choose a number of characters between 8 and 128.");

  if (passwordLength <8 || passwordLength >128) {
    return "Please pick a number between 8 and 128."
  } else {
    return "You have selected " + passwordLength + "characters."
  }

  includeLowercase = confirm("Would you like to use Lowercase letters?");

  includeUppercase = confirm("Would you like to use Uppercase letters?");

  includeNumber = confirm("Would you like to use Numbers?");

  includeSpecialCharacters = confirm("Would you like to use Special Characters?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    return "Please select at least one of the options to create your password."

})

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);