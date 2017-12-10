// Word: Used to create an object representing the current word the user is attempting to guess.This should contain word specific logic and data.
var Letter = require('./letter.js');
function Word (word) {
    //store word
    this.word = word;
    //store an array of letters slpit from our word
    this.letterConArray = [];
    this.underScoresArray = [];
    this.getMeUnderscores = function(){
        for(var i = 0; i < word.length; i++){
            this.letterConArray.push(new Letter(this.word[i]))

        }
        console.log(this.letterConArray)
        this.underScores()
    }
    //store underscores to a brand new array
    this.underScores = function(){
        for(var i = 0; i < this.letterConArray.length; i++){
            this.underScoresArray.push(this.letterConArray[i].checkLetter())
        }
        console.log(this.underScoresArray.join(" "))
    }
    //loop trough our array and see if our userguess equals our current indexd letter

    //displaying our word underscored to console
    //display our word iwth guessed letters

};

module.exports = Word;