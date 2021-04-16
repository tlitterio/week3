// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Simulate the rolling of two six-sided dice

// Write the recipe (algorithm) in the comments. Write the code.

// Store the value of the first die in memory. Write it out to the console in a human-readable format.
let die1 = getRandomInt(6)
console.log(`Die1: ${die1}`)

// Store the value of the second die in memory. Write it out to the console in a human-readable format.
let die2 = getRandomInt(6)
console.log(`Die2: ${die2}`)

// Store the value of the total of the two dice in memory. Write it out to the console in a human-readable format.
let sum = die1+die2
console.log(` Sum: ${sum}`)
