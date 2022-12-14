const buttonPlay = document.querySelector('.button-play');
const buttonPause = document.querySelector('.button-pause');
let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');
const timer = document.querySelector('.timer');
const buttonAdd = document.querySelector('.button-add');
const buttonStop = document.querySelector('.button-stop');
const buttonSet = document.querySelector('.button-set');
const buttonReduce = document.querySelector('.button-reduce');
const cardForest = document.querySelector('.card-forest');
const cardRain = document.querySelector('.card-rain');
const cardCoffeeShop = document.querySelector('.card-coffee-shop');
const cardFireplace = document.querySelector('.card-fireplace');
const svgFire = document.querySelector('.fire');
const forest = document.querySelector('.forest');
const rain = document.querySelector('.rain');
const shop = document.querySelector('.shop');
const fire = document.querySelector('.fire');
let timerTimeOut;
let seconds = 0;

buttonPlay.addEventListener('click', handlePlay);
buttonPause.addEventListener('click', handlePause);
buttonStop.addEventListener('click', handleStop);
buttonSet.addEventListener('click', handleSet);
buttonAdd.addEventListener('click', handleAdd);
buttonReduce.addEventListener('click', handleReduce);
cardForest.addEventListener('click', handleSoundForest);
cardRain.addEventListener('click', handleSoundRain);
cardCoffeeShop.addEventListener('click', handleSoundCoffeeShop);
cardFireplace.addEventListener('click', handleSoundFireplace);

function handleSoundForest() {
  const audio = document.querySelector('.soundForest');
  forest.classList.remove('hide');
  rain.classList.add('hide');
  shop.classList.add('hide');
  fire.classList.add('hide');
  audio.play();
  audio.loop = true;
}

function handleSoundRain() {
  const audio = document.querySelector('.soundRain');
  rain.classList.remove('hide');
  forest.classList.add('hide');
  shop.classList.add('hide');
  fire.classList.add('hide');
  audio.play();
  audio.loop = true;
}

function handleSoundCoffeeShop() {
  const audio = document.querySelector('.soundCoffeeShop');
  shop.classList.remove('hide');
  forest.classList.add('hide');
  rain.classList.add('hide');
  fire.classList.add('hide');
  audio.play();
  audio.loop = true;
}

function handleSoundFireplace() {
  const audio = document.querySelector('.soundFireplace');
  fire.classList.remove('hide');
  forest.classList.add('hide');
  rain.classList.add('hide');
  shop.classList.add('hide');
  audio.play();
  audio.loop = true;
}

function handlePlay() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');

  countdown();
}

function handlePause() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  hold();
}

function handleStop() {
  buttonStop.classList.add('hide');
  buttonSet.classList.remove('hide');
  hold();
}

function handleSet() {
  buttonStop.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  updateTimerSet();
}

function handleAdd() {
  let minutes = Number(minutesDisplay.textContent);
  minutesDisplay.textContent = String((minutes += 5)).padStart(2, '0');
}

function handleReduce() {
  let minutes = Number(minutesDisplay.textContent);
  minutesDisplay.textContent = String((minutes -= 5)).padStart(2, '0');
  if (minutes <= 0) {
    minutesDisplay.textContent = String((minutes = 0)).padStart(2, '0');
  }
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    if (seconds <= 0) {
      seconds = 60;
      minutes--;
    }
    if (minutes < 0) {
      handlePause();
      minutesDisplay.textContent = 25;
      return;
    }

    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0');
    countdown();
  }, 1000);
}

function hold() {
  clearTimeout(timerTimeOut);
}

function updateTimerSet() {
  let quantosMinutos = prompt('Altere o valor do cron??metro');
  if (quantosMinutos) {
    minutesDisplay.textContent = String(quantosMinutos).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  } else {
    quantosMinutos;
  }
}
