import('./styles.css');

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#c7c2bf',
  '#524d49',
  '#de6814',
  '#d534eb',
  '#4034eb',
  '#c0eb34',
];

const randomiser = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeColor = {
  isActive: false,
  intervalId: null,
  start () {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomiser(0, colors.length - 1)];
    }, 1000);
  },
  stop () {
    if (!this.isActive) {
      return;
    }
    this.isActive = false;
    clearInterval(this.intervalId);
  },
};

refs.btnStart.addEventListener('click', changeColor.start.bind(changeColor));
refs.btnStop.addEventListener('click', changeColor.stop.bind(changeColor));
