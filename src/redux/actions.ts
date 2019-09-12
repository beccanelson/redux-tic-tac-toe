export const MAKE_MOVE = "MAKE_MOVE";
export const RESET = "RESET";

interface MakeMoveAction {
  type: typeof MAKE_MOVE;
  payload: {
    index: number;
  };
}

interface ResetAction {
  type: typeof RESET;
}

export type GameAction = MakeMoveAction | ResetAction;
