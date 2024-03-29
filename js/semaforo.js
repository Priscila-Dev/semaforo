const img = document.getElementById ('img');
const buttons = document.getElementById ('buttons');

let colorIndex = 0;
let intervalId = null;

const playSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);

    element.play();
}

const semaforo = (event) => {
   
    stopAutomatic ();
    turnOn[event.target.id]();
    playSom('interruptor');
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex: 0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors [colorIndex];
    turnOn [color]();
    nextIndex ();
    playSom('interruptor');
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnOn = {
    'red': () => img.src = '../img/vermelho.png',
    'yellow': () => img.src = '../img/amarelo.png',
    'green': () => img.src = '../img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', semaforo);