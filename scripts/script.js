const micIgnition = document.querySelector('.mic-ignition');
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
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
    const transcript = e.results[0][0].transcript;
    evalResults(transcript);
}

function evalResults (transcript) {
    console.log(transcript.toLowerCase());
    if (transcript.toLowerCase() == "activate my scene") {
        alert('go fuck yourself!')
    }
}

if (speechRecognition) {
    micIgnition.addEventListener('click', micIgnite);
    recognition.addEventListener('result', speechResults);
}

