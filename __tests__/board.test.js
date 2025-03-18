import board from "../entities/board.js";

describe("board.generateNewBoard", () => {
  test("generate new map for block pattern (still life)", () => {
    const map = [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ];

    const newMap = [
      [1, 1],
      [1, 1],
    ];

    expect(board.generateNewBoard(map)).toStrictEqual(newMap);
  });

  test("generate new map for blinker pattern", () => {
    const map = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];

    const newMap = [[1], [1], [1]];

    expect(board.generateNewBoard(map)).toStrictEqual(newMap);
  });

  test("generate new map for toad pattern", () => {
    const map = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];

    const newMap = [
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [0, 1, 0, 0],
    ];

    expect(board.generateNewBoard(map)).toStrictEqual(newMap);
  });

  test("generate new map for glider pattern", () => {
    const map = [
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const newMap = [
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ];

    expect(board.generateNewBoard(map)).toStrictEqual(newMap);
  });

  test("generate new map for lightweight spaceship (LWSS)", () => {
    const map = [
      [0, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
    ];

    const expectedNewMap = [
      [0, 1, 1, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 1],
    ];

    const result = board.generateNewBoard(map);
    console.log("Generated LWSS Map:", result);
    expect(result).toStrictEqual(expectedNewMap);
  });
});
