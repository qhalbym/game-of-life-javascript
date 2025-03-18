import Cell from "./cell.js";

class Board {
  showBoard = (pattern) => {
    console.clear();
    console.log(pattern);
  };

  generateNewBoard = (pattern) => {
    let newMap = [];
    for (let i = 0; i < pattern.length; i++) {
      const newInnerMap = [];
      for (let j = 0; j < pattern[i].length; j++) {
        const cell = new Cell(pattern, i, j, pattern[i][j]);
        newInnerMap.push(cell.determineNextState());
      }
      newMap.push(newInnerMap);
    }

    return newMap;
  };
}

export default new Board();
