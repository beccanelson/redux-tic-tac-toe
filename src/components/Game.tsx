import * as React from "react";
import { AppState } from "../redux/store";
import { Game as GameState } from "../types";
import { Dispatch } from "redux";
import { GameAction, MAKE_MOVE, RESET } from "../redux/actions";
import { connect } from "react-redux";
import Board from "./Board";
import Button from "./Button";
import styled from "styled-components";
import Log from "./Log";

type GameProps = {
  game: GameState;
  log: string[];
  makeMove(key: number): void;
  reset(): void;
};

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 1rem;
`;

type GameInfoProps = {
  game: GameState;
};

const GameInfo: React.SFC<GameInfoProps> = ({ game }) => {
  if (game.currentPlayer) {
    return (
      <p>
        Current Player:{" "}
        {`${game.currentPlayer.name} ${game.currentPlayer.marker}`}
      </p>
    );
  } else if (game.winner) {
    return <p>{game.winner.name} wins!</p>;
  } else {
    return <p>It's a tie!</p>;
  }
};

const Game: React.SFC<GameProps> = ({ game, log, makeMove, reset }) => {
  return (
    <div>
      <h1>Welcome to Tic Tac Toe!</h1>
      <GameInfo game={game}></GameInfo>
      <Board done={game.done} board={game.board} makeMove={makeMove}></Board>
      <ButtonWrapper>
        <Button onClick={reset}>Reset</Button>
      </ButtonWrapper>
      <Log messages={log}></Log>
    </div>
  );
};

function mapStateToProps({ game }: AppState) {
  return {
    game: game.game,
    log: game.log
  };
}

function mapDispatchToProps(dispatch: Dispatch<GameAction>) {
  return {
    makeMove: (index: number) => {
      dispatch({
        type: MAKE_MOVE,
        payload: { index }
      });
    },
    reset: () => {
      dispatch({
        type: RESET
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
