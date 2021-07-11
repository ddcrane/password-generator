// password must be
//between 8 and 128 characters
//include lwoercase, uppercase, numbers or special charcters
//then generate password


// Assignment code here
var length = function(){
  var result = window.prompt("How many characters do you want your password to be? Enter a number between 8 and 128.");
 if (result >= 8 && result <= 128) {
  return result;
 } else {
  window.alert('Please provide a number no less than 8 and no greater than 128.');
  length();
  console.log(length);
 }
}

//ask for character type
var charTypeLowerCase = function () {
var result = window.confirm("Should your password include lowercase letters?");
if (result === true) {
  charTypeLowerCase = true;
} else {
  charTypeLowerCase = false;
}
}

var charTypeUpperCase = function () {
 var result = window.confirm("Should your password include uppercase letters?");
 if (result === true) {
  charTypeUpperCase = true;
} else {
  charTypeUpperCase = false;
}
}

var charTypeNumbers = function () {
  var result = window.confirm("Should your password include numbers?");
  if (result === true) {
    charTypeNumbers = true;
  } else {
    charTypeNumbers = false;
  }
}

var charTypeSpecial = function () {
  var result = window.confirm("Should your password include special chatacters?");
  if (result === true) {
    charTypeSpecial = true;
  } else {
    charTypeSpecial = false;
  }
}



//generate password
function generatePassword() {
  //call criteria functions
  length();
  charTypeLowerCase();
  charTypeUpperCase();
  charTypeSpecial();
  charTypeNumbers();

  //evaluate character type
  var charSet = "";
  
  if( (charTypeLowerCase === true) && (charTypeUpperCase === false) && (charTypeSpecial === false) && (charTypeNumbers === false)) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } 
  
  else if((charTypeLowerCase === false) && (charTypeUpperCase === true) && (charTypeSpecial === false) && (charTypeNumbers === false)) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  
  else if( (charTypeLowerCase === false) && (charTypeUpperCase === false) && (charTypeSpecial === true) && (charTypeNumbers === false)) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 

  else if( (charTypeLowerCase === false) && (charTypeUpperCase === false) && (charTypeSpecial === false) && (charTypeNumbers === true)) {
    charSet = "0123456789";
  } 
  
  else if ((charTypeLowerCase === true) && (charTypeUpperCase === true) && (charTypeSpecial === false) && (charTypeNumbers === false)){
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }else if ((charTypeLowerCase === true) && (charTypeUpperCase === false) && (charTypeSpecial === true) && (charTypeNumbers === false)){
    charSet = "abcdefghijklmnopqrstuvwxyz !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  else if ((charTypeLowerCase === true) && (charTypeUpperCase === false) && (charTypeSpecial === false) && (charTypeNumbers === true)){
    charSet = "abcdefghijklmnopqrstuvwxyz0123456789"
  }
  else if ((charTypeLowerCase === false) && (charTypeUpperCase === true) && (charTypeSpecial === true) && (charTypeNumbers === false)){
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  else if ((charTypeLowerCase === false) && (charTypeUpperCase === true) && (charTypeSpecial === false) && (charTypeNumbers === true)){
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  }
  else if ((charTypeLowerCase === false) && (charTypeUpperCase === false) && (charTypeSpecial === true) && (charTypeNumbers === true)){
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789"
  }
  //three
  else if ((charTypeLowerCase === true) && (charTypeUpperCase === true) && (charTypeSpecial === true) && (charTypeNumbers === false)){
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  else if ((charTypeLowerCase === false) && (charTypeUpperCase === true) && (charTypeSpecial === true) && (charTypeNumbers === true)){
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789"
  }
  else if ((charTypeLowerCase === true) && (charTypeUpperCase === true) && (charTypeSpecial === false) && (charTypeNumbers === true)){
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  }
  else if ((charTypeLowerCase === true) && (charTypeUpperCase === false) && (charTypeSpecial === true) && (charTypeNumbers === true)){
    charSet = "abcdefghijklmnopqrstuvwxyz !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789"
  }
  //all true
  else if ((charTypeLowerCase === true) && (charTypeUpperCase === true) && (charTypeSpecial === true) && (charTypeNumbers === true)){
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789"
  }


  var pass =""

  for (i = 1; i <= length; i++) {
    var passLength = Math.floor(Math.random() * charSet.length + 1);
      
    pass += str.charAt(passLength);
  }
  console.log(pass);
  return pass;
  
}








//dont mess with this//


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
