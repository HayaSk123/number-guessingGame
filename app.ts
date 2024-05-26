#!/usr/bin/env node
import inquirer from "inquirer";

// Asking the user to give a range within which the random number would be generated
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

// Confirming that the minNum is smaller than the maxNum
if (randomNumRange.minNum > randomNumRange.maxNum) {
  console.log(
    "Invalid input. Please enter valid numbers with the minimum value less than or equal to the maximum value."
  );
  process.exit(1); // Exit the script if the input is invalid
}

// Generating a random number (no decimals)
let randomNum = Math.floor(
  Math.random() * (randomNumRange.maxNum - randomNumRange.minNum + 1)
) + randomNumRange.minNum;
console.log(randomNum)

for (;;) { // Infinite loop
  // Asking the user to input a guess
  let userGuess = await inquirer.prompt([
    {
      type: "number",
      name: "guess",
      message: `Enter a number from ${randomNumRange.minNum} to ${randomNumRange.maxNum}`,
    },
  ]);

  // Checking if user input is within the valid range
  if (
    userGuess.guess < randomNumRange.minNum ||
    userGuess.guess > randomNumRange.maxNum
  ) {
    console.log(
      `Invalid input! Enter a number between ${randomNumRange.minNum} and ${randomNumRange.maxNum}`
    );
    continue; // Continue to the next iteration of the loop if the input is invalid
  }

  // Providing feedback
  if (userGuess.guess === randomNum) {
    console.log(`You guessed it! The number was ${randomNum}.`);
    break; // Exit the loop if the user guessed correctly
  } else if (userGuess.guess < randomNum) {
    console.log("Your guess is too low. Try again!");
  } else {
    console.log("Your guess is too high. Try again!");
  }
}
