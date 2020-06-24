import {GameCharacter} from "/PC.js";
import {Fly} from "/fly.js";
import {timerBar, loadSounds, music, hitSound, killSound, missSound, jumpSound } from "/misc.js";

/*
Directions : left, right
Movements : left, right, jump, fall, (duck), hit
*/
console.log(">", loadSounds);

loadSounds().then(audioObjects => {
  // un array contenant tes audio obj ... index => play() // pause()
  console.log("yata ?", audioObjects[0].play());
  
})

/* VAR */ 
var gameAreaElt = document.getElementsByClassName("gameDisplay");
var charElt = document.getElementById("character");
var flyElt = document.getElementById("fly");
var floor = document.getElementById("floor");


var player1 = new GameCharacter(charElt,3,4,2,2);
var fly1;


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
  //music.play();

 var timer = timerBar();
 fly1 = new Fly (flyElt,"2", "8", 3000, timer)
 fly1.move();
 document.onkeydown = checkMovement;
}


//if fly is down, pause timer bar, propose new fly


letsPlay()
//console.log(`${player1.row} (length : ${player1.row.length} - ${player1.column} (length : ${(player1.column).length}) `)
//console.log(columnStrg)