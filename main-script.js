import { GameCharacter } from "./PC.js";
import { kills, killsDiv, flyElt, Fly } from "./fly.js";
import {killsConclusionElt,killsElt,
  btnStart,
  btnAgain,
  timerBar,
  loadSounds,
  music,
  hitSound,
  killSound,
  missSound,
  jumpSound,
} from "./misc.js";

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

export function setGameNextAction(mode) {
  console.log("in callback", mode)  
  if (mode === "inc-level") {//level++;
  letsPlay();}
  else {
    //console.log(`heyyy time's up !`);
    if (kills === 0) {
      killsConclusionElt.innerText = `Now might be a good time to open the window...`;
      console.log(`0 kills changed inner text`);
    } else {killsConclusionElt.innerHTML = `You can now rest before the dead bodies of your ennemies. <br> Or continue ..!`; console.log(`multiple kills changed innertext`);}
    killsElt.innerText = `${kills}`;
    console.log(`added nb of kills`);
    fly1.catched();
    console.log(`catched fly`);
    btnAgain.parentElement.classList.toggle("inactive");
    console.log(`toggle the class`);
    

  }
}

//var level = 0;
var flyLevels = [
  {stealth : 0.9, speed : 2550},
  {stealth : 0.8, speed : 2500},
  {stealth : 0.6, speed : 2300},
  {stealth : 0.5, speed : 2000},
  {stealth : 0.3, speed : 1500},
  {stealth : 0.2, speed : 1000},
  {stealth : 0.2, speed : 1000},
  {stealth : 0.1, speed : 1500},
  {stealth : 0.2, speed : 1000},
  {stealth : 0.1, speed : 950}
]

const letsPlay = () => {
  
console.log("letsPlay - ok")
  if (kills === 0) {
    player1 = new GameCharacter(charElt,3,4,2,2);
    fly1 = new Fly(flyElt, "3", "8", flyLevels[kills].stealth, flyLevels[kills].speed)
    console.log(`fly #${kills} - ${fly1}`);
  } else if (kills >= 10) {
    fly1 = new Fly(flyElt, "3", "8", flyLevels[9].stealth, flyLevels[9].speed)
  }
  fly1 = new Fly(flyElt, "3", "8", flyLevels[kills].stealth, flyLevels[kills].speed);
  console.log(`fly #${kills} - ${fly1}`);
  fly1.move(setGameNextAction);

};

btnStart.onclick = () => {
  console.log(btnStart.parentElement)
  console.log(btnStart.parentElement.classList.contains("inactive"))
  btnStart.parentElement.classList.toggle("inactive");
  console.log(btnStart.parentElement.classList.contains("inactive"))
  letsPlay();
  document.onkeydown = checkMovement;
  timer = timerBar();
};

btnAgain.onclick = () => {
  btnAgain.parentElement.classList.toggle("inactive");
  setGameNextAction("inc-level");
  document.onkeydown = checkMovement;
  timer = timerBar();
};