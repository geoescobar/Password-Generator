var generateBtn = document.querySelector("#generate");

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '>', '<', ')', '('];



function generatePassword() {
  
  var allowedCharacters = [];

  var confirmNumberOfCharacters = prompt('Input number of password characters:');
 if (confirmNumberOfCharacters < 8) {
   alert('Please pick a number between 8 & 128');
   return generatePassword();
 } else if (confirmNumberOfCharacters > 128) {
    alert('Please pick a number between 8 & 128');
    return generatePassword();
 }

  var confirmUppercase = confirm('Do you want to include uppercase letters?');
  if (confirmUppercase === true) {
    for (var i = 0; i < uppercase.length; i++) {
      allowedCharacters.push(uppercase[i]);
    }
  };

  var confirmLowercaseLetters = confirm('Do you want to include lowercase letters? Input yes or no:');
  if (confirmLowercaseLetters === true) {
    for (var i = 0; i < lowercase.length; i++) {
      allowedCharacters.push(lowercase[i]);
    }
  };
  
  var confirmNumbers = confirm('Do you want to include number? Input yes or no:');
  if (confirmNumbers === true) {
    for (var i = 0; i < numbers.length; i++) {
      allowedCharacters.push(numbers[i]);
    }
  };

  var confirmSymbols = confirm('Do you want to include symbols? Input yes or no:');
  if (confirmSymbols === true) {
    for (var i = 0; i < symbols.length; i++) {
      allowedCharacters.push(symbols[i]);
    }
  };
  
  var password = '';
  for (i = 0; i < confirmNumberOfCharacters; i++) {
    var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    var randomChar = allowedCharacters[randomIndex];
    password = password + randomChar;
  }

  return password;
}

function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

