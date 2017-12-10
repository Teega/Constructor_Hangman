
//     Letter: Used for each letter in the current word.Each letter object should either display an underlying character, or a blank placeholder(such as an underscore), depending on whether or not the user has guessed the letter.This should contain letter specific logic and data.
function Letter(letter) {
    this.letter = letter;
    this.visible = false;
    //display the letter or show an underscore
    this.checkLetter = function(){
        if (this.visible) {
            return this.letter
        }
        return "_"
    }
    //check to see if userguessed letter is ewual to the current letter
    this.userGuess = function(userLetter){
        if(this.letter == userLetter){
            this.visible = true;
            return true;
        }
        return false;
    }
};




module.exports = Letter;





// Look into function prototypes and use them for a few of your constructor's methods.