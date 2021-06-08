class Game {
  constructor() {
    this.matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ];
    this.board = document.querySelector(".board-grid");
  }

  start() {
    let game = document.querySelector("body");
    game.addEventListener("keydown", () => {
      this.handleMove();
    });

    this.fistBoard();
    console.log(board);
  }

  handleMove() {
    for (let i = 0; i < this.matrix.length; i++) {
      let newValue = this.matrix[i].reduce((acc, current, index) => {
        if (index > 0) {
          this.matrix[i][index] = 0;
        }
        return acc + current;
      }, 0);
      this.matrix[i][0] = newValue;
    }
    this.renderBoard();
  }

  renderBoard() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        let item = document.querySelector(`#item-` + i + j);
        console.log(item);
        item.className = "board-item";
        item.classList.add("backgroud-clean");

        if (this.matrix[i][j]) {
          item.classList.add("backgroud-white");
          item.textContent = this.matrix[i][j];
        } else {
          item.textContent = "";
        }
      }
    }
  }

  fistBoard() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        let item = document.createElement("div");
        item.className = "board-item";
        item.id = `item-` + i + j;
        item.classList.add("backgroud-clean");

        if (this.matrix[i][j]) {
          item.classList.add("backgroud-white");
          item.textContent = this.matrix[i][j];
        } else {
        }

        this.board.appendChild(item);
      }
    }
  }
}

const game = new Game();
window.onload = game.start();
