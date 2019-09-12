import { Board, Game, Player } from "./../types";
import { isFull } from "./board";

const winningIndeces = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export function getWinner(board: Board, players: Player[]) {
  const [player1, player2] = players;
  let winner = undefined;
  winningIndeces.forEach(row => {
    const markers = row.map(i => board[i]);
    if (markers.every(m => m === player1.marker)) {
      winner = player1;
    } else if (markers.every(m => m === player2.marker)) {
      winner = player2;
    }
  });
  return winner;
}

export function getNextPlayer(players: Player[], currentPlayer?: Player) {
  if (!currentPlayer) {
    const [player1] = players;
    return player1;
  }
  return players.find(player => player.id !== currentPlayer.id);
}

export function isOver(board: Board, players: Player[]) {
  return isFull(board) || !!getWinner(board, players);
}

export function getNextState(game: Game, spotIndex: number) {
  const { board, players, currentPlayer = players[0] } = game;
  const nextBoard = { ...board, [spotIndex]: currentPlayer.marker };
  const nextWinner = getWinner(nextBoard, players);
  const done = isOver(nextBoard, players);
  const nextPlayer = done ? undefined : getNextPlayer(players, currentPlayer);

  return {
    ...game,
    board: nextBoard,
    winner: nextWinner,
    currentPlayer: nextPlayer,
    done
  };
}
