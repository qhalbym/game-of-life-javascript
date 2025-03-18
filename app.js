import board from "./board.js";
import pattern from "./pattern.js";

let blinkerPattern = pattern.blinker();

const run = () => {
  setInterval(() => {
    board.showBoard(blinkerPattern);
    blinkerPattern = board.generateNewBoard(blinkerPattern);
  }, 200);
};

run();
