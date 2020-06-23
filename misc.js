export function timerBar() {
    var elem = document.getElementById("breakdownBar");
    var width = 100;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width <= 1) {
        clearInterval(id);
      } else {
        width--;
        elem.style.width = width + 'vw';
      }
    }
  }

  
export var buzzSound = document.createElement("audio");
buzzSound.src = "./Ressource/sfx/flies-buzzing-sound-effect.mp3";
