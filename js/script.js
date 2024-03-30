function getRedYellowAndGreenNumbers() {
  let startBtn = document.querySelector('.div3');
  let redDiv = document.querySelector('.div1');
  let yellowDiv = document.querySelector('.div4');
  let greenDiv = document.querySelector('.div2');
  let interval;

  startBtn.addEventListener('click', startCountdown);

  function startCountdown() {
    startBtn.removeEventListener('click', startCountdown);
    clearInterval(interval);
    resetCountdown();

    let numbers = 5;
    redDiv.style.boxShadow = '0 0 100px #FF0000';
    interval = setInterval(() => {
      redDiv.innerText = numbers;
      if (numbers === 0) {
        clearInterval(interval);
        redDiv.style.color = 'red';
        startYellowCountdown();
      }
      numbers--;
    }, 1000);
  }

  function resetCountdown() {
    redDiv.innerText = '';
    yellowDiv.innerText = '';
    greenDiv.innerText = '';
    redDiv.style.color = 'black';
    yellowDiv.style.color = 'black';
    greenDiv.style.color = 'black';
    redDiv.style.boxShadow = 'none';
    yellowDiv.style.boxShadow = 'none';
    greenDiv.style.boxShadow = 'none';
  }

  function startYellowCountdown() {
    let yellowNumbers = 5;
    yellowDiv.style.boxShadow = '0 0 100px yellow';
    let yellowInterval = setInterval(() => {
      yellowDiv.innerText = yellowNumbers;
      if (yellowNumbers === 0) {
        clearInterval(yellowInterval);
        yellowDiv.style.color = 'yellow';
        startGreenCountdown();
      }
      yellowNumbers--;
    }, 1000);
  }

  function startGreenCountdown() {
    let greenNumbers = 5;
    greenDiv.style.boxShadow = '0 0 100px green';
    let greenInterval = setInterval(() => {
      greenDiv.innerText = greenNumbers;
      if (greenNumbers === 0) {
        clearInterval(greenInterval);
        greenDiv.style.color = 'green';
        startBtn.addEventListener('click', startCountdown);
      }
      greenNumbers--;
    }, 1000);
  }
}

getRedYellowAndGreenNumbers();
