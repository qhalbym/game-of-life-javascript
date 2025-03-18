import board from "./entities/board.js";
import gameInputHandler from "./utils/gameInputHandler.js";

const startGame = async () => {
  let { pattern, intervalTime } = await gameInputHandler.getInputData();

  setInterval(() => {
    board.showBoard(pattern);
    pattern = board.generateNewBoard(pattern);
  }, intervalTime);
};

startGame();
