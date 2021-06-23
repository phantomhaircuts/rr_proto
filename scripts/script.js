// Youtube iFrame API stuff is here.
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
let videoID = 'TaCYx9hAv_o'
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: videoID,
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  let done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

      function playVideo(){
         let iframe = document.querySelector('#player');
          player.playVideo();//won't work on mobile
  
          var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
          if (requestFullScreen) {
            requestFullScreen.bind(iframe)();
          }
      }


// Speech Recognition stuff is here. 

const micIgnition = document.querySelector('.mic-ignition');
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();
recognition.continuous = true;
// recognition.interimResults = true;

const micIgnite = () => {
    if (micIgnition.classList.contains('recording-activated')) {
        recognition.stop();
        micIgnition.classList.remove("recording-activated");
    } else {
        recognition.start();
        micIgnition.classList.add("recording-activated");
    }
}

function speechResults (e){
    const transcript = e.results[e.results.length - 1][0].transcript;
    evalResults(transcript);
}

function evalResults (transcript, event) {
    
  console.log(transcript.toLowerCase());
    
    if (transcript.toLowerCase().includes('serenity beach')) {
        videoID = 'TaCYx9hAv_o';
        let iframe = document.querySelector('#player');
        iframe.classList.toggle("hide");
        playVideo();

    }
   
    if (transcript.toLowerCase().includes('emerald cove')) {
        videoID = 'NXfWway52TY';
        let iframe = document.querySelector('#player');
        iframe.classList.toggle("hide");
        playVideo();
    }
    
    if (transcript.toLowerCase().includes('sunrise bay')) {
      videoID = '_J2b1wJAuH8';
      let iframe = document.querySelector('#player');
      iframe.classList.toggle("hide");
      playVideo();
    }
    
    if (transcript.toLowerCase().includes('stop')) {
      stopVideo()
      iframe.classList.toggle('hide');
  }
}

if (speechRecognition) {
    micIgnition.addEventListener('click', micIgnite);
    recognition.addEventListener('result', speechResults);
}

