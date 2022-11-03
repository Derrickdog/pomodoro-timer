const titleDisplay = document.querySelector('.title');
const timerDisplay = document.querySelector('#timer');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');

let intervalId;
let count = 1;

startBtn.addEventListener('click', () => {
  startWork();
  startBtn.style.display = 'none';
  stopBtn.style.display = 'flex';
})

stopBtn.addEventListener('click', () => {
  count = 1;
  clearInterval(intervalId);
  titleDisplay.textContent = 'Pomodoro';
  timerDisplay.textContent = '25:00'
  stopBtn.style.display = 'none';
  startBtn.style.display = 'flex';
})

function startWork() {
  titleDisplay.textContent = 'Work';
  timerDisplay.textContent = '25:00'
  startTimer(25);
}

function startBreak() {
  titleDisplay.textContent = 'Break';
  timerDisplay.textContent = '5:00'
  startTimer(5);
}

function startLongBreak() {
  titleDisplay.textContent = 'Long Break';
  timerDisplay.textContent = '30:00'
  startTimer(30);
}

function startTimer(durationMinutes) {
  let duration = durationMinutes * 60 - 1;
  let timer = duration, minutes, seconds;
  intervalId = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerDisplay.textContent = minutes + ':' + seconds;
    
    if(--timer < 0) {
      clearInterval(intervalId);
      if(count % 2 === 0) startWork();
      else if(count % 7 === 0) startLongBreak();
      else startBreak();
      count++;
    }
  }, 1000);
}

