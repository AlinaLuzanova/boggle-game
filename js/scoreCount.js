const scoreDomContainer = document.querySelector('.right-words');
const scoreTable = [
  { length: 3, score: 1 },
  { length: 4, score: 1 },
  { length: 5, score: 2 },
  { length: 6, score: 3 },
  { length: 7, score: 5 },
  { length: 8, score: 11 },
];
// "DOMNodeInserted"
scoreDomContainer.addEventListener('click', () => {
  const gameScore = document.querySelector('.score-number'); // очки текущей игры
  const wordScore = document.querySelectorAll('.word-length'); // длина слова
  let resScore = 0;
  wordScore.forEach((word) => {
    const length = Number(word.innerHTML);
    if (length <= 8 && length !== null) {
      const tempscore = scoreTable.find((score) => score.length === length);
      console.log(tempscore);
      resScore += tempscore.score;
    } else if (length > 8) resScore += 11;
    else resScore += 0;
  });
  gameScore.innerHTML = resScore;
});
