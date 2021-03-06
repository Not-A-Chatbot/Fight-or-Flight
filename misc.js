import { setGameNextAction } from "./main-script.js";


export var btnStart = document.getElementById("btn-start");
export var btnAgain = document.getElementById("btn-again");
export var killsElt = document.getElementById("kills");
export var killsConclusionElt = document.getElementById("conclusion");


export function timerBar(status) {
  var elem = document.getElementById("breakdownBar");
  var width = 100;
  var id = setInterval(progress, 600);
  var o = { status: "running" };

  function progress() {
    if (width == 0 || o.status == "pause") {
      clearInterval(id);
      setGameNextAction("endGame");

    } else {
      width--;
      elem.style.width = width + "vw";
      colorChange();
    }
  }


  function colorChange() {
    if (width <= 75 && width > 50) {
      elem.style.background = "yellow";
    }
    if (width <= 50 && width > 35) {
      elem.style.background = "orange";
    }

    if (width <= 35 && width > 15) {
      elem.style.background = "red";
    }

    if (width <= 15) {
      elem.style.background = "brown";
    }

    elem.style.background = "gb(10, 189, 64)";
  }

  return o;
}

export var hitSound = document.createElement("audio");
hitSound.src = "./Ressource/sfx/NFF-slap-03.wav";
hitSound.volume = 0.4;

export var killSound = document.createElement("audio");
killSound.src = "./Ressource/sfx/NFF-exploding-baloon.wav";
killSound.volume = 0.6;

export var missSound = document.createElement("audio");
missSound.src = "./Ressource/sfx/NFF-steal.wav";
missSound.volume = 0.9;

export var jumpSound = document.createElement("audio");
jumpSound.src = "./Ressource/sfx/NFF-micro-jump.wav";
jumpSound.volume = 0.2;

export var buzzClip1 = document.createElement("audio");
buzzClip1.src =
  "./Ressource/sfx/zapsplat_animal_insect_bee_wasp_fly_by_001_40041.mp3";
buzzClip1.volume = 0.2;

export var buzzClip2 = document.createElement("audio");
buzzClip2.src =
  "./Ressource/sfx/zapsplat_animals_insect_bee_wing_flap_short_pre_flight_12000.mp3";
buzzClip2.volume = 0.2;

export var buzzClip3 = document.createElement("audio");
buzzClip3.src =
  "./Ressource/sfx/animal_insect_fly_buzz_around_close_up_002.mp3";
buzzClip3.volume = 0.2;

export function loadSounds() {
  const urls = [
    "./Ressource/sfx/zapsplat_animal_insect_bee_wasp_fly_by_001_40041.mp3",
    "./Ressource/sfx/zapsplat_animals_insect_bee_wing_flap_short_pre_flight_12000.mp3",
    "./Ressource/sfx/animal_insect_fly_buzz_around_close_up_002.mp3",
  ];

  const sounds = [];
  var count = 0;
  return new Promise((resolve, reject) => {
    urls.forEach((url) => {
      const s = new Audio(url);

      s.addEventListener("loadeddata", (evt) => {
        count++;
        //console.log("sound load event done", evt);
        sounds.push(evt.path[0]);
        if (count === urls.length) resolve(sounds);
      });
    });
  });
}

export function randomBuzz(sound1, sound2) {
  const random = Math.floor(Math.random() * 2);
  //console.log(random)
  if (random == 0) {
    sound1.play();
  } else {
    sound2.play();
  }
}

export var music = document.getElementById("gameMusic");
music.volume = 0.1;
music.loop = true;



