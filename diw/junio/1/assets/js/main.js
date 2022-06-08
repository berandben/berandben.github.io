//https://learn.jquery.com/
//https://api.jquery.com/
//https://api.jquery.com/category/events/
//https://api.jquery.com/category/effects/
//https://www.w3schools.com/jquery/jquery_ref_selectors.asp
//https://www.anerbarrena.com/jquery-selectors-selectores-4768/
//https://developer.mozilla.org/en-US/docs/Web/Events#media
//https://www.w3schools.com/tags/ref_av_dom.asp
//https://www.w3schools.com/jquery/eff_animate.asp#:~:text=The%20animate()%20method%20performs,%22margin%3A30px%22).

//Files
//jQuery Core
//https://jquery.com/download/
//jQuery UI
//https://jqueryui.com/download/

//CDN
//jQuery Core
//https://releases.jquery.com/
//jQuery UI
//https://releases.jquery.com/ui/

/*##############################################################
GENERALES
##############################################################*/

/**
 * Función que escucha el evento de carga de la página
 * para ejecutar la función init.
 */
$(init);

/**
 * Función que lanza la aplicación
 */
function init() {
  //
  //
  //
  //
  //
  $("#btn1").on("click", function () {
    let src = $("#animacion img").attr("src");

    $("#animacion img").prop("width", 5000);

    $("#bloque2 div").html("");

    let parrafo = $("<p>");

    parrafo
      .append("Origen " + src)
      .append(" ---- Ancho ----" + $("#animacion img").prop("width"))
      .append(" ---- Alto ----" + $("#animacion img").prop("height"));

    $("#bloque2 div").append(parrafo);
  });
  //
  //
  //
  //
  //
  $("#btn2").on("click", function () {
    $("header div span").css("color", "red");
  });
  //
  //
  //
  //
  //
  $("#btn3").on("click", function () {
    $("header").slideUp(1500, function () {
      $("header").slideDown(1500);

      $("header div img").css({
        filter: "opacity(0.3)",
      });
    });
  });

  //
  //
  //
  //
  //

  $("#btn4").on("click", function () {
    $("#animacion img").css({
      border: "4px solid red",
      borderRadius: "50px",
    });
  });
}
