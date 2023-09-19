  // Audio Player Controls
  
  // var playerButton = document.querySelector('.player-button');
  // var playIcon = '<i class="fa-solid fa-circle-play"></i>';
  // var pauseIcon = '<i class="fa-solid fa-circle-pause"></i>';
  // var audio = document.querySelector('audio');

  // function toggleAudio () {
  //   if (audio.paused) {
  //     audio.play();
  //     playerButton.innerHTML = pauseIcon;
  //   } else {
  //     audio.pause();
  //     playerButton.innerHTML = playIcon;
  //   }
  // }


function stopAllPlayers() {
  var audioPlayers = document.querySelectorAll('.audioPlayer');
  audioPlayers.forEach(element => {
    element.pause();
  });
}