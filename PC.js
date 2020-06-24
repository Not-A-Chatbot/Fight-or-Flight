import { killSound, missSound, jumpSound, hitSound } from "./misc.js";

export class GameCharacter {
  constructor(eltHTML, rowStart, rowEnd, columnStart, columnEnd) {
    this.rowStart = rowStart;
    this.rowEnd = rowEnd;
    this.columnStart = columnStart;
    this.columnEnd = columnEnd;
    this.direction = "right";
    this.state = "ready";
    this.eltHTML = eltHTML;
  }

  goRight = () => {
    if (this.columnEnd < 10) {
      if ((this.direction = "left")) {
        this.direction = "right";
      }
      this.columnEnd++;
      this.columnStart++;
      this.state = "walk";
    }
    this.eltHTML.style.gridColumn = `${this.columnStart} / ${this.columnEnd}`;
  };

  goLeft = () => {
    if (this.columnStart > 1) {
      if ((this.direction = "right")) {
        this.direction = "left";
      }
      this.columnStart--;
      this.columnEnd--;
      this.state = "walk";
    }
    this.eltHTML.style.gridColumn = `${this.columnStart} / ${this.columnEnd}`;
  };

  goUp = (fly) => {
    var jump = setTimeout(() => {
      this.state = "jump";
      this.rowStart = 1;
      this.rowEnd = 3;
      this.eltHTML.style.gridRow = `${this.rowStart} / ${this.rowEnd}`;
      jumpSound.play();
      //console.log("we go uuuup")
      console.log(this.checkHit(fly));
      if (this.checkHit(fly)) {
        if (this.successKill(fly)) {
          fly.catched();
        }
      }
    }, 200);

    var fall = setTimeout(() => {
      this.state = "fall";
      this.rowStart = 3;
      this.rowEnd = 5;
      this.eltHTML.style.gridRow = `${this.rowStart} / ${this.rowEnd}`;
      //console.log("and dooown")
    }, 350);
    this.state = "ready";
  };

  duck = () => {
    var duck = setTimeout(() => {
      this.state = "duck";
      this.rowStart = 4;
      this.rowEnd = 4;
      this.eltHTML.style.gridRow = `${this.rowStart} / ${this.rowEnd}`;
      console.log("we duuuuck");
    }, 200);

    var getUp = setTimeout(() => {
      this.state = "ready";
      this.rowStart = 3;
      this.rowEnd = 5;
      this.eltHTML.style.gridRow = `${this.rowStart} / ${this.rowEnd}`;
      //console.log("and back up")
    }, 400);
    this.state = "ready";
  };

  hit = (fly) => {
    //console.log(this);
    //console.log(fly);

    const originColEnd = this.columnEnd;
    const originColStart = this.columnStart;

    if (this.direction == "right" && originColEnd < 10) {
      console.log("hit right!");
      var hitRight = setTimeout(() => {
        this.state = "hitRight";
        this.columnEnd += 2;
        this.columnStart += 1;
        this.eltHTML.style.gridColumn = `${this.columnStart} / ${this.columnEnd}`;
        hitSound.play();
        //
        console.log(this.checkHit(fly));
        if (this.checkHit(fly)) {
          if (this.successKill(fly)) {
            fly.catched();
          }
        }
        //
      }, 200);

      var goRest = setTimeout(() => {
        this.columnEnd = originColEnd;
        this.columnStart = originColStart;
        this.eltHTML.style.gridColumn = `${this.columnStart} / ${this.columnEnd}`;
      }, 350);
      this.state = "ready";
    } else {
      if (this.direction == "left" && originColEnd > 1) {
        console.log("hit left!");
        var hitRight = setTimeout(() => {
          this.state = "hitLeft";
          this.columnEnd--;
          this.eltHTML.style.gridColumn = `${this.columnStart} / ${this.columnEnd}`;
          hitSound.play();
          //
          console.log(this.checkHit(fly));
          if (this.checkHit(fly)) {
            if (this.successKill(fly)) {
              fly.catched();
            }
          }
          //
        }, 200);

        var goRest = setTimeout(() => {
          this.columnEnd = originColEnd;
          this.columnStart = originColStart;
          this.eltHTML.style.gridColumn = `${this.columnStart} / ${this.columnEnd}`;
          //console.log("and dooown")
        }, 350);
        this.state = "ready";
      }
    }
  };

  checkHit = (fly) => {
    var successfulHit;
    //console.log(fly);
    console.log(
      `fly is X:${fly.column}  Y:${fly.row}  -  You are X:${this.columnStart} / ${this.columnEnd}  Y:${this.rowStart} / ${this.rowEnd}`
    );

    successfulHit =
      (this.columnStart == fly.column || this.columnEnd == fly.column) &&
      (this.rowStart == fly.row || this.rowEnd == fly.row);

    console.log(successfulHit);
    return successfulHit;
  };

  successKill = (fly) => {
    var success = Math.random() * 1;
    console.log(success);
    if (success <= fly.stealth) {
      killSound.play();
    } else {
      missSound.play();
    }

    return success <= fly.stealth;
  };

  /* END CONSTRUCTOR */
}
