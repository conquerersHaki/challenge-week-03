// Assignment Code
var generateBtn = document.querySelector("#generate");

// A function to get the password
    function getPassword() {
    
// variables defining characters allowed in password
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
    var numeric = "0123456789";
    var symbols = "!@#$%^&*()-=+<>?/|':[]{}";
    var multiSelect = "";
    var randomKey = "";

//Initial popup to prompt user to input password chracter length.
    var keyLength = prompt(
        "Password must be between 8 to 128 characters long, please enter desired length."
    );
    
// Return to window if the selected number is out of range for password criteria
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
        alert("Password must be between 8 and 128 characters in length. Please try again.");        
        return;

// Variable Prompts. Once the end user successfully enters a valid numberor value, this prompt will notify them that their password will contain the following characters when the random key is finally generated
    } else {
    var upperAlpha = confirm("Would you like your password to contain uppercase letters?");
    var lowerAlpha = confirm("Would you like your password to contain lowercase letters?");
    var numericOptions = confirm("Would you like your password to contain numbers?");
    var specialSymbols = confirm("Would you like your password to contain special characters?");
    }

    if (upperAlpha) {multiSelect += uppercaseABC;}
    if (lowerAlpha) {multiSelect += lowercaseABC;}
    if (numericOptions) {multiSelect += numeric;}
    if (specialSymbols) {multiSelect += symbols;}

// looping in case the password criteria is not met
    for (i = 0; i < keyLength; i++) {

// randomizer for password
        randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
    }
    return(randomKey);
}

// This is where the password will be generated inside the display box
    var passwordText = document.querySelector("#password");
    function writePassword(randomKey) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = randomKey;
}

// adding event to call function
    generateBtn.addEventListener("click", function () { writePassword(getPassword()) });

    