

document.addEventListener('DOMContentLoaded', function() {
    $('#play-pause-button').click(function() {
      var audio = $('#sound').get(0);
      $(this).toggleClass('active');
  
      if ($(this).hasClass('active')) {
        $(this).html('<i class="far fa-pause"></i>');
        audio.play();
      } else {
        $(this).html('<i class="far fa-play"></i>');
        audio.pause();
      }
    });
  
    $('#play-pause-button2').click(function() {
      var audio = $('#sound').get(0);
      $(this).toggleClass('active');
  
      if ($(this).hasClass('active')) {
        $(this).html('<i class="far fa-pause"></i>');
        audio.play();
      } else {
        $(this).html('<i class="far fa-play"></i>');
        audio.pause();
      }
    });
  }); 
  
