//https://developer.mozilla.org/es/docs/Web/API/Canvas_API
//https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Basic_usage

//Captura el evento de carga de la página DOMContentLoaded y lanza la función load()
document.addEventListener("DOMContentLoaded", load, false);






/**
 * Función que ejecuta la representación de los iconos
 * si se ha podido cargar el contexto del canvas 
 */
function load() {

    let rectanguloContext = getCanvasContext('rectangulo');
    let circuloContext = getCanvasContext('circulo');
    let hexagonoContext = getCanvasContext('hexagono');
    let imagenContext = getCanvasContext('imagen');
    let textoContext = getCanvasContext('texto');

    if (rectanguloContext) {

        drawRectangulo(rectanguloContext);
    }

    if (circuloContext) {

        drawCirculo(circuloContext);
    }

    if (hexagonoContext) {

        drawHexagono(hexagonoContext);
    }

    if (imagenContext) {

        drawImagen(imagenContext);
    }
    if (textoContext) {

        drawTexto(textoContext);
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


function drawRectangulo(canvasContext) {

    canvasContext.fillStyle = 'teal';
    canvasContext.fillRect(75, 50, 150, 75);
    canvasContext.strokeRect(75, 50, 150, 75);
}


function drawCirculo(canvasContext) {

    canvasContext.beginPath();
    canvasContext.fillStyle = 'teal';
    canvasContext.arc(150, 75, 50, 0, 2 * Math.PI);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();

}

function drawHexagono(canvasContext) {

    canvasContext.beginPath();

    canvasContext.moveTo(125, 50);

    canvasContext.lineTo(175, 50);
    canvasContext.lineTo(200, 100);
    canvasContext.lineTo(175, 150);
    canvasContext.lineTo(125, 150);
    canvasContext.lineTo(100, 100);
    canvasContext.lineTo(125, 50);

    canvasContext.lineWidth = 3;

    canvasContext.fillStyle = 'teal';
    canvasContext.fill();

    canvasContext.strokeStyle = 'black';
    canvasContext.stroke();

}

function drawImagen(canvasContext) {

    let image = new Image();

    image.addEventListener('load', () => {

        canvasContext.drawImage(
            image, //imagen 500*333
            0,    //x inicio recorte
            0,    //y inicio recorte
            500,  //x fin recorte
            333,  //y fin recorte
            50,   //x posición canvas
            25,   //y posición canvas
            200,  //ancho imagen en canvas
            100   //alto imagen en canvas
        );
    }, false);

    image.src = './assets/img/imagen3.jpg';
}

function drawTexto(canvasContext) {

    let texto = "hola mundo";

    canvasContext.font = '40px san-serif';
    canvasContext.textAlign = 'center';

    canvasContext.fillStyle = 'teal';
    canvasContext.fillText(texto, 150, 75);

}



