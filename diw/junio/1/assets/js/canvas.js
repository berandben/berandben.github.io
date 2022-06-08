//https://developer.mozilla.org/es/docs/Web/API/Canvas_API

//Captura el evento de carga de la página DOMContentLoaded y lanza la función load()
document.addEventListener("DOMContentLoaded", load, false);

/**
 * Función que ejecuta la representación de los iconos
 * si se ha podido cargar el contexto del canvas 
 */
function load() {

    let elementoCanvasContext = getCanvasContext('elemento');   

    if (elementoCanvasContext) {

        drawElemento(elementoCanvasContext);
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

    let canvas = document.getElementById(idCanvas);
    let canvasContext = false;

    if (canvas && canvas.getContext) {

        canvasContext = canvas.getContext('2d');
    }

    return canvasContext;
}

function drawElemento(canvasContext){

}