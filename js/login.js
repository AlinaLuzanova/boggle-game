import { user1, user2, user3 } from '../src/users.js';
import manageScores from './scoreCount.js';
import startTimer from './timer.js';
import randomLetter from './randomLetter.js';

const input = document.querySelector('#player-name');
const submitInput = document.querySelector('.button--add-user');
const topWords = document.querySelector('.top-word');
const correctWords = document.querySelector('.correct-word');
const body = document.querySelector('.container');
const btn = document.querySelectorAll('.button--boggle');

function getUserFromLocalStorage(userKey) {
  const userData = JSON.parse(localStorage.getItem(userKey));
  return {
    name: userData.name,
    score: userData.score,
    correctScore: userData.correctScore,
    topWords: userData.topWords,
    allWords: userData.allWords,
  };
}

export const storedUsers = [
  getUserFromLocalStorage('user1'),
  getUserFromLocalStorage('user2'),
  getUserFromLocalStorage('user3'),
];

const sortedUsers = storedUsers.sort((a, b) => b.score - a.score);
export function showSortedUsers() {
  let sortStr = '';
  for (let i = 0; i < sortedUsers.length; i++) {
    sortStr += `\n${sortedUsers[i].name} ${sortedUsers[i].score}\n`;
  }
  return sortStr;
}

let timerElement;

submitInput.addEventListener('click', () => {
  topWords.innerText = '';
  correctWords.innerText = '';
  btn.forEach((btnItem, index) => {
    btnItem.innerHTML = `${randomLetter(index)}`;
  });
  if (timerElement) {
    timerElement.remove();
  }
  timerElement = startTimer();
  body.appendChild(timerElement);
  for (let i = 0; i < storedUsers.length; i++) {
    if (input.value === storedUsers[i].name) {
      const [score, corWords, sortedTop] = manageScores(
        i,
        storedUsers[i].allWords[storedUsers[i].allWords.length - 1],
      );
      topWords.innerText = sortedTop.join('\n\n');
      correctWords.innerText = corWords.join('\n\n');
    }
  }
});
