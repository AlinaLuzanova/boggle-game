import randomLetter from './js/randomLetter.js';
import { showSortedUsers, storedUsers } from './js/login.js';
import manageScores from './js/scoreCount.js';

const btn = document.querySelectorAll('.button--boggle');
const clearBtn = document.querySelector('.clearBtn');
const body = document.querySelector('.container');
let isGameStart = false;
const showWord = document.querySelector('.showWord');
const player = document.querySelector('.player-name');
const playerScore = document.querySelector('.player-score');
const input = document.querySelector('#player-name');
const topWords = document.querySelector('.top-word');
const correctWords = document.querySelector('.word');

btn.forEach((btn) => {
  btn.addEventListener('mousedown', selectWord);
  btn.addEventListener('mouseup', hideSelection);
});
let word = '';
let selectedElements = [];
function selectWord(event) {
  isGameStart = true;

  const targetElement = event.target;

  if (selectedElements.includes(targetElement)) {
    return;
  }

  targetElement.classList.add('pressed');
  word += targetElement.innerText;
  selectedElements.push(targetElement);

  const index = Array.from(targetElement.parentElement.children).indexOf(
    targetElement,
  );

  if (targetElement.nextElementSibling) {
    targetElement.nextElementSibling.addEventListener('mouseover', selectWord);
  }

  if (targetElement.previousElementSibling) {
    targetElement.previousElementSibling.addEventListener(
      'mouseover',
      selectWord,
    );
  }

  if (targetElement.parentElement.nextElementSibling) {
    targetElement.parentElement.nextElementSibling.children[
      index
    ].addEventListener('mouseover', selectWord);
    if (targetElement.parentElement.nextElementSibling.children[index + 1]) {
      targetElement.parentElement.nextElementSibling.children[
        index + 1
      ].addEventListener('mouseover', selectWord);
    }
    if (targetElement.parentElement.nextElementSibling.children[index - 1]) {
      targetElement.parentElement.nextElementSibling.children[
        index - 1
      ].addEventListener('mouseover', selectWord);
    }
  }

  if (targetElement.parentElement.previousElementSibling) {
    targetElement.parentElement.previousElementSibling.children[
      index
    ].addEventListener('mouseover', selectWord);
    if (
      targetElement.parentElement.previousElementSibling.children[index + 1]
    ) {
      targetElement.parentElement.previousElementSibling.children[
        index + 1
      ].addEventListener('mouseover', selectWord);
    }
    if (
      targetElement.parentElement.previousElementSibling.children[index - 1]
    ) {
      targetElement.parentElement.previousElementSibling.children[
        index - 1
      ].addEventListener('mouseover', selectWord);
    }
  }
  showWord.value = word;
}
const arr = [];
function hideSelection() {
  const finishWord = word;
  selectedElements = [];
  const wordGet = finishWord;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordGet}`;

  const rows = document.querySelectorAll('.boggle .row');
  rows.forEach((row) => {
    const buttons = row.querySelectorAll('.button--boggle');
    buttons.forEach((btn) => {
      btn.classList.remove('pressed');
      word = '';
      btn.removeEventListener('mouseover', selectWord);
      showWord.value = '';
    });
  });

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  }
  function dataShow(data) {
    if (data) {
      const [word] = data;
      const checkWord = word.word;

      if (arr.includes(word.word)) {
        console.log("Слово уже использовано.");
        return false;
      } else{
        arr.push(word.word);
      }

      console.log(checkWord);
      for (let i = 0; i < storedUsers.length; i++) {
        if (input.value === storedUsers[i].name) {
          storedUsers[i].allWords.push(arr[arr.length-1]);
          const [score, corWords, sortedTop] = manageScores(i, storedUsers[i].allWords[storedUsers[i].allWords.length - 1]);
          storedUsers[i].score = score;
          console.log([score, corWords, sortedTop]);
          topWords.innerText = sortedTop.join('\n\n');
          correctWords.innerText = corWords.join('\n\n');
          player.innerText = `\n${storedUsers[0].name}\n\n${storedUsers[1].name}\n\n${storedUsers[2].name}`;
          // простите за костыль
          if (i === 0) {
            playerScore.innerText = `\n${score}\n\n${storedUsers[1].score}\n\n${storedUsers[2].score}`;
          }
          if (i === 1) {
            playerScore.innerText = `\n${storedUsers[0].score}\n\n${score}\n\n${storedUsers[2].score}`;
          }
          if (i === 2) {
            playerScore.innerText = `\n${storedUsers[0].score}\n\n${storedUsers[1].score}\n\n${score}`;
          }
        }
      }
    } else {
      console.log('Такого слова не существует!');
    }
  }
  fetchData(url).then((data) => dataShow(data));
}

btn.forEach((btnItem, index) => {
  btnItem.innerHTML = `${randomLetter(index)}`;
});
clearBtn.addEventListener('click', () => {
  if (!isGameStart) {
    btn.forEach((btnItem, index) => {
      btnItem.innerHTML = `${randomLetter(index)}`;
    });
  } else {
    window.location.reload();
  }
});

player.innerText = showSortedUsers();
