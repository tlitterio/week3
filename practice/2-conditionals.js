// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

let die1 = getRandomInt(6)
let die2 = getRandomInt(6)
let sum = die1+die2
console.log(`Die1:${die1}`)
console.log(`Die2:${die2}`)

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice
// - Implement the (basic) rules of craps:
//   - If the total of the two dice is 7 or 11, the player wins
//   - If the total of the two dice is 2, 3, or 12, the player loses
//   - If the total is anything else, the "point" is set, e.g. "the point is 6"

if (sum == 7 || sum == 11) {
  console.log(`Roll:${sum} Player Wins`)
} else if (sum == 2 || sum == 3 || sum == 12) {
  console.log(`Roll:${sum} Player Loses`)
} else {
  console.log(`Roll:${sum} Point is set`)
}
