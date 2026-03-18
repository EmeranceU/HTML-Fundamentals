// // loops

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// const fruits = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// //only even numbers

// for (let i = 1; i <= 20; i++) {
//     if ( i % 2 === 0){
//         console.log(i);
//     }
// }

// const days = ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"]; 
// for (let i =0 ; i< days.length; i++) {
//     if (i <= 4){
//         console.log ("checking email for" + " " + days[i]);
//     } continue;

// }

// // decrement 

// for (let count = 10 ; count > 0; count--){
//     console.log(count);
// }


// // while loop

// let roll = 1;
// while (roll !== 6){
//     roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }
// console.log("You rolled a 6!");

// let constant = 1;
// while (constant <=5){
//     console.log(constant);
//     constant++;
// }

// let correctPin =1234;
// let enteredPin = 0;

// while (enteredPin !== correctPin){
//     console.log("Please enter the correct pin");
//     enteredPin = prompt("Enter the pin");
//     break;
// }
// console.log("Pin accepted.");


// // do...while loop

// let i = 0;
// do {
//     console.log (i);
//     i++;
// }while (i<5);



// # Mini Project: Number Guessing Game

// **Project Goal**

// Create a simple game where the user guesses a randomly generated number.

// **Program Requirements**

// 1. Generate a random number between 1 and 10.
// 2. Ask the user to guess the number.
// 3. Continue asking until the guess is correct.
// 4. Display a success message when the correct number is guessed.

// Example structure:

// ```jsx
// const secretNumber = Math.floor(Math.random() * 10) + 1;

// let guess;

// while (guess !== secretNumber) {
//   guess = Number(prompt("Guess the number between 1 and 10"));
// }

// console.log("Correct! You guessed the number.");
// ```

// This project combines **loops, conditions, and user input**.


let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;

while (guess !== secretNumber) {
    guess = Number(prompt("Guess the number between 1 and 10"));
    if (guess < secretNumber) {
    console.log("Too low! Try again.");
  } else if (guess > secretNumber) {
    console.log("Too high! Try again.");
  } else if (guess === secretNumber) {
    console.log("🎉 Correct! You guessed the number.");
  }
}