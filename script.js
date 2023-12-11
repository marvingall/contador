/*const countButton = document.getElementByld('countButton')
const resetButton = document.getElementByld('resetButton')

countButton.addEventListener('click', contar)
resetButton.addEventListener('click', reset)

async function contar() {
  let display = document.getElementById('display')
  display.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    display.innerHTML += i + '';
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

function reset() {
  let display = document.getElementById('display');
  display.innerHTML = '...'
}
*/
const countButton = document.getElementById('countButton')
const resetButton = document.getElementById('resetButton')

countButton.addEventListener('click', contar);
resetButton.addEventListener('click', reset);

async function contar() {
  let display = document.getElementById('display');
  display.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    display.innerHTML += i + ' ';
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

function reset() {
  let display = document.getElementById('display');
  display.innerHTML = '...';
}
