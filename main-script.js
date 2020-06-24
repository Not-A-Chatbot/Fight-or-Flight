import {GameCharacter} from "/PC.js";
import {flyElt, Fly, fly2,fly3,fly4, flies} from "/fly.js";
import {timerBar, loadSounds, music, hitSound, killSound, missSound, jumpSound } from "/misc.js";

/*
Directions : left, right
Movements : left, right, jump, fall, (duck), hit
*/


/* VAR */ 
var gameAreaElt = document.getElementsByClassName("gameDisplay");
var charElt = document.getElementById("character");

var floor = document.getElementById("floor");



var player1 = new GameCharacter(charElt,3,4,2,2);
var fly1;

/* 
*/

//console.log(">", loadSounds());

 loadSounds().then(audioObjects => {
})

  // un array contenant tes audio obj ... index => play() // pause()
 //console.log("yata ?", audioObjects[0].play());






/*  EVT LISTENERS & actions */

const checkMovement = (e) => {
  console.log(e.key);
  if (e.keyCode == "38") {
    // up arrow
    //console.log("jump");
    player1.goUp(fly1);

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
    player1.hit(fly1);
    
  }
};




const letsPlay = () => {
 var timer = timerBar();
 //music.play();
 fly1 = new Fly (flyElt,"2", "8",0.3, 2500, timer)
 fly1.move();
 document.onkeydown = checkMovement;
 //newLevel(fly1,fly2);
}



letsPlay()
