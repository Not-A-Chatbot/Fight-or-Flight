import {timerBar,loadSounds, buzzClip1, buzzClip2, buzzClip3, randomBuzz, music } from "./misc.js";
export var kills = 0;


export var flyElt = document.getElementById("fly");

export class Fly {
  constructor(eltHTML, row, column,stealth, speed, timer) {
    this.eltHTML = eltHTML;
    this.row = row;
    this.column = column;
    this.stealth = 0.9; // are the chances to catch the fly
    this.speed = speed;
    this.interval = null;
    this.timer = timer;
    this.death = false;
  }
  // FLY RANDOM MOVEMENTS (between all columns, and 3 rows)
  move = () => {
    music.play()
    this.interval = setInterval(() => {
      console.log(`I'm moving`);

      const randMoveV = Math.random();
      const randMoveH = Math.random();
      console.log(randMoveV + "-" + randMoveH);

      if (this.row > 1 && this.row < 4) {
        if (randMoveV > 0.5) {
          this.row++;
        
        } else {
          this.row--;
        
        }
      } else if (this.row == 1) {
        if (randMoveV > 0.2) {
          this.row = 2;
        
        }
      } else if (this.row == 4) {
        if (randMoveV > 0.2) {
          this.row -= 1;
          
        }
      }

      if (this.column > 2 && this.column < 9) {
        if (randMoveH > 0.5) {
          this.column += 1;
        } else {
          this.column -= 1;
        }
      } else if (this.column == 2) {
        if (randMoveH > 0.2) {
          this.column += 1;
        }
      } else if (this.column >= 9) {
        if (randMoveH > 0.2) {
          this.column = 8;
        }
      }
      randomBuzz(buzzClip1,buzzClip2);
      this.eltHTML.style.gridRow = `${this.row}`;
      this.eltHTML.style.gridColumn = `${this.column}`;
      console.log(`new row : ${this.row} - new col : ${this.column}`);

    }, this.speed);
  };

  // FALLING FLY
  catched = () => {
    clearInterval(this.interval);
    this.row = 5;
    buzzClip3.play()
    this.death = true;
    
    this.eltHTML.style.gridRow = `${this.row}`;
    this.eltHTML.style.animation = `fly-fall 2s cubic-bezier(.6,.07,.33,.86)`;
    this.timer.status = 'pause'; 
    music.pause();
    addKill();
    console.log('kills : ' + kills);
  };
}

export var fly1 = new Fly (flyElt,"2", "8",0.7, 2500, timerBar)
export var fly2 = new Fly (flyElt, "4", "7", 0.5, 2000, timerBar)
export var fly3 = new Fly (flyElt, "3", "3", 0.3,1500, timerBar )
export var fly4 = new Fly (flyElt, "1", "7", 0.1,1000, timerBar )

export var flies = [fly1,fly2,fly3,fly4];


export function levels (flies) {   // doesn't work

  for (let i = 0; i < flies.length; i++) {

  var checkDeath =  setInterval(() => {  if (flies[i].death) {
    console.log(flies[i].death);
    music.play();
    flies[i+1].move();
    clearInterval(checkDeath)
    i++
  }
  }, 1000);

    console.log(`previous fly is dead, long lives the new fly!`);
  }
}

export function addKill () {
  var killsDiv = document.getElementById("points");
  var newKill = document.createElement('div');
  newKill.classList.add('newKill');
  killsDiv.appendChild(newKill);
  kills += 1;
}