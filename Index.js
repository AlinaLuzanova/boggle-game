import randomLetter from "./js/randomLetter.js";
import { user1,user2,user3 } from './src/users.js';


const btn = document.querySelectorAll(".button--boggle");
const clearBtn = document.querySelector(".clearBtn");
let isGameStart = false;
const input = document.querySelector('input');
const submitInput = document.querySelector('.button--add-user');
const player = document.querySelector('.player-score');

btn.forEach((btn) => {
  btn.addEventListener("mousedown", selectWord);
  btn.addEventListener("mouseup", hideSelection);
});
let word = "";
function selectWord(event) {
  isGameStart = true;
  const targetElement = event.target;
  targetElement.classList.add("pressed");
  word += targetElement.innerText;
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

const storedUsers = [`${JSON.parse(localStorage.getItem('user1')).name} ${JSON.parse(localStorage.getItem('user1')).score}`,
  `${JSON.parse(localStorage.getItem('user2')).name} ${JSON.parse(localStorage.getItem('user2')).score}`,
  `${JSON.parse(localStorage.getItem('user3')).name} ${JSON.parse(localStorage.getItem('user3')).score}`];

player.innerText = storedUsers.join(',').replace(/,/g, '\n\n')
submitInput.addEventListener('click',()=>{

})


// смена букв на кнопках
btn.forEach((btnItem, index) => {
  btnItem.innerHTML = `${randomLetter(index)}`;
})
clearBtn.addEventListener("click", () => {
  if (!isGameStart) {
    btn.forEach((btnItem, index) => {
      btnItem.innerHTML = `${randomLetter(index)}`;
    });
  } else {
    window.location.reload();
  }
});
