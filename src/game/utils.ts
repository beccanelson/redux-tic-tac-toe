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
  level: Level.Easy
};

export const DEFAULT_STATE: Game = {
  board: INITIAL_BOARD,
  players: [player1, player2],
  winner: undefined,
  done: false
};

export function getInitialState(props: Partial<Game> = {}) {
  return {
    game: {
      ...DEFAULT_STATE,
      ...props,
      currentPlayer: props.players ? props.players[0] : player1
    },
    log: [] as string[]
  };
}
