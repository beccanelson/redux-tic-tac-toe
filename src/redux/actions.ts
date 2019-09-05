const MAKE_MOVE = "MAKE_MOVE";
const RESET = "RESET";
const INITIALIZE_GAME = "INITIALIZE_GAME";

interface InitializeGameAction {
  type: typeof INITIALIZE_GAME;
}

interface MakeMoveAction {
  type: typeof MAKE_MOVE;
  payload: {
    index: number;
  };
}

interface ResetAction {
  type: typeof RESET;
}

export type GameAction = InitializeGameAction | MakeMoveAction | ResetAction;
