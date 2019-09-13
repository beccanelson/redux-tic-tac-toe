import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { reset, takeTurn } from "../redux/actions";
import { AppState } from "../redux/store";
import { Game as GameType, GameState } from "../types";
import Board from "./Board";
import Button from "./Button";
import Log from "./Log";

type GameProps = GameState & {
  takeTurn(key: number): void;
  reset(): void;
};

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 1rem;
`;

type GameInfoProps = {
  game: GameType;
  waitingForMove?: boolean;
};

const GameInfo: React.SFC<GameInfoProps> = ({ game, waitingForMove }) => {
  if (waitingForMove) {
    return <p>Computer is thinking...</p>;
  } else if (game.currentPlayer) {
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

const Game: React.SFC<GameProps> = ({ game, log, takeTurn, reset }) => {
  return (
    <div>
      <h1>Welcome to Tic Tac Toe!</h1>
      <GameInfo game={game} waitingForMove={false}></GameInfo>
      <Board done={game.done} board={game.board} makeMove={takeTurn}></Board>
      <ButtonWrapper>
        <Button onClick={reset}>Reset</Button>
      </ButtonWrapper>
      <Log messages={log}></Log>
    </div>
  );
};

function mapStateToProps({ game }: AppState) {
  return game;
}

function mapDispatchToProps(dispatch: any) {
  return {
    takeTurn: (index: number) => {
      dispatch(takeTurn(index));
    },
    reset: () => {
      dispatch(reset());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
