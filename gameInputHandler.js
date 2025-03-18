import readline from "readline";
import pattern from "./pattern.js";

class GameInputHandler {
  constructor() {
    this.readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async getInputData() {
    this.showAvailablePattern();

    const patternIndex = await this.getUserInput(
      "Enter pattern number (default: 1): ",
      "1"
    );
    const intervalTime = await this.getUserInput(
      "Enter interval time in ms (default: 500): ",
      "500"
    );

    const patternNames = Object.keys(pattern);
    const selectedPattern =
      pattern[patternNames[parseInt(patternIndex, 10) - 1]];

    this.readlineInterface.close();

    return {
      pattern: selectedPattern ? selectedPattern() : pattern.blinker(),
      intervalTime: isNaN(intervalTime) ? 500 : parseInt(intervalTime, 10),
    };
  }

  showAvailablePattern() {
    console.log("\nAvailable Patterns:");
    Object.keys(pattern).forEach((name, index) => {
      console.log(`${index + 1}. ${name}`);
    });
  }

  getUserInput(question, defaultValue) {
    return new Promise((resolve) => {
      this.readlineInterface.question(`${question} `, (input) => {
        resolve(input.trim() || defaultValue);
      });
    });
  }
}

export default new GameInputHandler();
