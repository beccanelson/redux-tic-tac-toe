import { Player } from "../types";

interface BoardState {
  [key: string]: Player | undefined;
}

export const DEFAULT_BOARD: BoardState = {
  0: undefined,
  1: undefined,
  2: undefined,
  3: undefined,
  4: undefined,
  5: undefined,
  6: undefined,
  7: undefined,
  8: undefined
};

const DEFAULT_STATE = {
  board: DEFAULT_BOARD
};

const MAKE_MOVE = "MAKE_MOVE";
const RESET = "RESET";

interface MakeMoveAction {
  type: typeof MAKE_MOVE;
  payload: {
    index: number;
    player: Player;
  };
}

interface ResetAction {
  type: typeof RESET;
}

type BoardAction = MakeMoveAction | ResetAction;

const board = (state = DEFAULT_STATE, action: BoardAction) => {
  switch (action.type) {
    case "MAKE_MOVE":
      const { index, player } = action.payload;
      return {
        ...state,
        board: {
          ...state.board,
          [index]: player
        }
      };

    case "RESET": {
      return { ...state, board: DEFAULT_BOARD };
    }

    default:
      return state;
  }
};

export default board;
