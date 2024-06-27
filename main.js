"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// 1) Computer will gwenerate a random number
// 2) User input for guessing game
//  3) Compare user input with computer generated number and show result - dose
var randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
var answers = await inquirer_1.default.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("Conratulations you guessed right number. ");
}
else {
    console.log("You guessed wrong number");
}
