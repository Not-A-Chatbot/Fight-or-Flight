export class GameCharacter {
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
  