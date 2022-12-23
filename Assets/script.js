// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var num = [1,2,3,4,5,6,7,8,9,0]
var special = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","{","]","}",";",":","'","/","?",".",">",",","<"]
var passwordLength = 128;
var userInput = 0

// Write password to the #password input
function writePassword() {
  userInput = window.prompt ("How many characters between 8-128 do you want?")
  if (userInput <= 7 || userInput >= 129){
    return window.prompt ("ERROR!");
  } 
  var caseUpper = window.prompt ("Would you like upper case letters?")
  var caseUpper1 = true;
  if (caseUpper == "n" || caseUpper == "no"){
    caseUpper1 = false;
  }
  var caseLower = window.prompt ("Would you like lower case letters?")
  var caseLower1 = true;
  if (caseLower == "n" || caseLower == "no"){
    caseLower1 = false;
  }
  var numero = window.prompt ("Would you like numbers?")
  var numero1 = true;
  if (numero == "n" || numero == "no"){
    numero1 = false;
  }
  var specialChar = window.prompt ("Would you like special characters?")
  var specialChar1 = true;
  if (specialChar == "n" || specialChar == "no"){
    specialChar1 = false;
  }
  if (caseUpper1 === false && caseLower1 === false && numero1 === false && specialChar1 === false){
    return window.prompt("ERROR!")
  }

  var password = generatePassword(caseUpper1, caseLower1, numero1, specialChar1);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword(yesUpper, yesLower, yesNum, yesSpecial) {
  var finalPassword = ""
  for (var i = 1; i <= parseInt(userInput); i++){
   while(finalPassword.length !== i){
    var userInput1 = Math.floor(Math.random()*4)
    if (userInput1 == 0 && yesUpper === true){
      var upperCase1 = Math.floor(Math.random()* upperCase.length)
      finalPassword = finalPassword.concat(upperCase [upperCase1])
    }else if (userInput1 == 1 && yesLower === true){
      var lowerCase1 = Math.floor(Math.random()* lowerCase.length)
      finalPassword = finalPassword.concat(lowerCase [lowerCase1])
    } else if (userInput1 == 2 && yesNum=== true){
    var num1 = Math.floor(Math.random()* num.length)
    finalPassword = finalPassword.concat(num [num1])
    } else if (userInput1 == 3 && yesSpecial=== true){
      var special1 = Math.floor(Math.random()* special.length)
      finalPassword = finalPassword.concat(special [special1])
    }
    }  
  }
  return finalPassword;
}
