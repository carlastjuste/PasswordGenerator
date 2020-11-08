
// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  alert ("select which criteria to include in the password");
  var passLength = parseInt(prompt("Choose a length of at least 8 characters and no more than 128 characters"));

  while (isNaN(passLength) || passLength < 8 || passLength > 128)
  {
    
    if (passLength === null)   {
      return;
    }

    passLength = prompt("choose a length of at least 8 characters and no more than 128 characters");
  }


  var lowerCase = confirm("Do you want lowercase characters in your password");
  var upperCase = confirm("Do you want uppercase characters in your password");
  var numChar = confirm("Do you want numbers in your password?");
  var specChar = confirm("Do you want special characters in your password?");

  if (lowerCase || upperCase || numChar || specChar)
  {
    var otherToGen = '';
    var intList = '0123456789';
    var uCharList ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lCharList ='abcdefghijklmnopqrstuvwxyz'; 
    var sCharList ="!#$%&()*+,-./:;<=>?@[]^_`{|}~";
    var remainlenght = 0;
    var criteriaMatch = 0;
    var value = '';

   if (numChar){
     value += genchar(1, intList);
     criteriaMatch++;
     otherToGen += intList;

   }

   if (lowerCase){
    value += genchar(1, lCharList);
    criteriaMatch++;
    otherToGen += lCharList;
  }

  if (upperCase) {
    value += genchar(1, uCharList);
    criteriaMatch++;
    otherToGen += uCharList;
  }


  if(specChar) {
    value += genchar(1, sCharList);
    criteriaMatch++;
    otherToGen += sCharList;

  }

    remainlenght = passLength-criteriaMatch;
    value += genchar(remainlenght, otherToGen);

    return value;
}
}



function genchar(length, charlist) {
  var result = '';
  var charactersLength = charlist.length;
  for ( var i = 0; i < length; i++ ) {
     result += charlist.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
