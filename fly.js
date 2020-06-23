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
    this.interval = setInterval(() => {
      console.log(`I'm moving`);

        const randMoveV = Math.random();
        const randMoveH = Math.random();
        //console.log(randMoveV + "-" + randMoveH);

        if (this.row > 1 && this.row < 4) {
            if (randMoveV > .5) {this.row ++} 
            else { this.row -- }
        } else if (this.row === 1) {
            if (randMoveV > .2) {this.row ++}
        } else if (this.row === 4) {
            if (randMoveV > .2) {this.row --}
        }

        if (this.column > 2 && this.column < 9) {
            if (randMoveH > .5) {this.column ++} 
            else { this.column -- }
        } else if (this.column === 2) {
            if (randMoveH > .2) {this.column ++}
        } else if (this.column === 9) {
            if (randMoveH > .2) {this.column --}
        }



        this.eltHTML.style.gridRow =`${this.row}`;
        this.eltHTML.style.gridColumn = `${this.column}`;
    }, this.speed);
  };

  // FALLING FLY
  catched = () => {
    clearInterval(this.interval);
    this.row = 5;
    this.eltHTML.style.gridRow = `${this.row}`;
    //add sounds
  };
}
