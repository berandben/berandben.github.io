//https://developer.mozilla.org/es/docs/Web/API/Canvas_API

//Captura el evento de carga de la página DOMContentLoaded y lanza la función load()
document.addEventListener("DOMContentLoaded", load, false);

/**
 * Función que ejecuta la representación de los iconos
 * si se ha podido cargar el contexto del canvas
 */
function load() {
  let hexagonoCanvasContext = getCanvasContext("hexagono-canvas");

  if (hexagonoCanvasContext) {
    drawHexagono(hexagonoCanvasContext);
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
    canvasContext = canvas.getContext("2d");
  }

  return canvasContext;
}

function drawHexagono(canvasContext) {
  ////////////////////////////////////////////////////
  //IMAGEN DE FONDO PARA DIBUJAR SOBRE ELLA

  let image = new Image();

  image.addEventListener(
    "load",
    () => {
      canvasContext.drawImage(
        image, //imagen 500*333
        0, //x inicio recorte
        0, //y inicio recorte
        300, //x fin recorte
        316, //y fin recorte
        5, //x posición canvas
        0, //y posición canvas
        300, //ancho imagen en canvas
        316 //alto imagen en canvas
      );
    },
    false
  );

  image.src = "./assets/media/img/hexagono.png";

  /////////////////////////////////////////////////////
  ///ELIMINA LA IMAGEN
  image.src = "";
  ////////////////////////////////////////////////////

  canvasContext.beginPath();

  canvasContext.moveTo(80, 35);

  canvasContext.lineTo(225, 35);
  canvasContext.lineTo(295, 160);
  canvasContext.lineTo(225, 285);
  canvasContext.lineTo(80, 285);
  canvasContext.lineTo(10, 160);
  canvasContext.lineTo(82, 35);

  canvasContext.lineWidth = 6;

  //   canvasContext.fillStyle = "teal";
  //   canvasContext.fill();

  canvasContext.strokeStyle = "blue";
  canvasContext.stroke();
}
