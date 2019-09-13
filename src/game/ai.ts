import { Computer, Level } from "./../types";
import { getAvailableSpots } from "./board";
import { getNextState, getNextPlayer, getWinner, isOver } from "./game";
import { Game, Player } from "../types";
import { zip } from "./utils";

const STARTING_SCORE = 10;

function getScore(game: Game, depth: number) {
  const { players, board, currentPlayer } = game;
  const opponent = getNextPlayer(players, currentPlayer);
  const winner = getWinner(board, players);
  switch (winner) {
    case currentPlayer:
      return STARTING_SCORE - depth;
    case opponent:
      return depth - STARTING_SCORE;
    default:
      return 0;
  }
}

function getMinOrMax(scores: number[], game: Game, player: Player) {
  const { currentPlayer } = game;
  if (player === currentPlayer) {
    return Math.max(...scores);
  } else {
    return Math.min(...scores);
  }
}

function minimax(game: Game, player: Player): number[] {
  let depth = 0;
  const { board, players } = game;
  const availableSpots = getAvailableSpots(board);
  return availableSpots.map(spot => {
    const possibleGameState = getNextState(game, spot);
    if (isOver(possibleGameState.board, players)) {
      return getScore(possibleGameState, depth);
    } else {
      depth += 1;
      return getMinOrMax(
        minimax(possibleGameState, player),
        possibleGameState,
        player
      );
    }
  });
}

function getBestMove(game: Game) {
  const { board } = game;

  const availableSpots = getAvailableSpots(board);
  const scores: number[] = minimax(
    game,
    (game.currentPlayer = game.players[0])
  );
  const maxScore = Math.max(...scores);
  const zippedScores = zip(availableSpots, scores);

  const [spot] = zippedScores.find(([_spot, score]) => score === maxScore)!;
  return spot;
}

function getRandomMove(game: Game) {
  const { board } = game;
  const availableSpots = getAvailableSpots(board);
  const index = Math.floor(Math.random() * availableSpots.length);
  return availableSpots[index];
}

export function getAIMove(game: Game) {
  const currentPlayer = game.currentPlayer as Computer;
  switch (currentPlayer.level) {
    case Level.Easy: {
      return getRandomMove(game);
    }
    case Level.Hard: {
      return getBestMove(game);
    }
    default: {
      throw new Error();
    }
  }
}
