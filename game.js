// The completed game should be able to receive user input using the inquirer or prompt npm packages.

// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

// Each constructor function should be in it's own file and be exported and required wherever needed.

var inquirer = require('inquirer');
var Word = require('./word.js');

var words = ["hello", "hi"]

var randoWord = words[Math.floor(Math.random() * words.length)]

var wordCon = new Word(randoWord);
console.log(wordCon)
wordCon.getMeUnderscores()

function askQuestion(){
    inquirer.prompt({
        type: "input",
        name: "userGuess",
        message: "please type in a letter to guess."
    }).then(function (prompt) {
        console.log(prompt.userGuess);
        var userguess = prompt.userGuess;
    })
}
askQuestion()
