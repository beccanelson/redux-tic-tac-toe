import { Human, PlayerType, Computer, Level, Game } from "./../../types";
import { GameAction } from "../actions";
import { createBoard } from "../../game/utils";
import { advanceGameState } from "../../game";

const INITIAL_BOARD = createBoard(`
    - - - 
    - - - 
    - - - 
  `);

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

const DEFAULT_STATE: Game = {
  board: INITIAL_BOARD,
  players: [player1, player2],
  currentPlayer: player1,
  winner: undefined,
  done: false
};

export function getInitialState(props: Partial<Game> = {}) {
  return {
    ...DEFAULT_STATE,
    ...props
  };
}

const game = (state = DEFAULT_STATE, action: GameAction) => {
  switch (action.type) {
    case "MAKE_MOVE": {
      const spotIndex = action.payload.index;
      const updatedState = advanceGameState(state, spotIndex);
      return updatedState;
    }

    case "RESET": {
      return DEFAULT_STATE;
    }

    default:
      return state;
  }
};

export default game;
