import letters from "../src/letters.js";
import randomNum from "./randomNum.js";

function randomLetter(btnNumber) {
  return letters[btnNumber][+randomNum()];
}

export default randomLetter;
