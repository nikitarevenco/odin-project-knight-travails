// class Node {
//   constructor(N = null, NE = null, E = null, SE = null, S = null, SW = null, W = null, NW = null) {
//     this.N = N;
//     this.NE = NE;
//     this.E = E;
//     this.SE = SE;
//     this.S = S;
//     this.SW = SW;
//     this.W = W;
//     this.NW = NW;
//   }
// }

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Board {
  constructor() {
    this.board = this.createBoard();
  }
  createBoard() {
    const board = [];
    for (let i = 1; i <= 8; i++) {
      const row = [];
      for (let j = 1; j <= 8; j++) {
        row.push(new Square(j, i));
      }
      board.push(row);
    }
    return board;
  }
}

const chess = new Board();
console.log(chess.board);
