async function radio() {
  try {
    const response = await fetch('https://freeuk21.listen2myradio.com/live.mp3?typeportmount=s1_28364_stream');
    if (!response.ok) {
      throw new Error('Erro ao obter o áudio');
    }
    const audio = await response.blob();
    const audioURL = URL.createObjectURL(audio);
    
    // Exemplo de reprodução do áudio usando um elemento de áudio HTML5
    const audioElement = document.createElement('audio');
    audioElement.src = audioURL;
    audioElement.controls = true;
    document.body.appendChild(audioElement);
    
    return audioElement;
  } catch (error) {
    console.log(error);
  }
}

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
  

  radio()
