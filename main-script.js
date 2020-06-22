//import {GameCharacter, player1} from "constructor.js";

/*
Directions : left, right
Movements : left, right, jump, fall, (duck), hit
*/

class GameCharacter {
  constructor(eltHTML, row, column) {
    this.row = row;
    this.column = column;
    this.direction = "right";
    this.state = "ready";
    this.eltHTML = eltHTML;
  }

  goRight = () => {
    if (this.column < 10) {
      if ((this.direction = "left")) {
        this.direction = "right";
      }
      this.column++;
      this.state = "walk";
    }
    this.eltHTML.style.gridColumn = this.column;
  };

  goLeft = () => {
    if (this.column > 1) {
      if ((this.direction = "right")) {
        this.direction = "left";
      }
      this.column--;
      this.state = "walk";
    }
    this.eltHTML.style.gridColumn = this.column;
  };

  goUp = () => {
    var jump = setTimeout(() => {
      this.state = "jump";
      this.row = "1 / 3";
      this.eltHTML.style.gridRow = this.row;
      //console.log("we go uuuup")
    }, 200);

    var fall = setTimeout(() => {
      this.state = "fall";
      this.row = "3 / 5";
      this.eltHTML.style.gridRow = this.row;
      //console.log("and dooown")
    }, 350);
    this.state = "ready";
  };

  duck = () => {
    var duck = setTimeout(() => {
      this.state = "duck";
      this.row = "4";
      this.eltHTML.style.gridRow = this.row;
      console.log("we duuuuck")
    }, 200);

    var getUp = setTimeout(() => {
      this.state = "ready";
      this.row = "3 / 5";
      this.eltHTML.style.gridRow = this.row;
      //console.log("and back up")
    }, 400);
    this.state = "ready";
  };



hit = () => {
    const initialX = this.column;
    if (this.direction == 'right' && this.column < 10) {
        console.log('hit right!');
        var hitRight = setTimeout(() => {
            this.state = "hitRight";
            this.column = `${this.column} / ${this.column + 2}`;
            console.log(this.column);
            this.eltHTML.style.gridColumn = this.column;
            //console.log("we go uuuup")
          }, 200);
      
          var fall = setTimeout(() => {
            this.column = initialX;
            this.eltHTML.style.gridColumn = this.column;
            //console.log("and dooown")
          }, 350);
          this.state = "ready";
    } else {
        if (this.direction == 'left' && this.column > 1) {
            console.log('hit left!');
            var hitRight = setTimeout(() => {
                this.state = "hitLeft";
                this.column = `${this.column -2} / ${this.column}`
                console.log(this.column);
                this.eltHTML.style.gridColumn = this.column;
                //console.log("we go uuuup")
              }, 200);
          
              var fall = setTimeout(() => {
                this.column = initialX;
                this.eltHTML.style.gridColumn = this.column;
                //console.log("and dooown")
              }, 350);
              this.state = "ready";
        }
    }
}


  /* END CONSTRUCTOR */
}

var gameAreaElt = document.getElementsByClassName("gameDisplay");
var charElt = document.getElementById("character");
var flyElt = document.getElementById("fly");
var floor = document.getElementById("floor");



var player1 = new GameCharacter(charElt, "3 / 5", 2);


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
}

letsPlay()