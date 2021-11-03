<div id="player"></div>
                    var tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'VideoID',
      playerVars: {   
            'autoplay': 1,   
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'playsinline': 1,
            'showinfo': 0,
            'rel': 0,
            'controls': 0,
            'color':'white',
            'loop': 1,
            'mute':1,
            // 'origin': 'https://meeranblog24x7.blogspot.com/'
      },
      events: {
        'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
    });
  }
  function onPlayerReady(event) {
    player.playVideo();
    player.mute();
  }var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }