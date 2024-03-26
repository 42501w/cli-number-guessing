#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuesssedNumber",
        type: 'number',
        message: "please guess a number between 1-10: ",
    }
]);
if (answers.userGuesssedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number");
}
else {
    console.log("You guessed wrong number");
}
