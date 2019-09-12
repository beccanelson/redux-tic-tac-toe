import { getNextState } from "../../game/game";
import { getInitialState } from "../../game/utils";
import { GameAction } from "../actions";
import { Game } from "./../../types";

function getLogMessages(
  prevState: Game,
  nextState: Game,
  index: number
): string[] {
  const messages = [];
  if (prevState.currentPlayer) {
    messages.push(`${prevState.currentPlayer.name} moved at spot ${index}`);
  }
  if (nextState.winner) {
    messages.push(`${nextState.winner.name} wins!`);
  } else if (nextState.done) {
    messages.push(`It's a tie!`);
  }

  return messages;
}

const game = (state = getInitialState(), action: GameAction) => {
  switch (action.type) {
    case "MAKE_MOVE": {
      const { index } = action.payload;
      const nextState = getNextState(state.game, index);
      return {
        ...state,
        game: {
          ...state.game,
          ...nextState
        },
        log: [...state.log, ...getLogMessages(state.game, nextState, index)]
      };
    }

    case "RESET": {
      return getInitialState();
    }

    default:
      return state;
  }
};

export default game;
