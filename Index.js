import randomLetter from "./js/randomLetter.js";
import { showSortedUsers } from './js/login.js';
import startTimer from "./js/timer.js";
import { storedUsers } from './js/login.js';
//import manageScores from './js/scoreCount.js'

const btn = document.querySelectorAll(".button--boggle");
const clearBtn = document.querySelector(".clearBtn");
const body = document.querySelector(".container");
let isGameStart = false;
const showWord = document.querySelector('.showWord');
const player = document.querySelector(".player-score");
const input = document.querySelector("#player-name");
const topWords = document.querySelector('.top-word')
const correctWords = document.querySelector('.correct-word')
//timer
body.appendChild(startTimer());
// end timer

btn.forEach((btn) => {
  btn.addEventListener("mousedown", selectWord);
  btn.addEventListener("mouseup", hideSelection);
});
let word = "";
let selectedElements = [];
function selectWord(event) {
  isGameStart = true;

  const targetElement = event.target;

  if (selectedElements.includes(targetElement)) {
    return;
  }

  targetElement.classList.add("pressed");
  word += targetElement.innerText;
  selectedElements.push(targetElement);

  const index = Array.from(targetElement.parentElement.children).indexOf(
    targetElement
  );

  if (targetElement.nextElementSibling) {
    targetElement.nextElementSibling.addEventListener("mouseover", selectWord);
  }

  if (targetElement.previousElementSibling) {
    targetElement.previousElementSibling.addEventListener(
      "mouseover",
      selectWord
    );
  }

  if (targetElement.parentElement.nextElementSibling) {
    targetElement.parentElement.nextElementSibling.children[
      index
    ].addEventListener("mouseover", selectWord);
    if (targetElement.parentElement.nextElementSibling.children[index + 1]) {
      targetElement.parentElement.nextElementSibling.children[
        index + 1
      ].addEventListener("mouseover", selectWord);
    }
    if (targetElement.parentElement.nextElementSibling.children[index - 1]) {
      targetElement.parentElement.nextElementSibling.children[
        index - 1
      ].addEventListener("mouseover", selectWord);
    }
  }

  if (targetElement.parentElement.previousElementSibling) {
    targetElement.parentElement.previousElementSibling.children[
      index
    ].addEventListener("mouseover", selectWord);
    if (
      targetElement.parentElement.previousElementSibling.children[index + 1]
    ) {
      targetElement.parentElement.previousElementSibling.children[
        index + 1
      ].addEventListener("mouseover", selectWord);
    }
    if (
      targetElement.parentElement.previousElementSibling.children[index - 1]
    ) {
      targetElement.parentElement.previousElementSibling.children[
        index - 1
      ].addEventListener("mouseover", selectWord);
    }
  }
  console.log(word);
  showWord.value = word;
}
let arr = [];
function hideSelection() {
  const finishWord = word;
  selectedElements = [];
  let wordGet = finishWord;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordGet}`;

  const rows = document.querySelectorAll(".boggle .row");
  rows.forEach((row) => {
    const buttons = row.querySelectorAll(".button--boggle");
    buttons.forEach((btn) => {
      btn.classList.remove("pressed");
      word = "";
      btn.removeEventListener("mouseover", selectWord);
      showWord.value =''
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
      console.error("Ошибка при выполнении запроса:", error);
    }
  }
  function dataShow(data) {
    if (data) {
      const [word] = data;
      let checkWord = word.word;
      arr.push(word.word);
      //console.log(arr);
      //const rightWords = document.querySelector(".right-words");
      //const rightWord = document.createElement("div");
      //rightWord.innerHTML = `<div class="word"><span class="word-header">${checkWord}</span><span class="word-length"></span></div>`;
      //rightWords.appendChild(rightWord);
      //console.log(manageScores(checkWord,storedUsers[0].name));
      const scoreTable = [
        { lengthWord: 3, scoreWord: 1 },
        { lengthWord: 4, scoreWord: 1 },
        { lengthWord: 5, scoreWord: 2 },
        { lengthWord: 6, scoreWord: 3 },
        { lengthWord: 7, scoreWord: 5 },
        { lengthWord: 8, scoreWord: 11 },
      ];

      for (let i = 0; i < storedUsers.length ; i++) {
        if(input.value === storedUsers[i].name){
          storedUsers[i].correctScore.push(checkWord);
            let resScore = storedUsers[i].score;
            let allWords = storedUsers[i].correctScore;
            let topWords = storedUsers[i].topWords;
            for (let i = 0; i < scoreTable; i++) {
              if (word.length === scoreTable[i].lengthWord){
                resScore+=scoreTable[i].scoreWord;
                allWords.push(`${word} +${scoreTable[i].scoreWord}`)
                let {wordTop,scoreTop} = topWords;
                wordTop = word;
                scoreTop = scoreTable[i].scoreWord;
              }
            }
            let entries = Object.entries(topWords);
            let sortedTop = Object.fromEntries(entries.sort((a, b) => a[1] - b[1]));
            const info = [resScore, allWords, sortedTop]

          const [score, correctWord, topWord] = info
          topWords.innerText = 'gvhgvhgvg'
          //topWords.innerText = topWord.join('\n\n');
          correctWords.innerText = correctWord.join('\n\n');
        }
      }

    } else {
      console.log("Такого слова не существует!");
    }
  }
  fetchData(url).then((data) => dataShow(data));

}


// смена букв на кнопках
btn.forEach((btnItem, index) => {
  btnItem.innerHTML = `${randomLetter(index)}`;
});
clearBtn.addEventListener("click", () => {
  if (!isGameStart) {
    btn.forEach((btnItem, index) => {
      btnItem.innerHTML = `${randomLetter(index)}`;
    });
  } else {
    window.location.reload();
  }
});

player.innerText = showSortedUsers();


