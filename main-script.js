import { GameCharacter } from "/PC.js";
import { kills, flyElt, Fly } from "/fly.js";
import {
  btnStart,
  timerBar,
  loadSounds,
  music,
  hitSound,
  killSound,
  missSound,
  jumpSound,
} from "/misc.js";

/*
Directions : left, right
Movements : left, right, jump, fall, (duck), hit
*/

/* VAR */

var gameAreaElt = document.getElementsByClassName("gameDisplay");
var charElt = document.getElementById("character");

var player1, fly1, timer;

/*
 */

//console.log(">", loadSounds());

loadSounds().then((audioObjects) => {});

// un array contenant tes audio obj ... index => play() // pause()
//console.log("yata ?", audioObjects[0].play());

/*  EVT LISTENERS & actions */

const checkMovement = (e) => {
  console.log(e.key);
  if (e.keyCode == "38") {
    // up arrow
    //console.log("jump");
    player1.goUp(fly1, setGameNextAction);
  } else if (e.keyCode == "40") {
    // down arrow
    //console.log("duck !");
    player1.duck();
  } else if (e.keyCode == "37") {
    // left arrow
    //console.log("to the left !");
    player1.goLeft();
  } else if (e.keyCode == "39") {
    // right arrow
    //console.log("to the right");
    player1.goRight();
  } else if (e.keyCode == "32") {
    // spacebar
    //console.log("hit !");
    player1.hit(fly1, setGameNextAction);
  }
};

function setGameNextAction(mode) {
  alert("in callback", mode)  
  if (mode === "inc-level") level++;
  letsPlay();
}

var level = 0;
var flyLevels = [
  {stealth: 0.3, speed: 2500},
  {stealth: 0.5, speed: 2200},
]

const letsPlay = () => {

  alert("ok")

  if (level === 0) {
    timer = timerBar();
    player1 = new GameCharacter(charElt,3,4,2,2);
  }

  fly1 = new Fly(flyElt, "3", "8", flyLevels[level].stealth, 2500, timer);
  fly1.move(setGameNextAction);
  
};

btnStart.onclick = () => {
  btnStart.parentElement.style.display = "none";
  //fly1.newFly();
  letsPlay();
  document.onkeydown = checkMovement;
};
