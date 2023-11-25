import randomLetter from "./js/randomLetter.js";
import { user1, user2, user3 } from "./src/users.js";

import startTimer from "./js/timer.js";

const btn = document.querySelectorAll(".button--boggle");
const clearBtn = document.querySelector(".clearBtn");
const body = document.querySelector(".container");
let isGameStart = false;
const input = document.querySelector("input");
const submitInput = document.querySelector(".button--add-user");
const player = document.querySelector(".player-score");

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
}

function hideSelection() {
  const rows = document.querySelectorAll(".boggle .row");

  rows.forEach((row) => {
    const buttons = row.querySelectorAll(".button--boggle");
    buttons.forEach((btn) => {
      btn.classList.remove("pressed");
      word = "";
      btn.removeEventListener("mouseover", selectWord);
    });
  });
}

const storedUsers = [
  `${JSON.parse(localStorage.getItem("user1")).name} ${
    JSON.parse(localStorage.getItem("user1")).score
  }`,
  `${JSON.parse(localStorage.getItem("user2")).name} ${
    JSON.parse(localStorage.getItem("user2")).score
  }`,
  `${JSON.parse(localStorage.getItem("user3")).name} ${
    JSON.parse(localStorage.getItem("user3")).score
  }`,
];

player.innerText = storedUsers.join(",").replace(/,/g, "\n\n");
submitInput.addEventListener("click", () => {});

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

// проверка слова в словаре

// пока попытки работы с API
let wordGet = word; //сюда нужно вставлять слово из полученного на страничке
let arr = []; // сюда пушатся слова если они существуют
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordGet}`;
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
    arr.push(word.word);
    console.log(arr);
  } else {
    console.log("Такого слова не существует!");
  }
}
fetchData(url).then((data) => dataShow(data));
