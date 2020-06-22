export class Fly {

 constructor (eltHTML, row, column, speed) {
     this.eltHTML = eltHTML
     this.row = row;
     this.column = column;
     this.stealth = .8;   // are the chances to catch the fly
     this.speed = speed;
     this.interval = null;

}

move = () => {
this.interval  = setInterval(() => {
    console.log(`I'm moving`);
    this.column = Math.floor(Math.random()*11);
    this.row = Math.floor(Math.random()*4);
    this.eltHTML.style.gridRow = this.row;
    this.eltHTML.style.gridColumn = this.column;
}, this.speed);

}

}