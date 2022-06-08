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
  /////////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////////
  //BOTÓN 1
  $(".btn1").on("click", function () {
    $("picture img").css("border-radius", "300px");
  });
  /////////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////////
  //BOTÓN 2
  $(".btn2").on("click", function () {
    $(".cuadrado.uno").css("animation-iteration-count", "infinite");
    $(".cuadrado.dos").css("animation-iteration-count", "infinite");
  });
  /////////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////////
  //BOTÓN 3
  $(".btn3").on("click", function () {
    // $("video").removeAttr("poster").attr("controls", true);
    $("video").removeAttr("poster").prop("controls", true);
  });
  /////////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////////
  //BOTÓN 4
  $(".btn4").on("click", function () {
    let duracion = $("video").prop("duration");

    $(".duracion").each(function () {
      $(this).remove();
    });

    $("#contenedor-video").append(
      $("<span>", {
        class: "duracion rojo",
        html: duracion,
      })
    );
    //
    //OTRA FORMA DE HACERLO
    //
    let span = $("<span>");
    span.css({
      color: "green",
      backgroundColor: "yellow",
      fontSize: "1.5rem",
    });
    span.addClass("duracion");
    span.text(duracion);
    $("#contenedor-video").append(span);
    //
    //
    //
    //
    $("video").trigger("play");
  });
  /////////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////////
  //BOTÓN5
  $(".btn5").on("click", function () {
    $("header h1").fadeOut(1000, pintaImagenFondo);
  });

  function pintaImagenFondo() {
    $("header article").css({
      backgroundImage: "url('./assets/media/img/favicon/favicon.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "70px 70px",
      //IMPORTANTE
      //EL ELEMENTO QUE CONTENGA LA IMAGEN DE FONDO
      //TIENE QUE TENER DIMENSIONES
      width: "70px",
      height: "70px",
    });
  }
  /////////////////////////////////////////////////////////////////////
  //
  //
  //
  /////////////////////////////////////////////////////////////////////
  //BOTÓN6
  $(".btn6").on("click", function () {


    $(".btn").slideUp(1000, function () {

      estilizaBotones();

      $(".btn").slideDown(1000);
    });

  });

  function estilizaBotones() {

    $('.btn').each(function () {

      $(this).css({

        fontFamily: "Monserrat",
        textTransform: "uppercase",
        backgroundColor: "red"

      });

    });


  }


}
