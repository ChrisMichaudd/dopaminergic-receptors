document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer = document.getElementById('movie_player');
    if (videoPlayer) {
      videoPlayer.addEventListener('onStateChange', function(event) {
        if (event.data === 1) { // video is playing
          chrome.runtime.sendMessage({message: 'videoPlaying'});
        }
      });
    }
  });
  