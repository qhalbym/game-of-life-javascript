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
