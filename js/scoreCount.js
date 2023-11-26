const scoreDomContainer = document.querySelector('.right-words');
const playerName = document.querySelector('.userName');
import { storedUsers } from './login.js';

const scoreTable = [
  { lengthWord: 3, scoreWord: 1 },
  { lengthWord: 4, scoreWord: 1 },
  { lengthWord: 5, scoreWord: 2 },
  { lengthWord: 6, scoreWord: 3 },
  { lengthWord: 7, scoreWord: 5 },
  { lengthWord: 8, scoreWord: 11 },
];
/**
function manageScores(user,word){
  let resScore = storedUsers[user].score;
  let allWords = storedUsers[user].correctScore;
  let topWords = storedUsers[user].topWords;
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
  return [resScore, allWords, sortedTop]
}

/**

// Информация об игре - не доделано!
function gameResults(player, gameScore, longestWord) {
  console.log(localStorage.getItem('user1'));
  return { name: player, score: gameScore, topWord: longestWord };
}

// После допиливания добавления слов в таблицу- заменить событие "click" на "DOMNodeInserted"
scoreDomContainer.addEventListener('click', () => {
  const gameScore = document.querySelector('.score-number'); // очки текущей игры
  const wordScore = document.querySelectorAll('.word-header'); // длина слова
  let resScore = 0; // Общее количество очков
  let longestWord = ''; // Самое длинное слово за игру
  let longestWordLength = 0; // Самое большое количество букв
  wordScore.forEach((word) => {
    const currentWord = word.innerHTML;
    const length = currentWord.length;
    if (length > longestWordLength) {
      longestWordLength = length;
      longestWord = word.innerHTML;
      console.log(longestWord);
    }
    if (length <= 8 && length !== null) {
      const {lengthword , scoreWord} = scoreTable.find((score) => score.lengthWord === length);
      resScore += scoreWord;
    } else if (length > 8) resScore += 11;
    else resScore += 0;
  });
  gameScore.innerHTML = resScore;
  gameResults(playerName.innerHTML, resScore, longestWord);
});
**/
