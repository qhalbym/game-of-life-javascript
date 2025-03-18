import board from "./board.js";
import gameInputHandler from "./gameInputHandler.js";

const startGame = async () => {
  let { pattern, intervalTime } = await gameInputHandler.getInputData();

  setInterval(() => {
    board.showBoard(pattern);
    pattern = board.generateNewBoard(pattern);
  }, intervalTime);
};

startGame();
