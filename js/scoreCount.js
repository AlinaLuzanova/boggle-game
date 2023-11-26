// const scoreDomContainer = document.querySelector('.right-words');
// const playerName = document.querySelector('.userName');

// import { storedUsers } from './login.js';

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

const storedUsers = [
  getUserFromLocalStorage('user1'),
  getUserFromLocalStorage('user2'),
  getUserFromLocalStorage('user3'),
];

const scoreTable = [
  { lengthWord: 1, scoreWord: 0 },
  { lengthWord: 2, scoreWord: 0 },
  { lengthWord: 3, scoreWord: 0 },
  { lengthWord: 4, scoreWord: 1 },
  { lengthWord: 5, scoreWord: 2 },
  { lengthWord: 6, scoreWord: 3 },
  { lengthWord: 7, scoreWord: 5 },
  { lengthWord: 8, scoreWord: 11 },
];

function manageScores(user, word) {
  const resScore = storedUsers[user].score;
  const corWords = storedUsers[user].correctScore;
  let { topWords } = storedUsers[user];
  for (let i = 0; i < scoreTable.length; i++) {
    if (word.length === scoreTable[i].lengthWord) {
      resScore.push(scoreTable[i].scoreWord);
      corWords.push(`${word} +${scoreTable[i].scoreWord}`);
      topWords = [...corWords];
      topWords.sort((a, b) => {
        const scoreA = parseInt(a.split(' +')[1]);
        const scoreB = parseInt(b.split(' +')[1]);
        return scoreB - scoreA;
      });
    }
  }
  return [resScore.reduce((accum, item) => accum + item, 0), corWords, topWords];
}

export default manageScores;

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
* */
