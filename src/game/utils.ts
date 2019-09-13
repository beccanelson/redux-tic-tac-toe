import { GameState } from "./../types";
import { Board, Human, PlayerType, Computer, Level, Game } from "../types";

export function createBoard(formattedString: string, placeholder = "-"): Board {
  const board = formattedString
    .replace(/\s/g, "")
    .split("")
    .map(value => (value === placeholder ? undefined : value));

  return { ...board };
}

const INITIAL_BOARD = createBoard(`
    - - - 
    - - - 
    - - - 
  `);

const player1: Human = {
  id: 1,
  name: "Player 1",
  marker: "😻",
  type: PlayerType.Human
};

const player2: Computer = {
  id: 2,
  name: "Player 2",
  marker: "🤖",
  type: PlayerType.Computer,
  level: Level.Hard
};

export const DEFAULT_STATE: Game = {
  board: INITIAL_BOARD,
  players: [player1, player2],
  winner: undefined,
  currentPlayer: player1,
  done: false
};

export function getInitialState(props: Partial<Game> = {}): GameState {
  return {
    game: {
      ...DEFAULT_STATE,
      ...props,
      currentPlayer: props.players ? props.players[0] : player1
    },
    log: [] as string[]
  };
}

export function zip(arr1: any[], arr2: any[]) {
  return arr1.map((value, i) => {
    return [value, arr2[i]];
  });
}
