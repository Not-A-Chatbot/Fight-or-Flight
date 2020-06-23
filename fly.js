import { buzzSound } from "./misc.js";

export class Fly {
  constructor(eltHTML, row, column, speed) {
    this.eltHTML = eltHTML;
    this.row = row;
    this.column = column;
    this.stealth = 0.8; // are the chances to catch the fly
    this.speed = speed;
    this.interval = null;
  }
  // FLY RANDOM MOVEMENTS (between all columns, and 3 rows)
  move = () => {
    buzzSound.play();
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

      this.eltHTML.style.gridRow = `${this.row}`;
      this.eltHTML.style.gridColumn = `${this.column}`;
      console.log(`new row : ${this.row} - new col : ${this.column}`);

    }, this.speed);
  };

  // FALLING FLY
  catched = () => {
    buzzSound.pause();   // doesn't pause !
    clearInterval(this.interval);
    this.row = 5;
    this.eltHTML.style.gridRow = `${this.row}`;
    this.eltHTML.style.animation = `fly-fall 2s cubic-bezier(.6,.07,.33,.86)`;
    //add sounds
  };
}
