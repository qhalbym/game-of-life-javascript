class Cell {
  constructor(map, row, col) {
    this.map = map;
    this.row = row;
    this.col = col;
  }

  countNeighbour = () => {
    let count = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const row = (this.row + i + this.map.length) % this.map.length;
        const col = (this.col + j + this.map[0].length) % this.map[0].length;

        if (!(i === 0 && j === 0)) {
          count += this.map[row][col];
        }
      }
    }
    return count;
  };
}

export default Cell;
