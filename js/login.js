import { user1, user2, user3 } from "../src/users.js";
const input = document.querySelector("#player-name");
const submitInput = document.querySelector(".button--add-user");
const topWords = document.querySelector('.top-word')
const correctWords = document.querySelector('.correct-word')


function getUserFromLocalStorage(userKey) {
  const userData = JSON.parse(localStorage.getItem(userKey));
  return {
    name: userData.name,
    score: userData.score,
    correctScore: userData.correctScore,
    topWords: userData.topWords,
  };
}

export const storedUsers = [
  getUserFromLocalStorage("user1"),
  getUserFromLocalStorage("user2"),
  getUserFromLocalStorage("user3"),
];


const sortedUsers = storedUsers.sort((a, b) => b.score - a.score);
export function showSortedUsers(){
  let sortStr =''
  for (let i = 0; i < sortedUsers.length; i++) {
    sortStr += `\n${sortedUsers[i].name} ${sortedUsers[i].score}\n`;
  }
  return sortStr
}

submitInput.addEventListener("click", () => {
  for (let i = 0; i < storedUsers.length; i++) {
    if(input.value === storedUsers[i].name){
      console.log('succes');
      topWords.innerText = storedUsers[i].topWords;
      correctWords.innerText = storedUsers[i].correctScore.join('\n\n');
    }
  }
});



