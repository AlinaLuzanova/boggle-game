import randomLetter from "./js/randomLetter.js";

const btn = document.querySelectorAll(".button");
const clearBtn = document.querySelector(".clearBtn");
let isGameStart = false;

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
  console.log("word");
}

function hideSelection() {
  const rows = document.querySelectorAll(".boggle .row");

  rows.forEach((row) => {
    const buttons = row.querySelectorAll(".button");
    buttons.forEach((btn) => {
      btn.classList.remove("pressed");
      word = "";
      btn.removeEventListener("mouseover", selectWord);
    });
  });
}

// смена букв на кнопках

clearBtn.addEventListener("click", () => {
  if (!isGameStart) {
    btn.forEach((btnItem, index) => {
      btnItem.innerHTML = `${randomLetter(index)}`;
    });
  } else {
    window.location.reload();
  }
});
