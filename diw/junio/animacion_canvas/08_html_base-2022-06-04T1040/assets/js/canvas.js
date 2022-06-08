//https://developer.mozilla.org/es/docs/Web/API/Canvas_API

let interval;
let positionX;
let positionY;

let canvas;



//Captura el evento de carga de la página DOMContentLoaded y lanza la función load()
document.addEventListener("DOMContentLoaded", load, false);

/**
 * Función que ejecuta la representación de los iconos
 * si se ha podido cargar el contexto del canvas 
 */
function load() {

    let elementoCanvasContext = getCanvasContext('elemento_canvas');

    if (elementoCanvasContext) {

        positionX = 0;
        positionY = 1;

        iniciaIntervalo(elementoCanvasContext);

    }
}

/**
 * Función que comprueba que el contexto del
 * canvas se ha podido cargar correctamente
 * y lo devuelve en caso afirmativo
 * 
 * @param {string} idCanvas 
 * @returns 
 */
function getCanvasContext(idCanvas) {

    canvas = document.getElementById(idCanvas);
    let canvasContext = false;

    if (canvas && canvas.getContext) {

        canvasContext = canvas.getContext('2d');
    }

    return canvasContext;
}

function iniciaIntervalo(canvasContext) {

    interval = setInterval(function () {

        drawElemento(canvasContext);

    }, 10);
}

function drawElemento(canvasContext) {

    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    if (positionX < (canvas.width - 150)) {

        positionX += 10;
    } else {

        if (positionY < (canvas.height - 100)) {


            positionX = 0;
            positionY += 20;

        } else {

            clearInterval(interval);
        }
    }

    canvasContext.fillStyle = 'teal';
    canvasContext.fillRect(positionX, positionY, 150, 100);
    canvasContext.strokeRect(positionX, positionY, 150, 100);
}