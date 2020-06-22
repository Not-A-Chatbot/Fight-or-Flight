import {GameCharacter} from "/constructor.js";
import {Fly} from "/fly.js";

/*
Directions : left, right
Movements : left, right, jump, fall, (duck), hit
*/

/* VAR */ 
var gameAreaElt = document.getElementsByClassName("gameDisplay");
var charElt = document.getElementById("character");
var flyElt = document.getElementById("fly");
var floor = document.getElementById("floor");


var player1 = new GameCharacter(charElt, "3 / 5", 2);
var fly1 = new Fly (flyElt,2, 9, 1000)


/*  EVT LISTENERS & actions */

const checkMovement = (e) => {
  console.log(e.key);
  if (e.keyCode == "38") {
    // up arrow
    console.log("jump");
    player1.goUp();

  } else if (e.keyCode == "40") {
    // down arrow
    console.log("duck !");
    player1.duck();

  } else if (e.keyCode == "37") {
    // left arrow
    console.log("to the left !");
    player1.goLeft();

  } else if (e.keyCode == "39") {
    // right arrow
    console.log("to the right");
    player1.goRight();

  } else if (e.keyCode == "32") {
    // spacebar
    player1.hit();
    console.log("hit !");
  }
};




const letsPlay = () => {
 document.onkeydown = checkMovement;
 fly1.move();
}

letsPlay()