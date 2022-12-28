
// const maxInput = prompt("What's The Max Target?");
// // console.log("Number is:", maxInput)



// //PROMPT CONDITION
// if (isNaN(maxInput)) {
//     window.prompt("Incorrect Value! Please provide a number.")
// } else {

// }

//generate a secret random number
const secret = Math.floor(Math.random() * maxInput) + 1;
console.log(secret)





//let input = prompt(`Guess a number between 1 and the ${maxInput}.`);

// while (input !== secret) {
//     alert('Wrong password');
//     input = prompt("go lower");
//     if (input > secret) {
//         alert('go lower')
//     } else if (input < secret) {
//         alert("go higher")
//     }
// }





//1 -  Ask Player: What will be the maximum number (target)///
//2 - Ask Player: Which number do you think it is
//3 - if wrong: Tell the Player if the secret number is higher or lower
//4 - if correct: Tell the Player that he / she guessed the correct number
// conditions:
// - Make sure that the input is a number
//     - If not a number, tell the Player that it is an incorrect value and have to provide a number
//         - If the player no longer feels like playing -> by writing 'q' or 'quit' they can exit the game.
// To be very clear, the maximum number(target) you provide at the start, is the range in which the random secret number will be generated.
//     Example:
// If the player says 10,
//     The secret number will be in between 1 and 10.
// If the player says 100
// The secret number will be in between 1 and 100.