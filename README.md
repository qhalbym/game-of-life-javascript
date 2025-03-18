# Game of Life (JavaScript Implementation)

## Overview

This is a **JavaScript implementation** of Conway's Game of Life, a cellular automaton that simulates the evolution of a grid-based world. The program allows users to select predefined patterns and set an interval for the simulation.

## Features

- Interactive CLI-based pattern selection.
- Predefined patterns to choose from.
- Customizable update interval.
- Runs a step-by-step simulation of Conway's Game of Life.

## Installation

Ensure you have **Node.js** installed, then clone this repository and install dependencies:

```sh
# Clone the repository
git clone https://github.com/qhalbym/game-of-life-javascript.git

# Navigate into the project folder
cd game-of-life-javascript

# Install dependencies
npm install
```

## Usage

Run the Game of Life simulation:

```sh
npm start
```

### How It Works

Upon running the script, you'll be prompted to:

1. Select a predefined pattern.
2. Enter an interval time (in milliseconds) for the simulation updates.

Example output:

```
Available Patterns:
1. Blinker
2. Toad
3. Lightweight Spaceship (LWSS)
4. Glider

Select a pattern (1-4): 2
Enter interval time (default: 500ms): 1000
```

The simulation will then run based on the selected pattern and interval.

## Code Explanation

### `GameInputHandler.js`

This file handles user input using the `readline` module and allows users to select patterns and set an interval time.

#### Key Functions:

- **`getInputData()`**: Prompts the user for a pattern and interval.
- **`showAvailablePattern()`**: Displays available patterns.
- **`getUserInput(question, defaultValue)`**: Captures user input with a default fallback.

## Available Patterns

The game includes the following predefined patterns:

- **Blinker** (period 2 oscillator)
- **Toad** (period 2 oscillator)
- **Lightweight Spaceship (LWSS)** (glider-like moving pattern)
- **Glider** (a small moving pattern)

## Configuration

You can modify the **default values** in `constants.js`:

```js
export const DEFAULTS = {
  PATTERN: 1, // Default pattern selection
  INTERVAL: 500, // Default interval in milliseconds
};
```

## Contributing

Feel free to fork and submit pull requests to enhance functionality or add more patterns!

## License

This project is licensed under the **MIT License**.
