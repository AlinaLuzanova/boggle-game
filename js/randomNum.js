function randomNum() {
  const min = 0;
  const max = 5;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = randomNum;
