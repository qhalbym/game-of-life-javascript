import Cell from "./cell.js";

class Board {
  showBoard(pattern) {
    console.clear();
    console.log(this.formatPattern(pattern));
  }

  generateNewBoard(pattern) {
    const expandedPattern = this.expandBoard(pattern);
    const nextGeneration = this.computeNextState(expandedPattern);
    return this.trimBoard(nextGeneration);
  }

  expandBoard(pattern) {
    const width = pattern[0].length;

    return [
      Array(width + 2).fill(0),
      ...pattern.map((row) => [0, ...row, 0]),
      Array(width + 2).fill(0),
    ];
  }

  computeNextState(pattern) {
    return pattern.map((row, i) =>
      row.map((_, j) => new Cell(pattern, i, j).determineNextState())
    );
  }

  trimBoard(pattern) {
    return this.trimEmptyColumns(this.trimEmptyRows(pattern));
  }

  trimEmptyRows(pattern) {
    return pattern.filter((row) => row.some((cell) => cell !== 0));
  }

  trimEmptyColumns(pattern) {
    const hasLiveCell = (colIndex) =>
      pattern.some((row) => row[colIndex] !== 0);
    const firstCol = pattern[0].findIndex((_, i) => hasLiveCell(i));
    const lastCol =
      pattern[0].length -
      pattern[0]
        .slice()
        .reverse()
        .findIndex((_, i) => hasLiveCell(pattern[0].length - 1 - i));

    return pattern.map((row) => row.slice(firstCol, lastCol));
  }

  formatPattern(pattern) {
    return pattern
      .map((row) => row.map((cell) => (cell === 1 ? "o" : ".")).join(" "))
      .join("\n");
  }
}

export default new Board();
