// Assignment Code
var generateBtn = document.querySelector("#generate")
var textArea = document.querySelector("#password")
var finalPassword = ""
var availableCharacters = []

var uppercase =["A","B","C","D","F","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specialchar = ["!","'","#","$","%","&","(",")","*","+",",",".","/",";",":",">","<","?","@","[","]","^","-","_","~","`"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]

function writepassword(){
var passwordsize = parseInt (prompt ("How long you need your password?"))
if(passwordsize <8 || passwordsize > 128 || isNaN(passwordsize)) {
  alert("Your password should be greater than 8, less than 128 and a Number")
  passwordsize = parseInt(prompt("How long do you want your password to be?"))
}
var upperSelect = confirm ("Would you need Uppercase Letters?")
var lowerSelect = confirm ("Would you need Lowercase Letters?")
var specharSelect = confirm ("Would you need Special Characters?")
var numberSelect = confirm ("Would you need numbers?")

if(upperSelect || lowerSelect || specharSelect || numberSelect){
  if(upperSelect){
    availableCharacters =  availableCharacters.concat(uppercase)
  }

  if(lowerSelect){
    availableCharacters =  availableCharacters.concat(lowercase)
  }

  if(specharSelect){
    availableCharacters =  availableCharacters.concat(specialchar)
  }

  if(numberSelect){
    availableCharacters =  availableCharacters.concat(numbers)
  }

for (var index = 0; index < passwordsize; index++) {
  var randompass = availableCharacters[Math.floor(Math.random() * availableCharacters.length )]
  finalPassword = finalPassword + randompass
}
// Write password to the #password input
textArea.textContent = finalPassword
} else {
  console.log("please select one option")
}
}

// Add event listener to generate button

generateBtn.addEventListener("click", writepassword)