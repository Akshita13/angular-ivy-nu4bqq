import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styles: [
    `
      .clearfix::after {
        content: "";
        clear: both;
        display: table;
      }
    `
  ]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  turn = "x";
  cells: any[] = [];
  combinations = [];
  winnerIs = "";
  isGameOver = false;
  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
  }

  clickHandler(i) {
    if (!this.isGameOver) {
      this.cells[i] = this.turn;
      this.changeTurn();
      this.winner();
    }
  }

  changeTurn() {
    if (this.turn === "x") {
      this.turn = "o";
    } else {
      this.turn = "x";
    }
  }

  winner() {
    this.combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combination of this.combinations) {
      if (
        this.cells[combination[0]] &&
        this.cells[combination[0]] === this.cells[combination[1]] &&
        this.cells[combination[1]] === this.cells[combination[2]]
      ) {
        this.winnerIs = this.cells[combination[0]];
        this.isGameOver = true;
        return;
      }
    }

    let occupy = 0;

    this.cells.forEach(e => {
      occupy += e !== null ? 1 : 0;
    });
    if (occupy === 9) {
      this.winnerIs = "tie";
      this.isGameOver = true;
    }
  }
}
