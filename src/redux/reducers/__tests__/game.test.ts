import { Computer, Human, PlayerType, Level } from "../../../types";
import reducer, { getInitialState } from "../game";
import { createBoard } from "../../../game/utils";

const player1: Human = {
  id: "Player 1",
  marker: "X",
  type: PlayerType.Human
};

const player2: Computer = {
  id: "Player 2",
  marker: "O",
  type: PlayerType.Computer,
  level: Level.Easy
};

describe("game reducer", () => {
  describe("making a move", () => {
    const initialState = getInitialState();
    it("makes a move on the default board", () => {
      expect(
        reducer(undefined, {
          type: "MAKE_MOVE",
          payload: { index: 2 }
        })
      ).toEqual({
        ...initialState,
        board: createBoard(`
          - - X
          - - - 
          - - - 
        `),
        currentPlayer: initialState.players[1]
      });
    });

    describe("when the board is full", () => {
      it("is over", () => {
        const board = createBoard(`
          X O X 
          O X O
          O X -
        `);
        const initialState = getInitialState({
          board,
          players: [player1, player2]
        });
        expect(
          reducer(initialState, {
            type: "MAKE_MOVE",
            payload: { index: 8 }
          })
        ).toEqual({
          ...initialState,
          board: {
            ...board,
            8: player1.marker
          },
          currentPlayer: undefined,
          done: true,
          winner: player1
        });
      });
    });
  });

  it("can reset the board", () => {
    const initialState = getInitialState({
      board: createBoard(`
      - - X
      - - - 
      - - - 
    `)
    });
    expect(
      reducer(initialState, {
        type: "RESET"
      })
    ).toEqual(getInitialState());
  });
});
