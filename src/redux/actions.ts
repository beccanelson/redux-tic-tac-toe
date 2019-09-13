import { ThunkDispatch } from "redux-thunk";
import { AppState } from "./store";
import { PlayerType } from "../types";
import { getAIMove } from "../game/ai";

export const MAKE_MOVE = "MAKE_MOVE";
export const RESET = "RESET";
export const REQUEST_MOVE = "REQUEST_MOVE";

interface MakeMoveAction {
  type: typeof MAKE_MOVE;
  payload: {
    index: number;
  };
}

interface ResetAction {
  type: typeof RESET;
}

export function makeMove(index: number): MakeMoveAction {
  return {
    type: MAKE_MOVE,
    payload: { index }
  };
}

export function reset(): ResetAction {
  return {
    type: RESET
  };
}

export function takeTurn(index: number) {
  return function(
    dispatch: ThunkDispatch<{}, {}, GameAction>,
    getState: () => AppState
  ) {
    dispatch(makeMove(index));
    const { game } = getState().game;
    if (game.currentPlayer && game.currentPlayer.type === PlayerType.Computer) {
      // Required to break out of event loop so state gets updated before waiting for the next move
      setTimeout(() => {
        dispatch(makeMove(getAIMove(game)));
      }, 500);
    }
  };
}

export type GameAction = MakeMoveAction | ResetAction;
