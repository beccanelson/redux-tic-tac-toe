import reducer, { DEFAULT_BOARD } from "../game";

const player1 = {
  name: "Player 1",
  symbol: "😻"
};

describe("game reducer", () => {
  it("makes a move on the default board", () => {
    expect(
      reducer(undefined, {
        type: "MAKE_MOVE",
        payload: { index: 2, player: player1 }
      })
    ).toEqual({ board: { ...DEFAULT_BOARD, 2: player1 } });
  });

  it("can reset the board", () => {
    expect(
      reducer(
        { board: { ...DEFAULT_BOARD, 2: player1 } },
        {
          type: "RESET"
        }
      )
    ).toEqual({ board: DEFAULT_BOARD });
  });
});
