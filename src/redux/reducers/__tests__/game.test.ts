import { Computer, Human, PlayerType, Level } from "../../../types";
import reducer from "../game";
import { createBoard, getInitialState } from "../../../game/utils";

const player1: Human = {
  id: 1,
  name: "Player 1",
  marker: "X",
  type: PlayerType.Human
};

const player2: Computer = {
  id: 2,
  name: "Player 2",
  marker: "O",
  type: PlayerType.Computer,
  level: Level.Easy
};

describe("game reducer", () => {
  describe("making a move", () => {
    const initialState = getInitialState({ players: [player1, player2] });
    it("makes a move on the default board", () => {
      expect(
        reducer(initialState, {
          type: "MAKE_MOVE",
          payload: { index: 2 }
        })
      ).toEqual({
        ...initialState,
        game: {
          ...initialState.game,
          board: createBoard(`
          - - X
          - - - 
          - - - 
        `),
          currentPlayer: initialState.game.players[1]
        },
        log: ["Player 1 moved at spot 2"]
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
          game: {
            ...initialState.game,
            board: {
              ...board,
              8: player1.marker
            },
            currentPlayer: player2,
            done: true,
            winner: player1
          },
          log: ["Player 1 moved at spot 8", "Player 1 wins!"]
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
