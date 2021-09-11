const startBtn = document.querySelector('button[data-action="start"');
const stopBtn = document.querySelector('button[data-action="stop"');
const bodyColor = document.querySelector('body');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
let inervalId = null;

let randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyColor(color) {
  bodyColor.style.backgroundColor = color;
}

function onStart() {
  inervalId = setInterval(() => {
    let randomColor = randomIntegerFromInterval(0, colors.length - 1);
    changeBodyColor(colors[randomColor]);
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function onStop() {
  clearInterval(inervalId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}
