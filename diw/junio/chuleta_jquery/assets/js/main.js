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

  /*##############################################################
  RADIO
  ##############################################################*/

  $('main section:nth-child(1) :radio').each(function () {

    $(this).on('change', muestraValorRadio);
  });

  /*##############################################################*/
  function muestraValorRadio() {

    let valor = $(this).val();

    let elementoSalida = $('main section:nth-child(1) .articles article:last-child .salida');

    elementoSalida.html('');

    let span = $('<span>', {

      html: valor,

    });

    elementoSalida.append(span);
  }

  /*##############################################################
  CHECKBOX
   ##############################################################*/
  $('main section:nth-child(2) :checkbox').each(function () {

    $(this).on('change', muestraValorCheckbox);
  });

  /*##############################################################*/
  function muestraValorCheckbox() {

    let valor = $(this).val();

    let elementoSalida = $('main section:nth-child(2) .articles article:last-child .salida');


    if ($(this).is(':checked')) {

      let span = $('<span>', {

        html: valor,

      });

      elementoSalida.append(span);

    } else {

      elementoSalida.children().each(function () {

        if ($(this).text().match(valor)) {

          $(this).remove();

        }
      });
    }

  }
  /*##############################################################
 SELECT
   ##############################################################*/
  $('main section:nth-child(3) select').on('change', muestraValorSelect);

  /*##############################################################*/
  function muestraValorSelect() {

    let valor = $(this).val();

    let elementoSalida = $('main section:nth-child(3) .articles article:last-child .salida');

    elementoSalida.html('');

    let span = $('<span>', {

      html: valor,

    });

    elementoSalida.append(span);
  }

  /*##############################################################
INPUT TEXT
   ##############################################################*/
  $('main section:nth-child(4) input').on('keyup', muestraValorInputText);


  /*##############################################################*/
  function muestraValorInputText() {

    let valor = $(this).val();

    let elementoSalida = $('main section:nth-child(4) .articles article:last-child .salida');

    elementoSalida.html('');

    let span = $('<span>', {

      html: valor,

    });

    elementoSalida.append(span);
  }

  /*##############################################################
INPUT NUMBER
 ##############################################################*/
  $('main section:nth-child(5) input').on('change', muestraValorInputNumber);


  /*##############################################################*/
  function muestraValorInputNumber() {

    let valor = $(this).val();

    let elementoSalida = $('main section:nth-child(5) .articles article:last-child .salida');

    elementoSalida.html('');

    let span = $('<span>', {

      html: valor,

    });

    elementoSalida.append(span);
  }

  /*##############################################################
VIDEO
##############################################################*/
  $('main section:nth-child(6) button').on('click', muestraInfoVideo);


  /*##############################################################*/
  function muestraInfoVideo() {

    let video = $('video');

    let info = [];


    let duration = video.prop('duration');
    info.push({ 'duration': duration });

    let controls = video.prop('controls');
    info.push({ 'controls': controls });

    let paused = video.prop('paused');
    info.push({ 'paused': paused });

    let volume = video.prop('volume');
    info.push({ 'volume': volume * 100 });

    let muted = video.prop('muted');
    info.push({ 'muted': muted });

    let videoHeight = video.prop('videoHeight');
    info.push({ 'videoheight': videoHeight });

    let videoWidth = video.prop('videoWidth');
    info.push({ 'videowidth': videoWidth });

    let poster = video.prop('poster');
    info.push({ 'poster': poster });

    let width = video.prop('width');
    info.push({ 'width': width });

    let height = video.prop('height');
    info.push({ 'height': height });

    let elementoSalida = $('main section:nth-child(6) .articles article:last-child .salida');
    elementoSalida.html('');
    elementoSalida.css({
      display: 'flex',
      flexDirection: 'column'
    });


    //Recorre el array extrayendo los índices y sus correspondientes objetos
    $(info).each(function (index, element) {

      //De cada objeto extrae su propiedad y el valor
      $.each(element, function (key, value) {

        let span = $('<span>', {

          html: key + ' : ' + value

        });

        elementoSalida.append(span);

      });
    });
  }


  /*##############################################################
MANIPULACIÓN VIDEO
##############################################################*/

  /*###CONTROLES###############################################*/
  $('#btn_controls').on('click', function () {

    $('video').prop('controls') === true ? $('video').prop('controls', false) : $('video').prop('controls', true);

    $('main section:nth-child(6) button').trigger('click');

  });

  /*#####PLAY#########################################################*/
  $('#btn_play').on('click', function () {

    $('video').prop('paused') === true ? $('video').trigger('play') : $('video').trigger('pause');

    $('main section:nth-child(6) button').trigger('click');

  });






}


