async function radio(){
  try {
    const play = await fetch('https://freeuk21.listen2myradio.com/live.mp3?typeportmount=s1_28364_stream')
    return play
  } catch (error) {
    console.log(error)
    
  }
  
 
  
}

document.addEventListener('DOMContentLoaded', function() {
    $('#play-pause-button').click(function() {
      var audio = $('https://freeuk21.listen2myradio.com/live.mp3?typeportmount=s1_28364_stream').get(0);
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
      var audio = $('https://freeuk21.listen2myradio.com/live.mp3?typeportmount=s1_28364_stream').get(0);
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
  
