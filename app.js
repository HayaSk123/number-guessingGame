#!/usr/bin/env node
import inquirer from "inquirer";
let randomNumRange = await inquirer.prompt([
    {
        type: "number",
        name: "minNum",
        message: "Enter the minimum value of the range",
    },
    {
        type: "number",
        name: "maxNum",
        message: "Enter the maximum value of the range",
    },
]);
if (randomNumRange.minNum > randomNumRange.maxNum) {
    console.log("Invalid input. Please enter valid numbers with the minimum value less than or equal to the maximum value.");
    process.exit(1);
}
let randomNum = Math.floor(Math.random() * (randomNumRange.maxNum - randomNumRange.minNum + 1)) + randomNumRange.minNum;
console.log(randomNum);
for (;;) {
    let userGuess = await inquirer.prompt([
        {
            type: "number",
            name: "guess",
            message: `Enter a number from ${randomNumRange.minNum} to ${randomNumRange.maxNum}`,
        },
    ]);
    if (userGuess.guess < randomNumRange.minNum ||
        userGuess.guess > randomNumRange.maxNum) {
        console.log(`Invalid input! Enter a number between ${randomNumRange.minNum} and ${randomNumRange.maxNum}`);
        continue;
    }
    if (userGuess.guess === randomNum) {
        console.log(`You guessed it! The number was ${randomNum}.`);
        break;
    }
    else if (userGuess.guess < randomNum) {
        console.log("Your guess is too low. Try again!");
    }
    else {
        console.log("Your guess is too high. Try again!");
    }
}
