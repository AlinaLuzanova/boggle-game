function startTimer() {
  const timer = document.createElement('div');
  timer.classList.add('timer');
  const deadline = 3;
  const startTime = new Date();
  const stopTime = startTime.setMinutes(startTime.getMinutes() + deadline);
  const countTime = setInterval(() => {
    const nowTime = new Date().getTime();
    const remain = stopTime - nowTime;
    const min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((remain % (1000 * 60)) / 1000);
    sec = sec < 10 ? `0${sec}` : sec;
    timer.innerHTML = `<div class="timer_minutes">${min}</div>
    <div class="timer_dots>:</div>
    <div class="timer_seconds>${sec}</div>`;
    if (remain < 0) {
      clearInterval(countTime);
      timer.innerHTML = 'GAME OVER';
    }
  }, 1000);
  return timer;
}

export default startTimer;
