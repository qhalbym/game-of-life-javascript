import Cell from "../cell.js";

describe("Cell.countNeighbour", () => {
  test("count live neighbour for a center cell", () => {
    const map = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];

    const cell = new Cell(map, 1, 1);
    expect(cell.countNeighbour()).toBe(3);
  });

  test("count live neighbour for a side cell", () => {
    const map = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ];

    const cell = new Cell(map, 1, 0);
    expect(cell.countNeighbour()).toBe(2);
  });

  test("handle warping for edge cell", () => {
    const map = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];

    const cell = new Cell(map, 1, 0);
    expect(cell.countNeighbour()).toBe(3);
  });
});

describe("Cell.countNeighbour", () => {
  test("count live neighbour for a center cell", () => {
    const map = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];

    const cell = new Cell(map, 1, 1);
    expect(cell.countNeighbour()).toBe(3);
  });

  test("count live neighbour for a side cell", () => {
    const map = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ];

    const cell = new Cell(map, 1, 0);
    expect(cell.countNeighbour()).toBe(2);
  });

  test("handle warping for edge cell", () => {
    const map = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];

    const cell = new Cell(map, 1, 0);
    expect(cell.countNeighbour()).toBe(3);
  });
});

describe("Cell.determineNextState", () => {
  test("any live cell with fewer than two live neighbours dies, as if by underpopulation", () => {
    const map = [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
    ];

    const cell = new Cell(map, 1, 1);
    expect(cell.determineNextState()).toBe(0);
  });

  test("any live cell with two or three live neighbours lives on to the next generation", () => {
    const map = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ];

    const cell = new Cell(map, 1, 1);
    expect(cell.determineNextState()).toBe(1);
  });

  test("any live cell with more than three live neighbours dies, as if by overpopulation", () => {
    const map = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 1],
    ];

    const cell = new Cell(map, 1, 1);
    expect(cell.determineNextState()).toBe(0);
  });

  test("any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction", () => {
    const map = [
      [0, 1, 0],
      [1, 0, 0],
      [0, 1, 0],
    ];

    const cell = new Cell(map, 1, 1);
    expect(cell.determineNextState()).toBe(1);
  });
});
