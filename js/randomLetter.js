const letters = require("../src/letters.js");
const randomNum = require("./randomNum.js");

function randomLetter(btnNumber) {
  return letters[btnNumber][+randomNum()];
}

console.log(randomLetter(5));

module.exports = randomLetter;
